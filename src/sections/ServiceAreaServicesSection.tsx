"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Image as ImageType } from "@/types/template";
import Image from "next/image";

interface ServiceItem {
  heading: string;
  description: string;
}

interface ServiceAreaServicesSectionProps {
  title: string;
  description: string;
  services: ServiceItem[];
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    accentColor?: string;
  };
  images: ImageType[];
}

export default function ServiceAreaServicesSection({
  title,
  description,
  services,
  theme,
  images,
}: ServiceAreaServicesSectionProps) {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const { ref: descRef, isVisible: descVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  const secondaryColor = theme?.secondaryColor || 'var(--color-secondary)';

  // Get the first image for the left side
  const mainImage = images[0]?.imageUrl || "/images/image-1.webp";
  const mainImageAlt = images[0]?.altText || "Junk removal services";

  return (
    <section id="services" className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <h2
            ref={titleRef}
            className={`text-3xl md:text-5xl leading-[1.05] font-black tracking-tight text-gray-900 font-staatliches mb-6 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {title}
          </h2>
          <p
            ref={descRef}
            className={`text-gray-600 text-base md:text-lg leading-relaxed font-poppins transition-all duration-700 ${
              descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {description}
          </p>
        </div>

        {/* Image and Services Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Side - Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:sticky lg:top-6 lg:h-[500px] xl:h-[600px] overflow-hidden">
            <Image
              src={mainImage}
              alt={mainImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          {/* Right Side - Services */}
          <div className="space-y-6 sm:space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <span 
                    className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full"
                    style={{ backgroundColor: secondaryColor }}
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 font-poppins mb-2">
                      {service.heading}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-poppins">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}