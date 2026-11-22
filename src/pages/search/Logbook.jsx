/*  LOGBOOK — every source the climb stood on
*/
export default function Logbook() {
  return (
    <section className="case-section fq-logbook" id="logbook" data-section="Logbook" data-index="§">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">§</span>
        <span className="rule-title section-index-label">Logbook</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">31 Sources</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">Every number traces to a source.</h2>
        <p className="case-section-intro">
          All sources were opened and read during the research. The Amazon figures are the company’s own; the RBI FREE-AI items are recommendations, not yet binding rules.
        </p>
      </div>
      <div className="fq-sources">
        <div>
          <span className="case-label">Search research</span>{' '}
          <ol className="fq-source-list">
            <li>Baymard Institute: Ecommerce Search UX 2026</li>
            <li>Baymard Institute: Autocomplete design patterns (2022)</li>
            <li>Baymard Institute: “No Results” page strategies (2025)</li>
            <li>NN/g: Search, Visible and Simple (2001)</li>
            <li>NN/g: Response Times, 3 Limits (1993)</li>
            <li>Google Cloud / Harris Poll: Search abandonment (2023)</li>
            <li>Indig: Trust Still Lives in Blue Links (2025)</li>
            <li>Plovnick and Zeng, JMIR (2004)</li>
            <li>Vydiswaran et al., AMIA (2014)</li>
            <li>Hanauer et al., J Biomed Inform (2017)</li>
            <li>Kaiser Permanente DOR: EHR search terms (2020)</li>
            <li>Woods Rogers: HHS OCR tracking guidance</li>
            <li>Morrison Foerster: OCR guidance vacated in part (2024)</li>
            <li>US DOT / NHTSA: In-vehicle distraction guidelines</li>
            <li>W3C WAI-ARIA: Combobox pattern</li>
            <li>Visa Developer: Transaction data enrichment</li>
            <li>Revolut: Transaction search (2018)</li>
            <li>Monzo community: Searching by amount</li>
            <li>Manticore Search: Hybrid search</li>
            <li>SearchStax: Site search analytics</li>
          </ol>
        </div>
        <div>
          <span className="case-label">Conversational search</span>{' '}
          <ol className="fq-source-list">
            <li>NN/g: Generative AI diary study (2023)</li>
            <li>NN/g: The 6 Types of Conversations with Generative AI (2023)</li>
            <li>Zou et al.: Users Meet Clarifying Questions, ACM TOIS (2023)</li>
            <li>Modern Retail: Amazon on its Rufus assistant (2026)</li>
            <li>CFPB: Chatbots in consumer finance (2023)</li>
            <li>ATM Marketplace: Erica passes 3 billion interactions (2025)</li>
            <li>Legal500: RBI FREE-AI committee report (2025)</li>
            <li>Cooley: EU AI Act transparency obligations (2026)</li>
            <li>Bean et al., Nature Medicine (2026), and the Oxford news release</li>
            <li>WHO: Guidance on large multi-modal models (2024)</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
