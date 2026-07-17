"use client";

type Props = {
  businessName?: string;
};

export default function BusinessOverviewSection({ businessName }: Props) {
  return (
    <section
      id="business-overview"
      className="overflow-visible py-8 md:py-10"
      style={{ backgroundColor: "#ffffff", color: "var(--foreground)" }}
    >
      <div className="max-w-[92vw] md:max-w-[88vw] mx-auto flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>

        <div
          className="border-t"
          style={{
            borderColor:
              "color-mix(in srgb, var(--foreground) 60%, transparent)",
          }}
        />
        <div
          className="mt-2 text-[11px] uppercase tracking-wide font-extralight"
          style={{
            color: "color-mix(in srgb, var(--foreground) 60%, transparent)",
          }}
        >
          Contact Us
        </div>

        <form className="mt-4 md:mt-6 flex flex-col gap-4 md:gap-5">
          <div className="flex flex-wrap items-end gap-2">
            <div className="font-extrabold uppercase leading-[0.85] tracking-[-0.02em] text-[clamp(28px,8vw,96px)]">
              HELLO,
            </div>
          </div>

          <div className="flex flex-col gap-2 md:flex-row md:items-end">
            <div className="font-extrabold uppercase leading-[0.85] tracking-[-0.02em] text-[clamp(22px,6vw,86px)] md:whitespace-nowrap">
              MY NAME IS
            </div>
            <input
              type="text"
              aria-label="Your name"
              className="w-full min-w-0 flex-1 bg-transparent outline-none border-b text-left md:text-right text-sm md:text-base placeholder:text-gray-500 placeholder:italic py-2"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--foreground) 60%, transparent)",
              }}
              placeholder="Enter your name here"
            />
          </div>

          <div className="flex flex-col gap-2 md:flex-row md:items-end">
            <div className="font-extrabold uppercase leading-[0.85] tracking-[-0.02em] text-[clamp(22px,6vw,86px)] md:whitespace-nowrap">
              HERE IS MY EMAIL
            </div>
            <input
              type="email"
              aria-label="Your email"
              className="w-full min-w-0 flex-1 bg-transparent outline-none border-b text-left md:text-right text-sm md:text-base placeholder:text-gray-500 placeholder:italic py-2"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--foreground) 60%, transparent)",
              }}
              placeholder="Enter your email here"
            />
          </div>

          <div className="flex flex-col gap-2 md:flex-row md:items-end">
            <div className="font-extrabold uppercase leading-[0.85] tracking-[-0.02em] text-[clamp(20px,5.5vw,76px)] md:whitespace-nowrap">
              I’M LOOKING FOR
            </div>
            <textarea
              aria-label="Project details"
              rows={2}
              className="w-full min-w-0 flex-1 bg-transparent outline-none border-b text-left md:text-right text-sm placeholder:text-gray-500 placeholder:italic py-2 resize-none"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--foreground) 60%, transparent)",
              }}
              placeholder="Enter your project details here"
            />
          </div>

          <div className="mt-4 md:mt-6">
            <button
              type="submit"
              className="w-20 h-20 md:w-[118px] md:h-[118px] rounded-full text-white font-medium shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
