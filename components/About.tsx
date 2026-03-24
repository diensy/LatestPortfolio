"use client";
import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="section-pad bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          {/* Left: Heading & Bio */}
          <div className="flex-1 md:pr-10">
            <h2 className="text-sm font-bold tracking-widest text-rose-500 uppercase mb-4">
              About Me
            </h2>
            <h3 className="text-4xl sm:text-5xl font-black mb-6 leading-tight tracking-tight">
              I build products that
              <br />
              <span className="gradient-text">scale & convert</span>
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
              {PERSONAL.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
              <div className="glass-panel p-6 rounded-3xl transition-transform hover:-translate-y-1">
                <div className="text-rose-500 font-black text-4xl mb-1 drop-shadow-md">4+</div>
                <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Production Apps</div>
              </div>
              <div className="glass-panel p-6 rounded-3xl transition-transform hover:-translate-y-1">
                <div className="text-rose-500 font-black text-4xl mb-1 drop-shadow-md">Scale</div>
                <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">Multi-tenant Arch</div>
              </div>
            </div>
          </div>

          {/* Right: Profile Card */}
          <div className="flex-1 w-full max-w-md relative hidden md:block">
            <div className="absolute inset-0 bg-rose-600 blur-[120px] opacity-20 rounded-full" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10">
              <img
                src={PERSONAL.image}
                alt={PERSONAL.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-black/40 backdrop-blur-md rounded-bl-[100px] border-b border-l border-white/10 flex items-center justify-center shadow-lg z-20">
                <div className="w-12 h-12 rounded-full border border-rose-500/30 flex items-center justify-center text-rose-500 font-bold bg-rose-500/10">
                  DK
                </div>
              </div>
              
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 border border-white/20 shadow-lg">
                  <span className="text-xl drop-shadow-md">🚀</span>
                </div>
                <h4 className="text-2xl font-black mb-3 text-white tracking-tight">Focus & Strategy</h4>
                <p className="text-zinc-300 text-sm leading-relaxed drop-shadow-md">
                  I don&apos;t just write code. I think about architecture, security, multi-tenancy, and how the product converts users into paying customers.
                </p>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl flex items-center gap-3 backdrop-blur-md"
            >
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <span className="text-sm font-semibold text-white tracking-wide">Full-Stack MERN</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
