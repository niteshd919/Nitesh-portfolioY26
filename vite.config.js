import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* ------------------------------------------------------------------
   Page-scoped stylesheets. As separate HTML pages, each stylesheet
   only ever met its own markup. In one app they all share a document,
   so each page's sheet is fenced to its body class. The fence goes on
   each selector's subject — the element it styles must be the page's
   <body>, inside it, or <html> around it — so selectors that start on
   <html> or <body> classes (".js .showroom", ".case-wide-screens …")
   keep working. It is a :where(), which adds no specificity, so the
   cascade inside a page is exactly what it was. style.css and
   contact.css stay global.
------------------------------------------------------------------ */
const PAGE_SCOPES = {
  'home-hero.css': '.page-home',
  'home-showroom.css': '.page-home',
  'home-publications.css': '.page-home',
  'home-sections.css': '.page-home',
  'home-rearview.css': '.page-home',
  'case-study.css': '.page-case',
  'case-search.css': '.page-search',
  'case-stepper.css': '.page-stepper',
  'case-homingly.css': '.page-homingly',
};

// ".js .showroom .bay::after" → ".js .showroom .bay:where(…)::after"
function scopeSelector(selector, scope) {
  const sel = selector.trim();
  const fence = `:where(${scope}, ${scope} *, :root:has(> ${scope}))`;
  // Where the last compound starts (top level: not inside () or []).
  let depth = 0;
  let start = 0;
  for (let i = 0; i < sel.length; i++) {
    const ch = sel[i];
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    else if (depth === 0 && (ch === ' ' || ch === '>' || ch === '+' || ch === '~')) start = i + 1;
  }
  // A pseudo-element must stay last.
  const last = sel.slice(start);
  let at = last.length;
  depth = 0;
  for (let i = 0; i < last.length; i++) {
    const ch = last[i];
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    else if (depth === 0 && ch === ':' && last[i + 1] === ':') { at = i; break; }
  }
  return sel.slice(0, start + at) + fence + sel.slice(start + at);
}

function scopePageStyles() {
  return {
    postcssPlugin: 'scope-page-styles',
    Once(root) {
      const file = root.source && root.source.input && root.source.input.file;
      const scope = file && PAGE_SCOPES[path.basename(file)];
      if (!scope) return;
      root.walkRules((rule) => {
        if (rule.parent && rule.parent.type === 'atrule' && /keyframes$/i.test(rule.parent.name)) return;
        rule.selectors = rule.selectors.map((s) => scopeSelector(s, scope));
      });
    },
  };
}
scopePageStyles.postcss = true;

/* ------------------------------------------------------------------
   Development: an edit to a page, a component or the runtime reloads
   the page. Fast Refresh would patch markup that Anime.js has already
   split and rolled without re-arming the page; the pages hold no
   state worth keeping, so a clean reload is the honest preview.
   Stylesheets still hot-swap in place.
------------------------------------------------------------------ */
function reloadOnScriptEdit() {
  return {
    name: 'reload-on-script-edit',
    apply: 'serve',
    hotUpdate({ file }) {
      if (this.environment.name !== 'client') return undefined;
      if (!/[\\/]src[\\/].+\.(jsx?|mjs)$/.test(file)) return undefined;
      this.environment.hot.send({ type: 'full-reload' });
      return [];
    },
  };
}

export default defineConfig({
  plugins: [react(), reloadOnScriptEdit()],
  css: {
    postcss: { plugins: [scopePageStyles()] },
  },
  build: {
    // Images stay in public/assets; the bundles get their own folder.
    assetsDir: 'static',
    target: 'es2022',
    rolldownOptions: {
      output: {
        // Libraries change rarely: their own long-cached chunks, apart
        // from the site code that changes with every edit.
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules[\\/](react|react-dom|react-router|scheduler|cookie|set-cookie-parser)[\\/]/, priority: 2 },
            { name: 'motion', test: /node_modules[\\/](animejs|lenis)[\\/]/, priority: 1 },
          ],
        },
      },
    },
  },
});
