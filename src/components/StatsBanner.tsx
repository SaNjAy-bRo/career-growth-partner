"use client";

import { Award, Users, Search, Clock, CheckCircle } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Profiles Revamped",
      sublabel: "Students & Job Seekers",
      color: "text-cgp-cyan",
      glow: "group-hover:border-cgp-cyan/40",
    },
    {
      icon: Search,
      value: "3.8x",
      label: "Recruiter Views",
      sublabel: "Increased Search Appearances",
      color: "text-cgp-blue",
      glow: "group-hover:border-cgp-blue/40",
    },
    {
      icon: Award,
      value: "+85%",
      label: "Interview Calls",
      sublabel: "Faster Hiring Callback Rate",
      color: "text-emerald-400",
      glow: "group-hover:border-emerald-500/40",
    },
    {
      icon: Clock,
      value: "24-48h",
      label: "Fast Delivery",
      sublabel: "Direct DM & Strategy Support",
      color: "text-cgp-gold",
      glow: "group-hover:border-cgp-gold/40",
    },
  ];

  return (
    <section className="relative py-12 bg-cgp-bg border-y border-cgp-cyan/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className={`group p-5 rounded-2xl bg-cgp-card/70 border border-white/5 backdrop-blur-md ${stat.glow} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-xl bg-cgp-surface ${stat.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white tracking-wide">{stat.label}</h4>
                <p className="text-xs text-cgp-textMuted mt-0.5">{stat.sublabel}</p>
              </div>
            );
          })}
        </div>

        {/* Recruiter Guarantee Banner */}
        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-cgp-surface via-cgp-card to-cgp-surface border border-cgp-cyan/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cgp-cyan/10 border border-cgp-cyan/30 flex items-center justify-center text-cgp-cyan shrink-0">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Recruiter Algorithm Compliant (2026 Standards)</p>
              <p className="text-[11px] text-cgp-textMuted">
                We craft profiles specifically tuned to pass LinkedIn Recruiter Boolean filters and hiring manager scrutiny.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-cgp-gold font-semibold bg-cgp-gold/10 px-3 py-1.5 rounded-lg border border-cgp-gold/20">
            ★ Rated 4.9/5 by Bengaluru Freshers & Professionals
          </div>
        </div>
      </div>
    </section>
  );
}
