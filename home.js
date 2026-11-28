/* ==========================================================================
   NITESH DIXIT — homepage behaviour ("Maker's"). Plain JS, no dependencies.
   The clock, the housekeeping and the photo viewer live in site.js.

   Film reel: pin + fly-in on scroll ("cinematic"), back / forward
   ========================================================================== */
(function () {
  'use strict';

  /* Film reel ------------------------------------------------------------
     The stage is as tall as the pinned strip plus 1.4 windows of scroll. Over
     the first 80% of that scroll each cell flies in from deep behind the
     strip, one after another, on a snaking path; the rest holds it still. */
  const stage = document.querySelector('[data-reel-stage]');
  const pin = stage && stage.querySelector('[data-reel-pin]');
  const reel = stage && stage.querySelector('[data-reel]');

  if (stage && pin && reel) {
    const root = document.documentElement;
    const cells = Array.from(reel.querySelectorAll('.cell'));
    const motionOK = matchMedia('(prefers-reduced-motion: no-preference)');
    const roomy = matchMedia('(min-width: 768px) and (min-height: 560px)');
    const coarse = matchMedia('(pointer: coarse)');

    let cinematic = false;
    let travel = 0;
    let pinTop = 0;
    let raf = 0;
    let lastP = -1;
    let lastW = 0;
    let lastH = 0;

    const clearCells = () => cells.forEach((c) => { c.style.transform = ''; c.style.opacity = ''; });

    const layout = () => {
      // Media queries first: on phones and with reduced motion this returns
      // without reading any geometry, so it never forces a layout.
      cinematic = motionOK.matches && roomy.matches;
      const vh = cinematic ? innerHeight : 0;
      if (cinematic) cinematic = root.scrollHeight > vh * 1.5;
      stage.classList.toggle('is-cinematic', cinematic);
      lastP = -1;
      if (!cinematic) {
        stage.style.height = '';
        pin.style.top = '';
        reel.style.removeProperty('--fh');
        travel = 0;
        clearCells();
        return;
      }
      reel.style.setProperty('--fh', `${Math.round(vh * 0.6)}px`);
      const pinH = pin.offsetHeight;
      travel = Math.round(vh * 1.4);
      pinTop = Math.max(0, Math.round((vh - pinH) / 2));
      stage.style.height = `${pinH + travel}px`;
      pin.style.top = `${pinTop}px`;
    };

    // 0 when the stage starts to pin, 1 once every frame has landed.
    const progress = () => {
      if (!travel) return 1;
      const top = stage.getBoundingClientRect().top;
      return Math.min(1, Math.max(0, (pinTop - top) / (travel * 0.8)));
    };

    const update = () => {
      raf = 0;
      if (!cinematic) return;
      const p = progress();
      if (p === lastP) return;
      lastP = p;
      const n = cells.length;
      const d = 0.14; // stagger between cells
      const span = 1 + (n - 1) * d;
      for (let i = 0; i < n; i++) {
        const t = Math.min(1, Math.max(0, p * span - i * d));
        const e = 1 - Math.pow(1 - t, 3); // ease out cubic
        const k = 1 - e;
        const s = cells[i].style;
        if (k < 0.001) { s.transform = ''; s.opacity = ''; continue; }
        const z = -2600 * k;
        const ty = Math.sin(i * 0.9 + k * 4) * 260 * k;
        const tx = -Math.cos(i * 0.6) * 160 * k;
        const ry = (i % 2 ? 32 : -32) * k;
        const rx = 18 * k;
        s.transform = `translate3d(${tx.toFixed(1)}px,${ty.toFixed(1)}px,${z.toFixed(1)}px) rotateY(${ry.toFixed(2)}deg) rotateX(${rx.toFixed(2)}deg)`;
        s.opacity = (0.15 + 0.85 * e).toFixed(3);
      }
    };
    const requestUpdate = () => { if (!raf) raf = requestAnimationFrame(update); };
    const relayout = () => { layout(); update(); };

    addEventListener('scroll', requestUpdate, { passive: true });
    addEventListener('resize', () => {
      // Phones and tablets resize a little as their toolbars slide away; only
      // re-measure for a real change, so the stage doesn't jump under a thumb.
      const w = innerWidth;
      const h = innerHeight;
      if (coarse.matches && w === lastW && Math.abs(h - lastH) < 120) return;
      lastW = w;
      lastH = h;
      relayout();
    }, { passive: true });
    [motionOK, roomy].forEach((mq) => mq.addEventListener('change', relayout));
    if (document.fonts) document.fonts.ready.then(relayout);
    addEventListener('load', relayout);
    relayout();

    // Keyboard: tabbing into the reel before it has landed jumps straight to
    // the settled strip, so focus never sits on a frame that is still flying.
    reel.addEventListener('focusin', () => {
      if (!cinematic || progress() >= 1) return;
      const settled = scrollY + stage.getBoundingClientRect().top - pinTop + travel * 0.8;
      scrollTo({ top: Math.ceil(settled), behavior: 'instant' });
    });

    const step = (dir) => reel.scrollBy({
      left: dir * reel.clientWidth * 0.5,
      behavior: motionOK.matches ? 'smooth' : 'auto',
    });
    const prev = stage.querySelector('[data-reel-prev]');
    const next = stage.querySelector('[data-reel-next]');
    if (prev) prev.addEventListener('click', () => step(-1));
    if (next) next.addEventListener('click', () => step(1));
  }
})();
