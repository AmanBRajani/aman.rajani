// src/app/certificate/[id]/page.jsx
'use client';
import { useRouter, useParams } from 'next/navigation';
import Head from 'next/head';

// Fallback certificate data (should match main page)
const fallbackCertificates = [
  {
    src: '/indus_certifcate.jpg',
    title: 'Web Application Development and Security',
    description: 'A comprehensive certification from Indus University covering secure web application development practices, including authentication, authorization, and modern security protocols. Awarded for excellence in both theory and practical implementation.',
    // year: '2024',
  },
  {
    src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e45b8d49-e40e-4228-9e62-895b09515d90.jpg',
    title: 'Web Development Masterclass',
    description: 'Certification from Udemy for completing an advanced masterclass in web development, focusing on full-stack technologies, responsive design, and deployment best practices.',
    // year: '2023',
  },
];

export default function CertificateDetail() {
  const params = useParams();
  const router = useRouter();

  // Find certificate by index (id)
  const certId = parseInt(params.id, 10);
  const cert = fallbackCertificates[certId];

  return (
    <>
      <Head>
        <title>{cert ? cert.title + ' | Certificate' : 'Certificate Not Found | Certificate'}</title>
      </Head>
      {!cert ? (
        <main className="flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-3xl font-bold mb-4 text-pink-400">Certificate Not Found</h1>
          <button onClick={() => router.back()} className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow hover:scale-105 transition">Go Back</button>
        </main>
      ) : (
        <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-gradient-to-br from-[#181824] via-[#23243a] to-[#0a0a23]">
          <div className="max-w-lg w-full bg-white/10 rounded-2xl shadow-2xl border border-pink-400/30 p-8 flex flex-col items-center">
            <img src={cert.src} alt={cert.title} className="w-full h-80 object-contain rounded-xl mb-6 bg-white/20" />
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-center">{cert.title}</h1>
            {/* <div className="text-xs text-gray-400 mb-4">{cert.year}</div> */}
            <p className="text-lg text-gray-200 text-center mb-6">{cert.description}</p>
            <button onClick={() => router.back()} className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow hover:scale-105 transition">Go Back</button>
          </div>
        </main>
      )}
    </>
  );
}
