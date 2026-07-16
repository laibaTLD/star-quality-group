
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
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";
import { Metadata } from "next";

// Page metadata
export const metadata: Metadata = {
  title: 'Certified Basement Refinishing Service Provider in College Park, MD',
  description: 'We offer professional basement refinishing and remodeling services in College Park, MD. Our professionals offer exclusive & reliable services in home renovation solutions in College Park, MD.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/basement-refinishing/service-areas/college-park-md',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Certified Basement Refinishing Service Provider in College Park, MD',
    description: 'We offer professional basement refinishing and remodeling services in College Park, MD. Our professionals offer exclusive & reliable services in home renovation solutions in College Park, MD.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certified Basement Refinishing Service Provider in College Park, MD',
    description: 'We offer professional basement refinishing and remodeling services in College Park, MD. Our professionals offer exclusive & reliable services in home renovation solutions in College Park, MD.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Residential or Commercial Buildings Basement Finishing Contractor College Park MD",
  areaLabel: "College Park, MD",
  description:
    "Looking for the #1 basement finishing contractor in College Park, MD? Star Quality Group delivers expert residential and commercial refinishing and paint services. Trust our professional team for reliable, high-quality transformations. Get your free estimate today!",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Star Quality Group offers a personal touch with professional, approachable experts dedicated to your basement goals.",
    },
    {
      title: "Quick Response",
      description:
        "We prioritize your time with rapid consultations and fast estimates for all basement refinishing needs today.",
    },
    {
      title: "24/7 Support",
      description:
        "Our reliable specialists offer 24/7 assistance, ensuring your residential or commercial project stays on track.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Award-Winning Local Basement Finishing or Repairing Services Contractor or Agency in College Park, MD?",
  paragraphs: [
    "If you are searching for the #1 residential or commercial buildings basement finishing contractor, look no more than Star Quality Group. Your basement is more than just a storage area; it is an untapped asset that can significantly increase your property value. Whether you need to repair structural wear or completely reimagine your layout, choosing a local and affordable basement finishing services contractor or company is the key to a stress-free transformation. As a certified and licensed basement refinishing services provider in College Park, MD, we pride ourselves on delivering elite craftsmanship tailored to your specific goals. From modern home offices and cozy guest suites to professional commercial builds, our team handles every detail with precision.We combine high-end materials with skilled labor to ensure your project isn't just beautiful, but built to last. At Star Quality Group, we understand that trust is earned through transparency and results. That is why we are recognized as a trusted and reliable basement refinishing services agency. Our local experts navigate the specific building codes of College Park, ensuring your renovation is fully compliant and expertly finished. Don't settle for subpar work when you can partner with a professional and skilled trusted basement finishing services contractor. Let us turn your damp, dark basement into a vibrant, functional space you’ll be proud to show off."
  ],
};



const FOOTER_SECTION = {
  footerTitle: "Star Quality Group",
  socialsList: [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
  ],
  originCity: "College Park",
  workingScope: "MD",
  contactEmail: "ashuromeo4@gmail.com",
  agencyName: "Star Quality Group",
};

const FAQ_SECTION = {
  title: "Basement Finishing FAQs",
  description:
    "Get detailed answers about our basement finishing and refinishing services in College Park, MD.",
  questions: [
    {
      question: "Is Star Quality Group a licensed basement finishing services provider?",
      answer:
        "Yes, we are a certified and licensed basement refinishing services provider. As the #1 residential or commercial buildings basement finishing contractor, we ensure all projects in College Park meet strict safety codes, providing a reliable & trusted basement finishing services contractor or agency.",
    },
    {
      question: "Do you offer affordable basement finishing services in College Park?",
      answer:
        "Absolutely. We pride ourselves on being a local and affordable basement finishing services contractor or company. We provide high-quality basement wall or floor finishing services that fit your budget while maintaining the standards of a professional and skilled trusted basement finishing services contractor.",
    },
    {
      question: "Can you handle moisture issues before finishing my basement walls?",
      answer:
        "As a reliable & trusted basement finishing services contractor or agency, we prioritize waterproofing. Our professional and skilled trusted basement finishing services contractor team installs moisture barriers during basement wall or floor finishing services to ensure a dry, healthy environment.",
    },
    {
      question: "Do you provide specialized basement walls bricks paint services?",
      answer:
        "Yes! We are an exterior and interior basement paint or refinishing services provider or agency specializing in basement walls bricks paint services. We use premium, anti-microbial coatings to transform masonry, making us a professional and skilled trusted basement finishing services contractor.",
    },
    {
      question: "Which areas do you serve for basement finishing services?",
      answer:
        "We are a local and affordable basement finishing services contractor or company serving College Park, MD, Bowie, Largo, Upper Marlboro, and Washington DC. We are the reliable & trusted certified basement finishing services contractor or agency for the entire region.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Maryland & DC Area",
  areas: [
    {
      city: "Bowie",
      region: "MD",
      description: "Certified & Professional #1 Basement Finishing Services - Complete basement refinishing and transformation services throughout Bowie"
    },
    {
      city: "Annapolis",
      region: "MD",
      description: "Premium basement finishing and remodeling services in Annapolis"
    },
    {
      city: "Baltimore",
      region: "MD", 
      description: "Expert basement refinishing and waterproofing services in Baltimore"
    },
    {
      city: "Washington",
      region: "DC",
      description: "Complete basement finishing solutions for Washington DC residents and businesses"
    },
    {
      city: "College Park",
      region: "MD",
      description: "Specialized basement wall and floor finishing services for College Park properties"
    },
    {
      city: "Rockville",
      region: "MD",
      description: "Professional basement remodeling and painting services in Rockville"
    }
  ]
};

const CTA_DATA = {
  heading:
    "Star Quality Group - Your Trusted Premier No.1 Basement Finishing Services Contractor, Company, Agency College Park MD",
  subHeading: "",
  description:
    "Star Quality Group is the #1 residential or commercial buildings basement finishing contractor in College Park, MD. As a certified and licensed basement refinishing services provider, we deliver local and affordable basement finishing services with unmatched professional skill and reliability.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/1.jpg",
    alt: "Professional basement finishing and refinishing services in College Park, MD",
  },
  overlayText:
    "Star Quality Group delivers expert basement transformation solutions designed specifically for College Park residents and businesses. From residential basement refinishing to commercial remodeling projects, our professional crew ensures safe, efficient, and high-quality craftsmanship every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Star Quality Group offers the #1 residential or commercial buildings basement finishing contractor expertise in College Park, MD. From local and affordable basement floors finishing services to specialized basement walls bricks paint services, we provide comprehensive basement finishing services. Trust our certified and licensed basement refinishing services provider team today.`,
 service:[
  {
    heading:"Expert & Top Rated Residential Buildings Basement Floor Finishing Services Contractor or Company College Park MD",
    
description:"Remodel your property’s value with the expert & top rated residential buildings basement floor finishing services contractor or company in College Park, MD. At Star Quality Group, we understand that a high-quality floor is the foundation of any successful renovation. As a local and affordable basement floors finishing services contractor or company, we specialize in moisture-resistant solutions that combat the unique humidity challenges of Maryland basements.Whether you require durable epoxy coatings, polished concrete, or luxury vinyl planking, our basement finishing services ensure a seamless, level, and aesthetic result. We provide comprehensive basement wall or floor finishing services that transform cold, damp concrete into a warm, inviting living space. By hiring a certified and licensed basement refinishing services provider, you guarantee that your project meets all local safety codes while utilizing premium materials. Trust our skilled team to deliver a finish that is as functional as it is beautiful, making us the most trusted or reliable basement refinishing services agency in the region.",
 },
{
 heading:"Hire Now a Basement Walls Paint Refinishing Services Provider",

description:"Ready to brighten up your underground space? Hire now a basement walls paint refinishing services provider that understands the science behind masonry and moisture. Star Quality Group is the leading exterior and interior basement paint or refinishing services provider or agency in College Park, MD. We don't just apply a coat of paint; we provide deep-cleaning and sealing services, including specialized basement walls bricks paint services to give your exposed masonry a modern, clean, and waterproofed aesthetic.Our professional and skilled trusted basement finishing services contractor team uses high-grade, anti-microbial paints designed specifically for below-grade environments. Whether you are looking for a sleek, contemporary look for a home office or a rugged, industrial finish for a commercial space, we are the local and affordable basement finishing services contractor or company that delivers. From detailed trim work to expansive basement finishing services, we ensure your walls are vibrant, durable, and protected against the elements. Contact us today to secure your transformation!"
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top Rated Residential or Commercial Buildings Basement Finishing Services Contractor College Park MD?",
  description: `Finding the right partner for your home or business renovation is essential for a lasting investment. If you are searching for a skilled and top rated residential or commercial buildings basement finishing contractor, Star Quality Group is the premier choice in the region. We specialize in converting underutilized spaces into high-value assets, whether you need a sophisticated home theater, a modern guest suite, or a professional corporate environment. As a reliable & trusted certified basement finishing services contractor or agency, we bring years of localized experience to every project in College Park. At Star Quality Group, we understand that "finishing" a basement involves more than just aesthetics; it requires expert moisture control, structural integrity, and adherence to strict local building codes.
Our team functions as a certified and licensed basement refinishing services provider, ensuring that every wall, floor, and ceiling meets the highest safety standards. We pride ourselves on being a local and affordable basement finishing services contractor or company that never compromises on quality. By choosing a professional and skilled trusted basement finishing services contractor, you gain peace of mind knowing your project is in expert hands. We utilize premium materials and the latest industry techniques to deliver results that are both beautiful and durable. Don't leave your property to chance—partner with the #1 residential or commercial buildings basement finishing contractor today.`,
  backgroundImage: {
    src: "/2.jpg",
    alt: "Professional basement finishing and remodeling services in College Park, MD",
  },
  secondImage: {
    src: "/3.jpg",
    alt: "Expert basement refinishing team working on residential project in College Park, MD",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Residential Buildings Basement Walls Finishing Services Contractor Experts College Park MD",
    description:
      "When it comes to the structural integrity and aesthetic appeal of your home, you need the certified or trusted local no.1 residential buildings basement walls finishing services contractor experts in College Park, MD. At Star Quality Group, we understand that basement walls are the most critical component of any renovation. They must be more than just beautiful—ready to withstand moisture, provide insulation, and offer a seamless finish. As a reliable & trusted basement walls finishing services contractor or agency, we specialize in high-performance solutions that turn cold, gray concrete into warm, inviting living spaces. Whether you are dealing with exposed brick, concrete blocks, or standard drywall, Star Quality Group utilizes industry-leading moisture barriers and premium materials to ensure a long-lasting result.We are proud to be a certified and licensed basement refinishing services provider, giving homeowners peace of mind that their investment is protected against the unique environmental challenges of Maryland. By choosing a professional and skilled trusted basement finishing services contractor, you ensure that your residential or commercial building receives the attention to detail it deserves. From modern smooth finishes to specialized basement walls bricks paint services, we deliver the high-end craftsmanship expected of the #1 residential or commercial buildings basement finishing contractor. Don't settle for average results—hire the local experts who prioritize quality and customer satisfaction above all else.",
    image: "/4.jpg",
    alt: "Professional basement wall finishing and painting services in College Park, MD",
  },
  row2: {
    heading: "Our Service Areas for Basement Finishing Services Contractor",
    description:
      "As the #1 residential or commercial buildings basement finishing contractor, Star Quality Group is dedicated to providing high-quality renovations throughout the DMV area. We are the local and affordable basement finishing services contractor or company that homeowners in College Park, MD, trust for everything from minor repairs to complete transformations. Our service area extends across the region, making us a reliable & trusted certified basement finishing services contractor or agency for residents in Bowie, MD, and Largo, MD. We specialize in navigating the unique moisture challenges and building codes of Upper Marlboro, MD, ensuring every project is durable and code-compliant.If you are looking for an exterior and interior basement paint or refinishing services provider or agency in Washington, DC, our team is ready to help you maximize your square footage. We take pride in being a professional and skilled trusted basement finishing services contractor that understands the local landscape, whether you're in the heart of the city or the suburbs of Prince George's County. From basement wall or floor finishing services to full-scale build-outs, Star Quality Group is the certified and licensed basement refinishing services provider committed to elevating your home’s value and comfort across all our service locations.",
    image: "/5.webp",
    alt: "Expert basement floor finishing and remodeling services in Maryland",
  },
  row3: {
    heading:
      "Why Choose Star Quality Group for Your Residential or Commercial Basement Finishing Services Contractor College Park MD?",
    description:
      "Partnering with Star Quality Group means choosing the #1 residential or commercial buildings basement finishing contractor dedicated to excellence and durability. We understand that your property is a significant investment, which is why we operate as a reliable & trusted basement finishing services contractor or agency in College Park, MD. Our team brings a unique blend of local expertise and high-end craftsmanship to every project, ensuring that your renovation isn't just a cosmetic upgrade, but a structural success. Whether you are looking for a local and affordable basement finishing services contractor or company or a high-end commercial build-out, we provide the specialized skills necessary to maximize your square footage.At Star Quality Group, we set ourselves apart as a certified and licensed basement refinishing services provider. We manage every technical detail, from advanced moisture mitigation to basement wall or floor finishing services, ensuring your new living area remains dry and comfortable for years to come. Our professional and skilled trusted basement finishing services contractor team handles all necessary permits and inspections, providing a stress-free experience from start to finish. By combining specialized basement walls bricks paint services with modern design, we guarantee a finish that exceeds expectations. Trust the experts who prioritize your vision and your budget.",
    image: "/6.jpg",
    alt: "Star Quality Group basement finishing team working on residential project in College Park, MD",
  },
};


async function getLandingPageData(): Promise<LandingPageData> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    throw new Error(
      "Missing required environment variables: NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_ID"
    );
  }

  const landingPageData = await fetchLandingPageForSSG(templateId, id);

  if (!landingPageData) {
    throw new Error(
      `Landing page not found: templateId=${templateId}, id=${id}`
    );
  }

  return landingPageData;
}

export default async function JunkRemovalPhoenixPage() {
  const landingPageData = await getLandingPageData();  const servicesImages = landingPageData.images?.filter((img) => img.slotName.includes("services")) || [];

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
