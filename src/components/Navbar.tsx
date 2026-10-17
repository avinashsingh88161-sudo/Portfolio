"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { navLinks, socialLinks } from "@/data/social";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const githubLink = socialLinks.find((s) => s.name === "GitHub")?.url || "https://github.com/avinashsingh88161-sudo";
  const linkedinLink = socialLinks.find((s) => s.name === "LinkedIn")?.url || "https://linkedin.com/in/avinash-singh-62a312384";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-900/5 py-2.5"
            : "bg-white/60 backdrop-blur-sm border-b border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Avatar & Identity */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 text-left group"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border-2 border-emerald-500/30 group-hover:border-emerald-500 transition-colors shadow-sm shrink-0">
                <Image
                  src="/avinash.jpg"
                  alt="Avinash Singh"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg text-slate-900 leading-tight group-hover:text-emerald-700 transition-colors">
                  Avinash Singh
                </span>
                <span className="text-xs text-slate-500 font-medium font-mono">
                  Full Stack / MERN Developer
                </span>
              </div>
            </button>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-50/80 px-3 py-1.5 rounded-full border border-slate-200/60 shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors rounded-full ${
                      isActive
                        ? "text-emerald-700 font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-600 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Social buttons & Theme toggle */}
            <div className="flex items-center gap-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hidden sm:inline-flex p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-emerald-600 hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <FaGithub size={17} />
              </a>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hidden sm:inline-flex p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <FaLinkedinIn size={17} />
              </a>

              <button
                onClick={() => setIsDark(!isDark)}
                aria-label="Toggle theme"
                className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-emerald-600 hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white border-l border-slate-200 p-6 pt-24 shadow-2xl flex flex-col justify-between"
            >
              <div className="flex flex-col gap-2">
                <div className="pb-4 mb-2 border-b border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-emerald-500/30">
                    <Image
                      src="/avinash.jpg"
                      alt="Avinash Singh"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Avinash Singh</p>
                    <p className="text-xs text-slate-500 font-mono">Full Stack Developer</p>
                  </div>
                </div>

                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`text-left px-4 py-2.5 rounded-xl font-medium text-sm transition-all ${
                        isActive
                          ? "bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>

              {/* Mobile Socials */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-around">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 font-medium hover:text-emerald-600"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 font-medium hover:text-blue-600"
                >
                  <FaLinkedinIn size={18} />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
