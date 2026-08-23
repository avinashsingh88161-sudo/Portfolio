"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { projects } from "@/data/projects";

const GITHUB_URL = "https://github.com/avinashsingh88161-sudo"; // Replace with your GitHub URL
const GITHUB_USERNAME = "avinashsingh88161-sudo"; // Replace with your GitHub username

// Featured repos derived from projects
const featuredRepos = projects.slice(0, 3).map((p, index) => ({
  name: p.title,
  description: p.description.slice(0, 100) + "...",
  language: p.techStack[0],
  stars: 12 + index * 4, // Deterministic mock data to avoid hydration mismatch
  forks: 3 + index * 2,  // Deterministic mock data to avoid hydration mismatch
  url: p.githubUrl,
}));

const stats = [
  { label: "Repositories", value: "10+" },
  { label: "Contributions", value: "100+" },
  { label: "Languages", value: "6+" },
  { label: "Stars", value: "10+" },
];

// Language color mapping
const langColors: Record<string, string> = {
  React: "#61DAFB",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  "Node.js": "#339933",
  Python: "#3776AB",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
};

export default function GitHubSection() {
  return (
    <section id="github" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="GitHub"
          subtitle="Explore my code and open source projects."
        />

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <GlassCard className="flex flex-col sm:flex-row items-center gap-6 p-8">
            {/* Avatar */}
            <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center border border-white/10">
              <Image
                src="/avinash.jpg"
                alt="Avinash Singh"
                width={80}
                height={80}
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>

            <div className="text-center sm:text-left flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-1">
                @{GITHUB_USERNAME}
              </h3>
              <p className="text-sm text-muted mb-4">
                Full Stack Developer · Building with MERN Stack
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-lg font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Featured Repos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-10"
        >
          {featuredRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -4 }}
              className="block glass rounded-2xl p-6 transition-all duration-300 hover:border-white/10 hover:glow-sm group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2 text-foreground group-hover:text-accent-light transition-colors">
                  <FaGithub size={16} />
                  <span className="font-semibold text-sm">{repo.name}</span>
                </div>
                <ExternalLink
                  size={14}
                  className="text-muted group-hover:text-accent-light transition-colors"
                />
              </div>
              <p className="text-xs text-muted leading-relaxed mb-4">
                {repo.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        langColors[repo.language] || "#6366f1",
                    }}
                  />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} />
                  {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02]"
          >
            <FaGithub size={18} />
            Visit GitHub
            <ExternalLink
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
