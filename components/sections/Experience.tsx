import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import { experience, metrics } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading title="Experience" coord="sys.exp" />

      <div className="grid gap-10 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-14">
        {/* Left rail — company, role, impact. Sticks while the detail scrolls. */}
        <Reveal className="md:sticky md:top-24 md:self-start">
          <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-ink">
            {experience.company}
          </h3>
          <p className="mt-1 text-primary">{experience.role}</p>
          <p className="mt-1 text-sm text-muted">
            {experience.period} · {experience.location}
          </p>
          <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-muted">
            {experience.summary}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {metrics.map((m) => (
              <div key={m.label} className="bg-surface p-4">
                <dt className="text-2xl font-bold text-ink">{m.value}</dt>
                <dd className="mt-0.5 text-xs leading-tight text-muted">{m.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Right — contributions grouped by area, so it doesn't read as one long list. */}
        <RevealGroup className="space-y-8">
          {experience.contributions.map((group) => (
            <Reveal key={group.area}>
              <div className="mb-3 flex items-center gap-3">
                <span className="hud-label text-primary">{group.area}</span>
                <span aria-hidden className="h-px flex-1 bg-line" />
              </div>
              <ul className="space-y-2.5">
                {group.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/90">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                    <span className="max-w-[64ch]">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
