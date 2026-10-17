"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Shield,
  Layers,
  Database,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Cpu,
  KeyRound,
  FileCode,
} from "lucide-react";

const architectureLayers = [
  {
    id: "client",
    step: "01",
    title: "Client & Presentation Tier",
    icon: Globe,
    subtitle: "Interactive UI, SSR/CSR rendering, state management & real-time client sockets",
    tech: ["Next.js 16", "React 19", "Tailwind CSS", "Framer Motion", "Socket.io Client"],
    details: [
      "Optimized Core Web Vitals with hybrid Static & Server-Side rendering",
      "Real-time event subscriptions via persistent WebSocket channels",
      "Client-side schema validation with instant user feedback",
    ],
  },
  {
    id: "gateway",
    step: "02",
    title: "API Gateway & Security Tier",
    icon: Shield,
    subtitle: "Request throttling, JWT token verification, CORS & Helmet security headers",
    tech: ["Express.js", "JWT (JSON Web Tokens)", "Helmet.js", "Express Rate Limit", "CORS"],
    details: [
      "Role-Based Access Control (RBAC) middleware verifying cryptographic signatures",
      "DDoS and brute-force mitigation with IP-based rate limiting",
      "Payload sanitization protecting against XSS and NoSQL injection vectors",
    ],
  },
  {
    id: "services",
    step: "03",
    title: "Domain Services & Business Logic",
    icon: Layers,
    subtitle: "Controller-Service-Repository pattern, background workers & async I/O pipelines",
    tech: ["Node.js Runtime", "Async/Await", "Controller-Service Pattern", "BullMQ", "Event Handlers"],
    details: [
      "Decoupled architecture ensuring separation of concerns and high testability",
      "Non-blocking asynchronous task execution with centralized error handling",
      "Event-driven messaging triggering notifications and webhooks",
    ],
  },
  {
    id: "data",
    step: "04",
    title: "Data Persistence & In-Memory Caching",
    icon: Database,
    subtitle: "Schema validation, optimized compound indexing & sub-10ms Redis caching",
    tech: ["MongoDB (Mongoose)", "MySQL / PostgreSQL", "Redis In-Memory Cache", "Prisma"],
    details: [
      "High-throughput caching layer minimizing database load for frequent queries",
      "Strict schema definitions with Mongoose models and relational foreign keys",
      "Optimized compound indexes for fast text searches and aggregation pipelines",
    ],
  },
];

export default function Architecture() {
  const [activeLayer, setActiveLayer] = useState("client");

  return (
    <section id="architecture" className="section-padding bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-tag mb-3">System Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            End-to-End Full Stack Request Lifecycle
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A visual overview of how client requests traverse the presentation, gateway, service, and database tiers in modern MERN applications.
          </p>
        </div>

        {/* Interactive Architecture Flow Cards */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Layer Navigation */}
          <div className="lg:col-span-6 space-y-4">
            {architectureLayers.map((layer, index) => {
              const Icon = layer.icon;
              const isSelected = activeLayer === layer.id;

              return (
                <div key={layer.id}>
                  <motion.div
                    onClick={() => setActiveLayer(layer.id)}
                    whileHover={{ scale: 1.01 }}
                    className={`cursor-pointer p-5 sm:p-6 rounded-3xl border transition-all duration-300 ${
                      isSelected
                        ? "bg-white border-emerald-500 shadow-md shadow-emerald-500/10 ring-2 ring-emerald-500/20"
                        : "bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300 shadow-xs"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`p-3 rounded-2xl border transition-colors shrink-0 ${
                            isSelected
                              ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                              : "bg-slate-50 text-slate-500 border-slate-200"
                          }`}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-emerald-600">
                              LAYER {layer.step}
                            </span>
                            <span className="text-slate-300">•</span>
                            <h3 className="text-base font-bold text-slate-900">
                              {layer.title}
                            </h3>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {layer.subtitle}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg border font-mono transition-colors shrink-0 hidden sm:inline-block ${
                          isSelected
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-slate-50 text-slate-400 border-slate-200"
                        }`}
                      >
                        {isSelected ? "ACTIVE" : "VIEW"}
                      </span>
                    </div>

                    {/* Quick Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-100">
                      {layer.tech.map((t) => (
                        <span
                          key={t}
                          className="badge-mint-pill text-[11px] font-mono py-0.5 px-2"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Connector Arrow */}
                  {index < architectureLayers.length - 1 && (
                    <div className="flex justify-center py-2 text-emerald-400">
                      <ArrowDown size={18} className="animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Details of Active Tier */}
          <div className="lg:col-span-6 sticky top-28">
            {architectureLayers
              .filter((layer) => layer.id === activeLayer)
              .map((layer) => {
                const Icon = layer.icon;
                return (
                  <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
                      <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                        <Icon size={26} />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-emerald-600 uppercase">
                          Tier Details • Step {layer.step}
                        </span>
                        <h4 className="text-xl font-bold text-slate-900">
                          {layer.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {layer.subtitle}
                    </p>

                    <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">
                      Engineering Principles & Guarantees
                    </h5>

                    <ul className="space-y-3.5 mb-8">
                      {layer.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-emerald-600 shrink-0 mt-0.5"
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                        <Cpu size={15} className="text-emerald-600" />
                        <span>Production Readiness:</span>
                        <strong className="text-emerald-700">100%</strong>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">
                        MERN Architecture
                      </span>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
