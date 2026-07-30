"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, XCircle, TrendingUp, User, Award, ShieldCheck } from "lucide-react";

export default function BeforeAfterShowcase() {
  const [activeCase, setActiveCase] = useState<"student" | "jobseeker">("student");

  return (
    <section id="transformation" className="py-20 bg-cgp-card/40 relative overflow-hidden border-y border-cgp-cyan/15">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cgp-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cgp-cyan/10 border border-cgp-cyan/30 text-cgp-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Real Profile Makeover{" "}
            <span className="bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo bg-clip-text text-transparent">
              Before & After
            </span>
          </h2>

          <p className="text-base sm:text-lg text-cgp-textMuted leading-relaxed">
            See how we transform basic student & job seeker profiles into high-converting recruiter magnets.
          </p>

          {/* Persona Switcher Buttons */}
          <div className="inline-flex p-1.5 rounded-2xl bg-cgp-surface border border-cgp-cyan/20">
            <button
              onClick={() => setActiveCase("student")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeCase === "student"
                  ? "bg-gradient-to-r from-cgp-cyan to-cgp-blue text-white shadow-lg shadow-cgp-blue/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Student Makeover (Rahul K.)</span>
            </button>

            <button
              onClick={() => setActiveCase("jobseeker")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeCase === "jobseeker"
                  ? "bg-gradient-to-r from-cgp-cyan to-cgp-blue text-white shadow-lg shadow-cgp-blue/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <User className="w-4 h-4" />
              <span>Job Seeker Makeover (Sneha M.)</span>
            </button>
          </div>
        </div>

        {/* Case Comparison Details */}
        {activeCase === "student" ? (
          <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Before Card */}
            <div className="rounded-2xl bg-cgp-card/60 border border-red-500/30 p-6 sm:p-8 space-y-5 relative">
              <div className="flex items-center justify-between pb-3 border-b border-red-500/20">
                <span className="px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-extrabold uppercase border border-red-500/20 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> BEFORE CGP
                </span>
                <span className="text-xs text-slate-400">Score: 28 / 100</span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white">Rahul K. (Final Year CS Student)</h4>
                <p className="text-xs text-red-400 font-semibold mt-1">
                  Headline: "Student at RVCE | Computer Science | Looking for software internships"
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 bg-cgp-surface/50 p-4 rounded-xl border border-white/5">
                <p className="font-bold text-white">About Section:</p>
                <p className="italic text-slate-400">
                  "I am a passionate student eager to learn. I know C++, Java, and HTML. Please contact me if you have any opening."
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-400">
                <p className="font-bold text-white">Flaws Identified:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>0 Recruiter search keywords indexed</li>
                  <li>No portfolio links or project metrics</li>
                  <li>Desperate tone ("Please contact me")</li>
                  <li>Default empty background banner</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-red-400 font-bold flex justify-between">
                <span>InMails Received: 0</span>
                <span>Profile Views: 12/month</span>
              </div>
            </div>

            {/* After Card */}
            <div className="rounded-2xl glass-card border border-cgp-cyan/50 p-6 sm:p-8 space-y-5 relative shadow-xl shadow-cgp-cyan/15">
              <div className="flex items-center justify-between pb-3 border-b border-cgp-cyan/30">
                <span className="px-3 py-1 rounded bg-cgp-cyan/20 text-cgp-cyan text-xs font-extrabold uppercase border border-cgp-cyan/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> AFTER CGP MAKEOVER
                </span>
                <span className="text-xs text-emerald-400 font-bold">Score: 96 / 100</span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white">Rahul K. (Software & AI Engineer)</h4>
                <p className="text-xs text-cgp-cyan font-bold mt-1">
                  Headline: "Software Engineer | Full-Stack & AI Systems | Built 3 High-Scale Next.js Apps | RVCE CS '25 | React, Node.js, Python"
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-200 bg-cgp-surface/80 p-4 rounded-xl border border-cgp-cyan/20">
                <p className="font-bold text-cgp-cyan">Revamped Story About Section:</p>
                <p className="text-slate-300">
                  "Full-stack engineer specializing in scalable web apps and AI integration. Engineered a real-time analytics dashboard used by 1,200+ active users. Passionate about performant UI and cloud deployment."
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="font-bold text-white">CGP Optimizations Applied:</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="text-cgp-cyan font-bold">✓</span> Recruiter Boolean keyword indexing (#React #Node #Nextjs)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cgp-cyan font-bold">✓</span> Project reframing with quantitative impact metrics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cgp-cyan font-bold">✓</span> Custom high-end CGP visual brand banner
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-cgp-cyan/20 text-xs text-emerald-400 font-extrabold flex justify-between">
                <span>InMails Received: 5 in Week 1</span>
                <span>Profile Views: +420% Increase</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Before Card */}
            <div className="rounded-2xl bg-cgp-card/60 border border-red-500/30 p-6 sm:p-8 space-y-5 relative">
              <div className="flex items-center justify-between pb-3 border-b border-red-500/20">
                <span className="px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-extrabold uppercase border border-red-500/20 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" /> BEFORE CGP
                </span>
                <span className="text-xs text-slate-400">Score: 35 / 100</span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white">Sneha M. (Career Switcher)</h4>
                <p className="text-xs text-red-400 font-semibold mt-1">
                  Headline: "Operations Lead | Open for new opportunities in Product / Analytics"
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300 bg-cgp-surface/50 p-4 rounded-xl border border-white/5">
                <p className="font-bold text-white">About Section:</p>
                <p className="italic text-slate-400">
                  "Working in ops for 3 years. Looking to transition into Product Management or Data Analysis. Hardworking and reliable team player."
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-400">
                <p className="font-bold text-white">Flaws Identified:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Failed to bridge past ops skills to product requirements</li>
                  <li>No SQL, Python, or product metric keywords</li>
                  <li>Unstructured experience bullets without revenue ROI</li>
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-red-400 font-bold flex justify-between">
                <span>Recruiter Outreach: 0</span>
                <span>Search Rank: Hidden</span>
              </div>
            </div>

            {/* After Card */}
            <div className="rounded-2xl glass-card border border-cgp-cyan/50 p-6 sm:p-8 space-y-5 relative shadow-xl shadow-cgp-cyan/15">
              <div className="flex items-center justify-between pb-3 border-b border-cgp-cyan/30">
                <span className="px-3 py-1 rounded bg-cgp-cyan/20 text-cgp-cyan text-xs font-extrabold uppercase border border-cgp-cyan/40 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> AFTER CGP MAKEOVER
                </span>
                <span className="text-xs text-emerald-400 font-bold">Score: 98 / 100</span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white">Sneha M. (Product & Data Analyst)</h4>
                <p className="text-xs text-cgp-cyan font-bold mt-1">
                  Headline: "Product & Business Data Analyst | SQL, Python, Tableau, Retention Strategy | Reduced Ops Bottlenecks by 34% | Ex-E-commerce"
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-200 bg-cgp-surface/80 p-4 rounded-xl border border-cgp-cyan/20">
                <p className="font-bold text-cgp-cyan">Revamped Story About Section:</p>
                <p className="text-slate-300">
                  "Data-driven Product Analyst leveraging 3+ years of cross-functional operational leadership to solve user funnel friction. Certified in Advanced SQL & Product Analytics."
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="font-bold text-white">CGP Optimizations Applied:</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="text-cgp-cyan font-bold">✓</span> Reframed ops experience into data & product wins
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cgp-cyan font-bold">✓</span> Product manager Boolean keyword indexing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cgp-cyan font-bold">✓</span> Recruiter hook banner & featured SQL dashboard
                  </li>
                </ul>
              </div>

              <div className="pt-3 border-t border-cgp-cyan/20 text-xs text-emerald-400 font-extrabold flex justify-between">
                <span>InMails Received: 7 Tier-1 Offers</span>
                <span>Career Switch Success: 100%</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
