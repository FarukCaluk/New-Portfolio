"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { KatanaDivider, Enso, CherryBlossom } from "@/components/JapaneseElements";

const T = [
  {
    name: "Hasan Brkić",
    role: "Colleague",
    img: "/slike/hasan.jpg",
    stars: 5,
    text: "Great communicator, always proactive. Faruk doesn't just do his part — he makes everyone around him better. You want him in your team.",
  },
  {
    name: "Ajdin Mehmedović",
    role: "Collaborator",
    img: "/slike/ajdin.jpg",
    stars: 4.5,
    text: "Excellent team player with a consistent positive attitude. His problem-solving is methodical but creative — a rare combination. Collaboration felt effortless.",
  },
  {
    name: "Amila Kulović",
    role: "Teammate",
    img: "/slike/amila.jpg",
    stars: 5,
    text: "Reliable, supportive, and driven. Faruk's work ethic is the same whether there's pressure or not. That kind of consistency is priceless.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: "0.15rem" }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width={12} height={12} viewBox="0 0 24 24"
          fill={i <= Math.floor(n) ? "var(--gold)" : "none"}
          stroke={i <= n ? "var(--gold)" : "var(--border)"}
          strokeWidth={1.5}
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [vis,    setVis]    = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % T.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="section" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>

      {/* Enso — left side */}
      <div style={{ position: "absolute", top: "50%", left: "-60px", transform: "translateY(-50%)", zIndex: 0, pointerEvents: "none" }}>
        <Enso opacity={0.05} size={260} />
      </div>

      {/* Cherry blossom — top right */}
      <div style={{ position: "absolute", top: "-20px", right: "-20px", zIndex: 0, pointerEvents: "none", transform: "rotate(5deg)" }}>
        <CherryBlossom opacity={0.08} width={240} />
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 2 }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <p className="label" style={{ marginBottom: "0.75rem" }}>05 — 声 (Koe · Voice)</p>
            <h2 className="section-title">Testimonials</h2>
          </div>
          <div className="kanji-bg" style={{ fontSize: "clamp(4rem,10vw,8rem)", opacity: 0.04 }}>信</div>
        </div>

        <KatanaDivider opacity={0.15} />

        {/* Desktop: 3-column */}
        <div
          className="testi-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1rem",
            marginTop: "2.5rem",
            opacity: vis ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          {T.map((item, i) => (
            <div
              key={item.name}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? "var(--surface-2)" : "var(--surface)",
                border: `1px solid ${active === i ? "rgba(201,169,110,0.25)" : "var(--border-soft)"}`,
                borderRadius: 12,
                padding: "1.75rem",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: active === i ? "0 12px 40px rgba(0,0,0,0.4)" : "none",
                transform: active === i ? "translateY(-5px)" : "none",
              }}
            >
              {/* Gold bar at top if active */}
              <div style={{ width: active === i ? "100%" : 0, height: "1px", background: "linear-gradient(90deg, var(--gold-dark), transparent)", marginBottom: "1.5rem", transition: "width 0.4s ease", borderRadius: 1 }} />

              <p style={{ fontSize: "0.87rem", color: "var(--text-2)", lineHeight: 1.8, marginBottom: "1.5rem", fontStyle: "italic" }}>
                &ldquo;{item.text}&rdquo;
              </p>

              <hr className="divider" style={{ marginBottom: "1.25rem" }} />

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%", overflow: "hidden", flexShrink: 0,
                  border: `1.5px solid ${active === i ? "var(--gold)" : "var(--border)"}`,
                  transition: "border-color 0.3s",
                }}>
                  <Image src={item.img} alt={item.name} width={38} height={38} style={{ objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--text)" }}>{item.name}</p>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-3)" }}>{item.role}</p>
                </div>
                <Stars n={item.stars} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="testi-mobile" style={{ display: "none", marginTop: "2rem" }}>
          <div style={{
            background: "var(--surface)",
            border: "1px solid rgba(201,169,110,0.2)",
            borderRadius: 12, padding: "1.75rem",
            opacity: vis ? 1 : 0,
            transition: "opacity 0.5s",
          }}>
            <div style={{ width: "40%", height: "1px", background: "linear-gradient(90deg, var(--gold-dark), transparent)", marginBottom: "1.5rem" }} />
            <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.8, marginBottom: "1.5rem", fontStyle: "italic" }}>
              &ldquo;{T[active].text}&rdquo;
            </p>
            <hr className="divider" style={{ marginBottom: "1.25rem" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", overflow: "hidden", border: "1.5px solid var(--gold)", flexShrink: 0 }}>
                <Image src={T[active].img} alt={T[active].name} width={38} height={38} style={{ objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--text)" }}>{T[active].name}</p>
                <p style={{ fontSize: "0.72rem", color: "var(--text-3)" }}>{T[active].role}</p>
              </div>
              <Stars n={T[active].stars} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginTop: "1.25rem" }}>
            <button onClick={() => setActive(a => (a - 1 + T.length) % T.length)} className="btn-icon" style={{ width: 34, height: 34 }}><ChevronLeft size={14} /></button>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {T.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{ width: active === i ? 18 : 6, height: 6, borderRadius: 3, background: active === i ? "var(--gold)" : "var(--border)", border: "none", cursor: "pointer", transition: "all 0.3s" }} />
              ))}
            </div>
            <button onClick={() => setActive(a => (a + 1) % T.length)} className="btn-icon" style={{ width: 34, height: 34 }}><ChevronRight size={14} /></button>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .testi-grid   { display:none !important; }
          .testi-mobile { display:block !important; }
        }
      `}</style>
    </section>
  );
}
