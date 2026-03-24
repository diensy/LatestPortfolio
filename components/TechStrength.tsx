"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TECH_STRENGTH } from "@/lib/constants";

export default function TechStrength() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-strength" className="section-pad bg-[#0a0a0a] relative">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#E63946] uppercase mb-3">
            Proficiency
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black">
            Core <span className="gradient-text">Strengths</span>
          </h3>
          <p className="text-[#888] mt-4 max-w-2xl mx-auto">
            My expertise distributed across the full stack ecosystem.
          </p>
        </div>

        <div className="space-y-8">
          {TECH_STRENGTH.map((tech, index) => (
            <div key={tech.label} className="w-full">
              <div className="flex justify-between items-end mb-2">
                <span className="text-white font-medium text-sm md:text-base">{tech.label}</span>
                <span className="text-[#E63946] font-mono text-sm">{tech.percentage}%</span>
              </div>
              <div className="h-3 w-full bg-[#161616] rounded-full overflow-hidden border border-[#222]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${tech.percentage}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#E63946] to-[#ff6b7a] rounded-full relative"
                >
                  {/* Highlight sheen */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/20 rounded-t-full" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
