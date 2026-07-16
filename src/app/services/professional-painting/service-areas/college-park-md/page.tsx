
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
  title: 'Professional Painting Services College Park MD | Star Quality Group',
  description: 'Transform your space with Star Quality Group, College Park\'s premier professional painting contractor. We offer expert residential and commercial painting services for homes and offices. Trust our professional team for flawless results.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/professional-painting/service-areas/college-park-md',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Professional Painting Services College Park MD | Star Quality Group',
    description: 'Transform your space with Star Quality Group, College Park\'s premier professional painting contractor. We offer expert residential and commercial painting services for homes and offices. Trust our professional team for flawless results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Painting Services College Park MD | Star Quality Group',
    description: 'Transform your space with Star Quality Group, College Park\'s premier professional painting contractor. We offer expert residential and commercial painting services for homes and offices. Trust our professional team for flawless results.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Residential or Commercial Home Painting Contractor College Park MD",
  areaLabel: "College Park, MD",
  description:
    "Experience Star Quality Group, your trusted painting services agency in College Park, MD. Our expert home and office paint contractors deliver professional residential and commercial excellence. From vibrant interiors to durable exteriors, we are the reliable agency for premium results.",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable experts prioritize your needs, providing personalized painting solutions with a welcoming, professional touch.",
    },
    {
      title: "Quick Response",
      description:
        "We value your time, delivering rapid project estimates and immediate answers to your painting inquiries.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team remains available around the clock to ensure seamless communication for every project.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Award-Winning Local Painting Services Contractor or Agency College Park MD?",
  paragraphs: [
    "At Star Quality Group, we understand that a fresh coat of paint is more than just a color change—it is a vital investment in your property’s longevity and curb appeal. As a leading local and affordable painting services contractor, we take the stress out of property maintenance by providing comprehensive solutions tailored to both modern and historic structures throughout the Maryland area. Our reputation as a reliable painting services company is built on a foundation of transparency and elite craftsmanship. We utilize high-quality, weather-resistant materials and meticulous preparation techniques to ensure every project meets our rigorous internal standards.Whether you are refreshing a storefront to attract new clients or revitalizing your family living room, our team delivers the professional finish you expect from a top-tier certified and licensed painting services provider. We believe that high-quality work should be accessible, which is why we remain a local and affordable painting services contractor dedicated to providing maximum value without compromising on detail. From the initial color consultation to the final site cleanup, Star Quality Group manages every phase of the project with expert care. Trust our painting services company to transform your vision into a reality with the skill, speed, and dedication that only a true local professional can provide.",
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
  title: "Painting FAQs",
  description:
    "Get detailed answers about our professional painting services in College Park, MD.",
  questions: [
    {
      question: "What areas do you serve for painting projects?",
      answer:
        "Star Quality Group is a premier wall painting services contractor serving College Park, MD, Bowie, MD, and Largo, MD. We also provide expert residential and commercial painting solutions for clients in Upper Marlboro, MD, and across the Washington, DC area.",
    },
    {
      question: "Are you a licensed and insured painting company?",
      answer:
        "Yes, we are a certified and licensed painting services provider. Choosing a reliable & trusted painting services contractor or agency like ours ensures your property is protected, and all work meets the highest professional and safety standards in Maryland.",
    },
    {
      question: "What types of surfaces do you specialize in?",
      answer:
        "Our experts handle everything from interior drywall to exterior siding. We are a top-rated home wall painting services provider specializing in bricks paint services, as well as deck and fence painting to keep your entire property looking its best.",
    },
    {
      question: "How do I get an estimate for my project?",
      answer:
        "As a local and affordable home painting services contractor, we provide quick responses to all inquiries. Contact our agency today for a detailed, transparent estimate tailored to your specific residential or commercial wall painting needs in College Park.",
    },
    {
      question: "Do you offer support after the project is finished?",
      answer:
        "Absolutely. Star Quality Group prides itself on being a reliable & trusted wall painting services contractor or agency. We offer 24/7 support to address any questions, ensuring you are completely satisfied with the durability and finish of our work.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Maryland & DC Area",
  areas: [
    {
      city: "College Park",
      region: "MD",
      description: "Professional painting services throughout College Park"
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
      city: "Largo",
      region: "MD",
      description: "Specialized painting services for Largo properties"
    }
  ]
};

const CTA_DATA = {
  heading:
    "Star Quality Group - Your Trusted Premier No. 1 Home Bricks Wall Painting Services Contractor, Company, & Agency College Park MD",
  subHeading: "",
  description:
    "Star Quality Group is your trusted premier home bricks wall painting services contractor in College Park, MD. As a top-rated agency, we provide affordable home painting services and expert exterior and interior home or offices paint services you can rely on.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/111.jpg",
    alt: "Professional painting services in College Park, MD",
  },
  overlayText:
    "Star Quality Group delivers expert painting solutions designed specifically for College Park residents and businesses. From residential interior painting to commercial exterior painting, our professional crew ensures safe, efficient, and high-quality craftsmanship every time.",
};

const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Star Quality Group provides elite home wall painting services tailored to your property’s needs. As a local and affordable home painting services contractor, we specialize in exterior and interior home or offices paint services. From professional bricks paint services to expert deck and fence painting, we deliver high-quality finishes.`,
  service: [
    {
      heading: "Expert & Top-Rated Home Wall Painting Services Contractor in College Park, MD",
      description: "When you need a local and affordable home painting services contractor, Star Quality Group stands out as the premier choice for excellence. Our reputation as a top-rated home wall painting services provider is built on years of delivering flawless finishes and durable results. We understand that your property is your most significant investment, which is why our painting services company uses premium-grade materials and meticulous preparation techniques.Whether you are updating a single room or revitalizing an entire property, our skilled team ensures a smooth, uniform application that enhances your environment's aesthetic and value. As a dedicated local and affordable home painting services contractor, we prioritize transparent pricing and efficient timelines. Trust Star Quality Group to provide the professional home wall painting services you deserve, combining local expertise with a commitment to total customer satisfaction and long-lasting beauty for every College Park resident.",
    },
    {
      heading: "Exterior and Interior Home or Offices Buildings Paint or Bricks Walls Painting Services Provider",
      description: "Star Quality Group is a versatile exterior and interior home or offices paint services provider, specializing in comprehensive property transformations. Our expertise extends beyond standard surfaces to include specialized bricks paint services, ensuring that even porous masonry receives a protective and stylish finish. We also offer professional deck and fence painting services to safeguard your outdoor wooden structures from the elements. As a leading agency in College Park, MD, we tailor our approach to the specific needs of each substrate, whether it is drywall, siding, or brickwork.Our role as an exterior and interior home or offices paint services provider means we handle everything from high-traffic commercial hallways to delicate residential exteriors with equal precision. By choosing our bricks paint services and wood staining options, you ensure every inch of your building is expertly maintained and visually striking for years to come."
    }
  ]
};

const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top-Rated Residential or Commercial Walls Painting Services Contractor in College Park, MD?",
  description: `Finding a skilled and top-rated residential or commercial walls painting services contractor in College Park, MD, is the first step toward a successful property transformation. At Star Quality Group, we understand that a high-quality paint job requires more than just a brush and a bucket; it demands technical precision, thorough surface preparation, and an eye for detail. Whether you are managing a large-scale commercial facility or refreshing your family home, our team provides the expert craftsmanship needed to deliver a durable, vibrant finish that stands the test of time and weather. Choosing a reliable & trusted certified home painting services contractor or agency ensures that your project is handled with the highest professional standards.
We take pride in our transparent communication and commitment to deadlines, minimizing disruption to your daily operations or home life. As a premier agency, we utilize premium materials and industry-leading techniques to ensure every wall, from interior drywall to exterior masonry, looks its absolute best. When you partner with Star Quality Group, you are choosing a reliable & trusted certified home painting services contractor or agency that prioritizes your vision. We offer tailored consultations to help you select the perfect color palettes and finishes for your specific environment. Don't settle for mediocre results when you can work with a skilled and top-rated residential or commercial walls painting services contractor dedicated to excellence in College Park.`,
  backgroundImage: {
    src: "/222.jpg",
    alt: "Professional painting services in College Park, MD",
  },
  secondImage: {
    src: "/333.jpg",
    alt: "Expert painting team working in College Park, MD",
  },
};

const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No. 1 Home or Offices Walls Painting Services Contractor Experts College Park, MD",
    description:
      "Securing a certified or trusted local No. 1 home or offices walls painting services contractor expert in College Park, MD, is the most effective way to ensure your property remains a standout in the neighborhood. At Star Quality Group, we understand that every structure, whether it is a modern office building or a classic family residence, requires a specialized approach. Our team of professionals brings years of technical expertise to every project, focusing on meticulous surface preparation and the use of premium, long-lasting materials that withstand the local Maryland climate. When you work with a reliable & trusted wall painting services contractor or agency, you gain peace of mind knowing that your investment is protected.We pride ourselves on being an agency that values transparency, providing clear timelines and detailed estimates that eliminate any guesswork. From refreshing professional workspace interiors to revitalizing residential exteriors, our experts deliver a flawless finish that enhances both the aesthetic appeal and the market value of your property. Choosing Star Quality Group means partnering with a reliable & trusted wall painting services contractor or agency dedicated to superior craftsmanship. We are committed to minimizing disruption to your daily operations or home life while maintaining a clean, organized workspace. Don't settle for anything less than a certified or trusted local No. 1 home or offices walls painting services contractor expert for your next project in College Park.",
    image: "/444.jpg",
    alt: "Professional painting services in College Park, MD",
  },
  row2: {
    heading: "Our Service Areas for Wall Painting Services Contractor",
    description:
      "Star Quality Group is proud to offer comprehensive professional painting solutions across a wide range of local communities. As a premier provider, we serve as your dedicated wall painting services contractor in College Park, MD, where we have established a reputation for excellence and reliability. Beyond the local area, our expert teams extend their high-quality interior and exterior services to residents and business owners in Bowie, MD, and Largo, MD, ensuring that every property receives the same level of meticulous care and premium finishes.We also specialize in transforming properties in Upper Marlboro, MD, providing durable and aesthetically pleasing results tailored to the unique styles of the region. Furthermore, our reach includes Washington, DC, where we handle diverse projects ranging from historic renovations to modern commercial office updates. By choosing our team, you are partnering with a versatile contractor that understands the specific needs of these varied neighborhoods. Whether you are located in the heart of the city or in the surrounding Maryland suburbs, we are committed to delivering top-tier craftsmanship and exceptional customer service throughout every step of your painting project.",
    image: "/555.jpg",
    alt: "Expert painting services in College Park, MD",
  },
  row3: {
    heading:
      "Why Choose Star Quality Group for Your Home or Offices Walls Painting Services Contractor College Park, MD?",
    description:
      "Choosing the right partner for your property improvement is a critical decision, and Star Quality Group is dedicated to proving why we are the premier choice. As a reliable & trusted painting services contractor or agency, we combine years of industry experience with a deep understanding of local aesthetic trends and structural requirements. Our team doesn't just apply paint; we provide a comprehensive service that includes thorough surface evaluation, expert color consultation, and meticulous site protection. We treat every project—whether a high-traffic commercial office or a quiet residential bedroom—with the same level of professional rigor and respect for your space.The hallmark of a reliable & trusted painting services contractor or agency is the ability to deliver consistent, high-quality results on time and within budget. At Star Quality Group, we utilize premium-grade paints and advanced application techniques to ensure a vibrant finish that resists peeling and fading. We prioritize clear communication, ensuring you are informed at every stage of the process. By choosing us as your painting partner in College Park, you are investing in peace of mind, elite craftsmanship, and a dedicated team focused on exceeding your expectations. Let us show you the difference that true professional dedication makes for your walls.",
    image: "/666.jpeg",
    alt: "Star Quality Group painting experts working in College Park, MD",
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

export default async function ProfessionalPaintingCollegeParkPage() {
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
