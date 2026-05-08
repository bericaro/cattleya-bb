import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatta Cattleya B&B Milano. Luisa Capozzi, Via Giulio Perticari 2, 20127 Milano. Tel: +39 338 827 7390 / +39 340 160 3940. Email: cattleya.nolo@gmail.com",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
