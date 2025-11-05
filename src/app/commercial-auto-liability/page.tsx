import { Metadata } from "next";
import Header from "@/Components/Header";
import CommAutoLiability from "@/ServicesPages/commAuto";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Commercial Auto Liability Insurance | Fleet & Vehicle Coverage",
  description: "Commercial auto liability insurance for trucks, fleets, and business vehicles. Comprehensive coverage meeting DOT requirements with competitive rates. Get quotes for primary liability, hired/non-owned auto, and umbrella coverage.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/commercial-auto-liability',
  },
  openGraph: {
    title: "Commercial Auto Liability Insurance | Fleet & Vehicle Coverage",
    description: "Commercial auto liability insurance for trucks, fleets, and business vehicles. Comprehensive coverage meeting DOT requirements with competitive rates.",
    url: "https://moxieriskpartners.com/commercial-auto-liability",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Commercial Auto Liability Insurance Coverage",
      }
    ],
  },
};

export default function commAuto() {
  return (
    <>
      <Header />
      <CommAutoLiability />
      <Footer />
    </>
  );
}