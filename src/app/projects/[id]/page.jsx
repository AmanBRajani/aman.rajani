// src/app/projects/[id]/page.jsx
'use client';
import { useParams, useRouter } from 'next/navigation';
import Head from 'next/head';

const projects = [
  {
    title: 'Episcan',
    description: 'AI-based facial skin analysis and product recommendation platform.',
    tech: ['YOLOv8', 'FastAPI', 'Next.js', 'Python'],
    image: '/episcan.jpeg',
    github: 'https://github.com/AmanBRajani/Episcan-AI-Models',
    live: 'https://epi-scan.vercel.app/',
    color: 'from-pink-400 to-pink-600',
  },
  {
    title: 'Portfolio Website',
    description: 'This website: clean structure, CSS animations, responsive, modern design.',
    tech: ['React', 'TailwindCSS', 'Next.js'],
    image: '/portfolio.png',
    github: 'https://github.com/AmanBRajani/aman.rajani',
    live: 'https://aman-rajani.vercel.app/',
    color: 'from-orange-400 to-pink-500',
  },
];

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const id = parseInt(params.id, 10);
  const project = projects[id];

  // Custom content for each project, preserving all emojis and formatting
  const projectContent = [
    // Episcan
    `🚀 Project 1: EpiScan – AI-Powered Skin Analysis Web App
📌 Overview
EpiScan is an intelligent web application that leverages computer vision and language models to detect common facial skin issues such as acne, dark circles, and open pores. Built to assist users in understanding their skin better, EpiScan delivers tailored product recommendations and insights through a modern, responsive interface.

💡 Problem Solved
In a world flooded with skincare products, users often feel overwhelmed and unsure about what truly suits their skin. EpiScan bridges the gap between AI analysis and personalized skincare by providing:

Accurate detection of facial skin conditions

Product recommendations based on detected issues

A user-friendly dashboard with insights and history

⚙️ Tech Stack
Layer	Tools Used
Frontend	Next.js, TailwindCSS, Framer Motion
Backend	FastAPI, Python
AI Models	YOLOv8 (Instance Segmentation), LLMs
Storage	Local file-based model inference (no DB yet)
Extras	React PDF Viewer, Custom Loader, Responsive Layout

🧠 Key Features
🖼 Real-time image upload and AI analysis

📊 Skin issue detection with YOLOv8

🤖 LLM-powered product suggestions

🧾 PDF report preview and download support

🌙 Dark/light mode toggle

📱 Fully responsive with mobile-friendly layout

🔗 Live Demo & Source Code
🌍 Live Website: EpiScan

💻 GitHub Repo: github.com/AmanBRajani/Episcan-Ai-Model`,
    // Portfolio
    `🌐 Project 2: Personal Portfolio – Aman Rajani
📌 Overview
My personal portfolio is a carefully crafted showcase of my work, skills, and brand identity as an AI and Web Developer. Designed with modern UI/UX principles and responsive animation, it functions as a resume, project gallery, and contact hub — all in one clean, professional package.

💡 Goal
To present my capabilities, creativity, and professionalism in a digital format that recruiters, clients, and collaborators can instantly understand and interact with.

⚙️ Tech Stack
Layer	Tools Used
Frontend	React, TailwindCSS, Vite
Extras	EmailJS (for form), React-PDF, Custom Animations, Intersection Observer
Hosting	Vercel

🧠 Key Features
🖥️ Multi-section layout with dynamic navigation

🎯 Custom "About Me", "Projects", "Portfolio", and "Contact" pages

📥 Contact form powered by EmailJS (no backend needed)

🧾 Resume PDF preview + download

🧑‍💻 Showcase of featured projects (EpiScan, Portfolio itself)

📱 Fully responsive with mobile hamburger menu

🧾 Certificates section integrated in homepage

🎨 Design & UI Notes
Broad layout for desktop screens, not narrow/mobile-first

Modern visuals, micro-animations, and vector-based design elements

Focused on clean spacing, readability, and flow

🔗 Live Demo & Source Code
🌍 Live Website: aman-rajani.vercel.app

💻 GitHub Repo: github.com/AmanBRajani/aman.rajani`
  ];

  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-3xl font-bold mb-4 text-pink-400">Project Not Found</h1>
        <button onClick={() => router.back()} className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow hover:scale-105 transition">Go Back</button>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | Project</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 bg-gradient-to-br from-[#181824] via-[#23243a] to-[#0a0a23]">
        <div className="max-w-2xl w-full bg-white/10 rounded-2xl shadow-2xl border border-pink-400/30 p-8 flex flex-col items-center">
          <img src={project.image} alt={project.title} className="w-full h-80 object-contain rounded-xl mb-6 bg-white/20" />
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent text-center">{project.title}</h1>
          <p className="text-lg text-gray-200 text-center mb-6">{project.description}</p>
          <pre className="whitespace-pre-wrap text-gray-200 text-base mb-6 text-left w-full bg-black/20 rounded-lg p-4 overflow-x-auto" style={{fontFamily: 'inherit'}}>{projectContent[id]}</pre>
          <div className="flex gap-4 mt-4">
            <a href={project.live} target="_blank" rel="noopener" className="px-6 py-3 rounded-lg bg-white text-pink-600 font-semibold shadow hover:scale-105 hover:shadow-pink-400/40 transition border border-pink-400">Live Demo</a>
            <a href={project.github} target="_blank" rel="noopener" className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold shadow hover:scale-105 hover:shadow-orange-400/40 transition border border-orange-400">GitHub</a>
          </div>
          <button onClick={() => router.back()} className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow hover:scale-105 transition">Go Back</button>
        </div>
      </main>
    </>
  );
}
