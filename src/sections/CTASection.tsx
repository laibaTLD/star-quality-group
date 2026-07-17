"use client";

import Image from "next/image";
import { CTAContent, Image as ImageType } from "@/types/template";

interface CTASectionProps {
  data: CTAContent;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
    backgroundColor?: string;
    textColor?: string;
    mutedTextColor?: string;
    buttonTextColor?: string;
  };
  images?: ImageType[];
}

export default function CTASection({ data, theme, images }: CTASectionProps) {
  const primaryColor = theme?.primaryColor ?? "var(--color-primary)";
  const secondaryColor = theme?.secondaryColor ?? "var(--color-secondary)";

  const ctaImage =
    images?.find((img) => img.slotName === "cta-image-1")?.imageUrl ||
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80";

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-[92vw] md:max-w-[88vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border border-black/8 overflow-hidden">
          <div className="lg:col-span-7 px-4 py-8 sm:px-8 sm:py-10 md:px-10 md:py-14">
            {data.subHeading && (
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8" style={{ backgroundColor: primaryColor }} />
                <span
                  className="text-[11px] uppercase tracking-[0.28em] font-medium"
                  style={{ color: primaryColor }}
                >
                  {data.subHeading}
                </span>
              </div>
            )}

            <h2
              className="max-w-xl text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase leading-[0.95] tracking-tight"
              style={{ color: secondaryColor }}
            >
              {data.heading || "We'd love to hear from you!"}
            </h2>

            {data.ctaButton && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={data.ctaButton.href}
                  className="inline-flex items-center gap-3 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all hover:opacity-90"
                  style={{ backgroundColor: primaryColor, color: "#ffffff" }}
                >
                  {data.ctaButton.label || "Get in touch"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:2023814545"
                  className="inline-flex items-center gap-2 border px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] transition-all hover:bg-black/[0.03]"
                  style={{ borderColor: `${primaryColor}80`, color: secondaryColor }}
                >
                  Call Now
                </a>
              </div>
            )}
          </div>

          <div className="relative lg:col-span-5 min-h-[240px] lg:min-h-[360px]">
            <Image
              src={ctaImage}
              alt="Call to action"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              loading="lazy"
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
