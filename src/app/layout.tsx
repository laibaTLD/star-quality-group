import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { getLandingPageData } from "@/lib/data";
import { LandingPageDataProvider } from "@/components/LandingPageDataProvider";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.starqualitygroup.com"),
  title: {
    default: "Star Quality Group | Painting, Drywall & Basement Refinishing",
    template: "%s | Star Quality Group",
  },
  description:
    "Professional painting, drywall, and basement refinishing services in Maryland and Washington DC. Quality craftsmanship you can trust.",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
  },
  verification: {
    google: "522gDcUew5GtxGy0g2SPVFWaHq4T1CVqwujL-gC7yRQ",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const landingPageData = await getLandingPageData();

  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning
      >
        <LandingPageDataProvider value={landingPageData}>
          {children}
        </LandingPageDataProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GYDRJX8EZB"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GYDRJX8EZB');
          `}
        </Script>
      </body>
    </html>
  );
}
