/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · home · publications
   02 Publications — "The drive".

   One number, p (0 … 1), is how far through the pinned scroll the
   reader is. Everything on the stage is a pose of p:

     0.00 – 0.10   the intro over the sky fades; the road picks up speed
     0.06 – 0.47   Publication 01 comes up the left side of the road,
                   slows beside you long enough to read, sweeps past
     0.33 – 0.80   Publication 02 does the same on the right
     0.78 – 0.88   the camera pulls back behind a toy grand tourer
     0.88 – 0.98   it drives off to the horizon; the night goes dark
                   until only its redline light bar is left

   The billboards move in perspective toward a vanishing point on the
   horizon (their size is linear in 1/depth, so they creep while far
   and rush when near). The road slows while a billboard is readable,
   so the lane marks slow too, and the route strip at the foot reads
   like navigation: the next stop and the metres to it.

   Without the shared runtime, or with reduced motion, nothing is
   pinned: the billboards are cards in the page (CSS default).
   ================================================================== */
(function () {
  const section = document.getElementById('writings');
  if (!section) return;
  const stage = section.querySelector('.pd-stage');
  const boards = [...section.querySelectorAll('.bb')];

  const Site = window.Site;
  const A = Site && Site.anime;
  const reduced = !A || Site.reduced;

  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const smooth = (v) => v * v * (3 - 2 * v);
  const lerp = (a, b, t) => a + (b - a) * t;
  const pad = (n) => String(n).padStart(2, '0');

  /* ------------------------------------------------------------------
     1. A billboard opens its study, through its CTA so the shutter
        transition runs. Keyboard users have the CTA itself.
  ------------------------------------------------------------------ */
  boards.forEach((b) => {
    const face = b.querySelector('.bb-face');
    const cta = b.querySelector('.bb-cta');
    if (face && cta) face.addEventListener('click', (e) => { if (!e.target.closest('a')) cta.click(); });
  });

  if (reduced || !stage) return;

  /* ------------------------------------------------------------------
     2. THE LIVE THUMBNAILS (moved here from the showroom)
  ------------------------------------------------------------------ */
  const { createTimeline } = A;

  // Queries from the study, one per kind of failure it found.
  const QUERIES = ['13in laptop', 'return policy', 'knee pain', 'freeze card'];

  // The five steps of the study's checkout example. Each button names
  // where it goes next ("Continue to extras"), as the study recommends.
  const STEPS = [
    { name: 'Details', fields: ['Full name', 'Email', 'Phone'] },
    { name: 'Delivery', fields: ['Address', 'Postcode', 'Delivery slot'] },
    { name: 'Payment', fields: ['Card number', 'Expiry', 'Name on card'] },
    { name: 'Extras', fields: ['Gift wrap', 'Protection', 'Note'] },
    { name: 'Review', fields: ['Items', 'Deliver to', 'Total'] },
  ];

  // k = steps completed; the current step is k (0-based), and k = 5
  // is the finished flow. Cells charge only for completed steps.
  function stepTo(panel, k) {
    const n = STEPS.length;
    const s = STEPS[Math.min(k, n - 1)];
    const q = (sel) => panel.querySelector(sel);
    panel.querySelectorAll('.bfb-steps li').forEach((li, j) => {
      li.classList.toggle('is-done', j < k);
      li.classList.toggle('is-on', j === k);
    });
    panel.querySelectorAll('.bfb-cells i').forEach((c, j) => {
      c.classList.toggle('is-full', j < k);
      c.classList.toggle('is-on', j === k);
    });
    panel.querySelectorAll('.bfb-field small').forEach((f, j) => { f.textContent = s.fields[j]; });
    q('.bfb-n').textContent = pad(Math.min(k + 1, n));
    q('.bfb-name').textContent = k < n ? s.name : 'Complete';
    q('.bfb-pct b').textContent = Math.round((k / n) * 100);
    q('.bfb-title').textContent = s.name;
    q('.bfb-btn').firstChild.textContent = k < n - 1 ? 'Continue to ' : '';
    q('.bfb-next').textContent = k < n - 1 ? STEPS[k + 1].name.toLowerCase() : k < n ? 'Place order' : 'Order placed';
    q('.bfb-form').classList.toggle('is-filled', k >= n);
    panel.classList.toggle('is-complete', k >= n);
  }

  function makeLoops(b) {
    const loops = [];
    const typed = b.querySelector('.fqb-q');
    if (typed) {
      const typing = createTimeline({ loop: true, autoplay: false });
      let at = 0;
      QUERIES.forEach((text) => {
        const type = { n: 0 };
        const wipe = { n: text.length };
        const show = (o) => () => { typed.textContent = text.slice(0, Math.round(o.n)); };
        typing.add(type, { n: [0, text.length], duration: text.length * 90, ease: 'linear', onUpdate: show(type) }, at);
        at += text.length * 90 + 1900;
        typing.add(wipe, { n: [text.length, 0], duration: text.length * 30, ease: 'linear', onUpdate: show(wipe) }, at);
        at += text.length * 30 + 450;
      });
      loops.push(typing);
    }
    // The stepper works through its flow from the head start (step 1
    // done on arrival): fill the fields, press Continue, charge a
    // cell. Full, it holds, then a new customer arrives.
    const panel = b.querySelector('.bfb-panel');
    if (panel) {
      const STEP = 2300;
      const form = panel.querySelector('.bfb-form');
      const btn = panel.querySelector('.bfb-btn');
      const flow = createTimeline({ loop: true, autoplay: false });
      let at = 0;
      for (let k = 1; k < STEPS.length; k++) {
        flow
          .call(() => stepTo(panel, k), at)
          .call(() => form.classList.add('is-filled'), at + 350)
          .call(() => btn.classList.add('is-press'), at + 1650)
          .call(() => btn.classList.remove('is-press'), at + 1850);
        at += STEP;
      }
      flow.call(() => stepTo(panel, STEPS.length), at).call(() => {}, at + 2800);
      loops.push(flow);
    }
    return loops;
  }

  /* ------------------------------------------------------------------
     3. THE DRIVE — set up
  ------------------------------------------------------------------ */
  section.classList.add('is-drive');

  const rule = section.querySelector('.pd-rule');
  const intro = section.querySelector('.pd-intro');
  const lane = section.querySelector('.pd-lane');
  const car = section.querySelector('.pd-car');
  const readK = section.querySelector('.pd-read-k');
  const readV = section.querySelector('.pd-read-v');
  const readD = section.querySelector('.pd-read-d');
  const readN = readD && readD.querySelector('b');
  const route = section.querySelector('.pd-route');
  const marks = [...section.querySelectorAll('.pd-route-mark')];
  const hud = section.querySelector('.pd-hud');
  const narrow = window.matchMedia('(max-width: 899px)');

  const WIN = [[0.06, 0.47], [0.33, 0.8]];   // each billboard's stretch of p
  const IN = 0.42;                            // …approach | read | pass, within it
  const OUT = 0.62;
  const CAR_IN = [0.78, 0.88];
  const CAR_AWAY = [0.88, 0.975];
  const DARK = [0.93, 1];
  const ROUTE_M = 2400;                       // the route, in metres
  const LANE_PX = 26000;                      // lane travel over the whole route

  const titles = boards.map((b) => (b.querySelector('.bb-title') || {}).textContent || '');
  const readAt = WIN.map(([a, b]) => [a + (b - a) * IN, a + (b - a) * OUT]);

  boards.forEach((b) => {
    b.side = Number(b.dataset.dir) || 1;
    b.loops = null;
    b.live = false;
    const panel = b.querySelector('.bfb-panel');
    if (panel) stepTo(panel, 1);
  });

  // Speed along the road: it slows while a billboard can be read,
  // starts gently, and stops for the car to drive away.
  function bump(p, a, b, c, d) {
    if (p <= a || p >= d) return 0;
    if (p < b) return smooth((p - a) / (b - a));
    if (p <= c) return 1;
    return 1 - smooth((p - c) / (d - c));
  }
  function speed(p) {
    let v = 1;
    readAt.forEach(([r0, r1]) => { v = Math.min(v, 1 - 0.8 * bump(p, r0 - 0.03, r0 + 0.01, r1 - 0.01, r1 + 0.03)); });
    if (p < 0.08) v *= 0.45 + 0.55 * smooth(p / 0.08);
    return v * (1 - smooth(clamp01((p - 0.84) / 0.05)));
  }
  const STEPS_N = 1000;
  const S = new Float32Array(STEPS_N + 1);
  for (let i = 1; i <= STEPS_N; i++) S[i] = S[i - 1] + speed((i - 0.5) / STEPS_N) / STEPS_N;
  const TOTAL = S[STEPS_N];
  const travel = (p) => {
    const f = clamp01(p) * STEPS_N;
    const i = Math.floor(f);
    return i >= STEPS_N ? 1 : (S[i] + (S[i + 1] - S[i]) * (f - i)) / TOTAL;
  };
  const metres = (p) => travel(p) * ROUTE_M;

  // The route strip: where each billboard is read, and where it ends.
  const readM = readAt.map(([r0, r1]) => metres((r0 + r1) / 2));
  marks.forEach((m, i) => m.style.setProperty('--at', i < readM.length ? (readM[i] / ROUTE_M).toFixed(4) : '1'));

  /* ------------------------------------------------------------------
     4. POSES
  ------------------------------------------------------------------ */
  let W = 0;
  let H = 0;
  let HZ = 0;
  let travelPx = 1;
  let carGround = 0;   // the gap under the car's wheels at rest
  let carDrop = 0;     // how far below the frame it starts

  function measure() {
    W = stage.clientWidth;
    H = stage.clientHeight;
    HZ = (parseFloat(getComputedStyle(stage).getPropertyValue('--hz')) / 100) * H;
    travelPx = Math.max(1, section.offsetHeight - H);
    if (car) {
      carGround = H - car.offsetTop - car.offsetHeight;
      carDrop = car.offsetHeight + carGround + 24;
    }
    boards.forEach((b) => {
      b.w = b.offsetWidth;
      b.h = b.offsetHeight;
    });
  }

  // Where a billboard sits while it is read, relative to the
  // vanishing point (centre of the stage, on the horizon).
  function readPose(b) {
    if (narrow.matches) {
      return { x: b.side * W * 0.01, y: Math.max(H * 0.46, 150 + b.h / 2) - HZ, r: -b.side * 6 };
    }
    return { x: b.side * (W / 2 - b.w / 2 - W * 0.075), y: Math.max(H * 0.405, 150 + b.h / 2) - HZ, r: -b.side * 13 };
  }

  function place(b, t) {
    if (t <= 0 || t >= 1) {
      if (b.shown !== false) {
        b.style.opacity = '0';
        b.style.pointerEvents = 'none';
        b.shown = false;
      }
      return;
    }
    const R = readPose(b);
    let s;
    let x;
    let y;
    let r = R.r;
    let o = 1;
    if (t < IN) {
      // Approach: depth falls steadily, so size grows as 1/depth.
      const u = t / IN;
      const s0 = 0.035;
      s = 1 / (1 / s0 + (1 - 1 / s0) * u);
      x = R.x * s;
      y = R.y * s;
      o = clamp01(u / 0.14);
    } else if (t <= OUT) {
      // Beside you: it barely moves, so it can be read.
      const v = (t - IN) / (OUT - IN);
      s = 1 + 0.04 * v;
      x = R.x * s;
      y = R.y * s;
    } else {
      // Passing: it grows, swings edge-on and leaves on its side.
      const w = (t - OUT) / (1 - OUT);
      const s1 = 1.04;
      s = s1 / (1 - 0.72 * w);
      x = R.x * s + b.side * (s - s1) * W * 0.34;
      y = R.y * s + (s - s1) * H * 0.04;
      r = R.r - b.side * 42 * w;
      o = 1 - clamp01((w - 0.55) / 0.4);
    }
    b.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${s.toFixed(4)}) rotateY(${r.toFixed(2)}deg)`;
    b.style.opacity = o.toFixed(3);
    b.style.zIndex = String(Math.round(s * 100));
    if (b.shown !== true) {
      b.style.pointerEvents = '';
      b.shown = true;
    }
  }

  /* ------------------------------------------------------------------
     5. UPDATE — one frame of the drive
  ------------------------------------------------------------------ */
  let inView = false;
  let read = '';
  let navName = '';

  function update() {
    const box = section.getBoundingClientRect();
    const p = clamp01(-box.top / travelPx);

    // The road
    const d = travel(p);
    if (lane) lane.style.transform = `translateY(${((d * LANE_PX) % 200).toFixed(1)}px)`;

    // Intro over the sky, and the header's progress
    const io = smooth(clamp01((p - 0.012) / 0.08));
    if (intro) {
      intro.style.opacity = (1 - io).toFixed(3);
      intro.style.transform = `translateY(${(-io * 40).toFixed(1)}px)`;
      intro.style.visibility = io >= 1 ? 'hidden' : '';
    }
    if (rule) rule.style.setProperty('--p', p.toFixed(4));

    // The billboards, and their thumbnails while they can be seen
    boards.forEach((b, i) => {
      const [a, z] = WIN[i];
      const t = (p - a) / (z - a);
      place(b, t);
      const live = inView && t > 0.12 && t < 0.86;
      if (live && !b.loops) b.loops = makeLoops(b);
      if (b.loops && live !== b.live) {
        b.live = live;
        b.loops.forEach((l) => (live ? l.play() : l.pause()));
      }
    });

    // The car: the camera pulls back behind it, then it drives off
    if (car) {
      const ci = smooth(clamp01((p - CAR_IN[0]) / (CAR_IN[1] - CAR_IN[0])));
      const ca = clamp01((p - CAR_AWAY[0]) / (CAR_AWAY[1] - CAR_AWAY[0]));
      if (ci <= 0) {
        car.style.opacity = '0';
      } else if (ca <= 0) {
        // The camera pulls back: the car rises into the frame from below.
        car.style.opacity = '1';
        car.style.transform = `translateY(${((1 - ci) * carDrop).toFixed(1)}px) scale(${(1.35 - 0.35 * ci).toFixed(4)})`;
        car.style.setProperty('--glow', (0.55 + 0.25 * ci).toFixed(3));
      } else {
        const s = 1 / (1 + 30 * Math.pow(ca, 1.3));
        const lift = (H - carGround - HZ) * (1 - s);
        car.style.transform = `translateY(${(-lift).toFixed(1)}px) scale(${s.toFixed(4)})`;
        car.style.opacity = (1 - clamp01((p - 0.975) / 0.02)).toFixed(3);
        car.style.setProperty('--glow', (0.8 + 0.2 * ca).toFixed(3));
      }
    }
    stage.style.setProperty('--dark', smooth(clamp01((p - DARK[0]) / (DARK[1] - DARK[0]))).toFixed(3));

    // The route strip, which bows out as the car takes the frame
    if (hud) hud.style.opacity = (1 - smooth(clamp01((p - 0.785) / 0.05))).toFixed(3);
    if (route) route.style.setProperty('--route', d.toFixed(4));
    const m = d * ROUTE_M;
    marks.forEach((mk, i) => mk.classList.toggle('is-passed', i < readM.length ? m >= readM[i] : p >= CAR_AWAY[0]));
    let k = 'Next';
    let v = titles[0];
    let left = readM[0] - m;
    if (p >= readAt[0][0] && p <= readAt[0][1]) { k = 'Reading'; v = titles[0]; left = -1; }
    else if (p > readAt[0][1] && p < readAt[1][0]) { v = titles[1]; left = readM[1] - m; }
    else if (p >= readAt[1][0] && p <= readAt[1][1]) { k = 'Reading'; v = titles[1]; left = -1; }
    else if (p > readAt[1][1]) { v = 'The Designer'; left = ROUTE_M - m; }
    const label = `${k}|${v}`;
    if (label !== read) {
      read = label;
      if (readK) readK.textContent = k;
      if (readV) readV.textContent = v;
    }
    if (readD) {
      readD.style.visibility = left < 0 ? 'hidden' : '';
      if (readN && left >= 0) readN.textContent = String(Math.max(0, Math.round(left / 10) * 10));
    }

    // The nav readout names the billboard being read
    const docked = box.top <= 1 && box.bottom >= H - 1;
    const name = docked ? (k === 'Reading' ? v : section.dataset.section) : '';
    if (name && name !== navName && Site.nav) Site.nav.set(section.dataset.index, name);
    navName = name;
  }

  /* ------------------------------------------------------------------
     6. INPUT — tabbing to a billboard's link drives to where it is read
  ------------------------------------------------------------------ */
  boards.forEach((b, i) => {
    b.addEventListener('focusin', () => {
      const [r0, r1] = readAt[i];
      const box = section.getBoundingClientRect();
      const p = clamp01(-box.top / travelPx);
      if (p >= r0 && p <= r1) return;
      const top = box.top + window.scrollY;
      Site.scroll.to(top + ((r0 + r1) / 2) * travelPx, { duration: 1.2 });
    });
  });

  /* ------------------------------------------------------------------
     7. BOOT
  ------------------------------------------------------------------ */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      inView = entries[0].isIntersecting;
      stage.classList.toggle('is-parked', !inView);
      update();
    }).observe(section);
  } else {
    inView = true;
  }

  const remeasure = () => {
    measure();
    update();
  };
  measure();
  update();
  Site.scroll.on(update);
  window.addEventListener('resize', remeasure);
  window.addEventListener('load', remeasure);
  if (narrow.addEventListener) narrow.addEventListener('change', remeasure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(remeasure);
})();
