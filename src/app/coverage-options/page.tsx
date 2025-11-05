import { Metadata } from "next";
import Header from "@/Components/Header";
import Footer from "@/Components/footer";
import CoveragePage from "@/ServicesPages/coverage";

export const metadata: Metadata = {
  title: "Commercial Insurance Coverage Options | Liability, Cargo & More",
  description: "Explore comprehensive commercial insurance coverage options including auto liability, workers compensation, cargo insurance, physical damage, and specialized industry coverage. Find the right protection for your business.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/coverage-options',
  },
  openGraph: {
    title: "Commercial Insurance Coverage Options | Liability, Cargo & More",
    description: "Explore comprehensive commercial insurance coverage options including auto liability, workers compensation, cargo insurance, physical damage, and specialized industry coverage.",
    url: "https://moxieriskpartners.com/coverage-options",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Commercial Insurance Coverage Options",
      }
    ],
  },
};

export default function Coverage() {
  return (
    <>
      <Header />
      <CoveragePage />
      <Footer />
    </>
  );
}