'use client';
import { motion } from 'framer-motion';

const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'             },
      { name: 'Next.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'           },
      { name: 'Tailwind',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'   },
    ],
  },
  {
    category: 'Backend & AI',
    items: [
      { name: 'Python',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'   },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'   },
      { name: 'YOLOv8',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'   },
    ],
  },
  {
    category: 'Mobile & Tools',
    items: [
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'       },
      { name: 'MongoDB',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'   },
      { name: 'PostgreSQL',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Git',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'           },
    ],
  },
];

export default function TechStack() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center mb-12"
      >
        <span className="section-label mb-5 inline-flex">Skills</span>
        <h2 className="text-3xl md:text-4xl font-black text-white mt-4 tracking-tight">Tech Stack</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5">
        {techStack.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: catIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-6 card-hover"
          >
            <p className="text-xs font-semibold text-blue-400/80 uppercase tracking-widest mb-5">{cat.category}</p>
            <div className="grid grid-cols-2 gap-4">
              {cat.items.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-5 h-5 object-contain"
                      style={{ filter: item.name === 'Next.js' ? 'invert(1)' : 'none' }}
                    />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
