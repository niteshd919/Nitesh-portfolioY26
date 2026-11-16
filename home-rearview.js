/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · home · rear view
   05 Rear View — "Closer than they appear".

   Forty frames in a wing mirror. Moving on, the frame you leave shrinks
   into the glass the way a passing scene does in a mirror, and the next
   one arrives from behind you; going back plays it the other way. A
   glare sweeps the glass on each change, like headlights from behind,
   and the scene's own light spills out round it (.rv-ambient).

   The frames run as one long day (data-light on each), and the ruler
   at the foot is forty segments, each painted with its frame's own sky
   (data-tone). It is also the scrubber: click, drag or arrow-key it.

   Cruise moves on every few seconds while the section is on screen.
   Like the real thing, touching Back, Next or the ruler is the brake:
   cruise disengages until it is pressed again. It pauses (without
   disengaging) while the pointer rests on the glass or the tab is
   hidden. With reduced motion it starts off and frames simply cross-
   fade.

   Without the shared runtime nothing happens here: the section stays a
   strip of photographs that scrolls sideways (CSS default).
   ================================================================== */
(function () {
  const section = document.getElementById('rearview');
  if (!section) return;
  const Site = window.Site;
  const A = Site && Site.anime;
  if (!A) return;

  const frames = [...section.querySelectorAll('.rv-frame')];
  const N = frames.length;
  if (!N) return;

  const { animate, utils } = A;
  const ease = Site.motion.ease;
  const reduced = Site.reduced;

  const $ = (sel) => section.querySelector(sel);
  const glass = $('.rv-glass');
  const glare = $('.rv-glare');
  const legend = $('.rv-legend');
  const layers = [...section.querySelectorAll('.rv-ambient i')];
  const rule = $('.rv-rule');
  const read = $('.rv-read');
  const nEl = $('.rv-n');
  const lightEl = $('.rv-light');
  const capEl = $('.rv-cap');
  const prevBtn = $('.rv-prev');
  const nextBtn = $('.rv-next');
  const cruiseBtn = $('.rv-cruise');
  const cruiseState = $('.rv-cruise-state');
  const day = $('.rv-day');
  const track = $('.rv-track');
  const ticksEl = $('.rv-ticks');
  const needleNo = $('.rv-needle b');
  const phasesEl = $('.rv-phases');
  const peek = $('.rv-peek');
  const peekImg = peek.querySelector('img');
  const peekK = $('.rv-peek-k');
  const peekV = $('.rv-peek-v');

  const pad = (n) => String(n).padStart(2, '0');
  const wrap = (i) => ((i % N) + N) % N;

  /* ------------------------------------------------------------------
     1. READ THE FRAMES — everything else is built from the markup.
  ------------------------------------------------------------------ */
  const data = frames.map((li) => {
    const img = li.querySelector('img');
    const cap = li.querySelector('figcaption');
    const text = [...cap.childNodes]
      .filter((n) => !(n.nodeType === 1 && n.classList.contains('rv-fno')))
      .map((n) => n.textContent).join('').trim();
    const base = (img.getAttribute('src') || '').replace(/-1024\.webp$/, '');
    return {
      li,
      img,
      light: li.dataset.light || '',
      tone: li.dataset.tone || '#3d3c39',
      cap: text,
      glow: `${base}-glow.webp`,
      thumb: `${base}-480.webp`,
    };
  });

  // Forty segments, and the day line beneath them, from the frames' skies.
  ticksEl.innerHTML = data.map((d) => `<i style="--tone:${d.tone}"></i>`).join('');
  const ticks = [...ticksEl.children];
  track.style.setProperty('--day', `linear-gradient(90deg, ${data
    .map((d, i) => `${d.tone} ${(((i + 0.5) / N) * 100).toFixed(2)}%`).join(', ')})`);

  // Light phases: runs of frames that share data-light.
  const phases = [];
  data.forEach((d, i) => {
    const last = phases[phases.length - 1];
    if (last && last.name === d.light) last.b = i + 1;
    else phases.push({ name: d.light, a: i, b: i + 1 });
    d.phase = phases.length - 1;
  });
  phasesEl.innerHTML = phases
    .map((p, k) => `<li style="--a:${p.a};--b:${p.b}"${k === phases.length - 1 ? ' class="is-end"' : ''}><span>${p.name}</span></li>`)
    .join('');
  const phaseEls = [...phasesEl.children];

  // A name wider than its span is only shown while that light is on,
  // and then its neighbours step aside. Re-measured on resize.
  function fitPhases() {
    phaseEls.forEach((li) => {
      const span = li.firstElementChild;
      li.classList.toggle('is-tight', span.offsetWidth > li.offsetWidth - 14);
    });
    markPhase();
  }
  function markPhase() {
    const on = data[index] ? data[index].phase : 0;
    const tight = phaseEls[on] && phaseEls[on].classList.contains('is-tight');
    phaseEls.forEach((li, k) => {
      li.classList.toggle('is-on', k === on);
      li.classList.toggle('is-aside', tight && Math.abs(k - on) === 1);
    });
  }

  /* ------------------------------------------------------------------
     2. STATE — index is the frame being asked for; shown is the frame
        on the glass (they differ while an image is still loading).
  ------------------------------------------------------------------ */
  let index = 0;
  let shown = 0;
  let token = 0;
  let swapTimer = 0;
  let amb = 0;

  section.classList.add('is-live');
  fitPhases();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitPhases);
  let fitTimer = 0;
  window.addEventListener('resize', () => { clearTimeout(fitTimer); fitTimer = setTimeout(fitPhases, 150); });
  utils.set(frames, { opacity: 0 });
  frames.forEach((f, i) => f.setAttribute('aria-hidden', i === 0 ? 'false' : 'true'));
  frames[0].classList.add('is-current');
  utils.set(frames[0], { opacity: 1 });
  setNear(0);
  setAmbient(0, true);
  updateReadout(0, true);

  // Only the frame on the glass and its neighbours are rendered, so
  // only they lazy-load (as the section nears the screen); the other
  // thirty-seven stay display: none and cost nothing.
  function setNear(i) {
    const near = new Set([wrap(i - 1), i, wrap(i + 1)]);
    frames.forEach((f, k) => f.classList.toggle('is-near', near.has(k)));
    // The glows are tiny; warm the neighbours' so crossfades never pop.
    [wrap(i - 1), wrap(i + 1)].forEach((k) => { const g = new Image(); g.src = data[k].glow; });
  }

  function ready(img) {
    if (img.complete && img.naturalWidth) {
      return img.decode ? img.decode().catch(() => {}) : Promise.resolve();
    }
    return new Promise((resolve) => {
      const done = () => { clearTimeout(t); resolve(); };
      const t = setTimeout(done, 1600);
      img.addEventListener('load', done, { once: true });
      img.addEventListener('error', done, { once: true });
    });
  }

  /* ------------------------------------------------------------------
     3. GO — readouts answer at once; the glass changes when the image
        is ready. A press that follows another within a beat (a held
        arrow key, a run of clicks) or a drag along the day (defer)
        waits for the pause, so frames passed on the way never load.
  ------------------------------------------------------------------ */
  let lastGo = 0;
  function go(to, o = {}) {
    to = wrap(to);
    if (o.manual) { touched = true; brake(); }
    elapsed = 0;
    if (to === index && to === shown) return;
    const dir = o.dir != null ? o.dir : (to >= index ? 1 : -1);
    const now = performance.now();
    const burst = now - lastGo < 260;
    lastGo = now;
    index = to;
    updateReadout(to);
    clearTimeout(swapTimer);
    const run = () => {
      const t = ++token;
      frames[to].classList.add('is-near');
      ready(data[to].img).then(() => {
        if (t !== token || to === shown) return;
        swap(to, dir, o.quick);
      });
    };
    if (o.defer || burst) swapTimer = setTimeout(run, 170);
    else run();
  }

  function swap(to, dir, quick) {
    const outEl = frames[shown];
    const inEl = frames[to];
    utils.remove(frames);
    utils.remove(glare);
    frames.forEach((f, k) => {
      if (k === shown || k === to) return;
      f.classList.remove('is-current', 'is-leaving');
      utils.set(f, { opacity: 0, scale: 1 });
    });
    outEl.classList.remove('is-current');
    outEl.classList.add('is-leaving');
    outEl.setAttribute('aria-hidden', 'true');
    inEl.classList.remove('is-leaving');
    inEl.classList.add('is-current');
    inEl.setAttribute('aria-hidden', 'false');
    shown = to;
    setNear(to);
    setAmbient(to);

    const settle = () => {
      outEl.classList.remove('is-leaving');
      utils.set(outEl, { scale: 1 });
    };

    if (reduced || quick) {
      utils.set(inEl, { scale: 1 });
      animate(outEl, { opacity: 0, duration: reduced ? 300 : 240, ease: 'out(2)', onComplete: settle });
      animate(inEl, { opacity: [0, 1], duration: reduced ? 300 : 240, ease: 'out(2)' });
      return;
    }

    // Forward: what you passed falls away into the glass and the next
    // scene arrives from behind you. Back: the reverse.
    animate(outEl, {
      opacity: 0,
      scale: dir > 0 ? 0.82 : 1.14,
      duration: 950,
      ease: 'in(2)',
      onComplete: settle,
    });
    animate(inEl, {
      opacity: [0, 1],
      scale: [dir > 0 ? 1.16 : 0.84, 1],
      duration: 1500,
      delay: 90,
      ease: ease.out,
    });
    utils.set(glare, { opacity: 0, translateX: dir > 0 ? '-38%' : '38%' });
    animate(glare, {
      translateX: dir > 0 ? '38%' : '-38%',
      duration: 1300,
      ease: ease.inOut,
    });
    animate(glare, {
      opacity: [{ to: 1, duration: 420, ease: 'out(2)' }, { to: 0, duration: 880, ease: 'in(2)' }],
    });
  }

  // Two layers of the scene's light; the new one fades over the old.
  function setAmbient(i, instant) {
    const next = layers[1 - amb];
    const cur = layers[amb];
    amb = 1 - amb;
    next.style.backgroundImage = `url("${data[i].glow}")`;
    utils.remove([next, cur]);
    if (instant || reduced) {
      utils.set(next, { opacity: 1 });
      utils.set(cur, { opacity: 0 });
      return;
    }
    animate(next, { opacity: 1, duration: 1500, ease: 'inOut(2)' });
    animate(cur, { opacity: 0, duration: 1500, ease: 'inOut(2)' });
  }

  /* ------------------------------------------------------------------
     4. READOUTS — frame drum, light, what's in view, the ruler.
  ------------------------------------------------------------------ */
  function roll(el, text, instant) {
    const old = [...el.children];
    if (old.length && old[old.length - 1].textContent === text) return;
    const s = document.createElement('span');
    s.textContent = text;
    el.appendChild(s);
    if (instant || reduced || !old.length) { old.forEach((o) => o.remove()); return; }
    utils.remove(old);
    animate(old, {
      translateY: ['0%', '-105%'],
      opacity: [1, 0],
      duration: 600,
      ease: ease.inOut,
      onComplete: () => old.forEach((o) => o.remove()),
    });
    animate(s, { translateY: ['105%', '0%'], opacity: [0, 1], duration: 800, delay: 80, ease: ease.inOut });
  }

  function updateReadout(i, instant) {
    const d = data[i];
    Site.odometer(nEl, { value: pad(i + 1), turns: 0, duration: 800, stagger: 40, immediate: instant });
    roll(lightEl, d.light, instant);
    roll(capEl, d.cap, instant);
    ticks.forEach((t, k) => t.classList.toggle('is-on', k === i));
    markPhase();
    track.style.setProperty('--i', i);
    needleNo.textContent = pad(i + 1);
    track.setAttribute('aria-valuenow', String(i + 1));
    track.setAttribute('aria-valuetext', `Frame ${i + 1} of ${N}, ${d.light}: ${d.cap}`);
    // The section's rule reports how far through the day you are.
    const p = (i + 1) / N;
    if (instant || reduced) utils.set(rule, { '--p': p });
    else animate(rule, { '--p': p, duration: 900, ease: ease.inOut });
  }

  /* ------------------------------------------------------------------
     5. CRUISE — a timer that only runs while it's worth watching.
  ------------------------------------------------------------------ */
  const CRUISE_MS = 6000;
  let engaged = false;
  let everEngaged = false;
  let touched = false;   // hands on the controls: never auto-engage after
  let inView = false;
  let resting = false;
  let scrubbing = false;
  let elapsed = 0;
  let last = 0;
  let raf = 0;

  const running = () => engaged && inView && !resting && !scrubbing && !document.hidden;
  const gauge = (v) => cruiseBtn.style.setProperty('--cruise', v.toFixed(4));

  function tick(t) {
    raf = 0;
    if (!running()) { last = 0; return; }
    if (last) elapsed += Math.min(100, t - last);
    last = t;
    if (elapsed >= CRUISE_MS) go(index + 1, { dir: 1 });
    gauge(Math.min(1, elapsed / CRUISE_MS));
    raf = requestAnimationFrame(tick);
  }
  function loop() {
    if (!raf && running()) { last = 0; raf = requestAnimationFrame(tick); }
  }
  function setEngaged(on) {
    engaged = on;
    if (on) everEngaged = true;
    cruiseBtn.setAttribute('aria-pressed', String(on));
    cruiseState.textContent = on ? 'On' : 'Off';
    // While cruising, don't narrate every frame to a screen reader.
    read.setAttribute('aria-live', on ? 'off' : 'polite');
    elapsed = 0;
    gauge(0);
    loop();
  }
  function brake() { if (engaged) setEngaged(false); }

  cruiseBtn.addEventListener('click', () => setEngaged(!engaged));
  document.addEventListener('visibilitychange', loop);

  /* ------------------------------------------------------------------
     6. HANDS ON — buttons, keys, the glass, the day.
  ------------------------------------------------------------------ */
  prevBtn.addEventListener('click', () => go(index - 1, { dir: -1, manual: true }));
  nextBtn.addEventListener('click', () => go(index + 1, { dir: 1, manual: true }));

  // ← → while the section has the screen (the ruler handles its own keys).
  document.addEventListener('keydown', (e) => {
    if (!inView || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    if (Site.menu && Site.menu.isOpen) return;
    const t = e.target;
    if (t === track || (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)))) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1, { dir: 1, manual: true }); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1, { dir: -1, manual: true }); }
  });

  // The glass: tap or click (left third goes back), or swipe.
  let downX = 0;
  let downY = 0;
  let down = false;
  let swiped = false;
  glass.addEventListener('pointerdown', (e) => {
    down = true;
    swiped = false;
    downX = e.clientX;
    downY = e.clientY;
  });
  glass.addEventListener('pointerup', (e) => {
    if (!down) return;
    down = false;
    const dx = e.clientX - downX;
    const dy = e.clientY - downY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      swiped = true;
      go(index + (dx < 0 ? 1 : -1), { dir: dx < 0 ? 1 : -1, manual: true });
    }
  });
  glass.addEventListener('pointercancel', () => { down = false; });
  glass.addEventListener('click', (e) => {
    if (swiped) { swiped = false; return; }
    const r = glass.getBoundingClientRect();
    const back = e.clientX - r.left < r.width * 0.32;
    go(index + (back ? -1 : 1), { dir: back ? -1 : 1, manual: true });
  });
  // Resting the pointer on the glass holds cruise where it is.
  glass.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { resting = true; } });
  glass.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { resting = false; loop(); } });

  // The day: hover to look ahead, click or drag to go there.
  let peekAt = -1;
  const indexAt = (x) => {
    const r = track.getBoundingClientRect();
    return Math.max(0, Math.min(N - 1, Math.floor(((x - r.left) / r.width) * N)));
  };
  function showPeek(k) {
    const d = data[k];
    if (peekAt !== k) {
      if (peekAt >= 0) ticks[peekAt].classList.remove('is-peek');
      ticks[k].classList.add('is-peek');
      peekAt = k;
      peekImg.src = d.thumb;
      peekK.textContent = `Frame ${pad(k + 1)} · ${d.light}`;
      peekV.textContent = d.cap;
    }
    const r = track.getBoundingClientRect();
    const dr = day.getBoundingClientRect();
    const half = peek.offsetWidth / 2;
    const x = r.left - dr.left + ((k + 0.5) / N) * r.width;
    peek.style.setProperty('--px', `${Math.max(half, Math.min(dr.width - half, x))}px`);
    peek.classList.add('is-on');
  }
  function hidePeek() {
    peek.classList.remove('is-on');
    if (peekAt >= 0) ticks[peekAt].classList.remove('is-peek');
    peekAt = -1;
  }

  track.addEventListener('pointerdown', (e) => {
    scrubbing = true;
    try { track.setPointerCapture(e.pointerId); } catch (err) { /* older engines */ }
    const k = indexAt(e.clientX);
    showPeek(k);
    go(k, { manual: true, defer: true });
  });
  track.addEventListener('pointermove', (e) => {
    const k = indexAt(e.clientX);
    if (scrubbing) {
      showPeek(k);
      if (k !== index) go(k, { manual: true, defer: true, quick: true });
    } else if (e.pointerType === 'mouse') {
      showPeek(k);
    }
  });
  const endScrub = (e) => {
    if (!scrubbing) return;
    scrubbing = false;
    if (!e || e.pointerType !== 'mouse') hidePeek();
    loop();
  };
  track.addEventListener('pointerup', endScrub);
  track.addEventListener('pointercancel', endScrub);
  track.addEventListener('pointerleave', () => { if (!scrubbing) hidePeek(); });
  track.addEventListener('keydown', (e) => {
    const step = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 5, PageDown: -5 }[e.key];
    let k = null;
    if (step) k = Math.max(0, Math.min(N - 1, index + step));
    else if (e.key === 'Home') k = 0;
    else if (e.key === 'End') k = N - 1;
    if (k === null) return;
    e.preventDefault();
    go(k, { manual: true });
  });

  /* ------------------------------------------------------------------
     7. ARRIVAL — the glass unfolds like a power-folding mirror, the day
        lights segment by segment, then cruise engages (once).
  ------------------------------------------------------------------ */
  const ambient = $('.rv-ambient');
  const ambientTo = parseFloat(getComputedStyle(ambient).opacity) || 0.6;
  if (!reduced) {
    utils.set(glass, { rotateY: -64, opacity: 0 });
    utils.set(legend, { opacity: 0 });
    utils.set(ticks, { scaleY: 0 });
    utils.set(ambient, { opacity: 0 });
  }
  let arrived = reduced;
  Site.observe(glass, () => {
    if (arrived) return;
    arrived = true;
    animate(glass, { rotateY: 0, duration: 1700, ease: ease.inOut });
    animate(glass, { opacity: 1, duration: 600, ease: 'out(2)' });
    animate(legend, { opacity: 1, duration: 900, delay: 1350, ease: 'out(2)' });
    animate(ticks, { scaleY: [0, 1], duration: 700, delay: A.stagger(16, { start: 500 }), ease: ease.out });
    animate(ambient, { opacity: ambientTo, duration: 2200, delay: 700, ease: 'inOut(2)', onComplete: () => { ambient.style.opacity = ''; } });
  });

  /* ------------------------------------------------------------------
     8. ON SCREEN — cruise only runs while the section has the screen,
        and engages by itself the first time it does.
  ------------------------------------------------------------------ */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.55;
      if (inView && !everEngaged && !reduced) {
        // Let the glass finish unfolding before the first change.
        everEngaged = true;
        setTimeout(() => { if (!engaged && !touched && inView) setEngaged(true); }, 1200);
      }
      if (!inView) hidePeek();
      loop();
    });
  }, { threshold: [0, 0.55, 0.8] });
  io.observe(section);
})();
