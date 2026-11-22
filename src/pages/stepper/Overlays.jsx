/* The charge glow, the phone header + bottom sheet, and the wide-screen side rail (case-stepper.js).
*/
export default function Overlays() {
  return (
    <>
      <div className="bf-glow" id="bfGlow" aria-hidden="true" />
      <div className="bf-head" id="bfHead">
        <button className="bf-head-btn" id="bfHeadBtn" type="button" aria-expanded="false" aria-controls="bfRail">
          {' '}
          <span className="bf-head-step">
            <span className="bf-head-count">Step <b>1</b> of 7</span>
            <span className="bf-head-name">Plugged in</span>
          </span>{' '}
          <span className="bf-head-pct"><b>14</b>%<span className="sr-only"> charged.</span></span>{' '}
          <span className="sr-only">Show all steps</span>{' '}
          <span className="bf-head-chev" aria-hidden="true" />{' '}
        </button>{' '}
        <span className="bf-head-bar bf-cells" aria-hidden="true">
          <i><b /></i>
          <i><b /></i>
          <i><b /></i>
          <i><b /></i>
          <i><b /></i>
          <i><b /></i>
          <i><b /></i>
        </span>
      </div>
      <div className="bf-scrim" id="bfScrim" aria-hidden="true" />
      <nav className="bf-rail" id="bfRail" aria-label="Your progress through this case study">
        <div className="bf-rail-head">
          <span className="bf-pack" aria-hidden="true"><i className="bf-pack-fill" /></span>{' '}
          <p className="bf-rail-pct"><b>14</b>%<span className="sr-only"> charged</span></p>
          <p className="bf-rail-label" aria-hidden="true">Charge</p>{' '}
          <button className="bf-rail-close" id="bfRailClose" type="button">Close</button>
        </div>
        <ol className="bf-rsteps">
          <li className="bf-rstep is-done">
            <a href="#top" data-cursor="Go">
              <span className="bf-rstep-cell" aria-hidden="true"><i /></span>
              <span className="bf-rstep-state sr-only">Completed: </span>
              <span className="bf-rstep-name">Plugged in</span>
              <span className="bf-rstep-mark" aria-hidden="true" />
            </a>
          </li>
          <li className="bf-rstep">
            <a href="#brief" data-cursor="Go">
              <span className="bf-rstep-cell" aria-hidden="true"><i /></span>
              <span className="bf-rstep-state sr-only">Not started: </span>
              <span className="bf-rstep-name">The brief</span>
              <span className="bf-rstep-mark" aria-hidden="true" />
            </a>
          </li>
          <li className="bf-rstep">
            <a href="#perception" data-cursor="Go">
              <span className="bf-rstep-cell" aria-hidden="true"><i /></span>
              <span className="bf-rstep-state sr-only">Not started: </span>
              <span className="bf-rstep-name">Perception</span>
              <span className="bf-rstep-mark" aria-hidden="true" />
            </a>
          </li>
          <li className="bf-rstep">
            <a href="#evidence" data-cursor="Go">
              <span className="bf-rstep-cell" aria-hidden="true"><i /></span>
              <span className="bf-rstep-state sr-only">Not started: </span>
              <span className="bf-rstep-name">Evidence</span>
              <span className="bf-rstep-mark" aria-hidden="true" />
            </a>
          </li>
          <li className="bf-rstep">
            <a href="#promises" data-cursor="Go">
              <span className="bf-rstep-cell" aria-hidden="true"><i /></span>
              <span className="bf-rstep-state sr-only">Not started: </span>
              <span className="bf-rstep-name">Promises</span>
              <span className="bf-rstep-mark" aria-hidden="true" />
            </a>
          </li>
          <li className="bf-rstep">
            <a href="#proposal" data-cursor="Go">
              <span className="bf-rstep-cell" aria-hidden="true"><i /></span>
              <span className="bf-rstep-state sr-only">Not started: </span>
              <span className="bf-rstep-name">Proposal</span>
              <span className="bf-rstep-mark" aria-hidden="true" />
            </a>
          </li>
          <li className="bf-rstep">
            <a href="#proof" data-cursor="Go">
              <span className="bf-rstep-cell" aria-hidden="true"><i /></span>
              <span className="bf-rstep-state sr-only">Not started: </span>
              <span className="bf-rstep-name">Proof</span>
              <span className="bf-rstep-mark" aria-hidden="true" />
            </a>
          </li>
        </ol>
        <div className="bf-rail-foot">
          <p className="bf-rail-eta"><b>—</b> to full</p>
          <p className="bf-rail-saved" aria-hidden="true">Saved</p>
        </div>
      </nav>
    </>
  );
}
