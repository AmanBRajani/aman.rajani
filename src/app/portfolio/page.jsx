// Portfolio Page
'use client';
import { motion } from 'framer-motion';

export default function Portfolio() {
  // For demo, you can add your PDF files in /public and list them here
  const pdfs = [
    { name: 'Resume', file: '/AmanRajani_Resume.pdf' },
  ];
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 md:px-0 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative rounded-2xl bg-gradient-to-br from-white/5 to-pink-200/5 p-8 md:p-12 shadow-2xl border border-pink-400/40 flex flex-col items-center overflow-hidden"
        style={{ boxShadow: '0 0 24px 2px #ff8a0033, 0 0 0 2px #e52e71, 0 0 0 8px #fff2' }}
      >
        <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{ boxShadow: '0 0 24px 2px #ff8a0033, 0 0 0 2px #e52e71, 0 0 0 8px #fff2' }} />
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">🖼️ Portfolio</h1>
        <p className="mb-8 text-lg text-gray-300">🧾 Work Samples & Case Studies<br/>Browse and download my visual work and documentation. Each file is available for download below.</p>
        <div className="space-y-8 w-full">
          {pdfs.map((pdf, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring', delay: idx * 0.2 }}
              className="bg-gradient-to-br from-white/10 to-pink-200/10 rounded-2xl p-8 shadow-2xl border border-pink-400/40 flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold mb-2 text-pink-400">{pdf.name}</h2>
              <a
                href={pdf.file}
                download
                className="inline-block px-6 py-2 mt-4 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                Download PDF
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
