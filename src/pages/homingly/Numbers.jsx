/*  07 · HONEST NUMBERS — the estimate read closely, where the
    money goes, the order money moves in, three receipts.
*/
export default function Numbers() {
  return (
    <section className="case-section case-section-alt hm-ch" id="numbers" data-section="Honest numbers" data-index="07">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">07</span>
        <span className="rule-title section-index-label">Honest numbers</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Pricing</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">Every price shows its working.</h2>
        <p className="case-section-intro">
          Wherever money appears, the app gives a range or a breakdown and says what it assumes. The total is always on screen before a pay button.
        </p>
      </div>
      <div className="hm-annot" id="annot">
        <figure className="hm-phone hm-annot-phone">
          <span className="hm-screen">
            <img src="/assets/homingly/a08.webp" width="780" height="1688" alt="Your estimate: ₹3.4L to ₹4.1L for a medium living room with a premium finish at Bengaluru rates, then where the money goes, a note that a designer confirms the exact quote after a site visit, and buttons to find designers or save the estimate." loading="lazy" decoding="async" data-zoom="" />
          </span>
        </figure>
        <ol className="hm-annot-list">
          <li style={{ '--y': '222' }}>
            <span className="hm-annot-no">Note 01</span>
            <b>A range, never a teaser</b>
            <span>₹3.4L – ₹4.1L for the whole job, materials and labour.</span>
          </li>
          <li style={{ '--y': '290' }}>
            <span className="hm-annot-no">Note 02</span>
            <b>What it assumes</b>
            <span>Room, size and finish on top; the city’s rates and the month they were set below.</span>
          </li>
          <li style={{ '--y': '470' }}>
            <span className="hm-annot-no">Note 03</span>
            <b>Where the money goes</b>
            <span>Four lines, each with its own share and its own range.</span>
          </li>
          <li style={{ '--y': '668' }}>
            <span className="hm-annot-no">Note 04</span>
            <b>Who confirms it</b>
            <span>A designer confirms the exact quote after a site visit.</span>
          </li>
          <li style={{ '--y': '748' }}>
            <span className="hm-annot-no">Note 05</span>
            <b>What next</b>
            <span>Find designers for this project, or save it and come back.</span>
          </li>
        </ol>
      </div>
      <div className="case-subblock">
        <h3 className="case-subtitle">Where the money goes, as ranges</h3>
        <figure className="hm-ranges" id="ranges">
          <ol className="hm-ranges-list">
            <li className="hm-rangerow" style={{ '--lo': '1.5', '--hi': '1.8' }}>
              <span className="hm-rangerow-name">Furniture &amp; décor</span>{' '}
              <span className="hm-rangerow-share">40%</span>{' '}
              <span className="hm-rangerow-bar" aria-hidden="true"><i /></span>{' '}
              <span className="hm-rangerow-val">₹<b data-lo="">1.5</b>–<b data-hi="">1.8</b>L</span>
            </li>
            <li className="hm-rangerow" style={{ '--lo': '0.9', '--hi': '1.1' }}>
              <span className="hm-rangerow-name">False ceiling &amp; lighting</span>{' '}
              <span className="hm-rangerow-share">30%</span>{' '}
              <span className="hm-rangerow-bar" aria-hidden="true"><i /></span>{' '}
              <span className="hm-rangerow-val">₹<b data-lo="">0.9</b>–<b data-hi="">1.1</b>L</span>
            </li>
            <li className="hm-rangerow" style={{ '--lo': '0.6', '--hi': '0.7' }}>
              <span className="hm-rangerow-name">Painting &amp; wall finishes</span>{' '}
              <span className="hm-rangerow-share">20%</span>{' '}
              <span className="hm-rangerow-bar" aria-hidden="true"><i /></span>{' '}
              <span className="hm-rangerow-val">₹<b data-lo="">0.6</b>–<b data-hi="">0.7</b>L</span>
            </li>
            <li className="hm-rangerow" style={{ '--lo': '0.4', '--hi': '0.5' }}>
              <span className="hm-rangerow-name">Design &amp; supervision</span>{' '}
              <span className="hm-rangerow-share">10%</span>{' '}
              <span className="hm-rangerow-bar" aria-hidden="true"><i /></span>{' '}
              <span className="hm-rangerow-val">₹<b data-lo="">0.4</b>–<b data-hi="">0.5</b>L</span>
            </li>
          </ol>
          <ol className="hm-ranges-axis" aria-hidden="true">
            <li>₹0</li>
            <li>₹0.5L</li>
            <li>₹1L</li>
            <li>₹1.5L</li>
            <li>₹2L</li>
          </ol>
          <p className="hm-sum" id="rangeSum">
            <span className="hm-sum-mark" aria-hidden="true" />
            <span className="hm-sum-text">
              The four ranges add up to the total at both ends:{' '}
              <b>₹3.4L</b>{' '}
              low,{' '}
              <b>₹4.1L</b>{' '}
              high.
            </span>
          </p>
          <figcaption className="hm-figcap">
            <span>Fig. 04</span>
            Each line of the estimate is a range of its own, drawn as a dimension from its low to its high.
          </figcaption>
        </figure>
      </div>
      <div className="case-subblock">
        <h3 className="case-subtitle">Money moves after the work does</h3>
        <p className="case-copy hm-ledger-intro">
          Nothing is paid before the estimate. After it, each payment follows something delivered: a visit, a concept, the drawings.
        </p>
        <ol className="hm-ledger" id="ledger">
          <li className="hm-ledger-row is-free">
            <span className="hm-ledger-when">Before anything</span>{' '}
            <span className="hm-ledger-what">
              <b>The estimate</b>
              <small>Three questions, a range and its breakdown</small>
            </span>{' '}
            <span className="hm-ledger-amt">₹0</span>
          </li>
          <li className="hm-ledger-row">
            <span className="hm-ledger-when">At booking</span>{' '}
            <span className="hm-ledger-what">
              <b>Consultation</b>
              <small>₹1,500 + 18% GST · free to cancel until 24 hours before · credited to the design fee</small>
            </span>{' '}
            <span className="hm-ledger-amt">₹1,770</span>
          </li>
          <li className="hm-ledger-row">
            <span className="hm-ledger-when">After the visit</span>{' '}
            <span className="hm-ledger-what">
              <b>Design advance, 40%</b>
              <small>Of a ₹45,000 design fee, with the ₹1,500 consult credited</small>
            </span>{' '}
            <span className="hm-ledger-amt">₹16,500</span>
          </li>
          <li className="hm-ledger-row">
            <span className="hm-ledger-when">On approving a concept</span>{' '}
            <span className="hm-ledger-what">
              <b>Design approval, 40%</b>
              <small>₹18,000 + ₹3,240 GST · both concepts priced against the estimate</small>
            </span>{' '}
            <span className="hm-ledger-amt">₹21,240</span>
          </li>
          <li className="hm-ledger-row">
            <span className="hm-ledger-when">With the drawings</span>{' '}
            <span className="hm-ledger-what">
              <b>Final drawings, 20%</b>
              <small>Paid when the drawings and a fixed build quote arrive</small>
            </span>{' '}
            <span className="hm-ledger-amt">₹9,000</span>
          </li>
          <li className="hm-ledger-row is-build">
            <span className="hm-ledger-when">Build</span>{' '}
            <span className="hm-ledger-what">
              <b>The renovation</b>
              <small>A fixed quote replaces the range once the drawings are done</small>
            </span>{' '}
            <span className="hm-ledger-amt">₹3.4–4.1L</span>
          </li>
        </ol>
      </div>
      <div className="case-subblock">
        <h3 className="case-subtitle">Three totals, each shown before its pay button</h3>
        <div className="hm-receipts" id="receipts">
          <article className="hm-receipt">
            <p className="hm-receipt-head"><b>Consultation</b><span>Review &amp; pay</span></p>
            <dl className="hm-receipt-lines">
              <div><dt>Consultation fee</dt><dd data-n="1500">₹1,500</dd></div>
              <div><dt>GST (18%)</dt><dd data-n="270">₹270</dd></div>
              <div className="is-total"><dt>Total</dt><dd data-total="1770">₹1,770</dd></div>
            </dl>
            <p className="hm-receipt-note">
              Free cancellation until 24 hours before. The ₹1,500 is credited to Meera’s design fee if she is hired.
            </p>
            <p className="hm-receipt-check"><span aria-hidden="true" />Lines add up to the total</p>
          </article>
          <article className="hm-receipt">
            <p className="hm-receipt-head"><b>The bag</b><span>Shop the look</span></p>
            <dl className="hm-receipt-lines">
              <div><dt>Total MRP</dt><dd data-n="25800">₹25,800</dd></div>
              <div><dt>Diwali discount</dt><dd data-n="-7170">−₹7,170</dd></div>
              <div><dt>Coupon discount</dt><dd data-n="-1500">−₹1,500</dd></div>
              <div><dt>Delivery</dt><dd data-n="0">Free</dd></div>
              <div className="is-total"><dt>Total amount</dt><dd data-total="17130">₹17,130</dd></div>
            </dl>
            <p className="hm-receipt-note">
              “You’re saving ₹8,670 on this order” sits under the total, before Checkout.
            </p>
            <p className="hm-receipt-check"><span aria-hidden="true" />Lines add up to the total</p>
          </article>
          <article className="hm-receipt">
            <p className="hm-receipt-head"><b>Design milestone</b><span>Approve &amp; pay</span></p>
            <dl className="hm-receipt-lines">
              <div><dt>Milestone 3 · design approval</dt><dd data-n="18000">₹18,000</dd></div>
              <div><dt>GST (18%)</dt><dd data-n="3240">₹3,240</dd></div>
              <div className="is-total"><dt>To pay now</dt><dd data-total="21240">₹21,240</dd></div>
            </dl>
            <p className="hm-receipt-note">Shown with the whole ₹45,000 fee and the two milestones already paid.</p>
            <p className="hm-receipt-check"><span aria-hidden="true" />Lines add up to the total</p>
          </article>
        </div>
      </div>
    </section>
  );
}
