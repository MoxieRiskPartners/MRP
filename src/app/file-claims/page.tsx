import { Metadata } from "next";
import Header from "@/Main/Header";
import Footer from "@/Components/footer";
import ClaimsPage from "@/Files/claims";

export const metadata: Metadata = {
  title: "File a Claim | 24/7 Claims Support | Moxie Risk Partners",
  description: "File an insurance claim with Moxie Risk Partners. Access 24/7 claims support, track your claim status, and get assistance with the claims process. Fast and efficient claims handling.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/file-claims',
  },
  openGraph: {
    title: "File a Claim | 24/7 Claims Support | Moxie Risk Partners",
    description: "File an insurance claim with Moxie Risk Partners. Access 24/7 claims support, track your claim status, and get assistance with the claims process.",
    url: "https://moxieriskpartners.com/file-claims",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
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