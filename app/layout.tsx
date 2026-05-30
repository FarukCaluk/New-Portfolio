import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Faruk Čaluk — Software Engineer",
  description:
    "Full-stack developer and hybrid athlete. Building clean software with the same discipline I bring to the mat.",
  keywords: ["Faruk Čaluk", "Software Engineer", "React", "Next.js", "NestJS", "Portfolio", "Mostar"],
  authors: [{ name: "Faruk Čaluk" }],
  openGraph: {
    title: "Faruk Čaluk — Software Engineer",
    description: "Full-stack developer and hybrid athlete from Bosnia & Herzegovina.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
