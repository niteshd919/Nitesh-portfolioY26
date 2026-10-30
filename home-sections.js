/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · home sections
   02 About   — the copy rises line by line, then inks in word by word
                as it is read; capability rows draw in from their
                ticks; the sill plate's screws seat and light crosses it.
   03 Journey — three gauges are built in SVG and run a self-test when
                the cluster arrives: needles sweep to the end stop and
                settle on their value, the scale lights up behind them
                and the readouts roll. (The heading uses data-reveal,
                the brand wall is CSS.)
   ================================================================== */

(function () {
  const Site = window.Site;
  if (!Site) return;
  const { animate, createTimeline, stagger, splitText, utils } = Site.anime;
  const spring = Site.anime.spring || Site.anime.createSpring;   // v4.5 renamed it
  const EASE = Site.motion.ease;
  const reduced = Site.reduced;
  const clamp01 = (v) => Math.min(1, Math.max(0, v));

  /* ------------------------------------------------------------------
     1. ABOUT · COPY — split into lines (masked) and words. Lines rise
        on arrival; each word's ink follows the reader: pale until the
        reading line reaches it, full ink once it has passed.
  ------------------------------------------------------------------ */
  function initCopy(el) {
    if (!el || reduced) return;
    const PALE = 0.14;
    const SPREAD = 6;          // words in the soft edge of the ink
    let lines = [];
    let words = [];
    let shown = [];
    let arrived = false;
    let risen = false;

    function rise() {
      risen = true;
      animate(lines, { translateY: ['112%', '0%'], duration: 1300, delay: stagger(90), ease: EASE.out });
    }

    function paint() {
      if (!words.length) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the copy's top reaches 80% of the viewport, 1 when its
      // foot passes 55% — the ink keeps just ahead of a natural read.
      const p = clamp01((vh * 0.8 - r.top) / (r.height + vh * 0.25));
      const head = p * (words.length + SPREAD);
      for (let i = 0; i < words.length; i++) {
        const t = clamp01((head - i) / SPREAD);
        const o = Math.round((PALE + (1 - PALE) * t * t * (3 - 2 * t)) * 100) / 100;
        if (o !== shown[i]) {
          shown[i] = o;
          words[i].style.opacity = o;
        }
      }
    }

    // Lines + words; re-runs on resize (new elements, same state).
    const split = splitText(el, { lines: { wrap: 'clip' }, words: true });
    split.addEffect((self) => {
      lines = self.lines;
      words = self.words;
      shown = [];
      if (!arrived) utils.set(lines, { translateY: '112%' });
      else if (!risen) rise();
      paint();
    });

    Site.observe(el, () => {
      arrived = true;
      if (lines.length && !risen) rise();
    });
    Site.scroll.on(paint);
    window.addEventListener('resize', paint);
  }

  /* ------------------------------------------------------------------
     2. ABOUT · CAPABILITIES — each row's hairline draws from its tick,
        then the code and the name settle onto it.
  ------------------------------------------------------------------ */
  function initCaps(block) {
    if (!block || reduced) return;
    const rows = block.querySelectorAll('.cap');
    const text = block.querySelectorAll('.cap-code, .cap-name');
    const ticks = block.querySelector('.about-caps-ticks');
    utils.set(rows, { '--draw': 0 });
    utils.set(text, { opacity: 0, translateY: 14 });
    if (ticks) utils.set(ticks, { scaleX: 0 });
    Site.observe(block, () => {
      if (ticks) animate(ticks, { scaleX: [0, 1], duration: 1500, ease: EASE.inOut });
      animate(rows, { '--draw': [0, 1], duration: 1300, delay: stagger(65, { start: 150 }), ease: EASE.inOut });
      animate(text, { opacity: [0, 1], translateY: [14, 0], duration: 1100, delay: stagger(32, { start: 420 }), ease: EASE.out });
    });
  }

  /* ------------------------------------------------------------------
     3. ABOUT · SILL PLATE — the screws seat with a last quarter turn,
        then a single pass of studio light crosses the steel.
  ------------------------------------------------------------------ */
  function initPlate(plate) {
    if (!plate || reduced) return;
    const screws = plate.querySelectorAll('.plate-screw');
    const sheen = plate.querySelector('.plate-sheen');
    utils.set(screws, { '--turn': -110 });
    Site.observe(plate, () => {
      createTimeline()
        .add(screws, { '--turn': [-110, 0], duration: 1300, delay: stagger(90), ease: EASE.inOut }, 0)
        .add(sheen, { translateX: ['-100%', '100%'], duration: 2100, ease: EASE.inOut }, 650);
    });
  }

  /* ------------------------------------------------------------------
     4. JOURNEY · GAUGES — a 240° dial per stat: ticks inside the ring,
        numerals outside, a redline band, a full-length needle from a
        hub, the readout in the open foot. data-* on .gauge sets the
        scale: max, minor (tick step), major (numeral step), red, value.
  ------------------------------------------------------------------ */
  const NS = 'http://www.w3.org/2000/svg';
  const A0 = -120;
  const SWEEP = 240;
  const R = 122;

  function make(tag, attrs, parent) {
    const n = document.createElementNS(NS, tag);
    Object.keys(attrs).forEach((k) => n.setAttribute(k, attrs[k]));
    parent.appendChild(n);
    return n;
  }
  const polar = (r, deg) => [
    +(r * Math.sin((deg * Math.PI) / 180)).toFixed(2),
    +(-r * Math.cos((deg * Math.PI) / 180)).toFixed(2),
  ];

  function buildGauge(g) {
    const svg = g.querySelector('.gauge-dial');
    const max = Number(g.dataset.max);
    const minor = Number(g.dataset.minor);
    const major = Number(g.dataset.major);
    const red = Number(g.dataset.red);
    const steps = Math.round(max / minor);
    const per = Math.round(major / minor);
    const ang = (v) => A0 + (SWEEP * v) / max;
    const arc = (r, v0, v1) => {
      const [x0, y0] = polar(r, ang(v0));
      const [x1, y1] = polar(r, ang(v1));
      const large = ang(v1) - ang(v0) > 180 ? 1 : 0;
      return `M${x0} ${y0} A${r} ${r} 0 ${large} 1 ${x1} ${y1}`;
    };

    make('circle', { class: 'g-bezel', r: 154 }, svg);
    make('circle', { class: 'g-face', r: 86 }, svg);
    make('path', { class: 'g-ring', d: arc(R, 0, max) }, svg);
    make('path', { class: 'g-red', d: arc(R - 21, red, max) }, svg);

    const tickG = make('g', { class: 'g-ticks' }, svg);
    const ticks = [];
    const nums = [];
    for (let i = 0; i <= steps; i++) {
      const v = i * minor;
      const isMajor = i % per === 0;
      const isMid = !isMajor && per % 2 === 0 && i % (per / 2) === 0;
      const len = isMajor ? 16 : isMid ? 10 : 6;
      const [x1, y1] = polar(R, ang(v));
      const [x2, y2] = polar(R - len, ang(v));
      const cls = `g-tick${isMajor ? ' is-major' : isMid ? ' is-mid' : ''}${v >= red ? ' is-red' : ''}`;
      ticks.push({ el: make('line', { class: cls, x1, y1, x2, y2 }, tickG), v });
      if (isMajor) {
        const [nx, ny] = polar(R + 19, ang(v));
        const t = make('text', { class: `g-num${v >= red ? ' is-red' : ''}`, x: nx, y: ny }, svg);
        t.textContent = String(Math.round(v));
        nums.push({ el: t, v });
      }
    }
    if (g.dataset.unit) {
      make('text', { class: 'g-unit', x: 0, y: 30 }, svg).textContent = g.dataset.unit;
    }

    const needle = make('g', { class: 'g-needle', transform: `rotate(${A0})` }, svg);
    make('path', { class: 'g-needle-glow', d: `M0 -${R - 34} L0 -${R - 8}` }, needle);
    make('path', { class: 'g-needle-body', d: `M-2.6 18 L-0.8 -${R - 6} L0.8 -${R - 6} L2.6 18 Z` }, needle);
    make('path', { class: 'g-needle-tip', d: `M0 -${R - 30} L0 -${R - 9}` }, needle);
    make('circle', { class: 'g-hub', r: 10 }, svg);
    make('circle', { class: 'g-hub-dot', r: 2.4 }, svg);

    // Position the needle and light the scale up to it.
    let lit = 0;
    function set(v) {
      needle.setAttribute('transform', `rotate(${ang(v).toFixed(2)})`);
      const n = v > 0.001 ? Math.min(ticks.length, Math.floor(v / minor + 1e-4) + 1) : 0;
      if (n !== lit) {
        for (let i = Math.min(n, lit); i < Math.max(n, lit); i++) ticks[i].el.classList.toggle('is-lit', i < n);
        lit = n;
        nums.forEach((m) => m.el.classList.toggle('is-lit', n > 0 && v >= m.v - 1e-4));
      }
    }
    return { set, max };
  }

  function initCluster(cluster) {
    if (!cluster) return;
    const gauges = [...cluster.querySelectorAll('.gauge')].map((g) => ({
      g,
      dial: buildGauge(g),
      value: Number(g.dataset.value),
      read: g.querySelector('.gauge-read'),
    }));

    if (reduced) {
      gauges.forEach((x) => x.dial.set(x.value));
      return;
    }

    // Off until the cluster arrives: needles at rest, readouts dark.
    gauges.forEach((x) => utils.set(x.read, { opacity: 0 }));

    Site.observe(cluster, () => {
      // Centre first, the flanking dials a beat later — like a real
      // cluster's self-test: sweep to the stop, hold, settle on value.
      const order = [1, 0, 2];
      gauges.forEach((x, i) => {
        const delay = 160 + order.indexOf(i) * 140;
        const s = { v: 0 };
        const draw = () => x.dial.set(s.v);
        createTimeline({ delay })
          .add(s, { v: [0, x.dial.max], duration: 1050, ease: EASE.inOut, onUpdate: draw }, 0)
          .add(s, { v: x.value, ease: spring({ mass: 1, stiffness: 62, damping: 9.5 }), onUpdate: draw }, 1180);
        animate(x.read, { opacity: [0, 1], duration: 700, delay: delay + 900, ease: 'out(2)' });
        Site.odometer(x.read, { duration: 1700, delay: delay + 900, turns: 1 });
      });
    });
  }

  /* ------------------------------------------------------------------
     5. BOOT
  ------------------------------------------------------------------ */
  initCopy(document.querySelector('.about-copy'));
  initCaps(document.querySelector('.about-caps'));
  initPlate(document.querySelector('.plate'));
  initCluster(document.querySelector('.cluster'));
})();
