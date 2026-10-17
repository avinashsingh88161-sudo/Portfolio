"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatMetrics from "@/components/StatMetrics";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Architecture from "@/components/Architecture";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatMetrics />
        <About />
        <Skills />
        <Architecture />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
