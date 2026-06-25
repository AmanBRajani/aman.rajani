// src/app/experience/page.jsx
'use client';
import Head from 'next/head';
import { motion } from 'framer-motion';

const experiences = [
	{
		company: 'Silver Touch Technologies',
		duration: 'Feb 2024 – May 2024',
		role: 'Software Development Intern',
		whatIDid: [
			'Contributed to automation tools and chatbot development using SAP CoPilot and ChatGPT integrations',
			'Developed and tested internal bots like ChatOrange and MyBotGiene',
			'Assisted in building and maintaining internal company web tools',
			'Collaborated with senior devs to connect APIs and test chatbot flows',
		],
		problemsSolved: [
			'Helped streamline repetitive internal support tasks with smart bots',
			'Solved conversational flow issues in ChatGPT-based bots using prompt tuning',
			'Worked on internal tools to improve team communication and performance',
		],
		impact: [
			'Contributed to 4+ AI/chatbot projects during the internship',
			'Helped improve internal support query resolution speed by ~30%',
			'Built reusable components used across multiple internal tools',
		],
		icon: '🧩',
	},
	{
		company: 'Freelance Full Stack Developer',
		duration: '2023 – Present',
		role: 'Independent Developer / Consultant',
		whatIDid: [
			'Built full-stack web apps using the MERN stack',
			'Designed, developed, and deployed client portfolios and AI tools',
			'Integrated ChatGPT APIs into custom solutions for startups and creators',
		],
		problemsSolved: [
			'Helped non-tech clients get professional online presence with fast-loading websites',
			'Solved UI/UX and performance issues across platforms',
			'Improved delivery speed with automation and reusable modules',
		],
		impact: [
			'Completed 10+ projects with 100% delivery success rate',
			'Achieved Lighthouse scores above 90+ for performance and accessibility',
			'Reduced average delivery time to 4–5 days per project',
		],
		icon: '🧩',
	},
];

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15,
			duration: 0.7,
			ease: 'easeOut',
		},
	}),
};

export default function Experience() {
	return (
		<>
			<Head>
				<title>Aman Rajani | Work Experience</title>
			</Head>
			<main className='max-w-4xl mx-auto py-16 px-4 md:px-8 w-full min-h-screen'>
				<div className='mb-12 text-center'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent'>
						Work Experience
					</h1>
					<p className='text-lg text-gray-400'>
						Companies I've worked with and the impact I’ve made
					</p>
				</div>
				<div className='flex flex-col gap-10'>
					{experiences.map((exp, idx) => (
						<motion.section
							key={exp.company}
							className='bg-white/10 rounded-2xl shadow-xl border border-pink-400/20 p-8 flex flex-col gap-4 hover:shadow-pink-400/20 transition-shadow duration-300'
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true, amount: 0.3 }}
							custom={idx}
							variants={fadeUp}
						>
							<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2'>
								<div className='flex items-center gap-3'>
									<span className='text-3xl md:text-4xl'>{exp.icon}</span>
									<span className='text-xl md:text-2xl font-bold text-pink-400'>
										{exp.company}
									</span>
								</div>
								<div className='text-sm md:text-base text-gray-400 font-medium flex flex-col md:items-end'>
									<span className='mb-1'>{exp.role}</span>
									<span>{exp.duration}</span>
								</div>
							</div>
							<div className='grid md:grid-cols-3 gap-6 mt-4'>
								<div>
									<h3 className='font-semibold text-orange-400 mb-2 flex items-center gap-1 text-base md:text-lg'>
										🔨 What I Worked On
									</h3>
									<ul className='list-disc ml-5 space-y-1 text-gray-200 text-base md:text-lg'>
										{exp.whatIDid.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className='font-semibold text-pink-400 mb-2 flex items-center gap-1 text-base md:text-lg'>
										🧠 Problems I Solved
									</h3>
									<ul className='list-disc ml-5 space-y-1 text-gray-200 text-base md:text-lg'>
										{exp.problemsSolved.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className='font-semibold text-blue-400 mb-2 flex items-center gap-1 text-base md:text-lg'>
										📊 Impact & Numbers
									</h3>
									<ul className='list-disc ml-5 space-y-1 text-gray-200 text-base md:text-lg'>
										{exp.impact.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								</div>
							</div>
						</motion.section>
					))}
				</div>
			</main>
		</>
	);
}
