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

const tapeRotations = [-1.8, 1.2, -2.2, 1.5, -1.0];

function PhotoTape({ id, rotation }: { id: string; rotation: number }) {
  const gradId = `tape-grad-${id}`;
  return (
    <div
      className="absolute -top-3 sm:-top-3.5 md:-top-4 left-1/2 z-20 pointer-events-none w-[42%] max-w-[210px] min-w-[125px] aspect-[220/66]"
      style={{
        transform: `translateX(-50%) rotate(${rotation}deg)`,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 220 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.18)) drop-shadow(0 1px 1px rgba(0,0,0,0.12))',
        }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={0.85} />
            <stop offset="25%" stopColor="#fcfcf9" stopOpacity={0.78} />
            <stop offset="70%" stopColor="#f0f0ea" stopOpacity={0.72} />
            <stop offset="100%" stopColor="#e3e3dc" stopOpacity={0.78} />
          </linearGradient>
        </defs>
        <path
          d="M 14 3 L 206 0 L 213 6 L 204 13 L 214 20 L 204 27 L 215 34 L 204 41 L 214 47 L 204 54 L 212 60 L 205 66 L 14 65 L 7 59 L 16 52 L 6 45 L 16 38 L 7 31 L 17 24 L 7 17 L 16 10 L 7 4 Z"
          fill={`url(#${gradId})`}
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="0.75"
        />
      </svg>
    </div>
  );
}

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 bg-[#FBFEFF]">
      <div className="relative max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1420px] mx-auto">
        {/* Main Hero Banner: 100% Solid Opacity Teal Box on left, uniform running marquee on right */}
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#FBFEFF] flex flex-col-reverse md:flex-row h-auto md:h-[540px] lg:h-[590px] xl:h-[630px] 2xl:h-[660px]">
          
          {/* Left Content Area: Solid 100% Opacity Teal Box */}
          <div className="relative z-20 w-full md:w-[46%] lg:w-[42%] xl:w-[40%] px-6 sm:px-9 lg:px-12 xl:px-14 pt-8 sm:pt-12 md:pt-14 lg:pt-16 pb-26 sm:pb-30 md:pb-34 lg:pb-38 flex flex-col justify-start bg-[#2EACAD] shrink-0 text-white">
            <div className="space-y-4 sm:space-y-5 max-w-lg xl:max-w-xl">
              {/* Heading: Lato font in all-caps uppercase */}
              <h1 className="font-sans text-2xl sm:text-3xl md:text-3xl lg:text-[40px] xl:text-[45px] 2xl:text-[48px] font-black uppercase text-white tracking-tight leading-[1.12]">
                A Different Way to Discover <span className="text-[#FFF6BA]">Yogyakarta</span>
              </h1>

              {/* Subheading: Mansalva font with natural capitalization */}
              <p className="mansalva-regular text-xs sm:text-sm md:text-[14px] lg:text-[16px] xl:text-[17px] text-white/90 leading-relaxed tracking-wide">
                More than just a cycling journey. Explore the heart of Yogyakarta through slow travel, meaningful connections, and sustainable experiences.
              </p>
            </div>
          </div>

          {/* Running Images Marquee Track (Right / Top) */}
          <div className="relative md:flex-1 h-[340px] sm:h-[400px] md:h-full overflow-hidden cursor-grab active:cursor-grabbing bg-[#197680] flex items-center">
            <div className="animate-marquee h-full flex items-center py-0">
              {/* Set 1 of 5 Images - Polaroid Photo Paper Style with Adhesive Tape Overlay */}
              <div className="flex shrink-0 gap-3 sm:gap-4 md:gap-5 pr-3 sm:pr-4 md:pr-5 items-center h-full py-3.5 sm:py-4 md:py-5">
                {heroImages.map((img, idx) => (
                  <div
                    key={`hero-img-1-${idx}`}
                    className="relative shrink-0 w-[290px] sm:w-[360px] md:w-[430px] lg:w-[500px] xl:w-[570px] 2xl:w-[620px] h-full flex flex-col bg-white p-2.5 sm:p-3 md:p-3.5 pb-6 sm:pb-8 md:pb-10 rounded-none shadow-md overflow-visible"
                  >
                    {/* Adhesive Tape Overlay on Top Edge */}
                    <PhotoTape id={`set1-${idx}`} rotation={tapeRotations[idx % tapeRotations.length]} />

                    <div className="relative w-full flex-1 min-h-0 overflow-hidden bg-gray-100 rounded-none">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 400px, (max-width: 1200px) 560px, 700px"
                        priority={idx < 2}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Set 2 of 5 Images (Exact Duplicate for Seamless Loop) */}
              <div className="flex shrink-0 gap-3 sm:gap-4 md:gap-5 pr-3 sm:pr-4 md:pr-5 items-center h-full py-3.5 sm:py-4 md:py-5" aria-hidden="true">
                {heroImages.map((img, idx) => (
                  <div
                    key={`hero-img-2-${idx}`}
                    className="relative shrink-0 w-[290px] sm:w-[360px] md:w-[430px] lg:w-[500px] xl:w-[570px] 2xl:w-[620px] h-full flex flex-col bg-white p-2.5 sm:p-3 md:p-3.5 pb-6 sm:pb-8 md:pb-10 rounded-none shadow-md overflow-visible"
                  >
                    {/* Adhesive Tape Overlay on Top Edge */}
                    <PhotoTape id={`set2-${idx}`} rotation={tapeRotations[idx % tapeRotations.length]} />

                    <div className="relative w-full flex-1 min-h-0 overflow-hidden bg-gray-100 rounded-none">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 400px, (max-width: 1200px) 560px, 700px"
                      />
                    </div>
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
            className="w-[250px] sm:w-[285px] md:w-[315px] lg:w-[340px] xl:w-[355px] bg-[#ff6900] hover:bg-[#e65e00] text-white font-sans text-xs sm:text-sm md:text-[15px] font-bold uppercase tracking-wider py-3.5 sm:py-4 xl:py-4.5 rounded-full transition-colors duration-200 cursor-pointer flex items-center justify-center"
          >
            SEE OTHER TOURS
          </button>
        </div>
      </div>
    </section>
  );
}
