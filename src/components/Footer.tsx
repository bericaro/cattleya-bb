"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#3E3C3C]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-white">
              Cattleya B&B
            </p>
            <p className="mt-1 text-sm capitalize leading-relaxed text-white/80">
              {t("tagline").split("\n")[1]}
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-xs font-bold text-white">
                Address: Via Giulio Perticari 2, 20127 Milano
              </p>
              <p className="text-xs font-bold text-white">
                Phone: +39 338 827 7390 — +39 340 160 3940
              </p>
              <p className="text-xs font-bold text-white">
                Email: cattleya.nolo@gmail.com
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/images/airbnb-logo.png"
              alt="Airbnb"
              width={100}
              height={32}
              className="h-14 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
