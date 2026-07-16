
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
  title: 'Basement Refinishing in Lorgo, MD | Star Quality Group',
  description: 'Looking for a reliable basement refinishing contractor in Lorgo, MD? We offer high quality basement refinishing & remodeling services at affordable prices. Transform your home or office with Star Quality Group\'s expert painting solutions.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/basement-refinishing/service-areas/largo-md',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Basement Refinishing in Lorgo, MD | Star Quality Group',
    description: 'Looking for a reliable basement refinishing contractor in Lorgo, MD? We offer high quality basement refinishing & remodeling services at affordable prices. Transform your home or office with Star Quality Group\'s expert painting solutions.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basement Refinishing in Lorgo, MD | Star Quality Group',
    description: 'Looking for a reliable basement refinishing contractor in Lorgo, MD? We offer high quality basement refinishing & remodeling services at affordable prices. Transform your home or office with Star Quality Group\'s expert painting solutions.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Certified & Professional #1 Residential or Commercial Buildings Basement Finishing Contractor Largo MD",
  areaLabel: "Largo, MD",
  description:
    "Turn your vision into reality with Star Quality Group, the #1 professional basement finishing contractor in Largo, MD. From expert residential refinishing to commercial paint services, our trusted team delivers elite craftsmanship for homes and offices. Get your free quote today!",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our experts at Star Quality Group provide personalized, warm service to make your renovation stress-free.",
    },
    {
      title: "Quick Response",
      description:
        "Stop waiting for callbacks. We provide rapid estimates and immediate answers for your Largo basement projects.",
    },
    {
      title: "24/7 Support",
      description:
        "Day or night, our dedicated team is available to assist with your residential or commercial inquiries.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Award-Winning Local Basement Finishing or Repairing Services Contractor or Agency in Largo, MD?",
  paragraphs: [
    "Unlock the hidden potential of your property with Star Quality Group, the premier certified and licensed basement refinishing services provider in Largo, MD. Whether your current space suffers from outdated fixtures or requires critical structural repairs, our team delivers award-winning craftsmanship tailored to your specific needs. As a leading local and affordable basement finishing services contractor or company, we specialize in converting cold, underutilized areas into warm, inviting living rooms, modern home offices, or high-end commercial suites that add immediate market value to your building. We understand that every renovation is an investment, which is why we operate as a certified and licensed basement refinishing services provider in Largo, MD, ensuring every project meets strict safety codes and industry standards.From moisture mitigation and framing to expert electrical work and professional painting, our comprehensive approach covers every detail. Homeowners and business managers consistently choose us as their local and affordable basement finishing services contractor or company because we combine high-quality materials with transparent pricing and reliable timelines. At Star Quality Group, we take pride in our reputation for excellence throughout the Largo community. We don't just finish surfaces; we create functional environments that enhance your lifestyle or business operations. If you are searching for a partner who values integrity, precision, and aesthetic appeal, look no further. Let us turn your damp, dark basement into the centerpiece of your property. Contact us today to start your transformation with the experts who care.",
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
      question: "Why choose Star Quality Group in Largo, MD?",
      answer:
        "As the #1 certified and licensed basement refinishing services provider, Star Quality Group delivers elite craftsmanship. We are a reliable & trusted basement finishing services contractor or agency dedicated to transforming residential and commercial buildings with durable, high-end results.",
    },
    {
      question: "Do you offer affordable basement floor finishing?",
      answer:
        "Yes! We are a leading local and affordable basement floors finishing services contractor or company. Our team uses moisture-resistant coatings and premium materials to ensure your floors are stylish, durable, and perfect for any residential or commercial building project.",
    },
    {
      question: "Can you handle basement wall repairs and paint?",
      answer:
        "Absolutely. As an exterior and interior basement paint or refinishing services provider, we offer specialized basement walls bricks paint services. We fix structural issues and apply mold-resistant finishes, making us a reliable & trusted basement walls finishing services contractor.",
    },
    {
      question: "What areas do you serve for basement finishing?",
      answer:
        "Star Quality Group proudly serves Largo, MD, Bowie, MD, Upper Marlboro, MD, College Park, MD, and Washington, DC. We are the premier basement finishing services contractor for the entire region, providing expert residential and commercial building renovations.",
    },
    {
      question: "Are your basement finishing services certified and licensed?",
      answer:
        "Yes, we are a fully certified and licensed basement refinishing services provider Largo, MD. Our expert team follows all local building codes to ensure your project is safe, compliant, and adds maximum value to your residential or commercial property.",
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
    {
      city: "Rockville",
      region: "MD",
      description: "Professional basement remodeling and painting services in Rockville"
    }
  ]
};

const CTA_DATA = {
  heading:
    "Star Quality Group - Your Trusted Premier No.1 Basement Finishing Services Contractor, Company, Agency Largo MD",
  subHeading: "",
  description:
    "Experience excellence with Star Quality Group, Largo's #1 certified and licensed basement refinishing services provider. We offer local and affordable solutions for residential and commercial buildings. From basement wall or floor finishing services to expert paint, we deliver premier results!",
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
  description: `At Star Quality Group, we provide elite basement finishing services tailored to your needs. From local and affordable basement floors finishing to specialized basement walls bricks paint services, our certified and licensed team handles it all. We are Largo’s premier exterior and interior basement paint or refinishing services provider.`,
 service:[
  {
    heading:"Expert & Top Rated Residential Buildings Basement Floor Finishing Services Contractor or Company Largo, MD",
    
description:"When it comes to your home’s foundation, the floor is the most critical element for both aesthetics and durability. At Star Quality Group, we are recognized as the premier local and affordable basement floors finishing services contractor or company. We specialize in transforming cold, concrete slabs into high-end, functional living spaces using industrial-grade coatings, polished finishes, and moisture-resistant materials. Our team understands that Largo’s climate requires specific vapor barriers and thermal protection to prevent cracks and dampness.As a leading basement wall or floor finishing services specialist, we offer a variety of textures and styles, from sleek metallic epoxies to rugged, slip-resistant surfaces perfect for home gyms or workshops. By choosing an exterior and interior basement paint or refinishing services provider or agency Largo, MD, you ensure your investment is protected from the ground up. We don't just lay flooring; we engineer surfaces that stand the test of time.",
 },
{
 heading:"Hire Now a Basement Walls Paint Refinishing Services Provider",

description:"Is your basement feeling dark, damp, or dated? It is time to hire now a basement walls paint refinishing services provider who understands the science of masonry. Star Quality Group offers specialized basement walls bricks paint services designed to breathe new life into your masonry while providing a critical seal against moisture. Our basement finishing services go beyond simple aesthetics; we use high-permeability, anti-microbial paints that prevent mold growth while delivering a stunning, magazine-ready finish for your residential or commercial building.As a comprehensive exterior and interior basement paint or refinishing services provider or agency Largo, MD, we handle everything from surface preparation and crack filling to the final decorative stroke. Whether you want a modern industrial look with exposed painted brick or a smooth, polished drywall finish, our basement wall or floor finishing services are tailored to your vision. Don't settle for a gloomy storage area—let our experts brighten your space with professional-grade refinishing that reflects your style and increases your property value."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Skilled and Top Rated Residential or Commercial Buildings Basement Finishing Services Contractor Largo MD?",
  description: `If you are searching for a high-quality transformation for your underutilized space, you need a skilled and top rated residential or commercial buildings basement finishing services contractor Largo MD. At Star Quality Group, we understand that a basement is more than just a storage area—it is an opportunity to significantly increase your property’s square footage and market value. Whether you are envisioning a state-of-the-art home cinema, a professional executive suite, or a durable commercial storage solution, our team provides the precision and expertise required to bring that vision to life. As a reliable & trusted certified basement finishing services contractor or agency, we take the guesswork out of complex renovations.
We handle every technical aspect of the project, including moisture mitigation, structural framing, electrical zoning, and high-end aesthetic finishes. Our deep understanding of local Largo building codes ensures that your project is not only beautiful but also fully compliant and safe for long-term use. Choosing Star Quality Group means partnering with an elite team dedicated to transparent communication and superior results. We pride ourselves on being a reliable & trusted certified basement finishing services contractor or agency that residents and business owners depend on for timely delivery and meticulous attention to detail. Stop letting your basement sit empty and start enjoying a professionally finished space that reflects your style and meets your functional needs.`,
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
      "Certified or Trusted Local No.1 Residential Buildings Basement Walls Finishing Services Contractor Experts Largo MD",
    description:
      "Unlock the true potential of your home with Star Quality Group, your certified or trusted local no1 residential buildings basement walls finishing services contractor experts Largo MD. We understand that the walls are the structural and aesthetic backbone of any lower-level renovation. Our specialized team focuses on converting cold, damp masonry into vibrant, climate-controlled living areas. Whether you are dealing with exposed cinder blocks or outdated paneling, we provide high-performance solutions that include moisture barrier installation, premium insulation, and flawless drywall finishing. As a reliable & trusted basement walls finishing services contractor or agency, we prioritize the health of your home.We utilize mold-resistant materials and advanced sealing techniques specifically designed for the Maryland climate. Our craftsmen don't just cover up old walls; we build new, durable surfaces that serve as the perfect canvas for your home theater, gym, or guest suite. By choosing Star Quality Group, you are investing in a reliable & trusted basement walls finishing services contractor or agency that guarantees precision from the first stud to the final coat of paint. We take pride in our quality first approach, ensuring that every corner is square and every surface is smooth. Residents throughout Largo trust our certified experts to deliver a polished, professional look that blends seamlessly with the rest of their home’s architecture. Don't let an unfinished basement hold back your property's value—let us create the beautiful, dry, and inviting space your family deserves.",
    image: "/4.jpg",
    alt: "Professional basement wall finishing and painting services in Largo, MD",
  },
  row2: {
    heading: "Our Services Areas for Basement Finishing Services Contractor",
    description:
      "At Star Quality Group, we are proud to be the premier regional choice for residential and commercial basement transformations across Maryland and the District of Columbia. As a leading basement finishing services contractor, our expert team provides comprehensive remodeling solutions specifically tailored to the local architecture found in Largo, MD. We understand the unique structural needs of properties in Upper Marlboro, MD, where moisture control and high-quality finishing are essential for long-term value. Our reach extends to homeowners in Bowie, MD, offering everything from sleek floor coatings to professional wall refinishing.In addition to our suburban expertise, we serve the urban landscapes of Washington, DC, delivering modern, space-saving basement designs for historic and contemporary buildings alike. We also provide specialized services in College Park, MD, ensuring that every project meets the highest standards of durability and style. Whether you are looking to create a home office, a rental suite, or a commercial storage area, Star Quality Group is the certified and licensed partner you can trust. Our commitment to excellence and local knowledge makes us the top-rated basement finishing services contractor for the entire DMV area.",
    image: "/5.webp",
    alt: "Expert basement floor finishing and remodeling services in Maryland",
  },
  row3: {
    heading:
      "Why Choose Star Quality Group for Your Residential or Commercial Basement Finishing Services Contractor Largo MD?",
    description:
      "Choosing the right partner for your renovation is the difference between a damp storage room and a premium living suite. When you ask why choose Star Quality Group for your residential or commercial basement finishing services contractor Largo, MD, the answer lies in our unwavering commitment to structural integrity and aesthetic excellence. As a reliable & trusted basement finishing services contractor or agency, we don't just beautify a space; we engineer it. Our process begins with an exhaustive moisture and foundation assessment, ensuring that your investment is protected by the latest in vapor barrier technology and mold-resistant materials before a single stud is placed.Homeowners and business managers across Largo choose Star Quality Group because we provide a seamless, turnkey experience. From navigating local building permits to executing high-end architectural details, we handle the heavy lifting. Our reputation as a reliable & trusted basement finishing services contractor or agency is built on transparency, strict adherence to timelines, and a portfolio of award-winning projects. Whether you are creating a luxury home theater or a high-traffic commercial workspace, we bring the expertise, licensing, and passion required to exceed your expectations. Experience the gold standard in basement innovation with a team that treats your property like its own.",
    image: "/6.jpg",
    alt: "Star Quality Group basement finishing team working on residential project in Largo, MD",
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
