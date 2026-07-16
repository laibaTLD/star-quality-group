
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
  title: 'Experienced Dry Wall Repair & Installation Contractor in Bowie, MD | Star Quality Group',
  description: 'Top‑rated drywall installation and repair in Bowie, MD. Star Quality Group delivers expert workmanship to transform your space with quality and reliability.',
  alternates: {
    canonical: 'https://www.starqualitygroup.com/services/dry-wall/service-areas/bowie-md',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Experienced Dry Wall Repair & Installation Contractor in Bowie, MD | Star Quality Group',
    description: 'Top‑rated drywall installation and repair in Bowie, MD. Star Quality Group delivers expert workmanship to transform your space with quality and reliability.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experienced Dry Wall Repair & Installation Contractor in Bowie, MD | Star Quality Group',
    description: 'Top‑rated drywall installation and repair in Bowie, MD. Star Quality Group delivers expert workmanship to transform your space with quality and reliability.',
  },
};

export const revalidate = 60;

// Data variables
const SERVICE_DATA = {
  title: "Professional Local & Affordable House Drywall Installation or Repairing Services Contractor Bowie MD",
  areaLabel: "Bowie, MD",
  description:
    "Star Quality Group is your no. 1 choice for certified, affordable drywall installation and repair. From new home finishing to professional office painting, our local experts deliver seamless results. Get trusted, high-quality wall repairs at a price you can afford.",
  subheading: "Reclaim your space with Star Quality Group",
  bullets: [
    {
      title: "Friendly Agents",
      description:
        "Our approachable experts at Star Quality Group prioritize your needs with professional, polite, and personalized service.",
    },
    {
      title: "Quick Response",
      description:
        "We value your time, providing rapid project estimates and fast turnaround for every Bowie drywall repair.",
    },
    {
      title: "24/7 Support",
      description:
        "Experience total peace of mind with our dedicated team available around the clock for urgent inquiries.",
    },
  ],
};



const INTRO_SECTION = {
  title:
    "Are You Looking for a Professional and Affordable Home & Office Drywall Repair Contractor in Bowie, MD?",
  paragraphs: [
    "If you are searching for a trusted & certified drywalls painting repairing services contractor Bowie MD, look no more than Star Quality Group. We specialize in delivering high-quality finishes for both residential and commercial properties. Whether you need an on-site residential building walls or kitchen or bathroom drywall painting repairing or installation services provider Bowie MD, our team ensures seamless results that blend perfectly with your existing structure.As a 24/7 door to door drywall painting repair or installation services contractor Bowie MD, we understand that wall damage does not follow a schedule. That is why we offer 24/7 availability to handle emergencies or tight renovation timelines. Our skilled home and offices dry walls installation or repairing services contractor or painters Bowie MD use premium materials and proven techniques to eliminate cracks, holes, and water damage. Choose the local experts committed to durability, affordability, and aesthetic excellence for every project.",
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
      question: "What services does Star Quality Group provide in Bowie, MD?",
      answer:
        "We offer complete drywall installation, seamless repairing, and professional painting services. Whether it is a new home build or a quick office patch-up, our certified team ensures a flawless, high-quality finish for every residential or commercial project we handle.",
    },
    {
      question: "Do you offer emergency 24/7 drywall repair services?",
      answer:
        "Yes! We are a leading local and affordable drywall installation services contractor or company. Our team uses premium materials and proven techniques to ensure your walls are smooth, durable, and perfect for any residential or commercial building project.",
    },
    {
      question: "Are your drywall and painting services affordable for homeowners?",
      answer:
        "Absolutely. We pride ourselves on being a local and affordable drywall finishing contractor. We offer cheap rates for homes and offices in Bowie without ever compromising on the quality of our materials or the precision of our skilled handyman services.",
    },
    {
      question: "Which areas do you serve besides Bowie, MD?",
      answer:
        "Beyond Bowie, our expert teams provide top-tier drywall installation and repair in Washington DC, College Park MD, Largo MD, and Upper Marlboro MD. We are committed to bringing professional, reliable, and certified wall services to our entire local regional community.",
    },
    {
      question: " Why should I hire a professional contractor for drywall finishing?",
      answer:
        "Professional finishing ensures structural integrity and a smooth, \"Level 5\" appearance. Star Quality Group uses specialized tools to eliminate visible seams and cracks, providing a durable surface that increases your property value and looks perfect under any lighting condition.",
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
    {
      city: "Upper Marlboro",
      region: "MD",
      description: "Professional drywall finishing and texturing services in Upper Marlboro"
    }
  ]
};

const CTA_DATA = {
  heading:
    "Professional and Trusted Residential or Commercial Drywall Painting, Repairing, or Installation Contractor Services Contractor, Company, or Agency Bowie, MD",
  subHeading: "",
  description:
    "Star Quality Group is your premier partner for flawless walls. As a certified agency in Bowie, MD, we provide expert drywall installation, seamless repairs, and professional painting. Trust our skilled team for affordable, high-quality residential and commercial solutions delivered with precision.",
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
  description: `Star Quality Group provides complete solutions for every wall in your home or office. From certified drywall installation and seamless repairing services to professional painting and finishing, our skilled team ensures perfection. We handle kitchens, bathrooms, and new constructions with a commitment to being affordable, local, and reliable.`,
 service:[
  {
    heading:"Hire a Premier and Certified Residential or Commercial Drywall Repairing Services Contractor in Bowie, MD",
    
description:"When your property suffers from unsightly wall damage, you need a solution that combines durability with aesthetic perfection. Star Quality Group stands out as the local and affordable home and offices drywall finishing or repairing services contractor Bowie MD residents trust for high-caliber results. Whether you are dealing with minor cracks from foundation settling or significant holes from renovations, our team provides the expert touch needed to restore your surfaces.As a dedicated on site new home walls drywalls drywall repairing services contractor or handyman in Bowie MD, we bring all necessary tools and premium materials directly to your doorstep. We specialize in seamless patching, moisture-resistant repairs for kitchens and bathrooms, and structural reinforcements for commercial office spaces. Our commitment to excellence ensures that once our work is complete, the repaired area is indistinguishable from the rest of the wall, providing a flawless foundation for any future design or décor.",
 },
{
 heading:"Certified & Trusted No. 1 Drywall Painting and Finishing Services Contractor in Bowie, MD",

description:"Achieving a high-end look for your interior requires more than just hanging boards; it demands the skill of a professional or reliable new homes or offices drywall painting installation or finishing contractor or handyman Services Bowie MD. Star Quality Group takes pride in delivering Level 5 finishes that are smooth, uniform, and ready for the spotlight. We understand that the final texture and paint application are what truly define the atmosphere of your living or workspace.From initial installation to the final coat of premium paint, we function as your comprehensive certified & trusted no. 1 drywall painting finishing services contractor Bowie MD. Our artisans meticulously sand, prime, and paint to ensure vibrant color payoff and long-lasting protection against wear and tear. By choosing our certified team, you are investing in a service that prioritizes clean workspaces, timely completion, and a sophisticated finish that enhances the overall value of your Bowie property."
}
  ]
};



const OVERLAY_CARD_SECTION = {
  heading:
    "Looking for a Certified, Affordable, or Reliable Residential or Commercial Drywall Installation or Replacement Contractor, Company, or Agency in Bowie, MD?",
  description: `When you are planning a renovation or starting a new build, finding a professional and affordable home or offices drywall installation or replacement painting services contractor or handyman Bowie MD is the most important step for a high-quality finish. Star Quality Group specializes in high-precision installations that provide the perfect foundation for any interior. Our certified team manages everything from structural hanging to the final sanding, ensuring every corner is square and every surface is smooth.
We take pride in offering cheap rates homes and offices drywall painting repairing services contractor or handyman in Bowie MD, making professional-grade results accessible to every property owner in the region. Whether you are replacing water-damaged boards in a basement or installing fire-rated drywall for a commercial office, our agency delivers efficiency and durability. Trust our Bowie-based experts to provide a seamless, reliable experience that transforms your space while staying strictly within your project’s budget and timeline.r unwanted car buyer. Contact us today to turn your scrap into a payout!`,
  backgroundImage: {
    src: "/22.jpg",
    alt: "Junk removal and demolition services in Sun City, AZ",
  },
  secondImage: {
    src: "/33.jpg",
    alt: "Professional junk removal team in Sun City, AZ",
  },
};



const SERVICE_DETAIL_SECTION = {
  row1: {
    heading:
      "Star Quality Group - Your Trusted & Premier All Types Drywall Painting, Repair, or Installation Services Contractor in Bowie, MD",
    description:
      "When it comes to maintaining the structural integrity and beauty of your property, Star Quality Group is the trusted and premier home or offices drywall painting repairing or installation services contractor Bowie MD. We understand that every wall tells a story, which is why we offer complete solutions tailored to your unique needs. Whether you are dealing with minor cracks or require a full-scale renovation, our skilled and certified drywall services contractor or handyman Bowie MD is equipped with the latest tools and techniques to ensure a flawless finish every time.As a leading local and affordable dry walls painting services contractor Bowie MD, we pride ourselves on delivering high-end results without the premium price tag. From residential living rooms to expansive commercial office spaces, our team handles everything from initial hanging and taping to the final coat of paint. We are committed to punctuality, cleanliness, and superior craftsmanship, making us the best agency for all your drywall and painting needs in the Bowie area.",
    image: "/44.jpg",
    alt: "Eco-friendly junk removal services in Sun City, AZ",
  },
  row2: {
    heading: "Why Choose Star Quality Group for Your New Homes Drywall Painting Contractor or Handyman Services Bowie MD?",
    description:
      "Choosing the right partner for your interior surfaces is the difference between a mediocre finish and a stunning, long-lasting home. Star Quality Group has established itself as the leading provider in the region because we combine technical precision with unmatched customer care. When you hire us as your New homes drywall painting contractor or handyman services Bowie MD, you are investing in a team that understands the local climate's impact on drywall expansion and contraction, ensuring your walls stay crack-free for years to come.Our reputation as a premier service provider is built on our clean-site policy and our commitment to using high-grade, low-VOC materials. Star Quality Group doesn't just patch holes; we restore the structural integrity of your property. From perfectly taped joints to a smooth, uniform paint application, our attention to detail is what sets us apart. For reliable, expert-led, and timely results in Bowie, we are the local team that consistently exceeds expectations.",
    image: "/55.jpg",
    alt: "Same day trash removal services in Sun City, AZ",
  },
  row3: {
    heading:
      "Our Service Areas for Drywall Installation or Repairing Services",
    description:
      "At Star Quality Group, we take pride in being the leading regional experts, providing a wide range of professional wall solutions across several key locations. While our primary focus remains as the top-rated drywall installation and repairing services contractor in Bowie MD, our mobile teams are fully equipped to bring high-quality craftsmanship to your doorstep in Washington DC. We understand the unique architectural needs of both historic urban properties and modern suburban developments, which is why residents in College Park MD frequently rely on us for seamless patching and structural drywall replacements.Our commitment to excellence extends further into Prince George's County, where we offer rapid response times and affordable rates for homeowners and businesses in Largo MD. Additionally, if you are looking for a trusted handyman or a certified painting contractor in Upper Marlboro MD, our specialists are ready to handle everything from minor water damage restoration to full-scale new construction finishing. By maintaining a strong local presence in these areas, we ensure that every client receives personalized attention, durable materials, and a flawless finish that stands the test of time.",
    image: "/66.jpg",
    alt: "Junk Butlers team working in Sun City, AZ",
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
