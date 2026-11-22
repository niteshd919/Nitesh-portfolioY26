import { CaseHeroNo } from '../../components/CaseParts.jsx';

/*  HERO — the model badge, its spec sheet, and the route: the
    whole case study drawn as one climb, 0 to 3,000 m.
*/
export default function Hero() {
  return (
    <section className="case-hero" data-section="The First Query" data-index="—">
      <div className="case-hero-top">
        <a href="/#publications" className="case-back-link" data-transition="" data-transition-label="Publications" data-cursor="Back">
          {' '}
          <span className="case-back-dim" aria-hidden="true"><i /></span>{' '}
          <span>Publications</span>{' '}
        </a>{' '}
        <CaseHeroNo slug="search" />
      </div>
      <div className="case-hero-head">
        <div className="hero-tag-mask">
          <p className="hero-tag" id="caseSubtitle">In-app search · UX research &amp; best practices</p>
        </div>
        <h1 className="case-hero-title">
          <span className="line-mask"><span className="line" id="caseTitle">The First Query</span></span>
        </h1>
      </div>
      <div className="case-hero-brief">
        <div>
          <div className="hero-tag-mask">
            <p className="case-tagline" id="caseTagline">
              Most people search once. This is how to make that once count, from the search box all the way up to AI.
            </p>
          </div>
          <div className="case-hero-meta-tags" id="caseTags">
            <span className="work-tag">UX Research</span>{' '}
            <span className="work-tag"> Search in Conversational AI</span>{' '}
            <span className="work-tag">Documentation</span>
          </div>
        </div>
        <dl className="case-meta-bar spec" id="caseMetaBar">
          <div className="case-meta-item spec-row">
            <dt>Role</dt>
            <dd>Product &amp; UX design · Research &amp; synthesis</dd>
          </div>
          <div className="case-meta-item spec-row"><dt>Timeline</dt><dd>Oct 2026</dd></div>
          <div className="case-meta-item spec-row"><dt>Output</dt><dd>Research document</dd></div>
          <div className="case-meta-item spec-row">
            <dt>Scope</dt>
            <dd>
              Desk research · Evidence grading · Domain playbooks · Conversational search · Measurement &amp; build plan
            </dd>
          </div>
          <div className="case-meta-item spec-row"><dt>Evidence</dt><dd>31 sources, graded A–D</dd></div>
        </dl>
      </div>
      {/* The display bay: the route of the whole study, as a climb. */}
      <div className="case-hero-media fq-route-bay" id="caseHeroMedia">
        <span className="case-hero-cap" aria-hidden="true">Fig. 05 — The route · 0 – 3,000 m</span>{' '}
        <nav className="fq-route" id="fqRoute" aria-label="The route through this case study">
          <div className="fq-route-plot">
            <svg className="fq-route-svg fq-route-grid" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true" focusable="false" />{' '}
            <svg className="fq-route-svg fq-route-draw" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="fqRouteFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ece9e2" stopOpacity="0.11" />
                  <stop offset="0.6" stopColor="#ece9e2" stopOpacity="0.025" />
                  <stop offset="1" stopColor="#ece9e2" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="fq-route-area" d="" />
              <path className="fq-route-line" d="" />
            </svg>{' '}
            <ol className="fq-route-axis" aria-hidden="true" />
            <ol className="fq-route-stops">
              <li className="fq-stop">
                <a href="#basecamp" data-cursor="Go">
                  <span className="fq-stop-no">00</span>
                  <span className="fq-stop-name">Base camp</span>
                  <span className="fq-stop-elev">0 m</span>
                </a>
              </li>
              <li className="fq-stop">
                <a href="#why" data-cursor="Go">
                  <span className="fq-stop-no">01</span>
                  <span className="fq-stop-name">Why it matters</span>
                  <span className="fq-stop-elev">450 m</span>
                </a>
              </li>
              <li className="fq-stop">
                <a href="#expect" data-cursor="Go">
                  <span className="fq-stop-no">02</span>
                  <span className="fq-stop-name">What users expect</span>
                  <span className="fq-stop-elev">850 m</span>
                </a>
              </li>
              <li className="fq-stop">
                <a href="#anatomy" data-cursor="Go">
                  <span className="fq-stop-no">03</span>
                  <span className="fq-stop-name">The anatomy</span>
                  <span className="fq-stop-elev">1,250 m</span>
                </a>
              </li>
              <li className="fq-stop">
                <a href="#words" data-cursor="Go">
                  <span className="fq-stop-no">04</span>
                  <span className="fq-stop-name">Words first</span>
                  <span className="fq-stop-elev">1,650 m</span>
                </a>
              </li>
              <li className="fq-stop">
                <a href="#stakes" data-cursor="Go">
                  <span className="fq-stop-no">05</span>
                  <span className="fq-stop-name">Higher stakes</span>
                  <span className="fq-stop-elev">2,050 m</span>
                </a>
              </li>
              <li className="fq-stop">
                <a href="#talk" data-cursor="Go">
                  <span className="fq-stop-no">06</span>
                  <span className="fq-stop-name">Search that talks</span>
                  <span className="fq-stop-elev">2,450 m</span>
                </a>
              </li>
              <li className="fq-stop">
                <a href="#measure" data-cursor="Go">
                  <span className="fq-stop-no">07</span>
                  <span className="fq-stop-name">Measure &amp; build</span>
                  <span className="fq-stop-elev">2,800 m</span>
                </a>
              </li>
              <li className="fq-stop is-summit">
                <a href="#summit" data-cursor="Go">
                  <span className="fq-stop-no">08</span>
                  <span className="fq-stop-name">Summit</span>
                  <span className="fq-stop-elev">3,000 m</span>
                </a>
              </li>
            </ol>{' '}
            <span className="fq-route-car" aria-hidden="true" />
          </div>
          <p className="fq-route-dim dim" aria-hidden="true">Build Search · 9 stages · 3,000 m</p>
        </nav>
      </div>
    </section>
  );
}
