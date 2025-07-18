import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Parse the incoming multipart/form-data
  const formData = await req.formData();
  const file = formData.get("file");
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // Forward the file to the FastAPI backend
  const backendForm = new FormData();
  backendForm.append("file", file, "image.jpg");

  const response = await fetch("http://localhost:8000/analyze/", {
    method: "POST",
    body: backendForm,
  });
  const data = await response.json();
  return NextResponse.json(data);
}
