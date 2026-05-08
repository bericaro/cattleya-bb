"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import CattleyaLogo from "./CattleyaLogo";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/rooms", key: "rooms" },
  { href: "/location", key: "location" },
  { href: "/tips", key: "tips" },
  { href: "/contact", key: "contact" },
  { href: "/reviews", key: "reviews" },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="relative flex flex-col items-center leading-tight py-1 px-6">
          <CattleyaLogo className="absolute -inset-6 h-[calc(100%+48px)] w-[calc(100%+48px)]" />
          <span className="relative font-praise text-5xl bg-gradient-to-r from-[#9B51E0] via-[#C751E0] to-[#ED3FC1] bg-clip-text text-transparent">
            Cattleya
          </span>
          <span className="relative font-praise text-lg text-black">
            Bed &amp; Breakfast
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-wider transition-colors hover:text-[#9B51E0] ${
                isActive(link.href) ? "text-[#9B51E0]" : "text-[#4F4F4F]"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#4F4F4F] transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#4F4F4F] transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#4F4F4F] transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#9B51E0] ${
                  isActive(link.href) ? "text-[#9B51E0]" : "text-[#4F4F4F]"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
