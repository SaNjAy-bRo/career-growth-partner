"use client";

import {
  GraduationCap,
  Briefcase,
  Search,
  BookOpen,
  TrendingUp,
  FileCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface ServicesGridProps {
  onOpenAuditModal: () => void;
}

export default function ServicesGrid({ onOpenAuditModal }: ServicesGridProps) {
  const services = [
    {
      icon: GraduationCap,
      title: "Student Profile Makeover",
      subtitle: "First Impression Excellence",
      description:
        "Build a commanding corporate brand as a college student. Convert academic assignments, tech stacks, and campus roles into recruiter-ready proof of ability.",
      tags: ["Student Branding", "Fresher Positioning", "Academic Reframing"],
      color: "from-cgp-cyan via-cgp-blue to-cgp-purple",
    },
    {
      icon: Briefcase,
      title: "Job Seeker Transformation",
      subtitle: "Recruiter Magnet Blueprint",
      description:
        "Make your profile impossible to miss for HR managers. We align your experience with active market demands to generate high-paying interview calls.",
      tags: ["Recruiter Search", "Career Transition", "High Callback Rate"],
      color: "from-cgp-purple via-cgp-pink to-cgp-blue",
    },
    {
      icon: Search,
      title: "Headline SEO Optimization",
      subtitle: "Rank Top in Candidate Search",
      description:
        "Replace generic headlines with search-indexed formulas that make your profile pop up first when recruiters filter by target role keywords.",
      tags: ["Keyword Indexing", "ATS Search", "Recruiter Boolean"],
      color: "from-cgp-cyan to-cgp-indigo",
    },
    {
      icon: BookOpen,
      title: "About Section Storywriting",
      subtitle: "Hooking Career Narrative",
      description:
        "Tell your personal journey with punchy, high-impact storytelling. Create instant emotional connection while showcasing core technical competencies.",
      tags: ["Personal Branding", "Storytelling", "Executive Pitch"],
      color: "from-cgp-pink to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Experience Reframing",
      subtitle: "Turn Tasks into Achievements",
      description:
        "Transform routine job duties and internship tasks into quantified corporate achievements with metrics, tool tags, and quantifiable results.",
      tags: ["Metrics & Impact", "Skill Mapping", "Corporate Reframing"],
      color: "from-amber-500 to-cgp-pink",
    },
    {
      icon: FileCheck,
      title: "Resume & Profile Alignment",
      subtitle: "360° Personal Brand Sync",
      description:
        "Ensure seamless consistency between your resume, portfolio links, and LinkedIn presence so hiring managers see a unified top-tier candidate.",
      tags: ["Resume Sync", "Portfolio Integration", "Brand Unity"],
      color: "from-emerald-400 to-cgp-cyan",
    },
  ];

  return (
    <section id="services" className="py-20 bg-cgp-bg text-white relative overflow-hidden border-y border-cgp-purple/20">
      {/* Gemini Background Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cgp-purple/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cgp-cyan/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cgp-purple/15 border border-cgp-purple/30 text-cgp-cyan text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-cgp-cyan" />
            <span>Tailored Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Core Career Transformation{" "}
            <span className="gemini-text-gradient">
              Services
            </span>
          </h2>

          <p className="text-base sm:text-lg text-cgp-textMuted leading-relaxed">
            From fresher positioning to recruiter search optimization, we provide end-to-end profile makeovers that get you noticed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div
                key={idx}
                className="group relative glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-cgp-purple/25 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 shadow-lg shadow-cgp-purple/20`}>
                      <div className="w-full h-full bg-cgp-card rounded-[10px] flex items-center justify-center text-cgp-cyan">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="text-xs text-cgp-textMuted font-mono">0{idx + 1}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cgp-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-cgp-cyan mt-0.5">{service.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-cgp-textMuted leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-cgp-surface text-slate-300 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={onOpenAuditModal}
                    className="text-xs font-bold text-white group-hover:text-cgp-cyan flex items-center gap-1 transition-colors"
                  >
                    <span>Get Started</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Recruiter Ready
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
