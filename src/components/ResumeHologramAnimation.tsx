"use client";

import { useEffect, useState } from "react";
import { Sparkles, ShieldCheck, User } from "lucide-react";

// Static Profiles Array declared outside component to prevent re-allocation & re-renders
const PROFILES = [
  {
    name: "Alex Vance",
    title: "Senior Tech Specialist & Leader",
    score: 98,
    views: 312,
    calls: 210,
    seoMatch: 98,
    atsScore: 96,
    keywordHigher: 380,
    tags: ["#ExecutiveBranding", "#ATS_Keywords", "#HeadlineSEO", "#ImpactMetrics"],
  },
  {
    name: "Sophia Chen",
    title: "Lead Product Manager & AI Strategist",
    score: 99,
    views: 420,
    calls: 290,
    seoMatch: 99,
    atsScore: 98,
    keywordHigher: 450,
    tags: ["#ProductStrategy", "#LeadershipBrand", "#FAANG_Ready", "#ResumeHook"],
  },
  {
    name: "Rohan Sharma",
    title: "Senior Full-Stack Architect",
    score: 97,
    views: 345,
    calls: 235,
    seoMatch: 96,
    atsScore: 95,
    keywordHigher: 395,
    tags: ["#TechArchitect", "#BooleanKeywords", "#StarMethod", "#SalaryBoost"],
  },
  {
    name: "Emily Watson",
    title: "Executive Brand Director",
    score: 98,
    views: 390,
    calls: 260,
    seoMatch: 97,
    atsScore: 97,
    keywordHigher: 410,
    tags: ["#ExecutiveProfile", "#RecruiterMagnet", "#HeadlineRank", "#InterviewCall"],
  },
];

export default function ResumeHologramAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PROFILES.length);
        setIsTransitioning(false);
      }, 500); // 500ms fade transition
    }, 4500); // 4.5s cycle interval

    return () => clearInterval(timer);
  }, []);

  const active = PROFILES[currentIndex];

  return (
    <div className="relative w-full max-w-[440px] mx-auto select-none pt-4 sm:pt-0">
      {/* Outer Constellation Orbit Rings (Pure CSS 60fps) */}
      <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-cgp-cyan/20 animate-spin-slow pointer-events-none" />
      <div className="absolute -inset-8 sm:-inset-12 rounded-full border border-cgp-purple/15 animate-reverse-spin pointer-events-none" />

      {/* Floating Top Left Widget: Live Profile Score (Desktop Only) */}
      <div className="hidden sm:block absolute -top-4 -left-4 z-30 glass-card rounded-2xl p-3.5 border border-cgp-purple/40 shadow-2xl backdrop-blur-xl bg-cgp-card/95 space-y-1 animate-float">
        <span className="text-[10px] text-cgp-textMuted font-bold uppercase tracking-wider block">
          Live Profile Score
        </span>
        <div className="flex items-baseline gap-2">
          <span className={`text-2xl font-black text-white transition-opacity duration-500 ${isTransitioning ? "opacity-30" : "opacity-100"}`}>
            {active.score}/100
          </span>
          <span className="text-xs text-emerald-400 font-bold flex items-center">
            ▲ 99%
          </span>
        </div>
        {/* Animated Live Sparkline */}
        <div className="w-20 h-4 border-b-2 border-emerald-400/80 rounded-b flex items-end justify-between px-1">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
          <div className="w-1.5 h-2.5 bg-emerald-400 rounded-full" />
          <div className="w-1.5 h-3.5 bg-emerald-400 rounded-full" />
        </div>
      </div>

      {/* Floating Middle Right Widget: Recruiter Views (Desktop Only) */}
      <div className="hidden sm:block absolute top-1/3 -right-6 z-30 glass-card rounded-2xl p-3.5 border border-cgp-cyan/40 shadow-2xl backdrop-blur-xl bg-cgp-card/95 space-y-1">
        <span className="text-[10px] text-cgp-textMuted font-bold uppercase tracking-wider block">
          Recruiter Views
        </span>
        <span className={`text-2xl font-black text-cgp-cyan block transition-opacity duration-500 ${isTransitioning ? "opacity-30" : "opacity-100"}`}>
          +{active.views}%
        </span>
        {/* Live Animated Bar Chart */}
        <div className="flex items-end gap-1.5 h-5 pt-1">
          <div className="w-2 h-2 bg-cgp-cyan/40 rounded-t animate-pulse" />
          <div className="w-2 h-3.5 bg-cgp-cyan/60 rounded-t animate-pulse delay-100" />
          <div className="w-2 h-5 bg-cgp-cyan rounded-t animate-pulse delay-200" />
        </div>
      </div>

      {/* Floating Bottom Right Widget: Interview Calls (Desktop Only) */}
      <div className="hidden sm:block absolute -bottom-4 -right-4 z-30 glass-card rounded-2xl p-3.5 border border-cgp-pink/40 shadow-2xl backdrop-blur-xl bg-cgp-card/95 space-y-1">
        <span className="text-[10px] text-cgp-textMuted font-bold uppercase tracking-wider block">
          Interview Calls
        </span>
        <span className={`text-2xl font-black text-cgp-pink block transition-opacity duration-500 ${isTransitioning ? "opacity-30" : "opacity-100"}`}>
          +{active.calls}%
        </span>
        {/* Wave Sparkline */}
        <div className="w-24 h-4 border-b-2 border-cgp-pink flex items-end justify-between px-1">
          <div className="w-1.5 h-1.5 bg-cgp-pink rounded-full" />
          <div className="w-1.5 h-3 bg-cgp-pink rounded-full animate-bounce" />
        </div>
      </div>

      {/* Main Interactive 3D Animated Hologram Card */}
      <div className="relative z-10 glass-card rounded-3xl p-5 sm:p-6 border border-cgp-cyan/40 shadow-2xl bg-cgp-card/90 space-y-5 overflow-hidden">
        {/* Laser Scanner Beam Scanning Vertically (Pure CSS 60fps) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cgp-cyan to-transparent shadow-[0_0_15px_#38bdf8] animate-pulse pointer-events-none" />

        {/* Card Background Hologram Beam */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cgp-cyan/10 via-cgp-purple/15 to-cgp-pink/10 opacity-70 pointer-events-none" />

        {/* Mobile Metric Bar */}
        <div className="sm:hidden grid grid-cols-3 gap-2 pb-3 border-b border-slate-800 text-center relative z-10">
          <div className="p-2 rounded-xl bg-cgp-surface/80 border border-cgp-purple/30">
            <span className="text-[9px] text-cgp-textMuted font-bold block uppercase">Score</span>
            <span className="text-sm font-black text-emerald-400">{active.score}/100</span>
          </div>
          <div className="p-2 rounded-xl bg-cgp-surface/80 border border-cgp-cyan/30">
            <span className="text-[9px] text-cgp-textMuted font-bold block uppercase">Views</span>
            <span className="text-sm font-black text-cgp-cyan">+{active.views}%</span>
          </div>
          <div className="p-2 rounded-xl bg-cgp-surface/80 border border-cgp-pink/30">
            <span className="text-[9px] text-cgp-textMuted font-bold block uppercase font-mono">Calls</span>
            <span className="text-sm font-black text-cgp-pink">+{active.calls}%</span>
          </div>
        </div>

        {/* Top Header: Candidate Avatar & Cycling Profile Info */}
        <div
          className={`flex items-center gap-3.5 relative z-10 pb-4 border-b border-slate-800 transition-all duration-500 ${
            isTransitioning ? "opacity-20 translate-y-1" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cgp-surface border-2 border-cgp-cyan/50 flex items-center justify-center p-0.5 shadow-lg shadow-cgp-cyan/20 shrink-0">
            <div className="w-full h-full rounded-xl bg-cgp-card flex items-center justify-center text-cgp-cyan">
              <User className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-emerald-500"></span>
            </span>
          </div>

          <div className="space-y-0.5 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-sm sm:text-base font-extrabold text-white truncate">
                {active.name}
              </h4>
              <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                VERIFIED BRAND
              </span>
            </div>
            <p className="text-xs font-bold text-cgp-cyan truncate">
              {active.title}
            </p>
            <p className="text-[10px] text-cgp-textMuted truncate">
              Optimized Candidate Profile
            </p>
          </div>
        </div>

        {/* Dynamic Glowing Metric Progress Bars (CSS 60fps Transitions) */}
        <div
          className={`space-y-4 relative z-10 transition-all duration-500 ${
            isTransitioning ? "opacity-20 translate-y-1" : "opacity-100 translate-y-0"
          }`}
        >
          {/* SEO Index Bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">LinkedIn Search SEO Index</span>
              <span className="font-extrabold text-cgp-cyan">{active.seoMatch}% Match</span>
            </div>
            <div className="w-full h-2 rounded-full bg-cgp-surface overflow-hidden p-0.5 border border-cgp-cyan/20">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cgp-cyan to-cgp-blue shadow-[0_0_12px_#38bdf8] transition-all duration-700 ease-out"
                style={{ width: `${active.seoMatch}%` }}
              />
            </div>
          </div>

          {/* ATS Alignment Bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">ATS Resume Format Alignment</span>
              <span className="font-extrabold text-cgp-purple">{active.atsScore}% Score</span>
            </div>
            <div className="w-full h-2 rounded-full bg-cgp-surface overflow-hidden p-0.5 border border-cgp-purple/20">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cgp-purple to-cgp-pink shadow-[0_0_12px_#8b5cf6] transition-all duration-700 ease-out"
                style={{ width: `${active.atsScore}%` }}
              />
            </div>
          </div>

          {/* Keyword Hooks Bar */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Recruiter Keyword Hooks</span>
              <span className="font-extrabold text-emerald-400">+{active.keywordHigher}% Higher</span>
            </div>
            <div className="w-full h-2 rounded-full bg-cgp-surface overflow-hidden p-0.5 border border-emerald-500/20">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cgp-cyan shadow-[0_0_12px_#34d399] transition-all duration-700 ease-out"
                style={{ width: "95%" }}
              />
            </div>
          </div>
        </div>

        {/* Dynamic Skill Tags */}
        <div
          className={`flex flex-wrap gap-1.5 pt-2 relative z-10 transition-all duration-500 ${
            isTransitioning ? "opacity-20 translate-y-1" : "opacity-100 translate-y-0"
          }`}
        >
          {active.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-cgp-surface/90 text-cgp-cyan border border-cgp-cyan/30 flex items-center gap-1 shadow-sm"
            >
              <Sparkles className="w-3 h-3 text-cgp-cyan animate-pulse" />
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Verification Footer */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-emerald-400 relative z-10">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Recruiter Approved</span>
          </div>
          <span className="text-cgp-cyan uppercase tracking-wider text-[10px]">CGP VERIFIED</span>
        </div>
      </div>
    </div>
  );
}
