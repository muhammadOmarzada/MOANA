import React from 'react';

export default function ReviewsAndExpectationsSection() {
  const reviews = [
    {
      author: 'Martin T',
      date: 'December 27, 2025',
      title: 'wonderful ride',
      content: 'seru banget, jalurnya juga sangat menyenangkan, tidak bosan dan tidak melelahkan, destinasinya juga seru...',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
    },
    {
      author: 'Amanda M',
      date: 'December 27, 2025',
      title: 'Super happy and enjoyable',
      content: 'Super happy. The road captain is very attentive and very patient with my kid. The route is very scenic, and enjoyable...',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop'
    },
    {
      author: 'Fauliana K',
      date: 'December 25, 2025',
      title: 'Seru banget',
      content: 'Sangat seruuu untuk membuat core memory dengan anak-anak. Kegiatan menyenangkan, banyak manfaatnya...',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
    }
  ];

  const expectations = [
    {
      title: 'Authenticity',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=400&auto=format&fit=crop', // pottery or local craft
      description: 'Explore the true essence of Yogyakarta, from bustling markets to serene village paths, all guided by locals who share their deep knowledge and love for the city.'
    },
    {
      title: 'Adventure',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop', // scenery
      description: 'Experience Yogyakarta like never before, as you cycle through its diverse landscapes and uncover its rich cultural heritage.'
    },
    {
      title: 'Local Expertise',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop', // road captain guide
      description: 'Our friendly and knowledgeable local guides will lead you on a journey filled with stories and insights that bring the city’s history and traditions to life.'
    },
    {
      title: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=400&auto=format&fit=crop', // nature
      description: 'By choosing MOANA, you’re supporting sustainable tourism that benefits the environment and the local community.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#EBF7F7]">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* ================= PART 1: TRIPADVISOR REVIEWS ================= */}
        <div>
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-7 h-7 text-[#2EACAD]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 26C6 26 8 16 16 10C24 4 28 6 28 6C28 6 26 14 20 20C14 26 6 26 6 26Z" />
              </svg>
              <h2 className="mansalva-regular text-3xl sm:text-4xl lg:text-5xl text-[#2EACAD] tracking-wide">
                TripAdvisor Travellers&apos; Choice 2023–2025~
              </h2>
            </div>
            <p className="mt-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#2EACAD] uppercase">
              Top #1 Outdoor Activities in Yogyakarta
            </p>
          </div>

          {/* Review Grid: Aggregator + Review Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Summary Box */}
            <div className="lg:col-span-3 bg-white/90 backdrop-blur-xs rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-xs border border-teal-100">
              <span className="text-xl font-black text-[#05272E] tracking-tight">EXCELLENT</span>
              {/* 5 TripAdvisor green circles */}
              <div className="flex items-center gap-1.5 my-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-5 h-5 rounded-full border-2 border-[#00AA6C] flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00AA6C]" />
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500 font-medium">Based on 1,220 reviews</span>
              <div className="mt-4 flex items-center gap-1.5 text-[#00AA6C] font-black text-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12c0 3.6 1.9 6.7 4.8 8.4l-.8 2.6c-.1.3.1.6.4.6.1 0 .2 0 .3-.1l3.5-1.9c.6.2 1.2.3 1.8.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm-5.5 13c-1.4 0-2.5-1.1-2.5-2.5S5.1 10 6.5 10s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm11 0c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
                </svg>
                <span>Tripadvisor</span>
              </div>
            </div>

            {/* Right 3 Testimonial Cards */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <img src={r.avatar} alt={r.author} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <h4 className="text-xs font-bold text-[#05272E]">{r.author}</h4>
                        <span className="text-[10px] text-gray-400 block">{r.date}</span>
                      </div>
                    </div>
                    {/* Stars */}
                    <div className="flex text-[#00AA6C] text-xs gap-0.5 mb-2">
                      {[...Array(5)].map((_, idx) => (
                        <span key={idx}>●</span>
                      ))}
                    </div>
                    <p className="text-xs font-bold text-[#05272E] mb-1">{r.title}</p>
                    <p className="text-xs text-gray-600 line-clamp-4 leading-relaxed">{r.content}</p>
                  </div>
                  <span className="text-[11px] text-[#2EACAD] font-semibold mt-3 cursor-pointer hover:underline">
                    Read more
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ================= PART 2: WHAT YOU CAN EXPECT ================= */}
        <div>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2">
              <svg className="w-7 h-7 text-[#2EACAD]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 26C6 26 8 16 16 10C24 4 28 6 28 6C28 6 26 14 20 20C14 26 6 26 6 26Z" />
              </svg>
              <h2 className="mansalva-regular text-3xl sm:text-4xl lg:text-5xl text-[#2EACAD] tracking-wide">
                What you can expect from the tour~
              </h2>
            </div>
            <p className="mt-1 text-sm sm:text-base font-semibold text-[#2EACAD]">
              even if you are locals!
            </p>
          </div>

          {/* 4 Circular Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {expectations.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Circular image with orange & teal borders */}
                <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-[#E05A36] to-[#2EACAD] shadow-md mb-4 group overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#05272E] mb-2 font-sans">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-700 leading-relaxed max-w-[240px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 italic mt-10">
            ...plus other interesting experiences and more!
          </p>
        </div>

      </div>
    </section>
  );
}
