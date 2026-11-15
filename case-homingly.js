/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · case study · "Homingly"
   A bespoke study on the same chrome as case-study.html, drawn as an
   open plan: pricing is the first wall, and the estimate is the door.

   Arrival      cover label → hidden states → fonts → the shutter opens
                → hero entrance → the estimator's three steps arrive
                one by one, and an unknown price ("₹ ?") settles into
                one honest range on a measured scale → 'intro:done'.
   Figures      each plays once when it arrives: the wall stops three
                paths; the same wall gets a door that swings open; the
                floor plan's happy path lights up in order, 01 to 13;
                the ranges and the receipts add themselves up and say
                so only if the sums are right.
   Walkthrough  the 13-screen happy path, pinned and panned by scroll
                (the showroom's detent), one screen in focus with its
                caption, a needle on a measured floor.
   Reduced      final states everywhere; the walkthrough still follows
                the scroll, without easing or rolling.
   ================================================================== */

(function () {
  const Site = window.Site;
  const A = Site && Site.anime;
  const { animate, createTimeline, stagger, utils } = A || {};
  const ease = A ? Site.motion.ease : {};
  const reduced = !A || Site.reduced;
  const byId = (id) => document.getElementById(id);
  const $ = (sel, scope = document) => scope.querySelector(sel);
  const $$ = (sel, scope = document) => [...scope.querySelectorAll(sel)];
  const pad = (n) => String(n).padStart(2, '0');
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const round1 = (v) => Math.round(v * 10) / 10;

  /* ----------------------------------------------------------------
     0. Case number, shutter label and the next project — the same
        loop through CASE_STUDIES that case-study.js walks.
  ---------------------------------------------------------------- */
  const SLUG = 'homingly';
  const store = window.CASE_STUDIES || {};
  const data = store[SLUG] || { title: 'Homingly', year: '2021', next: 'suspension' };
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
  const heroRuler = $('.case-hero-ruler');
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
    const nextEyebrow = $('.case-next-eyebrow');
    if (nextEyebrow) nextEyebrow.textContent = `Next project · ${caseNo(data.next)}`;
  }

  /* ----------------------------------------------------------------
     1. HONEST SUMS — the page adds its own numbers up and only says
        "lines add up" when they do. Runs with or without motion.
  ---------------------------------------------------------------- */
  const rangeSum = byId('rangeSum');
  function checkRanges() {
    if (!rangeSum) return;
    const rows = $$('.hm-rangerow');
    const lo = round1(rows.reduce((t, r) => t + parseFloat(r.style.getPropertyValue('--lo')), 0));
    const hi = round1(rows.reduce((t, r) => t + parseFloat(r.style.getPropertyValue('--hi')), 0));
    const ok = lo === 3.4 && hi === 4.1;
    rangeSum.classList.toggle('is-ok', ok);
    if (!ok) $('.hm-sum-text', rangeSum).textContent = `The four ranges add up to ₹${lo}L – ₹${hi}L.`;
  }
  function checkReceipt(r) {
    const lines = $$('dd[data-n]', r).reduce((t, dd) => t + Number(dd.dataset.n), 0);
    const total = Number($('dd[data-total]', r).dataset.total);
    const ok = lines === total;
    r.classList.toggle('is-ok', ok);
    const check = $('.hm-receipt-check', r);
    if (check && !ok) check.lastChild.textContent = 'Lines don’t add up to the total';
  }

  /* ----------------------------------------------------------------
     2. MOTION — everything below runs on the shared runtime. Without
        it (a library failed to load) the page is simply shown.
  ---------------------------------------------------------------- */
  if (!A) {
    const pt = byId('pageTransition');
    if (pt) pt.style.display = 'none';
    document.documentElement.classList.remove('is-transitioning');
    checkRanges();
    $$('.hm-receipt').forEach(checkReceipt);
    return;
  }

  // Run fn once el is on screen. If it is there as the hero lands, the
  // choreography's delay is kept; scrolled to later, it plays at once.
  function whenInView(el, delay, fn) {
    if (!el) return;
    const t0 = performance.now();
    Site.observe(el, () => fn(Math.max(0, delay - (performance.now() - t0))));
  }

  // Hidden state now, play once on arrival. Reduced motion: final state.
  function once(el, prepare, play, still) {
    if (!el) return;
    if (reduced) {
      if (still) still(el);
      return;
    }
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

  function roll(el, delay = 0, duration = 1600) {
    if (!el) return;
    utils.set(el, { opacity: 1 });
    Site.odometer(el, { value: el.dataset.value, delay, duration, turns: 1 });
  }
  function hold(el) {
    if (!el) return;
    el.dataset.value = el.textContent.trim();
    utils.set(el, { opacity: 0 });
  }

  /* ----------------------------------------------------------------
     3. HERO — the case-study entrance, then the bay: the estimator's
        three steps arrive one by one, and "₹ ?" gives way to a range.
  ---------------------------------------------------------------- */
  const media = byId('caseHeroMedia');
  const tagsWrap = byId('caseTags');
  const metaBar = byId('caseMetaBar');
  const hero = {
    top: [$('.case-back-link'), caseNoEl].filter(Boolean),
    ruler: heroRuler,
    tags: tagsWrap ? [...tagsWrap.children] : [],
    copy: [byId('caseSubtitle'), byId('caseTitle'), byId('caseTagline')].filter(Boolean),
    lines: [],
    meta: metaBar,
    metaItems: metaBar ? [...metaBar.children] : [],
  };
  const est = byId('heroEst');
  const E = est && {
    tag: $('.hm-est-tag', est),
    q: $('.hm-est-q', est),
    vals: $$('.hm-est-v', est),
    nums: $$('.hm-est-num', est),
    to: $('.hm-est-to', est),
    track: $('.hm-scale-track', est),
    fog: $('.hm-scale-fog', est),
    band: $('.hm-scale-band', est),
    axis: $$('.hm-scale-axis li', est),
    note: $('.hm-est-note', est),
    phones: $$('.hm-est-phone', est),
    cells: $$('.hm-est-steps li', est),
  };

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

    if (E) {
      E.nums.forEach((n) => { n.dataset.value = n.textContent.trim(); });
      utils.set([E.tag, E.note, ...E.axis, E.fog, E.band, E.q, ...E.vals, E.to], { opacity: 0 });
      utils.set(E.track, { scaleX: 0 });
      utils.set(E.phones, { opacity: 0, translateY: 46 });
      utils.set(E.cells, { '--fill': 0 });
      E.cells.forEach((c) => utils.set($('span', c), { opacity: 0.35 }));
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
      if (E) playEstimate(delay + 500);
    });
  }

  // The unknown becomes a range: the scale draws, a hatched fog covers
  // all of it, the three steps arrive, then the fog closes onto ₹3.4L –
  // ₹4.1L and the figures roll in on their drums.
  function playEstimate(delay) {
    const STEP = 640;
    const PHONE = 700;
    const tl = createTimeline({ delay, defaults: { ease: ease.out } })
      .add(E.tag, { opacity: [0, 1], translateY: [8, 0], duration: 800 }, 0)
      .add(E.q, { opacity: [0, 1], duration: 700, ease: 'out(2)' }, 120)
      .add(E.track, { scaleX: [0, 1], duration: 1400, ease: ease.inOut }, 160)
      .add(E.axis, { opacity: [0, 1], duration: 700, delay: stagger(45) }, 620)
      .add(E.fog, { opacity: [0, 1], duration: 800, ease: 'out(2)' }, 760);

    E.phones.forEach((p, i) => {
      const at = PHONE + i * STEP;
      tl.add(p, { opacity: [0, 1], translateY: [46, 0], duration: 1150 }, at)
        .add(E.cells[i], { '--fill': [0, 1], duration: 620, ease: ease.inOut }, at + 260)
        .add($('span', E.cells[i]), { opacity: [0.35, 1], duration: 500, ease: 'out(2)' }, at + 260);
    });

    const T = PHONE + 2 * STEP + 520;
    const left = `${((3.4 / 6) * 100).toFixed(2)}%`;
    const right = `${(100 - (4.1 / 6) * 100).toFixed(2)}%`;
    tl.add(E.q, { opacity: [1, 0], translateY: [0, -14], duration: 480, ease: 'in(2)' }, T)
      .add(E.fog, { clipPath: ['inset(0% 0% 0% 0%)', `inset(0% ${right} 0% ${left})`], duration: 1100, ease: ease.inOut }, T)
      .add(E.band, { opacity: [0, 1], scaleY: [0.3, 1], duration: 800, ease: ease.out }, T + 820)
      .add(E.fog, { opacity: [1, 0], duration: 500, ease: 'out(2)' }, T + 1000)
      .add(E.vals, { opacity: [0, 1], duration: 300, ease: 'out(2)' }, T + 260)
      .call(() => E.nums.forEach((n, i) => Site.odometer(n, { value: n.dataset.value, duration: 1700, delay: i * 140, turns: 1 })), T + 260)
      .add(E.to, { opacity: [0, 1], scaleX: [0, 1], duration: 900, ease: ease.inOut }, T + 520)
      .add(E.note, { opacity: [0, 1], translateY: [8, 0], duration: 900 }, T + 1200);
  }

  /* ----------------------------------------------------------------
     4. SCROLL REVEALS — declared with data-reveal and armed by
        core.js. Tiles step in by row, display copy rises line by
        line, blocks lift. Nothing nested in a revealed block is marked
        again, and the bespoke figures (5) animate themselves.
  ---------------------------------------------------------------- */
  const TILES = '.hm-rule, .hm-route, .hm-assume-item, .hm-family, .hm-receipt, .hm-edge, .hm-lineup-notes li, .hm-offpath-list li, .hm-task-steps li, .hm-person';
  const UP = '.case-section-intro, .case-copy, .case-label, .hm-figcap, .hm-measures, .hm-edge-head, .hm-lineup-head, .hm-plan-legend, .hm-share, .hm-contrast-wrap, .hm-specimen > div, .hm-measure-k';
  const LINES = '.case-section-title, .case-subtitle, .case-copy-lg, .case-closing';
  const OWN = '.hm-wf, .hm-plan-sheet, .hm-ranges-list, .hm-ranges-axis, .hm-ledger, .hm-nudge-rows, .hm-space-list, .hm-radii-list, .hm-walk, .hm-annot, .hm-stats, .hm-lineup-row, .hm-look-photo, .hm-bridge, .hm-sum';

  function armReveals() {
    const main = byId('main');
    const skip = (el) => el.hasAttribute('data-reveal')
      || el.closest('.case-hero, #contact, .case-next')
      || el.closest(OWN)
      || (el.parentElement && el.parentElement.closest('[data-reveal]'));
    const mark = (el, type, delay) => {
      if (skip(el)) return;
      el.setAttribute('data-reveal', type);
      if (delay) el.setAttribute('data-reveal-delay', String(delay));
    };

    rowDelays($$(TILES, main).filter((el) => !skip(el)), 90).forEach(([el, delay]) => mark(el, 'up', delay));
    $$(UP, main).forEach((el) => mark(el, 'up'));
    $$(LINES, main).forEach((el) => mark(el, el.children.length ? 'up' : 'lines'));

    ['.case-next-eyebrow', '#caseNextTitle'].forEach((sel) => {
      const el = $(sel);
      if (el && !el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', 'lines');
    });

    // core.js armed the page before these attributes existed.
    Site.reveals(main);
  }

  /* ----------------------------------------------------------------
     5. FIGURES — each plays once when it arrives.
  ---------------------------------------------------------------- */
  function armFigures() {
    // ---- Fig. 01: three paths run at a wall and stop dead. ----
    once($('#wallFig .hm-wf'), (el) => {
      utils.set($$('.hm-wf-from, .hm-wf-to, .hm-wf-label, .hm-wf-wall-label', el), { opacity: 0 });
      utils.set($$('.hm-wf-line i', el), { scaleX: 0 });
      utils.set($$('.hm-wf-line', el), { '--stop': 0 });
      utils.set($('.hm-wf-wall', el), { '--rise': 0 });
    }, (el) => {
      const tl = createTimeline({ delay: 200, defaults: { ease: ease.out } })
        .add($('.hm-wf-wall', el), { '--rise': [0, 1], duration: 1100, ease: ease.inOut }, 0)
        .add($('.hm-wf-from', el), { opacity: [0, 1], translateX: [-10, 0], duration: 900 }, 300)
        .add($('.hm-wf-wall-label', el), { opacity: [0, 1], duration: 700 }, 900);
      $$('.hm-wf-path', el).forEach((path, i) => {
        const at = 600 + i * 220;
        tl.add($('.hm-wf-label', path), { opacity: [0, 1], duration: 700 }, at)
          .add($('.hm-wf-line i', path), { scaleX: [0, 1], duration: 1000, ease: ease.inOut }, at + 120)
          .add($('.hm-wf-line', path), { '--stop': [0, 1], duration: 260, ease: 'out(2)' }, at + 1060);
      });
      tl.add($('.hm-wf-to', el), { opacity: [0, 1], duration: 1100, ease: 'out(2)' }, 1900);
    });

    // ---- Fig. 02: the same wall, cut; the door swings, the path runs through. ----
    once($('#doorFig .hm-wf'), (el) => {
      utils.set($$('.hm-wf-from, .hm-wf-to, .hm-wf-wall-label', el), { opacity: 0 });
      utils.set($$('.hm-wf-stop', el), { opacity: 0, translateY: 8 });
      utils.set($$('.hm-wf-run i', el), { scaleX: 0 });
      utils.set(el, { '--open': 0 });
      utils.set($('.hm-wf-wall', el), { '--rise': 0 });
    }, (el) => {
      const [before, after] = $$('.hm-wf-run i', el);
      const [ask, ...rest] = $$('.hm-wf-stop', el);
      const tl = createTimeline({ delay: 200, defaults: { ease: ease.out } })
        .add($('.hm-wf-wall', el), { '--rise': [0, 1], duration: 1000, ease: ease.inOut }, 0)
        .add($('.hm-wf-from', el), { opacity: [0, 1], translateX: [-10, 0], duration: 900 }, 250)
        .add(before, { scaleX: [0, 1], duration: 900, ease: ease.inOut }, 450)
        .add(ask, { opacity: [0, 1], translateY: [8, 0], duration: 800 }, 800)
        .add(el, { '--open': [0, 1], duration: 1400, ease: ease.inOut }, 1250)
        .add($('.hm-wf-wall-label', el), { opacity: [0, 1], duration: 700 }, 1900)
        .add(after, { scaleX: [0, 1], duration: 1000, ease: ease.inOut }, 2100);
      rest.forEach((stop, i) => tl.add(stop, { opacity: [0, 1], translateY: [8, 0], duration: 800 }, 2350 + i * 260));
      tl.add($('.hm-wf-to', el), { opacity: [0, 1], translateX: [10, 0], duration: 900 }, 2950);
    });

    // ---- The look: the room comes up out of the dark, its price unknown. ----
    once(byId('lookStart'), (el) => {
      utils.set($('.hm-look-frame', el), { clipPath: 'inset(0% 100% 0% 0%)' });
      utils.set($('.hm-look-frame img', el), { scale: 1.08 });
      utils.set($('.hm-roomtag', el), { opacity: 0, translateY: 14 });
    }, (el) => {
      createTimeline({ delay: 150, defaults: { ease: ease.out } })
        .add($('.hm-look-frame', el), {
          clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'],
          duration: 1500,
          ease: ease.inOut,
          onComplete: () => { $(".hm-look-frame", el).style.clipPath = ""; },
        }, 0)
        .add($('.hm-look-frame img', el), { scale: [1.08, 1], duration: 2600 }, 0)
        .add($('.hm-roomtag', el), { opacity: [0, 1], translateY: [14, 0], duration: 1000 }, 1000);
    });

    // ---- The bookend: the same room, and the lights come on. ----
    const lookEnd = byId('lookEnd');
    once(lookEnd, (el) => {
      el.classList.add('is-dim');
      utils.set($('.hm-roomtag', el), { opacity: 0, translateY: 14 });
    }, (el) => {
      setTimeout(() => el.classList.remove('is-dim'), 350);
      animate($('.hm-roomtag', el), { opacity: [0, 1], translateY: [14, 0], duration: 1100, delay: 1100, ease: ease.out });
    });

    // ---- The bridge between the two personas. ----
    once($('.hm-bridge'), (el) => {
      utils.set($('.hm-bridge-line', el), { clipPath: 'inset(0% 50% 0% 50%)' });
      utils.set($('.hm-bridge-label', el), { opacity: 0 });
    }, (el) => {
      const line = $('.hm-bridge-line', el);
      const tall = line.offsetHeight > line.offsetWidth;
      animate(line, {
        clipPath: [tall ? 'inset(50% 0% 50% 0%)' : 'inset(0% 50% 0% 50%)', 'inset(0% 0% 0% 0%)'],
        duration: 1300,
        delay: 500,
        ease: ease.inOut,
        onComplete: () => { line.style.clipPath = ''; },
      });
      animate($('.hm-bridge-label', el), { opacity: [0, 1], duration: 900, delay: 1300, ease: 'out(2)' });
    });

    // ---- Counters: the plan's and the system's numbers roll up. ----
    $$('.hm-stats').forEach((stats) => once(stats, (el) => {
      $$('.hm-num', el).forEach(hold);
    }, (el) => {
      $$('.hm-num', el).forEach((n, i) => roll(n, 120 + i * 110, 1700));
    }));

    // ---- Fig. 03: the plan is drawn, rooms fill in, doors swing, and
    //      the happy path lights up in order, 01 to 13. ----
    once($('#planFig .hm-plan-sheet'), (el) => {
      utils.set(el, { clipPath: 'inset(0% 0% 100% 0%)' });
      utils.set($$('.hm-roomtag', el), { opacity: 0, translateY: 8 });
      utils.set($$('.hm-plan-list li', el), { opacity: 0 });
      utils.set($$('.hm-plan-door', el), { '--swing': 0 });
      utils.set($$('.hm-step', el), { opacity: 0, scale: 0.6 });
    }, (el) => {
      const steps = $$('.hm-step', el).sort((a, b) => Number(a.textContent) - Number(b.textContent));
      // The sheet's outline and the front door's label hang outside its
      // box, so the drawing-in clip is dropped the moment it is done.
      createTimeline({ delay: 150, defaults: { ease: ease.out } })
        .add(el, {
          clipPath: ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)'],
          duration: 1500,
          ease: ease.inOut,
          onComplete: () => { el.style.clipPath = ''; },
        }, 0)
        .add($$('.hm-roomtag', el), { opacity: [0, 1], translateY: [8, 0], duration: 800, delay: stagger(70) }, 700)
        .add($$('.hm-plan-list li', el), { opacity: [0, 1], duration: 500, delay: stagger(14) }, 1000)
        .add($$('.hm-plan-door', el), { '--swing': [0, 1], duration: 1000, ease: ease.inOut, delay: stagger(110) }, 1500)
        .add(steps, { opacity: [0, 1], scale: [0.6, 1], duration: 600, delay: stagger(150) }, 2100);
    });

    // ---- Fig. 04: each line's range is measured out, then the page adds
    //      the four up and checks them against the total. ----
    const ranges = byId('ranges');
    once(ranges, (el) => {
      utils.set($$('.hm-rangerow-bar i', el), { scaleX: 0 });
      $$('.hm-rangerow-val b', el).forEach(hold);
      utils.set($('.hm-sum', el), { opacity: 0 });
    }, (el) => {
      const tl = createTimeline({ delay: 200, defaults: { ease: ease.out } })
        .add($$('.hm-rangerow-bar i', el), { scaleX: [0, 1], duration: 1100, ease: ease.inOut, delay: stagger(140) }, 0)
        .call(() => $$('.hm-rangerow-val b', el).forEach((b, i) => roll(b, Math.floor(i / 2) * 140, 1300)), 300)
        .add($('.hm-sum', el), { opacity: [0, 1], translateY: [8, 0], duration: 800 }, 1500)
        .call(checkRanges, 2100);
      return tl;
    }, checkRanges);

    // ---- Ledger: the stations come in order, the amounts roll. ----
    once(byId('ledger'), (el) => {
      utils.set($$('.hm-ledger-row', el), { opacity: 0, translateY: 14 });
      $$('.hm-ledger-amt', el).forEach((a) => { a.dataset.value = a.textContent.trim(); });
    }, (el) => {
      const rows = $$('.hm-ledger-row', el);
      animate(rows, { opacity: [0, 1], translateY: [14, 0], duration: 900, delay: stagger(150, { start: 150 }), ease: ease.out });
      rows.forEach((row, i) => {
        const amt = $('.hm-ledger-amt', row);
        if (/\d/.test(amt.dataset.value)) Site.odometer(amt, { value: amt.dataset.value, delay: 250 + i * 150, duration: 1400, turns: 1 });
      });
    });

    // ---- Receipts: lines print, the total rolls, the sum is checked. ----
    $$('.hm-receipt').forEach((r) => once(r, (el) => {
      utils.set($$('.hm-receipt-lines > div', el), { opacity: 0 });
      const total = $('dd[data-total]', el);
      total.dataset.value = total.textContent.trim();
    }, (el) => {
      const lines = $$('.hm-receipt-lines > div', el);
      animate(lines, { opacity: [0, 1], duration: 400, delay: stagger(140, { start: 350 }), ease: 'out(2)' });
      const total = $('dd[data-total]', el);
      Site.odometer(total, { value: total.dataset.value, delay: 350 + lines.length * 140, duration: 1300, turns: 1 });
      setTimeout(() => checkReceipt(el), 350 + lines.length * 140 + 1400);
    }, checkReceipt));

    // ---- Line-ups: the phones of a flow come up in order. ----
    $$('.hm-lineup-row').forEach((row) => once(row, (el) => {
      utils.set($$(':scope > li', el), { opacity: 0, translateY: 26 });
    }, (el) => {
      animate($$(':scope > li', el), { opacity: [0, 1], translateY: [26, 0], duration: 1100, delay: stagger(80, { start: 100 }), ease: ease.out });
    }));

    // ---- The notes on the estimate: each leader draws to its pin. ----
    once(byId('annot'), (el) => {
      utils.set($$('.hm-annot-list li', el), { opacity: 0, translateX: -12 });
      utils.set($('.hm-annot-phone', el), { opacity: 0, translateY: 24 });
    }, (el) => {
      createTimeline({ delay: 150, defaults: { ease: ease.out } })
        .add($('.hm-annot-phone', el), { opacity: [0, 1], translateY: [24, 0], duration: 1200 }, 0)
        .add($$('.hm-annot-list li', el), { opacity: [0, 1], translateX: [-12, 0], duration: 900, delay: stagger(170) }, 500);
    });

    // ---- Fig. 05: each colour moves from its old ratio to its new one. ----
    once(byId('nudge'), (el) => {
      utils.set($$('.hm-nudge-link', el), { scaleX: 0 });
      utils.set($$('.hm-nudge-to', el), { opacity: 0, scale: 0.4 });
      utils.set($$('.hm-nudge-row', el), { opacity: 0 });
    }, (el) => {
      const rows = $$('.hm-nudge-row', el);
      const tl = createTimeline({ delay: 150, defaults: { ease: ease.out } })
        .add(rows, { opacity: [0, 1], duration: 600, delay: stagger(110) }, 0);
      rows.forEach((row, i) => {
        tl.add($('.hm-nudge-link', row), { scaleX: [0, 1], duration: 900, ease: ease.inOut }, 450 + i * 160)
          .add($('.hm-nudge-to', row), { opacity: [0, 1], scale: [0.4, 1], duration: 500 }, 1200 + i * 160);
      });
    });

    // ---- Spacing gauges rise; the radii are drawn. ----
    once(byId('space'), (el) => {
      utils.set($$('.hm-space-list i', el), { scaleY: 0 });
    }, (el) => {
      animate($$('.hm-space-list i', el), { scaleY: [0, 1], duration: 900, delay: stagger(45, { start: 150 }), ease: ease.out });
    });
    once(byId('radii'), (el) => {
      utils.set($$('.hm-radii-list li', el), { opacity: 0, translateY: 10 });
    }, (el) => {
      animate($$('.hm-radii-list li', el), { opacity: [0, 1], translateY: [10, 0], duration: 800, delay: stagger(70, { start: 150 }), ease: ease.out });
    });
  }

  // Reduced motion still states what the sums say; the dimmed bookend
  // is never dimmed.
  function stillFigures() {
    checkRanges();
    $$('.hm-receipt').forEach(checkReceipt);
  }

  /* ----------------------------------------------------------------
     6. THE WALKTHROUGH — one paused position along thirteen screens,
        seeked from scroll through a tall section. The pan eases into
        every screen like a detent (the showroom's), the caption panel
        rolls to the screen in focus, a needle runs the measured floor.
  ---------------------------------------------------------------- */
  const walk = byId('walk');
  const pin = window.matchMedia('(min-width: 900px), (min-height: 540px)');
  let walkGo = null;

  function initWalk() {
    if (!walk) return;
    const stage = $('.hm-walk-stage', walk);
    const view = $('.hm-walk-view', walk);
    const track = $('.hm-walk-track', walk);
    const items = $$('.hm-walk-item', walk);
    const floor = $('.hm-walk-floor', walk);
    const phases = $$('.hm-walk-phases li', walk);
    const N = items.length;
    if (!stage || !view || !track || N < 2) return;
    walk.classList.add('is-live');

    const P = {
      no: $('.hm-walk-no', walk),
      phase: $('.hm-walk-phase-in', walk),
      title: $('.hm-walk-title-in', walk),
      text: $('.hm-walk-text-in', walk),
      rule: $('.hm-walk-rule-in', walk),
    };
    const KEYS = ['phase', 'title', 'text', 'rule'];
    const screens = items.map((li) => ({
      phase: li.dataset.phase || '',
      title: $('.hm-walk-cap h4', li).textContent.trim(),
      text: $('.hm-walk-cap p:last-child', li).textContent.trim(),
      rule: li.dataset.rule || '',
    }));
    const ranges = phases.map((ph) => [Number(ph.style.getPropertyValue('--from')), Number(ph.style.getPropertyValue('--to'))]);

    const DETENT = 0.55;
    const HOLD = 0.035;
    let travel = 1;
    let step = 1;
    let pw = 0;
    let viewW = 0;
    let pos = -1;
    let active = -1;
    let frame = 0;
    let live = true;

    function measure() {
      pw = items[0].offsetWidth;
      const cs = getComputedStyle(track);
      const gap = parseFloat(cs.columnGap) || parseFloat(cs.gap) || 0;
      step = pw + gap;
      viewW = view.clientWidth;
      travel = Math.max(1, walk.offsetHeight - stage.offsetHeight);
    }

    function detent(s) {
      const k = Math.min(N - 2, Math.floor(s));
      const u = clamp((s - k - HOLD) / (1 - 2 * HOLD), 0, 1);
      return k + u + DETENT * (u * u * (3 - 2 * u) - u);
    }

    function setActive(i) {
      const prev = active;
      active = i;
      phases.forEach((ph, j) => ph.classList.toggle('is-on', i >= ranges[j][0] && i <= ranges[j][1]));
      const s = screens[i];
      if (reduced || prev < 0) {
        P.no.textContent = pad(i + 1);
        KEYS.forEach((k) => { P[k].textContent = s[k]; });
        return;
      }
      const dir = i > prev ? 1 : -1;
      Site.odometer(P.no, { value: pad(i + 1), duration: 700, turns: 0, stagger: 40 });
      KEYS.forEach((k, j) => {
        const el = P[k];
        if (el.textContent === s[k]) return;
        animate(el, {
          translateY: ['0%', `${-dir * 105}%`],
          opacity: [1, 0],
          duration: 240,
          delay: j * 40,
          ease: 'in(2)',
          onComplete: () => {
            el.textContent = screens[active][k];
            animate(el, { translateY: [`${dir * 105}%`, '0%'], opacity: [0, 1], duration: 560, ease: ease.out });
          },
        });
      });
    }

    function place(p) {
      const x = viewW / 2 - pw / 2 - p * step;
      track.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
      items.forEach((li, i) => li.style.setProperty('--ad', Math.abs(i - p).toFixed(3)));
      if (floor) floor.style.setProperty('--p', (p / (N - 1)).toFixed(4));
      const next = clamp(Math.round(p), 0, N - 1);
      if (next !== active) setActive(next);
    }

    function update() {
      frame = 0;
      if (!pin.matches) {
        if (live) {
          live = false;
          track.style.transform = '';
          items.forEach((li) => li.style.removeProperty('--ad'));
        }
        return;
      }
      live = true;
      const raw = clamp(-walk.getBoundingClientRect().top / travel, 0, 1);
      const p = detent(raw * (N - 1));
      if (Math.abs(p - pos) < 0.0004) return;
      pos = p;
      place(p);
    }
    const request = () => { if (!frame) frame = requestAnimationFrame(update); };
    const remeasure = () => { measure(); pos = -1; request(); };

    // Tabbing to a screen brings it into focus.
    walkGo = (i) => {
      if (!pin.matches) return;
      measure();
      const top = walk.getBoundingClientRect().top + window.scrollY;
      Site.scroll.to(top + (i / (N - 1)) * travel, { duration: 1.1, immediate: reduced });
    };
    track.addEventListener('focusin', (e) => {
      const li = e.target.closest('.hm-walk-item');
      if (li) walkGo(items.indexOf(li));
    });

    measure();
    update();
    Site.scroll.on(request);
    window.addEventListener('resize', remeasure);
    window.addEventListener('load', remeasure);
    if (pin.addEventListener) pin.addEventListener('change', remeasure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(remeasure);
  }

  /* ----------------------------------------------------------------
     7. TALL SCREENS ON TOUCH — screens that scroll in the app run down
        the phone while it is in view (hover does it on desktop).
  ---------------------------------------------------------------- */
  function initTallScreens() {
    if (reduced || !window.matchMedia('(hover: none)').matches) return;
    $$('.hm-phone.is-tall').forEach((phone) => {
      const img = $('img', phone);
      if (!img) return;
      let anim = null;
      const start = () => {
        const dist = img.offsetHeight - img.parentElement.offsetHeight;
        if (dist < 4) return;
        anim = animate(img, {
          translateY: [0, -dist],
          duration: Math.min(9000, 2200 + dist * 6),
          delay: 700,
          loopDelay: 1500,
          loop: true,
          alternate: true,
          ease: ease.inOut,
        });
      };
      const io = new IntersectionObserver(([en]) => {
        if (en.isIntersecting) {
          if (anim) anim.play();
          else if (img.complete && img.naturalHeight) start();
          else img.addEventListener('load', start, { once: true });
        } else if (anim) {
          anim.pause();
        }
      }, { threshold: 0.6 });
      io.observe(phone);
    });
  }

  /* ----------------------------------------------------------------
     8. ZOOM — any image tagged data-zoom opens full size in an overlay
        with its own scroll (data-full names the 2x export when the
        page shows a smaller one). Escape, the close button or a click
        outside closes it; focus returns to the image.
  ---------------------------------------------------------------- */
  function initZoom() {
    const zoomables = $$('img[data-zoom]');
    if (!zoomables.length) return;

    const box = document.createElement('div');
    box.className = 'zoom-overlay';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Screen preview');
    box.setAttribute('data-lenis-prevent', '');
    box.innerHTML = '<button type="button" class="zoom-close" aria-label="Close preview">Close</button><div class="zoom-scroll"><img alt="" /></div>';
    document.body.appendChild(box);

    const img = $('img', box);
    const scroller = $('.zoom-scroll', box);
    const closeBtn = $('.zoom-close', box);
    let lastFocus = null;
    let hideTimer = 0;

    zoomables.forEach((el) => {
      if (el.closest('[aria-hidden="true"]')) return;
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.setAttribute('aria-haspopup', 'dialog');
      el.setAttribute('aria-label', `${el.alt || 'Screen'} (open full size)`);
    });

    function open(el) {
      clearTimeout(hideTimer);
      lastFocus = document.activeElement;
      img.src = el.dataset.full || el.currentSrc || el.src;
      img.alt = el.alt;
      box.hidden = false;
      scroller.scrollTop = 0;
      void box.offsetWidth;
      box.classList.add('is-open');
      if (!reduced) animate(img, { opacity: [0, 1], translateY: [24, 0], duration: 900, ease: ease.out });
      Site.scroll.stop();
      Site.cursor.reset();
      closeBtn.focus({ preventScroll: true });
    }
    const isOpen = () => box.classList.contains('is-open');
    function close() {
      if (!isOpen()) return;
      box.classList.remove('is-open');
      hideTimer = setTimeout(() => {
        box.hidden = true;
        img.removeAttribute('src');
      }, 250);
      Site.scroll.start();
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    }

    const zoomTarget = (e) => {
      const el = e.target.closest && e.target.closest('img[data-zoom]');
      return el && !box.contains(el) ? el : null;
    };
    document.addEventListener('click', (e) => {
      const el = zoomTarget(e);
      if (el) open(el);
    });
    box.addEventListener('click', (e) => { if (e.target !== img) close(); });
    document.addEventListener('keydown', (e) => {
      if (isOpen()) {
        if (e.key === 'Escape') close();
        else if (e.key === 'Tab') {
          e.preventDefault();
          closeBtn.focus();
        }
        return;
      }
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const el = zoomTarget(e);
      if (!el) return;
      e.preventDefault();
      open(el);
    });
    document.addEventListener('mouseover', (e) => { if (zoomTarget(e)) Site.cursor.set('Zoom'); });
    document.addEventListener('mouseout', (e) => {
      const el = zoomTarget(e);
      if (el && !(e.relatedTarget && el.contains(e.relatedTarget))) Site.cursor.reset();
    });
  }

  /* ----------------------------------------------------------------
     9. BOOT — hidden states and reveals are armed behind the closed
        shutter. It opens once the site's own fonts and the hero's
        screens are in (2.6 s at most), then the hero comes up.
  ---------------------------------------------------------------- */
  function ready() {
    const waits = (media ? $$('img', media) : []).map((img) => (img.decode ? img.decode().catch(() => {}) : null));
    if (document.fonts && document.fonts.load) {
      waits.push(document.fonts.load('300 1em Archivo').catch(() => {}));
      waits.push(document.fonts.load('400 1em "Martian Mono"').catch(() => {}));
    }
    return Promise.race([Promise.all(waits), new Promise((resolve) => setTimeout(resolve, 2600))]);
  }

  initWalk();
  prepareHero();
  armReveals();
  armFigures();
  if (reduced) stillFigures();
  initTallScreens();
  initZoom();
  Site.nav.refresh();

  ready()
    .then(() => {
      Site.nav.refresh();
      return Site.transition.reveal();
    })
    .then(() => {
      heroEntrance();
      animateHeroMedia();
      Site.emit('intro:done');
    });
})();
