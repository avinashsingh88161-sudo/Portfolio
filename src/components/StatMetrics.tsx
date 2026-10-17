"use client";

import { motion } from "framer-motion";
import { Clock, Server, Network, ShieldCheck, CheckCircle } from "lucide-react";

const metrics = [
  {
    icon: Clock,
    title: "MERN Stack",
    subtitle: "Full Stack Development",
    desc: "React, Node.js, Express & MongoDB ecosystem",
    badge: "Verified",
  },
  {
    icon: Server,
    title: "Node.js & Express",
    subtitle: "API & Backend Systems",
    desc: "Async I/O, REST APIs, and JWT authentication",
    badge: "Verified",
  },
  {
    icon: Network,
    title: "REST & WebSockets",
    subtitle: "Architecture & Real-time",
    desc: "Scalable integrations and Socket.io events",
    badge: "Verified",
  },
  {
    icon: ShieldCheck,
    title: "Production",
    subtitle: "Ready Web Solutions",
    desc: "Modular components, schema validation & CI/CD",
    badge: "Verified",
  },
];

export default function StatMetrics() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 group"
            >
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                  <item.icon size={22} />
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono font-medium border border-slate-200">
                  <CheckCircle size={10} className="text-emerald-500" />
                  {item.badge}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-slate-700 mt-0.5 mb-2">
                {item.subtitle}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
