
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
  title: 'Expert Basement Remodeler in Washington, DC | Call Now For Free Quote',
  description: 'Looking for an affordable basement refinishing contractor in Washington, DC? We offer high quality basement refinishing & remodeling services at affordable prices. Transform your home or office with Star Quality Group\'s expert painting solutions.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/basement-refinishing/service-areas/washington-dc',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Expert Basement Remodeler in Washington, DC | Call Now For Free Quote',
    description: 'Looking for an affordable basement refinishing contractor in Washington, DC? We offer high quality basement refinishing & remodeling services at affordable prices. Transform your home or office with Star Quality Group\'s expert painting solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Basement Remodeler in Washington, DC | Call Now For Free Quote',
    description: 'Looking for an affordable basement refinishing contractor in Washington, DC? We offer high quality basement refinishing & remodeling services at affordable prices. Transform your home or office with Star Quality Group\'s expert painting solutions.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Residential or Commercial Buildings Basement Finishing Contractor Washington DC",
  areaLabel: "Washington, DC",
  description:
    "Experience the Star Quality Group difference with Washington DC’s #1 residential and commercial basement refinishing services. Our professional contractors deliver skilled painting and certified finishing, transforming your building into a functional, reliable space. Trust our expert agency for top-tier craftsmanship tailored to your needs.",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our Star Quality Group experts provide approachable, professional guidance for your DC basement refinishing project today.",
    },
    {
      title: "Quick Response",
      description:
        "Get immediate consultations from our reliable team for fast, efficient residential or commercial basement finishing services.",
    },
    {
      title: "24/7 Support",
      description:
        "Star Quality Group offers 24/7 assistance for all your trusted basement painting and refinishing service needs.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Award-Winning Local Basement Finishing or Repairing Services Contractor or Agency in Washington DC?",
  paragraphs: [
    "When you need the absolute best, Star Quality Group stands out as the premier local and affordable basement finishing services contractor or company in the DMV area. We understand that a basement is more than just a foundation; it is untapped potential for your home or business. Our award-winning team specializes in high-end repairs and complete transformations, ensuring that every square inch of your property is optimized for comfort, style, and long-term structural integrity. As a certified and licensed basement refinishing services provider in Washington DC, we handle the complexities of local building codes and permits so you don't have to. From moisture mitigation and structural repairing to exquisite aesthetic finishing, our mission is to provide a seamless experience.Whether you are envisioning a modern home office, a cozy guest suite, or an expansive commercial layout, we bring the expertise required to execute your vision with precision and a commitment to excellence. Choosing Star Quality Group means partnering with a professional and skilled trusted basement finishing services contractor that prioritizes your budget without compromising on quality. We have earned our reputation as a trusted or reliable basement refinishing services agency in Washington DC through years of dedicated service and transparent communication. Don't leave your renovation to chance—hire a proven expert dedicated to delivering durable, beautiful, and value-adding results for your residential or commercial building today.",
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
  title: "Basement Finishing FAQs",
  description:
    "Get detailed answers about our basement finishing and refinishing services in Largo, MD.",
  questions: [
    {
      question: "Why choose Star Quality Group for basement finishing?",
      answer:
        "As the #1 reliable & trusted basement finishing services contractor or agency, Star Quality Group delivers certified expertise. We provide high-quality basement wall or floor finishing services in Washington DC, ensuring durable, moisture-resistant results for every residential or commercial building.",
    },
    {
      question: "Do you provide basement painting and brick services?",
      answer:
        "Yes! We are a premier exterior and interior basement paint or refinishing services provider. Our team specializes in basement walls bricks paint services, using premium coatings designed to enhance aesthetics while protecting your building’s structural integrity and preventing dampness.",
    },
    {
      question: "Is Star Quality Group a licensed contractor in DC?",
      answer:
        "Absolutely. We are a certified and licensed basement refinishing services provider Washington DC. Our professional team adheres to all local building codes, ensuring your residential or commercial finishing project is handled with the highest level of safety and technical authority.",
    },
    {
      question: "Which areas do you serve for basement renovations?",
      answer:
        "Our local and affordable basement finishing services contractor or company serves Washington DC, Bowie MD, College Park MD, Largo MD, and Upper Marlboro MD. We bring Star Quality expertise to homeowners and businesses throughout the entire DMV region.",
    },
    {
      question: "How long does a typical basement refinishing take?",
      answer:
        "Timelines vary by project scale, but as a professional and skilled trusted basement finishing services contractor, we prioritize efficiency. From initial basement wall or floor finishing to final inspections, we ensure your project is completed on time and within budget.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Maryland & DC Area",
  areas: [
    {
      city: "Largo",
      region: "MD",
      description: "Certified & Professional #1 Basement Finishing Services - Complete basement refinishing and transformation services throughout Largo"
    },
    {
      city: "Bowie",
      region: "MD",
      description: "Premium basement finishing and remodeling services in Bowie"
    },
    {
      city: "College Park",
      region: "MD", 
      description: "Expert basement refinishing and waterproofing services in College Park"
    },
    {
      city: "Washington",
      region: "DC",
      description: "Complete basement finishing solutions for Washington DC residents and businesses"
    },
    {
      city: "Upper Marlboro",
      region: "MD",
      description: "Specialized basement wall and floor finishing services for Upper Marlboro properties"
    },
  ]
};

const CTA_DATA = {
  heading:
    "Star Quality Group - Your Trusted Premier No.1 Basement Finishing Services Contractor, Company, Agency Washington DC",
  subHeading: "",
  description:
    "Experience excellence with Star Quality Group, Washington DC’s #1 basement finishing services contractor. Our agency provides trusted residential and commercial refinishing, including expert floor finishing and walls bricks paint services. Choose our company for affordable, certified, and professional craftsmanship today.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/1.png",
    alt: "Professional basement finishing and refinishing services in Largo, MD",
  },
  overlayText:
    "Star Quality Group delivers expert basement transformation solutions designed specifically for Largo residents and businesses. From residential basement refinishing to commercial remodeling projects, our professional crew ensures safe, efficient, and high-quality craftsmanship every time.",
};



const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Star Quality Group offers premier basement finishing services across Washington DC. From expert basement wall or floor finishing services to specialized basement walls bricks paint services, we do it all. Trust our exterior and interior basement paint or refinishing services provider or agency for affordable, high-quality results.`,
 service:[
  {
    heading:"Expert & Top-Rated Residential Buildings Basement Floor Finishing Services Contractor or Company Washington DC",
    
description:"Elevate your home’s value with Star Quality Group, the premier local and affordable basement floors finishing services contractor or company. We specialize in transforming cold, concrete slabs into stunning, durable surfaces that stand the test of time. Whether you envision a sleek epoxy finish, polished concrete, or high-end tiling, our basement finishing services provide the perfect foundation for your living space. As a leading basement wall or floor finishing services provider, we utilize moisture-resistant materials specifically designed for the unique climate of the District.Our team is recognized as an exterior and interior basement paint or refinishing services provider or agency Washington DC residents trust for precision and longevity. We combine technical expertise with premium products to ensure your floors are not only beautiful but also resistant to wear and humidity. Choosing Star Quality Group means investing in a top-rated partner dedicated to delivering professional results that enhance your residential building’s aesthetic and structural integrity.",
 },
{
 heading:"Hire Now a Basement Walls Paint Refinishing Services Provider",

description:"Is your basement feeling dark or unfinished? Hire now a basement walls paint refinishing services provider to breathe new life into your property. At Star Quality Group, we excel in specialized basement walls bricks paint services, ensuring that even the most rugged surfaces look modern and refined. We understand that basement walls require specific breathable coatings to prevent peeling and dampness, which is why we are the best exterior and interior basement paint or refinishing services provider or agency Washington DC.Our comprehensive basement finishing services cover everything from minor touch-ups to complete color overhauls. As a professional and skilled trusted basement finishing services contractor, we prioritize surface preparation to ensure a flawless, long-lasting bond. Whether you need a crisp, clean look for a home office or a durable finish for a commercial storage area, our basement wall or floor finishing services guarantee a transformation that exceeds expectations. Contact our reliable team today to secure the expert craftsmanship your building deserves."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top Rated Residential or Commercial Buildings Basement Finishing Services Contractor Washington DC?",
  description: `If you are looking for a skilled and top rated residential or commercial buildings basement finishing services contractor Washington DC, your property deserves the elite craftsmanship of Star Quality Group. Basements in the District often face unique challenges, from moisture management to structural integrity. As a reliable & trusted certified basement finishing services contractor or agency, we provide comprehensive solutions that transform dark, underutilized areas into high-value living spaces or productive commercial environments. Our team combines technical mastery with creative design to ensure your renovation is both beautiful and code-compliant. At Star Quality Group, we take pride in being a reliable & trusted certified basement finishing services contractor or agency that residents and business owners can depend on for excellence.
Whether you are aiming for a modern residential suite or a polished professional workspace, our expertise ensures a seamless transition from concept to completion. We utilize premium materials and innovative techniques to provide long-lasting results that significantly boost your property's market value. Choosing a professional and skilled trusted basement finishing services contractor means prioritizing peace of mind. We handle everything from wall refinishing to specialized floor coatings with a focus on durability. Don’t leave your building’s potential to chance; partner with the #1 reliable & trusted certified basement finishing services contractor or agency in Washington DC. Contact Star Quality Group today for a consultation and experience the gold standard in basement transformations.`,
  backgroundImage: {
    src: "/2.jpg",
    alt: "Professional basement finishing and remodeling services in Largo, MD",
  },
  secondImage: {
    src: "/3.jpg",
    alt: "Expert basement refinishing team working on residential project in Largo, MD",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Certified or Trusted Local No.1 Residential Buildings Basement Walls Finishing Services Contractor Experts Washington DC",
    description:
      "If you are searching for the certified or trusted local no1 residential buildings basement walls finishing services contractor experts Washington DC, look no further than Star Quality Group. Your basement walls are the structural soul of your lower level, and finishing them requires more than just a coat of paint—it requires moisture management, precision insulation, and expert craftsmanship. As a reliable & trusted basement walls finishing services contractor or agency, we specialize in transforming damp, unfinished concrete into polished, livable spaces that harmonize with the rest of your home. At Star Quality Group, we understand the unique geological and architectural challenges of Washington DC properties. Our team provides high-end basement wall or floor finishing services that prevent mold while maximizing aesthetic appeal.Whether you need specialized basement walls bricks paint services for a rustic look or smooth, modern drywall finishing for a contemporary suite, we bring Star Quality to every square inch. We pride ourselves on being the reliable & trusted basement walls finishing services contractor or agency that homeowners depend on for durability and style. Don't leave your residential investment to chance. Partner with a certified and licensed basement refinishing services provider that prioritizes your vision and budget. From the initial inspection to the final trim, Star Quality Group ensures your basement walls are beautiful, energy-efficient, and built to last. Contact us today to work with the certified or trusted local no1 residential buildings basement walls finishing services contractor experts Washington DC.",
    image: "/4.jpg",
    alt: "Professional basement wall finishing and painting services in Largo, MD",
  },
  row2: {
    heading: "Our Services Areas for Basement Finishing Services Contractor",
    description:
      "Star Quality Group is proud to be the premier destination for high-end renovations across the region, serving as the #1 basement finishing services contractor for both homeowners and businesses. Our reach extends throughout the heart of Washington DC, where we navigate the unique architectural demands of the District with precision and local expertise. Beyond the city limits, we are the best local and affordable basement finishing services contractor or company for residents in Bowie MD and College Park MD, providing transformative designs that increase property value and livable square footage.We understand that every neighborhood has its own style, which is why our reliable & trusted certified basement finishing services contractor or agency offers tailored solutions in Largo MD and Upper Marlboro MD. Whether you are looking for basement walls bricks paint services in a historic DC rowhouse or modern basement wall or floor finishing services in a suburban Maryland estate, our team is mobile and ready to deliver. By choosing Star Quality Group, you are partnering with an exterior and interior basement paint or refinishing services provider that knows your community. From the initial consultation to the final reveal, we bring Star Quality craftsmanship to every doorstep in our service network, ensuring your basement becomes the highlight of your building.",
    image: "/5.webp",
    alt: "Expert basement floor finishing and remodeling services in Maryland",
  },
  row3: {
    heading:
      "Why Choose Star Quality Group for Your Residential or Commercial Basement Finishing Services Contractor Washington DC?",
    description:
      "Deciding on the right partner for your property renovation is a major investment in your building's future. Why choose Star Quality Group for your residential or commercial basement finishing services contractor Washington DC? The answer is simple: we combine localized expertise with a Star Quality commitment to excellence that other firms simply cannot match. As a reliable & trusted basement finishing services contractor or agency, we have spent years mastering the specific structural and moisture-related challenges unique to the District’s historic and modern basements alike.When you partner with Star Quality Group, you aren't just hiring a crew; you are engaging a reliable & trusted basement finishing services contractor or agency that prioritizes your vision and your budget. We utilize cutting-edge, moisture-resistant materials and certified techniques to ensure your new space is as durable as it is beautiful. Whether it is a high-traffic commercial floor or a cozy residential living area, our professional and skilled trusted basement finishing services contractor team handles every detail from permits to the final coat of paint. We pride ourselves on transparent communication and on-time delivery, ensuring that your experience is stress-free and your results are world-class. Choose the experts who treat your property like their own.",
    image: "/6.jpg",
    alt: "Star Quality Group basement finishing team working on residential project in Largo, MD",
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
