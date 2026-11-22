/* ==================================================================
   Page metadata — titles, descriptions and favicons, read by the
   React pages at runtime and by scripts/prerender-routes.mjs, which
   writes a static HTML file per route so links share well and every
   URL loads directly on GitHub Pages.
   ================================================================== */
import { CASE_STUDIES } from './caseStudies.js';
import { caseHref } from './routes.js';

export const HOME_META = {
  title: 'Nitesh Dixit — Design Engineer/Product Designer',
  description: 'Nitesh Dixit — Design Engineer and product designer. Cockpit, in-vehicle and digital product experiences. Portfolio 2026.',
};

/* The bespoke studies keep their own favicons. */
export const BESPOKE_META = {
  search: {
    title: 'The First Query — In-app search research',
    description: 'The First Query — a research-backed playbook for in-app search, from the first keystroke to conversational AI. Case study by Nitesh Dixit.',
  },
  stepper: {
    title: 'Built to Finish — Stepper UX research',
    description: 'Built to Finish — research on multi-step flows, and one adaptive stepper for mobile and desktop. A case study by Nitesh Dixit that charges as you read.',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230a0a0b'/%3E%3Crect x='9.5' y='21.5' width='41' height='21' fill='none' stroke='%23ece9e2' stroke-width='3'/%3E%3Crect x='52' y='27' width='4' height='10' fill='%23ece9e2'/%3E%3Crect x='15' y='27' width='8' height='10' fill='%238fb4ff'/%3E%3Crect x='26' y='27' width='8' height='10' fill='%238fb4ff'/%3E%3Crect x='37' y='27' width='8' height='10' fill='%23ff3b1d'/%3E%3C/svg%3E",
  },
  homingly: {
    title: 'Homingly — Home interiors app',
    description: 'Homingly, a home interiors app that tells people what a renovation will cost before they hire anyone, then books the designer who fits the number. A product design case study by Nitesh Dixit.',
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230a0a0b'/%3E%3Cpath d='M28 50H12V14h40v36h-6' fill='none' stroke='%23ece9e2' stroke-width='3'/%3E%3Cpath d='M28 50V32' stroke='%23d4b27c' stroke-width='3'/%3E%3Cpath d='M28 32a18 18 0 0 1 18 18' fill='none' stroke='%23d4b27c' stroke-width='1.5' stroke-dasharray='2.5 2.5'/%3E%3C/svg%3E",
  },
};

/* The template studies are titled from their data. */
export function caseMeta(slug) {
  if (BESPOKE_META[slug]) return BESPOKE_META[slug];
  const data = CASE_STUDIES[slug];
  return {
    title: `${data.title} — ${data.subtitle} — Nitesh Dixit`,
    description: `${data.title} — ${data.tagline}`,
  };
}

/** Every page the site has: [path, meta]. */
export function allRoutes() {
  return [
    ['/', HOME_META],
    ...[...new Set([...Object.keys(CASE_STUDIES), ...Object.keys(BESPOKE_META)])].map((slug) => [caseHref(slug), caseMeta(slug)]),
  ];
}
