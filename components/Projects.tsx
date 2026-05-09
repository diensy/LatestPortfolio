"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  MoveRight,
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
  const router = useRouter();

  return (
    <section id="projects" className="section-pad bg-brand-dark relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 md:flex md:justify-between md:items-end"
        >
          <div>
            <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">
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
            Click to view case study
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {(PROJECTS as Project[]).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => router.push(`/projects/${project.id}`)}
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
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-5xl drop-shadow-2xl filter group-hover:scale-110 transition-transform duration-500">
                    {project.emoji}
                  </span>
                  <div className="flex gap-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-bold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5 text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex-1 flex flex-col bg-[#0B1120]/50 backdrop-blur-lg">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all transform group-hover:scale-110">
                    <MoveRight size={18} />
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Footer Meta */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {project.tech.map((t, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[8px] font-bold text-zinc-500 uppercase">
                          {t[0]}
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                      Tech Stack
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                    View Details
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
