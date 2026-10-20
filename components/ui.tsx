import { ArrowUpRight } from "lucide-react";
import type { Client, Link as L } from "@/lib/data";

export function GithubIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function PageHeader({ eyebrow, title, lede, kanji }: { eyebrow: string; title: string; lede?: string; kanji?: string }) {
  return (
    <header className="page-header">
      <div>
        <p className="label">{eyebrow}</p>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
      {kanji && <span className="page-kanji" aria-hidden="true">{kanji}</span>}
    </header>
  );
}

export function StatusFlag({ status }: { status: Client["status"] }) {
  return (
    <span className={`status ${status === "live" ? "status-live" : ""}`}>
      {status === "live" ? "Live" : "Launching soon"}
    </span>
  );
}

export function LinkButtons({ links }: { links: L[] }) {
  return (
    <div className="link-row">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-sm ${l.kind === "code" ? "btn-ghost" : "btn-gold"}`}
        >
          {l.kind === "code" ? <GithubIcon /> : <ArrowUpRight size={14} />}
          {l.label}
        </a>
      ))}
    </div>
  );
}

export function Tags({ tags }: { tags: string[] }) {
  return <p className="stack-line">{tags.join("  ·  ")}</p>;
}
