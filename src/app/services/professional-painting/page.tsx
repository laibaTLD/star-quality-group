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
        "Hire Now Professional Painting Service Contractor in Maryland | Star Quality Group",
      description:
        "Looking for reliable painting contractors in Maryland? We offer high quality interior & exterior painting services at affordable prices. Transform your home or office with Star Quality Group's expert painting solutions.",
    };
  }

  const { businessName, themeData } = landingPageData;
  const title =
    "Hire Now Professional Painting Service Contractor in Maryland | Star Quality Group";
  const description =
    "Looking for reliable painting contractors in Maryland? We offer high quality interior & exterior painting services at affordable prices. Transform your home or office with Star Quality Group's expert painting solutions.";

  return {
    title,
    description,
    keywords:
      "painting, professional painting, interior painting, exterior painting, painting contractors, Maryland, DC",
    authors: [{ name: businessName }],
    creator: businessName,
    publisher: businessName,
    robots: "index,follow",
    openGraph: {
      title,
      description,
      url: "https://www.starqualitygroup.com/services/professional-painting",
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
        "https://www.starqualitygroup.com/services/professional-painting",
    },
    other: {
      "theme-color": themeData?.primaryColor,
    },
  };
}

export default async function ProfessionalPaintingPage() {
  const landingPageData = await getLandingPageDataForPage();

  return (
    <ServiceDetailLayout
      landingPageData={landingPageData}
      hero={{
        title: "Professional Painting Services",
        subtitle: "EXPERT PAINTING ACROSS MD & DC",
        description:
          "Transform your space with our expert painting services. From interiors to exteriors, we deliver flawless finishes that last.",
        ctaLabel: "View Our Work",
      }}
      intro={{
        headingBefore: "Creating",
        accentWord: "Stunning",
        headingAfter: "Spaces",
        body: "Our professional painting services deliver exceptional results for residential and commercial properties. From meticulous prep work to flawless finishes, we transform spaces with precision and artistry.",
        solutionsTitle: "Our Painting Services",
        solutions: [
          "Interior Painting",
          "Exterior Painting",
          "Cabinet Finishing",
          "Color Consultation",
        ],
      }}
      values={[
        {
          title: "Premium Materials",
          description:
            "We use only the highest quality paints and materials for lasting, beautiful results.",
        },
        {
          title: "Meticulous Prep",
          description:
            "Thorough preparation ensures flawless finishes that stand the test of time.",
        },
        {
          title: "Expert Color Matching",
          description:
            "Perfect color coordination and custom matching for your unique vision.",
        },
      ]}
      faqDescription="Everything you need to know about our professional painting services."
    />
  );
}
