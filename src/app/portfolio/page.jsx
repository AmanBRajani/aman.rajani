// Portfolio Page (React + TailwindCSS, no Framer Motion)
'use client';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const certificates = [
  { src: '/certificates/cert1.jpg', title: 'AI Specialist', year: '2024' },
  { src: '/certificates/cert2.jpg', title: 'Web Dev Pro', year: '2023' },
  { src: '/certificates/cert3.jpg', title: 'Python Expert', year: '2023' },
  { src: '/certificates/cert4.jpg', title: 'LLM Innovator', year: '2024' },
];

export default function Portfolio() {
  const [numPages, setNumPages] = useState(null);
  return (
    <main className="max-w-5xl mx-auto py-16 px-4 md:px-8 w-full">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">📄 Portfolio & Resume</h1>
        <p className="mb-2 text-lg text-gray-300">View and download my resume and certificates below.</p>
      </div>
      <div className="bg-white/5 rounded-2xl p-8 shadow-xl border border-pink-400/20 flex flex-col items-center mb-12">
        <Document file="/AmanRajani_Resume.pdf" onLoadSuccess={({ numPages }) => setNumPages(numPages)} className="w-full flex flex-col items-center">
          <Page pageNumber={1} width={600} />
        </Document>
        <a href="/AmanRajani_Resume.pdf" download className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400">Download PDF</a>
      </div>
      <div className="mb-8 text-2xl font-bold text-pink-400">Certificates</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <div key={cert.title} className="rounded-xl overflow-hidden border border-pink-400/20 bg-white/5 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
            <img src={cert.src} alt={cert.title} className="w-full h-32 object-cover group-hover:brightness-110 group-hover:blur-[1px] transition duration-300" />
            <div className="p-2 text-center">
              <div className="font-semibold text-pink-400 text-sm">{cert.title}</div>
              <div className="text-xs text-gray-400">{cert.year}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
