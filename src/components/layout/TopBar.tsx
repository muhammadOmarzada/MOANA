import React from 'react';
import Link from 'next/link';
import { CONTACT_CONFIG } from '@/constants/contact';

export default function TopBar() {
  return (
    <div className="bg-[#FAF7F2] border-b border-[#ECE6DC] text-xs text-[#05272E] py-2 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left Info: WhatsApp & Schedule */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-center sm:text-left">
          <a
            href={`https://wa.me/${CONTACT_CONFIG.adminLuna.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-moana-teal transition-colors font-medium flex items-center gap-1.5"
          >
            <span>WhatsApp:</span>
            <span className="font-bold">{CONTACT_CONFIG.adminLuna.displayPhone}</span>
          </a>
          <span className="hidden sm:inline text-gray-400">|</span>
          <span className="flex items-center gap-1.5 text-gray-700">
            <span>🚲</span>
            <span>Tour: 07.00 AM - 10.00 AM and 2.30 PM - 5.30 PM (everyday)</span>
          </span>
        </div>

        {/* Right Info: Social Media Links */}
        <div className="flex items-center gap-4">
          <a
            href={CONTACT_CONFIG.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-moana-teal transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
            </svg>
          </a>
          <a
            href={CONTACT_CONFIG.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-moana-teal transition-colors"
            aria-label="YouTube"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a
            href={CONTACT_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-moana-teal transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href={CONTACT_CONFIG.socials.tripAdvisor}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-moana-teal transition-colors"
            aria-label="TripAdvisor"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 3.6 1.9 6.7 4.8 8.4l-.8 2.6c-.1.3.1.6.4.6.1 0 .2 0 .3-.1l3.5-1.9c.6.2 1.2.3 1.8.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm-5.5 13c-1.4 0-2.5-1.1-2.5-2.5S5.1 10 6.5 10s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zm11 0c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
