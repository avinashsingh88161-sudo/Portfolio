"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  ExternalLink,
  Zap,
  Boxes,
  Shield,
  Code2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { socialLinks } from "@/data/social";

const coreCompetencies = [
  "REST API Architecture & Design",
  "Full Stack Component & State Management",
  "Database Schema Design (MongoDB & MySQL)",
  "API Integrations & Webhooks",
  "Authentication & Authorization (JWT, RBAC)",
  "High-Performance Query & Cache Optimization",
  "Real-Time Applications (Socket.IO & WebSockets)",
  "Production Debugging & Observability",
];

const focusPillars = [
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimizing API performance through MongoDB indexing, Redis caching, async programming, and sub-200ms query optimizations.",
  },
  {
    icon: Boxes,
    title: "Scalability",
    desc: "Designing modular MVC microservices, reusable React hooks, BullMQ job queues, and scalable full-stack patterns.",
  },
  {
    icon: Shield,
    title: "Security",
    desc: "Implementing JWT, OAuth, RBAC, Helmet security headers, rate limiting, XSS protection, and bcrypt password hashing.",
  },
  {
    icon: Code2,
    title: "Maintainability",
    desc: "Following Controller → Service → Repository clean architecture, SOLID design patterns, and well-typed TypeScript interfaces.",
  },
];

const coreStackTags = [
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "MySQL",
  "Redis",
];

const currentFocus = [
  "Scalable Web Apps",
  "MERN Architecture",
  "Real-time Systems (Socket.io)",
  "AI & LLM Integrations",
];

export default function About() {
  const githubUrl =
    socialLinks.find((s) => s.name === "GitHub")?.url ||
    "https://github.com/avinashsingh88161-sudo";
  const linkedinUrl =
    socialLinks.find((s) => s.name === "LinkedIn")?.url ||
    "https://linkedin.com/in/avinash-singh-62a312384";

  return (
    <section id="about" className="section-padding bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-tag mb-3">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Architecting reliable, high-performance web applications
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Focused on writing robust server-side logic, secure REST endpoints, responsive client interfaces, and automated deployments.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm"
          >
            {/* Photo with status */}
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden mb-6 border border-slate-200 bg-slate-100">
              <Image
                src="/avinash.jpg"
                alt="Avinash Singh"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md py-1.5 px-3 rounded-xl border border-white/10 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-medium text-white">
                  Open to Opportunities
                </span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="text-center pb-5 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Avinash Singh</h3>
              <p className="text-xs font-mono text-emerald-700 font-semibold mt-0.5">
                Full Stack / MERN Developer
              </p>
              <div className="flex items-center justify-center gap-1 text-xs text-slate-500 mt-2">
                <MapPin size={13} className="text-slate-400" />
                <span>India</span>
              </div>
            </div>

            {/* Current Focus */}
            <div className="py-5 border-b border-slate-100">
              <p className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 mb-3">
                Current Focus
              </p>
              <ul className="space-y-2">
                {currentFocus.map((item) => (
                  <li
                    key={item}
                    className="text-xs font-medium text-slate-700 flex items-center gap-2"
                  >
                    <span className="text-emerald-600 font-bold">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Stack */}
            <div className="py-5 border-b border-slate-100">
              <p className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400 mb-3">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {coreStackTags.map((tag) => (
                  <span
                    key={tag}
                    className="badge-mint-pill text-[11px] font-mono py-1 px-2.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-5 grid grid-cols-2 gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold border border-slate-200 transition-colors"
              >
                <FaGithub size={14} />
                GitHub
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-semibold border border-blue-200 transition-colors"
              >
                <FaLinkedinIn size={14} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Column: Bio & Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Bio Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm">
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  I&apos;m a Full Stack Developer and BCA student specializing in building production-grade web applications with the <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong> and modern cloud tools.
                </p>
                <p>
                  My development philosophy revolves around clean architecture, end-to-end type safety, intuitive user experience, and optimized server-side response times. Whether building real-time dashboards or architecting secure microservices, I focus on delivering scalable, maintainable software.
                </p>
              </div>

              {/* Callout Highlight Box */}
              <div className="my-6 p-5 rounded-2xl bg-emerald-50/70 border-l-4 border-emerald-500 text-slate-800">
                <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                  Full Stack Excellence: Building responsive, user-friendly frontend experiences backed by secure and scalable Node.js/Express APIs and MongoDB schemas.
                </p>
              </div>

              {/* Core Competencies Header */}
              <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-4">
                Core Competencies:
              </h4>

              {/* 2-Column Competencies Checklist */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                {coreCompetencies.map((comp) => (
                  <div key={comp} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2
                      size={17}
                      className="text-emerald-600 shrink-0 mt-0.5"
                    />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars Section: What I Focus On */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center sm:text-left">
            What I Focus On
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {focusPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 group"
              >
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-100 transition-colors inline-block mb-4">
                  <pillar.icon size={22} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
