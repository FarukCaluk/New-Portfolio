"use client";
import { useEffect, useRef, useState } from "react";
import { Globe, Layout, Server, Dumbbell } from "lucide-react";
import { KatanaDivider } from "@/components/JapaneseElements";

const SERVICES = [
  {
    icon: Globe, num: "01",
    title: "Web Development",
    desc: "End-to-end web solutions — responsive, performant, accessible. From landing pages to complex SPAs built right the first time.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    icon: Layout, num: "02",
    title: "Frontend Engineering",
    desc: "Component-driven UIs with React, Next.js and Angular. Performance-first, pixel-precise. If users see it, I care about every detail.",
    tags: ["React", "Next.js", "Angular", "TypeScript", "Tailwind"],
  },
  {
    icon: Server, num: "03",
    title: "Backend Development",
    desc: "Scalable REST APIs and server-side logic with NestJS, Node.js and PHP/Laravel. Clean architecture, documented, and built to scale.",
    tags: ["NestJS", "Node.js", "PHP", "Laravel", "MongoDB", "MySQL"],
  },
  {
    icon: Dumbbell, num: "04",
    title: "Personal Training",
    desc: "Martial arts coaching (Taekwondo, Kickboxing, MMA) and gym programming. Tailored plans that produce results at any level.",
    tags: ["Taekwondo", "Kickboxing", "MMA", "Strength"],
  },
];

const SKILLS = [
  { label: "React / Next.js",  pct: 90 },
  { label: "TypeScript",       pct: 87 },
  { label: "NestJS / Node.js", pct: 80 },
  { label: "CSS / Tailwind",   pct: 92 },
  { label: "Angular",          pct: 65 },
  { label: "PHP / Laravel",    pct: 60 },
  { label: "MongoDB / MySQL",  pct: 76 },
  { label: "C++ / C#",         pct: 70 },
];

const TECH_ICONS = [
  { label: "React",      col: "#61DAFB" },
  { label: "Next.js",    col: "#ffffff" },
  { label: "TypeScript", col: "#3178C6" },
  { label: "NestJS",     col: "#E0234E" },
  { label: "Angular",    col: "#DD0031" },
  { label: "PHP",        col: "#8892BF" },
  { label: "Laravel",    col: "#FF2D20" },
  { label: "MongoDB",    col: "#4DB33D" },
  { label: "MySQL",      col: "#4479A1" },
  { label: "Tailwind",   col: "#06B6D4" },
  { label: "C++",        col: "#00599C" },
  { label: "C#",         col: "#239120" },
  { label: "Node.js",    col: "#339933" },
  { label: "JavaScript", col: "#F7DF1E" },
  { label: "HTML/CSS",   col: "#E34F26" },
  { label: "Git",        col: "#F05032" },
];

function ServiceCard({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const [vis, setVis] = useState(false);
  const [hov, setHov] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = s.icon;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "2rem 1.75rem",
        borderRight: "1px solid var(--border-soft)",
        borderBottom: "1px solid var(--border-soft)",
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(18px)",
        transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, background 0.22s`,
        background: hov ? "var(--surface-2)" : "transparent",
        cursor: "default",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--text-3)" }}>{s.num}</span>
        <div style={{
          width: 38, height: 38, borderRadius: 8,
          background: hov ? "var(--gold-soft)" : "var(--surface-3)",
          border: `1px solid ${hov ? "var(--gold-rim)" : "var(--border)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all 0.22s",
        }}>
          <Icon size={17} color={hov ? "var(--gold)" : "var(--text-3)"} strokeWidth={1.5} />
        </div>
      </div>
      <h3 style={{ fontWeight: 700, fontSize: "0.975rem", color: "var(--text)", marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>{s.title}</h3>
      <p style={{ fontSize: "0.845rem", color: "var(--text-2)", lineHeight: 1.78, marginBottom: "1.25rem" }}>{s.desc}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {s.tags.map(t => <span key={t} className="badge" style={{ fontSize: "0.58rem" }}>{t}</span>)}
      </div>
    </div>
  );
}

function SkillBar({ label, pct, i }: { label: string; pct: number; i: number }) {
  const [w, setW] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setW(pct), i * 65); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct, i]);

  return (
    <div ref={ref}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.45rem" }}>
        <span style={{ fontSize: "0.84rem", color: "var(--text-2)", fontWeight: 500 }}>{label}</span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--gold)" }}>{pct}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${w}%` }} />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: "var(--surface)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <p className="label" style={{ marginBottom: "0.75rem" }}>03 — 技 (Waza)</p>
            <h2 className="section-title">Services</h2>
          </div>
          <div className="kanji-bg" style={{ fontSize: "clamp(4rem,10vw,8rem)", opacity: 0.05 }}>技</div>
        </div>

        <KatanaDivider opacity={0.18} />

        {/* Service cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2,1fr)",
          border: "1px solid var(--border-soft)", borderRadius: 14,
          overflow: "hidden", marginTop: "2rem", marginBottom: "4.5rem",
        }} className="services-grid">
          {SERVICES.map((s, i) => <ServiceCard key={s.num} s={s} i={i} />)}
        </div>

        {/* Skills + principles */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }} className="skills-grid">
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text)", marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>
              Tech proficiency
            </h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-3)", marginBottom: "2rem" }}>Across university, internships & side projects.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {SKILLS.map((s, i) => <SkillBar key={s.label} label={s.label} pct={s.pct} i={i} />)}
            </div>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text)", marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>
              Tech stack
            </h3>
            <p style={{ fontSize: "0.8rem", color: "var(--text-3)", marginBottom: "1.5rem" }}>Everything I&apos;ve shipped code with.</p>

            {/* Tech pill grid */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
              {TECH_ICONS.map(({ label, col }) => (
                <div
                  key={label}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.4rem",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: "0.3rem 0.65rem",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = col + "55"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                >
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: col, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem", color: "var(--text-2)" }}>{label}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
              The Kaizen principles
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {[
                { kanji: "改", title: "Kaizen-driven",     body: "Every sprint, commit, and review is a 1% improvement opportunity." },
                { kanji: "清", title: "Clean code first",  body: "Code is read far more than written. Clarity beats cleverness." },
                { kanji: "動", title: "Ship & iterate",    body: "Working software over perfect. Feedback loops beat guessing." },
                { kanji: "鍛", title: "Athlete's grit",   body: "Consistent practice beats raw talent. Show up and do the reps." },
              ].map(({ kanji, title, body }) => (
                <div key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "'Noto Serif JP',serif", fontSize: "1.05rem", color: "var(--gold-dark)", flexShrink: 0, width: 26, textAlign: "center", lineHeight: 1.4 }}>{kanji}</span>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.84rem", color: "var(--text-2)", marginBottom: "0.12rem" }}>{title}</p>
                    <p style={{ fontSize: "0.77rem", color: "var(--text-3)", lineHeight: 1.68 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .services-grid { grid-template-columns:1fr !important; }
          .skills-grid   { grid-template-columns:1fr !important; gap:3rem !important; }
        }
      `}</style>
    </section>
  );
}
