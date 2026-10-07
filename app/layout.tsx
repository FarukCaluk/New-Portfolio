import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-mono", display: "swap" });
const jp = Noto_Serif_JP({ weight: ["400", "700"], variable: "--font-jp", display: "swap", preload: false });

export const metadata: Metadata = {
  title: "Faruk Čaluk — Full-Stack Engineer",
  description:
    "Full-stack engineer (React, Next.js, NestJS, Laravel). Two internships, a first client project in progress and five live products. Final-year Software Engineering student, open to work.",
  keywords: ["Faruk Čaluk", "Full-Stack Engineer", "React", "Next.js", "NestJS", "Laravel", "Angular", "Portfolio", "Mostar"],
  authors: [{ name: "Faruk Čaluk" }],
  openGraph: {
    title: "Faruk Čaluk — Full-Stack Engineer",
    description: "Full-stack engineer and black belt from Bosnia & Herzegovina. Open to work.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${jp.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
