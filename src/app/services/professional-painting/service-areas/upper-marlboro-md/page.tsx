
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
  title: 'Professional Painting Services Upper Marlboro MD | Star Quality Group',
  description: 'Transform your space with Star Quality Group, Upper Marlboro\'s premier professional painting contractor. We offer expert residential and commercial painting services for homes and offices. Trust your professional team for flawless results.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/professional-painting/service-areas/upper-marlboro-md',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Professional Painting Services Largo MD | Star Quality Group',
    description: 'Transform your space with Star Quality Group, Largo\'s premier professional painting contractor. We offer expert residential and commercial painting services for homes and offices. Trust our professional team for flawless results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Painting Services Largo MD | Star Quality Group',
    description: 'Transform your space with Star Quality Group, Largo\'s premier professional painting contractor. We offer expert residential and commercial painting services for homes and offices. Trust our professional team for flawless results.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Residential or Commercial Home Painting Contractor Upper Marlboro MD",
  areaLabel: "Upper Marlboro, MD",
  description:
    "Star Quality Group stands as the local & expert home or offices paint services contractor you can rely on. As a trusted or reliable painting services agency in Upper Marlboro, MD, we provide professional residential or commercial results.",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable experts prioritize your comfort, offering personalized painting solutions with a warm, professional touch.",
    },
    {
      title: "Quick Response",
      description:
        "We value your time, providing rapid project estimates and immediate answers to all your painting inquiries.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team remains available 24/7 to address any urgent residential or commercial needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Award Local Painting Services Contractor or Agency Upper Marlboro MD?",
  paragraphs: [
    "Searching for a certified and licensed painting services provider in Upper Marlboro, MD, means finding a team that respects your property and your vision. At Star Quality Group, we bridge the gap between high-end craftsmanship and local accessibility. Whether you are a homeowner aiming to boost curb appeal or a business owner refreshing a commercial suite, our skilled team delivers results that reflect true professionalism. We take pride in our reputation as a top-tier certified and licensed painting services provider in Upper Marlboro, MD, ensuring every project meets rigorous industry standards. As a local and affordable painting services contractor or company, we understand the specific needs of our community. We don't believe in one-size-fits-all solutions; instead, we offer tailored strategies that fit your specific budget and timeline.From thorough surface preparation to the final precision stroke, Star Quality Group focuses on longevity and aesthetic excellence. Choosing a local and affordable painting services contractor or company allows you to receive personalized attention that national chains often overlook, ensuring your space feels unique and professionally finished. Our mission is to provide seamless transformations that minimize disruption to your daily life. Being a premier certified and licensed painting services provider in Upper Marlboro, MD, we utilize premium materials and eco-friendly options to protect your environment. As your local and affordable painting services contractor or company, we are committed to transparency, reliability, and stunning visual outcomes. Let us handle the heavy lifting while you enjoy a refreshed, vibrant space that truly stands out in the neighborhood.",
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
  title: "Painting FAQs",
  description:
    "Get detailed answers about our professional painting services in Upper Marlboro, MD.",
  questions: [
    {
      question: "What services does Star Quality Group offer?",
      answer:
        "As a reliable & trusted painting services contractor or agency, we provide comprehensive home wall painting services and bricks paint services. Our team also specializes in deck and fence painting for both residential and commercial properties throughout Maryland.",
    },
    {
      question: "Do you provide painting services for offices?",
      answer:
        "Yes, we are a leading exterior and interior home or offices paint services provider or agency in Upper Marlboro, MD. We handle large-scale commercial buildings and small office suites, ensuring a professional finish that enhances your business environment.",
    },
    {
      question: "Is Star Quality Group a licensed painting company?",
      answer:
        "Absolutely. We are a certified and licensed painting services provider in Upper Marlboro, MD. Our team follows strict safety protocols and industry standards to deliver high-quality, durable results that protect your property investment for years to come.",
    },
    {
      question: "Do you offer affordable painting solutions?",
      answer:
        "As a local and affordable home painting services contractor or company, we provide competitive pricing without compromising on quality. We offer transparent estimates tailored to your specific budget, ensuring you receive premium craftsmanship at a very fair price.",
    },
    {
      question: " Which areas do you serve for painting?",
      answer:
        "We are a premier wall painting services contractor serving Upper Marlboro, MD, Bowie, MD, and Largo, MD. Our professional team also travels to College Park, MD, and Washington, DC, to provide expert residential and commercial painting solutions.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Maryland & DC Area",
  areas: [
    {
      city: "Upper Marlboro",
      region: "MD",
      description: "Professional painting services throughout Upper Marlboro"
    },
    {
      city: "Bowie",
      region: "MD",
      description: "Premium painting services in Bowie"
    },
    {
      city: "Largo",
      region: "MD",
      description: "Expert painting services in Largo"
    },
    {
      city: "Washington",
      region: "DC",
      description: "Complete painting solutions for Washington DC residents and businesses"
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
    "Star Quality Group - Your Trusted Premier No1 Home Bricks Wall Painting Services Contractor, Company, Agency Upper Marlboro MD",
  subHeading: "",
  description:
    "Enhance your property with Star Quality Group, the leading local and affordable home painting services contractor or company. We specialize in professional bricks paint services and home wall painting services, serving as the premier exterior and interior home or offices paint services provider or agency in Upper Marlboro, MD.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/111.jpg",
    alt: "Professional painting services in Upper Marlboro, MD",
  },
  overlayText:
    "Star Quality Group delivers expert painting solutions designed specifically for Upper Marlboro residents and businesses. From residential interior painting to commercial exterior painting, our professional crew ensures safe, efficient, and high-quality craftsmanship every time.",
};

const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Star Quality Group is your local and affordable home painting services contractor or company, providing specialized home wall painting services for every room. From detailed bricks paint services to professional deck and fence painting, we are the premier exterior and interior home or offices paint services provider or agency in Upper Marlboro, MD.`,
  service: [
    {
      heading: "Expert & Top Rated Home Wall Painting Services Contractor or Company Upper Marlboro MD",
      description: "When it comes to transforming your living space, Star Quality Group stands out as the premier expert & top rated home wall painting services contractor or company in Upper Marlboro, MD. We understand that a fresh coat of paint is more than just a color change; it is an investment in your property’s value and comfort. As a local and affordable home painting services contractor or company, we specialize in high-quality home wall painting services that cater to your unique style.Our team utilizes premium, low-VOC paints and meticulous preparation techniques to ensure a smooth, durable finish that resists fading and wear. Whether you are looking to create a calming oasis in your bedroom or a vibrant, welcoming atmosphere in your living room, our professional painters deliver precision in every stroke. Trust our local experts to provide a seamless, stress-free experience from the initial color consultation to the final cleanup.",
    },
    {
      heading: "Exterior and Interior Home or Offices Buildings Paint or Bricks Walls Painting Services Provider",
      description: "Maintaining the structural integrity and curb appeal of your property requires a versatile exterior and interior home or offices paint services provider or agency in Upper Marlboro, MD. Star Quality Group offers comprehensive solutions for diverse surfaces, including specialized bricks paint services that breathe new life into masonry while providing essential weather protection. Our expertise extends beyond walls to include professional deck and fence painting services, ensuring your outdoor wooden structures are shielded from the elements and look stunning year-round.As a dedicated exterior and interior home or offices paint services provider or agency in Upper Marlboro, MD, we handle everything from high-rise commercial buildings to cozy residential bungalows. We prioritize durability and aesthetic excellence, using weather-resistant coatings for exteriors and elegant finishes for interiors. Let our skilled team enhance your entire property, from the foundation bricks to the backyard fence, with unmatched professional care.",
    }
  ]
};

const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top Rated Residential or Commercial Walls Painting Services Contractor Upper Marlboro MD?",
  description: `Elevating the appearance of your property requires a team that understands the local landscape and the specific needs of Maryland architecture. At Star Quality Group, we have established ourselves as the experts for those seeking a skilled and top-rated residential or commercial walls painting services contractor in Upper Marlboro, MD. Whether you are managing a bustling retail space or refreshing your family home, our commitment to excellence ensures a seamless transition from old, faded surfaces to vibrant, professionally finished walls. We prioritize surface preparation and use high-grade materials to guarantee that our work doesn't just look good today but lasts for years to come.
Choosing a reliable & trusted certified home painting services contractor or agency means investing in peace of mind. Our team is fully equipped to handle projects of all sizes, from single-room residential updates to large-scale commercial exterior repaints. As a premier provider in the region, Star Quality Group focuses on precision, cleanliness, and efficiency. We know that your time is valuable, which is why we streamline our process to minimize disruption to your daily routine or business operations. When you work with a reliable & trusted certified home painting services contractor or agency, you benefit from a level of craftsmanship that only comes with years of dedicated experience. Let us help you revitalize your property with the care and professionalism it deserves.`,
  backgroundImage: {
    src: "/222.jpg",
    alt: "Professional painting services in Upper Marlboro, MD",
  },
  secondImage: {
    src: "/333.jpg",
    alt: "Expert painting team working in Upper Marlboro, MD",
  },
};

const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Walls Painting Services Contractor Experts Upper Marlboro MD",
    description:
      "When searching for the right team to handle your property’s transformation, it is essential to partner with certified or trusted local no.1 home or offices walls painting services contractor experts in Upper Marlboro, MD. At Star Quality Group, we understand that your walls are the backdrop of your daily life and professional success. Our team is dedicated to providing high-caliber finishes that combine durability with aesthetic appeal. Whether you are aiming to revitalize a modern office space or a traditional family residence, we bring the expertise and precision necessary to ensure a flawless application every time. We use premium materials designed to withstand the local climate, ensuring your investment remains vibrant for years.Choosing a reliable & trusted wall painting services contractor or agency means more than just getting a new color on the walls; it means receiving a comprehensive service that includes meticulous surface preparation and post-project cleanup. Star Quality Group prides itself on maintaining a clean and organized job site, minimizing disruption to your home or business operations. Our reputation as certified or trusted local no1 home or offices walls painting services contractor experts in Upper Marlboro, MD, is built on transparency, fair pricing, and an unwavering commitment to customer satisfaction. As a reliable & trusted wall painting services contractor or agency, we stand behind our work, offering the peace of mind that comes from knowing your property is in the hands of seasoned professionals.",
    image: "/444.jpg",
    alt: "Expert painting services in Upper Marlboro, MD",
  },
   row2: {
    heading:
      "Our Services Areas for Wall Painting Services Contractor",
    description:
      "At Star Quality Group, we are proud to be the premier choice for property owners seeking a professional wall painting services contractor across the region. Our dedicated team provides extensive coverage, ensuring that high-quality craftsmanship is available in Upper Marlboro, MD, and the surrounding communities. Whether you are looking to refresh a historic residence or update a modern office suite, we bring our expertise directly to your doorstep. We have established a strong reputation in Bowie, MD, delivering vibrant interior and exterior finishes that enhance curb appeal and interior comfort alike. Our reach extends throughout the metropolitan area, offering reliable solutions for those located in Washington, DC, where we handle diverse architectural styles with precision and care.In addition to these hubs, we serve as a trusted partner for residential and commercial projects in College Park, MD, providing tailored painting strategies that meet the unique needs of this vibrant area. Property managers and homeowners in Largo, MD, also rely on our skilled painters for everything from detailed trim work to full-scale building repaints. By maintaining a wide service radius, Star Quality Group ensures that top-tier painting expertise is never out of reach. We combine local knowledge with industry-leading techniques to provide a seamless experience for every client. No matter where you are located within these key areas, you can count on us for punctuality, professionalism, and a flawless finish that stands the test of time.",
    image: "/555.jpg",
    alt: "Star Quality Group painting experts working in Upper Marlboro, MD",
  },
  row3: {
    heading:
      "Why Choose Star Quality Group for Your Home or Offices Walls Painting Services Contractor Upper Marlboro MD?",
    description:
      "Deciding on the right professional to handle your property’s interior or exterior is crucial for achieving a high-end look. Star Quality Group stands out as the premier choice because we combine technical mastery with a customer-first approach. As a reliable & trusted painting services contractor or agency, we understand the architectural nuances of Maryland properties. Whether you are refreshing a professional workspace to boost employee morale or updating your family home’s curb appeal, we bring the same level of precision and dedication to every project. Our mission is to provide more than just a coat of paint; we provide a durable, beautiful finish that enhances the value of your investment.When you partner with Star Quality Group, you are choosing a reliable & trusted painting services contractor or agency that prioritizes your schedule and budget. We utilize industry-leading techniques and premium, eco-friendly materials to ensure longevity and safety for your environment. Our team of experts is trained to handle complex surfaces, from intricate trim work to expansive commercial masonry, ensuring a uniform and professional appearance. By choosing us as your home or offices walls painting services contractor in Upper Marlboro, MD, you gain the peace of mind that comes with a seamless, clean, and efficient renovation process. Let us transform your vision into a vibrant reality with the professionalism you deserve.",
    image: "/666.jpeg",
    alt: "Star Quality Group painting experts working in Upper Marlboro, MD",
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

export default async function ProfessionalPaintingUpperMarlboroPage() {
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
