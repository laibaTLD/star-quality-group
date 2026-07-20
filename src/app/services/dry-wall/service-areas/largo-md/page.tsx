
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
  title: 'Professional Drywall Installation & Repair Services Largo MD | Star Quality Group',
  description: 'Transform your space with Star Quality Group, Largo\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/dry-wall/service-areas/largo-md',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Professional Drywall Installation & Repair Services Largo MD | Star Quality Group',
    description: 'Transform your space with Star Quality Group, Largo\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Drywall Installation & Repair Services Largo MD | Star Quality Group',
    description: 'Transform your space with Star Quality Group, Largo\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Professional Local & Affordable House Drywall Installation or Repairing Services Contractor Largo MD",
  areaLabel: "Largo, MD",
  description:
    "Trust Star Quality Group for professional, affordable drywall installation and repair in Largo, MD. Our certified contractors specialize in new home painting and office wall repairs. Get the no1 local, trusted service for flawless walls and premium finishes today.",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our Star Quality Group experts provide helpful, professional drywall advice tailored to your Largo home’s needs.",
    },
    {
      title: "Quick Response",
      description:
        "Get fast estimates for affordable drywall repairs in Largo. Our local team prioritizes your urgent projects.",
    },
    {
      title: "24/7 Support",
      description:
        "Reliable, 24/7 assistance for all your certified drywall installation and professional painting inquiries in Largo, MD.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Looking for a Professional and Affordable Home & Offices Drywall Repairing Contractor in Largo, MD?",
  paragraphs: [
    "When you need a trusted & certified drywalls painting repairing services contractor Largo MD, look no further than Star Quality Group. We are the premier on site residential building walls or kitchen or bathroom drywall painting repairing or installation services provider Largo MD, dedicated to restoring the beauty and structural integrity of your property.Our team operates as a skilled home and offices dry walls installation or repairing services contractor or painters Largo MD, handling everything from seamless patch repairs to full-scale installations. We understand that wall damage doesn't follow a schedule, which is why we offer 24/7 door to door drywall painting repair or installation services contractor Largo MD. At Star Quality Group, we combine affordability with master-level craftsmanship. Whether you are renovating a commercial office or refreshing your home’s interior, our local experts provide the durable results you deserve. Contact us today for Largo’s most reliable drywall solutions.",
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
  title: "Drywall FAQs",
  description:
    "Get detailed answers about our drywall installation and repair services in Largo, MD.",
  questions: [
    {
      question: "Why choose Star Quality Group for drywall in Largo?",
      answer:
        "Star Quality Group is the no1 local and trusted contractor for professional drywall and painting. We offer certified, affordable services for homes and offices, ensuring every project in Largo, MD, receives high-quality installation and seamless, durable repair finishes.",
    },
    {
      question: "Do you offer 24/7 emergency drywall repair services?",
      answer:
        "Yes! We provide 24/7 door to door drywall painting repair or installation services contractor Largo MD. Whether it’s urgent water damage or a quick office fix, our skilled handyman team is always available to restore your walls immediately.",
    },
    {
      question: "Is your drywall installation and painting service affordable?",
      answer:
        "Absolutely. As a leading local and affordable home and offices drywall finishing or repairing services contractor Largo MD, we offer cheap rates without compromising quality. We provide budget-friendly, professional solutions tailored to fit your specific renovation or repair needs.",
    },
    {
      question: "Are your Largo drywall contractors certified and insured?",
      answer:
        "Yes, we are a trusted & certified drywalls painting repairing services contractor Largo MD. Our skilled team follows strict safety standards for all residential and commercial projects, giving you peace of mind that your property is in professional hands.",
    },
    {
      question: "Can you handle both residential and commercial projects?",
      answer:
        "Definitely. We are a professional or reliable new homes or offices drywall painting installation or finishing contractor Largo MD. From small kitchen patches to large-scale office installations, we provide expert on-site services for every type of local building.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Maryland & DC Area",
  areas: [
    {
      city: "Largo",
      region: "MD",
      description: "Certified & Professional #1 Drywall Installation Services - Complete drywall installation and repair services throughout Largo"
    },
    {
      city: "Upper Marlboro",
      region: "MD",
      description: "Premium drywall installation and repair services in Upper Marlboro"
    },
    {
      city: "Bowie",
      region: "MD", 
      description: "Expert drywall repair and finishing services in Bowie"
    },
    {
      city: "Washington",
      region: "DC",
      description: "Complete drywall solutions for Washington DC residents and businesses"
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
    "Professional and Trusted Residential or Commercial Drywall Painting Repairing or Installation Contractor Services Contractor, Company or Agency Largo MD",
  subHeading: "",
  description:
    "Star Quality Group is your premier local agency for certified drywall painting, repair, and installation. We provide affordable, high-quality solutions for homes and offices across Largo. From new construction to expert repairs, trust our professional contractors for flawless, durable wall finishes.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/11.jpg",
    alt: "Professional drywall installation and repair services in Largo, MD",
  },
  overlayText:
    "Star Quality Group delivers expert drywall solutions designed specifically for Largo residents and businesses. From residential drywall installation to commercial repairs, our professional crew ensures safe, efficient, and high-quality craftsmanship every time.",
};


const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Star Quality Group provides premier, certified solutions for every wall. As your local and affordable home and offices drywall finishing or repairing services contractor Largo MD, we handle everything from new home installations to expert office repairs. Trust our skilled team for flawless painting and durable, high-quality finishes today.`,
 service:[
  {
    heading:"Hire a Premier and Certified Residential or Commercial Drywall Repairing Services Contractor in Largo, MD",
    
description:"When your property demands perfection, you need the Star Quality Group. As a premier local and affordable home and offices drywall finishing or repairing services contractor Largo MD, we specialize in restoring the structural integrity and aesthetic appeal of your walls. Whether you are dealing with minor cracks, water damage, or large-scale renovations, our team provides the expert touch required for a seamless finish. We understand that residential and commercial spaces have different requirements, which is why we tailor our approach to ensure minimal disruption to your daily life or business operations.As a dedicated on-site new home walls drywalls drywall repairing services contractor or handyman in Largo MD, we utilize advanced techniques to ensure every patch is invisible and every corner is sharp. From kitchens and bathrooms to expansive office hallways, our craftsmanship stands the test of time. Choosing a professional or reliable new homes or offices drywall painting installation or finishing contractor or handyman services Largo MD means choosing peace of mind, knowing that your project is handled by certified experts who prioritize durability, safety, and local building standards.",
 },
{
 heading:"Certified & Trusted No.1 Drywall Painting Finishing Services Contractor Largo MD",

description:"Achieving a flawless interior starts with the highest level of finishing. At Star Quality Group, we are recognized as the certified & trusted no1 drywall painting finishing services contractor Largo MD. Our process goes beyond just hanging boards; we focus on the art of taping, mudding, and sanding to create a perfectly smooth canvas for your final coat of paint. As a local and affordable home and offices drywall finishing or repairing services contractor Largo MD, we offer high-end results at competitive rates, ensuring every client receives star quality treatment.Our reputation as a professional or reliable new homes or offices drywall painting installation or finishing contractor or handyman services Largo MD is built on meticulous attention to detail. We provide comprehensive on site new home walls drywalls drywall repairing services contractor or handyman in Largo MD, managing the entire project from initial installation to the final professional painting phase. By integrating these services, we eliminate the need for multiple vendors, saving you time and money. Trust Largo’s most reliable team to deliver vibrant, smooth, and professional walls that elevate your property's value and comfort."
 }
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Certified, Affordable, or Reliable Residential or Commercial Drywall Installation or Replacement Contractor in Largo, MD?",
  description: `When you need the job done right, Star Quality Group is the premier choice for property owners throughout the region. As a professional and affordable home or offices drywall installation or replacement painting services contractor or handyman Largo MD, we understand that quality shouldn't break the budget. We bridge the gap between high-end craftsmanship and budget-friendly solutions, ensuring your walls are structurally sound and aesthetically perfect.
If you are searching for cheap rates homes and offices drywall painting repairing services contractor or handyman in Largo MD, our team provides unmatched value without compromising on durability. From full-scale commercial replacements to residential installations, Star Quality Group handles every phase with certified expertise. We take pride in being a reliable local partner, delivering seamless finishes that elevate your interior. Whether it’s a modern office upgrade or a new home build, contact us today for the most trusted drywall and painting services in Largo.`,
  backgroundImage: {
    src: "/22.jpg",
    alt: "Professional drywall installation and repair services in Largo, MD",
  },
  secondImage: {
    src: "/33.jpg",
    alt: "Expert drywall repair team working in Largo, MD",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Star Quality Group - Your Trusted & Premier All Types Drywall Painting Repair or Installation Services Contractor Largo MD",
    description:
      "When you need a skilled and certified drywall services contractor or handyman Largo MD, the choice is clear. Star Quality Group is your local authority for every wall surface requirement. We have built our reputation as the trusted and premier home or offices drywall painting repairing or installation services contractor Largo MD, providing seamless results for both residential and commercial clients.Whether you are looking for a local and affordable dry walls painting services contractor Largo MD to refresh your living room or need complex structural repairs for a large office building, our team delivers unmatched precision. At Star Quality Group, we combine high-end craftsmanship with cost-effective solutions, ensuring every project meets strict safety and aesthetic standards. From initial installation to the final professional paint stroke, we handle the entire process with care. Contact us today to experience the top-rated drywall service your Largo property deserves.",
    image: "/44.jpg",
    alt: "Professional drywall installation services in Largo, MD",
  },
  row2: {
    heading: "Why Choose Star Quality Group for Your New Homes Drywall Painting Contractor or Handyman Services Largo MD?",
    description:
      "When it involves your property’s interior, you deserve the expertise of Star Quality Group. Choosing the right new homes drywall painting contractor or handyman services Largo MD is the difference between a subpar finish and a masterpiece. Our team brings years of specialized experience to every project, ensuring that your new construction or renovation features seamless walls and a flawless paint application. We take pride in our meticulous attention to detail, from precision taping and mudding to the final high-quality coat.At Star Quality Group, we are committed to being the most reliable local partner for homeowners and builders alike. We offer competitive pricing, transparent timelines, and a satisfaction guarantee that sets us apart from the competition. Our certified professionals use industry-leading materials to ensure your walls stay beautiful and durable for years to come. Trust the premier experts in Largo to handle your drywall and painting needs with unparalleled craftsmanship.",
    image: "/55.jpg",
    alt: "Expert drywall repair and finishing services in Largo, MD",
  },
  row3: {
    heading:
      "Why Choose Star Quality Group for Your Drywall Installation and Repair Services Largo MD?",
    description:
      "When you are searching for drywall services near me, you need a partner that prioritizes quality, honesty, and exceptional craftsmanship. Star Quality Group stands out as the skilled and professional trusted drywall installation and repair services contractor in Largo, MD. We have built our reputation on providing a seamless experience for every drywall project client, ensuring that transforming your space is the easiest part of your renovation.Choosing us means working with a dedicated professional drywall contractor Largo MD that understands the complexities of both residential and commercial projects. Whether you are dealing with water damage from a leak or need new construction drywall installation for a renovation project, we offer 24/7 support and expert craftsmanship. Our quality guarantee ensures you aren't just getting walls—you're getting a beautiful, durable finish that enhances your property. As a skilled and professional trusted drywall installation and repair services contractor, we handle all the preparation and cleanup, so you don't have to. Experience the difference of working with Largo's #1 experts today.",
    image: "/66.jpg",
    alt: "Star Quality Group drywall experts working in Largo, MD",
  },
};


export default async function DrywallLargoPage() {
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
