import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import BusinessOverviewSection from "@/sections/BusinessOverviewSection";
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
      title: "Contact Star Quality Group | Get a Free Quote for Your Home Renovation",
      description:
        "Have questions or need a quote? Contact Star Quality Group — trusted home renovation experts serving Maryland and Washington, DC.",
    };
  }

  const { businessName, themeData } = landingPageData;
  const title =
    "Contact Star Quality Group | Get a Free Quote for Your Home Renovation";
  const description =
    "Have questions or need a quote? Contact Star Quality Group — trusted home renovation experts serving Maryland and Washington, DC.";

  return {
    title,
    description,
    keywords:
      "contact us, get in touch, home renovation, free quote, Maryland, Washington DC",
    authors: [{ name: businessName }],
    creator: businessName,
    publisher: businessName,
    robots: "index,follow",
    openGraph: {
      title,
      description,
      url: "https://www.starqualitygroup.com/contact-us",
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
      canonical: "https://www.starqualitygroup.com/contact-us",
    },
    other: {
      "theme-color": themeData?.primaryColor,
    },
  };
}

export default async function ContactUsPage() {
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
                  href: "#business-overview",
                  label: "Contact Us",
                }
              }
              images={landingPageData.images}
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
