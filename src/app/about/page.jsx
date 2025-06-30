'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 md:px-0 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative rounded-2xl bg-gradient-to-br from-white/5 to-pink-200/5 p-8 md:p-12 shadow-2xl border border-white/10 overflow-hidden"
        style={{ boxShadow: '0 0 24px 2px #ff8a0033, 0 0 0 2px #e52e71, 0 0 0 8px #fff2' }}
      >
        <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{ boxShadow: '0 0 24px 2px #ff8a0033, 0 0 0 2px #e52e71, 0 0 0 8px #fff2' }} />
        <h1 className="text-4xl font-bold mb-4">🧑‍💼 About</h1>
        <p className="text-2xl font-semibold mb-2">👋 Hey, I’m Aman Rajani</p>
        <p className="mb-4">I’m a multidisciplinary designer and developer crafting immersive digital experiences.</p>
        <p className="mb-4">With a background in <b>AI, Web Development, and Branding</b>, I combine creativity with logic to build designs that don’t just look good—but work hard.</p>
        <p className="mb-4">Whether it’s designing a stunning brand identity, building intelligent web apps, or crafting pixel-perfect social media graphics, I believe in creating work that’s strategic, scalable, and human-centered.</p>
        <p className="mb-4">🚀 Currently growing <b>Kartos</b>, my creative agency, and helping brands scale their presence with smart design & marketing systems.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2">💼 What I Do</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Web Design & Development (Next.js, React, Tailwind)</li>
          <li>AI-Powered Web Apps</li>
          <li>Brand Identity Design</li>
          <li>Social Media Design</li>
          <li>Creative Automation & Workflows</li>
        </ul>
        <p className="mb-2">📍 Based in India · Working globally</p>
        <p>📧 <a href="mailto:amanbrajani18@gmail.com" className="underline">amanbrajani18@gmail.com</a></p>
      </motion.div>
    </main>
  );
}
