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
        "Local & Experienced Drywall Repair & Installation Contractor Across Maryland",
      description:
        "We offer expert drywall services including installation, repair, and finishing services with quality workmanship. Call today to schedule your drywall repair or finishing project!",
    };
  }

  const { businessName, themeData } = landingPageData;
  const title =
    "Local & Experienced Drywall Repair & Installation Contractor Across Maryland";
  const description =
    "We offer expert drywall services including installation, repair, and finishing services with quality workmanship. Call today to schedule your drywall repair or finishing project!";

  return {
    title,
    description,
    keywords:
      "drywall, drywall installation, drywall repair, drywall finishing, wall repair, Maryland, DC",
    authors: [{ name: businessName }],
    creator: businessName,
    publisher: businessName,
    robots: "index,follow",
    openGraph: {
      title,
      description,
      url: "https://www.starqualitygroup.com/services/dry-wall",
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
      canonical: "https://www.starqualitygroup.com/services/dry-wall",
    },
    other: {
      "theme-color": themeData?.primaryColor,
    },
  };
}

export default async function DryWallPage() {
  const landingPageData = await getLandingPageDataForPage();

  return (
    <ServiceDetailLayout
      landingPageData={landingPageData}
      hero={{
        title: "Professional Dry Wall Installation",
        subtitle: "EXPERT DRYWALL SERVICES ACROSS MD & DC",
        description:
          "Flawless drywall installation and repair for perfect walls and ceilings. Our precision craftsmanship ensures smooth, durable finishes.",
        ctaLabel: "View Our Process",
      }}
      intro={{
        headingBefore: "Creating",
        accentWord: "Perfect",
        headingAfter: "Wall Surfaces",
        body: "Our expert drywall installation and repair services deliver flawless finishes for walls and ceilings. From new construction to repairs, we ensure smooth, durable surfaces ready for painting.",
        solutionsTitle: "Our Core Solutions",
        solutions: [
          "New Installation",
          "Crack Repair",
          "Taping & Finishing",
          "Texture Matching",
        ],
      }}
      values={[
        {
          title: "Flawless Finishing",
          description:
            "Perfectly smooth walls and ceilings with seamless joints invisible to the eye.",
        },
        {
          title: "Expert Repairs",
          description:
            "Seamless patching and crack repair that makes damage completely disappear.",
        },
        {
          title: "Clean Installation",
          description:
            "Dust-controlled process with meticulous cleanup, leaving your space ready for paint.",
        },
      ]}
      faqDescription="Everything you need to know about drywall installation and repair."
    />
  );
}
