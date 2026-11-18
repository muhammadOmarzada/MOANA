'use client';

import React from 'react';
import Image from 'next/image';

const heroImages = [
  {
    src: '/images/hero/moana-cyclists.jpg',
    alt: 'Wisata Bersepeda Moana di Sawah Nanggulan',
  },
  {
    src: '/images/hero/moana-kotagede-heritage.jpg',
    alt: 'Pesepeda Moana Berlatar Gerbang Candi Bersejarah Kotagede',
  },
  {
    src: '/images/hero/moana-hero-3.jpg',
    alt: 'Rombongan Tur Sepeda di Jembatan Pedesaan',
  },
  {
    src: '/images/hero/moana-kraton-naga.jpg',
    alt: 'Wisatawan Bersepeda di Pelataran Bangsal Naga Keraton Yogyakarta',
  },
  {
    src: '/images/hero/moana-hero-5.jpg',
    alt: 'Interaksi Hangat Wisatawan Bersama Pemandu Lokal',
  },
];

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-3 sm:px-6 lg:px-8 py-4 sm:py-6 bg-[#FBFEFF]">
      <div className="relative max-w-7xl mx-auto">
        {/* Main Hero Banner: 100% Solid Opacity Teal Box on left, uniform running marquee on right */}
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#FBFEFF] flex flex-col-reverse md:flex-row h-auto md:h-[460px] lg:h-[490px] xl:h-[510px]">
          
          {/* Left Content Area: Solid 100% Opacity Teal Box */}
          <div className="relative z-20 w-full md:w-[45%] lg:w-[40%] xl:w-[38%] px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10 md:pt-12 pb-24 sm:pb-28 md:pb-32 flex flex-col justify-start bg-[#2EACAD] shrink-0 text-white">
            <div className="space-y-4 sm:space-y-5 max-w-lg">
              {/* Heading: Lato font in all-caps uppercase */}
              <h1 className="font-sans text-2xl sm:text-3xl md:text-3xl lg:text-[36px] xl:text-[40px] font-black uppercase text-white tracking-tight leading-[1.14]">
                A Different Way to Discover <span className="text-[#FFF6BA]">Yogyakarta</span>
              </h1>

              {/* Subheading: Mansalva font with natural capitalization */}
              <p className="mansalva-regular text-xs sm:text-sm md:text-[14px] lg:text-[15px] xl:text-[15px] text-white/90 leading-relaxed tracking-wide">
                More than just a cycling journey. Explore the heart of Yogyakarta through slow travel, meaningful connections, and sustainable experiences.
              </p>
            </div>
          </div>

          {/* Running Images Marquee Track (Right / Top) */}
          <div className="relative md:flex-1 h-[280px] sm:h-[320px] md:h-full overflow-hidden cursor-grab active:cursor-grabbing bg-[#197680] flex items-center">
            <div className="animate-marquee h-full flex items-center py-0">
              {/* Set 1 of 5 Images - Full Card Image with zero white borders */}
              <div className="flex shrink-0 gap-3 sm:gap-4 md:gap-5 pr-3 sm:pr-4 md:pr-5 items-center h-full py-3 sm:py-4 md:py-5">
                {heroImages.map((img, idx) => (
                  <div
                    key={`hero-img-1-${idx}`}
                    className="relative shrink-0 w-[290px] sm:w-[350px] md:w-[420px] lg:w-[480px] xl:w-[540px] h-full rounded-none overflow-hidden bg-[#197680]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 350px, (max-width: 1200px) 480px, 540px"
                      priority={idx < 2}
                    />
                  </div>
                ))}
              </div>

              {/* Set 2 of 5 Images (Exact Duplicate for Seamless Loop) */}
              <div className="flex shrink-0 gap-3 sm:gap-4 md:gap-5 pr-3 sm:pr-4 md:pr-5 items-center h-full py-3 sm:py-4 md:py-5" aria-hidden="true">
                {heroImages.map((img, idx) => (
                  <div
                    key={`hero-img-2-${idx}`}
                    className="relative shrink-0 w-[290px] sm:w-[350px] md:w-[420px] lg:w-[480px] xl:w-[540px] h-full rounded-none overflow-hidden bg-[#197680]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 350px, (max-width: 1200px) 480px, 540px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carved Cutout Notch at Bottom-Left (Separated Button Container - Sibling to avoid subpixel clipping line) */}
        <div className="absolute -bottom-1 -left-1 z-30 bg-[#FBFEFF] rounded-tr-2xl md:rounded-tr-3xl pt-2.5 sm:pt-3 pr-4 sm:pr-5 pb-3.5 sm:pb-4 pl-1 flex items-center w-fit pointer-events-auto">
          {/* Top-Left Inverted Concave Curve (Matching Hero Card Corner Radius: 16px mobile, 24px desktop) */}
          <svg
            className="absolute -top-4 md:-top-6 left-1 w-4 h-4 md:w-6 md:h-6 text-[#FBFEFF] pointer-events-none overflow-visible"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M 0 0 L -6 0 L -6 30 L 30 30 L 24 24 A 24 24 0 0 1 0 0 Z" />
          </svg>

          {/* Bottom-Right Inverted Concave Curve */}
          <svg
            className="absolute -right-4 md:-right-6 bottom-1 w-4 h-4 md:w-6 md:h-6 text-[#FBFEFF] pointer-events-none overflow-visible"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M 0 0 L -6 0 L -6 30 L 30 30 L 24 24 A 24 24 0 0 1 0 0 Z" />
          </svg>

          {/* Pill Button - Flush to Left Edge, Aligned Right with Header "A" */}
          <button
            onClick={() => scrollToSection('tours')}
            className="w-[240px] sm:w-[270px] md:w-[295px] lg:w-[315px] xl:w-[325px] bg-[#ff6900] hover:bg-[#e65e00] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3.5 sm:py-4 rounded-full transition-colors duration-200 cursor-pointer flex items-center justify-center"
          >
            SEE OTHER TOURS
          </button>
        </div>
      </div>
    </section>
  );
}
