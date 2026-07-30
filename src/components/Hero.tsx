"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Search,
  FileText,
  Zap,
  ShieldCheck,
  TrendingUp,
  Award,
  Briefcase,
  BarChart3,
  CheckCircle2,
  Users,
} from "lucide-react";
import GeminiWaveCanvas from "./GeminiWaveCanvas";
import ResumeHologramAnimation from "./ResumeHologramAnimation";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"student" | "jobseeker">("student");

  return (
    <section className="relative min-h-[82vh] pt-6 pb-8 flex flex-col justify-between overflow-hidden bg-cgp-bg text-white">
      {/* Dark Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />

      {/* Mobile Background Canvas Wave (Initial Page Load Active) */}
      <div className="sm:hidden absolute inset-0 z-0 pointer-events-none opacity-85 h-full overflow-hidden">
        <GeminiWaveCanvas />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs with Staggered Entrance Animations */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Headline with Slide-Right Reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] animate-hero-slide-right">
              We Turn LinkedIn Profiles into{" "}
              <span className="gemini-text-gradient">
                Opportunity Magnets
              </span>
            </h1>

            {/* Subheadline with Pop-Up Reveal */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed text-balance animate-hero-popup delay-100">
              Helping students & job seekers build recruiter-ready personal brands, rank top in hiring searches, and land more interview calls.
            </p>

            {/* Persona Switcher Buttons with Pop-Up Reveal */}
            <div className="inline-flex p-1 rounded-2xl bg-cgp-card/90 border border-cgp-purple/30 max-w-md mx-auto lg:mx-0 shadow-lg animate-hero-popup delay-200">
              <button
                onClick={() => setActiveTab("student")}
                className={`py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "student"
                    ? "bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Award className="w-4 h-4" />
                <span>For Students</span>
              </button>
              <button
                onClick={() => setActiveTab("jobseeker")}
                className={`py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "jobseeker"
                    ? "bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>For Job Seekers</span>
              </button>
            </div>

            {/* Primary Action CTA with Pop-Up Reveal & Glowing Pulse */}
            <div className="pt-2 space-y-3 max-w-md mx-auto lg:mx-0 animate-hero-popup delay-300">
              <button
                onClick={onOpenAuditModal}
                className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink hover:from-sky-400 hover:to-pink-500 text-white font-extrabold text-base shadow-xl shadow-cgp-purple/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 relative group overflow-hidden"
              >
                <Zap className="w-5 h-5 fill-white text-white group-hover:rotate-12 transition-transform" />
                <span>Transform My Profile Now</span>
              </button>

              <p className="text-xs text-cgp-textMuted font-medium text-center lg:text-left">
                AI-powered. Recruiter-approved. Results driven.
              </p>
            </div>
          </div>

          {/* Right Column: 3D Resume Hologram with Slide-Left Entrance Animation */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0 animate-hero-slide-left delay-200">
            <ResumeHologramAnimation />
          </div>
        </div>

        {/* 4-Card Value Grid (Hidden on Mobile) */}
        <div className="mt-16 hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card rounded-2xl p-5 border border-cgp-purple/20 space-y-3 hover:border-cgp-cyan/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cgp-purple/15 border border-cgp-purple/30 flex items-center justify-center text-cgp-cyan">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">AI Profile Audit</h4>
              <p className="text-xs text-cgp-textMuted mt-1">
                Get AI insights to improve your profile
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-cgp-purple/20 space-y-3 hover:border-cgp-cyan/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cgp-cyan/15 border border-cgp-cyan/30 flex items-center justify-center text-cgp-cyan">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">ATS Optimized</h4>
              <p className="text-xs text-cgp-textMuted mt-1">
                Rank higher in recruiter and ATS searches
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-cgp-purple/20 space-y-3 hover:border-cgp-cyan/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-cgp-pink/15 border border-cgp-pink/30 flex items-center justify-center text-cgp-pink">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Content That Converts</h4>
              <p className="text-xs text-cgp-textMuted mt-1">
                Crafted to highlight your strengths & impact
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-cgp-purple/20 space-y-3 hover:border-cgp-cyan/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">More Interviews</h4>
              <p className="text-xs text-cgp-textMuted mt-1">
                Attract better opportunities and interview calls
              </p>
            </div>
          </div>
        </div>

        {/* Trust & Social Proof Row (Matching Reference Layout) */}
        <div className="mt-6 glass-card rounded-2xl p-5 border border-cgp-purple/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cgp-cyan/15 border border-cgp-cyan/30 flex items-center justify-center text-cgp-cyan shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">100% Recruiter Search Safe</h5>
              <p className="text-xs text-cgp-textMuted">
                We follow LinkedIn's guidelines and best practices.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 overflow-hidden">
              {["👨‍💼", "👩‍💻", "👨‍🎓", "👩‍💼", "👨‍🔬"].map((avatar, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full bg-cgp-card border-2 border-cgp-purple/40 flex items-center justify-center text-xs"
                >
                  {avatar}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cgp-purple to-cgp-pink flex items-center justify-center text-[10px] font-bold text-white">
                2K+
              </div>
            </div>
            <div className="text-left">
              <h5 className="text-xs font-bold text-white">Trusted by Students & Professionals</h5>
              <p className="text-[10px] text-cgp-textMuted">across 25+ industries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Bottom Wave Canvas Layer */}
      <div className="hidden sm:block relative z-10 -mt-10 h-52 sm:h-60 opacity-95 pointer-events-none">
        <GeminiWaveCanvas />
      </div>
    </section>
  );
}
