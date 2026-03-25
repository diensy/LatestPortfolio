"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  MoveRight,
  Layers,
  Layout,
  Monitor,
  ChevronRight,
} from "lucide-react";
import { PROJECTS } from "@/lib/constants";

type Panel = {
  label: string;
  color: string;
  description: string;
  images: string[];
};

type Project = (typeof PROJECTS)[0] & { panels?: Panel[] };

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activePanel, setActivePanel] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActivePanel(0);
    setActiveImage(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActivePanel(0);
    setActiveImage(0);
  };

  // Close on escape
  if (typeof window !== "undefined") {
    window.onkeydown = (e) => {
      if (e.key === "Escape") closeProject();
    };
  }

  const currentPanel = selectedProject?.panels?.[activePanel];

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
          {(PROJECTS as Project[]).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openProject(project)}
              className="group cursor-pointer glass-panel rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col h-full shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Card Visual Header */}
              <div
                className={`h-56 relative p-8 flex flex-col justify-end overflow-hidden bg-gradient-to-t ${project.bgGradient}`}
              >
                {/* If panels exist → show the first panel image as bg preview */}
                {project.panels && project.panels[0]?.images[0] && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 scale-105 group-hover:scale-110 transition-transform"
                    style={{ backgroundImage: `url("${encodeURI(project.panels[0].images[0])}")` }}
                  />
                )}

                {/* Panel badges */}
                {project.panels && (
                  <div className="absolute top-4 right-4 flex gap-1.5 z-20">
                    {project.panels.map((p) => (
                      <span
                        key={p.label}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20 backdrop-blur-md shadow-sm"
                        style={{ 
                          background: `${p.color}66`, // Increased opacity for better visibility
                          color: "#fff", // White text for maximum contrast on dark backgrounds
                          borderColor: `${p.color}aa` // Themed border
                        }}
                      >
                        {p.label}
                      </span>
                    ))}
                  </div>
                )}

                <div className="relative z-10 flex flex-col gap-3">
                  <div className="w-14 h-14 bg-black/40 rounded-2xl backdrop-blur-md border border-white/10 flex items-center justify-center text-3xl shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
                    {project.emoji}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">
                      {project.title}
                    </h4>
                    <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 bg-black/30 rounded-full text-zinc-300 border border-white/5 backdrop-blur-md">
                      {project.panels
                        ? `${project.panels.length}-Panel Ecosystem`
                        : "Web Application"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col bg-zinc-950/50 backdrop-blur-lg">
                <p className="text-zinc-400 mb-6 leading-relaxed flex-1 text-sm md:text-base">
                  {project.shortDesc}
                </p>

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

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[200]"
            />

            {/* Modal Sheet */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 top-8 md:top-16 md:inset-x-12 xl:inset-x-[12%] z-[201] bg-zinc-950 rounded-t-3xl border-t border-x border-white/10 flex flex-col overflow-hidden shadow-[0_-20px_80px_rgba(0,0,0,0.9)]"
            >
              {/* ── Modal Header ── */}
              <div className="px-6 py-5 md:px-10 md:py-7 border-b border-white/10 flex items-center justify-between sticky top-0 bg-zinc-950/90 backdrop-blur-xl z-20">
                <div className="flex items-center gap-4">
                  <span className="text-3xl md:text-4xl bg-white/5 p-3 rounded-2xl border border-white/10">
                    {selectedProject.emoji}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-3xl font-black text-white tracking-tight leading-tight">
                      {selectedProject.title}
                    </h3>
                    {selectedProject.panels && (
                      <p className="text-xs text-zinc-500 mt-0.5">
                        {selectedProject.panels.length} Independent Panels
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={closeProject}
                  className="w-11 h-11 rounded-full bg-white/5 hover:bg-rose-600 hover:text-white border border-white/10 flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <X size={20} />
                </button>
              </div>

              {/* ── Modal Body ── */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 to-zinc-950">

                {/* Description */}
                <div className="max-w-4xl border-l-[4px] border-rose-500 pl-6 mb-10">
                  <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                {/* ── Panel Gallery (if panels exist) ── */}
                {selectedProject.panels && selectedProject.panels.length > 0 && (
                  <div className="mb-12">
                    <h4 className="text-sm font-bold tracking-widest text-[#E63946] uppercase mb-5 flex items-center gap-2">
                      <Monitor size={15} className="text-[#E63946]" />
                      Platform Panels
                    </h4>

                    {/* Panel Tabs */}
                    <div className="flex gap-2 mb-6 flex-wrap">
                      {selectedProject.panels.map((panel, idx) => (
                        <button
                          key={panel.label}
                          onClick={() => {
                            setActivePanel(idx);
                            setActiveImage(0);
                          }}
                          className="relative px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300"
                          style={
                            activePanel === idx
                              ? {
                                  background: `${panel.color}22`,
                                  borderColor: panel.color,
                                  color: panel.color,
                                }
                              : {
                                  background: "transparent",
                                  borderColor: "#333",
                                  color: "#888",
                                }
                          }
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ background: activePanel === idx ? panel.color : "#555" }}
                            />
                            {panel.label}
                            <span className="text-[10px] opacity-60">
                              ({panel.images.length} screens)
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Panel Description */}
                    {currentPanel && (
                      <div
                        className="mb-5 px-4 py-3 rounded-xl border text-sm text-zinc-400 leading-relaxed"
                        style={{
                          background: `${currentPanel.color}0d`,
                          borderColor: `${currentPanel.color}33`,
                        }}
                      >
                        <span style={{ color: currentPanel.color }} className="font-semibold mr-2">
                          {currentPanel.label}:
                        </span>
                        {currentPanel.description}
                      </div>
                    )}

                    {/* Image Strip */}
                    {currentPanel && (
                      <div>
                        {/* Main image viewer */}
                        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 mb-3 group">
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={`${activePanel}-${activeImage}`}
                              src={currentPanel.images[activeImage]}
                              alt={`${selectedProject.title} – ${currentPanel.label} screenshot ${activeImage + 1}`}
                              className="w-full h-full object-cover"
                              initial={{ opacity: 0, scale: 1.03 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.98 }}
                              transition={{ duration: 0.35 }}
                            />
                          </AnimatePresence>

                          {/* Prev/Next arrows */}
                          {currentPanel.images.length > 1 && (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImage((prev) =>
                                    prev === 0 ? currentPanel.images.length - 1 : prev - 1
                                  );
                                }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                              >
                                <ChevronRight size={16} className="rotate-180" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveImage((prev) =>
                                    prev === currentPanel.images.length - 1 ? 0 : prev + 1
                                  );
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                              >
                                <ChevronRight size={16} />
                              </button>
                            </>
                          )}

                          {/* Counter */}
                          <span className="absolute bottom-3 right-3 text-xs bg-black/70 text-zinc-400 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                            {activeImage + 1} / {currentPanel.images.length}
                          </span>
                        </div>

                        {/* Thumbnail strip */}
                        <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar snap-x">
                          {currentPanel.images.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveImage(idx)}
                              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all snap-start ${
                                activeImage === idx
                                  ? "border-white/60 opacity-100 scale-105"
                                  : "border-white/10 opacity-50 hover:opacity-75"
                              }`}
                            >
                              <img
                                src={img}
                                alt={`thumb ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ── Grid: Impact + Features | Links + Tech ── */}
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Left: Impact & Features */}
                  <div>
                    <h4 className="text-sm font-bold tracking-widest text-white uppercase mb-5 flex items-center gap-2">
                      <Layers size={15} className="text-[#E63946]" /> Business Impact
                    </h4>
                    <ul className="space-y-3 mb-10">
                      {selectedProject.impact.map((imp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 bg-[#111] p-4 rounded-xl border border-[#222]"
                        >
                          <span className="text-[#E63946] mt-0.5 flex-shrink-0">✔</span>
                          <span className="text-sm text-[#bbb] leading-relaxed">{imp}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-sm font-bold tracking-widest text-white uppercase mb-5 flex items-center gap-2">
                      <Layout size={15} className="text-[#E63946]" /> Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.features.map((feature, i) => (
                        <div
                          key={i}
                          className="text-sm text-[#aaa] bg-[#111] px-4 py-3 rounded-lg border border-[#1a1a1a] hover:border-[#333] transition-colors leading-snug"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Live Links + Tech */}
                  <div>
                    <div className="sticky top-4 bg-[#111] p-6 rounded-2xl border border-[#222]">
                      <h4 className="text-sm font-bold tracking-widest text-[#E63946] uppercase mb-4">
                        Live Platforms
                      </h4>
                      <div className="flex flex-col gap-3 mb-8">
                        {selectedProject.links.map((link) => {
                          // Find matching panel color
                          const matchedPanel = selectedProject.panels?.find(
                            (p) =>
                              p.label.toLowerCase().includes(link.label.toLowerCase()) ||
                              link.label.toLowerCase().includes(p.label.toLowerCase().split(" ")[0])
                          );
                          const accentColor = matchedPanel?.color || "#E63946";

                          return (
                            <a
                              key={link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center justify-between p-4 bg-[#0a0a0a] rounded-xl border border-[#333] hover:border-current transition-colors"
                              style={{ ["--hover-color" as string]: accentColor }}
                              onMouseEnter={(e) =>
                                ((e.currentTarget as HTMLElement).style.borderColor = accentColor)
                              }
                              onMouseLeave={(e) =>
                                ((e.currentTarget as HTMLElement).style.borderColor = "#333")
                              }
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                  style={{ background: accentColor }}
                                />
                                <span className="font-semibold text-white">{link.label}</span>
                              </div>
                              <div className="flex items-center gap-1.5 text-[#666] text-sm font-medium group-hover:text-white transition-colors">
                                Visit <ExternalLink size={14} />
                              </div>
                            </a>
                          );
                        })}
                      </div>

                      <h4 className="text-sm font-bold tracking-widest text-[#E63946] uppercase mb-4">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 bg-[#161616] text-[#ccc] border border-[#333] rounded-[0.5rem] text-xs font-medium hover:border-[#555] transition-colors"
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
