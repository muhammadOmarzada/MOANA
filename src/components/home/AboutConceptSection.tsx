import React from 'react';

export default function AboutConceptSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3">
            {/* Leaf Doodle */}
            <svg className="w-8 h-8 text-[#2EACAD]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 26C6 26 8 16 16 10C24 4 28 6 28 6C28 6 26 14 20 20C14 26 6 26 6 26Z" />
              <path d="M11 21C14 18 18 15 23 11" strokeDasharray="1 1" />
            </svg>
            <h2 className="mansalva-regular text-3xl sm:text-4xl lg:text-5xl text-[#2EACAD] tracking-wide">
              Discover Yogyakarta in authentic way~
            </h2>
          </div>
          <p className="mt-2 text-base sm:text-lg text-[#2EACAD] font-semibold tracking-wide">
            This is our tour concept
          </p>
        </div>

        {/* Two-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[15px] sm:text-[16px] leading-relaxed text-[#05272E]">
            <p>
              MOANA is a{' '}
              <strong className="text-[#2EACAD] font-bold">
                mindful cycling journey in Yogyakarta
              </strong>
              , created for travelers who want to slow down, move gently, and experience the city beyond the usual tourist path. Through meaningful places, local culture, heritage, nature, and human connection,{' '}
              <strong className="text-[#2EACAD] font-bold">
                MOANA invites you to see Yogyakarta from a more personal and grounded perspective.
              </strong>
            </p>

            <p>
              Founded by <span className="font-semibold">Anita Briana</span>, MOANA was built on the belief that travel should not only bring us to beautiful places, but also help us care for them.{' '}
              <strong className="text-[#2EACAD] font-bold">
                That is why every journey is rooted in sustainable tourism — connecting travelers with local communities, supporting responsible practices, and creating positive impact for the places we visit.
              </strong>
            </p>

            <p className="text-gray-800">
              Ride with Purpose and discover the quieter, more meaningful side of Yogyakarta.
            </p>

            <p className="mansalva-regular text-2xl sm:text-3xl text-[#2EACAD] pt-2">
              Let&apos;s have a meaningful ride. ✨
            </p>
          </div>

          {/* Right Supporting Blob & Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 h-72 sm:h-80 bg-[#C2F7F6]/80 rounded-[45%_55%_63%_37%/48%_44%_56%_52%] flex flex-col items-center justify-center p-6 text-center shadow-inner">
              
              {/* Hand-drawn Cyclist Illustration */}
              <svg
                className="w-36 h-36 text-[#05272E]"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Waving Cyclist Line Art */}
                <circle cx="50" cy="22" r="7" />
                <path d="M50 29 L50 50" />
                <path d="M50 36 L66 18 M66 18 L70 20" />
                <path d="M50 38 L38 46" />
                <path d="M50 50 L38 64 L38 74" />
                <path d="M50 50 L58 66 L52 74" />
                <circle cx="32" cy="74" r="14" strokeWidth="2" />
                <circle cx="68" cy="74" r="14" strokeWidth="2" />
                <path d="M32 74 L48 74 L60 56 L42 56 Z" strokeWidth="1.5" />
                <path d="M48 74 L54 48 L64 48" strokeWidth="1.5" />
                <path d="M68 74 L60 56" strokeWidth="1.5" />
              </svg>

              <div className="mt-2 text-xs font-semibold text-[#05272E] max-w-[200px] leading-snug">
                <p className="font-bold text-[#2EACAD]">Slow travel, meaningful journey.</p>
                <p className="text-gray-600">Yogyakarta - Indonesia</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
