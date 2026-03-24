import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import TechStrength from "@/components/TechStrength";
import Projects from "@/components/Projects";
import WhatICanBuild from "@/components/WhatICanBuild";
import WhyChooseMe from "@/components/WhyChooseMe";
import HireMeCTA from "@/components/HireMeCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen relative">
      <PageLoader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      {/* Sections rendered in precise order based on implementation plan */}
      <Hero />
      <About />
      <Experience />
      <Skills />
      <TechStrength />
      <Projects />
      <WhatICanBuild />
      <WhyChooseMe />
      <HireMeCTA />
      <Contact />
      
      <Footer />
    </main>
  );
}
