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
  // A study with its own page lives there, not in this template.
  if (data.href) {
    window.location.replace(data.href);
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
  // Numbered within its own series, cases or publications
  // (CASE_SERIES in case-study-data.js).
  const series = window.CASE_SERIES ? window.CASE_SERIES(slug) : null;
  const sequence = series ? series.sequence : [slug];
  const nextNoun = (s) => (series && series.noun(s) === 'publication' ? 'writing' : 'project');
  const caseNo = (s) => (series ? series.no(s) : `Case ${pad(sequence.indexOf(s) + 1)} / ${pad(sequence.length)}`);
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
  if (caseNoEl) caseNoEl.innerHTML = `<b>${caseNo(slug)}</b><i aria-hidden="true"></i><span>${data.published ? `Published ${data.published}` : `Model year ${data.year}`}</span>`;
  const heroRuler = document.querySelector('.case-hero-ruler');
  if (heroRuler) {
    heroRuler.style.setProperty('--case-i', caseIndex);
    heroRuler.style.setProperty('--case-n', sequence.length);
  }

  // The spec sheet: .spec rows (style.css), each opened by a tick.
  // Status leads, so a reader knows up front whether this shipped or is
  // a concept, and reads the outcome section accordingly.
  const metaFields = [
    ['Status', data.status],
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
  // A case told in story steps (7d) can leave the classic problem block out.
  const problem = data.problem;
  if (!problem) byId('problem').hidden = true;
  if (problem) {
    byId('caseProblem').textContent = problem.copy;
    if (problem.quote) {
      byId('caseQuoteText').textContent = problem.quote;
      byId('caseQuoteAttribution').textContent = problem.attribution;
    } else {
      document.querySelector('#problem .case-quote').remove();
    }
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
  }

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
          <div class="screen-grid"${chapter.cols ? ` style="--cols:${chapter.cols};"` : ''}>${chapter.screens.map((s) => screenSlotHTML(s)).join('')}</div>
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

  /* A board or file the reader can open, laid out like a community
     listing: source, title, meta and the way in on the left, then what's
     inside as spec rows; a preview gallery on the right. The thumbnails
     swap the main view, and the main view opens full size. */
  const exploreIcons = {
    board: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" fill="currentColor" stroke="none" /><circle cx="17" cy="17" r="3.5" /><path d="M10.5 7H17v6.5" /><path d="M15 11.5l2 2 2-2" /></svg>',
    open: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>',
    expand: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" /></svg>',
  };

  function exploreHTML(e) {
    const first = e.views[0];
    return `
      <div class="case-explore">
        <div class="case-explore-info case-reveal">
          <span class="case-explore-source"><span class="case-explore-glyph">${exploreIcons.board}</span>${e.source}</span>
          <h3>${e.title}</h3>
          ${e.meta ? `<p class="case-explore-meta">${e.meta.map((m) => `<span>${m}</span>`).join('')}</p>` : ''}
          <div class="case-explore-actions">
            <a class="case-explore-cta" href="${e.url}" target="_blank" rel="noopener noreferrer" data-cursor="Open">
              <span>${e.cta}</span>${exploreIcons.open}
            </a>
            <button type="button" class="case-explore-expand" data-cursor="Zoom" aria-label="Open the preview full size">${exploreIcons.expand}</button>
          </div>
          ${e.note ? `<p class="case-explore-note">${e.note}</p>` : ''}
        </div>
        <div class="case-explore-gallery case-reveal">
          <figure class="case-explore-stage">
            <div class="case-explore-frame">
              <img class="case-explore-main" src="${first.image}" alt="${first.alt}" loading="lazy" data-zoom />
            </div>
            <figcaption>
              <span class="case-explore-count">${pad(1)} / ${pad(e.views.length)}</span>
              <span class="case-explore-caption" aria-live="polite">${first.caption}</span>
            </figcaption>
          </figure>
          <div class="case-explore-thumbs" role="group" aria-label="Board views">
            ${e.views.map((v, i) => `
              <button type="button" class="case-explore-thumb${i ? '' : ' is-active'}" aria-pressed="${i ? 'false' : 'true'}" data-cursor="View">
                <span class="case-explore-thumb-frame"><img src="${v.thumb}" alt="" loading="lazy" /></span>
                <span class="case-explore-thumb-label">${v.label}</span>
              </button>
            `).join('')}
          </div>
        </div>
        <div class="case-explore-body case-reveal">
          <p>${e.intro}</p>
          <dl class="case-explore-list spec">
            ${e.items.map((item) => `<div class="spec-row"><dt>${item.label}</dt><dd>${item.text}</dd></div>`).join('')}
          </dl>
        </div>
      </div>`;
  }

  function initExplore(e) {
    const section = byId('explore');
    if (!section || section.hidden) return;
    const main = section.querySelector('.case-explore-main');
    const caption = section.querySelector('.case-explore-caption');
    const count = section.querySelector('.case-explore-count');
    const thumbs = Array.from(section.querySelectorAll('.case-explore-thumb'));
    const settle = () => main.classList.remove('is-swapping');
    main.addEventListener('load', settle);
    main.addEventListener('error', settle);

    function show(i) {
      const view = e.views[i];
      if (main.getAttribute('src') === view.image) return;
      thumbs.forEach((thumb, j) => {
        thumb.classList.toggle('is-active', j === i);
        thumb.setAttribute('aria-pressed', String(j === i));
      });
      main.classList.add('is-swapping');
      main.src = view.image;
      main.alt = view.alt;
      // The zoom labels the first view on load; keep that label in step.
      if (main.hasAttribute('aria-label')) main.setAttribute('aria-label', `${view.alt} (open full size)`);
      caption.textContent = view.caption;
      count.textContent = `${pad(i + 1)} / ${pad(e.views.length)}`;
    }

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener('click', () => show(i));
      // Fetch the full-size view while the pointer or focus is on its way.
      const warm = () => { new Image().src = e.views[i].image; };
      thumb.addEventListener('pointerenter', warm, { once: true });
      thumb.addEventListener('focus', warm, { once: true });
    });

    const expand = section.querySelector('.case-explore-expand');
    if (expand) expand.addEventListener('click', () => main.click());
  }

  if (data.explore) {
    fillSection('explore', exploreHTML(data.explore));
    initExplore(data.explore);
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

  /* ----------------------------------------------------------------
     7d. Story steps — a case can tell itself as short steps in the
         playbook's order. Each step is a section of its own: a label,
         a title, one supporting line and one visual. A step under NDA
         is a locked plate that points to the call instead. The steps
         land before the closing plates; data.order can still move them.
  ---------------------------------------------------------------- */
  const lockSVG = '<svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="1.5" /><rect x="5" y="10.5" width="14" height="10" fill="none" stroke="currentColor" stroke-width="1.5" /><path d="M12 14v3" stroke="currentColor" stroke-width="1.5" /></svg>';
  const hourText = (h) => `${pad(Math.floor(h))}:${pad(Math.round((h % 1) * 60))}`;

  // A day of prices on the EV cover's hour bar: cheapest in the project
  // colour, priciest in amber, and any stretch without a price hatched.
  // Segments sit at exact hour positions, so flags and ticks line up.
  const span = (from, to, of) => `left:${(from / of) * 100}%;width:calc(${((to - from) / of) * 100}% - 2px);`;
  function dayBarHTML(slots, gaps = []) {
    const prices = slots.map((s) => s.price);
    const low = Math.min(...prices);
    const high = Math.max(...prices);
    const tone = (p) => (p === low ? 'is-cheap' : p === high ? 'is-peak' : 'is-mid');
    const parts = [
      ...slots.map((s) => ({ ...s, cls: tone(s.price), text: `${s.price} ct` })),
      ...gaps.map((g) => ({ ...g, cls: 'is-gap', text: '' })),
    ];
    return `
      <div class="story-hours" aria-hidden="true">
        <div class="story-bar">${parts.map((p) => `<span class="charge-seg ${p.cls}" style="${span(p.from, p.to, 24)}">${p.text ? `<em>${p.text}</em>` : ''}</span>`).join('')}</div>
        <div class="charge-ticks">${[0, 6, 12, 18, 24].map((h) => `<span style="left:${(h / 24) * 100}%;">${pad(h)}</span>`).join('')}</div>
      </div>`;
  }

  // The problem: how many prices a tariff can hold, beside the obvious
  // design, a stack of from/to fields that lets a stretch slip through.
  function tariffGapHTML(v) {
    const slots = [...v.slots].sort((a, b) => a.from - b.from);
    const gaps = [];
    let reach = 0;
    slots.forEach((s) => {
      if (s.from > reach) gaps.push({ from: reach, to: s.from });
      reach = Math.max(reach, s.to);
    });
    if (reach < 24) gaps.push({ from: reach, to: 24 });
    const afterGap = new Set(gaps.map((g) => g.to));
    return `
      <div class="story-gap">
        <div class="story-sum case-reveal">
          ${v.factors.map((f, i) => `
            ${i ? '<span class="story-sum-op" aria-hidden="true">×</span>' : ''}
            <p class="story-sum-row"><b>${f.value}</b><span>${f.label}</span></p>`).join('')}
          <p class="story-sum-row is-total"><b>${v.total.value}</b><span>${v.total.label}</span></p>
        </div>
        <figure class="story-form case-reveal">
          <figcaption class="case-label">${v.caption}</figcaption>
          <table class="story-form-table">
            <thead><tr><th scope="col">From</th><th scope="col">To</th><th scope="col">Price</th></tr></thead>
            <tbody>${slots.map((s) => `
              <tr${afterGap.has(s.from) ? ' class="is-late"' : ''}><td>${hourText(s.from)}</td><td>${hourText(s.to)}</td><td>${s.price} ct</td></tr>`).join('')}
            </tbody>
          </table>
          <div class="story-day">
            ${dayBarHTML(slots, gaps)}
            ${gaps.map((g) => `<span class="story-gap-flag" style="--at:${(g.from / 24) * 100}%;">${hourText(g.from)}–${hourText(g.to)} · ${v.gapLabel}</span>`).join('')}
          </div>
        </figure>
      </div>`;
  }

  // The turn: every level of the tariff is one whole the owner splits.
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function splitTrackHTML(row) {
    if (row.kind === 'year') {
      const total = row.periods.reduce((sum, p) => sum + p.days, 0);
      let day = 0;
      const marks = [];
      const segs = row.periods.map((p) => {
        if (p.start) marks.push({ at: day, text: p.start });
        const seg = `<span class="${p.part === 2 ? 'is-b' : 'is-a'}" style="${span(day, day + p.days, total)}"><em>${p.name}</em></span>`;
        day += p.days;
        return seg;
      });
      let start = 0;
      const months = monthDays.map((len, i) => {
        const at = start;
        start += len;
        return `<span style="left:${(at / 365) * 100}%;">${'JFMAMJJASOND'[i]}</span>`;
      });
      return `
        <div class="story-ribbon">${segs.join('')}${marks.map((k) => `<i class="story-mark" style="left:${(k.at / total) * 100}%;"><b>${k.text}</b></i>`).join('')}</div>
        <div class="story-months" aria-hidden="true">${months.join('')}</div>`;
    }
    if (row.kind === 'week') {
      return `<div class="story-week">${row.days.map((d, i) => `<span class="${row.groups[i] === 2 ? 'is-b' : 'is-a'}">${d}<small>${row.groups[i]}</small></span>`).join('')}</div>`;
    }
    return row.live ? liveDayHTML(row.slots) : dayBarHTML(row.slots);
  }

  // The turn, to try: the day's splits can be dragged, or stepped with the
  // arrow keys. Moving a split only moves the boundary between two slots,
  // so the bar always covers 24 hours and no gap can open. (7e wires it.)
  function liveDayHTML(slots) {
    return `
      <div class="story-live" data-live-day='${JSON.stringify(slots)}'>
        ${dayBarHTML(slots)}
        <div class="story-live-handles">${slots.slice(1).map((s, i) => `
          <button type="button" class="story-handle" role="slider" data-i="${i + 1}" style="left:${(s.from / 24) * 100}%;"
            aria-label="Split ${i + 1} of ${slots.length - 1}, between ${slots[i].price} ct and ${s.price} ct"
            aria-valuemin="0" aria-valuemax="24" aria-valuenow="${s.from}" aria-valuetext="${hourText(s.from)}"><b>${hourText(s.from)}</b></button>`).join('')}
        </div>
        <p class="story-live-readout" aria-live="polite"></p>
      </div>`;
  }

  function tariffSplitHTML(v) {
    return `<div class="story-split">${v.rows.map((row) => `
      <div class="story-split-row case-reveal">
        <span class="case-label">${row.label}</span>
        <div class="story-split-track">${splitTrackHTML(row)}</div>
        <p class="story-split-note">${row.note}</p>
      </div>`).join('')}</div>`;
  }

  // Stat callouts: the number lands first, its meaning under it. Numbers
  // roll on the odometer like Impact's (13); words sit smaller. A stat
  // still under NDA shows the lock where the number would be.
  function statsHTML(v) {
    return `<div class="case-impact-grid story-stats">${v.items.map((s) => {
      const isNum = typeof s.value === 'number';
      const shown = isNum ? s.value.toFixed(s.decimals || 0) : s.value;
      return `
      <div class="case-impact-stat${s.locked ? ' is-locked' : ''}">
        <div class="case-impact-num-row">${s.locked
          ? `<span class="story-stat-lock">${lockSVG}<span>Under NDA</span></span>`
          : `<span class="case-impact-num${/[a-z]{4,}/i.test(shown) ? ' is-word' : ''}"${isNum ? ` data-count="${s.value}" data-decimals="${s.decimals || 0}"` : ''}>${shown}</span>${s.suffix ? `<span class="case-impact-suffix">${s.suffix}</span>` : ''}`}</div>
        <p>${s.label}</p>
      </div>`;
    }).join('')}</div>`;
  }

  // A tray: the frames of one visual kept small on a single canvas, like
  // a zoomed-out view of the Figma file. Its head names the group and
  // says how many frames it holds; every frame opens full size (14).
  function trayHTML(v, body, frames, opts = {}) {
    return `
      <div class="story-tray${opts.reveal === false ? '' : ' case-reveal'}">
        <div class="story-tray-head">
          <span class="story-tray-label">${v.label || ''}</span>
          <span class="story-tray-hint" aria-hidden="true">${pad(frames)} ${frames === 1 ? 'frame' : 'frames'} · <span class="is-mouse">Click to enlarge</span><span class="is-touch">Tap to enlarge</span></span>
        </div>
        ${body}
      </div>`;
  }

  // A page of the Figma file as a thumbnail. Sheets in a row share one
  // height (between --sheet-min and --sheet-max), so each needs its size.
  function sheetHTML(b) {
    const [w, h] = b.size || [16, 10];
    const text = b.caption || b.label;
    return `
      <figure class="story-sheet" style="--r:${(w / h).toFixed(4)};">
        <div class="story-sheet-frame" style="aspect-ratio:${w} / ${h};"><img src="${b.image}" alt="${b.alt}" width="${w}" height="${h}" loading="lazy" data-zoom /></div>
        ${text ? `<figcaption>${b.code ? `<span class="screen-slot-code">${b.code}</span>` : ''}${text}</figcaption>` : ''}
      </figure>`;
  }
  const sheetsHTML = (items) => `<div class="story-sheets">${items.map(sheetHTML).join('')}</div>`;
  const boardHTML = (v) => trayHTML(v, sheetsHTML([v]), 1);
  const boardsHTML = (v) => trayHTML(v, sheetsHTML(v.items), v.items.length);

  // Directions side by side at the same step of the flow, each with its
  // weighted score as a bar out of 5 and the reason it won or lost.
  function compareHTML(v) {
    return trayHTML(v, `<div class="story-compare">${v.items.map((d) => `
      <article class="story-option${d.chosen ? ' is-chosen' : ''}">
        <div class="screen-slot-frame"><img src="${d.image}" alt="${d.alt}" loading="lazy" data-zoom /></div>
        <div class="story-option-info">
          <span class="story-option-tag">${d.tag}</span>
          <h3>${d.title}</h3>
          <div class="story-option-score">
            <b>${d.score.toFixed(2)}</b><span>/ 5${d.chosen ? ' · chosen' : ''}</span>
            <i aria-hidden="true"><em style="width:${(d.score / 5) * 100}%;"></em></i>
          </div>
          <p>${d.verdict}</p>
        </div>
      </article>`).join('')}</div>`, v.items.length);
  }

  // Steps of one interaction in order. On wide screens with motion the
  // tray pins and its row slides sideways as the page scrolls on (7e);
  // otherwise it's a row to swipe. A meter counts the steps either way.
  function stripHTML(v) {
    const n = v.screens.length;
    return `
      <div class="story-strip case-reveal" data-strip>
        <div class="story-strip-stage">${trayHTML(v, `
          <div class="story-strip-view">
            <div class="story-strip-track" role="list">${v.screens.map((s, i) => `
              <figure class="story-strip-item" role="listitem">
                <div class="screen-slot-frame"><img src="${s.image}" alt="${s.alt}" loading="lazy" data-zoom /></div>
                <figcaption><span class="screen-slot-code">${pad(i + 1)}</span><h4>${s.title}</h4><p>${s.desc}</p></figcaption>
              </figure>`).join('')}
            </div>
          </div>
          <div class="story-strip-meter" aria-hidden="true">
            <span class="story-strip-count">01 / ${pad(n)}</span>
            <i><b></b></i>
            <span class="story-strip-hint"><span class="is-scroll">Keep scrolling</span><span class="is-swipe">Swipe</span></span>
          </div>`, n, { reveal: false })}
        </div>
      </div>`;
  }

  // A long flow in parts, all on one tray: each part is a group with a
  // short head and its frames (phones, or a board such as the map).
  function chaptersHTML(v) {
    const frames = v.chapters.reduce((sum, c) => sum + (c.sheets || c.screens).length, 0);
    return trayHTML(v, `<div class="story-groups">${v.chapters.map((c) => `
      <div class="story-group">
        <div class="story-group-head">
          <span class="case-label">${c.eyebrow}</span>
          <h3>${c.title}</h3>
          ${c.line ? `<p>${c.line}</p>` : ''}
        </div>
        ${c.sheets ? sheetsHTML(c.sheets) : `<div class="story-frames">${c.screens.map((s) => screenSlotHTML(s)).join('')}</div>`}
      </div>`).join('')}</div>`, frames);
  }

  // What changed after review: the earlier screen dimmed, the shipped one
  // lit, and why in one line. On a tray of its own, or inside the evidence.
  function pairsGridHTML(v) {
    const shot = (s, label, cls) => `
      <figure class="${cls}">
        <span class="case-label">${label}</span>
        <div class="screen-slot-frame"><img src="${s.image}" alt="${s.alt}" loading="lazy" data-zoom /></div>
      </figure>`;
    return `<div class="story-pairs">${v.items.map((p) => `
      <article class="story-pair">
        <div class="story-pair-shots">
          ${shot(p.before, v.beforeLabel || 'Before', 'story-pair-was')}
          <span class="story-pair-arrow" aria-hidden="true"><i></i></span>
          ${shot(p.after, v.afterLabel || 'After', 'story-pair-now')}
        </div>
        <h3>${p.title}</h3>
        <p>${p.why}</p>
      </article>`).join('')}</div>`;
  }
  function pairsHTML(v) {
    return trayHTML(v, pairsGridHTML(v), v.items.length * 2);
  }

  // The proof behind a figure: the screens it came from, the earlier ones
  // dimmed and the shipped one lit, beside the source note's own words and
  // a link to the spot in the file. Other changes from the same review can
  // follow under a hairline, as before-and-after pairs.
  function evidenceHTML(v) {
    const shot = (s, label, cls) => `
      <figure class="screen-slot ${cls}">
        <span class="case-label">${label}</span>
        <div class="screen-slot-frame" style="aspect-ratio:${s.ratio};"><img src="${s.image}" alt="${s.alt}" loading="lazy" data-zoom /></div>
        <figcaption><span class="screen-slot-code">${s.code}</span><h4>${s.title}</h4><p>${s.desc}</p></figcaption>
      </figure>`;
    return trayHTML(v, `
      <div class="story-evidence">
        <div class="story-evidence-shots">
          ${v.before.map((s) => shot(s, v.beforeLabel || 'Before', 'story-pair-was')).join('')}
          <span class="story-pair-arrow" aria-hidden="true"><i></i></span>
          ${shot(v.after, v.afterLabel || 'After', 'story-pair-now')}
        </div>
        <blockquote class="story-evidence-note">
          <p>“${v.quote}”</p>
          <footer><cite>${v.cite}</cite>${v.href ? `<a href="${v.href}" target="_blank" rel="noopener">Open in Figma</a>` : ''}</footer>
        </blockquote>
      </div>${v.pairs ? `
      <div class="story-evidence-more">
        <span class="case-label story-evidence-sub">${v.pairs.label}</span>
        ${pairsGridHTML(v.pairs)}
      </div>` : ''}`, v.before.length + 1 + (v.pairs ? v.pairs.items.length * 2 : 0));
  }

  // Ways in that lead to one result: chips, an "or", a dimension arrow.
  function routesHTML(v) {
    return `
      <div class="story-routes case-reveal">
        <div class="story-routes-from">${v.from.map((f, i) => `${i ? '<span class="story-routes-or">or</span>' : ''}<span class="story-chip">${f}</span>`).join('')}</div>
        <span class="story-routes-arrow" aria-hidden="true"><i></i></span>
        <span class="story-chip is-result">${v.to}</span>
      </div>
      ${v.tag ? `<p class="case-note story-routes-tag reveal-text">${v.tag}</p>` : ''}`;
  }

  // A step under NDA: what it covers, the way to hear it, and a redacted
  // sheet in place of the work.
  function lockedHTML(l) {
    const url = data.nda && data.nda.url;
    const n = l.tiles || 3;
    const tiles = Array.from({ length: n }, (_, i) => `
      <span class="story-redact-tile">${l.tags ? `<b>${l.tags[i]}</b>` : ''}<i></i><i></i><i></i></span>`).join('');
    return `
      <div class="story-locked case-reveal">
        <div class="story-locked-copy">
          <span class="case-label story-locked-eyebrow">${lockSVG}<span>Under NDA</span></span>
          <h3>${l.title}</h3>
          <p>${l.teaser}</p>
          ${url ? `<a class="case-figma-cta" href="${url}" data-cursor="Say hi"><span>${l.cta || 'Ask me on a call'}</span><span class="case-cta-dim" aria-hidden="true"><i></i></span></a>` : ''}
        </div>
        <div class="story-redact" style="--n:${n};" aria-hidden="true">${tiles}</div>
      </div>`;
  }

  const storyVisuals = {
    tariffGap: tariffGapHTML,
    tariffSplit: tariffSplitHTML,
    stats: statsHTML,
    routes: routesHTML,
    board: boardHTML,
    boards: boardsHTML,
    compare: compareHTML,
    strip: stripHTML,
    chapters: chaptersHTML,
    pairs: pairsHTML,
    evidence: evidenceHTML,
    screens: (v) => `<div class="screen-grid case-lineup">${v.screens.map((s) => screenSlotHTML(s)).join('')}</div>`,
  };

  // A step can carry one visual or several, in order, each with an
  // optional small label of its own. Visuals made of frames sit in a
  // tray, which carries the label in its head.
  const trayTypes = ['board', 'boards', 'compare', 'strip', 'chapters', 'pairs', 'evidence'];
  function storyBodyHTML(step) {
    const list = step.visuals || (step.visual ? [step.visual] : []);
    return list.map((v) => {
      const tray = trayTypes.includes(v.type);
      return `
      <div class="story-block${tray ? ' is-tray' : ''}">
        ${v.label && !tray ? `<span class="case-label story-block-label reveal-text">${v.label}</span>` : ''}
        ${storyVisuals[v.type](v)}
      </div>`;
    }).join('');
  }

  function storySection(step) {
    const section = document.createElement('section');
    section.className = `case-section case-story${step.locked ? ' is-locked' : ''}`;
    // Never shadow a template section's id (they stay in the page, hidden).
    section.id = byId(step.id) ? `story-${step.id}` : step.id;
    const head = step.title || step.line ? `
      <div class="case-section-head">
        ${step.title ? `<h2 class="case-section-title reveal-text">${step.title}</h2>` : ''}
        ${step.line ? `<p class="case-section-intro reveal-text">${step.line}</p>` : ''}
      </div>` : '';
    let body = '';
    if (step.locked) body = lockedHTML(step.locked);
    else if (step.quote) body = `<p class="case-closing story-quote reveal-text">${step.quote}</p>`;
    else body = storyBodyHTML(step);
    section.innerHTML = `
      <div class="section-index rule" data-rule><span class="rule-index"></span><span class="rule-title section-index-label">${step.label}</span><span class="rule-line" aria-hidden="true"><i class="rule-fill"></i></span><span class="rule-meta"></span></div>
      ${head}
      <div class="case-section-body">${body}</div>`;
    return section;
  }

  if (data.story) {
    const plates = byId('figma-file');
    data.story.forEach((step) => plates.parentNode.insertBefore(storySection(step), plates));
    initLiveDays();
    initStrips();
  }

  /* ----------------------------------------------------------------
     7e. Story behaviour — wired here, before the motion runtime, so the
         try-it bar and the strip work with motion reduced too.
  ---------------------------------------------------------------- */
  // The try-it day: drag a split (pointer), or focus it and use the arrow
  // keys (15 min; Shift for an hour). A split stays at least 15 min from
  // its neighbours, so every slot keeps a length and the day stays whole.
  function initLiveDays() {
    document.querySelectorAll('[data-live-day]').forEach((box) => {
      const slots = JSON.parse(box.dataset.liveDay);
      const bar = box.querySelector('.story-bar');
      const segs = [...bar.querySelectorAll('.charge-seg')];
      const handles = [...box.querySelectorAll('.story-handle')];
      const readout = box.querySelector('.story-live-readout');
      const STEP = 0.25;

      function cheapest() {
        const low = Math.min(...slots.map((s) => s.price));
        const first = slots[0];
        const last = slots[slots.length - 1];
        // The cheap night runs across midnight when both ends share it.
        if (first.price === low && last.price === low && slots.length > 1) return `${hourText(last.from)}–${hourText(first.to)}`;
        const s = slots.find((x) => x.price === low);
        return `${hourText(s.from)}–${hourText(s.to)}`;
      }
      function render() {
        slots.forEach((s, i) => {
          segs[i].style.left = `${(s.from / 24) * 100}%`;
          segs[i].style.width = `calc(${((s.to - s.from) / 24) * 100}% - 2px)`;
        });
        handles.forEach((h) => {
          const at = slots[Number(h.dataset.i)].from;
          h.style.left = `${(at / 24) * 100}%`;
          h.setAttribute('aria-valuenow', String(at));
          h.setAttribute('aria-valuetext', hourText(at));
          h.querySelector('b').textContent = hourText(at);
        });
        const low = Math.min(...slots.map((s) => s.price));
        // The hidden full stop keeps the two read apart for screen readers;
        // the flex gap spaces them on screen.
        readout.innerHTML = `<b>24 h covered</b><span class="sr-only">. </span><span>Cheapest ${cheapest()} at ${low} ct</span>`;
      }
      function move(i, hour) {
        const min = slots[i - 1].from + STEP;
        const max = slots[i].to - STEP;
        const at = Math.min(max, Math.max(min, Math.round(hour / STEP) * STEP));
        if (at === slots[i].from) return;
        slots[i - 1].to = at;
        slots[i].from = at;
        box.classList.add('is-touched');
        render();
      }
      handles.forEach((h) => {
        const i = Number(h.dataset.i);
        h.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          h.setPointerCapture(e.pointerId);
          h.classList.add('is-dragging');
          const drag = (ev) => {
            const r = bar.getBoundingClientRect();
            move(i, ((ev.clientX - r.left) / r.width) * 24);
          };
          const stop = () => {
            h.classList.remove('is-dragging');
            h.removeEventListener('pointermove', drag);
            h.removeEventListener('pointerup', stop);
            h.removeEventListener('pointercancel', stop);
          };
          h.addEventListener('pointermove', drag);
          h.addEventListener('pointerup', stop);
          h.addEventListener('pointercancel', stop);
        });
        h.addEventListener('keydown', (e) => {
          const by = e.shiftKey ? 1 : STEP;
          const keys = { ArrowLeft: -by, ArrowDown: -by, ArrowRight: by, ArrowUp: by };
          if (e.key in keys) move(i, slots[i].from + keys[e.key]);
          else if (e.key === 'Home') move(i, 0);
          else if (e.key === 'End') move(i, 24);
          else return;
          e.preventDefault();
        });
      });
      render();
    });
  }

  // Strips pin on wide screens with motion: the stage sticks, centred in
  // the view, while the page scrolls the row sideways, one step at a time.
  // Elsewhere the row scrolls natively. The meter follows both.
  function initStrips() {
    const wide = window.matchMedia('(min-width: 901px)');
    document.querySelectorAll('[data-strip]').forEach((strip) => {
      const stage = strip.querySelector('.story-strip-stage');
      const view = strip.querySelector('.story-strip-view');
      const track = strip.querySelector('.story-strip-track');
      const count = strip.querySelector('.story-strip-count');
      const fill = strip.querySelector('.story-strip-meter b');
      const n = track.children.length;
      let run = 0;
      let queued = false;

      function show(p) {
        fill.style.transform = `scaleX(${p.toFixed(4)})`;
        count.textContent = `${pad(Math.round(p * (n - 1)) + 1)} / ${pad(n)}`;
      }
      function update() {
        queued = false;
        if (strip.classList.contains('is-pinned')) {
          const travel = strip.offsetHeight - stage.offsetHeight;
          const stick = parseFloat(getComputedStyle(stage).top) || 0;
          const p = travel > 0 ? Math.min(1, Math.max(0, (stick - strip.getBoundingClientRect().top) / travel)) : 0;
          track.style.transform = `translate3d(${(-p * run).toFixed(1)}px, 0, 0)`;
          show(p);
        } else {
          const max = track.scrollWidth - track.clientWidth;
          show(max > 0 ? track.scrollLeft / max : 0);
        }
      }
      function measure() {
        strip.classList.remove('is-pinned');
        track.style.transform = '';
        if (!reduced && wide.matches) {
          strip.classList.add('is-pinned');
          // The stage pins at its own (pinned) height, centred in the view.
          strip.style.setProperty('--stage-h', `${stage.offsetHeight}px`);
          run = Math.max(0, track.scrollWidth - view.clientWidth);
          if (!run) strip.classList.remove('is-pinned');
        } else {
          run = 0;
        }
        strip.style.setProperty('--strip-run', `${run}px`);
        update();
      }
      const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
      window.addEventListener('scroll', queue, { passive: true });
      track.addEventListener('scroll', queue, { passive: true });
      window.addEventListener('resize', measure);
      measure();
    });
  }

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
    nextLink.setAttribute('href', nextData.href || `case-study.html?p=${nextSlug}`);
    nextLink.setAttribute('data-transition-label', fullName(nextData));
    nextLink.setAttribute('data-transition-eyebrow', `Next · ${caseNo(data.next)}`);
    nextLink.setAttribute('aria-label', `Next ${nextNoun(data.next)}: ${fullName(nextData)}`);
    byId('caseNextTitle').textContent = nextData.title;
    const nextEyebrow = document.querySelector('.case-next-eyebrow');
    if (nextEyebrow) nextEyebrow.textContent = `Next ${nextNoun(data.next)} · ${caseNo(data.next)}`;
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
