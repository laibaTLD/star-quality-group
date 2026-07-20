
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
  title: 'Professional Drywall Installation & Repair Services Washington DC | Star Quality Group',
  description: 'Transform your space with Star Quality Group, Washington DC\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/dry-wall/service-areas/washington-dc',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Professional Drywall Installation & Repair Services Washington DC | Star Quality Group',
    description: 'Transform your space with Star Quality Group, Washington DC\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Drywall Installation & Repair Services Washington DC | Star Quality Group',
    description: 'Transform your space with Star Quality Group, Washington DC\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Residential or Commercial Home Painting Contractor Washington DC",
  areaLabel: "Washington, DC",
  description:
    "Star Quality Group delivers premium interior and exterior solutions for Washington DC homes and offices. As your trusted local painting agency, our skilled contractors provide certified residential and commercial services, ensuring flawless, professional results that redefine your space with lasting quality.",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable experts prioritize your satisfaction, providing professional guidance and a welcoming, stress-free service experience.",
    },
    {
      title: "Quick Response",
      description:
        "We value your time, delivering rapid project assessments and immediate feedback to keep your timeline moving.",
    },
    {
      title: "24/7 Support",
      description:
        "Access reliable assistance any time of day, ensuring your painting projects remain seamless and fully supported.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Award-Winning Local Painting Services Contractor or Agency in Washington DC?",
  paragraphs: [
    "When you need a certified and licensed painting services provider in Washington DC, excellence and reliability are non-negotiable. Your property—whether a historic residence or a modern commercial workspace—demands a finish that reflects quality and durability. Star Quality Group stands as the premier choice for property owners who refuse to compromise, offering a seamless blend of artistic precision and robust project management tailored to the District’s unique architectural landscape. As a local and affordable painting services contractor or company, we specialize in delivering high-caliber results without the premium price tag. Our mission is to provide accessible, top-tier craftsmanship that enhances your environment and protects your investment.We utilize industry-leading materials and advanced application techniques to ensure every interior room and exterior facade looks stunning for years to come. From meticulous surface preparation to the final walkthrough, our team maintains a clean and professional job site. By partnering with our award-winning agency, you gain access to a dedicated team that understands the local climate and aesthetic trends of DC. We prioritize clear communication and transparent scheduling to minimize disruption to your daily routine or business operations. Whether you are refreshing a single office or revitalizing an entire residential estate, our commitment to 100% customer satisfaction remains our top priority. Trust our experts to bring your vision to life with vibrant color and flawless execution.",
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
  workingScope: "DC",
  contactEmail: "ashuromeo4@gmail.com",
  agencyName: "Star Quality Group",
};

const FAQ_SECTION = {
  title: "Painting FAQs",
  description:
    "Get detailed answers about our professional painting services in Washington, DC.",
  questions: [
    {
      question: "Are your painting services certified and licensed?",
      answer:
        "Yes, Star Quality Group is a fully certified and licensed painting services provider in Washington DC. We adhere to all local regulations and safety standards, ensuring your residential or commercial project is handled by qualified, insured, and background-checked professionals.",
    },
    {
      question: "Do you offer both residential and commercial painting?",
      answer:
        "Absolutely. We specialize in high-caliber finishes for homes, historic row houses, and modern office buildings. Our versatile team manages everything from delicate interior bedroom repaints to large-scale exterior commercial masonry projects with the same level of precision and care.",
    },
    {
      question: "What is included in your bricks paint services?",
      answer:
        "Our specialized bricks paint services include deep cleaning, surface repairs, and the application of premium, breathable mineral coatings. These advanced materials protect your masonry from moisture damage while providing a fresh, updated aesthetic that withstands the local DC climate.",
    },
    {
      question: "How quickly can I expect a response and estimate?",
      answer:
        "We pride ourselves on being a reliable & trusted painting services contractor. Our team provides quick responses to all inquiries, often delivering detailed project assessments and transparent estimates within 24 to 48 hours to keep your renovation on schedule.",
    },
    {
      question: "Do you serve areas outside of Washington DC?",
      answer:
        "Yes, our expert crews provide local and affordable services throughout the region. We regularly complete projects in Bowie MD, College Park MD, Largo MD, and Upper Marlboro MD, ensuring high-quality craftsmanship is available across the entire metro area.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Maryland & DC Area",
  areas: [
    {
      city: "Washington",
      region: "DC",
      description: "Certified & Professional #1 Drywall Installation Services - Complete drywall installation and repair services throughout Washington DC"
    },
    {
      city: "Bowie",
      region: "MD",
      description: "Premium drywall installation and repair services in Bowie"
    },
    {
      city: "Upper Marlboro",
      region: "MD", 
      description: "Expert drywall repair and finishing services in Upper Marlboro"
    },
    {
      city: "Largo",
      region: "MD",
      description: "Complete drywall solutions for Largo residents and businesses"
    },
    {
      city: "College Park",
      region: "MD",
      description: "Specialized drywall installation and repair services for College Park properties"
    },
  ]
};

const CTA_DATA = {
  heading:
    "Star Quality Group - Your Trusted Premier #1 Home Bricks Wall Painting Services Contractor, Company, Agency Washington DC",
  subHeading: "",
  description:
    "Experience the gold standard with Star Quality Group, Washington DC’s top-rated agency for specialized masonry finishes. Our certified contractors provide premium bricks paint services, using advanced, breathable coatings that protect and beautify. Trust our local experts for durable, high-caliber results that elevate your home’s aesthetic.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/11.jpg",
    alt: "Professional drywall installation and repair services in Washington, DC",
  },
  overlayText:
    "Star Quality Group delivers expert drywall solutions designed specifically for Washington DC residents and businesses. From residential drywall installation to commercial repairs, our professional crew ensures safe, efficient, and high-quality craftsmanship every time.",
};


const SERVICES_CONTENT = {
  title: "Our Services",
  description: `At Star Quality Group, we provide a comprehensive range of professional solutions designed to protect and beautify your property. From specialized home wall painting services and expert bricks paint services to durable deck and fence painting, our certified team delivers high-caliber interior and exterior finishes for residential and commercial spaces throughout Washington DC.`,
 service:[
  {
    heading:"Expert & Top-Rated Home Wall Painting Services Contractor or Company Washington DC",
    
description:"When it comes to revitalizing your living space, partnering with an expert & top-rated home wall painting services contractor or company in Washington DC makes all the difference. Star Quality Group has built a reputation for excellence by combining technical precision with a deep understanding of the District’s unique architectural heritage. Whether you are looking to refresh a single room or perform a complete interior overhaul, our team provides the high-caliber craftsmanship required to enhance your home’s aesthetic and market value.As a local and affordable home painting services contractor or company, we believe that premium quality shouldn't come with an inaccessible price tag. Our home wall painting services include comprehensive surface preparation—addressing cracks, sanding imperfections, and applying high-grade primers—to ensure a flawless, long-lasting finish. We use low-VOC, eco-friendly paints that are safe for your family while providing vibrant, durable color. From sophisticated accent walls to full-scale residential repaints, our award-winning approach ensures that every project is completed on time, within budget, and to your exact specifications.",
 },
{
 heading:"Exterior and Interior Home or Offices Buildings Paint or Bricks Walls Painting Services Provider",

description:"Maintaining the curb appeal and structural integrity of a property requires a specialized exterior and interior home or offices buildings paint or bricks walls painting services provider. Star Quality Group offers versatile solutions designed to withstand the Mid-Atlantic climate while keeping your commercial or residential property looking its best. Our expertise extends beyond traditional siding; we are a leading bricks paint services specialist, utilizing breathable, mineral-based coatings that protect masonry without trapping damaging moisture inside your walls.In addition to masonry, we provide expert deck and fence painting services to preserve your outdoor wooden structures against rot and UV damage. As a comprehensive exterior and interior home or offices paint services provider or agency in Washington DC, we manage large-scale projects for corporate offices and retail spaces with minimal disruption to your daily operations. Our systematic approach includes thorough power washing, meticulous masking of non-paint surfaces, and a multi-coat application process that guarantees uniform coverage. Trust our professional crew to deliver a sharp, professional image for your business or a stunning new look for your home’s exterior."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Walls Painting Services Contractor Washington DC?",
  description: `Elevating the appearance of your property requires the precision of a reliable & trusted certified home painting services contractor or agency. Whether you are managing a historic residence or a modern commercial facility, Star Quality Group offers the specialized expertise necessary to deliver a flawless finish. We understand that the walls of your building are a canvas that reflects your personal style or professional brand, which is why we prioritize high-caliber craftsmanship and meticulous attention to detail in every project we undertake. As a premier painting services provider in the District, our team is equipped to handle the unique challenges of both interior and exterior surfaces.
From high-traffic office corridors to elegant residential living spaces, we utilize premium, durable materials that stand the test of time. Our certified painters follow a rigorous preparation process—including thorough cleaning, sanding, and priming—to ensure that the final coat adheres perfectly and provides vibrant, uniform coverage. By choosing an award-winning local partner, you benefit from a seamless service experience characterized by transparent pricing and on-time project completion. We pride ourselves on maintaining a clean job site and minimizing disruption to your daily routine or business operations. When you are ready to transform your environment with professional color and protection, trust the experts who set the gold standard for excellence across Washington DC.`,
  backgroundImage: {
    src: "/222.jpg",
    alt: "Professional drywall installation and repair services in Washington, DC",
  },
  secondImage: {
    src: "/333.jpg",
    alt: "Expert drywall repair team working in Washington, DC",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local #1 Home or Offices Walls Painting Services Contractor Experts Washington DC",
    description:
      "When you require the gold standard in property transformation, partnering with certified or trusted local #1 home or offices walls painting services contractor experts in Washington DC is essential. Star Quality Group has established itself as the District’s premier choice for both residential and commercial projects, offering a unique blend of artisanal precision and industrial-grade reliability. We recognize that a professional paint job does more than just change a color; it protects your structural investment and creates an environment that inspires both residents and employees alike. As a reliable & trusted wall painting services contractor or agency, we prioritize a rigorous multi-step preparation process that sets us apart from the competition.Our expert crews handle everything from meticulous surface cleaning and drywall patching to the application of high-performance primers. This attention to detail ensures that the final coats of premium, low-VOC paint adhere perfectly, providing a vibrant and durable finish that withstands the high-traffic demands of DC’s busy offices and the elegant standards of its historic homes. Choosing our award-winning team means you benefit from transparent project management and a commitment to on-time completion. We work around your schedule to minimize disruption, maintaining a clean and organized job site from start to finish. Whether you are revitalizing a single executive suite or an entire residential estate, trust the local experts who deliver perfection in every brushstroke.",
    image: "/444.jpg",
    alt: "Professional drywall installation services in Washington, DC",
  },
  row2: {
    heading: "Our Services Areas for Wall Painting Services Contractor",
    description:
      "As a premier regional specialist, Star Quality Group is proud to provide comprehensive interior and exterior solutions across a wide service footprint. We are the leading choice for a professional wall painting services contractor in Washington DC, where we cater to both historic residential row houses and modern commercial office spaces with equal precision. Our commitment to high-caliber craftsmanship extends into Maryland, offering top-rated expertise to homeowners and businesses in Bowie MD. We understand the specific aesthetic and climate-related needs of the region, ensuring that every project—from delicate interior trim to rugged exterior masonry—is handled with the utmost care.In addition to the District, our skilled crews frequently serve the vibrant community of College Park MD, providing efficient, high-quality finishes for high-traffic environments. We also maintain a strong presence in Largo MD, where we are known for our reliable scheduling and meticulous surface preparation. Residents and commercial property managers in Upper Marlboro MD also trust our agency for durable, beautiful results that stand the test of time. By maintaining local teams throughout these key areas, we ensure a quick response and personalized attention for every client. Whether you are refreshing a single room or revitalizing an entire corporate complex, our localized expertise guarantees a seamless experience from the initial consultation to the final walkthrough.",
    image: "/555.jpg",
    alt: "Expert drywall repair and finishing services in Washington, DC",
  },
  row3: {
    heading:
      "Why Choose Star Quality Group for Your Home or Offices Walls Painting Services Contractor Washington DC?",
    description:
      "Choosing the right partner for your property transformation is a decision that impacts both the immediate aesthetic and the long-term value of your investment. Star Quality Group stands out as the premier choice because we combine localized expertise with a commitment to industrial-grade excellence. We understand the specific architectural nuances of the District, from historic masonry to modern drywall, ensuring that every application is technically sound and visually stunning. Our team doesn't just apply paint; we provide a comprehensive service experience that begins with meticulous surface preparation and ends with a flawless, durable finish. As a reliable & trusted painting services contractor or agency, we prioritize transparency and professional integrity.We utilize premium, low-VOC materials that are safe for indoor environments while offering superior resistance to the Mid-Atlantic climate for exterior projects. Our award-winning approach is built on the foundation of clear communication, on-time project completion, and a clean job site policy that minimizes disruption to your daily life or business operations. Whether you are looking to revitalize a corporate headquarters or refresh a residential living room, our certified experts deliver high-caliber results that stand the test of time. Choosing our agency means opting for peace of mind, knowing that your property is in the hands of skilled craftsmen who treat every wall as a priority.",
    image: "/66.jpg",
    alt: "Star Quality Group drywall experts working in Washington, DC",
  },
};


export default async function JunkRemovalPhoenixPage() {
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

