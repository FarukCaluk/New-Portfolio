import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CLIENTS, PROJECTS, type Project } from "@/lib/data";
import { BrowserFrame, LinkButtons, StatusFlag, Tags } from "@/components/ui";

const pad = (n: number) => String(n + 1).padStart(2, "0");
const siteOf = (links: Project["links"]) => links.find((l) => l.kind !== "code")?.href;

/** Compact list for the home page. */
export function ClientRows() {
  return (
    <ol className="client-rows">
      {CLIENTS.map((c, i) => (
        <li key={c.name} className="rise">
          <a href={c.links[0].href} target="_blank" rel="noopener noreferrer" className="client-row">
            <span className="client-num">{pad(i)}</span>
            <span className="client-thumb">
              <Image src={c.shot} alt="" fill sizes="200px" className="browser-img" />
            </span>
            <span>
              <span className="client-name">{c.name}</span>
              <span className="client-meta">{[c.sector, c.location].filter(Boolean).join(" · ")}</span>
              <span className="client-desc">{c.tagline}</span>
            </span>
            <StatusFlag status={c.status} />
            <ArrowUpRight size={18} className="client-arrow" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Detailed client entries for /projects, screenshot and text alternating sides. */
export function ClientShowcase() {
  return (
    <div>
      {CLIENTS.map((c, i) => (
        <article key={c.name} className={`showcase rise ${i % 2 ? "flip" : ""}`}>
          <div>
            <div className="showcase-top">
              <span className="client-num">{pad(i)}</span>
              <StatusFlag status={c.status} />
            </div>
            <h3 className="showcase-title">{c.name}</h3>
            <p className="client-meta">{[c.sector, c.location, c.year].filter(Boolean).join(" · ")}</p>
            <p className="body-text" style={{ margin: "1rem 0 1.25rem" }}>{c.summary}</p>
            <ul className="ticks">
              {c.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <Tags tags={c.stack} />
            <LinkButtons links={c.links} />
          </div>
          <BrowserFrame src={c.shot} alt={`${c.name} homepage`} href={c.links[0].href} sizes="(max-width: 960px) 100vw, 620px" />
        </article>
      ))}
    </div>
  );
}

function WorkCard({ p }: { p: Project }) {
  const site = siteOf(p.links);
  return (
    <article className="rise">
      <div className="card-glass card-hover work-card">
        {p.shot && site && (
          <BrowserFrame src={p.shot} alt={`${p.title} homepage`} href={site} sizes="(max-width: 768px) 100vw, 380px" />
        )}
        <div className="work-card-body">
          <p className="client-meta">{p.sub} · {p.year}</p>
          <h3 className="work-title">{p.title}</h3>
          <p className="body-text">{p.desc}</p>
          {p.bullets && (
            <ul className="ticks" style={{ marginTop: "1rem" }}>
              {p.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          )}
          <div style={{ marginTop: "auto", paddingTop: "1.25rem" }}>
            <Tags tags={p.tags} />
            <LinkButtons links={p.links} />
          </div>
        </div>
      </div>
    </article>
  );
}

/** Live projects with screenshots first, then the code-only ones. */
export function OtherWork() {
  const live = PROJECTS.filter((p) => p.shot);
  const code = PROJECTS.filter((p) => !p.shot);
  return (
    <>
      <div className="work-grid-3">{live.map((p) => <WorkCard key={p.title} p={p} />)}</div>
      <div className="work-grid" style={{ marginTop: "0.875rem" }}>{code.map((p) => <WorkCard key={p.title} p={p} />)}</div>
    </>
  );
}
