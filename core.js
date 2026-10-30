/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · core
   Shared runtime for every page, built on Anime.js v4 + Lenis.
   Loaded after the two libraries and before any page script.

   Exposes window.Site:
     Site.anime            the Anime.js namespace
     Site.motion           { ease, dur } — the house motion tokens
     Site.reduced / touch  user + device preferences
     Site.returning        true when the home page is entered from a
                           case study (the shutter is closed already)
     Site.scroll           { y, to(), stop(), start(), on() } — Lenis
                           when available, native scroll otherwise
     Site.on / emit / when tiny event bus; 'intro:done' is sticky
     Site.reveal(el, type) scroll-triggered reveal (see data-reveal)
     Site.observe(el, fn)  run fn once when el enters the viewport
     Site.splitLines(el)   line split with clip masks (async-safe)
     Site.odometer(el, o)  rolls digits like a mechanical odometer
     Site.sheen(el, o)     one pass of studio light over lettering
     Site.fit(el)          fit one line of text to its container
     Site.cursor           { set(label), reset() }
     Site.nav              { refresh(), set(index, name) }
     Site.menu             { open(), close(), isOpen }
     Site.rules(scope)     arm any new [data-rule] dividers
     Site.reveals(scope)   arm any new [data-reveal] elements
   ================================================================== */

(function () {
  const A = window.anime;
  const { animate, createTimeline, createAnimatable, stagger, splitText, onScroll, utils, cubicBezier } = A;
  const root = document.documentElement;

  const touch = window.matchMedia('(hover: none)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced) root.classList.add('is-reduced');
  if (!touch) root.classList.add('has-cursor');

  /* ------------------------------------------------------------------
     0. MOTION TOKENS — mechanical, weighted, never bouncy.
  ------------------------------------------------------------------ */
  const motion = {
    ease: {
      out: 'outExpo',                         // reveals: fast start, long settle
      inOut: cubicBezier(0.76, 0, 0.24, 1),   // shutters, wipes, sweeps
      soft: 'out(3)',                         // UI response
      roll: cubicBezier(0.65, 0, 0.15, 1),    // odometer drums
      linear: 'linear',
    },
    dur: { xs: 300, s: 600, m: 900, l: 1300, xl: 1800 },
  };

  /* ------------------------------------------------------------------
     1. EVENT BUS — 'intro:done' is sticky: late listeners still run.
  ------------------------------------------------------------------ */
  const handlers = new Map();
  const sticky = new Map();
  const STICKY = new Set(['intro:done']);

  function on(name, fn) {
    if (!handlers.has(name)) handlers.set(name, new Set());
    handlers.get(name).add(fn);
    if (sticky.has(name)) fn(sticky.get(name));
    return () => handlers.get(name).delete(fn);
  }
  function emit(name, detail) {
    if (STICKY.has(name)) {
      if (sticky.has(name)) return;
      sticky.set(name, detail);
    }
    (handlers.get(name) || []).forEach((fn) => fn(detail));
  }
  const when = (name) => new Promise((resolve) => on(name, resolve));

  /* ------------------------------------------------------------------
     2. SCROLL — Lenis on capable devices, native when motion is reduced.
  ------------------------------------------------------------------ */
  let lenis = null;
  if (!reduced && typeof window.Lenis === 'function') {
    lenis = new window.Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    window.lenis = lenis;
  }

  function resolveY(target, offset) {
    if (typeof target === 'number') return target + offset;
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return null;
    return el.getBoundingClientRect().top + window.scrollY + offset;
  }

  const scroll = {
    get y() { return lenis ? lenis.scroll : window.scrollY; },
    get lenis() { return lenis; },
    to(target, opts = {}) {
      const offset = opts.offset || 0;
      if (lenis) {
        lenis.scrollTo(typeof target === 'string' ? document.querySelector(target) : target, {
          offset,
          duration: opts.duration || 1.6,
          immediate: !!opts.immediate,
          force: true,
          onComplete: opts.onComplete,
        });
        return;
      }
      const y = resolveY(target, offset);
      if (y === null) return;
      window.scrollTo({ top: y, behavior: reduced || opts.immediate ? 'auto' : 'smooth' });
      if (opts.onComplete) setTimeout(opts.onComplete, reduced || opts.immediate ? 0 : 700);
    },
    stop() {
      if (lenis) lenis.stop();
      else root.classList.add('is-scroll-locked');
    },
    start() {
      if (lenis) lenis.start();
      else root.classList.remove('is-scroll-locked');
    },
    on(fn) {
      if (lenis) lenis.on('scroll', fn);
      else window.addEventListener('scroll', fn, { passive: true });
    },
  };

  /* ------------------------------------------------------------------
     3. VIEWPORT OBSERVER — run a callback once an element shows up.
        IntersectionObserver respects transforms, so this also works
        inside the horizontally panned showroom.
  ------------------------------------------------------------------ */
  const pending = new Map();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const fns = pending.get(entry.target);
      if (!fns) return;
      pending.delete(entry.target);
      io.unobserve(entry.target);
      fns.forEach((fn) => fn(entry.target));
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });

  function observe(el, fn) {
    if (!el) return;
    if (!pending.has(el)) pending.set(el, []);
    pending.get(el).push(fn);
    io.observe(el);
  }

  /* ------------------------------------------------------------------
     4. LINE SPLITTING — Anime's splitText works once fonts are ready,
        so lines arrive asynchronously. splitLines() hides them as soon
        as they exist and plays them whenever play() is called — before
        or after the split lands.
  ------------------------------------------------------------------ */
  function splitLines(el, opts = {}) {
    const state = { lines: [], played: false, playOpts: null, readyFns: [] };
    const split = splitText(el, { lines: { wrap: 'clip' } });

    function run(lines, o) {
      return animate(lines, {
        translateY: ['104%', '0%'],
        duration: o.duration || 1300,
        delay: stagger(o.stagger || 90, { start: o.delay || 0 }),
        ease: o.ease || motion.ease.out,
        onComplete: o.onComplete,
      });
    }

    split.addEffect((self) => {
      state.lines = self.lines;
      if (!state.played) {
        utils.set(self.lines, { translateY: '104%' });
      } else if (state.playOpts) {
        const o = state.playOpts;
        state.playOpts = null;
        run(self.lines, o);
      }
      state.readyFns.splice(0).forEach((fn) => fn(self.lines));
    });

    return {
      split,
      get lines() { return state.lines; },
      ready: new Promise((resolve) => {
        if (split.ready && state.lines.length) resolve(state.lines);
        else state.readyFns.push(resolve);
      }),
      play(o = {}) {
        if (state.played) return null;
        state.played = true;
        const merged = Object.assign({}, opts, o);
        if (reduced) {
          if (state.lines.length) utils.set(state.lines, { translateY: '0%' });
          return null;
        }
        if (state.lines.length) return run(state.lines, merged);
        state.playOpts = merged;
        return null;
      },
    };
  }

  /* ------------------------------------------------------------------
     5. ODOMETER — digits roll on drums; the right-most drum spins the
        most, like the real thing. Non-digits stay put.
  ------------------------------------------------------------------ */
  function odometer(el, opts = {}) {
    if (!el) return null;
    const text = opts.value != null ? String(opts.value) : (el.dataset.odo || el.textContent.trim());
    el.dataset.odo = text;
    const turns = opts.turns == null ? 1 : opts.turns;
    const digits = [...text].filter((c) => /\d/.test(c)).length;

    el.classList.add('odo');
    el.innerHTML = '';
    const sr = document.createElement('span');
    sr.className = 'sr-only';
    sr.textContent = text;
    el.appendChild(sr);

    const strips = [];
    let digitIndex = 0;
    [...text].forEach((ch) => {
      if (!/\d/.test(ch)) {
        const s = document.createElement('span');
        s.className = 'odo-static';
        s.setAttribute('aria-hidden', 'true');
        s.textContent = ch;
        el.appendChild(s);
        return;
      }
      const fromRight = digits - 1 - digitIndex;
      digitIndex += 1;
      const spins = turns + (fromRight === 0 ? 1 : 0);
      const col = document.createElement('span');
      col.className = 'odo-col';
      col.setAttribute('aria-hidden', 'true');
      const strip = document.createElement('span');
      strip.className = 'odo-strip';
      const count = (spins + 1) * 10;
      for (let i = 0; i < count; i++) {
        const d = document.createElement('span');
        d.textContent = i % 10;
        strip.appendChild(d);
      }
      strip.dataset.target = String(spins * 10 + Number(ch));
      strip.dataset.count = String(count);
      col.appendChild(strip);
      el.appendChild(col);
      strips.push(strip);
    });

    const pct = (s) => `${-(Number(s.dataset.target) / Number(s.dataset.count)) * 100}%`;
    // No digits (e.g. "—"): nothing to roll.
    if (reduced || opts.immediate || !strips.length) {
      strips.forEach((s) => utils.set(s, { translateY: pct(s) }));
      return null;
    }
    return animate(strips, {
      translateY: (s) => ['0%', pct(s)],
      duration: opts.duration || 1800,
      delay: stagger(opts.stagger == null ? 70 : opts.stagger, { start: opts.delay || 0, reversed: true }),
      ease: opts.ease || motion.ease.roll,
    });
  }

  /* ------------------------------------------------------------------
     6. SHEEN — one pass of studio light across lettering. The element
        must hold plain text (see style.css).
  ------------------------------------------------------------------ */
  function sheen(el, opts = {}) {
    if (!el || reduced) return null;
    el.classList.add('sheen');
    return animate(el, {
      '--sheen': [0, 1],
      duration: opts.duration || 1900,
      delay: opts.delay || 0,
      ease: motion.ease.inOut,
    });
  }

  /* ------------------------------------------------------------------
     7. FIT — size one line of text to the width of its parent.
  ------------------------------------------------------------------ */
  const fitted = new Set();
  function fit(el) {
    if (!el) return;
    fitted.add(el);
    const parent = el.parentElement;
    el.style.fontSize = '100px';
    const w = el.scrollWidth;
    const target = parent.clientWidth - parseFloat(getComputedStyle(parent).paddingLeft) - parseFloat(getComputedStyle(parent).paddingRight);
    if (w > 0) el.style.fontSize = `${(100 * target) / w}px`;
  }
  let fitTimer;
  window.addEventListener('resize', () => {
    clearTimeout(fitTimer);
    fitTimer = setTimeout(() => fitted.forEach(fit), 150);
  });

  /* ------------------------------------------------------------------
     8. REVEALS — declarative: data-reveal="up|fade|lines|scan|sheen|stagger"
        with optional data-reveal-delay="ms". Don't put data-reveal on
        anything you also animate yourself.
  ------------------------------------------------------------------ */
  function reveal(el, type, opts = {}) {
    const delay = opts.delay != null ? opts.delay : Number(el.dataset.revealDelay || 0);
    type = type || el.dataset.reveal || 'up';
    if (reduced) {
      el.classList.add('is-revealed');
      return;
    }
    if (type === 'lines') {
      const lines = splitLines(el);
      observe(el, () => lines.play({ delay }));
    } else if (type === 'scan') {
      utils.set(el, { '--scan': 0 });
      observe(el, () => animate(el, { '--scan': [0, 1], duration: opts.duration || 1500, delay, ease: motion.ease.inOut }));
    } else if (type === 'sheen') {
      el.classList.add('sheen');
      utils.set(el, { '--sheen': 0 });
      observe(el, () => sheen(el, { delay, duration: opts.duration }));
    } else if (type === 'fade') {
      utils.set(el, { opacity: 0 });
      observe(el, () => animate(el, { opacity: [0, 1], duration: opts.duration || 1200, delay, ease: 'out(2)' }));
    } else if (type === 'stagger') {
      const kids = el.querySelectorAll(':scope > *');
      utils.set(kids, { opacity: 0, translateY: 24 });
      observe(el, () => animate(kids, {
        opacity: [0, 1],
        translateY: [24, 0],
        duration: opts.duration || 1100,
        delay: stagger(opts.stagger || 80, { start: delay }),
        ease: motion.ease.out,
      }));
    } else {
      utils.set(el, { opacity: 0, translateY: 28 });
      observe(el, () => animate(el, { opacity: [0, 1], translateY: [28, 0], duration: opts.duration || 1200, delay, ease: motion.ease.out }));
    }
    el.classList.add('is-revealed');
  }

  function reveals(scope = document) {
    scope.querySelectorAll('[data-reveal]:not([data-reveal-ready])').forEach((el) => {
      el.setAttribute('data-reveal-ready', '');
      reveal(el);
    });
  }

  /* ------------------------------------------------------------------
     9. RULES — draw the ruler on arrival, roll the index, and let the
        redline fill report how far through its section the reader is.
        data-rule-track="#id" picks the tracked element (default: the
        closest section/footer); data-rule-progress="manual" opts out
        so a page can drive --p itself.
  ------------------------------------------------------------------ */
  function rules(scope = document) {
    scope.querySelectorAll('[data-rule]:not([data-rule-ready])').forEach((rule) => {
      rule.setAttribute('data-rule-ready', '');
      const line = rule.querySelector('.rule-line');
      const index = rule.querySelector('.rule-index');

      if (!reduced && line) utils.set(line, { scaleX: 0 });
      observe(rule, () => {
        if (!reduced && line) animate(line, { scaleX: [0, 1], duration: 1700, ease: motion.ease.inOut });
        if (index && /\d/.test(index.textContent)) odometer(index, { duration: 1500, turns: 1 });
      });

      if (rule.dataset.ruleProgress === 'manual') return;
      const track = rule.dataset.ruleTrack
        ? document.querySelector(rule.dataset.ruleTrack)
        : rule.closest('section, footer, [data-section]');
      if (!track) return;
      animate(rule, {
        '--p': [0, 1],
        ease: 'linear',
        autoplay: onScroll({ target: track, enter: 'bottom top', leave: 'top bottom', sync: true }),
      });
    });
  }

  /* ------------------------------------------------------------------
     10. CURSOR — a precision reticle. The dot is pinned to the pointer;
         the ring trails it on an Animatable. data-cursor="Label" on any
         element shows a mono label beside the ring.
  ------------------------------------------------------------------ */
  const cursorApi = { set() {}, reset() {} };
  function initCursor() {
    if (touch) return;
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    const dot = cursor.querySelector('.cursor-dot');
    const follow = cursor.querySelector('.cursor-follow');
    const label = cursor.querySelector('.cursor-label');
    const lag = createAnimatable(follow, { x: reduced ? 0 : 420, y: reduced ? 0 : 420, ease: 'out(4)' });
    let shown = false;
    let current = null;
    let forced = null;

    window.addEventListener('pointermove', (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      if (!shown) {
        shown = true;
        cursor.classList.add('is-visible');
        utils.set(follow, { x: e.clientX, y: e.clientY });
      }
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      lag.x(e.clientX);
      lag.y(e.clientY);
      cursor.classList.toggle('is-flip', e.clientX > window.innerWidth - 180);
    }, { passive: true });

    document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
    document.addEventListener('mouseenter', () => { if (shown) cursor.classList.add('is-visible'); });
    window.addEventListener('pointerdown', () => cursor.classList.add('is-down'));
    window.addEventListener('pointerup', () => cursor.classList.remove('is-down'));

    const INTERACTIVE = 'a, button, [data-cursor], label, summary, input, textarea, select, [role="button"]';
    function apply(el) {
      const text = forced != null ? forced : el && el.getAttribute('data-cursor');
      cursor.classList.toggle('is-hover', !!el || forced != null);
      cursor.classList.toggle('has-label', !!text);
      label.textContent = text || '';
    }
    document.addEventListener('mouseover', (e) => {
      const el = e.target.closest ? e.target.closest(INTERACTIVE) : null;
      if (el === current) return;
      current = el;
      apply(el);
    });

    cursorApi.set = (text) => { forced = text; apply(current); };
    cursorApi.reset = () => { forced = null; apply(current); };
  }

  /* ------------------------------------------------------------------
     11. NAV — section readout (index + name roll), page-progress gauge,
         scrim once scrolled, ink colours over paper sections.
  ------------------------------------------------------------------ */
  const navApi = { refresh() {}, set() {} };
  function initNav() {
    const readout = document.querySelector('.nav-readout');
    const idxEl = readout && readout.querySelector('.nav-readout-index');
    const nameEl = readout && readout.querySelector('.nav-readout-name');
    let currentKey = null;

    function set(index, name) {
      if (!readout) return;
      const key = `${index}|${name}`;
      if (key === currentKey) return;
      const first = currentKey === null;
      currentKey = key;

      const next = document.createElement('span');
      next.textContent = name;
      const old = nameEl.querySelectorAll('span');
      nameEl.appendChild(next);
      if (reduced || first) {
        old.forEach((s) => s.remove());
        idxEl.textContent = index;
        return;
      }
      animate(old, { translateY: ['0%', '-110%'], duration: 600, ease: motion.ease.inOut, onComplete: () => old.forEach((s) => s.remove()) });
      animate(next, { translateY: ['110%', '0%'], duration: 700, ease: motion.ease.inOut });
      odometer(idxEl, { value: index, duration: 900, turns: 0, stagger: 40 });
    }

    // The section crossing the middle of the viewport owns the readout.
    let sectionIO = null;
    const visible = new Map();
    function refresh() {
      if (sectionIO) sectionIO.disconnect();
      visible.clear();
      sectionIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target, entry);
          else visible.delete(entry.target);
        });
        const el = [...visible.keys()].pop();
        if (el) set(el.dataset.index || '', el.dataset.section || '');
      }, { rootMargin: '-49% 0px -49% 0px' });
      document.querySelectorAll('[data-section]').forEach((el) => {
        if (!el.hidden) sectionIO.observe(el);
      });
    }
    refresh();

    // Paper sections under the nav switch it to ink. A section that only
    // touches the band's edge doesn't count; the tiny second threshold makes
    // the step from touching to overlapping report too.
    const paperUnder = new Set();
    const paperIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRect.height > 0) paperUnder.add(entry.target);
        else paperUnder.delete(entry.target);
      });
      root.classList.toggle('nav-paper', paperUnder.size > 0);
    }, { rootMargin: '0px 0px -93% 0px', threshold: [0, 1e-6] });
    document.querySelectorAll('[data-theme="paper"]').forEach((el) => paperIO.observe(el));

    // Page progress + scrim.
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const y = scroll.y;
      root.style.setProperty('--page-p', Math.min(1, Math.max(0, y / max)).toFixed(4));
      root.classList.toggle('is-scrolled', y > 24);
    };
    scroll.on(() => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    });
    update();

    navApi.refresh = refresh;
    navApi.set = set;
  }

  /* ------------------------------------------------------------------
     12. MENU — slats close in like a grille, then the index rises.
  ------------------------------------------------------------------ */
  const menuApi = { open() {}, close() {}, get isOpen() { return false; } };
  function initMenu() {
    const btn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    if (!btn || !menu) return;
    const slats = menu.querySelectorAll('.menu-slats i');
    const names = menu.querySelectorAll('.menu-name > span');
    const quiet = menu.querySelectorAll('.menu-num, .menu-meta, .menu-rule, .menu-spec .spec-row');
    const rows = menu.querySelectorAll('.menu-list li');
    let open = false;
    let lastFocus = null;
    let tl = null;

    menu.inert = true;

    function finishClose() {
      menu.classList.remove('is-open');
      menu.inert = true;
    }

    function setOpen(next) {
      if (next === open) return;
      open = next;
      btn.setAttribute('aria-expanded', String(open));
      root.classList.toggle('menu-open', open);
      if (tl) tl.pause();

      if (open) {
        lastFocus = document.activeElement;
        menu.classList.add('is-open');
        menu.inert = false;
        scroll.stop();
        if (reduced) {
          utils.set(slats, { scaleY: 1.04 });
          utils.set(names, { translateY: '0%' });
          utils.set([...quiet, ...rows], { opacity: 1 });
        } else {
          utils.set(rows, { opacity: 0 });
          utils.set(quiet, { opacity: 0 });
          utils.set(names, { translateY: '105%' });
          tl = createTimeline()
            .add(slats, { scaleY: [0, 1.04], duration: 760, ease: motion.ease.inOut, delay: stagger(45) }, 0)
            .add(rows, { opacity: [0, 1], duration: 500, ease: 'out(2)', delay: stagger(40) }, 380)
            .add(names, { translateY: ['105%', '0%'], duration: 1100, ease: motion.ease.out, delay: stagger(70) }, 420)
            .add(quiet, { opacity: [0, 1], duration: 700, ease: 'out(2)', delay: stagger(25) }, 600);
        }
        const first = menu.querySelector('.menu-link');
        if (first) setTimeout(() => first.focus({ preventScroll: true }), reduced ? 0 : 450);
      } else {
        scroll.start();
        if (reduced) {
          finishClose();
        } else {
          tl = createTimeline({ onComplete: finishClose })
            .add([...names], { translateY: ['0%', '-105%'], duration: 520, ease: 'in(3)', delay: stagger(30) }, 0)
            .add([...quiet, ...rows], { opacity: 0, duration: 380, ease: 'out(2)' }, 0)
            .add(slats, { scaleY: [1.04, 0], duration: 680, ease: motion.ease.inOut, delay: stagger(40, { from: 'last' }) }, 260);
        }
        if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
      }
    }

    btn.addEventListener('click', () => setOpen(!open));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    });

    menuApi.open = () => setOpen(true);
    menuApi.close = () => setOpen(false);
    Object.defineProperty(menuApi, 'isOpen', { get: () => open });
  }

  /* ------------------------------------------------------------------
     13. IN-PAGE ANCHORS — smooth, and they close the menu first.
  ------------------------------------------------------------------ */
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute('href');
    const target = hash === '#top' ? 0 : hash.length > 1 ? document.querySelector(hash) : null;
    if (target === null) return;
    e.preventDefault();
    const go = () => scroll.to(target, { duration: 1.8 });
    if (menuApi.isOpen) {
      menuApi.close();
      setTimeout(go, reduced ? 0 : 520);
    } else {
      go();
    }
  });

  /* ------------------------------------------------------------------
     14. SMALL CHROME — year, local time.
  ------------------------------------------------------------------ */
  document.querySelectorAll('#year, [data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
  const clocks = document.querySelectorAll('[data-clock]');
  if (clocks.length) {
    const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' });
    const tick = () => clocks.forEach((el) => { el.textContent = fmt.format(new Date()); });
    tick();
    setInterval(tick, 15000);
  }

  /* ------------------------------------------------------------------
     15. PUBLIC API + BOOT
  ------------------------------------------------------------------ */
  const Site = {
    anime: A,
    motion,
    reduced,
    touch,
    returning: root.classList.contains('is-returning'),
    scroll,
    on,
    emit,
    when,
    observe,
    reveal,
    reveals,
    rules,
    splitLines,
    odometer,
    sheen,
    fit,
    cursor: cursorApi,
    nav: navApi,
    menu: menuApi,
  };
  window.Site = Site;

  initCursor();
  initMenu();
  initNav();
  reveals();
  rules();

  // Footer sign-off: fit the wordmark to the page and pass light over it.
  const mark = document.querySelector('[data-fit]');
  if (mark) {
    const doFit = () => fit(mark);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(doFit);
    doFit();
    if (!reduced) {
      utils.set(mark, { '--sheen': 0 });
      mark.classList.add('sheen');
      observe(mark, () => sheen(mark, { duration: 2600, delay: 200 }));
    }
  }

  // After the intro (preloader or shutter), honour a #hash in the URL.
  on('intro:done', () => {
    if (!window.location.hash || window.location.hash.length < 2) return;
    let target = null;
    try { target = document.querySelector(window.location.hash); } catch (err) { target = null; }
    if (target) setTimeout(() => scroll.to(target, { duration: 1.6 }), 80);
  });

  // Safety net: never leave a visitor behind a stuck cover.
  setTimeout(() => {
    if (sticky.has('intro:done')) return;
    const pre = document.querySelector('.preloader');
    if (pre) pre.style.display = 'none';
    const pt = document.getElementById('pageTransition');
    if (pt) {
      pt.classList.remove('is-covering', 'is-active');
      pt.style.display = 'none';
    }
    root.classList.remove('is-returning', 'is-transitioning');
    scroll.start();
    emit('intro:done', { forced: true });
  }, 9000);
})();
