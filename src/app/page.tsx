"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import ProblemVsSolution from "@/components/ProblemVsSolution";
import AiProfileAuditTool from "@/components/AiProfileAuditTool";
import ServicesGrid from "@/components/ServicesGrid";
import BeforeAfterShowcase from "@/components/BeforeAfterShowcase";
import RecruiterScanMatrix from "@/components/RecruiterScanMatrix";
import HeadlineGeneratorTeaser from "@/components/HeadlineGeneratorTeaser";
import PackagesSection from "@/components/PackagesSection";
import Testimonials from "@/components/Testimonials";
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
      {/* Top Header Navigation */}
      <Navbar onOpenAuditModal={handleOpenAuditModal} />

      {/* Hero Section */}
      <Hero onOpenAuditModal={handleOpenAuditModal} />

      {/* Stats & Trust Banner */}
      <StatsBanner />

      {/* Problem vs Solution */}
      <ProblemVsSolution />

      {/* Interactive AI Score Calculator Tool */}
      <AiProfileAuditTool onOpenAuditModal={handleOpenAuditModal} />

      {/* Core Services Grid */}
      <ServicesGrid onOpenAuditModal={handleOpenAuditModal} />

      {/* Before vs After Profile Transformation Showcase */}
      <BeforeAfterShowcase />

      {/* 6-Second Recruiter Audit Matrix */}
      <RecruiterScanMatrix />

      {/* AI Headline Generator Interactive Teaser */}
      <HeadlineGeneratorTeaser onOpenAuditModal={handleOpenAuditModal} />

      {/* Service Packages & Pricing */}
      <PackagesSection onOpenAuditModal={handleOpenAuditModal} />

      {/* Real Reviews & Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* High-Converting Footer */}
      <Footer onOpenAuditModal={handleOpenAuditModal} />

      {/* Interactive Free Audit Booking Modal */}
      <AuditModal isOpen={isAuditModalOpen} onClose={handleCloseAuditModal} />
    </main>
  );
}
