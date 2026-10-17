"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Server, Database, Layout, Wrench, X } from "lucide-react";
import { skillCategories } from "@/data/skills";

// Map category title to appropriate icon
const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Backend: Server,
  Databases: Database,
  Frontend: Layout,
  "DevOps & Tools": Wrench,
};

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return skillCategories;

    const query = searchQuery.toLowerCase();
    return skillCategories
      .map((cat) => {
        const filteredSkills = cat.skills.filter(
          (skill) =>
            skill.name.toLowerCase().includes(query) ||
            (skill.tag && skill.tag.toLowerCase().includes(query))
        );
        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [searchQuery]);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Search Bar Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="section-tag mb-3">Technical Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Full Stack Skills & Tooling
            </h2>
            <p className="text-base text-slate-600">
              Comprehensive toolkit for engineering production-ready backends, databases, user interfaces, and automated pipelines.
            </p>
          </div>

          {/* Search Input Bar (As in reference screenshot 5) */}
          <div className="w-full sm:w-80 relative shrink-0">
            <div className="relative flex items-center">
              <Search
                size={18}
                className="absolute left-3.5 text-slate-400 pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skill or tool..."
                className="w-full pl-10 pr-9 py-2.5 bg-white rounded-2xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2x2 Master Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category, index) => {
            const Icon = categoryIcons[category.title] || Server;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 tracking-wide uppercase">
                        {category.title === "Frontend" ? "Frontend & UI" : category.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2.5 mt-6">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/70 text-slate-700 hover:text-slate-900 border border-emerald-200/80 text-xs font-mono font-medium transition-all duration-200 shadow-xs cursor-default"
                      >
                        <span className="font-semibold text-emerald-800">
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <>
                            <span className="text-emerald-400">•</span>
                            <span className="text-slate-500 text-[11px]">
                              {skill.tag}
                            </span>
                          </>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty state when search has no results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <p className="text-base font-semibold text-slate-700">
              No matching skills found for &quot;{searchQuery}&quot;
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Try searching for &quot;Node&quot;, &quot;React&quot;, &quot;MongoDB&quot;, or &quot;API&quot;
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-xl border border-emerald-200"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
