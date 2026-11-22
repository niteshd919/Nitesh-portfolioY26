/* ==================================================================
   NITESH DIXIT — PORTFOLIO 2026 ("Coachbuilt")
   React + Vite single-page app. Motion: Anime.js v4 + Lenis.

   No <StrictMode>: the pages hand their DOM to Anime.js once and the
   runtime tears it down on route change. StrictMode's development-
   only double mount would arm every page twice on the same nodes.
   ================================================================== */
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

/* Fonts, self-hosted: Archivo (variable width + weight — Expanded for
   display, Normal for text), Martian Mono for instrument readouts, and
   Homingly's own pair (DM Sans + Fraunces), loaded only where used. */
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource-variable/archivo/wdth-italic.css';
import '@fontsource-variable/martian-mono/wdth.css';
import '@fontsource-variable/dm-sans/index.css';
import '@fontsource-variable/fraunces/index.css';
import '@fontsource-variable/fraunces/wght-italic.css';

/* Styles — the shared system first, then each page's sheets (fenced to
   their page in vite.config.js), and the contact block last, as each
   page used to load them. */
import './styles/style.css';
import './styles/home-hero.css';
import './styles/home-showroom.css';
import './styles/home-publications.css';
import './styles/home-sections.css';
import './styles/home-rearview.css';
import './styles/case-study.css';
import './styles/case-search.css';
import './styles/case-stepper.css';
import './styles/case-homingly.css';
import './styles/contact.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
