"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface AboutSectionProps {
  title: string;
  description: string;
  features: string[];
  ctaButton: {
    href: string;
    label: string;
  };
  image?: string;
  images?: Array<{
    slotName: string;
    imageUrl: string;
    category?: string;
  }>;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor?: string;
  };
}

export default function AboutSection({
  title,
  description,
  features,
  ctaButton,
  image,
  images = [],
  theme,
}: AboutSectionProps) {
  const textColor = "var(--foreground)";
  const mutedTextColor = "rgba(0,0,0,0.58)";
  const primaryColor = theme?.primaryColor ?? "var(--color-primary)";
  const secondaryColor = theme?.secondaryColor ?? "var(--color-secondary)";

  const aboutImages = images.filter(
    (img) => img.slotName.includes("about") || img.category === "about"
  );
  const mainImage = aboutImages[0]?.imageUrl || image;

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-white py-10 md:py-14"
      style={{ color: textColor }}
    >
      {/* Soft brand wash */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[92vw] md:max-w-[88vw]">
        {/* Header */}
        <div
          className={`mb-6 md:mb-8 max-w-3xl mx-auto text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              className="h-px w-10"
              style={{ backgroundColor: primaryColor }}
            />
            <span
              className="text-[11px] uppercase tracking-[0.28em] font-medium"
              style={{ color: primaryColor }}
            >
              About Us
            </span>
            <span
              className="h-px w-10"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[0.95] tracking-tight"
            style={{ color: secondaryColor }}
          >
            {title}
          </h2>
        </div>

        {/* Content + image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-stretch lg:min-h-[560px]">
          {/* Image — dominant visual */}
          <div
            className={`relative lg:col-span-7 min-h-[320px] sm:min-h-[420px] lg:min-h-full overflow-hidden group transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {mainImage && (
              <Image
                src={mainImage}
                alt="About Star Quality Group"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
            )}
            <div
              className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
              style={{
                background: `linear-gradient(160deg, ${secondaryColor}90 0%, transparent 55%)`,
              }}
            />
            <div
              className="absolute left-0 top-0 h-full w-1"
              style={{ backgroundColor: primaryColor }}
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <p className="text-white/90 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium drop-shadow">
                Craftsmanship · Precision · Trust
              </p>
            </div>
          </div>

          {/* Copy */}
          <div
            className={`lg:col-span-5 flex flex-col justify-center h-full transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="border-l-2 pl-5 md:pl-6"
              style={{ borderColor: primaryColor }}
            >
              <p
                className="text-[15px] md:text-base lg:text-[17px] leading-[1.75] font-light"
                style={{ color: mutedTextColor }}
              >
                {description}
              </p>
            </div>

            {features && features.length > 0 && (
              <ul className="mt-8 md:mt-10 space-y-0 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                {features.slice(0, 4).map((feature, index) => (
                  <li
                    key={index}
                    className="group/item flex items-start gap-4 py-4 border-b transition-colors"
                    style={{ borderColor: "rgba(0,0,0,0.08)" }}
                  >
                    <span
                      className="shrink-0 pt-0.5 text-[11px] font-semibold tracking-[0.2em]"
                      style={{ color: primaryColor }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm md:text-[15px] leading-relaxed text-black/80 group-hover/item:text-black transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {ctaButton && (
              <div className="mt-8 md:mt-10">
                <a
                  href={ctaButton.href}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:gap-4"
                  style={{
                    backgroundColor: primaryColor,
                    color: "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = secondaryColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = primaryColor;
                  }}
                >
                  {ctaButton.label}
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
