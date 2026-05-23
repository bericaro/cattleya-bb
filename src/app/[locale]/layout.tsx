import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Praise, Roboto } from "next/font/google";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://cattleya-bb.vercel.app"),
  title: {
    default: "Cattleya Bed & Breakfast Milano | B&B NoLo quartiere Via Padova",
    template: "%s | Cattleya B&B Milano",
  },
  description:
    "Cattleya Bed & Breakfast nel cuore del quartiere NoLo a Milano, Via Perticari. Camere eleganti con terrazza panoramica, vista skyline, Wi-Fi, aria condizionata. A 400m dalla metro Cimiano M2. Prenota il tuo soggiorno.",
  keywords: [
    "bed and breakfast milano",
    "b&b milano",
    "cattleya b&b",
    "b&b nolo milano",
    "alloggio milano via padova",
    "bed breakfast quartiere nolo",
    "camera con terrazza milano",
    "b&b vicino metro cimiano",
    "b&b vicino ospedale san raffaele",
    "soggiorno milano naviglio martesana",
    "accommodation milan italy",
    "hébergement milan italie",
    "alojamiento milán italia",
  ],
  authors: [{ name: "Cattleya Bed & Breakfast" }],
  creator: "Cattleya B&B",
  openGraph: {
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US", "fr_FR", "es_ES"],
    siteName: "Cattleya Bed & Breakfast",
    title: "Cattleya Bed & Breakfast Milano | B&B NoLo quartiere",
    description:
      "B&B nel cuore del quartiere NoLo a Milano. Camere con terrazza panoramica, vista skyline, a 400m dalla metro Cimiano. Prenota ora.",
    images: [
      {
        url: "/images/hero-overlay.jpg",
        width: 1200,
        height: 630,
        alt: "Cattleya Bed & Breakfast Milano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cattleya Bed & Breakfast Milano",
    description:
      "B&B nel cuore del quartiere NoLo a Milano. Camere con terrazza panoramica, vista skyline, a 400m dalla metro Cimiano.",
    images: ["/images/hero-overlay.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cattleya-bb.vercel.app",
    languages: {
      it: "https://cattleya-bb.vercel.app/it",
      en: "https://cattleya-bb.vercel.app/en",
      fr: "https://cattleya-bb.vercel.app/fr",
      es: "https://cattleya-bb.vercel.app/es",
    },
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BedAndBreakfast",
              name: "Cattleya Bed & Breakfast",
              description: "B&B nel cuore del quartiere NoLo a Milano, con camere eleganti dotate di terrazza panoramica e vista sullo skyline.",
              url: "https://cattleya-bb.vercel.app",
              telephone: ["+393388277390", "+393401603940"],
              email: "cattleya.nolo@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via Giulio Perticari",
                addressLocality: "Milano",
                postalCode: "20127",
                addressCountry: "IT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.497,
                longitude: 9.215,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.94",
                reviewCount: "32",
                bestRating: "5",
              },
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
                { "@type": "LocationFeatureSpecification", name: "Aria condizionata", value: true },
                { "@type": "LocationFeatureSpecification", name: "TV", value: true },
                { "@type": "LocationFeatureSpecification", name: "Angolo cottura", value: true },
                { "@type": "LocationFeatureSpecification", name: "Terrazza", value: true },
                { "@type": "LocationFeatureSpecification", name: "Lavatrice", value: true },
              ],
              image: "https://cattleya-bb.vercel.app/images/hero-overlay.jpg",
              priceRange: "€€",
              checkinTime: "14:00",
              checkoutTime: "10:00",
            }),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
