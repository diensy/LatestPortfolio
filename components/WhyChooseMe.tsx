"use client";
import { motion } from "framer-motion";
import { WHY_CHOOSE_ME } from "@/lib/constants";

export default function WhyChooseMe() {
  return (
    <section className="section-pad bg-[#111] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text & Grid */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[#E63946] uppercase mb-3">
              Value Proposition
            </h2>
            <h3 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
              Why <span className="gradient-text">Choose Me?</span>
            </h3>
            <p className="text-[#888] text-lg mb-10 leading-relaxed max-w-lg">
              I bring startup agility combined with enterprise quality. Whether you need an MVP built from scratch or a complex SaaS architecture scaled, I deliver results over just code.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_ME.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0a0a0a] p-5 rounded-2xl border border-[#222]"
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Abstract Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative justify-center hidden lg:flex"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E63946]/20 to-transparent blur-[80px] rounded-full" />
            <div className="relative w-full aspect-square max-w-[500px] border border-[#222] rounded-[3rem] bg-[#0a0a0a] overflow-hidden flex items-center justify-center p-8">
              <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b from-[#161616] to-transparent opacity-50" />
              
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full p-4">
                <div className="bg-[#111] rounded-2xl border border-[#222] flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-12 h-12 rounded-full border border-[emerald-500]/30 flex items-center justify-center bg-emerald-500/10 text-emerald-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Quality</span>
                </div>
                <div className="bg-[#111] rounded-2xl border border-[#222] translate-y-8 flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-12 h-12 rounded-full border border-[#E63946]/30 flex items-center justify-center bg-[#E63946]/10 text-[#E63946]">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Speed</span>
                </div>
                <div className="bg-[#111] rounded-2xl border border-[#222] -translate-y-8 flex items-center justify-center row-span-2 col-span-2 mt-4 p-8 relative overflow-hidden">
                   <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#E63946]/10 to-transparent" />
                   <h4 className="text-2xl font-black text-center text-white relative z-10 leading-snug">
                     100% Client<br/><span className="text-[#E63946]">Satisfaction</span>
                   </h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
