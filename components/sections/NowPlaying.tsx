import { Gamepad2, Clapperboard } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { nowPlaying } from "@/lib/data";

/** Easter-egg widget — the movie + game personality, stated once, quietly. */
export default function NowPlaying() {
  return (
    <Section>
      <Reveal>
        <div className="flex flex-col gap-6 rounded-lg border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <span className="hud-label">Currently</span>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div className="flex items-center gap-3">
              <Gamepad2 size={18} className="text-primary" />
              <div>
                <div className="hud-label">playing</div>
                <div className="text-ink">{nowPlaying.game}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clapperboard size={18} className="text-accent" />
              <div>
                <div className="hud-label">watching</div>
                <div className="text-ink">{nowPlaying.movie}</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
