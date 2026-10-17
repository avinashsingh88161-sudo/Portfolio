"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown, Terminal } from "lucide-react";
import HeroTelemetry from "./HeroTelemetry";
import { RESUME_URL } from "@/data/social";

const quickTechChips = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "TypeScript",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind",
  "Redis",
  "REST APIs",
  "Socket.io",
  "Git",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="badge-mint">
                  <Terminal size={14} className="text-emerald-600" />
                  Full Stack Developer | MERN Stack
                </span>

                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open to MERN / Full Stack Opportunities
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-5">
                Avinash Singh —
                <span className="block text-emerald-600 mt-1">
                  Full Stack Developer &
                </span>
                <span className="block text-slate-900">
                  Software Engineer
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-7">
                Full Stack Developer with expertise in building scalable MERN stack web applications, high-performance REST APIs, responsive modern user interfaces, real-time socket communications, and reliable database architectures.
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-9">
                {quickTechChips.map((tech) => (
                  <span
                    key={tech}
                    className="badge-mint-pill font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons Row */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  View My Work
                  <ArrowRight size={17} />
                </a>

                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FileDown size={17} className="text-slate-600" />
                  Download Resume
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-emerald-700 hover:text-emerald-800 font-semibold text-sm transition-colors group"
                >
                  Let&apos;s Connect
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Telemetry */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HeroTelemetry />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
