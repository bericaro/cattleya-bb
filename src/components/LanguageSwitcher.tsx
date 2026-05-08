"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";

const localeLabels: Record<string, string> = {
  it: "IT",
  en: "EN",
  fr: "FR",
  es: "ES",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#4F4F4F] transition-colors hover:text-[#9B51E0]"
      >
        {localeLabels[locale] || locale.toUpperCase()}
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-[60px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => switchLocale(loc)}
              className={`block w-full px-4 py-2 text-left text-xs font-bold uppercase tracking-wider transition-colors hover:bg-gray-50 ${
                loc === locale ? "text-[#9B51E0]" : "text-[#4F4F4F]"
              }`}
            >
              {localeLabels[loc] || loc.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
