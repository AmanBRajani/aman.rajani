// ...existing code...
import { LucideCamera, LucideScanFace, LucideZap, LucideShoppingBag } from "lucide-react";

const steps = [
  {
    icon: <LucideCamera className="w-8 h-8 text-[#7f5af0]" />, title: "Upload Photo", desc: "Snap or upload a clear photo of your skin."
  },
  {
    icon: <LucideScanFace className="w-8 h-8 text-[#2cb67d]" />, title: "AI Scans Skin", desc: "Our AI analyzes your skin instantly and privately."
  },
  {
    icon: <LucideZap className="w-8 h-8 text-[#f5d90a]" />, title: "Get Results", desc: "Receive fast, accurate results with actionable insights."
  },
  {
    icon: <LucideShoppingBag className="w-8 h-8 text-[#ff6f61]" />, title: "Product Suggestions", desc: "Get curated product recommendations for your skin."
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-transparent to-[#0f0f1d]/60">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] bg-clip-text text-transparent">How Episcan Works</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
              <div
                key={step.title}
                className="bg-[#181824]/80 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center backdrop-blur-md border border-white/10 hover:scale-105 transition-transform"
              >
            <div className="mb-4">{step.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-white/90">{step.title}</h3>
            <p className="text-white/60 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
