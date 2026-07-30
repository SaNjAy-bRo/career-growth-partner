"use client";

import { XCircle, AlertTriangle, Sparkles, TrendingUp } from "lucide-react";

export default function ProblemVsSolution() {
  return (
    <section className="py-20 bg-cgp-bg relative overflow-hidden border-y border-cgp-purple/20">
      {/* Gemini Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cgp-pink/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cgp-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Hidden Hiring Filter</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why 90% of Profiles Get Ignored vs.{" "}
            <span className="gemini-text-gradient">
              The CGP Magnet
            </span>
          </h2>

          <p className="text-base sm:text-lg text-cgp-textMuted leading-relaxed">
            Hiring managers scan your profile for exactly 6 seconds. If your headline and summary don't immediately communicate recruiter value, you get passed over for less qualified candidates.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Unoptimized Profile Card */}
          <div className="rounded-3xl bg-cgp-card/50 border border-red-500/30 p-6 sm:p-8 space-y-6 relative overflow-hidden group hover:border-red-500/50 transition-all">
            <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">Ordinary LinkedIn Profile</h3>
                  <p className="text-xs text-red-400 font-bold">Losing Opportunities Daily</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                Low Visibility
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-red-500/20 text-red-400 shrink-0 mt-0.5 font-bold">✕</span>
                <div>
                  <strong className="text-white block font-bold">Generic Headline:</strong>
                  <span className="text-xs text-slate-400">
                    "Student at XYZ College | Looking for software roles" (0 keyword ranking)
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-red-500/20 text-red-400 shrink-0 mt-0.5 font-bold">✕</span>
                <div>
                  <strong className="text-white block font-bold">Blank or Generic About Section:</strong>
                  <span className="text-xs text-slate-400">
                    Copy-pasted text from Google that fails to tell your story or highlight strengths.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-red-500/20 text-red-400 shrink-0 mt-0.5 font-bold">✕</span>
                <div>
                  <strong className="text-white block font-bold">Unframed Experience:</strong>
                  <span className="text-xs text-slate-400">
                    Listing course names or vague internship tasks without showing measurable impact.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-red-500/20 text-red-400 shrink-0 mt-0.5 font-bold">✕</span>
                <div>
                  <strong className="text-white block font-bold">Missing LinkedIn Banner:</strong>
                  <span className="text-xs text-slate-400">
                    Default grey background that looks incomplete and unprofessional.
                  </span>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800 text-xs text-red-400 font-bold flex items-center justify-between">
              <span>Recruiter Response Rate: &lt; 5%</span>
              <span>Search Page: 12+</span>
            </div>
          </div>

          {/* CGP Recruiter Magnet Card */}
          <div className="rounded-3xl glass-card border border-cgp-purple/40 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl shadow-cgp-purple/20 group hover:border-cgp-cyan transition-all">
            <div className="absolute top-0 right-0 w-40 h-40 bg-cgp-pink/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-cgp-cyan/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cgp-cyan via-cgp-purple to-cgp-pink p-0.5 shadow-md">
                  <div className="w-full h-full bg-cgp-card rounded-[10px] flex items-center justify-center text-cgp-cyan">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">CGP Recruiter Magnet Profile</h3>
                  <p className="text-xs text-cgp-cyan font-bold">Recruiter Ready Personal Brand</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded text-[11px] font-extrabold bg-cgp-cyan/20 text-cgp-cyan border border-cgp-cyan/40 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Optimized
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-cgp-cyan/20 text-cgp-cyan shrink-0 mt-0.5 font-bold">✓</span>
                <div>
                  <strong className="text-white block font-bold">High-Indexing Headline:</strong>
                  <span className="text-xs text-slate-300">
                    Tailored keyword formula that ranks you top in LinkedIn Recruiter candidate filters.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-cgp-cyan/20 text-cgp-cyan shrink-0 mt-0.5 font-bold">✓</span>
                <div>
                  <strong className="text-white block font-bold">Story-Driven About Section:</strong>
                  <span className="text-xs text-slate-300">
                    Hooking summary crafted to showcase your potential, project highlights, and core expertise.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-cgp-cyan/20 text-cgp-cyan shrink-0 mt-0.5 font-bold">✓</span>
                <div>
                  <strong className="text-white block font-bold">Impact-Reframed Experience:</strong>
                  <span className="text-xs text-slate-300">
                    Turning projects & internships into quantified corporate achievements with metrics.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-cgp-cyan/20 text-cgp-cyan shrink-0 mt-0.5 font-bold">✓</span>
                <div>
                  <strong className="text-white block font-bold">Custom Professional Banner:</strong>
                  <span className="text-xs text-slate-300">
                    Stunning branded background header that makes your profile feel executive and credible.
                  </span>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-cgp-cyan/20 text-xs text-emerald-400 font-extrabold flex items-center justify-between">
              <span>Recruiter Response Rate: +350% Boost</span>
              <span>Search Page: Top 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
