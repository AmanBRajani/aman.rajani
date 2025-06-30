// ThemeToggle.jsx
'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setDark(stored === 'dark');
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="ml-4 p-2 rounded-full bg-white/10 border border-pink-400/30 text-pink-400 hover:bg-pink-400 hover:text-white transition"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ) : (
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      )}
    </button>
  );
}
