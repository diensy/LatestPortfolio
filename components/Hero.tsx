"use client";
import { motion, Variants } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { PERSONAL, SOCIAL_LINKS, PROJECTS } from "@/lib/constants";
import Magnetic from "./Magnetic";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-[#050816] pointer-events-none" />

      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-[#050816] pointer-events-none" />

      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 hidden md:block">
        <motion.div
          className="absolute top-[20%] left-[15%] text-3xl md:text-5xl"
          animate={{ y: [0, -30, 0], rotate: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >⚛️</motion.div>
        <motion.div
          className="absolute top-[60%] right-[15%] text-3xl md:text-5xl"
          animate={{ y: [0, 40, 0], rotate: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >💚</motion.div>
        <motion.div
          className="absolute bottom-[20%] left-[20%] text-3xl md:text-5xl"
          animate={{ y: [0, -25, 0], rotate: [0, 10, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >▲</motion.div>
        <motion.div
          className="absolute top-[40%] right-[25%] text-3xl md:text-5xl"
          animate={{ y: [0, -20, 0], rotate: [0, -10, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >🎨</motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Status Badge */}
          <motion.div variants={item} className="flex justify-center mb-12">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md text-blue-400 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open for New Projects
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={item} className="text-[#94A3B8] text-lg mb-3 tracking-wide">
            Hi, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 leading-tight tracking-tight drop-shadow-2xl"
          >
            <span className="gradient-text">Dinesh Kumar</span>
            <br />
            <span className="text-white">Sahoo</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={item} className="flex items-center justify-center gap-4 mb-12">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-500" />
            <p className="text-xl sm:text-2xl gradient-text-subtle font-medium tracking-wide">
              Full Stack MERN Developer
            </p>
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-500" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Building scalable SaaS platforms, OTT streaming systems & multi-tenant web apps
            with clean architecture and modern technologies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24"
          >
            <Magnetic>
              <button
                onClick={() => scrollTo("#projects")}
                className="px-8 py-4 gradient-btn text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center cursor-pointer"
              >
                View Projects
              </button>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-8 py-4 glass-panel hover:bg-white/10 text-white font-medium rounded-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center shadow-lg cursor-pointer"
              >
                Hire Me
              </button>
            </Magnetic>
            <Magnetic>
              <a
                href={PERSONAL.resumeFile}
                download
                className="px-8 py-4 border border-zinc-800 hover:border-zinc-700 bg-brand-surface/50 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
              >
                <ExternalLink size={18} />
                Download CV
              </a>
            </Magnetic>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-20 md:gap-32 text-center pt-24 border-t border-white/5 mt-32"
          >
            {[
              { value: `${PROJECTS.length}+`, label: "Production Apps" },
              { value: `${((new Date().getTime() - new Date("2024-09-01").getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)}+`, label: "Years Experience" },
              { value: "9+", label: "Payment Integrations" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-4xl md:text-6xl font-black text-white drop-shadow-lg mb-3 tracking-tighter">{stat.value}</div>
                <div className="text-blue-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#444] hover:text-[#3B82F6] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}
