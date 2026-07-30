"use client";

import { XCircle, CheckCircle2, TrendingUp } from "lucide-react";

export default function ProblemVsSolution() {
  return (
    <section className="py-20 bg-cgp-bg relative overflow-hidden border-y border-cgp-purple/20">
      {/* Gemini Ambient Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cgp-pink/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cgp-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (No repetitive pill badge) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why 90% of Profiles Get Ignored vs.{" "}
            <span className="gemini-text-gradient">
              The CGP Magnet
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Hiring managers scan your profile for exactly 6 seconds. Make sure your headline and summary communicate recruiter value immediately.
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
                  <span className="text-xs text-slate-400">Zero recruiter keyword ranking & low search reach</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-red-500/20 text-red-400 shrink-0 mt-0.5 font-bold">✕</span>
                <div>
                  <strong className="text-white block font-bold">Blank About Section:</strong>
                  <span className="text-xs text-slate-400">Generic text that fails to highlight technical skills</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-red-500/20 text-red-400 shrink-0 mt-0.5 font-bold">✕</span>
                <div>
                  <strong className="text-white block font-bold">Unframed Experience:</strong>
                  <span className="text-xs text-slate-400">Basic duties without showing measurable business impact</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-red-500/20 text-red-400 shrink-0 mt-0.5 font-bold">✕</span>
                <div>
                  <strong className="text-white block font-bold">Missing LinkedIn Banner:</strong>
                  <span className="text-xs text-slate-400">Incomplete background header that looks unformatted</span>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-red-500/20 flex items-center justify-between text-xs font-bold text-red-400">
              <span>Recruiter Response Rate: &lt; 5%</span>
              <span>Search Page: 12+</span>
            </div>
          </div>

          {/* CGP Optimized Profile Card */}
          <div className="rounded-3xl bg-cgp-card border-2 border-cgp-cyan/50 p-6 sm:p-8 space-y-6 relative overflow-hidden group shadow-2xl shadow-cgp-cyan/10">
            <div className="flex items-center justify-between pb-4 border-b border-cgp-cyan/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cgp-cyan/15 border border-cgp-cyan/30 flex items-center justify-center text-cgp-cyan font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">CGP Recruiter Magnet Profile</h3>
                  <p className="text-xs text-cgp-cyan font-bold">Recruiter Ready Personal Brand</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-cgp-cyan/10 text-cgp-cyan border border-cgp-cyan/30">
                ▲ Optimized
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-cgp-cyan/20 text-cgp-cyan shrink-0 mt-0.5 font-bold">✓</span>
                <div>
                  <strong className="text-white block font-bold">High-Indexing Headline:</strong>
                  <span className="text-xs text-slate-300">Tailored keyword formula ranking top in recruiter searches</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-cgp-cyan/20 text-cgp-cyan shrink-0 mt-0.5 font-bold">✓</span>
                <div>
                  <strong className="text-white block font-bold">Story-Driven About Section:</strong>
                  <span className="text-xs text-slate-300">Hooking summary highlighting projects & core expertise</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-cgp-cyan/20 text-cgp-cyan shrink-0 mt-0.5 font-bold">✓</span>
                <div>
                  <strong className="text-white block font-bold">Impact-Reframed Experience:</strong>
                  <span className="text-xs text-slate-300">Quantified achievements with metrics and business outcomes</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="p-1 rounded bg-cgp-cyan/20 text-cgp-cyan shrink-0 mt-0.5 font-bold">✓</span>
                <div>
                  <strong className="text-white block font-bold">Custom Executive Banner:</strong>
                  <span className="text-xs text-slate-300">Stunning branded header making your profile feel credible</span>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-cgp-cyan/30 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> Recruiter Response Rate: +350% Boost
              </span>
              <span>Search Page: Top 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
