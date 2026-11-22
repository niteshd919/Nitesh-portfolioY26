/*  05 · THE FLOOR PLAN — the app drawn as a home, on a drawing
    sheet: the front door, the hallway, five rooms, the services.
*/
export default function Plan() {
  return (
    <section className="case-section hm-ch hm-sheet" id="plan" data-section="The floor plan" data-index="05" data-theme="paper">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">05</span>
        <span className="rule-title section-index-label">The floor plan</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Information architecture</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">One front door, five rooms, and a hallway between them.</h2>
        <p className="case-section-intro">
          I organised the app like a home. Sign-in is the front door. The tab bar is the hallway, and Home, Shop, Estimate, Designers and Profile open off it. Search, the bag and messages work from any room.
        </p>
      </div>
      <dl className="hm-stats" id="planStats">
        <div className="hm-stat"><dt>Tabs, plus entry and global</dt><dd><b className="hm-num">5</b></dd></div>
        <div className="hm-stat"><dt>Core screens</dt><dd><b className="hm-num">30</b></dd></div>
        <div className="hm-stat"><dt>Edge and error states</dt><dd><b className="hm-num">13</b></dd></div>
        <div className="hm-stat"><dt>User flows</dt><dd><b className="hm-num">4</b></dd></div>
      </dl>
      <figure className="hm-plan" id="planFig">
        <div className="hm-plan-sheet">
          <div className="hm-plan-global">
            <p className="hm-roomtag is-plan"><b>Global</b><span>Reachable from any room</span></p>
            <ul className="hm-plan-list is-row">
              <li className="is-planned">Search</li>
              <li className="is-link">Bag · opens from the top bar</li>
              <li className="is-planned">Notifications</li>
              <li className="is-planned">Messages</li>
            </ul>
          </div>
          <ol className="hm-plan-rooms">
            <li className="hm-room">
              <p className="hm-roomtag is-plan">
                <b>Home</b>
                <span>Personalised start, campaigns</span>
                <em>2 screens</em>
              </p>
              <ul className="hm-plan-list">
                <li className="is-path"><span className="hm-step">05</span>Home</li>
                <li className="is-edge">Offline</li>
                <li>Campaign home</li>
                <li className="is-link">Hire a designer · Designers</li>
                <li className="is-link">My projects · Profile</li>
              </ul>{' '}
              <span className="hm-plan-door" aria-hidden="true" />
            </li>
            <li className="hm-room">
              <p className="hm-roomtag is-plan"><b>Shop</b><span>Browse and buy décor</span><em>8 screens</em></p>
              <ul className="hm-plan-list">
                <li className="is-planned">Categories</li>
                <li>Category listing</li>
                <li className="is-edge">No results</li>
                <li>Designer collection</li>
                <li>Product detail</li>
                <li className="is-edge">Out of stock</li>
                <li>Added to bag</li>
                <li>Bag</li>
                <li className="is-edge">Empty bag</li>
                <li className="is-edge">Item out of stock</li>
                <li>Checkout · Delivery</li>
                <li className="is-edge">Pincode not serviceable</li>
                <li>Checkout · Payment</li>
                <li className="is-edge">Payment failed</li>
                <li>Order confirmed</li>
              </ul>{' '}
              <span className="hm-plan-door" aria-hidden="true" />
            </li>
            <li className="hm-room is-centre">
              <p className="hm-roomtag is-plan"><b>Estimate</b><span>The centre tab</span><em>3 screens</em></p>
              <ul className="hm-plan-list">
                <li className="is-path"><span className="hm-step">06</span>Room &amp; size</li>
                <li className="is-path"><span className="hm-step">07</span>Scope &amp; finish</li>
                <li className="is-path"><span className="hm-step">08</span>Estimate result</li>
                <li className="is-link">Saved estimates · Profile</li>
              </ul>{' '}
              <span className="hm-plan-door" aria-hidden="true" />
            </li>
            <li className="hm-room">
              <p className="hm-roomtag is-plan">
                <b>Designers</b>
                <span>Find, compare and book</span>
                <em>8 screens</em>
              </p>
              <ul className="hm-plan-list">
                <li>Designers directory</li>
                <li className="is-path"><span className="hm-step">09</span>Designer matches</li>
                <li className="is-edge">No designers match</li>
                <li className="is-path"><span className="hm-step">10</span>Designer profile, compact and full</li>
                <li>Designer’s work</li>
                <li className="is-path"><span className="hm-step">11</span>Pick a slot</li>
                <li className="is-edge">Slot just taken</li>
                <li className="is-path"><span className="hm-step">12</span>Review &amp; pay</li>
                <li className="is-edge">Payment failed</li>
                <li className="is-path"><span className="hm-step">13</span>Booking confirmed</li>
              </ul>{' '}
              <span className="hm-plan-door" aria-hidden="true" />
            </li>
            <li className="hm-room">
              <p className="hm-roomtag is-plan">
                <b>Profile</b>
                <span>Projects, orders, account</span>
                <em>5 screens</em>
              </p>
              <ul className="hm-plan-list">
                <li>My projects</li>
                <li>Project overview</li>
                <li>Review designs</li>
                <li>Request changes</li>
                <li>Approve &amp; pay</li>
                <li className="is-planned">Orders &amp; tracking</li>
                <li className="is-planned">Wishlist &amp; saved designers</li>
                <li className="is-planned">Addresses</li>
                <li className="is-planned">Payment methods</li>
                <li className="is-planned">Help &amp; support</li>
                <li className="is-planned">Settings &amp; privacy</li>
              </ul>{' '}
              <span className="hm-plan-door" aria-hidden="true" />
            </li>
          </ol>
          <div className="hm-plan-hall">
            <p className="hm-roomtag is-plan"><b>Hallway</b><span>The tab bar · five doors</span></p>
          </div>
          <div className="hm-plan-entry">
            <p className="hm-roomtag is-plan">
              <b>Entry &amp; sign-in</b>
              <span>First open, before the tab bar</span>
              <em>4 screens</em>
            </p>
            <ul className="hm-plan-list is-row">
              <li className="is-path"><span className="hm-step">01</span>Welcome</li>
              <li className="is-path"><span className="hm-step">02</span>Sign in</li>
              <li className="is-edge">Invalid number</li>
              <li className="is-path"><span className="hm-step">03</span>Verify OTP</li>
              <li className="is-edge">Wrong code</li>
              <li className="is-edge">Too many attempts</li>
              <li className="is-path"><span className="hm-step">04</span>Set intent</li>
            </ul>{' '}
            <span className="hm-plan-front" aria-hidden="true">
              <svg viewBox="0 0 100 100" focusable="false">
                <path className="hm-door-arc" d="M0 100 A100 100 0 0 0 100 0" pathLength="1" />
                <line className="hm-door-leaf" x1="0" y1="0" x2="0" y2="100" />
              </svg>
              <span>Front door</span>
            </span>
          </div>
        </div>
        <ul className="hm-plan-legend" aria-label="Legend">
          <li className="is-built">Designed screen</li>
          <li className="is-planned">Planned, not designed yet</li>
          <li className="is-edge">Edge or error state</li>
          <li className="is-path"><span className="hm-step">01</span>The 13-screen happy path</li>
        </ul>
        <figcaption className="hm-figcap">
          <span>Fig. 03</span>
          The app as a floor plan. Thirty designed screens across five rooms and the entry; dashed lines mark what is planned and not yet drawn.
        </figcaption>
      </figure>
      <div className="case-subblock">
        <h3 className="case-subtitle">Four routes through the house</h3>
        <ol className="hm-routes">
          <li className="hm-route">
            <span className="hm-route-no">Flow 01</span>{' '}
            <h4>Book a designer</h4>
            <p className="hm-route-path">Home → sign in → estimate → match → book</p>
            <p className="hm-route-meta">13 screens · 7 edge states · starts at Home</p>
          </li>
          <li className="hm-route">
            <span className="hm-route-no">Flow 02</span>{' '}
            <h4>Shop the look</h4>
            <p className="hm-route-path">Campaign → product → bag → pay</p>
            <p className="hm-route-meta">9 screens · 6 edge states · a designer’s project joins it at Product detail</p>
          </li>
          <li className="hm-route">
            <span className="hm-route-no">Flow 03</span>{' '}
            <h4>Explore designers</h4>
            <p className="hm-route-path">Designers tab → profile → work</p>
            <p className="hm-route-meta">3 screens · booking joins Flow 01 at Pick a slot</p>
          </li>
          <li className="hm-route">
            <span className="hm-route-no">Flow 04</span>{' '}
            <h4>Run my project</h4>
            <p className="hm-route-path">My projects → review → approve → pay</p>
            <p className="hm-route-meta">5 screens · starts once a consult is booked</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
