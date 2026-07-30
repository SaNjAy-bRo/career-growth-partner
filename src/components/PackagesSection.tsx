"use client";

import { Check, Sparkles, Zap, ShieldCheck, ArrowRight } from "lucide-react";

interface PackagesSectionProps {
  onOpenAuditModal: () => void;
}

export default function PackagesSection({ onOpenAuditModal }: PackagesSectionProps) {
  const packages = [
    {
      name: "Student Starter Pack",
      tagline: "Build a strong initial professional authority",
      target: "For College Students & Fresh Graduates",
      popular: false,
      features: [
        "Complete LinkedIn Profile Makeover",
        "Fresher Recruiter Search Headline Optimization",
        "Academic & Project Work Reframing",
        "Custom CGP Branded Profile Banner",
        "Featured Section & Skills Indexing",
        "48-Hour Turnaround Delivery",
      ],
      cta: "Select Student Starter",
      glow: "border-cgp-cyan/20",
    },
    {
      name: "Job Seeker Pro",
      tagline: "Transform your profile into a recruiter magnet",
      target: "For Active Job Seekers & Career Switchers",
      popular: true,
      features: [
        "Full Recruiter-Ready Profile Transformation",
        "High-Indexing Boolean Keyword Headline",
        "Storytelling About Section Writing",
        "STAR-Format Metric & Duty Reframing",
        "Custom Branded Header Banner",
        "Free Resume Keyword Alignment Check",
        "Priority 24-48 Hour Delivery",
        "Direct DM Support & Revisions",
      ],
      cta: "Get Job Seeker Pro",
      glow: "border-cgp-cyan shadow-xl shadow-cgp-cyan/15 bg-cgp-card/90",
    },
    {
      name: "360° Career Magnet Bundle",
      tagline: "Complete personal branding & job launch package",
      target: "For Maximum Career Impact & Interviews",
      popular: false,
      features: [
        "Everything in Job Seeker Pro",
        "Professional ATS Resume Rewrite & Formatting",
        "Tailored Cover Letter Template",
        "LinkedIn Outreach & Networking Playbook",
        "1-on-1 Interview Strategy Consultation",
        "1-Month Profile Maintenance Support",
      ],
      cta: "Get 360° Mastery Pack",
      glow: "border-cgp-indigo/30",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-cgp-bg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cgp-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cgp-cyan/10 border border-cgp-cyan/30 text-cgp-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Investment in Your Future</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo bg-clip-text text-transparent">
              Transformation Packages
            </span>
          </h2>

          <p className="text-base sm:text-lg text-cgp-textMuted leading-relaxed">
            Choose the right package for your career stage. All packages come with direct recruiter optimization and satisfaction guarantee.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all duration-300 relative ${pkg.glow} ${
                pkg.popular ? "bg-cgp-card/90" : "bg-cgp-card/50 hover:border-cgp-cyan/40"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cgp-cyan to-cgp-blue text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 fill-white" /> Most Popular
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-xs text-cgp-cyan font-medium mt-1">{pkg.tagline}</p>
                  <span className="inline-block mt-3 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-cgp-surface text-slate-300 border border-white/5">
                    {pkg.target}
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase text-cgp-textMuted tracking-wider block">
                    What's Included:
                  </span>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-cgp-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-800 space-y-3">
                <button
                  onClick={onOpenAuditModal}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo text-white shadow-lg shadow-cgp-blue/30 hover:scale-[1.02]"
                      : "bg-cgp-surface hover:bg-cgp-cyan/20 text-slate-200 hover:text-white border border-cgp-cyan/30"
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-cgp-textMuted">
                  Contact for customized pricing & group student discounts
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
