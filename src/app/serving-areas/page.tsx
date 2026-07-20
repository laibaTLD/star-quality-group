import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FAQSection from "@/sections/FAQSection";
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
      title: "Serving Areas | Star Quality Group",
      description:
        "Star Quality Group serves Maryland and Washington, DC with professional painting, drywall, and basement refinishing.",
    };
  }

  const { businessName, themeData, seoData } = landingPageData;
  const title = `Serving Areas | ${businessName}`;
  const description =
    seoData?.description ||
    `${businessName} serves Maryland and Washington, DC with professional painting, drywall, and basement refinishing.`;

  return {
    title,
    description,
    keywords:
      "serving areas, Maryland, Washington DC, painting, drywall, basement refinishing",
    authors: [{ name: businessName }],
    creator: businessName,
    publisher: businessName,
    robots: "index,follow",
    openGraph: {
      title,
      description,
      url: "https://www.starqualitygroup.com/serving-areas",
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
      canonical: "https://www.starqualitygroup.com/serving-areas",
    },
    other: {
      "theme-color": themeData?.primaryColor,
    },
  };
}

export default async function ServingAreasPage() {
  const landingPageData = await getLandingPageDataForPage();
  const serviceAreas = landingPageData.businessData?.serviceAreas || [];

  return (
    <Layout
      title={`Serving Areas | ${landingPageData.businessName}`}
      description={
        landingPageData.seoData.description ||
        `${landingPageData.businessName} serves Maryland and Washington, DC with professional painting, drywall, and basement refinishing.`
      }
      theme={landingPageData.themeData}
      seoData={{
        ...landingPageData.seoData,
        isIndex: true,
        canonicalUrl: "https://www.starqualitygroup.com/serving-areas",
      }}
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
          ["--color-secondary" as string]:
            landingPageData.themeData?.secondaryColor,
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

          {serviceAreas.length > 0 && (
            <ServiceAreasSection
              serviceAreas={serviceAreas}
              themeData={landingPageData.themeData}
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

          <FooterSection
            footerTitle={landingPageData.seoData.title}
            socialsList={(landingPageData.businessData.socialLinks || []).map(
              (s) => ({ name: s.platform, url: s.url })
            )}
            originCity={landingPageData.businessData.address?.city || ""}
            workingScope={
              serviceAreas.length
                ? `serving ${Array.from(
                    new Set(serviceAreas.map((a) => a.region))
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
