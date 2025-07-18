"use client";

import Link from "next/link";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Test", href: "/test" },
  { name: "Results", href: "/results" },
  { name: "Products", href: "/products" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#0f0f1d]/80 to-transparent backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl tracking-tight bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] bg-clip-text text-transparent">Episcan</Link>
        <div className="flex gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-md font-medium transition-colors hover:bg-[#232946]/60 hover:text-[#7f5af0]",
                "text-sm text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
