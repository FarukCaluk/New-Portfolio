"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";
import { CherryBlossom, KatanaDivider, KanjiDecor } from "@/components/JapaneseElements";

const PHOTOS = [
  { src: "/slike/tbx.jpeg",   alt: "Kickboxing",   label: "Kickboxing" },
  { src: "/slike/tkd.jpeg",   alt: "Taekwondo",    label: "Taekwondo" },
  { src: "/slike/gym_2.jpeg", alt: "Gym",           label: "Strength" },
  { src: "/slike/trc.jpeg",   alt: "Running",       label: "Endurance" },
  { src: "/slike/gym.jpeg",   alt: "Training",      label: "Training" },
  { src: "/slike/trc_2.jpeg", alt: "Conditioning",  label: "Conditioning" },
];

const DISCIPLINES = [
  { kanji: "道", label: "Taekwondo",   sub: "Black Belt",   kanjiLabel: "Dō" },
  { kanji: "拳", label: "Kickboxing",  sub: "Competitor",   kanjiLabel: "Ken" },
  { kanji: "武", label: "MMA",         sub: "Practitioner", kanjiLabel: "Bu" },
  { kanji: "力", label: "Strength",    sub: "Hybrid",       kanjiLabel: "Chikara" },
  { kanji: "走", label: "Running",     sub: "Endurance",    kanjiLabel: "Hashiru" },
];

export default function Sports() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <section
      id="sports"
      ref={ref}
      className="section"
      style={{ background: "var(--surface)", position: "relative", overflow: "hidden" }}
    >
      {/* Cherry blossom branch — top-right corner, ink style */}
      <div style={{ position: "absolute", right: "-20px", top: "-10px", zIndex: 0, pointerEvents: "none", transform: "rotate(10deg)" }}>
        <CherryBlossom opacity={0.1} width={320} />
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <p className="label" style={{ marginBottom: "0.75rem" }}>02 — 武道 (Budō)</p>
            <h2 className="section-title">Sports</h2>
          </div>
          <div className="kanji-bg" style={{ fontSize: "clamp(4rem,10vw,8rem)", opacity: 0.05 }}>武</div>
        </div>

        <KatanaDivider opacity={0.18} />

        <p style={{ fontSize: "0.95rem", color: "var(--text-2)", maxWidth: 560, lineHeight: 1.85, margin: "1.75rem 0 2.5rem" }}>
          The mat teaches what the classroom can&apos;t — how to handle failure,
          reset, and go again. That same loop is how I approach every pull request.
        </p>

        {/* Discipline cards */}
        <div style={{
          display: "flex", gap: "0.65rem", flexWrap: "wrap",
          marginBottom: "3rem",
          opacity: vis ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}>
          {DISCIPLINES.map(({ kanji, label, sub, kanjiLabel }) => (
            <div
              key={label}
              className="card card-hover"
              style={{
                padding: "0.9rem 1.15rem",
                display: "flex", alignItems: "center", gap: "0.875rem",
                flex: "1 1 140px", minWidth: 130,
                borderColor: "var(--border-soft)",
              }}
            >
              <KanjiDecor char={kanji} label={kanjiLabel} />
              <div>
                <p style={{ fontWeight: 600, fontSize: "0.83rem", color: "var(--text)", lineHeight: 1.2 }}>{label}</p>
                <p style={{ fontSize: "0.68rem", color: "var(--gold)", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.08em", marginTop: "0.15rem" }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo grid — 3 columns, 2 rows */}
        <div
          className="sports-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0.65rem" }}
        >
          {PHOTOS.map(({ src, alt, label }, i) => (
            <button
              key={src}
              onClick={() => setLightbox(src)}
              className="sport-card"
              style={{
                position: "relative", aspectRatio: "4/3",
                background: "var(--surface-2)",
                border: "1px solid var(--border-soft)",
                borderRadius: 10, overflow: "hidden",
                cursor: "pointer", padding: 0, display: "block",
                opacity: vis ? 1 : 0,
                transform: vis ? "scale(1)" : "scale(0.97)",
                transition: `opacity 0.45s ease ${i * 0.07}s, transform 0.45s ease ${i * 0.07}s`,
              }}
            >
              <Image
                src={src} alt={alt} fill
                sizes="(max-width:640px) 50vw, 33vw"
                style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                className="sport-img"
              />
              {/* Hover overlay */}
              <div
                className="sport-overlay"
                style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(9,8,10,0.72) 0%, transparent 55%)",
                  opacity: 0, transition: "opacity 0.3s",
                  display: "flex", alignItems: "flex-end", justifyContent: "space-between",
                  padding: "0.65rem 0.75rem",
                }}
              >
                <span style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.58rem", color: "var(--text-2)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                  {label}
                </span>
                <Maximize2 size={11} color="var(--text-3)" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(0,0,0,0.96)",
            display: "flex", alignItems: "center", justifyContent: "center",
            backdropFilter: "blur(16px)", padding: "1rem",
          }}
        >
          <button onClick={() => setLightbox(null)} className="btn-icon" style={{ position: "absolute", top: "1.5rem", right: "1.5rem", zIndex: 1001 }}>
            <X size={18} />
          </button>
          <div onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh", borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}>
            <Image src={lightbox} alt="Enlarged" width={1200} height={900} style={{ objectFit: "contain", maxHeight: "88vh", display: "block" }} />
          </div>
        </div>
      )}

      <style>{`
        .sport-card:hover .sport-img    { transform: scale(1.06) !important; }
        .sport-card:hover .sport-overlay { opacity: 1 !important; }
        .sport-card:hover { border-color: rgba(201,169,110,0.2) !important; }
        @media(max-width:640px){ .sports-grid{ grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:380px){ .sports-grid{ grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
