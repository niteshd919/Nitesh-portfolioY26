/*  09 · BEYOND THE BOOKING — three more flows on the same rules,
    as line-ups of screens.
*/
export default function Flows() {
  return (
    <section className="case-section case-section-alt hm-ch" id="flows" data-section="Beyond the booking" data-index="09">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">09</span>
        <span className="rule-title section-index-label">Beyond the booking</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Three more flows</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">Three more routes, on the same rules.</h2>
        <p className="case-section-intro">
          Shopping, browsing designers and running the project after booking use the same components, the same honest prices and the same ways back.
        </p>
      </div>
      <div className="hm-lineup">
        <header className="hm-lineup-head">
          <span className="hm-route-no">Flow 02</span>{' '}
          <h3>Shop the look</h3>
          <p>From the Diwali campaign to a placed order: browse, add, review the bag, deliver and pay.</p>
          <p className="hm-lineup-meta">9 screens</p>
        </header>
        <ol className="hm-lineup-row" style={{ '--count': '9' }}>
          <li>
            <figure className="hm-phone">
              <span className="hm-screen">
                <img src="/assets/homingly/b01-400.webp" data-full="/assets/homingly/b01.webp" width="400" height="866" alt="Home during the Diwali campaign: Make your home festive, a sale banner with up to 40% off lighting and décor and a countdown, category shortcuts and designer picks." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <p className="hm-lineup-cap"><span>01</span>Campaign home</p>
          </li>
          <li>
            <figure className="hm-phone">
              <span className="hm-screen">
                <img src="/assets/homingly/b02-400.webp" data-full="/assets/homingly/b02.webp" width="400" height="866" alt="Category listing for lighting: sort and filter controls, 48 floor lamps in metal under ₹10,000, and product cards with discounts, ratings and designer picks." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <p className="hm-lineup-cap"><span>02</span>Category</p>
          </li>
          <li>
            <figure className="hm-phone">
              <span className="hm-screen">
                <img src="/assets/homingly/b03-400.webp" data-full="/assets/homingly/b03.webp" width="400" height="866" alt="Designer collection: Meera Iyer’s festive living room with numbered hotspots on the photo, her note, the five pieces in the look, and Add all 5 for ₹21,033 with an extra 10% off." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <p className="hm-lineup-cap"><span>03</span>Designer’s look</p>
          </li>
          <li>
            <figure className="hm-phone">
              <span className="hm-screen">
                <img src="/assets/homingly/b04-400.webp" data-full="/assets/homingly/b04.webp" width="400" height="866" alt="Product detail: the arc floor lamp at ₹9,250, down from ₹12,400, a View in your room button, the lowest price in 30 days, a finish picker, the delivery date and Meera’s recommendation." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <p className="hm-lineup-cap"><span>04</span>Product</p>
          </li>
          <li>
            <figure className="hm-phone">
              <span className="hm-screen">
                <img src="/assets/homingly/b05-400.webp" data-full="/assets/homingly/b05.webp" width="400" height="866" alt="Added to bag: the lamp confirmed, a meter showing ₹5,750 more unlocks an extra 10% off, and three pieces to complete the look." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <p className="hm-lineup-cap"><span>05</span>Added to bag</p>
          </li>
          <li>
            <figure className="hm-phone is-tall">
              <span className="hm-screen">
                <img src="/assets/homingly/b06-400.webp" data-full="/assets/homingly/b06.webp" width="400" height="1364" alt="Bag: three items with quantities, add-ons, coupons and offers with DIWALI10 applied, price details from ₹25,800 MRP to a ₹17,130 total, and You’re saving ₹8,670." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <p className="hm-lineup-cap"><span>06</span>Bag</p>
          </li>
          <li>
            <figure className="hm-phone is-tall">
              <span className="hm-screen">
                <img src="/assets/homingly/b07-400.webp" data-full="/assets/homingly/b07.webp" width="400" height="957" alt="Checkout, delivery: the default address, a choice between two deliveries as soon as ready or one delivery on Friday, and an optional lamp assembly for ₹499." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <p className="hm-lineup-cap"><span>07</span>Delivery</p>
          </li>
          <li>
            <figure className="hm-phone">
              <span className="hm-screen">
                <img src="/assets/homingly/b08-400.webp" data-full="/assets/homingly/b08.webp" width="400" height="866" alt="Checkout, payment: UPI selected as last used, cards, no-cost EMI at ₹2,855 a month for 6 months, net banking, and Pay ₹17,130." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <p className="hm-lineup-cap"><span>08</span>Payment</p>
          </li>
          <li>
            <figure className="hm-phone">
              <span className="hm-screen">
                <img src="/assets/homingly/b09-400.webp" data-full="/assets/homingly/b09.webp" width="400" height="866" alt="Order placed: the order number and amount paid, two delivery dates, track and invoice buttons, and an offer to book a 30-minute styling call with Meera." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <p className="hm-lineup-cap"><span>09</span>Order placed</p>
          </li>
        </ol>
        <ul className="hm-lineup-notes">
          <li>
            <b>Shop a designer’s whole look</b>
            Five pieces from Meera’s festive living room, with an extra 10% off for the set.
          </li>
          <li>
            <b>An offer meter, not a surprise</b>
            The bag shows how far it is from the next discount: ₹5,750 more unlocks DIWALI10.
          </li>
          <li>
            <b>Split deliveries, each with a date</b>
            Or one delivery for everything, on a later day. Both are free.
          </li>
        </ul>
      </div>
      <div className="hm-lineup is-pair">
        <div className="hm-lineup-block">
          <header className="hm-lineup-head">
            <span className="hm-route-no">Flow 03</span>{' '}
            <h3>Explore designers</h3>
            <p>Browse designers from the tab bar, dig into their work, then book a consult or shop a project.</p>
            <p className="hm-lineup-meta">3 screens</p>
          </header>
          <ol className="hm-lineup-row" style={{ '--count': '3' }}>
            <li>
              <figure className="hm-phone">
                <span className="hm-screen">
                  <img src="/assets/homingly/c01-400.webp" data-full="/assets/homingly/c01.webp" width="400" height="866" alt="Designers: 247 verified designers in Bengaluru, a search field, style filters, and designer cards with photos of their work, ratings and consult fees." loading="lazy" decoding="async" data-zoom="" />
                </span>
              </figure>
              <p className="hm-lineup-cap"><span>01</span>Designers</p>
            </li>
            <li>
              <figure className="hm-phone is-tall">
                <span className="hm-screen">
                  <img src="/assets/homingly/c02-400.webp" data-full="/assets/homingly/c02.webp" width="400" height="1799" alt="Designer profile, full: Meera Iyer’s bio, style tags, her works, client reviews, and services and fees, from a ₹1,500 consultation to turnkey execution at 8% of the build." loading="lazy" decoding="async" data-zoom="" />
                </span>
              </figure>
              <p className="hm-lineup-cap"><span>02</span>Full profile</p>
            </li>
            <li>
              <figure className="hm-phone is-tall">
                <span className="hm-screen">
                  <img src="/assets/homingly/c03-400.webp" data-full="/assets/homingly/c03.webp" width="400" height="1297" alt="Designer’s work: a warm minimal 3BHK in HSR Layout with its budget of ₹5.2L, 1,450 square feet and 10 weeks, the brief, room photos, products to shop from the project, and Book consult." loading="lazy" decoding="async" data-zoom="" />
                </span>
              </figure>
              <p className="hm-lineup-cap"><span>03</span>Designer’s work</p>
            </li>
          </ol>
          <ul className="hm-lineup-notes">
            <li>
              <b>Real budgets on real projects</b>
              Every project shows its total budget, carpet area and weeks from design to handover.
            </li>
            <li>
              <b>Two ways out of a project</b>
              Book a consult, which joins Flow 01 at Pick a slot, or shop the pieces in it.
            </li>
          </ul>
        </div>
        <div className="hm-lineup-block">
          <header className="hm-lineup-head">
            <span className="hm-route-no">Flow 04</span>{' '}
            <h3>Run my project</h3>
            <p>
              After booking: follow the project, review concepts, ask for changes or approve, and pay the next milestone.
            </p>
            <p className="hm-lineup-meta">5 screens</p>
          </header>
          <ol className="hm-lineup-row" style={{ '--count': '5' }}>
            <li>
              <figure className="hm-phone is-tall">
                <span className="hm-screen">
                  <img src="/assets/homingly/d01-400.webp" data-full="/assets/homingly/d01.webp" width="400" height="1117" alt="My projects: Your home, room by room, two projects in progress with their next action, a saved kitchen estimate, and a completed bedroom to rate." loading="lazy" decoding="async" data-zoom="" />
                </span>
              </figure>
              <p className="hm-lineup-cap"><span>01</span>My projects</p>
            </li>
            <li>
              <figure className="hm-phone is-tall">
                <span className="hm-screen">
                  <img src="/assets/homingly/d02-400.webp" data-full="/assets/homingly/d02.webp" width="400" height="1347" alt="Project overview: the living room makeover with Meera, an action to review two design concepts by 5 November, the five-step project timeline, and budget and payments." loading="lazy" decoding="async" data-zoom="" />
                </span>
              </figure>
              <p className="hm-lineup-cap"><span>02</span>Overview</p>
            </li>
            <li>
              <figure className="hm-phone is-tall">
                <span className="hm-screen">
                  <img src="/assets/homingly/d03-400.webp" data-full="/assets/homingly/d03.webp" width="400" height="1152" alt="Review designs: two concepts, Warm Japandi at an estimated ₹3.7L and Soft modern at ₹3.9L, both within the ₹3.4–4.1L estimate, and a note from Meera." loading="lazy" decoding="async" data-zoom="" />
                </span>
              </figure>
              <p className="hm-lineup-cap"><span>03</span>Review designs</p>
            </li>
            <li>
              <figure className="hm-phone">
                <span className="hm-screen">
                  <img src="/assets/homingly/d04-400.webp" data-full="/assets/homingly/d04.webp" width="400" height="866" alt="Request changes: a sheet asking what Meera should change, with chips such as Lighter colours and More storage, a note field, and Send to Meera." loading="lazy" decoding="async" data-zoom="" />
                </span>
              </figure>
              <p className="hm-lineup-cap"><span>04</span>Request changes</p>
            </li>
            <li>
              <figure className="hm-phone is-tall">
                <span className="hm-screen">
                  <img src="/assets/homingly/d05-400.webp" data-full="/assets/homingly/d05.webp" width="400" height="932" alt="Approve and pay: option A approved, the ₹45,000 design fee in four milestones with two paid, milestone 3 at ₹18,000 plus ₹3,240 GST, and Pay ₹21,240." loading="lazy" decoding="async" data-zoom="" />
                </span>
              </figure>
              <p className="hm-lineup-cap"><span>05</span>Approve &amp; pay</p>
            </li>
          </ol>
          <ul className="hm-lineup-notes">
            <li>
              <b>The estimate follows the project</b>
              Both design concepts are priced against the ₹3.4–4.1L range from screen eight: ₹3.7L and ₹3.9L.
            </li>
            <li>
              <b>One free revision, spent from chips</b>
              Ask for changes from a short sheet. Meera usually replies within a working day.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
