import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suggerimenti e Itinerari",
  description: "Itinerari consigliati dal B&B Cattleya Milano. Come raggiungere Duomo, Brera, Navigli, Corso Buenos Aires dalla metro Cimiano M2. Passeggiata Martesana, Ospedale San Raffaele.",
};

const itineraries = [
  {
    title: "Shopping in Corso Buenos Aires",
    color: "#E4002B",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    description: (
      <>Da Cimiano prendi la <strong>M2</strong> (direzione Abbiategrasso/Assago) e in <strong>4 fermate</strong> arrivi a <strong>Loreto</strong>. Qui ti ritrovi all&apos;inizio di <strong>Corso Buenos Aires</strong>, una delle vie dello shopping più lunghe d&apos;Europa con oltre <strong>350 negozi</strong>, boutique e grandi marchi.</>
    ),
    highlights: ["Zara", "H&M", "Feltrinelli", "OVS", "Coin"],
    stops: [
      { name: "Cimiano", lineColor: "#18A538", active: true },
      { name: "Udine", lineColor: "#18A538", active: false },
      { name: "Lambrate", lineColor: "#18A538", active: false },
      { name: "Piola", lineColor: "#18A538", active: false },
      { name: "Loreto", lineColor: "#E4002B", active: true },
    ],
  },
  {
    title: "Passeggiata sulla Martesana",
    color: "#18A538",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    description: (
      <>A <strong>pochi passi</strong> dal B&amp;B trovi l&apos;ingresso al <strong>Parco della Martesana</strong>. Percorri la <strong>pista ciclabile</strong> lungo il Naviglio Martesana tra alberi, anatre e ville storiche. Perfetto per <strong>jogging mattutino</strong>, passeggiate romantiche o un giro in bici.</>
    ),
    highlights: ["Pista ciclabile", "Villa Angelica", "Cascina Martesana", "Parco Lambro"],
    stops: [
      { name: "B&B", lineColor: "#18A538", active: true },
      { name: "3 min", lineColor: "#18A538", active: false, walkIcon: true },
      { name: "Martesana", lineColor: "#18A538", active: true },
    ],
  },
  {
    title: "Brera e Porta Venezia",
    color: "#9B51E0",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072" />
      </svg>
    ),
    description: (
      <>Prendi la <strong>M2</strong> da Cimiano fino a <strong>Moscova</strong> (<strong>9 fermate</strong>) per esplorare il quartiere di <strong>Brera</strong>, il cuore artistico e bohémien di Milano. Pinacoteca di Brera, botteghe d&apos;arte, caffè storici e vie acciottolate.</>
    ),
    highlights: ["Pinacoteca di Brera", "Giardini Montanelli", "Via Fiori Chiari", "Eataly"],
    stops: [
      { name: "Cimiano", lineColor: "#18A538", active: true },
      { name: "Udine", lineColor: "#18A538", active: false },
      { name: "Lambrate", lineColor: "#18A538", active: false },
      { name: "Piola", lineColor: "#18A538", active: false },
      { name: "Loreto", lineColor: "#18A538", active: false },
      { name: "Caiazzo", lineColor: "#18A538", active: false },
      { name: "Centrale", lineColor: "#18A538", active: false },
      { name: "Gioia", lineColor: "#18A538", active: false },
      { name: "Garibaldi", lineColor: "#18A538", active: false },
      { name: "Moscova", lineColor: "#18A538", active: true },
    ],
  },
  {
    title: "Duomo e Centro Storico",
    color: "#F5A623",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description: (
      <>Dalla fermata Cimiano prendi la <strong>M2</strong> fino a <strong>Loreto</strong> (4 fermate), poi cambi sulla <strong>M1</strong> (Linea Rossa) e in <strong>5 fermate</strong> sei al <strong>Duomo</strong>. <strong>Piazza del Duomo</strong>, la <strong>Galleria Vittorio Emanuele II</strong> e il <strong>Teatro alla Scala</strong> ti aspettano.</>
    ),
    highlights: ["Duomo", "Galleria Vittorio Emanuele", "Teatro alla Scala", "Via Montenapoleone"],
    stops: [
      { name: "Cimiano", lineColor: "#18A538", active: true },
      { name: "Udine", lineColor: "#18A538", active: false },
      { name: "Lambrate", lineColor: "#18A538", active: false },
      { name: "Piola", lineColor: "#18A538", active: false },
      { name: "Loreto", lineColor: "#E4002B", active: true, change: "M1" },
      { name: "Lima", lineColor: "#E4002B", active: false },
      { name: "P. Venezia", lineColor: "#E4002B", active: false },
      { name: "Palestro", lineColor: "#E4002B", active: false },
      { name: "San Babila", lineColor: "#E4002B", active: false },
      { name: "Duomo", lineColor: "#E4002B", active: true },
    ],
  },
  {
    title: "Navigli e Vita Notturna",
    color: "#ED3FC1",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18" />
      </svg>
    ),
    description: (
      <>Da Cimiano prendi la <strong>M2</strong> direzione Abbiategrasso e scendi a <strong>Porta Genova</strong> (<strong>14 fermate</strong>). Sei nel cuore dei <strong>Navigli</strong>, la zona più vivace di Milano per <strong>aperitivi</strong>, ristoranti e <strong>vita notturna</strong> lungo i canali storici.</>
    ),
    highlights: ["Naviglio Grande", "Naviglio Pavese", "Aperitivo sul canale", "Mercato dell'antiquariato"],
    stops: [
      { name: "Cimiano", lineColor: "#18A538", active: true },
      { name: "Udine", lineColor: "#18A538", active: false },
      { name: "Lambrate", lineColor: "#18A538", active: false },
      { name: "Piola", lineColor: "#18A538", active: false },
      { name: "Loreto", lineColor: "#18A538", active: false },
      { name: "Caiazzo", lineColor: "#18A538", active: false },
      { name: "Centrale", lineColor: "#18A538", active: false },
      { name: "Gioia", lineColor: "#18A538", active: false },
      { name: "Garibaldi", lineColor: "#18A538", active: false },
      { name: "Moscova", lineColor: "#18A538", active: false },
      { name: "Lanza", lineColor: "#18A538", active: false },
      { name: "Cadorna", lineColor: "#18A538", active: false },
      { name: "S. Ambrogio", lineColor: "#18A538", active: false },
      { name: "S. Agostino", lineColor: "#18A538", active: false },
      { name: "P.Genova", lineColor: "#18A538", active: true },
    ],
  },
  {
    title: "Ospedale San Raffaele",
    color: "#0076C8",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: (
      <>L&apos;<strong>Ospedale San Raffaele</strong> è raggiungibile in circa <strong>15 minuti</strong>. Prendi la <strong>M2</strong> da Cimiano fino a <strong>Cascina Gobba</strong> e da lì il <strong>bus navetta</strong>. Ideale per chi viaggia per motivi di salute o per accompagnare familiari.</>
    ),
    highlights: ["15 minuti", "M2 Cascina Gobba", "Bus navetta", "Comodo e veloce"],
    stops: [
      { name: "Cimiano", lineColor: "#18A538", active: true },
      { name: "Crescenzago", lineColor: "#18A538", active: false },
      { name: "C. Gobba", lineColor: "#18A538", active: true, change: "Bus" },
      { name: "San Raffaele", lineColor: "#0076C8", active: true },
    ],
  },
];

interface Stop {
  name: string;
  lineColor: string;
  active: boolean;
  change?: string;
  walkIcon?: boolean;
}

function MiniMetroMap({ stops, color }: { stops: Stop[]; color: string }) {
  return (
    <div className="mt-4 rounded-sm bg-gray-50 px-5 py-4 overflow-x-auto">
      <div className="inline-flex items-center gap-0">
        {stops.map((stop, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              {/* Change badge */}
              {stop.change && (
                <span
                  className="mb-1 rounded-full px-2 py-0.5 text-[9px] font-bold text-white"
                  style={{ backgroundColor: stop.lineColor }}
                >
                  {stop.change}
                </span>
              )}
              {!stop.change && !stop.walkIcon && <div className="mb-1 h-[18px]" />}
              {/* Walk icon instead of dot */}
              {stop.walkIcon ? (
                <div className="mb-1 flex flex-col items-center">
                  <svg className="h-5 w-5" style={{ color: stop.lineColor }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 5.3L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.9-.8" />
                  </svg>
                </div>
              ) : (
                /* Dot */
                <span
                  className="rounded-full"
                  style={{
                    width: stop.active ? 16 : 10,
                    height: stop.active ? 16 : 10,
                    backgroundColor: stop.active ? stop.lineColor : "transparent",
                    border: `2.5px solid ${stop.lineColor}`,
                  }}
                />
              )}
              {/* Name */}
              <span
                className="mt-2 text-center leading-tight"
                style={{
                  fontSize: stop.active ? 11 : 9,
                  fontWeight: stop.active ? 800 : 600,
                  color: stop.active ? stop.lineColor : "#4F4F4F99",
                  maxWidth: 55,
                }}
              >
                {stop.name}
              </span>
            </div>
            {/* Connecting line */}
            {i < stops.length - 1 && (
              <div
                className="h-[3px] w-5"
                style={{
                  backgroundColor:
                    stops[i + 1].lineColor !== stop.lineColor
                      ? `${stop.lineColor}60`
                      : stop.lineColor,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import TipSidebar from "@/components/TipSidebar";

export default function TipsPage() {
  return (
    <div className="pt-24">
      <TipSidebar />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ED3FC1]">
            Suggerimenti
          </p>
          <h1 className="mt-3 font-praise text-5xl text-[#9B51E0]">
            Itinerari
          </h1>
          <div className="mt-2 h-[2px] w-16 bg-gradient-to-r from-[#9B51E0] to-[#ED3FC1]" />
          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#4F4F4F]">
            Dalla nostra posizione a Cimiano puoi raggiungere facilmente le zone più belle di Milano. Ecco i nostri itinerari consigliati.
          </p>

          <div className="mt-14 space-y-10">
            {itineraries.map((item, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-sm border border-gray-100 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left color bar + icon */}
                  <div
                    className="flex items-center justify-center px-6 py-8 md:w-24 md:flex-col"
                    style={{ backgroundColor: item.color + "12" }}
                  >
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: item.color + "20", color: item.color }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 md:p-10">
                    <h2 className="text-xl font-bold text-[#4F4F4F]">{item.title}</h2>
                    <div className="mt-2 h-[2px] w-8 transition-all duration-300 group-hover:w-16" style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}40)` }} />

                    <p className="mt-5 text-sm leading-8 text-[#4F4F4F]">
                      {item.description}
                    </p>

                    {/* Mini metro map */}
                    <MiniMetroMap stops={item.stops} color={item.color} />

                    {/* Highlights */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border px-4 py-1.5 text-[11px] font-bold"
                          style={{ borderColor: item.color + "30", color: item.color }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Il nostro consiglio */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#9B51E0]/20 to-transparent" />
            <span className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#ED3FC1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9B51E0]/60">Il nostro consiglio</span>
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#9B51E0]/20 to-transparent" />
          </div>

          <div className="overflow-hidden rounded-sm border border-[#ED3FC1]/15 bg-gradient-to-r from-[#fdf2fb] to-[#f9f5fc]">
            <div className="flex flex-col md:flex-row">
              {/* Photos */}
              <div className="flex w-full md:w-56 md:flex-shrink-0">
                <div className="relative flex-1">
                  <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
                    <Image src="/images/fluid.png" alt="Fluid Caffè" fill className="object-cover" />
                  </div>
                </div>
                <div className="relative flex-1">
                  <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
                    <Image src="/images/fuid2.png" alt="Fluid Caffè" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-6 py-8 md:px-8">
                <h3 className="text-lg font-bold text-[#4F4F4F]">Fluid Caffè</h3>
                <p className="mt-1 text-xs text-[#4F4F4F]/60">Viale Don Luigi Orione 21, Milano</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#ED3FC1]">Colazione, Pranzo &amp; Aperitivo</p>
                <p className="mt-3 text-sm leading-7 text-[#4F4F4F]">
                  Proprio davanti alla fermata metro di Cimiano, il Fluid Caffè è il posto perfetto per iniziare la giornata con un'ottima colazione o per una pausa pranzo gustosa. Ambiente accogliente, personale cordiale e ottimi prodotti. A pochi passi dal B&amp;B, è il nostro consiglio per chi vuole godersi un momento di relax prima di esplorare Milano.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-[#ED3FC1]/30 px-3 py-1 text-[10px] font-bold text-[#ED3FC1]">Colazione</span>
                  <span className="rounded-full border border-[#ED3FC1]/30 px-3 py-1 text-[10px] font-bold text-[#ED3FC1]">Pranzo</span>
                  <span className="rounded-full border border-[#ED3FC1]/30 px-3 py-1 text-[10px] font-bold text-[#ED3FC1]">Aperitivo</span>
                  <span className="rounded-full border border-[#ED3FC1]/30 px-3 py-1 text-[10px] font-bold text-[#ED3FC1]">Davanti metro Cimiano</span>
                  <span className="rounded-full border border-[#ED3FC1]/30 px-3 py-1 text-[10px] font-bold text-[#ED3FC1]">2 min a piedi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
