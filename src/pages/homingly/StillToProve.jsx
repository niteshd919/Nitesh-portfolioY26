/*  11 · STILL TO PROVE — the assumptions to test, and the
    numbers that would settle them.
*/
export default function StillToProve() {
  return (
    <section className="case-section case-section-alt hm-ch" id="next" data-section="Still to prove" data-index="11">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">11</span>
        <span className="rule-title section-index-label">Still to prove</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Research next</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">What I would test before calling it finished.</h2>
        <p className="case-section-intro">
          The design rests on four assumptions. None of them is proven yet, and each one could change a screen.
        </p>
      </div>
      <ol className="hm-assume">
        <li className="hm-assume-item">
          <span className="hm-assume-no">Assumption 01</span>
          <p>Phone and OTP is the sign-in Indian users prefer over email and password.</p>
        </li>
        <li className="hm-assume-item">
          <span className="hm-assume-no">Assumption 02</span>
          <p>People trust a price range more than a single number.</p>
        </li>
        <li className="hm-assume-item">
          <span className="hm-assume-no">Assumption 03</span>
          <p>Sharing the estimate with the designer makes the consultation better for both sides.</p>
        </li>
        <li className="hm-assume-item">
          <span className="hm-assume-no">Assumption 04</span>
          <p>A paid, refundable consult cuts no-shows without hurting conversion.</p>
        </li>
      </ol>
    </section>
  );
}
