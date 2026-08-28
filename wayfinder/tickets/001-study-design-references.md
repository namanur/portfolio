# Study design references: Godly.design, Variant.com, Watermelon UI

Labels: wayfinder:research
Status: closed
Assignee: naman (claimed this session)

## Resolution

Studied all three from primary sources (their own HTML/CSS, fetched and analyzed: fonts, color tokens, easings, motion tech, radii, structure). Full findings: [docs/design/research/references-study.md](../../docs/design/research/references-study.md).

Distilled principles feeding the art directions:

1. One accent, near-neutral everything else — color gets attention by being scarce *(Evidence: Godly, Watermelon)*
2. Semantic role tokens, not color-name tokens; alpha-bearing borders *(Evidence: Godly)*
3. One signature easing curve used everywhere *(Convention: Variant, Watermelon)*
4. Scroll-driven transformation over keyframe animation *(Evidence: Variant — 1 @keyframes in all CSS)*
5. Headline states the proposition in plain words *(Evidence: Variant's title)*
6. Chrome restraint: the work is the imagery; interface stays quiet and typographic *(Evidence: Godly's system-ui chrome)*
7. Reject kit-default identity — Inter/Geist/indigo are *neutrality* defaults, the opposite of an authored portfolio *(Evidence: Watermelon)*
8. Controlled rounding (~.25–.625rem) *(Evidence: all three)*
9. Asymmetric/masonry layouts for work presentation *(Evidence: Godly)*
10. Relations over values in tokens (derived scales) *(Evidence: Watermelon)*

Facts worth keeping: Godly = Astro + Tailwind v4, oklch tokens, Motion + Framer. Variant = Next.js, scroll-driven demo, single easeOutExpo-family curve. Watermelon = React kit, monochrome + `#6366f1`, expo-out easings.

**Naman's color direction (project constraint, decided on this ticket's resolution):** monochromatic neutral base with **green and orange** accents. See map Notes — accent-scarcity discipline from principle 1 still governs how the two accents are deployed.
Blocked-by: (none)

## Question

What design principles — typography, hierarchy, motion, composition, color, density, and scrolling behavior — do Godly.design, Variant.com, and Watermelon UI actually use, and which of those principles should inform a minimalist-but-colorful, scroll-driven portfolio with its own design language? Output: a distilled principles brief that the art-direction samples can build against. Principles, not imitations — the portfolio must not copy any of these identities.
