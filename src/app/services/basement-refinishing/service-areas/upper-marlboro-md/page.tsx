
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
  title: 'Hire Now Basement Refinishing & Remodeling Contractor in Lorgo, MD | Star Quality Group',
  description: 'We offer expert & exclusive basement remodeling services with quality workmanship. Call today to schedule your basement repair or refinishing project!',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/basement-refinishing/service-areas/upper-marlboro-md',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Hire Now Basement Refinishing & Remodeling Contractor in Lorgo, MD | Star Quality Group',
    description: 'We offer expert & exclusive basement remodeling services with quality workmanship. Call today to schedule your basement repair or refinishing project!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Now Basement Refinishing & Remodeling Contractor in Lorgo, MD | Star Quality Group',
    description: 'We offer expert & exclusive basement remodeling services with quality workmanship. Call today to schedule your basement repair or refinishing project!',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Residential or Commercial Buildings Basement Finishing Contractor Upper Marlboro MD",
  areaLabel: "Upper Marlboro, MD",
  description:
    "Experience Star Quality Group, the #1 professional basement finishing contractor in Upper Marlboro, MD. From residential retreats to commercial offices, our trusted experts provide reliable refinishing and paint services. Elevate your building with our skilled, certified craftsmanship today.",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our Star Quality Group experts provide personable, professional guidance to ensure your basement project feels seamless.",
    },
    {
      title: "Quick Response",
      description:
        "Expect rapid communication from our Upper Marlboro team. We prioritize your timeline with fast, efficient service.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer 24/7 assistance, providing reliable peace of mind for every residential or commercial basement renovation.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Award-Winning Local Basement Finishing or Repairing Services Contractor or Agency in Upper Marlboro, MD?",
  paragraphs: [
    "Is your basement reaching its full potential, or is it just wasted square footage? At Star Quality Group, we specialize in transforming damp, unfinished areas into stunning, functional spaces. As a premier certified and licensed basement refinishing services provider in Upper Marlboro, MD, we bring award-winning expertise to every residential and commercial project. Whether you need structural repairs or a complete aesthetic overhaul, our team is the professional and skilled basement finishing services contractor you can trust to get the job done right the first time. Finding a local and affordable basement finishing services contractor or company shouldn’t mean compromising on quality. We pride ourselves on delivering high-end results at competitive prices, ensuring that every homeowner and business owner in the region has access to top-tier renovations.From modern home theaters to professional office suites, our residential or commercial buildings basement finishing solutions are tailored to your specific goals. We focus on moisture prevention, high-quality paint services, and durable flooring to ensure your investment lasts for decades. Choosing Star Quality Group means partnering with a trusted and reliable basement refinishing services agency. We handle everything from the initial design to the final inspection, providing a seamless, stress-free experience. Our reputation as a leading local and expert contractor in Upper Marlboro is built on transparency, craftsmanship, and a commitment to excellence. Don't settle for an unfinished basement when you can work with a skilled, professional agency dedicated to elevating your property. Contact us today to see why we are the #1 choice for basement transformations in Maryland.",
  ],
};



const FOOTER_SECTION = {
  footerTitle: "Star Quality Group",
  socialsList: [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
  ],
  originCity: "Upper Marlboro",
  workingScope: "MD",
  contactEmail: "ashuromeo4@gmail.com",
  agencyName: "Star Quality Group",
};

const FAQ_SECTION = {
  title: "Basement Finishing FAQs",
  description:
    "Get detailed answers about our basement finishing and refinishing services in Upper Marlboro, MD.",
  questions: [
    {
      question: "Is Star Quality Group licensed for basement projects in Upper Marlboro?",
      answer:
        "Yes. Star Quality Group is a certified and licensed basement refinishing services provider. Our professional and skilled team adheres to all Maryland building codes, ensuring your residential or commercial project is safe, legal, and completed to the highest standards.",
    },
    {
      question: "How long does a typical basement finishing project take to complete?",
      answer:
        "Timelines vary by scale, but as a reliable & trusted basement finishing services contractor, we prioritize efficiency. Most Upper Marlboro projects are finished within weeks. We provide clear schedules to ensure your residential or commercial renovation stays on track.",
    },
    {
      question: "Do you offer waterproof paint and moisture protection services?",
      answer:
        "Absolutely. We provide specialized basement walls bricks paint services and moisture barriers. As a local and expert agency, we use industrial-grade sealants to prevent mold and dampness, protecting your investment with our reliable and professional finishing techniques.",
    },
    {
      question: "Are your basement finishing services affordable for local homeowners?",
      answer:
        "Yes. We pride ourselves on being a local and affordable basement finishing services contractor or company. We offer competitive pricing and transparent estimates, ensuring Upper Marlboro residents receive top-rated craftsmanship without overextending their budget for high-quality basement renovations.",
    },
    {
      question: "Which areas do you serve outside of Upper Marlboro, MD?",
      answer:
        "Beyond being the #1 Upper Marlboro contractor, our agency serves Bowie, Washington DC, College Park, and Largo. We are a trusted and reliable provider of residential or commercial buildings basement finishing services throughout the entire Maryland and DC region.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Maryland & DC Area",
  areas: [
    {
      city: "Upper Marlboro",
      region: "MD",
      description: "Certified & Professional #1 Basement Finishing Services - Complete basement refinishing and transformation services throughout Upper Marlboro"
    },
    {
      city: "Bowie",
      region: "MD",
      description: "Premium basement finishing and remodeling services in Bowie"
    },
    {
      city: "Largo",
      region: "MD", 
      description: "Expert basement refinishing and waterproofing services in Largo"
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
      city: "Upper Marlboro",
      region: "MD",
      description: "Professional basement remodeling and painting services in Upper Marlboro"
    }
  ]
};

const CTA_DATA = {
  heading:
    "Star Quality Group - Your Trusted Premier No.1 Basement Finishing Services Contractor, Company, Agency Upper Marlboro MD",
  subHeading: "",
  description:
    "As the #1 certified and licensed basement refinishing services provider in Upper Marlboro, MD, Star Quality Group offers affordable basement finishing services. Whether you need residential or commercial buildings basement paint services, our professional and skilled team delivers reliable results.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/1.png",
    alt: "Professional basement finishing and refinishing services in Upper Marlboro, MD",
  },
  overlayText:
    "Star Quality Group delivers expert basement transformation solutions designed specifically for Upper Marlboro residents and businesses. From residential basement refinishing to commercial remodeling projects, our professional crew ensures safe, efficient, and high-quality craftsmanship every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Star Quality Group offers premier basement finishing services tailored for Upper Marlboro, MD. From local and affordable basement floors finishing to expert basement walls bricks paint services, we do it all. Trust our certified and licensed basement refinishing services provider for high-quality residential or commercial buildings renovations.`,
 service:[
  {
    heading:"Expert & Top-Rated Residential Buildings Basement Floor Finishing Services Contractor or Company Upper Marlboro, MD",
    
description:"Maximize your home’s livable square footage by partnering with an expert & top-rated residential buildings basement floor finishing services contractor or company in Upper Marlboro, MD. At Star Quality Group, we understand that your floors are the foundation of a healthy home. As a leading local and affordable basement floors finishing services contractor or company, we specialize in moisture-mitigation systems and high-traffic coatings that prevent the damp, cold feel typical of unfinished levels. Our basement finishing services transform cracked concrete into elegant, durable surfaces that reflect your personal style and enhance property value.Investing in high-quality basement wall or floor finishing services ensures your renovation is built to last. We are a trusted and reliable basement refinishing services agency known for our meticulous attention to detail and use of industrial-grade materials. Our professional and skilled team provides customized solutions, from decorative epoxy to insulated sub-flooring, tailored specifically for Maryland’s climate. Whether you are upgrading a playroom or a home theater, our certified and licensed experts deliver the most comprehensive basement finishing results in Upper Marlboro, merging aesthetics with unmatched structural integrity.",
 },
{
 heading:"Hire Now a Basement Walls Paint Refinishing Services Provider",

description:"Eliminate dark, uninviting spaces—hire now a basement walls paint refinishing services provider to give your property a professional glow. Star Quality Group stands out as the premier exterior and interior basement paint or refinishing services provider or agency in Upper Marlboro, MD. We specialize in technical applications, including basement walls bricks paint services that use breathable, waterproof membranes to seal out humidity while allowing your masonry to breathe. Our residential or commercial buildings basement paint services are designed to brighten your space while providing a critical barrier against mold and mildew.As a local and expert team, we provide affordable basement finishing services without compromising on the quality of our pigments or sealants. Our agency understands that painting a basement requires more than just a brush; it requires a professional and skilled understanding of hydrostatic pressure and surface preparation. By choosing our certified and licensed basement refinishing services, you ensure a flawless, long-lasting finish that can withstand the unique challenges of below-grade environments. Trust our Upper Marlboro craftsmen to deliver a vibrant, clean, and modern look that makes your basement feel like an integral part of your home."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Buildings Basement Finishing Services Contractor Upper Marlboro MD?",
  description: `If you are searching for a skilled and top rated residential or commercial buildings basement finishing services contractor in Upper Marlboro, MD, you have found the region’s premier experts. Star Quality Group specializes in converting cold, underutilized spaces into vibrant, functional environments that add significant value to your property. Whether you are a homeowner dreaming of a cozy family room or a business owner needing professional office space, our team delivers high-end craftsmanship tailored to your specific needs. As a reliable & trusted certified basement finishing services contractor or agency, we understand that a basement renovation requires more than just aesthetic updates; it requires a deep understanding of moisture control and structural integrity.
Our professional and skilled craftsmen use industry-leading materials to ensure every project is durable, energy-efficient, and safe. From the initial framing and insulation to the final basement paint services, we manage every detail with precision and care. Choosing Star Quality Group means partnering with a local and expert team that prioritizes customer satisfaction and transparent pricing. We take pride in being a certified and licensed basement refinishing services provider that Upper Marlboro residents rely on for timely project completion. Don’t settle for a dark, unfinished lower level when you can work with an award-winning agency dedicated to excellence. Contact us today to transform your building with the #1 residential or commercial basement experts in Maryland.`,
  backgroundImage: {
    src: "/2.jpg",
    alt: "Professional basement finishing and remodeling services in Upper Marlboro, MD",
  },
  secondImage: {
    src: "/3.jpg",
    alt: "Expert basement refinishing team working on residential project in Upper Marlboro, MD",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Residential Buildings Basement Walls Finishing Services Contractor Experts Upper Marlboro MD",
    description:
      "Are you ready to turn your damp, dark basement into a bright and inviting living space? Finding a certified or trusted local no.1 residential buildings basement walls finishing services contractor experts Upper Marlboro MD is the most critical step in protecting your home’s structural integrity. At Star Quality Group, we specialize in professional wall transformations that go beyond aesthetics. We provide high-performance sealing, framing, and insulation solutions designed specifically for the unique climate challenges of Maryland. As a reliable & trusted basement walls finishing services contractor or agency, we understand that basement walls require specialized care to prevent moisture buildup and mold. Our professional and skilled team utilizes industry-leading moisture barriers and premium basement walls bricks paint services to ensure your renovation remains beautiful for decades.Whether you are looking for a sleek, modern drywall finish or a rugged, waterproof masonry look, Star Quality Group delivers award-winning results tailored to your vision. Choosing the right local and expert team means you get a certified and licensed basement refinishing services provider that prioritizes safety and durability. We pride ourselves on being an affordable basement finishing services contractor that never compromises on quality. From the initial inspection to the final coat of paint, our agency ensures every inch of your residential building is handled with precision. Don't let your basement remain unfinished—contact the #1 experts in Upper Marlboro today to start your transformation.",
    image: "/4.jpg",
    alt: "Professional basement wall finishing and painting services in Upper Marlboro, MD",
  },
  row2: {
    heading: "Our Service Areas for Basement Finishing Services Contractor",
    description:
      "As the region’s premier basement finishing services contractor, Star Quality Group is proud to offer top-tier renovation solutions across a wide geographic range to meet the growing demands of our clients. While we are widely recognized as the leading experts in Upper Marlboro, MD, our reach extends to several key surrounding communities where high-quality craftsmanship is essential. We provide comprehensive residential and commercial transformations in Bowie, MD, ensuring homeowners there receive the same award-winning attention to detail we are known for. Our professional and skilled team is also frequently deployed in Washington, DC, handling complex urban basement repairs and luxury refinishing projects with ease.Furthermore, we serve as a trusted and reliable partner in College Park, MD, helping property owners maximize their building's square footage and market value. For those located in Largo, MD, our certified and licensed basement refinishing services provider team offers rapid response times and local and affordable solutions tailored to the specific structural needs of the area. No matter which of these locations you call home, our agency is dedicated to delivering excellence, moisture-proof durability, and stunning aesthetic results for every level of your property.",
    image: "/5.webp",
    alt: "Expert basement floor finishing and remodeling services in Maryland",
  },
  row3: {
    heading:
      "Why Choose Star Quality Group for Your Residential or Commercial Basement Finishing Services Contractor Upper Marlboro MD?",
    description:
      "When it comes to property investment, the company you hire determines the longevity of your renovation. Star Quality Group is the definitive choice for those seeking a reliable & trusted basement finishing services contractor or agency that never compromises on integrity. We understand that a basement is a unique environment prone to moisture and temperature fluctuations. Our team doesn't just provide surface-level updates; we offer deep-rooted solutions including advanced waterproofing and structural reinforcement. Whether you are aiming for a sophisticated residential lounge or a high-functioning commercial suite in Upper Marlboro, MD, we bring the specialized tools and no-shortcuts attitude required for success.Choosing Star Quality Group means you are partnering with a certified and licensed basement refinishing services provider that values your time and budget. Our professional and skilled craftsmen are experts in local building codes, ensuring that your project is not only beautiful but fully compliant and safe. We take pride in being a local and expert agency that offers affordable basement finishing services without sacrificing the premium quality your building deserves. From the initial consultation to the final walkthrough, our commitment to excellence makes us the top-rated residential or commercial basement experts. Experience the peace of mind that comes with hiring a trusted industry leader dedicated to perfection.",
    image: "/6.jpg",
    alt: "Star Quality Group basement finishing team working on residential project in Upper Marlboro, MD",
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
