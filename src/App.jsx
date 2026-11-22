/* ==================================================================
   App — the chrome that stays (cursor, shutter, nav, menu) and the
   routes that swap behind it. <Routes> is keyed by pathname, so every
   navigation mounts a fresh page and the old one is torn down whole.
   ================================================================== */
import { Suspense, lazy, useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router';
import { Cursor, PageTransition, Nav, Menu } from './components/Chrome.jsx';
import { ensureRuntime, setNavigate } from './site/runtime.js';
import { LEGACY_PAGES, caseHref } from './data/routes.js';
import { CASE_STUDIES } from './data/caseStudies.js';
import Home from './pages/home/Home.jsx';

// The studies load on demand, behind the closed shutter.
const CaseStudy = lazy(() => import('./pages/case-study/CaseStudy.jsx'));
const Search = lazy(() => import('./pages/search/Search.jsx'));
const Stepper = lazy(() => import('./pages/stepper/Stepper.jsx'));
const Homingly = lazy(() => import('./pages/homingly/Homingly.jsx'));

/* Old static URLs keep working. */
function LegacyCaseStudy() {
  const [params] = useSearchParams();
  const slug = params.get('p');
  const { hash } = useLocation();
  return <Navigate to={(CASE_STUDIES[slug] ? caseHref(slug) : caseHref('suspension')) + hash} replace />;
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const home = location.pathname === '/';

  useLayoutEffect(() => {
    setNavigate((url) => navigate(url));
    ensureRuntime();
  }, [navigate]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Cursor />
      <PageTransition />
      <Nav home={home} />
      <Menu home={home} />
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work/homingly" element={<Homingly />} />
          <Route path="/publications/search" element={<Search />} />
          <Route path="/publications/stepper" element={<Stepper />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/publications/:slug" element={<CaseStudy />} />

          <Route path="/index.html" element={<Navigate to={{ pathname: '/', hash: location.hash }} replace />} />
          <Route path="/case-study.html" element={<LegacyCaseStudy />} />
          {Object.entries(LEGACY_PAGES).map(([file, slug]) => (
            <Route key={file} path={`/${file}`} element={<Navigate to={caseHref(slug) + location.hash} replace />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}
