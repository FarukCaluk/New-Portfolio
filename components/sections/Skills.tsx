const STACK = [
  { group: "Languages",       items: ["TypeScript", "JavaScript", "PHP", "SQL", "Python", "C++", "C#"] },
  { group: "Backend & APIs",  items: ["Node.js", "NestJS", "Express", "Laravel", "ASP.NET Core", "REST", "JWT / RBAC", "Swagger / OpenAPI"] },
  { group: "Frontend",        items: ["React", "Next.js", "Angular", "Tailwind CSS", "Three.js", "Framer Motion", "GSAP"] },
  { group: "Data & cloud",    items: ["MongoDB", "MySQL", "Firebase", "Vercel"] },
  { group: "Tools & AI",      items: ["Claude Code", "Anthropic API", "MCP", "Cursor", "GitHub Copilot", "Git", "Postman", "Figma"] },
];

const PRINCIPLES = [
  { kanji: "改", title: "Kaizen",          body: "Every commit and every review is a chance to get 1% better." },
  { kanji: "清", title: "Clear code",      body: "Code is read far more than it is written. Clarity beats cleverness." },
  { kanji: "動", title: "Ship, then iterate", body: "Working software and real feedback beat guessing." },
  { kanji: "鍛", title: "Do the reps",     body: "Consistent practice beats raw talent, on the mat and at the keyboard." },
];

export default function Skills() {
  return (
    <div className="skills">
      <dl className="stack-list">
        {STACK.map(({ group, items }) => (
          <div key={group} className="rise">
            <dt className="label">{group}</dt>
            <dd>{items.join(" · ")}</dd>
          </div>
        ))}
      </dl>

      <div>
        <h3 className="work-title" style={{ marginBottom: "1.25rem" }}>How I work</h3>
        <ul className="principles">
          {PRINCIPLES.map(({ kanji, title, body }) => (
            <li key={title} className="rise">
              <span className="principle-kanji" aria-hidden="true">{kanji}</span>
              <span>
                <span className="client-name" style={{ fontSize: "0.88rem" }}>{title}</span>
                <span className="client-meta" style={{ lineHeight: 1.65 }}>{body}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
