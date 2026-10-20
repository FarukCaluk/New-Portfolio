import { ArrowUpRight } from "lucide-react";
import { CLIENTS, PROJECTS } from "@/lib/data";
import { LinkButtons, StatusFlag, Tags } from "@/components/ui";

const pad = (n: number) => String(n + 1).padStart(2, "0");

/** Compact list for the home page. */
export function ClientRows() {
  return (
    <ol className="client-rows">
      {CLIENTS.map((c, i) => (
        <li key={c.name} className="rise">
          <a href={c.links[0].href} target="_blank" rel="noopener noreferrer" className="client-row">
            <span className="client-num">{pad(i)}</span>
            <span>
              <span className="client-name">{c.name}</span>
              <span className="client-meta">{[c.sector, c.location].filter(Boolean).join(" · ")}</span>
            </span>
            <StatusFlag status={c.status} />
            <ArrowUpRight size={18} className="client-arrow" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Detailed client entries for /projects. */
export function ClientShowcase() {
  return (
    <div>
      {CLIENTS.map((c, i) => (
        <article key={c.name} className="showcase rise">
          <div>
            <div className="showcase-top">
              <span className="client-num">{pad(i)}</span>
              <StatusFlag status={c.status} />
            </div>
            <h3 className="showcase-title">{c.name}</h3>
            <p className="client-meta">{[c.sector, c.location, c.year].filter(Boolean).join(" · ")}</p>
            <p className="body-text" style={{ margin: "1.1rem 0 1.5rem" }}>{c.summary}</p>
            <LinkButtons links={c.links} />
          </div>
          <div>
            <ul className="ticks">
              {c.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
            <Tags tags={c.stack} />
          </div>
        </article>
      ))}
    </div>
  );
}

export function OtherWork() {
  return (
    <div className="work-grid">
      {PROJECTS.map((p) => (
        <article key={p.title} className={`rise ${p.wide ? "wide" : ""}`}>
          <div className="card-glass card-hover work-card">
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
        </article>
      ))}
    </div>
  );
}
