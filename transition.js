/* ==================================================================
   NITESH — PORTFOLIO 2025
   Cross-page transitions: a full-bleed wipe that bridges navigation
   between the homepage and case study pages, so a link click reads
   as one continuous motion instead of a hard reload.

   - goTo(): plays an expanding circular wipe from the click point,
     covering the viewport, then hands off to a real navigation.
   - revealPageTransition(): the mirror image, run by the destination
     page once its content is ready — wipes the cover away using the
     same up-and-off motion language as the homepage preloader.
------------------------------------------------------------------ */
(function () {
  const overlay = document.getElementById('pageTransition');
  if (!overlay) return;

  const label = overlay.querySelector('.page-transition-label');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function goTo(url, originEvent) {
    if (reduced) {
      window.location.href = url;
      return;
    }

    if (/index\.html|^\/?$/.test(url.split('?')[0].split('#')[0]) || url.split('?')[0].split('#')[0] === '') {
      try { sessionStorage.setItem('skipPreloader', '1'); } catch (err) { /* no-op */ }
    }

    document.documentElement.classList.add('is-transitioning');
    if (typeof lenis !== 'undefined') lenis.stop();

    const originX = originEvent ? `${originEvent.clientX}px` : '50%';
    const originY = originEvent ? `${originEvent.clientY}px` : '50%';

    gsap.timeline({
      onComplete: () => { window.location.href = url; },
    })
      .set(overlay, { clipPath: `circle(0% at ${originX} ${originY})`, display: 'flex' })
      .to(overlay, {
        clipPath: `circle(150% at ${originX} ${originY})`,
        duration: 0.85,
        ease: 'power4.inOut',
      }, 0)
      .fromTo(label, {
        opacity: 0,
        y: 16,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      }, 0.25);
  }

  document.querySelectorAll('[data-transition]').forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const url = el.getAttribute('href');
      if (!url || el.target === '_blank') return;
      e.preventDefault();
      const name = el.getAttribute('data-transition-label');
      if (name && label) label.textContent = name;
      goTo(url, e);
    });
  });

  window.revealPageTransition = function (onComplete) {
    if (reduced || !overlay.classList.contains('is-covering')) {
      overlay.classList.remove('is-covering');
      overlay.style.display = 'none';
      if (typeof onComplete === 'function') onComplete();
      return;
    }
    gsap.timeline()
      .to(overlay, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut',
        delay: 0.2,
      })
      .set(overlay, { display: 'none', clipPath: 'circle(150% at 50% 50%)', yPercent: 0 })
      .add(() => {
        overlay.classList.remove('is-covering');
        document.documentElement.classList.remove('is-transitioning');
        if (typeof lenis !== 'undefined') lenis.start();
        if (typeof onComplete === 'function') onComplete();
      });
  };
})();
