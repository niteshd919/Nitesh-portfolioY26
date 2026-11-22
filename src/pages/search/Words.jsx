/*  STAGE 04 · WORDS FIRST — patterns (ecommerce vocabulary)
*/
export default function Words() {
  return (
    <section className="case-section fq-stage" id="words" data-stage="" data-elev="1650" data-section="Words first" data-index="04">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">04</span>
        <span className="rule-title section-index-label">Words first</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Patterns</span>
      </div>
      <header className="fq-gate">
        <p className="fq-gate-alt">
          <span className="fq-gate-num">1650</span>
          <span className="fq-gate-unit">m</span>
          <span className="sr-only"> elevation</span>
        </p>
        <div className="fq-gate-copy">
          <p className="fq-gate-level">
            <span>Stage 04 / 08</span>
            <i aria-hidden="true" />
            <span>Patterns · Ecommerce</span>
          </p>
          <h2 className="fq-gate-title">Most failures are vocabulary failures.</h2>
          <p className="fq-gate-q"><span>Question</span> Where exactly does search break?</p>
        </div>
        <div className="fq-track" aria-hidden="true" />
      </header>
      <div className="fq-split fq-split--chart">
        <figure className="fq-hbars" role="img" aria-label="Share of 170+ benchmarked stores and apps with search issues, by query type: non-product 66%, abbreviation and symbol 54%, compatibility 44%, use case 43%, feature 39%, symptom 37%, product type 20%, exact 12%.">
          <figcaption className="case-label">Stores and apps with issues, by query type · 170+ benchmarked</figcaption>
          <ol aria-hidden="true">
            <li className="is-lead" style={{ '--v': '66' }}>
              <span className="fq-hbar-key">Non-product</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><b className="fq-odo">66</b>%</span>
            </li>
            <li style={{ '--v': '54' }}>
              <span className="fq-hbar-key">Abbreviation and symbol</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><b className="fq-odo">54</b>%</span>
            </li>
            <li style={{ '--v': '44' }}>
              <span className="fq-hbar-key">Compatibility</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><b className="fq-odo">44</b>%</span>
            </li>
            <li style={{ '--v': '43' }}>
              <span className="fq-hbar-key">Use case</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><b className="fq-odo">43</b>%</span>
            </li>
            <li style={{ '--v': '39' }}>
              <span className="fq-hbar-key">Feature</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><b className="fq-odo">39</b>%</span>
            </li>
            <li style={{ '--v': '37' }}>
              <span className="fq-hbar-key">Symptom</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><b className="fq-odo">37</b>%</span>
            </li>
            <li style={{ '--v': '20' }}>
              <span className="fq-hbar-key">Product type</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><b className="fq-odo">20</b>%</span>
            </li>
            <li style={{ '--v': '12' }}>
              <span className="fq-hbar-key">Exact</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><b className="fq-odo">12</b>%</span>
            </li>
          </ol>
          <p className="fq-hbar-scale" aria-hidden="true">
            <span className="fq-hbar-scale-in">
              <span>0</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100%</span>
            </span>
          </p>
        </figure>
        <aside className="fq-pattern">
          <span className="case-label">The pattern</span>{' '}
          <p className="fq-lead">
            The further a query drifts from the product’s own name, the more often search fails.
          </p>
          <p className="case-copy">
            Exact names fail on only 12% of sites. Help searches like “return policy” fail on two thirds. Overall, 56% of sites fall short, and apps fare worst.
          </p>
          <p className="fq-pattern-rule"><span>Rule</span>Fix vocabulary before polishing the interface.</p>
        </aside>
      </div>
      <p className="fq-source">Source: Baymard Institute, Ecommerce Search UX 2026 benchmark (10,000+ ratings)</p>
      <div className="case-subblock">
        <div className="case-section-head fq-head">
          <h3 className="case-subtitle">Handle all eight ways shoppers search</h3>
          <p className="case-section-intro">
            Each card is one query type, a query a shopper typed in testing, and what search should do with it. They climb from the easiest to the hardest for today’s stores.
          </p>
        </div>
        <ol className="fq-qgrid">
          <li className="fq-qcard" style={{ '--v': '12' }}>
            <div className="fq-qcard-top"><span>01</span><h4>Exact</h4><em>Fails on 12%</em></div>
            <p className="fq-qfield"><span className="fq-typed">{'Keurig K45 Elite'}</span></p>
            <p>Match titles, SKUs, models and misspellings</p>
            <span className="fq-qmeter" aria-hidden="true"><i /></span>
          </li>
          <li className="fq-qcard" style={{ '--v': '20' }}>
            <div className="fq-qcard-top"><span>02</span><h4>Product type</h4><em>Fails on 20%</em></div>
            <p className="fq-qfield"><span className="fq-typed">{'sandals'}</span></p>
            <p>Jump to the matching category and its filters</p>
            <span className="fq-qmeter" aria-hidden="true"><i /></span>
          </li>
          <li className="fq-qcard" style={{ '--v': '37' }}>
            <div className="fq-qcard-top"><span>03</span><h4>Symptom</h4><em>Fails on 37%</em></div>
            <p className="fq-qfield"><span className="fq-typed">{'knee pain'}</span></p>
            <p>Map problems to the products that solve them</p>
            <span className="fq-qmeter" aria-hidden="true"><i /></span>
          </li>
          <li className="fq-qcard" style={{ '--v': '39' }}>
            <div className="fq-qcard-top"><span>04</span><h4>Feature</h4><em>Fails on 39%</em></div>
            <p className="fq-qfield"><span className="fq-typed">{'blue shirt'}</span></p>
            <p>Pre-apply attributes as visible, removable filters</p>
            <span className="fq-qmeter" aria-hidden="true"><i /></span>
          </li>
          <li className="fq-qcard" style={{ '--v': '43' }}>
            <div className="fq-qcard-top"><span>05</span><h4>Use case</h4><em>Fails on 43%</em></div>
            <p className="fq-qfield"><span className="fq-typed">{'spring jacket'}</span></p>
            <p>Tag products by season, place and occasion</p>
            <span className="fq-qmeter" aria-hidden="true"><i /></span>
          </li>
          <li className="fq-qcard" style={{ '--v': '44' }}>
            <div className="fq-qcard-top"><span>06</span><h4>Compatibility</h4><em>Fails on 44%</em></div>
            <p className="fq-qfield"><span className="fq-typed">{'Dell XPS 13 charger'}</span></p>
            <p>Know what the user owns; show fit on results</p>
            <span className="fq-qmeter" aria-hidden="true"><i /></span>
          </li>
          <li className="fq-qcard" style={{ '--v': '54' }}>
            <div className="fq-qcard-top"><span>07</span><h4>Abbreviation</h4><em>Fails on 54%</em></div>
            <p className="fq-qfield"><span className="fq-typed">{'13in, tv'}</span></p>
            <p>Map short forms and symbols to full forms</p>
            <span className="fq-qmeter" aria-hidden="true"><i /></span>
          </li>
          <li className="fq-qcard is-lead" style={{ '--v': '66' }}>
            <div className="fq-qcard-top"><span>08</span><h4>Non-product</h4><em>Fails on 66%</em></div>
            <p className="fq-qfield"><span className="fq-typed">{'return policy'}</span></p>
            <p>Index help and policies; answer directly</p>
            <span className="fq-qmeter" aria-hidden="true"><i /></span>
          </li>
        </ol>
        <div className="fq-note">
          <span className="case-label">Ranking</span>{' '}
          <p>
            Let margin, stock and promotions only break ties between equally relevant items, and label sponsored results clearly. In a 70-person usability study, sponsored results were noticed but skipped for low trust.
          </p>
        </div>
        <p className="fq-source">
          Sources: Baymard Institute 2026; Search Engine Journal (Indig, 2025) on sponsored results
        </p>
      </div>
    </section>
  );
}
