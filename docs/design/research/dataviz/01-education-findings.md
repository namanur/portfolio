# Dataviz Education Stream — Findings (Ticket DV-001)

Labels: research-findings
Status: complete (Pudding + D3 + Kirk verified; Observable gallery deep pass in §7)
Sources fetched: pudding.cool process parts 1–3 + resources page, d3js.org/getting-started, SAGE Kirk 3rd-ed page, observablehq.com @d3 gallery + notebook modules via api.observablehq.com. All claims below cite these. Interpretations are marked.

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

## 7. Observable @d3 gallery — deep pass (fetched 2026-08-28)

**Method:** the gallery page (observablehq.com/@d3/gallery) is a JS-rendered SPA, but its HTML still ships the full notebook index — **159 @d3 notebooks** enumerated. Notebook prose was fetched as primary source from the module API (`api.observablehq.com/@d3/<slug>.js`), which serves the authored markdown cells verbatim. Every quote below is from Mike Bostock's notebook text.

**Finance-relevant cluster identified** (encodings + interactions Bostock demos with market data):

- **Index chart** (@d3/index-chart): weekly price of several tech stocks 2013–2018 "relative to each stock's price on the highlighted date. Hover over the chart to change the date for comparison." *Interpretation:* the signature comparative interaction for multi-series market data — a scrubbable basis date that re-references every series live. Directly reusable in our project.
- **Percent-change line** (@d3/change-line-chart): AAPL change vs. a slider-set cost basis; "The log scale allows accurate comparison" — it links Bostock's *Methods of comparison compared* as the canonical treatment. *Interpretation:* percent-change-on-log is the correct default encoding when comparing instruments at different price levels; a slider for the basis is a cheap, honest interaction.
- **Candlestick** (@d3/candlestick-chart): OHLC per trading day; "A specialized x-axis is used to avoid gaps on the weekend when the markets are closed." *Interpretation:* trading-day data must use a band/point scale, never a linear time scale — otherwise weekends render as voids. Implementation detail that separates real market dataviz from toy charts.
- **Bollinger bands** (@d3/bollinger-bands): "simple, lagging moving averages for characterizing volatility," with sliders for periods (N) and deviations (K). Data source: Yahoo Finance. *Interpretation:* parameter-driven statistical overlays (N/K sliders) are a proven interaction pattern for volatility views.
- **Moving average** (@d3/moving-average): N-day MA slider over binned daily counts.
- **Zoomable area chart** (@d3/zoomable-area-chart): daily flights; axes rescale on zoom; "The effect of the September 11, 2001 attacks on air travel is evident." *Interpretation:* zoom rescaling is a narrative device, not just a utility — the story is visible at multiple time granularities.
- **Pannable chart** (@d3/pannable-chart): area chart at 6× window width, horizontal panning.

**Precision-dense pattern pair** (both claimed alternatives to small-multiple area charts):
- **Horizon chart** (@d3/horizon-chart): "allow[s] greater precision for a given vertical space by using colored bands"; diverging color scales "to differentiate positive and negative values" (linked horizon-chart-ii).
- **Ridgeline plot** (@d3/ridgeline-plot): "greater precision for a given vertical space at the expense of occlusion (overlapping areas)."
- *Interpretation:* horizon vs. ridgeline vs. small multiples is a space/precision/occlusion trade-off triangle — when a concept needs many series (e.g., sectors, stocks) in limited height, this is the decision to make explicitly.

**Other transferable patterns from the same gallery:**
- **Difference chart** (@d3/difference-chart): two series in one area chart, fill color encodes which series is larger (reversed RdBu, step curve). For our use: fund-vs-benchmark, winner-vs-loser frames.
- **Brushable scatterplot** (@d3/brushable-scatterplot, @d3/brushable-scatterplot-matrix): brushing selects points in one SPLOM cell and "highlight[s] them across all other cells" — cross-cell linked selection.
- **Connected scatterplot** (@d3/connected-scatterplot): recreation of the NYT Fairfield *Driving Shifts Into Reverse*, with a **Replay button** for temporal narrative; cites the Haroz et al. research paper on connected-scatterplot comprehension.
- **Threshold / variable-color line** (@d3/threshold-encoding, @d3/variable-color-line): gradient on a line keyed to a y-threshold or a condition field — color-as-state along a path.
- **Streamgraph** (@d3/streamgraph): unemployed persons by industry 2000–2010, framed against stacked/normalized area alternatives.

**Meta-finding (affects architecture ticket DV-004):** the June 2023 deprecation wave — most classic @d3 notebooks now carry "This notebook has been deprecated… see the newer D3 example and Observable Plot example" banners pointing at Observable Plot equivalents (plot-candlestick-chart, plot-bollinger-bands, plot-index-chart, plot-difference-chart, plot-connected-scatterplot, plot-horizon). *Interpretation:* Observable Plot now ships standard finance marks out of the box; the D3-vs-Plot-vs-vanilla decision must weigh Plot for standard charts, reserving raw D3 for custom interaction (brushing, scroll, annotation) Plot doesn't cover. This changes the DV-004 framing from "vanilla + D3" to "vanilla + Plot + D3-where-needed."

**What NOT to copy:** deprecated pre-2023 notebook implementations themselves (use /2 versions or Plot); the joy-plot name (Bostock's own text documents its offensive origin — ridgeline is the term to use); copying gallery chart types without a question-first thesis (Pudding's rule outranks the gallery's menu).

---

## Remaining for ticket 001

None — Observable deep pass complete (§7). Kirk chart-taxonomy deep pass was assessed and closed earlier: the decision-chain checklist (§5) is the transferable extract; the full taxonomy is book-locked and flagged as interpretation.
