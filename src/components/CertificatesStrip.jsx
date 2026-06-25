'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function CertificatesStrip({ certificates }) {
  const router = useRouter();

  return (
    <div className="flex flex-row flex-wrap md:flex-nowrap justify-center gap-6">
      {certificates.map((cert, idx) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: idx * 0.1 }}
          className="w-72 max-w-full rounded-2xl card-hover flex flex-col overflow-hidden cursor-pointer group"
          onClick={() => router.push(`/certificate/${idx}`)}
          tabIndex={0}
          role="button"
          aria-label={`View ${cert.title}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') router.push(`/certificate/${idx}`);
          }}
        >
          <div className="relative overflow-hidden h-44 bg-[#0a0f1a]">
            <img
              src={cert.src}
              alt={cert.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-5">
            <p className="text-white text-sm font-semibold leading-snug">{cert.title}</p>
            {cert.year && <p className="text-gray-500 text-xs mt-1">{cert.year}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
