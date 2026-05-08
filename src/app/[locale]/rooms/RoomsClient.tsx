"use client";

import Image from "next/image";
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
  { src: "/images/sakura-1.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-2.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-3.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-4.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-5.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-6.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-7.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-8.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-9.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-10.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-11.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-12.jpeg", alt: "Camera Sakura" },
  { src: "/images/sakura-13.jpeg", alt: "Camera Sakura" },
];

interface Props {
  translations: {
    roomsTitle: string;
    cattleyaDescription: string;
    sakuraDescription: string;
    matchaDescription: string;
    more: string;
  };
}

export default function RoomsClient({ translations: t }: Props) {
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
          {/* Large image left - same as before */}
          <div className="relative h-full w-3/5 flex-shrink-0">
            <Image
              src="/images/room-cattleya.jpg"
              alt="Camera Cattleya"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Two stacked right - same as before */}
          <div className="flex h-full w-2/5 flex-col gap-2">
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/room-cattleya-2.jpg"
                alt="Camera Cattleya"
                fill
                className="object-cover"
              />
            </div>
            {/* +5 overlay - now clickable with modal */}
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/cattleyaentrata.avif"
                alt="Camera Cattleya"
                fill
                className="object-cover"
              />
              <GalleryModal
                images={cattleyaImages}
                trigger={
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40 cursor-pointer">
                    <span className="text-3xl font-medium text-white">
                      {t.more}
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="mt-6 text-sm leading-8 text-[#4F4F4F]">
            La camera Cattleya si trova all&apos;<strong>ultimo piano</strong> di un edificio con ascensore e gode di una <strong>splendida vista sullo skyline di Milano</strong>. È attrezzata per ospitare fino a <strong>2 persone</strong>, grazie a un comodo divano letto alla francese.
          </p>
          <p className="mt-4 text-sm leading-8 text-[#4F4F4F]">
            La camera, arredata in <strong>stile moderno</strong>, dispone di un <strong>angolo cottura</strong>, <strong>bagno privato</strong> e di un&apos;ampia <strong>terrazza</strong>, ideale per momenti di relax. È dotata di tutti i principali comfort: <strong>TV, Wi-Fi, aria condizionata</strong> e zanzariere.
          </p>
          <p className="mt-4 text-sm leading-8 text-[#4F4F4F]">
            L&apos;angolo cottura è completo di <strong>frigorifero, forno a microonde, due piastre a induzione</strong>, bollitore, stoviglie e pentole. Il bagno privato è provvisto di un&apos;ampia <strong>doccia</strong>, asciugacapelli e <strong>lavatrice</strong>.
          </p>
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
          <div className="relative h-full w-3/5 flex-shrink-0">
            <Image
              src="/images/sakura-1.jpeg"
              alt="Camera Sakura"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex h-full w-2/5 flex-col gap-2">
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/sakura-2.jpeg"
                alt="Camera Sakura"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/sakura-3.jpeg"
                alt="Camera Sakura"
                fill
                className="object-cover"
              />
              <GalleryModal
                images={sakuraImages}
                trigger={
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40 cursor-pointer">
                    <span className="text-3xl font-medium text-white">
                      {t.more}
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="mt-6 text-sm leading-8 text-[#4F4F4F]">
            La camera Sakura è una soluzione <strong>accogliente e funzionale</strong>, ideale per ospitare <strong>una persona</strong>. Arredata in stile moderno, offre ambienti curati e luminosi, pensati per garantire <strong>comfort e praticità</strong> durante il soggiorno.
          </p>
          <p className="mt-4 text-sm leading-8 text-[#4F4F4F]">
            La camera dispone di un <strong>angolo cottura completamente attrezzato</strong> con frigorifero, forno a microonde, due piastre a induzione e bollitore, perfetto per preparare pasti in autonomia.
          </p>
          <p className="mt-4 text-sm leading-8 text-[#4F4F4F]">
            Il <strong>bagno privato</strong> è dotato di doccia, asciugacapelli e kit di cortesia. A completare la struttura, un&apos;ampia <strong>terrazza</strong> che rappresenta uno spazio ideale per momenti di relax.
          </p>
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
          <div className="relative h-full w-3/5 flex-shrink-0">
            <Image
              src="/images/matcha-06.jpg"
              alt="Camera Matcha"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex h-full w-2/5 flex-col gap-2">
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/matcha-14.jpg"
                alt="Terrazzo Matcha"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative flex-1 overflow-hidden">
              <Image
                src="/images/matcha-04.jpg"
                alt="Cucina Matcha"
                fill
                className="object-cover"
              />
              <GalleryModal
                images={matchaImages}
                trigger={
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40 cursor-pointer">
                    <span className="text-3xl font-medium text-white">
                      {t.more}
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="mt-6 text-sm leading-8 text-[#4F4F4F]">
            Questo grazioso <strong>monolocale di 30 mq</strong> si trova al <strong>6° piano</strong> di un edificio con ascensore e gode di una <strong>splendida vista sullo skyline di Milano</strong>, sui tetti della vecchia Milano vicino a Via Padova e al Naviglio Martesana fino ad arrivare al nuovo skyline di <strong>piazza Gae Aulenti</strong> con la <strong>Unicredit Tower</strong>.
          </p>
          <p className="mt-4 text-sm leading-8 text-[#4F4F4F]">
            Il monolocale, dotato di tutti i comfort — <strong>TV, aria condizionata e Wi-Fi</strong> — è composto da una grande camera arredata in stile moderno. La struttura è attrezzata per ospitare <strong>2 persone</strong>: i letti singoli possono diventare un comodo <strong>letto matrimoniale</strong>.
          </p>
          <p className="mt-4 text-sm leading-8 text-[#4F4F4F]">
            Un monoblocco ospita un <strong>angolo cottura attrezzato</strong>: frigorifero, forno a microonde, due piastre ad induzione. Il <strong>bagno finestrato</strong> è dotato di un&apos;ampia doccia, asciugacapelli e prodotti di cortesia.
          </p>
          <p className="mt-4 text-sm leading-8 text-[#4F4F4F]">
            Il punto forte è il <strong className="text-[#18A538]">terrazzo attrezzato</strong> con tavolino e sedie per pranzare all&apos;aria aperta, corredato da una piccola <strong>veranda</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
