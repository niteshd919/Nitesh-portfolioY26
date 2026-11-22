/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · sound
   A quiet cabin. Every sound is made here with the Web Audio API, so
   there is nothing to download, and each is mixed to sit under the
   page the way good switchgear does: felt more than heard.

     tick        hovering something you can press: one notch of a knurled knob
     press       pressing it: a damped switch
     menu-open   the grille closing: air through the louvres, each slat seating
     menu-close  the grille opening: the air let back out
     shutter     leaving a page: the grille seals with a soft, heavy thud
                 while the light signature draws across it as a warm glint
     section     the nav readout rolling over: a mechanical counter
     passby      a billboard sweeping past on the drive, panned to its side
     ignite      pressing Engine start: a thock and a two-tone ready chime
     on / off    the toggle: the light signature as an arpeggio / one note down

   Two continuous voices, both silent until something moves them:
     road        scrolling while a road is on screen (the hero, the drive)
                 is heard as driving: tyre roar and a faint motor whine
                 that follow your speed, and the road's own speed on the drive
     rev         the Engine start button: an electric spool that follows
                 its lit scale up on hover and back down on leave

   Browsers allow audio only after a gesture, so the page stays silent
   until the visitor first clicks, taps or presses a key. Sound is on by
   default; the nav toggle is remembered in localStorage ('nd:sound').

   Site.sound
     play(name, opts)    one-shot sounds from the list above
     road(el, speed?)    scrolling while el is on screen is driving;
                         speed() may return 0 … 1 for the road's own pace
     rev(level, ms)      spool the motor toward level (0 … 1) over ms
     set(on) / enabled   switch sound, read the switch
   ================================================================== */
(function () {
  const Site = window.Site;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!Site || !Site.sound || !AC) return;

  const root = document.documentElement;
  const KEY = 'nd:sound';
  const VOLUME = 0.8;   // master; every level below is mixed against it

  let enabled = true;
  try { if (localStorage.getItem(KEY) === '0') enabled = false; } catch (err) { /* private mode */ }

  /* ------------------------------------------------------------------
     1. ENGINE — one context, built on the first gesture: a master
        gain into a limiter (a safety, not a sound), a short dark
        reverb (a padded cabin, not a hall) and a buffer of noise.
  ------------------------------------------------------------------ */
  let ctx = null;
  let master = null;
  let verb = null;
  let noise = null;

  function impulse(seconds, decay) {
    const rate = ctx.sampleRate;
    const len = Math.floor(rate * seconds);
    const buf = ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      let lp = 0;
      for (let i = 0; i < len; i++) {
        lp += 0.3 * (Math.random() * 2 - 1 - lp);
        d[i] = lp * Math.pow(1 - i / len, decay);
      }
    }
    return buf;
  }

  function build() {
    ctx = new AC();
    const limiter = ctx.createDynamicsCompressor();
    limiter.threshold.value = -12;
    limiter.knee.value = 6;
    limiter.ratio.value = 8;
    limiter.attack.value = 0.002;
    limiter.release.value = 0.2;
    limiter.connect(ctx.destination);

    master = ctx.createGain();
    master.gain.value = enabled ? VOLUME : 0;
    master.connect(limiter);

    verb = ctx.createConvolver();
    verb.buffer = impulse(2.2, 3.5);
    const ret = ctx.createGain();
    ret.gain.value = 0.9;
    verb.connect(ret);
    ret.connect(master);

    const len = ctx.sampleRate * 2;
    noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    ctx.onstatechange = paint;
  }

  // Sound only plays into a running context, so nothing queues up
  // while the browser holds it and then fires all at once.
  const live = () => enabled && !!ctx && ctx.state === 'running' && !document.hidden;

  // A context made inside a gesture can start running without ever
  // firing statechange, so the toggle is repainted here as well.
  function unlock() {
    if (!enabled) return Promise.resolve();
    if (!ctx) build();
    if (ctx.state === 'running' || document.hidden || !ctx.resume) {
      paint();
      return Promise.resolve();
    }
    const p = ctx.resume();
    return (p && p.then ? p.catch(() => {}) : Promise.resolve()).then(paint);
  }

  // Hold an automated value where it is right now, so a new move can
  // start from it (Firefox has no cancelAndHoldAtTime).
  function hold(param, t) {
    if (param.cancelAndHoldAtTime) {
      param.cancelAndHoldAtTime(t);
    } else {
      const v = param.value;
      param.cancelScheduledValues(t);
      param.setValueAtTime(v, t);
    }
  }

  /* ------------------------------------------------------------------
     2. VOICES — a tone, a breath of filtered air, and the way out of
        both: an optional stereo position (fixed or swept) and a send
        to the reverb.
  ------------------------------------------------------------------ */
  function outlet(o, t, end) {
    const g = ctx.createGain();
    let tail = g;
    if (o.pan && ctx.createStereoPanner) {
      const p = ctx.createStereoPanner();
      const [a, b] = Array.isArray(o.pan) ? o.pan : [o.pan, o.pan];
      p.pan.setValueAtTime(a, t);
      if (b !== a) p.pan.linearRampToValueAtTime(b, end);
      g.connect(p);
      tail = p;
    }
    tail.connect(master);
    if (o.wet) {
      const send = ctx.createGain();
      send.gain.value = o.wet;
      tail.connect(send);
      send.connect(verb);
    }
    return g;
  }

  function shape(param, t, peak, attack, release) {
    param.setValueAtTime(0.0001, t);
    param.exponentialRampToValueAtTime(peak, t + attack);
    param.exponentialRampToValueAtTime(0.0001, t + attack + release);
  }

  // A pitched voice; f glides to `to` over `glide` seconds.
  function tone(o) {
    const t = ctx.currentTime + 0.005 + (o.at || 0);
    const a = o.attack || 0.003;
    const r = o.release || 0.1;
    const end = t + a + r;
    const osc = ctx.createOscillator();
    osc.type = o.type || 'sine';
    osc.frequency.setValueAtTime(o.f, t);
    if (o.to) osc.frequency.exponentialRampToValueAtTime(o.to, t + (o.glide || a + r));
    if (o.detune) osc.detune.value = o.detune;
    const g = ctx.createGain();
    shape(g.gain, t, o.gain, a, r);
    const out = outlet(o, t, end);
    osc.connect(g);
    g.connect(out);
    osc.start(t);
    osc.stop(end + 0.02);
    osc.onended = () => out.disconnect();
  }

  // Filtered noise; the filter sweeps f → to with the envelope, or
  // f → to → back with its turn at the peak (a pass-by).
  function air(o) {
    const t = ctx.currentTime + 0.005 + (o.at || 0);
    const a = o.attack || 0.002;
    const r = o.release || 0.05;
    const end = t + a + r;
    const src = ctx.createBufferSource();
    src.buffer = noise;
    const f = ctx.createBiquadFilter();
    f.type = o.filter || 'bandpass';
    f.Q.value = o.q || 1;
    f.frequency.setValueAtTime(o.f, t);
    if (o.to) f.frequency.exponentialRampToValueAtTime(o.to, o.back ? t + a : end);
    if (o.back) f.frequency.exponentialRampToValueAtTime(o.back, end);
    const g = ctx.createGain();
    shape(g.gain, t, o.gain, a, r);
    const out = outlet(o, t, end);
    src.connect(f);
    f.connect(g);
    g.connect(out);
    src.start(t, Math.random() * 0.6);
    src.stop(end + 0.02);
    src.onended = () => out.disconnect();
  }

  // The light signature as sound: open fifths of a warm LED, each note
  // a pair of sines a few cents apart so it shimmers.
  const GLINT = [659.25, 987.77, 1318.51];   // E5 · B5 · E6
  function glint(o) {
    GLINT.forEach((f, i) => {
      const at = (o.at || 0) + i * (o.spread || 0);
      [-5, 5].forEach((cents) => tone({
        f, detune: cents, at,
        gain: o.gain * (1 - i * 0.25),
        attack: o.attack, release: o.release,
        pan: (i - 1) * 0.3, wet: o.wet,
      }));
    });
  }

  /* ------------------------------------------------------------------
     3. THE SOUNDS
  ------------------------------------------------------------------ */
  const rnd = (a, b) => a + Math.random() * (b - a);

  const SOUNDS = {
    tick() {
      air({ f: rnd(3800, 4600), q: 7, gain: 0.16, attack: 0.001, release: 0.016 });
      tone({ f: rnd(2100, 2300), gain: 0.018, attack: 0.001, release: 0.025 });
    },
    press() {
      tone({ f: 180, to: 92, glide: 0.06, gain: 0.035, attack: 0.002, release: 0.085 });
      air({ f: 2600, q: 1.4, gain: 0.008, attack: 0.001, release: 0.012 });
    },
    'menu-open'() {
      air({ f: 360, to: 1500, q: 0.9, gain: 0.045, attack: 0.36, release: 0.44, wet: 0.25 });
      for (let i = 0; i < 7; i++) {
        air({ at: 0.62 + i * 0.045, f: rnd(1900, 2500), q: 5, gain: 0.028 - i * 0.002, attack: 0.001, release: 0.018 });
      }
    },
    'menu-close'() {
      air({ at: 0.12, f: 1500, to: 320, q: 0.9, gain: 0.035, attack: 0.26, release: 0.5, wet: 0.25 });
    },
    shutter() {
      air({ f: 280, to: 1200, q: 0.8, gain: 0.028, attack: 0.46, release: 0.5, wet: 0.3 });
      tone({ at: 0.84, f: 70, to: 46, glide: 0.25, gain: 0.045, attack: 0.004, release: 0.34 });
      air({ at: 0.84, filter: 'lowpass', f: 700, q: 0.7, gain: 0.012, attack: 0.002, release: 0.09 });
      glint({ at: 0.46, gain: 0.006, attack: 0.09, release: 1.5, wet: 0.7 });
    },
    section() {
      air({ f: 2700, q: 6, gain: 0.06, attack: 0.001, release: 0.014 });
      air({ at: 0.06, f: 2350, q: 6, gain: 0.042, attack: 0.001, release: 0.014 });
    },
    passby(o) {
      const s = o.side || 1;
      const pan = o.dir < 0 ? [s * 0.95, s * 0.25] : [s * 0.25, s * 0.95];
      air({ f: 380, to: 1700, back: 420, q: 1.2, gain: 0.05, attack: 0.3, release: 0.42, pan, wet: 0.2 });
    },
    ignite() {
      tone({ f: 150, to: 70, glide: 0.1, gain: 0.035, attack: 0.002, release: 0.14 });
      tone({ at: 0.08, f: 987.77, gain: 0.018, attack: 0.006, release: 0.5, wet: 0.5 });
      tone({ at: 0.22, f: 1318.51, gain: 0.015, attack: 0.006, release: 0.9, wet: 0.6 });
    },
    on() {
      glint({ spread: 0.11, gain: 0.013, attack: 0.01, release: 1.1, wet: 0.6 });
    },
    off() {
      tone({ f: 987.77, to: 659.25, glide: 0.18, gain: 0.016, attack: 0.006, release: 0.4, wet: 0.4 });
    },
  };

  // Rapid repeats are dropped, so a sweep across the page never chatters.
  const GAP = { tick: 55, press: 40, section: 140, passby: 300 };
  const lastAt = {};

  function play(name, opts) {
    if (!live() || !SOUNDS[name]) return;
    const now = performance.now();
    if (GAP[name] && now - (lastAt[name] || 0) < GAP[name]) return;
    lastAt[name] = now;
    try { SOUNDS[name](opts || {}); } catch (err) { /* sound must never break the page */ }
  }

  /* ------------------------------------------------------------------
     4. REV — the Engine start button. One voice, kept between hovers so
        a quick in-and-out glides instead of stacking. It speaks while
        the scale moves and falls quiet once it settles.
  ------------------------------------------------------------------ */
  let motor = null;
  let motorRest = 0;

  function rev(level, ms) {
    if (!live()) return;
    const t = ctx.currentTime;
    const span = Math.max(0.15, (ms || 600) / 1000);
    if (!motor) {
      const whine = ctx.createOscillator();
      const body = ctx.createOscillator();
      body.type = 'triangle';
      whine.frequency.value = 260;
      body.frequency.value = 65;
      const bodyGain = ctx.createGain();
      bodyGain.gain.value = 0.55;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 1400;
      const g = ctx.createGain();
      g.gain.value = 0.0001;
      whine.connect(g);
      body.connect(bodyGain);
      bodyGain.connect(lp);
      lp.connect(g);
      g.connect(master);
      whine.start(t);
      body.start(t);
      motor = { whine, body, g };
    }
    const up = level > 0.5;
    hold(motor.whine.frequency, t);
    hold(motor.body.frequency, t);
    hold(motor.g.gain, t);
    motor.whine.frequency.setTargetAtTime(260 + 820 * level, t, span / 3);
    motor.body.frequency.setTargetAtTime(65 + 95 * level, t, span / 3);
    motor.g.gain.setTargetAtTime(up ? 0.011 : 0.005, t, 0.06);
    motor.g.gain.setTargetAtTime(0.0001, t + span * 0.65, span * 0.3 + 0.12);

    clearTimeout(motorRest);
    motorRest = setTimeout(() => {
      if (!motor) return;
      const end = ctx.currentTime + 0.05;
      motor.whine.stop(end);
      motor.body.stop(end);
      motor = null;
    }, span * 1000 + 2500);
  }

  /* ------------------------------------------------------------------
     5. ROAD — while a road is on screen, scrolling is driving. Speed is
        the scroll's own, smoothed, times the road's pace where it has
        one; the voice exists only while there is something to hear.
  ------------------------------------------------------------------ */
  const roads = new Map();   // element → pace function (or null)
  const onRoad = new Set();
  let car = null;
  let raf = 0;
  let level = 0;
  let vel = 0;      // px per second, smoothed
  let still = 0;    // ms since the scroll last moved
  let lastY = 0;
  let lastT = 0;

  const roadIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? onRoad.add(e.target) : onRoad.delete(e.target)));
    drive();
  });

  function road(el, pace) {
    if (!el) return;
    roads.set(el, typeof pace === 'function' ? pace : null);
    roadIO.observe(el);
  }

  function startCar() {
    const src = ctx.createBufferSource();
    src.buffer = noise;
    src.loop = true;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 240;
    lp.Q.value = 0.6;
    const roar = ctx.createGain();
    roar.gain.value = 0;
    src.connect(lp);
    lp.connect(roar);
    roar.connect(master);
    const whine = ctx.createOscillator();
    whine.frequency.value = 150;
    const hum = ctx.createGain();
    hum.gain.value = 0;
    whine.connect(hum);
    hum.connect(master);
    const t = ctx.currentTime;
    src.start(t);
    whine.start(t);
    car = { src, lp, roar, whine, hum };
  }

  // A short fade rather than a cut, so switching off mid-drive can't click.
  function stopCar() {
    if (!car) return;
    const t = ctx.currentTime;
    [car.roar.gain, car.hum.gain].forEach((g) => { hold(g, t); g.setTargetAtTime(0, t, 0.025); });
    car.src.stop(t + 0.12);
    car.whine.stop(t + 0.12);
    car = null;
  }

  // Scroll and this loop tick in separate frames, so some frames see no
  // movement at all: velocity is smoothed over a few of them, and the
  // voice only stops once the page has been still for a moment.
  function frame(now) {
    raf = 0;
    const y = Site.scroll.y;
    const dt = Math.min(100, Math.max(8, now - lastT));
    const dy = Math.abs(y - lastY);
    lastY = y;
    lastT = now;
    vel += ((dy / dt) * 1000 - vel) * (1 - Math.exp(-dt / 90));
    still = dy ? 0 : still + dt;

    let pace = 0;
    onRoad.forEach((el) => {
      const fn = roads.get(el);
      pace = Math.max(pace, fn ? fn() : 1);
    });
    const target = live() ? Math.min(1, vel / 2600) * pace : 0;
    const tau = target > level ? 90 : 380;
    level += (target - level) * (1 - Math.exp(-dt / tau));

    if (level < 0.003 && (still > 400 || !live() || !onRoad.size)) {
      level = 0;
      stopCar();
      return;
    }
    if (!car) startCar();
    const t = ctx.currentTime;
    car.roar.gain.setTargetAtTime(0.06 * Math.pow(level, 1.5), t, 0.06);
    car.lp.frequency.setTargetAtTime(240 + 1100 * level, t, 0.06);
    car.whine.frequency.setTargetAtTime(150 + 420 * level, t, 0.08);
    car.hum.gain.setTargetAtTime(0.006 * level, t, 0.08);
    raf = requestAnimationFrame(frame);
  }

  function drive() {
    if (raf || !live() || !onRoad.size) return;
    lastY = Site.scroll.y;
    lastT = performance.now();
    vel = 0;
    still = 0;
    raf = requestAnimationFrame(frame);
  }
  Site.scroll.on(drive);

  /* ------------------------------------------------------------------
     6. THE SWITCH — remembered; switching on plays the light signature,
        switching off plays one note down and lets the cabin go quiet.
  ------------------------------------------------------------------ */
  let toggle = null;
  let restTimer = 0;

  function paint() {
    if (toggle) toggle.setAttribute('aria-pressed', String(enabled));
    root.classList.toggle('sound-live', live());
  }

  function set(on) {
    on = !!on;
    if (on === enabled) return;
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (err) { /* private mode */ }
    clearTimeout(restTimer);
    if (on) {
      enabled = true;
      unlock().then(() => {
        if (!enabled) return;
        const t = ctx.currentTime;
        hold(master.gain, t);
        master.gain.setTargetAtTime(VOLUME, t, 0.04);
        paint();
        play('on');
      });
    } else {
      if (live()) SOUNDS.off();
      enabled = false;
      stopCar();
      if (ctx) {
        const t = ctx.currentTime;
        hold(master.gain, t);
        master.gain.setTargetAtTime(0, t + 0.3, 0.08);
        restTimer = setTimeout(() => { if (!enabled && ctx.suspend) ctx.suspend().catch(() => {}); }, 1200);
      }
    }
    paint();
  }

  // Beside Menu in the nav. Without this script there is no sound, so
  // there is no switch in the markup either.
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn && menuBtn.parentNode) {
    const end = document.createElement('div');
    end.className = 'nav-end';
    menuBtn.parentNode.insertBefore(end, menuBtn);
    toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'sound-toggle';
    toggle.setAttribute('aria-label', 'Sound');
    toggle.innerHTML = '<span class="sound-toggle-label">Sound</span><span class="sound-toggle-bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>';
    end.appendChild(toggle);
    end.appendChild(menuBtn);
    toggle.addEventListener('click', () => set(!enabled));
  }

  /* ------------------------------------------------------------------
     7. HANDS ON — the first gesture wakes the context; hovering and
        pressing anything pressable sound it. Plain links inside running
        text stay quiet so reading never ticks. Keyboard presses sound
        too (a click with no pointer behind it).
  ------------------------------------------------------------------ */
  const HOVERABLE = '[data-cursor], button, [role="button"], summary';
  const PRESSABLE = 'a[href], button, [role="button"], [data-cursor], summary, label, input[type="checkbox"], input[type="radio"]';
  const OWN = '.sound-toggle, .ignition';   // these have sounds of their own
  let hovered = null;
  let pressedAt = 0;

  const find = (target, sel) => (target && target.closest ? target.closest(sel) : null);

  document.addEventListener('pointerover', (e) => {
    if (e.pointerType !== 'mouse') return;
    const el = find(e.target, HOVERABLE);
    if (el === hovered) return;
    hovered = el;
    if (el && !el.closest(OWN)) play('tick');
  }, { passive: true });

  window.addEventListener('pointerdown', (e) => {
    pressedAt = performance.now();
    const el = e.button === 0 ? find(e.target, PRESSABLE) : null;
    unlock().then(() => { if (el && !el.closest(OWN)) play('press'); });
  }, true);

  // A click with no pointer behind it is the keyboard, unless it follows
  // a press closely: then it's a card handing its click to its link.
  document.addEventListener('click', (e) => {
    if (e.detail !== 0 || performance.now() - pressedAt < 800) return;
    const el = find(e.target, PRESSABLE);
    if (el && !el.closest(OWN)) play('press');
  }, true);

  ['keydown', 'touchend'].forEach((type) => window.addEventListener(type, () => { unlock(); }, { capture: true, passive: true }));

  document.addEventListener('visibilitychange', () => {
    if (!ctx) return;
    if (document.hidden) {
      if (ctx.suspend) ctx.suspend().catch(() => {});
    } else if (enabled) {
      unlock();
    }
  });

  // Back/forward restores a page as it was left, sound and all.
  window.addEventListener('pageshow', (e) => { if (e.persisted) paint(); });

  Object.assign(Site.sound, { play, road, rev, set });
  Object.defineProperty(Site.sound, 'enabled', { get: () => enabled, configurable: true });
  paint();
})();
