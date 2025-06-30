// src/app/page.jsx

'use client';

import dynamic from 'next/dynamic';
import About from './about/page';
import Projects from './projects/page';
import Contact from './contact/page';
import Hero from '../components/Hero';
import CertificatesStrip from '../components/CertificatesStrip';

const certificates = [
	{ src: '/certificates/cert1.jpg', title: 'AI Specialist', year: '2024' },
	{ src: '/certificates/cert2.jpg', title: 'Web Dev Pro', year: '2023' },
	{ src: '/certificates/cert3.jpg', title: 'Python Expert', year: '2023' },
	{ src: '/certificates/cert4.jpg', title: 'LLM Innovator', year: '2024' },
];

export default function Home() {
	return (
		<main className="relative min-h-screen bg-gradient-to-br from-[#181824] via-[#23243a] to-[#0a0a23] overflow-x-hidden">
			{/* Decorative background SVG */}
			<div className="absolute inset-0 -z-10 pointer-events-none">
				<svg width="100%" height="100%" className="h-full w-full opacity-10">
					<defs>
						<pattern
							id="grid"
							width="40"
							height="40"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 40 0 L 0 0 0 40"
								fill="none"
								stroke="#fff"
								strokeWidth="0.5"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />
				</svg>
			</div>
			<Hero />
			<section className="mt-24">
				<About />
			</section>
			<section className="mt-24">
				<Projects />
			</section>
			{/* Portfolio download section */}
			<section className="mt-24 flex flex-col items-center">
				<div className="relative rounded-2xl bg-gradient-to-br from-white/5 to-pink-200/5 p-8 md:p-12 shadow-2xl border border-pink-400/40 flex flex-col items-center overflow-hidden max-w-3xl w-full">
					<div
						className="absolute -inset-1 rounded-2xl pointer-events-none"
						style={{
							boxShadow:
								'0 0 24px 2px #ff8a0033, 0 0 0 2px #e52e71, 0 0 0 8px #fff2',
						}}
					/>
					<h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
						🖼️ Portfolio
					</h1>
					<p className="mb-8 text-lg text-gray-300">
						🧾 Work Samples & Case Studies
						<br />
						Download my resume and other work samples below.
					</p>
					<a
						href="/AmanRajani_Resume.pdf"
						download
						className="underline text-blue-400 mt-2 text-xl font-semibold bg-white/10 px-6 py-3 rounded-lg shadow hover:bg-pink-400/20 transition"
					>
						Download Resume (PDF)
					</a>
				</div>
			</section>
			{/* Certificates Strip */}
			<CertificatesStrip certificates={certificates} />
			<section className="mt-24">
				<Contact />
			</section>
		</main>
	);
}
