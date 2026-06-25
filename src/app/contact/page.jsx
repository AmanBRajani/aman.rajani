"use client";
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ventureContacts = [
  { n: '01', name: 'Veolve Tech',    category: 'IT & AI Company',  phone: '+91 94288 23321', email: 'aman@veolve.com'        },
  { n: '02', name: 'Voya Marketing', category: 'Marketing Agency', phone: '+91 89808 03321', email: 'info@voyamarketing.in'  },
  { n: '03', name: 'Kartos Designz', category: 'Design Studio',    phone: '+91 94288 23321', email: 'info@kartosdesignz.in'  },
];

export default function Contact() {
  const form    = useRef();
  const [sending, setSending] = useState(false);
  const [toast,   setToast  ] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setToast(null);
    const formEl    = form.current;
    const userName  = formEl['user_name'].value;
    const userEmail = formEl['user_email'].value;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_REPLY_TEMPLATE_ID,
          {
            to_email: userEmail,
            to_name: userName,
            reply_subject: 'Thanks for reaching out to Aman Rajani',
            reply_message: `Hi ${userName},\n\nThank you for reaching out! I've received your message and will get back to you within 24 hours.\n\nFor urgent matters, call or WhatsApp: +91 94288 23321\n\nBest,\nAman Rajani\nFounder — Kartos Designz · Voya Marketing · Veolve Tech`,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        );
        setSending(false);
        setToast({ type: 'success', message: "Message sent. I'll be in touch shortly." });
        form.current.reset();
      })
      .catch(() => {
        setSending(false);
        setToast({ type: 'error', message: 'Something went wrong. Email me directly at aman@veolve.com' });
      });
  };

  const fieldClass = "w-full bg-transparent border-0 border-b border-white/12 py-4 text-white placeholder-gray-700 text-base focus:outline-none focus:border-blue-500/60 transition-colors duration-200";
  const labelClass = "text-gray-600 text-[10px] uppercase tracking-[0.18em] mb-2 block";

  return (
    <main className="bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-20 md:pt-28 pb-24 md:pb-36">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <p className="text-gray-600 text-[11px] uppercase tracking-[0.22em] mb-6">
            Let's Talk
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
            Get in Touch
          </h1>
          <p className="text-gray-500 max-w-md text-base leading-relaxed">
            Whether you need a brand, a marketing strategy, or a technology solution — reach out.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-5 gap-16 md:gap-20 mb-20 md:mb-28">

          {/* Left — direct contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-10"
          >
            <div>
              <p className="text-gray-600 text-[10px] uppercase tracking-[0.18em] mb-6">
                Direct
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-gray-700 text-xs mb-1">Phone</p>
                  <a
                    href="tel:+919428823321"
                    className="text-white text-base hover:text-blue-300 transition-colors"
                  >
                    +91 94288 23321
                  </a>
                </div>
                <div>
                  <p className="text-gray-700 text-xs mb-1">Email</p>
                  <a
                    href="mailto:aman@veolve.com"
                    className="text-white text-base hover:text-blue-300 transition-colors"
                  >
                    aman@veolve.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-700 text-xs mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/aman-rajani/"
                    target="_blank"
                    rel="noopener"
                    className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-1"
                  >
                    aman-rajani ↗
                  </a>
                </div>
                <div>
                  <p className="text-gray-700 text-xs mb-1">Instagram</p>
                  <a
                    href="https://www.instagram.com/veolvetech"
                    target="_blank"
                    rel="noopener"
                    className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-1"
                  >
                    @veolvetech ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/[0.06] pt-8">
              <p className="text-gray-600 text-xs leading-relaxed">
                Based in <span className="text-gray-300">Ahmedabad</span> &amp;{' '}
                <span className="text-gray-300">Jamnagar</span>.<br />
                Open to meetings, partnerships, and new ventures.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="md:col-span-3"
          >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>Name</label>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Your name"
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>What are you looking for?</label>
                <select
                  name="enquiry_type"
                  className={`${fieldClass} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-black">Select a service</option>
                  <option value="Design — Kartos Designz" className="bg-black">Design & Branding — Kartos Designz</option>
                  <option value="Marketing — Voya Marketing" className="bg-black">Marketing & Growth — Voya Marketing</option>
                  <option value="Technology — Veolve Tech" className="bg-black">Software & AI — Veolve Tech</option>
                  <option value="General Enquiry" className="bg-black">General Enquiry</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your business, challenge, or idea..."
                  required
                  rows={5}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={sending}
                  className="group flex items-center gap-3 text-white disabled:text-gray-600 transition-colors duration-200"
                >
                  <span className="text-base font-bold border-b border-white/25 pb-0.5 group-hover:border-white/60 disabled:border-gray-700 transition-colors duration-300">
                    {sending ? 'Sending…' : 'Send Message'}
                  </span>
                  {!sending && (
                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  )}
                  {sending && (
                    <svg className="w-4 h-4 animate-spin text-gray-600" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  )}
                </button>

                {toast && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-5 text-sm ${
                      toast.type === 'success' ? 'text-blue-400' : 'text-red-400'
                    }`}
                  >
                    {toast.message}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        {/* Per-venture contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <p className="text-gray-600 text-[10px] uppercase tracking-[0.22em]">By Venture</p>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {ventureContacts.map((vc, idx) => (
            <div
              key={vc.name}
              className="border-t border-white/[0.06] py-7 flex gap-8 items-start group"
            >
              <span className="text-gray-700 text-xs font-mono pt-1 w-7 shrink-0">{vc.n}</span>
              <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <p className="text-gray-600 text-[10px] uppercase tracking-wider mb-1">{vc.category}</p>
                  <h3 className="text-white font-bold text-base">{vc.name}</h3>
                </div>
                <div className="flex gap-8 md:gap-12">
                  <div>
                    <p className="text-gray-700 text-[10px] mb-1">Phone</p>
                    <a
                      href={`tel:${vc.phone.replace(/\s/g, '')}`}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {vc.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-700 text-[10px] mb-1">Email</p>
                    <a
                      href={`mailto:${vc.email}`}
                      className="text-gray-400 text-sm hover:text-white transition-colors break-all"
                    >
                      {vc.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </motion.div>

      </div>
    </main>
  );
}
