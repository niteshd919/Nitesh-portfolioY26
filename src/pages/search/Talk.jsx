/*  STAGE 06 · SEARCH THAT TALKS — AI + conversational search
*/
export default function Talk() {
  return (
    <section className="case-section fq-stage" id="talk" data-stage="" data-elev="2450" data-section="Search that talks" data-index="06">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">06</span>
        <span className="rule-title section-index-label">Search that talks</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Frontier</span>
      </div>
      <header className="fq-gate">
        <p className="fq-gate-alt">
          <span className="fq-gate-num">2450</span>
          <span className="fq-gate-unit">m</span>
          <span className="sr-only"> elevation</span>
        </p>
        <div className="fq-gate-copy">
          <p className="fq-gate-level">
            <span>Stage 06 / 08</span>
            <i aria-hidden="true" />
            <span>Frontier · AI &amp; conversation</span>
          </p>
          <h2 className="fq-gate-title">AI should sit on top of real results.</h2>
          <p className="fq-gate-q"><span>Question</span> What changes when search learns to answer back?</p>
        </div>
        <div className="fq-track" aria-hidden="true" />
      </header>
      <div className="fq-split">
        <figure className="fq-layers" role="img" aria-label="Three layers: a cited AI answer sits on top of ranked, checkable results, which sit on hybrid retrieval that combines keywords for exact strings with vectors for meaning.">
          <div className="fq-layer is-ai" aria-hidden="true">
            <span>Layer 03</span>
            <b>Cited AI answer</b>
            <small>Summary · citations · dates</small>
          </div>
          <div className="fq-layer" aria-hidden="true">
            <span>Layer 02</span>
            <b>Ranked, checkable results</b>
            <small>What the answer stands on</small>
          </div>
          <div className="fq-layer" aria-hidden="true">
            <span>Layer 01</span>
            <b>Hybrid retrieval</b>
            <small>Keywords for exact strings · vectors for meaning</small>
          </div>
        </figure>
        <div className="fq-trust">
          <span className="case-label">Trust splits by stakes</span>{' '}
          <dl className="fq-trust-list">
            <div><dt>Low stakes</dt><dd>Quick facts often end in the AI summary.</dd></div>
            <div className="is-high">
              <dt>Money and health</dt>
              <dd>Users verify with official sources such as PayPal or Mayo Clinic.</dd>
            </div>
          </dl>
          <p className="fq-small">When a summary is wrong or generic, users abandon it.</p>
          <div className="fq-dodont">
            <div className="is-do">
              <h4>Use AI for</h4>
              <ul className="case-bullets">
                <li>Turning long queries into editable filters</li>
                <li>Summarising help content, with citations and dates</li>
                <li>Hybrid retrieval: keywords for exact strings, vectors for meaning</li>
              </ul>
            </div>
            <div className="is-dont">
              <h4>Never for</h4>
              <ul className="case-bullets">
                <li>Account facts: balances, statuses, test results</li>
                <li>Health triage without clinical protocols</li>
                <li>Actions without a confirmation step</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="fq-source">
        Sources: Search Engine Journal (Indig, 2025; 70-user study); Manticore Search hybrid search manual
      </p>
      <div className="case-subblock">
        <div className="case-section-head fq-head">
          <h3 className="case-subtitle">In a chat, search changes shape</h3>
          <p className="case-section-intro">
            When search lives inside an assistant, the same loop still exists. Each component just changes form.
          </p>
        </div>
        <div className="case-table-wrap">
          <table className="case-table fq-table fq-table--shape">
            <thead>
              <tr><th scope="col">Component</th><th scope="col">Classic search</th><th scope="col">In a chat</th></tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Entry</th>
                <td data-label="Classic search">A search box</td>
                <td data-label="In a chat">A prompt box plus starter prompts</td>
              </tr>
              <tr>
                <th scope="row">Suggestions</th>
                <td data-label="Classic search">Autocomplete as you type</td>
                <td data-label="In a chat">Suggested follow-ups after each answer</td>
              </tr>
              <tr>
                <th scope="row">Understanding</th>
                <td data-label="Classic search">Keywords, synonyms, filters</td>
                <td data-label="In a chat">Intent and constraints, remembered across turns</td>
              </tr>
              <tr>
                <th scope="row">Clarifying</th>
                <td data-label="Classic search">Filters the user picks</td>
                <td data-label="In a chat">One good question, only when it adds value</td>
              </tr>
              <tr>
                <th scope="row">Results</th>
                <td data-label="Classic search">A ranked list</td>
                <td data-label="In a chat">An answer plus cards: products, transactions, doctors</td>
              </tr>
              <tr>
                <th scope="row">Showing its work</th>
                <td data-label="Classic search">Visible filter chips</td>
                <td data-label="In a chat">The constraints in use, shown and editable</td>
              </tr>
              <tr>
                <th scope="row">Recovery</th>
                <td data-label="Classic search">A zero-results page</td>
                <td data-label="In a chat">Relax constraints, suggest options, reach a human</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="fq-note-line">
          <strong>Same loop, new shape:</strong>{' '}
          the assistant still has to show what it understood, and never leave the user stuck.
        </p>
      </div>
      <div className="case-subblock">
        <h3 className="case-subtitle">Chat is search by another name</h3>
        <dl className="fq-readouts fq-readouts--3">
          <div className="fq-readout">
            <dt><span className="fq-odo">~75</span><small>%</small></dt>
            <dd>of chatbot conversations were information-seeking</dd>
          </div>
          <div className="fq-readout">
            <dt><span className="fq-odo">3.8</span><small>%</small></dt>
            <dd>included a clarifying question, though users wanted them</dd>
          </div>
          <div className="fq-readout">
            <dt><span className="fq-odo">22</span><small>%</small></dt>
            <dd>were followed by any check of the answer</dd>
          </div>
        </dl>
        <p className="fq-small fq-after">
          From a two-week diary study: 425 conversations by 18 people using ChatGPT, Bard and Bing Chat.
        </p>
        <div className="fq-types">
          <span className="case-label">Six conversation types: spot which one is happening, and adapt</span>{' '}
          <ol className="fq-type-list">
            <li className="fq-type"><b>Search query</b><p>One simple prompt, no follow-up</p></li>
            <li className="fq-type"><b>Funneling</b><p>Starts vague, narrows step by step</p></li>
            <li className="fq-type"><b>Exploring</b><p>Starts broad, goes deeper to learn</p></li>
            <li className="fq-type"><b>Chiseling</b><p>Covers many facets of one topic</p></li>
            <li className="fq-type"><b>Expanding</b><p>Broadens after a weak answer</p></li>
            <li className="fq-type"><b>Pinpointing</b><p>One detailed, specific prompt</p></li>
          </ol>
          <p className="fq-note-line">
            <strong>Ask well or not at all:</strong>{' '}
            good clarifying questions raised success and satisfaction; poor ones lowered them.
          </p>
        </div>
        <p className="fq-source">
          Sources: NN/g diary study and conversation types (2023); Zou et al., ACM TOIS (2023)
        </p>
      </div>
      {/* Conversation · Ecommerce */}
      <article className="fq-convo">
        <header className="fq-convo-head">
          <span className="case-label">Conversation · Ecommerce</span>{' '}
          <h3 className="case-subtitle">Turn a shopping need into a shortlist</h3>
        </header>
        <figure className="fq-chat" role="img" aria-label="Illustrative chat. The shopper asks for running shoes for flat feet under ₹5,000. The assistant shows the constraints it is using as removable chips, three stability shoes with prices from the catalogue, and two follow-ups: compare these three, or show wider sizes.">
          <div className="fq-chat-bar" aria-hidden="true">
            <span>Shopping assistant</span>
            <span className="fq-chat-ai">AI</span>
          </div>
          <ol className="fq-chat-log" aria-hidden="true">
            <li className="fq-msg is-user">Running shoes for flat feet, under ₹5,000</li>
            <li className="fq-msg is-bot">
              <p>Here are three stability shoes. I’m using:</p>
              <p className="fq-chips">
                <span>Running shoes ×</span>
                <span>Stability ×</span>
                <span>Under ₹5,000 ×</span>
              </p>
              <div className="fq-cards">
                <div><b>Shoe A</b><span>₹4,299</span><small>Firm arch support</small></div>
                <div><b>Shoe B</b><span>₹3,899</span><small>Wide toe box</small></div>
                <div><b>Shoe C</b><span>₹4,799</span><small>Extra cushioning</small></div>
              </div>
            </li>
            <li className="fq-msg is-follow"><span>Compare these three</span><span>Show wider sizes</span></li>
          </ol>
        </figure>
        <div className="fq-convo-side">
          <dl className="fq-readouts fq-readouts--2">
            <div className="fq-readout">
              <dt><span className="fq-odo">300</span><small>M</small></dt>
              <dd>customers used Amazon’s Rufus assistant in 2025</dd>
            </div>
            <div className="fq-readout">
              <dt><span className="fq-odo">~$12</span><small>B</small></dt>
              <dd>in extra annualised sales Amazon credits to it</dd>
            </div>
          </dl>
          <ul className="case-bullets">
            <li>Turn the need into constraints, shown as editable chips</li>
            <li>Ground every pick in the live catalogue: price, stock, specs</li>
            <li>Ask one useful question when the need is broad</li>
            <li>Compare in a table when asked “which is better?”</li>
            <li>Label sponsored picks; ads never pose as advice</li>
            <li>Hand off to the product page or cart in one tap</li>
          </ul>
          <p className="fq-source">
            Sources: Amazon Q4 2025 results via Modern Retail (2026), Amazon’s own figures; Baymard (2026) · Chat is illustrative
          </p>
        </div>
      </article>
      {/* Conversation · Fintech */}
      <article className="fq-convo is-reverse">
        <header className="fq-convo-head">
          <span className="case-label">Conversation · Fintech</span>{' '}
          <h3 className="case-subtitle">Answer from records, escalate disputes</h3>
        </header>
        <figure className="fq-chat" role="img" aria-label="Illustrative banking chat. Asked what was spent on food delivery last month, the assistant answers ₹6,480 across 14 orders in October and lists the orders from the ledger. When the customer says one of them isn’t theirs, it recognises a disputed charge and offers to report it or talk to an agent.">
          <div className="fq-chat-bar" aria-hidden="true">
            <span>Bank assistant</span>
            <span className="fq-chat-ai">AI</span>
          </div>
          <ol className="fq-chat-log" aria-hidden="true">
            <li className="fq-msg is-user">What did I spend on food delivery last month?</li>
            <li className="fq-msg is-bot">
              <p><b>₹6,480</b> across 14 orders in October</p>
              <ul className="fq-ledger">
                <li><span>28 Oct · Food delivery</span><b>₹612</b></li>
                <li><span>21 Oct · Food delivery</span><b>₹845</b></li>
                <li><span>14 Oct · Food delivery</span><b>₹498</b></li>
                <li className="is-more"><span>View all 14</span></li>
              </ul>
            </li>
            <li className="fq-msg is-user">One of these isn’t mine</li>
            <li className="fq-msg is-bot">
              <p>That sounds like a disputed charge.</p>
              <p className="fq-actions">
                <span className="is-primary">Report this charge</span>
                <span>Talk to an agent</span>
              </p>
            </li>
          </ol>
        </figure>
        <div className="fq-convo-side">
          <dl className="fq-readouts fq-readouts--2">
            <div className="fq-readout">
              <dt><span className="fq-odo">37</span><small>%</small></dt>
              <dd>of the US population used a bank’s chatbot in 2022</dd>
            </div>
            <div className="fq-readout">
              <dt><span className="fq-odo">3</span><small>B+</small></dt>
              <dd>interactions with Bank of America’s Erica since 2018</dd>
            </div>
          </dl>
          <ul className="case-bullets">
            <li>Answer from account records, shown as data, not prose</li>
            <li>Spot disputes and fraud; route them to the formal process</li>
            <li>Always offer a human; break loops of unhelpful answers</li>
            <li>Confirm every action and keep step-up authentication</li>
          </ul>
          <p className="fq-privacy">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <path d="M12 3 4 6.5v5.2c0 4.6 3.4 8.3 8 9.3 4.6-1 8-4.7 8-9.3V6.5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span>
              <strong>Say it’s AI.</strong>{' '}
              EU chatbots must disclose this from 2 August 2026. RBI’s FREE-AI report (2025) proposes AI-use disclosure and a way to contest AI decisions.
            </span>
          </p>
          <p className="fq-source">
            Sources: CFPB 2023; ATM Marketplace 2025; Cooley 2026; Legal500 2025 · Chat is illustrative
          </p>
        </div>
      </article>
      {/* Conversation · Healthtech */}
      <article className="fq-convo">
        <header className="fq-convo-head">
          <span className="case-label">Conversation · Healthtech</span>{' '}
          <h3 className="case-subtitle">Ask for the details people leave out</h3>
        </header>
        <figure className="fq-hbars fq-hbars--health" role="img" aria-label="Correct answers on doctor-written scenarios, 1,298 participants. Identified the condition: LLM alone 94.9%, people using an LLM under 34.5%. Chose the right next step: LLM alone 56.3%, people using an LLM under 44.2%.">
          <figcaption className="case-label">
            Correct answers on doctor-written scenarios · 1,298 participants
          </figcaption>
          <p className="fq-hbars-group" aria-hidden="true">Identified the condition</p>
          <ol aria-hidden="true">
            <li style={{ '--v': '94.9' }}>
              <span className="fq-hbar-key">LLM alone</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><b className="fq-odo">94.9</b>%</span>
            </li>
            <li className="is-lead" style={{ '--v': '34.5' }}>
              <span className="fq-hbar-key">People + LLM</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><small>under</small> <b className="fq-odo">34.5</b>%</span>
            </li>
          </ol>
          <p className="fq-hbars-group" aria-hidden="true">Chose the right next step</p>
          <ol aria-hidden="true">
            <li style={{ '--v': '56.3' }}>
              <span className="fq-hbar-key">LLM alone</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><b className="fq-odo">56.3</b>%</span>
            </li>
            <li className="is-lead" style={{ '--v': '44.2' }}>
              <span className="fq-hbar-key">People + LLM</span>
              <span className="fq-hbar-track"><i /></span>
              <span className="fq-hbar-val"><small>under</small> <b className="fq-odo">44.2</b>%</span>
            </li>
          </ol>
          <p className="fq-small">
            People using an LLM did no better than a control group using their usual sources. The model knew the answer; the conversation lost it.
          </p>
        </figure>
        <div className="fq-convo-side">
          <span className="case-label">Why it failed</span>{' '}
          <ul className="case-bullets fq-why">
            <li>People left out key details</li>
            <li>Small rewordings changed the answer</li>
            <li>Good and bad advice came mixed together</li>
          </ul>{' '}
          <span className="case-label case-label-gap">Design the conversation to close the gap</span>{' '}
          <ul className="case-bullets">
            <li>Ask for what people omit: age, duration, severity</li>
            <li>Check red flags first; route to urgent care</li>
            <li>Same facts, same answer: use vetted, dated content</li>
            <li>Show what it assumed, so the user can correct it</li>
            <li>Offer next steps, never a diagnosis</li>
            <li>For clinicians: answer from the chart and cite the note or lab</li>
            <li>Guard against over-trust: prompt a check with a clinician</li>
          </ul>
          <p className="fq-source">
            Sources: Bean et al., Nature Medicine (2026), a randomised study led by Oxford; WHO guidance on large multi-modal models (2024)
          </p>
        </div>
      </article>
      <div className="case-subblock">
        <div className="case-section-head fq-head">
          <h3 className="case-subtitle">Each domain needs its own conversation</h3>
          <p className="case-section-intro">
            The same conversational principles, tuned per domain. These rows are design recommendations rather than measured findings.
          </p>
        </div>
        <div className="case-table-wrap">
          <table className="case-table fq-table">
            <thead>
              <tr><th scope="col">Domain</th><th scope="col">Users ask</th><th scope="col">Must-have behaviour</th></tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">SaaS and B2B tools</th>
                <td data-label="Users ask">“How do I export invoices?”</td>
                <td data-label="Must-have behaviour">Answer from docs; do tasks only with a preview</td>
              </tr>
              <tr>
                <th scope="row">Edtech</th>
                <td data-label="Users ask">“Is my answer right?”</td>
                <td data-label="Must-have behaviour">Give hints and questions before answers</td>
              </tr>
              <tr>
                <th scope="row">Media and streaming</th>
                <td data-label="Users ask">“Something like X, but shorter”</td>
                <td data-label="Must-have behaviour">Moods become filters; only titles the user can watch</td>
              </tr>
              <tr>
                <th scope="row">Travel</th>
                <td data-label="Users ask">“Beach trip in May, under ₹60k”</td>
                <td data-label="Must-have behaviour">Remember constraints; live prices, never invented</td>
              </tr>
              <tr className="is-focus">
                <th scope="row">In-vehicle</th>
                <td data-label="Users ask">“Find a charger on my route”</td>
                <td data-label="Must-have behaviour">Voice first, short replies, confirm before acting</td>
              </tr>
              <tr>
                <th scope="row">Intranet</th>
                <td data-label="Users ask">“What’s our leave policy?”</td>
                <td data-label="Must-have behaviour">Answer only from documents the person may see</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="fq-note-line">
          <strong>In every domain:</strong>{' '}
          say it’s AI, cite sources, and keep a path to the classic results and to a human.
        </p>
        <p className="fq-source">
          Design synthesis from the research; NHTSA glance limits apply to in-vehicle voice and screens
        </p>
      </div>
    </section>
  );
}
