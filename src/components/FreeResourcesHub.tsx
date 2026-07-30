"use client";

import { useState } from "react";
import { Download, Sparkles, FileText, CheckCircle2, ArrowRight, ShieldCheck, Gift } from "lucide-react";

interface FreeResourcesHubProps {
  onOpenAuditModal: () => void;
}

export default function FreeResourcesHub({ onOpenAuditModal }: FreeResourcesHubProps) {
  const [downloadedItem, setDownloadedItem] = useState<string | null>(null);

  const resources = [
    {
      id: "ats-template",
      title: "2026 High-Converting ATS Resume Template Kit",
      description: "Pre-formatted Word & PDF resume templates engineered to score 95+ on Taleo, Workday, and Greenhouse ATS scanners.",
      badge: "DOWNLOADABLE KIT",
      icon: FileText,
      format: "PDF + DOCX (Instant)",
      color: "from-cgp-cyan to-cgp-blue",
    },
    {
      id: "keyword-cheatsheet",
      title: "Top 100 Recruiter Boolean Search Keywords",
      description: "Insider list of high-indexing skills, action verbs, and technology keywords corporate HR managers filter for.",
      badge: "KEYWORD MATRIX",
      icon: Sparkles,
      format: "PDF Guide",
      color: "from-cgp-purple to-cgp-pink",
    },
    {
      id: "salary-script",
      title: "Salary Negotiation Email & Verbal Scripts",
      description: "Word-for-word scripts to negotiate higher base pay, sign-on bonuses, and equity compensation without risking job offers.",
      badge: "NEGOTIATION PLAYBOOK",
      icon: Gift,
      format: "PDF Checklist",
      color: "from-emerald-400 to-cgp-cyan",
    },
  ];

  const handleDownload = (title: string) => {
    setDownloadedItem(title);
    setTimeout(() => {
      onOpenAuditModal();
    }, 800);
  };

  return (
    <section id="free-resources" className="py-24 bg-cgp-bg text-white relative overflow-hidden">
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cgp-cyan/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cgp-purple/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cgp-card border border-cgp-cyan/30 text-cgp-cyan text-xs font-bold uppercase tracking-wider">
            <Gift className="w-4 h-4 text-cgp-cyan" />
            <span>Free Career Toolkits & Downloads</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Some Free <span className="gemini-text-gradient">Resources & Toolkits</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Download our recruiter-approved templates and guides to kickstart your personal brand transformation today.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {resources.map((res) => {
            const Icon = res.icon;
            return (
              <div
                key={res.id}
                className="glass-card rounded-3xl p-6 border border-cgp-purple/30 hover:border-cgp-cyan/50 transition-all duration-300 flex flex-col justify-between group bg-cgp-card/90 space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cgp-surface border border-cgp-purple/30 flex items-center justify-center text-cgp-cyan group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      {res.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white group-hover:text-cgp-cyan transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">
                      Format: {res.format}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <button
                  onClick={() => handleDownload(res.title)}
                  className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink hover:from-sky-400 hover:to-pink-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cgp-purple/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {downloadedItem === res.title ? "Preparing Download..." : "Free Instant Access"}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Career Growth Benchmark Stat Banner */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cgp-purple/30 bg-cgp-card/90 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-black text-cgp-cyan">+45%</span>
            <p className="text-xs font-bold text-slate-300">Avg Salary Hike Achieved</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-black text-cgp-purple">14 Days</span>
            <p className="text-xs font-bold text-slate-300">Avg Time to First Interview</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-black text-cgp-pink">98.4%</span>
            <p className="text-xs font-bold text-slate-300">Shortlist Success Rate</p>
          </div>
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-black text-emerald-400">2,400+</span>
            <p className="text-xs font-bold text-slate-300">Profiles Transformed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
