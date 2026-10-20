import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import Skills from "@/components/sections/Skills";
import Sports from "@/components/sections/Sports";

export const metadata: Metadata = {
  title: "About",
  description: "Skills, way of working and martial arts background of Faruk Čaluk.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Engineer by trade, fighter by habit"
        lede="I'm Faruk, a final-year Software Engineering student at FIT Mostar, from Kakanj. I build full-stack web apps for clients and teams. Outside of code I hold a 2nd Dan black belt in Taekwondo and coach at the Bosna Rudar club."
        kanji="技"
      />

      <section className="container block" style={{ paddingTop: 0 }}>
        <h2 className="h2" style={{ marginBottom: "2rem" }}>Stack</h2>
        <Skills />
      </section>

      <section className="container block">
        <h2 className="h2" style={{ marginBottom: "0.75rem" }}>On the mat</h2>
        <p className="body-text" style={{ maxWidth: "60ch", marginBottom: "2rem" }}>
          The mat teaches what the classroom can&apos;t: how to handle failure, reset and go again.
          That same loop is how I approach every pull request.
        </p>
        <Sports />
      </section>
    </>
  );
}
