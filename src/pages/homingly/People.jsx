/*  03 · TWO SIDES OF THE TABLE — the homeowner and the designer,
    joined by the estimate they both need.
*/
export default function People() {
  return (
    <section className="case-section hm-ch" id="people" data-section="Two sides of the table" data-index="03">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">03</span>
        <span className="rule-title section-index-label">Two sides of the table</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Users</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">
          A homeowner who needs a number. A designer who needs clients who have one.
        </h2>
      </div>
      <div className="hm-people">
        <article className="hm-person">
          <header className="hm-person-head">
            <span className="hm-person-k">Primary persona · Bengaluru · first home</span>{' '}
            <h3 className="hm-person-name">Aanya, 31</h3>
            <p className="hm-person-role">Homeowner</p>
          </header>
          <blockquote className="hm-person-quote">
            <p>“I know the look I want. I just don’t know what it should cost — or who to trust with it.”</p>
          </blockquote>
          <dl className="hm-person-lists">
            <div>
              <dt>Needs</dt>
              <dd>
                <ul>
                  <li>A realistic budget before talking to anyone</li>
                  <li>Vetted designers she can compare quickly</li>
                  <li>To feel in control of every payment</li>
                </ul>
              </dd>
            </div>
            <div>
              <dt>Frustrations</dt>
              <dd>
                <ul>
                  <li>Opaque quotes that change after site visits</li>
                  <li>Design firms with ₹50k+ upfront fees</li>
                  <li>Hours scrolling marketplaces for décor</li>
                </ul>
              </dd>
            </div>
          </dl>
        </article>
        <div className="hm-bridge" aria-hidden="true">
          <span className="hm-bridge-line"><i /></span>{' '}
          <span className="hm-bridge-label"><b>₹3.4–4.1L</b><small>The estimate, shared at booking</small></span>
        </div>
        <article className="hm-person">
          <header className="hm-person-head">
            <span className="hm-person-k">Secondary persona · independent studio</span>{' '}
            <h3 className="hm-person-name">Meera, 36</h3>
            <p className="hm-person-role">Interior designer</p>
          </header>
          <blockquote className="hm-person-quote">
            <p>“Good leads matter more than more leads. I want clients who already know their budget.”</p>
          </blockquote>
          <dl className="hm-person-lists">
            <div>
              <dt>Needs</dt>
              <dd>
                <ul>
                  <li>Qualified clients with a clear scope</li>
                  <li>A portfolio that sells for her</li>
                  <li>Fewer no-show consultations</li>
                </ul>
              </dd>
            </div>
            <div>
              <dt>Frustrations</dt>
              <dd>
                <ul>
                  <li>Discovery calls with no budget alignment</li>
                  <li>Platforms that take a large commission</li>
                  <li>Chasing payments for consults</li>
                </ul>
              </dd>
            </div>
          </dl>
        </article>
      </div>
      <div className="hm-share">
        <figure className="hm-crop hm-share-crop" style={{ '--cx': '12', '--cy': '528', '--cw': '366', '--ch': '84' }}>
          <img src="/assets/homingly/a11.webp" width="780" height="1688" alt="Detail of the booking screen: a switch, turned on, reading Share my estimate with Meera, Living room, Premium, ₹3.4–4.1L." loading="lazy" decoding="async" />
        </figure>
        <p className="case-copy">
          The two sides meet at booking. One switch sends Aanya’s estimate to Meera before the site visit, so the first conversation starts from the room, the finish and the budget.
        </p>
      </div>
    </section>
  );
}
