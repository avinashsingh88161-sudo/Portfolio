"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layers, Zap, Briefcase } from "lucide-react";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";

const infoCards = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "I enjoy breaking down complex problems into clean, practical solutions.",
  },
  {
    icon: Layers,
    title: "MERN Stack Developer",
    desc: "Building full-stack apps with MongoDB, Express, React, and Node.js.",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    desc: "Quickly adapting to new technologies and constantly expanding my skill set.",
  },
  {
    icon: Briefcase,
    title: "Open to Opportunities",
    desc: "Actively seeking roles where I can grow and build impactful products.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me — my background, interests, and what drives me as a developer."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-secondary opacity-20 blur-2xl scale-110" />

              {/* Avatar circle */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center border border-white/10">
                <Image
                  src="/avinash.jpg"
                  alt="Avinash Singh"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover object-center scale-105"
                  priority
                />
              </div>

              {/* Floating decorative dots */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent/30 blur-sm"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-accent-secondary/30 blur-sm"
              />
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              A passionate{" "}
              <span className="gradient-text">Full Stack Developer</span>
            </h3>

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a{" "}
                <span className="text-foreground font-medium">BCA student</span>{" "}
                and a passionate Full Stack Developer focused on{" "}
                <span className="text-accent-light font-medium">
                  MERN Stack development
                </span>
                . I enjoy transforming ideas into clean, functional, and
                user-friendly web applications.
              </p>
              <p>
                My journey in web development started with curiosity and has
                grown into a deep interest in building modern, scalable
                applications. I&apos;m constantly learning new technologies and
                improving my craft.
              </p>
              <p>
                When I&apos;m not coding, I explore emerging technologies, work on
                personal projects, and look for opportunities to collaborate
                with other developers.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {infoCards.map((card) => (
            <motion.div key={card.title} variants={cardVariants}>
              <GlassCard tilt glowOnHover className="h-full text-center group">
                <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent-light mb-4 group-hover:bg-accent/20 transition-colors">
                  <card.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {card.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {card.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
