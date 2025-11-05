import { Metadata } from "next";
import Header from "@/Components/Header";
import TermsPage from "@/LegalPages/terms";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Moxie Risk Partners",
  description: "Terms of service for Moxie Risk Partners. Review our terms and conditions for using our commercial insurance services and website.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/terms-service',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | Moxie Risk Partners",
    description: "Terms of service for Moxie Risk Partners. Review our terms and conditions for using our commercial insurance services.",
    url: "https://moxieriskpartners.com/terms-service",
    siteName: "Moxie Risk Partners",
  },
};

export default function Terms() {
  return (
    <>
      <Header />
      <TermsPage />
      <Footer />
    </>
  );
}