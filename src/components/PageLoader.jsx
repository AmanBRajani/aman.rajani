// src/components/PageLoader.jsx
'use client';
import { motion } from 'framer-motion';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#181824] via-[#23243a] to-[#0a0a23]">
      <motion.div
        initial={{ scale: 0, rotate: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], rotate: [0, 360], opacity: [0, 1, 1, 0.8, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 shadow-2xl flex items-center justify-center"
        style={{ boxShadow: '0 0 80px 16px #e52e71cc, 0 0 0 8px #fff2' }}
      >
        <motion.div
          className="absolute inset-4 rounded-full border-4 border-white/30 animate-spin-slow"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.span
          className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          AR
        </motion.span>
      </motion.div>
    </div>
  );
}
