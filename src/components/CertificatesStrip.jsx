// CertificatesStrip.jsx
'use client';

import { useRouter } from 'next/navigation';

export default function CertificatesStrip({ certificates }) {
  const router = useRouter();
  return (
    <section className="w-full max-w-[1440px] mx-auto mt-8 px-4 md:px-12">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-pink-400 flex items-center gap-2">
        {/* <span role="img" aria-label="cert">🎓</span> Certificates */}
      </h2>
      <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-8 overflow-x-auto pb-4 hide-scrollbar">
        {certificates.map((cert, idx) => (
          <div
            key={cert.title}
            className="w-72 max-w-full bg-white/5 rounded-xl border border-pink-400/20 shadow-lg flex flex-col items-center p-6 hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0"
            onClick={() => router.push(`/certificate/${idx}`)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${cert.title}`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') router.push(`/certificate/${idx}`); }}
          >
            <img src={cert.src} alt={cert.title} className="w-full h-40 object-cover rounded-lg mb-4 bg-white/10" />
            <div className="font-semibold text-pink-400 text-base text-center break-words">{cert.title}</div>
            {cert.year && <div className="text-xs text-gray-400">{cert.year}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
