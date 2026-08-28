# Deploy the three showcases as independent Netlify sites

Labels: wayfinder:task
Status: closed
Assignee: (unclaimed)
Blocked-by: 007, 008, 010

## Question

(AFK) Are all three showcases deployable as independent Netlify sites with clean URLs? Deploy each, verify production behavior (responsive, motion, performance basics), and record the live URLs — the portfolio's showcase sections need them. Any deployment-breaking issues discovered here go back to their build tickets.

## Resolution

Superseded by the deployment decision: GitHub Pages hosts the whole monorepo, so showcases deploy with the repo instead of as separate Netlify sites. Verified live (HTTP 200): /showcases/cafe-aava/, /showcases/atelier-north/, /showcases/frontend-lab/ under https://namanur.github.io/portfolio/. Netlify per-site deploys remain an option if independent showcase domains are ever wanted — recorded on the map.
