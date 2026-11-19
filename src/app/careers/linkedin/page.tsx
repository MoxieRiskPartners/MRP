import { Metadata } from "next";
import Header from "@/Components/Header";
import CareersPage from "@/UtilityPages/careers";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Careers at Moxie Risk Partners | Apply on LinkedIn",
  description: "Join the Moxie Risk Partners team. View our open roles and apply directly on LinkedIn.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/careers/linkedin',
  },
  openGraph: {
    title: "Careers at Moxie Risk Partners | Apply on LinkedIn",
    description: "Join the Moxie Risk Partners team. View our open roles and apply directly on LinkedIn.",
    url: "https://moxieriskpartners.com/careers/linkedin",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/Moxie_Horizontal_TwoColor.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Moxie Risk Partners",
      }
    ],
  },
};

export default function CareersLinkedIn() {
  return (
    <>
      <Header />
      <CareersPage mode="linkedin" />
      <Footer />
    </>
  );
}
