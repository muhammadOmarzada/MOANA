import React from 'react';

export default function PartnersSection() {
  const partners = [
    { name: 'NUVANTARA', subtitle: 'Indonesian Journeys', style: 'bg-[#F2DE9C] text-[#695420] font-black rounded-lg px-3 py-1.5 text-xs' },
    { name: 'GO LOCAL', subtitle: 'San Sebastian', style: 'text-[#44A347] font-black text-sm tracking-tight' },
    { name: 'Tripadvisor', subtitle: 'Official Partner', style: 'text-[#00AA6C] font-black text-base flex items-center gap-1.5' },
    { name: 'Greenhost', subtitle: 'Boutique Hotel', style: 'text-[#5E8C31] font-bold text-sm tracking-wide' },
    { name: 'BALI ROAD BIKE', subtitle: 'Cycling Club', style: 'text-[#B8261C] font-black text-xs tracking-wider' },
    { name: 'TRAVELLOVER', subtitle: 'Destination Partner', style: 'text-[#3E9B34] font-bold text-xs tracking-wide' },
    { name: 'OTHER SIDE', subtitle: 'Experience', style: 'text-black font-extrabold text-xs tracking-widest' },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
          Our Partners Who Support Our Work
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-85 hover:opacity-100 transition-opacity">
          {partners.map((p, idx) => (
            <div key={idx} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <span className={p.style}>
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
