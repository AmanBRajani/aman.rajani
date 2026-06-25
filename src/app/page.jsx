'use client';

import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Link from 'next/link';

const inView = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const ventures = [
  {
    name: 'Veolve Tech',
    category: 'IT & AI Company',
    role: 'Founder',
    founded: 'Nov 2025',
    description:
      'Custom software, AI automation, and digital transformation — helping businesses streamline operations and scale faster.',
  },
  {
    name: 'Voya Marketing',
    category: 'Marketing Agency',
    role: 'Founding Partner & CEO',
    founded: 'Jul 2025',
    description:
      'Full-service marketing driving measurable growth through social media, performance ads, SEO, and strategy.',
  },
  {
    name: 'Kartos Designz',
    category: 'Design Studio',
    role: 'Founding Partner & CEO',
    founded: 'Nov 2022',
    description:
      'A premium design studio crafting brand identities, UI/UX, and visual communication that makes businesses memorable.',
  },
];

const milestones = [
  { year: 'Nov 2022',      label: 'Founded Kartos Designz'  },
  { year: '2021–2025',     label: 'B.Tech CSE, Indus University' },
  { year: 'Feb–May 2024',  label: 'Intern, Silver Touch Technologies' },
  { year: 'Jul 2025',      label: 'Founded Voya Marketing'   },
  { year: 'Jul–Jan 2026',  label: 'Backend Dev, DigitalRooar' },
  { year: 'Nov 2025',      label: 'Founded Veolve Tech'      },
];

export default function Home() {
  return (
    <main className="relative bg-black overflow-x-hidden">
      <Hero />

      {/* ── Ventures ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-36">
        <motion.div
          variants={inView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex items-baseline justify-between mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Ventures
          </h2>
          <Link
            href="/projects"
            className="text-gray-600 text-sm hover:text-white transition-colors flex items-center gap-1.5"
          >
            All details <span>→</span>
          </Link>
        </motion.div>

        {ventures.map((v, idx) => (
          <motion.div
            key={v.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
            className="group border-t border-white/[0.06] py-8 md:py-10 relative"
          >
            {/* Blue left indicator on hover */}
            <div className="absolute left-0 top-0 w-px bg-blue-500 h-0 group-hover:h-full transition-all duration-500" />

            <div className="flex gap-6 md:gap-10 pl-0 md:pl-4">
              <span className="text-gray-700 text-xs font-mono pt-2.5 w-5 shrink-0">
                0{idx + 1}
              </span>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-blue-200 transition-colors duration-300">
                    {v.name}
                  </h3>
                  <span className="text-gray-600 text-sm md:text-right shrink-0">
                    {v.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  {v.role} · Est. {v.founded}
                </p>

                {/* Always visible on mobile, hover-reveal on desktop */}
                <div className="overflow-hidden max-h-[200px] md:max-h-0 md:group-hover:max-h-[200px] transition-all duration-500 ease-out">
                  <p className="text-gray-500 text-sm leading-relaxed mt-3 md:mt-4 max-w-2xl">
                    {v.description}
                  </p>
                </div>
              </div>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-blue-400 transition-colors duration-200 pt-1.5 shrink-0 text-lg"
              >
                ↗
              </Link>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-white/[0.06]" />
      </section>

      {/* ── About ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-24 md:pb-36">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left — editorial text */}
          <motion.div
            variants={inView}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-gray-600 text-[11px] uppercase tracking-[0.22em] mb-8">
              The Founder
            </p>
            <blockquote className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-8">
              "I build businesses. Not one. Three. Design. Marketing. Technology."
            </blockquote>
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm Aman Rajani — an entrepreneur driven by a belief that every business deserves
              to look great, market effectively, and run on smart systems. I started Kartos Designz
              to help brands stand out. Saw they needed consistent marketing, so I launched Voya.
              Saw they needed technology, so I built Veolve Tech.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Three ventures. One unified ecosystem. Ahmedabad &amp; Jamnagar.
            </p>
            <div className="flex gap-6">
              <Link
                href="/about"
                className="group flex items-center gap-2 text-white text-sm"
              >
                <span className="border-b border-white/25 pb-0.5 group-hover:border-white/60 transition-colors duration-300">
                  Read My Story
                </span>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">↗</span>
              </Link>
              <Link
                href="/experience"
                className="text-gray-600 hover:text-gray-300 text-sm transition-colors duration-200"
              >
                My Journey →
              </Link>
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <img
              src="/aman-rajani.jpg"
              alt="Aman Rajani"
              className="w-full rounded-2xl object-cover grayscale contrast-110 brightness-90"
              style={{ filter: 'grayscale(20%) contrast(1.05) brightness(0.92)' }}
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-24 md:pb-36">
        <motion.div
          variants={inView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-6 mb-2">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <p className="text-gray-600 text-[11px] uppercase tracking-[0.22em]">Timeline</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight text-center mt-6 mb-0">
            The Journey
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="border-t border-white/[0.06] py-5 flex flex-col sm:flex-row sm:items-baseline sm:gap-8 gap-1"
            >
              <span className="text-blue-500/70 text-xs font-mono whitespace-nowrap sm:w-28 sm:shrink-0">
                {m.year}
              </span>
              <span className="text-gray-300 text-sm font-medium">{m.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="border-t border-white/[0.06]" />

        <div className="mt-8 text-center">
          <Link
            href="/experience"
            className="text-gray-600 hover:text-white text-sm transition-colors duration-200"
          >
            Full journey →
          </Link>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-28 md:pb-40">
        <motion.div
          variants={inView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="border-t border-white/[0.06] pt-16 md:pt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Have a business idea?<br />
                <span className="text-gray-600 font-light">Let's build it.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 shrink-0">
              <Link
                href="/contact"
                className="group flex items-center gap-3 text-white"
              >
                <span className="text-lg font-bold border-b border-white/25 pb-0.5 group-hover:border-white/60 transition-colors duration-300">
                  Start a conversation
                </span>
                <span className="text-blue-400 text-xl group-hover:translate-x-1 transition-transform">↗</span>
              </Link>
              <a
                href="tel:+919428823321"
                className="text-gray-600 hover:text-gray-300 text-sm transition-colors"
              >
                or call +91 94288 23321
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
