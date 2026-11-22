/*  02 · A DOOR IN THE WALL — the bet: answer the price first.
    The same wall, with a door cut where the estimate goes.
*/
export default function Door() {
  return (
    <section className="case-section case-section-alt hm-ch" id="door" data-section="A door in the wall" data-index="02">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">02</span>
        <span className="rule-title section-index-label">A door in the wall</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">The bet</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">
          Answer “what will it cost?” first, and hiring a designer becomes a next step.
        </h2>
        <p className="case-section-intro">
          Homingly puts three things on one platform: curated products at fair prices, a renovation estimate in minutes, and vetted interior designers who guide the work. Designers get portfolios that find them projects. The estimate comes first.
        </p>
      </div>
      <figure className="hm-wallfig is-door" id="doorFig">
        <div className="hm-wf" aria-hidden="true">
          <p className="hm-wf-from">
            <span className="hm-wf-k">Want</span>
            <span className="hm-wf-v">A home that feels finished</span>
          </p>
          <div className="hm-wf-before">
            <span className="hm-wf-run"><i /></span>{' '}
            <span className="hm-wf-stop is-ask"><b>What will it cost?</b><small>Asked first</small></span>
          </div>{' '}
          <span className="hm-wf-wall">
            {' '}
            <span className="hm-wf-wall-label">The estimate</span>{' '}
            <svg className="hm-door" viewBox="0 0 100 100" focusable="false">
              <path className="hm-door-arc" d="M0 100 A100 100 0 0 0 100 0" pathLength="1" />
              <line className="hm-door-leaf" x1="0" y1="0" x2="0" y2="100" />
              <circle className="hm-door-hinge" cx="0" cy="0" r="3.2" />
            </svg>{' '}
          </span>{' '}
          <div className="hm-wf-after">
            <span className="hm-wf-run"><i /></span>{' '}
            <span className="hm-wf-stop"><b>Who fits?</b><small>Matched to the estimate</small></span>{' '}
            <span className="hm-wf-stop"><b>Book</b><small>A paid, refundable consult</small></span>
          </div>
          <p className="hm-wf-to">
            <span className="hm-wf-k">Through it</span>
            <span className="hm-wf-v">A designer who fits the budget</span>
          </p>
        </div>
        <p className="sr-only">
          Diagram: the same wall, now with a door. A single path runs from wanting a finished home through the question what will it cost, through a door labelled the estimate, to a designer matched to that estimate, and on to a booked consultation.
        </p>
        <figcaption className="hm-figcap">
          <span>Fig. 02</span>
          The design bet: the estimate is the door in the wall.
        </figcaption>
      </figure>
      <div className="hm-bet">
        <div className="hm-task">
          <span className="case-label">The task I designed</span>{' '}
          <ol className="hm-task-steps">
            <li><span className="hm-task-no">Step 1</span><b>Log in</b></li>
            <li><span className="hm-task-no">Step 2</span><b>Estimate the cost of redoing a living room</b></li>
            <li><span className="hm-task-no">Step 3</span><b>Choose a matching designer</b></li>
            <li><span className="hm-task-no">Step 4</span><b>Book and pay for a consultation</b></li>
          </ol>
        </div>
        <div className="hm-measures">
          <span className="case-label">How success is measured</span>{' '}
          <dl className="spec hm-measure-spec">
            <div className="spec-row"><dt>Success</dt><dd>A consultation booked and paid</dd></div>
            <div className="spec-row"><dt>Speed</dt><dd>Install to first estimate in under 3 minutes</dd></div>
            <div className="spec-row"><dt>Conversion</dt><dd>Estimate to booking</dd></div>
            <div className="spec-row"><dt>Sign-in</dt><dd>OTP verification success rate</dd></div>
            <div className="spec-row"><dt>Estimator</dt><dd>Drop-off at each step</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
