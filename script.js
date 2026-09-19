/* ==================================================================
   NITESH — PORTFOLIO 2025
   Homepage-specific motion: preloader, hero entrance, marquee and
   scroll-triggered reveals. Shared chrome (Lenis, cursor, magnetic,
   menu) lives in core.js, loaded before this file.
   ================================================================== */

/* ------------------------------------------------------------------
   3. PRELOADER
      Counts 0 → 100, fills a progress bar, then masks away to reveal
      the hero. The hero's own reveal timeline is chained to fire the
      instant the preloader clears.
------------------------------------------------------------------ */
function runPreloader(onComplete) {
  const preloader = document.getElementById('preloader');
  const numEl = document.getElementById('preloaderNum');
  const barEl = document.getElementById('preloaderBar');
  const counter = { val: 0 };

  const tl = gsap.timeline({
    onComplete: () => {
      preloader.style.pointerEvents = 'none';
      onComplete();
    },
  });

  tl.to('.preloader-top', { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0)
    .to('.preloader-mask span', {
      y: '0%',
      duration: 0.9,
      ease: 'power4.out',
    }, 0.1)
    .to(counter, {
      val: 100,
      duration: 2.1,
      ease: 'power2.inOut',
      onUpdate: () => {
        numEl.textContent = Math.floor(counter.val);
      },
    }, 0)
    .to(barEl, {
      width: '100%',
      duration: 2.1,
      ease: 'power2.inOut',
    }, 0)
    // hold briefly on 100 for weight, then wipe the whole preloader up
    .to(preloader, {
      yPercent: -100,
      duration: 1,
      ease: 'power4.inOut',
    }, '+=0.25')
    .set(preloader, { display: 'none' });
}

/* ------------------------------------------------------------------
   4. HERO ENTRANCE
      Line-by-line unmask of the headline + supporting labels, timed
      to start the moment the preloader lifts.
------------------------------------------------------------------ */
function heroEntrance() {
  const tl = gsap.timeline({ delay: 0.1 });

  tl.to('.hero-tag', { y: '0%', duration: 1, ease: 'power4.out' }, 0)
    .to('.hero-title .line', {
      y: '0%',
      duration: 1.1,
      ease: 'power4.out',
      stagger: 0.12,
    }, 0.15)
    .to(['.hero-scroll-label', '.hero-meta', '.hero-name'], {
      y: '0%',
      duration: 0.9,
      ease: 'power4.out',
      stagger: 0.08,
    }, 0.5)
    .to('.hero-scroll-indicator', { opacity: 1, duration: 0.6 }, 0.9)
    .to('.hero-bg-text', { opacity: 1, duration: 1.2 }, 0.6);
}

/* ------------------------------------------------------------------
   5. HERO SCROLL-OUT
      As the user scrolls past the hero, the massive title scales down
      and pushes back in 3D space — a "gateway" into the next section.
------------------------------------------------------------------ */
function heroScrollOut() {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  })
    .to('.hero-inner', {
      scale: 0.82,
      z: -200,
      rotateX: 6,
      opacity: 0.3,
      ease: 'none',
    }, 0)
    .to('.hero-bg-text', {
      scale: 1.3,
      opacity: 0,
      ease: 'none',
    }, 0);
}

/* ------------------------------------------------------------------
   7. MARQUEE — infinite horizontal loop, GSAP-driven so it can be
      paused / resumed without hacky CSS keyframe restarts.
------------------------------------------------------------------ */
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  const distance = track.scrollWidth / 2;

  gsap.to(track, {
    x: -distance,
    duration: 22,
    ease: 'none',
    repeat: -1,
  });
}

/* ------------------------------------------------------------------
   8. SCROLL-TRIGGERED REVEALS
      Generic "reveal-text" blocks translate up + fade in with a
      subtle skew that resolves as they settle — gives copy a sense
      of weight snapping into place as it enters the viewport.
------------------------------------------------------------------ */
function initScrollReveals() {
  gsap.utils.toArray('.reveal-text').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 80, skewY: 4, opacity: 0 },
      {
        y: 0,
        skewY: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      }
    );
  });

  // Section index labels + generic fade-ups
  gsap.utils.toArray('.section-index').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
      }
    );
  });

  // About side column
  gsap.fromTo(
    '.about-side-block',
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: { trigger: '.about-side', start: 'top 85%' },
    }
  );

  // Work items — staggered slide/rotate in
  gsap.utils.toArray('.work-item').forEach((item, i) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 70, rotate: i % 2 === 0 ? -1.5 : 1.5 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: item, start: 'top 90%' },
      }
    );
  });

  // Journey stat blocks
  gsap.fromTo(
    '.journey-stat',
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: { trigger: '.journey-stats', start: 'top 85%' },
    }
  );

  // Contact CTA line unmask on scroll into view
  gsap.fromTo(
    '.contact-cta .line',
    { y: '110%' },
    {
      y: '0%',
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: { trigger: '.contact-cta', start: 'top 90%' },
    }
  );
}

/* ------------------------------------------------------------------
   9. COUNT-UP STATS
      Numbers tick up from 0 to their target once the "Journey"
      section's stat row enters view.
------------------------------------------------------------------ */
function initCounters() {
  gsap.utils.toArray('.journey-stat-num').forEach((el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const counter = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.floor(counter.val);
          },
        });
      },
    });
  });
}

/* ------------------------------------------------------------------
   10. WORK ITEM DETAILS PANEL TILT ON HOVER
       CSS handles the height/opacity reveal; here we add a subtle
       pointer-follow 3D tilt to the details panel for a tactile,
       hand-crafted feel without needing a WebGL canvas.
------------------------------------------------------------------ */
function initWorkDistortion() {
  if (isTouch) return;

  document.querySelectorAll('.work-item').forEach((item) => {
    const panel = item.querySelector('.work-item-details');
    if (!panel) return;

    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(panel, {
        rotateY: relX * 6,
        rotateX: relY * -4,
        duration: 0.6,
        ease: 'power3.out',
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(panel, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.7,
        ease: 'power3.out',
      });
    });
  });
}

/* ------------------------------------------------------------------
   10a. TESTIMONIALS — PINNED HORIZONTAL QUOTE DECK
        Desktop/mouse only: pins the deck in place and trades vertical
        scroll input for horizontal travel across the quote track, one
        full-width quote at a time. ScrollTrigger's snap locks onto
        the nearest slide as soon as scrolling settles, so there's
        never a moment resting half-between two quotes. Touch devices
        skip this entirely and get the CSS scroll-snap fallback in
        style.css — pinch/scroll-jacking on a phone is more hostile
        than helpful.
------------------------------------------------------------------ */
function initTestimonials() {
  if (isTouch || isReducedMotion) return;

  const section = document.querySelector('.testimonials');
  const pinEl = document.querySelector('.testimonials-pin');
  const track = document.querySelector('.testimonials-track');
  if (!section || !pinEl || !track) return;

  section.classList.add('has-pin');

  const steps = gsap.utils.toArray('.testimonials-step');
  const total = track.children.length;
  const getMaxScroll = () => Math.max(0, track.scrollWidth - pinEl.clientWidth);
  // A little slack beyond the raw pan distance so the eased snap has
  // room to settle instead of running out of scroll mid-animation.
  const SCROLL_DISTANCE_FACTOR = 1.2;
  // Pin below the fixed nav rather than flush against the viewport top,
  // or the deck slides in underneath it for the whole pinned dwell.
  const navEl = document.querySelector('.nav');
  const getPinOffset = () => (navEl ? navEl.getBoundingClientRect().height : 0) + 24;

  const tween = gsap.to(track, { x: () => -getMaxScroll(), ease: 'none' });

  ScrollTrigger.create({
    trigger: pinEl,
    start: () => 'top ' + getPinOffset() + 'px',
    end: () => '+=' + getMaxScroll() * SCROLL_DISTANCE_FACTOR,
    pin: true,
    scrub: 1,
    animation: tween,
    invalidateOnRefresh: true,
    snap: {
      snapTo: 1 / (total - 1),
      duration: { min: 0.2, max: 0.6 },
      ease: 'power2.inOut',
    },
    onUpdate: (self) => {
      const index = Math.round(self.progress * (total - 1));
      steps.forEach((el, i) => el.classList.toggle('is-active', i === index));
    },
  });
}

/* ------------------------------------------------------------------
   11a. QUICK REVEAL — used instead of the full counting preloader
        when arriving back from a case study page, since the page
        transition wipe already served as the "loading" beat.
------------------------------------------------------------------ */
function quickRevealPreloader(onComplete) {
  const preloader = document.getElementById('preloader');
  gsap.set(['.preloader-mask span', '.hero-tag', '.hero-title .line', '.hero-scroll-label', '.hero-meta', '.hero-name'], { y: '0%' });
  gsap.set('.hero-bg-text', { opacity: 1 });
  gsap.to(preloader, {
    yPercent: -100,
    duration: 0.7,
    ease: 'power4.inOut',
    onComplete: () => {
      preloader.style.display = 'none';
      onComplete();
    },
  });
}

/* ------------------------------------------------------------------
   11b. HASH SCROLL — when a case study's menu sends the user back to
        a homepage anchor (e.g. index.html#work), the browser jumps
        instantly before Lenis is ready; re-run it smoothly instead.
------------------------------------------------------------------ */
function scrollToHashIfNeeded() {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  setTimeout(() => lenis.scrollTo(target, { duration: 1.2, offset: 0 }), 60);
}

/* ------------------------------------------------------------------
   12. BOOT SEQUENCE
------------------------------------------------------------------ */
window.addEventListener('load', () => {
  // Build all scroll-based animations up front...
  initMarquee();
  initScrollReveals();
  initCounters();
  initWorkDistortion();
  initTestimonials();
  heroScrollOut();

  let skipPreloader = false;
  try { skipPreloader = sessionStorage.getItem('skipPreloader') === '1'; } catch (err) { /* no-op */ }
  try { sessionStorage.removeItem('skipPreloader'); } catch (err) { /* no-op */ }

  if (isReducedMotion) {
    // Respect reduced-motion: skip preloader theatrics, reveal instantly.
    document.getElementById('preloader').style.display = 'none';
    gsap.set(['.preloader-mask span', '.hero-tag', '.hero-title .line', '.hero-scroll-label', '.hero-meta', '.hero-name'], { y: '0%' });
    gsap.set('.hero-bg-text', { opacity: 1 });
    scrollToHashIfNeeded();
    return;
  }

  if (skipPreloader) {
    quickRevealPreloader(() => {
      ScrollTrigger.refresh();
      scrollToHashIfNeeded();
    });
    return;
  }

  // ...then run the preloader, and reveal the hero once it clears.
  runPreloader(() => {
    heroEntrance();
    ScrollTrigger.refresh();
  });
});
