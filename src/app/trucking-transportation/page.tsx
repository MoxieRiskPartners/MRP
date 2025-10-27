import { Metadata } from "next";
import Header from "@/Main/Header";
import TruckingTransportationPage from "@/Files/truckingTransportation";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Trucking Insurance | Commercial Auto Liability for Carriers & Fleets",
  description: "Specialized trucking insurance for owner-operators and fleets. Commercial auto liability, cargo, physical damage, and DOT compliance. Get competitive quotes in 24 hours with A+ rated carriers.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/trucking-transportation',
  },
  openGraph: {
    title: "Trucking Insurance | Commercial Auto Liability for Carriers & Fleets",
    description: "Specialized trucking insurance for owner-operators and fleets. Commercial auto liability, cargo, physical damage, and DOT compliance. Get competitive quotes in 24 hours.",
    url: "https://moxieriskpartners.com/trucking-transportation",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trucking Insurance for Owner-Operators and Fleets",
      }
    ],
  },
};

export default function TruckingTransportation() {
  return (
    <>
      <Header />
      <TruckingTransportationPage />
      <Footer />
    </>
  );
}