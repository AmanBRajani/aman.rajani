// Projects Page
'use client';
export default function Projects() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">🧠 Projects</h1>
      <p className="mb-8">💡 Featured Projects<br/>Here’s a glimpse of some of my favorite builds—each crafted with intent, creativity, and code.<br/>Scroll through to explore case studies and live previews. Each one tells a different story.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Example Project Card */}
        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Episcan</h2>
          <p className="mb-2">AI-based facial skin analysis and product recommendation platform.</p>
          <div className="text-sm mb-2">Tech: Next.js, Python, TensorFlow</div>
          <div className="flex gap-4">
            <a href="#" className="underline text-blue-400">Live Demo</a>
            <a href="#" className="underline text-gray-400">GitHub</a>
          </div>
        </div>
        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg flex flex-col">
          <h2 className="text-2xl font-bold mb-2">CafeReel</h2>
          <p className="mb-2">Automated content pipeline for café marketing.</p>
          <div className="text-sm mb-2">Tech: React, Node.js, AWS</div>
          <div className="flex gap-4">
            <a href="#" className="underline text-blue-400">Live Demo</a>
            <a href="#" className="underline text-gray-400">GitHub</a>
          </div>
        </div>
        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Smartfolio</h2>
          <p className="mb-2">Fully responsive, minimalistic portfolio template.</p>
          <div className="text-sm mb-2">Tech: Next.js, TailwindCSS</div>
          <div className="flex gap-4">
            <a href="#" className="underline text-blue-400">Live Demo</a>
            <a href="#" className="underline text-gray-400">GitHub</a>
          </div>
        </div>
        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg flex flex-col">
          <h2 className="text-2xl font-bold mb-2">ZapCart</h2>
          <p className="mb-2">Frontend UI for an AI-driven eCommerce experience.</p>
          <div className="text-sm mb-2">Tech: React, Redux, OpenAI API</div>
          <div className="flex gap-4">
            <a href="#" className="underline text-blue-400">Live Demo</a>
            <a href="#" className="underline text-gray-400">GitHub</a>
          </div>
        </div>
      </div>
    </main>
  );
}
