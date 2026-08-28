/* Café Aava effects: stamp spins faster while you scroll (scroll-linked fun) */
const stamp = document.querySelector('[data-scroll-spin]');
const svg = stamp?.querySelector('svg');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (stamp && svg && !reduced) {
  let extra = 0, target = 0, ticking = false;
  addEventListener('scroll', () => {
    target = Math.min(scrollY * 0.12, 540); // up to ~1.5 extra turns
    if (!ticking) { ticking = true; requestAnimationFrame(step); }
  }, { passive: true });
  function step() {
    extra += (target - extra) * 0.08;      // ease toward the scroll target
    stamp.style.transform = `rotate(${extra}deg)`;
    ticking = Math.abs(target - extra) > 0.5;
    if (ticking) requestAnimationFrame(step);
  }
}
/* menu board observes itself so items can stagger in */
const menu = document.querySelector('.menu');
if (menu) new IntersectionObserver((es, io) => {
  es.forEach(e => { if (e.isIntersecting) { menu.classList.add('in'); io.disconnect(); } });
}, { threshold: .15 }).observe(menu);
