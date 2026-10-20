export const GH = "https://github.com/FarukCaluk";
export const EMAIL = "farukcaluk12@gmail.com";

export type Link = { label: string; href: string; kind: "live" | "preview" | "code" };

export type Client = {
  name: string;
  sector: string;
  tagline: string;
  location?: string;
  year: string;
  status: "live" | "soon";
  summary: string;
  highlights: string[];
  stack: string[];
  links: Link[];
};

export const CLIENTS: Client[] = [
  {
    name: "Sky Parking & Fly",
    tagline: "Trilingual site with online reservations, a live price calculator and email confirmations for every booking.",
    sector: "Airport parking",
    location: "Sarajevo",
    year: "2026",
    status: "live",
    summary:
      "Website for a private, fenced and video-monitored parking lot 800 m from Sarajevo airport, with a free transfer to the terminal.",
    highlights: [
      "Three languages (Bosnian, English, German) with localised URLs, a localised 404 page and FAQ structured data",
      "Online reservations: a Vercel function recalculates the stay and price, issues a reservation code and emails both the guest and the owner",
      "Real Google reviews, a price calculator shared with the booking form, and keyboard-accessible date and time pickers",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Framer Motion", "Vercel Functions", "Nodemailer"],
    links: [
      { label: "parkingandfly.ba", href: "https://parkingandfly.ba", kind: "live" },
      { label: "Code", href: `${GH}/Sky-Parking-and-Fly`, kind: "code" },
    ],
  },
  {
    name: "Mega-Em",
    tagline: "Company site redesign with a 3D paint configurator, product catalogues and a page for every store.",
    sector: "Paints & coatings distributor",
    location: "Visoko",
    year: "2026",
    status: "soon",
    summary:
      "Full redesign of the official website of Mega-Em d.o.o., a distributor of paints, coatings and construction chemicals in Bosnia & Herzegovina since 1996. My first client.",
    highlights: [
      "Interactive 3D paint configurator: rotate a car and switch paint colours in real time (React Three Fiber)",
      "Product catalogues, team by department, and a dedicated page with a map for every retail location",
      "Built with an AI-assisted workflow: project-level Claude Code configuration and review loops",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Tailwind v4", "Three.js", "Framer Motion"],
    links: [
      { label: "Preview", href: "https://mega-em-redesign.vercel.app", kind: "preview" },
      { label: "Code", href: `${GH}/mega-em-redesign`, kind: "code" },
    ],
  },
  {
    name: "Dr. Karić Dental Practice",
    tagline: "Practice site with a 3D tooth, live opening hours, patient reviews and appointment requests.",
    sector: "Dental practice",
    location: "Kakanj",
    year: "2026",
    status: "soon",
    summary:
      "Website for a dental practice in Kakanj: services, patient reviews and online appointment requests.",
    highlights: [
      "A 3D tooth model on the home page, built with Three.js",
      "Scroll animations with GSAP and Lenis",
      "Live open / closed status from the practice's working hours, and an appointment request form",
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind", "Three.js", "GSAP", "Lenis"],
    links: [
      { label: "Preview", href: "https://stomatoloska-ordinacija-two.vercel.app", kind: "preview" },
      { label: "Code", href: `${GH}/Stomatoloska-ordinacija`, kind: "code" },
    ],
  },
  {
    name: "NextFrame Digital",
    tagline: "Studio site with a work gallery, services for weddings, video and drone, and an online booking form.",
    sector: "Photo & video production",
    year: "2026",
    status: "soon",
    summary:
      "Website for a photo, video, drone and design production studio, with an online booking form.",
    highlights: [
      "Five pages: home, about, services, gallery and booking",
      "Booking form posts to an API route that emails through Resend, with a mailto fallback when no key is set",
      "Scroll reveals with IntersectionObserver, no UI or animation libraries",
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind v4", "Resend"],
    links: [
      { label: "Preview", href: "https://next-frame-digital.vercel.app", kind: "preview" },
      { label: "Code", href: `${GH}/NextFrame-Digital`, kind: "code" },
    ],
  },
];

export type Project = {
  title: string;
  sub: string;
  year: string;
  wide?: boolean;
  desc: string;
  bullets?: string[];
  tags: string[];
  links: Link[];
};

export const PROJECTS: Project[] = [
  {
    title: "eSIM Management Platform",
    sub: "Internship at eSIMFly",
    year: "2025",
    wide: true,
    desc: "An admin platform for managing eSIMs, users and subscription plans, built during my eSIMFly internship.",
    bullets: [
      "Backend: NestJS + MongoDB with JWT auth, role-based access control, DTO validation, i18n and Swagger/OpenAPI docs",
      "Frontend: React + TypeScript admin dashboard with a reusable useApi hook for data fetching and error handling",
    ],
    tags: ["React", "TypeScript", "NestJS", "MongoDB", "JWT", "Swagger"],
    links: [
      { label: "Frontend code", href: `${GH}/ESim-Management-Frontend`, kind: "code" },
      { label: "Backend code", href: `${GH}/ESim-Management-Backend`, kind: "code" },
    ],
  },
  {
    title: "Kolektiv Bosna Rudar",
    sub: "Club website",
    year: "2025",
    desc: "Website for the Bosna Rudar Taekwondo club: news, training info, achievements and contact details, managed through a headless CMS. Serves 500+ monthly users.",
    tags: ["Next.js", "TypeScript", "Sanity CMS", "Tailwind"],
    links: [
      { label: "Live site", href: "https://kolektiv-bosna-rudar.vercel.app", kind: "live" },
      { label: "Code", href: `${GH}/kolektiv-bosna-rudar-website`, kind: "code" },
    ],
  },
  {
    title: "Kakanj Eko Monitor",
    sub: "IoT · Web",
    year: "2025",
    desc: "An ESP32 with temperature, humidity and gas sensors streams readings to Firebase, shown live in a Next.js dashboard with sparkline trends and safe / warn / danger alerts.",
    tags: ["Next.js", "Firebase", "ESP32", "C++"],
    links: [
      { label: "Live site", href: "https://kakanj-eko-monitor.vercel.app", kind: "live" },
      { label: "Code", href: `${GH}/kakanj-eko-monitor`, kind: "code" },
    ],
  },
  {
    title: "e-Fitness",
    sub: "Gym platform",
    year: "2026",
    desc: "Gym management with admin, trainer and client roles: memberships, sessions, workout plans, a shop, payments, messaging and progress tracking. Clean Architecture with CQRS.",
    tags: ["ASP.NET Core 8", "Angular 18", "MySQL", "CQRS"],
    links: [{ label: "Code", href: `${GH}/e-Fitness`, kind: "code" }],
  },
  {
    title: "Kaizen Way",
    sub: "Interactive story",
    year: "2026",
    desc: "A storytelling app on continuous improvement: four phases from seed to canopy, hold-to-water interactions and falling sakura petals in an ink-wash style.",
    tags: ["React 19", "Vite", "Tailwind v4", "Framer Motion"],
    links: [
      { label: "Live site", href: "https://kaizen-way.vercel.app", kind: "live" },
      { label: "Code", href: `${GH}/kaizen-way`, kind: "code" },
    ],
  },
];

export type TimelineItem = {
  year: string;
  kanji: string;
  kanjiLabel: string;
  type: "education" | "project" | "work" | "now";
  title: string;
  place: string;
  dates?: string;
  body: string;
  tags: string[];
  link?: { href: string; label: string };
};

export const TIMELINE: TimelineItem[] = [
  {
    year: "2021",
    kanji: "始",
    kanjiLabel: "Hajime · Begin",
    type: "education",
    title: "High school graduate",
    place: "Gymnasium, Kakanj",
    body: "Built a strong academic base across sciences and humanities, with the discipline that later shaped both my code and my training.",
    tags: [],
  },
  {
    year: "2022",
    kanji: "学",
    kanjiLabel: "Manabu · Learn",
    type: "education",
    title: "BSc Software Engineering",
    place: "FIT Mostar, Faculty of Information Technologies",
    body: "Algorithms, system design, databases and modern web stacks. University is where I learned to think about software systematically.",
    tags: ["C++", "C#", "SQL", "JavaScript"],
  },
  {
    year: "2024",
    kanji: "鍛",
    kanjiLabel: "Kitaeru · Forge",
    type: "project",
    title: "Telemach Good Hackathon",
    place: "Team hackathon, Sarajevo",
    body: "Designed a municipality solution that turns paper-based processes into a QR-code-driven digital workflow, built Figma prototypes and pitched it to a jury.",
    tags: ["Figma", "Prototyping", "Pitching"],
    link: { href: `${GH}/GoodHackathone-`, label: "github/GoodHackathone-" },
  },
  {
    year: "2025",
    kanji: "練",
    kanjiLabel: "Renshū · Practice",
    type: "work",
    title: "Full-stack development intern",
    place: "eSIMFly",
    dates: "Oct 2025 – Dec 2025 · 3 mos · Hybrid",
    body: "Worked directly under co-founders Tarik Kaledžija and Kenan Berbić. Built a NestJS + MongoDB REST API (JWT, role-based access control, i18n, Swagger docs) and a React/TypeScript admin dashboard for a live eSIM platform.",
    tags: ["React", "NestJS", "MongoDB", "TypeScript"],
    link: { href: "https://esimfly.app", label: "esimfly.app" },
  },
  {
    year: "2026",
    kanji: "道",
    kanjiLabel: "Michi · The Way",
    type: "work",
    title: "Full-stack development intern",
    place: "Bloomteq, Sarajevo",
    dates: "May 2026 – Aug 2026 · 4 mos · Hybrid",
    body: "Built backend services in PHP/Laravel (secure REST APIs, database migrations) and responsive Angular + TypeScript interfaces, in an agile team with Git workflows and code review.",
    tags: ["PHP", "Laravel", "Angular", "TypeScript"],
  },
  {
    year: "Now",
    kanji: "進",
    kanjiLabel: "Susumu · Advance",
    type: "now",
    title: "Final year · open to work",
    place: "FIT Mostar, BSc Software Engineering",
    body: "Finishing my degree while building sites for four clients: Sky Parking & Fly (live), Mega-Em, Dr. Karić Dental Practice and NextFrame Digital. Completed Anthropic's Claude Code, MCP, Anthropic API and Agent Skills courses. Looking for a full-stack role.",
    tags: ["Open to work", "React", "Next.js", "NestJS", "Laravel", "Claude Code"],
    link: { href: "/contact", label: "Get in touch" },
  },
];

export const RECOMMENDATION = {
  quote:
    "Faruk joined eSIMFly as an intern and quickly became a reliable part of our team. He built core parts of our NestJS backend and React admin dashboard, took real ownership of his work and was always eager to learn. We would gladly recommend him to any engineering team.",
  names: "Tarik Kaledžija & Kenan Berbić",
  role: "Co-founders, eSIMFly",
  initials: ["TK", "KB"],
};

export const TESTIMONIALS = [
  {
    name: "Hasan Brkić",
    role: "Colleague",
    img: "/slike/hasan.jpg",
    text: "Great communicator, always proactive. Faruk doesn't just do his part — he makes everyone around him better. You want him in your team.",
  },
  {
    name: "Ajdin Mehmedović",
    role: "Collaborator",
    img: "/slike/ajdin.jpg",
    text: "Excellent team player with a consistent positive attitude. His problem-solving is methodical but creative — a rare combination. Collaboration felt effortless.",
  },
  {
    name: "Amila Kulović",
    role: "Teammate",
    img: "/slike/amila.jpg",
    text: "Reliable, supportive, and driven. Faruk's work ethic is the same whether there's pressure or not. That kind of consistency is priceless.",
  },
];

export const NAV = [
  { label: "Work",       href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About",      href: "/about" },
  { label: "Contact",    href: "/contact" },
];
