"use client";

import { useState } from "react";
import { Sparkles, Copy, Check, ArrowRight, Zap } from "lucide-react";

interface HeadlineGeneratorTeaserProps {
  onOpenAuditModal: () => void;
}

export default function HeadlineGeneratorTeaser({ onOpenAuditModal }: HeadlineGeneratorTeaserProps) {
  const [selectedRole, setSelectedRole] = useState("developer");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const headlineTemplates: Record<string, string[]> = {
    developer: [
      "Full-Stack Developer | Next.js, React, Node.js & TypeScript | Engineered 4 High-Impact Apps | CS Graduate Seeking Dev Roles",
      "Software Engineer | AI & Cloud Integration | Python, FastAPI, React | 100+ LeetCode Solutions | Built Open-Source Tools",
      "Frontend Developer | Performance & Accessible Web UX | Tailwind CSS, React, REST APIs | Seeking Frontend Opportunities",
    ],
    analyst: [
      "Data & Business Analyst | SQL, Python, Tableau & Power BI | Reframed Ops Bottlenecks by 30% | Product Strategy & Insights",
      "Product Data Analyst | User Retention & Funnel Analytics | Certified in SQL & Analytics | Ex-E-commerce Intern",
      "Financial & Business Analyst | Financial Modeling, Excel VBA & Forecasting | Seeking High-Growth Finance Roles",
    ],
    marketing: [
      "Growth Marketing & Content Strategist | Scaled Organic Traffic +200% | SEO, Paid Ads & Brand Storytelling | B2B SaaS",
      "Digital Marketing Specialist | Social Media Growth, Copywriting & Meta Ads | Driven 50k+ Impressions for Tech Brands",
      "Product Marketing Associate | Customer Acquisition & Campaign Launch Strategy | MBA Graduate Seeking Growth Roles",
    ],
    design: [
      "UI/UX Designer | User-Centric Digital Products & Design Systems | Figma, Prototyping, Usability Testing | Portfolio Inside ⚡",
      "Product Designer | Mobile & Web Interfaces | Reduced User Drop-Off by 25% | Figma, Design Systems & Wireframing",
    ],
  };

  const currentHeadlines = headlineTemplates[selectedRole] || headlineTemplates.developer;

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section className="py-20 bg-cgp-card/50 relative overflow-hidden border-y border-cgp-cyan/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cgp-cyan/10 border border-cgp-cyan/30 text-cgp-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Demo Generator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Try Our AI Recruiter{" "}
            <span className="bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo bg-clip-text text-transparent">
              Headline Generator
            </span>
          </h2>

          <p className="text-base sm:text-lg text-cgp-textMuted leading-relaxed">
            Test our formula! Select your target field to view sample recruiter-optimized headline hooks.
          </p>

          {/* Role selector */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {[
              { id: "developer", label: "💻 Software & Web Dev" },
              { id: "analyst", label: "📊 Data & Business Analyst" },
              { id: "marketing", label: "🚀 Growth & Marketing" },
              { id: "design", label: "🎨 UI/UX Product Design" },
            ].map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                  selectedRole === role.id
                    ? "bg-cgp-blue text-white border-cgp-cyan shadow-lg shadow-cgp-blue/25"
                    : "bg-cgp-surface/60 text-slate-300 border-white/10 hover:border-cgp-cyan/30"
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        {/* Output Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {currentHeadlines.map((headline, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 border border-cgp-cyan/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-cgp-cyan/50 transition-all group"
            >
              <div className="flex items-start gap-3 min-w-0">
                <span className="w-7 h-7 rounded-lg bg-cgp-cyan/15 text-cgp-cyan font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-medium text-white group-hover:text-cgp-cyan transition-colors leading-snug">
                  {headline}
                </p>
              </div>

              <button
                onClick={() => handleCopy(headline, idx)}
                className="px-3.5 py-2 rounded-xl bg-cgp-surface hover:bg-cgp-cyan/20 border border-cgp-cyan/30 text-xs font-semibold text-cgp-cyan flex items-center gap-1.5 shrink-0 transition-colors"
              >
                {copiedIdx === idx ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Hook</span>
                  </>
                )}
              </button>
            </div>
          ))}

          {/* Bottom Upgrade CTA */}
          <div className="pt-6 text-center">
            <button
              onClick={onOpenAuditModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo text-white font-bold text-sm shadow-xl shadow-cgp-blue/30 hover:scale-[1.02] transition-transform"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Get Your Entire Profile Custom-Crafted By CGP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
