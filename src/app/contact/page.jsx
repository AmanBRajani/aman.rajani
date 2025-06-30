"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    // Use Formspree or EmailJS endpoint here
    const res = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) setStatus('success');
    else setStatus('error');
  };
  return (
    <main className="max-w-xl mx-auto py-16 px-4 md:px-0 w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative rounded-2xl bg-gradient-to-br from-white/5 to-pink-200/5 p-8 md:p-12 shadow-2xl border border-pink-400/40 overflow-hidden"
        style={{ boxShadow: '0 0 24px 2px #ff8a0033, 0 0 0 2px #e52e71, 0 0 0 8px #fff2' }}
      >
        <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{ boxShadow: '0 0 24px 2px #ff8a0033, 0 0 0 2px #e52e71, 0 0 0 8px #fff2' }} />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent"
        >📬 Contact</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6 text-lg text-gray-300"
        >Let’s Work Together 👇<br/>I’m always open to new opportunities, collaborations, or just a friendly chat about design, tech, or building cool stuff.<br/>Got a vision? Let’s make it real.</motion.p>
        <div className="mb-4">
          <div className="mb-2">📧 <a href="mailto:amanbrajani18@gmail.com" className="underline">amanbrajani18@gmail.com</a></div>
          <div className="mb-2">📞 <a href="tel:+919825168321" className="underline">+91 98251 68321</a></div>
          <div className="mb-2">💼 <a href="https://linkedin.com/in/aman-rajani" className="underline" target="_blank">LinkedIn</a></div>
          <div className="mb-2">💻 <a href="https://github.com/AmanBRajani" className="underline" target="_blank">GitHub</a></div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-4 bg-gradient-to-br from-white/10 to-pink-200/10 p-6 rounded-xl shadow-2xl border border-pink-400/40"
        >
          <input name="name" required placeholder="Name" className="w-full p-2 rounded bg-zinc-800 text-white" />
          <input name="email" type="email" required placeholder="Email" className="w-full p-2 rounded bg-zinc-800 text-white" />
          <textarea name="message" required placeholder="Message" className="w-full p-2 rounded bg-zinc-800 text-white" rows={4} />
          <button type="submit" className="w-full py-2 bg-gradient-to-r from-orange-400 to-pink-600 text-white font-bold rounded">Send</button>
          {status === 'loading' && <div className="text-yellow-400">Sending...</div>}
          {status === 'success' && <div className="text-green-400">Message sent! I’ll get back to you soon.</div>}
          {status === 'error' && <div className="text-red-400">Something went wrong. Please try again.</div>}
        </motion.form>
        <blockquote className="mt-8 italic text-gray-400 border-l-4 border-orange-400 pl-4">
          “Great design happens at the intersection of logic, emotion, and intention — let’s create something remarkable.”
        </blockquote>
      </motion.div>
    </main>
  );
}
