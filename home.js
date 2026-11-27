/* ==========================================================================
   NITESH DIXIT — homepage ("Maker's") behaviour. Plain JS, no dependencies.

   1. Housekeeping   clear what the case studies' page transition leaves behind
   2. Clock          Bengaluru time in the header and footer, every minute
   3. Film reel      pin + fly-in on scroll ("cinematic"), back / forward
   4. Frame viewer   <dialog>: open, previous / next, ← →, Esc, focus return
   ========================================================================== */
(function () {
  'use strict';

  /* 1. Housekeeping ---------------------------------------------------------
     transition.js on the case-study pages hands the next page a label and a
     "skip the preloader" flag. This page has neither, so drop them; otherwise
     the next case study you open would say "Returning to the index". */
  try {
    sessionStorage.removeItem('nd:pt');
    sessionStorage.removeItem('skipPreloader');
  } catch (err) { /* storage blocked */ }


  /* 2. Clock --------------------------------------------------------------- */
  const clocks = document.querySelectorAll('[data-clock]');
  if (clocks.length && window.Intl) {
    const ist = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    });
    let timer = 0;
    const tick = () => {
      const now = new Date();
      const p = {};
      ist.formatToParts(now).forEach((part) => { p[part.type] = part.value; });
      const h = Number(p.hour) % 24;
      const text = `${h % 12 || 12}:${p.minute} ${h < 12 ? 'am' : 'pm'}`; // "7:44 pm"
      const stamp = `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}+05:30`;
      clocks.forEach((el) => {
        el.textContent = text;
        el.setAttribute('datetime', stamp);
      });
      clearTimeout(timer);
      timer = setTimeout(tick, 60000 - (now.getTime() % 60000) + 50); // on the minute
    };
    tick();
    document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });
  }


  /* 3. Film reel ------------------------------------------------------------
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


  /* 4. Frame viewer -------------------------------------------------------- */
  const viewer = document.querySelector('[data-viewer]');
  const frames = Array.from(document.querySelectorAll('[data-frame]'));

  if (viewer && frames.length && typeof viewer.showModal === 'function') {
    const root = document.documentElement;
    const meta = viewer.querySelector('[data-viewer-meta]');
    const img = viewer.querySelector('[data-viewer-img]');
    const caption = viewer.querySelector('[data-viewer-caption]');
    const total = frames.length;
    let index = 0;

    const photoOf = (i) => frames[(i + total) % total].querySelector('img');

    // Warm the cache for the neighbours, so previous / next swap instantly.
    const preload = (i) => {
      const src = photoOf(i);
      const pre = new Image();
      pre.sizes = img.sizes;
      pre.srcset = src.getAttribute('srcset');
      pre.src = src.getAttribute('src');
    };

    const show = (i) => {
      index = (i + total) % total;
      const frame = frames[index];
      const photo = photoOf(index);
      meta.textContent = `Frame ${frame.dataset.n} · ${frame.dataset.light} · ${index + 1} of ${total}`;
      caption.textContent = frame.dataset.caption;
      img.alt = photo.alt;
      img.srcset = photo.getAttribute('srcset');
      img.src = photo.getAttribute('src');
      preload(index + 1);
      preload(index - 1);
    };

    const open = (i) => {
      show(i);
      root.classList.add('is-viewing');
      viewer.showModal();
    };

    frames.forEach((frame, i) => frame.addEventListener('click', () => open(i)));
    viewer.querySelector('[data-viewer-close]').addEventListener('click', () => viewer.close());
    viewer.querySelector('[data-viewer-prev]').addEventListener('click', () => show(index - 1));
    viewer.querySelector('[data-viewer-next]').addEventListener('click', () => show(index + 1));

    viewer.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
    });
    // A click on the dark scrim (not on the photo or a button) closes it too.
    viewer.addEventListener('click', (e) => { if (e.target === viewer) viewer.close(); });

    // Esc and every other way out end here: unlock the page and hand focus
    // back to the frame now on show, scrolled into view in the reel.
    viewer.addEventListener('close', () => {
      root.classList.remove('is-viewing');
      frames[index].focus();
    });
  }
})();
