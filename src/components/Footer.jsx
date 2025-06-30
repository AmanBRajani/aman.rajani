// Footer.jsx
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-10 px-4 bg-gradient-to-t from-black/80 to-transparent text-center text-gray-300 border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <div className="text-lg font-bold bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent mb-4 md:mb-0">
          <Link href="/">Aman Rajani</Link>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm items-center">
          <Link href="/about" className="hover:text-orange-400 transition">About</Link>
          <Link href="/projects" className="hover:text-pink-400 transition">Projects</Link>
          <Link href="/portfolio" className="hover:text-orange-400 transition">Portfolio</Link>
          <Link href="/contact" className="hover:text-pink-400 transition">Contact</Link>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm items-center mt-4 md:mt-0">
          <a href="mailto:amanbrajani18@gmail.com" className="hover:text-orange-400 transition">amanbrajani18@gmail.com</a>
          <a href="tel:+919825168321" className="hover:text-pink-400 transition">+91 98251 68321</a>
          <a href="https://linkedin.com/in/aman-rajani" target="_blank" rel="noopener" className="hover:text-orange-400 transition">LinkedIn</a>
          <a href="https://github.com/AmanBRajani" target="_blank" rel="noopener" className="hover:text-pink-400 transition">GitHub</a>
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-6">© {new Date().getFullYear()} Aman Rajani. All rights reserved.</div>
    </footer>
  );
}
