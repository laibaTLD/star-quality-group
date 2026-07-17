"use client";

import Image from 'next/image';
import { useEffect, useState, useMemo, useRef } from 'react';
import { ThemeData } from "@/types/template";
import ServiceAreaBulletsSection from './ServiceAreaBulletsSection';

type BulletItem = string | { title: string; description?: string };

interface ServiceAreaHeroSectionProps {
  serviceName: string;
  areaLabel: string;
  heading?: string;
  subheading?: string;
  description?: string;
  bullets?: BulletItem[];
  images?: Array<{
    id: string;
    imageUrl: string;
    slotName: string;
    altText: string;
    category?: string;
  }>;
  theme?: ThemeData;
}

export default function ServiceAreaHeroSection({
  serviceName,
  areaLabel,
  heading,
  subheading,
  description,
  bullets,
  images = [],
  theme,
}: ServiceAreaHeroSectionProps) {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const imageInnerRefs = useRef<Array<HTMLDivElement | null>>([null, null, null, null]);

  // Filter hero images from database
  const heroImages = useMemo(() => {
    return images.filter(img => img.category === 'hero' || img.slotName?.startsWith('hero-image-'));
  }, [images]);

  // Fallback images if no database images are available
  const fallbackImages = [
    { imageUrl: '/next.svg', altText: 'Next.js logo' },
    { imageUrl: '/vercel.svg', altText: 'Vercel logo' },
    { imageUrl: '/globe.svg', altText: 'Globe illustration' },
    { imageUrl: '/file.svg', altText: 'File illustration' },
  ];

  // Use database images if available, otherwise use fallbacks
  const displayImages = heroImages.length > 0 
    ? heroImages.map(img => ({ imageUrl: img.imageUrl, altText: img.altText || 'Hero background image' }))
    : fallbackImages;

  // Pick 4 images, repeat if fewer than 4 to fill
  const gridImages = useMemo(() => {
    const imgs = displayImages.slice(0, 4);
    if (imgs.length < 4) {
      const out: typeof imgs = [];
      for (let i = 0; i < 4; i++) out.push(imgs[i % imgs.length]);
      return out;
    }
    return imgs;
  }, [displayImages]);

  const resolvedTitle = heading || `${serviceName} Services in ${areaLabel}`;
  const resolvedSubtitle = subheading || "";
  const resolvedDescription = description || `Professional ${serviceName.toLowerCase()} services in ${areaLabel}. Fast, reliable, and affordable solutions for all your needs.`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Hover spin handlers
  const handlePointerEnter = (panelIndex: number) => {
    const inner = imageInnerRefs.current[panelIndex];
    if (inner) {
      inner.classList.add('spinning');
    }
  };

  const handlePointerLeave = (panelIndex: number) => {
    const inner = imageInnerRefs.current[panelIndex];
    if (inner) {
      inner.classList.remove('spinning');
    }
  };

  // Helper function for CSS RGB values
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
      '255, 107, 53';
  };

  const primaryRgb = useMemo(() => hexToRgb(theme?.primaryColor ?? '#000000'), [theme?.primaryColor]);

  // Custom styles for image hover effects only
  const styles = `
    @keyframes spin180 { from { transform: rotateZ(-180deg); } to { transform: rotateZ(0deg); } }
    
    .hero-title {
      font-size: clamp(3.5rem, 10vw, 8rem);
      font-weight: 900;
      line-height: 0.85;
      letter-spacing: -0.02em;
      text-transform: uppercase;
    }

    .hero-subtitle {
      font-size: clamp(1.2rem, 3vw, 1.8rem);
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }
    
    .hero-panel {
      transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 420ms ease;
      transform-style: preserve-3d;
      backface-visibility: hidden;
    }

    .panel-image {
      transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .panel-image img {
      transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1), filter 380ms ease;
    }

    .hero-panel:hover .panel-image img { 
      filter: brightness(0.98) contrast(1.02); 
    }

    .panel-image.spinning img { 
      animation: spin180 .6s linear; 
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section className="relative overflow-hidden min-h-[100svh] md:min-h-screen flex items-center justify-center bg-white">

        {/* Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="flex h-full w-full perspective-[900px] gap-0">
            {gridImages.map((imageObj, index) => (
              <div
                key={index}
                className="hero-panel relative overflow-hidden flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] h-[100svh] md:h-screen bg-gray-800 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                role="img"
                aria-label={imageObj.altText}
                onMouseEnter={() => handlePointerEnter(index)}
                onMouseLeave={() => handlePointerLeave(index)}
                onTouchStart={() => handlePointerEnter(index)}
                onTouchEnd={() => handlePointerLeave(index)}
              >
                <div 
                  className="panel-image absolute inset-0 z-[1] overflow-hidden h-full"
                  ref={(el: HTMLDivElement | null) => {
                    imageInnerRefs.current[index] = el;
                  }}
                >
                  <Image
                    src={imageObj.imageUrl}
                    alt={imageObj.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    quality={80}
                    priority={index < 2}
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-gray-700/35 mix-blend-multiply z-[5] pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Vignette overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_240px_rgba(0,0,0,0.55)]" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 min-h-[100svh] md:min-h-screen flex items-center justify-center text-center w-full pointer-events-none px-4 sm:px-6">
          <div className="w-full max-w-4xl">
            
            {/* Main Title */}
            <div className="overflow-hidden">
               <h1 
                 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase relative drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] leading-tight"
                 style={{ color: 'var(--color-white)' }}
               >
                {resolvedTitle}
              </h1>
            </div>

            {/* Subtitle */}
            {resolvedSubtitle && (
              <div>
                 <h2 className="mt-2 text-sm sm:text-base font-extralight uppercase drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] px-2" style={{ color: 'var(--color-white)' }}>
                  {resolvedSubtitle}
                </h2>
              </div>
            )}

            {/* Description */}
            {resolvedDescription && (
              <div className="mt-3 sm:mt-4 max-w-2xl mx-auto">
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-[0_0_8px_rgba(0,0,0,0.6)] line-clamp-4 sm:line-clamp-none">
                  {resolvedDescription}
                </p>
              </div>
            )}

            {/* CTA Button */}
            <div className="pt-6 sm:pt-8 relative z-30">
              <a 
                href="tel:2023814545" 
                className="group pointer-events-auto inline-flex items-center gap-2 sm:gap-4 px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm no-underline uppercase rounded-lg text-center font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm bg-black/20 border-2"
                style={{
                  borderColor: 'var(--color-white)',
                  color: 'var(--color-white)',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.268a1.5 1.5 0 0 1 1.415 1.03l1.007 3.02a1.5 1.5 0 0 1-.376 1.54l-1.21 1.21a12.035 12.035 0 0 0 5.657 5.657l1.21-1.21a1.5 1.5 0 0 1 1.54-.376l3.02 1.007A1.5 1.5 0 0 1 20.25 19.5v2.25c0 1.243-1.007 2.25-2.25 2.25h-.75C8.299 24 0 15.701 0 5.25v-.75Z" />
                </svg>
                <span>Call Us Now</span>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>
      
      {bullets && bullets.length > 0 && (
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-8 lg:mt-12">
          <div className="max-w-6xl mx-auto">
            <ServiceAreaBulletsSection bullets={bullets} theme={theme} />
          </div>
        </div>
      )}
    </>
  );
}
