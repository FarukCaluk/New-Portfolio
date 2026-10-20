import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ThreeLazy from "@/components/ThreeLazy";
import Socials from "@/components/Socials";
import { RedSun } from "@/components/JapaneseElements";

export default function Hero() {
  return (
    <section className="hero">
      <ThreeLazy />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-kanji" aria-hidden="true">改善</div>
      <div style={{ position: "absolute", bottom: "-3rem", left: "-3rem", zIndex: 1, pointerEvents: "none" }}>
        <RedSun opacity={0.12} size={220} />
      </div>

      <div className="hero-grid">
        <div className="fade-up">
          <span className="badge badge-gold" style={{ marginBottom: "1.75rem" }}>
            <span className="pulse-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
            Open to work
          </span>

          <h1 className="hero-name">Faruk Čaluk</h1>
          <p className="hero-role">Full-stack engineer &nbsp;·&nbsp; 2nd Dan black belt &nbsp;·&nbsp; Final year at FIT Mostar</p>

          <p className="body-text" style={{ maxWidth: 520, marginBottom: "2.25rem", fontSize: "1rem" }}>
            I build web products for real clients: a live booking system for an airport parking lot,
            a 3D paint configurator, a site for a dental practice. Fifteen-plus years on the mat taught me
            the rest: show up, do the reps, get 1% better.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", flexWrap: "wrap" }}>
            <Link href="/projects" className="btn btn-gold">
              See the work <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="btn btn-ghost">Get in touch</Link>
            <span style={{ width: 1, height: 24, background: "var(--border)", margin: "0 0.25rem" }} />
            <Socials />
          </div>
        </div>

        <div className="hero-photo fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="hero-ring">
            <div style={{ borderRadius: "50%", overflow: "hidden", width: "100%", height: "100%", position: "relative", background: "var(--bg)" }}>
              <Image
                src="/slike/IMG_20220413_204137_744.webp"
                alt="Portrait of Faruk Čaluk"
                fill
                priority
                sizes="(max-width:860px) 0px, 320px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
