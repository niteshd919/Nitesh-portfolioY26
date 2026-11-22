/* region:journey ==============================================
*/
export default function Journey() {
  return (
    <section className="journey" id="journey" data-section="Journey" data-index="04" aria-labelledby="journey-title">
      <header className="rule" data-rule="">
        <span className="rule-index">04</span>{' '}
        <span className="rule-title">Journey So Far</span>{' '}
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>{' '}
        <span className="rule-meta">Telemetry</span>
      </header>
      <h2 className="journey-heading" id="journey-title" data-reveal="lines">
        I have been fortunate to collaborate and build products with inspiring and creative teams across{' '}
        <em>global brands.</em>
      </h2>
      {/* Instrument cluster: dials are drawn by home-sections.js from data-*. */}
      <dl className="cluster">
        <div className="gauge" data-value="6" data-max="10" data-minor="0.5" data-major="2" data-red="8.5" data-unit="Yrs">
          <dt className="gauge-label"><span className="gauge-code" aria-hidden="true">Years of craft</span></dt>
          <dd className="gauge-body">
            <svg className="gauge-dial" viewBox="-160 -160 320 320" aria-hidden="true" focusable="false" />{' '}
            <span className="gauge-read">6+</span>
          </dd>
        </div>
        <div className="gauge gauge--main" data-value="30" data-max="50" data-minor="1" data-major="10" data-red="42.5" data-unit="Products">
          <dt className="gauge-label"><span className="gauge-code" aria-hidden="true">Products shipped</span></dt>
          <dd className="gauge-body">
            <svg className="gauge-dial" viewBox="-160 -160 320 320" aria-hidden="true" focusable="false" />{' '}
            <span className="gauge-read">30+</span>
          </dd>
        </div>
        <div className="gauge" data-value="7" data-max="10" data-minor="0.5" data-major="2" data-red="8.5" data-unit="Brands">
          <dt className="gauge-label"><span className="gauge-code" aria-hidden="true">Global brands</span></dt>
          <dd className="gauge-body">
            <svg className="gauge-dial" viewBox="-160 -160 320 320" aria-hidden="true" focusable="false" />{' '}
            <span className="gauge-read">7+</span>
          </dd>
        </div>
      </dl>
      {/* Brand wall: nine panels behind fine panel gaps, automotive first. */}
      <div className="brand-wall" id="brands">
        <header className="rule brands-rule" data-rule="" data-rule-track="#brands">
          <span className="rule-index">§</span>{' '}
          <span className="rule-title">Brands &amp; Products</span>{' '}
          <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>{' '}
          <span className="rule-meta">09</span>
        </header>
        <ul className="brand-grid" data-reveal="scan">
          <li className="brand-cell" data-brand="audi" data-cursor="Audi">
            <span className="brand-no" aria-hidden="true">01</span>
            <img className="brand-logo" src="/assets/logos/audi.svg" width="64" height="36" alt="Audi" loading="lazy" decoding="async" />
          </li>
          <li className="brand-cell" data-brand="porsche" data-cursor="Porsche">
            <span className="brand-no" aria-hidden="true">02</span>
            <img className="brand-logo" src="/assets/logos/porsche.svg" width="63" height="36" alt="Porsche" loading="lazy" decoding="async" />
          </li>
          <li className="brand-cell" data-brand="vw" data-cursor="Volkswagen">
            <span className="brand-no" aria-hidden="true">03</span>
            <img className="brand-logo" src="/assets/logos/vw.svg" width="63" height="36" alt="Volkswagen" loading="lazy" decoding="async" />
          </li>
          <li className="brand-cell" data-brand="edwisely" data-cursor="Edwisely">
            <span className="brand-no" aria-hidden="true">04</span>
            <img className="brand-logo" src="/assets/logos/edwisely.svg" width="634" height="265" alt="Edwisely" loading="lazy" decoding="async" />
          </li>
          <li className="brand-cell" data-brand="elextensions" data-cursor="ELEXtensions">
            <span className="brand-no" aria-hidden="true">05</span>
            <img className="brand-logo" src="/assets/logos/elextensions.svg" width="375" height="375" alt="ELEXtensions" loading="lazy" decoding="async" />
          </li>
          <li className="brand-cell" data-brand="reachship" data-cursor="ReachShip">
            <span className="brand-no" aria-hidden="true">06</span>
            <img className="brand-logo" src="/assets/logos/reachship.svg" width="500" height="500" alt="ReachShip" loading="lazy" decoding="async" />
          </li>
          <li className="brand-cell" data-brand="candescent" data-cursor="Candescent">
            <span className="brand-no" aria-hidden="true">07</span>
            <img className="brand-logo" src="/assets/logos/candescent.svg" width="224" height="58" alt="Candescent" loading="lazy" decoding="async" />
          </li>
          <li className="brand-cell" data-brand="learnwoo" data-cursor="LearnWoo">
            <span className="brand-no" aria-hidden="true">08</span>
            <img className="brand-logo" src="/assets/logos/learnwoo.svg" width="160" height="40" alt="LearnWoo" loading="lazy" decoding="async" />
          </li>
          <li className="brand-cell" data-brand="zervise" data-cursor="Zervise">
            <span className="brand-no" aria-hidden="true">09</span>
            <img className="brand-logo" src="/assets/logos/zervise.png" width="136" height="67" alt="Zervise" loading="lazy" decoding="async" />
          </li>
        </ul>
      </div>
    </section>
  );
}
