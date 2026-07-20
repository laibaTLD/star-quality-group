
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import ServiceAreaHeroSection from "@/sections/ServiceAreaHeroSection";
import ServiceAreaIntroSection from "@/sections/ServiceAreaIntroSection";
import ServiceAreaDetailSection from "@/sections/serviceAreaDetailSection";
import ServiceAreasSectionRedesigned from "@/sections/ServiceAreasSection";
import ServiceAreaServicesSection from "@/sections/ServiceAreaServicesSection";
import CTASection from "@/sections/CTASection";
import ServiceOverlayCardSection from "@/sections/ServiceOverlayCardSection";
import FAQSection from "@/sections/FAQSection";
import FooterSection from "@/sections/FooterSection";
import { getRequiredLandingPageData } from "@/lib/getRequiredLandingPageData";
import { Metadata } from "next";

// Page metadata
export const metadata: Metadata = {
  title: 'Professional Painting Services Washington DC | Star Quality Group',
  description: 'Transform your space with Star Quality Group, Washington\'s premier professional painting contractor. We offer expert residential and commercial painting services for homes and offices. Trust your professional team for flawless results.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/professional-painting/service-areas/washington-dc',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Professional Painting Services Washington DC | Star Quality Group',
    description: 'Transform your space with Star Quality Group, Washington\'s premier professional painting contractor. We offer expert residential and commercial painting services for homes and offices. Trust our professional team for flawless results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Painting Services Washington DC | Star Quality Group',
    description: 'Transform your space with Star Quality Group, Washington\'s premier professional painting contractor. We offer expert residential and commercial painting services for homes and offices. Trust your professional team for flawless results.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Residential or Commercial Home Painting Contractor Washington DC",
  areaLabel: "Washington, DC",
  description:
    "Choose Star Quality Group, your local and expert painting agency. As a #1 residential or commercial painting contractor in Washington, DC, we provide professional, trusted, and reliable home or office paint services. Experience skilled craftsmanship with our dedicated local team today.",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our professional and skilled painting agency team provides helpful, expert service with a friendly, local touch.",
    },
    {
      title: "Quick Response",
      description:
        "Star Quality Group ensures a quick response for all residential or commercial painting inquiries in Washington, DC.",
    },
    {
      title: "24/7 Support",
      description:
        "Experience trusted, reliable support anytime for your professional home or office painting services and project needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Award-Winning Local Painting Services Contractor or Agency in Washington, DC?",
  paragraphs: [
    "Finding a certified and licensed painting services provider in Washington, DC, is essential for achieving a high-quality finish that lasts. Whether you are refreshing a single room or revitalizing an entire exterior, Star Quality Group offers the expertise and dedication required to transform your property. As a premier local and affordable painting services contractor or company, we pride ourselves on delivering exceptional results that combine aesthetic appeal with long-term durability. Choosing a professional agency ensures that every detail—from surface preparation to the final coat—is handled with precision. Our team understands the local climate and architectural styles of the DC area, allowing us to provide tailored recommendations for both residential and commercial projects.We utilize premium materials and proven techniques to ensure your home or office stands out for all the right reasons. At Star Quality Group, we believe that top-tier craftsmanship should be accessible. That is why we operate as a local and affordable painting services contractor or company, providing transparent pricing without compromising on excellence. From the initial consultation to the final inspection, our goal is to exceed your expectations through clear communication and tidy workspaces. If you are searching for a certified and licensed painting services provider in Washington, DC, look no more for reliable, expert solutions.",
  ],
};



const FOOTER_SECTION = {
  footerTitle: "Star Quality Group",
  socialsList: [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
  ],
  originCity: "Washington",
  workingScope: "MD",
  contactEmail: "ashuromeo4@gmail.com",
  agencyName: "Star Quality Group",
};

const FAQ_SECTION = {
  title: "Painting FAQs",
  description:
    "Get detailed answers about our professional painting services in Washington, DC.",
  questions: [
    {
      question: "What painting services do you offer in Washington, DC?",
      answer:
        "Star Quality Group provides comprehensive residential and commercial solutions. Our experts specialize in interior and exterior home wall painting services, professional bricks paint services, and high-quality deck and fence painting to protect and beautify your property throughout the local area.",
    },
    {
      question: "Are your painting contractors certified and insured?",
      answer:
        "Yes, we are a certified and licensed painting services provider in Washington, DC. Our team consists of professional and skilled experts dedicated to delivering reliable and trusted results while ensuring full safety and insurance coverage for every project we undertake.",
    },
    {
      question: " How do you ensure a high-quality finish?",
      answer:
        "As a reliable & trusted painting services contractor or agency, we prioritize meticulous surface preparation. We use premium materials and advanced techniques for all home or office walls, ensuring smooth coverage, clean lines, and a durable, long-lasting vibrant finish.",
    },
    {
      question: "Do you provide painting services for commercial buildings?",
      answer:
        "Absolutely. We are a premier residential or commercial painting contractor. Our agency handles offices, retail spaces, and large-scale buildings in Washington, DC, providing efficient, professional results that minimize disruption to your business operations while enhancing your professional corporate image.",
    },
    {
      question: "How can I get an estimate for my project?",
      answer:
        "Getting started is easy! Contact Star Quality Group, your local and affordable painting services contractor. We provide detailed, transparent estimates for all home or office projects in Washington, DC, helping you plan your renovation with confidence and expert guidance.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Maryland & DC Area",
  areas: [
    {
      city: "Washington",
      region: "DC",
      description: "Professional painting services throughout Washington DC"
    },
    {
      city: "Upper Marlboro",
      region: "MD",
      description: "Premium painting services in Upper Marlboro"
    },
    {
      city: "Bowie",
      region: "MD",
      description: "Expert painting services in Bowie"
    },
    {
      city: "Largo",
      region: "MD",
      description: "Complete painting solutions for Largo residents and businesses"
    },
    {
      city: "College Park",
      region: "MD",
      description: "Specialized painting services for College Park properties"
    }
  ]
};

const CTA_DATA = {
  heading:
    "Star Quality Group - Your Trusted Premier No1 Home Bricks Wall Painting Services Contractor, Company, Agency Washington DC",
  subHeading: "",
  description:
    "Transform your property with Star Quality Group, #1 painting contractor in Washington, DC. We provide expert, trusted home bricks wall painting services for residential and commercial clients. Our skilled agency ensures local and affordable, high-quality finishes that last.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/111.jpg",
    alt: "Professional painting services in Washington, DC",
  },
  overlayText:
    "Star Quality Group delivers expert painting solutions designed specifically for Washington residents and businesses. From residential interior painting to commercial exterior painting, our professional crew ensures safe, efficient, and high-quality craftsmanship every time.",
};

const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Star Quality Group is your premier local and affordable home painting services contractor or company. We provide expert exterior and interior home or offices paint services provider or agency Washington DC. From high-quality home wall painting services to specialized bricks paint services and deck and fence painting services, we ensure excellence.`,
  service: [
    {
      heading: "Expert & Top-Rated Home Wall Painting Services Contractor or Company Washington DC",
      description: "When you need a flawless finish, choosing an expert & top-rated home wall painting services contractor or company in Washington, DC, is the first step toward a beautiful home. Star Quality Group specializes in transforming living spaces with precision and care. As a local and affordable home painting services contractor or company, we understand that a fresh coat of paint is the most cost-effective way to increase your property's value. Our professional team provides comprehensive home wall painting services, ranging from meticulous surface preparation and priming to the final, perfect topcoat.We take pride in being a trusted local and affordable home painting services contractor or company that never cuts corners. Whether you are looking to brighten a dark hallway or create a sophisticated accent wall, our experts use premium, low-VOC paints for a healthier indoor environment. By choosing a dedicated home wall painting services provider, you ensure clean lines, even coverage, and a stress-free experience from start to finish.",
    },
    {
      heading: "Exterior and Interior Home or Offices Buildings Paint or Bricks Walls Painting Services Provider",
      description: "Maintaining a professional image requires a versatile exterior and interior home or offices paint services provider or agency in Washington, DC. At Star Quality Group, we extend our expertise beyond standard drywall to include specialized bricks paint services and masonry coatings. Painting brick requires specific breathable products and technical skill to ensure the surface remains protected while looking modern. Additionally, we offer expert deck and fence painting services to shield your outdoor wooden structures from the local weather, preventing rot and UV damage over time.As a leading exterior and interior home or offices paint services provider or agency in Washington, DC, we cater to both residential homeowners and commercial property managers. We recognize that business environments require durable finishes that can withstand high traffic. From refreshing a weathered storefront to applying intricate interior office finishes, we are the local and affordable home painting services contractor or company you can rely on. Let us revitalize your property with our high-quality bricks paint services and comprehensive painting solutions.",
    }
  ]
};

const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Walls Painting Services Contractor Washington DC?",
  description: `If you are looking for a skilled and top-rated residential or commercial walls painting services contractor Washington DC, your search ends with Star Quality Group. We understand that a professional paint job is about more than just aesthetics; it is an investment in your property's longevity and value. As a reliable & trusted certified home painting services contractor or agency, we bring years of expertise to every project, ensuring that every brushstroke meets the highest industry standards for quality and precision. At Star Quality Group, we cater to a diverse range of needs, offering specialized solutions for both homeowners and business owners. Whether you need to refresh a professional office building or revitalize your family home, our team provides the technical skill required for a flawless finish.
Being a reliable & trusted certified home painting services contractor or agency means we prioritize your satisfaction through transparent communication, on-time project completion, and a clean workspace. We utilize premium materials and advanced techniques to ensure that your walls look vibrant and remain protected against daily wear and tear. From detailed interior work to durable exterior coatings, our commitment to excellence is unmatched. Don't settle for mediocre results when you can work with a premier local expert. Contact us today to see why we are the preferred choice for those seeking a skilled and top-rated residential or commercial walls painting services contractor in Washington, DC.`,
  backgroundImage: {
    src: "/222.jpg",
    alt: "Professional painting services in Washington, DC",
  },
  secondImage: {
    src: "/333.jpg",
    alt: "Expert painting team working in Washington, DC",
  },
};

const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Walls Painting Services Contractor Experts Washington DC",
    description:
      "Securing a certified or trusted local no1 home or offices walls painting services contractor expert in Washington, DC, is the most effective way to ensure your property remains a standout in the neighborhood. At Star Quality Group, we understand that every structure, whether it is a modern office building or a classic family residence, requires a specialized approach. Our team of professionals brings years of technical expertise to every project, focusing on meticulous surface preparation and the use of premium, long-lasting materials that withstand the local climate. When you work with a reliable & trusted wall painting services contractor or agency, you gain peace of mind knowing that your investment is protected. We pride ourselves on being an agency that values transparency, providing clear timelines and detailed estimates that eliminate any guesswork. From refreshing professional workspace interiors to revitalizing residential exteriors, our experts deliver a flawless finish that enhances both the aesthetic appeal and the market value of your property. Choosing Star Quality Group means partnering with a reliable & trusted wall painting services contractor or agency dedicated to superior craftsmanship. We are committed to minimizing disruption to your daily operations or home life while maintaining a clean, organized workspace. Don't settle for anything less than a certified or trusted local No. 1 home or offices walls painting services contractor expert for your next project in Washington, DC.",
    image: "/444.jpg",
    alt: "Expert painting services in Washington, DC",
  },
   row2: {
    heading:
      "Our Services Areas for Wall Painting Services Contractor",
    description:
      "We proudly serve as your premier local expert, providing top-tier craftsmanship across a wide region to meet all your residential and commercial needs. Our primary service location is Washington, DC, but our dedicated team of professionals extends their reach to ensure that high-quality painting solutions are accessible throughout the surrounding communities. We frequently handle projects in Maryland, bringing modern color palettes and protective coatings to both historic and contemporary properties. Our mobile crews are also active in College Park, MD, where we specialize in refreshing vibrant student housing and professional office spaces alike. Additionally, we are the best provider for residents in Upper Marlboro, MD, Bowie, MD, and Largo, MD, offering everything from detailed interior wall painting to specialized exterior brick and masonry services. No matter where you are located within these key areas, our commitment remains the same: delivering reliable, affordable, and expert results that enhance the beauty and value of your home or business. Trust us to be your local partner for a flawless finish across the entire Maryland and DC metropolitan area.",
    image: "/555.jpg",
    alt: "Star Quality Group painting experts working in Washington, DC",
  },
  row3: {
    heading:
      "Why Choose Star Quality Group for Your Home or Offices Walls Painting Services Contractor Washington, DC?",
    description:
      "Choosing the right professional to handle your property is a decision that impacts both the beauty and value of your investment. When you choose Star Quality Group, you are partnering with a reliable & trusted painting services contractor or agency that prioritizes precision and customer satisfaction above all else. We understand that your home or office is a reflection of your standards, which is why our team of experts uses only premium-grade materials and industry-leading techniques to ensure a flawless, long-lasting finish on every surface. What sets Star Quality Group apart is our commitment to a stress-free experience. As a local leader in Washington, DC, we provide comprehensive project management that includes meticulous surface preparation, expert color consultation, and a thorough final cleanup. Whether you are refreshing a professional commercial building or modernizing a family residence, our status as a reliable & trusted painting services contractor or agency means we arrive on time, stay within budget, and respect your space. We combine technical expertise with a passion for craftsmanship, ensuring that your walls remain vibrant and protected against the elements for years to come.",
    image: "/666.jpeg",
    alt: "Star Quality Group painting experts working in Washington, DC",
  },
};


export default async function ProfessionalPaintingWashingtonDCPage() {
  const landingPageData = await getRequiredLandingPageData();  const servicesImages = landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

  return (
    <Layout
      title={`${SERVICE_DATA.title} in ${SERVICE_DATA.areaLabel}`}
      description={
        landingPageData.seoData.description ||
        `${SERVICE_DATA.title} services in ${SERVICE_DATA.areaLabel} for residential and commercial properties.`
      }
      theme={landingPageData.themeData}
    >
      <Navbar />
      
      <ServiceAreaHeroSection
        serviceName={SERVICE_DATA.title}
        areaLabel={SERVICE_DATA.areaLabel}
        heading={SERVICE_DATA.title}
        subheading={SERVICE_DATA.subheading}
        description={SERVICE_DATA.description}
        images={landingPageData.images || []}
        theme={landingPageData.themeData}
        bullets={SERVICE_DATA.bullets}
      />
      <ServiceAreaIntroSection
        title={INTRO_SECTION.title}
        paragraphs={INTRO_SECTION.paragraphs}
        theme={landingPageData.themeData}
      />
      <ServiceAreaServicesSection
        title={SERVICES_CONTENT.title}
        description={SERVICES_CONTENT.description}
        services={SERVICES_CONTENT.service}
        theme={landingPageData.themeData}
        images={servicesImages}
      />
      <CTASection
        data={CTA_DATA}
        theme={landingPageData.themeData}
      />
      <ServiceOverlayCardSection
        heading={OVERLAY_CARD_SECTION.heading}
        description={OVERLAY_CARD_SECTION.description}
        backgroundImage={OVERLAY_CARD_SECTION.backgroundImage}
        secondImage={OVERLAY_CARD_SECTION.secondImage}
        theme={landingPageData.themeData}
      />
      <ServiceAreaDetailSection
        theme={landingPageData.themeData}
        row1={{
          heading: SERVICE_DETAIL_SECTION.row1.heading,
          description: SERVICE_DETAIL_SECTION.row1.description
        }}
        row1Image={{
          src: SERVICE_DETAIL_SECTION.row1.image,
          alt: SERVICE_DETAIL_SECTION.row1.alt
        }}
        row2={{
          heading: SERVICE_DETAIL_SECTION.row2.heading,
          description: SERVICE_DETAIL_SECTION.row2.description
        }}
        row2Image={{
          src: SERVICE_DETAIL_SECTION.row2.image,
          alt: SERVICE_DETAIL_SECTION.row2.alt
        }}
        row3={SERVICE_DETAIL_SECTION.row3 ? {
          heading: SERVICE_DETAIL_SECTION.row3.heading,
          description: SERVICE_DETAIL_SECTION.row3.description
        } : undefined}
        row3Image={SERVICE_DETAIL_SECTION.row3 ? {
          src: SERVICE_DETAIL_SECTION.row3.image,
          alt: SERVICE_DETAIL_SECTION.row3.alt
        } : undefined}
      />
      <ServiceAreasSectionRedesigned />
      <FAQSection
        title={FAQ_SECTION.title}
        description={FAQ_SECTION.description}
        questions={FAQ_SECTION.questions}
        themeData={landingPageData.themeData}
      />
      <FooterSection
        footerTitle={FOOTER_SECTION.footerTitle}
        socialsList={FOOTER_SECTION.socialsList}
        originCity={FOOTER_SECTION.originCity}
        workingScope={FOOTER_SECTION.workingScope}
        contactEmail={FOOTER_SECTION.contactEmail}
        agencyName={FOOTER_SECTION.agencyName}
        themeData={landingPageData.themeData}
        businessName={landingPageData.businessName}
        businessData={landingPageData.businessData}
      />
    </Layout>
  );
}
