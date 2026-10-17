"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle2, AlertCircle, MapPin } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "avinashsingh88161@gmail.com",
    href: "mailto:avinashsingh88161@gmail.com",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/avinash-singh-62a312384",
    href: "https://linkedin.com/in/avinash-singh-62a312384",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/avinashsingh88161-sudo",
    href: "https://github.com/avinashsingh88161-sudo",
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

    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  const handleChange = (field: keyof FormState, value: string) => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-tag mb-3">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let&apos;s Build Something Impactful Together
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Have a project in mind, an opportunity to discuss, or just want to connect? Send a message and I&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Connect Directly
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                I am actively seeking Full Stack & MERN Developer roles. Feel free to reach out across any of these channels:
              </p>

              <div className="space-y-3.5">
                {contactCards.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all group"
                  >
                    <div className="p-2.5 rounded-xl bg-white text-emerald-600 border border-slate-200/80 shadow-xs group-hover:border-emerald-300">
                      <item.icon size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] font-mono font-bold uppercase text-slate-400">
                        {item.label}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-emerald-700 truncate">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <p className="text-xs text-emerald-800 font-medium leading-relaxed">
                  Average response time: <strong>&lt; 24 Hours</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Clean Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-3 rounded-2xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                      errors.name ? "border-red-400 ring-2 ring-red-200" : "border-slate-200"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-2xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                      errors.email ? "border-red-400 ring-2 ring-red-200" : "border-slate-200"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  placeholder="e.g. Project Discussion / Job Opportunity"
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all ${
                    errors.subject ? "border-red-400 ring-2 ring-red-200" : "border-slate-200"
                  }`}
                />
                {errors.subject && (
                  <p className="text-xs text-red-500 mt-1 font-mono">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell me about your project, timeline, or requirements..."
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none ${
                    errors.message ? "border-red-400 ring-2 ring-red-200" : "border-slate-200"
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1 font-mono">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2 font-medium"
                >
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
