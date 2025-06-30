// TechStack.jsx
'use client';

const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: '/react.svg' },
      { name: 'TailwindCSS', icon: '/tailwind.svg' },
      { name: 'Next.js', icon: '/next.svg' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'FastAPI', icon: '/fastapi.svg' },
      { name: 'Python', icon: '/python.svg' },
    ],
  },
  {
    category: 'AI',
    items: [
      { name: 'YOLOv8', icon: '/yolo.svg' },
      { name: 'LLMs', icon: '/globe.svg' },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6 text-pink-400">Tech Stack</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {techStack.map((cat) => (
          <div key={cat.category} className="bg-white/5 rounded-2xl p-6 shadow border border-pink-400/10">
            <div className="font-semibold text-lg mb-4 text-pink-400">{cat.category}</div>
            <div className="flex flex-wrap gap-4">
              {cat.items.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2">
                  <img src={item.icon} alt={item.name} className="w-10 h-10" />
                  <span className="text-sm text-gray-200 font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
