import { Metadata } from "next";
import Header from "@/Main/Header";
import NonProfitPage from "@/Files/nonProfit";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Nonprofit Insurance | Directors & Officers Liability Coverage",
  description: "Comprehensive insurance solutions for nonprofit organizations including general liability, directors & officers coverage, workers compensation, and property insurance. Protect your mission with affordable nonprofit insurance.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/non-profit',
  },
  openGraph: {
    title: "Nonprofit Insurance | Directors & Officers Liability Coverage",
    description: "Comprehensive insurance solutions for nonprofit organizations including general liability, directors & officers coverage, workers compensation, and property insurance.",
    url: "https://moxieriskpartners.com/non-profit",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nonprofit Insurance and Liability Coverage",
      }
    ],
  },
};

export default function NonProfitP() {
  return (
    <>
      <Header />
      <NonProfitPage />
      <Footer />
    </>
  );
}