import { Metadata } from "next";
import Header from "@/Components/Header";
import ContactPage from "@/UtilityPages/contact";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Contact Moxie Risk Partners | Get Your Insurance Quote Today",
  description: "Contact Moxie Risk Partners for commercial insurance quotes. Call (800) 669-4301 or request a quote online. Fast response times, competitive rates, and expert guidance available nationwide.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/contact-us',
  },
  openGraph: {
    title: "Contact Moxie Risk Partners | Get Your Insurance Quote Today",
    description: "Contact Moxie Risk Partners for commercial insurance quotes. Call (800) 669-4301 or request a quote online. Fast response times and competitive rates.",
    url: "https://moxieriskpartners.com/contact-us",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Moxie Risk Partners",
      }
    ],
  },
};

export default function Contact() {
  return (
    <>
      <Header />
      <ContactPage />
      <Footer />
    </>
  );
}