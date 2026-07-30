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
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Briefcase,
      title: "Job Seeker Transformation",
      subtitle: "Recruiter Magnet Blueprint",
      description:
        "Make your profile impossible to miss for HR managers. We align your experience with active market demands to generate high-paying interview calls.",
      tags: ["Recruiter Search", "Career Transition", "High Callback Rate"],
      color: "from-blue-700 to-indigo-600",
    },
    {
      icon: Search,
      title: "Headline SEO Optimization",
      subtitle: "Rank Top in Candidate Search",
      description:
        "Replace generic headlines with search-indexed formulas that make your profile pop up first when recruiters filter by target role keywords.",
      tags: ["Keyword Indexing", "ATS Search", "Recruiter Boolean"],
      color: "from-cyan-600 to-blue-600",
    },
    {
      icon: BookOpen,
      title: "About Section Storywriting",
      subtitle: "Hooking Career Narrative",
      description:
        "Tell your personal journey with punchy, high-impact storytelling. Create instant emotional connection while showcasing core technical competencies.",
      tags: ["Personal Branding", "Storytelling", "Executive Pitch"],
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Experience Reframing",
      subtitle: "Turn Tasks into Achievements",
      description:
        "Transform routine job duties and internship tasks into quantified corporate achievements with metrics, tool tags, and quantifiable results.",
      tags: ["Metrics & Impact", "Skill Mapping", "Corporate Reframing"],
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: FileCheck,
      title: "Resume & Profile Alignment",
      subtitle: "360° Personal Brand Sync",
      description:
        "Ensure seamless consistency between your resume, portfolio links, and LinkedIn presence so hiring managers see a unified top-tier candidate.",
      tags: ["Resume Sync", "Portfolio Integration", "Brand Unity"],
      color: "from-emerald-600 to-teal-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white text-slate-900 relative overflow-hidden border-y border-slate-200">
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-cgp-blue text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Core Career Transformation{" "}
            <span className="bg-gradient-to-r from-cgp-blue via-cgp-indigo to-cgp-cyan bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
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
                className="group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between bg-slate-50 border border-slate-200 hover:border-cgp-blue hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 shadow-md shadow-blue-500/20`}>
                      <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-cgp-blue font-bold">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 font-mono font-bold">0{idx + 1}</span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-cgp-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-cgp-blue mt-0.5">{service.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-200/80 text-slate-700 border border-slate-300/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={onOpenAuditModal}
                    className="text-xs font-bold text-slate-900 group-hover:text-cgp-blue flex items-center gap-1 transition-colors"
                  >
                    <span>Get Started</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
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
