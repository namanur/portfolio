# Motion and responsive framework — scroll storytelling with purpose

Labels: wayfinder:research
Status: open
Assignee: (unclaimed)
Blocked-by: (none)

## Question

What motion language and responsive transformation strategy should the site use? **Scroll storytelling as a system**: for each section, Entry → orientation → emphasis → transition → exit, with motion creating continuity between states. Survey mechanisms (reveal, parallax, scale, position, pinning, horizontal movement, image/typography transformation, color transition, section overlap) and require every major animation to answer "what does this movement communicate?" Accessibility is part of the motion system: `prefers-reduced-motion` support and disableable non-essential animation (W3C) — motion-rich but accessible. **Responsive as composition transformation, not desktop shrinking** (web.dev's macro/micro layout, typography, images, interaction, accessibility framework; MDN on media queries): navigation transformation, content reordering, section height, animation changes, reduced-motion behavior. Every major section gets a deliberate mobile composition — "it technically fits" is failure. Deliver a motion/responsive framework with a motion-hierarchy model, tagged Evidence / Convention / Taste / Project constraint.
