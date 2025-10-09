import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moxie Risk Partners | Commercial Insurance & Risk Management Solutions",
  description: "Specialized commercial insurance for trucking, construction, manufacturing, nonprofits, and public entities. Get competitive quotes on auto liability, workers' comp, cargo insurance, and more. Licensed nationwide with 24/7 support.",
  keywords: "commercial insurance, trucking insurance, workers compensation, cargo insurance, construction insurance, manufacturing insurance, nonprofit insurance, public entity insurance, commercial auto liability, DOT compliance, owner operator insurance, fleet insurance, motor truck cargo, physical damage insurance, business insurance quotes, liability insurance, commercial vehicle insurance",
  authors: [{ name: "Moxie Risk Partners" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    url: "https://moxieriskpartners.com/",
    title: "Moxie Risk Partners | Commercial Insurance & Risk Management Solutions",
    description: "Specialized commercial insurance for trucking, construction, manufacturing, nonprofits, and public entities. Get competitive quotes with expert guidance and 24/7 support.",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moxie Risk Partners - Commercial Insurance Solutions",
      }
    ],
    siteName: "Moxie Risk Partners",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moxie Risk Partners | Commercial Insurance & Risk Management Solutions",
    description: "Specialized commercial insurance for trucking, construction, manufacturing, nonprofits, and public entities. Get competitive quotes with expert guidance and 24/7 support.",
    images: ["https://moxieriskpartners.com/images/twitter-image.png"],
  },
  other: {
    "theme-color": "#ea580c",
    "geo.region": "US",
    "geo.placename": "United States",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema for Insurance Agency */}
        <Script
          id="schema-insurance-agency"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              "@id": "https://moxieriskpartners.com/#organization",
              "name": "Moxie Risk Partners",
              "alternateName": "Moxie Risk",
              "url": "https://moxieriskpartners.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://moxieriskpartners.com/images/logo.png",
                "width": 600,
                "height": 200
              },
              "image": "https://moxieriskpartners.com/images/og-image.png",
              "description": "Specialized commercial insurance agency providing trucking insurance, workers compensation, cargo insurance, construction insurance, and risk management solutions nationwide.",
              "telephone": "+1-800-669-4301",
              "email": "quotes@moxieriskpartners.com",
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "serviceType": [
                "Commercial Auto Liability Insurance",
                "Workers Compensation Insurance",
                "Motor Truck Cargo Insurance",
                "Physical Damage Insurance",
                "Construction Insurance",
                "Manufacturing Insurance",
                "Nonprofit Insurance",
                "Public Entity Insurance",
                "Owner Operator Insurance",
                "Fleet Insurance",
                "DOT Compliance Services"
              ]
            })
          }}
        />

        {/* FAQ Schema */}
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What types of commercial insurance does Moxie Risk Partners offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We specialize in commercial auto liability, workers' compensation, motor truck cargo, physical damage, construction insurance, manufacturing insurance, nonprofit insurance, and public entity coverage. We serve trucking companies, owner-operators, construction contractors, manufacturers, and more nationwide across all 50 states."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How quickly can I get an insurance quote?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most quotes are provided within 2 business hours. For urgent needs, call us at (800) 669-4301 for immediate assistance. We offer same-day certificates and instant DOT filings when needed for trucking operations."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}