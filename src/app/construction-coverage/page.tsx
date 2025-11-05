import { Metadata } from "next";
import Header from "@/Components/Header";
import ConstructionPage from "@/IndustriesPages/construction";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Construction Insurance | General Liability & Workers Comp for Contractors",
  description: "Comprehensive construction insurance for contractors, builders, and subcontractors. General liability, workers compensation, commercial auto, and equipment coverage. Get competitive quotes for your trade.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/construction-coverage',  // ✅ CHANGED
  },
  openGraph: {
    title: "Construction Insurance | General Liability & Workers Comp for Contractors",
    description: "Comprehensive construction insurance for contractors, builders, and subcontractors. General liability, workers compensation, commercial auto, and equipment coverage.",
    url: "https://moxieriskpartners.com/construction-coverage",  // ✅ CHANGED
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Construction Insurance for Contractors and Builders",
      }
    ],
  },
};

export default function Construction() {
  return (
    <>
      <Header />
      <ConstructionPage />
      <Footer />
    </>
  );
}