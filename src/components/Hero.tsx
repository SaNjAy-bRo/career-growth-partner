"use client";

import { useState } from "react";
import { Sparkles, TrendingUp, ShieldCheck, Eye, Zap } from "lucide-react";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"student" | "jobseeker">("student");

  return (
    <section className="relative min-h-[85vh] py-20 sm:py-28 flex items-center justify-center overflow-hidden bg-cgp-bg">
      {/* Full Glowing Liquid Aurora Curtain Field */}
      <div className="aurora-full-wrapper" aria-hidden="true">
        <div className="aurora-curtain-1" />
        <div className="aurora-curtain-2" />
        <div className="aurora-curtain-3" />
      </div>

      {/* Illuminated Gemini Glowing Wave Ribbon - Matching Marked Wave Line */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden z-0 h-80 flex items-end opacity-90">
        <svg
          className="w-full h-full text-transparent"
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="geminiWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#8B5CF6" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#EC4899" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="geminiWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
            </linearGradient>

            <filter id="ribbonGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Secondary Soft Glow Wave Ribbon */}
          <path
            d="M-50,260 C200,140 440,320 680,180 C920,50 1180,300 1500,160"
            stroke="url(#geminiWaveGradient2)"
            strokeWidth="12"
            strokeLinecap="round"
            className="animate-pulse opacity-70"
            filter="url(#ribbonGlow)"
          />

          {/* Primary Crisp Glowing Wavy Ribbon - Sine Wave Line */}
          <path
            d="M-50,280 C180,160 420,340 660,200 C900,60 1140,320 1500,180"
            stroke="url(#geminiWaveGradient1)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#ribbonGlow)"
            className="animate-gemini-wave"
          />
        </svg>
      </div>

      {/* Dark Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Spacious Clean Copy */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Gemini AI Pill Badge - Hidden on mobile */}
            <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cgp-card/80 border border-cgp-purple/40 text-cgp-cyan text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-cgp-cyan animate-pulse" />
              <span>Gemini-Class AI Personal Branding Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              We Turn LinkedIn Profiles into{" "}
              <span className="gemini-text-gradient">
                Opportunity Magnets
              </span>
            </h1>

            {/* Subheadline - Spacious & uncluttered */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed text-balance">
              Helping students & job seekers build recruiter-ready personal brands, rank top in hiring searches, and land more interview calls.
            </p>

            {/* Persona Switcher Buttons */}
            <div className="inline-flex p-1 rounded-2xl bg-cgp-card/80 border border-cgp-purple/30 max-w-md mx-auto lg:mx-0 shadow-lg">
              <button
                onClick={() => setActiveTab("student")}
                className={`py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "student"
                    ? "bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                For Students & Freshers
              </button>
              <button
                onClick={() => setActiveTab("jobseeker")}
                className={`py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === "jobseeker"
                    ? "bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                For Job Seekers & Switchers
              </button>
            </div>

            {/* Clear Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenAuditModal}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink hover:from-sky-400 hover:to-pink-500 text-white font-extrabold text-base shadow-xl shadow-cgp-purple/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <Zap className="w-5 h-5 fill-white text-white" />
                <span>Transform My Profile Now</span>
              </button>

              <a
                href="#ai-score"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-cgp-card/80 border border-cgp-purple/30 hover:border-cgp-cyan text-slate-200 hover:text-white font-bold text-base backdrop-blur-md hover:bg-cgp-surface transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-cgp-cyan group-hover:rotate-12 transition-transform" />
                <span>Test AI Readiness Score</span>
              </a>
            </div>

            {/* Trust Micro-Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-cgp-textMuted pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cgp-cyan" /> 100% Recruiter Search Safe
              </span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" /> 24-48h Delivery Turnaround
              </span>
            </div>
          </div>

          {/* Right Column: Clean Uncluttered AI Dashboard Card - DESKTOP ONLY */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative glass-card rounded-3xl p-7 border border-cgp-purple/40 shadow-2xl overflow-hidden bg-cgp-card/90 space-y-6">
              {/* Header Status */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-cgp-cyan font-mono uppercase">
                    AI Profile Optimization Index
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  RECRUITER READY
                </span>
              </div>

              {/* Score Metric Ring */}
              <div className="p-5 rounded-2xl bg-cgp-surface/80 border border-cgp-purple/30 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] text-cgp-textMuted uppercase font-bold tracking-wider block">
                    Target Candidate Score
                  </span>
                  <span className="text-3xl font-black text-emerald-400">98 / 100</span>
                  <p className="text-xs text-cgp-cyan font-semibold">
                    {activeTab === "student" ? "Fresher Candidate Magnet" : "High-Impact Job Seeker"}
                  </p>
                </div>

                <div className="w-16 h-16 rounded-full bg-cgp-bg border-2 border-emerald-500/40 flex items-center justify-center font-black text-emerald-400 text-lg shadow-lg">
                  ⚡
                </div>
              </div>

              {/* Single Floating Recruiter Alert */}
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/40 flex items-center gap-3.5 text-xs shadow-xl animate-float">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                  🔔
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-xs truncate">
                    Senior Tech Recruiter
                  </p>
                  <p className="text-slate-400 text-[11px] truncate">
                    Saved your profile & requested interview
                  </p>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">Just Now</span>
              </div>

              {/* Bottom Quick Stats */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-cgp-cyan" /> 3.8x Profile Visibility
                </span>
                <span className="text-emerald-400 font-bold">
                  +85% Callback Rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
