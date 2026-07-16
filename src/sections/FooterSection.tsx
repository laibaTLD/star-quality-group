'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

interface SocialItem {
  name: string;
  url: string;
}

interface ThemeData {
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
}

interface LegacyAddress { street?: string; city?: string; state?: string; zipCode?: string }
interface LegacySocialLink { platform: string; url: string }
interface LegacyServiceArea { city: string; region: string; description?: string }
interface LegacyBusinessData {
  email?: string;
  phone?: string;
  address?: LegacyAddress;
  socialLinks?: LegacySocialLink[];
  serviceAreas?: LegacyServiceArea[];
}

interface FooterSectionProps {
  sectionNumber?: string | number;
  footerTitle: string;
  socialsList: SocialItem[];
  originCity: string;
  workingScope: string | ReactNode;
  contactEmail: string;
  agencyName: string;
  currentYear?: number;
  themeData?: ThemeData;
  businessName?: string;
  businessData?: LegacyBusinessData;
}

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/serving-areas', label: 'Serving Areas' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact-us', label: 'Contact' },
];

const SERVICE_LINKS = [
  { href: '/services/professional-painting', label: 'Professional Painting' },
  { href: '/services/basement-refinishing', label: 'Basement Refinishing' },
  { href: '/services/dry-wall', label: 'Drywall' },
];

export default function FooterSection({
  originCity,
  workingScope,
  contactEmail,
  agencyName,
  currentYear,
  themeData,
  businessName,
  businessData,
}: FooterSectionProps) {
  const primary = themeData?.primaryColor ?? 'var(--color-primary)';
  const secondary = themeData?.secondaryColor ?? '#0a2540';

  const computedAgencyName = agencyName ?? businessName ?? 'Star Quality Group';
  const computedYear = currentYear ?? new Date().getFullYear();
  const computedEmail = contactEmail || businessData?.email || '';
  const computedPhone = businessData?.phone || '2023814545';
  const computedOriginCity = originCity || businessData?.address?.city || '';
  const addressLine = [
    businessData?.address?.street,
    businessData?.address?.city,
    businessData?.address?.state,
    businessData?.address?.zipCode,
  ]
    .filter(Boolean)
    .join(', ');
  const computedScope =
    workingScope ||
    (businessData?.serviceAreas?.length
      ? `Serving ${Array.from(new Set(businessData.serviceAreas.map((a) => a.region)))
          .filter((r) => r && r !== 'DC')
          .join(', ')}`
      : '');

  return (
    <footer className="relative overflow-hidden text-white" style={{ backgroundColor: secondary }}>
      <div
        className="pointer-events-none absolute -top-20 right-0 h-40 w-40 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: primary }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[92vw] md:max-w-[88vw] pt-8 md:pt-10 pb-5">
        {/* Top brand row */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.png"
                alt={computedAgencyName}
                width={96}
                height={96}
                className="h-12 w-12 md:h-14 md:w-14 object-contain"
              />
            </Link>
            <div>
              <div className="mb-1.5 flex items-center gap-2.5">
                <span className="h-px w-7" style={{ backgroundColor: primary }} />
                <span
                  className="text-[10px] uppercase tracking-[0.24em] font-medium"
                  style={{ color: primary }}
                >
                  Get In Touch
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase leading-tight tracking-tight text-white">
                {computedAgencyName}
              </h2>
            </div>
          </div>

          {computedPhone && (
            <a
              href={`tel:${computedPhone}`}
              className="inline-flex w-fit items-center gap-2.5 border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all hover:bg-white/10"
              style={{ borderColor: `${primary}99`, color: '#fff' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.268a1.5 1.5 0 0 1 1.415 1.03l1.007 3.02a1.5 1.5 0 0 1-.376 1.54l-1.21 1.21a12.035 12.035 0 0 0 5.657 5.657l1.21-1.21a1.5 1.5 0 0 1 1.54-.376l3.02 1.007A1.5 1.5 0 0 1 20.25 19.5v2.25c0 1.243-1.007 2.25-2.25 2.25h-.75C8.299 24 0 15.701 0 5.25v-.75Z" />
              </svg>
              {computedPhone}
            </a>
          )}
        </div>

        <div className="mt-6 h-px w-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />

        {/* Columns */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Contact */}
          <div>
            <h3
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3"
              style={{ color: primary }}
            >
              Contact
            </h3>
            <div className="space-y-2 text-sm text-white/70">
              {addressLine ? (
                <p className="leading-relaxed">{addressLine}</p>
              ) : computedOriginCity ? (
                <p className="leading-relaxed">
                  Originally from {computedOriginCity}
                  {computedScope ? <><br />{computedScope}</> : null}
                </p>
              ) : null}
              {computedEmail && (
                <a
                  href={`mailto:${computedEmail}`}
                  className="block transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {computedEmail}
                </a>
              )}
              {computedPhone && (
                <a
                  href={`tel:${computedPhone}`}
                  className="block transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {computedPhone}
                </a>
              )}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3"
              style={{ color: primary }}
            >
              Explore
            </h3>
            <ul className="space-y-1.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-3"
              style={{ color: primary }}
            >
              Services
            </h3>
            <ul className="space-y-1.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-6 flex flex-col gap-2 border-t pt-4 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <p className="text-xs text-white/50">
            {computedYear} © {computedAgencyName}. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            Built by{' '}
            <a
              href="https://usbrandbooster.com/"
              className="underline-offset-4 hover:underline"
              style={{ color: primary }}
              target="_blank"
              rel="noreferrer"
            >
              US Brand Booster
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
