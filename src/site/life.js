/* ==================================================================
   Life — everything a page starts, it must stop when the route
   changes. Page code registers global listeners, timers, rAF loops,
   observers and Anime.js instances through its life; dispose() tears
   them all down in one go.

     life.on(target, type, fn, opts)   addEventListener, auto-removed
     life.timeout / interval / raf     timers, auto-cleared
     life.IntersectionObserver …       observers, auto-disconnected
     life.track(instance)              anything with disconnect/cancel/revert
     life.add(fn)                      any other cleanup
     life.anime                        the Anime.js namespace with every
                                       creator tracked (animate, timelines,
                                       timers, onScroll, splitText …)
   ================================================================== */
import * as anime from 'animejs';

const CREATORS = [
  'animate',
  'createTimeline',
  'createTimer',
  'createAnimatable',
  'createDraggable',
  'createScope',
  'createLayout',
  'onScroll',
  'splitText',
  'split',
];

function stop(instance) {
  try {
    if (typeof instance.disconnect === 'function') instance.disconnect();
    else if (typeof instance.cancel === 'function') instance.cancel();
    else if (typeof instance.revert === 'function') instance.revert();
  } catch (err) {
    /* already gone */
  }
}

export function createLife() {
  let disposed = false;
  const cleanups = [];
  const instances = new Set();
  const timeouts = new Set();
  const intervals = new Set();
  const frames = new Set();

  function track(instance) {
    if (!instance) return instance;
    if (disposed) stop(instance);
    else instances.add(instance);
    return instance;
  }

  const observer = (Base) => (typeof Base === 'function'
    ? class extends Base {
      constructor(...args) {
        super(...args);
        track(this);
      }
    }
    : undefined);

  const trackedAnime = { ...anime };
  CREATORS.forEach((name) => {
    const create = anime[name];
    if (typeof create === 'function') trackedAnime[name] = (...args) => track(create(...args));
  });
  // splitText is also reachable as text.split / text.splitText in v4.
  if (anime.text) {
    trackedAnime.text = { ...anime.text };
    ['split', 'splitText'].forEach((name) => {
      if (typeof anime.text[name] === 'function') trackedAnime.text[name] = (...args) => track(anime.text[name](...args));
    });
  }

  const life = {
    get disposed() { return disposed; },
    anime: trackedAnime,
    track,

    add(fn) {
      if (typeof fn !== 'function') return fn;
      if (disposed) fn();
      else cleanups.push(fn);
      return fn;
    },

    on(target, type, fn, opts) {
      if (!target || !target.addEventListener) return () => {};
      target.addEventListener(type, fn, opts);
      const off = () => target.removeEventListener(type, fn, opts);
      life.add(off);
      return off;
    },

    timeout(fn, ms, ...args) {
      if (disposed) return 0;
      const id = setTimeout(() => {
        timeouts.delete(id);
        fn(...args);
      }, ms);
      timeouts.add(id);
      return id;
    },

    interval(fn, ms, ...args) {
      if (disposed) return 0;
      const id = setInterval(fn, ms, ...args);
      intervals.add(id);
      return id;
    },

    raf(fn) {
      if (disposed) return 0;
      const id = requestAnimationFrame((time) => {
        frames.delete(id);
        if (!disposed) fn(time);
      });
      frames.add(id);
      return id;
    },

    IntersectionObserver: observer(window.IntersectionObserver),
    ResizeObserver: observer(window.ResizeObserver),
    MutationObserver: observer(window.MutationObserver),

    dispose() {
      if (disposed) return;
      disposed = true;
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
      frames.forEach(cancelAnimationFrame);
      [...instances].reverse().forEach(stop);
      cleanups.splice(0).reverse().forEach((fn) => {
        try { fn(); } catch (err) { /* keep going */ }
      });
      timeouts.clear();
      intervals.clear();
      frames.clear();
      instances.clear();
    },
  };

  return life;
}
