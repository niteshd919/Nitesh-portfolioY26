/* ==================================================================
   URLs — the one place that decides where a study lives.

     /                         the index (home)
     /work/<slug>              cases (template or bespoke)
     /publications/<slug>      research publications

   The old static pages keep working: /case-study.html?p=<slug>,
   /case-search.html, /case-stepper.html, /case-homingly.html and
   /index.html all redirect (see App.jsx and scripts/prerender-routes).
   ================================================================== */
import { CASE_STUDIES } from './caseStudies.js';

export function caseHref(slug) {
  const data = CASE_STUDIES[slug];
  const kind = data && data.kind === 'publication' ? 'publications' : 'work';
  return `/${kind}/${slug}`;
}

/** Legacy file names of the bespoke pages, for redirects. */
export const LEGACY_PAGES = {
  'case-search.html': 'search',
  'case-stepper.html': 'stepper',
  'case-homingly.html': 'homingly',
};
