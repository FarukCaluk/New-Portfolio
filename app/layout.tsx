import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif_JP } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const sans = Geist({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin", "latin-ext"], variable: "--font-mono", display: "swap" });
const jp = Noto_Serif_JP({ weight: ["400", "700"], variable: "--font-jp", display: "swap", preload: false });

export const metadata: Metadata = {
  title: {
    default: "Faruk Čaluk — Full-Stack Engineer",
    template: "%s · Faruk Čaluk",
  },
  description:
    "Full-stack engineer (React, Next.js, NestJS, Laravel) building sites for four clients, with two completed internships. Final-year Software Engineering student at FIT Mostar, open to work.",
  keywords: ["Faruk Čaluk", "Full-Stack Engineer", "React", "Next.js", "NestJS", "Laravel", "Angular", "Portfolio", "Bosnia"],
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
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
