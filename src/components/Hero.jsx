// Hero.jsx
'use client';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center relative px-2 md:px-0">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent mb-4"
      >
        AMAN RAJANI
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-semibold mb-12 mt-8 min-h-[2.5em]"
      >
        <Typewriter
          words={['Full Stack Developer', 'UI/UX Enthusiast', 'Open Source Contributor']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-lg text-gray-400 max-w-xl mx-auto mb-8"
      >
        Building beautiful, performant web experiences. Let’s create something amazing together!
      </motion.p>
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-400 to-pink-600 text-white rounded-lg font-bold shadow-lg text-xl transition-all duration-200 hover:shadow-pink-400/40"
      >
        Contact Me
      </motion.a>
    </section>
  );
}
