"use client";

import { useState } from "react";
import {
  Compass,
  FileText,
  UserCheck,
  Award,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface ServicesGridProps {
  onOpenAuditModal: () => void;
}

export default function ServicesGrid({ onOpenAuditModal }: ServicesGridProps) {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const serviceCategories = [
    "All",
    "Career Development Coaching",
    "Resume Writing",
    "Interview Preparation",
    "Brand Consulting",
  ];

  const services = [
    {
      category: "Career Development Coaching",
      icon: Compass,
      title: "Career Development Coaching",
      subtitle: "Strategic Guidance & Salary Acceleration",
      description:
        "1-on-1 personalized career roadmap sessions. We help freshers and experienced professionals identify high-demand skill gaps, position for promotions, and negotiate top-tier compensation.",
      features: [
        "1-on-1 Strategic Career Assessment",
        "Target Role & Industry Roadmap",
        "Offer & Salary Negotiation Playbook",
      ],
      color: "from-cgp-cyan via-cgp-blue to-cgp-purple",
    },
    {
      category: "Resume Writing",
      icon: FileText,
      title: "ATS Resume Writing",
      subtitle: "High-Converting ATS Formats",
      description:
        "Custom ATS-optimized resumes crafted to bypass automated recruiter screening filters and land directly on hiring manager desks with quantified achievement metrics.",
      features: [
        "ATS Keyword & Schema Parsing",
        "Executive & Fresher Role Customization",
        "Editable Word & PDF Deliverables",
      ],
      color: "from-cgp-purple via-cgp-pink to-cgp-blue",
    },
    {
      category: "Interview Preparation",
      icon: UserCheck,
      title: "Interview Preparation",
      subtitle: "Mock Interviews & Pitch Mastery",
      description:
        "Master high-stakes technical & behavioral interview rounds. Practice with industry mentors, refine your elevator pitch, and answer STAR-method questions with bulletproof confidence.",
      features: [
        "Mock Technical & HR Interviews",
        "STAR Method Answer Structuring",
        "Confidence & Elevator Pitch Coaching",
      ],
      color: "from-cgp-cyan to-cgp-indigo",
    },
    {
      category: "Brand Consulting",
      icon: Award,
      title: "LinkedIn Brand Consulting",
      subtitle: "Recruiter Magnet Optimization",
      description:
        "Transform your LinkedIn profile into an automated inbound lead engine. We optimize your headline, about section, featured media, and algorithm search index.",
      features: [
        "Search Keyword & Index Optimization",
        "Executive About Section Storytelling",
        "Inbound Recruiter Outreach Hook",
      ],
      color: "from-cgp-pink to-purple-600",
    },
  ];

  const filteredServices =
    selectedTag === "All"
      ? services
      : services.filter((s) => s.category === selectedTag);

  return (
    <section id="services" className="py-24 bg-cgp-bg text-white relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cgp-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cgp-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cgp-card border border-cgp-purple/30 text-cgp-cyan text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cgp-cyan" />
            <span>Comprehensive Career Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Services <span className="gemini-text-gradient">Provided</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            End-to-end personal branding and career acceleration solutions tailored for students, freshers, and job switchers worldwide.
          </p>

          {/* Filter Badges matching screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {serviceCategories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTag(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  selectedTag === category
                    ? "bg-gradient-to-r from-cgp-cyan to-cgp-purple text-white border-transparent shadow-lg shadow-cgp-cyan/20"
                    : "bg-cgp-card text-slate-300 border-cgp-purple/20 hover:border-cgp-cyan/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-7 border border-cgp-purple/25 hover:border-cgp-cyan/50 transition-all duration-300 flex flex-col justify-between group bg-cgp-card/90 space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cgp-surface border border-cgp-purple/30 flex items-center justify-center text-cgp-cyan group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-cgp-cyan uppercase tracking-wider px-3 py-1 rounded-full bg-cgp-cyan/10 border border-cgp-cyan/20">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cgp-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenAuditModal}
                  className="w-full py-3.5 px-5 rounded-2xl bg-cgp-surface border border-cgp-purple/30 hover:border-cgp-cyan text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-cgp-cyan group-hover:to-cgp-purple transition-all"
                >
                  <span>Get Started with {service.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
