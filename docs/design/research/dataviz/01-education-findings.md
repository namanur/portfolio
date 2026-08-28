# Dataviz Education Stream — Findings (Ticket DV-001)

Labels: research-findings
Status: partial (Pudding + D3 + Kirk verified; Observable gallery patterns pending deep pass)
Sources fetched: pudding.cool process parts 1–3 + resources page, d3js.org/getting-started, SAGE Kirk 3rd-ed page. All claims below cite these. Interpretations are marked.

The Pudding's own stack (their FAQ, resources page): HTML/CSS/JS, "heavily" D3.js + Svelte; R/Figma/Flourish for static work; **scrollama** and enter-view for scroll mechanics; **d3-annotation** for annotations. Their story pitches are "a question we will then attempt to answer using data" — the question comes first, the chart second.

---

## 1. The Pudding — Working with Data (part 1)

**Source evidence:**
- Their workflow is explicitly three components: **Data, Visualization, Writing** (part 1 intro).
- Tools emphasized are free/open-source; barrier is "time and persistence, rather than tool cost."
- Team are generalists; Python/R/JS/SQL all acceptable for data work.

**Interpretation for our project:**
- The project must visibly *begin* at data acquisition and cleaning, not at chart code. That story (what we fetched, what was dirty, what we dropped) is portfolio content in itself.
- A question-first log: write the central question before any chart exists. This will also become ticket DV-005's grounding.

## 2. The Pudding — Design (part 2)

**Source evidence:**
- Design framed as "a chain of decisions": which insights → which chart → how coded.
- "Think about your message" before visualizing: growth over time? disparity? variance? geographic pattern?
- **"Don't design in code"** — draft static viz in a cheap tool (Keynote/Figma) to test whether the insight communicates before writing JS.
- Archive admired work with annotations of *what solved which visual problem*.
- Design is iterative even for pros (Scientific American's pregnancy piece, Bostock's "work" talk cited as evidence quality = hours).

**Interpretation:**
- Our process artifacts should include a static-design draft of the hero visualization before code. Cheap, fast, and it *is* the anti-vibecode discipline applied to dataviz.
- Chart-type selection must be justified against the message type — this feeds the concept-format requirement (3–6 major visualizations, each named for the question it answers).

## 3. The Pudding — Storytelling (part 3)

**Source evidence:**
- Storytelling is "the broader universe of considerations that impact nearly every decision… the 'why' of designing the narrative," not chart selection.
- **Open with a single data point** (their automation-retraining piece opens with one truck driver) — character/context before aggregate.
- Structure menu: (a) **takeaway + chart sequence** with editorializing text; (b) **scrollytelling** — "reader scrolls, visuals change," benefits = fluid experience, discovery pulls reader forward without prescription; works "particularly well when users scroll through a single chart."
- **"Exploration is not a story"** — a pile of charts from analyzing a dataset is exploratory work, not an essay. A central thesis is required.
- Don't be a black box: readers must feel they got enough context to understand your reasoning, even if not every calculation.
- Decision heuristic: if the dataset is inherently interesting, free-form exploration can work; otherwise "it's easier to tackle an interesting question than to explore a dataset hoping a key insight appears."
- Match structure complexity to takeaway complexity (simple takeaway → simple structure).

**Interpretation (high leverage for DV-005):**
- Every concept must declare a **thesis sentence**, not a dataset. "What can I show with NSE data" is disqualified; "Why do Indian mid-caps crash harder than the index in rate-shock weeks" is a concept.
- Scrollytelling fits a *single evolving chart* best — concepts should identify their one central chart, with supporting views around it.
- An opening built on one concrete data point (one stock, one day, one trader) is a signature move worth copying.

## 4. The Pudding — Resources page

**Source evidence (titles verified on page):**
- "Easier Scrollytelling with Position Sticky", "An Introduction to Scrollama.js", "Responsive Scrollytelling Best Practices", "Making Data Viz Without SVG Using D3 and Flexbox", "d3-annotation", enter-view, scrollmagic in their stack FAQ.

**Interpretation:** our interaction stack is pre-proven: sticky-position scrollytelling + scrollama (or hand-rolled IntersectionObserver, which we already use on the café site) + d3-annotation. No framework needed.

## 5. Andy Kirk — *Data Visualisation* (3rd ed., SAGE, Nov 2024)

**Source evidence (from SAGE page):**
- Framework: "**contextual, analytical, editorial, and visual ingredients**."
- "Emphasis on critical thinking over technical instruction; the importance of good decision-making is placed at the centre of a proven step-by-step process."
- 200+ examples, 40 chart types covered.

**Interpretation:** Kirk's decision chain (purpose → audience → context → data → editorial intent → encoding → composition) should be the checklist each of our 3–6 major visualizations must survive. Deep pass on his chart-type taxonomy still pending — flagged in ticket.

## 6. D3 (d3js.org, current docs)

**Source evidence (verified module taxonomy on getting-started page):**
- Scales: linear, **time/UTC**, pow, log, symlog, ordinal, band, point, sequential, diverging.
- Shapes: arcs, areas, curves, lines, stacks, symbols, radial variants.
- **Interaction behaviors: d3-brush, d3-drag, d3-zoom, d3-dispatch.**
- Layouts: force, hierarchy (tree/cluster/partition/pack/treemap), geo, contours, voronoi/delaunay.
- Data: d3-array (binning, bisecting, grouping, sorting), d3-time, d3-format, d3-fetch/dsv.
- Getting-started example is a margin-padded UTC time-scale chart — time-series is first-class.

**Interpretation:** D3 covers every encoding in our concept space (brushable time windows, horizon/ridgeline via d3-area stacking, force for correlation networks, treemap for sector concentration). Vanilla + D3 is fully viable; no framework evidence needed unless Svelte-grade componentization proves necessary — none anticipated at our scale.

---

## What should influence our project (stream-1 conclusions)

1. **Question before chart** — every concept needs a one-sentence thesis (Pudding pitching model).
2. **One central evolving chart**, scrollytold; supporting views around it.
3. **Open with a single data point**, not an aggregate.
4. **Static draft before code** for the hero visualization.
5. **Show the data work** — acquisition/cleaning story is portfolio content.
6. **No black boxes** — annotate method; readers must be able to follow the reasoning.
7. Vanilla JS + D3 + sticky scrollytelling + d3-annotation = the proven stack; GitHub Pages-friendly, zero-cost.

## Remaining for ticket 001

- Observable gallery pattern deep pass (connected scatters, horizons, ridgelines, beeswarms — the 8-question grid per pattern). Page is JS-rendered; use the notebook-kit gallery link from the brief.
- Kirk chart-taxonomy deep pass (book not fetchable; work from published TOC/interviews, labeled interpretation).
