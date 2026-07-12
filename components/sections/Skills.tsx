import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading title="Skills" coord="sys.stack" />

      <RevealGroup className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <Reveal key={g.label}>
            <div className="mb-3 flex items-center gap-3">
              <span className="hud-label text-primary">{g.label}</span>
              <span aria-hidden className="h-px flex-1 bg-line" />
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-ink/90"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
