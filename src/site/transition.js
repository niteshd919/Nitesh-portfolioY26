/* ==================================================================
   Page transitions — the active grille shutter. Leaving a page, nine
   slats close from alternating edges toward the centre seam, a light
   signature draws across it and the destination's name settles on
   the line. The router swaps the page behind the closed shutter and
   the new page opens it once it's ready.

   Site.transition:
     go(url, { title, eyebrow })  close the shutter, then navigate
     cover({ title, eyebrow })    close it (Promise)
     reveal()                     open it, if it's closed (Promise)
     setLabel(title, eyebrow)     text shown on the seam

   Any <a data-transition href="..."> uses it automatically;
   data-transition-label / data-transition-eyebrow set the text.
   ================================================================== */
import { root, reduced, motion } from './env.js';
import { scroll } from './scroll.js';

export function initTransition(life, { navigate, menu }) {
  const api = {
    go(url) { navigate(url); },
    cover: () => Promise.resolve(),
    reveal: () => Promise.resolve(),
    setLabel() {},
  };
  const pt = document.getElementById('pageTransition');
  if (!pt) return api;

  const { createTimeline, stagger, utils } = life.anime;
  const slats = pt.querySelectorAll('.pt-slat');
  const light = pt.querySelector('.pt-light');
  const title = pt.querySelector('.pt-title');
  const eyebrow = pt.querySelector('.pt-eyebrow');
  const EASE = motion.ease.inOut;
  let busy = false;

  function setLabel(t, e) {
    if (t != null && title) title.textContent = t;
    if (e != null && eyebrow) eyebrow.textContent = e;
  }

  function isClosed() {
    return pt.classList.contains('is-covering') || root.classList.contains('is-returning');
  }

  function cover(opts = {}) {
    setLabel(opts.title, opts.eyebrow);
    pt.style.display = '';
    pt.classList.add('is-active');
    if (reduced) {
      utils.set(slats, { scaleY: 1.04 });
      utils.set(light, { scaleX: 1, opacity: 1 });
      utils.set([title, eyebrow], { translateY: '0%' });
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      createTimeline({ onComplete: resolve })
        .add(slats, { scaleY: [0, 1.04], duration: 820, ease: EASE, delay: stagger(55, { from: 'center' }) }, 0)
        .add(light, { scaleX: [0, 1], opacity: [0, 1], duration: 900, ease: 'outExpo' }, 420)
        .add([title, eyebrow], { translateY: ['110%', '0%'], duration: 850, ease: 'outExpo', delay: stagger(90) }, 520);
    });
  }

  function hide() {
    pt.classList.remove('is-active', 'is-covering');
    root.classList.remove('is-returning', 'is-transitioning');
    pt.style.display = 'none';
    utils.set(slats, { scaleY: 0 });
    utils.set(light, { scaleX: 0, opacity: 0 });
    utils.set([title, eyebrow], { translateY: '110%' });
  }

  function reveal() {
    if (!isClosed()) {
      hide();
      return Promise.resolve();
    }
    // Hand the closed state from CSS classes to inline styles, so the
    // classes can go and the timeline owns every value from here.
    pt.classList.add('is-active');
    utils.set(slats, { scaleY: 1.04 });
    utils.set(light, { scaleX: 1, opacity: 1 });
    utils.set([title, eyebrow], { translateY: '0%' });
    pt.classList.remove('is-covering');
    root.classList.remove('is-returning');

    if (reduced) {
      hide();
      scroll.start();
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      createTimeline({
        onComplete: () => {
          hide();
          resolve();
        },
      })
        .add([title, eyebrow], { translateY: ['0%', '-110%'], duration: 650, ease: 'in(3)', delay: stagger(70) }, 120)
        .add(light, { scaleX: [1, 0], opacity: [1, 0], duration: 760, ease: EASE }, 360)
        .add(slats, { scaleY: [1.04, 0], duration: 980, ease: EASE, delay: stagger(55, { from: 'center' }) }, 480)
        .call(() => {
          root.classList.remove('is-transitioning');
          scroll.start();
        }, 620);
    });
  }

  function go(url, opts = {}) {
    if (busy) return;
    const target = new URL(url, window.location.href);
    const here = window.location;
    const dest = target.pathname + target.search + target.hash;

    // Same page (e.g. a hash on the page we're on): no shutter, just go.
    if (target.pathname === here.pathname && target.search === here.search) {
      if (menu.isOpen) menu.close();
      navigate(dest);
      return;
    }

    busy = true;
    const toHome = target.pathname === '/';
    root.classList.add('is-transitioning');
    scroll.stop();
    const label = {
      title: opts.title != null ? opts.title : (toHome ? 'Nitesh Dixit' : ''),
      eyebrow: opts.eyebrow != null ? opts.eyebrow : (toHome ? 'Returning to the index' : 'Now entering'),
    };
    cover(label).then(() => {
      pt.classList.add('is-covering');
      if (menu.isOpen) menu.close({ keepScrollStopped: true });
      busy = false;
      navigate(dest);
    });
  }

  life.on(document, 'click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest('a[data-transition]');
    if (!a) return;
    const url = a.getAttribute('href');
    if (!url || url.startsWith('#') || a.target === '_blank') return;
    e.preventDefault();
    go(url, { title: a.getAttribute('data-transition-label'), eyebrow: a.getAttribute('data-transition-eyebrow') });
  });

  // Back/forward can restore the document from the bfcache exactly as it
  // was left (e.g. after following an external link). Reset it.
  life.on(window, 'pageshow', (e) => {
    if (!e.persisted) return;
    busy = false;
    hide();
    scroll.start();
  });

  return Object.assign(api, { go, cover, reveal, setLabel, isClosed });
}
