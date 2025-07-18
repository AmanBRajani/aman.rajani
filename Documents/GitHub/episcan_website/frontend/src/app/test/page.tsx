"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../lib/imageSlice";
import type { RootState } from "../../lib/store";

export default function TestNow() {
  const router = useRouter();
  const dispatch = useDispatch();
  const image = useSelector((state: RootState) => state.image.image);
  const [showCamera, setShowCamera] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const streamRef = React.useRef<MediaStream | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => dispatch(setImage(ev.target?.result as string));
      reader.readAsDataURL(file);
    }
  }

  React.useEffect(() => {
    if (showCamera && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        });
    } else if (!showCamera && streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
    };
  }, [showCamera]);

  function handleCapture() {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        dispatch(setImage(canvas.toDataURL('image/png')));
        setShowCamera(false);
      }
    }
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] bg-clip-text text-transparent mb-4">
        Test Your Skin Health
      </h1>
      <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
        Upload a photo or use your camera to get instant AI-powered skin health analysis. No login required.
      </p>
      <div className="mt-8 flex flex-col gap-4 items-center">
        {!image && (
          <>
            <button
              className="bg-[#7f5af0] hover:bg-[#2cb67d] text-white font-bold py-3 px-8 rounded-lg transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              Upload Photo
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              className="bg-[#2cb67d] hover:bg-[#7f5af0] text-white font-bold py-3 px-8 rounded-lg transition-colors"
              onClick={() => setShowCamera(true)}
            >
              Take Photo
            </button>
          </>
        )}
        {showCamera && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-[#181824] p-6 rounded-lg flex flex-col items-center">
              <video ref={videoRef} className="rounded-lg mb-4" autoPlay playsInline width={320} height={240} />
              <div className="flex gap-4">
                <button
                  className="bg-[#2cb67d] hover:bg-[#7f5af0] text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  onClick={handleCapture}
                >
                  Capture
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  onClick={() => setShowCamera(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {image && (
          <>
            <div className="mt-6">
              <img src={image} alt="Preview" className="max-w-xs rounded-lg shadow-lg" />
            </div>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-[#7f5af0] hover:bg-[#2cb67d] text-white font-bold py-2 px-6 rounded-lg transition-colors"
                onClick={() => router.push('/test/results')}
              >
                Test Now
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                onClick={() => dispatch(setImage(null))}
              >
                Clear
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
