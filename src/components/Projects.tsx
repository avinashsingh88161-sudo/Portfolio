"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-tag mb-3">Featured Projects</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Production & Full Stack Applications
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A curated showcase of applications I&apos;ve built — ranging from AI platforms to real-time collaboration engines and financial trackers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header / Banner */}
                <div className="relative h-48 sm:h-52 bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex flex-col justify-between overflow-hidden">
                  {/* Subtle decorative grid */}
                  <div className="absolute inset-0 bg-grid opacity-10" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="badge-mint font-mono text-[11px] bg-white/10 text-emerald-300 border-white/20 backdrop-blur-sm">
                      {project.techStack[0]}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Title banner */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="badge-mint-pill text-xs font-mono py-1 px-2.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-7 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
                >
                  <FaGithub size={15} />
                  View Source Code
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-xl border border-emerald-200 transition-all hover:scale-105"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More on GitHub */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/avinashsingh88161-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all hover:scale-[1.02] group"
          >
            <FaGithub size={18} />
            <span>Explore More on GitHub</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform text-emerald-600"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
