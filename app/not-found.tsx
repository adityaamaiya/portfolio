import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center px-6 text-center">
      <div>
        <p className="hud-label mb-4">error · 404</p>
        <h1 className="text-[clamp(2.5rem,10vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.04em]">
          Scene Missing
        </h1>
        <p className="mx-auto mt-5 max-w-[42ch] text-muted">
          This frame didn&apos;t make the final cut — the page you&apos;re looking for
          isn&apos;t here. <span className="text-accent">Game over</span>, but you can respawn.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-ink transition-transform hover:-translate-y-0.5"
        >
          ▸ Back to start
        </Link>
      </div>
    </main>
  );
}
