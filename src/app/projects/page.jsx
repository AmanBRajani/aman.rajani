'use client';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4 md:px-0 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative rounded-2xl bg-gradient-to-br from-white/5 to-pink-200/5 p-8 md:p-12 shadow-2xl border border-white/10 overflow-hidden"
        style={{ boxShadow: '0 0 24px 2px #ff8a0033, 0 0 0 2px #e52e71, 0 0 0 8px #fff2' }}
      >
        <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{ boxShadow: '0 0 24px 2px #ff8a0033, 0 0 0 2px #e52e71, 0 0 0 8px #fff2' }} />
        <h1 className="text-4xl font-bold mb-4">🧠 Projects</h1>
        <p className="mb-8">💡 Featured Projects<br/>Here’s a glimpse of some of my favorite builds—each crafted with intent, creativity, and code.<br/>Scroll through to explore case studies and live previews. Each one tells a different story.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Card: Episcan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="bg-gradient-to-br from-white/10 to-pink-200/10 rounded-2xl p-8 shadow-2xl flex flex-col border border-white/10 hover:scale-105 hover:shadow-pink-400/30 transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-pink-400">Episcan</h2>
            <p className="mb-2 text-white/90">AI-based facial skin analysis and product recommendation platform.</p>
            <div className="text-sm mb-2 text-gray-300">Tech: Next.js, Python, TensorFlow</div>
            <div className="flex gap-4">
              <a href="#" className="underline text-blue-400">Live Demo</a>
              <a href="#" className="underline text-gray-400">GitHub</a>
            </div>
          </motion.div>
          {/* Project Card: Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', delay: 0.2 }}
            className="bg-gradient-to-br from-white/10 to-orange-200/10 rounded-2xl p-8 shadow-2xl flex flex-col border border-white/10 hover:scale-105 hover:shadow-orange-400/30 transition-transform duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-orange-400">Portfolio</h2>
            <p className="mb-2 text-white/90">Fully responsive, minimalistic portfolio template (this site!).</p>
            <div className="text-sm mb-2 text-gray-300">Tech: Next.js, TailwindCSS, Framer Motion</div>
            <div className="flex gap-4">
              <a href="#" className="underline text-blue-400">Live Demo</a>
              <a href="#" className="underline text-gray-400">GitHub</a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
