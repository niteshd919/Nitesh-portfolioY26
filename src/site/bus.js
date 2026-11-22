/* ==================================================================
   Event bus. 'intro:done' is sticky: late listeners still run. In the
   single-page app it is sticky per page — the runtime resets it each
   time a route mounts.
   ================================================================== */
const handlers = new Map();
const sticky = new Map();
const STICKY = new Set(['intro:done']);

export function on(name, fn) {
  if (!handlers.has(name)) handlers.set(name, new Set());
  handlers.get(name).add(fn);
  if (sticky.has(name)) fn(sticky.get(name));
  return () => {
    const set = handlers.get(name);
    if (set) set.delete(fn);
  };
}

export function emit(name, detail) {
  if (STICKY.has(name)) {
    if (sticky.has(name)) return;
    sticky.set(name, detail);
  }
  [...(handlers.get(name) || [])].forEach((fn) => fn(detail));
}

export function has(name) {
  return sticky.has(name);
}

export function reset(name) {
  sticky.delete(name);
}
