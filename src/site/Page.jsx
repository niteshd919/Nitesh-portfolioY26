/* ==================================================================
   <Page> — the React side of a route.

   Renders the page's markup inside one box-less wrapper, sets the body
   class and document metadata, and mounts the page script(s) in a
   layout effect, so the first paint already has every hidden state in
   place. The scripts own their DOM from then on: the markup is static,
   React never re-renders it, and on unmount React only removes the
   wrapper — whatever the scripts moved or removed inside it is fine.
   ================================================================== */
import { useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router';
import { mountPage } from './runtime.js';
import initContact from '../components/contact.js';

const DEFAULT_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230a0a0b'/%3E%3Cpath d='M13 45a21 21 0 1 1 38 0' fill='none' stroke='%23ece9e2' stroke-width='3'/%3E%3Cpath d='M32 41 45 24' stroke='%23ff3b1d' stroke-width='4' stroke-linecap='round'/%3E%3C/svg%3E";

function setMeta({ title, description, icon }) {
  if (title) document.title = title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc && description) desc.setAttribute('content', description);
  const link = document.querySelector('link[rel="icon"]');
  if (link) link.setAttribute('href', icon || DEFAULT_ICON);
}

export default function Page({ bodyClass, title, description, icon, init, slug, children }) {
  const ref = useRef(null);
  const location = useLocation();
  const navigationType = useNavigationType();

  // Mount once per route: <Routes> is keyed by pathname, so a new page
  // is a new component, and this page's props never change under it.
  useLayoutEffect(() => {
    document.body.className = bodyClass || '';
    setMeta({ title, description, icon });
    return mountPage({
      el: ref.current,
      // The page's own scripts, in order, then the contact block every page ends on.
      init: [].concat(init, initContact),
      slug,
      navigationType,
      locationKey: location.key,
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div data-page={slug || 'home'} ref={ref} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}
