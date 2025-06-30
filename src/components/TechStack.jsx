// TechStack.jsx
'use client';

const techStack = [
	{
		category: 'Frontend',
		items: [
			{ name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
			{ name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
			{ name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
		],
	},
	{
		category: 'Backend',
		items: [
			{ name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
			{ name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
		],
	},
	{
		category: 'AI',
		items: [
			{ name: 'YOLOv8', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }, // No official YOLO icon, using Python
			{ name: 'LLMs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' }, // Using Google Cloud as a generic AI icon
		],
	},
];

export default function TechStack() {
	return (
		<div className="mt-16">
			<h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
				Tech Stack
			</h2>
			<div className="grid md:grid-cols-3 gap-8">
				{techStack.map((cat) => (
					<div
						key={cat.category}
						className="bg-gradient-to-br from-white/10 to-pink-200/10 rounded-2xl p-8 shadow-2xl border border-pink-400/20 flex flex-col items-center hover:scale-105 transition-transform duration-300"
					>
						<div className="font-semibold text-xl mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
							{cat.category}
						</div>
						<div className="flex flex-wrap gap-6 justify-center">
							{cat.items.map((item) => (
								<div
									key={item.name}
									className="flex flex-col items-center gap-2"
								>
									<img
										src={item.icon}
										alt={item.name}
										className="w-12 h-12 drop-shadow-lg"
									/>
									<span className="text-base text-gray-200 font-medium">
										{item.name}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
