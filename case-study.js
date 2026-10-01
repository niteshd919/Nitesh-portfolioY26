/* ==================================================================
   NITESH — PORTFOLIO 2025
   Case study template: reads ?p=<slug> from case-study-data.js and
   renders the page, then runs the same reveal / scroll-trigger
   motion language used on the homepage.

   The six core sections (overview → impact) render for every
   project. Framing, research, directions, decision, states, system
   and what's-next are opt-in: they stay hidden unless the data has
   them, and section numbers + background rhythm are worked out after
   render so any combination still reads in order.
   ================================================================== */

(function () {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('p');
  const store = window.CASE_STUDIES || {};
  const data = store[requested] || store.aurora;

  if (!data) {
    window.location.href = 'index.html';
    return;
  }

  /* ----------------------------------------------------------------
     0. Per-project accent tint — reuses the exact colors already
        present on the homepage's work tiles, just scoped to this page.
  ---------------------------------------------------------------- */
  document.documentElement.style.setProperty('--case-accent', data.accent);

  /* Screen slots are phone-proportioned by default. Desktop products
     opt into wider frames and a 2-up grid with `wideScreens: true`. */
  if (data.wideScreens) document.body.classList.add('case-wide-screens');

  /* ----------------------------------------------------------------
     1. Meta
  ---------------------------------------------------------------- */
  document.title = `${data.title} — ${data.subtitle} — Nitesh`;
  const descEl = document.getElementById('pageDescription');
  if (descEl) descEl.setAttribute('content', `${data.title} — ${data.tagline}`);

  const transitionLabel = document.querySelector('#pageTransition .page-transition-label');
  if (transitionLabel) transitionLabel.textContent = data.title;

  /* ----------------------------------------------------------------
     2. Hero
  ---------------------------------------------------------------- */
  document.getElementById('caseSubtitle').textContent = data.subtitle;
  document.getElementById('caseTitle').textContent = data.title;
  document.getElementById('caseTagline').textContent = data.tagline;
  document.getElementById('caseHeroMedia').style.background = data.gradient;

  const tagsWrap = document.getElementById('caseTags');
  tagsWrap.innerHTML = [`<span class="work-tag">${data.year}</span>`]
    .concat(data.tags.map((t) => `<span class="work-tag">${t}</span>`))
    .join('');

  const metaFields = [
    ['Role', data.role],
    ['Timeline', data.timeline],
    ['Platform', data.platform],
    ['Scope', data.scope],
    ['Team', data.team],
    ['Tools', data.tools],
  ];
  document.getElementById('caseMetaBar').innerHTML = metaFields
    .filter(([, value]) => value)
    .map(([label, value]) => `<div class="case-meta-item"><h4>${label}</h4><p>${value}</p></div>`)
    .join('');

  /* ---- device-frame hero screen — an abstracted, wireframe view of
     the product itself, not a stock image, so the case study shows
     rather than just describes what was built. ---- */
  function deviceChromeHTML(type) {
    if (type === 'phone') return `<div class="device-chrome"><span class="device-notch"></span></div>`;
    return `<div class="device-chrome"><span class="device-dot"></span><span class="device-dot"></span><span class="device-dot"></span><span class="device-url"></span></div>`;
  }
  const heroDevice = document.getElementById('caseHeroDevice');
  if (data.heroScreens) {
    // A row of phone screens (real exports or placeholders) instead of
    // one abstracted device — the middle one sits slightly larger.
    const wrap = document.querySelector('.case-hero-device-wrap');
    const center = Math.floor(data.heroScreens.length / 2);
    wrap.classList.add('is-row');
    wrap.innerHTML = `<div class="case-hero-screens">${data.heroScreens
      .map((screen, i) => screenSlotHTML(screen, { caption: false, className: i === center ? 'is-center' : '' }))
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
      ? `<img src="${screen.image}" alt="${screen.alt || screen.title}" loading="lazy" />`
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
    return `<figure class="screen-slot${opts.className ? ` ${opts.className}` : ''}"><div class="screen-slot-frame${screen.image ? '' : ' is-empty'}">${media}</div>${caption}</figure>`;
  }

  function boardSlotHTML(board) {
    if (!board) return '';
    const media = board.image
      ? `<img src="${board.image}" alt="${board.alt || board.label}" loading="lazy" />`
      : `<div class="slot-empty"><span class="slot-name">${board.label}</span><span class="slot-hint">Board placeholder</span></div>`;
    return `<div class="board-slot${board.image ? '' : ' is-empty'}" style="aspect-ratio:${board.ratio || '16 / 10'};">${media}</div>`;
  }

  const pad = (n) => String(n).padStart(2, '0');

  /* ----------------------------------------------------------------
     3. Overview / Problem
  ---------------------------------------------------------------- */
  document.getElementById('caseOverview').textContent = data.overview;
  document.getElementById('caseProblem').textContent = data.problem.copy;
  if (data.problem.quote) {
    document.getElementById('caseQuoteText').textContent = data.problem.quote;
    document.getElementById('caseQuoteAttribution').textContent = data.problem.attribution;
  } else {
    document.querySelector('#problem .case-quote').remove();
  }
  if (data.problem.context) {
    document.getElementById('caseProblemContext').innerHTML = `
      <div class="case-panel-grid case-problem-context" style="--cols:${data.problem.context.length};">
        ${data.problem.context.map((item) => `
          <div class="case-panel case-reveal">
            <span class="case-label">${item.title}</span>
            <p>${item.desc}</p>
          </div>
        `).join('')}
      </div>`;
  }

  /* ----------------------------------------------------------------
     4. Approach
  ---------------------------------------------------------------- */
  document.getElementById('caseApproachGrid').innerHTML = data.approach
    .map((item, i) => `
      <div class="case-approach-card">
        <span class="case-approach-index">${item.code || pad(i + 1)}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `).join('');

  /* ----------------------------------------------------------------
     5. The Flow — alternating text/media, gradient angle varies per
        step so the repeated brand colors don't feel static.
  ---------------------------------------------------------------- */
  const gradientColors = data.gradient.match(/#[0-9a-fA-F]{3,6}/g) || ['#c8ff4d', '#1a1a1a'];
  const flowAngles = [135, 45, 160, 20, 100];

  // Longer flows come in chapters: a short intro, then a row of screens.
  const flowList = document.getElementById('caseFlowList');
  if (data.flowChapters) {
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
          <div class="case-flow-media">
            <div class="case-flow-media-img" style="background: linear-gradient(${flowAngles[i % flowAngles.length]}deg, ${gradientColors[0]}, ${gradientColors[1] || gradientColors[0]});"></div>
            ${step.screen ? `<div class="case-flow-chip">${step.screen}</div>` : ''}
          </div>
        </div>
      `).join('');
  }

  /* ----------------------------------------------------------------
     6. Testing & Learnings
  ---------------------------------------------------------------- */
  if (data.testing) {
    document.getElementById('caseTestingGrid').innerHTML = data.testing
      .map((item, i) => `
        <div class="case-testing-card">
          <span class="case-testing-index">${pad(i + 1)} / Finding</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        </div>
      `).join('');
  } else {
    document.getElementById('testing').hidden = true;
  }

  /* ----------------------------------------------------------------
     7. Impact
  ---------------------------------------------------------------- */
  document.getElementById('caseImpactGrid').innerHTML = data.impact
    .map((stat) => `
      <div class="case-impact-stat">
        <div class="case-impact-num-row">
          <span class="case-impact-num" data-count="${stat.value}" data-decimals="${stat.decimals || 0}">0</span><span class="case-impact-suffix">${stat.suffix || ''}</span>
        </div>
        <p>${stat.label}</p>
      </div>
    `).join('');
  document.getElementById('caseClosing').textContent = data.closing;

  /* ----------------------------------------------------------------
     7b. Optional sections — each renderer returns the section body;
         fillSection() un-hides the section only when there's data.
  ---------------------------------------------------------------- */
  function fillSection(id, html) {
    const section = document.getElementById(id);
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
    return `
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
      ${r.chartTable ? `
        <div class="case-subblock">
          <h3 class="case-subtitle reveal-text">${r.chartTable.title}</h3>
          ${tableHTML(r.chartTable)}
          ${r.chartTable.note ? `<p class="case-note reveal-text">${r.chartTable.note}</p>` : ''}
        </div>` : ''}`;
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
      ${s.note ? `<p class="case-note reveal-text">${s.note}</p>` : ''}`;
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
  if (data.research) fillSection('research', researchHTML(data.research));
  if (data.directions) fillSection('directions', directionsHTML(data.directions));
  if (data.decision) fillSection('decision', decisionHTML(data.decision));
  if (data.states) fillSection('states', `<div class="screen-grid">${data.states.map((s) => screenSlotHTML(s)).join('')}</div>`);
  if (data.system) fillSection('system', systemHTML(data.system));
  if (data.nextSteps) fillSection('whats-next', nextStepsHTML(data.nextSteps));

  /* ----------------------------------------------------------------
     7c. Section labels + headings per project, then number the
         visible sections in order and alternate their backgrounds.
         Impact always stays on the base background, as before.
  ---------------------------------------------------------------- */
  Object.entries(data.sections || {}).forEach(([id, meta]) => {
    const section = document.getElementById(id);
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

  let prevAlt = true;
  Array.from(document.querySelectorAll('.case-section'))
    .filter((section) => !section.hidden)
    .forEach((section, i) => {
      section.querySelector('.section-index > span:first-child').textContent = pad(i + 1);
      const alt = section.classList.contains('case-impact') ? false : !prevAlt;
      section.classList.toggle('case-section-alt', alt);
      prevAlt = alt;
    });

  /* ----------------------------------------------------------------
     8. Next project
  ---------------------------------------------------------------- */
  const nextData = store[data.next];
  const nextLink = document.getElementById('caseNextLink');
  if (nextData && nextLink) {
    nextLink.setAttribute('href', `case-study.html?p=${nextData.slug}`);
    nextLink.setAttribute('data-transition-label', nextData.title);
    document.getElementById('caseNextTitle').textContent = nextData.title;
  }

  /* ----------------------------------------------------------------
     9. Entrance — wipe the cover away, then unmask hero copy exactly
        like the homepage's heroEntrance(), then arm scroll reveals.
  ---------------------------------------------------------------- */
  function heroEntrance() {
    const tl = gsap.timeline({ delay: 0.1 });
    tl.to('.case-hero-top', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0)
      .to('.case-hero .hero-tag', { y: '0%', duration: 1, ease: 'power4.out' }, 0.1)
      .to('.case-hero-title .line', { y: '0%', duration: 1.1, ease: 'power4.out' }, 0.2)
      .to('.case-tagline', { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out' }, 0.45)
      .to('.case-hero-media', { opacity: 1, scale: 1, duration: 1, ease: 'power4.out' }, 0.55)
      .to('.case-meta-bar', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.75);
  }

  function initCaseReveals() {
    gsap.utils.toArray('.reveal-text').forEach((el) => {
      gsap.fromTo(el, { y: 60, skewY: 3, opacity: 0 }, {
        y: 0, skewY: 0, opacity: 1, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });

    gsap.utils.toArray('.section-index').forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 92%' },
      });
    });

    gsap.utils.toArray('.case-approach-card').forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: (i % 2) * 0.1,
        scrollTrigger: { trigger: el, start: 'top 92%' },
      });
    });

    gsap.utils.toArray('.case-flow-item').forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });

    gsap.utils.toArray('.case-testing-card').forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: (i % 3) * 0.08,
        scrollTrigger: { trigger: el, start: 'top 92%' },
      });
    });

    gsap.utils.toArray('.case-reveal').forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 92%' },
      });
    });

    gsap.utils.toArray('.screen-grid .screen-slot').forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power4.out', delay: (i % 4) * 0.08,
        scrollTrigger: { trigger: el, start: 'top 92%' },
      });
    });

    gsap.fromTo('.case-impact-stat', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12,
      scrollTrigger: { trigger: '.case-impact-grid', start: 'top 88%' },
    });

    gsap.fromTo('.case-next-link .line', { y: '110%' }, {
      y: '0%', duration: 1, ease: 'power4.out',
      scrollTrigger: { trigger: '.case-next-link', start: 'top 92%' },
    });

    gsap.fromTo('.contact-cta .line', { y: '110%' }, {
      y: '0%', duration: 1, ease: 'power4.out',
      scrollTrigger: { trigger: '.contact-cta', start: 'top 90%' },
    });
  }

  /* ----------------------------------------------------------------
     9b. Signature hero-screen animation — each project's device
     mockup demonstrates its own core idea instead of sitting static:
     Aurora's pots visibly auto-fill and Nocturne's preview literally
     re-skins across its brand tokens. Hero
     screen rows simply rise in, one after another.
  ---------------------------------------------------------------- */
  const heroIntervals = [];
  function animateHeroScreen() {
    if (reducedMotion) return;

    if (data.heroScreens) {
      gsap.fromTo('.case-hero-screens .screen-slot', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.9, stagger: 0.12, delay: 0.2, ease: 'power3.out',
      });
      return;
    }

    const root = document.getElementById('caseHeroDevice');
    if (!root) return;

    if (data.slug === 'aurora') {
      gsap.utils.toArray(root.querySelectorAll('.wf-fill span')).forEach((el) => {
        const target = el.style.width;
        gsap.fromTo(el, { width: '0%' }, { width: target, duration: 1.3, ease: 'power3.out', delay: 0.2 });
      });
    } else if (data.slug === 'nocturne') {
      const colors = ['#c8ff4d', '#ff4d6d', '#4d9fff', '#f4f3ef'];
      const swatches = root.querySelectorAll('.wf-swatch');
      const btn = root.querySelector('.wf-fakebtn');
      let i = 0;
      heroIntervals.push(setInterval(() => {
        swatches.forEach((s) => s.classList.remove('is-active'));
        swatches[i % swatches.length].classList.add('is-active');
        if (btn) btn.style.background = colors[i % colors.length];
        i += 1;
      }, 1100));
    }
  }
  window.addEventListener('beforeunload', () => heroIntervals.forEach(clearInterval));

  function initImpactCounters() {
    document.querySelectorAll('.case-impact-num').forEach((el) => {
      const target = parseFloat(el.getAttribute('data-count'));
      const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
      const counter = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            val: target,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = decimals ? counter.val.toFixed(decimals) : Math.floor(counter.val);
            },
          });
        },
      });
    });
  }

  const reducedMotion = typeof isReducedMotion !== 'undefined' && isReducedMotion;

  if (!reducedMotion) {
    gsap.set('.case-hero-top', { opacity: 0, y: -10 });
    gsap.set('.case-tagline', { opacity: 0, y: 20 });
    gsap.set('.case-hero-media', { opacity: 0, scale: 1.06 });
    gsap.set('.case-meta-bar', { opacity: 0, y: 20 });
  }

  function boot() {
    initCaseReveals();
    initImpactCounters();

    const afterCover = () => {
      if (!reducedMotion) heroEntrance();
      animateHeroScreen();
      ScrollTrigger.refresh();
    };

    if (window.revealPageTransition) {
      window.revealPageTransition(afterCover);
    } else {
      afterCover();
    }
  }

  if (document.readyState === 'complete') {
    boot();
  } else {
    window.addEventListener('load', boot);
  }

  // Safety net: never leave the viewer staring at a stuck cover.
  setTimeout(() => {
    const overlay = document.getElementById('pageTransition');
    if (overlay && overlay.classList.contains('is-covering')) {
      overlay.classList.remove('is-covering');
      overlay.style.display = 'none';
    }
  }, 4000);
})();
