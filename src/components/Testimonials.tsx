"use client";

import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ananya Swaminathan",
      role: "Software Engineering Graduate",
      location: "Bengaluru, Karnataka",
      avatar: "👩‍💻",
      rating: 5,
      story:
        "I was applying to dozens of companies with zero responses. After CGP revamped my headline and reframed my college project work, 3 recruiters messaged me on LinkedIn within 5 days! Landed my first tech role.",
      result: "Landed SDE Role in 2 Weeks",
    },
    {
      name: "Vikram Mehta",
      role: "Data & Business Analyst",
      location: "Remote / Bengaluru",
      avatar: "👨‍💼",
      rating: 5,
      story:
        "CGP completely restructured my LinkedIn profile with SQL & Python search keywords. My profile search appearances jumped by +380%. The storytelling in the About section made a massive difference.",
      result: "4 Recruiter InMails Received",
    },
    {
      name: "Kavya Nair",
      role: "Fresher Product Associate",
      location: "Karnataka",
      avatar: "👩‍🎓",
      rating: 5,
      story:
        "As a fresher with no big company names on my resume, I felt invisible. CGP reframed my academic leadership and internships so professionally that hiring managers took me seriously right away.",
      result: "Built High Credibility as a Fresher",
    },
  ];

  return (
    <section className="py-20 bg-cgp-card/50 text-white relative overflow-hidden border-y border-cgp-purple/20">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cgp-purple/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cgp-gold/10 border border-cgp-gold/30 text-cgp-gold text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Loved by Students &{" "}
            <span className="gemini-text-gradient">
              Job Seekers
            </span>
          </h2>

          <p className="text-base sm:text-lg text-cgp-textMuted leading-relaxed">
            Read real feedback from ambitious candidates who transformed their career trajectory with CGP.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-cgp-purple/20 space-y-5 flex flex-col justify-between hover:border-cgp-cyan/50 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-cgp-gold fill-cgp-gold" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-cgp-cyan/30 group-hover:text-cgp-cyan transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{review.story}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cgp-surface border border-cgp-cyan/30 flex items-center justify-center text-xl">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{review.name}</h4>
                    <p className="text-xs text-cgp-cyan font-bold">{review.role}</p>
                    <p className="text-[10px] text-cgp-textMuted">{review.location}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 w-full justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{review.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
