import { Metadata } from "next";
import Header from "@/Main/Header";
import Footer from "@/Components/footer";
import FAQPage from "@/Components/faq";

export const metadata: Metadata = {
  title: "FAQ | Commercial Insurance Questions Answered | Moxie Risk Partners",
  description: "Find answers to frequently asked questions about commercial insurance, trucking insurance, workers compensation, cargo coverage, and more. Get expert guidance on coverage options, pricing, and claims.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/faq-page',
  },
  openGraph: {
    title: "FAQ | Commercial Insurance Questions Answered | Moxie Risk Partners",
    description: "Find answers to frequently asked questions about commercial insurance, trucking insurance, workers compensation, cargo coverage, and more.",
    url: "https://moxieriskpartners.com/faq-page",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Commercial Insurance FAQ",
      }
    ],
  },
};

export default function FAQ() {
  return (
    <>
      <Header />
      <FAQPage/>
      <Footer />
    </>
  );
}