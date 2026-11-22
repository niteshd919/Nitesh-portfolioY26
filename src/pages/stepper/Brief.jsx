/*  STEP 02 · THE BRIEF — why a stepper, and the questions
*/
export default function Brief() {
  return (
    <section className="case-section bf-step" id="brief" data-step="" data-label="The brief" data-section="The brief" data-index="02">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">02</span>
        <span className="rule-title section-index-label">The brief</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Why</span>
      </div>
      <header className="bf-gate">
        <p className="bf-gate-charge" aria-hidden="true">
          <span className="bf-gate-num">14</span>
          <span className="bf-gate-unit">%</span>
        </p>
        <div className="bf-gate-copy">
          <h2 className="bf-gate-head">
            <span className="sr-only">Step 2 of 7, The brief: </span>{' '}
            <span className="bf-gate-level" aria-hidden="true">
              <span>Step 02 / 07</span>
              <i />
              <span>The brief</span>
            </span>{' '}
            <span className="bf-gate-title">A stepper turns one big task into small, finishable ones.</span>
          </h2>
          <p className="bf-gate-q">
            <span>Question</span>{' '}
            Should we build one at all, and what decides whether people finish?
          </p>
        </div>
        <div className="bf-strip" aria-hidden="true" />
      </header>
      <div className="bf-brief">
        <p className="case-copy-lg">
          Splitting a task is what helps people. Showing progress across the split helps only when that progress looks fast and honest.
        </p>
        <div className="bf-brief-side">
          <p className="case-copy">
            So I treated the stepper as two decisions: first whether to split a task at all, then how to show progress across it. This is phase one, desk research.
          </p>
        </div>
      </div>
      <aside className="case-subblock case-fineprint" aria-labelledby="bfFineprint">
        <p className="case-fineprint-tag"><span>Fine print</span><span>Actual range may vary</span></p>
        <div>
          <h3 className="case-fineprint-title" id="bfFineprint">
            Rated under typical conditions. Your road is your own.
          </h3>
          <p className="case-copy">
            Like any range figure, these recommendations come from research across many products and many people, and they hold up well. How far they take you depends on your users, your flow and your constraints. Treat them as a proven baseline: keep what fits, test what you doubt, and let your own numbers have the final word.
          </p>
          <ol className="case-fineprint-steps">
            <li><b>01</b>Keep what fits</li>
            <li><b>02</b>Test what you doubt</li>
            <li><b>03</b>Trust your own numbers</li>
          </ol>
        </div>
      </aside>
      <div className="case-subblock">
        <h3 className="case-subtitle">What the split does</h3>
        <div className="bf-split-row">
          <figure className="bf-splitfig" role="img" aria-label="Illustration: one long form of twelve fields beside the same fields split into four short screens of three, each headed Step 1 of 4 to Step 4 of 4 with a segmented bar that fills screen by screen.">
            <div className="bf-long" aria-hidden="true">
              <span className="bf-mock-cap">One long form</span>{' '}
              <div className="bf-long-sheet">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <b>Submit</b>
              </div>
            </div>{' '}
            <span className="bf-split-arrow" aria-hidden="true" />{' '}
            <ol className="bf-screens" aria-hidden="true">
              <li className="bf-scr">
                <span className="bf-scr-head">Step 1 of 4</span>
                <span className="bf-scr-bar"><i className="is-on" /><i /><i /><i /></span>
                <i className="bf-f" />
                <i className="bf-f" />
                <i className="bf-f" />
                <b>Continue</b>
              </li>
              <li className="bf-scr">
                <span className="bf-scr-head">Step 2 of 4</span>
                <span className="bf-scr-bar"><i className="is-on" /><i className="is-on" /><i /><i /></span>
                <i className="bf-f" />
                <i className="bf-f" />
                <i className="bf-f" />
                <b>Continue</b>
              </li>
              <li className="bf-scr">
                <span className="bf-scr-head">Step 3 of 4</span>
                <span className="bf-scr-bar">
                  <i className="is-on" />
                  <i className="is-on" />
                  <i className="is-on" />
                  <i />
                </span>
                <i className="bf-f" />
                <i className="bf-f" />
                <i className="bf-f" />
                <b>Continue</b>
              </li>
              <li className="bf-scr">
                <span className="bf-scr-head">Step 4 of 4</span>
                <span className="bf-scr-bar">
                  <i className="is-on" />
                  <i className="is-on" />
                  <i className="is-on" />
                  <i className="is-on" />
                </span>
                <i className="bf-f" />
                <i className="bf-f" />
                <i className="bf-f" />
                <b>Submit</b>
              </li>
            </ol>
          </figure>
          <ol className="bf-tiles">
            <li className="bf-tile">
              <span className="bf-code">Benefit 01</span>
              <h4>Looks finishable</h4>
              <p>A short screen looks small enough to finish.</p>
            </li>
            <li className="bf-tile">
              <span className="bf-code">Benefit 02</span>
              <h4>Fewer errors</h4>
              <p>Each step is checked as people go.</p>
            </li>
            <li className="bf-tile">
              <span className="bf-code">Benefit 03</span>
              <h4>Shortest path</h4>
              <p>Branching skips what doesn’t apply.</p>
            </li>
          </ol>
        </div>
        <p className="bf-note-line">
          <strong>Only when the split is real:</strong>{' '}
          three or more stages, a fixed order, one sitting.
        </p>
        <p className="bf-source">Sources: NN/g, Wizards; USWDS, Step indicator · Illustration is schematic</p>
      </div>
      <div className="case-subblock">
        <h3 className="case-subtitle">Four questions set the brief</h3>
        <ol className="bf-questions">
          <li className="bf-question">
            <span className="bf-code">Question 01</span>
            <p><b>Why:</b> does a stepper help?</p>
            <a className="bf-question-to" href="#evidence" data-cursor="Go">Step 04</a>
          </li>
          <li className="bf-question">
            <span className="bf-code">Question 02</span>
            <p><b>Expectations:</b> what must people know?</p>
            <a className="bf-question-to" href="#promises" data-cursor="Go">Step 05</a>
          </li>
          {/* Hidden with the use-case playbook. To restore: set the heading back to "Five questions", uncomment this, and renumber the next two to 04 and 05.
          <li className="bf-question">
            <span className="bf-code">Question 03</span>
            <p><b>Behaviour:</b> how does it change by use case?</p>
            <a className="bf-question-to" href="#proposal" data-cursor="Go">Step 06</a>
          </li>
          */}
          <li className="bf-question">
            <span className="bf-code">Question 03</span>
            <p><b>Platform:</b> phone to desktop?</p>
            <a className="bf-question-to" href="#proposal" data-cursor="Go">Step 06</a>
          </li>
          <li className="bf-question">
            <span className="bf-code">Question 04</span>
            <p><b>Results:</b> which metrics prove it?</p>
            <a className="bf-question-to" href="#proof" data-cursor="Go">Step 07</a>
          </li>
        </ol>
      </div>
    </section>
  );
}
