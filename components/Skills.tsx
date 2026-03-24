"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-zinc-950 relative border-y border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-rose-500 uppercase mb-3 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-rose-500"></span>
            Toolkit
            <span className="w-8 h-[1px] bg-rose-500"></span>
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
            My <span className="gradient-text">Tech Arsenal</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-panel rounded-3xl p-8 hover:border-rose-500/30 hover:shadow-[0_10px_40px_-15px_rgba(244,63,94,0.2)] transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h4 className="text-xl text-white font-bold mb-6 pb-4 tracking-wide group-hover:text-rose-400 transition-colors border-b border-white/5 flex items-center gap-3">
                {category}
              </h4>
              
              <div className="grid grid-cols-2 gap-y-5 gap-x-2">
                {items.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 group/skill cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg shadow-sm group-hover/skill:scale-110 group-hover/skill:border-rose-500/50 group-hover/skill:bg-rose-500/10 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-zinc-400 group-hover/skill:text-white transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
