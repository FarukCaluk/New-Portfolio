"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`site-header ${scrolled || open ? "scrolled" : ""}`}>
      <div className="site-header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>Faruk Čaluk</Link>

        <nav className="desktop-nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={`nav-link ${isActive(n.href) ? "active" : ""}`} aria-current={isActive(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-gold btn-sm">Hire me</Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="btn-icon mobile-toggle" aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-drawer" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`drawer-link ${isActive(n.href) ? "active" : ""}`}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-gold" style={{ marginTop: "1rem" }} onClick={() => setOpen(false)}>
            Hire me
          </Link>
        </nav>
      )}
    </header>
  );
}
