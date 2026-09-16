/* ==================================================================
   NITESH — PORTFOLIO 2025
   Motion system: Lenis smooth scroll + GSAP / ScrollTrigger
   ================================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------
   0. GLOBAL STATE
------------------------------------------------------------------ */
const isTouch = window.matchMedia('(hover: none)').matches;
const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.getElementById('year').textContent = new Date().getFullYear();

/* ------------------------------------------------------------------
   1. LENIS — buttery smooth scrolling, wired into GSAP's ticker so
      ScrollTrigger and Lenis always agree on scroll position.
------------------------------------------------------------------ */
const lenis = new Lenis({
  duration: 1.15,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.1,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

/* ------------------------------------------------------------------
   2. CUSTOM MAGNETIC CURSOR
      - Follows pointer with a slight lag via GSAP quickTo (perf-friendly)
      - Scales + swaps mix-blend-mode when hovering interactive elements
      - "Magnetic" elements pull the cursor dot toward their center
------------------------------------------------------------------ */
if (!isTouch) {
  const cursor = document.getElementById('cursor');
  const cursorLabel = document.getElementById('cursorLabel');

  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' });

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  // Generic hover-scale targets
  document.querySelectorAll('a, button, .work-item').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('is-hover');
      gsap.to(cursor, { width: 56, height: 56, duration: 0.35, ease: 'power3.out' });
      const label = el.getAttribute('data-cursor');
      if (label) {
        cursorLabel.textContent = label;
        cursor.classList.add('is-label');
        gsap.to(cursor, { width: 90, height: 90, duration: 0.35, ease: 'power3.out' });
      }
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-hover', 'is-label');
      gsap.to(cursor, { width: 16, height: 16, duration: 0.35, ease: 'power3.out' });
    });
  });

  // Magnetic pull effect
  document.querySelectorAll('.magnetic, .magnetic-lg, .magnetic-block').forEach((el) => {
    const strength = el.classList.contains('magnetic-lg') ? 0.4 : 0.3;

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      gsap.to(el, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.5,
        ease: 'power3.out',
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

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
    .to(['.hero-scroll-label', '.hero-name'], {
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
   6. NAV — blend-mode header already handled in CSS; here we just
      toggle the fullscreen menu overlay.
------------------------------------------------------------------ */
function initMenu() {
  const btn = document.getElementById('menuBtn');
  const overlay = document.getElementById('menuOverlay');
  let open = false;

  const tl = gsap.timeline({ paused: true })
    .to(overlay, {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      duration: 0.8,
      ease: 'power4.inOut',
    })
    .from('.menu-link', {
      y: 60,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.06,
    }, '-=0.35')
    .from('.menu-footer-col', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
    }, '-=0.4');

  function toggle() {
    open = !open;
    btn.classList.toggle('is-open', open);
    overlay.classList.toggle('is-open', open);
    if (open) {
      tl.play();
      lenis.stop();
    } else {
      tl.reverse();
      lenis.start();
    }
  }

  btn.addEventListener('click', toggle);
  document.querySelectorAll('.menu-link, .menu-footer-col a').forEach((link) => {
    link.addEventListener('click', () => {
      if (open) toggle();
    });
  });
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
   10. WORK ITEM IMAGE DISTORTION ON HOVER
       CSS handles the height/scale reveal; here we add a subtle
       pointer-follow skew to the image for a hand-crafted, almost
       liquid distortion feel without needing a WebGL canvas.
------------------------------------------------------------------ */
function initWorkDistortion() {
  if (isTouch) return;

  document.querySelectorAll('.work-item').forEach((item) => {
    const img = item.querySelector('.work-item-img');
    if (!img) return;

    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(img, {
        rotateZ: relX * 4,
        skewX: relX * 6,
        scale: 1.05,
        x: relX * 20,
        y: relY * 20,
        duration: 0.6,
        ease: 'power3.out',
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(img, {
        rotateZ: 0,
        skewX: 0,
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      });
    });
  });
}

/* ------------------------------------------------------------------
   11. BOOT SEQUENCE
------------------------------------------------------------------ */
window.addEventListener('load', () => {
  // Build all scroll-based animations up front...
  initMenu();
  initMarquee();
  initScrollReveals();
  initCounters();
  initWorkDistortion();
  heroScrollOut();

  if (isReducedMotion) {
    // Respect reduced-motion: skip preloader theatrics, reveal instantly.
    document.getElementById('preloader').style.display = 'none';
    gsap.set(['.preloader-mask span', '.hero-tag', '.hero-title .line', '.hero-scroll-label', '.hero-name'], { y: '0%' });
    gsap.set('.hero-bg-text', { opacity: 1 });
    return;
  }

  // ...then run the preloader, and reveal the hero once it clears.
  runPreloader(() => {
    heroEntrance();
    ScrollTrigger.refresh();
  });
});
