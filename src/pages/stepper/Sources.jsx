/*  SOURCES — every source the study stood on, by tier
*/
export default function Sources() {
  return (
    <section className="case-section bf-sources" id="sources" data-section="Sources" data-index="§">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">§</span>
        <span className="rule-title section-index-label">Sources</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">17 Sources</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">Every number traces to a source.</h2>
        {/*
        <p className="case-section-intro">
          Graded in five tiers. A finding made the list only with support from two tiers, or from one Tier 1 source. Every page below was opened during the research, in November 2026.
        </p>
        */}
      </div>
      <div className="bf-tiers">
        <div className="bf-tier">
          <p className="bf-tier-head"><b>Tier 1</b><span>Experiments and meta-analyses</span></p>
          <p className="bf-tier-use">Evidence of an effect on completion and motivation</p>
          <ol className="bf-source-list">
            <li>
              Villar, Callegaro &amp; Yang (2013): Where Am I? A meta-analysis of experiments on the effects of progress indicators for web surveys
            </li>
            <li>
              SoundRocket: Introducing error through use of web survey progress indicators, reporting Crawford et al. (2001) and Conrad et al. (2010)
            </li>
            <li>
              Wikipedia: Goal pursuit, summarising Hull (1932), Nunes &amp; Drèze (2006), Kivetz et al. (2006) and Bonezzi et al. (2011)
            </li>
          </ol>
        </div>
        <div className="bf-tier">
          <p className="bf-tier-head"><b>Tier 2</b><span>Usability research and benchmarks</span></p>
          <p className="bf-tier-use">Strong practitioner evidence on behaviour and failure modes</p>
          <ol className="bf-source-list">
            <li>Nielsen Norman Group: Wizards, definition and design recommendations</li>
            <li>Baymard Institute: The Checkout UX Guide</li>
            <li>MeasuringU: 10 things to know about the Single Ease Question</li>
          </ol>
        </div>
        <div className="bf-tier">
          <p className="bf-tier-head"><b>Tier 3</b><span>Government design systems and standards</span></p>
          <p className="bf-tier-use">Tested at national scale, including people with low digital literacy</p>
          <ol className="bf-source-list">
            <li>GOV.UK Design System: Question pages</li>
            <li>GOV.UK Design System: Complete multiple tasks</li>
            <li>U.S. Web Design System: Step indicator</li>
            <li>W3C WAI: Multi-page forms</li>
            <li>W3C: Understanding SC 2.5.8, Target Size (Minimum)</li>
          </ol>
        </div>
        <div className="bf-tier">
          <p className="bf-tier-head"><b>Tier 4</b><span>Commercial design systems</span></p>
          <p className="bf-tier-use">Convention: what people have already learned, not proof of effect</p>
          <ol className="bf-source-list">
            <li>Material Design (M1): Steppers</li>
            <li>IBM Carbon: Progress indicator</li>
            <li>Red Hat Design System: Progress steps</li>
            <li>Goldman Sachs Design System: Stepped progression</li>
          </ol>
        </div>
        <div className="bf-tier">
          <p className="bf-tier-head"><b>Tier 5</b><span>Practitioner articles</span></p>
          <p className="bf-tier-use">Ideas and examples only</p>
          <ol className="bf-source-list">
            <li>Smashing Newsletter #430: Progress steps UX</li>
            <li>Lyssna: Google HEART framework</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
