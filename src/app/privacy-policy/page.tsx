import { Metadata } from "next";
import Header from "@/Main/Header";
import PrivacyPage from "@/Files/privacy";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Moxie Risk Partners",
  description: "Privacy policy for Moxie Risk Partners. Learn how we collect, use, and protect your personal information when you use our commercial insurance services.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Moxie Risk Partners",
    description: "Privacy policy for Moxie Risk Partners. Learn how we collect, use, and protect your personal information.",
    url: "https://moxieriskpartners.com/privacy-policy",
    siteName: "Moxie Risk Partners",
  },
};

export default function Privacy() {
  return (
    <>
      <Header />
      <PrivacyPage />
      <Footer />
    </>
  );
}