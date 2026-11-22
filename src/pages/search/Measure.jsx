/*  STAGE 07 · MEASURE & BUILD — mastery
*/
export default function Measure() {
  return (
    <section className="case-section fq-stage" id="measure" data-stage="" data-elev="2800" data-section="Measure &amp; build" data-index="07">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">07</span>
        <span className="rule-title section-index-label">Measure &amp; build</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Mastery</span>
      </div>
      <header className="fq-gate">
        <p className="fq-gate-alt">
          <span className="fq-gate-num">2800</span>
          <span className="fq-gate-unit">m</span>
          <span className="sr-only"> elevation</span>
        </p>
        <div className="fq-gate-copy">
          <p className="fq-gate-level"><span>Stage 07 / 08</span><i aria-hidden="true" /><span>Mastery</span></p>
          <h2 className="fq-gate-title">Measure a stack, then build behind gates.</h2>
          <p className="fq-gate-q"><span>Question</span> How do we know it works, and in what order do we build it?</p>
        </div>
        <div className="fq-track" aria-hidden="true" />
      </header>
      <div className="fq-split fq-split--strata">
        <div>
          <h3 className="case-subtitle">Measure a stack, not a single number</h3>
          <p className="case-copy">
            Task success is the goal; each layer below explains why it moves. When success drops, read down the stack.
          </p>
          <p className="case-copy">
            Pair every metric with a guardrail: cutting zero results by returning everything destroys precision. Segment by query type, and set targets from your own baseline rather than vendor benchmarks.
          </p>
          <p className="fq-source">Sources: NN/g response-time limits; SearchStax site-search analytics definitions</p>
        </div>
        <ol className="fq-strata">
          <li className="fq-stratum is-top">
            <div><b>Outcome</b><small>Did users get what they came for?</small></div>
            <p>Task success · Time to success · Ease rating</p>
          </li>
          <li className="fq-stratum">
            <div><b>Behaviour</b><small>Where does the loop break?</small></div>
            <p>Zero results · Clicks · Exits · Reformulations · Recovery</p>
          </li>
          <li className="fq-stratum">
            <div><b>Relevance</b><small>Is ranking getting better?</small></div>
            <p>nDCG@10 · Precision@k on a judged query set</p>
          </li>
          <li className="fq-stratum">
            <div><b>System</b><small>Is it fast and complete?</small></div>
            <p>Latency (≈0.1 s suggest, ≈1 s results) · Coverage</p>
          </li>
        </ol>
      </div>
      <div className="case-subblock">
        <div className="case-section-head fq-head">
          <h3 className="case-subtitle">For conversations: measure resolution, not replies</h3>
          <p className="case-section-intro">
            Classic metrics still apply underneath, but a conversation is judged by whether the task got resolved.
          </p>
        </div>
        <div className="fq-quads">
          <div className="fq-quad is-key">
            <h4>Outcome: did it solve the task?</h4>
            <ul className="case-bullets">
              <li>Resolution rate: solved without a human</li>
              <li>Escalation quality: reached a human when needed</li>
              <li>Time to resolution</li>
            </ul>
          </div>
          <div className="fq-quad">
            <h4>Conversation: was it efficient?</h4>
            <ul className="case-bullets">
              <li>Turns to resolution</li>
              <li>Clarifying questions rated useful</li>
              <li>Repeat-question rate, a sign of loops</li>
            </ul>
          </div>
          <div className="fq-quad">
            <h4>Answer quality: was it right?</h4>
            <ul className="case-bullets">
              <li>Citation coverage of claims</li>
              <li>Unsupported-claim rate on a judged set</li>
              <li>Safety-routing accuracy</li>
            </ul>
          </div>
          <div className="fq-quad">
            <h4>Trust: was it believed, rightly?</h4>
            <ul className="case-bullets">
              <li>Source and verification clicks</li>
              <li>Thumbs-down rate with reasons</li>
              <li>Fallback to classic results</li>
            </ul>
          </div>
        </div>
        <p className="fq-warn">
          <strong>Guardrail:</strong>{' '}
          a high containment rate can mean users are trapped. Pair it with escalation quality and the repeat-question rate.
        </p>
        <p className="fq-source">Sources: CFPB on chatbot loops (2023); Zou et al. (2023); NN/g diary study (2023)</p>
      </div>
      <div className="case-subblock">
        <div className="case-section-head fq-head">
          <h3 className="case-subtitle">Build in four phases, each gated by a metric</h3>
          <p className="case-section-intro">
            Instrument first so every later change can be judged. Fix vocabulary and recovery next, because that is where most failures are. Then the interface, and AI last.
          </p>
        </div>
        <ol className="fq-phases">
          <li className="fq-phase">
            <span className="fq-phase-no">Phase 1</span>
            <h4>Instrument</h4>
            <ul className="case-bullets">
              <li>Log every search and its outcome</li>
              <li>Build a judged query set</li>
              <li>Run a baseline usability test</li>
            </ul>
            <p className="fq-gatebox"><span>Gate</span>A dashboard the team trusts</p>
          </li>
          <li className="fq-phase">
            <span className="fq-phase-no">Phase 2</span>
            <h4>Vocabulary</h4>
            <ul className="case-bullets">
              <li>Synonyms, typos and units from the logs</li>
              <li>Index help, policies and actions</li>
              <li>Rebuild the zero-results state</li>
            </ul>
            <p className="fq-gatebox"><span>Gate</span>Zero results down, precision holds</p>
          </li>
          <li className="fq-phase">
            <span className="fq-phase-no">Phase 3</span>
            <h4>Interface</h4>
            <ul className="case-bullets">
              <li>Autosuggest to the research pattern</li>
              <li>Filters, scope and snippets</li>
              <li>Accessible combobox; A/B tests</li>
            </ul>
            <p className="fq-gatebox"><span>Gate</span>Task success up, latency in budget</p>
          </li>
          <li className="fq-phase">
            <span className="fq-phase-no">Phase 4</span>
            <h4>Intelligence</h4>
            <ul className="case-bullets">
              <li>Hybrid retrieval</li>
              <li>Learning to rank from behaviour</li>
              <li>Cited AI answers</li>
            </ul>
            <p className="fq-gatebox"><span>Gate</span>Relevance up, no unsupported claims</p>
          </li>
        </ol>
        <p className="fq-note-line">
          <strong>Throughout:</strong>{' '}
          give search an owner, and review the top zero-result queries, top exits and new terms every week. Phases can overlap, but each gate must hold before the next phase counts as a success.
        </p>
      </div>
    </section>
  );
}
