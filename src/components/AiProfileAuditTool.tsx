"use client";

import { useState } from "react";
import { Sparkles, CheckSquare, Square, ArrowRight, ShieldCheck, AlertCircle, Award } from "lucide-react";

interface AiProfileAuditToolProps {
  onOpenAuditModal: () => void;
}

export default function AiProfileAuditTool({ onOpenAuditModal }: AiProfileAuditToolProps) {
  const [role, setRole] = useState("fresher");
  const [checklist, setChecklist] = useState({
    headline: false,
    banner: false,
    about: false,
    experience: false,
    featured: false,
    keywords: false,
  });

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Score Calculation
  const totalChecked = Object.values(checklist).filter(Boolean).length;
  const baseScore = Math.round((totalChecked / 6) * 100);

  const getScoreColor = (score: number) => {
    if (score < 50) return "text-red-400 border-red-500/30 bg-red-500/10";
    if (score < 80) return "text-cgp-gold border-cgp-gold/30 bg-cgp-gold/10";
    return "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
  };

  const getScoreStatus = (score: number) => {
    if (score < 50) return { title: "Invisible to Recruiters", text: "Your profile is missing core ATS search keywords & structure. You are likely getting skipped." };
    if (score < 80) return { title: "Moderate Recruiter Reach", text: "Fair foundation, but lacks high-impact story reframing & recruiter hook elements." };
    return { title: "Recruiter Ready Magnet", text: "Great score! Let CGP fine-tune your personal brand for top tier roles." };
  };

  const status = getScoreStatus(baseScore);

  return (
    <section id="ai-score" className="py-20 bg-cgp-card/50 relative overflow-hidden border-y border-cgp-cyan/15">
      {/* Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cgp-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cgp-cyan/10 border border-cgp-cyan/30 text-cgp-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive AI Tool</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Check Your LinkedIn{" "}
            <span className="bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo bg-clip-text text-transparent">
              Recruiter Readiness Score
            </span>
          </h2>

          <p className="text-base sm:text-lg text-cgp-textMuted leading-relaxed">
            Select your career stage and tick the components you currently have to get an instant AI evaluation.
          </p>
        </div>

        {/* Audit Tool Interface Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-cgp-cyan/30 shadow-2xl max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Inputs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Career Stage Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-cgp-textMuted flex items-center justify-between">
                <span>Step 1: Select Your Current Target Status</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                    role === "student"
                      ? "bg-cgp-blue text-white border-cgp-cyan shadow-md shadow-cgp-blue/20"
                      : "bg-cgp-surface/60 text-slate-300 border-white/10 hover:border-cgp-cyan/30"
                  }`}
                >
                  🎓 College Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole("fresher")}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                    role === "fresher"
                      ? "bg-cgp-blue text-white border-cgp-cyan shadow-md shadow-cgp-blue/20"
                      : "bg-cgp-surface/60 text-slate-300 border-white/10 hover:border-cgp-cyan/30"
                  }`}
                >
                  🚀 Fresh Graduate
                </button>
                <button
                  type="button"
                  onClick={() => setRole("jobseeker")}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                    role === "jobseeker"
                      ? "bg-cgp-blue text-white border-cgp-cyan shadow-md shadow-cgp-blue/20"
                      : "bg-cgp-surface/60 text-slate-300 border-white/10 hover:border-cgp-cyan/30"
                  }`}
                >
                  💼 Job Seeker / Switcher
                </button>
              </div>
            </div>

            {/* Interactive Checklist */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-cgp-textMuted block">
                Step 2: Check Items Currently Active on Your Profile
              </label>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { key: "headline", label: "Custom Keyword-Rich Headline (Not default job title)" },
                  { key: "banner", label: "Custom LinkedIn Brand Header Banner" },
                  { key: "about", label: "Storytelling About Summary with Contact Hook" },
                  { key: "experience", label: "Project & Internship Bullet points with Metrics" },
                  { key: "featured", label: "Featured Portfolio / Resume Attachments" },
                  { key: "keywords", label: "Top 20 Industry Search Keywords Included" },
                ].map((item) => {
                  const isChecked = checklist[item.key as keyof typeof checklist];
                  return (
                    <div
                      key={item.key}
                      onClick={() => toggleCheck(item.key as keyof typeof checklist)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                        isChecked
                          ? "bg-cgp-cyan/15 border-cgp-cyan text-white"
                          : "bg-cgp-surface/40 border-white/5 text-slate-400 hover:border-cgp-cyan/30"
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-cgp-cyan" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                      <span className="text-xs font-medium leading-tight">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Score Result Panel */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-cgp-surface/80 border border-cgp-cyan/25 text-center space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-cgp-textMuted tracking-wider block mb-2">
                Calculated Visibility Index
              </span>

              {/* Animated Dial Circle */}
              <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-slate-800"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={264}
                    strokeDashoffset={264 - (264 * baseScore) / 100}
                    strokeLinecap="round"
                    className={`transition-all duration-700 ${
                      baseScore < 50 ? "text-red-500" : baseScore < 80 ? "text-cgp-gold" : "text-cgp-cyan"
                    }`}
                    fill="transparent"
                  />
                </svg>

                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-extrabold text-white">{baseScore}%</span>
                  <span className="text-[10px] text-cgp-textMuted font-bold">SCORE</span>
                </div>
              </div>

              {/* Status Badge & Explainer */}
              <div className="mt-4 space-y-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getScoreColor(baseScore)}`}>
                  {status.title}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed px-2">
                  {status.text}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={onOpenAuditModal}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cgp-blue/30 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Request Full 1-on-1 Profile Makeover</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
