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
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Problem />
        <Team />
        <Applications />

        <Roadmap />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}