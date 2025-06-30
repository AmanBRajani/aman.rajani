// Navbar.jsx
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur flex justify-between items-center px-8 py-4 shadow">
      <div className="font-bold text-xl">Aman Rajani</div>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
