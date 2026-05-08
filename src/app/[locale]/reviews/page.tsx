import { getTranslations } from "next-intl/server";

export default async function ReviewsPage() {
  const t = await getTranslations("reviews");

  return (
    <div className="pt-24">
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED3FC1]">
          {t("title")}
        </p>
        <h1 className="mt-3 font-praise text-5xl text-[#9B51E0]">
          {t("subtitle")}
        </h1>
        <div className="mt-2 h-[2px] w-16 bg-gradient-to-r from-[#9B51E0] to-[#ED3FC1]" />

        <p className="mt-12 text-center text-sm text-[#4F4F4F]/60">
          Le recensioni saranno disponibili a breve.
        </p>
      </section>
    </div>
  );
}
