/*  CHARGED — the review step: how this page kept the five
    rules, and the reader's own session, measured per step.
*/
export default function Charged() {
  return (
    <section className="case-section bf-finale" id="charged" data-section="Charged" data-index="—">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">§</span>
        <span className="rule-title section-index-label">Charged</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Review</span>
      </div>
      <header className="bf-gate bf-finale-gate">
        <p className="bf-gate-charge" aria-hidden="true">
          <span className="bf-finale-num">100</span>
          <span className="bf-gate-unit">%</span>
        </p>
        <div className="bf-gate-copy">
          <h2 className="bf-gate-head">
            <span className="bf-gate-level bf-finale-state" aria-hidden="true">
              <span>Charged</span>
              <i />
              <span>Review</span>
            </span>{' '}
            <span className="bf-gate-title">This page was the prototype.</span>
          </h2>
          <p className="bf-gate-q bf-finale-q">Seven steps, built to the five rules. Here is how it kept each one.</p>
        </div>{' '}
        <span className="bf-fullline" aria-hidden="true" />
      </header>
      <ol className="bf-applied">
        <li className="bf-apply">
          <span className="bf-rule-no">1</span>
          <h3>Earn it</h3>
          <p>Seven meaningful steps, in a fixed order, read in one sitting. It passes all three checks.</p>
        </li>
        <li className="bf-apply">
          <span className="bf-rule-no">2</span>
          <h3>Keep promises</h3>
          <p>
            The rail showed the seven steps that exist, and its total never changed. Nothing new appeared at the end.
          </p>
        </li>
        <li className="bf-apply">
          <span className="bf-rule-no">3</span>
          <h3>Start fast</h3>
          <p>The shortest steps came first, and arriving counted as step one. You started at 14%.</p>
        </li>
        <li className="bf-apply">
          <span className="bf-rule-no">4</span>
          <h3>Back is always safe</h3>
          <p>
            Scrolling back never drained the charge, and every step stays a link. Leave now, and the charge is saved for next time.
          </p>
        </li>
        <li className="bf-apply">
          <span className="bf-rule-no">5</span>
          <h3>Accessible by construction</h3>
          <p>
            Every step heading says where you are, the tab title follows your step, and the rail is an ordered list that marks the current one. Nothing on it moves unless you do.
          </p>
        </li>
      </ol>
      <div className="bf-session" id="bfSession">
        <div className="bf-head-row">
          <span className="case-label">Your session · measured per step, on this device only</span>{' '}
          <h3 className="case-subtitle bf-session-title">Here is what this page logged</h3>
        </div>
        <dl className="bf-session-log">
          <div><dt>Charge</dt><dd><span className="bf-s-charge">—</span></dd></div>
          <div><dt>Time on the steps</dt><dd><span className="bf-s-time">—</span></dd></div>
          <div><dt>Completed</dt><dd><span className="bf-s-done">—</span></dd></div>
          <div><dt>Skipped</dt><dd><span className="bf-s-skip">—</span></dd></div>
          <div><dt>Back to earlier steps</dt><dd><span className="bf-s-back">—</span></dd></div>
        </dl>
        <ol className="bf-session-steps" aria-hidden="true" />
        <p className="bf-session-left" hidden />
        <p className="bf-session-foot">
          <span>Nothing here leaves your browser.</span>
          <button className="bf-reset" id="bfReset" type="button" data-cursor="Reset">Start over at 14%</button>
        </p>
      </div>
      <p className="case-closing">Earn the steps. Keep the promises. Start fast, and never lose anyone’s work.</p>
    </section>
  );
}
