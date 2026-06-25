'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const inView = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const education = [
  {
    year: '2021–2025',
    school: 'Indus University',
    degree: 'B.Tech — Computer Science & Engineering',
    location: 'Ahmedabad, Gujarat',
  },
  {
    year: '2021',
    school: 'SS Divine',
    degree: '12th Grade — Higher Secondary',
    location: 'Gujarat',
  },
  {
    year: '2020',
    school: 'Kameshwar School',
    degree: '10th Grade — Secondary',
    location: 'Gujarat',
  },
  {
    year: 'Till 2019',
    school: 'SSSV',
    degree: 'Primary & Middle School',
    location: 'Gujarat',
  },
];

const experience = [
  {
    year: 'Jul 2025 – Jan 2026',
    company: 'DigitalRooar',
    role: 'Full-Time Backend Developer',
    type: 'Full-Time',
    description:
      'Built and maintained server-side systems, APIs, and integrations — deepening technical expertise while running three ventures in parallel.',
    points: [
      'Developed and maintained RESTful APIs and backend services',
      'Collaborated with cross-functional teams on product delivery',
      'Built scalable backend architecture supporting business operations',
      'Gained hands-on experience in production-grade software environments',
    ],
  },
  {
    year: 'Feb – May 2024',
    company: 'Silver Touch Technologies',
    role: 'Software Development Intern',
    type: 'Internship',
    description:
      'Gained real-world exposure to enterprise software development, AI chatbot systems, and team-based engineering during final years of university.',
    points: [
      'Contributed to AI/chatbot tools using SAP CoPilot and ChatGPT integrations',
      'Developed and tested internal bots including ChatOrange and MyBotGiene',
      'Assisted in building and maintaining internal company web tools',
      'Collaborated with senior engineers on API connections and chatbot flow testing',
    ],
  },
];

const founding = [
  { year: 'Nov 2025', name: 'Veolve Tech',    role: 'Founder',                  category: 'IT & AI Company'  },
  { year: 'Jul 2025', name: 'Voya Marketing', role: 'Founding Partner & CEO',   category: 'Marketing Agency' },
  { year: 'Nov 2022', name: 'Kartos Designz', role: 'Founding Partner & CEO',   category: 'Design Studio'    },
];

export default function Journey() {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-16 pt-20 md:pt-28 pb-24 md:pb-36">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <p className="text-gray-600 text-[11px] uppercase tracking-[0.22em] mb-6">
            Background
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
            My Journey
          </h1>
          <p className="text-gray-500 max-w-sm text-base leading-relaxed">
            Education, experience, and the milestones that shaped who I am.
          </p>
        </motion.div>

        {/* ── Education ── */}
        <motion.div
          variants={inView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <p className="text-gray-600 text-[11px] uppercase tracking-[0.22em]">Education</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </motion.div>

        <div className="space-y-0 mb-20 md:mb-28">
          {education.map((e, idx) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row sm:items-baseline sm:gap-8 gap-1.5 group"
            >
              <span className="text-blue-500/60 text-xs font-mono sm:w-28 sm:shrink-0">
                {e.year}
              </span>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <h3 className="text-white font-bold text-base group-hover:text-blue-200 transition-colors duration-300">
                    {e.school}
                  </h3>
                  <span className="text-gray-700 text-xs">{e.location}</span>
                </div>
                <p className="text-gray-500 text-sm mt-0.5">{e.degree}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* ── Experience ── */}
        <motion.div
          variants={inView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <p className="text-gray-600 text-[11px] uppercase tracking-[0.22em]">Experience</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
        </motion.div>

        <div className="space-y-0 mb-20 md:mb-28">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-white/[0.06] py-10"
            >
              <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start gap-1.5">
                <span className="text-blue-500/60 text-xs font-mono sm:w-28 sm:shrink-0">
                  {exp.year}
                </span>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-1">
                    <h3 className="text-white font-black text-lg md:text-xl">
                      {exp.company}
                    </h3>
                    <span className="text-gray-600 text-xs border border-white/[0.08] px-2.5 py-1 rounded-full self-start">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-blue-400/70 text-sm font-medium mb-4">{exp.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xl">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((p) => (
                      <li key={p} className="flex items-baseline gap-3 text-gray-500 text-sm">
                        <span className="text-gray-700 shrink-0">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* ── Ventures Founded ── */}
        <motion.div
          variants={inView}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <p className="text-gray-600 text-[11px] uppercase tracking-[0.22em]">Founded</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl mb-10">
            Alongside education and full-time work, I founded and grew three companies — each
            built while balancing university, internships, and professional roles.
          </p>
        </motion.div>

        <div className="space-y-0 mb-14">
          {founding.map((f, idx) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row sm:items-baseline sm:gap-8 gap-1.5 group"
            >
              <span className="text-blue-500/60 text-xs font-mono sm:w-28 sm:shrink-0">
                {f.year}
              </span>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                  <h3 className="text-white font-bold text-base group-hover:text-blue-200 transition-colors duration-300">
                    {f.name}
                  </h3>
                  <span className="text-gray-600 text-xs">{f.category}</span>
                </div>
                <p className="text-gray-600 text-sm mt-0.5">{f.role}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>

        <div className="flex gap-6">
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-white text-sm"
          >
            <span className="border-b border-white/25 pb-0.5 group-hover:border-white/60 transition-colors duration-300">
              Explore Ventures
            </span>
            <span className="text-blue-400 group-hover:translate-x-1 transition-transform">↗</span>
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-300 text-sm transition-colors"
          >
            Get in Touch →
          </Link>
        </div>

      </div>
    </main>
  );
}
