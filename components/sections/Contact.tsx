import { Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

// ponytail: mailto + social links, zero backend. Add a Next route + Resend only if an
// in-page form is ever requested — YAGNI for a personal portfolio.
export default function Contact() {
  return (
    <Section id="contact" className="py-24 sm:py-36">
      <Reveal>
        <p className="hud-label mb-6">Let&apos;s talk</p>
        <h2 className="max-w-[18ch] text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Building something? I&apos;d like to hear about it.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-ink transition-transform hover:-translate-y-0.5"
        >
          <Linkedin size={18} /> Connect on LinkedIn
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-medium text-ink transition-colors hover:border-primary"
        >
          <Mail size={18} /> {profile.email}
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="grid h-12 w-12 place-items-center rounded-md border border-line text-muted transition-colors hover:border-primary hover:text-ink"
        >
          <Github size={18} />
        </a>
      </Reveal>

      <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
        <span className="hud-label">© {profile.name}</span>
        <span className="hud-label">Built with Next.js · end of transmission</span>
      </footer>
    </Section>
  );
}
