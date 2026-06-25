'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home',     href: '/'           },
  { name: 'About',    href: '/about'      },
  { name: 'Ventures', href: '/projects'   },
  { name: 'Journey',  href: '/experience' },
  { name: 'Contact',  href: '/contact'    },
];

export default function Navbar() {
  const router   = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 border-b border-white/[0.05] shadow-xl shadow-black/40'
          : 'bg-transparent'
      } backdrop-blur-xl`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex justify-between items-center">

        {/* Logo */}
        <div
          className="font-black text-base tracking-tight cursor-pointer select-none"
          onClick={() => router.push('/')}
        >
          <span className="text-white">AMAN</span>
          <span className="text-blue-500">.</span>
          <span className="text-white">RAJANI</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm transition-colors duration-200 py-1 ${
                  active ? 'text-white' : 'text-gray-500 hover:text-white'
                }`}
              >
                {link.name}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-blue-500"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-[5px] -mr-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/[0.05] bg-black/98 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`py-3.5 text-sm transition-colors duration-200 border-b border-white/[0.04] ${
                    pathname === link.href ? 'text-white' : 'text-gray-500'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-5">
                <a
                  href="tel:+919428823321"
                  className="text-gray-600 text-sm py-2 block"
                  onClick={() => setMenuOpen(false)}
                >
                  +91 94288 23321
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
