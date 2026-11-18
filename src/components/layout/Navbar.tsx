'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tourDropdownOpen, setTourDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  // Helper to determine active menu item from pathname
  const getActiveKeyFromPath = (path: string): string => {
    if (!path || path === '/') return 'home';
    if (path.startsWith('/tour') || path.startsWith('/corporate')) return 'tour';
    if (path.startsWith('/about') || path.startsWith('/faq') || path.startsWith('/terms') || path.startsWith('/policy')) return 'about';
    if (path.startsWith('/gallery')) return 'gallery';
    if (path.startsWith('/contact')) return 'contact';
    return 'home';
  };

  const [selectedKey, setSelectedKey] = useState<string>('home');
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Sliding Pill Indicator coordinates & dimensions
  const [pillStyle, setPillStyle] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const navRefs = useRef<Record<string, HTMLElement | null>>({});

  // Sync selectedKey with route pathname
  useEffect(() => {
    const key = getActiveKeyFromPath(pathname);
    setSelectedKey(key);
  }, [pathname]);

  const updatePillTo = (key: string) => {
    const el = navRefs.current[key];
    if (el && el.offsetWidth > 0) {
      setPillStyle({
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
        opacity: 1,
      });
    }
  };

  // Mount effect: calculate initial pill position for the active page and enable animations
  useEffect(() => {
    updatePillTo(selectedKey);
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []); // Run ONLY once on mount

  // Update pill position when activeHover or selectedKey changes
  useEffect(() => {
    const target = activeHover ?? selectedKey;
    updatePillTo(target);
  }, [selectedKey, activeHover]);

  // Window resize listener
  useEffect(() => {
    const handleResize = () => {
      const target = activeHover ?? selectedKey;
      updatePillTo(target);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedKey, activeHover]);

  // Handle font loading layout shifts
  useEffect(() => {
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(() => {
        const target = activeHover ?? selectedKey;
        updatePillTo(target);
      });
    }
  }, [selectedKey, activeHover]);

  const handleMouseEnter = (el: HTMLElement, key: string) => {
    setActiveHover(key);
    setPillStyle({
      left: el.offsetLeft,
      top: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight,
      opacity: 1,
    });
  };

  const handleMouseLeaveNav = () => {
    setActiveHover(null);
    updatePillTo(selectedKey);
  };

  const handleItemClick = (key: string) => {
    setSelectedKey(key);
    updatePillTo(key);
  };

  // Text is white if hovered, or if active item when no item is hovered
  const isItemActive = (key: string) => {
    if (activeHover !== null) {
      return activeHover === key;
    }
    return selectedKey === key;
  };

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
        <nav
          onMouseLeave={handleMouseLeaveNav}
          className="relative hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-bold uppercase tracking-wider py-1"
        >
          {/* Sliding Pill Indicator */}
          <div
            className={`absolute rounded-full bg-[#197680] pointer-events-none ${
              isReady ? 'transition-all duration-300 ease-out' : ''
            }`}
            style={{
              left: `${pillStyle.left}px`,
              top: `${pillStyle.top}px`,
              width: `${pillStyle.width}px`,
              height: `${pillStyle.height}px`,
              opacity: pillStyle.opacity,
            }}
          />

          {/* 1. HOME */}
          <Link
            ref={(el) => {
              navRefs.current['home'] = el;
            }}
            href="/"
            onClick={() => handleItemClick('home')}
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget, 'home')}
            className={`relative z-10 px-4 py-2 rounded-full transition-colors duration-200 block ${
              isItemActive('home') ? 'text-white' : 'text-[#05272E]'
            }`}
          >
            HOME
          </Link>

          {/* 2. OUR TOUR (Dropdown) */}
          <div
            ref={(el) => {
              navRefs.current['tour'] = el;
            }}
            className="relative"
            onMouseEnter={(e) => {
              setTourDropdownOpen(true);
              handleMouseEnter(e.currentTarget, 'tour');
            }}
            onMouseLeave={() => setTourDropdownOpen(false)}
          >
            <button
              onClick={() => handleItemClick('tour')}
              className={`relative z-10 px-3.5 py-2 rounded-full transition-colors duration-200 flex items-center gap-1 cursor-pointer ${
                isItemActive('tour') ? 'text-white' : 'text-[#05272E]'
              }`}
            >
              <span>OUR TOUR</span>
              <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {tourDropdownOpen && (
              <div className="absolute top-full left-0 w-52 bg-white border border-gray-100 shadow-xl rounded-2xl py-2.5 z-50">
                <Link
                  href="/tour"
                  onClick={() => handleItemClick('tour')}
                  className="block px-4 py-2 text-xs hover:bg-[#197680] hover:text-white text-[#05272E] font-bold transition-colors rounded-lg mx-1.5"
                >
                  ENGLISH TOUR
                </Link>
                <Link
                  href="/tourina"
                  onClick={() => handleItemClick('tour')}
                  className="block px-4 py-2 text-xs hover:bg-[#197680] hover:text-white text-[#05272E] font-bold transition-colors rounded-lg mx-1.5"
                >
                  INDONESIAN TOUR
                </Link>
                <Link
                  href="/corporate"
                  onClick={() => handleItemClick('tour')}
                  className="block px-4 py-2 text-xs hover:bg-[#197680] hover:text-white text-[#05272E] font-bold transition-colors rounded-lg mx-1.5"
                >
                  CORPORATE TOUR
                </Link>
              </div>
            )}
          </div>

          {/* 3. ABOUT US (Dropdown) */}
          <div
            ref={(el) => {
              navRefs.current['about'] = el;
            }}
            className="relative"
            onMouseEnter={(e) => {
              setAboutDropdownOpen(true);
              handleMouseEnter(e.currentTarget, 'about');
            }}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              onClick={() => handleItemClick('about')}
              className={`relative z-10 px-3.5 py-2 rounded-full transition-colors duration-200 flex items-center gap-1 cursor-pointer ${
                isItemActive('about') ? 'text-white' : 'text-[#05272E]'
              }`}
            >
              <span>ABOUT US</span>
              <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl py-2.5 z-50">
                <Link
                  href="/about"
                  onClick={() => handleItemClick('about')}
                  className="block px-4 py-2 text-xs hover:bg-[#197680] hover:text-white text-[#05272E] font-bold transition-colors rounded-lg mx-1.5"
                >
                  ABOUT US
                </Link>
                <Link
                  href="/faq"
                  onClick={() => handleItemClick('about')}
                  className="block px-4 py-2 text-xs hover:bg-[#197680] hover:text-white text-[#05272E] font-bold transition-colors rounded-lg mx-1.5"
                >
                  FAQ
                </Link>
                <Link
                  href="/terms"
                  onClick={() => handleItemClick('about')}
                  className="block px-4 py-2 text-xs hover:bg-[#197680] hover:text-white text-[#05272E] font-bold transition-colors rounded-lg mx-1.5"
                >
                  TNC
                </Link>
                <Link
                  href="/policy"
                  onClick={() => handleItemClick('about')}
                  className="block px-4 py-2 text-xs hover:bg-[#197680] hover:text-white text-[#05272E] font-bold transition-colors rounded-lg mx-1.5"
                >
                  SUSTAINABLE TOURISM POLICY
                </Link>
              </div>
            )}
          </div>

          {/* 4. GALLERY */}
          <Link
            ref={(el) => {
              navRefs.current['gallery'] = el;
            }}
            href="/gallery"
            onClick={() => handleItemClick('gallery')}
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget, 'gallery')}
            className={`relative z-10 px-4 py-2 rounded-full transition-colors duration-200 block ${
              isItemActive('gallery') ? 'text-white' : 'text-[#05272E]'
            }`}
          >
            GALLERY
          </Link>

          {/* 5. CONTACT US */}
          <Link
            ref={(el) => {
              navRefs.current['contact'] = el;
            }}
            href="/contact"
            onClick={() => handleItemClick('contact')}
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget, 'contact')}
            className={`relative z-10 px-4 py-2 rounded-full transition-colors duration-200 block ${
              isItemActive('contact') ? 'text-white' : 'text-[#05272E]'
            }`}
          >
            CONTACT US
          </Link>
        </nav>

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
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4 text-xs font-bold text-[#05272E] uppercase tracking-wider">
          <Link href="/" className="block py-1.5 text-moana-teal" onClick={() => setMobileMenuOpen(false)}>
            1. HOME
          </Link>

          <div className="border-t border-gray-100 pt-3">
            <span className="text-[11px] text-gray-400 block mb-1.5">2. OUR TOUR</span>
            <Link href="/tour" className="block py-1.5 pl-3 hover:text-moana-teal" onClick={() => setMobileMenuOpen(false)}>
              2.1 ENGLISH TOUR
            </Link>
            <Link href="/tourina" className="block py-1.5 pl-3 hover:text-moana-teal" onClick={() => setMobileMenuOpen(false)}>
              2.2 INDONESIAN TOUR
            </Link>
            <Link href="/corporate" className="block py-1.5 pl-3 hover:text-moana-teal" onClick={() => setMobileMenuOpen(false)}>
              2.3 CORPORATE TOUR
            </Link>
          </div>

          <div className="border-t border-gray-100 pt-3">
            <span className="text-[11px] text-gray-400 block mb-1.5">3. ABOUT US</span>
            <Link href="/about" className="block py-1.5 pl-3 hover:text-moana-teal" onClick={() => setMobileMenuOpen(false)}>
              3.1 ABOUT US
            </Link>
            <Link href="/faq" className="block py-1.5 pl-3 hover:text-moana-teal" onClick={() => setMobileMenuOpen(false)}>
              3.2 FAQ
            </Link>
            <Link href="/terms" className="block py-1.5 pl-3 hover:text-moana-teal" onClick={() => setMobileMenuOpen(false)}>
              3.3 TNC
            </Link>
            <Link href="/policy" className="block py-1.5 pl-3 hover:text-moana-teal" onClick={() => setMobileMenuOpen(false)}>
              3.4 SUSTAINABLE TOURISM POLICY
            </Link>
          </div>

          <div className="border-t border-gray-100 pt-3 space-y-2">
            <Link href="/gallery" className="block py-1.5 hover:text-moana-teal" onClick={() => setMobileMenuOpen(false)}>
              4. GALLERY
            </Link>
            <Link href="/contact" className="block py-1.5 hover:text-moana-teal" onClick={() => setMobileMenuOpen(false)}>
              5. CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
