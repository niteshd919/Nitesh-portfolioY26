/*  STEP 05 · PROMISES — what it signifies, what breaks it
*/
export default function Promises() {
  return (
    <section className="case-section bf-step" id="promises" data-step="" data-label="Promises" data-section="Promises" data-index="05">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">05</span>
        <span className="rule-title section-index-label">Promises</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Trust</span>
      </div>
      <header className="bf-gate">
        <p className="bf-gate-charge" aria-hidden="true">
          <span className="bf-gate-num">57</span>
          <span className="bf-gate-unit">%</span>
        </p>
        <div className="bf-gate-copy">
          <h2 className="bf-gate-head">
            <span className="sr-only">Step 5 of 7, Promises: </span>{' '}
            <span className="bf-gate-level" aria-hidden="true">
              <span>Step 05 / 07</span>
              <i />
              <span>Promises</span>
            </span>{' '}
            <span className="bf-gate-title">A stepper makes four promises. Breaking one costs trust.</span>
          </h2>
          <p className="bf-gate-q">
            <span>Question</span>{' '}
            What do people expect it to tell them, and what breaks their trust?
          </p>
        </div>
        <div className="bf-strip" aria-hidden="true" />
      </header>
      <ol className="bf-promises">
        <li className="bf-promise">
          <span className="bf-code">Promise 01</span>
          <h3>The task has edges</h3>
          <p>It’s finite, and this is how big it is.</p>
        </li>
        <li className="bf-promise">
          <span className="bf-code">Promise 02</span>
          <h3>The order is decided</h3>
          <p>Just do the next thing: a relief for novices, a constraint for experts.</p>
        </li>
        <li className="bf-promise">
          <span className="bf-code">Promise 03</span>
          <h3>Your progress counts</h3>
          <p>What you’ve done is kept, and going back costs nothing.</p>
        </li>
        <li className="bf-promise">
          <span className="bf-code">Promise 04</span>
          <h3>No surprises ahead</h3>
          <p>The steps shown are the steps that exist.</p>
        </li>
      </ol>
      <div className="case-subblock">
        <div className="bf-head-row">
          <span className="case-label">Three ways to break one</span>{' '}
          <h3 className="case-subtitle">Most stepper failures start with a broken promise.</h3>
        </div>
        <ol className="bf-broken">
          <li className="bf-break" data-break="total">
            <figure className="bf-mock" role="img" aria-label="Illustration: a header reading Step 3 of 5 jumps to Step 4 of 8.">
              <div className="bf-mock-in" aria-hidden="true">
                <p className="bf-jump">
                  <span className="bf-jump-a">Step 3 of 5</span>
                  <span className="bf-jump-b">Step 4 of 8</span>
                </p>{' '}
                <span className="bf-jump-bar">
                  <i className="is-on" />
                  <i className="is-on" />
                  <i className="is-on" />
                  <i />
                  <i />
                  <i className="is-extra" />
                  <i className="is-extra" />
                  <i className="is-extra" />
                </span>
              </div>
            </figure>{' '}
            <span className="bf-code">Failure 01</span>
            <h4>A total that jumps</h4>
            <p>It breaks the effort estimate people have just made.</p>
          </li>
          <li className="bf-break" data-break="back">
            <figure className="bf-mock" role="img" aria-label="Illustration: after pressing Back, a filled card-number field comes back empty.">
              <div className="bf-mock-in" aria-hidden="true">
                <span className="bf-back-btn">← Back</span>{' '}
                <span className="bf-back-label">Card number</span>{' '}
                <span className="bf-back-field">
                  <span className="bf-back-val">•••• •••• •••• 4821</span>
                  <i className="bf-back-caret" />
                </span>
              </div>
            </figure>{' '}
            <span className="bf-code">Failure 02</span>
            <h4>A Back that loses data</h4>
            <p>Re-entry fatigue, then abandonment.</p>
          </li>
          <li className="bf-break" data-break="fee">
            <figure className="bf-mock" role="img" aria-label="Illustration: on the review step a service fee of ₹250 appears, and the total rises from ₹2,400 to ₹2,650.">
              <div className="bf-mock-in" aria-hidden="true">
                <span className="bf-fee-head">Review</span>{' '}
                <span className="bf-fee-row"><span>Order</span><span>₹2,400</span></span>{' '}
                <span className="bf-fee-row is-new"><span>Service fee</span><span>+ ₹250</span></span>{' '}
                <span className="bf-fee-row is-total"><span>Total</span><span><s>₹2,400</s> <b>₹2,650</b></span></span>
              </div>
            </figure>{' '}
            <span className="bf-code">Failure 03</span>
            <h4>A fee at review</h4>
            <p>It destroys trust at the moment of commitment.</p>
          </li>
        </ol>
        <p className="bf-note-line">
          <strong>EV drivers have a word for this:</strong>{' '}
          a range estimate that keeps jumping is a guess-o-meter, and nobody plans a trip on one. A step total that jumps is the same failure.
        </p>
        <p className="bf-source">
          Sources: Baymard Institute, Checkout UX; GOV.UK Design System; U.S. Web Design System · Mock-ups are illustrative
        </p>
      </div>
      <div className="case-subblock">
        <div className="bf-head-row">
          <span className="case-label">What people expect</span>{' '}
          <h3 className="case-subtitle">Eight questions it answers without being asked</h3>
        </div>
        <ol className="bf-asks">
          <li className="bf-ask">
            <span className="bf-code">Expectation 01</span>
            <h4>How long will this take?</h4>
            <p>State the number of steps, and the time if known, on the first screen.</p>
            <small>W3C WAI</small>
          </li>
          <li className="bf-ask">
            <span className="bf-code">Expectation 02</span>
            <h4>Where am I?</h4>
            <p>The current step is the most prominent, with “Step 3 of 5” beside a real heading.</p>
            <small>USWDS</small>
          </li>
          <li className="bf-ask">
            <span className="bf-code">Expectation 03</span>
            <h4>What have I done?</h4>
            <p>Completed steps show a check; finished sections collapse into readable summaries.</p>
            <small>Carbon · Baymard</small>
          </li>
          <li className="bf-ask">
            <span className="bf-code">Expectation 04</span>
            <h4>What happens next?</h4>
            <p>The button names where it goes: “Continue to payment”, not a bare “Next”.</p>
            <small>Baymard · NN/g</small>
          </li>
          <li className="bf-ask">
            <span className="bf-code">Expectation 05</span>
            <h4>Can I go back safely?</h4>
            <p>A visible Back, a working browser Back, every input kept, completed steps clickable.</p>
            <small>GOV.UK · Baymard</small>
          </li>
          <li className="bf-ask">
            <span className="bf-code">Expectation 06</span>
            <h4>Is something wrong?</h4>
            <p>An error state on the step, plus inline field errors that say how to fix them.</p>
            <small>Carbon</small>
          </li>
          <li className="bf-ask">
            <span className="bf-code">Expectation 07</span>
            <h4>Can I stop and come back?</h4>
            <p>Save each step, and resume at the same one.</p>
            <small>NN/g</small>
          </li>
          <li className="bf-ask">
            <span className="bf-code">Expectation 08</span>
            <h4>Do I have to do this?</h4>
            <p>Label optional steps, and offer a skip.</p>
            <small>Material · W3C WAI</small>
          </li>
        </ol>
      </div>
      <div className="case-subblock">
        <div className="bf-head-row">
          <span className="case-label">How people use it</span>{' '}
          <h3 className="case-subtitle">Four ways people use a stepper</h3>
        </div>
        <div className="case-panel-grid bf-uses" style={{ '--cols': '4' }}>
          <div className="case-panel">
            <span className="case-panel-index">Use 01</span>
            <h3>As navigation</h3>
            <p>
              They click completed steps to go back, even where that isn’t built. If it looks clickable, it must be.
            </p>
          </div>
          <div className="case-panel">
            <span className="case-panel-index">Use 02</span>
            <h3>As a progress check</h3>
            <p>They glance at it after every Continue to confirm they moved. A total that changes breaks trust.</p>
          </div>
          <div className="case-panel">
            <span className="case-panel-index">Use 03</span>
            <h3>Barely, on phones</h3>
            <p>
              Full horizontal bars often go unnoticed on small screens. A one-line “Step 3 of 5 · Payment” header works better.
            </p>
          </div>
          <div className="case-panel">
            <span className="case-panel-index">Use 04</span>
            <h3>By ear</h3>
            <p>Screen reader users never see the graphic. Progress belongs in the page title and the heading.</p>
          </div>
        </div>
        <p className="bf-source">Sources: Baymard Institute; U.S. Web Design System; GOV.UK; Red Hat; W3C WAI</p>
      </div>
    </section>
  );
}
