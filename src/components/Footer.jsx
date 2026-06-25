'use client';
import Link from 'next/link';

const navLinks = [
  { name: 'About',    href: '/about'      },
  { name: 'Ventures', href: '/projects'   },
  { name: 'Journey',  href: '/experience' },
  { name: 'Contact',  href: '/contact'    },
];

const ventures = [
  { name: 'Veolve Tech',    href: 'https://veolve.com',          email: 'aman@veolve.com'       },
  { name: 'Voya Marketing', href: 'https://voyamarketing.in',    email: 'info@voyamarketing.in' },
  { name: 'Kartos Designz', href: 'https://kartosdesignz.in',   email: 'info@kartosdesignz.in' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-black mt-12">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-black text-xl tracking-tight block mb-3">
              <span className="text-white">AMAN</span>
              <span className="text-blue-500">.</span>
              <span className="text-white">RAJANI</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Entrepreneur &amp; Founder.<br />
              Ahmedabad &amp; Jamnagar.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.linkedin.com/in/aman-rajani/" target="_blank" rel="noopener" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/veolvetech" target="_blank" rel="noopener" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest mb-4">Ventures</p>
            <ul className="space-y-3">
              {ventures.map((v) => (
                <li key={v.name}>
                  <a href={v.href} target="_blank" rel="noopener" className="text-gray-500 hover:text-white text-sm transition-colors duration-200 block">
                    {v.name}
                  </a>
                  <a href={`mailto:${v.email}`} className="text-gray-600 hover:text-blue-400 text-xs transition-colors duration-200">
                    {v.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold text-gray-600 uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+919428823321" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                  +91 94288 23321
                </a>
              </li>
              <li>
                <a href="mailto:aman@veolve.com" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                  aman@veolve.com
                </a>
              </li>
              <li className="text-gray-600 text-sm">Ahmedabad &amp; Jamnagar, Gujarat</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Aman Rajani. All rights reserved.</p>
          <p className="text-gray-700 text-xs">Founder of Kartos Designz · Voya Marketing · Veolve Tech</p>
        </div>
      </div>
    </footer>
  );
}
