/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · case study
   The motion half of the template (CaseStudy.jsx renders the page from
   caseStudies.js). Everything happens behind the closed shutter, then
   it opens and the hero comes up. Motion runs on Anime.js v4 through
   the page's Site facade (site/runtime.js).

   Arrival   cover label → hidden states → fonts + hero images
             → Site.transition.reveal() → hero entrance → 'intro:done'
   Motion    hero lines rise out of their masks; the media opens like a
             shutter from its centre seam; a live cover boots with a
             scan and tilts toward the cursor; the EV cover runs a day
             of smart charging (paused off-screen); copy, cards and
             screens reveal on arrival; impact figures roll on drums.
   Reduced   final states everywhere, one still frame for the EV day.
   ================================================================== */
import { CASE_STUDIES, CASE_SERIES, fullName } from '../../data/caseStudies.js';
import { chargePlan } from './charging.js';

export default function init(Site) {
  const slug = Site.slug;
  const data = CASE_STUDIES[slug];
  if (!data) return;

  const A = Site.anime;
  const { animate, createTimeline, createAnimatable, stagger, utils } = A;
  const ease = Site.motion.ease;
  const reduced = Site.reduced;
  const root = document.documentElement;
  const byId = (id) => document.getElementById(id);

  /* ----------------------------------------------------------------
     0. Shutter label. The projects form one loop through `next`, led
        by the automotive study, so "Case 03 / 04" matches the order of
        the bays on the home page. Single-word titles carry their
        subtitle on the shutter, as the home page's labels do ("HMI —
        Cockpit experience").
  ---------------------------------------------------------------- */
  const series = CASE_SERIES(slug);
  const caseNo = (s) => series.no(s);

  Site.transition.setLabel(fullName(data), caseNo(slug));

  /* ----------------------------------------------------------------
     1. Accent. The project colours are exposed as custom properties,
        so case-study.css decides where they show. (They leave <html>
        with the page.)
  ---------------------------------------------------------------- */
  const gradientColors = data.gradient.match(/#[0-9a-fA-F]{3,6}/g) || ['#c8ff4d', '#1a1a1a'];
  root.style.setProperty('--case-accent', data.accent);
  root.style.setProperty('--case-gradient', data.gradient);
  root.style.setProperty('--case-g1', gradientColors[0]);
  root.style.setProperty('--case-g2', gradientColors[1] || gradientColors[0]);

  const media = byId('caseHeroMedia');
  const heroSection = document.querySelector('.case-hero');
  const heroRuler = document.querySelector('.case-hero-ruler');
  const caseNoEl = byId('caseNo');

  // Which hero this project has: a live cover, a plain cover, a row of
  // phone screens, or the wireframe device.
  const heroKind = data.heroImage
    ? (data.heroImage.hotspots ? 'live' : 'cover')
    : data.heroScreens ? 'screens' : data.heroScreen ? 'device' : null;

  /* ----------------------------------------------------------------
     2. EV-charging cover — the scene is drawn by the JSX from the same
        plan (charging.js); here the day plays out on it.
  ---------------------------------------------------------------- */
  function chargingScene(plan) {
    const { home, winStart, winEnd, leave } = plan;
    const q = (sel) => media.querySelector(sel);
    const head = q('.charge-head');
    const headLabel = q('.charge-head b');
    const pctEl = q('.charge-pct');
    const fill = q('.charge-battery i');
    const stateEl = q('.charge-state');
    const subEl = q('.charge-status .charge-sub');
    const last = {};

    function render(t) {
      const level = plan.battery(t);
      const quarter = Math.floor(t * 4) / 4;
      head.style.left = `${(t / 24) * 100}%`;
      fill.style.width = `${level}%`;
      if (quarter !== last.quarter) { headLabel.textContent = plan.hh(quarter); last.quarter = quarter; }
      if (Math.round(level) !== last.pct) { last.pct = Math.round(level); pctEl.textContent = last.pct; }
      const state = plan.stateAt(t);
      const slot = plan.slotAt(t);
      if (state + slot.price !== last.key) {
        last.key = state + slot.price;
        media.dataset.charge = state;
        [stateEl.textContent, subEl.textContent] = plan.copy[state](slot);
      }
    }

    const scene = q('.charge-scene');
    const segs = media.querySelectorAll('.charge-seg');
    const huds = media.querySelectorAll('.charge-hud');
    const dial = [head, q('.charge-ticks')];
    let day = null;
    let onScreen = true;

    function prepare() {
      utils.set(scene, { opacity: 0 });
      utils.set(segs, { scaleX: 0, transformOrigin: '0% 50%' });
      utils.set(dial, { opacity: 0 });
      utils.set(huds, { opacity: 0, translateY: 20 });
    }

    // Hours pass at different speeds: slower while something happens,
    // quick on the road. The clock starts as the car gets home, and the
    // day loops for as long as the cover is on screen.
    function runDay() {
      const clock = { t: home };
      const tick = () => render(clock.t % 24);
      day = createTimeline({ loop: true, autoplay: false, defaults: { ease: 'linear' } });
      let at = home;
      [[home, winStart, 750], [winStart, winEnd, 800], [winEnd, leave, 1200], [leave, home, 330]]
        .forEach(([from, to, msPerHour]) => {
          const hours = (to - from + 24) % 24;
          if (!hours) return;
          day.add(clock, { t: [at, at + hours], duration: hours * msPerHour, onUpdate: tick });
          at += hours;
        });
      if (onScreen) day.play();
    }

    function play(delay) {
      createTimeline({ delay, defaults: { ease: ease.out } })
        .add(scene, { opacity: [0, 1], duration: 1400, ease: 'out(2)' }, 0)
        .add(segs, { scaleX: [0, 1], duration: 1000, ease: ease.inOut, delay: stagger(90) }, 400)
        .add(huds, { opacity: [0, 1], translateY: [20, 0], duration: 1100, delay: stagger(120) }, 600)
        .add(dial, { opacity: [0, 1], duration: 700, ease: 'out(2)' }, 1000)
        .call(runDay, 1200);
    }

    function setVisible(on) {
      onScreen = on;
      if (!day) return;
      if (on) day.play();
      else day.pause();
    }

    render(home);
    return { render, prepare, play, setVisible, still: plan.still };
  }

  const charge = data.heroScreens && data.heroCharging ? chargingScene(chargePlan(data.heroCharging)) : null;

  /* ----------------------------------------------------------------
     3. The nav readout is a fixed-width window: a name that doesn't
        fit it falls back to the chapter's short name (or, for the
        hero, the case number). Measured in the readout itself, so it
        follows its styling.
  ---------------------------------------------------------------- */
  const shownSections = Array.from(document.querySelectorAll('.case-section'));

  function fitsReadout(text) {
    const box = document.querySelector('.nav-readout-name');
    if (!box || !box.clientWidth) return text.length <= 18;
    const probe = document.createElement('span');
    probe.style.visibility = 'hidden';
    probe.textContent = text;
    box.appendChild(probe);
    const fits = probe.offsetWidth <= box.clientWidth;
    probe.remove();
    return fits;
  }
  function nameSections() {
    if (heroSection) heroSection.dataset.section = fitsReadout(data.title) ? data.title : caseNo(slug);
    shownSections.forEach((section) => {
      const label = section.querySelector('.section-index-label').textContent.trim();
      section.dataset.section = fitsReadout(label) ? label : section.dataset.chapter || label;
    });
  }
  nameSections();

  // Run fn once el is on screen. If it is there as the hero lands, the
  // choreography's delay is kept; scrolled to later, it plays at once.
  function whenInView(el, delay, fn) {
    if (!el) return;
    const t0 = performance.now();
    Site.observe(el, () => fn(Math.max(0, delay - (performance.now() - t0))));
  }

  // Perpetual CSS motion rests while its block is off-screen
  // (.is-offscreen in case-study.css); fn hears about it too.
  function restOffscreen(el, fn) {
    if (!el) return;
    new Site.life.IntersectionObserver(([entry]) => {
      el.classList.toggle('is-offscreen', !entry.isIntersecting);
      if (fn) fn(entry.isIntersecting);
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

  const hero = {
    top: [document.querySelector('.case-back-link'), caseNoEl].filter(Boolean),
    ruler: heroRuler,
    tags: [...byId('caseTags').children],
    copy: [byId('caseSubtitle'), byId('caseTitle'), byId('caseTagline')],
    lines: [],
    meta: byId('caseMetaBar'),
    metaItems: byId('caseMetaBar').children,
    cover: media.querySelector('.case-hero-cover'),
  };

  /* ----------------------------------------------------------------
     4. HERO, BEFORE THE SHUTTER OPENS — hidden states are set here,
        never by CSS alone, so the page still reads without motion.
  ---------------------------------------------------------------- */
  function prepareHero() {
    // The hero's images load first: the shutter waits for them.
    media.querySelectorAll('img').forEach((img) => { img.loading = 'eager'; });
    if (reduced) return;

    utils.set(hero.top, { opacity: 0 });
    utils.set(hero.tags, { opacity: 0 });
    if (hero.ruler) utils.set(hero.ruler, { scaleX: 0 });
    // Each block stays dark until its lines exist, then they wait in their masks.
    hero.lines = hero.copy.map((el) => {
      const lines = Site.splitLines(el);
      utils.set(el, { opacity: 0 });
      lines.ready.then(() => utils.set(el, { opacity: 1 }));
      return lines;
    });
    utils.set(media, { clipPath: 'inset(50% 0% 50% 0%)' });
    utils.set(hero.meta, { opacity: 0 });
    utils.set(hero.metaItems, { opacity: 0, translateY: 14 });

    if (heroKind === 'live') {
      const tilt = hero.cover.querySelector('.case-hero-tilt');
      utils.set(hero.cover, { opacity: 0, translateY: 30 });
      utils.set(tilt.querySelector('img'), { clipPath: 'inset(0% 100% 0% 0%)' });
      utils.set(tilt.querySelector('.case-hero-scan'), { left: '0%', opacity: 1 });
      utils.set(tilt.querySelectorAll('.case-hotspot'), { scale: 0, opacity: 0 });
    } else if (heroKind === 'cover') {
      // The shared scan primitive (style.css): a line of light leaves the
      // cover behind it. Marked ready so the reveals leave it to us.
      hero.cover.setAttribute('data-reveal', 'scan');
      hero.cover.setAttribute('data-reveal-ready', '');
      utils.set(hero.cover, { '--scan': 0, translateY: 24 });
    } else if (heroKind === 'screens') {
      utils.set(media.querySelectorAll('.case-hero-screens .screen-slot'), { opacity: 0, translateY: 40 });
      if (charge) charge.prepare();
    } else if (heroKind === 'device') {
      utils.set(media.querySelectorAll('.wf-fill span'), { scaleX: 0, transformOrigin: '0% 50%' });
    }
  }

  /* ----------------------------------------------------------------
     5. HERO ENTRANCE — the badge line comes up and its ruler draws on,
        then the subtitle, title and tagline rise line by line out of
        their masks and the disciplines follow; the spec sheet comes in
        once it is on screen.
  ---------------------------------------------------------------- */
  function heroEntrance() {
    if (reduced) return;
    const [subtitle, title, tagline] = hero.lines;
    const tl = createTimeline({ defaults: { ease: ease.out } })
      .add(hero.top, { opacity: [0, 1], translateY: [10, 0], duration: 900, delay: stagger(90) }, 0)
      .call(() => subtitle.play({ duration: 1100 }), 80)
      .call(() => title.play({ duration: 1500, stagger: 120 }), 160)
      .call(() => tagline.play({ duration: 1200, stagger: 90 }), 560)
      .add(hero.tags, { opacity: [0, 1], translateY: [10, 0], duration: 900, delay: stagger(70) }, 900);
    if (hero.ruler) tl.add(hero.ruler, { scaleX: [0, 1], duration: 1700, ease: ease.inOut }, 60);

    whenInView(hero.meta, 1000, (delay) => {
      createTimeline({ delay, defaults: { ease: ease.out } })
        .add(hero.meta, { opacity: [0, 1], duration: 700, ease: 'out(2)' }, 0)
        .add(hero.metaItems, { opacity: [0, 1], translateY: [14, 0], duration: 1000, delay: stagger(80) }, 100);
    });
  }

  /* ----------------------------------------------------------------
     6. SIGNATURE HERO SCREEN — the media opens like a shutter from its
        centre seam, then each cover shows its own idea: the IVI screen
        boots with a scan and its wheel sensors ping; a plain cover is
        crossed by studio light; the EV cover runs a day of smart
        charging.
  ---------------------------------------------------------------- */
  function animateHeroScreen() {
    if (reduced) {
      if (charge) charge.render(charge.still);
      return;
    }
    restOffscreen(media, (on) => { if (charge) charge.setVisible(on); });
    if (heroKind === 'live') armTilt();

    whenInView(media, 420, (delay) => {
      animate(media, {
        clipPath: ['inset(50% 0% 50% 0%)', 'inset(0% 0% 0% 0%)'],
        duration: 1400,
        delay,
        ease: ease.inOut,
        onComplete: () => { media.style.clipPath = ''; },
      });
      const at = delay + 380;

      if (heroKind === 'live') {
        const tilt = hero.cover.querySelector('.case-hero-tilt');
        const scan = tilt.querySelector('.case-hero-scan');
        createTimeline({ delay: at })
          .add(hero.cover, { opacity: [0, 1], translateY: [30, 0], duration: 1200, ease: ease.out }, 0)
          .add(tilt.querySelector('img'), { clipPath: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)'], duration: 2000, ease: ease.inOut }, 300)
          .add(scan, { left: ['0%', '100%'], duration: 2000, ease: ease.inOut }, 300)
          .add(scan, { opacity: [1, 0], duration: 400, ease: 'out(2)' }, 2250)
          .add(tilt.querySelectorAll('.case-hotspot'), { scale: [0, 1], opacity: [0, 1], duration: 900, ease: ease.out, delay: stagger(150) }, 1100);
      } else if (heroKind === 'cover') {
        createTimeline({ delay: at, onComplete: () => hero.cover.removeAttribute('data-reveal') })
          .add(hero.cover, { translateY: [24, 0], duration: 1600, ease: ease.out }, 0)
          .add(hero.cover, { '--scan': [0, 1], duration: 1900, ease: ease.inOut }, 0);
      } else if (heroKind === 'screens') {
        animate(media.querySelectorAll('.case-hero-screens .screen-slot'), {
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 1300,
          ease: ease.out,
          delay: stagger(130, { from: 'center', start: at }),
        });
        if (charge) charge.play(Math.max(0, at - 200));
      } else if (heroKind === 'device') {
        animate(media.querySelectorAll('.wf-fill span'), { scaleX: [0, 1], duration: 1300, delay: at, ease: ease.out });
      }
    });
  }

  // The live cover leans toward the cursor, like a screen angled in a dashboard.
  function armTilt() {
    const tilt = media.querySelector('.case-hero-tilt');
    if (!tilt || Site.touch) return;
    utils.set(tilt, { perspective: '1400px', rotateX: 0, rotateY: 0 });
    const lean = createAnimatable(tilt, { rotateX: 900, rotateY: 900, ease: 'out(3)' });
    media.addEventListener('pointermove', (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      const r = media.getBoundingClientRect();
      lean.rotateY(((e.clientX - r.left) / r.width - 0.5) * 9);
      lean.rotateX(-((e.clientY - r.top) / r.height - 0.5) * 6);
    });
    media.addEventListener('pointerleave', () => {
      lean.rotateX(0);
      lean.rotateY(0);
    });
  }

  /* ----------------------------------------------------------------
     7. SCROLL REVEALS — declared with data-reveal and armed by the
        shared reveals (Site.reveals). Display copy rises line by line,
        body copy and blocks lift, flow media is crossed by a line of
        light, grid tiles fill in, and items sharing a row step in left
        to right. Impact figures roll on odometer drums; decimals keep
        their point.
  ---------------------------------------------------------------- */
  const LINE_COPY = '.case-copy-lg, .case-section-title, .case-subtitle, .case-closing, .case-next-eyebrow, .case-chapter-head h3, .case-insight h3';
  // Tiles of a hairline grid (1px gaps over a line-coloured ground) stay
  // put and only their contents lift in, so the ground never shows
  // through as a solid block while they arrive.
  const TILES = '.case-approach-card, .case-testing-card, .case-panel, .case-direction';
  const BLOCKS = `${TILES}, .case-impact-stat, .case-reveal, .screen-grid .screen-slot, .case-flow-text`;

  function armReveals() {
    const main = byId('main');
    // Only the case template's own sections: the contact region is left alone.
    const shown = (el) => !el.closest('[hidden], #contact');
    const all = (sel) => [...main.querySelectorAll(sel)].filter(shown);
    const mark = (el, type, delay) => {
      if (!el || el.hasAttribute('data-reveal')) return;
      el.setAttribute('data-reveal', type);
      if (delay) el.setAttribute('data-reveal-delay', String(delay));
    };

    all('.reveal-text').forEach((el) => mark(el, el.matches(LINE_COPY) && !el.children.length ? 'lines' : 'up'));
    rowDelays(all(BLOCKS), 90).forEach(([el, delay]) => mark(el, el.matches(TILES) ? 'stagger' : 'up', delay));
    all('.case-flow-media').forEach((el) => mark(el, 'scan'));
    mark(byId('caseNextTitle'), 'lines');

    main.querySelectorAll('.case-hero, .case-section, .case-next').forEach((section) => {
      Site.reveals(section);
      Site.rules(section);
    });
  }

  function armCounters() {
    document.querySelectorAll('.case-impact-num').forEach((el) => {
      const decimals = Number(el.dataset.decimals || 0);
      const count = Number(el.dataset.count);
      if (Number.isNaN(count)) return;
      const value = count.toFixed(decimals);
      el.textContent = value;
      if (reduced || el.closest('[hidden]')) return;
      const stat = el.closest('.case-impact-stat');
      const delay = Number((stat && stat.dataset.revealDelay) || 0) + 150;
      utils.set(el, { opacity: 0 });
      Site.observe(el, () => {
        utils.set(el, { opacity: 1 });
        Site.odometer(el, { value, delay, duration: 1800, turns: 1 });
      });
    });
  }

  /* ----------------------------------------------------------------
     8. ZOOM — exported screens are 2x, so any image tagged data-zoom
        opens full width in an overlay with its own scroll. The reticle
        reads "Zoom" over them. Escape, the close button or a click
        outside the image closes it; focus returns to the image.
  ---------------------------------------------------------------- */
  function initZoom() {
    const zoomables = document.querySelectorAll('img[data-zoom]');
    if (!zoomables.length) return;

    const box = document.createElement('div');
    box.className = 'zoom-overlay';
    box.hidden = true;
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Image preview');
    box.setAttribute('data-lenis-prevent', '');
    box.innerHTML = '<button type="button" class="zoom-close" aria-label="Close preview">Close</button><div class="zoom-scroll"><img alt="" /></div>';
    document.body.appendChild(box);
    // The overlay lives on <body>, outside the page: it leaves with the route.
    Site.life.add(() => box.remove());

    const img = box.querySelector('img');
    const scroller = box.querySelector('.zoom-scroll');
    const closeBtn = box.querySelector('.zoom-close');
    let lastFocus = null;
    let hideTimer = 0;

    // Keyboard: every export a reader can reach opens like a button.
    zoomables.forEach((el) => {
      if (el.closest('[aria-hidden="true"]')) return;
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.setAttribute('aria-haspopup', 'dialog');
      el.setAttribute('aria-label', `${el.alt || 'Image'} (open full size)`);
    });

    function open(src, alt) {
      clearTimeout(hideTimer);
      lastFocus = document.activeElement;
      img.src = src;
      img.alt = alt;
      box.hidden = false;
      scroller.scrollTop = 0;
      void box.offsetWidth; // commit the closed state so the fade runs
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
      hideTimer = Site.life.timeout(() => {
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

    Site.life.on(document, 'click', (e) => {
      const el = zoomTarget(e);
      if (el) open(el.currentSrc || el.src, el.alt);
    });
    box.addEventListener('click', (e) => { if (e.target !== img) close(); });
    Site.life.on(document, 'keydown', (e) => {
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
      open(el.currentSrc || el.src, el.alt);
    });
    Site.life.on(document, 'mouseover', (e) => { if (zoomTarget(e)) Site.cursor.set('Zoom'); });
    Site.life.on(document, 'mouseout', (e) => {
      const el = zoomTarget(e);
      if (el && !(e.relatedTarget && el.contains(e.relatedTarget))) Site.cursor.reset();
    });
  }

  /* ----------------------------------------------------------------
     9. BOOT — hidden states and reveals are armed behind the closed
        shutter. It opens once the fonts and hero images are in (or
        after 2.6 s at most), then the hero comes up.
  ---------------------------------------------------------------- */
  function ready() {
    const waits = [...media.querySelectorAll('img')].map((img) => (img.decode ? img.decode().catch(() => {}) : null));
    if (document.fonts && document.fonts.ready) waits.push(document.fonts.ready);
    return Promise.race([Promise.all(waits), new Promise((resolve) => Site.life.timeout(resolve, 2600))]);
  }

  prepareHero();
  armReveals();
  armCounters();
  initZoom();
  Site.nav.refresh();
  if (!reduced) document.querySelectorAll('.case-playground-preview').forEach((el) => restOffscreen(el));

  ready()
    .then(() => {
      if (Site.life.disposed) return null;
      // Fonts are in: measure the readout names for real.
      nameSections();
      Site.nav.refresh();
      return Site.transition.reveal();
    })
    .then(() => {
      if (Site.life.disposed) return;
      heroEntrance();
      animateHeroScreen();
      Site.emit('intro:done');
    });
}
