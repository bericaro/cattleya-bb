"use client";

import { useState } from "react";

export type Review = {
  name: string;
  location?: string;
  date: string;
  text: string;
};

type Props = {
  cattleyaReviews?: Review[];
  sakuraReviews?: Review[];
  matchaReviews?: Review[];
};

type TabKey = "cattleya" | "sakura" | "matcha";

const tabStyles: Record<TabKey, { gradient: string; hover: string }> = {
  cattleya: {
    gradient: "linear-gradient(to right, #DC2626, #B91C1C)",
    hover: "#DC2626",
  },
  sakura: {
    gradient: "linear-gradient(to right, #2563EB, #1D4ED8)",
    hover: "#2563EB",
  },
  matcha: {
    gradient: "linear-gradient(to right, #3FA535, #1E5E2A)",
    hover: "#3FA535",
  },
};

const avatarPalette = [
  { bg: "#F2D5E8", fg: "#9B51E0" },
  { bg: "#E0E7F3", fg: "#4F6BBA" },
  { bg: "#FCE1D6", fg: "#C47A4B" },
  { bg: "#DCEDD5", fg: "#3FA535" },
  { bg: "#F5E2D0", fg: "#A6724B" },
  { bg: "#E9D7F5", fg: "#7C3DBA" },
];

function Stars() {
  return (
    <span aria-label="5 stelle" className="inline-flex items-center gap-[1px] text-[#222]">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-[11px] w-[11px]" fill="currentColor" aria-hidden>
          <path d="M12 2.5l2.95 6.36 6.55.59-4.95 4.62 1.45 6.43L12 17.27l-6 3.23 1.45-6.43L2.5 9.45l6.55-.59L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
      {reviews.map((r, i) => {
        const colors = avatarPalette[i % avatarPalette.length];
        const initial = r.name.charAt(0).toUpperCase();
        return (
          <article key={`${r.name}-${r.date}`} className="text-[#222]">
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold"
                style={{ backgroundColor: colors.bg, color: colors.fg }}
                aria-hidden
              >
                {initial}
              </div>
              <div>
                <p className="text-[15px] font-semibold leading-tight">{r.name}</p>
                {r.location && (
                  <p className="mt-0.5 text-[13px] text-[#717171]">{r.location}</p>
                )}
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[13px] text-[#222]">
              <Stars />
              <span className="text-[#717171]">·</span>
              <span className="text-[#222]">{r.date}</span>
            </div>
            <p className="mt-3 whitespace-pre-line text-[15px] leading-7 text-[#222]">
              {r.text}
            </p>
          </article>
        );
      })}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  label,
  count,
  tabKey,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  tabKey: TabKey;
}) {
  const styles = tabStyles[tabKey];
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      style={active ? { background: styles.gradient } : undefined}
      className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
        active ? "text-white shadow" : "text-[#4F4F4F] hover:text-[#222]"
      }`}
    >
      {label}
      {count > 0 && (
        <span className={`ml-2 text-xs ${active ? "text-white/80" : "text-[#717171]"}`}>
          {count}
        </span>
      )}
    </button>
  );
}

function EmptyState({ roomName }: { roomName: string }) {
  return (
    <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#9B51E0]/25 bg-white/60 px-8 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#9B51E0]/10 to-[#ED3FC1]/10">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#9B51E0]" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" strokeLinecap="round" />
        </svg>
      </div>
      <p className="mt-5 text-base font-semibold text-[#4F4F4F]">
        Recensioni in arrivo
      </p>
      <p className="mt-2 max-w-md text-sm leading-6 text-[#4F4F4F]/70">
        Le recensioni della camera <span className="font-semibold text-[#3FA535]">{roomName}</span> saranno disponibili a breve.
      </p>
    </div>
  );
}

export default function ReviewsTabs({
  cattleyaReviews = [],
  sakuraReviews = [],
  matchaReviews = [],
}: Props) {
  const [tab, setTab] = useState<TabKey>("cattleya");
  const total = cattleyaReviews.length + sakuraReviews.length + matchaReviews.length;

  return (
    <>
      {/* Reviews count */}
      <div className="mt-10">
        <span className="text-sm font-medium text-[#4F4F4F]">{total} recensioni</span>
      </div>

      {/* Tabs */}
      <div role="tablist" aria-label="Camere" className="mt-8 inline-flex flex-wrap gap-1 rounded-full border border-[#9B51E0]/20 bg-white p-1 shadow-sm">
        <TabButton
          tabKey="cattleya"
          active={tab === "cattleya"}
          onClick={() => setTab("cattleya")}
          label="Cattleya"
          count={cattleyaReviews.length}
        />
        <TabButton
          tabKey="sakura"
          active={tab === "sakura"}
          onClick={() => setTab("sakura")}
          label="Sakura"
          count={sakuraReviews.length}
        />
        <TabButton
          tabKey="matcha"
          active={tab === "matcha"}
          onClick={() => setTab("matcha")}
          label="Matcha"
          count={matchaReviews.length}
        />
      </div>

      {/* All lists rendered, hidden when inactive — keeps content in DOM for SEO */}
      <div role="tabpanel" hidden={tab !== "cattleya"}>
        <ReviewList reviews={cattleyaReviews} />
      </div>
      <div role="tabpanel" hidden={tab !== "sakura"}>
        <ReviewList reviews={sakuraReviews} />
      </div>
      <div role="tabpanel" hidden={tab !== "matcha"}>
        {matchaReviews.length === 0 ? (
          <EmptyState roomName="Matcha" />
        ) : (
          <ReviewList reviews={matchaReviews} />
        )}
      </div>
    </>
  );
}
