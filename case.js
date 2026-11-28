/* ==========================================================================
   NITESH DIXIT — case study behaviour ("Maker's"). Plain JS, no dependencies.
   The clock, the housekeeping and the photo viewer live in site.js.

   Board views: the contact sheet under a [data-board] swaps the big print,
   its caption and what the viewer opens. Without JS the sheet is hidden and
   the first view stays.
   ========================================================================== */
(function () {
  'use strict';

  document.querySelectorAll('[data-board]').forEach((board) => {
    const main = board.querySelector('[data-board-main]');
    const img = main && main.querySelector('img');
    const caption = board.querySelector('[data-board-caption]');
    const thumbs = Array.from(board.querySelectorAll('[data-board-view]'));
    if (!img || !thumbs.length) return;

    // "FigJam board · Whole board": keep the source, swap the view's name.
    const source = (main.dataset.viewMeta || '').split(' · ')[0];

    const select = (thumb) => {
      const d = thumb.dataset;
      thumbs.forEach((t) => t.setAttribute('aria-pressed', String(t === thumb)));
      img.width = Number(d.w);
      img.height = Number(d.h);
      img.alt = d.alt;
      img.srcset = d.srcset;
      img.src = d.src;
      if (caption) caption.textContent = d.caption;
      main.dataset.viewMeta = source ? `${source} · ${d.label}` : d.label;
      main.dataset.viewCaption = d.caption;
    };

    thumbs.forEach((t) => t.addEventListener('click', () => select(t)));
  });
})();
