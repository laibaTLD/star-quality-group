"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  role?: string;
  company?: string;
  text: string;
}

interface TestimonialsSectionProps {
  title: string;
  description?: string;
  testimonials: Testimonial[];
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor?: string;
  };
}

export default function TestimonialsSection({
  title,
  description,
  testimonials = [],
  theme,
}: TestimonialsSectionProps) {
  const primaryColor = theme?.primaryColor ?? "var(--color-primary)";
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  const active = testimonials[activeIndex] ?? testimonials[0];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden py-10 md:py-14"
      style={{ backgroundColor: "#ffffff", color: "var(--foreground)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(ellipse at 20% 0%, ${primaryColor}40 0%, transparent 55%)`,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[92vw] md:max-w-[88vw]">
        <div
          className={`mb-8 md:mb-10 max-w-3xl mx-auto text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight"
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base md:text-lg font-light" style={{ color: "rgba(0,0,0,0.65)" }}>
              {description}
            </p>
          ) : null}
          <div
            className="mt-6 h-px w-24 mx-auto"
            style={{ backgroundColor: primaryColor }}
          />
        </div>

        {/* Featured quote */}
        <div
          className={`transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <blockquote className="relative">
            <span
              className="block text-6xl md:text-8xl font-extrabold leading-none select-none"
              style={{ color: primaryColor }}
              aria-hidden="true"
            >
              “
            </span>
            <p
              key={activeIndex}
              className="quote-text mt-2 max-w-4xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light uppercase leading-snug tracking-wide"
              style={{ color: "var(--foreground)" }}
            >
              {active.text}
            </p>
            <footer className="mt-8 flex flex-wrap items-end justify-between gap-6">
              <div>
                <div
                  className="text-sm md:text-base font-bold uppercase tracking-[0.2em]"
                  style={{ color: primaryColor }}
                >
                  {active.name}
                </div>
                {(active.role || active.company) && (
                  <div className="mt-1 text-sm" style={{ color: "rgba(0,0,0,0.5)" }}>
                    {[active.role, active.company].filter(Boolean).join(" · ")}
                  </div>
                )}
              </div>

              {testimonials.length > 1 && (
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() =>
                      setActiveIndex(
                        (prev) =>
                          (prev - 1 + testimonials.length) % testimonials.length
                      )
                    }
                    className="h-11 w-11 rounded-full border-2 flex items-center justify-center transition-transform hover:scale-105"
                    style={{ borderColor: `${primaryColor}80`, color: primaryColor }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() =>
                      setActiveIndex((prev) => (prev + 1) % testimonials.length)
                    }
                    className="h-11 w-11 rounded-full border-2 flex items-center justify-center transition-transform hover:scale-105"
                    style={{ borderColor: primaryColor, color: primaryColor }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </footer>
          </blockquote>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .quote-text {
          animation: fadeSlide 500ms ease;
        }
      `}</style>
    </section>
  );
}
