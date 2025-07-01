"use client";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setToast(null);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSending(false);
        setToast({ type: 'success', message: 'Message sent successfully!' });
        form.current.reset();
      }, () => {
        setSending(false);
        setToast({ type: 'error', message: 'Failed to send. Please try again.' });
      });
  };

  return (
    <main className="max-w-2xl mx-auto py-16 px-4 md:px-0 w-full" id="contact">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="bg-white/5 rounded-2xl p-8 shadow-xl border border-pink-400/20 flex flex-col gap-6">
        <input name="user_name" type="text" placeholder="Name" required className="px-4 py-3 rounded-lg bg-white/10 border border-pink-400/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-400" />
        <input name="user_email" type="email" placeholder="Email" required className="px-4 py-3 rounded-lg bg-white/10 border border-pink-400/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-400" />
        <textarea name="message" placeholder="Message" required className="px-4 py-3 rounded-lg bg-white/10 border border-pink-400/20 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 min-h-[120px]" />
        <button type="submit" disabled={sending} className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-60">
          {sending ? 'Sending...' : 'Send'}
        </button>
      </form>
      {toast && (
        <div className={`mt-4 px-4 py-2 rounded-lg font-semibold ${toast.type === 'success' ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'}`}>{toast.message}</div>
      )}
      <div className="mt-12 space-y-3 text-lg text-gray-200">
        <div className="flex items-center gap-3"><span>📧</span> amanbrajani18@gmail.com</div>
        <div className="flex items-center gap-3"><span>📞</span> +91 9825168321</div>
        <div className="flex items-center gap-3"><span>💼</span> <a href="https://linkedin.com/in/amanbrajani" className="underline text-blue-400" target="_blank" rel="noopener">LinkedIn</a></div>
        <div className="flex items-center gap-3"><span>💻</span> <a href="https://github.com/amanbrajani" className="underline text-gray-400" target="_blank" rel="noopener">GitHub</a></div>
      </div>
    </main>
  );
}
