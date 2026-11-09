'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Village Cycling Tour',
      tagline: 'for a meaningful journey!',
      badgeText: 'menoreh village cycling',
      exploreText: 'Explore Jogja in Authentic Way',
      bookUrl: 'https://wa.me/6282333918990?text=Halo%20Moana,%20saya%20ingin%20booking%20Village%20Cycling%20Tour',
      seeOtherUrl: '/tourina',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1600&auto=format&fit=crop', // Lush countryside cycling
    },
    {
      title: 'Jogja Hidden Gems',
      tagline: 'beyond standard tourist tracks!',
      badgeText: 'jogja hidden gems cycling',
      exploreText: 'Discover Secret Heritage Corners',
      bookUrl: 'https://wa.me/6282333918990?text=Halo%20Moana,%20saya%20ingin%20booking%20Jogja%20Hidden%20Gems',
      seeOtherUrl: '/tour',
      image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=1600&auto=format&fit=crop', // Historic heritage
    }
  ];

  const current = slides[activeSlide];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative px-3 sm:px-6 md:px-8 pt-4 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col lg:flex-row overflow-hidden rounded-3xl shadow-xl min-h-[460px] lg:min-h-[520px]">
          
          {/* Left Orange Decorative Border Strip */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-3.5 bg-[#E05A36] z-20">
            <div className="h-full w-full opacity-30 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px]" />
          </div>

          {/* Left Teal Column */}
          <div className="w-full lg:w-[38%] bg-[#2EACAD] text-white p-8 sm:p-10 lg:p-12 sm:pl-12 flex flex-col justify-between relative z-10">
            {/* Main Headline & Subtitle */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] font-sans">
                {current.title}
              </h1>
              <p className="mansalva-regular text-2xl sm:text-3xl text-white/95">
                {current.tagline}
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={current.bookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#05272E] hover:bg-[#083b46] text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-6 py-3 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  Book Now
                </a>
                <Link
                  href={current.seeOtherUrl}
                  className="bg-[#FFF6BA] hover:bg-[#ffef94] text-[#05272E] text-xs sm:text-sm font-bold px-6 py-3 rounded-lg shadow-md transition-all flex items-center gap-1.5 transform hover:-translate-y-0.5"
                >
                  <span>See other tour</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Bottom Left Hand-drawn Cyclist Silhouette / Doodle */}
            <div className="mt-8 pt-4 flex items-end">
              <svg
                className="w-20 h-20 text-white/80 opacity-90"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {/* Stylized woman with bicycle line-art */}
                <circle cx="28" cy="70" r="18" strokeDasharray="3 2" />
                <circle cx="72" cy="70" r="18" strokeDasharray="3 2" />
                <path d="M28 70 L48 70 L62 52 L42 52 Z" />
                <path d="M48 70 L55 42 L65 42" />
                <path d="M72 70 L62 52" />
                <circle cx="58" cy="28" r="6" />
                <path d="M58 34 C58 40 52 46 48 54" />
                <path d="M58 38 L68 45" />
              </svg>
            </div>
          </div>

          {/* Right Hero Image & Visual Storytelling */}
          <div className="w-full lg:w-[62%] relative bg-gray-100 min-h-[340px] lg:min-h-[520px]">
            {/* Background Image with soft gradient */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{ backgroundImage: `url('${current.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
            </div>

            {/* Handwritten Top-Right Catchphrase */}
            <div className="absolute top-8 right-8 z-10 text-right">
              <span className="mansalva-regular text-2xl sm:text-3xl lg:text-4xl text-[#2EACAD] bg-white/80 backdrop-blur-xs px-4 py-1.5 rounded-2xl shadow-sm inline-block transform rotate-1">
                {current.exploreText}
              </span>
            </div>

            {/* Carousel Arrow Controls */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="w-10 h-10 rounded-full bg-white text-[#E05A36] hover:bg-[#E05A36] hover:text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-105 cursor-pointer font-bold"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="w-10 h-10 rounded-full bg-white text-[#E05A36] hover:bg-[#E05A36] hover:text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-105 cursor-pointer font-bold"
              >
                ›
              </button>
            </div>

            {/* Slanted Green Tour Badge */}
            <div className="absolute bottom-6 left-6 z-10">
              <span className="inline-block bg-[#2EACAD] text-white px-5 py-2 rounded-xl text-sm sm:text-base font-bold shadow-md transform -rotate-2 uppercase tracking-wide">
                {current.badgeText}
              </span>
            </div>

            {/* TripAdvisor Travelers Choice Badges */}
            <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 bg-black/40 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-white/20 text-white">
              <div className="text-center text-[10px] leading-tight">
                <span className="font-bold block text-[#2FE4E7]">TripAdvisor</span>
                <span className="text-white/80">Travelers&apos; Choice</span>
                <span className="block font-black text-amber-300">2023 - 2025</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
