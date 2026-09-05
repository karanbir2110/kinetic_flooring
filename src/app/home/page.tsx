import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Engineering from "@/components/sections/Engineering";
import SmartTile from "@/components/sections/SmartTile";
import Modularity from "@/components/sections/Modularity";
import Applications from "@/components/sections/Applications";
import BusinessValue from "@/components/sections/BusinessValue";
import Prototype from "@/components/sections/Prototype";
import Roadmap from "@/components/sections/Roadmap";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <a
        href="#solution"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-electric focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Engineering />
        <SmartTile />
        <Modularity />
        <Applications />
        <BusinessValue />
        <Prototype />
        <Roadmap />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
