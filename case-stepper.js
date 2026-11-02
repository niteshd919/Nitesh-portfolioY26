/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · case study · "Built to Finish"
   A bespoke study on the same chrome as case-study.html. It is built
   like the stepper it recommends: seven steps that charge a pack as
   they are read, the shortest first, from 14% (arriving counts as the
   first step) to 100%.

   The charge   Each [data-step] is one cell of the pack. A cell fills
                with the share of its step the reading line (the middle
                of the viewport) has passed over. A jump (a link to
                another step) carries the reader without filling what
                it passes, so those steps read as skipped. Nothing ever
                drains, and the cells are saved on this device, so a
                return resumes where it left off.
   The curve    Reading time per step, from its words, gives this
                page's own charging curve: drawn in the hero, with the
                same steps longest-first as a dashed ghost.
   Instruments  the rail in the margin (wide screens), a one-line
                header and its sheet (narrow), the strip under every
                gate, the gauges in the hero, the tab title, the glow.
   Arrival      cover label → hidden states → fonts → the shutter opens
                → hero entrance → the curve draws → 'intro:done'.
   Figures      every data block plays once on arrival.
   Reduced      final states everywhere; the charge still follows the
                reader.
   ================================================================== */

(function () {
  const Site = window.Site;
  const A = Site && Site.anime;
  const { animate, createTimeline, stagger, utils } = A || {};
  const ease = A ? Site.motion.ease : {};
  const reduced = !A || Site.reduced;
  const byId = (id) => document.getElementById(id);
  const $$ = (sel, scope = document) => [...scope.querySelectorAll(sel)];
  const pad = (n) => String(n).padStart(2, '0');
  const f1 = (n) => n.toFixed(1);
  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const pct = (k) => Math.round(k * 100);

  /* ----------------------------------------------------------------
     0. Case number, shutter label and the next project — the same
        loop through CASE_STUDIES that case-study.js walks.
  ---------------------------------------------------------------- */
  const SLUG = 'stepper';
  const store = window.CASE_STUDIES || {};
  const data = store[SLUG] || { title: 'Built to Finish', year: '2026', next: 'suspension' };
  const sequence = [];
  for (let s = store.suspension ? 'suspension' : SLUG; store[s] && !sequence.includes(s); s = store[s].next) {
    sequence.push(s);
  }
  Object.keys(store).forEach((s) => { if (!sequence.includes(s)) sequence.push(s); });
  const caseIndex = Math.max(0, sequence.indexOf(SLUG));
  const caseNo = (s) => `Case ${pad(sequence.indexOf(s) + 1)} / ${pad(sequence.length)}`;
  const fullName = (d) => (/\s/.test(d.title.trim()) ? d.title : `${d.title} — ${d.subtitle}`);

  if (Site && Site.transition) Site.transition.setLabel(data.title, caseNo(SLUG));

  const caseNoEl = byId('caseNo');
  if (caseNoEl) caseNoEl.innerHTML = `<b>${caseNo(SLUG)}</b><i aria-hidden="true"></i><span>Model year ${data.year}</span>`;
  const heroRuler = document.querySelector('.case-hero-ruler');
  if (heroRuler) {
    heroRuler.style.setProperty('--case-i', caseIndex);
    heroRuler.style.setProperty('--case-n', sequence.length || 1);
  }

  const nextData = store[data.next];
  const nextLink = byId('caseNextLink');
  if (nextData && nextLink) {
    nextLink.setAttribute('href', nextData.href || `case-study.html?p=${nextData.slug || data.next}`);
    nextLink.setAttribute('data-transition-label', fullName(nextData));
    nextLink.setAttribute('data-transition-eyebrow', `Next · ${caseNo(data.next)}`);
    nextLink.setAttribute('aria-label', `Next project: ${fullName(nextData)}`);
    byId('caseNextTitle').textContent = nextData.title;
    const nextEyebrow = document.querySelector('.case-next-eyebrow');
    if (nextEyebrow) nextEyebrow.textContent = `Next project · ${caseNo(data.next)}`;
  }

  /* ----------------------------------------------------------------
     1. THE STEPS — the hero is step one, done on arrival; each other
        step's reading time comes from the words a reader reads in it
        (decorative and screen-reader-only text left out).
  ---------------------------------------------------------------- */
  const WPM = 230;
  const WORD = /[\p{L}\p{N}]+(?:[’'.,-][\p{L}\p{N}]+)*/gu;
  function wordsIn(el) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && n.parentElement.closest('[aria-hidden="true"], .sr-only, script, style')
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT),
    });
    let count = 0;
    while (walker.nextNode()) count += (walker.currentNode.nodeValue.match(WORD) || []).length;
    return count;
  }

  const steps = $$('[data-step]').map((el, i) => ({
    el,
    i,
    id: el.id,
    label: el.dataset.label || el.dataset.section || '',
    min: i ? Math.max(0.4, wordsIn(el) / WPM) : 0,
    top: 0,
    bottom: 0,
  }));
  const N = steps.length;
  if (N < 2) return;
  const TOTAL = steps.reduce((t, s) => t + s.min, 0);

  /* ----------------------------------------------------------------
     2. THE CHARGE — per step, the stretches the reading line has
        covered (as 0..1 of the step); a step's charge is their sum.
        Saved on this device for 30 days.
  ---------------------------------------------------------------- */
  const STORE = 'nd:built-to-finish';
  const cover = steps.map((s, i) => (i ? [] : [[0, 1]]));
  const fill = steps.map((s, i) => (i ? 0 : 1));
  let storageOK = false;
  let resumedAt = 0;

  function sumCover(list) {
    const f = list.reduce((t, [a, b]) => t + (b - a), 0);
    return f >= 0.985 ? 1 : Math.min(1, f);
  }
  function addCover(i, a, b) {
    if (b - a < 1e-4 || fill[i] >= 1) return false;
    const list = cover[i].concat([[a, b]]).sort((x, y) => x[0] - y[0]);
    const merged = [];
    list.forEach(([x, y]) => {
      const last = merged[merged.length - 1];
      if (last && x <= last[1] + 0.004) last[1] = Math.max(last[1], y);
      else merged.push([x, y]);
    });
    cover[i] = merged;
    const f = sumCover(merged);
    if (f <= fill[i] + 1e-4) return false;
    fill[i] = f;
    return true;
  }

  try {
    const probe = '__nd';
    localStorage.setItem(probe, '1');
    localStorage.removeItem(probe);
    storageOK = true;
    const saved = JSON.parse(localStorage.getItem(STORE) || 'null');
    if (saved && saved.v === 1 && Array.isArray(saved.cover) && saved.cover.length === N && Date.now() - saved.at < 30 * 864e5) {
      saved.cover.forEach((list, i) => {
        if (!i || !Array.isArray(list)) return;
        cover[i] = list.filter((iv) => Array.isArray(iv) && iv.length === 2).map(([a, b]) => [clamp01(+a || 0), clamp01(+b || 0)]);
        fill[i] = sumCover(cover[i]);
      });
    }
  } catch (err) { storageOK = false; }

  const chargeOf = () => fill.reduce((t, f) => t + f, 0) / N;
  const etaOf = () => steps.reduce((t, s, i) => t + (1 - fill[i]) * s.min, 0);
  resumedAt = chargeOf();

  let saveTimer = 0;
  function save() {
    saveTimer = 0;
    if (!storageOK) return;
    try {
      const round = (v) => Math.round(v * 1000) / 1000;
      localStorage.setItem(STORE, JSON.stringify({ v: 1, at: Date.now(), cover: cover.map((list) => list.map(([a, b]) => [round(a), round(b)])) }));
    } catch (err) { /* full or blocked */ }
  }
  const saveSoon = () => { if (!saveTimer) saveTimer = setTimeout(save, 700); };
  window.addEventListener('pagehide', save);

  /* ----------------------------------------------------------------
     3. POSITION — where the reading line is, which step it is in, and
        whether the page is being read or jumped across.
  ---------------------------------------------------------------- */
  const scroller = Site && Site.scroll;
  const sourcesEl = byId('sources');
  const finaleEl = byId('charged');
  let sourcesTop = Infinity;
  let cur = 0;
  let lastRef = null;
  let jumpUntil = window.location.hash.length > 1 ? Infinity : 0;
  let backs = 0;
  const dwell = steps.map(() => 0);

  function measure() {
    const sy = window.scrollY;
    steps.forEach((s, i) => {
      const r = s.el.getBoundingClientRect();
      s.top = i ? r.top + sy : 0;
      s.bottom = r.bottom + sy;
    });
    sourcesTop = sourcesEl ? sourcesEl.getBoundingClientRect().top + sy : Infinity;
  }

  function stepAt(ref) {
    if (ref < steps[1].top) return 0;
    for (let i = 1; i < N; i++) if (ref < steps[i].bottom) return i;
    return N;
  }

  // A link to anywhere on the page is a jump: what it passes isn't read.
  // Capture phase, so it runs before core.js starts the scroll.
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;
    const hash = a.getAttribute('href');
    let target = null;
    try { target = hash === '#top' ? document.body : hash.length > 1 && document.querySelector(hash); } catch (err) { target = null; }
    if (!target) return;
    jumpUntil = performance.now() + (reduced ? 160 : 2100);
    if (sheetOpen) setSheet(false);
    // Focus follows the step: once the scroll lands, the step's heading
    // takes focus, so a keyboard or screen reader carries on from there.
    const heading = target.closest && target.closest('[data-step]') && target.querySelector('h1, h2');
    if (heading) {
      if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
      setTimeout(() => heading.focus({ preventScroll: true }), reduced ? 60 : 1900);
    }
  }, true);

  /* ----------------------------------------------------------------
     4. THE INSTRUMENTS — elements, built once.
  ---------------------------------------------------------------- */
  const glow = byId('bfGlow');
  const rail = byId('bfRail');
  const head = byId('bfHead');
  const headBtn = byId('bfHeadBtn');
  const scrim = byId('bfScrim');
  const railClose = byId('bfRailClose');
  const narrow = window.matchMedia('(max-width: 1199px)');

  const railSteps = rail ? $$('.bf-rstep', rail).map((li) => ({
    li,
    a: li.querySelector('a'),
    state: li.querySelector('.bf-rstep-state'),
  })) : [];
  const railPct = rail && rail.querySelector('.bf-rail-pct b');
  const railEta = rail && rail.querySelector('.bf-rail-eta');
  const railSaved = rail && rail.querySelector('.bf-rail-saved');
  if (rail) rail.setAttribute('data-lenis-prevent', '');

  const headCount = head && head.querySelector('.bf-head-count');
  const headName = head && head.querySelector('.bf-head-name');
  const headPct = head && head.querySelector('.bf-head-pct b');

  // The strip under every gate: all seven cells, this step marked.
  steps.forEach((s, i) => {
    const strip = s.el.querySelector('.bf-strip');
    if (!strip) return;
    strip.innerHTML = `<span class="bf-cells">${'<i><b></b></i>'.repeat(N)}</span>`
      + `<span class="bf-strip-here${i > N - 3 ? ' is-flip' : ''}" style="--i:${i}"><i></i><b>This step · ${i + 1} of ${N}</b></span>`;
  });
  const cellSets = $$('.bf-cells').map((set) => ({ set, cells: [...set.children] })).filter((c) => c.cells.length === N);

  const gaugePct = document.querySelector('.bf-live-pct');
  const gaugeStep = document.querySelector('.bf-live-step');
  const gaugeEta = document.querySelector('.bf-live-eta');

  /* ---- The hero curve: charge against reading time ---- */
  const W = 1000;
  const H = 420;
  const X0 = 0.075;
  const X1 = 0.965;
  const TOP = 0.1;
  const BOT = 0.9;
  const xAt = (t) => (X0 + (X1 - X0) * (t / TOTAL)) * W;
  const yAt = (k) => (BOT - (BOT - TOP) * k) * H;
  const pathOf = (p) => `M${p.map(([x, y]) => `${f1(x)} ${f1(y)}`).join(' L')}`;
  let C = null;

  function buildCurve() {
    const curve = byId('bfCurve');
    if (!curve) return null;
    const pts = [[xAt(0), yAt(1 / N)]];
    let t = 0;
    steps.forEach((s, i) => {
      if (!i) return;
      t += s.min;
      pts.push([xAt(t), yAt((i + 1) / N)]);
    });
    const ghost = [[xAt(0), yAt(1 / N)]];
    t = 0;
    steps.slice(1).map((s) => s.min).sort((a, b) => b - a).forEach((m, j) => {
      t += m;
      ghost.push([xAt(t), yAt((j + 2) / N)]);
    });

    const drawSvg = curve.querySelector('.bf-curve-draw');
    const line = drawSvg.querySelector('.bf-curve-line');
    const d = pathOf(pts);
    line.setAttribute('d', d);
    drawSvg.querySelector('.bf-curve-area').setAttribute('d', `${d} L${f1(pts[N - 1][0])} ${f1(yAt(0))} L${f1(pts[0][0])} ${f1(yAt(0))} Z`);
    drawSvg.querySelector('.bf-curve-ghost').setAttribute('d', pathOf(ghost));

    // Grid: quarters, the 14% a reader arrives with, and minute ticks.
    const gridSvg = curve.querySelector('.bf-curve-grid');
    let lines = '';
    let ys = '';
    [0, 0.25, 0.5, 0.75, 1].forEach((k) => {
      lines += `<line${k ? '' : ' class="is-base"'} x1="0" x2="${W}" y1="${f1(yAt(k))}" y2="${f1(yAt(k))}" />`;
      ys += `<li style="--y:${f1((yAt(k) / H) * 100)}">${pct(k)}%</li>`;
    });
    lines += `<line class="is-endow" x1="0" x2="${f1(pts[0][0])}" y1="${f1(yAt(1 / N))}" y2="${f1(yAt(1 / N))}" />`;
    ys += `<li class="is-endow" style="--y:${f1((yAt(1 / N) / H) * 100)}">${pct(1 / N)}%</li>`;
    const every = TOTAL > 12 ? 4 : 2;
    let xs = '';
    const last = Math.floor(TOTAL / every) * every;
    for (let m = 0; m <= TOTAL + 1e-6; m += every) {
      lines += `<line x1="${f1(xAt(m))}" x2="${f1(xAt(m))}" y1="${f1(yAt(0))}" y2="${f1(yAt(0) + 8)}" />`;
      xs += `<li style="--x:${f1((xAt(m) / W) * 100)}">${m}${m === last ? ' min' : ''}</li>`;
    }
    gridSvg.innerHTML = lines;
    curve.querySelector('.bf-curve-axis.is-y').innerHTML = ys;
    curve.querySelector('.bf-curve-axis.is-x').innerHTML = xs;

    const stops = $$('.bf-cstop', curve);
    stops.forEach((li, i) => {
      if (!pts[i]) return;
      li.style.setProperty('--x', f1((pts[i][0] / W) * 100));
      li.style.setProperty('--y', f1((pts[i][1] / H) * 100));
    });

    // The ghost's label hangs below it, a little past its midpoint.
    const gl = curve.querySelector('.bf-curve-ghost-label');
    const g = ghost[Math.min(ghost.length - 1, 3)];
    if (gl && g) {
      gl.style.setProperty('--x', f1((g[0] / W) * 100));
      gl.style.setProperty('--y', f1((g[1] / H) * 100));
    }

    const cap = document.querySelector('.case-hero-cap');
    if (cap) cap.textContent = `Fig. ${pad(caseIndex + 1)} — The charge · ${N} steps · ${Math.round(TOTAL)} min`;

    curve.classList.add('is-built');
    return {
      curve,
      pts,
      gridSvg,
      drawSvg,
      axes: $$('.bf-curve-axis', curve),
      stops,
      you: curve.querySelector('.bf-curve-you'),
      youRead: curve.querySelector('.bf-curve-you b span'),
      ghostLabel: gl,
      gauges: $$('.bf-gauge', curve.parentElement),
      foot: curve.querySelector('.bf-curve-foot'),
    };
  }

  // Where a charge sits on this page's curve.
  function onCurve(k) {
    const p = C.pts;
    const j = Math.min(N - 2, Math.max(0, Math.floor(k * N) - 1));
    const k0 = (j + 1) / N;
    const u = clamp01((k - k0) * N);
    const x = p[j][0] + (p[j + 1][0] - p[j][0]) * u;
    const y = k <= 1 / N ? p[0][1] : p[j][1] + (p[j + 1][1] - p[j][1]) * u;
    return [k <= 1 / N ? p[0][0] : x, y];
  }

  /* ----------------------------------------------------------------
     5. RENDER — writes only; everything it needs was read already.
  ---------------------------------------------------------------- */
  const baseTitle = document.title;
  const STATE_TEXT = { done: 'Completed: ', now: 'Current: ', skipped: 'Skipped: ', todo: 'Not started: ' };
  const shown = { k: -1, sig: '', head: '', title: '', on: null, full: null };

  // Gauges keep their drum digits once they have rolled.
  function setRead(el, v) {
    if (!el || el.dataset.rolling) return;
    if (el.classList.contains('odo') && Site && Site.odometer) {
      if (el.dataset.odo !== v) Site.odometer(el, { value: v, immediate: true });
    } else if (el.textContent !== v) {
      el.textContent = v;
    }
  }

  function stateOf(i) {
    if (fill[i] >= 1) return 'done';
    if (i === cur) return 'now';
    if (i < cur || fill[i] > 0.02) return 'skipped';
    return 'todo';
  }
  function etaText(m) {
    if (m < 0.05) return 'Charged';
    if (m < 1) return 'Under 1 min to full';
    return `${Math.ceil(m)} min to full`;
  }

  function render() {
    const k = chargeOf();
    const states = steps.map((s, i) => stateOf(i));
    const sig = states.join('') + fill.map((f) => Math.round(f * 400)).join(',');
    const full = k >= 0.999;

    if (Math.abs(k - shown.k) > 0.0005) {
      shown.k = k;
      const p = pct(k);
      if (glow) glow.style.setProperty('--k', k.toFixed(3));
      if (rail) rail.style.setProperty('--k', k.toFixed(3));
      if (railPct) railPct.textContent = String(p);
      if (headPct) headPct.textContent = String(p);
      setRead(gaugePct, String(p));
      const eta = etaOf();
      if (railEta) railEta.textContent = etaText(eta);
      setRead(gaugeEta, full ? '0' : String(Math.max(1, Math.ceil(eta))));
      if (C) {
        const [x, y] = onCurve(k);
        C.you.style.setProperty('--x', f1((x / W) * 100));
        C.you.style.setProperty('--y', f1((y / H) * 100));
        if (C.youRead) C.youRead.textContent = String(p);
        C.stops.forEach((li, i) => li.classList.toggle('is-reached', k >= (i + 1) / N - 0.001));
      }
      renderFinale(k);
    }

    if (full !== shown.full) {
      shown.full = full;
      if (rail) rail.classList.toggle('is-full', full);
      if (head) head.classList.toggle('is-full', full);
      cellSets.forEach((c) => c.set.classList.toggle('is-full', full));
    }

    if (sig !== shown.sig) {
      shown.sig = sig;
      railSteps.forEach((r, i) => {
        r.li.className = `bf-rstep is-${states[i]}`;
        r.a.style.setProperty('--f', fill[i].toFixed(3));
        if (r.state) r.state.textContent = STATE_TEXT[states[i]];
        if (states[i] === 'now') r.a.setAttribute('aria-current', 'step');
        else r.a.removeAttribute('aria-current');
      });
      cellSets.forEach((c) => c.cells.forEach((cell, i) => {
        cell.className = states[i] === 'todo' ? '' : `is-${states[i]}`;
        cell.style.setProperty('--f', fill[i].toFixed(3));
      }));
    }

    const at = Math.min(cur, N - 1);
    const open = states.filter((s) => s !== 'done').length;
    const headText = cur >= N
      ? ['Review', full ? 'Charged' : `${open} step${open === 1 ? '' : 's'} to go`]
      : [`Step <b>${at + 1}</b> of ${N}`, steps[at].label];
    if (headText.join('|') !== shown.head) {
      shown.head = headText.join('|');
      if (headCount) headCount.innerHTML = headText[0];
      if (headName) headName.textContent = headText[1];
      setRead(gaugeStep, String(at + 1));
    }
    const title = cur >= 1 && cur < N ? `Step ${cur + 1} of ${N}: ${steps[cur].label} — ${data.title}` : baseTitle;
    if (title !== shown.title) { shown.title = title; document.title = title; }
  }

  /* ----------------------------------------------------------------
     6. UPDATE — on every scroll frame: cover what the reading line
        passed (unless it was carried there by a jump), work out the
        current step, render.
  ---------------------------------------------------------------- */
  let frame = 0;
  let savedFlash = 0;

  function update() {
    frame = 0;
    const vh = window.innerHeight;
    const ref = window.scrollY + vh * 0.5;
    if (lastRef === null) lastRef = window.scrollY < 2 && jumpUntil === 0 ? 0 : ref;

    let changed = false;
    let completed = false;
    if (performance.now() >= jumpUntil) {
      const lo = Math.min(lastRef, ref);
      const hi = Math.max(lastRef, ref);
      for (let i = 1; i < N; i++) {
        const s = steps[i];
        if (s.top >= hi || s.bottom <= lo) continue;
        const h = Math.max(1, s.bottom - s.top);
        const was = fill[i];
        if (addCover(i, clamp01((Math.max(lo, s.top) - s.top) / h), clamp01((Math.min(hi, s.bottom) - s.top) / h))) {
          changed = true;
          if (was < 1 && fill[i] >= 1) completed = true;
        }
      }
    }
    lastRef = ref;

    const next = stepAt(ref);
    if (next !== cur) {
      if (next < cur && next >= 1) backs += 1;
      cur = next;
    }

    // On once the hero has gone: the second step reaches the nav.
    const on = window.scrollY + 96 > steps[1].top && ref < sourcesTop;
    if (on !== shown.on) {
      shown.on = on;
      if (rail) rail.classList.toggle('is-on', on);
      if (head) head.classList.toggle('is-on', on);
      if (!on && sheetOpen) setSheet(false);
    }

    render();
    if (changed) saveSoon();
    if (completed && storageOK && railSaved) {
      railSaved.classList.add('is-shown');
      clearTimeout(savedFlash);
      savedFlash = setTimeout(() => railSaved.classList.remove('is-shown'), 1600);
    }
  }
  const request = () => { if (!frame) frame = requestAnimationFrame(update); };

  // Time on each step, counted while the page is in view.
  setInterval(() => {
    if (document.visibilityState !== 'visible') return;
    if (cur >= 1 && cur < N) dwell[cur] += 1;
    if (finaleInView) renderSession();
  }, 1000);

  /* ----------------------------------------------------------------
     7. THE SHEET — on narrow screens the header opens every step in a
        sheet from the bottom; Escape, the scrim or a step closes it.
  ---------------------------------------------------------------- */
  let sheetOpen = false;
  function setSheet(open) {
    if (!rail || !headBtn) return;
    const next = open && narrow.matches;
    if (next === sheetOpen) return;
    sheetOpen = next;
    rail.classList.toggle('is-open', next);
    if (scrim) scrim.classList.toggle('is-open', next);
    headBtn.setAttribute('aria-expanded', String(next));
    rail.inert = narrow.matches && !next;
    if (next) {
      if (scroller) scroller.stop();
      const target = rail.querySelector('a[aria-current]') || rail.querySelector('a');
      setTimeout(() => target && target.focus({ preventScroll: true }), reduced ? 0 : 120);
    } else {
      // The menu may have opened over the sheet: leave its scroll lock alone.
      if (scroller && !(Site.menu && Site.menu.isOpen)) scroller.start();
      if (rail.contains(document.activeElement)) headBtn.focus({ preventScroll: true });
    }
  }
  function syncNarrow() {
    if (!rail) return;
    if (!narrow.matches && sheetOpen) setSheet(false);
    rail.inert = narrow.matches && !sheetOpen;
  }
  if (headBtn) headBtn.addEventListener('click', () => setSheet(!sheetOpen));
  if (railClose) railClose.addEventListener('click', () => setSheet(false));
  const menuBtn = byId('menuBtn');
  if (menuBtn) menuBtn.addEventListener('click', () => setSheet(false));
  if (scrim) scrim.addEventListener('click', () => setSheet(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && sheetOpen) setSheet(false); });
  if (narrow.addEventListener) narrow.addEventListener('change', syncNarrow);
  syncNarrow();

  /* ----------------------------------------------------------------
     8. CHARGED — the review: the charge it ended on, what is still
        open, and the session as this page logged it.
  ---------------------------------------------------------------- */
  const finaleNum = document.querySelector('.bf-finale-num');
  const finaleState = document.querySelector('.bf-finale-state');
  const sessionEl = byId('bfSession');
  const NUMBER = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
  let finaleInView = false;
  let finaleRolled = false;

  function renderFinale(k) {
    if (!finaleEl) return;
    const full = k >= 0.999;
    finaleEl.classList.toggle('is-partial', !full);
    if (finaleState) {
      const open = steps.filter((s, i) => fill[i] < 1).length;
      finaleState.innerHTML = full
        ? '<span>Charged</span><i></i><span>Review</span>'
        : `<span>${pct(k)}% charged</span><i></i><span>${open} step${open === 1 ? '' : 's'} to go</span>`;
    }
    if (finaleNum && finaleRolled) setRead(finaleNum, String(pct(k)));
  }

  function fmtDur(sec) {
    if (sec < 60) return `${sec} s`;
    return `${Math.floor(sec / 60)} min ${pad(sec % 60)} s`;
  }

  function renderSession() {
    if (!sessionEl) return;
    const k = chargeOf();
    const states = steps.map((s, i) => stateOf(i));
    const q = (sel) => sessionEl.querySelector(sel);
    q('.bf-s-charge').textContent = `${pct(k)}%`;
    q('.bf-s-time').textContent = fmtDur(dwell.reduce((t, s) => t + s, 0));
    q('.bf-s-done').textContent = `${states.filter((s) => s === 'done').length} / ${N}`;
    q('.bf-s-skip').textContent = String(states.filter((s) => s === 'skipped').length);
    q('.bf-s-back').textContent = String(backs);

    const bars = q('.bf-session-steps');
    const most = Math.max(1, ...dwell.slice(1));
    if (bars.children.length !== N - 1) {
      bars.innerHTML = steps.slice(1).map(() => '<li class="bf-sbar"><span class="bf-sbar-track"><i></i></span><span></span></li>').join('');
    }
    [...bars.children].forEach((li, j) => {
      const i = j + 1;
      const sec = dwell[i];
      li.classList.toggle('is-skipped', fill[i] < 1);
      li.querySelector('i').style.setProperty('--h', (sec / most).toFixed(3));
      li.lastElementChild.innerHTML = `${steps[i].label}<b>${Math.floor(sec / 60)}:${pad(sec % 60)}${fill[i] < 1 ? ` · ${pct(fill[i])}%` : ''}</b>`;
    });

    const left = q('.bf-session-left');
    const open = steps.filter((s, i) => i && fill[i] < 1);
    if (left) {
      left.hidden = !open.length;
      if (open.length) {
        left.innerHTML = `${NUMBER[open.length]} step${open.length === 1 ? ' is' : 's are'} still open, kept as skipped and one click away: `
          + open.map((s) => `<a class="link" href="#${s.id}" data-cursor="Go">${s.label}</a>`).join(', ') + '.';
      }
    }
  }

  // Rule 4 promises a saved charge; say what is true where storage is off.
  if (!storageOK) {
    const r4 = document.querySelector('.bf-apply:nth-child(4) p');
    if (r4) r4.textContent = 'Scrolling back never drained the charge, and every step stays a link, so nothing you read is lost while the page is open.';
  }

  const resetBtn = byId('bfReset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      steps.forEach((s, i) => {
        if (!i) return;
        cover[i] = [];
        fill[i] = 0;
        dwell[i] = 0;
      });
      backs = 0;
      try { localStorage.removeItem(STORE); } catch (err) { /* blocked */ }
      jumpUntil = performance.now() + (reduced ? 160 : 2600);
      lastRef = null;
      render();
      renderSession();
      const settle = () => { jumpUntil = 0; lastRef = null; request(); };
      if (scroller) scroller.to(0, { duration: 2.2, onComplete: settle });
      else { window.scrollTo(0, 0); settle(); }
    });
  }

  /* ----------------------------------------------------------------
     Build everything that is drawn, with or without motion.
  ---------------------------------------------------------------- */
  C = buildCurve();

  // A return visit resumes: say where the charge was left.
  if (C && C.foot && resumedAt > 1 / N + 0.01 && resumedAt < 0.999) {
    const firstOpen = steps.find((s, i) => i && fill[i] < 1);
    const note = document.createElement('p');
    note.className = 'bf-curve-resume';
    note.innerHTML = `<span>Resumed</span>Your charge was saved at ${pct(resumedAt)}%.`
      + (firstOpen ? ` <a class="link" href="#${firstOpen.id}" data-cursor="Go">Continue at ${firstOpen.label}</a>` : '');
    C.foot.prepend(note);
  }

  measure();
  update();
  if (Site && Site.scroll) Site.scroll.on(request);
  else window.addEventListener('scroll', request, { passive: true });
  const remeasure = () => { measure(); request(); };
  window.addEventListener('resize', remeasure);
  window.addEventListener('load', remeasure);
  if ('ResizeObserver' in window) new ResizeObserver(remeasure).observe(byId('main'));
  if (Site && Site.on) Site.on('intro:done', () => { if (jumpUntil === Infinity) jumpUntil = performance.now() + 2200; });
  if (finaleEl && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      finaleInView = entry.isIntersecting;
      if (finaleInView) renderSession();
    }).observe(finaleEl);
  }

  /* ----------------------------------------------------------------
     9. MOTION — everything below runs on the shared runtime. Without
        it (a library failed to load) the page is simply shown.
  ---------------------------------------------------------------- */
  if (!A) {
    const pt = byId('pageTransition');
    if (pt) pt.style.display = 'none';
    document.documentElement.classList.remove('is-transitioning');
    finaleRolled = true;
    return;
  }

  // Run fn once el is on screen. If it is there as the hero lands, the
  // choreography's delay is kept; scrolled to later, it plays at once.
  function whenInView(el, delay, fn) {
    if (!el) return;
    const t0 = performance.now();
    Site.observe(el, () => fn(Math.max(0, delay - (performance.now() - t0))));
  }

  // Hidden state now, play once on arrival.
  function once(el, prepare, play) {
    if (!el) return;
    prepare(el);
    Site.observe(el, () => play(el));
  }

  // Items sharing a row step in left to right, `step` ms apart.
  function rowDelays(items, step) {
    let top = null;
    let col = 0;
    return items.map((el) => {
      const y = Math.round(el.getBoundingClientRect().top);
      col = y === top ? col + 1 : 0;
      top = y;
      return [el, col * step];
    });
  }

  function rollFigure(el, delay, duration = 1800) {
    utils.set(el, { opacity: 1 });
    Site.odometer(el, { value: el.dataset.value, delay, duration, turns: 1 });
  }
  function holdFigure(el) {
    el.dataset.value = el.textContent.trim();
    utils.set(el, { opacity: 0 });
  }

  /* ----------------------------------------------------------------
     10. HERO — the case-study entrance, then the curve charges itself:
         the grid, the line driven left to right, each step's node
         lighting as the line reaches it, the gauges rolling.
  ---------------------------------------------------------------- */
  const media = byId('caseHeroMedia');
  const tagsWrap = byId('caseTags');
  const metaBar = byId('caseMetaBar');
  const hero = {
    top: [document.querySelector('.case-back-link'), caseNoEl].filter(Boolean),
    ruler: heroRuler,
    tags: tagsWrap ? [...tagsWrap.children] : [],
    copy: [byId('caseSubtitle'), byId('caseTitle'), byId('caseTagline')].filter(Boolean),
    lines: [],
    meta: metaBar,
    metaItems: metaBar ? [...metaBar.children] : [],
  };
  const stopParts = (li) => li.querySelectorAll('.bf-cstop-no, .bf-cstop-name, .bf-cstop-val');

  function prepareHero() {
    if (reduced) return;
    utils.set(hero.top, { opacity: 0 });
    utils.set(hero.tags, { opacity: 0 });
    if (hero.ruler) utils.set(hero.ruler, { scaleX: 0 });
    hero.lines = hero.copy.map((el) => {
      const lines = Site.splitLines(el);
      utils.set(el, { opacity: 0 });
      lines.ready.then(() => utils.set(el, { opacity: 1 }));
      return lines;
    });
    utils.set(media, { clipPath: 'inset(50% 0% 50% 0%)' });
    utils.set(hero.meta, { opacity: 0 });
    utils.set(hero.metaItems, { opacity: 0, translateY: 14 });

    if (C) {
      utils.set([C.gridSvg, ...C.axes, C.foot], { opacity: 0 });
      utils.set(C.gauges, { opacity: 0, translateY: 12 });
      utils.set(C.drawSvg, { clipPath: 'inset(0% 100% 0% 0%)' });
      utils.set([C.you, C.ghostLabel].filter(Boolean), { opacity: 0 });
      C.stops.forEach((li) => utils.set(stopParts(li), { opacity: 0, translateY: 6 }));
    }
  }

  function heroEntrance() {
    if (reduced) return;
    const [subtitle, title, tagline] = hero.lines;
    const tl = createTimeline({ defaults: { ease: ease.out } })
      .add(hero.top, { opacity: [0, 1], translateY: [10, 0], duration: 900, delay: stagger(90) }, 0)
      .call(() => subtitle && subtitle.play({ duration: 1100 }), 80)
      .call(() => title && title.play({ duration: 1500, stagger: 120 }), 160)
      .call(() => tagline && tagline.play({ duration: 1200, stagger: 90 }), 560)
      .add(hero.tags, { opacity: [0, 1], translateY: [10, 0], duration: 900, delay: stagger(70) }, 900);
    if (hero.ruler) tl.add(hero.ruler, { scaleX: [0, 1], duration: 1700, ease: ease.inOut }, 60);

    whenInView(hero.meta, 1000, (delay) => {
      createTimeline({ delay, defaults: { ease: ease.out } })
        .add(hero.meta, { opacity: [0, 1], duration: 700, ease: 'out(2)' }, 0)
        .add(hero.metaItems, { opacity: [0, 1], translateY: [14, 0], duration: 1000, delay: stagger(80) }, 100);
    });
  }

  function animateHeroMedia() {
    if (reduced || !media) return;
    whenInView(media, 420, (delay) => {
      animate(media, {
        clipPath: ['inset(50% 0% 50% 0%)', 'inset(0% 0% 0% 0%)'],
        duration: 1400,
        delay,
        ease: ease.inOut,
        onComplete: () => { media.style.clipPath = ''; },
      });
      if (C) drawCurve(delay + 600);
    });
  }

  function drawCurve(delay) {
    const DRAW = 2600;
    const AT = 500;
    const tl = createTimeline({ delay, defaults: { ease: ease.out } })
      .add(C.gauges, { opacity: [0, 1], translateY: [12, 0], duration: 1000, delay: stagger(110) }, 0)
      .add([C.gridSvg, ...C.axes], { opacity: [0, 1], duration: 1100, ease: 'out(2)' }, 200)
      .add(C.drawSvg, { clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'], duration: DRAW, ease: 'out(2)' }, AT);
    // The gauges roll to what they read now.
    [gaugePct, gaugeStep, gaugeEta].filter(Boolean).forEach((el, i) => {
      tl.call(() => {
        el.dataset.rolling = '1';
        Site.odometer(el, { value: el.textContent.trim(), duration: 1500, turns: 1 });
        setTimeout(() => { delete el.dataset.rolling; shown.k = -1; shown.head = ''; render(); }, 1700);
      }, 150 + i * 110);
    });
    // Each node lights as the line reaches it: the clip eases out(2),
    // so it reaches a share u of the width at t = 1 - √(1 - u).
    const reach = (x) => 1 - Math.sqrt(1 - clamp01(x / W));
    C.stops.forEach((li, i) => {
      const at = AT + DRAW * reach(C.pts[i] ? C.pts[i][0] : 0);
      tl.add(stopParts(li), { opacity: [0, 1], translateY: [6, 0], duration: 700, delay: stagger(60) }, at);
    });
    tl.add([C.ghostLabel, C.foot].filter(Boolean), { opacity: [0, 1], duration: 900, ease: 'out(2)', delay: stagger(150) }, AT + DRAW * 0.6)
      .add(C.you, { opacity: [0, 1], duration: 700, ease: 'out(2)' }, AT + DRAW * 0.75);
  }

  /* ----------------------------------------------------------------
     11. STEP GATES — the charge each step starts at rolls up on
         drums; the review rolls to the charge the reader reached.
  ---------------------------------------------------------------- */
  function armGates() {
    $$('.bf-gate-num').forEach((num) => {
      const value = num.textContent.trim();
      const readout = num.closest('.bf-gate-charge') || num;
      if (reduced) {
        Site.odometer(num, { value, immediate: true });
        return;
      }
      utils.set(readout, { opacity: 0 });
      Site.observe(readout, () => {
        utils.set(readout, { opacity: 1 });
        Site.odometer(num, { value, duration: 2100, turns: 1, stagger: 90 });
      });
    });
    if (finaleNum) {
      const readout = finaleNum.closest('.bf-gate-charge') || finaleNum;
      if (reduced) {
        finaleRolled = true;
        Site.odometer(finaleNum, { value: String(pct(chargeOf())), immediate: true });
      } else {
        utils.set(readout, { opacity: 0 });
        Site.observe(readout, () => {
          utils.set(readout, { opacity: 1 });
          Site.odometer(finaleNum, { value: String(pct(chargeOf())), duration: 2300, turns: 1, stagger: 90 });
          setTimeout(() => { finaleRolled = true; }, 2500);
        });
      }
    }
  }

  /* ----------------------------------------------------------------
     12. SCROLL REVEALS — declared with data-reveal and armed by
         core.js. Tiles step in by row, display copy rises line by
         line, blocks lift. Nothing nested inside a revealed block is
         marked again, and the bespoke figures (13) animate themselves.
  ---------------------------------------------------------------- */
  const TILES = '.bf-tile, .bf-question, .bf-promise, .bf-break, .bf-ask, .bf-uses .case-panel, .bf-mode, .bf-state, .bf-rulecard, .bf-tests li, .bf-a11y li, .bf-decision, .bf-apply, .bf-tier, .bf-session-log > div';
  const UP = '.bf-gate-level, .bf-gate-q, .case-copy, .case-section-intro, .case-label, .bf-source, .bf-small, .bf-note-line, .bf-warn, .bf-rule, .case-bullets, .case-quote, .bf-phone, .bf-desk, .case-table-wrap, .bf-road, .bf-checks, .bf-session-foot, .bf-session-left';
  const LINES = '.bf-gate-title, .case-copy-lg, .case-subtitle, .case-section-title, .bf-lead, .case-closing, .bf-insight-line, .bf-insight-sub';
  const GATE_DELAY = { 'bf-gate-level': 0, 'bf-gate-title': 120, 'bf-gate-q': 420 };
  const OWN = '.bf-splitfig, .bf-motive, .bf-wash, .bf-four, .bf-mock, .bf-log, .bf-strip, .bf-session-steps';

  function armReveals() {
    const main = byId('main');
    const skip = (el) => el.hasAttribute('data-reveal')
      || el.closest('.case-hero, #contact, .case-next')
      || el.closest(OWN)
      || (el.parentElement && el.parentElement.closest('[data-reveal]'));
    const mark = (el, type, delay) => {
      if (skip(el)) return;
      el.setAttribute('data-reveal', type);
      const gate = Object.keys(GATE_DELAY).find((c) => el.classList.contains(c));
      const d = gate ? GATE_DELAY[gate] : delay;
      if (d) el.setAttribute('data-reveal-delay', String(d));
    };

    rowDelays($$(TILES, main).filter((el) => !skip(el)), 90).forEach(([el, delay]) => mark(el, 'up', delay));
    $$(UP, main).forEach((el) => mark(el, 'up'));
    $$(LINES, main).forEach((el) => mark(el, el.children.length ? 'up' : 'lines'));

    ['.case-next-eyebrow', '#caseNextTitle'].forEach((sel) => {
      const el = document.querySelector(sel);
      if (el && !el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', 'lines');
    });

    // core.js armed the page before these attributes existed.
    Site.reveals(main);
  }

  /* ----------------------------------------------------------------
     13. FIGURES — each plays once when it arrives.
  ---------------------------------------------------------------- */
  function armFigures() {
    // One long form, then the same fields as four short screens whose
    // bars fill screen by screen.
    once(document.querySelector('.bf-splitfig'), (el) => {
      utils.set($$('.bf-long-sheet > *', el), { opacity: 0 });
      utils.set(el.querySelector('.bf-split-arrow'), { scaleX: 0 });
      utils.set($$('.bf-scr', el), { opacity: 0, translateY: 14 });
      utils.set($$('.bf-scr-bar i.is-on', el), { opacity: 0.12 });
    }, (el) => {
      createTimeline({ delay: 250, defaults: { ease: ease.out } })
        .add($$('.bf-long-sheet > *', el), { opacity: [0, 1], duration: 500, delay: stagger(40) }, 0)
        .add(el.querySelector('.bf-split-arrow'), { scaleX: [0, 1], duration: 900, ease: ease.inOut }, 650)
        .add($$('.bf-scr', el), { opacity: [0, 1], translateY: [14, 0], duration: 900, delay: stagger(160) }, 1050)
        .add($$('.bf-scr-bar i.is-on', el), { opacity: [0.12, 1], duration: 320, delay: stagger(110) }, 1500);
    });

    // Motivation: the curve is drawn left to right, each mark lands.
    once(document.querySelector('.bf-motive'), (el) => {
      utils.set(el.querySelector('.bf-motive-svg'), { clipPath: 'inset(0% 100% 0% 0%)' });
      utils.set($$('.bf-motive-pt', el), { scale: 0 });
      utils.set($$('.bf-motive-keys li', el), { opacity: 0, translateY: 8 });
    }, (el) => {
      const AT = [0, 900, 1800];
      animate(el.querySelector('.bf-motive-svg'), { clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'], duration: 1900, delay: 300, ease: ease.inOut });
      animate($$('.bf-motive-pt', el), { scale: [0, 1], duration: 600, delay: (t, i) => 320 + AT[i], ease: 'out(3)' });
      animate($$('.bf-motive-keys li', el), { opacity: [0, 1], translateY: [8, 0], duration: 800, delay: (t, i) => 520 + AT[i], ease: ease.out });
    });

    // The car wash: two stamps arrive on the first card, then the share
    // who finished each card fills its bar.
    once(document.querySelector('.bf-wash'), (el) => {
      utils.set($$('.bf-stamps li.is-given', el), { scale: 0 });
      utils.set($$('.bf-card-bar', el), { '--g': 0 });
      $$('.bf-odo', el).forEach(holdFigure);
    }, (el) => {
      animate($$('.bf-stamps li.is-given', el), { scale: [0, 1], duration: 700, delay: stagger(180, { start: 400 }), ease: 'out(3)' });
      animate($$('.bf-card-bar', el), { '--g': [0, 1], duration: 1600, delay: stagger(220, { start: 950 }), ease: ease.out });
      $$('.bf-odo', el).forEach((o, i) => rollFigure(o, 950 + i * 220, 1600));
    });

    // Four batteries over the same ten questions: each charges at the
    // speed its bar moved, then the break-off it produced rolls in.
    once(document.querySelector('.bf-four'), (el) => {
      utils.set($$('.bf-four-row', el), { '--g': 0 });
      utils.set($$('.bf-four-val', el), { opacity: 0 });
      const q = el.querySelector('.bf-four-q');
      if (q) q.textContent = '01';
    }, (el) => {
      const RUN = 2800;
      const AT = 350;
      const EASES = { fast: 'out(3)', linear: 'linear', slow: 'in(3)' };
      const rows = $$('.bf-four-row', el);
      rows.forEach((r) => {
        if (r.dataset.ease) animate(r, { '--g': [0, 1], duration: RUN, delay: AT, ease: EASES[r.dataset.ease] || 'linear' });
      });
      const q = el.querySelector('.bf-four-q');
      if (q) {
        const o = { n: 1 };
        animate(o, { n: [1, 10], duration: RUN, delay: AT, ease: 'linear', onUpdate: () => { q.textContent = pad(Math.round(o.n)); } });
      }
      rows.forEach((r, i) => {
        const v = r.querySelector('.bf-four-val');
        const b = v.querySelector('b');
        const at = AT + RUN + 150 + i * 160;
        animate(v, { opacity: [0, 1], duration: 600, delay: at, ease: 'out(2)' });
        Site.odometer(b, { value: b.textContent.trim(), delay: at, duration: 1400, turns: 1 });
      });
    });

    // Broken promises, each one breaking in front of the reader.
    $$('.bf-break').forEach((card) => {
      const mock = card.querySelector('.bf-mock');
      const kind = card.dataset.break;
      if (kind === 'total') {
        once(mock, (m) => {
          m.querySelector('.bf-jump').classList.add('is-live');
          utils.set(m.querySelector('.bf-jump-a'), { opacity: 1, translateY: '0%' });
          utils.set(m.querySelector('.bf-jump-b'), { opacity: 0, translateY: '100%' });
          utils.set($$('.bf-jump-bar .is-extra', m), { flexGrow: 0, opacity: 0 });
        }, (m) => {
          createTimeline({ delay: 1100, defaults: { ease: ease.inOut } })
            .add(m.querySelector('.bf-jump-a'), { opacity: [1, 0], translateY: ['0%', '-100%'], duration: 650 }, 0)
            .add(m.querySelector('.bf-jump-b'), { opacity: [0, 1], translateY: ['100%', '0%'], duration: 650 }, 120)
            .add($$('.bf-jump-bar .is-extra', m), { flexGrow: [0, 1], opacity: [0, 1], duration: 900, delay: stagger(90) }, 150);
        });
      } else if (kind === 'back') {
        once(mock, (m) => {
          const val = m.querySelector('.bf-back-val');
          val.style.display = 'inline';
          utils.set(val, { opacity: 1 });
          utils.set(m.querySelector('.bf-back-caret'), { opacity: 0 });
          m.querySelector('.bf-back-field').style.borderColor = 'var(--c-line-2)';
        }, (m) => {
          const btn = m.querySelector('.bf-back-btn');
          const val = m.querySelector('.bf-back-val');
          createTimeline({ delay: 1200 })
            .call(() => btn.classList.add('is-press'), 0)
            .call(() => btn.classList.remove('is-press'), 260)
            .add(val, { opacity: [1, 0], duration: 380, ease: 'out(2)' }, 420)
            .call(() => {
              val.style.display = '';
              m.querySelector('.bf-back-field').style.borderColor = '';
              m.querySelector('.bf-back-caret').style.opacity = '';
            }, 820);
        });
      } else if (kind === 'fee') {
        once(mock, (m) => {
          utils.set(m.querySelector('.bf-fee-row.is-new'), { opacity: 0, translateY: -6 });
          m.querySelector('.bf-fee-row.is-total s').classList.add('is-plain');
          utils.set(m.querySelector('.bf-fee-row.is-total b'), { opacity: 0 });
        }, (m) => {
          createTimeline({ delay: 1300, defaults: { ease: ease.out } })
            .add(m.querySelector('.bf-fee-row.is-new'), { opacity: [0, 1], translateY: [-6, 0], duration: 700 }, 0)
            .call(() => m.querySelector('.bf-fee-row.is-total s').classList.remove('is-plain'), 700)
            .add(m.querySelector('.bf-fee-row.is-total b'), { opacity: [0, 1], duration: 600 }, 760);
        });
      }
    });

    // The three checks light in turn, and the flow reaches the stepper.
    once(document.querySelector('.bf-checks'), () => {}, (el) => {
      $$('.bf-check', el).forEach((c, i) => setTimeout(() => c.classList.add('is-lit'), 600 + i * 650));
    });

    // The event log writes itself, one event at a time.
    once(document.querySelector('.bf-log'), (el) => {
      utils.set($$('.bf-log-list li', el), { opacity: 0, translateX: -8 });
    }, (el) => {
      animate($$('.bf-log-list li', el), { opacity: [0, 1], translateX: [-8, 0], duration: 700, delay: stagger(130, { start: 300 }), ease: ease.out });
    });
  }

  // Reduced motion: the figures that otherwise animate into place.
  function stillFigures() {
    $$('.bf-check').forEach((c) => c.classList.add('is-lit'));
  }

  /* ----------------------------------------------------------------
     14. BOOT — hidden states and reveals are armed behind the closed
         shutter. It opens once the fonts are in (2.6 s at most), then
         the hero comes up and the curve charges.
  ---------------------------------------------------------------- */
  function ready() {
    const waits = [];
    if (document.fonts && document.fonts.ready) waits.push(document.fonts.ready);
    return Promise.race([Promise.all(waits), new Promise((resolve) => setTimeout(resolve, 2600))]);
  }

  prepareHero();
  armReveals();
  armGates();
  if (reduced) stillFigures();
  else armFigures();
  Site.nav.refresh();

  ready()
    .then(() => {
      remeasure();
      Site.nav.refresh();
      return Site.transition.reveal();
    })
    .then(() => {
      heroEntrance();
      animateHeroMedia();
      Site.emit('intro:done');
      remeasure();
    });
})();
