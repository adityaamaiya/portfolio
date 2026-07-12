import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { intro, profile } from "@/lib/data";

const specs = [
  { k: "focus", v: "Full-stack · backend-strong" },
  { k: "stack", v: "TypeScript · Node · React · Next" },
  { k: "based", v: profile.location },
  { k: "status", v: "Open to full-time roles" },
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeading title="About" coord="sys.about" />
      <div className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
        <Reveal>
          <p className="max-w-[60ch] text-[clamp(1.15rem,2vw,1.4rem)] leading-relaxed text-ink">
            {intro}
          </p>
          <p className="mt-6 max-w-[60ch] text-muted">
            I care about the parts users never see — reliable APIs, event-driven workflows,
            clean data models — as much as the parts they do. I like owning a problem from the
            schema to the pixel.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* HUD spec sheet — data-as-imagery, not a decorative box. */}
          <dl className="rounded-lg border border-line bg-surface p-5">
            {specs.map(({ k, v }) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-0"
              >
                <dt className="hud-label">{k}</dt>
                <dd className="text-right text-sm text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
