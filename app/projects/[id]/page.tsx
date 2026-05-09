"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Monitor,
  Code2,
  Zap,
  Globe
} from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Magnetic from "@/components/Magnetic";

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();

  const project = PROJECTS.find((p) => p.id === id);

  const [activePanel, setActivePanel] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-dark text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push("/")}
            className="text-blue-500 hover:underline flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const currentPanel = project.panels?.[activePanel];

  return (
    <div className="bg-brand-dark min-h-screen text-zinc-300">
      <Navbar />

      <main className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* ── Breadcrumb & Back ── */}
          <button
            onClick={() => router.push("/#projects")}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-10 text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={14} /> Back to Projects
          </button>

          {/* ── Header: Proper Formal Scale ── */}
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl border border-white/10">
                  {project.emoji}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                  {project.title}
                </h1>
              </div>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-medium uppercase tracking-wider">Type</span>
                <span className="text-white font-bold">Production Build</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-medium uppercase tracking-wider">Stack</span>
                <span className="text-white font-bold">{project.tech[0]} Fullstack</span>
              </div>
              <div className="pt-4 border-t border-white/5">
                <a
                  href={project.links[0]?.url}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/20"
                >
                  Live Preview <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* ── Gallery: Stable & Formal ── */}
          {project.panels && project.panels.length > 0 && (
            <div className="mb-24">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-2">
                    Visual Systems
                  </h2>
                  <p className="text-sm text-zinc-500 font-medium">Explore the interface architecture</p>
                </div>
                <div className="flex gap-2 bg-white/5 p-1.5 rounded-xl border border-white/5">
                  {project.panels.map((panel, idx) => (
                    <button
                      key={panel.label}
                      onClick={() => { setActivePanel(idx); setActiveImage(0); }}
                      className={`px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                        activePanel === idx 
                        ? "bg-white/10 text-white shadow-xl border border-white/10" 
                        : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {panel.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-6">
                  {/* Main Viewer - Stable & Responsive */}
                  <div className="relative min-h-[300px] md:min-h-[450px] w-full rounded-2xl overflow-hidden border border-white/5 bg-[#080808] flex items-center justify-center group shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${activePanel}-${activeImage}`}
                        src={currentPanel?.images[activeImage]}
                        alt="Interface Design"
                        className="max-w-full max-h-[500px] object-contain p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {/* Subtle Controls */}
                    {currentPanel && currentPanel.images.length > 1 && (
                      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <button
                          onClick={() => setActiveImage((prev) => prev === 0 ? currentPanel.images.length - 1 : prev - 1)}
                          className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-blue-600 transition-all"
                        >
                          <ChevronRight size={18} className="rotate-180" />
                        </button>
                        <button
                          onClick={() => setActiveImage((prev) => prev === currentPanel.images.length - 1 ? 0 : prev + 1)}
                          className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-blue-600 transition-all"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    )}

                    <div className="absolute bottom-4 right-6 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-xl text-[9px] font-black text-white/40 tracking-[0.2em] uppercase">
                      {activeImage + 1} / {currentPanel?.images.length}
                    </div>
                  </div>

                  {/* Thumbs - Minimalist Row */}
                  <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar">
                    {currentPanel?.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`flex-shrink-0 w-20 md:w-24 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                          activeImage === idx ? "border-blue-500" : "border-transparent opacity-30 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="preview" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sidebar Info - Compact & Stable */}
                <div className="lg:col-span-4 bg-white/[0.01] border border-white/5 rounded-2xl p-6 md:p-8">
                  <div className="mb-8">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
                      <Monitor size={16} />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">
                      {currentPanel?.label}
                    </h3>
                    <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">
                      {currentPanel?.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-[9px] font-black text-zinc-600 uppercase tracking-widest">
                      <div className="w-1 h-1 rounded-full bg-blue-500/30" />
                      Production State
                    </div>
                    <div className="flex items-center gap-2 text-[9px] font-black text-zinc-600 uppercase tracking-widest">
                      <div className="w-1 h-1 rounded-full bg-blue-500/30" />
                      Optimized Code
                    </div>
                    <div className="flex items-center gap-2 text-[9px] font-black text-zinc-600 uppercase tracking-widest">
                      <div className="w-1 h-1 rounded-full bg-blue-500/30" />
                      User Tested
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}


          {/* ── Details Grid: Balanced Formal Grid ── */}
          <div className="grid lg:grid-cols-[1fr_300px] gap-16">
            <div className="space-y-16">
              {/* Business Impact */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Zap size={14} />
                  </div>
                  <h2 className="text-sm font-bold text-white uppercase tracking-widest">Business Impact</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.impact.map((imp, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 flex gap-4">
                      <span className="text-blue-500 font-bold text-xs">0{i + 1}</span>
                      <p className="text-sm text-zinc-400 leading-relaxed">{imp}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Core Features */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Code2 size={14} />
                  </div>
                  <h2 className="text-sm font-bold text-white uppercase tracking-widest">Core Functionality</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white/[0.01] border border-white/5 rounded-lg text-[11px] font-bold text-zinc-500 uppercase tracking-tight">
                      <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                      {feature}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Meta */}
            <aside className="space-y-8">
              <div className="sticky top-28 space-y-8">
                <div>
                  <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10">
                  <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">Project Scope</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                    A full-scale enterprise solution involving multi-panel management, secure data handling, and high-performance frontend delivery.
                  </p>
                  <button
                    onClick={() => router.push("/#contact")}
                    className="w-full py-3 border border-blue-500/30 hover:bg-blue-500/5 text-blue-500 rounded-xl text-xs font-bold uppercase tracking-widest transition-all"
                  >
                    Discuss Similar Project
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}