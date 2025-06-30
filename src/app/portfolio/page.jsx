// Portfolio Page
'use client';
import dynamic from 'next/dynamic';

const PDFPreview = dynamic(() => import('../../components/PDFPreview'), { ssr: false });

export default function Portfolio() {
  // For demo, you can add your PDF files in /public and list them here
  const pdfs = [
    { name: 'Resume', file: '/resume.pdf' },
    { name: 'Brand Identity Deck', file: '/brand-identity.pdf' },
  ];
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">🖼️ Portfolio</h1>
      <p className="mb-8">🧾 Work Samples & Case Studies<br/>Browse and preview my visual work and documentation. Each file is available for preview and download.</p>
      <div className="space-y-8">
        {pdfs.map((pdf, idx) => (
          <div key={idx} className="bg-zinc-900 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{pdf.name}</h2>
            <div className="mb-2">
              <PDFPreview file={pdf.file} />
            </div>
            <a href={pdf.file} download className="underline text-blue-400">Download</a>
          </div>
        ))}
      </div>
    </main>
  );
}
