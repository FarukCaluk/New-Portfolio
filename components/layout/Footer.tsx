"use client";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import { ToriiGate, KatanaDivider } from "@/components/JapaneseElements";

const SOCIALS = [
  { icon: FaGithub,     href: "https://github.com/FarukCaluk", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/faruk-čaluk-86a52a269/", label: "LinkedIn" },
  { icon: FaInstagram,  href: "https://www.instagram.com/__faruk18", label: "Instagram" },
  { icon: FaEnvelope,   href: "mailto:farukcaluk12@gmail.com", label: "Email" },
];

const LINKS = [
  { label: "Education",    href: "#education" },
  { label: "Sports",       href: "#sports" },
  { label: "Services",     href: "#services" },
  { label: "Projects",     href: "#projects" },
  { label: "Contact",      href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{
      background: "var(--surface)",
      borderTop: "1px solid var(--border-soft)",
      padding: "4rem 1.5rem 2rem",
      position: "relative",
      zIndex: 2,
      overflow: "hidden",
    }}>
      {/* Gold top line */}
      <div style={{
        position: "absolute", top: 0, left: "15%", width: "70%", height: "1px",
        background: "linear-gradient(90deg, transparent, var(--gold-dark), transparent)",
      }} />

      {/* Kanji watermark background */}
      <div style={{
        position: "absolute", bottom: "-1rem", right: "2rem",
        fontFamily: "'Noto Serif JP',serif",
        fontSize: "9rem", fontWeight: 700,
        color: "rgba(201,169,110,0.03)",
        lineHeight: 1, userSelect: "none", pointerEvents: "none",
      }}>
        改善
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.75rem" }}>
              <ToriiGate opacity={0.5} width={32} />
              <span style={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--text)", letterSpacing: "-0.02em" }}>
                Faruk Čaluk
              </span>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-3)", lineHeight: 1.7, maxWidth: 280 }}>
              Software Engineer · Hybrid Athlete<br />
              Building software with the same discipline<br />brought to the mat.
            </p>
            <p style={{
              fontFamily: "'Noto Serif JP',serif",
              fontSize: "0.9rem", color: "var(--gold-dark)",
              marginTop: "0.75rem",
            }}>
              改善 — Kaizen
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="label" style={{ marginBottom: "1rem", color: "var(--text-3)" }}>Navigate</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {LINKS.map(({ label, href }) => (
                <a key={label} href={href} style={{
                  fontSize: "0.85rem", color: "var(--text-2)",
                  textDecoration: "none", transition: "color 0.18s",
                }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--gold-light)")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--text-2)")}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="label" style={{ marginBottom: "1rem", color: "var(--text-3)" }}>Connect</p>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="btn-icon" style={{ width: 36, height: 36 }}>
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <KatanaDivider opacity={0.15} />

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
            © {new Date().getFullYear()} Faruk Čaluk · All rights reserved
          </p>
          <p style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
            Built with Next.js · 改善 every day
          </p>
        </div>
      </div>
    </footer>
  );
}
