/*  STEP 03 · PERCEPTION — how people read the indicator
*/
export default function Perception() {
  return (
    <section className="case-section bf-step" id="perception" data-step="" data-label="Perception" data-section="Perception" data-index="03">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">03</span>
        <span className="rule-title section-index-label">Perception</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Psychology</span>
      </div>
      <header className="bf-gate">
        <p className="bf-gate-charge" aria-hidden="true">
          <span className="bf-gate-num">29</span>
          <span className="bf-gate-unit">%</span>
        </p>
        <div className="bf-gate-copy">
          <h2 className="bf-gate-head">
            <span className="sr-only">Step 3 of 7, Perception: </span>{' '}
            <span className="bf-gate-level" aria-hidden="true">
              <span>Step 03 / 07</span>
              <i />
              <span>Perception</span>
            </span>{' '}
            <span className="bf-gate-title">People read a stepper as an estimate of effort.</span>
          </h2>
          <p className="bf-gate-q">
            <span>Question</span>{' '}
            What does someone see when they glance at a progress indicator?
          </p>
        </div>
        <div className="bf-strip" aria-hidden="true" />
      </header>
      <div className="bf-duo">
        <blockquote className="case-quote">
          <p>“That took a minute, so this is about five.”</p>{' '}
          <cite>The maths people do at a glance</cite>
        </blockquote>
        <p className="case-copy">
          People see “Step 2 of 5”, remember how long the first step took and project the total. Slow early progress advertises a long task, and they leave before they reach the easy part.
        </p>
      </div>
      <div className="case-subblock bf-duo bf-duo--fig">
        <figure className="bf-motive" role="img" aria-label="Motivation across a flow: high at the start, dipping in the middle and rising again near the end.">
          <figcaption className="case-label">Motivation across a flow</figcaption>
          <div className="bf-motive-plot">
            <svg className="bf-motive-svg" viewBox="0 0 600 220" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path className="bf-motive-area" d="M10 40 C150 205 450 205 590 40 L590 214 L10 214 Z" />
              <path className="bf-motive-line" d="M10 40 C150 205 450 205 590 40" />
            </svg>{' '}
            <span className="bf-motive-pt" style={{ '--x': '1.67', '--y': '18.2' }} aria-hidden="true" />{' '}
            <span className="bf-motive-pt" style={{ '--x': '50', '--y': '74.4' }} aria-hidden="true" />{' '}
            <span className="bf-motive-pt" style={{ '--x': '98.33', '--y': '18.2' }} aria-hidden="true" />
          </div>
          <ol className="bf-motive-keys" aria-hidden="true">
            <li><b>Start: high</b><span>Count work already done</span></li>
            <li><b>Middle: dips</b><span>Keep these steps the lightest</span></li>
            <li><b>End: rises</b><span>Show the finish line</span></li>
          </ol>
        </figure>
        <div>
          <p className="bf-lead">Motivation isn’t flat, so the steps can’t be either.</p>
          <p className="case-copy">
            Effort rises as a goal gets closer: the goal-gradient effect. Between a confident start and a quick finish, motivation sags, which researchers call being stuck in the middle. So the middle steps carry the least, and the finish line stays in view.
          </p>
          <p className="bf-source">Sources: Hull 1932; Kivetz, Urminsky &amp; Zheng 2006; Bonezzi et al. 2011</p>
        </div>
      </div>
      <div className="case-subblock">
        <div className="bf-head-row">
          <span className="case-label">A head start, at a car wash</span>{' '}
          <h3 className="case-subtitle">Same eight washes to go, and far more people finished.</h3>
        </div>
        <div className="bf-duo bf-duo--fig">
          <figure className="bf-wash" role="img" aria-label="Two loyalty cards from a car-wash field study, both needing eight more washes. The ten-stamp card that came with two stamps filled was completed by 34% of customers; the blank eight-stamp card by 19%.">
            <div className="bf-card is-head" aria-hidden="true">
              <p className="bf-card-top"><span>Card A</span><span>10 stamps · 2 given</span></p>
              <ol className="bf-stamps">
                <li className="is-given" />
                <li className="is-given" />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ol>
              <p className="bf-card-rate"><b className="bf-odo">34</b><small>%</small><span>finished</span></p>{' '}
              <span className="bf-card-bar" style={{ '--v': '34' }}><i /></span>
            </div>
            <div className="bf-card" aria-hidden="true">
              <p className="bf-card-top"><span>Card B</span><span>8 stamps · blank</span></p>
              <ol className="bf-stamps"><li /><li /><li /><li /><li /><li /><li /><li /></ol>
              <p className="bf-card-rate"><b className="bf-odo">19</b><small>%</small><span>finished</span></p>{' '}
              <span className="bf-card-bar" style={{ '--v': '19' }}><i /></span>
            </div>
          </figure>
          <div>
            <p className="case-copy">
              In a field study at a car wash, loyalty cards that started with two of ten stamps already filled were completed by 34% of customers. Blank eight-stamp cards: 19%. The remaining effort was identical.
            </p>
            <p className="case-copy">
              For a stepper, that means counting work people have already done, such as an account created or details pre-filled, as completed steps.
            </p>
            <p className="bf-rule"><span>On this page</span>Arriving counted as step one. You started at 14%.</p>
            <p className="bf-source">Source: Nunes &amp; Drèze 2006, the endowed progress effect</p>
          </div>
        </div>
      </div>
    </section>
  );
}
