'use client';

/** Projects Page (React + TailwindCSS, no Framer Motion) */

import Head from 'next/head';

const projects = [
	{
		title: 'Episcan',
		description:
			'AI-based facial skin analysis and product recommendation platform.',
		tech: ['YOLOv8', 'FastAPI', 'Next.js', 'Python'],
		image: '/episcan.jpeg', // updated to actual image in public/
		github: 'https://github.com/AmanBRajani/Episcan-AI-Models',
		live: 'https://epi-scan.vercel.app/',
		color: 'from-pink-400 to-pink-600',
	},
	{
		title: 'Portfolio Website',
		description:
			'This website: clean structure, CSS animations, responsive, modern design.',
		tech: ['React', 'TailwindCSS', 'Next.js'],
		image: '/portfolio.png', // fixed to actual image in public/
		github: 'https://github.com/AmanBRajani/aman.rajani',
		live: 'https://aman-rajani.vercel.app/',
		color: 'from-orange-400 to-pink-500',
	},
];

export default function Projects() {
	return (
		<>
			<Head>
				<title>Aman Rajani | Projects</title>
			</Head>
			<main className="max-w-6xl mx-auto py-16 px-4 md:px-8 w-full">
				<div className="mb-12 text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
						🧠 Projects
					</h1>
					<p className="mb-2 text-lg text-gray-300">💡 Featured Projects</p>
					<p className="text-gray-400">
						Here’s a glimpse of my favorite AI & web builds—crafted with intent,
						creativity, and code.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-10">
					{projects.map((proj, idx) => (
						<div
							key={proj.title}
							className={`group bg-gradient-to-br ${proj.color} rounded-3xl p-8 shadow-2xl border border-white/10 flex flex-col items-start hover:scale-105 hover:shadow-xl transition-transform duration-300 relative overflow-hidden cursor-pointer`}
							style={{ minHeight: 340 }}
							onClick={() => (window.location.href = `/projects/${idx}`)}
							tabIndex={0}
							role="button"
							aria-label={`View details for ${proj.title}`}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ')
									window.location.href = `/projects/${idx}`;
							}}
						>
							<div className="w-full h-56 md:h-64 mb-6 rounded-xl overflow-hidden bg-gray-900/20 flex items-center justify-center">
								<img
									src={proj.image}
									alt={proj.title}
									className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<h2 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
								{proj.title}
							</h2>
							<p className="mb-3 text-gray-200">{proj.description}</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{proj.tech.map((t) => (
									<span
										key={t}
										className="px-3 py-1 rounded-full bg-pink-500/20 text-xs font-semibold text-pink-100 border border-pink-400/60 shadow-sm backdrop-blur-sm hover:bg-pink-500/40 transition-colors duration-200"
									>
										{t}
									</span>
								))}
							</div>
							<div className="flex gap-4 mt-auto">
								<a
									href={proj.live}
									target="_blank"
									rel="noopener"
									className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-pink-600 font-semibold shadow hover:scale-105 hover:shadow-pink-400/40 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 border border-pink-400"
									onClick={(e) => e.stopPropagation()}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 6H18.75V18.75H6V13.5M18.75 6L6 18.75"
										/>
									</svg>
									Live Demo
								</a>
								<a
									href={proj.github}
									target="_blank"
									rel="noopener"
									className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold shadow hover:scale-105 hover:shadow-orange-400/40 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
									onClick={(e) => e.stopPropagation()}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 24 24"
										className="w-5 h-5"
									>
										<path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
									</svg>
									GitHub
								</a>
							</div>
						</div>
					))}
				</div>
			</main>
		</>
	);
}
