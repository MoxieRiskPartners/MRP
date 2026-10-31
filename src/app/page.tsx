import { Metadata } from "next";
import Header from "@/Components/Header";
import Hero from "@/LandingPages/Hero";
import Overview from "@/LandingPages/Overview";
import ServiceAreas from "@/LandingPages/serviceAreas";
import CallToAction from "@/Components/callToAction";
import Footer from "@/Components/footer";

// Title, description, and social previews come from src/app/layout.tsx
export const metadata: Metadata = {
  alternates: {
    canonical: "https://moxieriskpartners.com",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Overview />
      <ServiceAreas />
      <CallToAction />
      <Footer />
    </>
  );
}