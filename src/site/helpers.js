/* ==================================================================
   Motion helpers — reveals, rulers, odometers, sheen, line splits,
   fit. createHelpers(life) binds a set to one lifetime: the app chrome
   gets one that lives forever, each page gets its own, so whatever a
   page starts goes away with it.

     observe(el, fn)       run fn once when el enters the viewport
     splitLines(el)        line split with clip masks (async-safe)
     odometer(el, o)       rolls digits like a mechanical odometer
     sheen(el, o)          one pass of studio light over lettering
     fit(el)               fit one line of text to its container
     reveal(el, type)      scroll-triggered reveal (see data-reveal)
     reveals(scope)        arm any new [data-reveal] elements
     rules(scope)          arm any new [data-rule] dividers
   ================================================================== */
import { motion, reduced } from './env.js';

export function createHelpers(life) {
  const { animate, stagger, splitText, onScroll, utils } = life.anime;

  /* ------------------------------------------------------------------
     VIEWPORT OBSERVER — IntersectionObserver respects transforms, so
     this also works inside the horizontally panned showroom.
  ------------------------------------------------------------------ */
  const pending = new Map();
  const io = new life.IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const fns = pending.get(entry.target);
      if (!fns) return;
      pending.delete(entry.target);
      io.unobserve(entry.target);
      fns.forEach((fn) => fn(entry.target));
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });
  life.add(() => pending.clear());

  function observe(el, fn) {
    if (!el) return;
    if (!pending.has(el)) pending.set(el, []);
    pending.get(el).push(fn);
    io.observe(el);
  }

  /* ------------------------------------------------------------------
     LINE SPLITTING — Anime's splitText works once fonts are ready, so
     lines arrive asynchronously. splitLines() hides them as soon as
     they exist and plays them whenever play() is called — before or
     after the split lands.
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
     ODOMETER — digits roll on drums; the right-most drum spins the
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
     SHEEN — one pass of studio light across lettering. The element
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
     FIT — size one line of text to the width of its parent.
  ------------------------------------------------------------------ */
  const fitted = new Set();
  function fit(el) {
    if (!el) return;
    fitted.add(el);
    const parent = el.parentElement;
    el.style.fontSize = '100px';
    const w = el.scrollWidth;
    const cs = getComputedStyle(parent);
    const target = parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    if (w > 0) el.style.fontSize = `${(100 * target) / w}px`;
  }
  let fitTimer;
  life.on(window, 'resize', () => {
    clearTimeout(fitTimer);
    fitTimer = life.timeout(() => fitted.forEach(fit), 150);
  });
  life.add(() => fitted.clear());

  /* ------------------------------------------------------------------
     REVEALS — declarative: data-reveal="up|fade|lines|scan|sheen|stagger"
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
     RULES — draw the ruler on arrival, roll the index, and let the
     redline fill report how far through its section the reader is.
     data-rule-track="#id" picks the tracked element (default: the
     closest section/footer); data-rule-progress="manual" opts out so
     a page can drive --p itself.
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

  return { observe, splitLines, odometer, sheen, fit, reveal, reveals, rules };
}
