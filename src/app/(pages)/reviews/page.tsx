import Layout from "@/components/Layout";
import Banner from "../../../components/Banner";
import FooterSection from "@/sections/FooterSection";
import ReviewsTestimonialsSection from "./sections/ReviewsTestimonialsSection";
import { getLandingPageData } from "@/lib/data";
import { LandingPageData } from "@/types/template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Server-side data fetching for SSG
async function getLandingPageDataForPage(): Promise<LandingPageData> {
  const landingPageData = await getLandingPageData();

  if (!landingPageData) {
    notFound();
  }

  return landingPageData;
}

// Generate metadata for Reviews page
export async function generateMetadata(): Promise<Metadata> {
  const landingPageData = await getLandingPageData();
  if (!landingPageData) {
    return {
      title: "Reviews | Star Quality Group",
      description: "Read what our customers say about our professional home improvement services including basement refinishing, drywall installation, and painting.",
    };
  }
  
  const { businessName, themeData } = landingPageData;
  
  return {
    title: `Reviews | ${businessName}`,
    description: `Read what our customers say about ${businessName}'s professional home improvement services including basement refinishing, drywall installation, and painting.`,
    keywords: 'reviews, testimonials, customer feedback, home improvement, basement refinishing, drywall, painting',
    authors: [{ name: businessName }],
    creator: businessName,
    publisher: businessName,
    robots: 'index,follow',
    
    // Open Graph
    openGraph: {
      title: `Reviews | ${businessName}`,
      description: `Read what our customers say about ${businessName}'s professional home improvement services.`,
      url: 'https://www.starqualitygroup.com/reviews',
      siteName: businessName,
      locale: 'en_US',
      type: 'website',
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: `Reviews | ${businessName}`,
      description: `Read what our customers say about ${businessName}'s professional home improvement services.`,
    },
    
    // Canonical URL
    alternates: {
      canonical: 'https://www.starqualitygroup.com/reviews',
    },
    
    // Additional metadata
    other: {
      'theme-color': themeData?.primaryColor,
    },
  };
}

export default async function ReviewsPage() {
  const landingPageData = await getLandingPageDataForPage();

  return (
    <Layout
      title={landingPageData.seoData.title}
      description={landingPageData.seoData.description}
      theme={landingPageData.themeData}
      seoData={landingPageData.seoData}
      landingPageData={landingPageData}
    >
      <Banner title="Reviews" slotName="reviews-hero" />
      <main>
        {/* Pass empty reviews to avoid DB fetch; section will fall back to context testimonials */}
        <ReviewsTestimonialsSection reviews={[]} />
        <FooterSection 
          footerTitle={landingPageData.seoData.title}
          socialsList={(landingPageData.businessData.socialLinks || []).map(s => ({ name: s.platform, url: s.url }))}
          originCity={landingPageData.businessData.address?.city || ''}
          workingScope={landingPageData.businessData.serviceAreas && landingPageData.businessData.serviceAreas.length
            ? `serving ${Array.from(new Set(landingPageData.businessData.serviceAreas.map(a => a.region))).filter(Boolean).join(', ')}`
            : ''}
          contactEmail={landingPageData.businessData.email}
          agencyName={landingPageData.businessName}
          currentYear={new Date().getFullYear()}
          themeData={landingPageData.themeData}
          businessName={landingPageData.businessName}
          businessData={landingPageData.businessData}
        />
      </main>
    </Layout>
  );
}
