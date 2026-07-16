import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FAQSection from "@/sections/FAQSection";
import BusinessOverviewSection from "@/sections/BusinessOverviewSection";
import FooterSection from "@/sections/FooterSection";
import type { LandingPageData } from "@/types/template";

type ValueProp = {
  title: string;
  description: string;
};

type ServiceDetailLayoutProps = {
  landingPageData: LandingPageData;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaLabel: string;
  };
  intro: {
    headingBefore: string;
    accentWord: string;
    headingAfter?: string;
    body: string;
    solutionsTitle: string;
    solutions: string[];
  };
  values: ValueProp[];
  faqDescription: string;
};

export default function ServiceDetailLayout({
  landingPageData,
  hero,
  intro,
  values,
  faqDescription,
}: ServiceDetailLayoutProps) {
  const primary = landingPageData.themeData?.primaryColor ?? "#1e3a5f";
  const secondary = landingPageData.themeData?.secondaryColor ?? "#0f2744";

  return (
    <Layout
      title={landingPageData.seoData.title}
      description={landingPageData.seoData.description}
      theme={landingPageData.themeData}
      seoData={landingPageData.seoData}
      landingPageData={landingPageData}
    >
      <Navbar
        businessName={landingPageData.businessName}
        logoImage="/logo.png"
        themeData={landingPageData.themeData}
        phoneNumber={landingPageData.businessData?.phone}
      />
      <div
        style={{
          ["--color-primary" as string]: landingPageData.themeData?.primaryColor,
          ["--color-secondary" as string]: landingPageData.themeData?.secondaryColor,
          ["--color-accent" as string]:
            landingPageData.themeData?.accentColor ??
            landingPageData.themeData?.primaryColor,
          ["--background" as string]: "#ffffff",
          ["--foreground" as string]: "#171717",
          ["--color-surface" as string]: "#ffffff",
          ["--color-text" as string]: "#171717",
        }}
      >
        <HeroSection
          title={hero.title}
          subtitle={hero.subtitle}
          description={hero.description}
          ctaButton={{ href: "#content", label: hero.ctaLabel }}
          images={landingPageData.images}
          themeData={landingPageData.themeData}
        />

        <main id="content">
          <section className="bg-white py-12 md:py-16">
            <div className="mx-auto max-w-[92vw] md:max-w-[88vw]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div>
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 leading-tight"
                    style={{ color: secondary }}
                  >
                    {intro.headingBefore}{" "}
                    <span style={{ color: primary }}>{intro.accentWord}</span>
                    {intro.headingAfter ? ` ${intro.headingAfter}` : ""}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-neutral-600">
                    {intro.body}
                  </p>
                </div>

                <div
                  className="p-6 md:p-8 border"
                  style={{ borderColor: `${primary}33` }}
                >
                  <h3
                    className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-5"
                    style={{ color: secondary }}
                  >
                    {intro.solutionsTitle}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {intro.solutions.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-neutral-700"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: primary }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-12 md:py-16">
            <div className="mx-auto max-w-[92vw] md:max-w-[88vw]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 overflow-hidden">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="bg-white p-8 md:p-10 transition-colors hover:bg-neutral-50"
                  >
                    <h4
                      className="text-lg font-bold uppercase tracking-tight mb-3"
                      style={{ color: secondary }}
                    >
                      {value.title}
                    </h4>
                    <p className="text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {landingPageData.content.faq && (
            <FAQSection
              title="Expert Insights"
              description={faqDescription}
              questions={landingPageData.content.faq.questions || []}
              themeData={landingPageData.themeData}
            />
          )}

          {landingPageData.businessData.serviceAreas &&
            landingPageData.businessData.serviceAreas.length > 0 && (
              <ServiceAreasSection
                serviceAreas={landingPageData.businessData.serviceAreas}
                themeData={landingPageData.themeData}
              />
            )}

          <BusinessOverviewSection businessName={landingPageData.businessName} />

          <FooterSection
            footerTitle={landingPageData.seoData.title}
            socialsList={(landingPageData.businessData.socialLinks || []).map(
              (s) => ({ name: s.platform, url: s.url })
            )}
            originCity={landingPageData.businessData.address?.city || ""}
            workingScope={
              landingPageData.businessData.serviceAreas &&
              landingPageData.businessData.serviceAreas.length
                ? `serving ${Array.from(
                    new Set(
                      landingPageData.businessData.serviceAreas.map((a) => a.region)
                    )
                  )
                    .filter((r) => r && r !== "DC")
                    .join(", ")}`
                : ""
            }
            contactEmail={landingPageData.businessData.email}
            agencyName={landingPageData.businessName}
            currentYear={new Date().getFullYear()}
            themeData={landingPageData.themeData}
            businessName={landingPageData.businessName}
            businessData={landingPageData.businessData}
          />
        </main>
      </div>
    </Layout>
  );
}
