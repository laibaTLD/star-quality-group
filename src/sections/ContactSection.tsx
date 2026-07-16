"use client";

import { BusinessData } from "@/types/template";

interface Schedule {
  day: string;
  periods?: Array<{
    open: string;
    close?: string;
  }>;
}

interface BusinessHours {
  schedule?: Schedule[];
}

interface ContactSectionProps {
  title: string;
  description: string;
  showMap?: boolean;
  businessData: BusinessData & { hours?: BusinessHours };
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
}

export default function ContactSection({
  title,
  description,
  showMap = true,
  businessData,
  theme,
}: ContactSectionProps) {
  const primaryColor = theme?.primaryColor ?? "var(--color-primary)";
  const secondaryColor = theme?.secondaryColor ?? "var(--color-secondary)";

  const contactRows = [
    {
      label: "Email",
      value: businessData.email,
      href: businessData.email ? `mailto:${businessData.email}` : undefined,
    },
    {
      label: "Phone",
      value: businessData.phone,
      href: businessData.phone ? `tel:${businessData.phone}` : undefined,
    },
    {
      label: "Address",
      value: [
        businessData.address?.street,
        [businessData.address?.city, businessData.address?.state, businessData.address?.zipCode]
          .filter(Boolean)
          .join(", "),
      ]
        .filter(Boolean)
        .join("\n"),
    },
  ].filter((row) => row.value);

  return (
    <section id="contact" className="bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-[92vw] md:max-w-[88vw]">
        <div className="mb-6 md:mb-8 max-w-3xl mx-auto text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
            <span
              className="text-[11px] uppercase tracking-[0.28em] font-medium"
              style={{ color: primaryColor }}
            >
              Contact
            </span>
            <span className="h-px w-10" style={{ backgroundColor: primaryColor }} />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight"
            style={{ color: secondaryColor }}
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-sm md:text-base leading-relaxed text-black/60">
              {description}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Info */}
          <div className="lg:col-span-5 space-y-0 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 border-b py-5"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <span
                  className="text-[11px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color: primaryColor }}
                >
                  {row.label}
                </span>
                {row.href ? (
                  <a
                    href={row.href}
                    className="text-base md:text-lg text-black/80 hover:opacity-70 transition-opacity whitespace-pre-line"
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="text-base md:text-lg text-black/80 whitespace-pre-line">
                    {row.value}
                  </p>
                )}
              </div>
            ))}

            {businessData.hours?.schedule && businessData.hours.schedule.length > 0 && (
              <div className="border-b py-5" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <span
                  className="text-[11px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color: primaryColor }}
                >
                  Hours
                </span>
                <div className="mt-3 space-y-2">
                  {businessData.hours.schedule.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between gap-4 text-sm text-black/70"
                    >
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-right">
                        {schedule.periods?.length
                          ? schedule.periods
                              .map((p) => `${p.open} – ${p.close || "Late"}`)
                              .join(", ")
                          : "Closed"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="lg:col-span-7 border p-6 md:p-8" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
            <h3
              className="text-xl md:text-2xl font-extrabold uppercase tracking-tight mb-6"
              style={{ color: secondaryColor }}
            >
              Send us a message
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-black/50">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-current"
                    style={{ caretColor: primaryColor }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-black/50">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-current"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-black/50">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-current"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-black/50">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-current"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-black/50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border-b border-black/20 bg-transparent px-0 py-3 text-sm outline-none transition focus:border-current resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center gap-3 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: primaryColor }}
              >
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {showMap && (
          <div className="mt-10 md:mt-14 border overflow-hidden" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
            <div className="flex h-72 md:h-96 items-center justify-center bg-black/[0.03]">
              <div className="text-center px-6">
                <p
                  className="text-[11px] uppercase tracking-[0.25em] mb-3"
                  style={{ color: primaryColor }}
                >
                  Location
                </p>
                <p className="text-sm md:text-base text-black/65">
                  {[businessData.address?.street, businessData.address?.city, businessData.address?.state]
                    .filter(Boolean)
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
