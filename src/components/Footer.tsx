"use client";

import { Sparkles, MapPin, ShieldCheck, ArrowRight } from "lucide-react";

interface FooterProps {
  onOpenAuditModal: () => void;
}

export default function Footer({ onOpenAuditModal }: FooterProps) {
  return (
    <footer className="bg-cgp-bg border-t border-cgp-cyan/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cgp-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pre-Footer Banner CTA */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-cgp-cyan/30 bg-gradient-to-r from-cgp-surface via-cgp-card to-cgp-surface text-center space-y-5 mb-14 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cgp-cyan/15 text-cgp-cyan text-xs font-bold uppercase border border-cgp-cyan/30">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Your Career Deserves Visibility</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
            Ready to Turn Your Profile into a{" "}
            <span className="bg-gradient-to-r from-cgp-cyan via-blue-400 to-cgp-indigo bg-clip-text text-transparent">
              Recruiter Magnet?
            </span>
          </h2>

          <div className="pt-2">
            <button
              onClick={onOpenAuditModal}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-xl shadow-cgp-blue/30 hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>Get Free Profile Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimal Uncluttered Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80 items-start">
          {/* Brand Info */}
          <div className="md:col-span-8 space-y-3">
            <h3 className="font-black text-xl sm:text-2xl text-white tracking-tight">
              Career Growth <span className="gemini-text-gradient">Partners</span>
            </h3>

            <p className="text-xs text-cgp-textMuted leading-relaxed max-w-md">
              Helping students and job seekers build recruiter-ready personal brands, rank top in hiring searches, and land more interview calls.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-cgp-cyan shrink-0" />
              <span>Bengaluru, Karnataka, India • Remote Worldwide</span>
            </div>
          </div>

          {/* Quick Clean Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-cgp-textMuted font-medium">
              <a href="#services" className="hover:text-cgp-cyan transition-colors">
                Services
              </a>
              <a href="#transformation" className="hover:text-cgp-cyan transition-colors">
                Before & After
              </a>
              <a href="#pricing" className="hover:text-cgp-cyan transition-colors">
                Packages
              </a>
              <a href="#faq" className="hover:text-cgp-cyan transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cgp-textMuted">
          <p>© {new Date().getFullYear()} Career Growth Partners (CGP). All rights reserved.</p>
          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Recruiter Algorithm Safe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
