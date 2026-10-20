"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";
import { KanjiDecor } from "@/components/JapaneseElements";

const PHOTOS = [
  { src: "/slike/tbx.jpeg",   alt: "Kickboxing training",   label: "Kickboxing" },
  { src: "/slike/tkd.jpeg",   alt: "Taekwondo",             label: "Taekwondo" },
  { src: "/slike/gym_2.jpeg", alt: "Strength training",     label: "Strength" },
  { src: "/slike/trc.jpeg",   alt: "Running",               label: "Endurance" },
  { src: "/slike/gym.jpeg",   alt: "Gym session",           label: "Training" },
  { src: "/slike/trc_2.jpeg", alt: "Conditioning run",      label: "Conditioning" },
];

const DISCIPLINES = [
  { kanji: "道", label: "Taekwondo",  sub: "2nd Dan · coach", kanjiLabel: "Dō" },
  { kanji: "拳", label: "Kickboxing", sub: "Competitor",      kanjiLabel: "Ken" },
  { kanji: "武", label: "MMA · BJJ",  sub: "Practitioner",    kanjiLabel: "Bu" },
  { kanji: "力", label: "Strength",   sub: "Hybrid",          kanjiLabel: "Chikara" },
  { kanji: "走", label: "Running",    sub: "Endurance",       kanjiLabel: "Hashiru" },
];

export default function Sports() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightbox]);

  return (
    <div>
      <div className="disciplines">
        {DISCIPLINES.map(({ kanji, label, sub, kanjiLabel }) => (
          <div key={label} className="card discipline rise">
            <KanjiDecor char={kanji} label={kanjiLabel} />
            <div>
              <p className="client-name" style={{ fontSize: "0.83rem" }}>{label}</p>
              <p className="client-meta" style={{ color: "var(--gold)" }}>{sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="sports-grid">
        {PHOTOS.map(({ src, alt, label }) => (
          <button key={src} onClick={() => setLightbox({ src, alt })} className="sport-card rise" aria-label={`Open photo: ${alt}`}>
            <Image src={src} alt={alt} fill sizes="(max-width:640px) 50vw, 380px" className="sport-img" />
            <span className="sport-overlay">
              <span>{label}</span>
              <Maximize2 size={11} />
            </span>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label={lightbox.alt}>
          <button onClick={() => setLightbox(null)} className="btn-icon" aria-label="Close" style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}>
            <X size={18} />
          </button>
          <div onClick={(e) => e.stopPropagation()} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--border)" }}>
            <Image src={lightbox.src} alt={lightbox.alt} width={1200} height={900} style={{ objectFit: "contain", maxHeight: "88vh", width: "auto", maxWidth: "90vw", display: "block" }} />
          </div>
        </div>
      )}
    </div>
  );
}
