"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { useLandingPageDataOptional } from "@/components/LandingPageDataProvider";

interface ServiceArea {
  city: string;
  region: string;
  description?: string;
}

interface NavbarProps {
  businessName?: string;
  logoImage?: string;
  themeData?: {
    primaryColor: string;
    secondaryColor: string;
  };
  phoneNumber?: string;
  serviceAreas?: ServiceArea[];
}

export default function Navbar({
  businessName: businessNameProp,
  logoImage: logoImageProp,
  themeData: themeDataProp,
  phoneNumber: phoneNumberProp,
}: NavbarProps) {
  const landingPageData = useLandingPageDataOptional();
  const [isOpen, setIsOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setActiveServiceIndex(0);
    
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const themeData = themeDataProp ?? landingPageData?.themeData;
  const businessName = businessNameProp ?? landingPageData?.businessName;
  const phoneNumber = phoneNumberProp ?? landingPageData?.businessData?.phone;
  const logoImage = logoImageProp || "/logo.png";

  const primaryColor = themeData?.primaryColor || 'var(--color-primary)';
  const secondaryColor = themeData?.secondaryColor || 'var(--color-secondary)';

  // Helper function for CSS RGB values
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
      null;
  };

  const primaryRgb = useMemo(() => hexToRgb(themeData?.primaryColor ?? '') ?? '212, 165, 116', [themeData?.primaryColor]);
  const secondaryRgb = useMemo(() => hexToRgb(themeData?.secondaryColor ?? '') ?? '15, 40, 80', [themeData?.secondaryColor]);

  const isNearBlack = (rgb: string) => {
    const [r, g, b] = rgb.split(",").map((v) => Number(v.trim()));
    return r < 30 && g < 30 && b < 30;
  };

  // Prefer secondary; if secondary is effectively black, use primary so the bar isn't pure black
  const scrolledNavColor = isNearBlack(secondaryRgb) ? primaryColor : secondaryColor;

  // Service areas for Maryland/DC region
  const hardcodedAreas: ServiceArea[] = [
    { city: "Bowie", region: "MD" },
    { city: "College Park", region: "MD" },
    { city: "Largo", region: "MD" },
    { city: "Upper Marlboro", region: "MD" },
    { city: "Washington", region: "DC" },
  ];

  // Helpers to format labels and slugs for service areas
  const formatAreaLabel = (area: ServiceArea) => `${area.city}, ${area.region}`;
  const areaToSlug = (area: ServiceArea) => {
    const city = area.city.toLowerCase().replace(/,/g, "").replace(/\s+/g, "-");
    return `${city}-${area.region.toLowerCase()}`;
  };

  const uniqueAreas: ServiceArea[] = hardcodedAreas.filter((area, index, self) => {
    const key = `${area.city}-${area.region}`.toLowerCase();
    return index === self.findIndex((other) => `${other.city}-${other.region}`.toLowerCase() === key);
  });

  const servingAreaGroups = [
    {
      label: "Basement Refinishing",
      href: "/services/basement-refinishing",
      areas: uniqueAreas,
    },
    {
      label: "Dry Wall",
      href: "/services/dry-wall",
      areas: uniqueAreas,
    },
    {
      label: "Professional Painting",
      href: "/services/professional-painting",
      areas: uniqueAreas,
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .nav-link-style {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .dropdown-glass {
          background: ${isNearBlack(secondaryRgb) ? primaryColor : secondaryColor};
          backdrop-filter: blur(20px);
          border: 1px solid rgba(${primaryRgb}, 0.25);
        }
      `}} />

      {/* Desktop Menu */}
      <nav
        className="fixed inset-x-0 top-0 z-[99] transition-all duration-500 h-24 hidden lg:block"
        style={{
          backgroundColor: scrolled ? scrolledNavColor : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? `1px solid rgba(${primaryRgb}, 0.35)`
            : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex h-full max-w-[92vw] md:max-w-[88vw] lg:max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center shrink-0 transition-transform hover:scale-105 active:scale-95"
          >
            <Image
              src={logoImage}
              alt={businessName || "Logo"}
              width={200}
              height={200}
              className="h-20 w-20 object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="nav-link-style text-white/80 hover:text-white transition-colors py-4"
              style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)' }}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="nav-link-style text-white/80 hover:text-white transition-colors py-4"
              style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)' }}
            >
              About
            </Link>
            <Link
              href="/services"
              className="nav-link-style text-white/80 hover:text-white transition-colors py-4"
              style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)' }}
            >
              Services
            </Link>
            
            {/* Serving Areas Dropdown */}
            <div className="relative group">
              <button 
                className="nav-link-style text-white/80 hover:text-white transition-colors flex items-center gap-1 py-4"
                style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)' }}
              >
                Serving Areas
                <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {/* Hover bridge */}
                <div className="absolute -top-4 left-0 right-0 h-4 z-40"></div>
                
                <div 
                  className="dropdown-glass rounded-xl overflow-hidden shadow-2xl flex min-w-0 w-[min(500px,calc(100vw-2rem))]"
                  style={{ 
                    border: `1px solid ${primaryColor}40`,
                    boxShadow: `0 0 40px ${primaryColor}30`
                  }}
                >
                  {/* Left Column - Services */}
                  <div className="py-3 w-1/2 border-r border-white/10">
                    <div className="px-4 pb-2 mb-2 border-b border-white/10">
                      <span className="text-[10px] uppercase tracking-widest text-white/50">Services</span>
                    </div>
                    {servingAreaGroups.map((item, index) => (
                      <div 
                        key={item.href}
                        className="relative"
                        onMouseEnter={() => setActiveServiceIndex(index)}
                      >
                        <Link
                          href={item.href}
                          className={`flex w-full items-center justify-between px-4 py-2.5 text-xs uppercase tracking-wider transition-all ${
                            isMounted && activeServiceIndex === index
                              ? "bg-white/10 text-white"
                              : "text-white/70 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span>{item.label}</span>
                          <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="2" d="m9 18 6-6-6-6" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Right Column - Areas */}
                  <div className="py-3 w-1/2 max-h-[350px] overflow-y-auto">
                    <div className="px-4 pb-2 mb-2 border-b border-white/10">
                      <span className="text-[10px] uppercase tracking-widest text-white/50">Service Areas</span>
                    </div>
                    {isMounted && activeServiceIndex !== null && servingAreaGroups[activeServiceIndex]?.areas.map((area: ServiceArea, index: number) => {
                      const group = servingAreaGroups[activeServiceIndex!];
                      const areaSlug = areaToSlug(area);
                      return (
                        <Link
                          key={`${area.city}-${area.region}-${index}`}
                          href={`${group.href}/service-areas/${areaSlug}`}
                          className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {formatAreaLabel(area)}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/reviews"
              className="nav-link-style text-white/80 hover:text-white transition-colors py-4"
              style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)' }}
            >
              Reviews
            </Link>
            <Link
              href="/contact-us"
              className="nav-link-style text-white/80 hover:text-white transition-colors"
              style={{ textShadow: '0 0 8px rgba(0,0,0,0.6)' }}
            >
              Contact
            </Link>
            <Link
              href={phoneNumber ? `tel:${phoneNumber}` : "tel:2023814545"}
              className="group px-6 py-2.5 rounded-lg text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              style={{ 
                backgroundColor: 'rgba(0,0,0,0.3)',
                border: `2px solid ${primaryColor}`,
                color: 'var(--color-white)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${primaryColor}50`;
                e.currentTarget.style.backgroundColor = primaryColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.268a1.5 1.5 0 0 1 1.415 1.03l1.007 3.02a1.5 1.5 0 0 1-.376 1.54l-1.21 1.21a12.035 12.035 0 0 0 5.657 5.657l1.21-1.21a1.5 1.5 0 0 1 1.54-.376l3.02 1.007A1.5 1.5 0 0 1 20.25 19.5v2.25c0 1.243-1.007 2.25-2.25 2.25h-.75C8.299 24 0 15.701 0 5.25v-.75Z" />
              </svg>
              {phoneNumber ? phoneNumber : 'Call Now'}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile top bar */}
      <div
        className="lg:hidden fixed inset-x-0 top-0 z-[100] h-20 flex items-center justify-between px-4 sm:px-6 transition-all duration-500"
        style={{
          backgroundColor: scrolled || isOpen ? scrolledNavColor : "transparent",
          backdropFilter: scrolled || isOpen ? "blur(12px)" : "none",
        }}
      >
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={logoImage}
            alt={businessName || "Logo"}
            width={160}
            height={160}
            className="h-14 w-14 object-contain"
            priority
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full transition-all duration-300"
          style={{ 
            backgroundColor: isOpen ? primaryColor : 'rgba(0,0,0,0.3)',
            border: `2px solid ${primaryColor}`,
            color: 'var(--color-white)'
          }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[99] overflow-y-auto overscroll-contain"
          style={{ backgroundColor: secondaryColor }}
        >
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ 
              background: `radial-gradient(circle at 50% 50%, rgba(${primaryRgb}, 0.3) 0%, transparent 70%)`
            }}
          />
          
          <div className="relative z-10 min-h-full flex flex-col items-center justify-center gap-6 sm:gap-10 py-24 px-6 text-xl sm:text-2xl font-bold uppercase text-white">
            <Link onClick={() => setIsOpen(false)} href="/" className="hover:text-white/80 transition-all py-2">Home</Link>
            <Link onClick={() => setIsOpen(false)} href="/about-us" className="hover:text-white/80 transition-all py-2">About</Link>
            <Link onClick={() => setIsOpen(false)} href="/services" className="hover:text-white/80 transition-all py-2">Services</Link>
            <Link onClick={() => setIsOpen(false)} href="/serving-areas" className="hover:text-white/80 transition-all py-2">Serving Areas</Link>
            <Link onClick={() => setIsOpen(false)} href="/reviews" className="hover:text-white/80 transition-all py-2">Reviews</Link>
            <Link onClick={() => setIsOpen(false)} href="/contact-us" className="hover:text-white/80 transition-all py-2">Contact</Link>
            <Link
              href={phoneNumber ? `tel:${phoneNumber}` : "tel:2023814545"}
              className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm uppercase tracking-widest font-semibold flex items-center gap-3 transition-all"
              style={{ 
                backgroundColor: primaryColor,
                color: 'var(--color-white)',
                boxShadow: `0 0 30px ${primaryColor}50`
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.268a1.5 1.5 0 0 1 1.415 1.03l1.007 3.02a1.5 1.5 0 0 1-.376 1.54l-1.21 1.21a12.035 12.035 0 0 0 5.657 5.657l1.21-1.21a1.5 1.5 0 0 1 1.54-.376l3.02 1.007A1.5 1.5 0 0 1 20.25 19.5v2.25c0 1.243-1.007 2.25-2.25 2.25h-.75C8.299 24 0 15.701 0 5.25v-.75Z" />
              </svg>
              {phoneNumber ? phoneNumber : 'Call Now'}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
