import { Metadata } from "next";
import Header from "@/Components/Header";
import Footer from "@/Components/footer";
import ClaimsPage from "@/UtilityPages/claims";

export const metadata: Metadata = {
  title: "File a Claim | Claims Support | Moxie Risk Partners",
  description: "File an insurance claim with Moxie Risk Partners. Access claims support, track your claim status, and get assistance with the claims process. Efficient claims handling.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/file-claims',
  },
  openGraph: {
    title: "File a Claim | Claims Support | Moxie Risk Partners",
    description: "File an insurance claim with Moxie Risk Partners. Access claims support, track your claim status, and get assistance with the claims process.",
    url: "https://moxieriskpartners.com/file-claims",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/Moxie_Horizontal_TwoColor.jpg",
        width: 1200,
        height: 630,
        alt: "File an Insurance Claim",
      }
    ],
  },
};

export default function Claims() {
  return (
    <>
      <Header />
      <ClaimsPage/>
      <Footer />
    </>
  );
}