"use client";

import { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Eye,
  Award,
  UserCheck,
  Briefcase,
  Zap,
} from "lucide-react";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"student" | "jobseeker">("student");

  return (
    <section className="relative min-h-[90vh] pt-12 pb-20 flex items-center justify-center overflow-hidden bg-hero-pattern">
      {/* High-Tech AI Generated Background Image Overlay - Reduced Overlay */}
      <div
        className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-45 mix-blend-screen pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cgp-bg/30 via-transparent to-cgp-bg pointer-events-none" />

      {/* Background Gemini AI Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cgp-purple/20 rounded-full blur-[150px] pointer-events-none animate-aurora" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cgp-pink/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cgp-cyan/20 rounded-full blur-[110px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Messaging */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* AI Pill Badge - Hidden on mobile */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cgp-cyan/15 via-cgp-purple/15 to-cgp-pink/15 border border-cgp-purple/40 text-cgp-cyan text-xs font-semibold tracking-wide uppercase shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cgp-cyan animate-pulse" />
              <span>Gemini-Class AI Career Intelligence • Bengaluru & Worldwide</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              We Turn LinkedIn Profiles into{" "}
              <span className="gemini-text-gradient">
                Opportunity Magnets
              </span>
            </h1>

            {/* Subheadline - Elegant & high converting */}
            <p className="text-sm sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed text-balance">
              Helping students & job seekers build recruiter-ready personal brands, rank top in hiring searches, and land more interview calls.
            </p>

            {/* Target Persona Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-cgp-card border border-cgp-purple/30 max-w-md mx-auto lg:mx-0 shadow-lg shadow-cgp-purple/10">
              <button
                onClick={() => setActiveTab("student")}
                className={`flex-1 py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "student"
                    ? "bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Award className="w-4 h-4" />
                <span>For Students & Freshers</span>
              </button>
              <button
                onClick={() => setActiveTab("jobseeker")}
                className={`flex-1 py-2 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "jobseeker"
                    ? "bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>For Job Seekers & Switchers</span>
              </button>
            </div>

            {/* Persona Bullet Value Props */}
            <div className="pt-2">
              {activeTab === "student" ? (
                <div className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto lg:mx-0">
                  <div className="flex items-center gap-2 text-sm text-slate-300 bg-cgp-card/60 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cgp-cyan shrink-0" />
                    <span>Position academic work as real experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300 bg-cgp-card/60 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cgp-cyan shrink-0" />
                    <span>Build credibility with 0 years corporate experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300 bg-cgp-card/60 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cgp-cyan shrink-0" />
                    <span>Optimized headline for fresher recruiter search</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300 bg-cgp-card/60 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cgp-cyan shrink-0" />
                    <span>High-impact LinkedIn banner & about section</span>
                  </div>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto lg:mx-0">
                  <div className="flex items-center gap-2 text-sm text-slate-300 bg-cgp-card/60 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cgp-cyan shrink-0" />
                    <span>Reframing past roles into recruiter keywords</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300 bg-cgp-card/60 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cgp-cyan shrink-0" />
                    <span>ATS & LinkedIn Recruiter search indexing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300 bg-cgp-card/60 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cgp-cyan shrink-0" />
                    <span>Highlight metrics: ROI, leadership, impact</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300 bg-cgp-card/60 p-2.5 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cgp-cyan shrink-0" />
                    <span>Headline tailored to target role keywords</span>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenAuditModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink hover:from-sky-400 hover:to-pink-500 text-white font-extrabold text-base shadow-xl shadow-cgp-purple/30 hover:shadow-cgp-cyan/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <Zap className="w-5 h-5 fill-white text-white" />
                <span>Transform My Profile Now</span>
              </button>

              <a
                href="#ai-score"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-cgp-card/80 border border-cgp-purple/30 hover:border-cgp-cyan text-slate-200 hover:text-white font-semibold text-base backdrop-blur-md hover:bg-cgp-surface transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-cgp-cyan group-hover:rotate-12 transition-transform" />
                <span>Test AI Readiness Score</span>
              </a>
            </div>

            {/* Trust Micro-Text */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-cgp-textMuted pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cgp-cyan" /> 100% Recruiter Algorithm Safe
              </span>
              <span className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-cgp-gold" /> 24-48 HR Quick Turnaround
              </span>
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-emerald-400" /> 500+ Profiles Revamped
              </span>
            </div>
          </div>

          {/* Right Column: AI Interactive Live Profile Card Preview - DESKTOP ONLY */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Ambient Background Radial Neon Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo rounded-3xl blur-2xl opacity-40 animate-pulse-glow" />

            <div className="relative glass-card rounded-3xl p-6 sm:p-7 border border-cgp-cyan/40 shadow-2xl overflow-hidden bg-cgp-card/95">
              {/* AI Dashboard Top Status Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-cgp-cyan/20">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </div>
                  <span className="text-[11px] font-extrabold tracking-wider uppercase text-cgp-cyan font-mono">
                    AI Recruiter Index Engine v2.4
                  </span>
                </div>
                <span className="text-[10px] text-cgp-gold font-bold bg-cgp-gold/10 px-2.5 py-1 rounded-full border border-cgp-gold/30">
                  LIVE OPTIMIZATION
                </span>
              </div>

              {/* Score Transformation Gauge Header */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-cgp-surface to-slate-900 border border-cgp-cyan/30 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] text-cgp-textMuted uppercase font-bold tracking-wider block">
                    Optimization Gain
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold text-slate-500 line-through">32%</span>
                    <span className="text-xs text-cgp-cyan font-bold">➜</span>
                    <span className="text-2xl font-extrabold text-emerald-400 drop-shadow-sm">98%</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +206% Recruiter Match
                  </span>
                </div>

                <div className="relative w-16 h-16 rounded-full bg-cgp-bg border-2 border-emerald-500/40 p-1 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                  <div className="w-full h-full rounded-full bg-emerald-500/10 flex flex-col items-center justify-center">
                    <span className="text-xs font-black text-emerald-400">98</span>
                    <span className="text-[8px] font-bold text-emerald-400/80">SCORE</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Candidate Profile Card */}
              <div className="mt-5 space-y-4">
                <div className="p-4 rounded-2xl bg-cgp-surface/80 border border-cgp-cyan/25 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cgp-cyan via-cgp-blue to-cgp-indigo p-0.5 shadow-md shrink-0">
                        <div className="w-full h-full bg-cgp-bg rounded-[10px] flex items-center justify-center text-xl">
                          {activeTab === "student" ? "🎓" : "💼"}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">
                            {activeTab === "student" ? "Rahul Swaminathan" : "Priya Sharma"}
                          </h4>
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-cgp-cyan/20 text-cgp-cyan border border-cgp-cyan/30">
                            Verified Magnet
                          </span>
                        </div>
                        <p className="text-[11px] text-cgp-cyan font-semibold line-clamp-1 mt-0.5">
                          {activeTab === "student"
                            ? "CS Graduate | Full-Stack & AI Systems | Built 3 High-Impact Apps"
                            : "Senior Product Marketing Lead | Grew Retention +140% | B2B Tech"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recruiter Boolean Keywords preview */}
                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5 text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-cgp-cyan/10 text-cgp-cyan border border-cgp-cyan/20 font-mono">
                      #BooleanIndexed
                    </span>
                    <span className="px-2 py-0.5 rounded bg-cgp-blue/10 text-cgp-blue border border-cgp-blue/20 font-mono">
                      #ATSReady
                    </span>
                    <span className="px-2 py-0.5 rounded bg-cgp-indigo/10 text-cgp-indigo border border-cgp-indigo/20 font-mono">
                      #MetricStories
                    </span>
                  </div>
                </div>

                {/* Floating Notification Alerts */}
                <div className="space-y-2 pt-1">
                  <div className="p-3 rounded-xl bg-slate-950/90 border border-emerald-500/40 flex items-center gap-3 text-xs shadow-xl backdrop-blur-md animate-float">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                      🔔
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-[11px] truncate">
                        Senior Tech Recruiter at Google
                      </p>
                      <p className="text-slate-400 text-[10px] truncate">
                        Viewed your profile & saved your resume
                      </p>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-mono font-bold">Just Now</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/90 border border-cgp-cyan/40 flex items-center gap-3 text-xs shadow-xl backdrop-blur-md">
                    <div className="w-8 h-8 rounded-full bg-cgp-cyan/20 text-cgp-cyan flex items-center justify-center font-bold text-sm shrink-0">
                      💬
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-bold text-[11px] truncate">
                        InMail Interview Invitation
                      </p>
                      <p className="text-cgp-cyan text-[10px] truncate">
                        "Impressed by your metric achievements!"
                      </p>
                    </div>
                    <span className="text-[9px] text-cgp-textMuted font-mono">2m ago</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Eye className="w-3.5 h-3.5 text-cgp-cyan" /> 3.8x Recruiter Views
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <TrendingUp className="w-3.5 h-3.5" /> Top 1% Candidate Filter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
