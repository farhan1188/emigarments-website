# Design

Visual system for EMIGARMENTS. Every impeccable command and every build reads this file to stay on-brand. Identity is **preserved**, not invented: the logo already commits to a navy serif wordmark + camel cross motif, so the palette and mark are anchored, and the rest is composed around them. Colors are authored in **OKLCH**.

## Atmosphere

A precision industrial group rendered as a **committed-indigo** world. Picture an indigo dye-house at dusk: deep navy surfaces (the brand's own navy *is* denim indigo — the through-line for a textile maker), lit by a single warm camel/leather accent, with real material texture — denim weave, leather grain, terry pile, woven cloth — doing the emotional and credibility work. Not stark-white minimal, not warm-beige "cream" (the saturated 2026 AI default — explicitly avoided), not magazine-editorial. The mood is **substantial, exact, modern, premium**. Light sections are a cool, near-true off-white tinted faintly toward indigo (never toward warm). Warmth is carried by accent + imagery, never by a beige body background.

**Color strategy: Committed** — indigo carries 30–60% of the surface (drenched hero + alternating navy bands), camel is the single ≤10% accent. Named reference for the mechanic: a premium denim-mill / dye-house identity, deliberately the opposite of the reference sites' white-and-charcoal restraint.

## Color

OKLCH tokens. `--indigo-*` is the brand-carrying navy; `--camel-*` is the sole accent; neutrals are cool (tinted toward indigo, not warm).

```css
:root {
  /* Indigo — brand-carrying navy (denim indigo) */
  --indigo-950: oklch(0.18 0.050 265);  /* deepest, near-black navy */
  --indigo-900: oklch(0.24 0.070 265);  /* hero / footer drench  (~#16223F) */
  --indigo-800: oklch(0.30 0.085 264);  /* primary brand navy, buttons (~#1B2A4A) */
  --indigo-600: oklch(0.42 0.100 263);
  --indigo-400: oklch(0.58 0.095 262);  /* lines/icons on dark */

  /* Camel — the single warm accent (leather tone). Large text / rules / ornament ONLY */
  --camel-700: oklch(0.55 0.080 70);    /* accent text on light when large */
  --camel-500: oklch(0.70 0.085 75);    /* primary accent (~#B08A4F) */
  --camel-300: oklch(0.82 0.070 78);    /* hover / accent on dark */

  /* Neutrals — cool, faintly indigo-tinted (NOT warm/cream) */
  --paper:   oklch(0.975 0.006 250);    /* light page background (cool off-white) */
  --surface: oklch(0.945 0.008 250);    /* alt sections, cards, inputs */
  --line:    oklch(0.880 0.010 255);    /* hairline borders, dividers */
  --ink:     oklch(0.23 0.020 264);     /* body text on light */
  --muted:   oklch(0.49 0.015 262);     /* secondary text on light (passes AA for body) */

  /* On dark (navy) */
  --on-dark:       oklch(0.96 0.008 250);
  --on-dark-muted: oklch(0.78 0.020 258);

  /* Functional only */
  --success: oklch(0.58 0.110 150);
  --error:   oklch(0.57 0.170 27);
}
```

**Contrast rules:** `--ink` on `--paper` and `--on-dark` on `--indigo-900` are both high-contrast — safe for body. `--camel-500` is for ≥18px / bold text, rules, numerals, and ornament **only** — never body copy on light (it fails AA on paper). `--muted` is the lightest allowed body color on light.

## Typography

A high-contrast **display serif** paired with a clean **grotesque body** — chosen to echo the high-contrast serif **EMIGARMENTS wordmark**, so headings and logo read as one designed system (premium, distinctly *not* a generic AI sans).

- **Display & headings — Bodoni Moda** (variable, OFL) at weight ~620, `font-optical-sizing: auto`, near-zero tracking. A high-contrast Didone: premium, editorial-industrial. Carries the hero and all H1/H2 plus the large stat/process numerals. Self-hosted via `@fontsource-variable/bodoni-moda`.
- **Body, UI, H3, labels, numerals — Archivo** (variable, OFL) at weights 400/500/600. Clean, highly legible grotesque for all running text and functional labels. Self-hosted via `@fontsource-variable/archivo`.
- **Wordmark — high-contrast serif, recreated in SVG**, wide letter-spacing to match the existing mark. Identity-preserved; not dependent on a webfont.

(Impeccable's reflex-reject list rules out Fraunces / Cormorant / Inter / Playfair etc. — Bodoni Moda and Archivo are both off that list. And there is **no tracked-uppercase eyebrow above every section**: the site uses exactly one deliberate brand label, on the home hero, with no rule line.)

Self-host via Fontsource (`@fontsource-variable/archivo`, one variable file) with `font-display: swap` and a metric-matched fallback (`size-adjust`) for near-zero layout shift; `font-optical-sizing: auto`. Body line-length 65–75ch. Fluid `clamp()` headings, ratio ≥1.25, `max ≤ ~2.5×min`. Use `text-wrap: balance` on h1–h3, `text-wrap: pretty` on prose. ALL-CAPS labels get 0.08–0.12em tracking (used sparingly — never as a per-section eyebrow).

```css
--font-display: "Bodoni Moda Variable", "Bodoni Moda", Georgia, "Times New Roman", serif;
--font-sans:    "Archivo Variable", "Archivo", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--step-display: clamp(2.7rem, 1.5rem + 5.4vw, 5.25rem);  /* hero h1, ≤6rem ceiling */
--step-h2:      clamp(1.9rem, 1.3rem + 2.7vw, 3rem);
--step-h3:      clamp(1.3rem, 1.08rem + 1.05vw, 1.7rem);
--step-body:    1.0625rem;   /* 17px */
--step-small:   0.875rem;
--wght-display: 620;
--wght-bold:    620;
```

## Spacing & Layout

- 4px base scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- Section rhythm fluid: `padding-block: clamp(4rem, 2rem + 9vw, 9rem)`. **Vary** spacing — generous separations between movements, tight groupings within.
- **Asymmetric, full-bleed composition.** Alternate **navy-drench sections** with **paper sections** for pacing. Let material photography go edge-to-edge.
- Grid for 2D, flex for 1D. Responsive without breakpoints where possible: `repeat(auto-fit, minmax(280px, 1fr))`.
- Semantic z-index scale (dropdown → sticky → modal-backdrop → modal → toast → tooltip). No magic 999/9999.

## Shape & Radius

Crisp and engineered. Mostly sharp corners; minimal rounding.
`--r-sm: 2px; --r-md: 4px; --r-lg: 8px;` Buttons/inputs `--r-sm`. No pill shapes (too consumer). Hairline `1px solid var(--line)` for structure; full borders, never side-stripes.

## Motion

- Intentional, part of the build — not fade-on-scroll on every section.
- **One orchestrated hero load**: staggered reveal of headline → subhead → CTAs → image scrim settle.
- Ease-out exponential: `cubic-bezier(0.16, 1, 0.3, 1)`; durations 200 / 350 / 600ms. No bounce/elastic.
- Tasteful micro-interactions: button/link hover (camel underline grow), division image hover (subtle scale + scrim lift), focus rings.
- **`prefers-reduced-motion: reduce` alternative for every animation** (crossfade or instant). Reveals enhance an already-visible default — never gate content visibility on a transition.

## Imagery

Imagery is **mandatory** (zero-images is a bug for this brief). Two registers:
1. **Facility / process documentary** — clean, well-lit modern factory floors, machinery, hands at work — for heroes and section backers, under a navy gradient scrim (`--indigo-950` at ~55–70% on the text edge) so type stays legible.
2. **Macro material texture** — leather grain, raw indigo denim selvedge/weave, terry loop pile, woven cloth — for division imagery and texture bands.

Sourcing: **real, verified Unsplash photos** (`https://images.unsplash.com/photo-{id}?auto=format&fit=crop&w=1600&q=80`) — **every ID must be confirmed to resolve before shipping** (verify via fetch; never guess IDs, never ship colored-div placeholders). Search the *physical object* ("raw indigo selvedge denim macro", "stacked tanned leather hides", "cotton terry towel loop pile macro", "modern textile factory sewing line"), not the generic category. Warm-grade slightly to harmonize with camel; desaturate busy backgrounds. Client's own factory photos are strongly preferred and replace stock at the hero + one shot per division before public launch. Alt text in brand voice ("Raw indigo selvedge on the cutting table", not "denim"). Deliver via Next/Image as AVIF/WebP.

## Components

- **Header / nav** — wordmark + links (Divisions, About, Contact) + primary CTA; transparent over the navy hero, solid navy/paper on scroll; mobile slide-in drawer.
- **Buttons** — primary (camel fill, ink label on light / on navy), secondary (1px hairline outline, fills on hover), text-link (camel underline grow). `--r-sm`.
- **Hero** — full-bleed material image + navy scrim, Archivo Expanded headline, one-line subhead, dual CTA (Request a Quote / Download Profile), orchestrated load. Reusable across page tops.
- **Divisions** — **editorial alternating full-bleed bands**, one per division (Leather · Denim · Home Textiles · Towels & Terry): large material photo on one side, heading + 2–3 sentences + in-house stage list on the other, sides alternating. **NOT four identical cards** (impeccable ban). Home page shows them as an asymmetric mosaic of varied sizes, not a uniform grid.
- **Proof band** — quantified credibility (divisions, capacity/mo, export markets, headcount) woven into an asymmetric layout with short context — **not** the big-number-with-tiny-label SaaS hero-metric template. Numbers are placeholders flagged "client to confirm."
- **Process sequence** — the real 4 steps (01 Plan & Design · 02 Source Quality Materials · 03 Manufacture with Accuracy · 04 Inspect & Deliver) as a connected numbered sequence. Numbers are legitimate here (a true ordered process), used **only** here — not as section eyebrows elsewhere.
- **Certifications strip** — logo row on a navy band with validity-date captions. All certs are placeholders until the client confirms which they actually hold/pursue.
- **Material gallery** — varied mosaic + lightbox for division shots.
- **Inquiry form** — labeled inputs, Division-of-interest dropdown, country, order details; validation + success/error states; honeypot/spam guard; reliable email backend (e.g. Resend/Formspree) on Vercel.
- **Footer** — navy drench, reversed wordmark, Karachi address + map link, email/phone, secondary nav, social, copyright.
- **✕ ornament** — the logo's cross motif as an occasional section divider / list marker. Used **sparingly** (over-using the accent tips into gaudy).

## Anti-patterns to refuse (from impeccable)

No cream/beige body background · no tracked uppercase eyebrow above every section · no identical card grids · no hero-metric template · no gradient text · no side-stripe borders · no glassmorphism-by-default · no text overflow at any breakpoint · no editorial-serif-magazine drift · camel never used as body text on light.
