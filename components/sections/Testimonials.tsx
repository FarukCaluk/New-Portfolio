import Image from "next/image";
import { RECOMMENDATION as R, TESTIMONIALS } from "@/lib/data";

export function Recommendation() {
  return (
    <figure className="card recommendation rise">
      <span className="badge badge-gold" style={{ marginBottom: "1.25rem" }}>Employer recommendation</span>
      <blockquote className="rec-quote">&ldquo;{R.quote}&rdquo;</blockquote>
      <figcaption className="rec-caption">
        <span style={{ display: "flex" }}>
          {R.initials.map((ini, n) => (
            <span key={ini} className="initials" style={{ marginLeft: n ? -10 : 0 }}>{ini}</span>
          ))}
        </span>
        <span>
          <span className="client-name" style={{ fontSize: "0.92rem" }}>{R.names}</span>
          <span className="client-meta">{R.role}</span>
        </span>
        <a href="https://esimfly.app" target="_blank" rel="noopener noreferrer" className="badge" style={{ marginLeft: "auto", textDecoration: "none" }}>
          esimfly.app ↗
        </a>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <div>
      <Recommendation />
      <ul className="quotes">
        {TESTIMONIALS.map((t) => (
          <li key={t.name} className="rise">
            <div className="quote-who">
              <Image src={t.img} alt={t.name} width={40} height={40} className="quote-img" />
              <span>
                <span className="client-name" style={{ fontSize: "0.88rem" }}>{t.name}</span>
                <span className="client-meta">{t.role}</span>
              </span>
            </div>
            <p className="body-text" style={{ fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
