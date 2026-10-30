/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 · page transitions
   The active grille shutter. Leaving a page, nine slats close from
   alternating edges toward the centre seam, a light signature draws
   across it and the destination's name settles on the line. The next
   page starts behind the closed shutter and opens it once it's ready.

   Site.transition:
     go(url, { title, eyebrow })  close the shutter, then navigate
     cover({ title, eyebrow })    close it (Promise)
     reveal()                     open it, if it's closed (Promise)
     setLabel(title, eyebrow)     text shown on the seam

   Any <a data-transition href="..."> uses it automatically;
   data-transition-label / data-transition-eyebrow set the text.
------------------------------------------------------------------ */
(function () {
  const Site = window.Site;
  const { createTimeline, stagger, utils } = Site.anime;
  const root = document.documentElement;
  const pt = document.getElementById('pageTransition');

  const api = {
    go(url) { window.location.href = url; },
    cover: () => Promise.resolve(),
    reveal: () => Promise.resolve(),
    setLabel() {},
  };
  Site.transition = api;
  if (!pt) return;

  const slats = pt.querySelectorAll('.pt-slat');
  const light = pt.querySelector('.pt-light');
  const title = pt.querySelector('.pt-title');
  const eyebrow = pt.querySelector('.pt-eyebrow');
  const EASE = Site.motion.ease.inOut;
  let busy = false;

  function setLabel(t, e) {
    if (t != null && title) title.textContent = t;
    if (e != null && eyebrow) eyebrow.textContent = e;
  }

  function isClosed() {
    return pt.classList.contains('is-covering') || root.classList.contains('is-returning');
  }

  function cover(opts = {}) {
    setLabel(opts.title, opts.eyebrow);
    pt.style.display = '';
    pt.classList.add('is-active');
    if (Site.reduced) {
      utils.set(slats, { scaleY: 1.04 });
      utils.set(light, { scaleX: 1, opacity: 1 });
      utils.set([title, eyebrow], { translateY: '0%' });
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      createTimeline({ onComplete: resolve })
        .add(slats, { scaleY: [0, 1.04], duration: 820, ease: EASE, delay: stagger(55, { from: 'center' }) }, 0)
        .add(light, { scaleX: [0, 1], opacity: [0, 1], duration: 900, ease: 'outExpo' }, 420)
        .add([title, eyebrow], { translateY: ['110%', '0%'], duration: 850, ease: 'outExpo', delay: stagger(90) }, 520);
    });
  }

  function hide() {
    pt.classList.remove('is-active', 'is-covering');
    root.classList.remove('is-returning', 'is-transitioning');
    pt.style.display = 'none';
    utils.set(slats, { scaleY: 0 });
    utils.set(light, { scaleX: 0, opacity: 0 });
    utils.set([title, eyebrow], { translateY: '110%' });
  }

  function reveal() {
    if (!isClosed()) {
      hide();
      return Promise.resolve();
    }
    // Hand the closed state from CSS classes to inline styles, so the
    // classes can go and the timeline owns every value from here.
    pt.classList.add('is-active');
    utils.set(slats, { scaleY: 1.04 });
    utils.set(light, { scaleX: 1, opacity: 1 });
    utils.set([title, eyebrow], { translateY: '0%' });
    pt.classList.remove('is-covering');
    root.classList.remove('is-returning');

    if (Site.reduced) {
      hide();
      Site.scroll.start();
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      createTimeline({
        onComplete: () => {
          hide();
          resolve();
        },
      })
        .add([title, eyebrow], { translateY: ['0%', '-110%'], duration: 650, ease: 'in(3)', delay: stagger(70) }, 120)
        .add(light, { scaleX: [1, 0], opacity: [1, 0], duration: 760, ease: EASE }, 360)
        .add(slats, { scaleY: [1.04, 0], duration: 980, ease: EASE, delay: stagger(55, { from: 'center' }) }, 480)
        .call(() => {
          root.classList.remove('is-transitioning');
          Site.scroll.start();
        }, 620);
    });
  }

  function go(url, opts = {}) {
    if (busy) return;
    busy = true;
    const path = url.split('#')[0].split('?')[0];
    const toHome = path === '' || path === '/' || path === './' || /(^|\/)index\.html$/.test(path);
    if (toHome) {
      try { sessionStorage.setItem('skipPreloader', '1'); } catch (err) { /* private mode */ }
    }
    root.classList.add('is-transitioning');
    Site.scroll.stop();
    const label = {
      title: opts.title != null ? opts.title : (toHome ? 'Nitesh Dixit' : ''),
      eyebrow: opts.eyebrow != null ? opts.eyebrow : (toHome ? 'Returning to the index' : 'Now entering'),
    };
    // The next page reads this into its closed shutter (inline script after
    // #pageTransition), so the seam keeps its words across the load.
    try { sessionStorage.setItem('nd:pt', JSON.stringify(label)); } catch (err) { /* private mode */ }
    cover(label).then(() => {
      pt.classList.add('is-covering');
      window.location.href = url;
    });
  }

  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest('a[data-transition]');
    if (!a) return;
    const url = a.getAttribute('href');
    if (!url || url.startsWith('#') || a.target === '_blank') return;
    e.preventDefault();
    go(url, { title: a.getAttribute('data-transition-label'), eyebrow: a.getAttribute('data-transition-eyebrow') });
  });

  // Back/forward can restore a page from the bfcache exactly as it was
  // left — shutter closed, scroll stopped. Reset it.
  window.addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    busy = false;
    hide();
    Site.scroll.start();
  });

  Object.assign(api, { go, cover, reveal, setLabel });
})();
