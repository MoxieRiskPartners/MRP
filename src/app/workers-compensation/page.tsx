import { Metadata } from "next";
import Header from "@/Main/Header";
import WorkersComp from "@/Files/workersComp";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Workers Compensation Insurance | Workers Comp Coverage by State",
  description: "Workers compensation insurance covering medical expenses, lost wages, and disability benefits for work-related injuries. State-compliant coverage with competitive rates from $0.50 to $5.00 per $100 payroll based on industry classification.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/workers-compensation',
  },
  openGraph: {
    title: "Workers Compensation Insurance | Workers Comp Coverage by State",
    description: "Workers compensation insurance covering medical expenses, lost wages, and disability benefits for work-related injuries. State-compliant coverage with competitive rates.",
    url: "https://moxieriskpartners.com/workers-compensation",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Workers Compensation Insurance Coverage",
      }
    ],
  },
};

export default function WorkersCompPage() {
  return (
    <>
      <Header />
      <WorkersComp />
      <Footer />
    </>
  );
}