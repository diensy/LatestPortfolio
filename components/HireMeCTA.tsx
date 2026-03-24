"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function HireMeCTA() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-zinc-950 relative border-y border-white/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-3xl h-[200px] bg-rose-600 opacity-10 blur-[120px] rounded-[100%]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass-panel shadow-lg text-white text-sm font-medium mb-8">
            <span className="text-xl">🚀</span> Let&apos;s Build Your Next Project
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
            Ready to turn your idea into a{" "}
            <span className="gradient-text">scalable product?</span>
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I specialize in SaaS, streaming platforms, and complex web apps. Let&apos;s discuss your requirements and build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-2xl w-full sm:w-auto transition-all flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(244,63,94,0.4)]"
            >
              Hire Me Now <ArrowRight size={20} />
            </button>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-zinc-900 border border-white/10 hover:border-emerald-500/50 hover:bg-zinc-800 text-white font-bold rounded-2xl w-full sm:w-auto transition-all flex items-center justify-center gap-3 hover:-translate-y-1 shadow-lg"
            >
              <MessageSquare size={20} className="text-emerald-500" /> WhatsApp Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
