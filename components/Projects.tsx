"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, MoveRight, Layers, Layout, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  // Close modal on escape
  if (typeof window !== "undefined") {
    window.onkeydown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
  }

  return (
    <section id="projects" className="section-pad bg-[#111] relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:flex md:justify-between md:items-end"
        >
          <div>
            <h2 className="text-sm font-bold tracking-widest text-[#E63946] uppercase mb-3">
              Portfolio
            </h2>
            <h3 className="text-4xl sm:text-5xl font-black mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h3>
            <p className="text-[#888] max-w-xl text-lg">
              Real-world applications built for scale, performance, and actual business needs.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#666] text-sm">
            <span className="w-12 h-[1px] bg-[#333]" />
            Scroll to explore
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer glass-panel rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col h-full shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Project Top Section: Visual / Theme */}
              <div
                className={`h-56 relative p-8 flex flex-col justify-end overflow-hidden bg-gradient-to-t ${project.bgGradient}`}
              >
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700 mix-blend-screen"
                  style={{
                    background: `radial-gradient(circle at 50% 120%, ${project.color} 0%, transparent 60%)`,
                  }}
                />
                
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="w-14 h-14 bg-black/40 rounded-2xl backdrop-blur-md border border-white/10 flex items-center justify-center text-3xl shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                    {project.emoji}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">
                      {project.title}
                    </h4>
                    <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 bg-black/30 rounded-full text-zinc-300 border border-white/5 backdrop-blur-md">
                      {project.links.length > 1 ? "Multi-Panel Ecosystem" : "Web Application"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Bottom Section: Info */}
              <div className="p-8 flex-1 flex flex-col bg-zinc-950/50 backdrop-blur-lg">
                <p className="text-zinc-400 mb-6 leading-relaxed flex-1 text-sm md:text-base">
                  {project.shortDesc}
                </p>

                {/* Impact bullets summary (first 2) */}
                <ul className="mb-8 space-y-3">
                  {project.impact.slice(0, 2).map((imp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="text-rose-500 mt-0.5 font-bold">✓</span>
                      <span className="line-clamp-2 leading-relaxed">{imp}</span>
                    </li>
                  ))}
                </ul>

                <hr className="border-white/5 mb-6" />

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium text-zinc-300 bg-zinc-900 px-3 py-1.5 rounded-lg border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded-lg border border-white/5">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 group-hover:bg-rose-600 group-hover:border-rose-500 group-hover:text-white transition-all transform group-hover:scale-110">
                    <MoveRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
            />
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 top-10 md:top-20 md:inset-x-20 xl:inset-x-[15%] z-[201] bg-zinc-950 rounded-t-3xl border-t border-x border-white/10 flex flex-col overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
            >
              {/* Header */}
              <div className="px-6 py-5 md:px-10 md:py-8 border-b border-white/10 flex items-center justify-between sticky top-0 bg-zinc-950/80 backdrop-blur-xl z-20">
                <div className="flex items-center gap-4">
                  <span className="text-3xl md:text-4xl bg-white/5 p-3 rounded-2xl border border-white/10">{selectedProject.emoji}</span>
                  <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-rose-600 hover:text-white border border-white/10 flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 to-zinc-950">
                <div className="max-w-4xl border-l-[4px] border-rose-500 pl-6 mb-12">
                  <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left Column: Impact & Features */}
                  <div>
                    <h4 className="text-sm font-bold tracking-widest text-white uppercase mb-6 flex items-center gap-2">
                      <Layers size={16} className="text-[#E63946]" /> Business Impact
                    </h4>
                    <ul className="space-y-4 mb-10">
                      {selectedProject.impact.map((imp, i) => (
                        <li key={i} className="flex items-start gap-3 bg-[#111] p-4 rounded-xl border border-[#222]">
                          <span className="text-[#E63946] mt-0.5">✔</span>
                          <span className="text-sm text-[#bbb] leading-relaxed">{imp}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-sm font-bold tracking-widest text-white uppercase mb-6 flex items-center gap-2">
                      <Layout size={16} className="text-[#E63946]" /> Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                      {selectedProject.features.map((feature, i) => (
                        <div key={i} className="text-sm text-[#888] bg-[#111] px-4 py-3 rounded-lg border border-[#1a1a1a]">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Links & Tech */}
                  <div>
                    <div className="sticky top-0 bg-[#111] p-6 rounded-2xl border border-[#222]">
                      <h4 className="text-sm font-bold tracking-widest text-[#E63946] uppercase mb-4">
                        Live Platforms
                      </h4>
                      <div className="flex flex-col gap-3 mb-8">
                         {selectedProject.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center justify-between p-4 bg-[#0a0a0a] rounded-xl border border-[#333] hover:border-[#E63946] transition-colors"
                            >
                              <span className="font-semibold text-white group-hover:text-[#E63946] transition-colors">
                                {link.label}
                              </span>
                              <div className="flex items-center gap-2 text-[#888] group-hover:text-[#E63946] text-sm font-medium">
                                Visit <ExternalLink size={16} />
                              </div>
                            </a>
                         ))}
                      </div>

                      <h4 className="text-sm font-bold tracking-widest text-[#E63946] uppercase mb-4">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span
                             key={t}
                             className="px-3 py-1.5 bg-[#161616] text-[#ccc] border border-[#333] rounded-[0.5rem] text-sm font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
