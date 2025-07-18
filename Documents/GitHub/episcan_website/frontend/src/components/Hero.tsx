import { cn } from "../lib/utils";
import { Button } from "./Button";
// ...existing code...
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 text-center">
      {/* Glowing gradient blobs */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-br from-[#7f5af0]/40 to-[#2cb67d]/30 rounded-full blur-3xl opacity-60 z-0" />
      <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] bg-clip-text text-transparent mb-4">
        Your Personalized AI Skin Health Scanner
      </h1>
      <p className="relative z-10 text-lg md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
        Scan your skin with AI. Fast, private, and accurate — no login, no data sharing.
      </p>
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/test">
          <Button size="lg">Try Now</Button>
        </Link>
        <a href="#how-it-works" className="btn-secondary">Learn More</a>
      </div>
    </section>
  );
}
