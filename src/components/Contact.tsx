"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "avinashsingh88161@gmail.com",
    href: "mailto:avinashsingh88161@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/avinashsingh88161-sudo",
    href: "https://github.com/avinashsingh88161-sudo",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/avinash-singh-62a312384",
    href: "https://linkedin.com/in/avinash-singh-62a312384",
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // Simulate form submission — replace with actual API call
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Build Something Great Together"
          subtitle="Have an idea, a question, or just want to say hello? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl glass text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all ${
                      errors.name ? "ring-2 ring-red-500/50" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl glass text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all ${
                      errors.email ? "ring-2 ring-red-500/50" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-muted mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  placeholder="What's this about?"
                  className={`w-full px-4 py-3 rounded-xl glass text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all ${
                    errors.subject ? "ring-2 ring-red-500/50" : ""
                  }`}
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-muted mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell me about your project or idea..."
                  className={`w-full px-4 py-3 rounded-xl glass text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none ${
                    errors.message ? "ring-2 ring-red-500/50" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-accent to-accent-secondary text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-green-400"
                >
                  <CheckCircle size={16} />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassCard className="flex items-center gap-4 group mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent-light transition-colors">
                      {item.value}
                    </p>
                  </div>
                </GlassCard>
              </a>
            ))}

            {/* Quick note */}
            <div className="glass rounded-2xl p-6 mt-6">
              <p className="text-sm text-muted leading-relaxed">
                💬 I typically respond within{" "}
                <span className="text-foreground font-medium">24 hours</span>.
                Feel free to reach out for collaborations, opportunities, or
                just to connect!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
