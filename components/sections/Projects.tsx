import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Section id="work">
      <SectionHeading title="Selected Work" coord="sys.work" />

      <RevealGroup as="ul" className="border-t border-line">
        {projects.map((p, i) => (
          <Reveal
            as="li"
            key={p.slug}
            className="group grid gap-x-8 gap-y-4 border-b border-line py-8 transition-colors hover:bg-surface/60 sm:grid-cols-[auto_1fr_auto] sm:py-10"
          >
            {/* index — a filmography sequence, numbers earn their place here */}
            <span className="hud-label pt-1 sm:pt-2">{String(i + 1).padStart(2, "0")}</span>

            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3
                  className={`font-bold text-ink transition-colors group-hover:text-primary ${
                    p.featured ? "text-[clamp(1.6rem,3.2vw,2.4rem)]" : "text-[clamp(1.3rem,2.4vw,1.8rem)]"
                  }`}
                >
                  {p.title}
                </h3>
                <span className="hud-label">{p.period}</span>
              </div>

              <p className="mt-3 max-w-[62ch] text-muted">{p.blurb}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="hud-label rounded-sm border border-line px-2 py-1 text-ink/80">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-4 sm:flex-col sm:items-end sm:gap-3">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} source on GitHub`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  <Github size={16} /> Code
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} live demo`}
                  className="inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-ink"
                >
                  Live <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </RevealGroup>

      <Reveal className="mt-8">
        <a
          href="https://github.com/adityaamaiya?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hud-label inline-flex items-center gap-1.5 transition-colors hover:text-ink"
        >
          More on GitHub <ArrowUpRight size={14} />
        </a>
      </Reveal>
    </Section>
  );
}
