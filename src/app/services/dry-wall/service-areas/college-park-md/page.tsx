
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
  title: 'Professional Drywall Installation & Repair Services College Park MD | Star Quality Group',
  description: 'Transform your space with Star Quality Group, College Park\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/dry-wall/service-areas/college-park-md',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Professional Drywall Installation & Repair Services College Park MD | Star Quality Group',
    description: 'Transform your space with Star Quality Group, College Park\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Drywall Installation & Repair Services College Park MD | Star Quality Group',
    description: 'Transform your space with Star Quality Group, College Park\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Professional Local & Affordable House Drywall Installation or Repairing Services Contractor College Park MD",
  areaLabel: "College Park, MD",
  description:
    "Star Quality Group is your #1 local choice for certified home and office drywall services. From affordable new home installation to professional repairs, we deliver trusted, high-quality finishes. Get the best local drywall and painting services in College Park, MD today!",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable experts at Star Quality Group prioritize your satisfaction with personalized, helpful drywall service.",
    },
    {
      title: "Quick Response",
      description:
        "We value your time, providing rapid estimates and fast project turnarounds for College Park residents.",
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated team remains available 24/7 to handle your urgent drywall and painting inquiries.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Affordable Home & Offices Drywall Repairing Contractor College Park MD?",
  paragraphs: [
    "Finding a trusted & certified drywalls painting repairing services contractor in College Park shouldn't be a hassle. Star Quality Group is your premier on-site residential building walls or kitchen or bathroom drywall painting repairing or installation services provider. Whether you are dealing with unsightly cracks, water damage, or finishing a new build, our skilled home and offices dry walls installation or repairing services contractor or painters deliver flawless results every time.We understand that property damage doesn't follow a schedule, which is why we offer 24/7 door to door drywall painting repair or installation services. From small residential patches to large-scale commercial office installations, our team combines technical precision with budget-friendly rates. As a local and affordable house drywall installation expert, we ensure your walls are smooth, primed, and painted to perfection. Choose the no. 1 local and trusted team for all your College Park property needs.",
  ],
};



const FOOTER_SECTION = {
  footerTitle: "Star Quality Group",
  socialsList: [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
  ],
  originCity: "Bowie",
  workingScope: "MD",
  contactEmail: "ashuromeo4@gmail.com",
  agencyName: "Star Quality Group",
};

const FAQ_SECTION = {
  title: "Drywall FAQs",
  description:
    "Get detailed answers about our drywall installation and repair services in Bowie, MD.",
  questions: [
    {
      question: "Do you offer free estimates in College Park?",
      answer:
        "Yes! Star Quality Group provides free, no-obligation quotes for all local and affordable house drywall installation projects. Whether you need a small patch or a full office renovation, our certified home and offices drywall services experts are ready.",
    },
    {
      question: "How long does a typical drywall repair take?",
      answer:
        "Most residential repairs by our skilled home and offices dry walls installation or repairing services contractor are completed within one day. Larger projects, including professional or reliable new homes or offices drywall painting installation, may take longer for drying.",
    },
    {
      question: "Are your drywall services licensed and insured?",
      answer:
        "Absolutely. We are a trusted & certified drywalls painting repairing services contractor College Park MD. Our team follows all local building codes to ensure your residential building walls or kitchen or bathroom drywall painting repairing is safe and durable.",
    },
    {
      question: "Can you match existing wall textures?",
      answer:
        "Our skilled and certified drywall services contractor or handyman specializes in texture matching. From smooth finishes to popcorn or knockdown, we ensure your affordable new home walls drywall repairing blends perfectly with your existing interior surfaces and paint.",
    },
    {
      question: "Do you provide 24/7 emergency repair services?",
      answer:
        "Yes, we offer 24/7 door to door drywall painting repair or installation services. If you have urgent water damage or structural issues, our no. 1 local and trusted team is available around the clock throughout College Park MD.",
    },
  ],
};


const SERVICE_AREAS = {
  title: "Serving All of Maryland & DC Area",
  areas: [
    {
      city: "Bowie",
      region: "MD",
      description: "Certified & Professional #1 Drywall Installation Services - Complete drywall installation and repair services throughout Bowie"
    },
    {
      city: "Upper Marlboro",
      region: "MD",
      description: "Premium drywall installation and repair services in Upper Marlboro"
    },
    {
      city: "Largo",
      region: "MD", 
      description: "Expert drywall repair and finishing services in Largo"
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
    "Professional and Trusted Residential or Commercial Drywall Painting Repairing or Installation Contractor Services Contractor, Company or Agency College Park MD",
  subHeading: "",
  description:
    "Star Quality Group is the premier professional and trusted residential or commercial drywall painting repairing or installation contractor. Our certified home and offices drywall services deliver flawless results. From minor repairs to full installations, we are the no. 1 local and trusted agency in College Park.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/11.jpg",
    alt: "Professional drywall installation and repair services in Bowie, MD",
  },
  overlayText:
    "Star Quality Group delivers expert drywall solutions designed specifically for Bowie residents and businesses. From residential drywall installation to commercial repairs, our professional crew ensures safe, efficient, and high-quality craftsmanship every time.",
};


const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Star Quality Group provides the no. 1 local and trusted new home walls drywall painting services contractor solutions in College Park. We specialize in on-site residential building walls or kitchen or bathroom drywall painting repairing or installation services. From affordable new home walls drywall repairing to professional finishing, our certified team handles it all.`,
 service:[
  {
    heading:"Hire a Premier and Certified Residential or Commercial Drywall Repairing Services Contractor College Park MD",
    
description:"When your property suffers from unsightly cracks, water damage, or structural wear, you need more than just a quick fix—you need a local and affordable home and offices drywall finishing or repairing services contractor in College Park, MD. Star Quality Group specializes in restoring the integrity and aesthetics of your interior spaces. As a premier on site new home walls drywalls drywall repairing services contractor or handyman in College Park, MD, we bring precision tools and years of expertise directly to your doorstep.Our team understands that residential and commercial needs differ significantly. For homeowners, we focus on seamless blending to ensure patches are invisible. For businesses, we prioritize efficiency to minimize operational downtime. Whether it’s a small puncture in a hallway or a large-scale renovation, hiring a professional or reliable new homes or offices drywall painting installation or finishing contractor or handyman services College Park, MD ensures the job is done right the first time. We handle everything from structural reinforcement to the final sanding, leaving your surfaces perfectly smooth and ready for a fresh coat of paint.",
 },
{
 heading:"Certified & Trusted No.1 Drywall Painting Finishing Services Contractor College Park MD",

description:"Achieving a flawless wall requires a master's touch, which is why Star Quality Group is recognized as the certified & trusted no.1 drywall painting finishing services contractor College Park MD. Drywall finishing is an art form that involves taping, mudding, and sanding to achieve a specific Level of finish. As a local and affordable home and offices drywall finishing or repairing services contractor, we offer customized solutions ranging from textured finishes to high-end, smooth Level 5 surfaces that look stunning under any lighting.Our on-site new home walls drywalls drywall repairing services contractor or handyman team doesn't just stop at the mudding phase. We provide comprehensive professional or reliable new homes or offices drywall painting installation or finishing contractor or handyman services College Park, MD to give your property a complete makeover. By choosing a certified expert, you avoid the common pitfalls of DIY projects, such as visible seams or uneven textures. We use premium materials and dust-containment strategies to keep your environment clean. Trust our skilled painters and installers to transform your College Park property with a durable, high-quality finish that stands the test of time."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Certified Affordable or Reliable Residential or Commercial Drywall Installation or Replacement Contractor Company or Agency College Park MD?",
  description: `Finding a certified affordable or reliable residential or commercial drywall installation or replacement contractor company or agency College Park MD is essential for maintaining your property’s structural integrity and aesthetic value. Star Quality Group stands out as the premier choice, offering a seamless blend of expert craftsmanship and cost-effective solutions. As a professional and affordable home or offices drywall installation or replacement painting services contractor or handyman College Park MD, we handle everything from the initial framing and hanging to the final, smooth finish.
We take pride in providing cheap rates homes and offices drywall painting repairing services contractor or handyman in College Park MD without compromising on the quality of materials or the precision of our work. Whether you are renovating a historic home or outfitting a modern commercial office, our team ensures every sheet is perfectly leveled and every seam is invisible. Trust our local experts to deliver durable, fire-resistant, and beautifully finished walls that provide the perfect canvas for your next painting project.`,
  backgroundImage: {
    src: "/22.jpg",
    alt: "Professional drywall installation and repair services in College Park, MD",
  },
  secondImage: {
    src: "/33.jpg",
    alt: "Expert drywall repair team working in College Park, MD",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Star Quality Group - Your Trusted & Premier All Types Drywall Painting Repair or Installation Services Contractor College Park MD",
    description:
      "When it comes to maintaining the beauty of your property, Star Quality Group stands as the trusted and premier home or offices drywall painting repairing or installation services contractor College Park MD. We understand that wall damage can diminish your space’s appeal, which is why our skilled and certified drywall services contractor or handyman College Park MD provides meticulous repairs and flawless new installations.As a local and affordable dry walls painting services contractor College Park MD, we bridge the gap between high-end craftsmanship and budget-friendly pricing. Whether you are dealing with moisture damage in a bathroom or need a complete drywall overhaul for a commercial office, our team ensures a smooth, paint-ready surface every time. By choosing Star Quality Group, you are partnering with a dedicated team committed to durability and aesthetic excellence. Trust our local experts to revitalize your walls with the professional care your College Park property deserves.",
    image: "/44.jpg",
    alt: "Professional drywall installation services in College Park, MD",
  },
  row2: {
    heading: "Why Choose Star Quality Group for Your New Homes Drywall Painting Contractor or Handyman Services College Park MD?",
    description:
      "Choosing the right partner for your property is essential for long-term durability and aesthetic appeal. Star Quality Group stands out as the premier choice because we combine local expertise with world-class finishing techniques. As a trusted and premier home or offices drywall painting repairing or installation services contractor College Park MD, we understand the specific needs of Maryland property owners, from climate-appropriate materials to modern interior trends.Our skilled and certified drywall services contractor or handyman College Park MD team is committed to perfection, ensuring every seam is invisible and every surface is smooth. We pride ourselves on being a local and affordable dry walls painting services contractor College Park MD that never cuts corners. When you choose Star Quality Group, you aren't just hiring a laborer; you are investing in a seamless, stress-free experience backed by 24/7 support and a reputation for excellence. Let us turn your new house into a masterpiece with our professional drywall and painting solutions.",
    image: "/55.jpg",
    alt: "Expert drywall repair and finishing services in College Park, MD",
  },
  row3: {
    heading:
      "Our Services Areas for Drywall Installation or Repairing Services",
    description:
      "Star Quality Group is proud to offer the most reliable and professional and affordable home or offices drywall installation or replacement painting services across a wide geographical footprint. While we are a trusted and premier home or offices drywall painting repairing or installation services contractor College Park MD, our reach extends far beyond city limits to ensure every property owner in the region has access to a skilled and certified drywall services contractor or handyman. We provide comprehensive on-site residential building walls or kitchen or bathroom drywall painting repairing or installation services in Bowie MD and throughout the bustling neighborhoods of Washington DC.Our team is also the No. 1 local and trusted new home walls drywall painting services contractor for clients in Largo MD and Upper Marlboro MD, bringing Level 5 finishing and expert structural repairs to both suburban homes and commercial hubs. Whether you need cheap rates homes and offices drywall painting repairing services in the heart of the capital or a local and affordable dry walls painting services contractor in Prince George’s County, we are your door-to-door solution. From College Park MD to the surrounding metropolitan areas, our commitment to excellence ensures your walls are smooth, sturdy, and expertly painted.",
    image: "/66.jpg",
    alt: "Star Quality Group drywall experts working in College Park, MD",
  },
};


export default async function DrywallCollegeParkPage() {
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
