/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · case study · "The First Query"
   A bespoke study on the same chrome as case-study.html, told as a
   night climb: nine stages from sea level to a 3,000 m summit, from
   the basics of a search box to measuring conversational AI.

   The climb   Each [data-stage] section carries its elevation. The
               reader's altitude is interpolated between the stage
               tops from the scroll position, and drives the altimeter
               in the margin and the sky behind the page (ground haze →
               stars → first light at the summit).
   The route   One elevation profile, generated from the stages: drawn
               large in the hero as the map of the study, and again
               under every stage gate with the leg just climbed lit.
   Arrival     cover label → hidden states → fonts → the shutter opens
               → hero entrance → the route draws itself → 'intro:done'.
   Figures     every data block plays once on arrival: columns and bars
               grow, figures roll on drums, the search loop sends
               queries round it, the mock-ups type and answer.
   Reduced     final states everywhere; no loops; a still sky.
   ================================================================== */

(function () {
  const Site = window.Site;
  const A = Site && Site.anime;
  const { animate, createTimeline, stagger, utils } = A || {};
  const ease = A ? Site.motion.ease : {};
  const reduced = !A || Site.reduced;
  const root = document.documentElement;
  const byId = (id) => document.getElementById(id);
  const $$ = (sel, scope = document) => [...scope.querySelectorAll(sel)];
  const pad = (n) => String(n).padStart(2, '0');
  const f1 = (n) => n.toFixed(1);
  const fmt = (n) => Math.round(n).toLocaleString('en-US');

  /* ----------------------------------------------------------------
     0. Case number, shutter label and the next project — the same
        loop through CASE_STUDIES that case-study.js walks.
  ---------------------------------------------------------------- */
  const SLUG = 'search';
  const store = window.CASE_STUDIES || {};
  const data = store[SLUG] || { title: 'The First Query', year: '2026', next: 'suspension' };
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
     1. THE PROFILE — stages sit at equal steps along the route; each
        leg climbs in its own rhythm, like a pass road (a steep pull, a
        shelf, now and then a dip), and it is smoothed into one curve.
  ---------------------------------------------------------------- */
  const stages = $$('[data-stage]').map((el, i) => ({ el, i, elev: Number(el.dataset.elev) || 0, top: 0 }));
  const N = stages.length;
  const MAX = Math.max(1, ...stages.map((s) => s.elev));
  const W = 1000;
  const stageX = (i) => (i + 0.5) / N;
  // Two points between stops: [share of the leg, share of its rise].
  const LEGS = [
    [[0.35, 0.62], [0.68, 0.58]],
    [[0.3, 0.38], [0.62, 0.8]],
    [[0.42, 0.72], [0.76, 0.74]],
    [[0.28, 0.22], [0.6, 0.66]],
  ];

  // Catmull-Rom through every point, written as cubic Béziers.
  function smooth(p) {
    let d = `M${f1(p[0][0])} ${f1(p[0][1])}`;
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[i - 1] || p[i];
      const p1 = p[i];
      const p2 = p[i + 1];
      const p3 = p[i + 2] || p2;
      d += ` C${f1(p1[0] + (p2[0] - p0[0]) / 6)} ${f1(p1[1] + (p2[1] - p0[1]) / 6)}`
        + ` ${f1(p2[0] - (p3[0] - p1[0]) / 6)} ${f1(p2[1] - (p3[1] - p1[1]) / 6)}`
        + ` ${f1(p2[0])} ${f1(p2[1])}`;
    }
    return d;
  }

  // H: viewBox height; top / bot: where the summit and sea level sit.
  function profile(H, top, bot) {
    const y = (elev) => H * (bot - (bot - top) * (elev / MAX));
    const pts = [[0, y(0) + H * 0.02]];
    stages.forEach((s, i) => {
      if (i) {
        const a = stages[i - 1];
        const x0 = stageX(i - 1) * W;
        const dx = stageX(i) * W - x0;
        const rise = s.elev - a.elev;
        LEGS[(i - 1) % LEGS.length].forEach(([t, r]) => pts.push([x0 + dx * t, y(a.elev + rise * r)]));
      }
      pts.push([stageX(i) * W, y(s.elev)]);
    });
    pts.push([W, y(MAX) + H * 0.05]);
    return { d: smooth(pts), y, H };
  }

  /* ---- The hero route: profile, contour lines, a stop per stage ---- */
  function buildRoute() {
    const route = byId('fqRoute');
    if (!route || !N) return null;
    const { d, y, H } = profile(420, 0.3, 0.9);
    const gridSvg = route.querySelector('.fq-route-grid');
    const drawSvg = route.querySelector('.fq-route-draw');
    const line = drawSvg.querySelector('.fq-route-line');
    line.setAttribute('d', d);
    drawSvg.querySelector('.fq-route-area').setAttribute('d', `${d} L${W} ${H} L0 ${H} Z`);

    const axis = route.querySelector('.fq-route-axis');
    let lines = '';
    let marks = '';
    for (let m = 0; m <= MAX; m += 1000) {
      lines += `<line x1="0" x2="${W}" y1="${f1(y(m))}" y2="${f1(y(m))}" />`;
      marks += `<li style="--y:${f1((y(m) / H) * 100)}">${fmt(m)} m</li>`;
    }
    gridSvg.innerHTML = lines;
    axis.innerHTML = marks;

    const stops = $$('.fq-stop', route);
    stops.forEach((li, i) => {
      const s = stages[i];
      if (!s) return;
      li.style.setProperty('--x', f1(stageX(i) * 100));
      li.style.setProperty('--y', f1((y(s.elev) / H) * 100));
      li.querySelector('a').insertAdjacentHTML('beforeend', '<i class="fq-stop-leader" aria-hidden="true"></i><i class="fq-stop-dot" aria-hidden="true"></i>');
    });
    route.classList.add('is-built');

    const cap = document.querySelector('.case-hero-cap');
    if (cap) cap.textContent = `Fig. ${pad(caseIndex + 1)} — The route · 0 – ${fmt(MAX)} m`;

    return { route, gridSvg, drawSvg, line, axis, stops, H, car: route.querySelector('.fq-route-car'), dim: route.querySelector('.fq-route-dim') };
  }

  /* ---- "You are here" under every stage gate ---- */
  function buildTracks() {
    const { d, y, H } = profile(100, 0.12, 0.9);
    const svg = (cls) => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" focusable="false"><path d="${d}" /></svg>`;
    stages.forEach((s, i) => {
      const track = s.el.querySelector('.fq-track');
      if (!track) return;
      const x = stageX(i) * 100;
      track.innerHTML = `${svg('fq-track-base')}`
        + `<span class="fq-track-lit" style="--to:${f1(x)}">${svg('')}</span>`
        + `<span class="fq-track-here${x > 70 ? ' is-flip' : ''}" style="--x:${f1(x)};--y:${f1((y(s.elev) / H) * 100)}"><i></i><b>You are here · ${fmt(s.elev)} m</b></span>`;
      s.track = {
        el: track,
        lit: track.querySelector('.fq-track-lit'),
        here: [...track.querySelector('.fq-track-here').children],
        from: i ? stageX(i - 1) * 100 : 0,
        to: x,
      };
    });
  }

  /* ----------------------------------------------------------------
     2. THE SKY + THE ALTIMETER — the reader's altitude, read from the
        scroll position between stage tops.
  ---------------------------------------------------------------- */
  const sky = byId('fqSky');
  const altEl = byId('fqAlt');
  const altRead = altEl && altEl.querySelector('.fq-alt-read');
  const endEl = document.querySelector('.case-next');
  let altMarks = [];
  let endY = Infinity;

  // A tile of stars as an SVG data URI; seeded, so it never changes.
  function starField(size, count, seed, rMax) {
    let s = seed;
    const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
    let dots = '';
    for (let i = 0; i < count; i++) {
      dots += `<circle cx="${f1(rnd() * size)}" cy="${f1(rnd() * size)}" r="${(0.35 + rnd() * rMax).toFixed(2)}" fill="#fff6ea" fill-opacity="${(0.25 + rnd() * 0.75).toFixed(2)}"/>`;
    }
    return `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'>${dots}</svg>`)}")`;
  }

  function buildSky() {
    if (sky) {
      const [far, near] = $$('.fq-sky-stars', sky);
      if (far) far.style.backgroundImage = starField(360, 54, 11, 0.45);
      if (near) near.style.backgroundImage = starField(640, 22, 29, 0.9);
    }
    if (altEl) {
      const list = altEl.querySelector('.fq-alt-marks');
      list.innerHTML = stages.map((s) => `<li style="--h:${(s.elev / MAX).toFixed(4)}">${pad(s.i)}</li>`).join('');
      altMarks = [...list.children];
    }
  }

  function measure() {
    const sy = window.scrollY;
    stages.forEach((s) => { s.top = s.el.getBoundingClientRect().top + sy; });
    endY = endEl ? endEl.getBoundingClientRect().top + sy : Infinity;
  }

  function altitudeAt(mid) {
    if (!N || mid <= stages[0].top) return 0;
    for (let i = 1; i < N; i++) {
      const a = stages[i - 1];
      const b = stages[i];
      if (mid < b.top) return a.elev + (b.elev - a.elev) * ((mid - a.top) / Math.max(1, b.top - a.top));
    }
    return MAX;
  }

  let frame = 0;
  let lastK = -1;
  let lastRead = -1;
  let lastHere = -2;
  let onClimb = null;
  let atSummit = null;

  function update() {
    frame = 0;
    if (!N) return;
    const vh = window.innerHeight;
    const mid = window.scrollY + vh * 0.5;
    const m = altitudeAt(mid);
    const k = m / MAX;
    if (Math.abs(k - lastK) > 0.0004) {
      lastK = k;
      if (sky) sky.style.setProperty('--alt', k.toFixed(4));
      if (altEl) altEl.style.setProperty('--alt', k.toFixed(4));
    }
    if (!altEl) return;

    const read = Math.round(m / 10) * 10;
    if (read !== lastRead) {
      lastRead = read;
      altRead.textContent = String(read);
    }
    let here = -1;
    stages.forEach((s, i) => { if (mid >= s.top) here = i; });
    if (here !== lastHere) {
      lastHere = here;
      altMarks.forEach((li, i) => {
        li.classList.toggle('is-passed', i < here);
        li.classList.toggle('is-here', i === here);
      });
    }
    const on = mid > stages[0].top - vh * 0.35 && mid < endY;
    if (on !== onClimb) { onClimb = on; altEl.classList.toggle('is-on', on); }
    const summit = m >= MAX - 0.5;
    if (summit !== atSummit) { atSummit = summit; altEl.classList.toggle('is-summit', summit); }
  }
  const request = () => { if (!frame) frame = requestAnimationFrame(update); };

  /* ----------------------------------------------------------------
     3. THE SEARCH LOOP — six stations in a grid, wired by script so
        the arrows always meet the boxes. Queries travel round it: one
        lands first time, one fails and is rescued, one is rephrased.
  ---------------------------------------------------------------- */
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const EDGES = [
    { id: 'e1', from: 'entry', to: 'suggest' },
    { id: 'e2', from: 'suggest', to: 'understand' },
    { id: 'e3', from: 'understand', to: 'results' },
    { id: 'relevant', from: 'results', to: 'goal', label: 'relevant' },
    { id: 'zero', from: 'results', to: 'recover', label: 'zero or poor results', fail: true },
    { id: 'related', from: 'recover', to: 'goal', label: 'related path' },
    { id: 'newq', from: 'recover', to: 'suggest', label: 'new query' },
  ];
  const JOURNEYS = [
    ['e1', 'e2', 'e3', 'relevant'],
    ['e1', 'e2', 'e3', 'zero', 'related'],
    ['e1', 'e2', 'e3', 'zero', 'newq', 'e2', 'e3', 'relevant'],
  ];

  function buildLoop() {
    const fig = byId('fqLoop');
    if (!fig) return null;
    const grid = fig.querySelector('.fq-loop-grid');
    const svg = fig.querySelector('.fq-loop-wires');
    const node = (k) => grid.querySelector(`[data-node="${k}"]`);
    const el = (tag, attrs) => {
      const e = document.createElementNS(SVG_NS, tag);
      Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
      return e;
    };

    svg.innerHTML = '<defs>'
      + '<marker id="fqHead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto" markerUnits="userSpaceOnUse"><path class="fq-wire-head" d="M2 1.5 9 5 2 8.5" /></marker>'
      + '<marker id="fqHeadFail" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto" markerUnits="userSpaceOnUse"><path class="fq-wire-head is-fail" d="M2 1.5 9 5 2 8.5" /></marker>'
      + '</defs>';
    const wires = {};
    EDGES.forEach((e) => {
      const path = el('path', { class: `fq-wire${e.fail ? ' is-fail' : ''}`, 'marker-end': `url(#${e.fail ? 'fqHeadFail' : 'fqHead'})` });
      svg.appendChild(path);
      let label = null;
      if (e.label) {
        label = el('text', { class: `fq-wire-label${e.fail ? ' is-fail' : ''}` });
        label.textContent = e.label;
        svg.appendChild(label);
      }
      wires[e.id] = { path, label, edge: e };
    });
    const packet = el('circle', { class: 'fq-packet', r: '4', cx: '0', cy: '0' });
    svg.appendChild(packet);

    // Routes, in px of the grid: straight runs between neighbours, and
    // elbows for the branches through the row gap.
    function draw() {
      const g = grid.getBoundingClientRect();
      if (!g.width) return;
      const box = (k) => {
        const r = node(k).getBoundingClientRect();
        return { l: r.left - g.left, t: r.top - g.top, r: r.right - g.left, b: r.bottom - g.top, w: r.width, h: r.height };
      };
      svg.setAttribute('viewBox', `0 0 ${f1(g.width)} ${f1(g.height)}`);
      EDGES.forEach((e) => {
        const a = box(e.from);
        const b = box(e.to);
        let pts;
        let lab = null;
        if (e.id === 'relevant') {
          const x = a.l + a.w * 0.72;
          pts = [[x, a.b], [x, b.t]];
          lab = [x + 10, (a.b + b.t) / 2 + 3, 'start'];
        } else if (e.id === 'zero') {
          const x0 = a.l + a.w * 0.28;
          const x1 = b.l + b.w * 0.72;
          const ym = (a.b + b.t) / 2;
          pts = [[x0, a.b], [x0, ym], [x1, ym], [x1, b.t]];
          lab = [(x0 + x1) / 2, ym - 9, 'middle'];
        } else if (e.id === 'newq') {
          const x = a.l + a.w * 0.28;
          pts = [[x, a.t], [x, b.b]];
          lab = [x - 10, (a.t + b.b) / 2 + 3, 'end'];
        } else {
          const yy = a.t + a.h / 2;
          pts = [[a.r, yy], [b.l, yy]];
          if (e.label) lab = [(a.r + b.l) / 2, yy - 9, 'middle'];
        }
        const w = wires[e.id];
        w.path.setAttribute('d', `M${pts.map((p) => `${f1(p[0])} ${f1(p[1])}`).join(' L')}`);
        if (w.label && lab) {
          w.label.setAttribute('x', f1(lab[0]));
          w.label.setAttribute('y', f1(lab[1]));
          w.label.setAttribute('text-anchor', lab[2]);
        }
      });
    }
    draw();
    if ('ResizeObserver' in window) new ResizeObserver(draw).observe(grid);

    function hit(k) {
      const n = node(k);
      n.classList.add('is-hit');
      setTimeout(() => n.classList.remove('is-hit'), 700);
    }

    let j = 0;
    function journey(done) {
      const ids = JOURNEYS[j++ % JOURNEYS.length];
      const tl = createTimeline({ onComplete: done });
      tl.call(() => {
        packet.classList.remove('is-fail', 'is-rescued');
        const start = wires[ids[0]].path.getPointAtLength(0);
        packet.setAttribute('cx', start.x);
        packet.setAttribute('cy', start.y);
        hit('entry');
      }, 0);
      tl.add(packet, { opacity: [0, 1], duration: 300, ease: 'out(2)' }, 0);
      let at = 200;
      ids.forEach((id) => {
        const w = wires[id];
        const L = w.path.getTotalLength();
        const dur = Math.max(480, L * 2.4);
        const p = { t: 0 };
        tl.call(() => {
          w.path.classList.add('is-live');
          if (id === 'zero') packet.classList.add('is-fail');
          if (id === 'related' || id === 'newq') {
            packet.classList.remove('is-fail');
            packet.classList.add('is-rescued');
          }
        }, at);
        tl.add(p, {
          t: [0, 1],
          duration: dur,
          ease: 'inOut(1.4)',
          onUpdate: () => {
            const pt = w.path.getPointAtLength(p.t * L);
            packet.setAttribute('cx', f1(pt.x));
            packet.setAttribute('cy', f1(pt.y));
          },
        }, at);
        at += dur;
        tl.call(() => {
          w.path.classList.remove('is-live');
          hit(w.edge.to);
        }, at);
        at += 140;
      });
      tl.add(packet, { opacity: [1, 0], duration: 500, ease: 'out(2)' }, at + 300);
      return tl;
    }

    return { fig, svg, nodes: ['entry', 'suggest', 'understand', 'results', 'goal', 'recover'].map(node), journey };
  }

  /* ----------------------------------------------------------------
     Build everything that is drawn, with or without motion.
  ---------------------------------------------------------------- */
  const R = buildRoute();
  buildTracks();
  const loop = buildLoop();
  buildSky();

  measure();
  update();
  if (Site && Site.scroll) Site.scroll.on(request);
  else window.addEventListener('scroll', request, { passive: true });
  const remeasure = () => { measure(); request(); };
  window.addEventListener('resize', remeasure);
  window.addEventListener('load', remeasure);
  if ('ResizeObserver' in window) new ResizeObserver(remeasure).observe(byId('main'));

  /* ----------------------------------------------------------------
     4. MOTION — everything below runs on the shared runtime. Without
        it (a library failed to load) the page is simply shown.
  ---------------------------------------------------------------- */
  if (!A) {
    const pt = byId('pageTransition');
    if (pt) pt.style.display = 'none';
    root.classList.remove('is-transitioning');
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

  // A loop that only runs while its block is on screen: each run builds
  // a fresh timeline (geometry may have changed), with a rest between.
  function looper(el, run, gap = 1000) {
    let tl = null;
    let running = false;
    let visible = false;
    let timer = 0;
    const start = () => {
      timer = 0;
      if (!visible) return;
      running = true;
      tl = run(() => {
        running = false;
        timer = setTimeout(start, gap);
      });
    };
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        if (running && tl) tl.play();
        else if (!timer) start();
      } else {
        if (running && tl) tl.pause();
        if (timer) { clearTimeout(timer); timer = 0; }
      }
    }).observe(el);
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

  /* ----------------------------------------------------------------
     5. HERO — the case-study entrance, then the route draws itself:
        contour lines, the profile driven left to right, a stop
        lighting as the line reaches it, and a lamp climbing the pass.
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
  const stopParts = (li) => li.querySelectorAll('.fq-stop-no, .fq-stop-name, .fq-stop-elev');

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

    if (R) {
      utils.set([R.gridSvg, R.axis, R.dim], { opacity: 0 });
      utils.set(R.drawSvg, { clipPath: 'inset(0% 100% 0% 0%)' });
      R.stops.forEach((li) => {
        utils.set(stopParts(li), { opacity: 0, translateY: 8 });
        utils.set(li.querySelector('.fq-stop-leader'), { scaleY: 0 });
        utils.set(li.querySelector('.fq-stop-dot'), { scale: 0 });
      });
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
      if (R) drawRoute(delay + 600);
    });
  }

  function drawRoute(delay) {
    const DRAW = 2800;
    const AT = 300;
    const tl = createTimeline({ delay, defaults: { ease: ease.out } })
      .add([R.gridSvg, R.axis], { opacity: [0, 1], duration: 1100, ease: 'out(2)' }, 0)
      .add(R.drawSvg, { clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'], duration: DRAW, ease: 'linear' }, AT);
    R.stops.forEach((li, i) => {
      const at = AT + DRAW * stageX(i);
      tl.add(li.querySelector('.fq-stop-dot'), { scale: [0, 1], duration: 700, ease: 'out(3)' }, at)
        .add(li.querySelector('.fq-stop-leader'), { scaleY: [0, 1], duration: 900, ease: ease.inOut }, at + 60)
        .add(stopParts(li), { opacity: [0, 1], translateY: [8, 0], duration: 800, delay: stagger(60) }, at + 420);
    });
    tl.add(R.dim, { opacity: [0, 1], duration: 1000, ease: 'out(2)' }, AT + DRAW)
      .call(startCar, AT + DRAW + 700);
  }

  // The lamp climbs from sea level to the summit, rests, and climbs again.
  function startCar() {
    if (!R.car) return;
    const L = R.line.getTotalLength();
    const o = { t: 0 };
    const place = () => {
      const p = R.line.getPointAtLength(o.t * L);
      R.car.style.left = `${f1((p.x / W) * 100)}%`;
      R.car.style.top = `${f1((p.y / R.H) * 100)}%`;
    };
    place();
    const drive = createTimeline({ loop: true, loopDelay: 1600, autoplay: false })
      .add(R.car, { opacity: [0, 1], duration: 700, ease: 'out(2)' }, 0)
      .add(o, { t: [0, 1], duration: 11000, ease: 'inOut(1.3)', onUpdate: place }, 0)
      .add(R.car, { opacity: [1, 0], duration: 900, ease: 'in(2)' }, 10200);
    new IntersectionObserver(([entry]) => (entry.isIntersecting ? drive.play() : drive.pause())).observe(R.route);
  }

  /* ----------------------------------------------------------------
     6. STAGE GATES — the elevation rolls up on drums with its leading
        zeros dimmed, the leg since the last stage is driven on the
        strip and the marker drops in; first light at the summit.
  ---------------------------------------------------------------- */
  function armGates() {
    stages.forEach((s) => {
      const num = s.el.querySelector('.fq-gate-num');
      const sun = s.el.querySelector('.fq-sunline');
      if (num) {
        const value = num.textContent.trim();
        const dimLeading = () => {
          let k = 0;
          while (k < value.length - 1 && value[k] === '0') k++;
          [...num.querySelectorAll('.odo-col')].slice(0, k).forEach((c) => c.classList.add('is-lead'));
        };
        // The whole readout (digits and unit) waits for the roll.
        const readout = num.closest('.fq-gate-alt') || num;
        if (reduced) {
          Site.odometer(num, { value, immediate: true });
          dimLeading();
        } else {
          utils.set(readout, { opacity: 0 });
          Site.observe(readout, () => {
            utils.set(readout, { opacity: 1 });
            Site.odometer(num, { value, duration: 2100, turns: 1, stagger: 90 });
            dimLeading();
          });
        }
      }
      if (reduced) return;
      if (s.track) {
        const t = s.track;
        utils.set(t.lit, { '--to': t.from });
        utils.set(t.here, { opacity: 0 });
        Site.observe(t.el, () => {
          createTimeline({ delay: 250 })
            .add(t.lit, { '--to': [t.from, t.to], duration: 1800, ease: ease.inOut }, 0)
            .add(t.here, { opacity: [0, 1], translateX: [-6, 0], duration: 800, delay: stagger(140), ease: ease.out }, 1550);
        });
      }
      if (sun) {
        utils.set(sun, { scaleX: 0 });
        Site.observe(sun, () => animate(sun, { scaleX: [0, 1], duration: 2400, delay: 600, ease: ease.inOut }));
      }
    });
  }

  /* ----------------------------------------------------------------
     7. SCROLL REVEALS — declared with data-reveal and armed by
        core.js. Tiles step in by row, display copy rises line by line,
        blocks lift. Nothing nested inside a revealed block is marked
        again, and the bespoke figures (section 8) animate themselves.
  ---------------------------------------------------------------- */
  const TILES = '.fq-question, .fq-step, .fq-grade, .fq-lens-list > li, .fq-exp, .fq-readout, .fq-comp, .fq-qcard, .fq-fap-col, .case-panel, .fq-type, .fq-quad, .fq-phase, .fq-move, .fq-log > div, .fq-dodont > div, .fq-trust-list > div, .fq-spectrum-modes > div, .case-job, .fq-source-list > li';
  const UP = '.fq-gate-level, .fq-gate-q, .case-copy, .case-section-intro, .case-label, .fq-source, .fq-small, .fq-note-line, .fq-note, .fq-warn, .fq-privacy, .fq-confidence, .fq-pattern-rule, .case-bullets, .fq-recovery, .fq-loop-hint, .fq-spectrum-ends, .fq-mock, .fq-chat, .fq-success, .fq-hbars, .fq-stack, .fq-lexicon, .case-table-wrap';
  const LINES = '.fq-gate-title, .case-copy-lg, .case-subtitle, .case-section-title, .fq-lead, .case-closing';
  const GATE_DELAY = { 'fq-gate-level': 0, 'fq-gate-title': 120, 'fq-gate-q': 420 };

  function armReveals() {
    const main = byId('main');
    // Checked as each element is marked, so a block marked a moment ago
    // already shelters everything inside it.
    const skip = (el) => el.hasAttribute('data-reveal')
      || el.closest('.case-hero, #contact, .case-next')
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
     8. FIGURES — each plays once when it arrives.
  ---------------------------------------------------------------- */
  function rollFigure(el, delay, duration = 1800) {
    utils.set(el, { opacity: 1 });
    Site.odometer(el, { value: el.dataset.value, delay, duration, turns: 1 });
  }
  function holdFigure(el) {
    el.dataset.value = el.textContent.trim();
    utils.set(el, { opacity: 0 });
  }

  function armFigures() {
    // Readouts, component stats and the summit log roll on drums.
    $$('.fq-odo')
      .filter((el) => !el.closest('.fq-success, .fq-hbars'))
      .forEach((el) => {
        const host = el.closest('[data-reveal]');
        const delay = Number((host && host.dataset.revealDelay) || 0) + 150;
        holdFigure(el);
        Site.observe(el, () => rollFigure(el, delay));
      });

    // Search success: three columns rise, their figures riding on top.
    once(document.querySelector('.fq-success'), (el) => {
      utils.set($$('.fq-col', el), { '--g': 0 });
      $$('.fq-odo', el).forEach(holdFigure);
    }, (el) => {
      animate($$('.fq-col', el), { '--g': [0, 1], duration: 1900, delay: stagger(200, { start: 250 }), ease: ease.out });
      $$('.fq-odo', el).forEach((o, i) => rollFigure(o, 250 + i * 200, 1900));
    });

    // Horizontal bars: each row fills to its share.
    $$('.fq-hbars').forEach((fig) => once(fig, (el) => {
      utils.set($$('li', el), { '--g': 0 });
      $$('.fq-odo', el).forEach(holdFigure);
    }, (el) => {
      animate($$('li', el), { '--g': [0, 1], duration: 1500, delay: stagger(110, { start: 200 }), ease: ease.out });
      $$('.fq-odo', el).forEach((o, i) => rollFigure(o, 200 + i * 110, 1500));
    }));

    // Ratios under the component stats.
    $$('.fq-ratio').forEach((r) => once(r, (el) => utils.set(el, { '--g': 0 }), (el) => {
      animate(el, { '--g': [0, 1], duration: 1700, delay: 400, ease: ease.inOut });
    }));

    // Query cards: the shopper's query types itself into the field and
    // the difficulty meter fills to the share of stores that fail it.
    $$('.fq-qcard').forEach((card) => once(card, (el) => {
      const typed = el.querySelector('.fq-typed');
      typed.dataset.full = typed.textContent;
      typed.setAttribute('aria-hidden', 'true');
      typed.insertAdjacentHTML('beforebegin', `<span class="sr-only">${typed.dataset.full}</span>`);
      typed.textContent = '';
      utils.set(el.querySelector('.fq-qmeter'), { '--g': 0 });
    }, (el) => {
      const typed = el.querySelector('.fq-typed');
      const full = typed.dataset.full;
      const start = Number(el.dataset.revealDelay || 0) + 450;
      const o = { n: 0 };
      animate(o, { n: [0, full.length], duration: full.length * 60, delay: start, ease: 'linear', onUpdate: () => { typed.textContent = full.slice(0, Math.round(o.n)); } });
      animate(el.querySelector('.fq-qmeter'), { '--g': [0, 1], duration: 1500, delay: start + 300, ease: ease.out });
    }));

    // The search loop: stations step in, the wires light, then queries
    // start running round it.
    if (loop) {
      once(loop.fig, () => {
        utils.set(loop.nodes, { opacity: 0, translateY: 14 });
        utils.set(loop.svg, { opacity: 0 });
      }, () => {
        createTimeline({ delay: 200, defaults: { ease: ease.out } })
          .add(loop.nodes, { opacity: [0, 1], translateY: [14, 0], duration: 900, delay: stagger(140) }, 0)
          .add(loop.svg, { opacity: [0, 1], duration: 1000, ease: 'out(2)' }, 800)
          .call(() => looper(loop.fig, loop.journey, 700), 1600);
      });
    }

    // Autosuggest: type, open, arrow down through the list (each
    // highlight copies into the box), press enter, rest, again.
    const suggest = document.querySelector('.fq-suggest');
    if (suggest) {
      const q = suggest.querySelector('.fq-suggest-q');
      const items = $$('.fq-suggest-list li', suggest);
      const [down, enter] = $$('.fq-keys kbd', suggest);
      const TYPED = q.textContent;
      const fill = (li) => {
        const base = li.querySelector('span').textContent + li.querySelector('b').textContent;
        const scope = li.querySelector('em');
        return scope ? `${base} · ${scope.textContent}` : base;
      };
      const press = (k) => {
        if (!k) return;
        k.classList.add('is-press');
        setTimeout(() => k.classList.remove('is-press'), 200);
      };
      const run = (done) => {
        const tl = createTimeline({ onComplete: done });
        tl.call(() => {
          q.textContent = '';
          suggest.classList.remove('is-open');
          items.forEach((li) => li.classList.remove('is-active'));
        }, 0);
        let at = 450;
        [...TYPED].forEach((_, i) => {
          tl.call(() => { q.textContent = TYPED.slice(0, i + 1); }, at);
          at += 170;
        });
        tl.call(() => suggest.classList.add('is-open'), at);
        tl.add(items, { opacity: [0, 1], translateY: [-4, 0], duration: 450, delay: stagger(45), ease: ease.out }, at);
        at += 1100;
        [0, 1, 2].forEach((k) => {
          tl.call(() => {
            press(down);
            items.forEach((li, idx) => li.classList.toggle('is-active', idx === k));
            q.textContent = fill(items[k]);
          }, at);
          at += 720;
        });
        tl.call(() => press(enter), at);
        at += 260;
        tl.add(items, { opacity: [1, 0], duration: 350, ease: 'out(2)' }, at);
        tl.call(() => suggest.classList.remove('is-open'), at + 120);
        tl.call(() => {}, at + 2200);
        return tl;
      };
      once(suggest, () => {
        q.textContent = '';
        utils.set(items, { opacity: 0 });
      }, () => looper(suggest, run, 900));
    }

    // Zero results: the dead end, then each way out of it.
    once(document.querySelector('.fq-zero'), (el) => {
      utils.set($$('.fq-zero-list li', el), { opacity: 0, translateX: -10 });
    }, (el) => {
      animate($$('.fq-zero-list li', el), { opacity: [0, 1], translateX: [-10, 0], duration: 900, delay: stagger(280, { start: 500 }), ease: ease.out });
    });

    // The stakes spectrum: the scale draws, domains take their places.
    once(document.querySelector('.fq-spectrum'), (el) => {
      utils.set(el.querySelector('.fq-spectrum-bar'), { scaleX: 0 });
      utils.set($$('.fq-spectrum-zones li', el), { opacity: 0, translateY: 10 });
    }, (el) => {
      animate(el.querySelector('.fq-spectrum-bar'), { scaleX: [0, 1], duration: 1900, delay: 200, ease: ease.inOut });
      animate($$('.fq-spectrum-zones li', el), { opacity: [0, 1], translateY: [10, 0], duration: 900, delay: stagger(130, { start: 500 }), ease: ease.out });
    });

    // Banking: the amount matches, the raw bank string is struck and
    // the merchant's real name takes its place, the action arrives gated.
    once(document.querySelector('.fq-bank'), (el) => {
      el.querySelector('.fq-txn-raw').style.textDecorationLine = 'none';
      utils.set(el.querySelectorAll('.fq-txn-clean, .fq-txn-name small'), { opacity: 0, translateY: 6 });
      utils.set(el.querySelector('.fq-txn.is-action'), { opacity: 0, translateY: 10 });
      el.classList.add('is-raw');
    }, (el) => {
      createTimeline({ delay: 700, defaults: { ease: ease.out } })
        .call(() => el.classList.remove('is-raw'), 0)
        .call(() => { el.querySelector('.fq-txn-raw').style.textDecorationLine = 'line-through'; }, 800)
        .add(el.querySelectorAll('.fq-txn-clean, .fq-txn-name small'), { opacity: [0, 1], translateY: [6, 0], duration: 800, delay: stagger(120) }, 1000)
        .add(el.querySelector('.fq-txn.is-action'), { opacity: [0, 1], translateY: [10, 0], duration: 900 }, 1800);
    });

    // Lay words → clinical terms, one row at a time.
    once(document.querySelector('.fq-lexicon'), (el) => {
      utils.set($$('.fq-lex-arrow', el), { scaleX: 0 });
      utils.set($$('.fq-clin', el), { opacity: 0, translateX: -12 });
    }, (el) => {
      $$('li', el).forEach((li, i) => {
        const at = 350 + i * 420;
        animate(li.querySelector('.fq-lex-arrow'), { scaleX: [0, 1], duration: 900, delay: at, ease: ease.inOut });
        animate(li.querySelector('.fq-clin'), { opacity: [0, 1], translateX: [-12, 0], duration: 1000, delay: at + 600, ease: ease.out });
      });
    });

    // Better / no change / worse, filled as one continuous bar.
    once(document.querySelector('.fq-stack'), (el) => {
      utils.set($$('.fq-stack-bar i', el), { scaleX: 0 });
    }, (el) => {
      const tl = createTimeline({ delay: 350 });
      let at = 0;
      $$('.fq-stack-bar i', el).forEach((seg) => {
        const d = (parseFloat(seg.style.getPropertyValue('--v')) || 33) * 22;
        tl.add(seg, { scaleX: [0, 1], duration: d, ease: 'linear' }, at);
        at += d;
      });
    });

    // The eyes-off-road budget runs like a timer to twelve seconds.
    once(document.querySelector('.fq-glance-meter'), (el) => {
      el.style.setProperty('--g', 0);
      el.querySelector('.fq-glance-t').textContent = '0.0';
    }, (el) => {
      const t = el.querySelector('.fq-glance-t');
      const o = { s: 0 };
      animate(o, {
        s: [0, 12],
        duration: 3200,
        delay: 450,
        ease: 'linear',
        onUpdate: () => {
          el.style.setProperty('--g', (o.s / 12).toFixed(4));
          t.textContent = o.s.toFixed(1);
        },
      });
    });

    // AI on top: each layer settles onto the one below it.
    once(document.querySelector('.fq-layers'), (el) => {
      utils.set($$('.fq-layer', el), { opacity: 0, translateY: -18 });
    }, (el) => {
      animate($$('.fq-layer', el).reverse(), { opacity: [0, 1], translateY: [-18, 0], duration: 1100, delay: stagger(280, { start: 200 }), ease: ease.out });
    });

    // Conversations play out: the user speaks, the assistant thinks
    // (dots in its bubble, which already holds its final size), answers.
    $$('.fq-chat').forEach((chat) => once(chat, (el) => {
      utils.set($$('.fq-msg', el), { opacity: 0, translateY: 12 });
      utils.set(el.querySelectorAll('.fq-chips span, .fq-cards > div, .fq-ledger li, .fq-actions span'), { opacity: 0, translateY: 8 });
    }, (el) => {
      const tl = createTimeline({ delay: 450, defaults: { ease: ease.out } });
      let at = 0;
      $$('.fq-msg', el).forEach((msg) => {
        if (!msg.classList.contains('is-bot')) {
          tl.add(msg, { opacity: [0, 1], translateY: [12, 0], duration: 700 }, at);
          at += msg.classList.contains('is-user') ? 850 : 600;
          return;
        }
        const parts = msg.querySelectorAll('.fq-chips span, .fq-cards > div, .fq-ledger li, .fq-actions span');
        tl.call(() => {
          msg.classList.add('is-typing');
          msg.insertAdjacentHTML('afterbegin', '<span class="fq-typing" aria-hidden="true"><i></i><i></i><i></i></span>');
        }, at);
        tl.add(msg, { opacity: [0, 1], translateY: [12, 0], duration: 700 }, at);
        at += 1000;
        tl.call(() => {
          msg.classList.remove('is-typing');
          const dots = msg.querySelector('.fq-typing');
          if (dots) dots.remove();
        }, at);
        if (parts.length) tl.add(parts, { opacity: [0, 1], translateY: [8, 0], duration: 700, delay: stagger(90) }, at + 150);
        at += 700 + parts.length * 90;
      });
    }));

    // Measurement strata build from the bottom up: system first.
    once(document.querySelector('.fq-strata'), (el) => {
      utils.set($$('.fq-stratum', el), { opacity: 0, translateY: 22 });
    }, (el) => {
      animate($$('.fq-stratum', el).reverse(), { opacity: [0, 1], translateY: [22, 0], duration: 1100, delay: stagger(260, { start: 150 }), ease: ease.out });
    });

    // The build road: each phase's gate closes in turn.
    once(document.querySelector('.fq-phases'), () => {}, (el) => {
      const tl = createTimeline();
      $$('.fq-gatebox', el).forEach((g, i) => tl.call(() => g.classList.add('is-passed'), 1500 + i * 700));
    });
  }

  // Reduced motion: the figures that otherwise animate into place.
  function stillFigures() {
    $$('.fq-gatebox').forEach((g) => g.classList.add('is-passed'));
    const suggest = document.querySelector('.fq-suggest');
    if (suggest) {
      suggest.classList.add('is-open');
      const items = $$('.fq-suggest-list li', suggest);
      if (items[2]) items[2].classList.add('is-active');
    }
  }

  /* ----------------------------------------------------------------
     9. BOOT — hidden states and reveals are armed behind the closed
        shutter. It opens once the fonts are in (2.6 s at most), then
        the hero comes up and the route draws itself.
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
