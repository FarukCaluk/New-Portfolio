import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import { ClientRows } from "@/components/work";
import { Internships } from "@/components/sections/Education";
import { Recommendation } from "@/components/sections/Testimonials";
import { CLIENTS } from "@/lib/data";

const live = CLIENTS.filter((c) => c.status === "live").length;

const FACTS = [
  { k: "Studying",    v: "BSc Software Engineering, FIT Mostar. Final year." },
  { k: "Internships", v: "eSIMFly (2025) and Bloomteq (2026), both completed." },
  { k: "Clients",     v: `${CLIENTS.length} active: ${live} live, ${CLIENTS.length - live} launching soon.` },
  { k: "Looking for", v: "A full-stack role, remote or hybrid." },
];

function SectionHead({ title, href, cta }: { title: string; href: string; cta: string }) {
  return (
    <div className="section-head">
      <h2 className="h2">{title}</h2>
      <Link href={href} className="text-link" style={{ marginTop: 0 }}>{cta} <ArrowRight size={13} /></Link>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container" aria-label="At a glance">
        <dl className="facts">
          {FACTS.map(({ k, v }) => (
            <div key={k}>
              <dt className="label">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container block">
        <SectionHead title="Active clients" href="/projects" cta="All work" />
        <ClientRows />
      </section>

      <section className="container block">
        <SectionHead title="Internships" href="/experience" cta="Full timeline" />
        <Internships />
      </section>

      <section className="container block">
        <Recommendation />
      </section>

      <section className="container block cta-band rise">
        <p className="label">Next step</p>
        <h2 className="h2" style={{ maxWidth: "18ch" }}>Hiring, or need a website built?</h2>
        <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginTop: "1.75rem" }}>
          <Link href="/contact" className="btn btn-gold">Get in touch <ArrowRight size={15} /></Link>
          <a href="mailto:farukcaluk12@gmail.com" className="btn btn-ghost">farukcaluk12@gmail.com</a>
        </div>
      </section>
    </>
  );
}
