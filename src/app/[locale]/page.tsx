import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cattleya Bed & Breakfast Milano | B&B NoLo Via Padova",
  description: "B&B Cattleya nel cuore del quartiere NoLo a Milano, Via Perticari 2. Camere con terrazza, vista skyline, Wi-Fi. A 400m metro Cimiano M2, vicino Naviglio Martesana e Ospedale San Raffaele.",
};

export default async function HomePage() {
  const hero = await getTranslations("hero");
  const about = await getTranslations("about");
  const location = await getTranslations("location");
  const rooms = await getTranslations("rooms");

  return (
    <>
      {/* Hero Section - short banner */}
      <section className="relative mt-[72px] h-[350px] w-full">
        <Image
          src="/images/hero-overlay.jpg"
          alt="Cattleya Bed & Breakfast"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold tracking-wide md:text-5xl bg-gradient-to-r from-[#9B51E0] via-[#C751E0] to-[#ED3FC1] bg-clip-text text-transparent">
            {hero("title")}
          </h1>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-[#ED3FC1] px-8 py-3 text-xs font-bold text-white transition-colors hover:bg-[#d635ab]"
          >
            {hero("cta")}
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid items-center gap-16 md:grid-cols-5">
            <div className="md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED3FC1]">
                {about("title")}
              </p>
              <h2 className="mt-3 font-praise text-4xl text-[#9B51E0]">
                Cattleya
              </h2>
              <div className="mt-2 h-[2px] w-12 bg-gradient-to-r from-[#9B51E0] to-[#ED3FC1]" />
              <p className="mt-8 text-sm leading-8 text-[#4F4F4F]">
                Il <strong className="text-[#9B51E0]">B&B Cattleya</strong> prende il suo nome da un <strong>fiore tropicale</strong> simbolo di <strong>eleganza, bellezza e accoglienza</strong>.
              </p>
              <p className="mt-4 text-sm leading-8 text-[#4F4F4F]">
                Come questo fiore raro e affascinante, vogliamo offrire ai nostri ospiti un luogo speciale nel <strong>cuore di Milano</strong>: un ambiente caldo, curato e dal clima quasi familiare, dove sentirsi subito a casa.
              </p>
              <p className="mt-4 text-sm leading-8 text-[#4F4F4F]">
                Scegliere Cattleya significa vivere Milano con il <strong>comfort</strong>, la <strong>tranquillità</strong> e l&apos;attenzione che solo un&apos;accoglienza autentica sa offrire.
              </p>
            </div>
            <div className="relative md:col-span-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                <Image
                  src="/images/about-room.jpg"
                  alt="Cattleya B&B"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-sm border border-[#9B51E0]/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/images/room-cattleya.jpg"
          alt="Le Nostre Camere"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h2 className="text-3xl font-bold tracking-wide md:text-5xl bg-gradient-to-r from-[#E4002B] via-[#FF6B6B] to-[#E4002B] bg-clip-text text-transparent">
            {rooms("title")}
          </h2>
          <Link
            href="/rooms"
            className="mt-8 inline-block border-2 border-white bg-transparent px-8 py-3 text-xs font-bold text-white transition-colors hover:bg-white hover:text-[#4F4F4F]"
          >
            {rooms("viewRooms")}
          </Link>
        </div>
      </section>

      {/* Posizione Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid items-center gap-16 md:grid-cols-5">
            <div className="md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED3FC1]">
                {location("title")}
              </p>
              <h2 className="mt-3 font-praise text-4xl text-[#9B51E0]">
                NoLo, Milano
              </h2>
              <div className="mt-2 h-[2px] w-12 bg-gradient-to-r from-[#9B51E0] to-[#ED3FC1]" />
              <p className="mt-8 text-sm leading-8 text-[#4F4F4F]">
                Cattleya Bed &amp; Breakfast è situato nel cuore del <strong>quartiere NoLo</strong>, a nord est di Milano, in <strong>via Perticari 2</strong>, angolo via Padova, via molto vivace e multietnica ricca di locali di ogni tipo: <strong>ristoranti, negozi, supermercati, farmacie e banche</strong>.
              </p>
              <Link
                href="/location"
                className="mt-10 inline-block bg-[#ED3FC1] px-8 py-3 text-xs font-bold text-white transition-colors hover:bg-[#d635ab]"
              >
                {about("readMore")}
              </Link>
            </div>
            <div className="relative md:col-span-3">
              <div className="flex items-center gap-4">
                <div className="grid flex-1 grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
                    <Image
                      src="/images/gallery-1.jpg"
                      alt="Milano NoLo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
                    <Image
                      src="/images/gallery-2.jpg"
                      alt="Milano NoLo"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <Link href="/location" className="flex-shrink-0 rounded-full border border-[#3E3C3C]/20 p-2 transition-colors hover:border-[#9B51E0] hover:text-[#9B51E0]" aria-label="Posizione">
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border border-[#9B51E0]/20" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
