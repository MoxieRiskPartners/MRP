import { Metadata } from "next";
import Header from "@/Main/Header";
import PhysicalDamage from "@/Files/physicaldamage";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Physical Damage Insurance | Collision & Comprehensive Coverage for Trucks",
  description: "Protect your commercial vehicles with physical damage insurance. Comprehensive and collision coverage for trucks, trailers, and equipment. Coverage for accidents, theft, vandalism, and natural disasters.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/physical-damage',
  },
  openGraph: {
    title: "Physical Damage Insurance | Collision & Comprehensive Coverage for Trucks",
    description: "Protect your commercial vehicles with physical damage insurance. Comprehensive and collision coverage for trucks, trailers, and equipment.",
    url: "https://moxieriskpartners.com/physical-damage",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Physical Damage Insurance for Commercial Trucks",
      }
    ],
  },
};

export default function PhysicalDamagePage() {
  return (
    <>
      <Header />
      <PhysicalDamage/>
      <Footer />
    </>
  );
}