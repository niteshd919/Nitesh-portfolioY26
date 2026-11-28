/* ==========================================================================
   NITESH DIXIT — site behaviour ("Maker's"). Plain JS, no dependencies.
   Shared by the homepage and the case studies.

   1. Housekeeping   clear what the old pages' transition leaves behind
   2. Clock          Bengaluru time in the header and footer, every minute
   3. Photo viewer   <dialog>: open, previous / next, ← →, Esc, focus return
   ========================================================================== */
(function () {
  'use strict';

  /* 1. Housekeeping ---------------------------------------------------------
     transition.js on the older case-study pages hands the next page a label
     and a "skip the preloader" flag. This page has neither, so drop them;
     otherwise the next of those pages would say "Returning to the index". */
  try {
    sessionStorage.removeItem('nd:pt');
    sessionStorage.removeItem('skipPreloader');
  } catch (err) { /* storage blocked */ }


  /* 2. Clock --------------------------------------------------------------- */
  const clocks = document.querySelectorAll('[data-clock]');
  if (clocks.length && window.Intl) {
    const ist = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    });
    let timer = 0;
    const tick = () => {
      const now = new Date();
      const p = {};
      ist.formatToParts(now).forEach((part) => { p[part.type] = part.value; });
      const h = Number(p.hour) % 24;
      const text = `${h % 12 || 12}:${p.minute} ${h < 12 ? 'am' : 'pm'}`; // "7:44 pm"
      const stamp = `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}+05:30`;
      clocks.forEach((el) => {
        el.textContent = text;
        el.setAttribute('datetime', stamp);
      });
      clearTimeout(timer);
      timer = setTimeout(tick, 60000 - (now.getTime() % 60000) + 50); // on the minute
    };
    tick();
    document.addEventListener('visibilitychange', () => { if (!document.hidden) tick(); });
  }


  /* 3. Photo viewer ---------------------------------------------------------
     Any button marked data-view opens its picture in the page's
     <dialog data-viewer>. Buttons inside one [data-view-group] browse
     together with previous / next and ← →. Each button carries:
       data-view-meta      the label line, e.g. "Frame 01 · First light"
       data-view-caption   the line under the picture (optional)
       data-view-src, data-view-srcset, data-view-w, data-view-h
                           a bigger file than the one shown (optional;
                           otherwise the button's own <img> is used) */
  const viewer = document.querySelector('[data-viewer]');

  if (viewer && typeof viewer.showModal === 'function') {
    const root = document.documentElement;
    const meta = viewer.querySelector('[data-viewer-meta]');
    const img = viewer.querySelector('[data-viewer-img]');
    const caption = viewer.querySelector('[data-viewer-caption]');
    const nav = viewer.querySelector('[data-viewer-nav]');
    let items = [];
    let index = 0;

    const pictureOf = (btn) => {
      const pic = btn.querySelector('img');
      return {
        src: btn.dataset.viewSrc || pic.getAttribute('src'),
        srcset: btn.dataset.viewSrcset || pic.getAttribute('srcset') || '',
        alt: pic.getAttribute('alt') || '',
        w: Number(btn.dataset.viewW || pic.getAttribute('width')) || 0,
        h: Number(btn.dataset.viewH || pic.getAttribute('height')) || 0,
      };
    };

    // Warm the cache for the neighbours, so previous / next swap instantly.
    const preload = (i) => {
      const pic = pictureOf(items[(i + items.length) % items.length]);
      const pre = new Image();
      pre.sizes = img.sizes;
      pre.srcset = pic.srcset;
      pre.src = pic.src;
    };

    const show = (i) => {
      index = (i + items.length) % items.length;
      const btn = items[index];
      const pic = pictureOf(btn);
      const label = btn.dataset.viewMeta || '';
      meta.textContent = items.length > 1 ? `${label} · ${index + 1} of ${items.length}` : label;
      caption.textContent = btn.dataset.viewCaption || '';
      caption.hidden = !btn.dataset.viewCaption;
      if (pic.w && pic.h) {
        img.width = pic.w;
        img.height = pic.h;
        viewer.style.setProperty('--ar', (pic.w / pic.h).toFixed(4));
      }
      img.alt = pic.alt;
      img.srcset = pic.srcset;
      img.src = pic.src;
      if (items.length > 1) {
        preload(index + 1);
        preload(index - 1);
      }
    };

    const open = (btn) => {
      const group = btn.closest('[data-view-group]');
      items = group ? Array.from(group.querySelectorAll('[data-view]')) : [btn];
      if (nav) nav.hidden = items.length < 2;
      show(items.indexOf(btn));
      root.classList.add('is-viewing');
      viewer.showModal();
    };

    document.addEventListener('click', (e) => {
      const btn = e.target.closest && e.target.closest('[data-view]');
      if (btn && !viewer.contains(btn)) open(btn);
    });
    viewer.querySelector('[data-viewer-close]').addEventListener('click', () => viewer.close());
    viewer.querySelector('[data-viewer-prev]').addEventListener('click', () => show(index - 1));
    viewer.querySelector('[data-viewer-next]').addEventListener('click', () => show(index + 1));

    viewer.addEventListener('keydown', (e) => {
      if (items.length < 2) return;
      if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
    });
    // A click on the dark scrim (not on the picture or a button) closes it too.
    viewer.addEventListener('click', (e) => { if (e.target === viewer) viewer.close(); });

    // Esc and every other way out end here: unlock the page and hand focus
    // back to the picture now on show.
    viewer.addEventListener('close', () => {
      root.classList.remove('is-viewing');
      if (items[index]) items[index].focus();
    });
  }
})();
