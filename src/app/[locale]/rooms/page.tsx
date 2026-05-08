import { getTranslations } from "next-intl/server";
import Image from "next/image";
import RoomsClient from "./RoomsClient";

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
