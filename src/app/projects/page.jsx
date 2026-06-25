'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ventures = [
  {
    number: '01',
    name: 'Veolve Tech',
    category: 'IT & AI Company',
    role: 'Founder',
    founded: 'Nov 2025',
    tagline: 'Streamline. Automate. Scale.',
    description:
      'A technology company helping businesses streamline their operations, automate repetitive workflows, and scale faster through custom software development, AI-powered solutions, and end-to-end digital transformation services.',
    services: [
      'Custom Software Development',
      'AI & Automation Solutions',
      'ERP & Business Systems',
      'Web & App Development',
      'Digital Transformation',
      'Technology Consulting',
    ],
    highlight: 'Built an ERP system for the brass industry and delivered a full website for a USA-based restaurant client.',
    contact: {
      phone: '+91 94288 23321',
      email: 'aman@veolve.com',
      website: 'https://veolve.com',
      websiteLabel: 'veolve.com',
    },
    stats: ['5+ Team', '10+ Clients', '15+ Projects'],
  },
  {
    number: '02',
    name: 'Voya Marketing',
    category: 'Marketing Agency',
    role: 'Founding Partner & CEO',
    founded: 'Jul 2025',
    tagline: 'Growth-Driven Marketing. Real Results.',
    description:
      'A full-service digital marketing agency focused on driving measurable business growth through social media management, performance advertising, SEO, and compelling content.',
    services: [
      'Social Media Management',
      'Performance Advertising',
      'Search Engine Optimisation',
      'Content Marketing',
      'Brand Growth Strategy',
      'Influencer & Creator Campaigns',
    ],
    highlight: 'Scaled a client\'s revenue to 5x within 3 months. Worked with Hari Om Kanthiyawadi and other renowned Ahmedabad brands.',
    contact: {
      phone: '+91 89808 03321',
      email: 'info@voyamarketing.in',
      website: 'https://voyamarketing.in',
      websiteLabel: 'voyamarketing.in',
    },
    stats: ['5x Revenue Growth', 'CEO'],
  },
  {
    number: '03',
    name: 'Kartos Designz',
    category: 'Design Studio',
    role: 'Founding Partner & CEO',
    founded: 'Nov 2022',
    tagline: 'Building Brands That Stand Out.',
    description:
      'A premium design studio helping businesses craft strong, memorable identities. From brand strategy and logo design to UI/UX, social media creatives, and print collateral — design that communicates value and builds trust.',
    services: [
      'Brand Identity & Logo Design',
      'UI/UX Design',
      'Social Media Creatives',
      'Print & Collateral',
      'Brand Strategy',
      'Visual Communication',
    ],
    contact: {
      phone: '+91 94288 23321',
      email: 'info@kartosdesignz.in',
      website: 'https://kartosdesignz.in',
      websiteLabel: 'kartosdesignz.in',
    },
    stats: ['25+ Projects'],
  },
];

export default function Ventures() {
  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-20 md:pt-28 pb-24 md:pb-36">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <p className="text-gray-600 text-[11px] uppercase tracking-[0.22em] mb-6">
            Entrepreneurship
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
            My Ventures
          </h1>
          <p className="text-gray-500 max-w-md text-base leading-relaxed">
            Three companies. Three disciplines. One mission — to help businesses grow.
          </p>
        </motion.div>

        {/* Venture rows */}
        {ventures.map((v, idx) => (
          <motion.div
            key={v.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/[0.07] py-12 md:py-16"
          >
            {/* Top row */}
            <div className="flex items-start gap-5 md:gap-6 mb-8">
              <span className="text-gray-700 text-xs font-mono pt-1.5 w-6 md:w-7 shrink-0">{v.number}</span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-3 mb-3">
                  <div className="min-w-0">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
                      {v.name}
                    </h2>
                    <p className="text-blue-500/70 text-xs uppercase tracking-widest mt-2 font-medium">
                      {v.category}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm md:text-right shrink-0 md:pt-1">
                    {v.role}<br />Est. {v.founded}
                  </p>
                </div>
                <p className="text-gray-500 text-sm md:text-base italic">{v.tagline}</p>
              </div>
            </div>

            {/* Body grid */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 md:pl-[52px]">

              {/* Description */}
              <div className="md:col-span-1">
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {v.description}
                </p>
                {v.highlight && (
                  <div className="border-l-2 border-blue-600/40 pl-4">
                    <p className="text-gray-400 text-xs leading-relaxed">{v.highlight}</p>
                  </div>
                )}
                {v.stats && (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {v.stats.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] text-gray-500 border border-white/[0.08] px-3 py-1 rounded-full"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Services */}
              <div>
                <p className="text-gray-700 text-[10px] uppercase tracking-widest mb-4">
                  Services
                </p>
                <ul className="space-y-2.5">
                  {v.services.map((s) => (
                    <li key={s} className="flex items-baseline gap-3 text-gray-400 text-sm">
                      <span className="w-1 h-1 rounded-full bg-gray-700 shrink-0 mt-1.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <p className="text-gray-700 text-[10px] uppercase tracking-widest mb-4">
                  Get in Touch
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-gray-700 mb-1">Role</p>
                    <p className="text-white text-sm font-medium">{v.role}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-700 mb-1">Phone</p>
                    <a
                      href={`tel:${v.contact.phone.replace(/\s/g, '')}`}
                      className="text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      {v.contact.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-700 mb-1">Email</p>
                    <a
                      href={`mailto:${v.contact.email}`}
                      className="text-gray-300 text-sm hover:text-white transition-colors break-all"
                    >
                      {v.contact.email}
                    </a>
                  </div>
                  <a
                    href={v.contact.website}
                    target="_blank"
                    rel="noopener"
                    className="group inline-flex items-center gap-2 text-blue-400 text-sm hover:text-blue-300 transition-colors mt-1"
                  >
                    <span>{v.contact.websiteLabel}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-white/[0.07]" />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <p className="text-gray-500 text-sm">
            Interested in working with one of my ventures?
          </p>
          <Link
            href="/contact"
            className="group flex items-center gap-2 text-white text-sm"
          >
            <span className="border-b border-white/25 pb-0.5 group-hover:border-white/60 transition-colors duration-300">
              Start a conversation
            </span>
            <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
