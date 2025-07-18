import io
from fastapi import FastAPI, File, UploadFile, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse
from PIL import Image, ImageDraw

import os
from ultralytics import YOLO

app = FastAPI()

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"] ,
    allow_headers=["*"] ,
)

# Load models at startup
acne_model = None
darkcircle_model = None

@app.on_event("startup")
def load_models():
    global acne_model, darkcircle_model
    acne_model = YOLO(os.path.join("backend", "models", "acne.pt"))
    darkcircle_model = YOLO(os.path.join("backend", "models", "darkcircle.pt"))


@app.post("/analyze/")
async def analyze_image(file: UploadFile = File(...)):
    # Read image
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")

    # Run inference with both models
    acne_results = acne_model.predict(image, save=False, imgsz=640, conf=0.25)
    darkcircle_results = darkcircle_model.predict(image, save=False, imgsz=640, conf=0.25)


    # Draw both acne and dark circle detections on the original image
    result_pil = image.copy()
    draw = ImageDraw.Draw(result_pil)
    # Draw acne boxes in red
    for box in acne_results[0].boxes.xyxy.cpu().numpy():
        x1, y1, x2, y2 = box
        draw.rectangle([x1, y1, x2, y2], outline="red", width=3)

    # Draw dark circle boxes in blue and print coordinates for debugging
    if hasattr(darkcircle_results[0], "boxes") and hasattr(darkcircle_results[0].boxes, "xyxy"):
        darkcircle_boxes = darkcircle_results[0].boxes.xyxy.cpu().numpy()
        print("Dark circle boxes:", darkcircle_boxes)
        for box in darkcircle_boxes:
            x1, y1, x2, y2 = box
            draw.rectangle([x1, y1, x2, y2], outline="blue", width=3)
        if len(darkcircle_boxes) == 0:
            print("No dark circle detections found by model.")
    else:
        print("darkcircle_results[0] has no boxes or xyxy attribute!", darkcircle_results[0])

    # Always draw a test blue rectangle for debug (top-left corner)
    draw.rectangle([10, 10, 60, 60], outline="blue", width=3)

    result_pil.save("backend/output.jpg")

    # Generate description without numbers
    acne_count = len(acne_results[0].boxes)
    darkcircle_count = len(darkcircle_results[0].boxes)
    desc_parts = []
    if acne_count > 0:
        desc_parts.append("Acne detected")
    if darkcircle_count > 0:
        desc_parts.append("Dark circles detected")
    if not desc_parts:
        description = "No acne or dark circles detected."
    else:
        description = " and ".join(desc_parts) + "."

    return JSONResponse({
        "description": description,
        "result_image_url": "http://localhost:8000/result"
    })

@app.get("/result")
def get_result_image():
    img_path = os.path.join("backend", "output.jpg")
    if not os.path.exists(img_path):
        return Response(status_code=404)
    return FileResponse(img_path, media_type="image/jpeg")
