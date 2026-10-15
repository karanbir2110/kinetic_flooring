import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Problem from "@/components/sections/Problem";
import Team from "@/components/sections/Team";
import Applications from "@/components/sections/Applications";
import Roadmap from "@/components/sections/Roadmap";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <a
        href="#problem"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-electric focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-onaccent"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Problem />
        <Team />
        <Applications />
        <FinalCTA />
        <Roadmap />
        
      </main>
      <Footer />
    </>
  );
}