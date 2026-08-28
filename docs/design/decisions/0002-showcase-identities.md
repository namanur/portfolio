# 0002 — Each showcase gets its own brand identity (no shared skin)

**Decision**: Showcases stop sharing the portfolio's stylesheet. Each is a self-contained brand with its own type pairing, palette, components, and motion personality. The portfolio stays the consistent showroom.

**Reason**: All four sites shipped on one `site.css` — same bones, different coats. They read as one website four times, which fails the map's rule that every showcase proves a *distinct* capability and makes the portfolio look like a template farm.

**Alternatives considered**: keeping shared CSS with inline overrides (rejected — that's what caused the sameness).

**Implementation**: per-showcase `theme.css`, zero import of `site.css`. Identities:
- **Café Aava** — warm, tactile, playful. Fraunces + Work Sans; cream/espresso/terracotta/butter; rotating stamp, taped photos, dotted-leader menu, wavy underline, chunky 12px-radius buttons with hard offset shadows. Built 2026-08-28.
- **Atelier North** — cold, precise, gallery-minimal. See ticket Build Showcase 2 for the brief.
- **Frontend Lab / Amulet Black** — terminal/data-dense. See ticket Polish the frontend-lab dashboard.

**Image policy**: each showcase has an `img/` folder of generated photos wired as `<img>` with graceful fallback labels — missing images never break layout (learned from Nandan Traders' "Coming Soon" grid).
