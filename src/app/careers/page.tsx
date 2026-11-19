import { Metadata } from "next";
import Header from "@/Components/Header";
import CareersPage from "@/UtilityPages/careers";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Careers at Moxie Risk Partners | Join Our Team",
  description: "Join the Moxie Risk Partners team. We're hiring Producers, Account Managers, and Client Service Representatives. Build a career in commercial insurance with a team that's all in.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/careers',
  },
  openGraph: {
    title: "Careers at Moxie Risk Partners | Join Our Team",
    description: "Join the Moxie Risk Partners team. We're hiring Producers, Account Managers, and Client Service Representatives. Build a career in commercial insurance with a team that's all in.",
    url: "https://moxieriskpartners.com/careers",
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

export default function Careers() {
  return (
    <>
      <Header />
      <CareersPage />
      <Footer />
    </>
  );
}
