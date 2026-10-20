/* ─────────────────────────────────────────────
   Japanese / Kaizen decorative SVG components
   Hokusai wave, red sun, torii, kanji labels
───────────────────────────────────────────── */

/** Great Wave — inspired by Hokusai, simplified outline */
export function GreatWave({
  opacity = 0.08,
  width = 400,
}: {
  opacity?: number;
  width?: number | string;
}) {
  return (
    <svg
      viewBox="0 0 400 220"
      width={width}
      style={{ display: "block", opacity }}
      fill="none"
      stroke="#c9a96e"
      aria-hidden="true"
    >
      {/* Main wave crest */}
      <path
        d="M0 180 C 30 160, 50 100, 80 60 C 100 35, 115 20, 130 30
           C 120 50, 100 70, 95 90
           C 140 55, 160 30, 180 40
           C 165 65, 150 85, 145 105
           C 175 70, 200 50, 220 60
           C 205 85, 195 105, 190 125
           C 220 95, 250 75, 270 85
           C 255 110, 245 130, 245 150
           C 270 125, 295 110, 315 118
           C 305 140, 298 158, 298 175
           C 320 155, 345 145, 365 150
           C 355 168, 350 182, 350 195
           L 400 195 L 400 220 L 0 220 Z"
        fill="#c9a96e"
        fillOpacity="0.12"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Wave foam curls at crest */}
      <path d="M80 60 C 85 40, 100 25, 115 28 C 108 45, 95 58, 95 75" strokeWidth="1.2" />
      <path d="M145 105 C 150 85, 168 65, 183 68 C 175 85, 162 98, 162 115" strokeWidth="1" />
      <path d="M190 125 C 196 105, 214 88, 228 90 C 220 108, 207 120, 208 138" strokeWidth="0.9" />
      {/* Secondary wave */}
      <path
        d="M0 200 C 40 185, 80 170, 120 175 C 160 180, 200 170, 240 178 C 280 186, 330 175, 370 180 L 400 182 L 400 220 L 0 220 Z"
        fill="#c9a96e" fillOpacity="0.07"
        strokeWidth="1"
      />
      {/* Mount Fuji in background */}
      <path d="M250 85 L 290 20 L 330 85" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M275 55 L 290 35 L 305 55" strokeWidth="0.8" strokeDasharray="2 2" />
    </svg>
  );
}

/** Red Sun — large brushstroke circle, Japanese ink style */
export function RedSun({
  opacity = 0.09,
  size = 220,
}: {
  opacity?: number;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 220 220"
      width={size}
      height={size}
      style={{ display: "block", opacity }}
      aria-hidden="true"
    >
      {/* Outer glow ring */}
      <circle cx="110" cy="110" r="100" fill="none" stroke="#c9a96e" strokeWidth="0.5" strokeOpacity="0.3" />
      {/* Main sun circle — slightly imperfect like a brushstroke */}
      <path
        d="M110 18 C 158 18, 198 56, 200 104 C 202 154, 165 198, 116 202
           C 66 206, 22 168, 20 118 C 18 68, 56 20, 106 18 Z"
        fill="#c9a96e"
        fillOpacity="0.15"
        stroke="#c9a96e"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Inner warmth */}
      <circle cx="110" cy="110" r="60" fill="#c9a96e" fillOpacity="0.06" />
    </svg>
  );
}

/** Torii gate */
export function ToriiGate({ opacity = 0.08, width = 120 }: { opacity?: number; width?: number }) {
  return (
    <svg viewBox="0 0 120 100" width={width} style={{ display: "block", opacity }} fill="none" stroke="#c9a96e" strokeWidth="3" aria-hidden="true">
      <path d="M4 22 Q60 8 116 22" strokeLinecap="round" />
      <line x1="12" y1="35" x2="108" y2="35" strokeLinecap="round" />
      <line x1="28" y1="22" x2="24" y2="100" strokeLinecap="round" />
      <line x1="92" y1="22" x2="96" y2="100" strokeLinecap="round" />
      <line x1="18" y1="28" x2="28" y2="28" />
      <line x1="92" y1="28" x2="102" y2="28" />
    </svg>
  );
}

/** Kanji label with glow */
export function KanjiDecor({ char, label, opacity = 0.9 }: { char: string; label: string; opacity?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.15rem", opacity }}>
      <span style={{
        fontFamily: "var(--font-jp), serif",
        fontSize: "1.6rem", color: "#c9a96e", lineHeight: 1,
        textShadow: "0 0 20px rgba(201,169,110,0.4)",
      }}>{char}</span>
      <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.52rem", color: "#4a4650", letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}
