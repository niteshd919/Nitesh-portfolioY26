/* ==========================================================================
   NITESH DIXIT — case-study behaviour ("Maker's"). Plain JS, no dependencies.
   site.js (loaded first) runs the clock and the photo viewer.

   1. Board views      the FigJam board's contact sheet (case-suspension.html)
   2. The day to try   drag a split, or step it with the arrow keys
   3. The strip        pins and slides sideways as the page scrolls
   4. A day charging   the hero clock on the EV tariff (case-ev-tariff.html)
   ========================================================================== */
(function () {
  'use strict';

  const pad = (n) => String(n).padStart(2, '0');
  const hourText = (h) => `${pad(Math.floor(h))}:${pad(Math.round((h % 1) * 60))}`;
  const motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)');


  /* 1. Board views -----------------------------------------------------------
     The board print shows one view at a time. Each thumbnail on the contact
     sheet swaps the print's picture and caption, and what the viewer opens. */
  document.querySelectorAll('[data-board]').forEach((board) => {
    const main = board.querySelector('[data-board-main]');
    const img = main && main.querySelector('img');
    const caption = board.querySelector('[data-board-caption]');
    const thumbs = Array.from(board.querySelectorAll('[data-board-view]'));
    if (!img || !thumbs.length) return;
    const source = (main.dataset.viewMeta || '').split(' · ')[0];

    const select = (thumb) => {
      const d = thumb.dataset;
      thumbs.forEach((t) => t.setAttribute('aria-pressed', String(t === thumb)));
      img.width = Number(d.w);
      img.height = Number(d.h);
      img.alt = d.alt;
      img.srcset = d.srcset;
      img.src = d.src;
      if (caption) caption.textContent = d.caption;
      main.dataset.viewMeta = source ? `${source} · ${d.label}` : d.label;
      main.dataset.viewCaption = d.caption;
    };
    thumbs.forEach((t) => t.addEventListener('click', () => select(t)));
  });


  /* 2. The day to try ----------------------------------------------------------
     [data-live-day] holds the day's slots as JSON. Its handles are the splits
     between them: drag one, or focus it and use the arrow keys (15 minutes;
     Shift for an hour; Home and End for as far as it goes). A split only
     moves the boundary between two slots and stays 15 minutes clear of its
     neighbours, so the day always adds up to 24 hours. */
  const STEP = 0.25;
  document.querySelectorAll('[data-live-day]').forEach((box) => {
    const slots = JSON.parse(box.dataset.liveDay);
    const plot = box.querySelector('.day-plot');
    const fills = Array.from(box.querySelectorAll('.day-fill'));
    const prices = Array.from(box.querySelectorAll('.day-price'));
    const path = box.querySelector('.day-line path');
    const handles = Array.from(box.querySelectorAll('.day-handle'));
    const readout = box.querySelector('.day-readout');
    const max = Number(getComputedStyle(box).getPropertyValue('--max')) || Math.max(...slots.map((s) => s.price));

    // The cheap night runs across midnight when the day starts and ends on it.
    const cheapest = () => {
      const low = Math.min(...slots.map((s) => s.price));
      const first = slots[0];
      const last = slots[slots.length - 1];
      const span = first.price === low && last.price === low && slots.length > 1
        ? `${hourText(last.from)}–${hourText(first.to)}`
        : (() => { const s = slots.find((x) => x.price === low); return `${hourText(s.from)}–${hourText(s.to)}`; })();
      return `Cheapest ${span} at ${low} ct`;
    };

    const render = () => {
      const width = plot.clientWidth;
      let d = `M0 ${max}`;
      slots.forEach((s, i) => {
        d += ` V${max - s.price} H${s.to}`;
        fills[i].style.setProperty('--from', s.from);
        fills[i].style.setProperty('--to', s.to);
        const label = prices[i];
        if (label) {
          label.style.setProperty('--at', (s.from + s.to) / 2);
          label.classList.toggle('is-hidden', ((s.to - s.from) / 24) * width < label.offsetWidth + 8);
        }
      });
      path.setAttribute('d', `${d} V${max}`);
      handles.forEach((h, k) => {
        const at = slots[k + 1].from;
        h.style.setProperty('--at', at);
        h.setAttribute('aria-valuenow', String(at));
        h.setAttribute('aria-valuetext', hourText(at));
        h.setAttribute('aria-valuemin', String(slots[k].from + STEP));
        h.setAttribute('aria-valuemax', String(slots[k + 1].to - STEP));
        h.querySelector('b').textContent = hourText(at);
      });
      const text = cheapest();
      const shown = readout.lastElementChild;
      if (shown.textContent !== text) shown.textContent = text;
    };

    const move = (i, hour) => {
      const min = slots[i - 1].from + STEP;
      const maxAt = slots[i].to - STEP;
      const at = Math.min(maxAt, Math.max(min, Math.round(hour / STEP) * STEP));
      if (at === slots[i].from) return;
      slots[i - 1].to = at;
      slots[i].from = at;
      render();
    };

    handles.forEach((h, k) => {
      const i = k + 1;
      h.addEventListener('pointerdown', (e) => {
        if (e.button !== 0) return;
        e.preventDefault();
        h.focus({ preventScroll: true });
        h.setPointerCapture(e.pointerId);
        h.classList.add('is-dragging');
        const drag = (ev) => {
          const r = plot.getBoundingClientRect();
          move(i, ((ev.clientX - r.left) / r.width) * 24);
        };
        const stop = () => {
          h.classList.remove('is-dragging');
          h.removeEventListener('pointermove', drag);
          h.removeEventListener('pointerup', stop);
          h.removeEventListener('pointercancel', stop);
        };
        h.addEventListener('pointermove', drag);
        h.addEventListener('pointerup', stop);
        h.addEventListener('pointercancel', stop);
      });
      h.addEventListener('keydown', (e) => {
        const by = e.shiftKey ? 1 : STEP;
        const keys = { ArrowLeft: -by, ArrowDown: -by, ArrowRight: by, ArrowUp: by };
        if (e.key in keys) move(i, slots[i].from + keys[e.key]);
        else if (e.key === 'Home') move(i, 0);
        else if (e.key === 'End') move(i, 24);
        else if (e.key === 'PageDown') move(i, slots[i].from - 1);
        else if (e.key === 'PageUp') move(i, slots[i].from + 1);
        else return;
        e.preventDefault();
      });
    });

    render();
    window.addEventListener('resize', render);
    if (document.fonts) document.fonts.ready.then(render);
  });


  /* 3. The strip -------------------------------------------------------------
     [data-strip] is a row of steps. On wide screens with motion it pins in
     the middle of the window and the page's scroll slides it sideways, one
     step at a time; elsewhere it's a row to swipe. The meter follows both. */
  const wide = window.matchMedia('(min-width: 901px)');
  document.querySelectorAll('[data-strip]').forEach((strip) => {
    const stage = strip.querySelector('.strip-stage');
    const view = strip.querySelector('.strip-view');
    const track = strip.querySelector('.strip-track');
    const count = strip.querySelector('.strip-count');
    const fill = strip.querySelector('.strip-meter b');
    const n = track.children.length;
    let run = 0;
    let queued = false;

    const show = (p) => {
      fill.style.transform = `scaleX(${p.toFixed(4)})`;
      count.textContent = `${pad(Math.round(p * (n - 1)) + 1)} / ${pad(n)}`;
    };
    const update = () => {
      queued = false;
      if (strip.classList.contains('is-pinned')) {
        const travel = strip.offsetHeight - stage.offsetHeight;
        const stick = parseFloat(getComputedStyle(stage).top) || 0;
        const p = travel > 0 ? Math.min(1, Math.max(0, (stick - strip.getBoundingClientRect().top) / travel)) : 0;
        track.style.transform = `translate3d(${(-p * run).toFixed(1)}px, 0, 0)`;
        show(p);
      } else {
        const most = view.scrollWidth - view.clientWidth;
        show(most > 0 ? view.scrollLeft / most : 0);
      }
    };
    const measure = () => {
      strip.classList.remove('is-pinned');
      track.style.transform = '';
      // The window runs to the screen's edges and its padding brings the
      // first step back to the column; swiping snaps to that same edge.
      view.style.scrollPaddingInline = getComputedStyle(view).paddingLeft;
      run = 0;
      if (motionOK.matches && wide.matches) {
        const cs = getComputedStyle(view);
        const inner = view.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
        run = Math.max(0, Math.ceil(track.offsetWidth - inner));
        if (run > 0) {
          strip.classList.add('is-pinned');
          strip.style.setProperty('--stage-h', `${stage.offsetHeight}px`);
          strip.style.setProperty('--strip-run', `${run}px`);
        }
      }
      update();
    };
    const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };

    // Steps further along sit outside the strip's window until it slides,
    // so lazy loading would only fetch them as they arrive: fetch them all
    // as the strip comes near.
    if ('IntersectionObserver' in window) {
      const near = new IntersectionObserver((entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        track.querySelectorAll('img[loading="lazy"]').forEach((img) => { img.loading = 'eager'; });
        near.disconnect();
      }, { rootMargin: '800px 0px' });
      near.observe(strip);
    }

    window.addEventListener('scroll', queue, { passive: true });
    view.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', measure);
    wide.addEventListener('change', measure);
    motionOK.addEventListener('change', measure);
    if (document.fonts) document.fonts.ready.then(measure);
    measure();
  });


  /* 4. A day charging -----------------------------------------------------------
     [data-charge] holds a day's tariff, when the car is away and how low it
     comes home. The clock starts from the still frame in the HTML and runs
     the day on a loop: slower while something happens, quick on the road.
     The car waits out the peak, charges only in the cheap window and leaves
     full. It pauses off screen; with reduced motion the still frame stays. */
  document.querySelectorAll('[data-charge]').forEach((box) => {
    const cfg = JSON.parse(box.dataset.charge);
    const slots = cfg.slots;
    const low = Math.min(...slots.map((s) => s.price));
    const isCheap = (s) => s.price === low;
    const slotAt = (t) => slots.find((s) => t >= s.from && t < s.to) || slots[slots.length - 1];
    const [leave, home] = cfg.away;
    const isAway = (t) => t >= leave && t < home;
    const hh = (t) => {
      const m = Math.round((((t % 24) + 24) % 24) * 60);
      return `${pad(Math.floor(m / 60) % 24)}:${pad(m % 60)}`;
    };

    // The cheap window, joined across midnight (22:00 → 06:00).
    const n = slots.length;
    const cheapIdx = slots.map((s, i) => (isCheap(s) ? i : -1)).filter((i) => i >= 0);
    const winStart = slots[cheapIdx.find((i) => !isCheap(slots[(i - 1 + n) % n]))].from;

    // Battery in 15-minute steps: home at `low`, full by the end of the
    // cheap window, back down to `low` after the drive.
    const steps = 96;
    let chargeSteps = 0;
    let awaySteps = 0;
    for (let i = 0; i < steps; i++) {
      const t = i / 4;
      if (isAway(t)) awaySteps++;
      else if (isCheap(slotAt(t))) chargeSteps++;
    }
    const levels = [];
    let b = cfg.low;
    for (let k = 0; k < steps; k++) {
      const i = (home * 4 + k) % steps;
      levels[i] = b;
      const t = i / 4;
      if (isAway(t)) b -= (100 - cfg.low) / awaySteps;
      else if (isCheap(slotAt(t))) b = Math.min(100, b + (100 - cfg.low) / chargeSteps);
    }
    const battery = (t) => {
      const i = Math.floor(t * 4) % steps;
      return levels[i] + (levels[(i + 1) % steps] - levels[i]) * (t * 4 - Math.floor(t * 4));
    };
    const stateAt = (t) => {
      if (isAway(t)) return 'away';
      if (battery(t) >= 99.5) return 'full';
      return isCheap(slotAt(t)) ? 'charging' : 'waiting';
    };
    const copy = {
      waiting: (s) => ['Waiting', `${s.price} ct/kWh now · charges from ${hh(winStart)}`],
      charging: (s) => ['Charging', `${s.price} ct/kWh · cheapest rate`],
      full: () => ['Charged', `Ready by ${hh(leave)}`],
      away: () => ['Unplugged', 'Out on the road'],
    };

    const q = (sel) => box.querySelector(sel);
    const head = q('[data-charge-head]');
    const time = q('[data-charge-time]');
    const stateEl = q('[data-charge-state]');
    const pctEl = q('[data-charge-pct]');
    const fillEl = q('[data-charge-fill]');
    const subEl = q('[data-charge-sub]');
    const last = {};

    const render = (t) => {
      const level = battery(t);
      const quarter = Math.floor(t * 4) / 4;
      head.style.setProperty('--t', t.toFixed(3));
      fillEl.style.transform = `scaleX(${(level / 100).toFixed(3)})`;
      if (quarter !== last.quarter) { last.quarter = quarter; time.textContent = hh(quarter); }
      const pct = Math.round(level);
      if (pct !== last.pct) { last.pct = pct; pctEl.textContent = pct; }
      const state = stateAt(t);
      const slot = slotAt(t);
      if (state + slot.price !== last.key) {
        last.key = state + slot.price;
        const [a, sub] = copy[state](slot);
        stateEl.textContent = a;
        subEl.textContent = sub;
      }
    };

    // Hours pass at different speeds (ms per hour), from the moment the car
    // gets home: the wait, the charge, the morning, the drive.
    const winEnd = slots[cheapIdx.find((i) => !isCheap(slots[(i + 1) % n]))].to;
    const legs = [];
    [[home, winStart, 750], [winStart, winEnd, 800], [winEnd, leave, 1200], [leave, home, 330]].forEach(([from, to, ms]) => {
      const hours = (to - from + 24) % 24;
      if (hours) legs.push({ from, hours, ms });
    });
    const total = legs.reduce((sum, l) => sum + l.hours * l.ms, 0);
    const timeAt = (ms) => {
      let e = ((ms % total) + total) % total;
      for (const l of legs) {
        const d = l.hours * l.ms;
        if (e < d) return (l.from + e / l.ms) % 24;
        e -= d;
      }
      return home;
    };
    const msAt = (t) => {
      let acc = 0;
      for (const l of legs) {
        const off = (((t - l.from) % 24) + 24) % 24;
        if (off < l.hours) return acc + off * l.ms;
        acc += l.hours * l.ms;
      }
      return 0;
    };

    const still = typeof cfg.still === 'number' ? cfg.still : winStart + 1.5;
    let elapsed = msAt(still);
    let frame = 0;
    let before = 0;
    let onScreen = true;
    const tick = (now) => {
      // Cap each step, so a stalled tab or a long frame doesn't skip hours.
      // (A frame's time can be a little earlier than play() was called.)
      elapsed += Math.max(0, Math.min(64, now - before));
      before = now;
      render(timeAt(elapsed));
      frame = requestAnimationFrame(tick);
    };
    const play = () => {
      if (frame || !onScreen || document.hidden || !motionOK.matches) return;
      before = performance.now();
      frame = requestAnimationFrame(tick);
    };
    const pause = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    render(still);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        onScreen = entries[entries.length - 1].isIntersecting;
        if (onScreen) play(); else pause();
      }).observe(box);
    }
    document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); else play(); });
    motionOK.addEventListener('change', () => {
      if (motionOK.matches) play();
      else { pause(); elapsed = msAt(still); render(still); }
    });
    play();
  });
})();
