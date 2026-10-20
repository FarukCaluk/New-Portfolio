import type { Metadata } from "next";
import { PageHeader, GithubIcon } from "@/components/ui";
import { ClientShowcase, OtherWork } from "@/components/work";
import { GH } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Client websites, internship projects and personal builds by Faruk Čaluk.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Clients and projects"
        lede="Four client websites, one already live and three launching soon, plus the internship and personal projects that got me there."
        kanji="作"
      />

      <section className="container block" style={{ paddingTop: 0 }}>
        <h2 className="h2" style={{ marginBottom: "0.5rem" }}>Clients</h2>
        <ClientShowcase />
      </section>

      <section className="container block">
        <div className="section-head">
          <h2 className="h2">Internship and personal projects</h2>
          <a href={GH} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
            <GithubIcon /> More on GitHub
          </a>
        </div>
        <OtherWork />
      </section>
    </>
  );
}
