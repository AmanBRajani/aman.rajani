// PDFPreview.jsx
'use client';
import { useEffect, useState } from 'react';

export default function PDFPreview({ file }) {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    // Convert the PDF file to a blob URL if it's a local file
    if (file instanceof File) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPdfUrl(file);
    }
  }, [file]);

  if (!pdfUrl) return <div className="text-gray-400 text-center">Loading preview…</div>;

  return (
    <iframe
      src={pdfUrl}
      title="PDF Preview"
      className="w-full h-[600px] border rounded shadow-lg bg-white"
      style={{ minHeight: 400 }}
    />
  );
}
