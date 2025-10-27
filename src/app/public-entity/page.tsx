import { Metadata } from "next";
import Header from "@/Main/Header";
import PublicEntityPage from "@/Files/publicE";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Public Entity Insurance | Government & Municipal Liability Coverage",
  description: "Specialized insurance for public entities, municipalities, and government agencies. General liability, workers compensation, auto liability, and property coverage tailored for public sector organizations.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/public-entity',
  },
  openGraph: {
    title: "Public Entity Insurance | Government & Municipal Liability Coverage",
    description: "Specialized insurance for public entities, municipalities, and government agencies. General liability, workers compensation, auto liability, and property coverage tailored for public sector.",
    url: "https://moxieriskpartners.com/public-entity",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Public Entity and Municipal Insurance Coverage",
      }
    ],
  },
};

export default function PublicEntity() {
  return (
    <>
      <Header />
      <PublicEntityPage />
      <Footer />
    </>
  );
}