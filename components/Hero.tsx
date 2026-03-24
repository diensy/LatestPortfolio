"use client";
import { motion, Variants } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { PERSONAL, SOCIAL_LINKS } from "@/lib/constants";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(230,57,70,0.08) 0%, transparent 70%)"
      }} />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E63946 0%, transparent 70%)", top: "10%", right: "5%" }}
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E63946 0%, transparent 70%)", bottom: "15%", left: "5%" }}
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Available badge */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white text-sm font-medium shadow-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
              Available for Freelance Work
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={item} className="text-[#a1a1aa] text-lg mb-3 tracking-wide">
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
          <motion.div variants={item} className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-rose-500" />
            <p className="text-xl sm:text-2xl gradient-text-subtle font-medium tracking-wide">
              Full Stack MERN Developer
            </p>
            <span className="w-12 h-[2px] bg-gradient-to-l from-transparent to-rose-500" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-[#a1a1aa] text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building scalable SaaS platforms, OTT streaming systems & multi-tenant web apps
            with clean architecture and modern technologies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(244,63,94,0.4)] w-full sm:w-auto flex items-center justify-center"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 glass-panel hover:bg-white/10 text-white font-medium rounded-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center shadow-lg"
            >
              Hire Me
            </button>
            <a
              href={PERSONAL.resumeFile}
              download
              className="px-8 py-4 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <ExternalLink size={18} />
              Download CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-10 md:gap-16 text-center pt-8 border-t border-white/5"
          >
            {[
              { value: "4+", label: "Production Apps" },
              { value: "1+", label: "Year Experience" },
              { value: "3", label: "Payment Integrations" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-black text-white drop-shadow-lg mb-1">{stat.value}</div>
                <div className="text-zinc-500 text-sm font-medium tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#444] hover:text-[#E63946] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}
