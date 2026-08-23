"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Users, MessageCircle } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";

const LINKEDIN_URL = "https://linkedin.com/in/avinash-singh-62a312384"; // Replace with your LinkedIn URL

export default function LinkedInSection() {
  return (
    <section className="section-padding relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Let's Connect" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden glass rounded-3xl p-8 md:p-12 text-center"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-blue-500/10 to-transparent blur-2xl pointer-events-none" />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex p-4 rounded-2xl bg-blue-500/10 mb-6"
            >
              <FaLinkedinIn size={32} className="text-blue-400" />
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Let&apos;s Build Professional Connections
            </h3>

            <p className="text-muted max-w-xl mx-auto leading-relaxed mb-8">
              I enjoy connecting with developers, professionals, and people
              working on interesting ideas. Let&apos;s grow our networks and explore
              collaboration opportunities together.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Users size={16} className="text-blue-400" />
                Professional Networking
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <MessageCircle size={16} className="text-blue-400" />
                Open to Discussions
              </div>
            </div>

            {/* CTA */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
            >
              <FaLinkedinIn size={18} />
              Connect on LinkedIn
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
