"use client";

import { useState } from "react";
import Image from "next/image";

export default function TipSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-0 top-32 z-40">
      {/* Tab button always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-l-lg bg-[#ED3FC1] px-3 py-3 text-white shadow-lg transition-all hover:bg-[#d635ab]"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <span className="hidden text-xs font-bold uppercase tracking-wider md:block">
          Consiglio
        </span>
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute right-0 top-full mt-2 w-72 origin-top-right transition-all duration-300 ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-l-lg border border-[#ED3FC1]/15 bg-white shadow-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#fdf2fb] to-[#f9f5fc] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ED3FC1]/15">
                <svg className="h-5 w-5 text-[#ED3FC1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#4F4F4F]">Fluid Caffè</p>
                <p className="text-[10px] font-bold text-[#4F4F4F]">V.le Don Luigi Orione 21</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#ED3FC1]">Colazione, Pranzo &amp; Aperitivo</p>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative h-32 w-full">
            <Image src="/images/fluid.png" alt="Fluid Caffè" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="px-5 py-4">
            <p className="text-xs leading-6 text-[#4F4F4F]">
              Proprio davanti alla metro di Cimiano, il Fluid Caffè è perfetto per un&apos;ottima colazione o una pausa pranzo. Ambiente accogliente e ottimi prodotti.
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="rounded-full bg-[#ED3FC1]/10 px-2.5 py-0.5 text-[9px] font-bold text-[#ED3FC1]">Colazione</span>
              <span className="rounded-full bg-[#ED3FC1]/10 px-2.5 py-0.5 text-[9px] font-bold text-[#ED3FC1]">Pranzo</span>
              <span className="rounded-full bg-[#ED3FC1]/10 px-2.5 py-0.5 text-[9px] font-bold text-[#ED3FC1]">Aperitivo</span>
              <span className="rounded-full bg-[#ED3FC1]/10 px-2.5 py-0.5 text-[9px] font-bold text-[#ED3FC1]">2 min a piedi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
