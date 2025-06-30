// Contact Page
'use client';
import { useState } from 'react';

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
    <main className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">📬 Contact</h1>
      <p className="mb-6">Let’s Work Together 👇<br/>I’m always open to new opportunities, collaborations, or just a friendly chat about design, tech, or building cool stuff.<br/>Got a vision? Let’s make it real.</p>
      <div className="mb-4">
        <div className="mb-2">📧 <a href="mailto:amanbrajani18@gmail.com" className="underline">amanbrajani18@gmail.com</a></div>
        <div className="mb-2">📞 <a href="tel:+919825168321" className="underline">+91 98251 68321</a></div>
        <div className="mb-2">💼 <a href="https://linkedin.com/in/aman-rajani" className="underline" target="_blank">LinkedIn</a></div>
        <div className="mb-2">💻 <a href="https://github.com/AmanBRajani" className="underline" target="_blank">GitHub</a></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-900 p-6 rounded-xl shadow-lg">
        <input name="name" required placeholder="Name" className="w-full p-2 rounded bg-zinc-800 text-white" />
        <input name="email" type="email" required placeholder="Email" className="w-full p-2 rounded bg-zinc-800 text-white" />
        <textarea name="message" required placeholder="Message" className="w-full p-2 rounded bg-zinc-800 text-white" rows={4} />
        <button type="submit" className="w-full py-2 bg-gradient-to-r from-orange-400 to-pink-600 text-white font-bold rounded">Send</button>
        {status === 'loading' && <div className="text-yellow-400">Sending...</div>}
        {status === 'success' && <div className="text-green-400">Message sent! I’ll get back to you soon.</div>}
        {status === 'error' && <div className="text-red-400">Something went wrong. Please try again.</div>}
      </form>
      <blockquote className="mt-8 italic text-gray-400 border-l-4 border-orange-400 pl-4">
        “Great design happens at the intersection of logic, emotion, and intention — let’s create something remarkable.”
      </blockquote>
    </main>
  );
}
