"use client";

import { useState } from "react";
import { Sparkles, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export default function Navbar({ onOpenAuditModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-cgp-bg/85 border-b border-cgp-cyan/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo - Just Name */}
          <a href="#" className="flex items-center group">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-cgp-cyan transition-colors">
              Career Growth <span className="gemini-text-gradient">Partners</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-medium text-slate-300 hover:text-cgp-cyan transition-colors flex items-center gap-1"
            >
              Services
            </a>
            <a
              href="#ai-score"
              className="text-sm font-medium text-slate-300 hover:text-cgp-cyan transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cgp-cyan animate-pulse" />
              AI Score Tool
            </a>
            <a
              href="#transformation"
              className="text-sm font-medium text-slate-300 hover:text-cgp-cyan transition-colors"
            >
              Before & After
            </a>
            <a
              href="#recruiter-insights"
              className="text-sm font-medium text-slate-300 hover:text-cgp-cyan transition-colors"
            >
              Recruiter Matrix
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-300 hover:text-cgp-cyan transition-colors"
            >
              Packages
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-300 hover:text-cgp-cyan transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenAuditModal}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-br from-cgp-cyan via-cgp-blue to-cgp-indigo group-hover:from-cgp-cyan group-hover:to-cgp-gold text-white shadow-lg shadow-cgp-blue/25 hover:shadow-cgp-cyan/40 transition-all duration-300 active:scale-95"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cgp-bg/90 rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
                <span>Free Profile Audit</span>
                <ArrowRight className="w-4 h-4 text-cgp-cyan group-hover:text-white transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-cgp-card border border-cgp-cyan/20 text-slate-300 hover:text-white hover:border-cgp-cyan transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-cgp-cyan/20 bg-cgp-card/95 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-cgp-surface hover:text-cgp-cyan transition-colors"
            >
              Core Services
            </a>
            <a
              href="#ai-score"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-cgp-cyan bg-cgp-cyan/10 border border-cgp-cyan/20 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> AI Profile Readiness Checker
              </span>
              <span className="text-xs bg-cgp-cyan text-cgp-bg px-2 py-0.5 rounded font-bold">Free</span>
            </a>
            <a
              href="#transformation"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-cgp-surface hover:text-cgp-cyan transition-colors"
            >
              Before & After Transformations
            </a>
            <a
              href="#recruiter-insights"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-cgp-surface hover:text-cgp-cyan transition-colors"
            >
              6-Second Recruiter Test
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-cgp-surface hover:text-cgp-cyan transition-colors"
            >
              Packages & Pricing
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-cgp-surface hover:text-cgp-cyan transition-colors"
            >
              Frequently Asked Questions
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cgp-blue/30"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Get Free Profile Audit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
