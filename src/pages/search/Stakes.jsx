/*  STAGE 05 · HIGHER STAKES — domains
*/
export default function Stakes() {
  return (
    <section className="case-section fq-stage" id="stakes" data-stage="" data-elev="2050" data-section="Higher stakes" data-index="05">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">05</span>
        <span className="rule-title section-index-label">Higher stakes</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Domains</span>
      </div>
      <header className="fq-gate">
        <p className="fq-gate-alt">
          <span className="fq-gate-num">2050</span>
          <span className="fq-gate-unit">m</span>
          <span className="sr-only"> elevation</span>
        </p>
        <div className="fq-gate-copy">
          <p className="fq-gate-level"><span>Stage 05 / 08</span><i aria-hidden="true" /><span>Domains</span></p>
          <h2 className="fq-gate-title">Same search loop, different stakes.</h2>
          <p className="fq-gate-q">
            <span>Question</span>{' '}
            How does search change when a wrong result costs money, health or safety?
          </p>
        </div>
        <div className="fq-track" aria-hidden="true" />
      </header>
      <figure className="fq-spectrum">
        <div className="fq-spectrum-zones">
          <ul className="is-low"><li>Media and streaming</li><li>Ecommerce</li></ul>
          <ul className="is-mid"><li>Travel</li><li>SaaS and B2B tools</li><li>Edtech</li></ul>
          <ul className="is-high"><li>Fintech</li><li>Healthtech</li><li>In-vehicle</li></ul>
        </div>{' '}
        <span className="fq-spectrum-bar" aria-hidden="true"><i /></span>{' '}
        <p className="fq-spectrum-ends">
          <span>Lower cost of a wrong result</span>
          <span>Higher cost of a wrong result</span>
        </p>
        <div className="fq-spectrum-modes">
          <div>
            <h4>Optimise for recall and discovery</h4>
            <p>Synonyms, inspiration, personalised ranking and rich recovery paths.</p>
          </div>
          <div className="is-high">
            <h4>Optimise for precision, privacy and authority</h4>
            <p>Explicit scope, sources and dates, masked data and gated actions.</p>
          </div>
        </div>
        <figcaption className="fq-source">
          The same seven components apply everywhere; what changes is the cost of a miss. Placement is a judgement from the research synthesis, not a measured ranking.
        </figcaption>
      </figure>
      {/* Playbook · Fintech */}
      <article className="fq-play">
        <header className="case-section-head fq-head">
          <div>
            <span className="case-label">Playbook · Fintech</span>{' '}
            <h3 className="case-subtitle">Find the one transaction, safely</h3>
          </div>
          <p className="case-section-intro">
            One transaction, payee, action or answer, and a miss costs money or privacy. Search here is about precision and trust.
          </p>
        </header>
        <div className="fq-play-body">
          <figure className="fq-mock fq-bank" role="img" aria-label="Illustrative banking search for “1,299”: the amount is matched as a number, a raw bank string is cleaned into the merchant name Northwind Café, the card number is masked, and a freeze-card action asks for the PIN first.">
            <div className="fq-mock-field" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span>1,299</span>
            </div>
            <div className="fq-bank-body" aria-hidden="true">
              <span className="fq-bank-label">Amount matches</span>{' '}
              <div className="fq-txn">
                <span className="fq-txn-logo">N</span>{' '}
                <span className="fq-txn-name">
                  <s className="fq-txn-raw">POS 0423 NRTHWND*CAFE BLR</s>
                  <b className="fq-txn-clean">Northwind Café</b>
                  <small>Coffee · 14 Oct · Card •• 4821</small>
                </span>{' '}
                <span className="fq-txn-amt">−₹<mark>1,299</mark>.00</span>
              </div>{' '}
              <span className="fq-bank-label">Actions</span>{' '}
              <div className="fq-txn is-action">
                <span className="fq-txn-logo is-lock">
                  <svg viewBox="0 0 24 24" width="13" height="13">
                    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="5" y="10.5" width="14" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>{' '}
                <span className="fq-txn-name"><b>Freeze card •• 4821</b><small>Asks for your PIN first</small></span>{' '}
                <span className="fq-txn-go">→</span>
              </div>
            </div>
          </figure>
          <div className="fq-fap">
            <div className="fq-fap-col">
              <span className="fq-fap-no">F</span>
              <h4>Find</h4>
              <ul className="case-bullets">
                <li>Clean merchant names and logos, not raw bank strings</li>
                <li>Search merchant, person, notes, amount, place and category across all accounts</li>
                <li>Numbers as numbers: “1,299”, “₹1,299.00”, “over 5000”</li>
                <li>Plain dates like “last month”, shown as a filter</li>
              </ul>
            </div>
            <div className="fq-fap-col">
              <span className="fq-fap-no">A</span>
              <h4>Act</h4>
              <ul className="case-bullets">
                <li>Make actions findable: “freeze card”, “download statement”</li>
                <li>Deep-link to them, but keep step-up authentication</li>
                <li>Never execute anything from a suggestion</li>
                <li>Answer fees and limits from the official source, with its date</li>
              </ul>
            </div>
            <div className="fq-fap-col">
              <span className="fq-fap-no">P</span>
              <h4>Protect</h4>
              <ul className="case-bullets">
                <li>Mask account and card numbers in suggestions and recents</li>
                <li>Let users clear history; hide sensitive recents on shared screens</li>
                <li>Keep queries out of third-party analytics and URLs</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="fq-confidence">
          <span className="fq-gauge" style={{ '--c': '0.4' }} aria-hidden="true"><i /></span>
          <span>
            <strong>Confidence: low to medium.</strong>{' '}
            Public research on fintech search is thin; validate with your logs and a diary study.
          </span>
        </p>
        <p className="fq-source">
          Sources: Visa Developer; Revolut (2018); Monzo community; Search Engine Journal (Indig, 2025) · Mock-up is illustrative
        </p>
      </article>
      {/* Playbook · Healthtech */}
      <article className="fq-play">
        <header className="case-section-head fq-head">
          <div>
            <span className="case-label">Playbook · Healthtech</span>{' '}
            <h3 className="case-subtitle">Bridge lay words and clinical terms</h3>
          </div>
          <p className="case-section-intro">
            The core health search problem is vocabulary. Patients type the left; records and expert content say the right.
          </p>
        </header>
        <div className="fq-split">
          <ul className="fq-lexicon">
            <li>
              <span className="fq-lay">“dry mouth”</span>
              <i className="fq-lex-arrow" aria-hidden="true" />
              <span className="fq-clin">xerostomia</span>
            </li>
            <li>
              <span className="fq-lay">“flu”</span>
              <i className="fq-lex-arrow" aria-hidden="true" />
              <span className="fq-clin">influenza</span>
            </li>
            <li>
              <span className="fq-lay">“flat head”</span>
              <i className="fq-lex-arrow" aria-hidden="true" />
              <span className="fq-clin">plagiocephaly</span>
            </li>
          </ul>
          <figure className="fq-stack" role="img" aria-label="Swapping lay queries for clinical terms: 42% of searches got better, 39% did not change and 19% got worse.">
            <figcaption className="case-label">Swapping lay queries for clinical terms</figcaption>{' '}
            <span className="fq-stack-bar" aria-hidden="true">
              <i style={{ '--v': '42' }} />
              <i style={{ '--v': '39' }} />
              <i style={{ '--v': '19' }} />
            </span>{' '}
            <p className="fq-stack-key" aria-hidden="true">
              <span style={{ '--v': '42' }}><b>42%</b> better</span>
              <span style={{ '--v': '39' }}><b>39%</b> no change</span>
              <span style={{ '--v': '19' }}><b>19%</b> worse</span>
            </p>
            <p className="fq-lead fq-lead--sm">Expand with curated synonyms; never replace the user’s words.</p>
            <p className="fq-small">Arcane terms hurt: “epilepsy, absence” did worse than “petit mal seizure”.</p>
          </figure>
        </div>
        <p className="fq-source">Sources: Vydiswaran et al., AMIA 2014; Plovnick and Zeng, JMIR 2004</p>
        <div className="case-subblock">
          <h3 className="case-subtitle">Two audiences need two designs</h3>
          <div className="case-panel-grid" style={{ '--cols': '2' }}>
            <div className="case-panel">
              <span className="case-panel-index">01</span>{' '}
              <h3>Patients and caregivers</h3>
              <ul className="case-bullets">
                <li>Search by symptom or plain name: “skin doctor” finds dermatology</li>
                <li>Safety first: red-flag queries surface urgent-care guidance</li>
                <li>Show author, reviewer and review date on every answer</li>
                <li>Plain-language titles with the clinical term alongside</li>
              </ul>
            </div>
            <div className="case-panel">
              <span className="case-panel-index">02</span>{' '}
              <h3>Clinicians in the EHR</h3>
              <ul className="case-bullets">
                <li>Role-aware results: pharmacists search mostly for medications</li>
                <li>Suggest synonyms: 33 clinicians rated search higher with them on</li>
                <li>Show strength, form and route so look-alike drugs can’t be confused</li>
                <li>Treat repeated searches as a sign information is hard to find</li>
              </ul>
            </div>
          </div>
          <p className="fq-privacy">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <rect x="5" y="10.5" width="14" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 14v3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span>
              <strong>Keep health queries first-party:</strong>{' '}
              no ad or analytics pixels, de-identified logs. US HHS guidance still covers logged-in pages after a 2024 court ruling narrowed it.
            </span>
          </p>
          <p className="fq-source">
            Sources: Kaiser Permanente DOR 2020; Hanauer et al. 2017; Search Engine Journal 2025; Morrison Foerster 2024. Red-flag routing is a design recommendation to define with clinical governance.
          </p>
        </div>
      </article>
      {/* Playbook · Every other domain, the car in focus */}
      <article className="fq-play">
        <header className="case-section-head fq-head">
          <div>
            <span className="case-label">Playbook · Other domains</span>{' '}
            <h3 className="case-subtitle">Every domain has its own must-have</h3>
          </div>
          <p className="case-section-intro">
            The same loop applies everywhere; what changes is the thing being found and the one behaviour search can’t do without.
          </p>
        </header>
        <div className="case-table-wrap">
          <table className="case-table fq-table">
            <thead>
              <tr>
                <th scope="col">Domain</th>
                <th scope="col">What users look for</th>
                <th scope="col">Must-have behaviour</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">SaaS and B2B tools</th>
                <td data-label="What users look for">Records, documents, people, commands</td>
                <td data-label="Must-have behaviour">Command palette for actions; permission-aware results</td>
              </tr>
              <tr>
                <th scope="row">Edtech</th>
                <td data-label="What users look for">Concepts, lessons, video moments</td>
                <td data-label="Must-have behaviour">Concept synonyms and misconceptions; transcript search</td>
              </tr>
              <tr>
                <th scope="row">Media and streaming</th>
                <td data-label="What users look for">Titles, people, moods</td>
                <td data-label="Must-have behaviour">Heavy typo tolerance; availability by plan and region</td>
              </tr>
              <tr>
                <th scope="row">Travel</th>
                <td data-label="What users look for">Places, dates, constraints</td>
                <td data-label="Must-have behaviour">Disambiguate places (“Paris, TX”); flexible dates</td>
              </tr>
              <tr className="is-focus">
                <th scope="row">In-vehicle</th>
                <td data-label="What users look for">Destinations, media, settings</td>
                <td data-label="Must-have behaviour">Voice first; each glance 2 s or less, 12 s per task (NHTSA)</td>
              </tr>
              <tr>
                <th scope="row">Intranet</th>
                <td data-label="What users look for">Policies, people, documents</td>
                <td data-label="Must-have behaviour">Search across tools; best bets for top queries; access control</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="fq-glance">
          <div className="fq-glance-copy">
            <span className="case-label">In focus · In-vehicle</span>{' '}
            <p className="fq-lead">In the car, search is safety-critical.</p>
            <p className="case-copy">
              NHTSA’s voluntary guidelines keep each glance to two seconds and a whole task to twelve seconds of eyes off the road. So in-vehicle search leans on voice and prediction instead of typing.
            </p>
          </div>
          <figure className="fq-glance-meter" role="img" aria-label="Eyes-off-road budget for one task: 12 seconds in total, with no single glance longer than 2 seconds.">
            <span className="fq-glance-head" aria-hidden="true">
              <span>Eyes off road · one task</span>
              <b><span className="fq-glance-t">12.0</span> s</b>
            </span>{' '}
            <span className="fq-glance-bar" aria-hidden="true"><i className="fq-glance-fill" /></span>{' '}
            <span className="fq-glance-ticks" aria-hidden="true">
              <span>0</span>
              <span>2</span>
              <span>4</span>
              <span>6</span>
              <span>8</span>
              <span>10</span>
              <span>12 s</span>
            </span>{' '}
            <span className="fq-glance-rule dim" aria-hidden="true">≤ 2 s per glance</span>
          </figure>
        </div>
        <p className="fq-source">
          Sources: research document synthesis; US DOT / NHTSA visual-manual distraction guidelines
        </p>
      </article>
    </section>
  );
}
