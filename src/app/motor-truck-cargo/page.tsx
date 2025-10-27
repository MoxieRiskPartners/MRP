import { Metadata } from "next";
import Header from "@/Main/Header";
import MotorTruckCargo from "@/Files/motorTruckCargo";
import Footer from "@/Components/footer";

export const metadata: Metadata = {
  title: "Motor Truck Cargo Insurance | Freight & Cargo Protection",
  description: "Motor truck cargo insurance protecting freight from damage, theft, and loss. Coverage from $5,000 to $250,000 for all cargo types. Meet shipper requirements and secure more loads with comprehensive cargo coverage.",
  alternates: {
    canonical: 'https://moxieriskpartners.com/motor-truck-cargo',
  },
  openGraph: {
    title: "Motor Truck Cargo Insurance | Freight & Cargo Protection",
    description: "Motor truck cargo insurance protecting freight from damage, theft, and loss. Coverage from $5,000 to $250,000 for all cargo types.",
    url: "https://moxieriskpartners.com/motor-truck-cargo",
    siteName: "Moxie Risk Partners",
    images: [
      {
        url: "https://moxieriskpartners.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Motor Truck Cargo Insurance Coverage",
      }
    ],
  },
};

export default function MotorTruckCargoPage() {
  return (
    <>
      <Header />
      <MotorTruckCargo />
      <Footer />
    </>
  );
}