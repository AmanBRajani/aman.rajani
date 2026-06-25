'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const PDFPreview = dynamic(() => import('../../components/PDFPreview'), { ssr: false });

const certificates = [
  { src: '/indus_certifcate.jpg',        title: 'Indus Certificate',    year: '2024' },
  { src: '/certificates/cert1.jpg',      title: 'AI Specialist',        year: '2024' },
  { src: '/certificates/cert2.jpg',      title: 'Web Dev Pro',          year: '2023' },
  { src: '/certificates/cert3.jpg',      title: 'Python Expert',        year: '2023' },
  { src: '/certificates/cert4.jpg',      title: 'LLM Innovator',        year: '2024' },
];

export default function Portfolio() {
  return (
    <main className="max-w-5xl mx-auto px-5 md:px-10 py-24 w-full min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <span className="section-label mb-6 inline-flex">Resume & Portfolio</span>
        <h1 className="text-4xl md:text-5xl font-black text-white mt-4 mb-3 tracking-tight">
          Portfolio & Resume
        </h1>
        <p className="text-gray-400">View and download my resume and credentials below.</p>
      </motion.div>

      {/* PDF Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl card-hover p-8 flex flex-col items-center mb-12"
      >
        <PDFPreview />
        <a
          href="/AmanRajani_Resume.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download PDF
        </a>
      </motion.div>

      {/* Certificates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Certificates</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="rounded-xl overflow-hidden card-hover group"
            >
              <img
                src={cert.src}
                alt={cert.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="p-3">
                <p className="text-white text-xs font-semibold">{cert.title}</p>
                <p className="text-gray-500 text-xs">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
