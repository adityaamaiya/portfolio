import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/components/ui/Reveal";
import { skillGroups } from "@/lib/data";
import { skillIcons, lucideSkillIcons } from "@/lib/icons";

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
              {g.items.map((s) => {
                const ic = s.icon ? skillIcons[s.icon] : undefined;
                const Lucide = s.icon ? lucideSkillIcons[s.icon] : undefined;
                return (
                  <li
                    key={s.name}
                    className="group inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-ink/90 transition-colors hover:border-primary/40"
                  >
                    {ic ? (
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden
                        className="size-3.5 shrink-0 fill-current text-muted transition-colors group-hover:text-primary"
                      >
                        <path d={ic.path} />
                      </svg>
                    ) : Lucide ? (
                      <Lucide
                        aria-hidden
                        className="size-3.5 shrink-0 text-muted transition-colors group-hover:text-primary"
                      />
                    ) : null}
                    {s.name}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
