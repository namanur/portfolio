# Reference study — Godly.design, Variant.com, Watermelon UI

Ticket: [Study design references: Godly.design, Variant.com, Watermelon UI](../../wayfinder/tickets/001-study-design-references.md)
Method: fetched each site's own HTML/CSS (primary sources) and extracted fonts, color tokens, easings, motion tech, radii, and structure. Studied 2026. Principles for *our* portfolio at the bottom — these sites are references for quality and principles, never templates to copy.

## What each site actually does (evidence)

### Godly.design — design gallery (Astro + Tailwind v4)

- **Fonts: system-ui stack for all site chrome.** No custom webfont. A gallery whose content *is* the design keeps its own type silent. Mono variable present for code snippets.
- **Color: near-monochrome + exactly one accent.** Neutral tokens have zero-ish chroma — dark bg `oklch(8.5% 0 0)`, light bg `oklch(100% 0 0)`, muted text `oklch(54% 0 0)` — with a single warm accent `oklch(68% .17 50)`. Nothing else competes.
- **Tokens are role-named, not color-named:** `background / foreground / muted / muted-foreground / border / accent / action / code-background`. Borders carry alpha (e.g. `oklch(24% 0 0 / .8)`) so they sit on any ground.
- **Radii small and restrained:** `.25–.75rem`. No pill-everything, no giant rounding.
- **Motion:** Motion (motion.dev) + Framer Motion for scroll/reveal work; micro-transitions use the standard `cubic-bezier(.4, 0, .2, 1)`. Structure is a masonry gallery with minimal chrome — the layout defers to the work shown.

### Variant.com — AI design tool (Next.js, scroll-driven)

- **The scroll *is* the product demo.** Title and description state the proposition plainly: "Endless designs for your ideas, just scroll." No clever-clever headline.
- **One signature easing, applied everywhere:** `cubic-bezier(.19, 1, .22, 1)` (easeOutExpo family). Consistency of curve is what makes the motion feel authored.
- **Transitions over keyframes:** 1 `@keyframes` in all its CSS; the expressiveness lives in scroll-driven transformation, not looping decoration.
- **Font: Inter Variable** — a tool optimizing for neutrality, not identity.

### Watermelon UI — React component kit (Tailwind)

- **Kit-default identity: Inter Variable + Geist/Geist Mono, monochrome base (#000/#fff dominate), single indigo accent `#6366f1`, radius ~.5–.625rem.** This is exactly the visual language component kits need — neutral, interchangeable — and exactly what an authored portfolio must *not* copy.
- **Easing family: expo-out variants** (`cubic-bezier(.16, 1, .3, 1)` most frequent) — a consistent "settle" feel across all interactions.
- **Derived token scale:** `--radius-lg: var(--radius); --radius-md: calc(var(--radius) - 2px)` — one base value, relationships computed.

## Principles brief for this portfolio (what we take, and why)

Tagged per the evidence/taste/convention/constraint rule.

1. **One accent, near-neutral everything else** *(Evidence — both Godly and Watermelon run single-accent monochrome)*. Color receives attention by being scarce. Our palette: neutrals + one accent, deployed only where attention belongs.
2. **Semantic role tokens, not color-name tokens** *(Evidence — Godly)*. `--color-background/foreground/muted/border/accent`, themeable, with alpha-bearing borders.
3. **A single signature easing curve, used everywhere** *(Convention — Variant, Watermelon both do this)*. One curve consistently applied reads as authored; a zoo of easings reads as assembled.
4. **Scroll-driven transformation over keyframe animation** *(Evidence — Variant: 1 keyframes rule in all CSS; Convention — modern scroll sites)*. Motion expressiveness belongs to scroll position and state transitions, not looping decoration.
5. **The headline states the proposition in plain words** *(Evidence — Variant's title)*. Cleverness goes in the design, not in obfuscating what we do.
6. **Chrome restraint: the work is the imagery** *(Evidence — Godly's system-ui chrome)*. The portfolio's own interface stays quiet and typographic; showcase content and composition carry the visual richness. This also serves the attention-management principle directly.
7. **Reject kit-default identity** *(Evidence — Watermelon ships Inter/Geist + indigo as *neutrality*, which is the opposite of what an authored site needs)*. Font and color choices must have a reason. This is the root of the anti-vibecode constraint: defaults are for kits, not portfolios.
8. **Controlled rounding** *(Evidence — all three sit at ~.25–.625rem)*. Excessive rounding is on the anti-pattern watchlist; a small derived radius scale reads precise.
9. **Asymmetric/masonry content layouts for work presentation** *(Evidence — Godly's gallery)*. Showcase grids don't need to be uniform card rows; varied rhythm is itself a design signal.
10. **Relations over values in tokens** *(Evidence — Watermelon's derived radius scale)*. Compute related sizes from one base; fewer decisions, more consistency.

**What we deliberately do NOT take**: Godly's total monochrome (we're "minimalist structurally, colorful" — our accent system will be richer than one hue, but just as disciplined about where color appears); Variant's tool-neutrality; Watermelon's kit identity wholesale.
