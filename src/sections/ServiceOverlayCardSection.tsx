"use client";

import React, { useMemo } from "react";
import NextImage from "next/image";
import { ThemeData } from "@/types/template";

interface ServiceOverlayCardSectionProps {
  heading: string;
  description: string;
  backgroundImage: {
    src: string;
    alt: string;
  };
  secondImage?: {
    src: string;
    alt: string;
  };
  theme?: ThemeData;
}

export default function ServiceOverlayCardSection({
  heading,
  description,
  backgroundImage,
  secondImage,
  theme,
}: ServiceOverlayCardSectionProps) {
  const primaryColor = theme?.primaryColor || 'var(--color-primary)';
  const secondaryColor = theme?.secondaryColor || 'var(--color-secondary)';

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
      '0, 0, 0';
  };

  const primaryRgb = useMemo(() => hexToRgb(theme?.primaryColor ?? '#000000'), [theme?.primaryColor]);

  return (
    <section 
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Decorative top accent line */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 z-10"
        style={{ backgroundColor: primaryColor }}
      />

      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{ 
          background: `radial-gradient(circle at 20% 80%, rgba(${primaryRgb}, 0.3) 0%, transparent 60%)`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-stretch">
          
          {/* Left side: Heading and Description */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <h2
              className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase leading-tight tracking-tight mb-6 sm:mb-8"
              style={{ color: secondaryColor }}
            >
              {heading}
            </h2>
            <div
              className="text-sm sm:text-base leading-relaxed space-y-4 sm:space-y-5 font-light"
              style={{ color: 'rgba(0,0,0,0.7)' }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          {/* Right side: Two Images matching content height */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-4">
            <div 
              className="relative flex-1 min-h-[250px] rounded-2xl overflow-hidden border-2"
              style={{ borderColor: `${primaryColor}40` }}
            >
              <NextImage
                src={backgroundImage.src}
                alt={backgroundImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            
            {secondImage && (
              <div 
                className="relative flex-1 min-h-[250px] rounded-2xl overflow-hidden border-2"
                style={{ borderColor: `${primaryColor}40` }}
              >
                <NextImage
                  src={secondImage.src}
                  alt={secondImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}