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
  metadataBase: new URL('https://moxieriskpartners.com'),
  title: "Moxie Risk Partners | Commercial Insurance & Risk Management Solutions",
  description: "Specialized commercial insurance for trucking, construction, manufacturing, nonprofits, and public entities. Get competitive quotes on auto liability, workers' comp, cargo insurance, and more. Licensed nationwide with 24/7 support.",
  keywords: "commercial insurance, trucking insurance, workers compensation, cargo insurance, construction insurance, manufacturing insurance, nonprofit insurance, public entity insurance, commercial auto liability, DOT compliance, owner operator insurance, fleet insurance, motor truck cargo, physical damage insurance, business insurance quotes, liability insurance, commercial vehicle insurance",
  authors: [{ name: "Moxie Risk Partners" }],
  creator: "Moxie Risk Partners",
  publisher: "Moxie Risk Partners",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://moxieriskpartners.com',
  },
  openGraph: {
    type: "website",
    url: "https://moxieriskpartners.com/",
    title: "Moxie Risk Partners | Commercial Insurance & Risk Management Solutions",
    description: "Specialized commercial insurance for trucking, construction, manufacturing, nonprofits, and public entities. Get competitive quotes with expert guidance and 24/7 support.",
    siteName: "Moxie Risk Partners",
    locale: "en_US",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moxie Risk Partners - Commercial Insurance Solutions",
        type: "image/png",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moxie Risk Partners | Commercial Insurance & Risk Management Solutions",
    description: "Specialized commercial insurance for trucking, construction, manufacturing, nonprofits, and public entities. Get competitive quotes with expert guidance and 24/7 support.",
    images: ["https://moxieriskpartners.com/images/twitter-image.png"],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'insurance',
  classification: 'Business',
  other: {
    "theme-color": "#ea580c",
    "geo.region": "US",
    "geo.placename": "United States",
    "geo.position": "39.8283;-98.5795",
    "ICBM": "39.8283, -98.5795",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
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
          strategy="beforeInteractive"
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
                "name": "United States",
                "sameAs": "https://en.wikipedia.org/wiki/United_States"
              },
              "availableLanguage": ["en"],
              "currenciesAccepted": "USD",
              "paymentAccepted": "Cash, Check, Credit Card, Electronic Funds Transfer",
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
              ],
              "slogan": "Commercial insurance that moves as fast as you do",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress", 
                "streetAddress": "5900 Saratoga Rd", 
                "addressLocality": "Asbury",
                "addressRegion": "Iowa", 
                "postalCode": "52002", 
                "addressCountry": "US"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-800-669-4301",
                  "email": "quotes@moxieriskpartners.com",
                  "contactType": "Sales",
                  "availableLanguage": ["English"],
                  "areaServed": "US",
                  "contactOption": "TollFree",
                  "hoursAvailable": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "08:00",
                    "closes": "18:00"
                  }
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-800-669-4301",
                  "email": "claims@moxieriskpartners.com",
                  "contactType": "Customer Service",
                  "availableLanguage": ["English"],
                  "areaServed": "US",
                  "contactOption": "TollFree"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "287",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": []
            })
          }}
        />

        {/* COMPREHENSIVE FAQ Schema - ALL Questions from Your FAQ Page */}
        <Script
          id="schema-faq"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                // Claims FAQs
                {
                  "@type": "Question",
                  "name": "How quickly should I report a claim?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Immediately. Our 24/7 hotline ensures you can report anytime for all business types. Quick reporting preserves evidence and activates our industry-specialized response team."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What information do I need to report a claim?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Policy number, incident details, location, photos, and contact information. Additional details vary by industry: trucking requires DOT numbers and cargo details, construction needs project information, manufacturing requires equipment details."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will my rates increase after filing a claim?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not all claims affect rates. Comprehensive claims (weather, theft) typically don't impact pricing regardless of your industry. We focus on loss prevention programs to minimize rate impacts."
                  }
                },
                // Trucking - Commercial Auto Liability FAQs
                {
                  "@type": "Question",
                  "name": "What is the minimum liability coverage required for commercial trucks?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FMCSA requires $750,000 minimum liability for interstate operations with general freight. Hazmat carriers need $5 million. Many shippers require $1 million minimum."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does commercial auto liability cover my own vehicle damage?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, liability insurance only covers damage to others. You need physical damage coverage (comprehensive and collision) to protect your own vehicles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How quickly can I get a certificate of insurance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide instant certificates of insurance once your policy is bound. This is essential for DOT compliance and meeting shipper requirements."
                  }
                },
                // Trucking - Owner Operator FAQs
                {
                  "@type": "Question",
                  "name": "Do I need my own insurance if I'm leased to a carrier?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, motor carrier policies typically only cover liability when under dispatch. You need your own physical damage, non-trucking use, and other coverages to fill the gaps when you're not hauling their freight."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the minimum liability coverage required for owner operators?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "FMCSA requires $750,000 minimum for general freight interstate operations. Many brokers and shippers require $1 million. Hazmat and other specialized cargo types require higher limits up to $5 million."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How quickly can I get owner operator coverage?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With proper documentation, we can often provide same-day coverage and instant certificates. DOT filings are submitted immediately upon binding your policy."
                  }
                },
                // Trucking - Motor Truck Cargo FAQs
                {
                  "@type": "Question",
                  "name": "Is cargo insurance required for truckers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While not federally required, most shippers and brokers require truckers to carry cargo insurance to protect their freight. It's essential for securing contracts and protecting your business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much cargo insurance coverage do I need?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Coverage limits typically range from $5,000 to $250,000 depending on the value of freight you haul. Many shippers require minimum limits of $100,000 to $250,000."
                  }
                },
                // Trucking - Fleet Insurance FAQs
                {
                  "@type": "Question",
                  "name": "What is considered a commercial fleet?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A commercial fleet typically consists of 10 or more vehicles used for business purposes. This includes delivery vehicles, service trucks, company cars, and any vehicles used to generate income for your business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much can I save with fleet insurance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fleet insurance savings typically range from 15-25% compared to individual policies. The more vehicles you have, the greater your potential savings due to volume discounts and simplified administration."
                  }
                },
                // Construction FAQs
                {
                  "@type": "Question",
                  "name": "What construction insurance do I need?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most construction businesses need General Liability, Workers' Compensation, and Commercial Auto as core coverage. Additional requirements vary by state, project type, and contracts."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does construction insurance cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Costs vary by trade, experience, and location. General liability typically ranges $400-$1,500 annually per $100K revenue. Workers' comp is 2-15% of payroll depending on classification."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do subcontractors need their own insurance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, subcontractors typically need General Liability, Workers' Compensation, and Commercial Auto. You'll need certificates of insurance and may add the GC as additional insured."
                  }
                },
                // Manufacturing FAQs
                {
                  "@type": "Question",
                  "name": "What types of manufacturing insurance do I need?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most manufacturing businesses need Product Liability, General Liability, Workers' Compensation, and Commercial Property insurance as core coverage. Additional coverage may include Equipment Breakdown, Cyber Liability, and Environmental Liability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is product liability insurance required for manufacturers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "While not legally required in most states, product liability insurance is essential for manufacturers as it protects against costly lawsuits from product defects, design flaws, or injuries caused by your products."
                  }
                },
                // Workers Compensation FAQs
                {
                  "@type": "Question",
                  "name": "Is workers' compensation insurance required for my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Workers' compensation requirements vary by state, but most states require coverage if you have employees. Some states have different thresholds, and certain industries have specific requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does workers' compensation insurance cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Workers' comp costs are calculated based on your industry classification code, payroll, and claims history. Rates typically range from $0.50 to $5.00 per $100 of payroll, depending on risk level."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does workers' compensation insurance cover?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Workers' comp covers medical expenses, lost wages (typically 60-70% of salary), disability benefits, and rehabilitation costs for work-related injuries or illnesses. It also provides death benefits for families of workers killed on the job."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I reduce my workers' compensation premiums?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Implement comprehensive safety programs, provide regular employee training, maintain good claims management, conduct return-to-work programs, and work with experienced brokers to ensure proper classification codes."
                  }
                }
              ]
            })
          }}
        />

        {/* Website Schema */}
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://moxieriskpartners.com/#website",
              "url": "https://moxieriskpartners.com",
              "name": "Moxie Risk Partners",
              "description": "Commercial Insurance & Risk Management Solutions",
              "publisher": {
                "@id": "https://moxieriskpartners.com/#organization"
              },
              "inLanguage": "en-US"
            })
          }}
        />

        {/* Breadcrumb Schema */}
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://moxieriskpartners.com/"
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