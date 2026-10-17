"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Server, Layers, Zap, Database, Play, CheckCircle2, Cpu } from "lucide-react";

export default function HeroTelemetry() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [latency, setLatency] = useState(15);
  const [cacheStatus, setCacheStatus] = useState("HIT");

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(1);

    // Step 1 -> 2
    setTimeout(() => {
      setActiveStep(2);
    }, 400);

    // Step 2 -> 3
    setTimeout(() => {
      setActiveStep(3);
    }, 850);

    // Step 3 -> 4
    setTimeout(() => {
      setActiveStep(4);
      setLatency(Math.floor(12 + Math.random() * 8));
      setCacheStatus(Math.random() > 0.3 ? "HIT" : "MISS");
    }, 1300);

    // End simulation
    setTimeout(() => {
      setActiveStep(null);
      setIsSimulating(false);
    }, 2000);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 md:p-7 relative overflow-hidden transition-all duration-300">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
            <Cpu size={18} />
          </div>
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-700">
            Live System Telemetry
          </span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-medium text-emerald-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          NODE.JS v20 • HEALTHY
        </div>
      </div>

      {/* Architecture Flow Nodes */}
      <div className="space-y-4 my-5 relative">
        {/* Node 1: Client Inbound */}
        <motion.div
          animate={{
            scale: activeStep === 1 ? 1.02 : 1,
            borderColor: activeStep === 1 ? "#10b981" : "#e2e8f0",
          }}
          className={`p-4 rounded-2xl border transition-all ${
            activeStep === 1
              ? "bg-emerald-50/50 border-emerald-400 shadow-md shadow-emerald-500/10"
              : "bg-slate-50/60 border-slate-200/70 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-emerald-600 border border-slate-200/60 shadow-xs">
                <Globe size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-800">
                  Client Inbound Request
                </h4>
                <p className="text-xs font-mono text-slate-500">
                  HTTPS / REST / WebSocket
                </p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-emerald-100/80 text-emerald-700 border border-emerald-200">
              200 OK
            </span>
          </div>
        </motion.div>

        {/* Connector 1 */}
        <div className="flex justify-center -my-2 relative z-10">
          <div className="w-0.5 h-5 bg-emerald-200 flex items-center justify-center">
            <div
              className={`w-2 h-2 rounded-full bg-emerald-500 ${
                activeStep === 1 || activeStep === 2 ? "animate-ping" : ""
              }`}
            />
          </div>
        </div>

        {/* Node 2: API Gateway */}
        <motion.div
          animate={{
            scale: activeStep === 2 ? 1.02 : 1,
            borderColor: activeStep === 2 ? "#10b981" : "#e2e8f0",
          }}
          className={`p-4 rounded-2xl border transition-all ${
            activeStep === 2
              ? "bg-emerald-50/50 border-emerald-400 shadow-md shadow-emerald-500/10"
              : "bg-slate-50/60 border-slate-200/70 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-emerald-600 border border-slate-200/60 shadow-xs">
                <Server size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-800">
                  Node.js + Express API Gateway
                </h4>
                <p className="text-xs text-slate-500">
                  JWT Auth • Rate Limiting • Validation
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
              Async I/O
            </span>
          </div>
        </motion.div>

        {/* Connector 2 */}
        <div className="flex justify-center -my-2 relative z-10">
          <div className="w-0.5 h-5 bg-emerald-200 flex items-center justify-center">
            <div
              className={`w-2 h-2 rounded-full bg-emerald-500 ${
                activeStep === 2 || activeStep === 3 ? "animate-ping" : ""
              }`}
            />
          </div>
        </div>

        {/* Node 3: Microservices & Business Logic */}
        <motion.div
          animate={{
            scale: activeStep === 3 ? 1.02 : 1,
            borderColor: activeStep === 3 ? "#10b981" : "#e2e8f0",
          }}
          className={`p-4 rounded-2xl border transition-all ${
            activeStep === 3
              ? "bg-emerald-50/50 border-emerald-400 shadow-md shadow-emerald-500/10"
              : "bg-slate-50/60 border-slate-200/70 hover:bg-slate-50"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white text-emerald-600 border border-slate-200/60 shadow-xs">
                <Layers size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-800">
                  Full Stack Services & Business Logic
                </h4>
                <p className="text-xs text-slate-500">
                  Domain Services • Event Handlers • Workers
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
              Service Tier
            </span>
          </div>
        </motion.div>

        {/* Connector 3 */}
        <div className="flex justify-center -my-2 relative z-10">
          <div className="w-0.5 h-5 bg-emerald-200 flex items-center justify-center">
            <div
              className={`w-2 h-2 rounded-full bg-emerald-500 ${
                activeStep === 3 || activeStep === 4 ? "animate-ping" : ""
              }`}
            />
          </div>
        </div>

        {/* Node 4: Dual Database Tier */}
        <div className="grid grid-cols-2 gap-3">
          {/* Redis Cache */}
          <motion.div
            animate={{
              scale: activeStep === 4 ? 1.03 : 1,
              borderColor: activeStep === 4 ? "#f43f5e" : "#e2e8f0",
            }}
            className={`p-3.5 rounded-2xl border transition-all ${
              activeStep === 4
                ? "bg-rose-50/50 border-rose-300 shadow-md"
                : "bg-slate-50/60 border-slate-200/70"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-white text-rose-500 border border-slate-200/60 shadow-xs shrink-0">
                <Zap size={16} />
              </div>
              <div className="overflow-hidden">
                <h5 className="font-semibold text-xs text-slate-800 truncate">
                  Redis Cache
                </h5>
                <p className="text-[11px] text-slate-500 font-mono truncate">
                  In-Memory / PubSub
                </p>
              </div>
            </div>
          </motion.div>

          {/* MongoDB / MySQL */}
          <motion.div
            animate={{
              scale: activeStep === 4 ? 1.03 : 1,
              borderColor: activeStep === 4 ? "#0284c7" : "#e2e8f0",
            }}
            className={`p-3.5 rounded-2xl border transition-all ${
              activeStep === 4
                ? "bg-sky-50/50 border-sky-300 shadow-md"
                : "bg-slate-50/60 border-slate-200/70"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-white text-sky-600 border border-slate-200/60 shadow-xs shrink-0">
                <Database size={16} />
              </div>
              <div className="overflow-hidden">
                <h5 className="font-semibold text-xs text-slate-800 truncate">
                  MongoDB / MySQL
                </h5>
                <p className="text-[11px] text-slate-500 font-mono truncate">
                  Indexed Storage
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Telemetry Footer & Action */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-slate-500">
            Latency: <strong className="text-emerald-700 font-bold">{latency}ms</strong>
          </span>
          <span className="text-slate-500">
            Cache:{" "}
            <strong
              className={
                cacheStatus === "HIT"
                  ? "text-emerald-700 font-bold"
                  : "text-amber-600 font-bold"
              }
            >
              {cacheStatus}
            </strong>
          </span>
        </div>

        <button
          onClick={handleSimulate}
          disabled={isSimulating}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-300 rounded-xl text-xs font-semibold transition-all shadow-xs active:scale-95 disabled:opacity-50"
        >
          {isSimulating ? (
            <>
              <CheckCircle2 size={14} className="text-emerald-600 animate-spin" />
              Routing...
            </>
          ) : (
            <>
              <Play size={13} className="text-emerald-600 fill-emerald-600" />
              Simulate Flow
            </>
          )}
        </button>
      </div>
    </div>
  );
}
