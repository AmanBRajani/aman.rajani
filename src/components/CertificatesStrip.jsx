// CertificatesStrip.jsx
'use client';

export default function CertificatesStrip({ certificates }) {
  return (
    <section className="w-full max-w-[1440px] mx-auto mt-8 px-4 md:px-12">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-pink-400 flex items-center gap-2">
        {/* <span role="img" aria-label="cert">🎓</span> Certificates */}
      </h2>
      <div className="flex gap-8 overflow-x-auto pb-4 hide-scrollbar">
        {certificates.map((cert) => (
          <div key={cert.title} className="min-w-[180px] bg-white/5 rounded-xl border border-pink-400/20 shadow-lg flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img src={cert.src} alt={cert.title} className="w-28 h-28 object-cover rounded-lg mb-2" />
            <div className="font-semibold text-pink-400 text-sm">{cert.title}</div>
            <div className="text-xs text-gray-400">{cert.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
