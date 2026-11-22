/* ==================================================================
   Chrome — the parts of the site that stay put while routes change:
   cursor, nav readout, menu, in-page anchors. Each init takes the
   app-wide life and returns its public API.
   ================================================================== */
import { root, touch, reduced, motion } from './env.js';
import { scroll } from './scroll.js';

/* ------------------------------------------------------------------
   CURSOR — a precision reticle. The dot is pinned to the pointer; the
   ring trails it on an Animatable. data-cursor="Label" on any element
   shows a mono label beside the ring.
------------------------------------------------------------------ */
export function initCursor(life) {
  const api = { set() {}, reset() {} };
  if (touch) return api;
  const cursor = document.getElementById('cursor');
  if (!cursor) return api;
  const { createAnimatable, utils } = life.anime;
  const dot = cursor.querySelector('.cursor-dot');
  const follow = cursor.querySelector('.cursor-follow');
  const label = cursor.querySelector('.cursor-label');
  const lag = createAnimatable(follow, { x: reduced ? 0 : 420, y: reduced ? 0 : 420, ease: 'out(4)' });
  let shown = false;
  let current = null;
  let forced = null;

  life.on(window, 'pointermove', (e) => {
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

  life.on(document, 'mouseleave', () => cursor.classList.remove('is-visible'));
  life.on(document, 'mouseenter', () => { if (shown) cursor.classList.add('is-visible'); });
  life.on(window, 'pointerdown', () => cursor.classList.add('is-down'));
  life.on(window, 'pointerup', () => cursor.classList.remove('is-down'));

  const INTERACTIVE = 'a, button, [data-cursor], label, summary, input, textarea, select, [role="button"]';
  function apply(el) {
    const text = forced != null ? forced : el && el.getAttribute('data-cursor');
    cursor.classList.toggle('is-hover', !!el || forced != null);
    cursor.classList.toggle('has-label', !!text);
    label.textContent = text || '';
  }
  life.on(document, 'mouseover', (e) => {
    const el = e.target.closest ? e.target.closest(INTERACTIVE) : null;
    if (el === current) return;
    current = el;
    apply(el);
  });

  api.set = (text) => { forced = text; apply(current); };
  api.reset = () => {
    forced = null;
    // The element under the pointer may have left with the last page.
    if (current && !current.isConnected) current = null;
    apply(current);
  };
  return api;
}

/* ------------------------------------------------------------------
   NAV — section readout (index + name roll), page-progress gauge,
   scrim once scrolled, ink colours over paper sections. refresh()
   re-reads the page, so each route calls it once it has mounted.
------------------------------------------------------------------ */
export function initNav(life, helpers) {
  const { animate } = life.anime;
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
    helpers.odometer(idxEl, { value: index, duration: 900, turns: 0, stagger: 40 });
  }

  // The section crossing the middle of the viewport owns the readout.
  const visible = new Map();
  const sectionIO = new life.IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visible.set(entry.target, entry);
      else visible.delete(entry.target);
    });
    const el = [...visible.keys()].filter((s) => s.isConnected).pop();
    if (el) set(el.dataset.index || '', el.dataset.section || '');
  }, { rootMargin: '-49% 0px -49% 0px' });

  // Paper sections under the nav switch it to ink. A section that only
  // touches the band's edge doesn't count; the tiny second threshold
  // makes the step from touching to overlapping report too.
  const paperUnder = new Set();
  const paperIO = new life.IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRect.height > 0) paperUnder.add(entry.target);
      else paperUnder.delete(entry.target);
    });
    root.classList.toggle('nav-paper', paperUnder.size > 0);
  }, { rootMargin: '0px 0px -93% 0px', threshold: [0, 1e-6] });

  function refresh() {
    sectionIO.disconnect();
    visible.clear();
    document.querySelectorAll('[data-section]').forEach((el) => {
      if (!el.hidden) sectionIO.observe(el);
    });
    paperIO.disconnect();
    paperUnder.clear();
    root.classList.remove('nav-paper');
    document.querySelectorAll('[data-theme="paper"]').forEach((el) => paperIO.observe(el));
  }

  // Page progress + scrim.
  let ticking = false;
  const update = () => {
    ticking = false;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const y = scroll.y;
    root.style.setProperty('--page-p', Math.min(1, Math.max(0, y / max)).toFixed(4));
    root.classList.toggle('is-scrolled', y > 24);
  };
  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  };
  life.add(scroll.on(onScroll));
  update();

  return { refresh, set, update };
}

/* ------------------------------------------------------------------
   MENU — slats close in like a grille, then the index rises.
------------------------------------------------------------------ */
export function initMenu(life) {
  const api = { open() {}, close() {}, get isOpen() { return false; } };
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');
  if (!btn || !menu) return api;
  const { createTimeline, stagger, utils } = life.anime;
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

  function setOpen(next, opts = {}) {
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
      // Leaving for another page: the shutter owns scrolling from here.
      if (!opts.keepScrollStopped) scroll.start();
      if (reduced) {
        finishClose();
      } else {
        tl = createTimeline({ onComplete: finishClose })
          .add([...names], { translateY: ['0%', '-105%'], duration: 520, ease: 'in(3)', delay: stagger(30) }, 0)
          .add([...quiet, ...rows], { opacity: 0, duration: 380, ease: 'out(2)' }, 0)
          .add(slats, { scaleY: [1.04, 0], duration: 680, ease: motion.ease.inOut, delay: stagger(40, { from: 'last' }) }, 260);
      }
      if (lastFocus && lastFocus.focus && lastFocus.isConnected) lastFocus.focus({ preventScroll: true });
    }
  }

  life.on(btn, 'click', () => setOpen(!open));
  life.on(document, 'keydown', (e) => {
    if (e.key === 'Escape' && open) setOpen(false);
  });

  api.open = () => setOpen(true);
  api.close = (opts) => setOpen(false, opts);
  Object.defineProperty(api, 'isOpen', { get: () => open });
  return api;
}

/* ------------------------------------------------------------------
   IN-PAGE ANCHORS — smooth, and they close the menu first.
------------------------------------------------------------------ */
export function initAnchors(life, menu) {
  life.on(document, 'click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute('href');
    let target = null;
    if (hash === '#top') target = 0;
    else if (hash.length > 1) {
      try { target = document.querySelector(hash); } catch (err) { target = null; }
    }
    if (target === null) return;
    e.preventDefault();
    const go = () => scroll.to(target, { duration: 1.8 });
    if (menu.isOpen) {
      menu.close();
      setTimeout(go, reduced ? 0 : 520);
    } else {
      go();
    }
  });
}
