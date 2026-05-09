"use client";
import { motion } from "framer-motion";

const TECH_ICONS = [
  "React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", 
  "Tailwind", "TypeScript", "GSAP", "Framer Motion", "Stripe", "Razorpay"
];

export default function TechMarquee() {
  return (
    <div className="py-16 mt-20 bg-brand-dark/50 border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-brand-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-brand-dark to-transparent z-10" />
      
      <motion.div 
        className="flex gap-20 items-center whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...TECH_ICONS, ...TECH_ICONS, ...TECH_ICONS].map((tech, i) => (
          <span 
            key={i} 
            className="text-2xl md:text-3xl font-black text-white/20 hover:text-brand-primary transition-colors cursor-default uppercase tracking-tighter"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
