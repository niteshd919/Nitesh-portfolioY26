/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · runtime
   Built on Anime.js v4 + Lenis. Two lifetimes:

   1. The app (ensureRuntime) — cursor, nav, menu, shutter, anchors,
      smooth scroll. Started once, against the chrome React renders.

   2. A page (mountPage) — every route gets its own Site facade. Page
      scripts receive it as their only argument and use it exactly
      like the old window.Site:

        Site.anime            the Anime.js namespace (tracked)
        Site.motion           { ease, dur } — the house motion tokens
        Site.reduced / touch  user + device preferences
        Site.returning        true unless this is the first page of
                              the visit (the shutter may be closed)
        Site.scroll           { y, to(), stop(), start(), on() }
        Site.on / emit / when tiny event bus; 'intro:done' is sticky
        Site.reveal / reveals / rules / observe / splitLines /
        Site.odometer / sheen / fit           (see helpers.js)
        Site.cursor / nav / menu / transition (the app chrome)
        Site.life             listeners, timers, observers (life.js)
        Site.slug             the route's case-study slug, if any

      Whatever a page starts through its facade stops when the route
      changes.
   ================================================================== */
import { root, touch, reduced, motion } from './env.js';
import * as bus from './bus.js';
import { scroll, startLenis } from './scroll.js';
import { createLife } from './life.js';
import { createHelpers } from './helpers.js';
import { initCursor, initNav, initMenu, initAnchors } from './chrome.js';
import { initTransition } from './transition.js';

let app = null;
let navigateFn = (url) => { window.location.href = url; };
let pagesMounted = 0;
const scrollMemory = new Map();

/** The router hands its navigate() over so the shutter can drive it. */
export function setNavigate(fn) {
  navigateFn = fn;
}

function shutterClosed() {
  const pt = document.getElementById('pageTransition');
  return !!pt && (pt.classList.contains('is-covering') || root.classList.contains('is-returning'));
}

/** True while no page has mounted yet and the visit opens on the index:
    only then does the home page run its ignition preloader. */
export function isFirstVisitPage() {
  return pagesMounted === 0 && !shutterClosed();
}

function when(name, subscribe) {
  return new Promise((resolve) => {
    let off = null;
    let done = false;
    off = subscribe(name, (detail) => {
      done = true;
      if (off) off();
      resolve(detail);
    });
    if (done && off) off();
  });
}

/** Start the app-wide runtime (idempotent). Needs the chrome in the DOM. */
export function ensureRuntime() {
  if (app) return app.Site;
  if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  if (reduced) root.classList.add('is-reduced');
  if (!touch) root.classList.add('has-cursor');

  const life = createLife();
  startLenis();
  const helpers = createHelpers(life);
  const cursor = initCursor(life);
  const menu = initMenu(life);
  const nav = initNav(life, helpers);
  initAnchors(life, menu);
  const transition = initTransition(life, { navigate: (url) => navigateFn(url), menu });

  const Site = {
    anime: life.anime,
    motion,
    reduced,
    touch,
    scroll,
    on: bus.on,
    emit: bus.emit,
    when: (name) => when(name, bus.on),
    ...helpers,
    cursor,
    nav,
    menu,
    transition,
  };
  app = { life, Site };
  // Handy from the console and for screenshot tooling.
  window.Site = Site;
  return Site;
}

// A promise that never settles: chains hanging off a disposed page stop.
const NEVER = () => new Promise(() => {});

const CHROME_CLASSES = new Set([
  'js', 'has-cursor', 'is-reduced', 'is-transitioning', 'is-returning', 'menu-open',
  'is-scrolled', 'nav-paper', 'is-scroll-locked',
]);
const CHROME_PROPS = new Set(['--page-p']);

/**
 * Mount one page: build its Site facade, arm the shared reveals, run
 * the page script, and return the function that undoes all of it.
 */
export function mountPage({ el, init, slug = null, navigationType = 'PUSH', locationKey = '' }) {
  const Global = ensureRuntime();
  bus.reset('intro:done');

  const life = createLife();
  const helpers = createHelpers(life);
  // Returning = not the opening page of the visit, or arriving behind a
  // closed shutter (e.g. an unknown URL redirected home).
  const returning = pagesMounted > 0 || shutterClosed();
  pagesMounted += 1;

  // Whatever the page adds to <html> (classes, custom properties) leaves with it.
  const classesBefore = new Set(root.classList);
  const propsBefore = new Set([...root.style].filter((p) => p.startsWith('--')));

  const Site = {
    anime: life.anime,
    motion,
    reduced,
    touch,
    returning,
    scroll: {
      get y() { return scroll.y; },
      get lenis() { return scroll.lenis; },
      to: scroll.to,
      stop: scroll.stop,
      start: scroll.start,
      resize: scroll.resize,
      on: (fn) => life.add(scroll.on(fn)),
    },
    on: (name, fn) => life.add(bus.on(name, fn)),
    // A page that has left can't speak for the next one: late promises
    // (fonts, image decodes) neither emit nor touch the shutter.
    emit: (name, detail) => { if (!life.disposed) bus.emit(name, detail); },
    when: (name) => when(name, (n, fn) => life.add(bus.on(n, fn))),
    ...helpers,
    cursor: {
      set: (text) => { if (!life.disposed) Global.cursor.set(text); },
      reset: () => Global.cursor.reset(),
    },
    nav: {
      refresh: () => { if (!life.disposed) Global.nav.refresh(); },
      set: (index, name) => { if (!life.disposed) Global.nav.set(index, name); },
      update: () => Global.nav.update(),
    },
    menu: Global.menu,
    transition: {
      go: (url, opts) => Global.transition.go(url, opts),
      cover: (opts) => (life.disposed ? NEVER() : Global.transition.cover(opts)),
      reveal: () => (life.disposed ? NEVER() : Global.transition.reveal()),
      setLabel: (t, e) => { if (!life.disposed) Global.transition.setLabel(t, e); },
    },
    life,
    slug,
    page: el,
  };

  // Every route starts at the top (or where Back left it, below).
  window.scrollTo(0, 0);
  scroll.to(0, { immediate: true });
  scroll.resize();

  // The shared, declarative part of every page.
  helpers.reveals(el);
  helpers.rules(el);

  // Footer sign-off: fit the wordmark to the page and pass light over it.
  const mark = el.querySelector('[data-fit]');
  if (mark) {
    const doFit = () => helpers.fit(mark);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!life.disposed) doFit(); });
    doFit();
    if (!reduced) {
      life.anime.utils.set(mark, { '--sheen': 0 });
      mark.classList.add('sheen');
      helpers.observe(mark, () => helpers.sheen(mark, { duration: 2600, delay: 200 }));
    }
  }

  // After the intro (preloader or shutter): honour a #hash, or put the
  // reader back where they were when they come back with Back/Forward.
  const remembered = navigationType === 'POP' ? scrollMemory.get(locationKey) : undefined;
  Site.on('intro:done', () => {
    if (remembered != null) return;
    const { hash } = window.location;
    if (!hash || hash.length < 2) return;
    let target = null;
    try { target = document.querySelector(decodeURIComponent(hash)); } catch (err) { target = null; }
    if (target) life.timeout(() => scroll.to(target, { duration: 1.6 }), 80);
  });

  // Safety net: never leave a visitor behind a stuck cover.
  life.timeout(() => {
    if (bus.has('intro:done')) return;
    const pre = document.querySelector('.preloader');
    if (pre) pre.style.display = 'none';
    const pt = document.getElementById('pageTransition');
    if (pt) {
      pt.classList.remove('is-covering', 'is-active');
      pt.style.display = 'none';
    }
    root.classList.remove('is-returning', 'is-transitioning');
    scroll.start();
    bus.emit('intro:done', { forced: true });
  }, 9000);

  // The page itself, then its contact block.
  try {
    if (init) [].concat(init).forEach((fn) => fn && fn(Site));
  } catch (err) {
    // A broken page script must not leave the shutter closed.
    console.error(err);
    Global.transition.reveal().then(() => bus.emit('intro:done', { error: true }));
  }

  Global.nav.refresh();
  Global.nav.update();

  if (remembered != null) {
    life.raf(() => {
      scroll.resize();
      scroll.to(remembered, { immediate: true });
    });
  }

  return function unmountPage() {
    scrollMemory.set(locationKey, scroll.y);
    life.dispose();
    Global.cursor.reset();
    [...root.classList].forEach((c) => {
      if (!classesBefore.has(c) && !CHROME_CLASSES.has(c) && !c.startsWith('lenis')) root.classList.remove(c);
    });
    [...root.style].forEach((p) => {
      if (p.startsWith('--') && !propsBefore.has(p) && !CHROME_PROPS.has(p)) root.style.removeProperty(p);
    });
  };
}
