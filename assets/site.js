const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Theme toggle — persisted, defaults to system */
const root = document.documentElement;
document.querySelector('.theme-toggle')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

/* Mask-reveal typography (Godly/Variant signature):
   wrap each headline's content so it can rise out of an overflow mask */
document.querySelectorAll('.section-head h2, .contact h2').forEach(h => {
  h.classList.add('rise-wrap');
  const rise = document.createElement('span');
  rise.className = 'rise';
  while (h.firstChild) rise.appendChild(h.firstChild);
  h.appendChild(rise);
});

/* Reveal engine. Two guarantees:
   1. CSS only hides things when .js is on <html> — no JS, fully visible page.
   2. Besides IntersectionObserver, a scroll sweep reveals anything whose top
      is above the fold — so hash-jumps and IO failures can never leave a
      section invisible. */
const toReveal = [...document.querySelectorAll('.reveal,.stagger,.hero-copy,.work,.process-grid,.rise-wrap')];
const revealEl = el => el.classList.add('in');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        revealEl(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12 });
  toReveal.forEach(el => io.observe(el));
  const sweep = () => toReveal.forEach(el => {
    if (!el.classList.contains('in') && el.getBoundingClientRect().top < innerHeight * .92) revealEl(el);
  });
  addEventListener('load', sweep);
  addEventListener('scroll', sweep, { passive: true });
} else {
  toReveal.forEach(revealEl);
}

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
  const parallaxEls = [...document.querySelectorAll('.work-visual .browser')].map(el => ({ el, speed: .06 }));
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    if (nav) nav.classList.toggle('scrolled', y > 10);

    /* Emphasis: the hero frame settles as the visitor scrolls away —
       motion answers the visitor's action, it doesn't loop on its own */
    if (art && y < innerHeight * 1.2) {
      const t = Math.min(y / innerHeight, 1); // 0 at top → 1 scrolled past hero
      const rot = 2.5 - 1.7 * t;              // 2.5deg → 0.8deg
      const lift = y * 0.08;                  // gentle parallax drift
      art.style.transform = `rotate(${rot}deg) translateY(${lift}px)`;
    }

    /* Depth (Godly gallery feel): browser mocks drift slower than the page */
    parallaxEls.forEach(({ el, speed }) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const delta = (r.top + r.height / 2 - innerHeight / 2) * -speed;
      el.style.setProperty('--parallax', delta.toFixed(1) + 'px');
    });
  };

  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
}
