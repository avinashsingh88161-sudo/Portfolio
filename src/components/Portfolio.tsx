"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import GitHubSection from "@/components/GitHub";
import LinkedInSection from "@/components/LinkedIn";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Lazy load the particle background for performance
const AnimatedBackground = dynamic(
  () => import("@/components/ui/AnimatedBackground"),
  { ssr: false }
);

export default function Portfolio() {
  useEffect(() => {
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (
        args[0] &&
        typeof args[0] === "string" &&
        args[0].includes("THREE.Clock: This module has been deprecated")
      ) {
        return;
      }
      originalWarn(...args);
    };
    return () => {
      console.warn = originalWarn;
    };
  }, []);

  return (
    <main className="relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <GitHubSection />
      <LinkedInSection />
      <Contact />
      <Footer />
    </main>
  );
}
