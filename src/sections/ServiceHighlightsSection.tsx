"use client";

import { ServiceHighlightsContent } from "@/types/template";

interface ServiceHighlightsSectionProps {
  data: ServiceHighlightsContent;
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor?: string;
  };
}

export default function ServiceHighlightsSection({
  data,
  theme,
}: ServiceHighlightsSectionProps) {
  const primaryColor = theme?.primaryColor ?? "var(--color-primary)";
  const secondaryColor = theme?.secondaryColor ?? "var(--color-secondary)";

  const formatDisplayValue = (description: string) => {
    if (description.includes("+")) {
      return { value: description.replace("+", ""), suffix: "+" };
    }
    if (description.includes("%")) {
      return { value: description.replace("%", ""), suffix: "%" };
    }
    if (description.includes("/")) {
      return { value: description, suffix: "" };
    }
    return { value: description, suffix: "" };
  };

  return (
    <section id="service-highlights" className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-[92vw] md:max-w-[88vw]">
        <div className="mb-6 md:mb-8 max-w-3xl mx-auto text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
            <span
              className="text-[11px] uppercase tracking-[0.28em] font-medium"
              style={{ color: primaryColor }}
            >
              Highlights
            </span>
            <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight"
            style={{ color: secondaryColor }}
          >
            {data.title}
          </h2>
          {data.description ? (
            <p className="mt-4 text-sm md:text-base leading-relaxed text-black/60">
              {data.description}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {data.services && data.services.length > 0 ? (
            data.services.map((service, index) => {
              const { value, suffix } = formatDisplayValue(service.description);

              return (
                <div
                  key={`service-${index}`}
                  className="group relative flex flex-col border p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)]"
                  style={{ borderColor: "rgba(0,0,0,0.1)" }}
                >
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: primaryColor }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="mt-5 flex items-baseline gap-1">
                    <span
                      className="text-4xl md:text-5xl font-extrabold leading-none tracking-tight tabular-nums"
                      style={{ color: secondaryColor }}
                    >
                      {value}
                    </span>
                    {suffix ? (
                      <span
                        className="text-xl md:text-2xl font-extrabold"
                        style={{ color: primaryColor }}
                      >
                        {suffix}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-sm md:text-base font-semibold uppercase tracking-wide text-black/75">
                    {service.name}
                  </h3>

                  <div
                    className="mt-auto pt-6 h-px w-10 transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: primaryColor }}
                  />
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center text-sm text-black/50">
              No service highlights available
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
