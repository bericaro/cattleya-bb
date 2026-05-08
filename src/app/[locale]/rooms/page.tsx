import { getTranslations } from "next-intl/server";
import Image from "next/image";
import RoomsClient from "./RoomsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camere",
  description: "Le camere del B&B Cattleya a Milano: Cattleya, Sakura e Matcha. Monolocali arredati in stile moderno con terrazza panoramica, angolo cottura, Wi-Fi, aria condizionata. Vista skyline Milano.",
};

export default async function RoomsPage() {
  const t = await getTranslations("rooms");
  const gallery = await getTranslations("gallery");

  return (
    <RoomsClient
      translations={{
        roomsTitle: t("title"),
        cattleyaDescription: t("cattleya.description"),
        sakuraDescription: t("sakura.description"),
        matchaDescription: t("matcha.description"),
        more: gallery("more"),
      }}
    />
  );
}
