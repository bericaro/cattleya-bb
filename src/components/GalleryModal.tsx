"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryModalProps {
  images: { src: string; alt: string }[];
  trigger: React.ReactNode;
}

export default function GalleryModal({ images, trigger }: GalleryModalProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const handleDragEnd = (clientX: number) => {
    if (dragStartX === null || selected === null) return;
    const dx = clientX - dragStartX;
    setDragStartX(null);
    const threshold = 50;
    if (dx > threshold && selected > 0) setSelected(selected - 1);
    else if (dx < -threshold && selected < images.length - 1) setSelected(selected + 1);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </button>

      {/* Grid modal */}
      {open && selected === null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-sm bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="sticky top-0 z-10 float-right mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#3E3C3C] text-white transition-colors hover:bg-[#9B51E0]"
              aria-label="Chiudi"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="clear-both grid grid-cols-2 gap-3 md:grid-cols-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className="relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer transition-opacity hover:opacity-80"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain bg-gray-50"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen single image */}
      {open && selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelected(null)}
        >
          {/* Close */}
          <button
            onClick={() => { setSelected(null); setOpen(false); }}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
            aria-label="Chiudi"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Back to grid */}
          <button
            onClick={(e) => { e.stopPropagation(); setSelected(null); }}
            className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/40"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Griglia
          </button>

          {/* Previous */}
          {selected > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(selected - 1); }}
              className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
              aria-label="Precedente"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next */}
          {selected < images.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(selected + 1); }}
              className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
              aria-label="Successiva"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative h-[80vh] w-full max-w-4xl touch-pan-y select-none"
            onClick={(e) => e.stopPropagation()}
            onPointerDown={(e) => { if (e.pointerType !== "mouse") setDragStartX(e.clientX); }}
            onPointerUp={(e) => { if (e.pointerType !== "mouse") handleDragEnd(e.clientX); }}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              fill
              draggable={false}
              className="pointer-events-none object-contain"
            />
          </div>

          {/* Counter */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/20 px-4 py-1 text-sm text-white">
            {selected + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
