'use client';

import Image from 'next/image';
import { useEffect, useState, useMemo, useRef } from 'react';

declare type ImageType = { 
  imageUrl: string; 
  altText?: string; 
  category?: string; 
  slotName?: string; 
};

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaButton: {
    href: string;
    label: string;
  };
  images?: ImageType[];
  themeData?: {
    primaryColor: string;
    secondaryColor: string;
  };
}

export default function HeroSection({
  title = "EXCELLENCE IN BUSINESS SOLUTIONS",
  subtitle = "YOUR TRUSTED PARTNER FOR GROWTH AND SUCCESS SINCE 2016", 
  description = "We transform visions into reality with precision, quality, and unmatched craftsmanship.",
  ctaButton = { href: "/contact-us", label: "Start Your Project" },
  images = [],
  themeData
}: HeroSectionProps) {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const imageInnerRefs = useRef<Array<HTMLDivElement | null>>([null, null, null, null]);

  // Filter hero images from database
  const heroImages = useMemo(() => {
    return images.filter(img => img.category === 'hero' || img.slotName === 'hero');
  }, [images]);

  // Fallback images if no database images are available
  const fallbackImages = [
    { imageUrl: '/next.svg', altText: 'Next.js logo' },
    { imageUrl: '/vercel.svg', altText: 'Vercel logo' },
    { imageUrl: '/globe.svg', altText: 'Globe illustration' },
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

  // Helper function for CSS Rgb values
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
      '255, 107, 53';
  };

  const primaryRgb = useMemo(() => hexToRgb(themeData?.primaryColor ?? '#000000'), [themeData?.primaryColor]);

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
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-white">

        {/* Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="flex h-full w-full perspective-[900px] gap-0">
            {gridImages.map((imageObj, index) => (
              <div
                key={index}
                className="hero-panel relative overflow-hidden flex-[0_0_25%] h-screen bg-gray-800 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
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
        <div className="relative z-20 min-h-screen flex items-center justify-center text-center w-full pointer-events-none px-4 sm:px-6">
          <div className="w-full max-w-4xl">
            
          

            {/* Main Title */}
            <div className="overflow-hidden">
               <h1 
                 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase relative drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                 style={{ color: 'var(--color-white)' }}
               >
                {title}
              </h1>
            </div>


           {/* Subtitle */}
            <div>
               <h2 className="text-[1rem] font-extralight uppercase drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]" style={{ color: 'var(--color-white)' }}>
                {subtitle}
              </h2>
            </div>

            {/* CTA Button */}
            {ctaButton && ctaButton.href && ctaButton.label && (
              <div className="pt-8 relative z-30">
                <a 
                  href={ctaButton.href} 
                  className="group pointer-events-auto inline-flex items-center gap-4 px-8 py-4 text-sm no-underline uppercase rounded-lg text-center font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm bg-black/20 border-2"
                  style={{
                    borderColor: 'var(--color-white)',
                    color: 'var(--color-white)',
                  }}
                >
                  <span>{ctaButton.label}</span>
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
            )}

          </div>
        </div>
      </section>
    </>
  );
}