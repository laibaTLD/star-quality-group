import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { getLandingPageData } from "@/lib/data";
import { LandingPageDataProvider } from "@/components/LandingPageDataProvider";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
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
