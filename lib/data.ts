/**
 * SINGLE SOURCE OF TRUTH for all portfolio content.
 *
 * To edit the site, edit this file — no component changes needed.
 *  - Add a project:      append an object to `projects`.
 *  - Update experience:  edit the `experience` object's `highlights`.
 *  - Swap real links:    replace the `// TODO` placeholder URLs.
 *
 * Everything is typed, so your editor will catch mistakes.
 */

// ---------- Types ----------

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  /** Kept for reference; NOT rendered publicly by default (privacy). */
  phone?: string;
  socials: {
    github: string;
    linkedin: string;
  };
  /** Path to the résumé PDF in /public. */
  resume: string;
}

export interface Project {
  slug: string;
  title: string;
  blurb: string;
  tech: string[];
  /** Full URL. Leave "" to hide the link. */
  github: string;
  /** Full URL of the live deploy. Leave "" to hide the link. */
  live: string;
  period: string;
  /** Featured projects get larger, lead treatment. */
  featured?: boolean;
}

export interface Experience {
  company: string;
  companyNote: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Education {
  school: string;
  program: string;
  period: string;
  location: string;
  notes: string[];
}

export interface Cert {
  title: string;
  issuer: string;
  date: string;
}

export interface NowPlaying {
  game: string;
  movie: string;
}

// ---------- Content ----------

export const profile: Profile = {
  name: "Aditya Amaiya",
  role: "Full Stack Engineer",
  location: "Bengaluru, India",
  email: "amaiyaaditya@gmail.com",
  phone: "+91 7440985110", // not displayed publicly
  socials: {
    github: "https://github.com/adityaamaiya",
    linkedin: "https://linkedin.com/in/aditya-amaiya",
  },
  resume: "/resume.pdf",
};

/** The one-liner a visitor should remember. Used in the hero. */
export const tagline =
  "I ship production platforms end-to-end — backend systems to pixel.";

export const intro =
  "Full-stack engineer with real backend depth. At Bolt.Earth I own high-impact platforms — order systems, third-party integrations, and event-driven workflows on the backend, and fast, high-SEO frontends on the other side.";

// Company work lives here — a single Bolt.Earth role (intern → MTS-1, same work throughout).
export const experience: Experience = {
  company: "Bolt.Earth",
  companyNote: "End-to-end EV charging platform — hardware, software, services",
  role: "Full Stack Engineer (Intern → Member of Technical Staff I)",
  period: "Feb 2025 — Present",
  location: "Bengaluru, India",
  summary:
    "Own high-impact platforms end-to-end: backend order systems and integrations, plus the marketing site and internal tooling frontends.",
  highlights: [
    "Built an order-management system integrating Shopify Admin APIs, Razorpay & Scogo webhooks, and Delhivery APIs to drive the full order lifecycle, logistics, and status-based workflows.",
    "Implemented event-driven workflows with automated WhatsApp notifications on order status changes (delivery, installation), keeping operations in real-time sync.",
    "Developed backend APIs and business logic on a modular architecture (controllers, validation, data-access layers) supporting order workflows and operational tools.",
    "Improved platform reliability and cut CPU usage 375% → 255% by refactoring legacy code and adding error handling, fallbacks, and stability improvements.",
    "Owned and led the Bolt.Earth marketing website — 15+ campaign landing pages plus core pages, handling all ongoing feature work and releases.",
    "Lifted performance (Desktop 42 → 93, Mobile 48 → 83) and reached a 100 SEO score, contributing to 20X direct website revenue and 100X organic lead growth.",
    "Revamped a charger-management frontend from MUI to Tailwind + Floating UI + TanStack Table, and built a reusable component library (tables, dialogs, panels, forms) for consistent, faster feature work.",
    "Built Strapi-powered content systems so non-technical teams publish landing pages and case studies independently.",
  ],
};

// Personal projects — the showcase. Curated for range + backend depth.
// Add more by appending objects; reorder to change display order (featured show larger).
// `live: ""` hides the live link; `github: ""` hides the repo link.
export const projects: Project[] = [
  {
    slug: "cinematch",
    title: "Cinematch",
    blurb:
      "Chrome extension that gives a movie/show a 4-point verdict (Skip → Perfection) from live TMDB/OMDb data, plus taste-matched recommendations. TypeScript extension backed by a Node/Express/MongoDB API with an affinity-scoring algorithm, Gemini LLM mode, e2e + unit tests, and CI/CD to EC2 (Nginx + PM2).",
    tech: ["TypeScript", "Node.js", "Express", "MongoDB", "Chrome MV3", "CI/CD", "EC2"],
    github: "https://github.com/adityaamaiya/cinematch",
    live: "", // browser extension — load unpacked in developer mode; backend on EC2
    period: "2025",
    featured: true,
  },
  {
    slug: "qkart",
    title: "QKart",
    blurb:
      "Full-stack e-commerce platform — product browsing, JWT auth, and cart. REST APIs and MongoDB schemas for users, products, and orders, with performance-tuned endpoints.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST", "JWT"],
    github: "https://github.com/adityaamaiya/QkartFullstack",
    live: "https://qkart.adityadevhub.in",
    period: "Aug 2024 — Jan 2025",
    featured: true,
  },
  {
    slug: "qtify",
    title: "QTify",
    blurb:
      "Music-browsing UI for exploring songs by genre and album — carousels, tabs, and a component-driven React layout backed by a REST API.",
    tech: ["React", "Swiper", "CSS Modules", "REST"],
    github: "https://github.com/adityaamaiya/QTify",
    live: "https://qtify.adityadevhub.in",
    period: "Sep 2024",
  },
  {
    slug: "botai",
    title: "BotAI",
    blurb:
      "AI chatbot driving dynamic responses via external APIs, with chat-history management (save, delete, feedback) and a responsive, modular UI.",
    tech: ["React", "REST", "State Management"],
    github: "https://github.com/adityaamaiya/bot-ai",
    live: "https://botai.adityadevhub.in",
    period: "Oct 2024",
  },
  {
    slug: "medify",
    title: "Medify",
    blurb:
      "Find medical centers across US states and cities and book appointments — a React app with search, filtering, and a multi-step booking flow.",
    tech: ["React", "REST", "Material UI"],
    github: "https://github.com/adityaamaiya/medify",
    // TODO: swap to https://medify.adityadevhub.in once the Vercel custom domain verifies
    live: "https://medify-wheat-beta.vercel.app",
    period: "2024",
  },
  {
    slug: "resume-builder",
    title: "Resume Builder",
    blurb:
      "Build a resume with live preview, light/dark theme switching, and one-click PDF export — a focused, genuinely useful React tool.",
    tech: ["React", "PDF Export", "Context API"],
    github: "https://github.com/adityaamaiya/resume-builder",
    // TODO: swap to https://resume-builder.adityadevhub.in once the Vercel custom domain verifies
    live: "https://resume-builder-vert-seven.vercel.app",
    period: "Nov 2024",
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["JavaScript (ES6+)", "TypeScript"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Webhooks"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Material UI"] },
  { label: "Databases", items: ["MongoDB"] },
  {
    label: "Integrations",
    items: ["Shopify Admin API", "Razorpay", "Delhivery", "Gallabox", "Scogo"],
  },
  {
    label: "Tools",
    items: ["Git", "Postman", "Vercel", "Chrome DevTools"],
  },
];

export const education: Education[] = [
  {
    school: "Crio.Do",
    program: "Fellowship in Software Development (React + Node.js)",
    period: "Dec 2023 — Apr 2025",
    location: "Remote",
    notes: [
      "Full-stack development with React, Node.js, Express, and MongoDB.",
      "Solved 150+ DSA problems; built and deployed end-to-end projects.",
    ],
  },
  {
    school: "Samrat Ashok Technological Institute",
    program: "B.Tech, Internet of Things (IoT)",
    period: "Oct 2020 — Jun 2024",
    location: "Vidisha, M.P.",
    notes: ["GPA 8.41 / 10.0.", "Ranked 1st in branch during 3rd year."],
  },
];

export const certs: Cert[] = [
  { title: "Backend Programming with Node.js", issuer: "Crio.Do", date: "Dec 2024" },
  { title: "Advanced Frontend Programming with React.js", issuer: "Crio.Do", date: "Sep 2024" },
  { title: "Intermediate Data Structures", issuer: "Crio.Do", date: "Apr 2024" },
];

// Easter-egg widget — static. Update whenever.
export const nowPlaying: NowPlaying = {
  game: "Elden Ring",
  movie: "Blade Runner 2049",
};

// Impact metrics surfaced in the experience section (backend + growth proof).
export const metrics: { value: string; label: string }[] = [
  { value: "20×", label: "direct website revenue" },
  { value: "100×", label: "organic lead growth" },
  { value: "93", label: "desktop performance (from 42)" },
  { value: "100", label: "SEO score" },
];
