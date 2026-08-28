# Scaffold monorepo and shared engineering conventions

Labels: wayfinder:task
Status: open (v1 draft adopted in repo — polish/finish remaining)
Assignee: (unclaimed)
Blocked-by: (none)

## Question

(AFK) What does the repo look like so four sites (portfolio + 3 showcases) share conventions but deploy as independent Netlify sites? Set up: monorepo layout, per-site folders, shared Tailwind foundation, base HTML/JS patterns (scroll animation helpers, responsive conventions), Netlify deploy config per site. Apply the architecture-over-memory rule: a lightweight **Design Decision Record** system (`docs/design/decisions/` — decision, reason, alternatives if useful, where it lives in the codebase; only decisions that materially affect future work earn a record), deterministic build validation, a formatter, and the structure for the design-token layer that ticket **Design token foundation** will fill. Keep the repo small → understandable → deterministic → easy to modify. The structure must itself demonstrate the "easy to modify and upgrade later" promise. Resolution records the layout and conventions doc that every build ticket follows.
