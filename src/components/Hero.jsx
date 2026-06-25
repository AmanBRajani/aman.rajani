'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 120, damping: 28 });
  const y = useSpring(rawY, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const move = (e) => {
      const rect = el.getBoundingClientRect();
      rawX.set(e.clientX - rect.left);
      rawY.set(e.clientY - rect.top);
    };
    el.addEventListener('mousemove', move);
    return () => el.removeEventListener('mousemove', move);
  }, [rawX, rawY]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden px-6 md:px-16 pb-16 md:pb-24"
    >
      {/* Cursor spotlight */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 700,
          height: 700,
          background:
            'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)',
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      {/* Top metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute top-8 left-6 md:left-16 right-6 md:right-16 flex justify-between items-center"
      >
        <span className="text-gray-600 text-[11px] uppercase tracking-[0.22em]">
          Ahmedabad · Jamnagar
        </span>
        <span className="text-gray-700 text-[11px] uppercase tracking-[0.22em]">
          Est. 2022
        </span>
      </motion.div>

      {/* Name — the centrepiece */}
      <div className="relative z-10 w-full">
        <div className="mb-4 md:mb-5">
          {['AMAN', 'RAJANI'].map((word, i) => (
            <div key={word} className="overflow-hidden leading-[0.86]">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 1.05,
                  delay: 0.08 + i * 0.12,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="text-[19vw] sm:text-[17vw] md:text-[14vw] font-black text-white tracking-tighter select-none"
              >
                {word}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Animated rule */}
        <motion.div
          className="h-px bg-white/12 mb-8 md:mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ originX: 0 }}
          transition={{ duration: 1.5, delay: 0.42, ease: [0.33, 1, 0.68, 1] }}
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8"
        >
          {/* Tagline */}
          <div>
            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-[300px]">
              Building Businesses Through<br />
              Innovation, Creativity &amp; Growth
            </p>
            <p className="text-gray-600 text-xs mt-3 tracking-widest uppercase">
              Founder · Veolve Tech · Voya Marketing · Kartos Designz
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-14">
            {[
              { value: '3',   label: 'Ventures' },
              { value: '50+', label: 'Projects'  },
              { value: '3+',  label: 'Years'     },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-black text-white tabular-nums">
                  {s.value}
                </div>
                <div className="text-gray-600 text-[10px] uppercase tracking-[0.18em] mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-6 items-center">
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-white text-sm"
            >
              <span className="border-b border-white/25 pb-0.5 group-hover:border-white/70 transition-colors duration-300">
                Explore Ventures
              </span>
              <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                ↗
              </span>
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
            >
              <span>Contact</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
