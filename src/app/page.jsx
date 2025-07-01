// src/app/page.jsx

'use client';

import dynamic from 'next/dynamic';
import About from './about/page';
import Projects from './projects/page';
import Contact from './contact/page';
import Hero from '../components/Hero';
import CertificatesStrip from '../components/CertificatesStrip';
import Head from 'next/head';

const certificates = [
	{
		src: '/indus_certifcate.jpg',
		title: 'Web Application Development and Security',
		description:
			'A comprehensive certification from Indus University covering secure web application development practices, including authentication, authorization, and modern security protocols. Awarded for excellence in both theory and practical implementation.',
		// year: '2024',
	},
	{
		src: 'https://udemy-certificate.s3.amazonaws.com/image/UC-e45b8d49-e40e-4228-9e62-895b09515d90.jpg',
		title: 'Web Development Masterclass',
		description:
			'Certification from Udemy for completing an advanced masterclass in web development, focusing on full-stack technologies, responsive design, and deployment best practices.',
		// year: '2023',
	},
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Aman Rajani | Home</title>
			</Head>
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
				<section className="mt-12">
					<About />
				</section>
				<section className="mt-12">
					<Projects />
				</section>
				{/* Portfolio download section */}
				<section className="mt-24 flex flex-col items-center">
					<div className="relative rounded-2xl bg-gradient-to-br from-blue-400/10 via-pink-400/10 to-white/0 p-8 md:p-12 shadow-2xl border border-blue-400/40 flex flex-col items-center overflow-hidden max-w-3xl w-full">
						<div
							className="absolute -inset-1 rounded-2xl pointer-events-none"
							style={{
								boxShadow:
									'0 0 24px 2px #60a5fa33, 0 0 0 2px #e52e71, 0 0 0 8px #fff2',
							}}
						/>
						<h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-center">
							🖼️ Portfolio
						</h1>
						<p className="mb-8 text-lg text-gray-300 text-center">
							🧾 Work Samples & Case Studies
							<br />
							Download my resume and other work samples below.
						</p>
						<a
							href="/AmanRajani_Resume.pdf"
							download
							className="underline text-blue-400 mt-2 text-xl font-semibold bg-white/10 px-6 py-3 rounded-lg shadow hover:bg-pink-400/20 transition text-center"
						>
							Download Resume (PDF)
						</a>
					</div>
				</section>
				{/* Certificates Strip */}
				<section className="w-full flex flex-col items-center mt-24 mb-12">
					<div className="relative rounded-2xl bg-gradient-to-br from-blue-400/10 via-pink-400/10 to-white/0 p-8 md:p-12 shadow-2xl border border-blue-400/40 flex flex-col items-center overflow-hidden max-w-5xl w-full">
						<div
							className="absolute -inset-1 rounded-2xl pointer-events-none"
							style={{
								boxShadow:
									'0 0 24px 2px #60a5fa33, 0 0 0 2px #e52e71, 0 0 0 8px #fff2',
							}}
						/>
						<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 bg-clip-text text-transparent text-center">
							Certificates
						</h1>
						<div className="w-full">
							<CertificatesStrip certificates={certificates} />
						</div>
					</div>
				</section>
				<section className="mt-12">
					<Contact />
				</section>
			</main>
		</>
	);
}
