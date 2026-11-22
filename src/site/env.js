/* ==================================================================
   Environment + motion tokens, shared by the runtime and every page.
   ================================================================== */
import { cubicBezier } from 'animejs';

export const root = document.documentElement;
export const touch = window.matchMedia('(hover: none)').matches;
export const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Mechanical, weighted, never bouncy. */
export const motion = {
  ease: {
    out: 'outExpo',                         // reveals: fast start, long settle
    inOut: cubicBezier(0.76, 0, 0.24, 1),   // shutters, wipes, sweeps
    soft: 'out(3)',                         // UI response
    roll: cubicBezier(0.65, 0, 0.15, 1),    // odometer drums
    linear: 'linear',
  },
  dur: { xs: 300, s: 600, m: 900, l: 1300, xl: 1800 },
};
