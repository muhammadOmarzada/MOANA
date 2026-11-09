import React from 'react';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import AboutConceptSection from '@/components/home/AboutConceptSection';
import PopularToursSection from '@/components/home/PopularToursSection';
import ReviewsAndExpectationsSection from '@/components/home/ReviewsAndExpectationsSection';
import VideoShowcaseSection from '@/components/home/VideoShowcaseSection';
import PartnersSection from '@/components/home/PartnersSection';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFEFF] text-[#05272E]">
      {/* 1. Header Area */}
      <TopBar />
      <Navbar />

      {/* 2. Main Landing Page Sections */}
      <main className="flex-1">
        {/* Hero Banner with Split Layout & Slider */}
        <HeroSection />

        {/* Brand Concept & Founder Story */}
        <AboutConceptSection />

        {/* Popular Tours 3-Card Grid */}
        <PopularToursSection />

        {/* TripAdvisor Reviews & 4 Pillars of Expectations */}
        <ReviewsAndExpectationsSection />

        {/* Video Story Showcase */}
        <VideoShowcaseSection />

        {/* Partner Logos */}
        <PartnersSection />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Sticky Floating Contact Widget */}
      <FloatingContact />
    </div>
  );
}
