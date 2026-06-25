'use client';
import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute w-[400px] h-[400px] bg-blue-700/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Logo mark */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer spinning ring */}
        <motion.div
          className="absolute w-24 h-24 rounded-full border border-blue-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{
            background: 'conic-gradient(from 0deg, transparent 70%, rgba(59,130,246,0.6) 100%)',
          }}
        />

        {/* Inner spinning ring (counter) */}
        <motion.div
          className="absolute w-16 h-16 rounded-full border border-blue-400/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          style={{
            background: 'conic-gradient(from 180deg, transparent 60%, rgba(96,165,250,0.4) 100%)',
          }}
        />

        {/* Centre logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center"
        >
          <span className="text-lg font-black text-blue-400 tracking-tight">AR</span>
        </motion.div>
      </div>

      {/* Name */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-white font-black text-xl tracking-tight mb-1"
      >
        AMAN<span className="text-blue-500">.</span>RAJANI
      </motion.p>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-gray-600 text-xs uppercase tracking-[0.2em]"
      >
        Entrepreneur &nbsp;·&nbsp; Founder
      </motion.p>

      {/* Loading bar */}
      <motion.div
        className="absolute bottom-10 w-32 h-px bg-white/5 overflow-hidden rounded-full"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}
