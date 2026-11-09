import React from 'react';
import Link from 'next/link';

export default function PopularToursSection() {
  const popularTours = [
    {
      title: 'Nanggulan Village Cycling',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop',
      distance: '17-20 km',
      startOption: '07.30 or 14.30',
      meetingPoint: 'MOANA Nanggulan',
      price: 'IDR 450,000',
      link: '/toureng/village'
    },
    {
      title: 'Jogja Hidden Gems',
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?q=80&w=800&auto=format&fit=crop',
      distance: '11 km',
      startOption: '07.00 or 14.30',
      meetingPoint: 'MOANA Prawirotaman',
      price: 'IDR 450,000',
      link: '/toureng/hidden'
    },
    {
      title: 'Kotagede Royal Route',
      image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=800&auto=format&fit=crop',
      distance: '15 km',
      startOption: '07.00 or 14.30',
      meetingPoint: 'MOANA Prawirotaman',
      price: 'IDR 450,000',
      link: '/toureng/royal'
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#ECEEF0]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Bicycle doodle */}
          <div className="flex justify-center mb-2">
            <svg className="w-10 h-10 text-[#05272E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="5.5" cy="17.5" r="3.5" />
              <circle cx="18.5" cy="17.5" r="3.5" />
              <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L8.5 10H5m7 7.5l3-6.5h3.5m-3.5 0L12 6" />
            </svg>
          </div>
          <h2 className="mansalva-regular text-4xl sm:text-5xl text-[#05272E] tracking-wide">
            Popular tours~
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularTours.map((tour, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Thumbnail Image */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Content & Metadata Table */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-center text-[#2EACAD] mb-5 font-sans">
                    {tour.title}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-[13px] border-t border-gray-100 pt-4 text-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Distance</span>
                      <span className="font-semibold text-[#05272E]">{tour.distance}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Start tour option</span>
                      <span className="font-semibold text-[#05272E]">{tour.startOption}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Meeting Point</span>
                      <span className="font-semibold text-[#E05A36]">{tour.meetingPoint}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Start from</span>
                      <span className="font-bold text-[#05272E]">{tour.price}</span>
                    </div>
                  </div>
                </div>

                {/* Card Button */}
                <div className="mt-6 pt-2">
                  <a
                    href={`https://wa.me/6282333918990?text=Halo%20Moana,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(tour.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 text-center bg-[#2EACAD] hover:bg-[#259798] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                  >
                    Read More
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Button for Indonesian Travelers */}
        <div className="mt-12 text-center">
          <Link
            href="/tourina"
            className="inline-flex items-center gap-2.5 bg-[#2EACAD] hover:bg-[#259798] text-white text-sm sm:text-base font-bold px-8 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span className="w-5 h-5 rounded-full bg-white text-[#2EACAD] flex items-center justify-center text-xs font-black">
              ➔
            </span>
            <span>Tour Options for Indonesian Travelers</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
