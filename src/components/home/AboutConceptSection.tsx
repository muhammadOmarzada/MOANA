import React from 'react';

export default function AboutConceptSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mansalva-regular text-3xl sm:text-4xl lg:text-5xl text-[#2EACAD] tracking-wide">
            Discover Yogyakarta in authentic way
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#2EACAD] font-semibold tracking-wide">
            This is our tour concept
          </p>
        </div>

        {/* Text Narrative */}
        <div className="max-w-3xl mx-auto space-y-6 text-[15px] sm:text-[16px] leading-relaxed text-black text-justify">
          <p>
            MOANA is a mindful cycling journey in Yogyakarta, created for travelers who want to slow down, move gently, and experience the city beyond the usual tourist path. Through meaningful places, local culture, heritage, nature, and human connection, MOANA invites you to see Yogyakarta from a more personal and grounded perspective.
          </p>

          <p>
            Founded by <strong className="font-bold text-black">Anita Briana</strong>, MOANA was built on the belief that travel should not only bring us to beautiful places, but also help us care for them. That is why every journey is rooted in sustainable tourism — connecting travelers with local communities, supporting responsible practices, and creating positive impact for the places we visit.
          </p>

          <p>
            Ride with Purpose and discover the quieter, more meaningful side of Yogyakarta.
          </p>

          <p className="mansalva-regular text-2xl sm:text-3xl text-[#2EACAD] pt-2 text-center">
            Let&apos;s have a meaningful ride.
          </p>
        </div>

      </div>
    </section>
  );
}
