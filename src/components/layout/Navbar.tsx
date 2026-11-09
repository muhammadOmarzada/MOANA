'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tourDropdownOpen, setTourDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image
            src="/images/logo/moana-logo.png"
            alt="MOANA - Sustainable Cycling Tour Yogyakarta"
            width={220}
            height={48}
            className="h-10 sm:h-12 w-auto object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-semibold text-[#05272E] uppercase tracking-wide">
          <Link
            href="/"
            className="bg-[#05272E] text-white px-4 py-2 rounded-full transition-all"
          >
            Home
          </Link>

          {/* Tour Option Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setTourDropdownOpen(true)}
            onMouseLeave={() => setTourDropdownOpen(false)}
          >
            <button className="px-3 py-2 hover:text-moana-teal transition-colors flex items-center gap-1 cursor-pointer">
              <span>Tour Option</span>
              <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {tourDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-lg rounded-xl py-2 z-50">
                <Link
                  href="/tourina"
                  className="block px-4 py-2 text-xs hover:bg-[#FAF7F2] hover:text-[#E05A36] text-[#E05A36] font-bold"
                >
                  Indonesia
                </Link>
                <Link
                  href="/tour"
                  className="block px-4 py-2 text-xs hover:bg-[#FAF7F2] hover:text-[#E05A36] text-[#E05A36] font-bold"
                >
                  English
                </Link>
              </div>
            )}
          </div>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button className="px-3 py-2 hover:text-moana-teal transition-colors flex items-center gap-1 cursor-pointer">
              <span>About Us</span>
              <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-lg rounded-xl py-2 z-50">
                <Link href="/about" className="block px-4 py-2 text-xs hover:bg-[#FAF7F2] hover:text-[#E05A36] text-gray-700">
                  About Us
                </Link>
                <Link href="/about#location" className="block px-4 py-2 text-xs hover:bg-[#FAF7F2] hover:text-[#E05A36] text-[#E05A36]">
                  Location
                </Link>
                <Link href="/faq" className="block px-4 py-2 text-xs hover:bg-[#FAF7F2] hover:text-[#E05A36] text-[#E05A36]">
                  FAQ
                </Link>
                <Link href="/terms" className="block px-4 py-2 text-xs hover:bg-[#FAF7F2] hover:text-[#E05A36] text-[#E05A36]">
                  T&C
                </Link>
                <Link href="/policy" className="block px-4 py-2 text-xs hover:bg-[#FAF7F2] hover:text-[#E05A36] text-[#E05A36]">
                  Sustainable Tourism Policy
                </Link>
                <Link href="/tips" className="block px-4 py-2 text-xs hover:bg-[#FAF7F2] hover:text-[#E05A36] text-[#E05A36]">
                  Bike Riding Basic Tips
                </Link>
              </div>
            )}
          </div>

          <Link href="/gallery" className="px-3 py-2 hover:text-moana-teal transition-colors">
            Gallery
          </Link>
          <Link href="/blog" className="px-3 py-2 hover:text-moana-teal transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="px-3 py-2 hover:text-moana-teal transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://globaltix.com/moana"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2EACAD] hover:bg-[#259798] text-white px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wide transition-colors shadow-xs"
          >
            Check Availability
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#05272E] hover:bg-gray-100"
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3 text-sm font-semibold text-[#05272E]">
          <Link href="/" className="block py-2 text-moana-teal" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <div className="border-t border-gray-100 pt-2">
            <span className="text-xs uppercase text-gray-400">Tour Option</span>
            <Link href="/tourina" className="block py-1.5 pl-3 text-[#E05A36]" onClick={() => setMobileMenuOpen(false)}>
              Indonesia Tour
            </Link>
            <Link href="/tour" className="block py-1.5 pl-3 text-[#E05A36]" onClick={() => setMobileMenuOpen(false)}>
              English Tour
            </Link>
          </div>
          <div className="border-t border-gray-100 pt-2">
            <span className="text-xs uppercase text-gray-400">About Us</span>
            <Link href="/about" className="block py-1.5 pl-3" onClick={() => setMobileMenuOpen(false)}>
              Our Story
            </Link>
            <Link href="/faq" className="block py-1.5 pl-3 text-[#E05A36]" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="/terms" className="block py-1.5 pl-3 text-[#E05A36]" onClick={() => setMobileMenuOpen(false)}>
              Terms & Conditions
            </Link>
          </div>
          <Link href="/gallery" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
            Gallery
          </Link>
          <Link href="/blog" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </Link>
          <div className="pt-2">
            <a
              href="https://globaltix.com/moana"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-moana-teal text-white py-2.5 rounded-lg font-bold"
            >
              Check Availability
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
