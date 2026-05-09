"use client";
import { motion } from "framer-motion";
import { WORKFLOW } from "@/lib/constants";

export default function Workflow() {
  return (
    <section className="section-pad bg-brand-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-brand-primary"></span>
            My Process
            <span className="w-8 h-[1px] bg-brand-primary"></span>
          </h2>
          <h3 className="text-4xl sm:text-5xl font-black text-white">
            How I <span className="gradient-text">Deliver Results</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {WORKFLOW.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              {/* Step Number Background */}
              <div className="absolute -top-10 -left-4 text-8xl font-black text-white/[0.03] select-none group-hover:text-brand-primary/[0.05] transition-colors duration-500">
                {item.step}
              </div>

              <div className="relative z-10 pt-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center text-brand-primary font-bold mb-6 group-hover:scale-110 group-hover:border-brand-primary/50 transition-all duration-300 shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-brand-subtext text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Connecting line for desktop */}
              {i < WORKFLOW.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-gradient-to-r from-brand-primary/30 to-transparent z-0 ml-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
