/*  08 · EVERY WALL HAS A DOOR — thirteen edge and error states,
    each a wall (what went wrong) with a door (the way back).
*/
export default function Edges() {
  return (
    <section className="case-section hm-ch" id="edges" data-section="Every wall has a door" data-index="08">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">08</span>
        <span className="rule-title section-index-label">Every wall has a door</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Edge cases</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">Thirteen ways it can go wrong, and a way back from each.</h2>
        <p className="case-section-intro">
          Every error says what happened in plain words, says whether money moved, and puts the fix on the main button. Twice the screen has to say it about a payment, and twice it says the same thing: no money was taken.
        </p>
      </div>
      <div className="hm-edge-group">
        <h3 className="hm-edge-head"><span>Flow 01 · Book a designer</span><small>7 states</small></h3>
        <ol className="hm-edges">
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/a02-e1-400.webp" data-full="/assets/homingly/a02-e1.webp" width="400" height="866" alt="Sign in with an invalid number: the field outlined in red with Enter a valid 10-digit mobile number, and the Send code button disabled." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>Valid number?</p>
              <h4>Sign in · Invalid number</h4>
              <p className="hm-edge-says">“Enter a valid 10-digit mobile number”</p>
              <p className="hm-edge-door"><span>Way back</span>Fix the number. Send code stays off until it’s valid.</p>
            </div>
          </li>
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/a03-e1-400.webp" data-full="/assets/homingly/a03-e1.webp" width="400" height="866" alt="Verify OTP with a wrong code: six code boxes outlined in red, That code didn’t match., and a Resend code link." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>Code correct?</p>
              <h4>Verify · Wrong code</h4>
              <p className="hm-edge-says">“That code didn’t match.”</p>
              <p className="hm-edge-door"><span>Way back</span>Re-enter the code, or have it sent again.</p>
            </div>
          </li>
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/a03-e2-400.webp" data-full="/assets/homingly/a03-e2.webp" width="400" height="866" alt="Verify OTP locked: a red banner saying sign-in is paused for 10 minutes after too many incorrect attempts, empty code boxes, a Get help link, and a disabled button counting down." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>Too many misses?</p>
              <h4>Verify · Too many attempts</h4>
              <p className="hm-edge-says">“For your security, sign-in is paused for 10 minutes.”</p>
              <p className="hm-edge-door"><span>Way back</span>A countdown on the button, and Get help.</p>
            </div>
          </li>
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/a05-e1-400.webp" data-full="/assets/homingly/a05-e1.webp" width="400" height="866" alt="Home while offline: You’re offline, a note that the page refreshes once the connection is back, a Try again button and a link to saved projects." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>Online?</p>
              <h4>Home · Offline</h4>
              <p className="hm-edge-says">“We’ll refresh this page as soon as you’re back online.”</p>
              <p className="hm-edge-door"><span>Way back</span>Try again. Saved projects still open.</p>
            </div>
          </li>
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/a09-e1-400.webp" data-full="/assets/homingly/a09-e1.webp" width="400" height="866" alt="Designer matches with no results: 0 designers match all 3 filters, No designers match yet, and buttons to clear all filters or get notified when one’s available." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>Designers match?</p>
              <h4>Matches · No designers</h4>
              <p className="hm-edge-says">“Try removing a filter or widening your budget.”</p>
              <p className="hm-edge-door">
                <span>Way back</span>
                Clear all filters, or get notified when one is available.
              </p>
            </div>
          </li>
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/a11-e1-400.webp" data-full="/assets/homingly/a11-e1.webp" width="400" height="866" alt="Pick a slot after a conflict: a red banner saying 11:30 AM was just booked by someone else, that slot now marked booked, and the button reading Pick a time to continue." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>Slot still free?</p>
              <h4>Pick a slot · Slot just taken</h4>
              <p className="hm-edge-says">“11:30 AM was just booked by someone else.”</p>
              <p className="hm-edge-door">
                <span>Way back</span>
                Pick another time. The taken slot stays visible, greyed out.
              </p>
            </div>
          </li>
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/a12-e1-400.webp" data-full="/assets/homingly/a12-e1.webp" width="400" height="866" alt="Review and pay after a failure: a red banner saying payment of ₹1,770 failed and no money was taken, the same booking summary, and Retry payment." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>Payment OK?</p>
              <h4>Review &amp; pay · Payment failed</h4>
              <p className="hm-edge-says">“Payment of ₹1,770 failed. No money was taken.”</p>
              <p className="hm-edge-door"><span>Way back</span>Retry payment, or change the method.</p>
            </div>
          </li>
        </ol>
      </div>
      <div className="hm-edge-group">
        <h3 className="hm-edge-head"><span>Flow 02 · Shop the look</span><small>6 states</small></h3>
        <ol className="hm-edges">
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/b02-e1-400.webp" data-full="/assets/homingly/b02-e1.webp" width="400" height="866" alt="Category with no results: zero floor lamps under ₹2,000, a note that metal floor lamps start around ₹2,400, and buttons to clear the filters or show lamps under ₹3,000." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>Any results?</p>
              <h4>Category · No results</h4>
              <p className="hm-edge-says">“Metal floor lamps start around ₹2,400.”</p>
              <p className="hm-edge-door"><span>Way back</span>Clear the filters, or show lamps under ₹3,000.</p>
            </div>
          </li>
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/b04-e1-400.webp" data-full="/assets/homingly/b04-e1.webp" width="400" height="866" alt="Product out of stock: the arc floor lamp with its Blush finish out of stock, a note that Blush is back around 5 November, and a Notify me when it’s back button." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>In stock?</p>
              <h4>Product · Out of stock</h4>
              <p className="hm-edge-says">“Blush is back around 5 Nov.”</p>
              <p className="hm-edge-door">
                <span>Way back</span>
                Notify me when it’s back, or pick a finish that ships now.
              </p>
            </div>
          </li>
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/b06-e1-400.webp" data-full="/assets/homingly/b06-e1.webp" width="400" height="866" alt="Empty bag: Your bag is empty, a reminder of four pieces in the wishlist and the sale ending Sunday, and buttons to shop the Diwali edit or view the wishlist." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>Items in the bag?</p>
              <h4>Bag · Empty</h4>
              <p className="hm-edge-says">“You have 4 pieces saved in your wishlist.”</p>
              <p className="hm-edge-door"><span>Way back</span>Shop the Diwali edit, or open the wishlist.</p>
            </div>
          </li>
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/b06-e2-400.webp" data-full="/assets/homingly/b06-e2.webp" width="400" height="1430" alt="Bag with an item out of stock: a red banner saying the jute rug just went out of stock and offers were updated, the rug unselected, recalculated price details, and the button Remove unavailable item to continue." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>All available?</p>
              <h4>Bag · Item out of stock</h4>
              <p className="hm-edge-says">“Remove it to continue — your offers have been updated.”</p>
              <p className="hm-edge-door"><span>Way back</span>Remove the item. Offers are recalculated on the spot.</p>
            </div>
          </li>
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/b07-e1-400.webp" data-full="/assets/homingly/b07-e1.webp" width="400" height="1049" alt="Delivery with an unserviceable pincode: a red note that the jute rug can’t be delivered to 560102 yet, the second delivery flagged, and options to change the address or remove the rug." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>Pincode served?</p>
              <h4>Delivery · Not serviceable</h4>
              <p className="hm-edge-says">“The jute rug can’t be delivered to 560102 yet.”</p>
              <p className="hm-edge-door"><span>Way back</span>Change the address, or remove only the rug.</p>
            </div>
          </li>
          <li className="hm-edge">
            <figure className="hm-phone is-sm">
              <span className="hm-screen">
                <img src="/assets/homingly/b08-e1-400.webp" data-full="/assets/homingly/b08-e1.webp" width="400" height="866" alt="Payment declined: a red banner saying the bank declined ₹17,130 and no money was taken, the payment methods, and Retry payment." loading="lazy" decoding="async" data-zoom="" />
              </span>
            </figure>
            <div className="hm-edge-body">
              <p className="hm-edge-check"><span>Check</span>Payment OK?</p>
              <h4>Payment · Bank declined</h4>
              <p className="hm-edge-says">“Your bank declined ₹17,130. No money was taken.”</p>
              <p className="hm-edge-door"><span>Way back</span>Retry, or choose another method below.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
