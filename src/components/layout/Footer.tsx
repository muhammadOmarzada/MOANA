import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CONTACT_CONFIG } from '@/constants/contact';

export default function Footer() {
  return (
    <footer className="relative bg-[#05272E] text-white pt-14 pb-8 px-4 md:px-8 overflow-hidden">
      
      {/* Top Center Notch/Triangle on Dark Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-white [clip-path:polygon(0_0,100%_0,50%_100%)]" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Operating & WhatsApp Strip */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-white/80 border-b border-white/10 pb-6 gap-2">
          <div>
            <span className="font-bold text-white">Available Cycling Tour: </span>
            <span>06.30 and 15.00 (everyday)</span>
          </div>
          <div>
            <span className="text-white/70">Available on WhatsApp: </span>
            <a
              href={`https://wa.me/${CONTACT_CONFIG.adminLuna.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2FE4E7] font-bold hover:underline"
            >
              {CONTACT_CONFIG.adminLuna.displayPhone}
            </a>
          </div>
        </div>

        {/* 3-Column Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Sustainable Tourism Mission */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-base sm:text-lg font-bold text-white font-sans">
              Sustainable Tourism
            </h4>
            <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed max-w-md">
              Sustainable tourism is tourism that minimizes the costs and maximizes the benefits of tourism for natural environments and local communities, and can be carried out indefinitely without harming the resources on which it depends.
            </p>
          </div>

          {/* Middle Column: Cycling Ridge Graphic & Social Icons */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center space-y-5">
            {/* Mountain Ridge & Cyclists line-art outline */}
            <div className="w-full flex justify-center opacity-30">
              <svg className="w-48 h-10 text-white" viewBox="0 0 200 40" fill="none" stroke="currentColor">
                <path d="M0 35 Q50 25 100 32 T200 28" strokeWidth="1" />
                {/* Cyclist 1 */}
                <circle cx="50" cy="22" r="4" strokeWidth="0.8" />
                <circle cx="62" cy="22" r="4" strokeWidth="0.8" />
                <path d="M56 16 L56 22" strokeWidth="0.8" />
                {/* Cyclist 2 */}
                <circle cx="140" cy="24" r="4" strokeWidth="0.8" />
                <circle cx="152" cy="24" r="4" strokeWidth="0.8" />
              </svg>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2EACAD] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xs font-bold">f</span>
              </a>
              <a
                href={CONTACT_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2EACAD] flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <span className="text-xs font-bold">▶</span>
              </a>
              <a
                href={CONTACT_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2EACAD] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xs font-bold">📷</span>
              </a>
              <a
                href={CONTACT_CONFIG.socials.tripAdvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2EACAD] flex items-center justify-center transition-colors"
                aria-label="TripAdvisor"
              >
                <span className="text-xs font-bold">🦉</span>
              </a>
            </div>

            {/* Language Links */}
            <div className="text-xs text-white/60 space-x-2">
              <Link href="/tourina" className="hover:text-white transition-colors">
                Bahasa Indonesia
              </Link>
              <span>|</span>
              <Link href="/tour" className="hover:text-white transition-colors">
                English
              </Link>
            </div>
          </div>

          {/* Right Column: Language & Contact Info */}
          <div className="md:col-span-3 space-y-6 text-xs sm:text-[13px]">
            <div>
              <h5 className="font-bold text-white text-sm mb-2">Language</h5>
              <div className="space-y-1 text-white/80">
                <Link href="/tourina" className="flex items-center gap-1.5 hover:text-white">
                  <span>Bahasa Indonesia</span>
                  <span>🇮🇩</span>
                </Link>
                <Link href="/tour" className="flex items-center gap-1.5 hover:text-white">
                  <span>English</span>
                  <span>🇺🇸</span>
                </Link>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-white text-sm mb-2">Contact Us</h5>
              <div className="space-y-1 text-white/80">
                <p>
                  <span>Email: </span>
                  <a href={`mailto:${CONTACT_CONFIG.email}`} className="text-[#2FE4E7] hover:underline">
                    {CONTACT_CONFIG.email}
                  </a>
                </p>
                <p>Yogyakarta, Indonesia</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-white/60 gap-3">
          <p>© 2023 MOANA - Sustainable Bicycle Tour</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
