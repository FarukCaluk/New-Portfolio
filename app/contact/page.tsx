import type { Metadata } from "next";
import { PageHeader } from "@/components/ui";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Faruk Čaluk about a full-stack role or a website project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk" kanji="連" />
      <Contact />
    </>
  );
}
