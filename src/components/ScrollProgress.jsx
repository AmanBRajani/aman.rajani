// ScrollProgress.jsx
'use client';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[999] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-200"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
