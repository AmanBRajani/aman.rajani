// PDFPreview.jsx
'use client';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFPreview({ file }) {
  return (
    <Document file={file} className="border rounded overflow-hidden">
      <Page pageNumber={1} width={400} />
    </Document>
  );
}
