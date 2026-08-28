# Wayfinder Map: Sell My Websites — Portfolio as Proof

Labels: `wayfinder:map`
Status: open

## Destination

A live portfolio URL (clean Netlify subdomain) Naman can send to a potential client with confidence: the portfolio plus three showcase sites, all live, each proving a distinct capability. The test for done:

> **"Would I confidently send this website to someone who could pay me ₹20,000–₹25,000 for a website?"**

Sendable without apologizing for anything — no unfinished showcases, no placeholders, no "coming soon".

## Notes

**Domain**: Selling website-building to non-technical clients (Indian market, ₹15–25k typical project). The portfolio is the sales artifact; the client must grasp its value visually and in plain language, without jargon.

**Core principle — the portfolio is the proof**: If the site claims hierarchy, it must visibly have excellent hierarchy. If it claims motion design, its motion must be excellent. The website is the evidence, not the argument.

**Standing preferences**:
- Attention management: not everything pops; motion, color, scale, contrast, whitespace all serve hierarchy and eye movement.
- Anti-generic: nothing that reads as a template or "AI-generated website look".
- Copy: English, confident, plain, personal, honest, low-jargon. Self-taught B.Com (Honors) positioning stated honestly — taste and evidence carry it, not fake agency credentials. No photo required.
- Soft pricing anchor (~₹15k start / ₹20–25k typical); exact wording decided in copy work.
- Contact: WhatsApp + email. Form backend only if it earns its complexity.
- Stack: Tailwind CSS + vanilla HTML/JS unless a build decision says otherwise. Easy-to-modify structure is part of the sales story.
- Deploy: **decided & changed — GitHub Pages via gh CLI**, not Netlify. Live at https://namanur.github.io/portfolio/ (repo namanur/portfolio); pushes to master auto-deploy. Showcases live under /showcases/ paths rather than separate domains — acceptable because all site paths are relative and the work section links directly to each build. Netlify remains an option if independent showcase domains are ever wanted.
- **Nandan Traders (nandantrader.in) — decided**: Naman's first site, shipped live for a real wholesale business, but explicitly a vibe-coded learning artifact. **Not a portfolio showcase.** May inform the about/journey copy ("first site live → this is what came next") as honest growth narrative; never presented as a work sample. Its lessons (real-content constraints, real domain, real launch) feed every build ticket.
- **Color direction (decided by Naman)**: monochromatic neutral base with **green and orange** accents. Project constraint — art directions work within it. Discipline from the reference study still governs: color receives attention by being scarce; decide which accent leads (e.g. green primary, orange reserved for genuinely primary moments) and never let both compete at the same hierarchy level.
- Interleaved flow: art direction → portfolio skeleton → showcase 1 → portfolio iteration → showcase 2 → portfolio iteration → dashboard polish → final portfolio polish → deployment.
- Soft timeline: 2–3 weeks to sendable v1. Ship good-enough-to-sell, refine on real feedback.

**Execution override**: This effort carries execution into the map. The destination is a shipped artifact, so `task` tickets build things; decision tickets (`grilling`, `prototype`, `research`) resolve the choices that shape those builds.

**Design-research framework (added by Naman)**: Before implementation, the map must establish a practical design system and critique framework covering typography, type/visual hierarchy, attention management, grid & composition, heroes, image placement, color/contrast, whitespace, section rhythm, scroll storytelling, motion, responsive behavior, accessibility, art direction, anti-vibecode patterns, and originality. Sources of authority: Nielsen Norman Group (visual hierarchy, meaningful imagery, Gestalt grouping), Material Design as *structural* reference only (typography + grids + space + scale + color + imagery interact as one system — never as visual template), WCAG 2.2 as hard constraint, web.dev/MDN for responsive and image guidance. Outputs are **repository artifacts, not essays**: `docs/design/principles.md`, a Design Research Brief, a section-by-section critique checklist, and design tokens. Five parallel research streams (typography; hierarchy & composition; hero & imagery; motion & responsive; anti-vibecode & originality) synthesize into one brief that unblocks art direction and every build ticket.

**Evidence vs taste**: All design research separates **Evidence** (what credible research/standards support), **Design convention** (widely useful practice, not law), **Personal taste** (Naman's aesthetic preference), and **Project constraint** (explicitly chosen here). Preferences are never dressed up as scientific rules — e.g. "avoid gradients by default because they're strongly associated with the generic visual language we're avoiding; use one only when it has a specific compositional or brand function."

**Core philosophy — two parallel principles**: *Design: don't let AI defaults make the design generic. Engineering: don't let agent memory make the codebase fragile.* Both reduce to: make intentional decisions, encode them where possible, avoid relying on defaults. Architecture-over-memory rule: **if a decision can be encoded in architecture, encode it; if it can be checked automatically, check it automatically; if neither, document it briefly.** The repository must let another human or agent reconstruct the project's important state (design decisions → tokens, conventions → components, metadata → structured content, correctness → checks, deployment → config).

**Skills to consult**: `grilling` and `domain-modeling` for every decision ticket; `prototype` for artifact tickets; `unslop` for all copy work; `research` where outside knowledge is needed.

## Decisions so far

<!-- one line per closed ticket; a decision lives in its ticket, not here -->

- [Study design references: Godly.design, Variant.com, Watermelon UI](tickets/001-study-design-references.md): ten distilled principles (one-accent scarcity, semantic tokens, single signature easing, scroll-driven transformation, reject kit-default identity…), full study in [docs/design/research/references-study.md](docs/design/research/references-study.md). Color direction decided here by Naman: monochrome base + green and orange accents.
- [Three art directions — pick the portfolio's visual identity](tickets/004-art-direction-samples.md): direction locked through the adopted v1 + iterations rather than 3 samples — warm-paper editorial monochrome, green/orange accents, DM Sans + Instrument Serif, single easing. Encoded in tokens.
- [Choose Showcase 1 subject — Indian-business landing page](tickets/005-showcase1-subject.md): Café Aava (Jaipur café), chosen and built via v1; live on production.
- [Choose Showcase 2 subject — global-feeling brand page](tickets/006-showcase2-subject.md): Atelier North (objects/brand studio, oversized type), chosen and built via v1; live on production.
- [Deploy the three showcases as independent Netlify sites](tickets/011-deploy-showcases.md): superseded — GitHub Pages hosts the monorepo; showcases verified live under /showcases/ paths. Netlify per-site deploys remain an option.

## Not yet specified

- **Case-study presentation format**: how each showcase appears inside the portfolio — static screenshots, live embedded previews, or links out. Depends on the chosen art direction and how the showcases actually turn out. Graduates once the portfolio skeleton exists.
- **Specific green/orange values and accent roles**: decided in practice during the art-direction lock (light: `#2e6b4e`/`#c9662a`; dark: `#74c69a`/`#e39a63`; green leads, orange for small primary moments) — final values confirmed at the art-direction review.
- **The "isn't this just AI-generated?" objection**: whether the portfolio addresses it head-on, how, and where. Might surface during copy work or the send test; can't phrase the decision precisely until there's real copy and real work to point at.
- **Showcase quality audit criteria**: what minimum bar each showcase must clear before deployment. Sharper once one showcase exists to calibrate against.
- **Responsive/animation polish pass details**: which breakpoints, which motion moments get extra care. Specifiable after the portfolio skeleton exists.
- **Which anti-patterns become automated checks**: which of the validated anti-vibecode watchlist items can be encoded as lint/check/token constraints versus left to review judgment. Graduates once the research brief and token foundation exist.

## Out of scope

- **GLM 5.3 Flash / PyAgent research and probing**: removed by Naman — tools and workflow are implementation details, not project dependencies, unless they directly block execution.
- **Post-launch improvement loop**: refining based on real client feedback happens after the destination; a fresh effort if it comes.
- **Multi-page case-study pages**: v1 is a single long page; richer case studies may come later, outside this map.
- **Custom domain**: free Netlify subdomain is fine initially.
- **Contact form backend**: WhatsApp + email suffice for v1.
- **Actually delivering the client's website**: the map produces the sales asset; winning and doing the client work is beyond this destination.
