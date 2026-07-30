"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How quickly will my LinkedIn profile makeover be delivered?",
      a: "Our standard turnaround time is 24 to 48 hours after we receive your details and current profile link. Priority express delivery is also available for urgent job applications.",
    },
    {
      q: "Do I need to share my private LinkedIn password?",
      a: "No, never! Your security is paramount. We deliver a complete, highly structured LinkedIn Blueprint Document with exact copy-paste text for your Headline, About section, Experience bullets, Skills tags, and high-resolution custom Header Banner graphics.",
    },
    {
      q: "What if I am a college student or fresher with zero work experience?",
      a: "Fresher positioning is one of CGP's core specialties! We reframe academic projects, college leadership, certifications, and technical toolstacks to prove capability and build executive credibility even without prior corporate experience.",
    },
    {
      q: "Will this help my profile rank higher in recruiter searches?",
      a: "Yes! Recruiters use LinkedIn Recruiter toolfilters with Boolean keyword searches (e.g. 'React AND TypeScript AND Full-Stack'). We embed precise high-traffic industry keywords into your headline, about summary, and skills list so you rank near the top.",
    },
    {
      q: "Where is Career Growth Partners located?",
      a: "CGP is headquartered in Bengaluru, Karnataka, India, and serves job seekers, students, and professionals remotely nationwide and internationally.",
    },
    {
      q: "How do I get started?",
      a: "Simply click 'Get Free Profile Audit' or 'Transform My Profile' on this page, fill in your target job role, and our team will get in touch directly via DM/WhatsApp within hours!",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-cgp-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cgp-cyan/10 border border-cgp-cyan/30 text-cgp-cyan text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-cgp-cyan via-cgp-blue to-cgp-indigo bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-base sm:text-lg text-cgp-textMuted leading-relaxed">
            Everything you need to know about our LinkedIn transformation process.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-cgp-cyan/20 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg hover:text-cgp-cyan transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-cgp-cyan/15 text-cgp-cyan font-bold text-xs flex items-center justify-center shrink-0">
                      ?
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cgp-cyan transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                    <p className="pl-9">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
