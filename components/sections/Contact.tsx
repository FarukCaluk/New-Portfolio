"use client";
import { useState, useRef, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send, MapPin, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { KatanaDivider, Pagoda, GreatWave } from "@/components/JapaneseElements";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [vis,    setVis]    = useState(false);
  const formRef    = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => { emailjs.init("_sex6mVp7Cv3ckzer"); }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm("service_ze0p0br", "template_oma0xz8", formRef.current);
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section" style={{ background: "var(--surface)", position: "relative", overflow: "hidden" }}>

      {/* Great Wave — bottom decorative strip */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 0, pointerEvents: "none" }}>
        <GreatWave opacity={0.07} width={1400} />
      </div>

      {/* Pagoda — far right */}
      <div style={{ position: "absolute", right: "-10px", top: "50%", transform: "translateY(-50%)", zIndex: 0, pointerEvents: "none" }}>
        <Pagoda opacity={0.07} height={320} />
      </div>

      <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <p className="label" style={{ marginBottom: "0.75rem" }}>06 — 連絡 (Renraku)</p>
            <h2 className="section-title">Contact</h2>
          </div>
          <div className="kanji-bg" style={{ fontSize: "clamp(4rem,10vw,8rem)", opacity: 0.04 }}>連</div>
        </div>

        <KatanaDivider opacity={0.18} />

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.7fr",
            gap: "3rem",
            alignItems: "start",
            marginTop: "2.5rem",
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateY(20px)",
            transition: "opacity 0.6s, transform 0.6s",
          }}
        >
          {/* ── Left ── */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "1.4rem", color: "var(--text)", lineHeight: 1.25, letterSpacing: "-0.025em", marginBottom: "0.85rem" }}>
              Got a project?<br />
              <span style={{ color: "var(--gold)" }}>Let&apos;s build it.</span>
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-2)", lineHeight: 1.85, marginBottom: "2rem" }}>
              Open to internships, junior dev roles, freelance work,
              or just a conversation about tech and martial arts.
            </p>

            <blockquote className="kaizen-quote" style={{ marginBottom: "2.5rem" }}>
              &ldquo;The best time to improve was yesterday.<br />
              The second-best time is right now.&rdquo;
            </blockquote>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { icon: MapPin, label: "Location", val: "Mostar, Bosnia & Herzegovina", href: null },
                { icon: Mail,   label: "Email",    val: "farukcaluk12@gmail.com", href: "mailto:farukcaluk12@gmail.com" },
              ].map(({ icon: Icon, label, val, href }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 8,
                    background: "var(--gold-soft)", border: "1px solid var(--gold-rim)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon size={14} color="var(--gold)" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="label" style={{ fontSize: "0.56rem", color: "var(--text-3)", marginBottom: "0.1rem" }}>{label}</p>
                    {href
                      ? <a href={href} style={{ fontSize: "0.85rem", color: "var(--text-2)", textDecoration: "none" }}>{val}</a>
                      : <p style={{ fontSize: "0.85rem", color: "var(--text-2)" }}>{val}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Open to work */}
            <div style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              padding: "0.875rem 1.1rem",
              background: "var(--gold-soft)",
              border: "1px solid var(--gold-rim)",
              borderRadius: 10,
            }}>
              <div className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
              <div>
                <p className="label" style={{ marginBottom: "0.1rem" }}>Open to work</p>
                <p style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>Internship & Junior positions · Remote or Hybrid</p>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="card" style={{ padding: "2.25rem", border: "1px solid var(--border-soft)" }}>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem", marginBottom: "0.875rem" }}>
                <div>
                  <label className="label" style={{ display: "block", marginBottom: "0.4rem", color: "var(--text-3)", fontSize: "0.56rem" }}>Name</label>
                  <input type="text" name="name" placeholder="Your name" required className="input" />
                </div>
                <div>
                  <label className="label" style={{ display: "block", marginBottom: "0.4rem", color: "var(--text-3)", fontSize: "0.56rem" }}>Email</label>
                  <input type="email" name="email" placeholder="you@company.com" required className="input" />
                </div>
              </div>

              <div style={{ marginBottom: "0.875rem" }}>
                <label className="label" style={{ display: "block", marginBottom: "0.4rem", color: "var(--text-3)", fontSize: "0.56rem" }}>Subject</label>
                <input type="text" name="subject" placeholder="Project · Internship · Collaboration" required className="input" />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label className="label" style={{ display: "block", marginBottom: "0.4rem", color: "var(--text-3)", fontSize: "0.56rem" }}>Message</label>
                <textarea name="message" rows={5} placeholder="Tell me about what you're building..." required className="input" />
              </div>

              {/* Feedback */}
              {status === "success" && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "1rem" }}>
                  <CheckCircle size={15} color="var(--success)" />
                  <span style={{ fontSize: "0.85rem", color: "var(--success)" }}>Message sent. I&apos;ll reply soon.</span>
                </div>
              )}
              {status === "error" && (
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(248,113,113,0.06)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 8, padding: "0.75rem 1rem", marginBottom: "1rem" }}>
                  <AlertCircle size={15} color="var(--error)" />
                  <span style={{ fontSize: "0.85rem", color: "var(--error)" }}>Something went wrong. Email me directly.</span>
                </div>
              )}

              <button type="submit" disabled={status === "sending"} className="btn btn-gold" style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? 0.7 : 1 }}>
                {status === "sending" ? (
                  <><span style={{ width: 13, height: 13, border: "2px solid rgba(0,0,0,0.3)", borderTopColor: "#000", borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block" }} /> Sending...</>
                ) : (
                  <><Send size={14} /> Send message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media(max-width:768px){
          .contact-grid { grid-template-columns:1fr !important; }
          .form-row     { grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}
