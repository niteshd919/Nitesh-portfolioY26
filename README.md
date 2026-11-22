# Nitesh Dixit — Portfolio 2026 ("Coachbuilt")

The portfolio at [niteshdixit.in](https://niteshdixit.in): a React single-page app built with Vite, with motion by Anime.js v4 and smooth scrolling by Lenis.

## Scripts

| Command           | What it does                                                               |
| ----------------- | -------------------------------------------------------------------------- |
| `npm install`     | Install dependencies (Node 22.12+; CI uses Node 24)                         |
| `npm run dev`     | Dev server at http://localhost:5173                                         |
| `npm run build`   | Production build in `dist/`, plus one HTML file per route                   |
| `npm run preview` | Serve the production build at http://localhost:4173                         |
| `npm run lint`    | ESLint                                                                      |

Pushing to `main` builds and deploys to GitHub Pages (`.github/workflows/static.yml`).

## URLs

| Path                     | Page                                          |
| ------------------------ | --------------------------------------------- |
| `/`                      | The index (home)                              |
| `/work/<slug>`           | Case studies: suspension, hmi, offpeak, codeflow, homingly |
| `/publications/<slug>`   | Publications: search, stepper                 |

The old static URLs (`/case-study.html?p=<slug>`, `/case-search.html`, `/case-stepper.html`, `/case-homingly.html`, `/index.html`) redirect to the new ones. `scripts/prerender-routes.mjs` writes a static HTML file for every route after the build, so each URL loads directly with the right title and description.

## Structure

```
index.html                 app shell
public/                    static files, served as-is (images in assets/, CNAME)
src/
  main.jsx                 entry: fonts, stylesheets, router
  App.jsx                  persistent chrome + routes
  site/                    the motion runtime
    runtime.js             app runtime + per-page Site facade (mountPage)
    life.js                per-page lifetime: listeners, timers, observers, Anime.js
    helpers.js             reveals, rulers, odometer, sheen, line splits, fit
    chrome.js              cursor, nav readout, menu, in-page anchors
    transition.js          the grille shutter page transition
    scroll.js / env.js / bus.js
    Page.jsx               <Page>: body class, metadata, mounts the page scripts
  components/              Nav, Menu, Cursor, shutter, Contact, Footer, case parts
  data/
    caseStudies.js         every study's content (the template renders from it)
    routes.js / pages.js   URLs and page metadata
  pages/
    home/                  sections (JSX) + their motion scripts (hero.js, …)
    case-study/            the template: CaseStudy.jsx + caseStudy.js
    search/ stepper/ homingly/   the bespoke studies
  styles/                  the stylesheets, one per page area
```

### How a page works

Each route renders its markup as JSX inside `<Page>` and passes its motion scripts as `init`. Once the markup is in the DOM, `Page` mounts the scripts with a page-scoped `Site` object (same API as the old `window.Site`). The scripts animate the DOM with Anime.js. Every listener, timer, observer and animation a page starts through `Site` (and `Site.life`) is stopped when the route changes.

The markup is static: React renders it once and the scripts own it from then on. To change copy, edit the JSX. To change motion, edit the page's script.

Each page's stylesheet is fenced to its body class at build time (see `vite.config.js`), so pages can't restyle each other now that they share one document.

### Adding a case study

Add an entry to `src/data/caseStudies.js` and link it into the `next` chain. The template at `/work/<slug>` renders it, and the build gives it its own HTML file.
