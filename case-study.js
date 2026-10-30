/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · case study
   One template for every project: reads ?p=<slug> from
   case-study-data.js and renders the page behind the closed shutter,
   then opens it and brings the hero up. Motion runs on Anime.js v4
   through the shared runtime (window.Site — core.js, transition.js).

   The core sections (overview → impact) render for every project.
   Framing, research, directions, decision, states, system and
   what's-next are opt-in: they stay hidden unless the data has them,
   and section numbers, rule readouts and background rhythm are worked
   out after render, so any combination still reads in order.

   Arrival   cover label → render → hidden states → fonts + hero images
             → Site.transition.reveal() → hero entrance → 'intro:done'
   Motion    hero lines rise out of their masks; the media opens like a
             shutter from its centre seam; a live cover boots with a
             scan and tilts toward the cursor; the EV cover runs a day
             of smart charging (paused off-screen); copy, cards and
             screens reveal on arrival; impact figures roll on drums.
   Reduced   final states everywhere, one still frame for the EV day.
   ================================================================== */

(function () {
  const params = new URLSearchParams(window.location.search);
  const store = window.CASE_STUDIES || {};
  const slug = store[params.get('p')] ? params.get('p') : 'suspension';
  const data = store[slug];

  if (!data) {
    window.location.href = 'index.html';
    return;
  }

  const Site = window.Site;
  const A = Site && Site.anime;
  const { animate, createTimeline, createAnimatable, stagger, utils } = A || {};
  const ease = A ? Site.motion.ease : {};
  const reduced = !A || Site.reduced;
  const root = document.documentElement;
  const pad = (n) => String(n).padStart(2, '0');
  const byId = (id) => document.getElementById(id);

  /* ----------------------------------------------------------------
     0. Case number + shutter label. The projects form one loop
        through `next`, led by the automotive study, so "Case 03 / 04"
        matches the order of the bays on the home page. Single-word
        titles carry their subtitle on the shutter, as the home page's
        labels do ("HMI — Cockpit experience").
  ---------------------------------------------------------------- */
  const sequence = [];
  for (let s = store.suspension ? 'suspension' : slug; store[s] && !sequence.includes(s); s = store[s].next) {
    sequence.push(s);
  }
  Object.keys(store).forEach((s) => { if (!sequence.includes(s)) sequence.push(s); });
  const caseNo = (s) => `Case ${pad(sequence.indexOf(s) + 1)} / ${pad(sequence.length)}`;
  const fullName = (d) => (/\s/.test(d.title.trim()) ? d.title : `${d.title} — ${d.subtitle}`);

  if (Site && Site.transition) Site.transition.setLabel(fullName(data), caseNo(slug));

  /* ----------------------------------------------------------------
     1. Accent + meta. The project colours are exposed as custom
        properties, so case-study.css decides where they show.
  ---------------------------------------------------------------- */
  const gradientColors = data.gradient.match(/#[0-9a-fA-F]{3,6}/g) || ['#c8ff4d', '#1a1a1a'];
  root.style.setProperty('--case-accent', data.accent);
  root.style.setProperty('--case-gradient', data.gradient);
  root.style.setProperty('--case-g1', gradientColors[0]);
  root.style.setProperty('--case-g2', gradientColors[1] || gradientColors[0]);

  /* Screen slots are phone-proportioned by default. Desktop products
     opt into wider frames and a 2-up grid with `wideScreens: true`. */
  if (data.wideScreens) document.body.classList.add('case-wide-screens');

  document.title = `${data.title} — ${data.subtitle} — Nitesh Dixit`;
  const descEl = byId('pageDescription');
  if (descEl) descEl.setAttribute('content', `${data.title} — ${data.tagline}`);

  /* ----------------------------------------------------------------
     2. Hero
  ---------------------------------------------------------------- */
  const media = byId('caseHeroMedia');
  const heroSection = document.querySelector('.case-hero');

  byId('caseSubtitle').textContent = data.subtitle;
  byId('caseTitle').textContent = data.title;
  byId('caseTagline').textContent = data.tagline;

  const tagsWrap = byId('caseTags');
  tagsWrap.innerHTML = data.tags.map((t) => `<span class="work-tag">${t}</span>`).join('');

  // The badge line: case number and model year, as on the showroom bay,
  // and the series ruler with this study's stretch in redline.
  const caseIndex = sequence.indexOf(slug);
  const caseNoEl = byId('caseNo');
  if (caseNoEl) caseNoEl.innerHTML = `<b>${caseNo(slug)}</b><i aria-hidden="true"></i><span>Model year ${data.year}</span>`;
  const heroRuler = document.querySelector('.case-hero-ruler');
  if (heroRuler) {
    heroRuler.style.setProperty('--case-i', caseIndex);
    heroRuler.style.setProperty('--case-n', sequence.length);
  }

  // The spec sheet: .spec rows (style.css), each opened by a tick.
  const metaFields = [
    ['Role', data.role],
    ['Timeline', data.timeline],
    ['Platform', data.platform],
    ['Scope', data.scope],
    ['Team', data.team],
    ['Tools', data.tools],
  ];
  byId('caseMetaBar').innerHTML = metaFields
    .filter(([, value]) => value)
    .map(([label, value]) => `<div class="case-meta-item spec-row"><dt>${label}</dt><dd>${value}</dd></div>`)
    .join('');

  // Figure caption up the margin of the display bay.
  const heroCap = media.querySelector('.case-hero-cap');
  if (heroCap) heroCap.textContent = `Fig. ${pad(caseIndex + 1)}${data.platform ? ` — ${data.platform}` : ''}`;

  /* ---- device-frame hero screen — an abstracted, wireframe view of
     the product itself, not a stock image, so the case study shows
     rather than just describes what was built. ---- */
  function deviceChromeHTML(type) {
    if (type === 'phone') return `<div class="device-chrome"><span class="device-notch"></span></div>`;
    return `<div class="device-chrome"><span class="device-dot"></span><span class="device-dot"></span><span class="device-dot"></span><span class="device-url"></span></div>`;
  }

  // Which hero this project has: a live cover, a plain cover, a row of
  // phone screens, or the wireframe device.
  const heroKind = data.heroImage
    ? (data.heroImage.hotspots ? 'live' : 'cover')
    : data.heroScreens ? 'screens' : data.heroScreen ? 'device' : null;

  const heroDevice = byId('caseHeroDevice');
  if (data.heroImage) {
    // A single exported cover, shown at its real proportions.
    const wrap = document.querySelector('.case-hero-device-wrap');
    wrap.classList.add('is-cover');
    const hero = data.heroImage;
    const img = `<img src="${hero.image}" alt="${hero.alt || data.title}" data-zoom />`;
    if (hero.hotspots) {
      // A "live" cover: the screen boots with a scan sweep, the sensors
      // ping on the wheels, and the whole display tilts with the cursor.
      const spots = hero.hotspots
        .map((s) => `<span class="case-hotspot" style="left:${s.x}%;top:${s.y}%;" tabindex="0" role="img" aria-label="${s.label}"><i></i><b>${s.label}</b></span>`)
        .join('');
      wrap.innerHTML = `
        <figure class="case-hero-cover is-live">
          <div class="case-hero-tilt">
            ${img}${spots}
            <span class="case-hero-scanlines" aria-hidden="true"></span>
            <span class="case-hero-scan" aria-hidden="true"></span>
          </div>
        </figure>`;
    } else {
      wrap.innerHTML = `<figure class="case-hero-cover">${img}</figure>`;
    }
  } else if (data.heroScreens) {
    // A row of phone screens (real exports or placeholders) instead of
    // one abstracted device — the middle one sits slightly larger.
    const wrap = document.querySelector('.case-hero-device-wrap');
    const center = Math.floor(data.heroScreens.length / 2);
    wrap.classList.add('is-row');
    wrap.innerHTML = `<div class="case-hero-screens">${data.heroScreens
      .map((screen, i) => screenSlotHTML(screen, { caption: false, eager: true, className: i === center ? 'is-center' : '' }))
      .join('')}</div>`;
  } else if (heroDevice && data.heroScreen) {
    heroDevice.className = `device-frame ${data.heroScreen.device === 'phone' ? 'is-phone' : 'is-browser'}`;
    heroDevice.innerHTML = deviceChromeHTML(data.heroScreen.device) + `<div class="device-screen">${data.heroScreen.html}</div>`;
  }

  /* ---- screen + board slots — show the exported image when the data
     has one, otherwise a hatched placeholder labelled with the screen
     code, so the layout is final before the visuals are. ---- */
  function screenSlotHTML(screen, opts = {}) {
    const media = screen.image
      ? `<img src="${screen.image}" alt="${screen.alt || screen.title}" loading="${opts.eager ? 'eager' : 'lazy'}" data-zoom />`
      : `<div class="slot-empty">
           <span class="slot-code">${screen.code}</span>
           ${opts.caption === false ? `<span class="slot-name">${screen.title}</span>` : ''}
           <span class="slot-hint">Screen placeholder</span>
         </div>`;
    const caption = opts.caption === false ? '' : `
      <figcaption>
        <span class="screen-slot-code">${screen.code}</span>
        <h4>${screen.title}</h4>
        ${screen.desc ? `<p>${screen.desc}</p>` : ''}
      </figcaption>`;
    const classes = ['screen-slot', opts.className, screen.full && 'is-full'].filter(Boolean).join(' ');
    const frameStyle = screen.ratio ? ` style="aspect-ratio:${screen.ratio};"` : '';
    const hidden = opts.hidden ? ' aria-hidden="true"' : '';
    return `<figure class="${classes}"${hidden}><div class="screen-slot-frame${screen.image ? '' : ' is-empty'}"${frameStyle}>${media}</div>${caption}</figure>`;
  }

  function boardSlotHTML(board) {
    if (!board) return '';
    const media = board.image
      ? `<img src="${board.image}" alt="${board.alt || board.label}" loading="lazy" data-zoom />`
      : `<div class="slot-empty"><span class="slot-name">${board.label}</span><span class="slot-hint">Board placeholder</span></div>`;
    return `<div class="board-slot${board.image ? '' : ' is-empty'}" style="aspect-ratio:${board.ratio || '16 / 10'};">${media}</div>`;
  }

  /* ---- EV-charging cover — a day of smart charging plays out around
     the hero screens. A playhead runs the clock across the tariff; the
     car waits through the peak, charges only in the cheap window and
     drives off in the morning, and the status card, battery, energy
     streaks and the glow on the centre screen all follow along. ---- */
  function chargingScene(cfg) {
    const slots = cfg.slots;
    const cheapest = Math.min(...slots.map((s) => s.price));
    const priciest = Math.max(...slots.map((s) => s.price));
    const isCheap = (s) => s.price === cheapest;
    const slotAt = (t) => slots.find((s) => t >= s.from && t < s.to) || slots[slots.length - 1];
    const [leave, home] = cfg.away;
    const isAway = (t) => t >= leave && t < home;
    const hh = (t) => {
      const m = Math.round((((t % 24) + 24) % 24) * 60);
      return `${pad(Math.floor(m / 60) % 24)}:${pad(m % 60)}`;
    };

    // The cheap window, joined across midnight (e.g. 22:00 → 06:00).
    const n = slots.length;
    const cheapIdx = slots.map((s, i) => (isCheap(s) ? i : -1)).filter((i) => i >= 0);
    const winStart = slots[cheapIdx.find((i) => !isCheap(slots[(i - 1 + n) % n]))].from;
    const winEnd = slots[cheapIdx.find((i) => !isCheap(slots[(i + 1) % n]))].to;

    // Battery over the day in 15-minute steps: home at `low`, full by the
    // end of the cheap window, back down to `low` after the drive.
    const steps = 96;
    let chargeSteps = 0;
    let awaySteps = 0;
    for (let i = 0; i < steps; i++) {
      const t = i / 4;
      if (isAway(t)) awaySteps++;
      else if (isCheap(slotAt(t))) chargeSteps++;
    }
    const levels = [];
    let b = cfg.low;
    for (let k = 0; k < steps; k++) {
      const i = (home * 4 + k) % steps;
      levels[i] = b;
      const t = i / 4;
      if (isAway(t)) b -= (100 - cfg.low) / awaySteps;
      else if (isCheap(slotAt(t))) b = Math.min(100, b + (100 - cfg.low) / chargeSteps);
    }
    const battery = (t) => {
      const i = Math.floor(t * 4) % steps;
      return levels[i] + (levels[(i + 1) % steps] - levels[i]) * (t * 4 - Math.floor(t * 4));
    };
    const stateAt = (t) => {
      if (isAway(t)) return 'away';
      if (battery(t) >= 99.5) return 'full';
      return isCheap(slotAt(t)) ? 'charging' : 'waiting';
    };
    const copy = {
      waiting: (s) => ['Waiting', `${s.price} ct/kWh now · charges from ${hh(winStart)}`],
      charging: (s) => ['Charging', `${s.price} ct/kWh · cheapest rate`],
      full: () => ['Charged', `Ready by ${hh(leave)}`],
      away: () => ['Unplugged', 'Out on the road'],
    };

    const bolt = '<svg viewBox="0 0 24 24" width="12" height="12"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor" /></svg>';
    const lanes = [[22, 2.1, 0.2], [36, 1.7, 1.1], [50, 2.4, 0.6], [64, 1.9, 1.5], [78, 2.2, 0.9]]
      .map(([top, dur, delay], i) => ['is-left', 'is-right']
        .map((side, j) => `<span class="charge-lane ${side}" style="top:${top + j * 6}%;--d:${dur + j * 0.3}s;--delay:-${delay + i * 0.37 + j * 0.8}s;"><i></i></span>`)
        .join(''))
      .join('');
    const tone = (s) => (isCheap(s) ? 'is-cheap' : s.price === priciest ? 'is-peak' : 'is-mid');

    media.classList.add('is-charging');
    media.insertAdjacentHTML('afterbegin', `
      <div class="charge-scene" aria-hidden="true">
        <span class="charge-glow"></span>
        <div class="charge-lanes">${lanes}</div>
      </div>`);
    media.insertAdjacentHTML('beforeend', `
      <div class="charge-hud charge-status" aria-hidden="true">
        <span class="charge-pill">${bolt}<span class="charge-state"></span></span>
        <span class="charge-level"><span class="charge-pct"></span><small>%</small></span>
        <span class="charge-battery"><i></i></span>
        <span class="charge-sub"></span>
      </div>
      <div class="charge-hud charge-plan" aria-hidden="true">
        <span class="charge-eyebrow">Smart schedule</span>
        <strong>${hh(winStart)} <span>&rarr;</span> ${hh(winEnd)}</strong>
        <span class="charge-sub">${cheapest} ct/kWh · ready by ${hh(leave)}</span>
      </div>
      <div class="charge-timeline" aria-hidden="true">
        <div class="charge-bar">
          ${slots.map((s) => `<span class="charge-seg ${tone(s)}" style="flex:${s.to - s.from};"><em>${s.price} ct</em></span>`).join('')}
          <span class="charge-head"><b></b></span>
        </div>
        <div class="charge-ticks">${[0, 6, 12, 18, 24].map((h) => `<span style="left:${(h / 24) * 100}%;">${pad(h)}</span>`).join('')}</div>
      </div>`);

    const q = (sel) => media.querySelector(sel);
    const head = q('.charge-head');
    const headLabel = q('.charge-head b');
    const pctEl = q('.charge-pct');
    const fill = q('.charge-battery i');
    const stateEl = q('.charge-state');
    const subEl = q('.charge-status .charge-sub');
    const last = {};

    function render(t) {
      const level = battery(t);
      const quarter = Math.floor(t * 4) / 4;
      head.style.left = `${(t / 24) * 100}%`;
      fill.style.width = `${level}%`;
      if (quarter !== last.quarter) { headLabel.textContent = hh(quarter); last.quarter = quarter; }
      if (Math.round(level) !== last.pct) { last.pct = Math.round(level); pctEl.textContent = last.pct; }
      const state = stateAt(t);
      const slot = slotAt(t);
      if (state + slot.price !== last.key) {
        last.key = state + slot.price;
        media.dataset.charge = state;
        [stateEl.textContent, subEl.textContent] = copy[state](slot);
      }
    }

    // ---- motion (only called when the runtime is there) ----
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
    // Without motion, one still frame mid-charge tells the same story.
    return { render, prepare, play, setVisible, still: winStart + 1.5 };
  }

  const charge = data.heroScreens && data.heroCharging ? chargingScene(data.heroCharging) : null;

  /* ----------------------------------------------------------------
     3. Overview / Problem
  ---------------------------------------------------------------- */
  byId('caseOverview').textContent = data.overview;
  // Longer overviews: the first paragraph leads, the rest follow in body size.
  if (data.overviewMore) {
    byId('caseOverview').insertAdjacentHTML('afterend', `
      <div class="case-overview-more">
        ${data.overviewMore.map((p) => `<p class="case-copy reveal-text">${p}</p>`).join('')}
      </div>`);
  }
  byId('caseProblem').textContent = data.problem.copy;
  if (data.problem.quote) {
    byId('caseQuoteText').textContent = data.problem.quote;
    byId('caseQuoteAttribution').textContent = data.problem.attribution;
  } else {
    document.querySelector('#problem .case-quote').remove();
  }
  const problem = data.problem;
  const problemExtras = [];
  if (problem.brief) {
    problemExtras.push(`
      <div class="case-brief case-reveal">
        <span class="case-label">${problem.brief.label}</span>
        <p>${problem.brief.text}</p>
      </div>`);
  }
  if (problem.context) {
    // Numbered causes read as h3s; the plain version keeps the small label.
    problemExtras.push(`
      <div class="case-problem-context">
        ${problem.contextLabel ? `<span class="case-label reveal-text">${problem.contextLabel}</span>` : ''}
        <div class="case-panel-grid is-fill" style="--cols:${problem.contextCols || problem.context.length};">
          ${problem.context.map((item, i) => `
            <div class="case-panel case-reveal">
              ${problem.contextNumbered
                ? `<span class="case-panel-index">${pad(i + 1)}</span><h3>${item.title}</h3>`
                : `<span class="case-label">${item.title}</span>`}
              <p>${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>`);
  }
  if (problem.jobs) {
    problemExtras.push(`
      <div class="case-jobs case-reveal">
        <span class="case-label">${problem.jobsLabel || 'Jobs'}</span>
        <div class="case-jobs-list">${problem.jobs.map((job, i) => `<span class="case-job"><small>${pad(i + 1)}</small>${job}</span>`).join('')}</div>
      </div>`);
  }
  byId('caseProblemContext').innerHTML = problemExtras.join('');

  /* ----------------------------------------------------------------
     4. Approach — optional; a project can drop it entirely.
  ---------------------------------------------------------------- */
  if (data.approach) {
    byId('caseApproachGrid').innerHTML = data.approach
      .map((item, i) => `
        <div class="case-approach-card">
          <span class="case-approach-index">${item.code || pad(i + 1)}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `).join('');
  } else {
    byId('approach').hidden = true;
  }

  /* ----------------------------------------------------------------
     5. The Flow — alternating text/media; the gradient angle varies
        per step (--flow-angle) so the repeated brand colours don't
        feel static.
  ---------------------------------------------------------------- */
  const flowAngles = [135, 45, 160, 20, 100];

  // Longer flows come in chapters: a short intro, then a row of screens.
  const flowList = byId('caseFlowList');
  if (!data.flowChapters && !data.flow) {
    byId('flow').hidden = true;
  } else if (data.flowChapters) {
    flowList.innerHTML = data.flowChapters
      .map((chapter) => `
        <div class="case-chapter">
          <div class="case-chapter-head">
            <div>
              ${chapter.eyebrow ? `<span class="case-label">${chapter.eyebrow}</span>` : ''}
              <h3 class="reveal-text">${chapter.title}</h3>
            </div>
            ${chapter.intro ? `<p class="reveal-text">${chapter.intro}</p>` : ''}
          </div>
          <div class="screen-grid">${chapter.screens.map((s) => screenSlotHTML(s)).join('')}</div>
        </div>
      `).join('');
  } else {
    flowList.innerHTML = data.flow
      .map((step, i) => `
        <div class="case-flow-item${i % 2 === 1 ? ' is-reverse' : ''}">
          <div class="case-flow-text">
            <span class="case-flow-index">${pad(i + 1)}</span>
            <h3>${step.title}</h3>
            <p>${step.desc}</p>
          </div>
          <div class="case-flow-media${step.image ? ' has-image' : ''}"${step.image && step.ratio ? ` style="aspect-ratio:${step.ratio};"` : ''}>
            <div class="case-flow-media-img" style="--flow-angle:${flowAngles[i % flowAngles.length]}deg;"></div>
            ${step.image
              ? `<img class="case-flow-shot${step.inset ? ' is-inset' : ''}" src="${step.image}" alt="${step.alt || step.title}" loading="lazy" data-zoom />`
              : step.screen ? `<div class="case-flow-chip">${step.screen}</div>` : ''}
          </div>
        </div>
      `).join('');
  }

  /* ----------------------------------------------------------------
     6. Testing & Learnings
  ---------------------------------------------------------------- */
  if (data.testing) {
    byId('caseTestingGrid').innerHTML = data.testing
      .map((item, i) => `
        <div class="case-testing-card">
          <span class="case-testing-index">${pad(i + 1)} / Finding</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `).join('');
  } else {
    byId('testing').hidden = true;
  }

  /* ----------------------------------------------------------------
     7. Impact — the figure is written out in full (readable without
        motion); section 13 rolls it on odometer drums.
  ---------------------------------------------------------------- */
  if (data.impact) {
    byId('caseImpactGrid').innerHTML = data.impact
      .map((stat) => `
        <div class="case-impact-stat">
          <div class="case-impact-num-row">
            <span class="case-impact-num" data-count="${stat.value}" data-decimals="${stat.decimals || 0}">${Number(stat.value).toFixed(stat.decimals || 0)}</span><span class="case-impact-suffix">${stat.suffix || ''}</span>
          </div>
          <p>${stat.label}</p>
        </div>
      `).join('');
    byId('caseClosing').textContent = data.closing;
  } else {
    byId('impact').hidden = true;
  }

  /* ----------------------------------------------------------------
     7b. Optional sections — each renderer returns the section body;
         fillSection() un-hides the section only when there's data.
  ---------------------------------------------------------------- */
  function fillSection(id, html) {
    const section = byId(id);
    if (!section || !html) return;
    section.querySelector('.case-section-body').innerHTML = html;
    section.hidden = false;
  }

  function framingHTML(f) {
    const last = f.model.length - 1;
    return `
      <div class="case-model-wrap case-reveal">
        ${f.modelNote ? `<span class="case-label">${f.modelNote}</span>` : ''}
        <div class="case-model">
          ${f.model.map((node, i) => `
            ${i ? '<span class="case-model-arrow" aria-hidden="true">&rarr;</span>' : ''}
            <div class="case-model-node${i === last ? ' is-accent' : ''}">
              <h3>${node.title}</h3>
              <p>${node.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
      ${f.insight ? `
        <div class="case-insight">
          <span class="case-label">Key insight</span>
          <h3 class="reveal-text">${f.insight.title}</h3>
          <p class="reveal-text">${f.insight.desc}</p>
        </div>` : ''}
      ${f.edgeCases ? `
        <span class="case-label">${f.edgeCasesLabel || 'Edge cases'}</span>
        <ol class="case-edge-list">
          ${f.edgeCases.map((edge, i) => `<li class="case-reveal"><span>${pad(i + 1)}</span><p>${edge}</p></li>`).join('')}
        </ol>` : ''}`;
  }

  function tableHTML(t) {
    return `
      <div class="case-table-wrap case-reveal">
        <table class="case-table">
          <thead><tr>${t.head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
          <tbody>
            ${t.rows.map((row) => `<tr>${row.map((cell, i) => (i ? `<td data-label="${t.head[i]}">${cell}</td>` : `<th scope="row">${cell}</th>`)).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  }

  function researchHTML(r) {
    const f = r.fragile;
    return `
      ${r.board ? `<div class="case-reveal">${boardSlotHTML(r.board)}</div>` : ''}
      ${r.patterns ? `
      <div class="${r.board || r.patternsTitle ? 'case-subblock' : ''}">
        ${r.patternsTitle ? `<h3 class="case-subtitle reveal-text">${r.patternsTitle}</h3>` : ''}
        <div class="case-panel-grid" style="--cols:3;">
          ${r.patterns.map((p, i) => `
            <div class="case-panel case-reveal">
              <span class="case-panel-index">${pad(i + 1)}</span>
              <h3>${p.title}</h3>
              ${p.seenIn ? `<span class="case-seen">Seen in: ${p.seenIn}</span>` : ''}
              <p>${p.desc}</p>
              ${p.applied ? `<p class="case-applied"><span aria-hidden="true">&rarr;</span> ${p.applied}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>` : ''}
      ${f ? `
        <div class="case-subblock">
          <h3 class="case-subtitle reveal-text">${f.index}</h3>
          <div class="case-insight case-insight-flush">
            <span class="case-label">${f.label}</span>
            <h3 class="reveal-text">${f.title}</h3>
          </div>
          <div class="case-panel-grid" style="--cols:${f.facts.length};">
            ${f.facts.map((fact) => `
              <div class="case-panel case-reveal">
                <h3>${fact.title}</h3>
                <p>${fact.desc}</p>
              </div>
            `).join('')}
          </div>
          <div class="case-levers case-reveal">
            <span class="case-label">${f.leversTitle}</span>
            <ul class="case-bullets">${f.levers.map((l) => `<li>${l}</li>`).join('')}</ul>
          </div>
        </div>` : ''}
      ${r.chartTable ? `
        <div class="case-subblock">
          <h3 class="case-subtitle reveal-text">${r.chartTable.title}</h3>
          ${tableHTML(r.chartTable)}
          ${r.chartTable.note ? `<p class="case-note reveal-text">${r.chartTable.note}</p>` : ''}
        </div>` : ''}
      ${r.rules ? `
        <div class="case-subblock">
          <h3 class="case-subtitle reveal-text">${r.rulesTitle || 'Design rules'}</h3>
          <div class="case-panel-grid" style="--cols:3;">
            ${r.rules.map((rule, i) => `
              <div class="case-panel case-reveal">
                <span class="case-panel-index">${pad(i + 1)}</span>
                <h3>${rule.title}</h3>
                <p>${rule.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>` : ''}
      ${r.sources ? `<p class="case-note reveal-text">${r.sources}</p>` : ''}`;
  }

  function personasHTML(p) {
    return `
      <div class="case-panel-grid" style="--cols:${p.items.length};">
        ${p.items.map((x, i) => `
          <article class="case-panel case-reveal">
            <span class="case-panel-index">${pad(i + 1)}</span>
            <h3>${x.name}</h3>
            <span class="case-seen">${x.who}</span>
            <blockquote class="case-persona-quote">&ldquo;${x.quote}&rdquo;</blockquote>
            <span class="case-label">Needs</span>
            <ul class="case-bullets">${x.needs.map((n) => `<li>${n}</li>`).join('')}</ul>
            <span class="case-label case-label-gap">What the design gives them</span>
            <ul class="case-bullets">${x.gives.map((g) => `<li>${g}</li>`).join('')}</ul>
          </article>
        `).join('')}
      </div>`;
  }

  function solutionHTML(s) {
    const last = s.loop.length - 1;
    return `
      <div class="case-model-wrap case-reveal">
        <span class="case-label">${s.loopLabel}</span>
        <div class="case-model">
          ${s.loop.map((node, i) => `
            ${i ? '<span class="case-model-arrow" aria-hidden="true">&rarr;</span>' : ''}
            <div class="case-model-node${i === last ? ' is-accent' : ''}">
              <h3>${node.title}</h3>
              <p>${node.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="case-subblock">
        <h3 class="case-subtitle reveal-text">${s.map.title}</h3>
        ${tableHTML(s.map)}
      </div>
      <div class="case-subblock">
        <h3 class="case-subtitle reveal-text">${s.measuresTitle}</h3>
        <div class="case-panel-grid" style="--cols:${s.measures.length};">
          ${s.measures.map((m) => `
            <div class="case-panel case-reveal">
              <span class="case-label">${m.label}</span>
              <h3>${m.title}</h3>
              <p>${m.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
      ${s.priorities ? `
      <div class="case-subblock">
        <h3 class="case-subtitle reveal-text">${s.priorities.title}</h3>
        <p class="case-note reveal-text case-note-flush">${s.priorities.intro}</p>
        <div class="case-panel-grid" style="--cols:2;">
          ${s.priorities.items.map((item, i) => `
            <div class="case-panel case-reveal">
              <span class="case-panel-index">${pad(i + 1)}</span>
              <h3>${item.title}</h3>
              <p>${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>` : ''}
      ${s.statement ? `
      <div class="case-insight">
        <span class="case-label">${s.statement.label}</span>
        <h3 class="reveal-text">${s.statement.title}</h3>
        <p class="reveal-text">${s.statement.text}</p>
      </div>` : ''}
      ${s.pillars ? tableHTML(s.pillars) : ''}`;
  }

  // Weighted totals come straight from the criteria rows (weights in %),
  // so the table, the direction cards and the winner can't disagree.
  const scoreTotals = data.decision
    ? data.decision.options.map((_, i) => data.decision.criteria.reduce((sum, c) => sum + c.weight * c.scores[i], 0) / 100)
    : null;
  const bestOption = scoreTotals ? scoreTotals.indexOf(Math.max(...scoreTotals)) : -1;

  function directionsHTML(items) {
    return `
      <div class="case-direction-grid">
        ${items.map((item, i) => `
          <article class="case-direction case-reveal${item.chosen ? ' is-chosen' : ''}">
            <div class="case-direction-top">
              <span class="case-direction-letter">${item.letter}</span>
              ${item.chosen ? '<span class="case-direction-badge">Chosen</span>' : ''}
            </div>
            <h3>${item.title}</h3>
            <p class="case-direction-summary">${item.summary}</p>
            ${boardSlotHTML(item.board)}
            <div class="case-procon"><span class="case-label">Strengths</span><p>${item.strengths}</p></div>
            <div class="case-procon"><span class="case-label">Weaknesses</span><p>${item.weaknesses}</p></div>
            ${scoreTotals ? `<div class="case-direction-score"><span>Weighted score</span><strong>${scoreTotals[i].toFixed(2)}</strong></div>` : ''}
          </article>
        `).join('')}
      </div>`;
  }

  function decisionHTML(d) {
    const best = (i) => (i === bestOption ? ' class="is-best"' : '');
    return `
      <div class="case-table-wrap case-reveal">
        <table class="case-table case-score-table">
          <thead>
            <tr>
              <th scope="col">Criterion</th><th scope="col">Weight</th>
              ${d.options.map((o, i) => `<th scope="col"${best(i)}>${o}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${d.criteria.map((c) => `
              <tr>
                <th scope="row">${c.name}<small>${c.detail}</small></th>
                <td>${c.weight}%</td>
                ${c.scores.map((s, i) => `<td${best(i)}>${s}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Weighted score</th><td></td>
              ${scoreTotals.map((t, i) => `<td${best(i)}><span class="case-score-total">${t.toFixed(2)}</span></td>`).join('')}
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="case-decision-grid">
        <div class="case-verdict case-reveal">
          <span class="case-label">Decision</span>
          <h3>${d.verdict.title}</h3>
          <ul>${d.verdict.borrowed.map((b) => `<li><span>${b.tag}</span><p>${b.text}</p></li>`).join('')}</ul>
        </div>
        <div class="case-reveal">
          <span class="case-label">${d.risksLabel || 'Risks'}</span>
          <ol class="case-risk-list">
            ${d.risks.map((r) => `<li><span>${r.code}</span><p><strong>${r.title}</strong> ${r.desc}</p></li>`).join('')}
          </ol>
        </div>
      </div>`;
  }

  function systemHTML(s) {
    return `
      <div class="case-panel-grid" style="--cols:2;">
        ${s.components.map((c, i) => `
          <div class="case-panel case-reveal${c.board ? ' is-wide' : ''}">
            <div>
              <span class="case-panel-index">${pad(i + 1)}</span>
              <h3>${c.title}</h3>
              ${c.usedIn ? `<span class="case-seen">Used in ${c.usedIn}</span>` : ''}
              <p>${c.desc}</p>
              ${c.scale ? `
                <div class="case-scale">
                  ${c.scale.map((step) => `
                    <div>
                      <span class="case-scale-swatch" style="background:${step.hex};"></span>
                      <small>${step.token}<br />${step.range}<br />${step.hex}</small>
                    </div>
                  `).join('')}
                </div>` : ''}
            </div>
            ${boardSlotHTML(c.board)}
          </div>
        `).join('')}
      </div>
      ${s.more ? `
        <div class="case-more case-reveal">
          <h3>${s.more.title}</h3>
          <p>${s.more.text}</p>
        </div>` : ''}
      ${s.note ? `<p class="case-note reveal-text">${s.note}</p>` : ''}`;
  }

  // The project's screens as a line-up, side by side like cars on a
  // showroom floor — each one once, each one opens full size.
  function tickerHTML(t) {
    return `<div class="screen-grid case-lineup">${t.screens.map((s) => screenSlotHTML(s)).join('')}</div>`;
  }

  function nextStepsHTML(groups) {
    return `
      <div class="case-panel-grid" style="--cols:${groups.length};">
        ${groups.map((g) => `
          <div class="case-panel case-reveal">
            <h3>${g.title}</h3>
            <ul class="case-bullets">${g.items.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
        `).join('')}
      </div>`;
  }

  if (data.framing) fillSection('framing', framingHTML(data.framing));
  if (data.personas) fillSection('personas', personasHTML(data.personas));
  if (data.solution) fillSection('solution', solutionHTML(data.solution));
  if (data.foundation) fillSection('foundation', systemHTML(data.foundation));
  if (data.research) fillSection('research', researchHTML(data.research));
  if (data.directions) fillSection('directions', directionsHTML(data.directions));
  if (data.decision) fillSection('decision', decisionHTML(data.decision));
  if (data.ticker) fillSection('screens', tickerHTML(data.ticker));
  if (data.states) fillSection('states', `<div class="screen-grid">${data.states.map((s) => screenSlotHTML(s)).join('')}</div>`);
  if (data.system) fillSection('system', systemHTML(data.system));
  if (data.nextSteps) fillSection('whats-next', nextStepsHTML(data.nextSteps));

  // Closing card that points to the source Figma file.
  if (data.figma) {
    const f = data.figma;
    byId('figmaEyebrow').textContent = f.eyebrow;
    byId('figmaTitle').textContent = f.title;
    byId('figmaIntro').textContent = f.intro;
    byId('figmaCtaLabel').textContent = f.cta;
    byId('figmaCta').setAttribute('href', f.url);
    byId('figmaList').innerHTML = f.reasons
      .map((r, i) => `<li><span>${pad(i + 1)}</span><div><strong>${r.title}</strong><p>${r.desc}</p></div></li>`)
      .join('');
    byId('figma-file').hidden = false;
  }

  // Closing card that invites the viewer to try the live prototype.
  if (data.playground) {
    const p = data.playground;
    byId('playgroundEyebrow').textContent = p.eyebrow;
    byId('playgroundTitle').textContent = p.title;
    byId('playgroundIntro').textContent = p.intro;
    byId('playgroundCtaLabel').textContent = p.cta;
    byId('playgroundCta').setAttribute('href', p.url);
    byId('playgroundPreview').setAttribute('href', p.url);
    byId('playgroundImg').setAttribute('src', p.image);
    byId('playgroundBadge').textContent = p.badge;
    byId('playground').hidden = false;
  }

  // Closing card for work under NDA: the rest of the story is told on a call.
  if (data.nda) {
    const n = data.nda;
    byId('ndaEyebrow').textContent = n.eyebrow;
    byId('ndaTitle').textContent = n.title;
    byId('ndaIntro').textContent = n.intro;
    byId('ndaCtaLabel').textContent = n.cta;
    byId('ndaCta').setAttribute('href', n.url);
    byId('ndaList').innerHTML = n.points
      .map((r, i) => `<li><span>${pad(i + 1)}</span><div><strong>${r.title}</strong><p>${r.desc}</p></div></li>`)
      .join('');
    byId('nda').hidden = false;
  }

  /* ----------------------------------------------------------------
     7c. Section labels + headings per project, then number the
         visible sections in order and alternate their backgrounds
         (Impact always stays on the base background). Each rule's
         meta reads the section's place in the story ("03 / 09"), and
         each section hands the nav readout its name and number.
  ---------------------------------------------------------------- */
  // The template's chapter names — short enough for the nav readout.
  const chapterNames = new Map(Array.from(document.querySelectorAll('.case-section'))
    .map((section) => [section, section.querySelector('.section-index-label').textContent.trim()]));

  Object.entries(data.sections || {}).forEach(([id, meta]) => {
    const section = byId(id);
    if (!section) return;
    const index = section.querySelector('.section-index');
    if (meta.label) index.querySelector('.section-index-label').textContent = meta.label;
    if (meta.title || meta.intro) {
      index.insertAdjacentHTML('afterend', `
        <div class="case-section-head">
          ${meta.title ? `<h2 class="case-section-title reveal-text">${meta.title}</h2>` : ''}
          ${meta.intro ? `<p class="case-section-intro reveal-text">${meta.intro}</p>` : ''}
        </div>`);
    }
  });

  // A project can list its sections in the order of its source file;
  // anything not listed keeps its default place (and stays hidden).
  if (data.order) {
    const anchor = document.querySelector('.case-next');
    data.order.forEach((id) => {
      const section = byId(id);
      if (section) anchor.parentNode.insertBefore(section, anchor);
    });
  }

  const shownSections = Array.from(document.querySelectorAll('.case-section')).filter((section) => !section.hidden);
  let prevAlt = true;
  shownSections.forEach((section, i) => {
    const rule = section.querySelector('.section-index');
    const meta = rule.querySelector('.rule-meta');
    rule.querySelector('.rule-index').textContent = pad(i + 1);
    if (meta) meta.textContent = `${pad(i + 1)} / ${pad(shownSections.length)}`;
    section.dataset.index = pad(i + 1);

    const alt = section.classList.contains('case-impact') ? false : !prevAlt;
    section.classList.toggle('case-section-alt', alt);
    prevAlt = alt;
  });

  // The nav readout is a fixed-width window: a name that doesn't fit it
  // falls back to the chapter's short name (or, for the hero, the case
  // number). Measured in the readout itself, so it follows its styling.
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
      section.dataset.section = fitsReadout(label) ? label : chapterNames.get(section) || label;
    });
  }
  nameSections();

  /* ----------------------------------------------------------------
     8. Next project — the shutter carries its name and case number.
  ---------------------------------------------------------------- */
  const nextData = store[data.next];
  const nextLink = byId('caseNextLink');
  if (nextData && nextLink) {
    const nextSlug = nextData.slug || data.next;
    nextLink.setAttribute('href', `case-study.html?p=${nextSlug}`);
    nextLink.setAttribute('data-transition-label', fullName(nextData));
    nextLink.setAttribute('data-transition-eyebrow', `Next · ${caseNo(data.next)}`);
    nextLink.setAttribute('aria-label', `Next project: ${fullName(nextData)}`);
    byId('caseNextTitle').textContent = nextData.title;
    const nextEyebrow = document.querySelector('.case-next-eyebrow');
    if (nextEyebrow) nextEyebrow.textContent = `Next project · ${caseNo(data.next)}`;
  }

  /* ----------------------------------------------------------------
     9. MOTION — everything below runs on the shared runtime. Without
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

  // Perpetual CSS motion rests while its block is off-screen
  // (.is-offscreen in case-study.css); fn hears about it too.
  function restOffscreen(el, fn) {
    if (!el) return;
    new IntersectionObserver(([entry]) => {
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
    tags: [...tagsWrap.children],
    copy: [byId('caseSubtitle'), byId('caseTitle'), byId('caseTagline')],
    lines: [],
    meta: byId('caseMetaBar'),
    metaItems: byId('caseMetaBar').children,
    cover: media.querySelector('.case-hero-cover'),
  };

  /* ----------------------------------------------------------------
     10. HERO, BEFORE THE SHUTTER OPENS — hidden states are set here,
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
      // cover behind it. Marked ready so core.js leaves it to us.
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
     11. HERO ENTRANCE — the badge line comes up and its ruler draws
         on, then the subtitle, title and tagline rise line by line out
         of their masks and the disciplines follow; the spec sheet
         comes in once it is on screen.
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
     12. SIGNATURE HERO SCREEN — the media opens like a shutter from
         its centre seam, then each cover shows its own idea: the IVI
         screen boots with a scan and its wheel sensors ping; a plain
         cover is crossed by studio light; the EV cover runs a day of
         smart charging.
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
     13. SCROLL REVEALS — declared with data-reveal and armed by
         core.js (Site.reveals). Display copy rises line by line, body
         copy and blocks lift, flow media is crossed by a line of light,
         grid tiles fill in, and items sharing a row step in left to
         right. Impact figures roll on odometer drums; decimals keep
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
    // Only the case template's own sections: hidden ones and the contact region are left alone.
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

    // core.js armed the page before this content existed.
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
     14. ZOOM — exported screens are 2x, so any image tagged data-zoom
         opens full width in an overlay with its own scroll. The
         reticle reads "Zoom" over them. Escape, the close button or a
         click outside the image closes it; focus returns to the image.
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
      if (el) open(el.currentSrc || el.src, el.alt);
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
      open(el.currentSrc || el.src, el.alt);
    });
    document.addEventListener('mouseover', (e) => { if (zoomTarget(e)) Site.cursor.set('Zoom'); });
    document.addEventListener('mouseout', (e) => {
      const el = zoomTarget(e);
      if (el && !(e.relatedTarget && el.contains(e.relatedTarget))) Site.cursor.reset();
    });
  }

  /* ----------------------------------------------------------------
     15. BOOT — hidden states and reveals are armed behind the closed
         shutter. It opens once the fonts and hero images are in (or
         after 2.6 s at most), then the hero comes up.
  ---------------------------------------------------------------- */
  function ready() {
    const waits = [...media.querySelectorAll('img')].map((img) => (img.decode ? img.decode().catch(() => {}) : null));
    if (document.fonts && document.fonts.ready) waits.push(document.fonts.ready);
    return Promise.race([Promise.all(waits), new Promise((resolve) => setTimeout(resolve, 2600))]);
  }

  prepareHero();
  armReveals();
  armCounters();
  initZoom();
  Site.nav.refresh();
  if (!reduced) document.querySelectorAll('.case-playground-preview').forEach((el) => restOffscreen(el));

  ready()
    .then(() => {
      // Fonts are in: measure the readout names for real.
      nameSections();
      Site.nav.refresh();
      return Site.transition.reveal();
    })
    .then(() => {
      heroEntrance();
      animateHeroScreen();
      Site.emit('intro:done');
    });
})();
