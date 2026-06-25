'use client';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop  = window.scrollY;
      const docHeight  = document.body.scrollHeight - window.innerHeight;
      const scrolled   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(scrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[999] h-[2px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 transition-all duration-100"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
