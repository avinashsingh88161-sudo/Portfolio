"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

// Curated gradient pairs for project cards
const gradients = [
  "from-indigo-500/20 to-purple-600/20",
  "from-cyan-500/20 to-blue-600/20",
  "from-emerald-500/20 to-teal-600/20",
  "from-orange-500/20 to-red-600/20",
  "from-violet-500/20 to-pink-600/20",
  "from-amber-500/20 to-yellow-600/20",
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects I've built — from AI-powered platforms to modern web applications."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/10 hover:glow-sm"
            >
              {/* Project Image / Screenshot */}
              <div className="relative h-48 overflow-hidden bg-surface-light border-b border-white/5">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]}`}>
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    
                    {/* Project initials */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-500 group-hover:scale-110 transform">
                        {project.title
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                )}

                {/* Hover overlay with buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3 z-10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-sm font-medium text-white hover:bg-white/20 transition-colors"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent/80 backdrop-blur rounded-lg text-sm font-medium text-white hover:bg-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-muted border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-muted border border-white/5">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/avinashsingh88161-sudo" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-medium text-muted hover:text-foreground transition-all duration-300 hover:glow-sm"
          >
            View More Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
