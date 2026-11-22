/*  STEP 06 · PROPOSAL — what to build, and where
*/
export default function Proposal() {
  return (
    <section className="case-section bf-step" id="proposal" data-step="" data-label="Proposal" data-section="Proposal" data-index="06">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">06</span>
        <span className="rule-title section-index-label">Proposal</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Design</span>
      </div>
      <header className="bf-gate">
        <p className="bf-gate-charge" aria-hidden="true">
          <span className="bf-gate-num">71</span>
          <span className="bf-gate-unit">%</span>
        </p>
        <div className="bf-gate-copy">
          <h2 className="bf-gate-head">
            <span className="sr-only">Step 6 of 7, Proposal: </span>{' '}
            <span className="bf-gate-level" aria-hidden="true">
              <span>Step 06 / 07</span>
              <i />
              <span>Proposal</span>
            </span>{' '}
            <span className="bf-gate-title">One adaptive stepper, used only where a task needs steps.</span>
          </h2>
          <p className="bf-gate-q"><span>Question</span> What should we build, and where does it belong?</p>
        </div>
        <div className="bf-strip" aria-hidden="true" />
      </header>
      <div className="bf-head-row">
        <span className="case-label">Earn it</span>{' '}
        <h3 className="case-subtitle">Three checks decide whether a flow gets a stepper</h3>
      </div>
      <figure className="bf-checks" aria-label="A decision path of three checks. Three or more meaningful stages? If not, a single page. Fixed order, done in one sitting? If not, a task-list hub. The same number of steps for everyone? If not, a progress bar only. A flow that passes all three uses the stepper.">
        <ol className="bf-check-path">
          <li className="bf-check">
            <div className="bf-check-q">
              <span className="bf-code">Check 01</span>
              <p>3 or more meaningful stages?</p>
              <span className="bf-check-yes" aria-hidden="true">Yes</span>
            </div>
            <div className="bf-check-no">
              <span className="bf-check-no-tag" aria-hidden="true">No</span>
              <b>Single page</b>
              <span>No stepper; a short form is enough</span>
            </div>
          </li>
          <li className="bf-check">
            <div className="bf-check-q">
              <span className="bf-code">Check 02</span>
              <p>Fixed order, done in one sitting?</p>
              <span className="bf-check-yes" aria-hidden="true">Yes</span>
            </div>
            <div className="bf-check-no">
              <span className="bf-check-no-tag" aria-hidden="true">No</span>
              <b>Task-list hub</b>
              <span>Each task a short linear flow</span>
            </div>
          </li>
          <li className="bf-check">
            <div className="bf-check-q">
              <span className="bf-code">Check 03</span>
              <p>Same number of steps for everyone?</p>
              <span className="bf-check-yes" aria-hidden="true">Yes</span>
            </div>
            <div className="bf-check-no">
              <span className="bf-check-no-tag" aria-hidden="true">No</span>
              <b>Progress bar only</b>
              <span>Or “Step 2 of about 7”</span>
            </div>
          </li>
          <li className="bf-check is-go">
            <div className="bf-check-q">
              <span className="bf-code">✓</span>
              <p>Use the stepper</p>
              <span className="bf-check-go">Up to 5 short steps: a labelled bar. Longer: a vertical side rail.</span>
            </div>
          </li>
        </ol>
      </figure>
      <p className="bf-note-line">
        <strong>Also a single page:</strong>{' '}
        experts who repeat a task often, and anyone who has to compare or copy data across steps.
      </p>
      <p className="bf-source">
        Synthesis of USWDS, IBM Carbon, GOV.UK, Material and Red Hat guidance; Nielsen Norman Group
      </p>
      <div className="case-subblock">
        <div className="bf-head-row">
          <span className="case-label">Adapt, don’t shrink</span>{' '}
          <h3 className="case-subtitle">The same step on a phone and on a desktop</h3>
        </div>
        <div className="bf-adapt">
          <figure className="bf-phone" role="img" aria-label="Illustration of the phone layout: a one-line header reading Step 3 of 5, Payment, over a five-part bar; the Payment details form; and a full-width Continue to extras button at the bottom, in thumb reach.">
            <div className="bf-phone-body" aria-hidden="true">
              <span className="bf-phone-head"><span>Step 3 of 5 · Payment</span><i className="bf-phone-list" /></span>{' '}
              <span className="bf-seg">
                <i className="is-on" />
                <i className="is-on" />
                <i className="is-now" />
                <i />
                <i />
              </span>{' '}
              <b className="bf-phone-h">Payment details</b>{' '}
              <span className="bf-field">Card number</span>{' '}
              <span className="bf-field">Expiry date</span>{' '}
              <span className="bf-phone-gap" />{' '}
              <span className="bf-btn">Continue to extras</span>
            </div>
            <figcaption><b>Phone</b> Current step only, in one line. The full list is a tap away.</figcaption>
          </figure>
          <figure className="bf-desk" role="img" aria-label="Illustration of the desktop layout: five labelled steps, Details and Address completed with checks, Payment current, Extras and Review to come; the Payment details form beside an order summary that shows the total on every step.">
            <div className="bf-desk-body" aria-hidden="true">
              <ol className="bf-hbar">
                <li className="is-done"><i /><span>Details</span></li>
                <li className="is-done"><i /><span>Address</span></li>
                <li className="is-now"><i /><span>Payment</span></li>
                <li><i /><span>Extras</span></li>
                <li><i /><span>Review</span></li>
              </ol>
              <div className="bf-desk-main">
                <div className="bf-desk-form">
                  <small>Step 3 of 5</small>{' '}
                  <b>Payment details</b>{' '}
                  <span className="bf-field">Card number</span>{' '}
                  <span className="bf-btn is-auto">Continue to extras</span>
                </div>
                <div className="bf-desk-sum">
                  <b>Order summary</b>
                  <span>Total shown on every step</span>
                  <span className="bf-sum-line" />
                  <span className="bf-sum-line is-short" />
                </div>
              </div>
            </div>
            <figcaption>
              <b>Desktop</b>{' '}
              Every step labelled, completed steps clickable, the extra width used for a summary.
            </figcaption>
          </figure>
        </div>
        <div className="case-table-wrap">
          <table className="case-table bf-table">
            <thead>
              <tr><th scope="col">Viewport</th><th scope="col">Indicator</th><th scope="col">Labels</th></tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Phone, under 600 px</th>
                <td data-label="Indicator">
                  One-line header: “Step X of Y”, the current label and a segmented bar. The full list in a bottom sheet.
                </td>
                <td data-label="Labels">Current step only</td>
              </tr>
              <tr>
                <th scope="row">Tablet, 600–1024 px</th>
                <td data-label="Indicator">
                  A labelled bar for five or fewer short steps, otherwise the one-line header
                </td>
                <td data-label="Labels">Up to 2 words, about 20 characters</td>
              </tr>
              <tr>
                <th scope="row">Desktop, up to 5 steps</th>
                <td data-label="Indicator">Horizontal labelled bar above a real page heading; may stick on scroll</td>
                <td data-label="Labels">Short label under each step</td>
              </tr>
              <tr>
                <th scope="row">Desktop, 6+ steps</th>
                <td data-label="Indicator">Vertical side rail that always shows every step and sub-step</td>
                <td data-label="Labels">Verb and noun; may wrap</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="bf-note-line">
          <strong>This page does the same:</strong>{' '}
          seven steps get a side rail on a wide screen, and the one-line header on a phone. The breakpoints are my proposal; the pattern changes come from the sources.
        </p>
        <p className="bf-source">
          Based on GOV.UK, Goldman Sachs, Red Hat and Material guidance · Mock-ups are illustrative
        </p>
      </div>
      <div className="case-subblock">
        <div className="bf-head-row">
          <span className="case-label">One component</span>{' '}
          <h3 className="case-subtitle">Four display modes, one state model</h3>
        </div>
        <ol className="bf-modes">
          <li className="bf-mode">
            <span className="bf-mode-fig is-h" aria-hidden="true">
              <i className="is-on" />
              <b className="is-on" />
              <i className="is-on" />
              <b />
              <i />
            </span>{' '}
            <span className="bf-code">Mode 01</span>
            <h4>Horizontal bar</h4>
            <p>Desktop and tablet, up to five short steps</p>
          </li>
          <li className="bf-mode">
            <span className="bf-mode-fig is-v" aria-hidden="true">
              <i className="is-on" />
              <b className="is-on" />
              <i className="is-on" />
              <b />
              <i />
            </span>{' '}
            <span className="bf-code">Mode 02</span>
            <h4>Vertical side rail</h4>
            <p>Desktop with six or more steps, long labels or sub-steps</p>
          </li>
          <li className="bf-mode">
            <span className="bf-mode-fig is-c" aria-hidden="true">
              <small>Step 3 of 5</small>
              <span className="bf-seg">
                <i className="is-on" />
                <i className="is-on" />
                <i className="is-now" />
                <i />
                <i />
              </span>
            </span>{' '}
            <span className="bf-code">Mode 03</span>
            <h4>Compact header</h4>
            <p>Every phone layout, any number of steps</p>
          </li>
          <li className="bf-mode">
            <span className="bf-mode-fig is-p" aria-hidden="true"><span className="bf-pbar"><i /></span></span>{' '}
            <span className="bf-code">Mode 04</span>
            <h4>Progress bar only</h4>
            <p>Flows whose number of steps can change</p>
          </li>
        </ol>
        <div className="bf-states-wrap">
          <span className="case-label">Seven step states, each in words and an icon, never colour alone</span>{' '}
          <ul className="bf-states">
            <li className="bf-state is-todo"><span className="bf-sico" aria-hidden="true" />Not started</li>
            <li className="bf-state is-now"><span className="bf-sico" aria-hidden="true" />Current</li>
            <li className="bf-state is-done"><span className="bf-sico" aria-hidden="true" />Completed</li>
            <li className="bf-state is-error"><span className="bf-sico" aria-hidden="true" />Error</li>
            <li className="bf-state is-optional"><span className="bf-sico" aria-hidden="true" />Optional</li>
            <li className="bf-state is-skipped"><span className="bf-sico" aria-hidden="true" />Skipped</li>
            <li className="bf-state is-locked"><span className="bf-sico" aria-hidden="true" />Locked</li>
          </ul>
          <p className="bf-note-line">
            <strong>Built in, not added per flow:</strong>{' '}
            autosave on every step, clickable completed steps, accessible markup and analytics events.
          </p>
        </div>
      </div>
      {/* Use-case playbook: hidden for now. Remove this comment wrapper to restore.
      <div className="case-subblock">
        <div className="bf-head-row">
          <span className="case-label">Use-case playbook</span>{' '}
          <h3 className="case-subtitle">Where each pattern fits</h3>
        </div>
        <div className="case-table-wrap">
          <table className="case-table bf-table">
            <thead>
              <tr><th scope="col">Use case</th><th scope="col">Pattern</th><th scope="col">Key behaviours</th></tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Checkout, 3–5 stages</th>
                <td data-label="Pattern">Labelled stepper on an enclosed page</td>
                <td data-label="Key behaviours">
                  Real steps mapped 1:1; completed steps clickable; a review step with Edit links and no surprise costs
                </td>
              </tr>
              <tr>
                <th scope="row">Onboarding, account setup</th>
                <td data-label="Pattern">Dots or a thin bar, few steps</td>
                <td data-label="Key behaviours">Sign-up counted as step one; optional steps labelled, with a skip</td>
              </tr>
              <tr>
                <th scope="row">Long application, KYC, loan</th>
                <td data-label="Pattern">Task-list hub; each task a short linear flow</td>
                <td data-label="Key behaviours">
                  Completed, In progress, Cannot start yet; save and resume; check answers before submitting
                </td>
              </tr>
              <tr>
                <th scope="row">Survey, questionnaire</th>
                <td data-label="Pattern">Section labels, or “Question 3 of 9”</td>
                <td data-label="Key behaviours">
                  Easy questions first, so early progress moves fast; the bar never stalls
                </td>
              </tr>
              <tr>
                <th scope="row">Product or plan configurator</th>
                <td data-label="Pattern">Tabs or non-linear steps with a live summary</td>
                <td data-label="Key behaviours">Shows which sections are done; the price stays in view</td>
              </tr>
              <tr>
                <th scope="row">Admin or enterprise setup</th>
                <td data-label="Pattern">Vertical stepper with verb-and-noun labels</td>
                <td data-label="Key behaviours">
                  Validate before moving on; save drafts; help beside the form, never over it
                </td>
              </tr>
              <tr>
                <th scope="row">Status tracking</th>
                <td data-label="Pattern">A read-only timeline, not an input stepper</td>
                <td data-label="Key behaviours">Each stage shows its date and owner; no Next or Back</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="bf-source">
          Sources: Baymard; Material; Nunes &amp; Drèze; GOV.UK task list; NN/g; Villar et al.; IBM Carbon. Status tracking is my recommendation.
        </p>
      </div>
      End use-case playbook
      */}
      <div className="case-subblock">
        <div className="bf-head-row">
          <span className="case-label">The bar for every design review</span>{' '}
          <h3 className="case-subtitle">Five rules the design is held to</h3>
        </div>
        <ol className="bf-rules">
          <li className="bf-rulecard">
            <span className="bf-rule-no">1</span>
            <h4>Earn it</h4>
            <p>Steps only for three or more meaningful stages; otherwise a single page.</p>
          </li>
          <li className="bf-rulecard">
            <span className="bf-rule-no">2</span>
            <h4>Keep promises</h4>
            <p>The real steps, a total that never jumps, and no surprises at review.</p>
          </li>
          <li className="bf-rulecard">
            <span className="bf-rule-no">3</span>
            <h4>Start fast</h4>
            <p>Easy steps first, and count work the person has already done.</p>
          </li>
          <li className="bf-rulecard">
            <span className="bf-rule-no">4</span>
            <h4>Back is always safe</h4>
            <p>Autosave every step; completed steps are clickable and lose nothing.</p>
          </li>
          <li className="bf-rulecard">
            <span className="bf-rule-no">5</span>
            <h4>Accessible by construction</h4>
            <p>Progress in the page title and heading, states in words, focus on each new step.</p>
          </li>
        </ol>
        <p className="bf-note-line">
          <strong>If a design breaks one of these, it gets challenged.</strong>{' '}
          Each rule traces back to the evidence in steps three to five.
        </p>
      </div>
    </section>
  );
}
