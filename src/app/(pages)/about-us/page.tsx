import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import CTASection from "@/sections/CTASection";
import FAQSection from "@/sections/FAQSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FooterSection from "@/sections/FooterSection";
import { getLandingPageData } from "@/lib/data";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 60;

async function getLandingPageDataForPage(): Promise<LandingPageData> {
  const landingPageData = await getLandingPageData();

  if (!landingPageData) {
    notFound();
  }

  return landingPageData;
}

export async function generateMetadata(): Promise<Metadata> {
  const landingPageData = await getLandingPageData();
  if (!landingPageData) {
    return {
      title: "About US | Star Quality Group",
      description:
        "Learn about Star Quality Group — trusted drywall, professional painting, and basement refinishing experts serving Maryland and Washington, DC with quality workmanship.",
    };
  }

  const { businessName, themeData } = landingPageData;
  const title = "About US | Star Quality Group";
  const description =
    "Learn about Star Quality Group — trusted drywall, professional painting, and basement refinishing experts serving Maryland and Washington, DC with quality workmanship.";

  return {
    title,
    description,
    keywords:
      "about us, company story, home improvement, drywall, painting, basement refinishing, Maryland, Washington DC",
    authors: [{ name: businessName }],
    creator: businessName,
    publisher: businessName,
    robots: "index,follow",
    openGraph: {
      title,
      description,
      url: "https://www.starqualitygroup.com/about-us",
      siteName: businessName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: "https://www.starqualitygroup.com/about-us",
    },
    other: {
      "theme-color": themeData?.primaryColor,
    },
  };
}

export default async function AboutUsPage() {
  const landingPageData = await getLandingPageDataForPage();

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
        <main>
          {landingPageData.content.hero && (
            <HeroSection
              title={landingPageData.content.hero.title}
              subtitle={landingPageData.content.hero.subtitle}
              description={landingPageData.content.hero.description}
              ctaButton={
                landingPageData.content.hero.ctaButton ?? {
                  href: "/contact-us",
                  label: "Contact Us",
                }
              }
              images={landingPageData.images}
              themeData={landingPageData.themeData}
            />
          )}

          {landingPageData.content.about && (
            <AboutSection
              title={landingPageData.content.about.title}
              description={landingPageData.content.about.description}
              features={landingPageData.content.about.features}
              ctaButton={
                landingPageData.content.about.ctaButton ?? {
                  href: "/contact-us",
                  label: "Get in touch",
                }
              }
              images={landingPageData.images}
              theme={landingPageData.themeData}
            />
          )}

          {landingPageData.content.ctaSection && (
            <CTASection
              data={landingPageData.content.ctaSection}
              theme={landingPageData.themeData}
              images={landingPageData.images}
            />
          )}

          {landingPageData.content.faq && (
            <FAQSection
              title={landingPageData.content.faq.title}
              description={landingPageData.content.faq.description}
              questions={landingPageData.content.faq.questions}
              themeData={landingPageData.themeData}
            />
          )}

          {landingPageData.content.testimonials && (
            <TestimonialsSection
              title={landingPageData.content.testimonials.title}
              description={landingPageData.content.testimonials.description}
              testimonials={landingPageData.content.testimonials.testimonials}
              theme={landingPageData.themeData}
            />
          )}

          {landingPageData.businessData.serviceAreas &&
            landingPageData.businessData.serviceAreas.length > 0 && (
              <ServiceAreasSection
                serviceAreas={landingPageData.businessData.serviceAreas}
                themeData={landingPageData.themeData}
              />
            )}

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
