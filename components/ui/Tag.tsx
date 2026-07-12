/** Small mono tech tag. HUD micro-label, used for tech stacks and metadata. */
export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="hud-label inline-flex items-center rounded-sm border border-line px-2 py-1 text-ink/90">
      {children}
    </span>
  );
}
