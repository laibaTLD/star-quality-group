"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ThemeProps {
  primaryColor?: string;
  secondaryColor?: string;
}

interface ImageSpec {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface RowContent {
  heading: string;
  description: string;
}

interface ServiceAreaDetailSectionProps {
  theme?: ThemeProps;
  row1: RowContent;
  row1Image: ImageSpec;
  row2: RowContent;
  row2Image: ImageSpec;
  row3?: RowContent;
  row3Image?: ImageSpec;
}

export default function ServiceAreaDetailSection({ theme, row1, row1Image, row2, row2Image, row3, row3Image }: ServiceAreaDetailSectionProps) {
  const { ref: row1Ref, isVisible: row1Visible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { ref: row2Ref, isVisible: row2Visible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { ref: row3Ref, isVisible: row3Visible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  const primaryColor = theme?.primaryColor ?? 'var(--color-primary)';
  const secondaryColor = theme?.secondaryColor ?? 'var(--color-secondary)';

  // Helper function for CSS RGB values
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
      '0, 0, 0';
  };

  const primaryRgb = useMemo(() => hexToRgb(theme?.primaryColor ?? '#000000'), [theme?.primaryColor]);

  // Common row class to reduce repetition
  const rowClass = "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-28";
  const imageWrapperClass = "relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-xl";
  const headingClass = "text-2xl sm:text-2l md:text-3l lg:text-4l font-extrabold uppercase tracking-tight";
  const textClass = "text-base md:text-lg leading-relaxed font-light";

  return (
    <section 
      className="relative overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at 70% 30%, rgba(${primaryRgb}, 0.3) 0%, transparent 60%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Text left, Image right (stacked on mobile with image first) */}
        <div ref={row1Ref} className={`${rowClass} transition-all duration-700 ${row1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="space-y-6">
            <h2 
              className={headingClass}
              style={{ 
                color: secondaryColor,
              }}
            >
              {row1.heading}
            </h2>
            <p 
              className={textClass}
              style={{ 
                color: 'rgba(0,0,0,0.7)',
              }}
            >
              {row1.description}
            </p>
          </div>
          <div className="relative lg:order-first group">
            <div 
              className={imageWrapperClass}
              style={{ 
                border: `3px solid ${primaryColor}40`,
                boxShadow: `0 0 30px ${primaryColor}20`
              }}
            >
              <Image
                src={row1Image.src}
                alt={row1Image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Hover overlay with primary color accent */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ 
                  boxShadow: `inset 0 0 0 4px ${primaryColor}`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Row 2: Image left, Text right (stacked on mobile with image first) */}
        <div ref={row2Ref} className={`${rowClass} transition-all duration-700 ${row2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: '200ms' }}>
          <div className="relative lg:order-first group">
            <div 
              className={imageWrapperClass}
              style={{ 
                border: `3px solid ${primaryColor}40`,
                boxShadow: `0 0 30px ${primaryColor}20`
              }}
            >
              <Image
                src={row2Image.src}
                alt={row2Image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Hover overlay with primary color accent */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ 
                  boxShadow: `inset 0 0 0 4px ${primaryColor}`,
                }}
              />
            </div>
          </div>
          <div className="space-y-6">
            <h3 
              className={headingClass}
              style={{ 
                color: secondaryColor,
              }}
            >
              {row2.heading}
            </h3>
            <p 
              className={textClass}
              style={{ 
                color: 'rgba(0,0,0,0.7)',
              }}
            >
              {row2.description}
            </p>
          </div>
        </div>

        {/* Row 3: Text left, Image right (stacked on mobile with image first) */}
        {row3 && row3Image && (
          <div ref={row3Ref} className={`${rowClass} transition-all duration-700 ${row3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: '400ms' }}>
            <div className="space-y-6">
              <h3 
                className={headingClass}
                style={{ 
                  color: secondaryColor,
                }}
              >
                {row3.heading}
              </h3>
              <p 
                className={textClass}
                style={{ 
                  color: 'rgba(0,0,0,0.7)',
                }}
              >
                {row3.description}
              </p>
            </div>
            <div className="relative lg:order-first group">
              <div 
                className={imageWrapperClass}
                style={{ 
                  border: `3px solid ${primaryColor}40`,
                  boxShadow: `0 0 30px ${primaryColor}20`
                }}
              >
                <Image
                  src={row3Image.src}
                  alt={row3Image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Hover overlay with primary color accent */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    boxShadow: `inset 0 0 0 4px ${primaryColor}`,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
