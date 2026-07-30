"use client";

import { Sparkles, ShieldCheck, User } from "lucide-react";

export default function ResumeHologramAnimation() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto select-none pt-4 sm:pt-0">
      {/* Outer Constellation Orbit Ring (Pure CSS SVG Animation) */}
      <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-cgp-cyan/20 animate-spin-slow pointer-events-none" />
      <div className="absolute -inset-8 sm:-inset-12 rounded-full border border-cgp-purple/15 animate-reverse-spin pointer-events-none" />

      {/* Floating Top Left Widget: Profile Score (Desktop Only) */}
      <div className="hidden sm:block absolute -top-4 -left-4 z-30 glass-card rounded-2xl p-3.5 border border-cgp-purple/40 shadow-2xl backdrop-blur-xl bg-cgp-card/95 space-y-1 animate-float">
        <span className="text-[10px] text-cgp-textMuted font-bold uppercase tracking-wider block">
          Profile Score
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black text-white">98/100</span>
          <span className="text-xs text-emerald-400 font-bold flex items-center">
            ▲ 99%
          </span>
        </div>
        {/* Mini Sparkline */}
        <div className="w-20 h-4 border-b-2 border-emerald-400/80 rounded-b flex items-end justify-between px-1">
          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
          <div className="w-1.5 h-2.5 bg-emerald-400 rounded-full" />
          <div className="w-1.5 h-3.5 bg-emerald-400 rounded-full" />
        </div>
      </div>

      {/* Middle Right Widget: Recruiter Views (Desktop Only) */}
      <div className="hidden sm:block absolute top-1/3 -right-6 z-30 glass-card rounded-2xl p-3.5 border border-cgp-cyan/40 shadow-2xl backdrop-blur-xl bg-cgp-card/95 space-y-1">
        <span className="text-[10px] text-cgp-textMuted font-bold uppercase tracking-wider block">
          Recruiter Views
        </span>
        <span className="text-2xl font-black text-cgp-cyan block">+312%</span>
        {/* Mini Bar Chart */}
        <div className="flex items-end gap-1.5 h-5 pt-1">
          <div className="w-2 h-2 bg-cgp-cyan/40 rounded-t" />
          <div className="w-2 h-3.5 bg-cgp-cyan/60 rounded-t" />
          <div className="w-2 h-5 bg-cgp-cyan rounded-t" />
        </div>
      </div>

      {/* Bottom Right Widget: Interview Calls (Desktop Only) */}
      <div className="hidden sm:block absolute -bottom-4 -right-4 z-30 glass-card rounded-2xl p-3.5 border border-cgp-pink/40 shadow-2xl backdrop-blur-xl bg-cgp-card/95 space-y-1">
        <span className="text-[10px] text-cgp-textMuted font-bold uppercase tracking-wider block">
          Interview Calls
        </span>
        <span className="text-2xl font-black text-cgp-pink block">+210%</span>
        {/* Wave Sparkline */}
        <div className="w-24 h-4 border-b-2 border-cgp-pink flex items-end justify-between px-1">
          <div className="w-1.5 h-1.5 bg-cgp-pink rounded-full" />
          <div className="w-1.5 h-3 bg-cgp-pink rounded-full" />
        </div>
      </div>

      {/* Main Interactive 3D Animated Resume Card */}
      <div className="relative z-10 glass-card rounded-3xl p-5 sm:p-6 border border-cgp-cyan/40 shadow-2xl bg-cgp-card/90 space-y-5 overflow-hidden">
        {/* Card Background Hologram Beam */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cgp-cyan/10 via-cgp-purple/15 to-cgp-pink/10 opacity-70 pointer-events-none" />

        {/* Mobile Metric Bar (Integrated inside card header on Mobile to avoid overlapping) */}
        <div className="sm:hidden grid grid-cols-3 gap-2 pb-3 border-b border-slate-800 text-center relative z-10">
          <div className="p-2 rounded-xl bg-cgp-surface/80 border border-cgp-purple/30">
            <span className="text-[9px] text-cgp-textMuted font-bold block uppercase">Score</span>
            <span className="text-sm font-black text-emerald-400">98/100</span>
          </div>
          <div className="p-2 rounded-xl bg-cgp-surface/80 border border-cgp-cyan/30">
            <span className="text-[9px] text-cgp-textMuted font-bold block uppercase">Views</span>
            <span className="text-sm font-black text-cgp-cyan">+312%</span>
          </div>
          <div className="p-2 rounded-xl bg-cgp-surface/80 border border-cgp-pink/30">
            <span className="text-[9px] text-cgp-textMuted font-bold block uppercase font-mono">Calls</span>
            <span className="text-sm font-black text-cgp-pink">+210%</span>
          </div>
        </div>

        {/* Top Header: Candidate Avatar & Info */}
        <div className="flex items-center gap-3.5 relative z-10 pb-4 border-b border-slate-800">
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
              <h4 className="text-sm sm:text-base font-extrabold text-white truncate">Alex Vance</h4>
              <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                VERIFIED BRAND
              </span>
            </div>
            <p className="text-xs font-bold text-cgp-cyan truncate">Senior Tech Specialist & Leader</p>
            <p className="text-[10px] text-cgp-textMuted truncate">Optimized Candidate Profile</p>
          </div>
        </div>

        {/* Animated Skill Meter Bars */}
        <div className="space-y-3 relative z-10">
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">LinkedIn Search SEO Index</span>
              <span className="text-cgp-cyan">98% Match</span>
            </div>
            <div className="h-2 w-full bg-cgp-surface rounded-full overflow-hidden p-0.5 border border-white/5">
              <div className="h-full bg-gradient-to-r from-cgp-cyan to-cgp-blue rounded-full w-[98%] animate-pulse" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">ATS Resume Format Alignment</span>
              <span className="text-cgp-purple">96% Score</span>
            </div>
            <div className="h-2 w-full bg-cgp-surface rounded-full overflow-hidden p-0.5 border border-white/5">
              <div className="h-full bg-gradient-to-r from-cgp-purple to-cgp-pink rounded-full w-[96%]" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-300">Recruiter Keyword Hooks</span>
              <span className="text-emerald-400">+380% Higher</span>
            </div>
            <div className="h-2 w-full bg-cgp-surface rounded-full overflow-hidden p-0.5 border border-white/5">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-cgp-cyan rounded-full w-[92%]" />
            </div>
          </div>
        </div>

        {/* Industry Skill Tags */}
        <div className="pt-1 flex flex-wrap gap-1.5 relative z-10">
          {["#ExecutiveBranding", "#ATS_Keywords", "#HeadlineSEO", "#ImpactMetrics"].map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-cgp-surface text-slate-300 border border-cgp-purple/30 flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-cgp-cyan" />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        {/* Bottom Verification Seal */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs relative z-10">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <ShieldCheck className="w-4 h-4" /> 100% Recruiter Approved
          </span>
          <span className="text-cgp-cyan font-mono text-[10px] font-bold">CGP VERIFIED</span>
        </div>
      </div>
    </div>
  );
}
