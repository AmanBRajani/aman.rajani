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
					<div className="flex gap-6 mt-8 justify-start">
						<a
							href="https://github.com/AmanBRajani"
							target="_blank"
							rel="noopener"
							className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold shadow hover:scale-105 hover:shadow-pink-400/40 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								className="w-6 h-6"
							>
								<path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
							</svg>
							GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/aman-rajani/"
							target="_blank"
							rel="noopener"
							className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white font-semibold shadow hover:scale-105 hover:shadow-blue-400/40 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 24 24"
								className="w-6 h-6"
							>
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
							</svg>
							LinkedIn
						</a>
					</div>
				</div>
				{/* Right: Image */}
				<div className="flex-1 flex justify-center items-center">
					<img
						src="/aman-rajani.jpg"
						alt="Aman Rajani"
						className="w-64 h-64 md:w-[500px] md:h-[500px] object-cover rounded-3xl border-4 border-pink-400 shadow-2xl bg-white/10"
					/>
				</div>
			</div>
			{/* Add extra margin before TechStack */}
			<div className="mt-36">
				<TechStack />
			</div>
		</main>
	);
}
