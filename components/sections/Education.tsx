"use client";
import { useEffect, useRef, useState } from "react";
import { KanjiDecor, KatanaDivider, Pagoda } from "@/components/JapaneseElements";
import { Briefcase, ExternalLink } from "lucide-react";

const ITEMS = [
  {
    year: "2021",
    kanji: "始",
    kanjiLabel: "Hajime · Begin",
    type: "education",
    title: "High School Graduate",
    place: "Gymnasium Kakanj",
    body: "Built a strong academic base across sciences and humanities. Graduated with the discipline that would later define both my code and my training on the mat.",
    tags: [],
    link: null,
  },
  {
    year: "2022",
    kanji: "学",
    kanjiLabel: "Manabu · Learn",
    type: "education",
    title: "BSc Software Engineering",
    place: "FIT Mostar — Faculty of Information Technologies",
    body: "Diving into algorithms, system design, databases, and modern web stacks. University isn't just where I learn to code — it's where I learn to think systematically.",
    tags: ["C++", "C#", "SQL", "JavaScript"],
    link: null,
  },
  {
    year: "2024",
    kanji: "鍛",
    kanjiLabel: "Kitaeru · Forge",
    type: "project",
    title: "GoodHackathon",
    place: "Team Hackathon Project",
    body: "Competed in the GoodHackathon — a team event focused on building solutions for social good and community impact. Shipped a working product under time pressure. Collaboration, rapid prototyping, real delivery.",
    tags: ["JavaScript", "Team", "Rapid Prototyping"],
    link: "https://github.com/FarukCaluk/GoodHackathone-",
  },
  {
    year: "2025",
    kanji: "練",
    kanjiLabel: "Renshū · Practice",
    type: "work",
    title: "Full-Stack Development Intern",
    place: "eSIMFly · Oct 2025 – Dec 2025 · 3 mos · Hybrid",
    body: "First professional internship — worked on production features for the eSIM management platform. Gained real-world experience with NestJS, MongoDB, and React in a live product used by real customers. Also shipped the Bosna Rudar web app.",
    tags: ["React", "NestJS", "MongoDB", "TypeScript"],
    link: "https://bosnarudar.netlify.app",
    linkLabel: "bosnarudar.netlify.app ↗",
  },
  {
    year: "2026 →",
    kanji: "道",
    kanjiLabel: "Michi · The Way",
    type: "work",
    title: "Full-Stack Development Intern",
    place: "Bloomteq · Apr 2026 · Sarajevo, Bosnia · Hybrid",
    body: "Currently interning at Bloomteq, working on full-stack development with modern web technologies. Expanding into PHP/Laravel and Angular — proof that the Kaizen mindset means picking up new tools without hesitation.",
    tags: ["PHP", "Laravel", "Angular", "Full-Stack"],
    link: null,
    current: true,
  },
];

const TYPE_COLOR: Record<string, string> = {
  education: "var(--text-3)",
  project:   "var(--gold-dark)",
  work:      "var(--gold)",
};

const TYPE_LABEL: Record<string, string> = {
  education: "Education",
  project:   "Project",
  work:      "Internship",
};

function TimelineItem({ item, index }: { item: typeof ITEMS[0]; index: number }) {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isLast = index === ITEMS.length - 1;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "64px 1px 1fr",
        gap: "0 1.75rem",
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateX(-14px)",
        transition: `opacity 0.5s ease ${index * 0.11}s, transform 0.5s ease ${index * 0.11}s`,
      }}
    >
      {/* Year + kanji */}
      <div style={{ textAlign: "right", paddingTop: "0.25rem", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
        <span style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "0.68rem", fontWeight: 700,
          color: isLast ? "var(--gold)" : "var(--text-3)",
          letterSpacing: "0.04em",
        }}>
          {item.year}
        </span>
        <KanjiDecor char={item.kanji} label={item.kanjiLabel} opacity={isLast ? 1 : 0.55} />
      </div>

      {/* Line + dot */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: 10, height: 10, borderRadius: "50%", flexShrink: 0, marginTop: "0.25rem",
          background: isLast ? "var(--gold)" : (item.type === "work" ? "var(--gold-dark)" : "var(--surface-3)"),
          border: item.type === "work" && !isLast ? "1px solid var(--gold-dark)" : isLast ? "none" : "1px solid var(--border)",
          boxShadow: isLast ? "0 0 14px rgba(201,169,110,0.55)" : "none",
        }} />
        {!isLast && <div style={{ flex: 1, width: "1px", background: "linear-gradient(to bottom, var(--border), transparent)", marginTop: 6 }} />}
      </div>

      {/* Card */}
      <div
        className="card card-hover"
        style={{
          marginBottom: isLast ? 0 : "1.5rem",
          padding: "1.5rem 1.75rem",
          borderColor: isLast ? "rgba(201,169,110,0.18)" : item.type === "work" ? "rgba(201,169,110,0.08)" : "var(--border-soft)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Type badge + current badge */}
        <div style={{ display: "flex", gap: "0.4rem", marginBottom: "0.6rem", alignItems: "center" }}>
          {item.type === "work" && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
              <Briefcase size={10} color={TYPE_COLOR[item.type]} strokeWidth={1.5} />
            </div>
          )}
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.58rem", color: TYPE_COLOR[item.type], letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {TYPE_LABEL[item.type]}
          </span>
          {"current" in item && item.current && (
            <span className="badge badge-gold" style={{ fontSize: "0.54rem", padding: "0.15rem 0.5rem" }}>
              <span className="pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
              Current
            </span>
          )}
        </div>

        <p className="label" style={{ fontSize: "0.58rem", color: "var(--gold)", opacity: 0.75, marginBottom: "0.35rem" }}>
          {item.place}
        </p>
        <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: "0.65rem", letterSpacing: "-0.01em" }}>
          {item.title}
        </h3>
        <p style={{ fontSize: "0.855rem", color: "var(--text-2)", lineHeight: 1.78, marginBottom: item.tags.length || item.link ? "1rem" : 0 }}>
          {item.body}
        </p>

        {/* Tags */}
        {item.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: item.link ? "0.75rem" : 0 }}>
            {item.tags.map(t => <span key={t} className="badge" style={{ fontSize: "0.58rem" }}>{t}</span>)}
          </div>
        )}

        {/* Link */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.35rem",
              fontFamily: "'JetBrains Mono',monospace", fontSize: "0.62rem",
              color: "var(--gold)", textDecoration: "none", letterSpacing: "0.06em",
              opacity: 0.8, transition: "opacity 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
          >
            <ExternalLink size={11} />
            {"linkLabel" in item && item.linkLabel ? item.linkLabel : item.link.replace("https://github.com/", "github/")}
          </a>
        )}

        {/* Gold left accent for work items */}
        {item.type === "work" && (
          <div style={{ position: "absolute", left: 0, top: "20%", bottom: "20%", width: "2px", background: "linear-gradient(to bottom, transparent, var(--gold-dark), transparent)", borderRadius: 1 }} />
        )}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      {/* Pagoda — right side atmospheric */}
      <div style={{ position: "absolute", right: "-20px", bottom: "5%", zIndex: 0, pointerEvents: "none" }}>
        <Pagoda opacity={0.065} height={300} />
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <p className="label" style={{ marginBottom: "0.75rem" }}>01 — 教育 (Kyōiku)</p>
            <h2 className="section-title">Education & Experience</h2>
          </div>
          <div className="kanji-bg" style={{ fontSize: "clamp(4rem,10vw,8rem)", opacity: 0.04 }}>学</div>
        </div>

        <KatanaDivider opacity={0.2} />

        <blockquote className="kaizen-quote" style={{ maxWidth: 480, margin: "1.75rem 0 3rem" }}>
          &ldquo;The dojo and the lecture hall teach the same lesson — show up, work, improve. Every internship is just a new mat to train on.&rdquo;
        </blockquote>

        <div style={{ maxWidth: 720 }}>
          {ITEMS.map((item, i) => (
            <TimelineItem key={`${item.year}-${item.title}`} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
