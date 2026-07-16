import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
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
      title:
        "We offer Painting, Drywall, & Basement Refinishing Services in Bowie, MD | Star Quality Group",
      description:
        "Explore our drywall, professional painting, and basement refinishing services. Our professionals offer exclusive & reliable services in home renovation solutions in Maryland.",
    };
  }

  const { businessName, themeData } = landingPageData;
  const title =
    "We offer Painting, Drywall, & Basement Refinishing Services in Bowie, MD | Star Quality Group";
  const description =
    "Explore our drywall, professional painting, and basement refinishing services. Our professionals offer exclusive & reliable services in home renovation solutions in Maryland.";

  return {
    title,
    description,
    keywords:
      "services, home improvement, basement refinishing, drywall, painting, Maryland, DC",
    authors: [{ name: businessName }],
    creator: businessName,
    publisher: businessName,
    robots: "index,follow",
    openGraph: {
      title,
      description,
      url: "https://www.starqualitygroup.com/services",
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
      canonical: "https://www.starqualitygroup.com/services",
    },
    other: {
      "theme-color": themeData?.primaryColor,
    },
  };
}

export default async function ServicesPage() {
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

          {landingPageData.content.services && (
            <ServicesSection
              title={landingPageData.content.services.title}
              description={landingPageData.content.services.description}
              services={landingPageData.content.services.services}
              images={landingPageData.images ?? []}
              theme={landingPageData.themeData}
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
