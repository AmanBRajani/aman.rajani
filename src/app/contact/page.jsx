"use client";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Head from 'next/head';

export default function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setToast(null);
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
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
    <>
      <Head>
        <title>Aman Rajani | Contact</title>
      </Head>
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
        <div className="mt-12 w-full max-w-lg mx-auto rounded-2xl shadow-xl border border-pink-400/20 p-8 flex flex-col gap-6 items-center bg-gradient-to-br from-orange-400/10 via-pink-400/10 to-white/0">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-2 text-center">Contact Details</h2>
          <div className="flex flex-col gap-5 w-full text-lg md:text-xl font-medium">
            <div className="flex items-center gap-4">
              <span className="text-pink-400 text-2xl md:text-3xl">📧</span>
              <a href="mailto:amanbrajani18@gmail.com" className="text-orange-400 underline hover:text-pink-400 transition break-all">amanbrajani18@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-pink-400 text-2xl md:text-3xl">📞</span>
              <a href="tel:+919825168321" className="text-green-400 underline hover:text-pink-400 transition">+91 9825168321</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-pink-400 text-2xl md:text-3xl">💼</span>
              <a href="https://www.linkedin.com/in/aman-rajani/" className="underline text-blue-500 hover:text-pink-400 transition" target="_blank" rel="noopener">LinkedIn</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-pink-400 text-2xl md:text-3xl">💻</span>
              <a href="https://www.github.com/amanbrajani" className="underline text-gray-300 hover:text-pink-400 transition" target="_blank" rel="noopener">GitHub</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
