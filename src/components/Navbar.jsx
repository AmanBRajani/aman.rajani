// Navbar.jsx
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
// import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur flex justify-between items-center px-4 md:px-8 py-4 shadow-lg border-b border-white/10">
      <motion.div
        whileHover={{ scale: 1.08, rotate: -2 }}
        whileTap={{ scale: 0.96, rotate: 2 }}
        className="font-extrabold text-2xl cursor-pointer bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent select-none"
        onClick={() => router.push('/')}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        AMAN RAJANI
      </motion.div>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-6 h-0.5 bg-pink-500 mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-pink-500 mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-pink-500 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Desktop nav */}
      <div className="space-x-4 md:space-x-8 items-center hidden md:flex">
        {navLinks.map((link, idx) => (
          <div key={link.name} className="inline-block">
            <Link
              href={link.href}
              className="px-4 py-2 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              {link.name}
            </Link>
          </div>
        ))}
        {/* <ThemeToggle /> */}
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg flex flex-col items-center py-4 shadow-lg border-b border-pink-400/20 md:hidden animate-fade-in z-40">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block w-full text-center px-6 py-3 rounded-lg font-semibold text-lg text-pink-500 hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-600 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
