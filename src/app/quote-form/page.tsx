import { Metadata } from "next";
import Header from "@/Main/Header";
import QuotePage from "@/Files/quote";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Get a Free Commercial Insurance Quote | Fast & Competitive Rates",
  description: "Request your free commercial insurance quote online. Get competitive rates on trucking insurance, workers comp, cargo coverage, and more. Same-day quotes available with A+ rated carriers.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/quote-form',
  },
  openGraph: {
    title: "Get a Free Commercial Insurance Quote | Fast & Competitive Rates",
    description: "Request your free commercial insurance quote online. Get competitive rates on trucking insurance, workers comp, cargo coverage, and more. Same-day quotes available.",
    url: "https://moxieriskpartners.com/quote-form",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Get Your Commercial Insurance Quote",
      }
    ],
  },
};

export default function Quote() {
  return (
    <>
      <Header />
      <QuotePage/>
      <Footer />
    </>
  );
}