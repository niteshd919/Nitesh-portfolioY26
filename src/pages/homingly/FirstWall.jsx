/*  01 · THE FIRST WALL — the look she wants, the price nobody
    gives her, and three ways people stop at that wall.
*/
export default function FirstWall() {
  return (
    <section className="case-section hm-ch" id="first-wall" data-section="The first wall" data-index="01">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">01</span>
        <span className="rule-title section-index-label">The first wall</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Problem</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">Everyone wants a beautiful home. Almost no one knows what one costs.</h2>
        <p className="case-section-intro">
          Finding the right products for a room is hard, and most people can’t afford a design firm that charges high fees for consultation and renovation.
        </p>
      </div>
      <div className="hm-look">
        <figure className="hm-look-photo" id="lookStart">
          <span className="hm-look-frame">
            <img src="/assets/homingly/room.webp" srcSet="/assets/homingly/room-640.webp 640w, /assets/homingly/room.webp 1024w" sizes="(max-width: 900px) 92vw, 50vw" width="1024" height="1024" alt="A warm, sunlit living room in a Bengaluru apartment: a linen sectional, a jute rug, a round oak table and a terracotta armchair." loading="lazy" decoding="async" />
          </span>{' '}
          <figcaption className="hm-roomtag">
            <span className="hm-roomtag-k">The look she wants</span>{' '}
            <span className="hm-roomtag-name">Living room</span>{' '}
            <span className="hm-roomtag-price"><span className="hm-roomtag-label">Cost</span><b>₹&#8202;?</b></span>
          </figcaption>
        </figure>
        <div className="hm-look-copy">
          <span className="case-label">What we heard</span>{' '}
          <p className="case-copy-lg">
            People don’t know what a renovation should cost, so they overspend, stall, or never start.
          </p>
          <p className="case-copy">
            The price comes before every other question: before the style, before the products, before choosing who to trust with the work. Quotes that change after a site visit and design firms asking ₹50k or more up front teach people to stay away.
          </p>
        </div>
      </div>
      <figure className="hm-wallfig" id="wallFig">
        <div className="hm-wf" aria-hidden="true">
          <p className="hm-wf-from">
            <span className="hm-wf-k">Want</span>
            <span className="hm-wf-v">A home that feels finished</span>
          </p>
          <ol className="hm-wf-paths">
            <li className="hm-wf-path">
              <span className="hm-wf-label">Overspend</span>
              <span className="hm-wf-line"><i /></span>
            </li>
            <li className="hm-wf-path">
              <span className="hm-wf-label">Stall</span>
              <span className="hm-wf-line"><i /></span>
            </li>
            <li className="hm-wf-path">
              <span className="hm-wf-label">Never start</span>
              <span className="hm-wf-line"><i /></span>
            </li>
          </ol>{' '}
          <span className="hm-wf-wall"><span className="hm-wf-wall-label">Price unknown</span></span>{' '}
          <p className="hm-wf-to">
            <span className="hm-wf-k">Behind it</span>
            <span className="hm-wf-v">The products, a designer, the finished room</span>
          </p>
        </div>
        <p className="sr-only">
          Diagram: three paths lead from wanting a finished home to a wall marked price unknown. They are labelled overspend, stall and never start, and none of them gets through.
        </p>
        <figcaption className="hm-figcap">
          <span>Fig. 01</span>
          Pricing is the first wall. Every path stops there.
        </figcaption>
      </figure>
    </section>
  );
}
