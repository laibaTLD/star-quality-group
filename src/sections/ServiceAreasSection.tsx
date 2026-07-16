"use client";

import Link from "next/link";

interface ServiceArea {
  city: string;
  region: string;
  description: string;
}

interface ThemeData {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor?: string;
}

interface ServiceAreasSectionProps {
  serviceAreas?: ServiceArea[];
  themeData?: ThemeData;
}

export default function ServiceAreasSection({
  serviceAreas,
  themeData,
}: ServiceAreasSectionProps) {
  if (!serviceAreas || serviceAreas.length === 0) {
    return null;
  }

  const primaryColor = themeData?.primaryColor ?? "var(--color-primary)";
  const secondaryColor = themeData?.secondaryColor ?? "var(--color-secondary)";

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-[92vw] md:max-w-[88vw]">
        <div className="mb-6 md:mb-8 max-w-3xl mx-auto text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
            <span
              className="text-[11px] uppercase tracking-[0.28em] font-medium"
              style={{ color: primaryColor }}
            >
              Coverage
            </span>
            <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight"
            style={{ color: secondaryColor }}
          >
            Service Areas
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-black/60">
            Professional painting, drywall, and basement refinishing across Maryland and Washington DC.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {serviceAreas.map((area, index) => (
            <Link
              key={`${area.city}-${area.region}-${index}`}
              href={`/serving-areas`}
              className="group relative flex flex-col border p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)]"
              style={{ borderColor: "rgba(0,0,0,0.1)" }}
            >
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: primaryColor }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className="mt-3 text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-tight"
                style={{ color: secondaryColor }}
              >
                {area.city}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-black/45">
                {area.region}
              </p>
              {area.description ? (
                <p className="mt-4 text-sm leading-relaxed text-black/60 line-clamp-3">
                  {area.description}
                </p>
              ) : null}
              <div
                className="mt-auto pt-5 h-px w-10 transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: primaryColor }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
