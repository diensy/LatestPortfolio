"use client";
import { motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/constants";

export default function WhatICanBuild() {
  return (
    <section className="section-pad bg-[#0a0a0a] relative border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-[#E63946] uppercase mb-3">
            Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black mb-4">
            What I Can <span className="gradient-text">Build For You</span>
          </h3>
          <p className="text-[#888] max-w-2xl mx-auto">
            From complex backend architectures to seamless frontend experiences, I specialize in building heavy-lifting web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#111] border border-[#222] p-8 rounded-[2rem] hover:border-[#E63946]/40 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E63946] opacity-0 group-hover:opacity-5 blur-[60px] rounded-full transition-opacity duration-500" />
              
              <div className="w-14 h-14 bg-[#1a1a1a] border border-[#333] rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner relative z-10">
                {cap.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 relative z-10">{cap.title}</h4>
              <p className="text-[#888] text-sm leading-relaxed relative z-10">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
