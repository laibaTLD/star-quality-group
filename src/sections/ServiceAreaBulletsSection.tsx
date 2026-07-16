"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ThemeData } from "@/types/template";

type BulletItem = string | { title: string; description?: string };

function isBulletObject(
  item: BulletItem
): item is { title: string; description?: string } {
  return typeof item === "object" && item !== null && "title" in item;
}

interface ServiceAreaBulletsSectionProps {
  bullets: BulletItem[];
  theme?: ThemeData;
}

const ServiceAreaBulletsSection: React.FC<ServiceAreaBulletsSectionProps> = ({
  bullets,
  theme,
}) => {
  if (!bullets || bullets.length === 0) return null;

  const primaryColor = theme?.primaryColor || "var(--color-primary)";
  const secondaryColor = theme?.secondaryColor || "var(--color-secondary)";
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-14 overflow-hidden relative bg-white"
    >
      <div className="relative z-10 max-w-[92vw] md:max-w-[88vw] mx-auto">
        <div
          className={`transition-all duration-700 ease-out ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bullets.map((b, idx) => {
              const titleText = isBulletObject(b) ? b.title : b;
              const descText = isBulletObject(b) ? b.description : undefined;

              return (
                <li
                  key={idx}
                  className="group relative p-6 md:p-8 border transition-colors duration-300 hover:bg-neutral-50"
                  style={{
                    borderColor: `${secondaryColor}22`,
                    transitionDelay: `${idx * 50}ms`,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 h-full w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: primaryColor }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="h-1.5 w-6 rounded-full"
                        style={{ backgroundColor: primaryColor }}
                      />
                      <h3
                        className="text-sm md:text-base font-bold uppercase tracking-[0.18em] leading-tight"
                        style={{ color: secondaryColor }}
                      >
                        {titleText}
                      </h3>
                    </div>

                    {descText && (
                      <p className="text-sm leading-relaxed text-neutral-600">
                        {descText}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaBulletsSection;
