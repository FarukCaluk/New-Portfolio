"use client";
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const SOCIALS = [
  { icon: FaGithub,     href: "https://github.com/FarukCaluk", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/faruk-čaluk-86a52a269/", label: "LinkedIn" },
  { icon: FaInstagram,  href: "https://www.instagram.com/__faruk18", label: "Instagram" },
  { icon: FaEnvelope,   href: "mailto:farukcaluk12@gmail.com", label: "Email" },
];

export default function Socials() {
  return (
    <div style={{ display: "flex", gap: "0.4rem" }}>
      {SOCIALS.map(({ icon: Icon, href, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="btn-icon" style={{ width: 36, height: 36 }}>
          <Icon size={14} />
        </a>
      ))}
    </div>
  );
}
