import { getTranslations } from "next-intl/server";
import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "gallery-1" },
  { src: "/images/gallery-2.jpg", alt: "gallery-2" },
  { src: "/images/room-cattleya.jpg", alt: "room-cattleya" },
  { src: "/images/room-cattleya-2.jpg", alt: "room-cattleya-2" },
  { src: "/images/room-sakura.jpg", alt: "room-sakura" },
  { src: "/images/about-room.jpg", alt: "about-room" },
  { src: "/images/hero-bg.jpg", alt: "hero" },
];

export default async function GalleryPage() {
  const t = await getTranslations("gallery");

  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h1 className="mb-12 text-center font-roboto text-4xl font-bold text-[#9B51E0] md:text-5xl">
          {t("title")}
        </h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
