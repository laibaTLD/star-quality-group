"use client";

import React, { useMemo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ThemeData } from "@/types/template";

interface ServiceAreaIntroSectionProps {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  theme?: ThemeData;
}

const ServiceAreaIntroSection: React.FC<ServiceAreaIntroSectionProps> = ({ 
  title, 
  paragraphs, 
  bullets, 
  theme 
}) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  
  const primaryColor = theme?.primaryColor || 'var(--color-primary)';
  const secondaryColor = theme?.secondaryColor || 'var(--color-secondary)';
  
  // Helper function for CSS RGB values
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
      '0, 0, 0';
  };

  const primaryRgb = useMemo(() => hexToRgb(theme?.primaryColor ?? '#000000'), [theme?.primaryColor]);
  const secondaryRgb = useMemo(() => hexToRgb(theme?.secondaryColor ?? '#666666'), [theme?.secondaryColor]);

  return (
    <section
      id="service-area-intro"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#ffffff' }}
    >
      {/* Background gradient overlay using primary and secondary theme colors */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ 
          background: `linear-gradient(135deg, rgba(${primaryRgb}, 0.12) 0%, transparent 50%, rgba(${secondaryRgb}, 0.08) 100%)`
        }}
      />
      
      {/* Decorative accent line */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2
            ref={titleRef}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight mb-10 transition-all duration-700 ${
              titleVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ color: secondaryColor }}
          >
            {title}
          </h2>
          
          <div ref={descRef} className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-base md:text-lg leading-relaxed font-light transition-all duration-700 ${
                  descVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  color: 'rgba(0,0,0,0.7)',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Bullet Points */}
          {bullets && bullets.length > 0 && (
            <div 
              className={`mt-12 transition-all duration-700 ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
              style={{ transitionDelay: `${paragraphs.length * 100}ms` }}
            >
              <ul className="space-y-4 inline-block text-left">
                {bullets.map((bullet, index) => (
                  <li 
                    key={index}
                    className="flex items-start font-light"
                    style={{ color: 'rgba(0,0,0,0.75)' }}
                  >
                    <span 
                      className="mr-4 mt-1.5 flex-shrink-0 w-3 h-3 rounded-full"
                      style={{ backgroundColor: primaryColor }} 
                    />
                    <span className="text-base md:text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaIntroSection;