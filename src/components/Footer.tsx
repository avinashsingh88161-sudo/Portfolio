"use client";

import { Mail, ArrowUp, Heart } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const footerLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/avinashsingh88161-sudo",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/avinash-singh-62a312384",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:avinashsingh88161@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Logo & tagline */}
          <div className="text-center md:text-left">
            <div className="mb-2">
              <span className="text-xl font-bold gradient-text">AS</span>
              <span className="text-xl font-light text-foreground/80">
                .dev
              </span>
            </div>
            <p className="text-sm text-muted flex items-center gap-1 justify-center md:justify-start">
              Designed and built with{" "}
              <Heart size={12} className="text-red-400 fill-red-400" /> by
              Avinash Singh
            </p>
          </div>

          {/* Center — Social */}
          <div className="flex items-center gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2.5 glass rounded-xl text-muted hover:text-accent-light hover:glow-sm transition-all duration-300 hover:scale-110"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Right — Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-muted hover:text-foreground transition-all duration-300 hover:glow-sm"
            aria-label="Back to top"
          >
            Back to Top
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-muted/60">
            © {new Date().getFullYear()} Avinash Singh. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
