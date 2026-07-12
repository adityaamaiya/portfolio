# Design

Visual system for Aditya Amaiya's portfolio. Register: brand. Platform: web.
Mood: a dark projection room at 2am — cold projector beam, phosphor console glow. Cinematic
(movie) meets tactical HUD (game), on a minimalist engineered base. Dark is the default
theme; light is a real, first-class alternate.

## Color

OKLCH throughout. Strategy: **Committed dark** — a near-black surface lets a cold electric
violet primary carry the brand voice, with a warm film-leader amber as the single cinematic
accent. The violet is the HUD/game glow; the amber is the movie warmth. Two brand colors, one
job each. No third decorative hue.

Anchor (impeccable seed-094): `oklch(0.533 0.125 294.3)` violet — primary hue stays within ±10°.

### Dark theme (default) — `:root`, `[data-theme="dark"]`

| Token | OKLCH | Role |
|---|---|---|
| `--bg` | `oklch(0.09 0 0)` | Page background, pure black-neutral (chroma 0), cinematic |
| `--surface` | `oklch(0.13 0.008 294)` | Raised panels, cards; barely-there violet tint |
| `--surface-2` | `oklch(0.17 0.012 294)` | Hover / nested raise |
| `--line` | `oklch(0.26 0.012 294)` | Borders, dividers, HUD ticks |
| `--ink` | `oklch(0.97 0.004 294)` | Primary text (near-white) |
| `--muted` | `oklch(0.74 0.016 294)` | Secondary text — verified ≥4.5:1 on `--bg` |
| `--primary` | `oklch(0.64 0.19 294)` | Brand violet — links, active HUD, focus glow |
| `--primary-ink` | `oklch(0.10 0 0)` | Text on `--primary` fills |
| `--accent` | `oklch(0.80 0.14 70)` | Film-leader amber — CTA, key highlights (used sparingly) |
| `--accent-ink` | `oklch(0.14 0 0)` | Text on `--accent` fills |

### Light theme — `[data-theme="light"]`

| Token | OKLCH | Role |
|---|---|---|
| `--bg` | `oklch(1.000 0 0)` | Pure white |
| `--surface` | `oklch(0.975 0.004 294)` | Panels |
| `--surface-2` | `oklch(0.955 0.006 294)` | Hover |
| `--line` | `oklch(0.90 0.008 294)` | Borders |
| `--ink` | `oklch(0.20 0.012 294)` | Primary text |
| `--muted` | `oklch(0.44 0.02 294)` | Secondary text — verified ≥4.5:1 on white |
| `--primary` | `oklch(0.52 0.20 294)` | Brand violet, darkened for contrast on white |
| `--primary-ink` | `oklch(1.000 0 0)` | Text on primary |
| `--accent` | `oklch(0.60 0.15 60)` | Amber, deepened for contrast on white |
| `--accent-ink` | `oklch(1.000 0 0)` | Text on accent |

Contrast rule: body ≥4.5:1, large/bold ≥3:1. `--muted` is the tightest pair and is chosen to
clear 4.5:1 in both themes; verify in browser during the audit pass.

## Typography

Three families, three distinct jobs (contrast axis, not lookalikes). None are on impeccable's
reflex-reject list. Mono is a deliberate HUD voice, never blanket "developer costume."

- **Display — Bricolage Grotesque** (`--font-display`): headings, hero. Expressive, high-contrast
  grotesque with cinematic-poster character. Weights 500–800. `letter-spacing` ≥ -0.04em on
  large sizes; `text-wrap: balance` on h1–h3.
- **Body — Hanken Grotesk** (`--font-body`): all prose and UI text. Neutral, highly readable
  humanist grotesque that recedes so display + content lead. Weights 400–600. Line length 65–75ch,
  `text-wrap: pretty` on long prose.
- **Mono — Martian Mono** (`--font-mono`): HUD micro-labels only — nav items, section markers,
  metadata (dates, tech tags), the loading/boot sequence, timeline ticks. Small sizes, tracked.
  Used sparingly; it is seasoning, not the meal.

Loaded via `next/font/google` as variable fonts with `--font-*` CSS variables on `<html>`.

### Scale

Fluid modular scale, ratio ~1.25. `clamp()` for headings. Hero display max **≤ 6rem** (~96px).

| Step | clamp() | Use |
|---|---|---|
| hero | `clamp(2.75rem, 7vw, 6rem)` | Hero name |
| h1 | `clamp(2rem, 4.5vw, 3.5rem)` | Section titles |
| h2 | `clamp(1.5rem, 3vw, 2.25rem)` | Sub-sections |
| h3 | `clamp(1.15rem, 2vw, 1.5rem)` | Card / item titles |
| body | `1rem`–`1.125rem` | Prose |
| small | `0.875rem` | Meta |
| micro | `0.75rem` | HUD labels (mono, tracked +0.08em, uppercase) |

Light-on-dark body gets +0.05–0.1 line-height (default theme is dark).

## Spacing & layout

- Base 4px scale: 4 8 12 16 24 32 48 64 96 128. Fluid section padding with `clamp()`.
- Content max-width ~72rem; prose column ~65–75ch.
- Vary rhythm: generous section separation, tight intra-group spacing. Not a uniform stack.
- Flexbox for 1D, Grid for 2D. Responsive card rows: `repeat(auto-fit, minmax(280px, 1fr))`
  — but avoid identical-card-grid slop; projects get varied, editorial treatment.
- Radii (engineered, not pill): `--r-sm 4px`, `--r-md 8px`, `--r-lg 12px`.
- Z-index scale: `--z-nav 100`, `--z-cursor 200`, `--z-overlay 300`, `--z-loader 400`. No 9999.

## Components

- **Nav (HUD):** fixed, minimal. Mono labels, a live scroll-spy indicator (the game-HUD cue),
  theme toggle. Not a heavy bar — thin, precise.
- **Reveal:** scroll-triggered fadeUp/stagger wrapper. Content is visible by default; the reveal
  enhances, never gates visibility (no blank-section-on-headless bug).
- **Project entry:** editorial, not a uniform card grid. Title, blurb, mono tech tags, GitHub +
  live links. Featured project gets larger treatment.
- **Experience:** single Bolt.Earth block; timeline/metric emphasis on backend + impact.
- **Skill group:** subtle XP/level framing (game cue) — restrained, not literal progress bars.
- **Section marker:** mono ticks used as a deliberate system, NOT an eyebrow on every heading.

## Motion

framer-motion (v12) + CSS. Cinematic and intentional; direction over decoration.

- Easing: ease-out-expo / quart. No bounce, no elastic.
- **First-load sequence:** cinematic film-reel / boot intro, **session-gated** (`sessionStorage`)
  so it shows once per session. Reduced-motion → instant skip to content.
- Scroll reveals: fadeUp + stagger, tuned per section (not one uniform entrance everywhere).
- Parallax: hero and section dividers, subtle.
- Custom cursor: subtle themed cursor; **disabled on touch and under reduced-motion**.
- Premium materials allowed where they earn it: soft glow (primary/accent), blur, mask — smooth only.
- **Reduced motion is not optional:** every animation has a `@media (prefers-reduced-motion: reduce)`
  crossfade/instant alternative. Content fully present without JS.

## Absolute bans (enforced)

No gradient text, no side-stripe borders, no default glassmorphism, no hero-metric SaaS template,
no identical card grids, no uppercase tracked eyebrow above every section, no numbered-section
scaffolding unless it's a real sequence, no text overflow at any breakpoint.
