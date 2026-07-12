import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import { experience, metrics } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading title="Experience" coord="sys.exp" />

      <Reveal className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-ink">
          {experience.company}
        </h3>
        <span className="hud-label">{experience.period}</span>
      </Reveal>
      <Reveal className="mt-1 flex flex-wrap items-baseline justify-between gap-x-6">
        <p className="text-primary">{experience.role}</p>
        <span className="text-sm text-muted">{experience.location}</span>
      </Reveal>
      <Reveal className="mt-1">
        <p className="text-sm text-muted">{experience.companyNote}</p>
      </Reveal>

      {/* Impact strip — real numbers, plainly stated (no gradient hero-metric template). */}
      <RevealGroup className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-line py-8 sm:grid-cols-4">
        {metrics.map((m) => (
          <Reveal key={m.label}>
            <div className="text-3xl font-bold text-ink sm:text-4xl">{m.value}</div>
            <div className="mt-1 text-sm text-muted">{m.label}</div>
          </Reveal>
        ))}
      </RevealGroup>

      <RevealGroup as="ul" className="mt-10 space-y-4">
        {experience.highlights.map((h) => (
          <Reveal as="li" key={h} className="flex gap-3 text-ink/90">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span className="max-w-[72ch] leading-relaxed">{h}</span>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
