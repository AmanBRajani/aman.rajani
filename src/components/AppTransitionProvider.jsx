// src/components/AppTransitionProvider.jsx
'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PageLoader from './PageLoader';

export default function AppTransitionProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1200); // match loader animation duration
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  );
}
