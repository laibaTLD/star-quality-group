
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
  title: 'Professional Painting Services Largo MD | Star Quality Group',
  description: 'Transform your space with Star Quality Group, Largo\'s premier professional painting contractor. We offer expert residential and commercial painting services for homes and offices. Trust our professional team for flawless results.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/professional-painting/service-areas/largo-md',
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
  title: "Certified & Professional #1 Residential or Commercial Home Painting Contractor Largo MD",
  areaLabel: "Largo, MD",
  description:
    "As the premier residential or commercial home painting contractor, Star Quality Group provides local & expert home or offices paint services. Our trusted or reliable painting services agency delivers professional and skilled results, ensuring your property stands out with a flawless, high-quality finish.",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable experts prioritize your comfort, offering personalized guidance and a warm, professional service experience.",
    },
    {
      title: "Quick Response",
      description:
        "We value your time, providing rapid feedback and efficient solutions to keep your projects moving.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team remains available around the clock, ensuring you have constant assistance whenever needed.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Award-Winning Local Painting Services Contractor or Agency in Largo, MD?",
  paragraphs: [
    "Finding a certified and licensed painting services provider in Largo, MD, is the most effective way to ensure your property remains a standout in the neighborhood. At Star Quality Group, we specialize in high-impact transformations that combine structural protection with modern aesthetics. We understand that a truly professional finish requires more than just a brush; it demands rigorous surface preparation, moisture checks, and the application of premium-grade coatings. As a premier certified and licensed painting services provider in Largo, MD, we bring an award-winning standard of excellence to every residential and commercial project we touch.Navigating the search for a local and affordable painting services contractor or company can be challenging, but we simplify the process by offering transparent pricing and elite craftsmanship. We focus on delivering maximum value, ensuring that your investment translates into a durable, vibrant finish that resists fading and wear. Our team is locally based, allowing us to provide rapid scheduling and a personalized touch that larger, impersonal corporations cannot match. Whether you are aiming to boost your home’s resale value or create a more inviting atmosphere for your clients, our local and affordable painting services contractor or company has the expertise to make it happen.",
  ],
};



const FOOTER_SECTION = {
  footerTitle: "Star Quality Group",
  socialsList: [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
  ],
  originCity: "Largo",
  workingScope: "MD",
  contactEmail: "ashuromeo4@gmail.com",
  agencyName: "Star Quality Group",
};

const FAQ_SECTION = {
  title: "Painting FAQs",
  description:
    "Get detailed answers about our professional painting services in Largo, MD.",
  questions: [
    {
      question: "What services does Star Quality Group offer?",
      answer:
        "As a leading exterior and interior home or offices paint services provider or agency in Largo, MD, we provide comprehensive solutions. This includes professional home wall painting services, specialized bricks paint services, and durable deck and fence painting services.",
    },
    {
      question: "Are you a licensed painting services provider?",
      answer:
        "Yes, we are a certified and licensed painting services provider in Largo, MD. Our team adheres to strict industry standards, ensuring that every residential or commercial project is handled with the highest level of safety, professionalism, and technical expertise.",
    },
    {
      question: "How do you ensure a high-quality finish?",
      answer:
        "Our process involves meticulous preparation. As a reliable & trusted wall painting services contractor or agency, we focus on cleaning, sanding, and priming surfaces. We use premium, eco-friendly materials to ensure a vibrant, long-lasting, and flawless result every time.",
    },
    {
      question: "Do you offer affordable painting solutions?",
      answer:
        "Absolutely. We pride ourselves on being a local and affordable home painting services contractor or company. We provide transparent, competitive pricing and efficient project management, allowing you to achieve high-end, award-winning results without exceeding your specific renovation budget.",
    },
    {
      question: "What areas do you currently serve?",
      answer:
        "Beyond being the top wall painting services contractor in Largo, MD, we provide expert services across the region. Our service network includes Bowie, MD, Washington, DC, College Park, MD, and Upper Marlboro, MD, for all property types.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Maryland & DC Area",
  areas: [
    {
      city: "Largo",
      region: "MD",
      description: "Professional painting services throughout Largo"
    },
    {
      city: "Bowie",
      region: "MD",
      description: "Premium painting services in Bowie"
    },
    {
      city: "Upper Marlboro",
      region: "MD",
      description: "Expert painting services in Upper Marlboro"
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
    "Star Quality Group - Your Trusted Premier No.1 Home Bricks Wall Painting Services Contractor, Company, Agency Largo MD",
  subHeading: "",
  description:
    "Elevate your property with Star Quality Group, the leading home wall painting services expert. We provide local and affordable home painting services and specialized bricks paint services, ensuring a durable, high-end finish for every residential or commercial project in Largo.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/111.jpg",
    alt: "Professional painting services in Largo, MD",
  },
  overlayText:
    "Star Quality Group delivers expert painting solutions designed specifically for Largo residents and businesses. From residential interior painting to commercial exterior painting, our professional crew ensures safe, efficient, and high-quality craftsmanship every time.",
};

const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Star Quality Group provides complete solutions, including home wall painting services, specialized bricks paint services, and professional deck and fence painting services. As a leading exterior and interior home or offices paint services provider or agency in Largo, MD, we deliver high-quality, durable finishes for every residential and commercial project.`,
  service: [
    {
      heading: "Expert & Top-Rated Home Wall Painting Services Contractor or Company Largo, MD",
      description: "Elevating the aesthetic appeal of your property requires more than just a bucket of paint; it demands the precision of an expert & top-rated home wall painting services contractor or company in Largo, MD. At Star Quality Group, we specialize in delivering high-caliber home wall painting services that breathe new life into every room. We understand that your home is your sanctuary, which is why our team focuses on meticulous preparation, ensuring every surface is smooth and primed for a flawless finish. As a local and affordable home painting services contractor or company, we pride ourselves on making premium craftsmanship accessible to our neighbors, ensuring that quality never takes a backseat to cost.Beyond standard walls, we offer specialized bricks paint services to modernize outdated masonry and deck and fence painting services to protect your outdoor living spaces from the elements. Our award-winning approach combines durable materials with advanced application techniques, providing a vibrant look that lasts for years. Whether you are looking to create a calming master suite or a bold, inviting living area, our local and affordable home painting services contractor or company provides the personalized attention and professional reliability you deserve. Trust our experts to handle the heavy lifting while you enjoy a beautiful, refreshed home.",
    },
    {
      heading: "Exterior and Interior Home or Offices Buildings Paint or Bricks Walls Painting Services Provider",
      description: "Maintaining a professional image for your business or a pristine look for your residence starts with a premier exterior and interior home or offices paint services provider or agency in Largo, MD. At Star Quality Group, we offer comprehensive solutions for both residential and commercial properties, including specialized bricks paint services that can completely transform the texture and curb appeal of any building. We recognize that exterior and interior home or offices buildings paint or bricks walls painting services require different technical approaches, from weather-resistant coatings for outdoor facades to low-VOC, high-scrub finishes for busy indoor environments.Our team is equipped to handle large-scale commercial projects and intimate residential updates with the same level of care. By choosing a dedicated exterior and interior home or offices paint services provider or agency in Largo, MD, you ensure that your property is protected against moisture, fading, and wear. We also provide professional deck and fence painting services to ensure every inch of your exterior property is cohesive and well-maintained. From refreshing office interiors to revitalizing retail storefronts, our commitment to excellence ensures your property remains a valuable asset. Let us provide the professional touch your building needs to stand out in the Largo community."
    }
  ]
};

const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top Rated Residential or Commercial Walls Painting Services Contractor Largo MD?",
  description: `Choosing a reliable & trusted certified home painting services contractor or agency is essential for achieving a finish that looks spectacular and lasts for years. At Star Quality Group, we specialize in high-impact transformations for both living and workspaces, ensuring every project meets our rigorous standards of excellence. Whether you are updating a modern office interior or refreshing your family’s living room, our team delivers the precision and expertise required for a flawless result. We have built our reputation as a skilled and top-rated residential or commercial walls painting services contractor in Largo, MD, by prioritizing attention to detail and superior customer care.
Our approach as a reliable & trusted certified home painting services contractor or agency involves more than just applying a fresh coat of paint. We focus on comprehensive surface preparation—including cleaning, patching, and priming—to ensure maximum adhesion and a smooth texture. Star Quality Group utilizes premium-grade materials and the latest application techniques to provide a durable barrier against wear and environmental factors. By combining technical skill with a commitment to reliability, we ensure that your property’s value is enhanced and protected. Trust our dedicated professionals to bring your vision to life with the quality and efficiency your Largo property deserves.`,
  backgroundImage: {
    src: "/222.jpg",
    alt: "Professional painting services in Largo, MD",
  },
  secondImage: {
    src: "/333.jpg",
    alt: "Expert painting team working in Largo, MD",
  },
};

const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Home or Offices Walls Painting Services Contractor Experts Largo MD",
    description:
      "When you need a reliable & trusted wall painting services contractor or agency, the quality of the finish depends entirely on the expertise of the team you hire. Star Quality Group has established itself as the premier choice for property owners who demand excellence, precision, and longevity. We specialize in transforming both residential and commercial spaces, ensuring that every project reflects a high standard of craftsmanship. As the certified or trusted local no1 home or offices walls painting services contractor experts in Largo, MD, we bring a wealth of technical knowledge to every job site, from advanced color matching to specialized surface treatments.Our reputation as a reliable & trusted wall painting services contractor or agency is built on a foundation of transparency and superior results. We understand that your walls are the backdrop of your daily life or business operations, which is why we utilize premium-grade materials that offer maximum durability and easy maintenance. At Star Quality Group, we don't just paint we restore and protect. Our meticulous process includes thorough preparation, ensuring that cracks are filled, surfaces are sanded, and primers are applied for perfect adhesion. Whether you are refreshing a professional office suite or a cozy family home, our certified or trusted local no1 home or offices walls painting services contractor experts in Largo, MD, deliver a seamless experience that prioritizes your schedule and your vision.",
    image: "/444.jpg",
    alt: "Expert painting services in Largo, MD",
  },
   row2: {
    heading:
      "Our Services Areas for Wall Painting Services Contractor",
    description:
      "Star Quality Group is dedicated to bringing high-caliber aesthetic transformations to a diverse range of neighborhoods. As your premier wall painting services contractor, we have strategically positioned our team to serve the growing needs of Largo, MD, where we deliver precision-led residential and commercial finishes. Our commitment to excellence extends to the beautiful homes in Bowie, MD, and the fast-paced commercial sectors of Washington, DC, ensuring that every building we touch receives a durable, professional-grade coating. We understand the specific architectural styles and environmental factors unique to this region, allowing us to provide better protection and more accurate color consultations for every client.Beyond the city center, we are a trusted partner for property owners in College Park, MD, offering everything from interior wall refreshes to specialized exterior masonry painting. Our service network also covers the expanding community of Upper Marlboro, MD, where we focus on delivering reliable, on-time results that enhance curb appeal and property value. By choosing a local leader with deep roots in these areas, you are guaranteed a team that values community reputation and customer satisfaction above all else. Whether you need a quick room update or a complete building overhaul, our experts are ready to provide the professional touch your property deserves across our entire service area.",
    image: "/555.jpg",
    alt: "Star Quality Group painting experts working in Largo, MD",
  },
  row3: {
    heading:
      "Why Choose Star Quality Group for Your Home or Offices Walls Painting Services Contractor Largo MD?",
    description:
      "Deciding on a reliable & trusted painting services contractor or agency is about more than just finding someone with a brush; it is about finding a partner committed to the integrity of your property. Star Quality Group stands out in the Largo community by offering a seamless blend of high-end craftsmanship and dependable project management. We recognize that your home or office is a major investment, which is why we approach every surface with the goal of providing maximum durability and aesthetic appeal. From the initial surface preparation to the final decorative coating, we ensure every step is handled with professional precision.As a reliable & trusted painting services contractor or agency, we focus on providing a stress-free experience for our clients. This means providing transparent pricing, sticking to strict timelines, and using top-tier, eco-friendly materials that are safe for your family or employees. Our team is highly skilled in handling a variety of textures and substrates, ensuring that whether we are working on interior drywall or exterior masonry, the results are consistently superior. When you choose Star Quality Group, you are opting for a team that values your satisfaction above all else, delivering a vibrant, long-lasting finish that truly transforms your environment.",
    image: "/666.jpeg",
    alt: "Star Quality Group painting experts working in Largo, MD",
  },
};


export default async function ProfessionalPaintingLargoPage() {
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
