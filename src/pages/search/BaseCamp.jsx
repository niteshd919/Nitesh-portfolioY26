/*  STAGE 00 · BASE CAMP — the brief, the route and the method
*/
export default function BaseCamp() {
  return (
    <section className="case-section fq-stage" id="basecamp" data-stage="" data-elev="0" data-section="Base camp" data-index="00">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">00</span>
        <span className="rule-title section-index-label">Base camp</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Ground zero</span>
      </div>
      <header className="fq-gate">
        <p className="fq-gate-alt">
          <span className="fq-gate-num">0000</span>
          <span className="fq-gate-unit">m</span>
          <span className="sr-only"> elevation</span>
        </p>
        <div className="fq-gate-copy">
          <p className="fq-gate-level"><span>Stage 00 / 08</span><i aria-hidden="true" /><span>The brief</span></p>
          <h2 className="fq-gate-title">Search is where users tell you exactly what they want.</h2>
          <p className="fq-gate-q">
            <span>Question</span>{' '}
            Why do so many apps still get it wrong, and what would getting it right take?
          </p>
        </div>
        <div className="fq-track" aria-hidden="true" />
      </header>
      <div className="fq-brief">
        <p className="case-copy-lg">
          It is the one place in an app where people say, in their own words, what they came for. It is also where most apps let them down.
        </p>
        <div className="fq-brief-side">
          <p className="case-copy">
            I set out to find out why, and to turn the evidence into a playbook a product team can build from. It starts at a plain search box and ends with an AI assistant that answers back, across ecommerce, fintech, healthtech and the car.
          </p>
          <p className="case-copy">
            Every number on this page names its source. The full reasoning, decision log and confidence ratings live in the research document.
          </p>
        </div>
      </div>
      <aside className="case-subblock case-fineprint" aria-labelledby="fqFineprint">
        <p className="case-fineprint-tag"><span>Field note</span><span>Conditions vary</span></p>
        <div>
          <h3 className="case-fineprint-title" id="fqFineprint">A well-mapped route, not the only way up.</h3>
          <p className="case-copy">
            This playbook distils published research into practice that holds for most products, most of the time. Your users, your domain and your data are ground no study has walked for you. Climb with it as your map, read the terrain as you go, and adjust the line wherever your ground asks for it.
          </p>
          <ol className="case-fineprint-steps">
            <li><b>01</b>Start from the evidence</li>
            <li><b>02</b>Test with your users</li>
            <li><b>03</b>Let your data decide</li>
          </ol>
        </div>
      </aside>
      <div className="case-subblock">
        <h3 className="case-subtitle">Five questions set the route</h3>
        <ol className="fq-questions">
          <li className="fq-question">
            <span className="fq-question-no">Question 01</span>
            <p>Why does search matter so much?</p>
            <a className="fq-question-to" href="#why" data-cursor="Go">Stage 01</a>
          </li>
          <li className="fq-question">
            <span className="fq-question-no">Question 02</span>
            <p>What do users expect from it?</p>
            <a className="fq-question-to" href="#expect" data-cursor="Go">Stage 02</a>
          </li>
          <li className="fq-question">
            <span className="fq-question-no">Question 03</span>
            <p>How does it change by domain?</p>
            <a className="fq-question-to" href="#stakes" data-cursor="Go">Stages 04–06</a>
          </li>
          <li className="fq-question">
            <span className="fq-question-no">Question 04</span>
            <p>How should we build it?</p>
            <a className="fq-question-to" href="#anatomy" data-cursor="Go">Stages 03 + 07</a>
          </li>
          <li className="fq-question">
            <span className="fq-question-no">Question 05</span>
            <p>How do we know it works?</p>
            <a className="fq-question-to" href="#measure" data-cursor="Go">Stage 07</a>
          </li>
        </ol>
      </div>
      <div className="case-subblock fq-method">
        <div>
          <h3 className="case-subtitle">The method</h3>
          <ol className="fq-steps">
            <li className="fq-step">
              <span>01</span>
              <p>Framed five questions: why, expectations, domains, build and measure.</p>
            </li>
            <li className="fq-step">
              <span>02</span>
              <p>Started from behaviour: what people type and where they fail.</p>
            </li>
            <li className="fq-step">
              <span>03</span>
              <p>Graded every source before letting it shape a recommendation.</p>
            </li>
            <li className="fq-step"><span>04</span><p>Found what never changes, then what varies by domain.</p></li>
            <li className="fq-step">
              <span>05</span>
              <p>Tied each recommendation to a metric, so it can be tested.</p>
            </li>
          </ol>
        </div>
        <div>
          <h3 className="case-subtitle">Evidence, graded</h3>
          <ol className="fq-grades">
            <li className="fq-grade">
              <b>A</b>
              <p>
                <strong>Usability research and peer-reviewed studies</strong>{' '}
                set the guidelines: Baymard, NN/g, JMIR, Kaiser Permanente.
              </p>
            </li>
            <li className="fq-grade">
              <b>B</b>
              <p>
                <strong>Surveys, regulators and standards</strong>{' '}
                size the problem: Google / Harris, HHS, NHTSA, W3C.
              </p>
            </li>
            <li className="fq-grade">
              <b>C</b>
              <p>
                <strong>Practitioner studies and product docs</strong>{' '}
                give direction: the AI summaries study, Revolut, Visa.
              </p>
            </li>
            <li className="fq-grade is-out">
              <b>D</b>
              <p>
                <strong>Recycled vendor statistics</strong>{' '}
                such as “searchers convert 2–3x” were left out: their methods can’t be traced.
              </p>
              <span className="fq-stamp">Excluded</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="case-subblock fq-lens">
        <span className="case-label">One lens, applied to every domain</span>{' '}
        <ol className="fq-lens-list">
          <li><span>Lens 01</span>What does the user call it?</li>
          <li><span>Lens 02</span>What does a wrong result cost?</li>
          <li><span>Lens 03</span>What must never leak?</li>
        </ol>
      </div>
    </section>
  );
}
