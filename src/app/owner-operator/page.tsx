import { Metadata } from "next";
import Header from "@/Components/Header";
import OwnerOperator from "@/ServicesPages/ownerOperator";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Owner Operator Insurance | Truck Insurance for Independent Drivers",
  description: "Specialized owner operator truck insurance with flexible coverage and certificates of insurance. Commercial auto liability, cargo, physical damage, and occupational accident coverage. DOT filings handled upon binding.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/owner-operator',
  },
  openGraph: {
    title: "Owner Operator Insurance | Truck Insurance for Independent Drivers",
    description: "Specialized owner operator truck insurance with flexible coverage and certificates of insurance. Commercial auto liability, cargo, physical damage, and occupational accident coverage.",
    url: "https://moxieriskpartners.com/owner-operator",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/Moxie_Horizontal_TwoColor.jpg",
        width: 1200,
        height: 630,
        alt: "Owner Operator Truck Insurance",
      }
    ],
  },
};

export default function OwnerOperatorCoveragePage() {
  return (
    <>
      <Header />
      <OwnerOperator />
      <Footer />
    </>
  );
}