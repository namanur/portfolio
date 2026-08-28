# 0001 — Color direction: monochrome base + green/orange accents

**Decision**: Monochromatic warm-paper neutral base with two accents — green `#2e6b4e` (primary) and orange `#c9662a` (secondary, reserved for small primary moments). Encoded as `--accent` / `--accent-2` in `assets/site.css`.

**Reason**: Naman's explicit choice. Reference study (Godly, Watermelon) shows single-accent scarcity is what makes color command attention; two accents move the discipline to hierarchy — never both competing at the same level.

**Alternatives considered**: v1's red/blue/yellow trio (rejected — color competing with color, no hierarchy among accents).

**Implementation**: `assets/site.css` tokens. Specific values are provisional until the art-direction ticket locks the palette; green leads, orange appears only at genuinely primary moments.
