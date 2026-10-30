/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · home hero
   The ignition sequence (first visit of a session) and the hero: a
   coachbuilder's technical drawing of a grand tourer that draws
   itself, lights up, cruises, and drives off as you scroll.

   Paths into the page
     first visit   cluster self-test (needle sweep, 0–100 readout tied
                   to real readiness) → light signature along the seam
                   → the layer splits → hero entrance → 'intro:done'
     later loads   light signature + split only
     returning     the shutter opens on the parked car → lights on
     reduced       no preloader, final states, 'intro:done' at once
   ================================================================== */
(function () {
  const Site = window.Site;
  const hero = document.getElementById('top');
  if (!Site || !hero) return;

  const { animate, createTimeline, createTimer, stagger, utils, svg, onScroll } = Site.anime;
  const EASE = Site.motion.ease;
  const reduced = Site.reduced;

  /* ------------------------------------------------------------------
     0. ELEMENTS + CONSTANTS
  ------------------------------------------------------------------ */
  const pre = document.getElementById('preloader');
  const car = hero.querySelector('.hero-car');
  if (!car) return;

  const eyebrowBits = [...hero.querySelectorAll('.hero-eyebrow > span')];
  const eyebrowRule = hero.querySelector('.hero-eyebrow-rule');
  const masks = [...hero.querySelectorAll('.hero-title .line-mask')];
  const lines = [...hero.querySelectorAll('.hero-title .line')];
  const intro = hero.querySelector('.hero-intro');
  const notesWrap = hero.querySelector('.hero-notes');
  const notes = [...hero.querySelectorAll('.hero-note')];
  const dim = hero.querySelector('.hero-dim');
  const ruler = hero.querySelector('.hero-ruler');
  const footItems = [...hero.querySelectorAll('.hero-foot-scroll, .hero-meta, .hero-foot-no')];

  const driveGroup = car.querySelector('.hc-drive');
  const ground = car.querySelector('.hc-ground');
  const lane = car.querySelector('.hc-lane');
  const rims = [...car.querySelectorAll('.hc-rim')];
  const noteMarks = car.querySelector('.hc-notes');
  const dots = [...car.querySelectorAll('.hc-dot')];
  const quiet = [...car.querySelectorAll('.hc-fill, .hc-glassfill, .hc-shadow, .hc-center, .hc-ext, .hc-disc, .hc-cap, .hc-pool')];
  const drl = car.querySelector('.hc-drl');
  const tail = car.querySelector('.hc-tail');
  const beam = car.querySelector('.hc-beam');
  const tailPool = car.querySelector('.hc-tailglow');
  const sweep = car.querySelector('.hc-sweep');
  const sweepGrad = car.querySelector('#hcSweep');

  const phone = window.matchMedia('(max-width: 760px)');
  const SEEN_KEY = 'nd:ignition';
  const FLOOR = 2200;        // the self test never feels rushed…
  const CEIL = 4000;         // …and never holds anyone hostage
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  let seen = false;
  try { seen = sessionStorage.getItem(SEEN_KEY) === '1'; } catch (err) { seen = false; }

  /* ------------------------------------------------------------------
     1. HIDDEN STATES — set from JS so the page reads complete without
        it. The preloader (or the shutter) covers all of this.
  ------------------------------------------------------------------ */
  const drawn = { body: [], glass: [], detail: [], wheel: [], note: [], drl: [], tail: [] };

  function prime(opts = {}) {
    utils.set(lines, { translateY: '104%' });
    utils.set([...eyebrowBits, intro, ...footItems, ...notes, dim, ...dots], { opacity: 0 });
    utils.set([eyebrowRule, ruler], { scaleX: 0 });
    utils.set([drl, tail], { opacity: 0 });
    utils.set([beam, tailPool], { opacity: 0 });
    drawn.drl = svg.createDrawable(drl.querySelectorAll('path'));
    drawn.tail = svg.createDrawable(tail.querySelectorAll('path'));
    drawn.note = svg.createDrawable(car.querySelectorAll('[data-draw="note"]'));
    if (opts.parked) return;
    ['body', 'glass', 'detail', 'wheel'].forEach((k) => {
      drawn[k] = svg.createDrawable(car.querySelectorAll(`[data-draw="${k}"]`));
    });
    utils.set([...quiet, lane], { opacity: 0 });
    utils.set(ground, { opacity: 0 });
  }

  // Once drawn, drop the dash bookkeeping so a resize can't nick a line.
  function settleStrokes() {
    car.querySelectorAll('[data-draw], .hc-light path').forEach((el) => {
      el.removeAttribute('stroke-dasharray');
      el.removeAttribute('stroke-dashoffset');
    });
  }

  /* ------------------------------------------------------------------
     2. LIGHTS — the DRL draws on front-to-back, the beam follows, the
        tail light comes up redline red.
  ------------------------------------------------------------------ */
  function lightsOn(delay = 0) {
    return createTimeline({ delay })
      .set([drl, tail], { opacity: 1 }, 0)
      .add(drawn.drl, { draw: ['0 0', '0 1'], duration: 620, ease: 'inOut(2)' }, 0)
      .add(drl, { opacity: [1, 0.55, 1], duration: 520, ease: 'inOut(2)' }, 640)
      .add(beam, { opacity: [0, 1], duration: 1500, ease: 'out(2)' }, 420)
      .add(drawn.tail, { draw: ['0 0', '0 1'], duration: 560, ease: 'inOut(2)' }, 180)
      .add(tailPool, { opacity: [0, 1], duration: 1400, ease: 'out(2)' }, 420);
  }

  /* ------------------------------------------------------------------
     3. DRIVE — the car cruises: rims turn clockwise, the lane drifts
        left at the tyre's surface speed. One timer, paused off-screen,
        boosted by scrolling ("scroll to drive").
  ------------------------------------------------------------------ */
  const REV = 7.5;                                  // seconds per wheel turn at cruise
  const SURFACE = (2 * Math.PI * 77) / REV;         // tyre surface speed, drawing units/s
  const drive = { speed: 0, boost: 0, angle: 0, offset: 0, timer: null, last: 0, inView: true };
  const rimCentres = rims.map((g) => [g.dataset.cx, g.dataset.cy]);

  function startDrive() {
    if (reduced || drive.timer) return;
    drive.last = performance.now();
    drive.timer = createTimer({
      onUpdate: () => {
        const now = performance.now();
        const dt = Math.min(0.05, (now - drive.last) / 1000);
        drive.last = now;
        const s = drive.speed * (1 + drive.boost * 5);
        drive.angle = (drive.angle + (360 / REV) * s * dt) % 360;
        drive.offset = (drive.offset + SURFACE * s * dt) % 92;
        const a = drive.angle.toFixed(2);
        rims.forEach((g, i) => g.setAttribute('transform', `rotate(${a} ${rimCentres[i][0]} ${rimCentres[i][1]})`));
        lane.style.strokeDashoffset = drive.offset.toFixed(2);
      },
    });
    if (!drive.inView) drive.timer.pause();
    animate(drive, { speed: [0, 1], duration: 2800, ease: 'inOut(2)' });
  }

  const driveIO = new IntersectionObserver(([entry]) => {
    drive.inView = entry.isIntersecting;
    if (!drive.timer) return;
    if (drive.inView) {
      drive.last = performance.now();
      drive.timer.resume();
    } else {
      drive.timer.pause();
    }
  });
  driveIO.observe(hero);

  /* ------------------------------------------------------------------
     4. SCROLL-OUT — the car eases off to the right, the headline lines
        drift up at slightly different rates, the notes fade. Linked to
        the hero's pass with onScroll (progress 0 at the top, 1 when the
        hero's bottom meets the viewport top).
  ------------------------------------------------------------------ */
  function scrollOut() {
    if (reduced) return;
    const observer = onScroll({
      target: hero,
      enter: 'top top',        // '<viewport edge> <hero edge>'
      leave: 'top bottom',
      sync: true,
      onUpdate: (self) => { drive.boost = self.progress; },
    });
    createTimeline({ autoplay: observer, defaults: { ease: 'linear', duration: 1000 } })
      .add(driveGroup, { translateX: [0, 760], ease: 'in(2)' }, 0)
      .add(masks, { translateY: stagger([-30, -78]) }, 0)
      .add([eyebrowBits[0] && eyebrowBits[0].parentElement, intro], { translateY: stagger([-22, -56]) }, 0)
      .add([notesWrap, noteMarks], { opacity: [1, 0], duration: 320 }, 0);
  }

  /* ------------------------------------------------------------------
     5. HERO ENTRANCE — headline rises, the drawing draws itself
        (body → glass → wheels → details), light, then the annotations.
        Returns the timeline; t0 is when the main entrance has landed.
  ------------------------------------------------------------------ */
  function entrance(opts = {}) {
    const parked = !!opts.parked;
    const tl = createTimeline({ defaults: { ease: EASE.out } });
    const D = parked ? 0 : 1;

    tl.add(eyebrowBits, { opacity: [0, 1], translateY: [10, 0], duration: 900, delay: stagger(90) }, 60)
      .add(eyebrowRule, { scaleX: [0, 1], duration: 1300, ease: EASE.inOut }, 140)
      .add(lines, { translateY: ['104%', '0%'], duration: 1300, delay: stagger(110) }, 120)
      .add(intro, { opacity: [0, 1], duration: 1300, ease: 'out(2)' }, 520)
      .add(ruler, { scaleX: [0, 1], duration: 1600, ease: EASE.inOut }, 300)
      .add(footItems, { opacity: [0, 1], translateY: [8, 0], duration: 900, delay: stagger(90) }, 700);

    if (!parked) {
      tl.add(ground, { opacity: [0, 1], duration: 500, ease: 'out(2)' }, opts.groundAt || 0)
        .add(drawn.body, { draw: ['0 0', '0 1'], duration: 1900, ease: EASE.inOut }, 380)
        .add(drawn.glass, { draw: ['0 0', '0 1'], duration: 1300, ease: EASE.inOut }, 980)
        .add(drawn.wheel, { draw: ['0 0', '0 1'], duration: 1400, ease: EASE.inOut, delay: stagger(26) }, 1050)
        .add(drawn.detail, { draw: ['0 0', '0 1'], duration: 1000, ease: EASE.inOut, delay: stagger(40) }, 1350)
        .add([...quiet, lane], { opacity: [0, 1], duration: 1500, ease: 'out(2)' }, 1700)
        .add(sweep, { opacity: [0, 0.85, 0], duration: 1900, ease: 'linear' }, 2550)
        .add(sweepGrad, { x1: [-420, 1320], x2: [-140, 1600], duration: 1900, ease: EASE.inOut }, 2550)
        .call(settleStrokes, 2500);
    }

    const L = parked ? 380 : 2350;    // lights + notes come after the car exists
    tl.call(() => { lightsOn(); startDrive(); }, L)
      .add(drawn.note, { draw: ['0 0', '0 1'], duration: 700, ease: EASE.inOut, delay: stagger(110) }, L + 500)
      .add(dots, { opacity: [0, 1], duration: 400, ease: 'out(2)', delay: stagger(110) }, L + 450)
      .add(notes, {
        opacity: [0, 1],
        // Wipe out from the leader: left-hanging labels open leftwards.
        clipPath: (el) => ({
          from: el.classList.contains('is-left') || phone.matches ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)',
          to: 'inset(0% 0% 0% 0%)',
        }),
        duration: 800,
        ease: EASE.inOut,
        delay: stagger(110),
      }, L + 900)
      .add(dim, { opacity: [0, 1], clipPath: ['inset(0% 50% 0% 50%)', 'inset(0% 0% 0% 0%)'], duration: 1100, ease: EASE.inOut }, L + 700 * D);

    tl.then(() => {
      utils.set(notes, { clipPath: 'none' });
      utils.set(dim, { clipPath: 'none' });
      settleStrokes();
    });
    return tl;
  }

  /* ------------------------------------------------------------------
     6. INSTRUMENT CLUSTER — a 260° dial built in JS: ticks every 5,
        numerals every 40, a redline zone, a ring of light that follows
        a short needle blade. The centre is left for the readout.
  ------------------------------------------------------------------ */
  const MAX = 320;
  const REDLINE = 260;
  const angleOf = (v) => -130 + (260 * v) / MAX;
  const xy = (r, deg) => [
    +(r * Math.sin((deg * Math.PI) / 180)).toFixed(2),
    +(-r * Math.cos((deg * Math.PI) / 180)).toFixed(2),
  ];

  function buildDial() {
    const NS = 'http://www.w3.org/2000/svg';
    const host = pre.querySelector('.pre-dial');
    const make = (tag, attrs, parent) => {
      const n = document.createElementNS(NS, tag);
      Object.keys(attrs).forEach((k) => n.setAttribute(k, attrs[k]));
      parent.appendChild(n);
      return n;
    };
    const arc = (r, v0, v1) => {
      const [x0, y0] = xy(r, angleOf(v0));
      const [x1, y1] = xy(r, angleOf(v1));
      const large = angleOf(v1) - angleOf(v0) > 180 ? 1 : 0;
      return `M${x0} ${y0} A${r} ${r} 0 ${large} 1 ${x1} ${y1}`;
    };
    const R = 176;
    const ticksG = make('g', { class: 'pre-ticks' }, host);
    const numsG = make('g', { class: 'pre-nums' }, host);
    const ticks = [];
    const nums = [];
    for (let v = 0; v <= MAX; v += 5) {
      const major = v % 20 === 0;
      const mid = v % 10 === 0;
      const len = major ? 15 : mid ? 9 : 5;
      const [x1, y1] = xy(R, angleOf(v));
      const [x2, y2] = xy(R - len, angleOf(v));
      const cls = `pre-tick${major ? ' is-major' : mid ? ' is-mid' : ''}${v >= REDLINE ? ' is-red' : ''}`;
      ticks.push(make('line', { class: cls, x1, y1, x2, y2 }, ticksG));
      if (v % 40 === 0) {
        const [nx, ny] = xy(R - 33, angleOf(v));
        const t = make('text', { class: `pre-num${v >= REDLINE ? ' is-red' : ''}`, x: nx, y: ny }, numsG);
        t.textContent = String(v);
        nums.push(t);
      }
    }
    const ring = make('path', { class: 'pre-ring', d: arc(R + 9, 0, MAX) }, host);
    const red = make('path', { class: 'pre-redzone', d: arc(R + 9, REDLINE, MAX) }, host);
    const trail = make('path', { class: 'pre-trail', d: arc(R + 9, 0, MAX), pathLength: 1, 'stroke-dasharray': '0 1' }, host);
    const hub = make('circle', { class: 'pre-hub', r: 104 }, host);
    const needle = make('g', { class: 'pre-needle', transform: `rotate(${angleOf(0)})` }, host);
    make('path', { class: 'n-glow', d: 'M0 -112 L0 -168' }, needle);
    make('path', { class: 'n-core', d: 'M0 -112 L0 -168' }, needle);
    make('path', { class: 'n-tip', d: 'M0 -150 L0 -167' }, needle);
    return { ticks, nums, ring, red, trail, hub, needle };
  }

  /* ------------------------------------------------------------------
     7. READINESS — fonts, window load and any hero images, raced
        against the ceiling.
  ------------------------------------------------------------------ */
  function readiness(limit) {
    const fonts = document.fonts && document.fonts.ready ? document.fonts.ready.catch(() => {}) : Promise.resolve();
    const load = document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));
    const images = [...hero.querySelectorAll('img')].map((img) => (img.decode ? img.decode().catch(() => {}) : Promise.resolve()));
    return Promise.race([Promise.all([fonts, load, ...images]), wait(limit)]);
  }

  /* ------------------------------------------------------------------
     8. IGNITION — power-on, needle sweep to the redline and back onto
        the live speed, 000 → 100 km/h tied to readiness, launch timer.
  ------------------------------------------------------------------ */
  function ignition() {
    const cluster = pre.querySelector('.pre-cluster');
    const corners = [...pre.querySelectorAll('.pre-corner')];
    const speedEl = pre.querySelector('.pre-speed');
    const timeEl = pre.querySelector('.pre-time');
    const timerEl = pre.querySelector('.pre-timer');
    const statusEl = pre.querySelector('.pre-status');
    const countEl = pre.querySelector('.pre-count');
    const led = pre.querySelector('.pre-led');
    const dial = buildDial();

    const T0 = performance.now();
    let ready = false;
    readiness(CEIL - 900).then(() => { ready = true; });

    // Power-on: corners, then the scale lights up from 0 to the redline.
    utils.set([...dial.ticks, ...dial.nums, dial.ring, dial.red, dial.hub], { opacity: 0 });
    createTimeline({ defaults: { ease: 'out(3)' } })
      .add(corners, { opacity: [0, 1], duration: 800, delay: stagger(80) }, 0)
      .add(cluster, { opacity: [0, 1], duration: 500 }, 40)
      .add(dial.ring, { opacity: [0, 1], duration: 700 }, 60)
      .add(dial.ticks, { opacity: [0, 1], duration: 240, delay: stagger(5) }, 90)
      .add(dial.nums, { opacity: [0, 1], duration: 420, delay: stagger(36) }, 160)
      .add(dial.red, { opacity: [0, 1], duration: 500 }, 380)
      .add(dial.hub, { opacity: [0, 1], duration: 900 }, 300);

    // Self-test steps follow the readout, so they track real readiness.
    const STEPS = [[30, 'Lights · OK'], [62, 'Sensors · OK'], [84, 'Cluster · OK'], [95, 'Chassis · OK']];
    let step = 0;
    function roll(text) {
      const next = document.createElement('span');
      next.textContent = text;
      const old = [...statusEl.querySelectorAll('span')];
      statusEl.appendChild(next);
      animate(old, { translateY: ['0%', '-115%'], duration: 420, ease: EASE.inOut, onComplete: () => old.forEach((s) => s.remove()) });
      animate(next, { translateY: ['115%', '0%'], duration: 520, ease: EASE.inOut });
    }

    // Live loop: speed integrates toward a target (it can't pass 93
    // until the page is ready); the needle is a damped spring.
    const LAUNCH = 260;
    const K = 1.62;
    const SWEEP_AT = 300;
    const SWEEP_UP = 620;
    const HOLD = 110;
    const SPRING_K = 70;
    const SPRING_C = 2 * 0.6 * Math.sqrt(SPRING_K);
    let v = 0;
    let n = 0;
    let nv = 0;
    let target = null;           // null = follow the speed
    let tDone = 0;
    let last = T0;
    let shownSpeed = -1;
    let shownTime = '';

    const loop = createTimer({
      onUpdate: () => {
        const now = performance.now();
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        const t = now - T0;

        if (!tDone && t > LAUNCH) {
          const goal = ready || t > CEIL - 650 ? 104 : 93;
          v += (goal - v) * (1 - Math.exp(-K * dt));
          while (step < STEPS.length && v >= STEPS[step][0]) {
            roll(STEPS[step][1]);
            step += 1;
            countEl.textContent = `${step}/4`;
          }
          if (v >= 99.6 && t >= FLOOR - 120) {
            v = 100;
            tDone = t;
            finish();
          }
        }

        // Needle: eased sweep to the end stop, then a spring onto the speed.
        const ts = t - SWEEP_AT;
        if (ts < 0) {
          n = 0;
        } else if (ts < SWEEP_UP) {
          const u = ts / SWEEP_UP;
          n = MAX * (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
        } else if (ts < SWEEP_UP + HOLD) {
          n = MAX;
        } else {
          const goalN = target == null ? v : target;
          nv += (SPRING_K * (goalN - n) - SPRING_C * nv) * dt;
          n += nv * dt;
          if (n > MAX + 2) { n = MAX + 2; nv = 0; }
          if (n < 0) { n = 0; nv = 0; }
        }

        dial.needle.setAttribute('transform', `rotate(${angleOf(n).toFixed(2)})`);
        dial.trail.setAttribute('stroke-dasharray', `${Math.max(0, n / MAX).toFixed(4)} 1`);
        const s = Math.round(v);
        if (s !== shownSpeed) {
          shownSpeed = s;
          speedEl.textContent = String(s).padStart(3, '0');
        }
        const shown = ((tDone || t) / 1000).toFixed(1);
        if (shown !== shownTime) {
          shownTime = shown;
          timeEl.textContent = shown;
        }
      },
    });

    function finish() {
      timerEl.classList.add('is-final');
      roll('Ready to drive');
      led.classList.add('is-ready');
      try { sessionStorage.setItem(SEEN_KEY, '1'); } catch (err) { /* private mode */ }

      // Hold the result for a beat, then power the cluster down into the
      // light signature.
      createTimeline()
        .call(() => { target = 0; }, 420)
        .add(dial.ticks, { opacity: 0, duration: 260, delay: stagger(4, { from: 'last' }), ease: 'out(2)' }, 440)
        .add([...dial.nums, dial.red, dial.ring, dial.hub], { opacity: 0, duration: 420, ease: 'out(2)' }, 480)
        .add(cluster, { opacity: 0, scale: 0.985, duration: 560, ease: 'out(2)' }, 560)
        .call(() => exit({ loop, corners }), 680);
    }
  }

  /* ------------------------------------------------------------------
     9. EXIT — the DRL lights segment by segment from the centre out,
        flares into one line, the layer splits along it and the line
        settles onto the road. The hero enters as the halves part.
  ------------------------------------------------------------------ */
  function exit(ctx = {}) {
    const segsHost = pre.querySelector('.pre-drl-segs');
    const count = window.innerWidth < 760 ? 18 : 36;
    for (let i = 0; i < count; i++) segsHost.appendChild(document.createElement('i'));
    const segs = [...segsHost.children];
    const core = pre.querySelector('.pre-drl-core');
    const bloom = pre.querySelector('.pre-drl-bloom');
    const drlLayer = pre.querySelector('.pre-drl');
    const halves = [...pre.querySelectorAll('.pre-half')];
    const corners = ctx.corners || [...pre.querySelectorAll('.pre-corner')];

    const roadY = ground.getBoundingClientRect().top;
    const mid = window.innerHeight / 2;
    const dy = Math.max(-mid, Math.min(mid - 2, roadY - mid));
    const SPLIT = 880;

    createTimeline()
      .add(segs, { opacity: [0, 1], scaleY: [0.3, 1], duration: 300, ease: 'out(3)', delay: stagger(22, { from: 'center' }) }, 0)
      .add(bloom, { opacity: [0, 1], scaleX: [0.2, 1], duration: 900, ease: 'out(3)' }, 120)
      .add(core, { scaleX: [0, 1], opacity: [0, 1], duration: 620, ease: 'outExpo' }, 470)
      .add(bloom, { opacity: 0, duration: 900, ease: 'out(2)' }, SPLIT)
      .add(segs, { opacity: 0, duration: 520, ease: 'out(2)' }, SPLIT - 120)
      .add(corners, { opacity: 0, duration: 380, ease: 'out(2)' }, SPLIT - 220)
      .add(halves, { '--edge': [0, 1], duration: 260, ease: 'out(2)' }, SPLIT - 140)
      .add(halves, { '--edge': 0, duration: 760, ease: 'in(2)' }, SPLIT + 380)
      .add(halves[0], { translateY: ['0%', '-100%'], duration: 1150, ease: EASE.inOut }, SPLIT)
      .add(halves[1], { translateY: ['0%', '100%'], duration: 1150, ease: EASE.inOut }, SPLIT)
      .add(drlLayer, { translateY: [0, dy], duration: 1150, ease: EASE.inOut }, SPLIT)
      .add(core, { opacity: [1, 0.35], duration: 1150, ease: 'in(2)' }, SPLIT)
      .call(() => {
        Site.scroll.start();
        entrance({ groundAt: 760 });
      }, SPLIT + 40)
      .add(core, { opacity: 0, duration: 380, ease: 'out(2)' }, SPLIT + 1150)
      .call(() => Site.emit('intro:done'), SPLIT + 1100)
      .call(() => {
        if (ctx.loop) ctx.loop.cancel();
        pre.remove();
      }, SPLIT + 1560);
  }

  /* ------------------------------------------------------------------
     10. BOOT
  ------------------------------------------------------------------ */
  function dropPreloader() {
    if (pre && pre.parentNode) pre.remove();
  }

  if (reduced) {
    dropPreloader();
    // Back from a case study the shutter is closed: open it first.
    const open = Site.returning ? Site.transition.reveal() : Promise.resolve();
    open.then(() => Site.emit('intro:done'));
    return;
  }

  scrollOut();

  if (Site.returning) {
    // The shutter is closed: park the finished car behind it, open, then
    // bring the headline up and the lights on.
    dropPreloader();
    prime({ parked: true });
    Site.transition.reveal().then(() => {
      entrance({ parked: true });
      setTimeout(() => Site.emit('intro:done'), 650);
    });
    return;
  }

  if (!pre) {
    prime();
    entrance();
    Site.emit('intro:done');
    return;
  }

  Site.scroll.stop();
  prime();
  if (seen) {
    // Already met: skip the self test, keep the light signature.
    readiness(1600).then(() => exit());
  } else {
    ignition();
  }
})();
