# Design token foundation — encode the chosen direction

Labels: wayfinder:task
Status: open
Assignee: (unclaimed)
Blocked-by: 004, 020

## Question

(AFK) Encode the chosen art direction as a token layer so design consistency lives in architecture, not memory: colors, typography (family, scale, weights), spacing, radius, shadows, motion timing and easing, breakpoints, content widths, z-index layers — **only values that genuinely recur**; no invented mega-system. Typography decisions land as actual CSS/configuration, the color system as tokens, motion language as timing/easing tokens. Tokens must survive the accessibility constraints (contrast ratios verifiable at token level). This ticket is the first application of the architecture-over-memory rule and feeds the monorepo conventions every build ticket uses.
