import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";
import RoomsClient from "./RoomsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camere",
  description: "Le camere del B&B Cattleya a Milano: Cattleya, Sakura e Matcha. Monolocali arredati in stile moderno con terrazza panoramica, angolo cottura, Wi-Fi, aria condizionata. Vista skyline Milano.",
};

export default async function RoomsPage() {
  const t = await getTranslations("rooms");
  const gallery = await getTranslations("gallery");

  const cattleyaBold = (chunks: ReactNode) => <strong className="text-[#E4002B]">{chunks}</strong>;
  const sakuraBold = (chunks: ReactNode) => <strong className="text-[#0076C8]">{chunks}</strong>;
  const matchaBold = (chunks: ReactNode) => <strong className="text-[#18A538]">{chunks}</strong>;

  const cattleyaParagraphs: ReactNode[] = ["p1", "p2", "p3", "p4", "p5"].map((k) =>
    t.rich(`cattleya.paragraphs.${k}`, { b: cattleyaBold })
  );
  const sakuraParagraphs: ReactNode[] = ["p1", "p2", "p3", "p4", "p5"].map((k) =>
    t.rich(`sakura.paragraphs.${k}`, { b: sakuraBold })
  );
  const matchaParagraphs: ReactNode[] = ["p1", "p2", "p3", "p4"].map((k) =>
    t.rich(`matcha.paragraphs.${k}`, { b: matchaBold })
  );

  return (
    <RoomsClient
      translations={{
        roomsTitle: t("title"),
        more: gallery("more"),
      }}
      cattleyaParagraphs={cattleyaParagraphs}
      sakuraParagraphs={sakuraParagraphs}
      matchaParagraphs={matchaParagraphs}
    />
  );
}
