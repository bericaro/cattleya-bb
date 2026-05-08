export default function CattleyaLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* === LEFT CATTLEYA ORCHID === */}
      <g transform="translate(-2, 5) scale(0.95)" opacity="0.7">
        {/* Top dorsal petal - wide, white-to-pink */}
        <path d="M32 42 Q25 15 35 3 Q40 -2 45 5 Q52 18 40 42Z" stroke="url(#wtp)" strokeWidth="1.2" fill="url(#wtp)" fillOpacity="0.25" />
        {/* Upper left petal - wide rounded */}
        <path d="M32 42 Q5 22 0 12 Q-2 5 6 8 Q18 15 30 38Z" stroke="url(#wtp)" strokeWidth="1.2" fill="url(#wtp)" fillOpacity="0.22" />
        {/* Upper right petal */}
        <path d="M35 42 Q55 18 62 8 Q66 2 60 6 Q50 16 38 40Z" stroke="url(#ptm)" strokeWidth="1.2" fill="url(#ptm)" fillOpacity="0.22" />
        {/* Lower left petal - drooping */}
        <path d="M30 46 Q10 55 4 68 Q1 76 9 74 Q20 68 30 52Z" stroke="url(#wtp)" strokeWidth="1.2" fill="url(#wtp)" fillOpacity="0.22" />
        {/* Lower right petal - drooping */}
        <path d="M36 46 Q54 55 60 68 Q63 76 55 74 Q44 68 38 52Z" stroke="url(#ptm)" strokeWidth="1.2" fill="url(#ptm)" fillOpacity="0.22" />

        {/* LABELLUM - the big ruffled magenta lip, cattleya's signature */}
        <path d="M33 46 Q22 52 17 62 Q14 70 18 76 Q22 82 26 80 Q24 74 27 68 Q30 62 33 58 Q36 62 39 68 Q42 74 40 80 Q44 82 48 76 Q52 70 49 62 Q44 52 33 46Z"
          stroke="#C2185B" strokeWidth="1" fill="url(#labGrad)" fillOpacity="0.25" />
        {/* Labellum ruffled edges detail */}
        <path d="M20 72 Q23 68 26 72" stroke="#C2185B" strokeWidth="0.5" fill="none" opacity="0.35" />
        <path d="M40 72 Q43 68 46 72" stroke="#C2185B" strokeWidth="0.5" fill="none" opacity="0.35" />
        <path d="M28 78 Q33 73 38 78" stroke="#C2185B" strokeWidth="0.4" fill="none" opacity="0.3" />

        {/* Yellow throat / center */}
        <ellipse cx="33" cy="52" rx="4" ry="5" fill="#F9A825" fillOpacity="0.35" />
        <ellipse cx="33" cy="50" rx="2.5" ry="3" fill="#FDD835" fillOpacity="0.3" />
        {/* Column */}
        <path d="M31 46 Q33 42 35 46" stroke="#9B51E0" strokeWidth="0.8" fill="none" opacity="0.4" />
      </g>

      {/* Stem curving from left flower */}
      <path d="M30 85 Q55 98 85 95 Q110 90 130 82" stroke="#7B8B6F" strokeWidth="0.8" fill="none" opacity="0.18" />
      <path d="M45 20 Q70 8 95 14 Q120 20 135 28" stroke="#7B8B6F" strokeWidth="0.6" fill="none" opacity="0.12" />
      {/* Small leaf */}
      <path d="M68 96 Q75 88 82 93 Q75 98 68 96Z" fill="#7B8B6F" fillOpacity="0.15" />

      {/* Bottom ornament */}
      <path d="M145 110 Q150 104 155 110" stroke="#C2185B" strokeWidth="0.5" fill="none" opacity="0.2" />

      <defs>
        {/* White to pink gradient (petals) */}
        <linearGradient id="wtp" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#E1BEE7" />
          <stop offset="100%" stopColor="#9B51E0" />
        </linearGradient>
        {/* Pink to magenta gradient */}
        <linearGradient id="ptm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E1BEE7" />
          <stop offset="100%" stopColor="#ED3FC1" />
        </linearGradient>
        {/* Labellum deep magenta gradient */}
        <linearGradient id="labGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C2185B" />
          <stop offset="50%" stopColor="#AD1457" />
          <stop offset="100%" stopColor="#880E4F" />
        </linearGradient>
      </defs>
    </svg>
  );
}
