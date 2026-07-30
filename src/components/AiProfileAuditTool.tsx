"use client";

import { useState } from "react";
import { Sparkles, CheckSquare, Square, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface AiProfileAuditToolProps {
  onOpenAuditModal: () => void;
}

export default function AiProfileAuditTool({ onOpenAuditModal }: AiProfileAuditToolProps) {
  const [role, setRole] = useState<"student" | "fresher" | "jobseeker">("fresher");
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

  // Base role bonus multiplier
  const roleBonus = role === "student" ? 15 : role === "fresher" ? 10 : 5;
  const totalChecked = Object.values(checklist).filter(Boolean).length;
  
  // Dynamic Score Calculation
  const baseScore = totalChecked === 0 ? 0 : Math.min(100, Math.round((totalChecked / 6) * 85 + roleBonus));

  const getScoreColor = (score: number) => {
    if (score === 0) return "text-slate-400 border-slate-700 bg-slate-800/50";
    if (score < 50) return "text-red-400 border-red-500/30 bg-red-500/10";
    if (score < 80) return "text-cgp-gold border-cgp-gold/30 bg-cgp-gold/10";
    return "text-emerald-400 border-emerald-500/30 bg-emerald-500/10";
  };

  const getScoreStatus = (score: number) => {
    if (score === 0) return { title: "Audit Not Started", text: "Select your status above & check active items to calculate your profile readiness index." };
    if (score < 50) return { title: "Invisible to Recruiters", text: "Your profile is missing core ATS search keywords & structure. You are likely getting skipped." };
    if (score < 80) return { title: "Moderate Recruiter Reach", text: "Fair foundation, but lacks high-impact story reframing & recruiter hook elements." };
    return { title: "Recruiter Ready Magnet", text: "Great score! Let CGP fine-tune your personal brand for top tier roles." };
  };

  const status = getScoreStatus(baseScore);

  return (
    <section id="ai-score" className="py-20 bg-cgp-card/50 relative overflow-hidden border-y border-cgp-purple/20">
      {/* Gemini Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cgp-purple/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cgp-purple/15 border border-cgp-purple/30 text-cgp-cyan text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cgp-cyan" />
            <span>Interactive AI Readiness Tool</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Check Your LinkedIn{" "}
            <span className="gemini-text-gradient">
              Recruiter Readiness Score
            </span>
          </h2>

          <p className="text-base sm:text-lg text-cgp-textMuted leading-relaxed">
            Select your career stage and tick the components you currently have to get an instant AI evaluation score.
          </p>
        </div>

        {/* Audit Tool Interface Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-cgp-purple/30 shadow-2xl max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Inputs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Career Stage Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-cgp-textMuted flex items-center justify-between">
                <span>Step 1: Select Your Current Target Status</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 ${
                    role === "student"
                      ? "bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink text-white border-cgp-purple shadow-lg shadow-cgp-purple/30"
                      : "bg-cgp-surface/80 text-slate-300 border-white/10 hover:border-cgp-cyan/40"
                  }`}
                >
                  <span>🎓 College Student</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("fresher")}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 ${
                    role === "fresher"
                      ? "bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink text-white border-cgp-purple shadow-lg shadow-cgp-purple/30"
                      : "bg-cgp-surface/80 text-slate-300 border-white/10 hover:border-cgp-cyan/40"
                  }`}
                >
                  <span>🚀 Fresh Graduate</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("jobseeker")}
                  className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-center flex items-center justify-center gap-1.5 active:scale-95 ${
                    role === "jobseeker"
                      ? "bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink text-white border-cgp-purple shadow-lg shadow-cgp-purple/30"
                      : "bg-cgp-surface/80 text-slate-300 border-white/10 hover:border-cgp-cyan/40"
                  }`}
                >
                  <span>💼 Job Seeker</span>
                </button>
              </div>
            </div>

            {/* Interactive Checklist Buttons */}
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
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => toggleCheck(item.key as keyof typeof checklist)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex items-start gap-3 select-none active:scale-95 ${
                        isChecked
                          ? "bg-cgp-cyan/20 border-cgp-cyan text-white shadow-md shadow-cgp-cyan/10"
                          : "bg-cgp-surface/50 border-white/10 text-slate-400 hover:border-cgp-purple/40 hover:text-white"
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-cgp-cyan" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-500" />
                        )}
                      </div>
                      <span className="text-xs font-bold leading-tight">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Score Result Panel */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-cgp-surface/90 border border-cgp-purple/30 text-center space-y-6 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs uppercase font-extrabold text-cgp-cyan tracking-wider block mb-3">
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
                      baseScore === 0
                        ? "text-slate-700"
                        : baseScore < 50
                        ? "text-red-500"
                        : baseScore < 80
                        ? "text-cgp-gold"
                        : "text-emerald-400"
                    }`}
                    fill="transparent"
                  />
                </svg>

                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-white">{baseScore}%</span>
                  <span className="text-[10px] text-cgp-textMuted font-bold uppercase tracking-wider">INDEX</span>
                </div>
              </div>

              {/* Status Badge & Explainer */}
              <div className="mt-4 space-y-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getScoreColor(baseScore)}`}>
                  {status.title}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed px-2 font-medium">
                  {status.text}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-cgp-cyan via-cgp-purple to-cgp-pink hover:from-sky-400 hover:to-pink-500 text-white font-extrabold text-xs sm:text-sm shadow-lg shadow-cgp-purple/30 transition-all flex items-center justify-center gap-2 group"
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
