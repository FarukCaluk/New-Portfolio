import Link from "next/link";
import { NAV } from "@/lib/data";
import Socials from "@/components/Socials";
import { ToriiGate } from "@/components/JapaneseElements";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.75rem" }}>
            <ToriiGate opacity={0.5} width={30} />
            <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text)", letterSpacing: "-0.02em" }}>Faruk Čaluk</span>
          </div>
          <p className="client-meta" style={{ maxWidth: 300, lineHeight: 1.7 }}>
            Full-stack engineer and black belt from Kakanj, Bosnia &amp; Herzegovina.
          </p>
        </div>

        <nav aria-label="Footer" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/" className="footer-link">Home</Link>
          {NAV.map((n) => <Link key={n.href} href={n.href} className="footer-link">{n.label}</Link>)}
        </nav>

        <Socials />
      </div>

      <div className="site-footer-bottom">
        <span>© 2026 Faruk Čaluk</span>
        <span style={{ fontFamily: "var(--font-jp), serif" }}>改善 · a little better every day</span>
      </div>
    </footer>
  );
}
