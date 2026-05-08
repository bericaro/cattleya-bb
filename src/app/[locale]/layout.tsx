import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Praise, Roboto } from "next/font/google";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "../globals.css";

const praise = Praise({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-praise",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Cattleya Bed & Breakfast - Milano",
  description:
    "Cattleya Bed & Breakfast nel cuore di Milano. Un'esperienza memorabile con camere eleganti e accoglienza calorosa.",
  keywords: ["bed and breakfast", "milano", "cattleya", "b&b", "accommodation"],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${praise.variable} ${roboto.variable}`}>
      <body className="font-roboto bg-white text-[#4F4F4F] antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
