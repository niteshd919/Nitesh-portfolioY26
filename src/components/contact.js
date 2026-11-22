/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · contact — "Engine start"
   Runs on the home page and on every case study; it needs only
   core.js (window.Site).
     1. LED — breathes slowly while on screen; held still when the
        visitor prefers reduced motion.
     2. Arrival — the scale draws round, the LED runs a bulb check.
     3. Hover / keyboard focus — the scale lights up clockwise, like revs.
     4. Press — CSS :active travel; a click also revs the scale (touch
        has no hover), and the mailto link does the rest.
   ================================================================== */

(function () {
  const Site = window.Site;
  const btn = document.querySelector('.ignition');
  if (!Site || !btn) return;
  const { animate, createTimeline, utils } = Site.anime;
  const EASE = Site.motion.ease;
  const reduced = Site.reduced;

  /* ------------------------------------------------------------------
     1. LED — one slow breath every ~5.6 s, only while on screen.
  ------------------------------------------------------------------ */
  let breath = null;
  let powered = false;
  let onScreen = false;

  function syncBreath() {
    if (reduced || !powered) return;
    if (!breath) {
      breath = animate(btn, {
        '--breath': [0, 1],
        duration: 2800,
        ease: 'inOutSine',
        loop: true,
        alternate: true,
        autoplay: false,
      });
    }
    if (onScreen) breath.resume();
    else breath.pause();
  }

  new IntersectionObserver((entries) => {
    onScreen = entries[entries.length - 1].isIntersecting;
    syncBreath();
  }).observe(btn);

  /* ------------------------------------------------------------------
     2. ARRIVAL — draw the scale round from twelve o'clock, flash the
        LED once (bulb check), then hand it to the breath.
  ------------------------------------------------------------------ */
  if (!reduced) {
    utils.set(btn, { '--reveal': 0, '--breath': 0 });
    Site.observe(btn, () => {
      createTimeline()
        .add(btn, { '--reveal': [0, 1], duration: 1700, ease: EASE.inOut }, 0)
        .add(btn, { '--breath': [0, 1], duration: 360, ease: 'out(2)' }, 1050)
        .add(btn, { '--breath': [1, 0], duration: 1100, ease: 'inOut(2)' }, 1500)
        .call(() => {
          powered = true;
          syncBreath();
        }, 2650);
    });
  }

  /* ------------------------------------------------------------------
     3. REVS — the lit copy of the scale sweeps clockwise on hover or
        keyboard focus, and falls back when the pointer leaves.
  ------------------------------------------------------------------ */
  const lit = { v: 0 };
  let litAnim = null;
  let fallTimer = null;
  const paintLit = () => btn.style.setProperty('--lit', lit.v.toFixed(4));

  function rev(to) {
    if (litAnim) litAnim.pause();
    if (reduced) {
      lit.v = to;
      paintLit();
      return;
    }
    const span = Math.abs(to - lit.v);
    const up = to > lit.v;
    litAnim = animate(lit, {
      v: to,
      duration: up ? 250 + 950 * span : 200 + 650 * span,
      ease: up ? EASE.inOut : 'out(3)',
      onUpdate: paintLit,
    });
  }

  btn.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') rev(1); });
  btn.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') rev(0); });
  btn.addEventListener('focus', () => { if (btn.matches(':focus-visible')) rev(1); });
  btn.addEventListener('blur', () => { if (!btn.matches(':hover')) rev(0); });

  /* ------------------------------------------------------------------
     4. PRESS — iOS only applies :active with a touch listener present.
        A click revs the scale once, then lets it fall back.
  ------------------------------------------------------------------ */
  btn.addEventListener('touchstart', () => {}, { passive: true });
  btn.addEventListener('click', () => {
    rev(1);
    clearTimeout(fallTimer);
    fallTimer = setTimeout(() => {
      if (!btn.matches(':hover') && !btn.matches(':focus-visible')) rev(0);
    }, 1500);
  });
})();
