/* PUBLICATIONS — "The drive" (home-publications.css / .js).
   A pinned stage, played by scroll: a night road runs to the
   horizon and the two studies come up it as roadside billboards,
   one at a time. Each rises from the vanishing point, slows beside
   you long enough to read (the road slows with it), then sweeps
   past. Once both have gone by, the camera pulls back behind a toy
   grand tourer; it drives off toward the horizon, its redline light
   bar the last thing left, and the next section arrives.
   Without the script, or with reduced motion, the billboards are
   simply two cards in the page.
*/
export default function Publications() {
  return (
    <section className="publications" id="publications" data-section="Publications" data-index="02" aria-labelledby="publications-title">
      <div className="pd-stage">
        <div className="pd-scene" aria-hidden="true">
          <svg className="pd-stars" viewBox="0 0 1000 220" preserveAspectRatio="xMidYMid slice" focusable="false">
            <circle cx="0" cy="26" r="0.8" />
            <circle cx="459" cy="107" r="0.8" />
            <circle cx="47" cy="136" r="0.8" />
            <circle cx="935" cy="77" r="0.8" />
            <circle cx="831" cy="7" r="1.4" />
            <circle cx="530" cy="134" r="1.4" />
            <circle cx="383" cy="13" r="0.8" />
            <circle cx="687" cy="118" r="0.8" />
            <circle cx="846" cy="105" r="1.4" />
            <circle cx="654" cy="83" r="0.8" />
            <circle cx="910" cy="152" r="0.8" />
            <circle cx="47" cy="147" r="0.8" />
            <circle cx="633" cy="151" r="0.8" />
            <circle cx="365" cy="49" r="0.8" />
            <circle cx="723" cy="151" r="0.8" />
            <circle cx="73" cy="126" r="0.8" />
            <circle cx="273" cy="87" r="0.8" />
            <circle cx="478" cy="48" r="0.8" />
            <circle cx="359" cy="33" r="0.8" />
            <circle cx="898" cy="182" r="1.4" />
            <circle cx="905" cy="101" r="0.8" />
            <circle cx="319" cy="197" r="0.8" />
            <circle cx="266" cy="18" r="0.8" />
            <circle cx="74" cy="100" r="0.8" />
            <circle cx="277" cy="183" r="0.8" />
            <circle cx="464" cy="188" r="1.4" />
            <circle cx="762" cy="154" r="0.8" />
            <circle cx="125" cy="3" r="0.8" />
            <circle cx="868" cy="126" r="0.8" />
            <circle cx="725" cy="200" r="0.8" />
            <circle cx="233" cy="61" r="0.8" />
            <circle cx="513" cy="118" r="0.8" />
            <circle cx="412" cy="168" r="0.8" />
            <circle cx="415" cy="107" r="0.8" />
            <circle cx="287" cy="36" r="0.8" />
            <circle cx="572" cy="160" r="1.4" />
            <circle cx="534" cy="100" r="0.8" />
            <circle cx="748" cy="111" r="0.8" />
            <circle cx="625" cy="168" r="0.8" />
            <circle cx="213" cy="143" r="1.4" />
            <circle cx="91" cy="55" r="1.4" />
            <circle cx="414" cy="5" r="0.8" />
            <circle cx="938" cy="48" r="0.8" />
            <circle cx="318" cy="177" r="0.8" />
            <circle cx="150" cy="136" r="0.8" />
            <circle cx="388" cy="100" r="1.4" />
          </svg>{' '}
          <svg className="pd-ridge" viewBox="0 0 1000 60" preserveAspectRatio="none" focusable="false">
            <path className="pd-ridge-fill" d="M0 60 L0 44 C60 40 110 26 170 30 C230 34 260 46 320 44 C380 42 410 50 450 52 L550 52 C600 50 640 36 700 34 C760 32 800 22 860 26 C920 30 960 42 1000 40 L1000 60 Z" />
            <path className="pd-ridge-line" d="M0 44 C60 40 110 26 170 30 C230 34 260 46 320 44 C380 42 410 50 450 52 L550 52 C600 50 640 36 700 34 C760 32 800 22 860 26 C920 30 960 42 1000 40" />
          </svg>{' '}
          <div className="pd-ground"><div className="pd-road"><i className="pd-lane" /></div></div>
        </div>
        <header className="rule pd-rule" data-rule="" data-rule-progress="manual">
          <span className="rule-index">02</span>{' '}
          <span className="rule-title">Publications</span>{' '}
          <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>{' '}
          <span className="rule-meta">02 Volumes</span>
        </header>
        <div className="pd-intro">
          <h2 className="pub-heading" id="publications-title">Some answers are worth <em>writing down.</em></h2>
          <div className="pd-intro-side">
            <p className="pub-lead">
              Next to the client work, I publish long-form research in the open. Each study takes one design question, grades every source before it is allowed to count, and ends in a playbook a team can build from.
              <span className="pub-mark" aria-hidden="true">*</span>
            </p>
            <p className="pub-fine">
              <span className="pub-mark" aria-hidden="true">*</span>{' '}
              Research-based best practice, rated under typical conditions. Your users have the final word, and each study shows you how to ask them.
            </p>
          </div>
          <p className="pd-hint" aria-hidden="true">Scroll to drive <i /></p>
        </div>
        {/* The billboards: one each side of the road. */}
        <ol className="pd-boards">
          <li className="bb" data-pub="0" data-dir="-1">
            <span className="bb-lamps" aria-hidden="true"><i /><i /><i /></span>{' '}
            <article className="bb-face" aria-labelledby="pub-search" data-cursor="Read">
              <div className="bb-screen is-search">
                <svg className="fqb-ridge" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                  <path className="fqb-ridge-fill" d="M0 120 L0 104 C30 102 52 92 84 94 C116 96 132 78 164 74 C196 70 214 56 246 52 C278 48 296 30 326 24 C350 19 372 22 400 30 L400 120 Z" />
                  <path className="fqb-ridge-line" d="M0 104 C30 102 52 92 84 94 C116 96 132 78 164 74 C196 70 214 56 246 52 C278 48 296 30 326 24 C350 19 372 22 400 30" />
                </svg>{' '}
                <div className="fqb-panel">
                  <p className="fqb-field" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" focusable="false">
                      <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span className="fqb-q">{'13in laptop'}</span>
                    <i className="fqb-caret" />
                    <span className="fqb-enter">↵</span>
                  </p>
                  <div className="fqb-bars" role="img" aria-label="Search success rate: 51% on the first query, 32% on the second, 18% on the third.">
                    <div className="fqb-bar is-lead" style={{ '--v': '51' }}>
                      <span className="fqb-track"><i /><b>51%</b></span>
                      <span className="fqb-key">1st query</span>
                    </div>
                    <div className="fqb-bar" style={{ '--v': '32' }}>
                      <span className="fqb-track"><i /><b>32%</b></span>
                      <span className="fqb-key">2nd</span>
                    </div>
                    <div className="fqb-bar" style={{ '--v': '18' }}>
                      <span className="fqb-track"><i /><b>18%</b></span>
                      <span className="fqb-key">3rd</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bb-copy">
                <p className="bb-meta">
                  <span className="bb-no">Publication 01 / 02</span>
                  <i aria-hidden="true" />
                  <span>In-app search research</span>
                </p>
                <h3 className="bb-title" id="pub-search">The First Query</h3>
                <p className="bb-hook">
                  Why do so many apps still get search wrong, and what would getting it right take?
                </p>
                <dl className="bb-spec">
                  <div><dt>51%</dt><dd>Success rate on the first query</dd></div>
                  <div><dt>9</dt><dd>Domains, one search loop</dd></div>
                  <div><dt>31</dt><dd>Sources, graded A–D</dd></div>
                </dl>
                <div className="bb-foot">
                  <a className="bay-cta bb-cta" href="/publications/search" data-transition="" data-transition-label="The First Query" data-transition-eyebrow="Publication 01 / 02" data-cursor="Read">
                    {' '}
                    <span className="bay-cta-text">Read the publication</span>{' '}
                    <span className="bay-cta-dim" aria-hidden="true"><i /></span>{' '}
                  </a>{' '}
                  <p className="bb-time">18 min · It climbs as you read</p>
                </div>
              </div>
            </article>{' '}
            <span className="bb-pole" aria-hidden="true"><b>Publication 01</b></span>
          </li>
          <li className="bb" data-pub="1" data-dir="1">
            <span className="bb-lamps" aria-hidden="true"><i /><i /><i /></span>{' '}
            <article className="bb-face" aria-labelledby="pub-stepper" data-cursor="Read">
              <div className="bb-screen is-stepper">
                <div className="bfb-panel" role="img" aria-label="Illustration: the recommended stepper on a wide screen, a checkout in five steps: Details, Delivery, Payment, Extras and Review. A side list marks each step done, current or to come; a header reads Step 3 of 5, Payment, over a five-cell bar that charges only as steps are completed; the current step's form ends in a Continue to extras button.">
                  <p className="bfb-head" aria-hidden="true">
                    <span className="bfb-at">
                      Step{' '}
                      <b className="bfb-n">03</b>{' '}
                      of 05
                      <i />
                      <span className="bfb-name">Payment</span>
                    </span>
                    <span className="bfb-pct"><b>40</b>%</span>
                  </p>{' '}
                  <span className="bfb-cells" aria-hidden="true">
                    <i className="is-full"><b /></i>
                    <i className="is-full"><b /></i>
                    <i className="is-on"><b /></i>
                    <i><b /></i>
                    <i><b /></i>
                  </span>{' '}
                  <div className="bfb-body" aria-hidden="true">
                    <ol className="bfb-steps">
                      <li className="is-done"><span className="bfb-mark" />Details</li>
                      <li className="is-done"><span className="bfb-mark" />Delivery</li>
                      <li className="is-on"><span className="bfb-mark" />Payment</li>
                      <li><span className="bfb-mark" />Extras</li>
                      <li><span className="bfb-mark" />Review</li>
                    </ol>
                    <div className="bfb-form is-filled">
                      <p className="bfb-title">Payment</p>{' '}
                      <span className="bfb-field"><small>Card number</small><i /></span>{' '}
                      <span className="bfb-field"><small>Expiry</small><i /></span>{' '}
                      <span className="bfb-field"><small>Name on card</small><i /></span>{' '}
                      <span className="bfb-btn">Continue to <span className="bfb-next">extras</span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bb-copy">
                <p className="bb-meta">
                  <span className="bb-no">Publication 02 / 02</span>
                  <i aria-hidden="true" />
                  <span>Stepper UX research</span>
                </p>
                <h3 className="bb-title" id="pub-stepper">Built to Finish</h3>
                <p className="bb-hook">Does showing progress actually help people finish a multi-step flow?</p>
                <dl className="bb-spec">
                  <div><dt>22%</dt><dd>Quit when the bar starts slow</dd></div>
                  <div><dt>34%</dt><dd>Finished with a head start, vs 19%</dd></div>
                  <div><dt>17</dt><dd>Sources, in five tiers</dd></div>
                </dl>
                <div className="bb-foot">
                  <a className="bay-cta bb-cta" href="/publications/stepper" data-transition="" data-transition-label="Built to Finish" data-transition-eyebrow="Publication 02 / 02" data-cursor="Read">
                    {' '}
                    <span className="bay-cta-text">Read the publication</span>{' '}
                    <span className="bay-cta-dim" aria-hidden="true"><i /></span>{' '}
                  </a>{' '}
                  <p className="bb-time">14 min · It charges as you read</p>
                </div>
              </div>
            </article>{' '}
            <span className="bb-pole" aria-hidden="true"><b>Publication 02</b></span>
          </li>
        </ol>
        {/* The camera pulls back behind a toy grand tourer. */}
        <div className="pd-car" aria-hidden="true">
          <span className="pd-beam" />{' '}
          <svg className="pd-car-svg" viewBox="0 0 400 230" focusable="false">
            <defs>
              <linearGradient id="pdBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#45464d" />
                <stop offset="0.42" stopColor="#202125" />
                <stop offset="1" stopColor="#0e0f12" />
              </linearGradient>
              <linearGradient id="pdGlass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#2a3142" />
                <stop offset="1" stopColor="#08090c" />
              </linearGradient>
              <radialGradient id="pdShadow">
                <stop offset="0" stopColor="#000" stopOpacity="0.85" />
                <stop offset="1" stopColor="#000" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="pdSpill">
                <stop offset="0" stopColor="#ff3b1d" stopOpacity="0.35" />
                <stop offset="1" stopColor="#ff3b1d" stopOpacity="0" />
              </radialGradient>
              <filter id="pdGlow" x="-20%" y="-300%" width="140%" height="700%">
                <feGaussianBlur stdDeviation="5" />
              </filter>
            </defs>
            <ellipse cx="200" cy="214" rx="200" ry="20" fill="url(#pdSpill)" />
            <ellipse cx="200" cy="208" rx="188" ry="14" fill="url(#pdShadow)" />
            <g className="pd-tyres">
              <rect x="20" y="134" width="76" height="78" rx="16" fill="#09090b" />
              <rect x="304" y="134" width="76" height="78" rx="16" fill="#09090b" />
              <path d="M28 196 H88 M28 186 H88 M312 196 H372 M312 186 H372" stroke="#1d1d21" strokeWidth="2" />
            </g>
            <path fill="url(#pdBody)" d="M24 176 C22 150 26 122 44 108 C60 96 84 92 108 90 C126 62 156 46 200 46 C244 46 274 62 292 90 C316 92 340 96 356 108 C374 122 378 150 376 176 C376 186 368 192 358 192 L42 192 C32 192 24 186 24 176 Z" />
            <path fill="none" stroke="#ece9e2" strokeOpacity="0.35" strokeWidth="1.5" d="M44 108 C60 96 84 92 108 90 C126 62 156 46 200 46 C244 46 274 62 292 90 C316 92 340 96 356 108" />
            <ellipse cx="200" cy="100" rx="120" ry="10" fill="#fff" opacity="0.05" />
            <path fill="url(#pdGlass)" d="M118 90 C134 68 162 56 200 56 C238 56 266 68 282 90 Z" />
            <path fill="none" stroke="#ece9e2" strokeOpacity="0.18" strokeWidth="1" d="M134 84 C150 68 170 62 196 61" />
            <rect className="pd-light-glow" x="46" y="110" width="308" height="9" rx="4.5" fill="#ff3b1d" filter="url(#pdGlow)" />
            <rect x="46" y="110" width="308" height="9" rx="4.5" fill="#ff3b1d" />
            <rect x="52" y="112" width="296" height="2" rx="1" fill="#ffc2b8" opacity="0.75" />
            <rect x="166" y="136" width="68" height="20" rx="2" fill="#e8e5de" />
            <text x="200" y="150" textAnchor="middle" className="pd-plate">ND 2026</text>
            <path fill="#0a0a0c" d="M100 176 H300 L288 192 H112 Z" />
            <path d="M140 178 V191 M170 178 V191 M200 178 V191 M230 178 V191 M260 178 V191" stroke="#1d1d21" strokeWidth="2" />
          </svg>
        </div>
        {/* The route, read like a navigation strip. */}
        <div className="pd-hud" aria-hidden="true">
          <p className="pd-read">
            <span className="pd-read-k">Next</span>
            <span className="pd-read-v">The First Query</span>
            <span className="pd-read-d"><b>0</b> m</span>
          </p>
          <div className="pd-route">
            <i className="pd-route-fill" />{' '}
            <span className="pd-route-mark" data-mark="0"><b>Publication 01</b></span>{' '}
            <span className="pd-route-mark" data-mark="1"><b>Publication 02</b></span>{' '}
            <span className="pd-route-mark is-end" data-mark="2"><b>The Designer</b></span>
          </div>
        </div>
      </div>
    </section>
  );
}
