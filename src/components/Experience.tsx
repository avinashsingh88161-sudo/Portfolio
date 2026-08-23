"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Layers,
  Rocket,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { timelineData } from "@/data/experience";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<number, React.ComponentType<any>> = {
  1: GraduationCap,
  2: Code2,
  3: Layers,
  4: Rocket,
  5: Briefcase,
  6: TrendingUp,
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Journey"
          subtitle="Key milestones and experiences that have shaped my development career."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent-secondary/30 to-transparent" />

          <div className="space-y-12">
            {timelineData.map((item, i) => {
              const Icon = iconMap[item.id] || Code2;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 300,
                      }}
                      className="w-8 h-8 rounded-full bg-surface border-2 border-accent/50 flex items-center justify-center"
                    >
                      <Icon size={14} className="text-accent-light" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[45%] ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 transition-all duration-300 hover:border-white/10 hover:glow-sm group">
                      <span className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-accent/10 text-accent-light mb-3">
                        {item.date}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-light transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty space for opposite side */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
