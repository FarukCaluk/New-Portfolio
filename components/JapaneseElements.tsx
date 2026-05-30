/* ─────────────────────────────────────────────
   Japanese / Kaizen decorative SVG components
   Inspired by: Hokusai wave, ink pagoda, cherry blossom
───────────────────────────────────────────── */

/** Cherry blossom branch — sumi-e ink style */
export function CherryBlossom({
  opacity = 0.12,
  width = 340,
}: {
  opacity?: number;
  width?: number;
}) {
  return (
    <svg
      viewBox="0 0 340 400"
      width={width}
      style={{ display: "block", opacity }}
      aria-hidden="true"
    >
      {/* Main branch — thick ink strokes */}
      <path
        d="M20 380 C 60 320, 80 270, 130 220 C 160 195, 190 180, 220 155 C 250 130, 265 100, 280 60"
        fill="none" stroke="#c9a96e" strokeWidth="5" strokeLinecap="round"
      />
      {/* Sub-branch left */}
      <path
        d="M130 220 C 100 200, 70 190, 40 170"
        fill="none" stroke="#c9a96e" strokeWidth="3" strokeLinecap="round"
      />
      {/* Sub-branch right */}
      <path
        d="M220 155 C 240 130, 260 125, 300 120"
        fill="none" stroke="#c9a96e" strokeWidth="2.5" strokeLinecap="round"
      />
      {/* Small twig */}
      <path
        d="M190 178 C 195 155, 210 145, 225 130"
        fill="none" stroke="#c9a96e" strokeWidth="1.8" strokeLinecap="round"
      />
      <path
        d="M265 95 C 260 75, 270 60, 285 45"
        fill="none" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"
      />

      {/* Blossoms — 5-petal flowers at branch tips and along branches */}
      {[
        [40, 168], [55, 182], [28, 158],
        [298, 118], [310, 108], [285, 128],
        [220, 128], [230, 120], [210, 135],
        [280, 55],  [290, 45],  [272, 62],
        [100, 210], [112, 200],
      ].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx},${cy})`}>
          {[0, 72, 144, 216, 288].map((angle, j) => (
            <ellipse
              key={j}
              cx={Math.cos((angle * Math.PI) / 180) * 6}
              cy={Math.sin((angle * Math.PI) / 180) * 6}
              rx="4.5" ry="2.5"
              transform={`rotate(${angle})`}
              fill="#c9a96e"
              fillOpacity="0.7"
            />
          ))}
          <circle cx="0" cy="0" r="1.5" fill="#e8c98a" fillOpacity="0.9" />
        </g>
      ))}

      {/* Falling petals */}
      {[
        [160, 240, 15], [180, 260, -20], [70, 300, 10],
        [250, 200, -15], [310, 170, 25], [45, 340, -10],
      ].map(([x, y, rot], i) => (
        <ellipse
          key={`petal-${i}`}
          cx={x} cy={y} rx="4" ry="2"
          transform={`rotate(${rot}, ${x}, ${y})`}
          fill="#c9a96e" fillOpacity="0.4"
        />
      ))}
    </svg>
  );
}

/** Japanese Pagoda — ink painting style, inspired by the pagoda artwork */
export function Pagoda({
  opacity = 0.09,
  height = 360,
}: {
  opacity?: number;
  height?: number;
}) {
  return (
    <svg
      viewBox="0 0 160 360"
      height={height}
      style={{ display: "block", opacity }}
      fill="#c9a96e"
      aria-hidden="true"
    >
      {/* Finial / spire */}
      <line x1="80" y1="0" x2="80" y2="30" stroke="#c9a96e" strokeWidth="2" />
      <circle cx="80" cy="30" r="3" />
      <line x1="80" y1="30" x2="80" y2="50" stroke="#c9a96e" strokeWidth="2.5" />

      {/* Tier 1 — top */}
      <path d="M55 50 Q80 40 105 50 L110 65 H50 Z" />
      <rect x="58" y="65" width="44" height="22" rx="1" />
      {/* Tier 1 eave curve */}
      <path d="M50 65 Q80 58 110 65" fill="none" stroke="#c9a96e" strokeWidth="1.2" />

      {/* Tier 2 */}
      <path d="M45 87 Q80 75 115 87 L122 105 H38 Z" />
      <rect x="50" y="105" width="60" height="26" rx="1" />
      <path d="M38 105 Q80 96 122 105" fill="none" stroke="#c9a96e" strokeWidth="1.2" />

      {/* Tier 3 */}
      <path d="M36 131 Q80 118 124 131 L132 152 H28 Z" />
      <rect x="42" y="152" width="76" height="28" rx="1" />
      <path d="M28 152 Q80 141 132 152" fill="none" stroke="#c9a96e" strokeWidth="1.2" />

      {/* Tier 4 — ground floor */}
      <path d="M26 180 Q80 165 134 180 L144 204 H16 Z" />
      <rect x="32" y="204" width="96" height="36" rx="1" />
      {/* Door */}
      <rect x="70" y="218" width="20" height="22" rx="2" fillOpacity="0.4" />
      {/* Windows */}
      <rect x="44" y="214" width="14" height="12" rx="1" fillOpacity="0.35" />
      <rect x="102" y="214" width="14" height="12" rx="1" fillOpacity="0.35" />
      <path d="M16 204 Q80 191 144 204" fill="none" stroke="#c9a96e" strokeWidth="1.3" />

      {/* Base / foundation */}
      <rect x="22" y="240" width="116" height="10" rx="2" fillOpacity="0.6" />
      <rect x="10" y="248" width="140" height="8" rx="2" fillOpacity="0.5" />

      {/* Steps */}
      <rect x="52" y="256" width="56" height="6" rx="1" fillOpacity="0.45" />
      <rect x="44" y="262" width="72" height="6" rx="1" fillOpacity="0.35" />

      {/* Ground */}
      <rect x="0" y="268" width="160" height="4" rx="2" fillOpacity="0.25" />

      {/* Trees flanking */}
      <ellipse cx="18" cy="255" rx="12" ry="18" fillOpacity="0.3" />
      <rect x="16" y="270" width="4" height="14" rx="1" fillOpacity="0.3" />
      <ellipse cx="142" cy="255" rx="12" ry="18" fillOpacity="0.3" />
      <rect x="140" y="270" width="4" height="14" rx="1" fillOpacity="0.3" />

      {/* Flying birds */}
      {[[30, 30], [42, 24], [52, 28], [120, 20], [132, 26]].map(([x, y], i) => (
        <path key={i} d={`M${x},${y} Q${x + 5},${y - 4} ${x + 10},${y}`} fill="none" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" />
      ))}
    </svg>
  );
}

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

/** Bamboo stalks — vertical brush painting */
export function Bamboo({
  opacity = 0.09,
  height = 300,
}: {
  opacity?: number;
  height?: number;
}) {
  const stalks = [
    { x: 20, segments: [0, 60, 115, 165, 215, 270] },
    { x: 50, segments: [30, 85, 140, 195, 250] },
    { x: 80, segments: [0, 55, 110, 160, 215, 265] },
  ];

  return (
    <svg
      viewBox="0 0 120 300"
      height={height}
      style={{ display: "block", opacity }}
      fill="#c9a96e"
      aria-hidden="true"
    >
      {stalks.map(({ x, segments }) => (
        <g key={x}>
          {/* Stalk body */}
          <rect x={x - 4} y={segments[0]} width="8" height={segments[segments.length - 1] - segments[0]} rx="4" fillOpacity="0.5" />
          {/* Nodes */}
          {segments.slice(1).map((y, i) => (
            <rect key={i} x={x - 5} y={y - 3} width="10" height="5" rx="2" fillOpacity="0.8" />
          ))}
          {/* Leaves */}
          {segments.slice(1, -1).map((y, i) => (
            <g key={`leaf-${i}`}>
              <path d={`M${x + 4},${y} Q${x + 28},${y - 15} ${x + 35},${y - 30}`} fill="none" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" fillOpacity="0.7" />
              <path d={`M${x - 4},${y + 8} Q${x - 28},${y - 5} ${x - 38},${y - 18}`} fill="none" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" fillOpacity="0.6" />
            </g>
          ))}
        </g>
      ))}
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

/** Enso — Zen brushstroke circle */
export function Enso({ opacity = 0.06, size = 200 }: { opacity?: number; size?: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} style={{ display: "block", opacity }} fill="none" aria-hidden="true">
      <path
        d="M100 14 C148 14 186 52 186 100 C186 148 148 186 100 186 C52 186 14 148 14 100 C14 70 28 44 50 28"
        stroke="#c9a96e" strokeWidth="6" strokeLinecap="round"
      />
    </svg>
  );
}

/** Mount Fuji silhouette */
export function MountFuji({ opacity = 0.06, width = 300 }: { opacity?: number; width?: number }) {
  return (
    <svg viewBox="0 0 300 160" width={width} style={{ display: "block", opacity }} fill="#c9a96e" aria-hidden="true">
      <polygon points="150,10 40,150 260,150" />
      <polygon points="150,10 115,70 185,70" fill="#ede8df" opacity="0.5" />
      <rect x="0" y="150" width="300" height="10" rx="2" />
    </svg>
  );
}

/** Katana divider */
export function KatanaDivider({ opacity = 0.25 }: { opacity?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", opacity, margin: "0.5rem 0" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
      <svg viewBox="0 0 40 8" width={40} height={8} fill="#c9a96e" aria-hidden="true">
        <ellipse cx="20" cy="4" rx="6" ry="3.5" />
        <polygon points="0,3.5 14,4 26,4 0,4.5" />
        <rect x="26" y="3.2" width="14" height="1.6" rx="0.8" />
      </svg>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
    </div>
  );
}

/** Kanji label with glow */
export function KanjiDecor({ char, label, opacity = 0.9 }: { char: string; label: string; opacity?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.15rem", opacity }}>
      <span style={{
        fontFamily: "'Noto Serif JP', serif",
        fontSize: "1.6rem", color: "#c9a96e", lineHeight: 1,
        textShadow: "0 0 20px rgba(201,169,110,0.4)",
      }}>{char}</span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", color: "#4a4650", letterSpacing: "0.12em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}
