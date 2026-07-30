"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemVsSolution from "@/components/ProblemVsSolution";
import ServicesGrid from "@/components/ServicesGrid";
import PackagesSection from "@/components/PackagesSection";
import Testimonials from "@/components/Testimonials";
import AiProfileAuditTool from "@/components/AiProfileAuditTool";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";

export default function Home() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setIsAuditModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-cgp-bg text-white selection:bg-cgp-cyan selection:text-cgp-bg">
      {/* 1. Top Header Navigation */}
      <Navbar onOpenAuditModal={handleOpenAuditModal} />

      {/* 2. Hero Section */}
      <Hero onOpenAuditModal={handleOpenAuditModal} />

      {/* 3. We Show: Problem vs Solution Transformation */}
      <ProblemVsSolution />

      {/* 4. Services Provided (Career Coaching, Resume Writing, Interview Prep, Brand Consulting) */}
      <ServicesGrid onOpenAuditModal={handleOpenAuditModal} />

      {/* 5. Packages & Pricing */}
      <PackagesSection onOpenAuditModal={handleOpenAuditModal} />

      {/* 6. Success Stories (Testimonials & Outcomes) */}
      <Testimonials />

      {/* 7. Some Free Resources (Interactive AI Score Readiness Tool) */}
      <AiProfileAuditTool onOpenAuditModal={handleOpenAuditModal} />

      {/* 8. FAQs */}
      <FaqSection />

      {/* 9. High-Converting Footer */}
      <Footer onOpenAuditModal={handleOpenAuditModal} />

      {/* Audit Modal Dialog */}
      <AuditModal isOpen={isAuditModalOpen} onClose={handleCloseAuditModal} />
    </main>
  );
}
