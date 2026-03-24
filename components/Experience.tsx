"use client";
import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-zinc-950 relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* --- EXPERIENCE SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-rose-500 uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-rose-500"></span>
            Experience
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md">
            Where I&apos;ve <span className="gradient-text">Built Stuff</span>
          </h3>
        </motion.div>

        {/* Changelog-style Timeline */}
        <div className="relative border-l border-white/10 pl-8 ml-3 md:ml-4 mb-24">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[41px] top-6 md:top-8 w-4 h-4 rounded-full bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)] border-[3px] border-zinc-950 z-10" />

              {/* Content Card */}
              <div className="glass-panel rounded-3xl p-6 md:p-8 w-full hover:border-rose-500/30 hover:bg-white/[0.03] transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white tracking-tight mb-1">
                      {exp.role}
                    </h4>
                    <div className="text-base text-zinc-400 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
                      {exp.company}
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400 text-sm font-semibold tracking-wide md:self-start">
                    {exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-rose-500 mt-1.5 text-xs opacity-80">✦</span>
                      <span className="text-zinc-300 text-[15px] leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- EDUCATION SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 pt-16 mt-16 border-t border-white/5"
        >
          <h2 className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-emerald-500"></span>
            Education
          </h2>
          <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md mb-4">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">Academic Background</span>
          </h3>
        </motion.div>

        {/* Premium Grid Layout for Education */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Subtle Emerald Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none z-0" />
          
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-[0_20px_40px_-20px_rgba(16,185,129,0.3)] transition-all duration-300 z-10"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>

              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-semibold tracking-wide mb-6">
                {edu.period}
              </div>

              <h4 className="text-2xl font-bold text-white tracking-tight mb-3">
                {edu.degree}
              </h4>
              
              <div className="text-base text-zinc-400 font-medium flex items-center gap-2 mb-6 pb-6 border-b border-white/5">
                <span className="w-2 h-2 rounded-full bg-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                {edu.school}
              </div>
              
              <p className="text-zinc-300 text-[15px] leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
