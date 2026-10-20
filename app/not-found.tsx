import Link from "next/link";
import { PageHeader } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="404" title="This page doesn't exist" lede="The link may be old, or the page moved when the site was split into separate pages." kanji="迷" />
      <section className="container" style={{ paddingBottom: "8rem", display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
        <Link href="/" className="btn btn-gold">Back home</Link>
        <Link href="/projects" className="btn btn-ghost">See the work</Link>
      </section>
    </>
  );
}
