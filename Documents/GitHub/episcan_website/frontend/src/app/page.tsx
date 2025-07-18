import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { TechStack } from "../components/TechStack";
import { Benefits } from "../components/Benefits";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f0f1d] to-[#0a0a14] text-white">
      <main className="flex-1 flex flex-col gap-0">
        <Hero />
        <HowItWorks />
        <TechStack />
        <Benefits />
      </main>
    </div>
  );
}
