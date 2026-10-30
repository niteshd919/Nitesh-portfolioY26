/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · home · showroom
   The selected work as a private viewing: four bays on one track.

   ≥ 900px  The stage is sticky (CSS). Page scroll through the tall
            section pans the track bay by bay by seeking one paused
            Anime.js timeline; the pan eases into every bay like a
            selector clicking into its detent.
   < 900px  The track is a native swipe strip (scroll-snap). The same
            timeline follows its scrollLeft for the HUD and parallax.

   A bay arrives once, the first time it is in view: the title lines
   rise, the spec figures roll, the CTA rule draws, the media is
   scanned in and one pass of studio light crosses it.
   ================================================================== */
(function () {
  const section = document.getElementById('work');
  if (!section || !section.classList.contains('showroom')) return;

  // Without the shared runtime (a library failed to load) fall back to
  // stacked bays rather than a pinned track that cannot move.
  const Site = window.Site;
  if (!Site || !Site.anime) {
    section.classList.add('is-static');
    return;
  }

  try {
    init();
  } catch (err) {
    section.classList.add('is-static');
    console.error('[showroom]', err);
  }

  function init() {
    const { animate, createTimeline, stagger, utils } = Site.anime;
    const { reduced, motion } = Site;
    const ease = motion.ease;

    /* ------------------------------------------------------------------
       0. ELEMENTS
    ------------------------------------------------------------------ */
    const stage = section.querySelector('.showroom-stage');
    const track = section.querySelector('.showroom-track');
    const rule = section.querySelector('.showroom-rule');
    const selector = section.querySelector('.showroom-selector');
    const segs = [...section.querySelectorAll('[data-showroom-go]')];
    const wide = window.matchMedia('(min-width: 900px)');
    const NUMERIC = /^[\d.,]+$/;
    const pad = (n) => String(n).padStart(2, '0');

    const bays = [...section.querySelectorAll('.bay')].map((el, i) => {
      const q = (sel) => el.querySelector(sel);
      const qa = (sel) => [...el.querySelectorAll(sel)];
      return {
        el,
        i,
        short: el.dataset.short || '',
        details: q('.bay-details'),
        meta: qa('.bay-meta > span'),
        title: q('.bay-title'),
        copy: qa('.bay-sub, .bay-desc'),
        specHead: q('.bay-spec-head'),
        cells: qa('.bay-spec-cell'),
        values: qa('.bay-spec-val'),
        labels: qa('.bay-spec-label'),
        cta: q('.bay-cta'),
        ctaText: q('.bay-cta-text'),
        ctaDim: q('.bay-cta-dim'),
        tags: q('.bay-tags'),
        media: q('.bay-media'),
        sweep: q('.bay-sweep i'),
        cap: q('.bay-cap'),
        settle: q('.sus-zoom, .cf-plate img'),
        rise: qa('.hmi-glass, .hmi-rise, .hmi-tag'),
        phones: qa('.ev-phone-body'),
        port: q('.ev-port'),
        led: q('.ev-port-led'),
        pings: qa('.sus-ping i'),
        lines: null,
        arrived: false,
        shown: false,
        loops: [],
        live: false,
      };
    });
    const N = bays.length;
    if (!stage || !track || !selector || N < 2) throw new Error('showroom markup incomplete');

    // The rule's meta becomes a live counter: "Case 01 / 04".
    const metaEl = rule && rule.querySelector('.rule-meta');
    let countEl = null;
    if (metaEl) {
      countEl = document.createElement('span');
      countEl.className = 'showroom-count';
      countEl.textContent = '01';
      metaEl.textContent = 'Case ';
      metaEl.append(countEl, ` / ${pad(N)}`);
    }

    // Sideways trackpad swipes are ours inside the stage (see 6.).
    stage.setAttribute('data-lenis-prevent-horizontal', '');

    /* ------------------------------------------------------------------
       1. THE PAN — one paused timeline, 1000 ms per bay, seeked from
          scroll. It moves the track and feeds every scroll-linked value:
          each bay's offset (--o, for parallax), the rule's fill (--p)
          and the selector needle (--sel).
    ------------------------------------------------------------------ */
    const STEP = 1000;
    const pan = createTimeline({ autoplay: false, defaults: { ease: 'linear', duration: STEP * (N - 1) } })
      .add(track, { translateX: ['0%', `${(-100 * (N - 1)) / N}%`] }, 0)
      .add(selector, { '--sel': [0.5 / N, 1 - 0.5 / N] }, 0);
    if (rule) pan.add(rule, { '--p': [0, 1] }, 0);
    if (!reduced) bays.forEach((b) => pan.add(b.el, { '--o': [-b.i, N - 1 - b.i] }, 0));

    /* ------------------------------------------------------------------
       2. GEOMETRY + DETENT — scroll through the pin maps to a position
          along the track (0 … N-1): a short hold on the first and last
          bay (--dwell in the CSS), and between bays an ease that slows
          the track as it docks, so it settles rather than drifts.
    ------------------------------------------------------------------ */
    const DETENT = 0.7;   // 0 = linear, 1 = a full smoothstep between bays
    const HOLD = 0.04;    // share of every change held still at both ends
    let travel = 1;       // px of scroll while the stage is pinned
    let hold = 0;         // share of that travel held on the first/last bay

    function measure() {
      const vh = stage.offsetHeight || window.innerHeight;
      travel = Math.max(1, section.offsetHeight - vh);
      const dwell = parseFloat(getComputedStyle(section).getPropertyValue('--dwell')) || 0;
      hold = Math.min(0.3, (dwell * vh) / travel);
    }

    function detent(s) {
      const k = Math.min(N - 2, Math.floor(s));
      const u = utils.clamp((s - k - HOLD) / (1 - 2 * HOLD), 0, 1);
      return k + u + DETENT * (u * u * (3 - 2 * u) - u);
    }

    // Scroll offset into the pin at which bay i is docked.
    const dockOffset = (i) => (hold + (i / (N - 1)) * (1 - 2 * hold)) * travel;

    /* ------------------------------------------------------------------
       3. UPDATE — inside Lenis' frame, or a rAF for strip/native scroll
    ------------------------------------------------------------------ */
    let pos = 0;           // position along the track, in bays
    let seeked = null;
    let active = -1;
    let introDone = false;
    let wasDocked = false;
    let frame = 0;

    function update() {
      frame = 0;
      const vh = window.innerHeight;
      const box = stage.getBoundingClientRect();
      const pinned = wide.matches;

      if (pinned) {
        const r = utils.clamp(-section.getBoundingClientRect().top / travel, 0, 1);
        pos = detent(utils.clamp((r - hold) / (1 - 2 * hold), 0, 1) * (N - 1));
      } else {
        pos = utils.clamp(track.scrollLeft / Math.max(1, track.clientWidth), 0, N - 1);
      }
      if (pos !== seeked) {
        pan.seek(pos * STEP);
        seeked = pos;
      }

      const next = utils.clamp(Math.round(pos), 0, N - 1);
      if (next !== active) setActive(next);

      // What counts as "in view" differs: the pinned stage is one frame;
      // in the strip the details sit below the media.
      let seeDetails;
      let seeMedia;
      if (pinned) {
        seeDetails = seeMedia = box.top < vh * 0.55 && box.bottom > vh * 0.45;
      } else {
        const m = bays[next].media.getBoundingClientRect();
        const d = bays[next].details.getBoundingClientRect();
        seeMedia = m.top < vh * 0.8 && m.bottom > vh * 0.2;
        seeDetails = d.top < vh * 0.85 && d.bottom > vh * 0.15;
      }
      const near = box.top < vh && box.bottom > 0;

      bays.forEach((b) => {
        const o = pos - b.i;
        if (introDone) {
          if (!b.arrived && seeDetails && (pinned ? o > -0.6 && o < 0.35 : Math.abs(o) < 0.5)) arrive(b);
          if (!b.shown && seeMedia && (pinned ? o > -0.3 && o < 0.5 : Math.abs(o) < 0.5)) show(b);
        }
        setLive(b, near && b.shown && Math.abs(o) < 1);
      });

      if (pinned) readout(box, vh);
    }
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    /* ------------------------------------------------------------------
       4. ACTIVE BAY — counter, selector, nav readout
    ------------------------------------------------------------------ */
    function setActive(i) {
      const first = active < 0;
      active = i;
      segs.forEach((s, j) => {
        s.classList.toggle('is-active', j === i);
        if (j === i) s.setAttribute('aria-current', 'true');
        else s.removeAttribute('aria-current');
      });
      bays.forEach((b) => b.el.classList.toggle('is-active', b.i === i));
      if (i > 0) section.classList.add('is-swiped');
      if (countEl && !first) Site.odometer(countEl, { value: pad(i + 1), duration: 900, turns: 0, stagger: 40 });
    }

    // While the stage is docked, the nav reads the bay ("Work · HMI" —
    // the readout clips at about 19 characters); leaving upward hands it
    // back to the section, and core's observer takes it from there.
    function readout(box, vh) {
      const docked = box.top <= 1 && box.bottom >= vh - 1;
      if (docked) {
        Site.nav.set(section.dataset.index, `Work · ${bays[active].short}`);
      } else if (wasDocked && box.top > 1 && box.top < vh / 2) {
        Site.nav.set(section.dataset.index, section.dataset.section);
      }
      wasDocked = docked;
    }

    /* ------------------------------------------------------------------
       5. ARRIVAL — hidden states are set here (never by CSS alone), and
          each bay's build sheet and media come up once.
    ------------------------------------------------------------------ */
    function prepare(b) {
      // Figures with letters ("3D", "13″", "AR") rise out of a mask;
      // numeric ones roll on odometer drums.
      b.values.forEach((v) => {
        const text = v.textContent.trim();
        v.dataset.value = text;
        if (NUMERIC.test(text)) return;
        const span = document.createElement('span');
        span.className = 'bay-spec-txt';
        span.textContent = text;
        v.textContent = '';
        v.appendChild(span);
      });
      if (reduced) return;

      // Build sheet
      b.lines = Site.splitLines(b.title);
      utils.set(b.title, { opacity: 0 });
      b.lines.ready.then(() => utils.set(b.title, { opacity: 1 }));
      utils.set([...b.meta, ...b.copy, ...b.labels, b.specHead, b.ctaText, b.tags].filter(Boolean), { opacity: 0 });
      b.values.forEach((v) => {
        const txt = v.querySelector('.bay-spec-txt');
        if (txt) utils.set(txt, { translateY: '110%' });
        else utils.set(v, { opacity: 0 });
      });
      utils.set(b.cells, { '--draw': 0 });
      if (b.ctaDim) utils.set(b.ctaDim, { scaleX: 0 });

      // Media: closed until its scan (the clip only exists while scanning)
      b.media.classList.add('is-scanning');
      utils.set(b.media, { '--scan': 0 });
      if (b.cap) utils.set(b.cap, { opacity: 0 });
      if (b.rise.length) utils.set(b.rise, { opacity: 0, translateY: 18 });
      if (b.phones.length) utils.set(b.phones, { opacity: 0, '--fan': 0 });
      if (b.port) utils.set(b.port, { opacity: 0 });
    }

    function arrive(b) {
      b.arrived = true;
      if (b.i === 0 && countEl) Site.odometer(countEl, { value: pad(active + 1), duration: 1300, turns: 1, stagger: 60 });
      if (reduced) return;
      createTimeline({ defaults: { ease: ease.out } })
        .add(b.meta, { opacity: [0, 1], translateY: [8, 0], duration: 700, delay: stagger(70) }, 0)
        .call(() => b.lines.play({ duration: 1150, stagger: 90 }), 40)
        .add(b.copy, { opacity: [0, 1], translateY: [14, 0], duration: 1000, delay: stagger(90) }, 260)
        .add(b.specHead, { opacity: [0, 1], duration: 600 }, 380)
        .add(b.cells, { '--draw': [0, 1], duration: 1000, ease: ease.inOut, delay: stagger(110) }, 380)
        .call(() => roll(b), 470)
        .add(b.labels, { opacity: [0, 1], translateY: [6, 0], duration: 800, delay: stagger(110) }, 600)
        .add(b.ctaDim, { scaleX: [0, 1], duration: 1000, ease: ease.inOut }, 620)
        .add([b.ctaText, b.tags], { opacity: [0, 1], duration: 800, delay: stagger(120) }, 700);
    }

    function roll(b) {
      b.values.forEach((v, j) => {
        const txt = v.querySelector('.bay-spec-txt');
        if (txt) {
          animate(txt, { translateY: ['110%', '0%'], duration: 1000, delay: j * 110, ease: ease.out });
          return;
        }
        utils.set(v, { opacity: 1 });
        Site.odometer(v, { value: v.dataset.value, duration: 1500, delay: j * 110, turns: 1 });
      });
    }

    // Media: scanned in by a line of light, settled, then one pass of
    // studio light; the bay's own loops start after that.
    function show(b) {
      b.shown = true;
      if (reduced) return;
      const m = b.media;
      const tl = createTimeline({ defaults: { ease: ease.out } })
        .add(m, { '--scan': [0, 1], duration: 1200, ease: ease.inOut }, 0)
        .call(() => m.classList.remove('is-scanning'), 1200);
      if (b.settle) tl.add(b.settle, { scale: [1.08, 1], duration: 2200 }, 0);
      if (b.rise.length) tl.add(b.rise, { opacity: [0, 1], translateY: [18, 0], duration: 1300, delay: stagger(110) }, 240);
      if (b.phones.length) tl.add(b.phones, { opacity: [0, 1], '--fan': [0, 1], duration: 1500, ease: ease.inOut, delay: stagger(90) }, 160);
      if (b.port) tl.add(b.port, { opacity: [0, 1], duration: 900 }, 900);
      if (b.cap) tl.add(b.cap, { opacity: [0, 1], duration: 900 }, 700);
      if (b.sweep) {
        tl.call(() => m.classList.add('is-sweeping'), 950)
          .add(b.sweep, { translateX: ['-110%', '160%'], duration: 1800, ease: ease.inOut }, 950)
          .call(() => m.classList.remove('is-sweeping'), 2750);
      }
      tl.call(() => startLoops(b), 1200);
    }

    /* ------------------------------------------------------------------
       6. LOOPS — wheel-sensor pings, the charge port breathing. Created
          once a bay has been shown, paused whenever it leaves the view,
          never run with reduced motion.
    ------------------------------------------------------------------ */
    function startLoops(b) {
      if (reduced || b.loops.length) return;
      if (b.pings.length) {
        b.loops.push(animate(b.pings, {
          scale: [0.92, 1.9],
          opacity: [0.85, 0],
          duration: 2400,
          ease: 'out(3)',
          delay: stagger(280),
          loop: true,
          loopDelay: 900,
          autoplay: false,
        }));
      }
      if (b.led) {
        b.loops.push(animate(b.led, {
          opacity: [0.25, 1],
          duration: 1900,
          ease: 'inOutSine',
          loop: true,
          alternate: true,
          autoplay: false,
        }));
      }
      b.live = false;
      request();
    }

    function setLive(b, live) {
      if (live === b.live) return;
      b.live = live;
      b.loops.forEach((a) => (live ? a.play() : a.pause()));
    }

    /* ------------------------------------------------------------------
       7. INPUT — the selector, keyboard focus, the media as a link and
          sideways trackpad swipes.
    ------------------------------------------------------------------ */
    function goTo(i, opts = {}) {
      if (wide.matches) {
        measure();
        const docTop = section.getBoundingClientRect().top + window.scrollY;
        Site.scroll.to(docTop + dockOffset(i), {
          duration: opts.duration || Math.min(2.4, 1 + Math.abs(i - pos) * 0.35),
          immediate: reduced,
        });
      } else {
        track.scrollTo({ left: i * track.clientWidth, behavior: reduced ? 'auto' : 'smooth' });
      }
    }

    segs.forEach((s) => s.addEventListener('click', () => goTo(Number(s.dataset.showroomGo))));

    // Tabbing to a CTA in a bay that is off stage brings that bay in.
    track.addEventListener('focusin', (e) => {
      if (!wide.matches) return;
      const b = bays.find((x) => x.el.contains(e.target));
      if (!b) return;
      const box = stage.getBoundingClientRect();
      if (Math.abs(pos - b.i) > 0.02 || Math.abs(box.top) > 1) goTo(b.i, { duration: 0.9 });
    });

    // The whole media half opens the case study, through the CTA (so
    // the shutter transition runs). Keyboard users have the CTA itself.
    bays.forEach((b) => {
      if (b.media && b.cta) b.media.addEventListener('click', () => b.cta.click());
    });

    // On a pinned stage a sideways swipe moves along the track, the way
    // the content runs, instead of doing nothing.
    stage.addEventListener('wheel', (e) => {
      const lenis = Site.scroll.lenis;
      if (!wide.matches || !lenis || Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      const box = stage.getBoundingClientRect();
      if (box.top > 1 || box.bottom < window.innerHeight - 1) return;
      e.preventDefault();
      lenis.scrollTo(lenis.targetScroll + e.deltaX, { duration: lenis.options.duration, easing: lenis.options.easing });
    }, { passive: false });

    /* ------------------------------------------------------------------
       8. IMAGES — load every bay before the stage arrives, so nothing
          pops in behind a scan (lazy loading would wait for each bay
          to slide into view).
    ------------------------------------------------------------------ */
    const imgs = [...section.querySelectorAll('img[loading="lazy"]')];
    if (imgs.length && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        if (!entries.some((en) => en.isIntersecting)) return;
        io.disconnect();
        imgs.forEach((img) => { img.loading = 'eager'; });
      }, { rootMargin: '150% 0px' });
      io.observe(section);
    }

    /* ------------------------------------------------------------------
       9. BOOT
    ------------------------------------------------------------------ */
    bays.forEach(prepare);
    measure();
    update();

    Site.scroll.on(update);
    track.addEventListener('scroll', request, { passive: true });
    const remeasure = () => {
      measure();
      request();
    };
    window.addEventListener('resize', remeasure);
    window.addEventListener('load', remeasure);
    if (wide.addEventListener) wide.addEventListener('change', remeasure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(remeasure);
    Site.when('intro:done').then(() => {
      introDone = true;
      remeasure();
    });
  }
})();
