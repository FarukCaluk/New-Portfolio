"use client";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { KatanaDivider, MountFuji } from "@/components/JapaneseElements";

const PROJECTS = [
  {
    num: "01",
    title: "eSIM Management Platform",
    sub: "Frontend",
    year: "2025",
    desc: "Full-featured React dashboard for managing eSIM cards, users, and subscription plans. Built during my internship at eSIMFly — real-time tables, role-based auth, polished admin UX.",
    tags: ["React", "TypeScript", "Tailwind", "REST API"],
    github: "https://github.com/FarukCaluk/ESim-Management-Frontend",
    live: null,
    featured: true,
  },
  {
    num: "02",
    title: "eSIM Management Platform",
    sub: "Backend",
    year: "2025",
    desc: "Production-grade NestJS REST API powering the eSIM platform. JWT auth, RBAC, MongoDB integration, localization support, clean modular architecture built to scale.",
    tags: ["NestJS", "MongoDB", "JWT", "TypeScript"],
    github: "https://github.com/FarukCaluk/ESim-Management-Backend",
    live: null,
    featured: true,
  },
  {
    num: "03",
    title: "Kolektiv Bosna Rudar",
    sub: "Official Website",
    year: "2025",
    desc: "Web application for the Bosna Rudar Taekwondo collective. News, team profiles, fixtures and results. Built with Next.js and TypeScript — live in production.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/FarukCaluk/kolektiv-bosna-rudar-website",
    live: "https://kolektiv-bosna-rudar.vercel.app",
    featured: false,
  },
  {
    num: "04",
    title: "Kakanj Eko Monitor",
    sub: "Environmental App",
    year: "2025",
    desc: "Public-facing environmental monitoring web application for the city of Kakanj. Real-time data display, deployed and live.",
    tags: ["TypeScript", "Next.js"],
    github: null,
    live: "https://kakanj-eko-monitor.vercel.app",
    featured: false,
  },
  {
    num: "05",
    title: "Kaizen Way",
    sub: "Personal Project",
    year: "2026",
    desc: "A productivity and self-improvement application built on the Kaizen philosophy — tracking continuous, incremental progress. Personal concept turned into a shipping product.",
    tags: ["JavaScript", "Productivity"],
    github: "https://github.com/FarukCaluk/kaizen-way",
    live: "https://kaizen-way.vercel.app",
    featured: false,
  },
];

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const [vis, setVis] = useState(false);
  const [hov, setHov] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="card-glass card-hover"
      style={{
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${i * 0.09}s, transform 0.5s ease ${i * 0.09}s, border-color 0.25s, box-shadow 0.25s, background 0.25s`,
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        minHeight: 260,
      }}
    >
      {/* Top shimmer on hover */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: hov ? "linear-gradient(90deg, transparent, var(--gold), transparent)" : "transparent",
        transition: "background 0.3s",
      }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.58rem", color: "var(--text-3)" }}>{p.num}</span>
          <span className="badge" style={{ fontSize: "0.54rem", color: "var(--text-3)", background: "transparent", border: "none" }}>
            {p.year}
          </span>
          {p.featured && <span className="badge badge-gold" style={{ fontSize: "0.54rem" }}>Featured</span>}
        </div>
        <div style={{ display: "flex", gap: "0.35rem" }}>
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-icon" style={{ width: 28, height: 28 }}>
              <ExternalLink size={11} />
            </a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-icon" style={{ width: 28, height: 28 }}>
              <FaGithub size={11} />
            </a>
          )}
        </div>
      </div>

      <p className="label" style={{ fontSize: "0.56rem", marginBottom: "0.28rem", opacity: 0.8 }}>{p.sub}</p>
      <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: "0.7rem", letterSpacing: "-0.015em", lineHeight: 1.2 }}>
        {p.title}
      </h3>
      <p style={{ fontSize: "0.84rem", color: "var(--text-2)", lineHeight: 1.78, flex: 1, marginBottom: "1.25rem" }}>
        {p.desc}
      </p>

      {/* Live link */}
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.6rem", color: "var(--gold)", textDecoration: "none",
            display: "flex", alignItems: "center", gap: "0.3rem",
            marginBottom: "0.75rem", opacity: 0.8,
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = "0.8")}
        >
          <ExternalLink size={10} />
          {p.live.replace("https://", "")}
        </a>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
        {p.tags.map(t => <span key={t} className="badge" style={{ fontSize: "0.56rem" }}>{t}</span>)}
      </div>

      {/* Hover arrow */}
      <div style={{
        position: "absolute", bottom: "1.4rem", right: "1.4rem",
        opacity: hov ? 1 : 0,
        transform: hov ? "translate(0,0)" : "translate(5px,-5px)",
        transition: "opacity 0.2s, transform 0.2s",
      }}>
        <ArrowUpRight size={15} color="var(--gold)" />
      </div>

      {/* Corner glow */}
      <div style={{
        position: "absolute", bottom: 0, right: 0,
        width: 110, height: 110,
        background: `radial-gradient(circle at bottom right, rgba(201,169,110,${hov ? 0.07 : 0.025}), transparent 70%)`,
        pointerEvents: "none", transition: "background 0.3s",
      }} />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", zIndex: 0, pointerEvents: "none" }}>
        <MountFuji opacity={0.04} width={500} />
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <p className="label" style={{ marginBottom: "0.75rem" }}>04 — 作品 (Sakuhin)</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <a href="https://github.com/FarukCaluk" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
            <FaGithub size={13} /> All 17 repos
          </a>
        </div>

        <KatanaDivider opacity={0.18} />

        <p style={{ fontSize: "0.94rem", color: "var(--text-2)", maxWidth: 480, lineHeight: 1.85, margin: "1.75rem 0 2.75rem" }}>
          From hackathons to internship production code — a selection of things I&apos;ve built.
          Some are big, some are small. All of them taught me something.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(285px,1fr))", gap: "0.875rem" }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.num} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
