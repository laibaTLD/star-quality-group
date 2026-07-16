"use client";

import Image from "next/image";
import { CompanyDetailsContent, Image as ImageType } from "@/types/template";

const getOptimizedImageUrl = (url: string | undefined) => {
  if (!url) return undefined;
  if (url.startsWith("http") || url.startsWith("blob:")) return url;
  return url.startsWith("/") ? url : `/${url}`;
};

interface CompanyDetailsProps {
  data: CompanyDetailsContent;
  images?: ImageType[];
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor?: string;
  };
}

export default function CompanyDetails({ data, images, theme }: CompanyDetailsProps) {
  const primaryColor = theme?.primaryColor ?? "var(--color-primary)";
  const secondaryColor = theme?.secondaryColor ?? "var(--color-secondary)";

  if (!data || !data.sections || data.sections.length === 0) {
    return null;
  }

  const getImageForSection = (sectionIndex: number) => {
    if (!images || images.length === 0) return null;

    const preferredSlot = `company-details-${sectionIndex + 1}`;
    const matchedBySlot = images.find((img) => img.slotName === preferredSlot);
    if (matchedBySlot) return matchedBySlot;

    const companyImages = images.filter(
      (img) =>
        img.category?.toLowerCase() === "companydetails" ||
        img.category?.toLowerCase() === "company-details" ||
        img.category?.toLowerCase() === "company"
    );

    if (companyImages.length > sectionIndex) {
      return companyImages[sectionIndex];
    }

    return images[sectionIndex % images.length] ?? null;
  };

  const sections = data.sections.slice(0, 3);

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-[92vw] md:max-w-[88vw]">
        {/* Header */}
        <div className="mb-6 md:mb-8 max-w-3xl mx-auto text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
            <span
              className="text-[11px] uppercase tracking-[0.28em] font-medium"
              style={{ color: primaryColor }}
            >
              Company Values
            </span>
            <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight"
            style={{ color: secondaryColor }}
          >
            {data.heading || "Company Details"}
          </h2>
          {data.description && (
            <p className="mt-4 text-sm md:text-base leading-relaxed text-black/60">
              {data.description}
            </p>
          )}
        </div>

        {/* Small content cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {sections.map((section, index) => {
            const img = getImageForSection(index);

            return (
              <article
                key={`section-${index}`}
                className="group flex flex-col overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                {/* Card image */}
                <div className="relative h-36 md:h-40 w-full overflow-hidden shrink-0">
                  {img?.imageUrl ? (
                    <Image
                      src={getOptimizedImageUrl(img.imageUrl) || ""}
                      alt={section.heading || "Company detail"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: `${primaryColor}18` }}
                    />
                  )}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <span
                    className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.2em] px-2 py-1"
                    style={{ backgroundColor: secondaryColor, color: "#fff" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3
                    className="text-base md:text-lg font-extrabold uppercase tracking-tight leading-snug"
                    style={{ color: secondaryColor }}
                  >
                    {section.heading}
                  </h3>
                  {section.description && (
                    <p className="mt-3 text-sm leading-relaxed text-black/65 line-clamp-4">
                      {section.description}
                    </p>
                  )}
                  <div
                    className="mt-auto pt-5 h-px w-10 transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: primaryColor }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
