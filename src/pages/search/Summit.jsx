/*  STAGE 08 · SUMMIT — where to start, at first light
*/
export default function Summit() {
  return (
    <section className="case-section fq-stage fq-summit" id="summit" data-stage="" data-elev="3000" data-section="Summit" data-index="08">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">08</span>
        <span className="rule-title section-index-label">Summit</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">First light</span>
      </div>
      <header className="fq-gate">
        <p className="fq-gate-alt">
          <span className="fq-gate-num">3000</span>
          <span className="fq-gate-unit">m</span>
          <span className="sr-only"> elevation</span>
        </p>
        <div className="fq-gate-copy">
          <p className="fq-gate-level"><span>Stage 08 / 08</span><i aria-hidden="true" /><span>Summit</span></p>
          <h2 className="fq-gate-title">Where to start on Monday.</h2>
          <p className="fq-gate-q"><span>Question</span> With all of this in hand, what are the first three moves?</p>
        </div>
        <div className="fq-track" aria-hidden="true" />{' '}
        <span className="fq-sunline" aria-hidden="true" />
      </header>
      <ol className="fq-moves">
        <li className="fq-move">
          <span className="fq-move-no">1</span>
          <h3>Baseline first</h3>
          <p>
            Log every search with results, clicks, exits and reformulations. Pull the top 100 queries and build a judged set.
          </p>
        </li>
        <li className="fq-move">
          <span className="fq-move-no">2</span>
          <h3>Fix words and dead ends</h3>
          <p>
            Add synonyms, units and abbreviations from the logs, index help and actions, and give every zero-result state a next step.
          </p>
        </li>
        <li className="fq-move">
          <span className="fq-move-no">3</span>
          <h3>Agree the ground rules</h3>
          <p>
            Pick the first product, name an owner for search, and confirm which privacy rules govern query logs, such as HIPAA or India’s DPDP Act.
          </p>
        </li>
      </ol>
      <p className="fq-note-line fq-then"><strong>Then</strong> the interface, then AI, each behind its metric gate.</p>
      <p className="case-closing">
        Win the first query. Never leave anyone stuck. Let AI stand on results people can check.
      </p>
      <dl className="fq-log">
        <div><dt>Climbed</dt><dd><span className="fq-odo">3000</span> m</dd></div>
        <div><dt>Stages</dt><dd><span className="fq-odo">09</span></dd></div>
        <div><dt>Domains</dt><dd><span className="fq-odo">09</span></dd></div>
        <div><dt>Sources</dt><dd><span className="fq-odo">31</span></dd></div>
      </dl>
    </section>
  );
}
