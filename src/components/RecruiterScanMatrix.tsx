"use client";

import { Clock, Eye, ShieldCheck, Target, Zap } from "lucide-react";

export default function RecruiterScanMatrix() {
  const steps = [
    {
      time: "Sec 01 - 02",
      title: "Headline & Visual Banner",
      focus: "Relevance & Initial Authority",
      description:
        "Recruiters check if your headline matches their search query keywords. A generic headline causes immediate bounce.",
      cgpSolution: "We craft high-indexing boolean headlines ranking top in candidate search filters.",
    },
    {
      time: "Sec 03",
      title: "About Section Hook",
      focus: "Storytelling & Communication",
      description:
        "HR checks the first 3 lines of your summary before clicking 'See More'. If boring, they scroll past.",
      cgpSolution: "We write a captivating 3-line hook highlighting key technical strengths.",
    },
    {
      time: "Sec 04 - 05",
      title: "Experience & Metric Proof",
      focus: "Quantifiable Impact & Skills",
      description:
        "Hiring leads look for numbers, tools used, and business results rather than basic course duties.",
      cgpSolution: "We reframe internships and roles into STAR-format (Situation, Task, Action, Result) bullets.",
    },
    {
      time: "Sec 06",
      title: "Featured Section Showcase",
      focus: "Proof of Execution",
      description:
        "Recruiters look for live project links, github repos, or resume attachments to verify competence.",
      cgpSolution: "We curate a high-converting featured showcase linking directly to your best work.",
    },
  ];

  return (
    <section id="recruiter-insights" className="py-20 bg-cgp-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header (No repetitive pill badge) */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            The 6-Second Recruiter{" "}
            <span className="gemini-text-gradient">
              Scanning Matrix
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Insider knowledge on how corporate recruiters evaluate your LinkedIn profile before shortlisting.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 border border-cgp-purple/25 hover:border-cgp-cyan/40 transition-all bg-cgp-card/90 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cgp-cyan/10 text-cgp-cyan border border-cgp-cyan/20">
                  {step.time}
                </span>
                <span className="text-xs font-bold text-slate-400">{step.focus}</span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">{step.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{step.description}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-cgp-surface/80 border border-cgp-cyan/30 text-xs text-cgp-cyan font-semibold flex items-start gap-2">
                <Zap className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                <span>CGP Solution: {step.cgpSolution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
