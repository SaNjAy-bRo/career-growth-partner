"use client";

import { Clock, Eye, ShieldCheck, Target, Zap } from "lucide-react";

export default function RecruiterScanMatrix() {
  const steps = [
    {
      time: "Sec 01 - 02",
      title: "Headline & Visual Banner",
      focus: "Relevance & Initial Authority",
      description:
        "Recruiters instantly check if your headline matches their search query keywords. A weak or generic headline causes immediate bounce.",
      cgpSolution: "We craft high-indexing boolean search headlines that rank top in recruiter candidate filters.",
    },
    {
      time: "Sec 03",
      title: "About Section Hook",
      focus: "Storytelling & Communication Skills",
      description:
        "HR checks the first 3 lines of your summary before clicking 'See More'. If it's boring or generic, they scroll past.",
      cgpSolution: "We write a captivating 3-line hook that highlights your key technical strengths & contact call to action.",
    },
    {
      time: "Sec 04 - 05",
      title: "Experience & Metric Proof",
      focus: "Quantifiable Impact & Skills",
      description:
        "Hiring leads look for numbers, tools used, and results rather than a list of course names or basic duties.",
      cgpSolution: "We reframe internships, projects, and roles into STAR-format (Situation, Task, Action, Result) bullets.",
    },
    {
      time: "Sec 06",
      title: "Featured Section & Portfolio",
      focus: "Proof of Execution",
      description:
        "Recruiters look for live project links, github repos, or resume attachments to verify competence.",
      cgpSolution: "We curate a high-converting featured showcase linking directly to your best projects & clean resume.",
    },
  ];

  return (
    <section id="recruiter-insights" className="py-20 bg-cgp-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cgp-blue/15 border border-cgp-cyan/30 text-cgp-cyan text-xs font-semibold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5" />
            <span>HR & Recruiter Analyst Insights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The 6-Second Recruiter{" "}
            <span className="bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo bg-clip-text text-transparent">
              Scanning Matrix
            </span>
          </h2>

          <p className="text-base sm:text-lg text-cgp-textMuted leading-relaxed">
            Here is exact insider knowledge on how corporate recruiters evaluate your LinkedIn profile before shortlisting.
          </p>
        </div>

        {/* Feature Visual Banner */}
        <div className="mb-14 relative max-w-4xl mx-auto rounded-3xl overflow-hidden glass-card border border-cgp-cyan/30 shadow-2xl group">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src="/recruiter-matrix-visual.png"
              alt="Candidate Profile Shortlisting & Recruiter Analytics Visual"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cgp-bg via-cgp-bg/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-slate-300 backdrop-blur-md bg-cgp-card/80 p-4 rounded-2xl border border-cgp-cyan/30">
              <span className="font-bold text-white text-sm">
                Recruiter Screening Analytics (2026 Standards)
              </span>
              <span className="text-cgp-cyan font-mono font-semibold">
                98.6% Sourcing Efficiency Match
              </span>
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-cgp-cyan/20 space-y-4 relative flex flex-col justify-between hover:border-cgp-cyan/50 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-cgp-cyan/15 text-cgp-cyan border border-cgp-cyan/30 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {step.time}
                  </span>
                  <span className="text-xs text-cgp-textMuted font-mono">Stage 0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cgp-cyan transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-cgp-gold">{step.focus}</p>

                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-bold text-cgp-cyan tracking-wider flex items-center gap-1">
                  <Zap className="w-3 h-3" /> CGP Solution:
                </span>
                <p className="text-[11px] text-slate-300 font-medium leading-snug">
                  {step.cgpSolution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
