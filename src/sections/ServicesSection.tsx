"use client";
import { Image as ImageType } from "@/types/template";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Service {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta?: { href: string; label: string };
}

interface ServicesSectionProps {
  title: string;
  description: string;
  services: Service[];
  theme?: {
    primaryColor: string;
    secondaryColor: string;
  };
  images: ImageType[];
}

export default function ServicesSection({
  title,
  description,
  services,
  theme,
  images,
}: ServicesSectionProps) {
  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
    
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  // Helper function for CSS RGB values
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
      '0, 0, 0';
  };

  const primaryColor = theme?.primaryColor || 'var(--color-primary)';
  const secondaryColor = theme?.secondaryColor || 'var(--color-secondary)';
  const primaryRgb = useMemo(() => hexToRgb(theme?.primaryColor ?? '#000000'), [theme?.primaryColor]);

  // Function to generate service URLs based on service name
  const getServiceUrl = (serviceName: string) => {
    // Map service names to their actual URL paths
    const serviceUrlMap: { [key: string]: string } = {
      'professional painting': '/services/professional-painting',
      'basement refinishing': '/services/basement-refinishing', 
      'basement refinshing': '/services/basement-refinishing', // Handle misspelling
      'dry wall': '/services/dry-wall',
      'drywall': '/services/dry-wall',
      'dry-wall': '/services/dry-wall',
    };
    
    const normalizedName = serviceName.toLowerCase().trim();
    
    // Debug: Log the service name being processed
    console.log('Service name:', serviceName, '-> Normalized:', normalizedName);
    
    // Return mapped URL if exists, otherwise generate a URL
    if (serviceUrlMap[normalizedName]) {
      console.log('Found mapped URL:', serviceUrlMap[normalizedName]);
      return serviceUrlMap[normalizedName];
    }
    
    // Fallback: generate URL from service name
    const serviceSlug = normalizedName
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    const fallbackUrl = `/services/${serviceSlug}`;
    console.log('Using fallback URL:', fallbackUrl);
    return fallbackUrl;
  };

  return (
    <section
      id="services"
      className="pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10 relative overflow-hidden bg-white"
      style={{ color: 'var(--foreground)' }}
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
          background: `radial-gradient(circle at 30% 70%, rgba(${primaryRgb}, 0.3) 0%, transparent 60%)`
        }}
      />

      <div className="relative z-10 w-full max-w-none mx-auto px-0">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12 px-4">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight"
            style={{ color: secondaryColor }}
          >
            {title}
          </h2>
          {description ? (
            <p 
              className="mx-auto mt-6 md:mt-8 max-w-3xl text-base md:text-lg font-light leading-relaxed"
              style={{ color: 'rgba(0,0,0,0.65)' }}
            >
              {description}
            </p>
          ) : null}
        </div>

        {/* Embla carousel with multi-card view and full-bleed slides */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              color: secondaryColor,
              border: `2px solid ${primaryColor}60`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = primaryColor;
              e.currentTarget.style.boxShadow = `0 0 15px ${primaryColor}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${primaryColor}60`;
              e.currentTarget.style.boxShadow = 'none';
            }}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              color: secondaryColor,
              border: `2px solid ${primaryColor}60`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = primaryColor;
              e.currentTarget.style.boxShadow = `0 0 15px ${primaryColor}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${primaryColor}60`;
              e.currentTarget.style.boxShadow = 'none';
            }}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div ref={viewportRef} className="overflow-hidden w-full">
            <div className="flex touch-pan-y touch-pinch-zoom">
              {services.map((service, index) => {
                const img = images.find((img) => img.slotName === `services-image-${index + 1}`);
                const altText = img?.altText || `${service.name} image`;
                const serviceUrl = getServiceUrl(service.name);
                return (
                  <Link
                    key={index}
                    href={serviceUrl}
                    className="group min-w-0 overflow-hidden cursor-pointer block flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)]"
                    aria-labelledby={`service-title-${index}`}
                  >
                    <article>
                      <div className="relative w-full aspect-[3/4] overflow-hidden">
                        {img?.imageUrl ? (
                          <Image
                            src={img.imageUrl}
                            alt={altText}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            quality={80}
                            loading={index < 2 ? "eager" : "lazy"}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-3xl" 
                               style={{ color: 'rgba(255,255,255,0.3)' }} 
                               aria-hidden="true">🖼️</div>
                        )}
                        {/* Gradient overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Primary color accent border on hover */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ 
                            boxShadow: `inset 0 0 0 4px ${primaryColor}60`,
                          }}
                        />
                        
                        {/* Title overlay at bottom */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0">
                          <div className="p-4 md:p-6">
                            <h3 
                              id={`service-title-${index}`} 
                              className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight"
                              style={{ 
                                color: 'var(--color-white)',
                                textShadow: '0 0 10px rgba(0,0,0,0.8)'
                              }}
                            >
                              {service.name}
                            </h3>
                            {service.description ? (
                              <p 
                                className="mt-2 text-sm md:text-base line-clamp-2 font-light"
                                style={{ 
                                  color: 'rgba(255,255,255,0.9)',
                                  textShadow: '0 0 6px rgba(0,0,0,0.6)'
                                }}
                              >
                                {service.description}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Dots */}
          {scrollSnaps.length > 1 && (
            <div className="flex justify-center py-6 space-x-3 bg-white">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className="h-2.5 rounded-full transition-all duration-300"
                  style={{
                    width: index === selectedIndex ? '24px' : '10px',
                    backgroundColor: index === selectedIndex ? primaryColor : 'rgba(0,0,0,0.2)',
                    boxShadow: index === selectedIndex ? `0 0 10px ${primaryColor}` : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (index !== selectedIndex) {
                      e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.35)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== selectedIndex) {
                      e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.2)';
                    }
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
