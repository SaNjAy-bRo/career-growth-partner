"use client";

import { useState } from "react";
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    status: "fresher",
    linkedinUrl: "",
    targetRole: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl glass-card border border-cgp-cyan/40 p-6 sm:p-8 shadow-2xl overflow-hidden bg-cgp-card">
        {/* Top Glow Orb */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cgp-cyan/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-cgp-surface text-slate-400 hover:text-white hover:border-cgp-cyan border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cgp-cyan/15 text-cgp-cyan text-xs font-bold uppercase border border-cgp-cyan/30">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Free 1-on-1 Profile Audit</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Claim Your Recruiter Audit
              </h3>
              <p className="text-xs text-cgp-textMuted leading-relaxed">
                Fill in your details below. Career Growth Partners will review your profile and send a personalized video/text audit breakdown directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-cgp-surface/80 border border-cgp-cyan/20 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cgp-cyan transition-colors"
                />
              </div>

              {/* Contact Info */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  WhatsApp Number or Email *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 98765 43210 or email@domain.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-cgp-surface/80 border border-cgp-cyan/20 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cgp-cyan transition-colors"
                />
              </div>

              {/* Status */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Current Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-cgp-surface/80 border border-cgp-cyan/20 text-white text-xs focus:outline-none focus:border-cgp-cyan transition-colors"
                >
                  <option value="student">🎓 College Student (Final/Pre-Final Year)</option>
                  <option value="fresher">🚀 Fresh Graduate / Looking for First Job</option>
                  <option value="jobseeker">💼 Experienced Job Seeker / Career Switcher</option>
                </select>
              </div>

              {/* LinkedIn URL / Profile Link */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  LinkedIn Profile Link or Current Headline
                </label>
                <input
                  type="text"
                  placeholder="e.g. linkedin.com/in/yourprofile"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-cgp-surface/80 border border-cgp-cyan/20 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cgp-cyan transition-colors"
                />
              </div>

              {/* Target Role */}
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  Target Role / Ideal Job Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Software Engineer / Data Analyst / Product Manager"
                  value={formData.targetRole}
                  onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-cgp-surface/80 border border-cgp-cyan/20 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cgp-cyan transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo hover:from-sky-400 hover:to-indigo-500 text-white font-extrabold text-sm shadow-xl shadow-cgp-blue/30 transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                <span>Submit For Free Audit</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-cgp-textMuted pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cgp-cyan" />
                <span>100% Confidential • No Login Credentials Needed</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto text-2xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white">Audit Request Received! 🎉</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-cgp-cyan">{formData.name || "there"}</strong>! Our senior recruiter & brand analysts at CGP are currently reviewing your profile details.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-cgp-surface/80 border border-cgp-cyan/20 text-left text-xs space-y-2 max-w-xs mx-auto">
              <div className="flex items-center justify-between text-slate-400">
                <span>Estimated Audit Delivery:</span>
                <span className="text-cgp-cyan font-bold">Within 2 Hours</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>Format:</span>
                <span className="text-emerald-400 font-bold">WhatsApp / Email DM</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="px-6 py-3 rounded-xl bg-cgp-surface hover:bg-cgp-card border border-cgp-cyan/30 text-white font-bold text-xs transition-colors"
            >
              Back to Home Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
