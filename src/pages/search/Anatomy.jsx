/*  STAGE 03 · THE ANATOMY — patterns
*/
export default function Anatomy() {
  return (
    <section className="case-section fq-stage" id="anatomy" data-stage="" data-elev="1250" data-section="The anatomy" data-index="03">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">03</span>
        <span className="rule-title section-index-label">The anatomy</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Patterns</span>
      </div>
      <header className="fq-gate">
        <p className="fq-gate-alt">
          <span className="fq-gate-num">1250</span>
          <span className="fq-gate-unit">m</span>
          <span className="sr-only"> elevation</span>
        </p>
        <div className="fq-gate-copy">
          <p className="fq-gate-level"><span>Stage 03 / 08</span><i aria-hidden="true" /><span>Patterns</span></p>
          <h2 className="fq-gate-title">Every path ends at the goal or a recovery.</h2>
          <p className="fq-gate-q"><span>Question</span> What is a search experience actually made of?</p>
        </div>
        <div className="fq-track" aria-hidden="true" />
      </header>
      <figure className="fq-loop" id="fqLoop">
        <figcaption className="fq-loop-cap">
          <span className="case-label">The search loop</span>{' '}
          <p className="fq-lead">Zero or poor results route to recovery, never to an empty page.</p>
        </figcaption>
        <div className="fq-loop-scroll" data-lenis-prevent-horizontal="">
          <div className="fq-loop-grid">
            <div className="fq-node" data-node="entry">
              <span className="fq-node-no">01</span>
              <h4>Entry point</h4>
              <p>Visible on every screen; hints what works</p>
            </div>
            <div className="fq-node" data-node="suggest">
              <span className="fq-node-no">02</span>
              <h4>Autosuggest</h4>
              <p>Guides the query, not just the typing</p>
            </div>
            <div className="fq-node" data-node="understand">
              <span className="fq-node-no">03</span>
              <h4>Understand query</h4>
              <p>Synonyms, typos, units; attributes become filters</p>
            </div>
            <div className="fq-node" data-node="results">
              <span className="fq-node-no">04</span>
              <h4>Results</h4>
              <p>Best match first; filters and scope</p>
            </div>
            <div className="fq-node is-recover" data-node="recover">
              <span className="fq-node-no">R</span>
              <h4>Recover</h4>
              <p>Related categories, alternatives, help</p>
            </div>
            <div className="fq-node is-goal" data-node="goal">
              <span className="fq-node-no">✓</span>
              <h4>Item or answer</h4>
              <p>The user’s goal; counts as success</p>
            </div>{' '}
            <svg className="fq-loop-wires" aria-hidden="true" focusable="false" />
          </div>
        </div>
        <p className="fq-loop-hint" aria-hidden="true">Swipe to follow the loop</p>
      </figure>
      <div className="case-subblock">
        <h3 className="case-subtitle">Two components decide most searches</h3>
        <div className="fq-comps">
          <article className="fq-comp">
            <header className="fq-comp-head">
              <span className="case-label">Autosuggest</span>{' '}
              <p className="fq-comp-stat"><span className="fq-odo">19</span><small>%</small></p>
              <p className="fq-comp-desc">of stores get every detail right, though 80% offer it</p>{' '}
              <span className="fq-ratio" aria-hidden="true">
                <i style={{ '--v': '80' }} />
                <b style={{ '--v': '19' }} />
              </span>
            </header>
            <figure className="fq-mock fq-suggest" role="img" aria-label="Illustrative autosuggest. The user types “lap”; suggestions show the predicted text in bold, a scope suggestion “in Laptops” is styled differently, and the arrow keys copy a suggestion into the box.">
              <div className="fq-mock-page" aria-hidden="true"><i /><i /><i /><i /></div>
              <div className="fq-mock-field" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="fq-suggest-q">{'lap'}</span>
                <i className="fq-caret" />
              </div>
              <ul className="fq-suggest-list" aria-hidden="true">
                {'\n                '}
                <li><span>{'lap'}</span><b>{'top'}</b></li>
                {'\n                '}
                <li className="is-scope"><span>{'lap'}</span><b>{'top'}</b><em>{'in Laptops'}</em></li>
                {'\n                '}
                <li><span>{'lap'}</span><b>{'top stand'}</b></li>
                {'\n                '}
                <li><span>{'lap'}</span><b>{'top bag'}</b></li>
                {'\n                '}
                <li><span>{'lap'}</span><b>{' desk'}</b></li>
                {'\n              '}
              </ul>{' '}
              <span className="fq-keys" aria-hidden="true"><kbd>↓</kbd><kbd>↵</kbd></span>
            </figure>
            <ul className="case-bullets">
              <li>Up to about 10 suggestions on desktop, 4–8 on mobile</li>
              <li>Bold the predicted text, not what the user typed</li>
              <li>Arrow keys move through and copy into the box</li>
              <li>Style scope suggestions (“in Laptops”) differently</li>
              <li>Dim the page; no scrollbar inside the list</li>
            </ul>
          </article>
          <article className="fq-comp">
            <header className="fq-comp-head">
              <span className="case-label">Zero results</span>{' '}
              <p className="fq-comp-stat"><span className="fq-odo">~50</span><small>%</small></p>
              <p className="fq-comp-desc">of stores leave users at a dead end</p>{' '}
              <span className="fq-ratio" aria-hidden="true">
                <i style={{ '--v': '100' }} />
                <b style={{ '--v': '50' }} />
              </span>
            </header>
            <figure className="fq-mock fq-zero" role="img" aria-label="Illustrative zero-results page for “waterproof hiking sandal”: an alternative query is applied automatically, with related categories, recently viewed items and a way to reach help.">
              <div className="fq-mock-field" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>waterproof hiking sandal</span>
              </div>
              <ol className="fq-zero-list" aria-hidden="true">
                <li className="is-none"><span>0</span><p>No exact matches</p></li>
                <li><span>Recovery 02</span><p>Showing results for <b>hiking sandals</b></p></li>
                <li><span>Recovery 01</span><p>Related: <u>Sandals</u> <u>Hiking boots</u> <u>Water shoes</u></p></li>
                <li>
                  <span>Recovery 03</span>
                  <p>Recently viewed <i className="fq-thumb" /><i className="fq-thumb" /><i className="fq-thumb" /></p>
                </li>
                <li><span>Recovery 04</span><p>Still stuck? <u>Chat with us</u></p></li>
              </ol>
            </figure>
            <ol className="fq-recovery">
              <li><span>Recovery 01</span>Related categories</li>
              <li><span>Recovery 02</span>Alternative queries, auto-applied if there is only one</li>
              <li><span>Recovery 03</span>Recently viewed items</li>
              <li><span>Recovery 04</span>Help, chat or phone</li>
              <li><span>Recovery 05</span>Popular items</li>
            </ol>
            <p className="fq-warn"><strong>Search tips alone don’t work:</strong> users rarely read them.</p>
          </article>
        </div>
        <p className="fq-source">
          Source: Baymard Institute, autocomplete (2022) and “No Results” page (2025) research · Mock-ups are illustrative
        </p>
      </div>
    </section>
  );
}
