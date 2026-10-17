"use client";

import { ArrowUp } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { socialLinks } from "@/data/social";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const githubUrl =
    socialLinks.find((s) => s.name === "GitHub")?.url ||
    "https://github.com/avinashsingh88161-sudo";
  const linkedinUrl =
    socialLinks.find((s) => s.name === "LinkedIn")?.url ||
    "https://linkedin.com/in/avinash-singh-62a312384";

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-emerald-500/30">
              <Image
                src="/avinash.jpg"
                alt="Avinash Singh"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-base">Avinash Singh</p>
              <p className="text-xs text-slate-500 font-mono">
                Full Stack & MERN Developer
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-300 transition-colors"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition-all active:scale-95"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} Avinash Singh. All rights reserved.</p>
          <p>Built with Next.js 16, React 19, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
