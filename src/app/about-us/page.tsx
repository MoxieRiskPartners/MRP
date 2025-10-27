import { Metadata } from "next";
import Header from "@/Main/Header";
import AboutPage from "@/Files/about";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "About Moxie Risk Partners | 26+ Years Insurance Experience",
  description: "Meet the Moxie Risk Partners team. Over 26 years of commercial insurance expertise serving trucking, construction, manufacturing, nonprofits, and public entities nationwide.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/about-us',
  },
  openGraph: {
    title: "About Moxie Risk Partners | 26+ Years Insurance Experience",
    description: "Meet the Moxie Risk Partners team. Over 26 years of commercial insurance expertise serving trucking, construction, manufacturing, nonprofits, and public entities nationwide.",
    url: "https://moxieriskpartners.com/about-us",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Moxie Risk Partners Team",
      }
    ],
  },
};

export default function About() {
  return (
    <>
      <Header />
      <AboutPage/>
      <Footer />
    </>
  );
}