import { Metadata } from "next";
import Header from "@/Main/Header";
import ManufacturingPage from "@/Files/manufacturing";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Manufacturing Insurance | Product Liability & Equipment Coverage",
  description: "Specialized manufacturing insurance including product liability, general liability, workers compensation, equipment breakdown, and commercial property coverage. Protect your manufacturing operations nationwide.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/manufacturing-insurance',
  },
  openGraph: {
    title: "Manufacturing Insurance | Product Liability & Equipment Coverage",
    description: "Specialized manufacturing insurance including product liability, general liability, workers compensation, equipment breakdown, and commercial property coverage.",
    url: "https://moxieriskpartners.com/manufacturing-insurance",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manufacturing Insurance and Product Liability Coverage",
      }
    ],
  },
};

export default function Manufacturing() {
  return (
    <>
      <Header />
      <ManufacturingPage />
      <Footer />
    </>
  );
}