/*  STAGE 02 · WHAT USERS EXPECT — fundamentals
*/
export default function Expect() {
  return (
    <section className="case-section fq-stage" id="expect" data-stage="" data-elev="850" data-section="What users expect" data-index="02">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">02</span>
        <span className="rule-title section-index-label">What users expect</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Fundamentals</span>
      </div>
      <header className="fq-gate">
        <p className="fq-gate-alt">
          <span className="fq-gate-num">0850</span>
          <span className="fq-gate-unit">m</span>
          <span className="sr-only"> elevation</span>
        </p>
        <div className="fq-gate-copy">
          <p className="fq-gate-level"><span>Stage 02 / 08</span><i aria-hidden="true" /><span>Fundamentals</span></p>
          <h2 className="fq-gate-title">Users bring web-search habits to every app.</h2>
          <p className="fq-gate-q">
            <span>Question</span>{' '}
            What does someone expect the moment they tap the search box?
          </p>
        </div>
        <div className="fq-track" aria-hidden="true" />
      </header>
      <p className="case-section-intro fq-intro">
        Six expectations travel with people from web search engines into every app they open. None of them is negotiable, and each one is measurable.
      </p>
      <ol className="fq-expect">
        <li className="fq-exp">
          <span className="fq-exp-no">Expectation 01</span>{' '}
          <h3>Understand my words</h3>
          <p>Synonyms, typos, units and symbols all work.</p>
          <p className="fq-exp-stat"><b>54%</b> of stores fail on queries like “13in”</p>
        </li>
        <li className="fq-exp">
          <span className="fq-exp-no">Expectation 02</span>{' '}
          <h3>Short queries work</h3>
          <p>Two words, no syntax.</p>
          <p className="fq-exp-stat"><b>2.0</b> words: the mean query in NN/g’s testing</p>
        </li>
        <li className="fq-exp">
          <span className="fq-exp-no">Expectation 03</span>{' '}
          <h3>Right first time</h3>
          <p>The best answers sit on the first screen. Few users page past it or rephrase.</p>
        </li>
        <li className="fq-exp">
          <span className="fq-exp-no">Expectation 04</span>{' '}
          <h3>Search everything</h3>
          <p>Help, policies, settings and actions too, not only products.</p>
          <p className="fq-exp-stat"><b>34%</b> of test users searched for non-product content</p>
        </li>
        <li className="fq-exp">
          <span className="fq-exp-no">Expectation 05</span>{' '}
          <h3>Feel instant</h3>
          <p>Suggestions within about 0.1 s, results within about 1 s, visible progress beyond that.</p>
          <p className="fq-exp-stat fq-latency" aria-hidden="true">
            <span className="fq-latency-bar"><i style={{ '--t': '0.1' }} /><i style={{ '--t': '1' }} /></span>
            <span className="fq-latency-key"><span>0.1 s · suggest</span><span>1 s · results</span></span>
          </p>
        </li>
        <li className="fq-exp">
          <span className="fq-exp-no">Expectation 06</span>{' '}
          <h3>Never leave me stuck</h3>
          <p>Zero results still offers a next step. Generic “search tips” go unread.</p>
        </li>
      </ol>
      <p className="fq-source">Sources: Baymard Institute 2025–2026; NN/g (2001, 1993)</p>
    </section>
  );
}
