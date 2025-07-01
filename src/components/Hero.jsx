// Hero.jsx
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-12 py-24 px-4 md:px-12 max-w-[1440px] mx-auto relative">
      {/* Hero Image (Vector) on the left */}
      <div className="z-10 flex-1 flex justify-center items-center order-1 md:order-none">
        <img
          src="/vector.svg"
          alt="Vector"
          className="w-96 h-96 md:w-[32rem] md:h-[32rem] object-contain rounded-3xl border-4 border-pink-400 shadow-2xl bg-white/10"
        />
      </div>
      {/* Hero Content */}
      <div className="z-10 flex-1 flex flex-col items-start gap-8 order-2 md:order-none">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent flex items-center gap-4">
          {/* Vector SVG on the left of the heading */}
          {/* <img src="/vector.svg" alt="Vector" className="w-12 h-12 md:w-16 md:h-16 inline-block" />  */}
          I Build AI Powered Tools & Intelligent Web Experiences
        </h1>
        <div className="text-2xl md:text-3xl font-semibold text-gray-200 flex items-center gap-2">
          <span className="text-pink-400">{'>'}</span>
          <Typewriter
            words={['AI Developer', 'Web Engineer', 'Creative Technologist']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </div>
        <div className="flex gap-6 mt-6">
          <a href="/AmanRajani_Resume.pdf" download className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-transform duration-200">
            📄 Download Resume
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border-2 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-white transition-colors duration-200">
            📬 Contact Me
          </a>
        </div>
      </div>
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="h-full w-full opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
}
