import { Metadata } from "next";
// import Image from "next/image";
// import Header from "@/Components/Header";
// import Hero from "@/LandingPages/Hero";
// import Overview from "@/LandingPages/Overview";
// import ServiceAreas from "@/LandingPages/serviceAreas";
// import CallToAction from "@/Components/callToAction";
// import Footer from "@/Components/footer";

import ComingSoon from "../Files/comingsoon";

export const metadata: Metadata = {
  title: "Moxie Risk Partners | Commercial Insurance & Risk Management Solutions",
  description: "Specialized commercial insurance for trucking, construction, manufacturing, nonprofits, and public entities. Get competitive quotes on auto liability, workers' comp, cargo insurance, and more. Licensed nationwide with 24/7 support.",
  alternates: {
    canonical: 'https://moxieriskpartners.com',
  },
  openGraph: {
    title: "Moxie Risk Partners | Commercial Insurance & Risk Management Solutions",
    description: "Specialized commercial insurance for trucking, construction, manufacturing, nonprofits, and public entities. Get competitive quotes with expert guidance and 24/7 support.",
    url: "https://moxieriskpartners.com",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moxie Risk Partners - Commercial Insurance Solutions",
      }
    ],
  },
};


export default function Home() {
  return (
    <>
    <ComingSoon />
      {/* <Header />
      <Hero />
      <Overview/>
      <ServiceAreas />
      <CallToAction />
      <Footer />  */}

    </>
  );
}