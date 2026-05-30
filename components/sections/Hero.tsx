"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import dynamic from "next/dynamic";
import { Enso, ToriiGate, CherryBlossom, RedSun } from "@/components/JapaneseElements";

const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas"), { ssr: false });

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "React & Next.js",
  "Hybrid Athlete",
  "Black Belt",
];

const SOCIALS = [
  { icon: FaGithub,     href: "https://github.com/FarukCaluk", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/faruk-čaluk-86a52a269/", label: "LinkedIn" },
  { icon: FaInstagram,  href: "https://www.instagram.com/__faruk18", label: "Instagram" },
  { icon: FaEnvelope,   href: "mailto:farukcaluk12@gmail.com", label: "Email" },
];

export default function Hero() {
  const [role,    setRole]    = useState("");
  const [rIdx,    setRIdx]    = useState(0);
  const [typing,  setTyping]  = useState(true);
  const [charIdx, setCharIdx] = useState(0);
  const [vis,     setVis]     = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => { setTimeout(() => setVis(true), 100); }, []);

  useEffect(() => {
    clearTimeout(timer.current);
    const cur = ROLES[rIdx];
    if (typing) {
      if (charIdx < cur.length) {
        timer.current = setTimeout(() => { setRole(cur.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 78);
      } else {
        timer.current = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (charIdx > 0) {
        timer.current = setTimeout(() => { setRole(cur.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 36);
      } else {
        setTyping(true);
        setRIdx(i => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timer.current);
  }, [charIdx, typing, rIdx]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Three.js rings background */}
      <ThreeCanvas />

      {/* Warm sunset glow — inspired by the banner's atmospheric depth */}
      <div style={{
        position: "absolute", right: "8%", top: "50%",
        transform: "translateY(-50%)",
        width: "clamp(280px, 36vw, 480px)",
        height: "clamp(280px, 36vw, 480px)",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(180,60,20,0.18) 0%, rgba(140,40,10,0.08) 45%, transparent 72%)",
        filter: "blur(40px)",
        zIndex: 1,
        pointerEvents: "none",
      }} />

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "radial-gradient(ellipse 90% 80% at 55% 55%, transparent 30%, rgba(9,8,10,0.88) 100%)",
      }} />

      {/* Kanji watermark */}
      <div style={{
        position: "absolute", right: "2%", top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1, pointerEvents: "none",
        fontFamily: "'Noto Serif JP', serif",
        fontSize: "clamp(8rem, 20vw, 18rem)",
        fontWeight: 700,
        color: "rgba(201,169,110,0.03)",
        lineHeight: 1,
        userSelect: "none",
        writingMode: "vertical-rl",
        letterSpacing: "0.1em",
      }}>改善</div>

      {/* Torii gate — subtle top-right corner */}
      <div style={{ position: "absolute", top: "1rem", right: "1.5rem", zIndex: 2, pointerEvents: "none" }}>
        <ToriiGate opacity={0.12} width={56} />
      </div>

      {/* Red sun — bottom-left, ink style */}
      <div style={{ position: "absolute", bottom: "-3rem", left: "-3rem", zIndex: 1, pointerEvents: "none" }}>
        <RedSun opacity={0.12} size={220} />
      </div>

      {/* Cherry blossom branch — top-left corner */}
      <div style={{ position: "absolute", top: "-10px", left: "-10px", zIndex: 1, pointerEvents: "none", transform: "scaleX(-1) rotate(-5deg)", transformOrigin: "top left" }}>
        <CherryBlossom opacity={0.08} width={260} />
      </div>

      {/* ── Main content ── */}
      <div style={{
        maxWidth: 1140, margin: "0 auto",
        padding: "7rem 1.5rem 5rem",
        width: "100%", position: "relative", zIndex: 3,
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "4rem",
        alignItems: "center",
      }} className="hero-grid">

        {/* ── Left ── */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Label row */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem", flexWrap: "wrap" }}>
            <span className="badge badge-gold">
              <span className="pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
              Available for work
            </span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.6rem", color: "var(--text-3)", letterSpacing: "0.12em" }}>
              BSc · Software Engineering · FIT Mostar
            </span>
          </div>

          {/* Name headline */}
          <h1 style={{
            fontWeight: 900,
            fontSize: "clamp(3rem, 7vw, 6rem)",
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
            color: "var(--text)",
            marginBottom: "1.25rem",
          }}>
            Faruk Čaluk
          </h1>

          {/* Typing role */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.4rem",
            marginBottom: "1.75rem", minHeight: "1.8rem",
          }}>
            <span style={{ color: "var(--gold)", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.9rem", opacity: 0.7 }}>›</span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(0.85rem,1.8vw,1rem)", color: "var(--text-2)", fontWeight: 400 }}>
              {role}
            </span>
            <span className="cursor-blink" style={{ color: "var(--gold)", fontSize: "1rem", lineHeight: 1 }}>_</span>
          </div>

          {/* Bio */}
          <p style={{
            fontSize: "clamp(0.875rem,1.5vw,0.975rem)",
            color: "var(--text-2)",
            lineHeight: 1.85,
            maxWidth: 500,
            marginBottom: "0.75rem",
          }}>
            Building reliable, fast web applications and training Taekwondo,
            Kickboxing & MMA. The discipline from the mat directly shapes
            how I write code.
          </p>

          <p className="kaizen-quote" style={{ maxWidth: 420, marginBottom: "2.25rem", fontSize: "0.82rem" }}>
            &ldquo;改善 · Every line of code is a chance to improve by 1%.&rdquo;
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "2.5rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
            {[
              { n: "3+",  l: "Yrs coding" },
              { n: "10+", l: "Projects" },
              { n: "5+",  l: "Yrs martial arts" },
            ].map(({ n, l }) => (
              <div key={l}>
                <div style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "clamp(1.4rem,3vw,2rem)",
                  fontWeight: 700,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}>{n}</div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-3)", marginTop: "0.3rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>{l}</div>
              </div>
            ))}
          </div>

          {/* CTAs + socials */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", flexWrap: "wrap" }}>
            <a href="#projects" className="btn btn-gold">
              View projects <ArrowRight size={15} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let&apos;s talk
            </a>

            <div style={{ width: 1, height: 24, background: "var(--border)", margin: "0 0.25rem" }} />

            <div style={{ display: "flex", gap: "0.4rem" }}>
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="btn-icon"
                  style={{ width: 34, height: 34, fontSize: "0.85rem" }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: photo with gold ring + floating tags ── */}
        <div
          className="hero-photo"
          style={{
            position: "relative",
            flexShrink: 0,
            opacity: vis ? 1 : 0,
            transition: "opacity 1s ease 0.3s",
          }}
        >
          {/* Subtle glow behind photo */}
          <div style={{
            position: "absolute",
            width: "clamp(200px,26vw,320px)",
            height: "clamp(200px,26vw,320px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 70%)",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            filter: "blur(30px)",
            zIndex: 0,
          }} />

          {/* Gold accent ring */}
          <div style={{
            position: "relative",
            width: "clamp(200px,26vw,320px)",
            height: "clamp(200px,26vw,320px)",
            borderRadius: "50%",
            padding: "3px",
            background: "linear-gradient(135deg, var(--gold-light), var(--gold-dark), var(--gold))",
            zIndex: 1,
          }}>
            {/* Inner dark ring */}
            <div style={{ borderRadius: "50%", overflow: "hidden", width: "100%", height: "100%", background: "var(--bg)" }}>
              <Image
                src="/slike/IMG_20220413_204137_744.webp"
                alt="Faruk Čaluk"
                fill
                priority
                sizes="(max-width:768px) 0px, 320px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* Floating discipline pills */}
          {[
            { label: "🥋 Taekwondo",  s: { top: "4%",  left: "-52%" } },
            { label: "⚡ Next.js",    s: { top: "42%", right: "-52%" } },
            { label: "🤼 MMA",        s: { bottom: "8%", left: "-44%" } },
          ].map(({ label, s }) => (
            <div
              key={label}
              style={{
                position: "absolute", ...s,
                background: "rgba(15,14,18,0.88)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "0.3rem 0.65rem",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.62rem",
                color: "var(--text-2)",
                whiteSpace: "nowrap",
                zIndex: 4,
                boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
              }}
              className="float-anim"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        zIndex: 4, animation: "fade-in 0.8s ease 1.8s both",
      }}>
        <ChevronDown size={16} color="var(--text-3)" style={{ animation: "float 2.5s ease-in-out infinite" }} />
        <div className="scroll-line" />
      </div>

      <style>{`
        @media(max-width:860px){
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; justify-items: start; }
          .hero-photo { display: none !important; }
        }
      `}</style>
    </section>
  );
}
