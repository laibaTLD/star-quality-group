import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import ServiceAreasSection from "@/sections/ServiceAreasSection";
import FAQSection from "@/sections/FAQSection";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import FooterSection from "@/sections/FooterSection";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";

export const revalidate = 60;

async function getLandingPageData(): Promise<LandingPageData> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    console.error(
      "Missing required environment variables: NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_ID"
    );
    notFound();
  }

  const landingPageData = await fetchLandingPageForSSG(templateId!, id!);

  if (!landingPageData) {
    console.error(
      `Landing page not found: templateId=${templateId}, id=${id}`
    );
    notFound();
  }

  return landingPageData;
}

export default async function ServingAreasPage() {
  const landingPageData = await getLandingPageData();
  const serviceAreas = landingPageData.businessData?.serviceAreas || [];

  // Ensure SEO data includes proper indexing for serving areas page
  const seoDataWithIndex = {
    ...landingPageData.seoData,
    isIndex: true, // Explicitly set to true for serving areas page
    canonicalUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.starqualitygroup.com'}/serving-areas`
  };

  return (
    <Layout
      title={
        landingPageData.seoData.title
          ? `${landingPageData.seoData.title} | Service Areas`
          : "Service Areas"
      }
      description={
        landingPageData.seoData.description ||
        "Explore the locations and regions where we provide professional iron work and structural services."
      }
      theme={landingPageData.themeData}
      seoData={seoDataWithIndex}
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
        <main className="bg-white">
          <ServiceAreaHeroSection
            serviceName="Junk Removal"
            areaLabel="Service Areas"
            heading={`Junk Removal Service Areas`}
            subheading="Fast, reliable, and eco-friendly junk removal services in your neighborhood."
            description="We make junk removal easy with our professional team, transparent pricing, and commitment to environmentally responsible disposal. Whether it's residential cleanouts, construction debris, or commercial waste, we handle it all with care and efficiency."
            images={landingPageData.images || []}
            theme={landingPageData.themeData}
          />

          <ServiceAreaIntroSection
            title="Comprehensive Junk Removal Services"
            paragraphs={[
              "Serving homes and businesses across the region, we provide comprehensive junk removal solutions tailored to your needs. Our experienced team handles everything from single-item pickups to full property cleanouts with efficiency and care.",
              "We're committed to responsible disposal practices, ensuring that your unwanted items are recycled, donated, or disposed of in an environmentally friendly way whenever possible.",
            ]}
            bullets={[
              "Same-day and next-day service available in most areas",
              "No hidden fees - upfront pricing before we start",
              "Fully licensed, insured, and background-checked team",
              "Eco-friendly disposal with 60%+ recycling rate",
              "Residential, commercial, and construction cleanouts",
            ]}
            theme={landingPageData.themeData}
          />

          {serviceAreas.length > 0 && (
            <ServiceAreasSection
              serviceAreas={serviceAreas}
              themeData={landingPageData.themeData}
            />
          )}

          {landingPageData.content.faq && (
            <FAQSection
              title={
                landingPageData.content.faq.title ||
                "Frequently Asked Questions"
              }
              description={
                landingPageData.content.faq.description ||
                "Get answers to common questions about our services"
              }
              questions={landingPageData.content.faq.questions || []}
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
