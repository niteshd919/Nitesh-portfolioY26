/*  STEP 04 · EVIDENCE — what the experiments say
*/
export default function Evidence() {
  return (
    <section className="case-section bf-step" id="evidence" data-step="" data-label="Evidence" data-section="Evidence" data-index="04">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">04</span>
        <span className="rule-title section-index-label">Evidence</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Experiments</span>
      </div>
      <header className="bf-gate">
        <p className="bf-gate-charge" aria-hidden="true">
          <span className="bf-gate-num">43</span>
          <span className="bf-gate-unit">%</span>
        </p>
        <div className="bf-gate-copy">
          <h2 className="bf-gate-head">
            <span className="sr-only">Step 4 of 7, Evidence: </span>{' '}
            <span className="bf-gate-level" aria-hidden="true">
              <span>Step 04 / 07</span>
              <i />
              <span>Evidence</span>
            </span>{' '}
            <span className="bf-gate-title">A progress bar alone doesn’t cut drop-off. A slow start raises it.</span>
          </h2>
          <p className="bf-gate-q"><span>Question</span> Does showing progress actually help people finish?</p>
        </div>
        <div className="bf-strip" aria-hidden="true" />
      </header>
      <p className="case-section-intro bf-intro">
        In one survey experiment, the same questionnaire ran with four kinds of bar: one that raced ahead early and slowed later, one that moved at the true pace, one that crawled early and caught up at the end, and none at all. People saw the same questions. Only the bar changed, and so did how many of them quit.
      </p>
      <div className="bf-evidence">
        <figure className="bf-four" role="img" aria-label="Break-off rate in one survey experiment, by how fast the progress bar moved early on. Fast then slow, about 65% shown after ten questions: just over 11%. No indicator: just under 13%. Linear at the true pace, about 25% shown: about 14%. Slow then fast, about 5% shown: nearly 22%.">
          <figcaption className="case-label">Break-off rate, by how fast the bar moved early on</figcaption>
          <div className="bf-four-top" aria-hidden="true">
            <p className="bf-four-clock">
              <span>Question</span>
              <b className="bf-four-q">10</b>
              <span>Progress shown so far</span>
            </p>
            <p className="bf-four-col">Break-off</p>
          </div>
          <ol className="bf-four-rows" aria-hidden="true">
            <li className="bf-four-row is-best" style={{ '--v': '65' }} data-ease="fast">
              <span className="bf-four-key">Fast, then slow</span>
              <span className="bf-bat"><i /><em>65%</em></span>
              <span className="bf-four-val"><small>just over</small><b>11</b><small>%</small></span>
            </li>
            <li className="bf-four-row is-none" style={{ '--v': '0' }}>
              <span className="bf-four-key">No indicator</span>
              <span className="bf-bat"><em>No bar</em></span>
              <span className="bf-four-val"><small>just under</small><b>13</b><small>%</small></span>
            </li>
            <li className="bf-four-row" style={{ '--v': '25' }} data-ease="linear">
              <span className="bf-four-key">Linear, true pace</span>
              <span className="bf-bat"><i /><em>25%</em></span>
              <span className="bf-four-val"><small>about</small><b>14</b><small>%</small></span>
            </li>
            <li className="bf-four-row is-worst" style={{ '--v': '5' }} data-ease="slow">
              <span className="bf-four-key">Slow, then fast</span>
              <span className="bf-bat"><i /><em>5%</em></span>
              <span className="bf-four-val"><small>nearly</small><b>22</b><small>%</small></span>
            </li>
          </ol>
          <p className="bf-small">
            One survey experiment. The bars ran at different speeds over the same questions; this is where each stood after ten.
          </p>
        </figure>
        <aside className="bf-field">
          <div className="bf-field-note">
            <span className="case-label">32 experiments agree</span>{' '}
            <p className="bf-lead">
              Steady bars made no significant difference. Fast-start bars cut drop-off; slow-start bars raised it.
            </p>
            <p className="bf-small">
              A meta-analysis of 32 randomised experiments. People estimate the remaining effort from the bar, so heavy early steps advertise a long journey.
            </p>
          </div>
          <div className="bf-field-note">
            <span className="case-label">And in the field</span>{' '}
            <p className="case-copy">
              GOV.UK’s Carer’s Allowance service removed a 12-step indicator, with no effect on completion rates or times. Its design system now advises testing a form without one first.
            </p>
          </div>
          <p className="bf-rule">
            <span>Rule</span>
            Don’t fake progress. Put the easy steps first, so honest progress moves fast early.
          </p>
        </aside>
      </div>
      <p className="bf-source">
        Sources: Conrad, Couper, Tourangeau &amp; Peytchev 2010, as reported by SoundRocket; Villar, Callegaro &amp; Yang 2013; GOV.UK Design System, Question pages
      </p>
      <p className="bf-note-line">
        <strong>On this page:</strong>{' '}
        its own curve, at the{' '}
        <a className="link" href="#top">top</a>
        , is fast then slow, because its shortest steps come first. The dashed line is the same seven steps, longest first.
      </p>
      <div className="bf-insight">
        <span className="case-label">The insight</span>{' '}
        <p className="bf-insight-line">People don’t finish the indicator. They finish the steps.</p>
        <p className="bf-insight-sub">
          So design the steps first, then an indicator that describes them honestly. A fast start comes from easy steps placed first, never from a bar that runs ahead of the work.
        </p>
      </div>
    </section>
  );
}
