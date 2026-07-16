import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getLandingPageData } from "@/lib/data";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 60;

async function getLandingPageDataForPage(): Promise<LandingPageData> {
  const landingPageData = await getLandingPageData();
  if (!landingPageData) notFound();
  return landingPageData;
}

export async function generateMetadata(): Promise<Metadata> {
  const landingPageData = await getLandingPageData();
  if (!landingPageData) {
    return {
      title:
        "Professional Basement Refinishing & Remodeling Contractor in Maryland | Star Quality Group",
      description:
        "Looking for basement refinishing services in Maryland? Star Quality Group offers basement refinishing, basement finishing, and remodeling services for residential properties across Maryland.",
    };
  }

  const { businessName, themeData } = landingPageData;
  const title =
    "Professional Basement Refinishing & Remodeling Contractor in Maryland | Star Quality Group";
  const description =
    "Looking for basement refinishing services in Maryland? Star Quality Group offers basement refinishing, basement finishing, and remodeling services for residential properties across Maryland.";

  return {
    title,
    description,
    keywords:
      "basement refinishing, basement renovation, luxury basement, home improvement, Maryland, DC",
    authors: [{ name: businessName }],
    creator: businessName,
    publisher: businessName,
    robots: "index,follow",
    openGraph: {
      title,
      description,
      url: "https://www.starqualitygroup.com/services/basement-refinishing",
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
      canonical:
        "https://www.starqualitygroup.com/services/basement-refinishing",
    },
    other: {
      "theme-color": themeData?.primaryColor,
    },
  };
}

export default async function BasementRefinishingPage() {
  const landingPageData = await getLandingPageDataForPage();

  return (
    <ServiceDetailLayout
      landingPageData={landingPageData}
      hero={{
        title: "Professional Basement Refinishing",
        subtitle: "PREMIUM RENOVATIONS ACROSS MD & DC",
        description:
          "Transform your underutilized space into a high-end living area with our expert craftsmanship.",
        ctaLabel: "View Our Process",
      }}
      intro={{
        headingBefore: "Crafting",
        accentWord: "Exceptional",
        headingAfter: "Lower Levels",
        body: "Our comprehensive basement refinishing services handle everything from initial finishing to complete luxury renovations. We bring precision and quality to every square inch of your home.",
        solutionsTitle: "Our Core Solutions",
        solutions: [
          "Basement Remodeling",
          "Waterproofing",
          "Flooring Systems",
          "Custom Wall Finishing",
        ],
      }}
      values={[
        {
          title: "Superior Quality",
          description:
            "Artisan-level finishing from floor to ceiling, using premium materials only.",
        },
        {
          title: "Advanced Moisture Control",
          description:
            "Military-grade waterproofing to ensure your luxury space stays dry forever.",
        },
        {
          title: "Turnkey Process",
          description:
            "From architectural drawings to final paint, we handle the entire lifecycle.",
        },
      ]}
      faqDescription="Everything you need to know about your renovation."
    />
  );
}
