import { CaseHeroNo } from '../../components/CaseParts.jsx';

/*  STEP 01 · PLUGGED IN — the model badge, its spec sheet, and
    the charge: the whole study drawn as one charging curve.
    Arriving counts as the first step.
*/
export default function Hero() {
  return (
    <section className="case-hero" id="plugged" data-step="" data-label="Plugged in" data-section="Built to Finish" data-index="—">
      <div className="case-hero-top">
        <a href="/#publications" className="case-back-link" data-transition="" data-transition-label="Publications" data-cursor="Back">
          {' '}
          <span className="case-back-dim" aria-hidden="true"><i /></span>{' '}
          <span>Publications</span>{' '}
        </a>{' '}
        <CaseHeroNo slug="stepper" />
      </div>
      <div className="case-hero-head">
        <div className="hero-tag-mask">
          <p className="hero-tag" id="caseSubtitle">Stepper UX · Research &amp; recommendation</p>
        </div>
        <h1 className="case-hero-title">
          <span className="line-mask"><span className="line" id="caseTitle">Built to Finish</span></span>
        </h1>
      </div>
      <div className="case-hero-brief">
        <div>
          <div className="hero-tag-mask">
            <p className="case-tagline" id="caseTagline">
              People don’t finish the indicator. They finish the steps. Research on multi-step flows, and one stepper that adapts from a phone to a desktop.
            </p>
          </div>
          <div className="case-hero-meta-tags" id="caseTags">
            <span className="work-tag">UX Research</span>{' '}
            <span className="work-tag">Design Systems</span>{' '}
            <span className="work-tag">Accessibility</span>
          </div>
        </div>
        <dl className="case-meta-bar spec" id="caseMetaBar">
          <div className="case-meta-item spec-row"><dt>Role</dt><dd>UX research · Synthesis · Recommendation</dd></div>
          <div className="case-meta-item spec-row"><dt>Timeline</dt><dd>Aug 2026</dd></div>
          <div className="case-meta-item spec-row"><dt>Output</dt><dd>Research document</dd></div>
          <div className="case-meta-item spec-row">
            <dt>Scope</dt>
            <dd>Desk research · Evidence tiers · Use-case playbook · Component spec · Measurement plan</dd>
          </div>
          <div className="case-meta-item spec-row"><dt>Evidence</dt><dd>17 sources in five tiers</dd></div>
        </dl>
      </div>
      {/* The display bay: this page's own charging curve. */}
      <div className="case-hero-media bf-curve-bay" id="caseHeroMedia">
        <span className="case-hero-cap" aria-hidden="true">Fig. 06 — The charge · 7 steps</span>{' '}
        <div className="bf-curve" id="bfCurve">
          <dl className="bf-gauges" aria-hidden="true">
            <div className="bf-gauge is-charge">
              <dt>Charge</dt>
              <dd><b className="bf-live-pct">14</b><small>%</small></dd>
            </div>
            <div className="bf-gauge"><dt>Step</dt><dd><b className="bf-live-step">1</b><small>of 7</small></dd></div>
            <div className="bf-gauge"><dt>To full</dt><dd><b className="bf-live-eta">—</b><small>min</small></dd></div>
          </dl>
          <nav className="bf-curve-plot" aria-label="The seven steps of this case study">
            <svg className="bf-curve-svg bf-curve-grid" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true" focusable="false" />{' '}
            <svg className="bf-curve-svg bf-curve-draw" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="bfCurveFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#8fb4ff" stopOpacity="0.2" />
                  <stop offset="0.7" stopColor="#8fb4ff" stopOpacity="0.03" />
                  <stop offset="1" stopColor="#8fb4ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="bf-curve-ghost" d="" />
              <path className="bf-curve-area" d="" />
              <path className="bf-curve-line" d="" />
            </svg>{' '}
            <ol className="bf-curve-axis is-y" aria-hidden="true" />
            <ol className="bf-curve-axis is-x" aria-hidden="true" />
            <ol className="bf-curve-stops">
              <li className="bf-cstop is-endowed">
                <span className="bf-cstop-in">
                  <span className="bf-cstop-no">01</span>
                  <span className="bf-cstop-name">Plugged in</span>
                  <span className="bf-cstop-val">14%</span>
                </span>
              </li>
              <li className="bf-cstop">
                <a href="#brief" data-cursor="Go">
                  <span className="bf-cstop-no">02</span>
                  <span className="bf-cstop-name">The brief</span>
                  <span className="bf-cstop-val">29%</span>
                </a>
              </li>
              <li className="bf-cstop">
                <a href="#perception" data-cursor="Go">
                  <span className="bf-cstop-no">03</span>
                  <span className="bf-cstop-name">Perception</span>
                  <span className="bf-cstop-val">43%</span>
                </a>
              </li>
              <li className="bf-cstop">
                <a href="#evidence" data-cursor="Go">
                  <span className="bf-cstop-no">04</span>
                  <span className="bf-cstop-name">Evidence</span>
                  <span className="bf-cstop-val">57%</span>
                </a>
              </li>
              <li className="bf-cstop">
                <a href="#promises" data-cursor="Go">
                  <span className="bf-cstop-no">05</span>
                  <span className="bf-cstop-name">Promises</span>
                  <span className="bf-cstop-val">71%</span>
                </a>
              </li>
              <li className="bf-cstop">
                <a href="#proposal" data-cursor="Go">
                  <span className="bf-cstop-no">06</span>
                  <span className="bf-cstop-name">Proposal</span>
                  <span className="bf-cstop-val">86%</span>
                </a>
              </li>
              <li className="bf-cstop is-full">
                <a href="#proof" data-cursor="Go">
                  <span className="bf-cstop-no">07</span>
                  <span className="bf-cstop-name">Proof</span>
                  <span className="bf-cstop-val">100%</span>
                </a>
              </li>
            </ol>{' '}
            <span className="bf-curve-ghost-label" aria-hidden="true">Same steps, longest first</span>{' '}
            <span className="bf-curve-you" aria-hidden="true"><i /><b>You · <span>14</span>%</b></span>
          </nav>
          <div className="bf-curve-foot">
            <p className="bf-curve-note">
              This page is built like the stepper it recommends. It charges as you read: seven steps, the shortest first, and arriving counts as the first.
            </p>
            <p className="bf-curve-legend" aria-hidden="true">
              <span className="is-page">This page · charge by reading time</span>
              <span className="is-ghost">The same steps, longest first</span>
              <span className="is-you">You are here</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
