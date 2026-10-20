import Link from "next/link";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { KanjiDecor } from "@/components/JapaneseElements";
import { TIMELINE, type TimelineItem } from "@/lib/data";
import { Tags } from "@/components/ui";

const TYPE_LABEL: Record<TimelineItem["type"], string> = {
  education: "Education",
  project:   "Hackathon",
  work:      "Internship",
  now:       "Currently",
};

function Item({ item, last }: { item: TimelineItem; last: boolean }) {
  const external = item.link && !item.link.href.startsWith("/");
  return (
    <div className="tl-item rise">
      <div className="tl-year">
        <span style={{ color: last ? "var(--gold)" : "var(--text-3)" }}>{item.year}</span>
        <KanjiDecor char={item.kanji} label={item.kanjiLabel} opacity={last ? 1 : 0.55} />
      </div>

      <div className="tl-line">
        <span className={`tl-dot ${last ? "now" : item.type === "work" ? "work" : ""}`} />
        {!last && <span className="tl-rail" />}
      </div>

      <div className={`card tl-card ${last ? "now" : ""} ${item.type === "work" ? "work" : ""}`}>
        <p className="tl-type">
          {item.type === "work" && <Briefcase size={11} strokeWidth={1.5} />}
          {TYPE_LABEL[item.type]}
        </p>
        <h3 className="work-title" style={{ marginBottom: "0.2rem" }}>{item.title}</h3>
        <p className="client-meta" style={{ marginBottom: "0.85rem" }}>
          {item.place}{item.dates ? ` · ${item.dates}` : ""}
        </p>
        <p className="body-text">{item.body}</p>
        {item.tags.length > 0 && <div style={{ marginTop: "1rem" }}><Tags tags={item.tags} /></div>}
        {item.link && (
          external ? (
            <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="text-link">
              {item.link.label} <ArrowUpRight size={12} />
            </a>
          ) : (
            <Link href={item.link.href} className="text-link">{item.link.label} <ArrowUpRight size={12} /></Link>
          )
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div style={{ maxWidth: 760 }}>
      {TIMELINE.map((item, i) => (
        <Item key={`${item.year}-${item.title}`} item={item} last={i === TIMELINE.length - 1} />
      ))}
    </div>
  );
}

/** Two internships, compact, for the home page. */
export function Internships() {
  return (
    <div className="duo">
      {TIMELINE.filter((t) => t.type === "work").map((t) => (
        <div key={t.place} className="rise">
          <div className="card tl-card work" style={{ height: "100%" }}>
            <p className="tl-type"><Briefcase size={11} strokeWidth={1.5} /> Internship · completed</p>
            <h3 className="work-title" style={{ marginBottom: "0.2rem" }}>{t.place}</h3>
            <p className="client-meta" style={{ marginBottom: "0.85rem" }}>{t.dates}</p>
            <Tags tags={t.tags} />
          </div>
        </div>
      ))}
    </div>
  );
}
