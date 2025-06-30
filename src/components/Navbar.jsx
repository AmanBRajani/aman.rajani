// Navbar.jsx
'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const router = useRouter();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur flex justify-between items-center px-8 py-4 shadow-lg border-b border-white/10">
      <motion.div
        whileHover={{ scale: 1.08, rotate: -2 }}
        whileTap={{ scale: 0.96, rotate: 2 }}
        className="font-extrabold text-2xl cursor-pointer bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent select-none"
        onClick={() => router.push('/')}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        AMAN RAJANI
      </motion.div>
      <div className="space-x-4 md:space-x-8 flex items-center">
        {navLinks.map((link, idx) => (
          <motion.div
            key={link.name}
            whileHover={{ scale: 1.12, y: -2, boxShadow: '0 4px 24px #fff5' }}
            whileTap={{ scale: 0.95, y: 2 }}
            transition={{ type: 'spring', stiffness: 400 }}
            className="inline-block"
          >
            <Link
              href={link.href}
              className="px-4 py-2 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-gradient-to-r hover:from-orange-400 hover:to-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
