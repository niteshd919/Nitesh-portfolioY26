/* ==================================================================
   Scroll — Lenis on capable devices, native when motion is reduced.
   One instance for the life of the app; pages subscribe through
   their own Site facade so their listeners leave with them.
   ================================================================== */
import Lenis from 'lenis';
import { root, reduced } from './env.js';

let lenis = null;
let rafId = 0;

export function startLenis() {
  if (reduced || lenis) return lenis;
  lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.1,
  });
  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);
  window.lenis = lenis;
  return lenis;
}

export function stopLenis() {
  if (!lenis) return;
  cancelAnimationFrame(rafId);
  lenis.destroy();
  lenis = null;
  window.lenis = undefined;
}

function resolveY(target, offset) {
  if (typeof target === 'number') return target + offset;
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return null;
  return el.getBoundingClientRect().top + window.scrollY + offset;
}

export const scroll = {
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
  /** Subscribe to scroll; returns an unsubscribe function. */
  on(fn) {
    if (lenis) return lenis.on('scroll', fn);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  },
  /** Re-measure after the document changes under Lenis (route swaps). */
  resize() {
    if (lenis) lenis.resize();
  },
};
