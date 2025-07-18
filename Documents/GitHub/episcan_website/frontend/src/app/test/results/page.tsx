"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import type { RootState } from "../../../lib/store";

export default function Results() {
  const image = useSelector((state: RootState) => state.image.image);
  const [result, setResult] = React.useState<string | null>(null);
  const [markedImage, setMarkedImage] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    if (image) {
      // Convert base64 image to Blob
      const byteString = atob(image.split(",")[1]);
      const mimeString = image.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });
      const formData = new FormData();
      formData.append("file", blob, "image.jpg");

      // Always use the Next.js API route for proxying
      fetch("/api/skin-analyze", {
        method: "POST",
        body: formData,
      })
        .then(async (res) => {
          if (!res.ok) {
            const text = await res.text();
            console.error("API error:", res.status, text);
            setResult("An error occurred. Please try again.");
            setLoading(false);
            return null;
          }
          try {
            return await res.json();
          } catch (e) {
            const text = await res.text();
            console.error("Failed to parse JSON:", text);
            setResult("An error occurred. Please try again.");
            setLoading(false);
            return null;
          }
        })
        .then((data) => {
          if (!data) return;
          setResult(data.description);
          if (data.result_image_url) {
            setMarkedImage(data.result_image_url);
          }
          setLoading(false);
        });
    }
  }, [image]);

  if (!image) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] bg-clip-text text-transparent mb-8">
          Analysis Results
        </h1>
        <div className="bg-[#181824] p-8 rounded-lg shadow-xl text-white max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">No image found</h2>
          <p className="text-lg mb-6">Please try again by uploading or capturing a photo.</p>
          <button
            className="bg-[#7f5af0] hover:bg-[#2cb67d] text-white font-bold py-2 px-6 rounded-lg transition-colors"
            onClick={() => router.push('/test')}
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] bg-clip-text text-transparent mb-8">
        Analysis Results
      </h1>
      {image && (
        <div className="relative mb-8">
          <img
            src={image}
            alt="Analyzing..."
            className="max-w-xs rounded-lg shadow-lg blur-sm"
            style={{ filter: "blur(12px)" }}
          />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-[#7f5af0] border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      )}
      {markedImage && !loading && (
        <div className="mb-8">
          <img
            src={markedImage}
            alt="Detection Result"
            className="max-w-xs rounded-lg shadow-lg"
          />
        </div>
      )}
      {result && (
        <div className="bg-[#181824] p-8 rounded-lg shadow-xl text-white max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Result</h2>
          <p className="text-lg">{result}</p>
        </div>
      )}
    </section>
  );
}
