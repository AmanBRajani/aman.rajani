'use client';
import TechStack from '../../components/TechStack';

export default function About() {
	return (
		<main className="max-w-6xl mx-auto py-16 px-4 md:px-8 w-full">
			<div className="flex flex-col md:flex-row gap-16 items-center">
				{/* Left: Text */}
				<div className="flex-1 space-y-6">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
						About Me
					</h1>
					<p className="text-lg text-gray-200">
						Hi, I’m Aman Rajani — an AI + Web Developer passionate about building
						intelligent, user-centric digital experiences. I specialize in
						combining modern web technologies with cutting-edge AI to create tools
						that are both beautiful and smart.
					</p>
					<p className="text-gray-400">
						My expertise spans frontend, backend, and AI/ML, with a focus on rapid
						prototyping, clean code, and scalable design. I love working on projects
						that push boundaries and deliver real value.
					</p>
				</div>
				{/* Right: Image */}
				<div className="flex-1 flex justify-center items-center">
					<img
						src="/aman.jpg"
						alt="Aman Rajani"
						className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl border-4 border-pink-400 shadow-2xl bg-white/10"
					/>
				</div>
			</div>
			<TechStack />
		</main>
	);
}
