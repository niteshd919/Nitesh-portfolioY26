/* ==================================================================
   NITESH — PORTFOLIO 2025
   Core chrome shared by every page: global state, Lenis smooth
   scroll wired into GSAP's ticker, the custom magnetic cursor, and
   the fullscreen menu overlay. Loaded before any page-specific script.
   ================================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------
   0. GLOBAL STATE
------------------------------------------------------------------ */
const isTouch = window.matchMedia('(hover: none)').matches;
const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ------------------------------------------------------------------
   1. LENIS — buttery smooth scrolling, wired into GSAP's ticker so
      ScrollTrigger and Lenis always agree on scroll position.
------------------------------------------------------------------ */
const lenis = new Lenis({
  duration: 1.15,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.1,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

/* ------------------------------------------------------------------
   2. CUSTOM MAGNETIC CURSOR
------------------------------------------------------------------ */
if (!isTouch) {
  const cursor = document.getElementById('cursor');
  const cursorLabel = document.getElementById('cursorLabel');

  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' });

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  document.querySelectorAll('a, button, .work-item').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('is-hover');
      gsap.to(cursor, { width: 56, height: 56, duration: 0.35, ease: 'power3.out' });
      const label = el.getAttribute('data-cursor');
      if (label) {
        cursorLabel.textContent = label;
        cursor.classList.add('is-label');
        gsap.to(cursor, { width: 90, height: 90, duration: 0.35, ease: 'power3.out' });
      }
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-hover', 'is-label');
      gsap.to(cursor, { width: 16, height: 16, duration: 0.35, ease: 'power3.out' });
    });
  });

  document.querySelectorAll('.magnetic, .magnetic-lg, .magnetic-block').forEach((el) => {
    const strength = el.classList.contains('magnetic-lg') ? 0.4 : 0.3;

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      gsap.to(el, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.5,
        ease: 'power3.out',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

/* ------------------------------------------------------------------
   3. NAV — fullscreen menu overlay toggle. Present on every page.
------------------------------------------------------------------ */
function initMenu() {
  const btn = document.getElementById('menuBtn');
  const overlay = document.getElementById('menuOverlay');
  if (!btn || !overlay) return;
  let open = false;

  const tl = gsap.timeline({ paused: true })
    .to(overlay, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      duration: 0.8,
      ease: 'power4.inOut',
    })
    .from('.menu-link', {
      y: 60,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.06,
    }, '-=0.35')
    .from('.menu-footer-col', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
    }, '-=0.4');

  function toggle() {
    open = !open;
    btn.classList.toggle('is-open', open);
    overlay.classList.toggle('is-open', open);
    if (open) {
      tl.play();
      lenis.stop();
    } else {
      tl.reverse();
      lenis.start();
    }
  }

  btn.addEventListener('click', toggle);
  document.querySelectorAll('.menu-link, .menu-footer-col a').forEach((link) => {
    link.addEventListener('click', () => {
      if (open) toggle();
    });
  });
}
initMenu();
