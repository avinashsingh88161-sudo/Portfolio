"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { FaJava, FaDatabase, FaCode } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import SectionHeading from "./ui/SectionHeading";
import { skillCategories } from "@/data/skills";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  html5: SiHtml5,
  css3: SiCss,
  javascript: SiJavascript,
  react: SiReact,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  sql: FaDatabase,
  mysql: SiMysql,
  java: FaJava,
  python: SiPython,
  c: TbBrandCpp,
  git: SiGit,
  github: SiGithub,
  vscode: FaCode,
  postman: SiPostman,
  vercel: SiVercel,
  render: SiRender,
};

// Curated colors for each skill icon
const colorMap: Record<string, string> = {
  html5: "#E34F26",
  css3: "#1572B6",
  javascript: "#F7DF1E",
  react: "#61DAFB",
  tailwind: "#06B6D4",
  bootstrap: "#7952B3",
  nodejs: "#339933",
  express: "#FFFFFF",
  mongodb: "#47A248",
  sql: "#4479A1",
  mysql: "#4479A1",
  java: "#ED8B00",
  python: "#3776AB",
  c: "#A8B9CC",
  git: "#F05032",
  github: "#FFFFFF",
  vscode: "#007ACC",
  postman: "#FF6C37",
  vercel: "#FFFFFF",
  render: "#46E3B7",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = skillCategories.map((cat) => cat.title);
  const activeSkills =
    skillCategories.find((cat) => cat.title === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "text-white"
                  : "text-muted hover:text-foreground glass"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary rounded-xl"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {activeSkills.map((skill, i) => {
              const Icon = iconMap[skill.icon] || FaDatabase;
              const color = colorMap[skill.icon] || "#6366f1";

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="group glass rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default transition-all duration-300 hover:border-white/10"
                  style={
                    {
                      "--skill-color": color,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_var(--skill-color)]"
                    style={{ color }}
                  >
                    <Icon size={36} />
                  </div>
                  <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
