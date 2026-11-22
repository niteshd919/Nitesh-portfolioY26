/*  STEP 07 · PROOF — measure, instrument, decide
*/
export default function Proof() {
  return (
    <section className="case-section bf-step" id="proof" data-step="" data-label="Proof" data-section="Proof" data-index="07">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">07</span>
        <span className="rule-title section-index-label">Proof</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Measurement</span>
      </div>
      <header className="bf-gate">
        <p className="bf-gate-charge" aria-hidden="true">
          <span className="bf-gate-num">86</span>
          <span className="bf-gate-unit">%</span>
        </p>
        <div className="bf-gate-copy">
          <h2 className="bf-gate-head">
            <span className="sr-only">Step 7 of 7, Proof: </span>{' '}
            <span className="bf-gate-level" aria-hidden="true"><span>Step 07 / 07</span><i /><span>Proof</span></span>{' '}
            <span className="bf-gate-title">Judge it per step, not only end to end.</span>
          </h2>
          <p className="bf-gate-q"><span>Question</span> How will we know it works, and what happens next?</p>
        </div>
        <div className="bf-strip" aria-hidden="true" />
      </header>
      <div className="bf-head-row">
        <span className="case-label">Task success and happiness</span>{' '}
        <h3 className="case-subtitle">Every metric names the levers that move it</h3>
      </div>
      <div className="case-table-wrap">
        <table className="case-table bf-table">
          <thead>
            <tr><th scope="col">Metric</th><th scope="col">What it tells us</th><th scope="col">Design levers</th></tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Flow completion</th>
              <td data-label="What it tells us">Can people finish the whole task?</td>
              <td data-label="Design levers">Fewer fields per step; easy steps first; save and resume</td>
            </tr>
            <tr>
              <th scope="row">Drop-off by step</th>
              <td data-label="What it tells us">Which step to fix first</td>
              <td data-label="Design levers">Split or lighten the worst step; move heavy steps later</td>
            </tr>
            <tr>
              <th scope="row">Time to complete</th>
              <td data-label="What it tells us">Median time per step, and in total</td>
              <td data-label="Design levers">Autofill, smart defaults, fewer screens</td>
            </tr>
            <tr>
              <th scope="row">Errors per step</th>
              <td data-label="What it tells us">Where fields confuse people</td>
              <td data-label="Design levers">Inline validation; specific messages; never clear input</td>
            </tr>
            <tr>
              <th scope="row">Back-navigation</th>
              <td data-label="What it tells us">Where labels or surprises mislead</td>
              <td data-label="Design levers">Clearer labels; summaries; Edit links on review</td>
            </tr>
            <tr>
              <th scope="row">Taps on the indicator</th>
              <td data-label="What it tells us">Whether it looks clickable where it isn’t</td>
              <td data-label="Design levers">Make completed steps clickable; remove the look elsewhere</td>
            </tr>
            <tr>
              <th scope="row">Resume rate</th>
              <td data-label="What it tells us">Whether saved flows come back within 7 days</td>
              <td data-label="Design levers">Save state; a task-list hub on return; a reminder</td>
            </tr>
            <tr>
              <th scope="row">Perceived ease (SEQ)</th>
              <td data-label="What it tells us">How hard it felt, against an average of about 5.5 out of 7</td>
              <td data-label="Design levers">Everything above; ask why for any rating under 5</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="bf-note-line">
        <strong>Targets come from a two-week baseline.</strong>{' '}
        The metrics cover two categories of Google’s HEART framework, task success and happiness, plus retention for flows that take more than one session.
      </p>
      <p className="bf-source">Sources: MeasuringU, Single Ease Question; Lyssna, Google HEART framework</p>
      {/*
      <div className="case-subblock bf-duo bf-duo--log">
        <div>
          <div className="bf-head-row">
            <span className="case-label">Instrumented from day one</span>{' '}
            <h3 className="case-subtitle">Events ship inside the component</h3>
          </div>
          <p className="case-copy">
            Analytics are part of the component, not added flow by flow, so every flow can be compared step by step from its first release.
          </p>
          <p className="bf-rule">
            <span>On this page</span>
            It logs the same kind of events for you, on your device only, and shows them at the end.
          </p>
        </div>
        <figure className="bf-log" role="img" aria-label="The instrumentation spec: eight events. flow_started when step one is first shown; step_viewed when any step is shown; step_completed when a step is passed; step_error when a validation or server error shows; step_back when someone returns to an earlier step, with the method; stepper_tap when the indicator is tapped; flow_saved and flow_resumed for save and resume; flow_submitted on the final submit.">
          <div className="bf-log-bar" aria-hidden="true"><span>Events</span><span>8</span></div>
          <ol className="bf-log-list" aria-hidden="true">
            <li>
              <code>flow_started</code>
              <span>Step 1 is first shown</span>
              <small>flow_id · entry_point · viewport · returning_user</small>
            </li>
            <li>
              <code>step_viewed</code>
              <span>Any step is shown</span>
              <small>step_id · step_index · total_steps · stepper_variant</small>
            </li>
            <li>
              <code>step_completed</code>
              <span>A step is passed</span>
              <small>step_id · duration_ms · error_count · fields_autofilled</small>
            </li>
            <li className="is-warn">
              <code>step_error</code>
              <span>A validation or server error shows</span>
              <small>step_id · field_id · error_type</small>
            </li>
            <li>
              <code>step_back</code>
              <span>Someone returns to an earlier step</span>
              <small>from_step · to_step · method</small>
            </li>
            <li>
              <code>stepper_tap</code>
              <span>The indicator is tapped or clicked</span>
              <small>target_step · target_state · was_clickable</small>
            </li>
            <li>
              <code>flow_saved / flow_resumed</code>
              <span>Progress is saved, or a saved flow reopens</span>
              <small>step_id · hours_since_save</small>
            </li>
            <li>
              <code>flow_submitted</code>
              <span>The final submit succeeds</span>
              <small>total_duration_ms · total_errors · steps_skipped</small>
            </li>
          </ol>
        </figure>
      </div>
      */}
      <div className="case-subblock">
        <div className="bf-head-row">
          <span className="case-label">Experiment backlog</span>{' '}
          <h3 className="case-subtitle">First experiments, highest expected impact first</h3>
        </div>
        <ol className="bf-tests">
          <li>
            <span className="bf-code">Experiment 01</span>
            <p><b>Easy steps first</b> against the current order. Tests the early-progress effect.</p>
          </li>
          <li>
            <span className="bf-code">Experiment 02</span>
            <p><b>Indicator or none</b> on short flows, as GOV.UK advises.</p>
          </li>
          <li>
            <span className="bf-code">Experiment 03</span>
            <p><b>Compact header</b> against a full horizontal bar, on phones.</p>
          </li>
          <li>
            <span className="bf-code">Experiment 04</span>
            <p><b>“Continue to payment”</b> against a bare “Next”.</p>
          </li>
          <li>
            <span className="bf-code">Experiment 05</span>
            <p><b>Clickable completed steps</b> against static ones.</p>
          </li>
          <li>
            <span className="bf-code">Experiment 06</span>
            <p><b>An endowed start,</b> sign-up shown as step one done, against a blank start.</p>
          </li>
        </ol>
        <p className="bf-warn">
          <strong>Guardrails for every test:</strong>{' '}
          downstream errors or rejections, such as failed KYC checks, support contacts and the accessibility pass rate must not get worse. For low-traffic flows, run 5–8 moderated sessions per round with SEQ instead of an A/B test.
        </p>
      </div>
      <div className="case-subblock">
        <div className="bf-head-row">
          <span className="case-label">Accessible by construction</span>{' '}
          <h3 className="case-subtitle">It works without sight, colour or a pointer</h3>
        </div>
        <ol className="bf-a11y">
          <li>
            <b>Progress in the page title</b>
            <code>Step 2 of 4: Shipping address – Checkout</code>
            <small>W3C WAI</small>
          </li>
          <li>
            <b>Progress in the heading</b>
            <span>A real heading under the indicator, with the step in it</span>
            <small>W3C WAI · USWDS</small>
          </li>
          <li>
            <b>An ordered list of steps</b>
            <span>Completed steps are links; the current one carries aria-current</span>
            <small>W3C WAI · USWDS</small>
          </li>
          <li>
            <b>State in words</b>
            <span>Hidden “Completed”, “Current”, “Not completed”, never colour or an icon alone</span>
            <small>WCAG 1.4.1</small>
          </li>
          <li>
            <b>Focus follows the step</b>
            <span>On a step change, focus moves to the new heading; on an error, to the summary</span>
            <small>My recommendation</small>
          </li>
          <li>
            <b>Targets of 24 px or more</b>
            <span>Every tappable step, at least 24 × 24 CSS pixels</span>
            <small>WCAG 2.5.8</small>
          </li>
          <li>
            <b>No progress that moves by itself</b>
            <span>Style a native progress bar static</span>
            <small>WCAG 2.2.2</small>
          </li>
          <li>
            <b>Readable pending steps</b>
            <span>Steps to come keep their contrast and never look disabled</span>
            <small>WCAG 1.4.3 · 1.4.11</small>
          </li>
        </ol>
        <p className="bf-note-line">
          <strong>Test plan:</strong>{' '}
          a keyboard-only pass, VoiceOver and TalkBack, 200% zoom and 320 px reflow, and at least two people who use assistive technology in every usability round.
        </p>
      </div>
      <div className="case-subblock">
        <div className="bf-head-row">
          <span className="case-label">The ask</span>{' '}
          <h3 className="case-subtitle">Three decisions, then the road</h3>
        </div>
        <ol className="bf-decisions">
          <li className="bf-decision">
            <span className="bf-decision-no">1</span>
            <h4>Approve the direction</h4>
            <p>One adaptive stepper component, plus a task-list hub for long flows that take more than one session.</p>
          </li>
          <li className="bf-decision">
            <span className="bf-decision-no">2</span>
            <h4>Pick the first two flows</h4>
            <p>And confirm each one’s number of steps, and whether answers can change it.</p>
          </li>
          <li className="bf-decision">
            <span className="bf-decision-no">3</span>
            <h4>Fund user validation</h4>
            <p>Two rounds of 5–8 moderated sessions, plus baseline funnel data for the current flows.</p>
          </li>
        </ol>
        <figure className="bf-road" aria-label="The road after the decisions, drawn as the proposed stepper: one, design the component, current; two, prototype; three, test with users; four, an instrumented pilot; five, roll out.">
          <ol className="bf-hbar is-road">
            <li className="is-now"><i aria-hidden="true" /><span>Design the component</span></li>
            <li><i aria-hidden="true" /><span>Prototype</span></li>
            <li><i aria-hidden="true" /><span>Test with users</span></li>
            <li><i aria-hidden="true" /><span>Instrumented pilot</span></li>
            <li><i aria-hidden="true" /><span>Roll out</span></li>
          </ol>
          <figcaption className="bf-small">The road ahead, drawn with the component it proposes</figcaption>
        </figure>
        <div className="bf-open">
          <span className="case-label">Open questions for the design phase</span>{' '}
          <ul className="case-bullets">
            <li>Which flows get the stepper first, and how many stages does each have?</li>
            <li>Can any flow branch so that its total changes? That decides a fixed count or a progress bar.</li>
            <li>Web, native apps or both? That decides the system Back gesture and the bottom sheet.</li>
            <li>Is there a design system and a token set to extend?</li>
            <li>Is baseline funnel data available for the current flows?</li>
            <li>Do security or session time-out rules limit save and resume?</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
