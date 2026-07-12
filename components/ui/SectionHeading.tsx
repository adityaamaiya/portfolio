import Reveal from "./Reveal";

/**
 * Section title with a HUD hairline that extends to the right.
 * Deliberately NOT an uppercase tracked eyebrow above every section (impeccable ban);
 * the mono coordinate is optional and used sparingly for HUD texture.
 */
export default function SectionHeading({
  title,
  coord,
}: {
  title: string;
  /** Optional HUD coordinate, e.g. "sys.exp" — used on a couple of sections, not all. */
  coord?: string;
}) {
  return (
    <Reveal className="mb-7 flex items-end gap-4 sm:mb-9">
      <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[0.95]">{title}</h2>
      <span aria-hidden className="mb-2 h-px flex-1 bg-line" />
      {coord && (
        <span aria-hidden className="hud-label mb-2 hidden shrink-0 sm:inline">
          {coord}
        </span>
      )}
    </Reveal>
  );
}
