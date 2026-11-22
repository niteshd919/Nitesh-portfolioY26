/*  STAGE 01 · WHY IT MATTERS — fundamentals
*/
export default function Why() {
  return (
    <section className="case-section fq-stage" id="why" data-stage="" data-elev="450" data-section="Why it matters" data-index="01">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">01</span>
        <span className="rule-title section-index-label">Why it matters</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Fundamentals</span>
      </div>
      <header className="fq-gate">
        <p className="fq-gate-alt">
          <span className="fq-gate-num">0450</span>
          <span className="fq-gate-unit">m</span>
          <span className="sr-only"> elevation</span>
        </p>
        <div className="fq-gate-copy">
          <p className="fq-gate-level"><span>Stage 01 / 08</span><i aria-hidden="true" /><span>Fundamentals</span></p>
          <h2 className="fq-gate-title">The first query decides the outcome.</h2>
          <p className="fq-gate-q"><span>Question</span> Why does search deserve this much attention?</p>
        </div>
        <div className="fq-track" aria-hidden="true" />
      </header>
      <div className="fq-split">
        <figure className="fq-success" role="img" aria-label="Search success rate: 51% on the first query, 32% on the second and 18% on the third.">
          <figcaption className="case-label">Search success rate</figcaption>
          <div className="fq-cols" aria-hidden="true">
            <div className="fq-col is-lead" style={{ '--v': '51' }}>
              <span className="fq-col-track">
                <i />
                <span className="fq-col-val"><b className="fq-odo">51</b>%</span>
              </span>
              <span className="fq-col-key">1st query</span>
            </div>
            <div className="fq-col" style={{ '--v': '32' }}>
              <span className="fq-col-track">
                <i />
                <span className="fq-col-val"><b className="fq-odo">32</b>%</span>
              </span>
              <span className="fq-col-key">2nd query</span>
            </div>
            <div className="fq-col" style={{ '--v': '18' }}>
              <span className="fq-col-track">
                <i />
                <span className="fq-col-val"><b className="fq-odo">18</b>%</span>
              </span>
              <span className="fq-col-key">3rd query</span>
            </div>
          </div>
        </figure>
        <div className="fq-callout">
          <p className="fq-lead">Almost half of users whose first search failed gave up immediately.</p>
          <p className="case-copy">
            Most people won’t rephrase. Each retry cuts the odds of success, and many never make a second attempt. So everything that follows is about one thing: winning the first query by understanding the user’s words, not the app’s.
          </p>
          <p className="fq-source">
            Source: Nielsen Norman Group, ecommerce search testing (“Search: Visible and Simple”)
          </p>
        </div>
      </div>
      <div className="case-subblock">
        <h3 className="case-subtitle">Search is the highest-intent path in an app</h3>
        <dl className="fq-readouts">
          <div className="fq-readout">
            <dt><span className="fq-odo">~50</span><small>%</small></dt>
            <dd>of shoppers choose search first to find products</dd>
          </div>
          <div className="fq-readout">
            <dt><span className="fq-odo">92</span><small>%</small></dt>
            <dd>buy the item after a successful search</dd>
          </div>
          <div className="fq-readout">
            <dt><span className="fq-odo">81</span><small>%</small></dt>
            <dd>are likelier to buy elsewhere after a failed search</dd>
          </div>
          <div className="fq-readout">
            <dt><span className="fq-odo">78</span><small>%</small></dt>
            <dd>feel less loyal when things are hard to find</dd>
          </div>
        </dl>
        <p className="fq-source">Sources: Baymard Institute 2026; Google Cloud / Harris Poll 2023 (US shoppers)</p>
      </div>
      <div className="case-jobs fq-jobs">
        <span className="case-label">Users rely on search for two jobs</span>{' '}
        <div className="case-jobs-list">
          <span className="case-job"><small>01</small>Control<em>Going straight to what they want.</em></span>{' '}
          <span className="case-job"><small>02</small>Rescue<em>An escape hatch when navigation fails.</em></span>
        </div>
        <p className="fq-source">Source: Nielsen Norman Group</p>
      </div>
    </section>
  );
}
