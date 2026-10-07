"use client";
import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { KatanaDivider, MountFuji } from "@/components/JapaneseElements";

type Badge = { text: string; gold?: boolean; pulse?: boolean };
type Link = { label: string; href: string; kind: "live" | "code" };
type Project = {
  num: string;
  span: "span-3" | "span-2";
  featured?: boolean;
  title: string;
  sub: string;
  year: string;
  badges?: Badge[];
  desc: string;
  bullets?: string[];
  tags: string[];
  links: Link[];
};

const GH = "https://github.com/FarukCaluk";

const PROJECTS: Project[] = [
  {
    num: "01",
    span: "span-3",
    featured: true,
    title: "Mega-Em Website Redesign",
    sub: "Client Project · Visoko, B&H",
    year: "2026",
    badges: [{ text: "First client", gold: true }, { text: "In progress", pulse: true }],
    desc: "My first client. A full redesign of the official website of Mega-Em d.o.o., a Bosnia & Herzegovina distributor of paints, coatings and construction chemicals since 1996.",
    bullets: [
      "Interactive 3D paint configurator: rotate a car and switch paint colours in real time (React Three Fiber)",
      "Multi-page architecture: product catalogues, team by department, and a dedicated page with a map for every retail location",
      "Built with an AI-assisted workflow: project-level Claude Code configuration and review loops",
    ],
    tags: ["React 19", "TypeScript", "Vite", "Tailwind v4", "Three.js", "Framer Motion"],
    links: [
      { label: "Live site", href: "https://mega-em-redesign.vercel.app", kind: "live" },
      { label: "Code", href: `${GH}/mega-em-redesign`, kind: "code" },
    ],
  },
  {
    num: "02",
    span: "span-3",
    featured: true,
    title: "eSIM Management Platform",
    sub: "Full-Stack · Internship at eSIMFly",
    year: "2025",
    badges: [{ text: "Internship", gold: true }],
    desc: "An admin platform for managing eSIMs, users and subscription plans, built during my eSIMFly internship: a NestJS API on the back, a React dashboard on the front.",
    bullets: [
      "Backend: NestJS + MongoDB with JWT auth, role-based access control, DTO validation, i18n and Swagger/OpenAPI docs",
      "Frontend: React + TypeScript admin dashboard with a reusable useApi hook for data fetching and error handling",
    ],
    tags: ["React", "TypeScript", "NestJS", "MongoDB", "JWT", "Swagger"],
    links: [
      { label: "Frontend code", href: `${GH}/ESim-Management-Frontend`, kind: "code" },
      { label: "Backend code", href: `${GH}/ESim-Management-Backend`, kind: "code" },
    ],
  },
  {
    num: "03",
    span: "span-2",
    title: "Kolektiv Bosna Rudar",
    sub: "Club Website",
    year: "2025",
    desc: "Responsive website for the Bosna Rudar Taekwondo club: news, training info, achievements and contact details, managed through a headless CMS. Serves 500+ monthly users.",
    tags: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind"],
    links: [
      { label: "Live site", href: "https://kolektiv-bosna-rudar.vercel.app", kind: "live" },
      { label: "Code", href: `${GH}/kolektiv-bosna-rudar-website`, kind: "code" },
    ],
  },
  {
    num: "04",
    span: "span-2",
    title: "Kakanj Eko Monitor",
    sub: "IoT · Web",
    year: "2025",
    desc: "End-to-end IoT pipeline: an ESP32 with temperature, humidity and gas sensors streams readings to Firebase, visualised live in a Next.js dashboard with sparkline trends and safe/warn/danger alerts.",
    tags: ["Next.js", "Firebase", "ESP32", "C++"],
    links: [
      { label: "Live site", href: "https://kakanj-eko-monitor.vercel.app", kind: "live" },
      { label: "Code", href: `${GH}/kakanj-eko-monitor`, kind: "code" },
    ],
  },
  {
    num: "05",
    span: "span-2",
    title: "Kaizen Way",
    sub: "Interactive Story",
    year: "2026",
    desc: "An interactive storytelling app on the Japanese philosophy of continuous improvement: four phases from seed to canopy, hold-to-water interactions and falling sakura petals in an ink-wash style.",
    tags: ["React 19", "Vite", "Tailwind v4", "Framer Motion"],
    links: [
      { label: "Live site", href: "https://kaizen-way.vercel.app", kind: "live" },
      { label: "Code", href: `${GH}/kaizen-way`, kind: "code" },
    ],
  },
  {
    num: "06",
    span: "span-2",
    title: "NextFrame Digital",
    sub: "Studio Website",
    year: "2026",
    desc: "Multi-page website for a photo, video, drone and design production studio, with a booking form that sends email through the Resend API and falls back to mailto when no key is set.",
    tags: ["Next.js 16", "TypeScript", "Tailwind v4", "Resend"],
    links: [
      { label: "Live site", href: "https://next-frame-digital.vercel.app", kind: "live" },
      { label: "Code", href: `${GH}/NextFrame-Digital`, kind: "code" },
    ],
  },
  {
    num: "07",
    span: "span-2",
    title: "e-Fitness",
    sub: "Full-Stack · Gym Platform",
    year: "2026",
    desc: "Gym management platform with admin, trainer and client roles: memberships, training sessions, workout plans, a shop, payments, messaging and progress tracking. Clean Architecture with CQRS and JWT with rotating refresh tokens.",
    tags: ["ASP.NET Core 8", "Angular 18", "MySQL", "CQRS"],
    links: [{ label: "Code", href: `${GH}/e-Fitness`, kind: "code" }],
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <div className={`reveal ${p.span}`} style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}>
      <article
        className="card-glass card-hover"
        style={{
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          borderTop: p.featured ? "1px solid var(--gold-dark)" : undefined,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.58rem", color: "var(--text-3)" }}>{p.num}</span>
          <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: "0.58rem", color: "var(--text-3)" }}>{p.year}</span>
          {p.badges?.map((b) => (
            <span key={b.text} className={`badge${b.gold ? " badge-gold" : ""}`} style={{ fontSize: "0.54rem" }}>
              {b.pulse && (
                <span className="pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
              )}
              {b.text}
            </span>
          ))}
        </div>

        <p className="label" style={{ fontSize: "0.56rem", marginBottom: "0.3rem", opacity: 0.8 }}>{p.sub}</p>
        <h3 style={{ fontWeight: 700, fontSize: p.featured ? "1.2rem" : "1.02rem", color: "var(--text)", marginBottom: "0.75rem", letterSpacing: "-0.015em", lineHeight: 1.2 }}>
          {p.title}
        </h3>
        <p style={{ fontSize: "0.86rem", color: "var(--text-2)", lineHeight: 1.75, marginBottom: p.bullets ? "1rem" : "1.25rem" }}>{p.desc}</p>

        {p.bullets && (
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
            {p.bullets.map((b) => (
              <li key={b} style={{ display: "flex", gap: "0.6rem", fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.65 }}>
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>›</span>
                {b}
              </li>
            ))}
          </ul>
        )}

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
            {p.tags.map((t) => <span key={t} className="badge" style={{ fontSize: "0.56rem" }}>{t}</span>)}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-sm ${l.kind === "live" ? "btn-gold" : "btn-ghost"}`}
              >
                {l.kind === "live" ? <ExternalLink size={13} /> : <FaGithub size={13} />}
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = gridRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className="section" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", zIndex: 0, pointerEvents: "none" }}>
        <MountFuji opacity={0.04} width={500} />
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <p className="label" style={{ marginBottom: "0.75rem" }}>01 — 作品 (Sakuhin)</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <a href={GH} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
            <FaGithub size={13} /> More on GitHub
          </a>
        </div>

        <KatanaDivider opacity={0.18} />

        <p style={{ fontSize: "0.94rem", color: "var(--text-2)", maxWidth: 520, lineHeight: 1.85, margin: "1.75rem 0 2.75rem" }}>
          From my first client project to internship production code and personal experiments.
          Everything with a Live button is deployed and clickable.
        </p>

        <div ref={gridRef} className="proj-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.num} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
