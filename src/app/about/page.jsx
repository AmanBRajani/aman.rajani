'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const inView = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const values = [
  {
    n: '01',
    title: 'Design-First Thinking',
    desc: 'Every business deserves a brand that communicates trust and quality. Design is not decoration — it\'s strategy.',
  },
  {
    n: '02',
    title: 'Marketing That Converts',
    desc: 'Not just impressions and reach — but real revenue growth. Every campaign I build is tied to a business outcome.',
  },
  {
    n: '03',
    title: 'Technology as an Enabler',
    desc: 'The right tech stack can 10x a business. I build systems that remove friction, automate repetition, and free people to focus on what matters.',
  },
  {
    n: '04',
    title: 'Long-Term Thinking',
    desc: 'Quick wins are good. Sustainable businesses are better. I build ventures and partnerships designed to last.',
  },
];

export default function About() {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-20 md:pt-28 pb-24 md:pb-36">

        {/* Opening */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <p className="text-gray-600 text-[11px] uppercase tracking-[0.22em] mb-8">
            The Founder
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.9] mb-6">
            Aman<br />Rajani.
          </h1>
          <p className="text-gray-500 text-base max-w-md leading-relaxed">
            Entrepreneur from Ahmedabad &amp; Jamnagar. Founder of three companies across design,
            marketing, and technology.
          </p>
        </motion.div>

        {/* Two column — photo + bio */}
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start mb-24 md:mb-32">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="md:col-span-2 relative md:sticky md:top-24"
          >
            <img
              src="/aman-rajani.jpg"
              alt="Aman Rajani"
              className="w-full rounded-2xl object-cover"
              style={{ filter: 'grayscale(15%) contrast(1.05) brightness(0.9)' }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

            {/* Stats below photo */}
            <div className="grid grid-cols-2 gap-px mt-px bg-white/[0.05] rounded-xl overflow-hidden">
              {[
                { value: '3',   label: 'Ventures'  },
                { value: '50+', label: 'Projects'   },
                { value: '3+',  label: 'Years'      },
                { value: '2',   label: 'Cities'     },
              ].map((s) => (
                <div key={s.label} className="bg-black p-5 text-center">
                  <p className="text-2xl font-black text-white tabular-nums">{s.value}</p>
                  <p className="text-gray-600 text-[10px] uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={inView}
            initial="hidden"
            animate="visible"
            className="md:col-span-3 flex flex-col gap-7"
          >
            <blockquote className="text-2xl md:text-3xl font-black text-white leading-snug tracking-tight border-l-2 border-blue-600 pl-6">
              "Every business deserves to look great, market effectively, and run on smart systems."
            </blockquote>

            <div className="space-y-5 text-gray-400 leading-relaxed text-[15px]">
              <p>
                I'm Aman Rajani — an entrepreneur driven by a deep passion for creativity,
                marketing, and technology. My journey as a founder began with a simple belief:
                that every business deserves to look great, market effectively, and run on
                smart systems.
              </p>
              <p>
                I started <span className="text-white font-semibold">Kartos Designz</span> as
                a design agency to help businesses build strong and memorable brands. Seeing how
                brand clarity transformed our clients, I realised they also needed consistent
                marketing — which inspired the launch of{' '}
                <span className="text-white font-semibold">Voya Marketing</span>.
              </p>
              <p>
                As I worked with more businesses, I saw a recurring gap: many needed technology
                alongside branding and marketing. That insight led me to establish{' '}
                <span className="text-white font-semibold">Veolve Tech</span> — a company that
                streamlines operations, automates workflows, and helps businesses scale through
                custom software and AI.
              </p>
              <p>
                Together, these three ventures form a unified ecosystem — giving businesses
                everything they need to grow, under one roof, with one trusted partner.
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-4 flex-wrap pt-2">
              <a
                href="https://www.linkedin.com/in/aman-rajani/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
                </svg>
                LinkedIn ↗
              </a>
              <a
                href="https://www.instagram.com/veolvetech"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram ↗
              </a>
              <a
                href="mailto:aman@veolve.com"
                className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
              >
                aman@veolve.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          variants={inView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <p className="text-gray-600 text-[11px] uppercase tracking-[0.22em]">Philosophy</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-12">
            What I Believe In
          </h2>
        </motion.div>

        <div className="space-y-0">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="border-t border-white/[0.06] py-7 flex gap-5 md:gap-8 items-start group"
            >
              <span className="text-gray-700 text-xs font-mono pt-1 w-7 shrink-0">{v.n}</span>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-200 transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xl">{v.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* CTA */}
        <motion.div
          variants={inView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <p className="text-gray-600 text-sm">
            Interested in working together?
          </p>
          <div className="flex gap-6">
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-white text-sm"
            >
              <span className="border-b border-white/25 pb-0.5 group-hover:border-white/60 transition-colors">
                My Ventures
              </span>
              <span className="text-blue-400 group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              Get in Touch →
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
