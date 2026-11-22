/*  04 · HOUSE RULES — four principles, each with the screen
    that keeps it.
*/
export default function Rules() {
  return (
    <section className="case-section case-section-alt hm-ch" id="rules" data-section="House rules" data-index="04">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">04</span>
        <span className="rule-title section-index-label">House rules</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Principles</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">Four rules every screen had to keep.</h2>
        <p className="case-section-intro">
          Each rule is a constraint on the design, shown here on a screen that keeps it.
        </p>
      </div>
      <ol className="hm-rules">
        <li className="hm-rule">
          <span className="hm-rule-no">Principle 01</span>{' '}
          <h3>Value before sign-up</h3>
          <p>
            Show what Homingly does before asking for a number. The welcome screen sells the outcome; sign-in asks for one field.
          </p>
          <figure className="hm-proof">
            <span className="hm-crop" style={{ '--cx': '0', '--cy': '96', '--cw': '390', '--ch': '312' }}>
              <img src="/assets/homingly/a02.webp" width="780" height="1688" alt="Detail of sign-in: one mobile-number field, the note that a 6-digit code will be texted with no password needed, and a Send code button." loading="lazy" decoding="async" />
            </span>{' '}
            <figcaption>Sign in · one field, no password</figcaption>
          </figure>
        </li>
        <li className="hm-rule">
          <span className="hm-rule-no">Principle 02</span>{' '}
          <h3>Honest numbers</h3>
          <p>
            Prices appear as ranges with their assumptions, never a teaser number that grows later. Fees and taxes show before payment.
          </p>
          <figure className="hm-proof">
            <span className="hm-crop" style={{ '--cx': '0', '--cy': '96', '--cw': '390', '--ch': '312' }}>
              <img src="/assets/homingly/a08.webp" width="780" height="1688" alt="Detail of the estimate: ₹3.4L to ₹4.1L for a living room, medium, premium, estimated total for materials and labour at Bengaluru rates updated October 2021." loading="lazy" decoding="async" />
            </span>{' '}
            <figcaption>Estimate · a range, what it covers, when the rates were set</figcaption>
          </figure>
        </li>
        <li className="hm-rule">
          <span className="hm-rule-no">Principle 03</span>{' '}
          <h3>One decision per screen</h3>
          <p>The estimator is split into small, reversible steps, with a visible progress bar and sensible defaults.</p>
          <figure className="hm-proof">
            <span className="hm-crop" style={{ '--cx': '0', '--cy': '96', '--cw': '390', '--ch': '312' }}>
              <img src="/assets/homingly/a06.webp" width="780" height="1688" alt="Detail of the estimator’s first step: Step 1 of 3, a three-part progress bar, and the question Which room are we transforming? with Living room selected." loading="lazy" decoding="async" />
            </span>{' '}
            <figcaption>Room &amp; size · step 1 of 3, one question</figcaption>
          </figure>
        </li>
        <li className="hm-rule">
          <span className="hm-rule-no">Principle 04</span>{' '}
          <h3>Creative, calm, clear</h3>
          <p>
            Warm photography and a serif display face make browsing feel creative. Every action stays high-contrast, labelled and within thumb reach.
          </p>
          <figure className="hm-proof is-thumb">
            <span className="hm-crop" style={{ '--cx': '0', '--cy': '532', '--cw': '390', '--ch': '312' }}>
              <img src="/assets/homingly/a01.webp" width="780" height="1688" alt="Detail of the welcome screen’s lower half: the line Live beautifully, without the studio price tag, and the Get started and I already have an account buttons at the bottom of the screen." loading="lazy" decoding="async" />
              <span className="hm-thumbzone" aria-hidden="true" />
            </span>{' '}
            <figcaption>Welcome · primary action in the thumb zone, 44 × 44 targets</figcaption>
          </figure>
        </li>
      </ol>
    </section>
  );
}
