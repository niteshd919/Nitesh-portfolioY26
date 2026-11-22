/* region:about ================================================
*/
export default function About() {
  return (
    <section className="about" id="about" data-section="The Designer" data-index="03" data-theme="paper" aria-labelledby="about-title">
      <header className="rule" data-rule="">
        <span className="rule-index">03</span>{' '}
        <span className="rule-title">The Designer</span>{' '}
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>{' '}
        <span className="rule-meta">Spec sheet</span>
      </header>
      <h2 className="sr-only" id="about-title">About Nitesh Dixit</h2>
      <div className="about-body">
        <p className="about-copy">
          I believe design is a{' '}
          <em>profound act of empathy.</em>{' '}
          It is the disciplined practice of uncovering the unspoken
          <em> needs of a user </em>{' '}
          and translating them into{' '}
          <em> experiences </em>
          that feel intuitive, meaningful, and{' '}
          <em>above all alive.</em>
        </p>
        {/* The sill plate: brushed steel, engraved, four screws. */}
        <figure className="about-plate">
          <div className="plate" role="img" aria-label="Build plate: Coachbuilt by Nitesh Dixit — Product, HMI, Brand — India — Nº 2026">
            <i className="plate-screw" aria-hidden="true" />
            <i className="plate-screw" aria-hidden="true" />
            <i className="plate-screw" aria-hidden="true" />
            <i className="plate-screw" aria-hidden="true" />{' '}
            <span className="plate-row plate-row--top" aria-hidden="true">
              <span>Coachbuilt by</span>
              <span>Nº 2026</span>
            </span>{' '}
            <span className="plate-name" aria-hidden="true">Nitesh Dixit</span>{' '}
            <span className="plate-cut" aria-hidden="true" />{' '}
            <span className="plate-row plate-row--foot" aria-hidden="true">
              <span>Product · HMI · Brand</span>
              <span>India</span>
            </span>{' '}
            <span className="plate-sheen" aria-hidden="true" />
          </div>
          <figcaption className="about-plate-dim dim">Sill plate · Scale 1:1</figcaption>
        </figure>
      </div>
      {/* Capabilities: a numbered spec table, Capability 01 – 06. */}
      <div className="about-caps">
        <p className="about-caps-head">
          <span>Capabilities</span>
          <span className="about-caps-ticks" aria-hidden="true" />
          <span>06 Items</span>
        </p>
        <ol className="about-caps-list">
          <li className="cap">
            <span className="cap-code">Capability 01</span>
            <span className="cap-name">User Research</span>
          </li>
          <li className="cap">
            <span className="cap-code">Capability 02</span>
            <span className="cap-name">Experience &amp; Interface Design</span>
          </li>
          <li className="cap">
            <span className="cap-code">Capability 03</span>
            <span className="cap-name">AI Product Design</span>
          </li>
          <li className="cap">
            <span className="cap-code">Capability 04</span>
            <span className="cap-name">Design System</span>
          </li>
          <li className="cap">
            <span className="cap-code">Capability 05</span>
            <span className="cap-name">Usability Testing</span>
          </li>
          <li className="cap">
            <span className="cap-code">Capability 06</span>
            <span className="cap-name">Data-Driven Design Decisions</span>
          </li>
        </ol>
      </div>
      {/* Sign-off: "box" sits outside its own box, and the spec sheet closes on what the work runs on. */}
      <div className="about-coda">
        <p className="coda-line">
          <span className="coda-row">In-car by trade.</span>{' '}
          <span className="coda-row">
            <em className="coda-out">
              <span className="coda-in">Out of the<i className="coda-frame" aria-hidden="true" /></span>{' '}
              <span className="coda-spill">
                box
                <span className="coda-note" aria-hidden="true">overflow: visible</span>
              </span>
            </em>{' '}
            by nature.
          </span>
        </p>
        <div className="coda-sheet">
          <dl className="spec coda-spec">
            <div className="spec-row"><dt>Range</dt><dd>The cabin, and everything past the windscreen.</dd></div>
            <div className="spec-row">
              <dt>Fuel</dt>
              <dd>
                Tokens
                <span className="coda-mark">*</span>{' '}
                burned gladly on great ideas, so they go from sketch to street sooner, and better built.{' '}
                <span className="fuel" role="img" aria-label="Fuel gauge: full">
                  <span className="fuel-end">E</span>
                  <span className="fuel-bar"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
                  <span className="fuel-end">F</span>
                </span>
              </dd>
            </div>
          </dl>
          <p className="coda-fine">
            <span className="coda-mark">*</span>{' '}
            Consumption varies with the size of the idea.
          </p>
        </div>
      </div>
    </section>
  );
}
