import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import Timeline from "@/components/sections/Education";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Experience",
  description: "Education, internships at eSIMFly and Bloomteq, and recommendations.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Education and internships"
        lede="The dojo and the lecture hall teach the same lesson: show up, work, improve. Every internship was a new mat to train on."
        kanji="学"
      />

      <section className="container block" style={{ paddingTop: 0 }}>
        <Timeline />
      </section>

      <section className="container block">
        <h2 className="h2" style={{ marginBottom: "2rem" }}>What people say</h2>
        <Testimonials />
      </section>
    </>
  );
}
