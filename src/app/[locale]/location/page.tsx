import { getTranslations } from "next-intl/server";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posizione",
  description: "Cattleya B&B si trova nel quartiere NoLo, Via Perticari 2, Milano. A 400m dalla metro Cimiano M2, vicino Naviglio Martesana, Ospedale San Raffaele. Collegamento diretto con Duomo, Brera, Navigli.",
};

export default async function LocationPage() {
  const t = await getTranslations("location");

  return (
    <div className="relative pt-24 overflow-hidden bg-gradient-to-b from-[#f9f5fc] via-[#fdf2fb] to-[#f5f0fa]">

      {/* --- Decorative SVG elements concentrated in the text area --- */}
      {/* Large orchid petals top-right, near title */}
      <svg className="pointer-events-none absolute -right-10 top-24 -z-0 h-72 w-72 opacity-[0.07]" viewBox="0 0 200 200" fill="none">
        <ellipse cx="100" cy="80" rx="50" ry="70" transform="rotate(-20 100 80)" fill="#9B51E0" />
        <ellipse cx="70" cy="110" rx="40" ry="60" transform="rotate(30 70 110)" fill="#ED3FC1" />
        <ellipse cx="130" cy="110" rx="40" ry="60" transform="rotate(-30 130 110)" fill="#9B51E0" />
        <ellipse cx="100" cy="60" rx="30" ry="50" transform="rotate(10 100 60)" fill="#C751E0" />
        <circle cx="100" cy="120" r="12" fill="#ED3FC1" />
      </svg>

      {/* Leaf/stem left side, alongside text */}
      <svg className="pointer-events-none absolute -left-4 top-40 -z-0 h-72 w-32 opacity-[0.06]" viewBox="0 0 80 300" fill="none">
        <path d="M40 300 C40 200 10 150 40 50 C50 100 70 150 40 300Z" fill="#9B51E0" />
        <path d="M40 250 C20 200 5 170 30 120" stroke="#9B51E0" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Small petal cluster, mid-text right margin */}
      <svg className="pointer-events-none absolute right-4 top-[380px] -z-0 h-36 w-36 opacity-[0.05]" viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="40" rx="25" ry="35" transform="rotate(-15 50 40)" fill="#ED3FC1" />
        <ellipse cx="35" cy="55" rx="20" ry="30" transform="rotate(25 35 55)" fill="#9B51E0" />
        <ellipse cx="65" cy="55" rx="20" ry="30" transform="rotate(-25 65 55)" fill="#C751E0" />
      </svg>

      {/* Delicate branch with buds, left side near end of text */}
      <svg className="pointer-events-none absolute left-8 top-[550px] -z-0 h-44 w-44 opacity-[0.05]" viewBox="0 0 200 200" fill="none">
        <path d="M20 180 Q60 120 100 100 Q140 80 180 20" stroke="#9B51E0" strokeWidth="1.5" fill="none" />
        <ellipse cx="100" cy="100" rx="12" ry="18" transform="rotate(-30 100 100)" fill="#ED3FC1" />
        <ellipse cx="140" cy="65" rx="10" ry="15" transform="rotate(-50 140 65)" fill="#9B51E0" />
        <ellipse cx="60" cy="135" rx="10" ry="15" transform="rotate(20 60 135)" fill="#C751E0" />
      </svg>

      {/* Concentric rings, top-left accent */}
      <svg className="pointer-events-none absolute left-[15%] top-28 -z-0 h-20 w-20 opacity-[0.06]" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" stroke="#9B51E0" strokeWidth="1" />
        <circle cx="50" cy="50" r="28" stroke="#ED3FC1" strokeWidth="0.5" />
      </svg>

      {/* Single floating petal, right of title */}
      <svg className="pointer-events-none absolute right-[30%] top-36 -z-0 h-16 w-16 opacity-[0.08]" viewBox="0 0 60 80" fill="none">
        <ellipse cx="30" cy="40" rx="20" ry="35" transform="rotate(-25 30 40)" fill="#C751E0" />
      </svg>

      {/* Title + Text (main content) with small image accent */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid items-start gap-12 md:grid-cols-7">
            {/* Text - takes most space */}
            <div className="md:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED3FC1]">
                {t("title")}
              </p>
              <h1 className="mt-3 font-praise text-5xl text-[#9B51E0]">
                NoLo, Milano
              </h1>
              <div className="mt-2 h-[2px] w-16 bg-gradient-to-r from-[#9B51E0] to-[#ED3FC1]" />
              <p className="mt-8 text-sm leading-8 text-[#4F4F4F]">
                {t.rich("intro", { b: (chunks) => <strong>{chunks}</strong> })}
              </p>
              <p className="mt-5 text-sm leading-8 text-[#4F4F4F]">
                {t.rich("transport", { b: (chunks) => <strong>{chunks}</strong> })}
              </p>
              <p className="mt-5 text-sm leading-8 text-[#4F4F4F]">
                {t.rich("hospital", { b: (chunks) => <strong>{chunks}</strong> })}
              </p>
              <p className="mt-5 text-sm leading-8 text-[#4F4F4F]">
                {t.rich("park", { b: (chunks) => <strong>{chunks}</strong> })}
              </p>
            </div>
            {/* Small accent image on the side */}
            <div className="relative md:col-span-2 md:mt-16">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-lg">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Via Padova"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-sm border border-[#9B51E0]/20" />
              <div className="absolute -left-5 -top-5 -z-10 h-16 w-16 rounded-full bg-[#9B51E0]/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#9B51E0]/20 to-transparent" />
            <span className="flex gap-2">
              <span className="h-2 w-2 rounded-full bg-[#9B51E0]/30" />
              <span className="h-2 w-2 rounded-full bg-[#ED3FC1]/30" />
              <span className="h-2 w-2 rounded-full bg-[#9B51E0]/15" />
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#9B51E0]/20 to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            <div className="group relative overflow-hidden rounded-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/gallery-1.jpg" alt="NoLo Milano" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/gallery-2.jpg" alt="NoLo Milano" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/entratamartesana.png" alt="Entrata Martesana" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/conad.jpg" alt="Conad" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/farmacia.png" alt="Farmacia" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image src="/images/metrocimiano.jpg" alt="Metro Cimiano" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metro Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#9B51E0]/20 to-transparent" />
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#18A538] text-[10px] font-bold text-white">M2</span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B51E0]/40">Metro</span>
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#9B51E0]/20 to-transparent" />
          </div>

          {/* Cimiano station highlight */}
          <div className="mb-10 flex items-center gap-8 rounded-sm border border-[#18A538]/20 bg-[#18A538]/5 p-8">
            <div className="flex flex-col items-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#18A538] bg-white text-2xl font-black text-[#18A538]">M2</span>
              <span className="mt-2 text-xs font-bold text-[#18A538]">{t("metro.lineLabel")}</span>
            </div>
            <div>
              <p className="text-2xl font-black text-[#4F4F4F]">Cimiano</p>
              <p className="mt-1 text-sm font-bold text-[#4F4F4F]/70">{t("metro.distance")}</p>
              <p className="mt-1 text-xs text-[#4F4F4F]/50">{t("metro.direction")}</p>
            </div>
          </div>

          {/* Metro map - M2 line stops */}
          <div className="mb-10 overflow-x-auto pb-4">
            <div className="min-w-[850px] px-4">
              {/* Interchange badges row */}
              <div className="flex items-end justify-between mb-2">
                {[
                  { lines: [] as string[] },
                  { lines: [] as string[] },
                  { lines: [] as string[] },
                  { lines: [] as string[] },
                  { lines: ["M4"] },
                  { lines: ["M1"] },
                  { lines: [] as string[] },
                  { lines: [] as string[] },
                  { lines: ["M5"] },
                  { lines: [] as string[] },
                  { lines: ["M3"] },
                  { lines: [] as string[] },
                  { lines: ["M1"] },
                  { lines: [] as string[] },
                  { lines: [] as string[] },
                  { lines: [] as string[] },
                  { lines: [] as string[] },
                  { lines: [] as string[] },
                  { lines: [] as string[] },
                ].map((stop, i) => {
                  const lineColors: Record<string, string> = {
                    M1: "#E4002B", M3: "#F5A623", M4: "#0093D9", M5: "#9B51E0",
                  };
                  return (
                    <div key={i} className="flex w-[calc(100%/19)] justify-center">
                      {stop.lines.map((line) => (
                        <span
                          key={line}
                          className="flex h-5 w-5 items-center justify-center rounded-full text-[7px] font-bold text-white"
                          style={{ backgroundColor: lineColors[line] }}
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  );
                })}
              </div>
              {/* Dots and line row */}
              <div className="relative flex items-center justify-between">
                {/* Green line behind dots */}
                <div className="absolute left-[calc(100%/38)] right-[calc(100%/38)] top-1/2 h-[2px] -translate-y-1/2 bg-[#18A538]" />
                {[
                  { name: "Assago", highlight: false, interchange: false },
                  { name: "Abbiategrasso", highlight: false, interchange: false },
                  { name: "Famagosta", highlight: false, interchange: false },
                  { name: "P. Genova", highlight: false, interchange: false },
                  { name: "Sant'Ambrogio", highlight: false, interchange: true },
                  { name: "Cadorna", highlight: false, interchange: true },
                  { name: "Lanza", highlight: false, interchange: false },
                  { name: "Moscova", highlight: false, interchange: false },
                  { name: "Garibaldi", highlight: false, interchange: true },
                  { name: "Gioia", highlight: false, interchange: false },
                  { name: "Centrale", highlight: false, interchange: true },
                  { name: "Caiazzo", highlight: false, interchange: false },
                  { name: "Loreto", highlight: false, interchange: true },
                  { name: "Piola", highlight: false, interchange: false },
                  { name: "Lambrate", highlight: false, interchange: false },
                  { name: "Udine", highlight: false, interchange: false },
                  { name: "Cimiano", highlight: true, interchange: false },
                  { name: "Crescenzago", highlight: false, interchange: false },
                  { name: "Cascina Gobba", highlight: false, interchange: false },
                ].map((stop) => (
                  <div key={stop.name} className="relative z-10 flex w-[calc(100%/19)] flex-col items-center">
                    <span className={`rounded-full ${
                      stop.highlight
                        ? "h-6 w-6 border-3 border-[#18A538] bg-[#18A538] ring-4 ring-[#18A538]/20"
                        : stop.interchange
                        ? "h-5 w-5 border-2 border-[#18A538] bg-[#18A538]"
                        : "h-3.5 w-3.5 border-2 border-[#18A538] bg-white"
                    }`} />
                  </div>
                ))}
              </div>
              {/* Names row */}
              <div className="mt-2 flex items-start justify-between">
                {[
                  "Assago", "Abbiategrasso", "Famagosta", "P. Genova",
                  "Sant'Ambrogio", "Cadorna", "Lanza", "Moscova",
                  "Garibaldi", "Gioia", "Centrale", "Caiazzo",
                  "Loreto", "Piola", "Lambrate", "Udine",
                  "Cimiano", "Crescenzago", "Cascina Gobba",
                ].map((name) => {
                  const isCimiano = name === "Cimiano";
                  return (
                    <span
                      key={name}
                      className={`w-[calc(100%/19)] text-center text-[8px] leading-tight ${
                        isCimiano ? "text-[10px] font-black text-[#18A538]" : "font-medium text-[#4F4F4F]/60"
                      }`}
                    >
                      {name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
