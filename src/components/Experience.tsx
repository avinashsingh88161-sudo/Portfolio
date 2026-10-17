"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Rocket, Layers } from "lucide-react";
import { timelineData } from "@/data/experience";

const iconMap: Record<number, React.ComponentType<{ size?: number; className?: string }>> = {
  1: Briefcase,
  2: Code2,
  3: Rocket,
  4: Layers,
  5: GraduationCap,
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag mb-3">Career & Milestones</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Experience & Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A chronological timeline of hands-on software development internships, freelance client delivery, and academic foundation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-emerald-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {timelineData.map((item, index) => {
            const Icon = iconMap[item.id] || Code2;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Node Dot */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-emerald-600 shadow-sm">
                  <Icon size={14} />
                </div>

                {/* Timeline Content Card */}
                <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="badge-mint font-mono text-xs">
                      {item.date}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      STEP 0{item.id}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
