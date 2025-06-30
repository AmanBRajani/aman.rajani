// src/app/page.jsx

import dynamic from 'next/dynamic';
import About from './about/page';
import Projects from './projects/page';
import Contact from './contact/page';
import Hero from '../components/Hero';

export const metadata = {
  title: 'Home | Aman Rajani',
  icons: {
    icon: '/favicon.svg', // Use the new SVG favicon
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#181824] via-[#23243a] to-[#0a0a23]">
      {/* Abstract animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow shadow-2xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-white/20 rounded-full blur-2xl animate-float shadow-2xl" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-tr from-white/30 to-pink-200/20 rounded-full blur-2xl animate-spin-slow" />
      </div>
      <Hero />
      <section className="mt-24"><About /></section>
      <section className="mt-24"><Projects /></section>
      {/* Portfolio download section */}
      <section className="mt-24 flex flex-col items-center">
        <div className="relative rounded-2xl bg-gradient-to-br from-white/5 to-pink-200/5 p-8 md:p-12 shadow-2xl border border-pink-400/40 flex flex-col items-center overflow-hidden max-w-3xl w-full">
          <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{ boxShadow: '0 0 24px 2px #ff8a0033, 0 0 0 2px #e52e71, 0 0 0 8px #fff2' }} />
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">🖼️ Portfolio</h1>
          <p className="mb-8 text-lg text-gray-300">🧾 Work Samples & Case Studies<br/>Download my resume and other work samples below.</p>
          <a href="/AmanRajani_Resume.pdf" download className="underline text-blue-400 mt-2 text-xl font-semibold bg-white/10 px-6 py-3 rounded-lg shadow hover:bg-pink-400/20 transition">Download Resume (PDF)</a>
        </div>
      </section>
      <section className="mt-24"><Contact /></section>
    </main>
  );
}
