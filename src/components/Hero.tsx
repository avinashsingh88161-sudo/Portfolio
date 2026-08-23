"use client";

import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown, FileDown } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { socialLinks, RESUME_URL } from "@/data/social";

const HeroScene = lazy(() => import("./HeroScene"));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const socialIconMap: Record<string, React.ComponentType<any>> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: Mail,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[120px]" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center min-h-screen">
        <div className="grid lg:grid-cols-12 gap-12 items-center w-full py-20 md:py-28">
          
          {/* Left Column - Profile Details */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              {/* Greeting */}
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted font-mono">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for opportunities
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              >
                Hi, I&apos;m{" "}
                <span className="gradient-text">Avinash Singh</span>
              </motion.h1>

              {/* Title */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-muted font-light mb-6"
              >
                <span className="text-accent-light font-medium">
                  Full Stack Developer
                </span>{" "}
                |{" "}
                <span className="text-accent-secondary font-medium">
                  MERN Stack Developer
                </span>
              </motion.p>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-muted/80 max-w-xl leading-relaxed mb-8"
              >
                I build modern, responsive, and scalable web applications with a
                focus on clean user experiences and practical solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mb-10"
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  View My Work
                  <ArrowDown
                    size={16}
                    className="group-hover:translate-y-0.5 transition-transform"
                  />
                </a>

                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-medium text-foreground/90 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FileDown size={16} />
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
                  className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-medium text-foreground/90 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Contact Me
                </a>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon] || Mail;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="p-3 glass rounded-xl text-muted hover:text-accent-light hover:glow-sm transition-all duration-300 hover:scale-110"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - 3D Scene */}
          <div className="lg:col-span-5 hidden lg:block h-[500px] w-full relative z-0">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted/50"
        >
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
