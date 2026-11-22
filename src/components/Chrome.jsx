/* ==================================================================
   Chrome — the parts that stay mounted while routes change. Their
   behaviour lives in site/chrome.js and site/transition.js; these
   components only render the markup, once. Anything that would change
   between routes is an attribute (React patches those in place), never
   text the runtime animates.
   ================================================================== */
import { memo } from 'react';
import LocalTime from './LocalTime.jsx';

const path = window.location.pathname;
const FIRST_IS_HOME = path === '/' || path === '/index.html';

/* CURSOR — precision reticle (site/chrome.js) */
export const Cursor = memo(function Cursor() {
  return (
    <div className="cursor" id="cursor" aria-hidden="true">
      <span className="cursor-dot" />
      <span className="cursor-follow">
        <span className="cursor-ring" />
        <span className="cursor-label" id="cursorLabel" />
      </span>
    </div>
  );
});

/* PAGE TRANSITION — the active grille shutter (site/transition.js).
   Arriving on any page but the index, it starts closed. */
export const PageTransition = memo(function PageTransition() {
  return (
    <div className={FIRST_IS_HOME ? 'pt' : 'pt is-covering'} id="pageTransition" aria-hidden="true">
      <div className="pt-slats">
        <i className="pt-slat" /><i className="pt-slat" /><i className="pt-slat" />{' '}
        <i className="pt-slat" /><i className="pt-slat" /><i className="pt-slat" />{' '}
        <i className="pt-slat" /><i className="pt-slat" /><i className="pt-slat" />
      </div>
      <div className="pt-label">
        <span className="pt-mask"><span className="pt-title">Nitesh Dixit</span></span>{' '}
        <span className="pt-mask"><span className="pt-eyebrow">{FIRST_IS_HOME ? 'Returning to the index' : 'Now entering'}</span></span>
      </div>
      <span className="pt-light" />
    </div>
  );
});

/* NAV — wordmark · section readout · menu */
export const Nav = memo(function Nav({ home }) {
  return (
    <header className="nav" id="nav">
      {home ? (
        <a href="#top" className="nav-mark" aria-label="Nitesh Dixit, back to top">Nitesh Dixit</a>
      ) : (
        <a href="/" className="nav-mark" data-transition="" data-transition-label="Nitesh Dixit" aria-label="Nitesh Dixit, home">Nitesh Dixit</a>
      )}
      <div className="nav-readout" aria-hidden="true">
        <span className="nav-readout-gauge"><i /></span>{' '}
        <span className="nav-readout-index">{FIRST_IS_HOME ? '00' : '—'}</span>{' '}
        <span className="nav-readout-name"><span>{FIRST_IS_HOME ? 'Ignition' : 'Case study'}</span></span>
      </div>
      <button className="menu-btn" id="menuBtn" type="button" aria-label="Menu" aria-expanded="false" aria-controls="menu">
        <span className="menu-btn-label"><span>Menu</span><span>Close</span></span>{' '}
        <span className="menu-btn-icon" aria-hidden="true"><i /><i /></span>
      </button>
    </header>
  );
});

/* MENU — the index, behind a closing grille. From another page every
   destination is a trip home through the shutter. */
const DESTINATIONS = [
  ['work', 'Work', '04 Projects', 'Selected Work'],
  ['publications', 'Publications', '02 Volumes', 'Publications'],
  ['about', 'About', 'Spec sheet', 'About'],
  ['journey', 'Journey', 'Telemetry', 'Journey'],
  ['rearview', 'Rear View', '40 Frames', 'Rear View'],
  ['contact', 'Contact', 'Say hi', 'Contact'],
];

export const Menu = memo(function Menu({ home }) {
  return (
    <div className="menu" id="menu" role="dialog" aria-modal="true" aria-label="Site index">
      <div className="menu-slats" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="menu-inner">
        <div className="rule menu-rule">
          <span className="rule-index">§</span>{' '}
          <span className="rule-title">Index</span>{' '}
          <span className="rule-line" aria-hidden="true" />{' '}
          <span className="rule-meta">{`${String(DESTINATIONS.length).padStart(2, '0')} Destinations`}</span>
        </div>
        <ol className="menu-list">
          {DESTINATIONS.map(([id, name, meta, label], i) => (
            <li key={id}>
              <a
                href={home ? `#${id}` : `/#${id}`}
                className="menu-link"
                data-transition={home ? undefined : ''}
                data-transition-label={home ? undefined : label}
                data-cursor="Go"
              >
                <span className="menu-num">{String(i + 1).padStart(2, '0')}</span><span className="menu-name"><span>{name}</span></span><span className="menu-dim" aria-hidden="true" /><span className="menu-meta">{meta}</span>
              </a>
            </li>
          ))}
        </ol>
        <dl className="spec menu-spec">
          <div className="spec-row"><dt>Write</dt><dd><a href="mailto:sayhi@niteshdixit.in" className="link">sayhi@niteshdixit.in</a></dd></div>
          <div className="spec-row"><dt>Elsewhere</dt><dd><a href="https://www.instagram.com/pixelandgear/" className="link" target="_blank" rel="noopener">Instagram</a><a href="https://www.linkedin.com/in/niteshdixit/" className="link" target="_blank" rel="noopener">LinkedIn</a><a href="https://www.behance.net/niteshdixit2" className="link" target="_blank" rel="noopener">Behance</a></dd></div>
          <div className="spec-row"><dt>Based in</dt><dd>India — working globally</dd></div>
          <div className="spec-row"><dt>Local time</dt><dd><LocalTime /> IST</dd></div>
        </dl>
      </div>
    </div>
  );
});
