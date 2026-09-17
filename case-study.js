/* ==================================================================
   NITESH — PORTFOLIO 2025
   Case study template: reads ?p=<slug> from case-study-data.js and
   renders the page, then runs the same reveal / scroll-trigger
   motion language used on the homepage.
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
  if (heroDevice && data.heroScreen) {
    heroDevice.className = `device-frame ${data.heroScreen.device === 'phone' ? 'is-phone' : 'is-browser'}`;
    heroDevice.innerHTML = deviceChromeHTML(data.heroScreen.device) + `<div class="device-screen">${data.heroScreen.html}</div>`;
  }

  /* ----------------------------------------------------------------
     3. Overview / Problem
  ---------------------------------------------------------------- */
  document.getElementById('caseOverview').textContent = data.overview;
  document.getElementById('caseProblem').textContent = data.problem.copy;
  document.getElementById('caseQuoteText').textContent = data.problem.quote;
  document.getElementById('caseQuoteAttribution').textContent = data.problem.attribution;

  /* ----------------------------------------------------------------
     4. Approach
  ---------------------------------------------------------------- */
  document.getElementById('caseApproachGrid').innerHTML = data.approach
    .map((item, i) => `
      <div class="case-approach-card">
        <span class="case-approach-index">${String(i + 1).padStart(2, '0')}</span>
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

  document.getElementById('caseFlowList').innerHTML = data.flow
    .map((step, i) => `
      <div class="case-flow-item${i % 2 === 1 ? ' is-reverse' : ''}">
        <div class="case-flow-text">
          <span class="case-flow-index">${String(i + 1).padStart(2, '0')}</span>
          <h3>${step.title}</h3>
          <p>${step.desc}</p>
        </div>
        <div class="case-flow-media">
          <div class="case-flow-media-img" style="background: linear-gradient(${flowAngles[i % flowAngles.length]}deg, ${gradientColors[0]}, ${gradientColors[1] || gradientColors[0]});"></div>
          ${step.screen ? `<div class="case-flow-chip">${step.screen}</div>` : ''}
        </div>
      </div>
    `).join('');

  /* ----------------------------------------------------------------
     6. Testing & Learnings
  ---------------------------------------------------------------- */
  document.getElementById('caseTestingGrid').innerHTML = data.testing
    .map((item, i) => `
      <div class="case-testing-card">
        <span class="case-testing-index">${String(i + 1).padStart(2, '0')} / Finding</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `).join('');

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
     Aurora's pots visibly auto-fill, Monolith's swatches cycle
     through "eleven products", Ferro's listings load in, Nocturne's
     preview literally re-skins across brand tokens.
  ---------------------------------------------------------------- */
  const heroIntervals = [];
  function animateHeroScreen() {
    if (reducedMotion) return;
    const root = document.getElementById('caseHeroDevice');
    if (!root) return;

    if (data.slug === 'aurora') {
      gsap.utils.toArray(root.querySelectorAll('.wf-fill span')).forEach((el) => {
        const target = el.style.width;
        gsap.fromTo(el, { width: '0%' }, { width: target, duration: 1.3, ease: 'power3.out', delay: 0.2 });
      });
    } else if (data.slug === 'monolith') {
      const swatches = root.querySelectorAll('.wf-swatch');
      let i = 0;
      heroIntervals.push(setInterval(() => {
        swatches.forEach((s) => s.classList.remove('is-active'));
        swatches[i % swatches.length].classList.add('is-active');
        i += 1;
      }, 850));
    } else if (data.slug === 'ferro') {
      gsap.fromTo(root.querySelectorAll('.wf-card'), { opacity: 0, y: 14 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.18, delay: 0.2, ease: 'power3.out',
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
