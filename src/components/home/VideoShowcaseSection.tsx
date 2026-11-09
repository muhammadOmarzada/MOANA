'use client';

import React, { useState } from 'react';

export default function VideoShowcaseSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#FFF6BA]/70">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-8 h-8 text-[#574B16]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 26C6 26 8 16 16 10C24 4 28 6 28 6C28 6 26 14 20 20C14 26 6 26 6 26Z" />
            </svg>
            <h2 className="mansalva-regular text-3xl sm:text-4xl lg:text-5xl text-[#574B16] tracking-wide">
              Watch our story come to life
            </h2>
          </div>
          <p className="mt-1 text-sm sm:text-base font-semibold text-[#574B16]/90">
            see how MOANA turns travel into meaningful impact!
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black max-w-4xl mx-auto">
          {isPlaying ? (
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5KzFw7H-jDk?autoplay=1"
              title="MOANA Sustainable Cycling Tour Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
              {/* Thumbnail Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1600&auto=format&fit=crop')`,
                }}
              >
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors" />
              </div>

              {/* Text Overlay & Big Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white z-10">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#2FE4E7] mb-2">
                  Meaningful Journey
                </span>
                
                {/* Big Play Button Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#2EACAD] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform my-3">
                  <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <p className="text-xs sm:text-sm font-medium text-white/90">
                  Our cycling concept
                </p>

                <div className="mt-4 pt-3 border-t border-white/20 max-w-md">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight font-sans">
                    OUR CYCLING CONCEPT
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/80 uppercase tracking-widest mt-1">
                    Live. Ride. Explore. The Ultimate Cycling Journey.
                  </p>
                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
