"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import GalleryModal from "@/components/GalleryModal";

const cattleyaImages = [
  { src: "/images/room-cattleya.jpg", alt: "Camera Cattleya" },
  { src: "/images/room-sakura.jpg", alt: "Camera Cattleya" },
  { src: "/images/room-cattleya-2.jpg", alt: "Camera Cattleya" },
  { src: "/images/cattleyaentrata.avif", alt: "Entrata Cattleya" },
  { src: "/images/bagnocattleya.avif", alt: "Bagno Cattleya" },
  { src: "/images/divanoletto.avif", alt: "Divano letto Cattleya" },
  { src: "/images/esternocattleya.avif", alt: "Esterno Cattleya" },
  { src: "/images/esterno2.avif", alt: "Esterno Cattleya" },
  { src: "/images/cucinacattleya.avif", alt: "Cucina Cattleya" },
  { src: "/images/cattleyabalcone.jpeg", alt: "Balcone Cattleya" },
  { src: "/images/cattleyabalcone2.jpeg", alt: "Balcone Cattleya" },
  { src: "/images/cattleyabalcone3.jpeg", alt: "Balcone Cattleya" },
  { src: "/images/cattleyabalcone4.jpeg", alt: "Balcone Cattleya" },
];

const matchaImages = [
  { src: "/images/matcha-01.jpg", alt: "Ingresso Matcha" },
  { src: "/images/matcha-02.jpg", alt: "Ingresso Matcha" },
  { src: "/images/matcha-03.jpg", alt: "Ingresso Matcha" },
  { src: "/images/matcha-04.jpg", alt: "Cucina Matcha" },
  { src: "/images/matcha-05.jpg", alt: "Cucina e sala Matcha" },
  { src: "/images/matcha-06.jpg", alt: "Camera Matcha" },
  { src: "/images/matcha-07.jpg", alt: "Camera Matcha" },
  { src: "/images/matcha-08.jpg", alt: "Camera Matcha" },
  { src: "/images/matcha-09.jpg", alt: "Camera Matcha" },
  { src: "/images/matcha-10.jpg", alt: "Camera Matcha" },
  { src: "/images/matcha-11.jpg", alt: "Camera Matcha" },
  { src: "/images/matcha-12.jpg", alt: "Bagno Matcha" },
  { src: "/images/matcha-13.jpg", alt: "Bagno Matcha" },
  { src: "/images/matcha-14.jpg", alt: "Terrazzo Matcha" },
  { src: "/images/matcha-15.jpg", alt: "Terrazzo Matcha" },
];

const sakuraImages = [
  { src: "/images/fotocellmomo7.jpeg", alt: "Camera Sakura - letto" },
  { src: "/images/cucina2sakura.avif", alt: "Camera Sakura - cucina" },
  { src: "/images/balconesakura.avif", alt: "Camera Sakura - balcone" },
  { src: "/images/sakura-5.jpeg", alt: "Camera Sakura" },
  { src: "/images/fotocellmomo1.jpeg", alt: "Camera Sakura" },
  { src: "/images/fotocellmomo2.jpeg", alt: "Camera Sakura" },
  { src: "/images/cellmomo3.jpeg", alt: "Camera Sakura" },
  { src: "/images/fotocellmomo4.jpeg", alt: "Camera Sakura" },
  { src: "/images/fotocellmomo5.jpeg", alt: "Camera Sakura" },
  { src: "/images/fotocellmomo6.jpeg", alt: "Camera Sakura" },
  { src: "/images/fotocellmomo8.jpeg", alt: "Camera Sakura" },
  { src: "/images/fotocellmomo9.jpeg", alt: "Camera Sakura" },
  { src: "/images/fotocellmomo10.jpeg", alt: "Camera Sakura" },
  { src: "/images/fotocellmomo11.jpeg", alt: "Camera Sakura" },
];

interface Props {
  translations: {
    roomsTitle: string;
    more: string;
  };
  cattleyaParagraphs: ReactNode[];
  sakuraParagraphs: ReactNode[];
  matchaParagraphs: ReactNode[];
}

export default function RoomsClient({
  translations: t,
  cattleyaParagraphs,
  sakuraParagraphs,
  matchaParagraphs,
}: Props) {
  return (
    <div className="pt-24">
      {/* Room Cattleya */}
      <section className="mx-auto max-w-3xl px-6 py-12 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED3FC1]">
          {t.roomsTitle}
        </p>
        <h1 className="mt-3 font-praise text-4xl text-[#E4002B]">
          Cattleya
        </h1>
        <div className="mt-2 mb-8 h-[2px] w-12 bg-gradient-to-r from-[#E4002B] to-[#ED3FC1]" />
        <div className="flex h-[350px] gap-2 overflow-hidden">
          {/* Letto */}
          <div className="relative h-full w-3/5 flex-shrink-0">
            <Image
              src="/images/room-cattleya.jpg"
              alt="Camera Cattleya - letto"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex h-full w-2/5 flex-col gap-2">
            {/* Cucina */}
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/cucinacattleya.avif"
                alt="Camera Cattleya - cucina"
                fill
                className="object-cover"
              />
            </div>
            {/* Balcone con overlay galleria */}
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/cattleyabalcone.jpeg"
                alt="Camera Cattleya - balcone"
                fill
                className="object-cover"
              />
              <GalleryModal
                images={cattleyaImages}
                trigger={
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40 cursor-pointer">
                    <span className="text-3xl font-medium text-white">
                      + {cattleyaImages.length - 3}
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          {cattleyaParagraphs.map((node, i) => (
            <p key={i} className={`${i === 0 ? "mt-6" : "mt-4"} text-sm leading-8 text-[#4F4F4F]`}>
              {node}
            </p>
          ))}
        </div>
      </section>

      {/* Room Sakura */}
      <section className="mx-auto max-w-3xl px-6 py-12 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B51E0]">
          {t.roomsTitle}
        </p>
        <h2 className="mt-3 font-praise text-4xl text-[#0076C8]">
          Sakura
        </h2>
        <div className="mt-2 mb-8 h-[2px] w-12 bg-gradient-to-r from-[#0076C8] to-[#9B51E0]" />
        <div className="flex h-[350px] gap-2 overflow-hidden">
          {/* Letto */}
          <div className="relative h-full w-3/5 flex-shrink-0">
            <Image
              src="/images/fotocellmomo7.jpeg"
              alt="Camera Sakura - letto"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex h-full w-2/5 flex-col gap-2">
            {/* Cucina */}
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/cucina2sakura.avif"
                alt="Camera Sakura - cucina"
                fill
                className="object-cover"
              />
            </div>
            {/* Balcone con overlay galleria */}
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/balconesakura.avif"
                alt="Camera Sakura - balcone"
                fill
                className="object-cover"
              />
              <GalleryModal
                images={sakuraImages}
                trigger={
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40 cursor-pointer">
                    <span className="text-3xl font-medium text-white">
                      + {sakuraImages.length - 3}
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          {sakuraParagraphs.map((node, i) => (
            <p key={i} className={`${i === 0 ? "mt-6" : "mt-4"} text-sm leading-8 text-[#4F4F4F]`}>
              {node}
            </p>
          ))}
        </div>
      </section>
      {/* Room Matcha */}
      <section className="mx-auto max-w-3xl px-6 py-12 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4F4F4F]">
          {t.roomsTitle}
        </p>
        <h2 className="mt-3 font-praise text-4xl text-[#18A538]">
          Matcha
        </h2>
        <div className="mt-2 mb-8 h-[2px] w-12 bg-gradient-to-r from-[#18A538] to-[#9B51E0]" />
        <div className="flex h-[350px] gap-2 overflow-hidden">
          {/* Letto */}
          <div className="relative h-full w-3/5 flex-shrink-0">
            <Image
              src="/images/matcha-06.jpg"
              alt="Camera Matcha - letto"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex h-full w-2/5 flex-col gap-2">
            {/* Cucina */}
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/matcha-04.jpg"
                alt="Camera Matcha - cucina"
                fill
                className="object-cover"
              />
            </div>
            {/* Balcone con overlay galleria */}
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/matcha-14.jpg"
                alt="Camera Matcha - terrazzo"
                fill
                className="object-cover"
              />
              <GalleryModal
                images={matchaImages}
                trigger={
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40 cursor-pointer">
                    <span className="text-3xl font-medium text-white">
                      + {matchaImages.length - 3}
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          {matchaParagraphs.map((node, i) => (
            <p key={i} className={`${i === 0 ? "mt-6" : "mt-4"} text-sm leading-8 text-[#4F4F4F]`}>
              {node}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
