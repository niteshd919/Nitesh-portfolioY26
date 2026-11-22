/* ==================================================================
   After `vite build`: give every route its own HTML file, so GitHub
   Pages serves each URL directly (status 200, the right title and
   description for link previews), and keep the old static URLs alive.

     dist/work/<slug>.html + dist/work/<slug>/index.html (and the same
       for /publications): Pages serves /work/hmi from the first with
       no redirect, /work/hmi/ from the second
     dist/case-study.html, case-search.html, … (the app redirects them)
     dist/404.html                             (anything else → home)
   ================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { allRoutes } from '../src/data/pages.js';
import { LEGACY_PAGES } from '../src/data/routes.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const shell = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function page(meta) {
  let html = shell
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.description)}$2`);
  if (meta.icon) html = html.replace(/(<link rel="icon" href=")[^"]*(")/, `$1${esc(meta.icon)}$2`);
  return html;
}

function write(rel, html) {
  const file = path.join(dist, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log(`  ${rel}`);
}

console.log('prerender-routes:');
for (const [route, meta] of allRoutes()) {
  if (route === '/') continue;
  write(`${route.slice(1)}.html`, page(meta));
  write(path.join(route.slice(1), 'index.html'), page(meta));
}
for (const file of ['case-study.html', ...Object.keys(LEGACY_PAGES)]) write(file, shell);
write('404.html', shell);
