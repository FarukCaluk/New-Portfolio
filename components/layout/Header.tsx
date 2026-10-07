"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Projects",     href: "#projects" },
  { label: "Experience",   href: "#education" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Skills",       href: "#services" },
  { label: "Sports",       href: "#sports" },
  { label: "Contact",      href: "#contact" },
];

const SECTIONS = ["home", "projects", "education", "testimonials", "services", "sports", "contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("");

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 40);
      let cur = "";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) cur = `#${id}`;
      }
      setActive(cur);
    };
    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "background 0.25s, border-color 0.25s",
      background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid #1e1e1e" : "1px solid transparent",
    }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <a href="#home" style={{ textDecoration: "none" }}>
          <span style={{ fontWeight: 700, fontSize: "1rem", color: "#f0f0f0", letterSpacing: "-0.01em" }}>Faruk Čaluk</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className={`nav-link ${active === n.href ? "active" : ""}`}>
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm">Hire me</a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="btn-icon mobile-toggle"
          aria-label="Toggle menu"
          style={{ border: "1px solid #2a2a2a" }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="mobile-drawer" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {NAV.map(n => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "0.75rem 0",
                fontSize: "1rem",
                fontWeight: 500,
                color: active === n.href ? "#f0f0f0" : "#a0a0a0",
                textDecoration: "none",
                borderBottom: "1px solid #1e1e1e",
                transition: "color 0.15s",
              }}
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ marginTop: "1rem", justifyContent: "center" }} onClick={() => setOpen(false)}>
            Hire me
          </a>
        </div>
      )}

      <style>{`
        @media(min-width:769px){ .mobile-toggle{display:none!important} }
        @media(max-width:768px){ .desktop-nav{display:none!important}; .mobile-toggle{display:flex!important} }
      `}</style>
    </header>
  );
}
