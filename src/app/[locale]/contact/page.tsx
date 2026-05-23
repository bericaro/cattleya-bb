"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-24">
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED3FC1]">
          {t("title")}
        </p>
        <h1 className="mt-3 font-praise text-5xl bg-gradient-to-r from-[#9B51E0] via-[#C751E0] to-[#ED3FC1] bg-clip-text text-transparent">
          Cattleya
        </h1>
        <p className="font-praise text-lg text-black">
          Bed &amp; Breakfast
        </p>
        <div className="mt-2 h-[2px] w-16 bg-gradient-to-r from-[#9B51E0] to-[#ED3FC1]" />

        <div className="mt-12 grid gap-20 lg:grid-cols-2">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#4F4F4F]">
                {t("name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-[#4F4F4F] outline-none transition-colors focus:border-[#9B51E0]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#4F4F4F]">
                {t("email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-[#4F4F4F] outline-none transition-colors focus:border-[#9B51E0]"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#4F4F4F]">
                {t("message")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-[#4F4F4F] outline-none transition-colors focus:border-[#9B51E0]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#ED3FC1] px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#d635ab] disabled:opacity-50"
            >
              {status === "sending" ? "Invio in corso..." : t("send")}
            </button>

            {status === "sent" && (
              <p className="text-sm font-bold text-[#18A538]">
                Messaggio inviato con successo! Ti risponderemo al più presto.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-bold text-[#E4002B]">
                Errore nell&apos;invio. Riprova o contattaci direttamente per telefono.
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Name */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#9B51E0]/10">
                <svg className="h-5 w-5 text-[#9B51E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9B51E0]">Responsabile</p>
                <p className="mt-1 text-sm text-[#4F4F4F]">Luisa Capozzi</p>
              </div>
            </div>

            <div className="ml-5 h-[1px] w-3/4 bg-gradient-to-r from-[#9B51E0]/10 to-transparent" />

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#9B51E0]/10">
                <svg className="h-5 w-5 text-[#9B51E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9B51E0]">Indirizzo</p>
                <p className="mt-1 text-sm text-[#4F4F4F]">Via Giulio Perticari - 20127 Milano</p>
              </div>
            </div>

            <div className="ml-5 h-[1px] w-3/4 bg-gradient-to-r from-[#9B51E0]/10 to-transparent" />

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#9B51E0]/10">
                <svg className="h-5 w-5 text-[#9B51E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9B51E0]">Telefono</p>
                <a href="tel:+393388277390" className="mt-1 block text-sm text-[#4F4F4F] no-underline transition-colors hover:text-[#9B51E0]">
                  +39 338 827 7390
                </a>
                <a href="tel:+393401603940" className="block text-sm text-[#4F4F4F] no-underline transition-colors hover:text-[#9B51E0]">
                  +39 340 160 3940
                </a>
              </div>
            </div>

            <div className="ml-5 h-[1px] w-3/4 bg-gradient-to-r from-[#9B51E0]/10 to-transparent" />

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#9B51E0]/10">
                <svg className="h-5 w-5 text-[#9B51E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9B51E0]">Email</p>
                <a href="mailto:cattleya.nolo@gmail.com" className="mt-1 block text-sm text-[#4F4F4F] transition-colors hover:text-[#9B51E0]">
                  cattleya.nolo@gmail.com
                </a>
              </div>
            </div>

            <div className="ml-5 h-[1px] w-3/4 bg-gradient-to-r from-[#9B51E0]/10 to-transparent" />

            {/* Airbnb */}
            <div className="pt-4">
              <Image
                src="/images/airbnb-logo.png"
                alt="Airbnb"
                width={120}
                height={40}
                className="h-16 w-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="overflow-hidden rounded-sm shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.5!2d9.215!3d45.497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVia+Perticari+2%2C+Milano!5e0!3m2!1sit!2sit!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cattleya B&B Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
