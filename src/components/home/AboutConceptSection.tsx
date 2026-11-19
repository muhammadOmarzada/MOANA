'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AboutConceptSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');

  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;

        const currentScrollY = window.scrollY;
        // Detect scroll direction (with 2px threshold to ignore micro-jitters)
        if (Math.abs(currentScrollY - lastScrollY) > 2) {
          setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
          lastScrollY = currentScrollY;
        }

        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;

        // In view when:
        // 1. Top of section has entered into view (rect.top < windowH * 0.85)
        // 2. Section hasn't scrolled past the top (rect.bottom > 140)
        const inView = rect.top < windowH * 0.85 && rect.bottom > 140;
        setIsVisible(inView);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Helper to calculate responsive delays based on scroll direction
  // Down: Heading (0) -> Subtitle (1) -> Card (2) -> P1 (3) -> P2 (4) -> P3 (5) -> Tagline (6)
  // Up: Tagline (0) -> P3 (1) -> P2 (2) -> P1 (3) -> Card (4) -> Subtitle (5) -> Heading (6)
  const getTransitionClass = (orderDown: number, orderUp: number, isTagline = false) => {
    if (!isVisible) {
      return isTagline
        ? 'opacity-0 translate-y-7 scale-[0.98] duration-500 delay-0'
        : 'opacity-0 translate-y-7 duration-500 delay-0';
    }

    const delays = [
      'delay-100',
      'delay-200',
      'delay-350',
      'delay-500',
      'delay-650',
      'delay-800',
      'delay-950',
    ];
    const activeIndex = scrollDirection === 'down' ? orderDown : orderUp;
    const activeDelay = delays[activeIndex];

    return isTagline
      ? `opacity-100 translate-y-0 scale-100 duration-1000 ${activeDelay}`
      : `opacity-100 translate-y-0 duration-900 ${activeDelay}`;
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-4 md:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`mansalva-regular text-3xl sm:text-4xl lg:text-5xl text-[#2EACAD] tracking-wide transform transition-all ease-out ${getTransitionClass(
              0,
              6
            )}`}
          >
            Discover Yogyakarta in authentic way
          </h2>
          <p
            className={`mt-2 text-base sm:text-lg text-[#2EACAD] font-semibold tracking-wide transform transition-all ease-out ${getTransitionClass(
              1,
              5
            )}`}
          >
            This is our tour concept
          </p>
        </div>

        {/* Main Content: Left Photo Paper Card + Right Text Narrative */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-10 lg:gap-14 xl:gap-16 pt-2">
          
          {/* Left Column: Polaroid Card with Cyclist Waving & Tape Overlay */}
          <div
            className={`shrink-0 flex justify-center w-full md:w-auto transform transition-all ease-out ${getTransitionClass(
              2,
              4
            )}`}
          >
            <div className="relative w-[270px] sm:w-[290px] md:w-[305px] lg:w-[325px] bg-white p-3 sm:p-3.5 pb-8 sm:pb-10 shadow-xl border border-gray-100 rounded-none -rotate-1.5 md:-rotate-2 transition-transform duration-300 hover:rotate-0">
              {/* Adhesive Tape Overlay on Top Center */}
              <div
                className="absolute -top-3.5 sm:-top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-[44%] max-w-[150px] aspect-[220/66] -rotate-1"
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
                    <linearGradient id="about-card-tape-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity={0.85} />
                      <stop offset="25%" stopColor="#fcfcf9" stopOpacity={0.78} />
                      <stop offset="70%" stopColor="#f0f0ea" stopOpacity={0.72} />
                      <stop offset="100%" stopColor="#e3e3dc" stopOpacity={0.78} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 14 3 L 206 0 L 213 6 L 204 13 L 214 20 L 204 27 L 215 34 L 204 41 L 214 47 L 204 54 L 212 60 L 205 66 L 14 65 L 7 59 L 16 52 L 6 45 L 16 38 L 7 31 L 17 24 L 7 17 L 16 10 L 7 4 Z"
                    fill="url(#about-card-tape-grad)"
                    stroke="rgba(255, 255, 255, 0.45)"
                    strokeWidth="0.75"
                  />
                </svg>
              </div>

              {/* Inner Photo Area: #05272E Background with Cyclist Illustration */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#05272E] rounded-none flex items-center justify-center shadow-inner">
                <Image
                  src="/images/hero/moana-cyclist-waving-white.png"
                  alt="Moana Cyclist Waving"
                  fill
                  className="object-contain p-4 sm:p-5"
                  sizes="(max-width: 768px) 300px, 350px"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Narrative */}
          <div className="flex-1 max-w-2xl space-y-5 sm:space-y-6 text-[15px] sm:text-[16px] leading-relaxed text-black text-justify">
            <p
              className={`transform transition-all ease-out ${getTransitionClass(
                3,
                3
              )}`}
            >
              MOANA is a mindful cycling journey in Yogyakarta, created for travelers who want to slow down, move gently, and experience the city beyond the usual tourist path. Through meaningful places, local culture, heritage, nature, and human connection, MOANA invites you to see Yogyakarta from a more personal and grounded perspective.
            </p>

            <p
              className={`transform transition-all ease-out ${getTransitionClass(
                4,
                2
              )}`}
            >
              Founded by Anita Briana, MOANA was built on the belief that travel should not only bring us to beautiful places, but also help us care for them. That is why every journey is rooted in sustainable tourism — connecting travelers with local communities, supporting responsible practices, and creating positive impact for the places we visit.
            </p>

            <p
              className={`transform transition-all ease-out ${getTransitionClass(
                5,
                1
              )}`}
            >
              Ride with Purpose and discover the quieter, more meaningful side of Yogyakarta.
            </p>

            {/* Closing Tagline */}
            <p
              className={`mansalva-regular text-2xl sm:text-3xl text-[#2EACAD] pt-3 text-center md:text-left transform transition-all ease-out ${getTransitionClass(
                6,
                0,
                true
              )}`}
            >
              Let&apos;s have a meaningful ride.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
