const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Entry reveals */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal,.stagger,.hero-copy,.work,.process-grid').forEach(el => io.observe(el));

/* Smooth anchor navigation */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      }
    }
  });
});

if (!reduced) {
  /* Orientation: scroll progress + nav border — one rAF, no jank */
  const progress = document.querySelector('.progress');
  const nav = document.querySelector('.nav');
  const art = document.querySelector('.art-frame');
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    if (nav) nav.classList.toggle('scrolled', y > 10);

    /* Emphasis: the hero frame settles as the visitor scrolls away —
       motion answers the visitor's action, it doesn't loop on its own */
    if (art && y < innerHeight) {
      const t = Math.min(y / innerHeight, 1); // 0 at top → 1 scrolled past hero
      const rot = 2.5 - 1.7 * t;              // 2.5deg → 0.8deg
      const lift = y * 0.08;                  // gentle parallax drift
      art.style.transform = `rotate(${rot}deg) translateY(${lift}px)`;
    }
  };

  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
}
