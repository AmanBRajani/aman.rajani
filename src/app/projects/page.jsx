'use client';

/** Projects Page (React + TailwindCSS, no Framer Motion) */

const projects = [
	{
		title: 'Episcan',
		description:
			'AI-based facial skin analysis and product recommendation platform.',
		tech: ['YOLOv8', 'FastAPI', 'Next.js', 'Python'],
		image: '/certificates/episcan.jpg', // placeholder, update as needed
		github: '#',
		live: '#',
		color: 'from-pink-400 to-pink-600',
	},
	{
		title: 'Portfolio Website',
		description:
			'This website: clean structure, CSS animations, responsive, modern design.',
		tech: ['React', 'TailwindCSS', 'Next.js'],
		image: '/certificates/portfolio.jpg', // placeholder, update as needed
		github: '#',
		live: '#',
		color: 'from-orange-400 to-pink-500',
	},
];

export default function Projects() {
	return (
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
						className={`group bg-gradient-to-br ${proj.color} rounded-3xl p-8 shadow-2xl border border-white/10 flex flex-col items-start hover:scale-105 hover:shadow-xl transition-transform duration-300 relative overflow-hidden`}
						style={{ minHeight: 340 }}
					>
						<div className="w-full h-40 mb-6 rounded-xl overflow-hidden bg-gray-900/20 flex items-center justify-center">
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
									className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-pink-300 border border-pink-400/30"
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
								className="underline text-blue-400 font-semibold hover:text-pink-400 transition"
							>
								Live Demo
							</a>
							<a
								href={proj.github}
								target="_blank"
								rel="noopener"
								className="underline text-gray-400 font-semibold hover:text-orange-400 transition"
							>
								GitHub
							</a>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
