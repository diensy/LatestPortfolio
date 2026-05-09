import PageLoader from "@/components/PageLoader";

import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import TechStrength from "@/components/TechStrength";
import Projects from "@/components/Projects";
import WhatICanBuild from "@/components/WhatICanBuild";
import Workflow from "@/components/Workflow";
import WhyChooseMe from "@/components/WhyChooseMe";
import HireMeCTA from "@/components/HireMeCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen relative">
      <PageLoader />

      <ScrollProgress />
      <Navbar />
      
      {/* Sections rendered in precise order based on implementation plan */}
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Skills />
      <TechStrength />
      <Projects />
      <WhatICanBuild />
      <Workflow />
      <WhyChooseMe />
      <HireMeCTA />
      <Contact />
      
      <Footer />
    </main>
  );
}
