
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
  title: 'Professional Drywall Installation & Repair Services Upper Marlboro MD | Star Quality Group',
  description: 'Transform your space with Star Quality Group, Upper Marlboro\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/dry-wall/service-areas/upper-marlboro-md',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Professional Drywall Installation & Repair Services Upper Marlboro MD | Star Quality Group',
    description: 'Transform your space with Star Quality Group, Upper Marlboro\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Drywall Installation & Repair Services Upper Marlboro MD | Star Quality Group',
    description: 'Transform your space with Star Quality Group, Upper Marlboro\'s #1 drywall contractor. We provide expert residential and commercial drywall installation, repair, and finishing services for homes and offices. Trust our professional team for flawless results.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Professional Local & Affordable House Drywall Installation or Repairing Services Contractor Upper Marlboro MD",
  areaLabel: "Upper Marlboro, MD",
  description:
    "Looking for professional, affordable drywall installation or repair? Star Quality Group is Upper Marlboro’s certified choice for homes and offices. Our No. 1 local contractors deliver expert painting and seamless repairs at prices you can afford. Get your free estimate now!",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Star Quality Group features friendly, expert drywall agents dedicated to providing Upper Marlboro’s best customer experience.",
    },
    {
      title: "Quick Response",
      description:
        "Need fast repairs? Our Upper Marlboro contractors provide a quick response for all drywall installation inquiries.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer 24/7 support, ensuring Upper Marlboro residents receive professional drywall assistance whenever emergencies happen locally.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Affordable Home & Offices Drywall Repairing Contractor Upper Marlboro MD?",
  paragraphs: [
    "When quality matters, Star Quality Group is the trusted & certified drywalls painting repairing services contractor Upper Marlboro MD homeowners and businesses rely on. We provide elite on site residential building walls or kitchen or bathroom drywall painting repairing or installation services provider Upper Marlboro MD, ensuring your interior surfaces are flawlessly restored. Whether you are dealing with water damage in the kitchen or cracks in the office, our team delivers perfection every time.As a dedicated 24/7 door to door drywall painting repair or installation services contractor Upper Marlboro MD, we are always available to handle your urgent repair needs with precision and speed. Our skilled home and offices dry walls installation or repairing services contractor or painters Upper Marlboro MD combine years of experience with affordable pricing to give you the best value in the region. Let us transform your space—contact us today for a professional consultation!",
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
      question: "Do you offer residential and commercial drywall services?",
      answer:
        "Yes! Star Quality Group is a trusted & premier home or offices drywall painting repairing or installation services contractor Upper Marlboro MD. We handle everything from small residential patches to large-scale commercial installations with certified expertise and professional results.",
    },
    {
      question: "Are your drywall repair and painting services affordable?",
      answer:
        "Absolutely. We pride ourselves on being a local and affordable dry walls painting services contractor Upper Marlboro MD. We offer cheap rates homes and offices drywall painting repairing services contractor or handyman in Upper Marlboro MD without sacrificing quality.",
    },
    {
      question: "Which areas do you serve besides Upper Marlboro?",
      answer:
        "Beyond being a top drywall repairing services contractor Upper Marlboro MD, we serve Bowie MD, Washington DC, College Park MD, and Largo MD. Our team provides 24/7 door to door drywall painting repair or installation services across these regions.",
    },
    {
      question: "Can you handle kitchen and bathroom drywall repairs?",
      answer:
        "Yes. We are a specialized on site residential building walls or kitchen or bathroom drywall painting repairing or installation services provider Upper Marlboro MD. Our skilled and certified drywall services contractor team ensures moisture-resistant, flawless finishes in every room.",
    },
    {
      question: "Why should I choose Star Quality Group over others?",
      answer:
        "We are the certified & trusted No1 drywall painting finishing services contractor Upper Marlboro MD. Our skilled home and offices dry walls installation or repairing services contractor or painters deliver \"Star Quality\" results, ensuring durability and aesthetic perfection.",
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
    "Professional and Trusted Residential or Commercial Drywall Painting Repairing or Installation Contractor Services Contractor, Company or Agency Upper Marlboro MD",
  subHeading: "",
  description:
    "As a professional and trusted residential or commercial drywall painting repairing or installation contractor services contractor, company or agency Upper Marlboro MD, Star Quality Group delivers excellence. We are your local and affordable home and offices drywall finishing or repairing services contractor Upper Marlboro MD, providing elite craftsmanship for every project.",
  ctaButton: {
    label: "Get a Free Quote",
    href: "/contact-us",
  },
  backgroundImage: {
    src: "/11.jpg",
    alt: "Professional drywall installation and repair services in Upper Marlboro, MD",
  },
  overlayText:
    "Star Quality Group delivers expert drywall solutions designed specifically for Bowie residents and businesses. From residential drywall installation to commercial repairs, our professional crew ensures safe, efficient, and high-quality craftsmanship every time.",
};


const SERVICES_CONTENT = {
  title: "Our Services",
  description: `Star Quality Group is Bowie's premier drywall services contractor. We offer professional certified drywall installation and repair services for all residential and commercial needs. From new construction to patch and repair, we guarantee flawless results.`,
 service:[
  {
    heading:"Hire a Premier and Certified Residential or Commercial Drywall Repairing Services Contractor Upper Marlboro MD",
    
description:"When your property demands structural integrity and a flawless aesthetic, you need to hire a premier and certified residential or commercial drywall repairing services contractor Upper Marlboro MD. Star Quality Group stands as the region’s leader, providing a comprehensive suite of solutions for both growing families and expanding businesses. As a local and affordable home and offices drywall finishing or repairing services contractor Upper Marlboro MD, we bridge the gap between high-end craftsmanship and budget-friendly pricing.Our team specializes in high-stakes environments, offering on site new home walls drywalls drywall repairing services contractor or handyman in Upper Marlboro MD. Whether you are dealing with structural settling in a new build or accidental damage in an established office, our technicians arrive fully equipped to restore your surfaces to a like-new condition. We prioritize durability, ensuring that every patch and installation is reinforced to withstand the test of time. By choosing a certified expert, you eliminate the risks of DIY errors and ensure your property maintains its market value with seamless, professional results.",
 },
{
 heading:"Certified & Trusted No.1 Drywall Painting Finishing Services Contractor Upper Marlboro MD",

description:"Achieving a gallery-standard finish requires more than just a brush; it requires the touch of a certified & trusted no1 drywall painting finishing services contractor Upper Marlboro MD. At Star Quality Group, we understand that the finishing stage is what defines the character of your interior. We are recognized as a professional or reliable new homes or offices drywall painting installation or finishing contractor or handyman services Upper Marlboro MD, dedicated to delivering crisp lines, even textures, and vibrant colors that transform dull rooms into inspiring spaces.Our meticulous process involves precision sanding, priming, and multi-coat applications tailored to your specific lighting and usage needs. From contemporary office suites to cozy residential kitchens, our local and affordable home and offices drywall finishing or repairing services contractor Upper Marlboro MD ensures a mess-free, efficient experience. We take pride in our no. 1 reputation by arriving on time and providing on site new home walls drywalls drywall repairing services contractor or handyman in Upper Marlboro MD that exceeds local building codes. Trust our skilled painters to bring your vision to life with a finish that feels as good as it looks."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Certified Affordable or Reliable Residential or Commercial Drywall Installation or Replacement Contractor Company or Agency Upper Marlboro MD?",
  description: `If you are searching for a certified affordable or reliable residential or commercial drywall installation or replacement contractor company or agency Upper Marlboro MD, Star Quality Group is your premier local solution. We understand that quality renovations shouldn't break the budget, which is why we take pride in being a professional and affordable home or offices drywall installation or replacement painting services contractor or handyman Upper Marlboro MD.
Our team specializes in seamless transitions, whether you are building a new addition or replacing aged, damaged surfaces. We offer cheap rates homes and offices drywall painting repairing services contractor or handyman in Upper Marlboro MD without ever compromising on the durability or finish of our work. From high-end commercial build-outs to cozy residential updates, our certified experts ensure every board is hung with precision and every joint is taped to perfection. Contact us today to experience the gold standard in local drywall services!`,
  backgroundImage: {
    src: "/22.jpg",
    alt: "Professional drywall installation and repair services in Upper Marlboro, MD",
  },
  secondImage: {
    src: "/33.jpg",
    alt: "Expert drywall repair team working in Upper Marlboro, MD",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Star Quality Group - Your Trusted & Premier All Types Drywall Painting Repair or Installation Services Contractor Upper Marlboro MD",
    description:
      "When you need a versatile expert for your property, Star Quality Group stands out as your trusted & premier all types drywall painting repair or installation services contractor Upper Marlboro MD. We take pride in being the best local and affordable dry walls painting services contractor Upper Marlboro MD, combining high-end results with budget-friendly solutions for every neighborhood.Our reputation as a trusted and premier home or offices drywall painting repairing or installation services contractor Upper Marlboro MD is built on a foundation of reliability and precision. Whether you are dealing with a simple patch or a complex commercial installation, our skilled and certified drywall services contractor or handyman Upper Marlboro MD arrives prepared to exceed your expectations. From initial hanging to the final coat of premium paint, we ensure your walls are smooth, durable, and aesthetically perfect. Choose the experts who treat your home or office with the care it deserves—choose Star Quality Group.",
    image: "/44.jpg",
    alt: "Professional drywall installation services in Upper Marlboro, MD",
  },
  row2: {
    heading: "Why Choose Star Quality Group for Your New Homes Drywall Painting Contractor or Handyman Services Upper Marlboro MD?",
    description:
      "Choosing Star Quality Group means choosing a partner dedicated to excellence in every square inch of your property. As the premier new homes drywall painting contractor or handyman services Upper Marlboro MD, we bring a unique combination of local expertise and industrial-grade precision to every residential project. We understand that a new home is a significant investment, which is why our team focuses on meticulous preparation and high-quality finishes that stand the test of time.Our reputation as a leading new homes drywall painting contractor or handyman services Upper Marlboro MD is built on our commitment to Star Quality results. We use premium materials and advanced techniques to ensure your walls are perfectly smooth and ready for any aesthetic. From the initial consultation to the final walkthrough, Star Quality Group prioritizes clear communication, on-time project completion, and unmatched attention to detail. Trust our certified handymen to treat your new home with the professional care it deserves.",
    image: "/55.jpg",
    alt: "Expert drywall repair and finishing services in Upper Marlboro, MD",
  },
  row3: {
    heading:
      "Our Services Areas for Drywall Installation or Repairing Services",
    description:
      "At Star Quality Group, we are proud to extend our expert craftsmanship across a wide range of local communities, ensuring that top-tier wall solutions are always within reach. While we are widely recognized as the premier drywall installation or repairing services contractor Upper Marlboro MD, our mobile teams are fully equipped to serve the surrounding regions with the same level of precision and dedication. We provide comprehensive residential and commercial support throughout Bowie MD, helping homeowners restore their interiors after water damage or renovations. Our reach also extends into the heart of Washington DC, where we handle high-end office build-outs and historic home restorations with certified expertise.Additionally, we are the best provider for reliable drywall solutions in College Park MD, catering to both student housing updates and professional office spaces. For those located in Largo MD, our technicians offer rapid-response repairs and seamless new installations tailored to modern building standards. No matter where your property is located within these key areas, Star Quality Group ensures a door-to-door service experience that prioritizes punctuality, cleanliness, and structural integrity. Trust our local experts to bring professional, affordable, and lasting results to your walls today.",
    image: "/66.jpg",
    alt: "Star Quality Group drywall experts working in Upper Marlboro, MD",
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
