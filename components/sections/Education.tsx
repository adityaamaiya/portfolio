import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import { education, certs } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading title="Education" />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <RevealGroup as="ul" className="space-y-8">
          {education.map((e) => (
            <Reveal as="li" key={e.school} className="border-b border-line pb-8 last:border-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-xl font-bold text-ink">{e.school}</h3>
                <span className="hud-label">{e.period}</span>
              </div>
              <p className="mt-1 text-primary">{e.program}</p>
              <p className="text-sm text-muted">{e.location}</p>
              <ul className="mt-3 space-y-1">
                {e.notes.map((n) => (
                  <li key={n} className="text-sm text-muted">
                    {n}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <span className="hud-label text-primary">Certifications</span>
            <span aria-hidden className="h-px flex-1 bg-line" />
          </div>
          <ul className="space-y-4">
            {certs.map((c) => (
              <li key={c.title} className="flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-sm text-ink">{c.title}</p>
                  <p className="text-xs text-muted">{c.issuer}</p>
                </div>
                <span className="hud-label shrink-0">{c.date}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
