"use client";

import { Image } from "@/types/template";
import { useMemo, useState } from "react";
import NextImage from "next/image";

interface GallerySectionProps {
  title: string;
  description: string;
  images?: Image[];
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
}

export default function GallerySection({
  title,
  description,
  images,
  theme,
}: GallerySectionProps) {
  const primaryColor = theme?.primaryColor ?? "var(--color-primary)";
  const secondaryColor = theme?.secondaryColor ?? "var(--color-secondary)";
  const [active, setActive] = useState(0);

  const galleryImages: Image[] = useMemo(() => {
    const provided = (images || []).filter(
      (img) => img.category === "gallery" || img.slotName?.includes("gallery")
    );
    if (provided.length > 0) return provided;
    return [
      {
        id: "1",
        slotName: "gallery",
        title: "Premium Finish",
        altText: "Professional painting finish",
        imageUrl:
          "https://images.unsplash.com/photo-1562259949-e8e7449ec25c?w=1400",
        category: "gallery",
        landingPageId: "default",
        createdAt: new Date().toISOString(),
      },
      {
        id: "2",
        slotName: "gallery",
        title: "Basement Transformation",
        altText: "Basement refinishing project",
        imageUrl:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400",
        category: "gallery",
        landingPageId: "default",
        createdAt: new Date().toISOString(),
      },
      {
        id: "3",
        slotName: "gallery",
        title: "Clean Drywall",
        altText: "Drywall installation",
        imageUrl:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400",
        category: "gallery",
        landingPageId: "default",
        createdAt: new Date().toISOString(),
      },
      {
        id: "4",
        slotName: "gallery",
        title: "Interior Detail",
        altText: "Interior renovation detail",
        imageUrl:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400",
        category: "gallery",
        landingPageId: "default",
        createdAt: new Date().toISOString(),
      },
    ];
  }, [images]);

  const featured = galleryImages[active] ?? galleryImages[0];

  return (
    <section id="gallery" className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-[92vw] md:max-w-[88vw]">
        <div className="mb-6 md:mb-8 max-w-3xl mx-auto text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
            <span
              className="text-[11px] uppercase tracking-[0.28em] font-medium"
              style={{ color: primaryColor }}
            >
              Our Work
            </span>
            <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight"
            style={{ color: secondaryColor }}
          >
            {title || "Gallery"}
          </h2>
          {description ? (
            <p className="mt-4 text-sm md:text-base leading-relaxed text-black/60">
              {description}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch lg:min-h-[520px]">
          {/* Featured image */}
          <div className="relative lg:col-span-8 min-h-[300px] sm:min-h-[400px] lg:min-h-full overflow-hidden group">
            {featured && (
              <NextImage
                key={featured.id}
                src={featured.imageUrl}
                alt={featured.altText || featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            )}
            <div
              className="absolute left-0 top-0 h-full w-1"
              style={{ backgroundColor: primaryColor }}
            />
          </div>

          {/* Thumbnails */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
            {galleryImages.slice(0, 4).map((image, index) => {
              const isActive = index === active;
              return (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[110px] overflow-hidden text-left transition-all"
                  style={{
                    outline: isActive ? `2px solid ${primaryColor}` : "2px solid transparent",
                    outlineOffset: 0,
                  }}
                >
                  <NextImage
                    src={image.imageUrl}
                    alt={image.altText || image.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className={`object-cover transition-transform duration-500 ${
                      isActive ? "scale-105" : "hover:scale-105"
                    }`}
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 transition-colors ${
                      isActive ? "bg-black/10" : "bg-black/0 hover:bg-black/10"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
