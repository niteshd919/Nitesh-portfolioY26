/*  06 · THE WALKTHROUGH — the 13-screen happy path, walked
    screen by screen on a measured floor. Pinned and panned by
    scroll; without the runtime it is a plain sequence.
*/
export default function Walkthrough() {
  return (
    <section className="case-section hm-ch hm-walk-sec" id="walkthrough" data-section="The walkthrough" data-index="06">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">06</span>
        <span className="rule-title section-index-label">The walkthrough</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Happy path</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">From first open to a booked consultation in thirteen screens.</h2>
        <p className="case-section-intro">
          Three phases. The price arrives at screen eight, and the target is to get there within three minutes of installing the app.
        </p>
      </div>
      <div className="hm-walk" id="walk">
        <div className="hm-walk-stage">
          <div className="hm-walk-panel" aria-hidden="true">
            <p className="hm-walk-count">Screen <b className="hm-walk-no">01</b> <span>of 13</span></p>
            <p className="hm-walk-phase">
              <span className="hm-walk-phase-in">Phase 1 · Onboarding &amp; sign-in</span>
            </p>
            <h3 className="hm-walk-title"><span className="hm-walk-title-in">Welcome</span></h3>
            <p className="hm-walk-text"><span className="hm-walk-text-in" /></p>
            <p className="hm-walk-rule"><span className="hm-walk-rule-in" /></p>
          </div>
          <div className="hm-walk-view">
            <ol className="hm-walk-track">
              <li className="hm-walk-item" data-phase="Phase 1 · Onboarding &amp; sign-in" data-rule="Principle 01 · Value before sign-up">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a01.webp" width="780" height="1688" alt="Welcome screen: a sunlit living room by Studio Ivory, the line Live beautifully, without the studio price tag, and two buttons, Get started and I already have an account." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 01 of 13 · Phase 1</p>
                  <h4>Welcome</h4>
                  <p>
                    The first screen sells the outcome: a finished room and “Live beautifully, without the studio price tag.” Nothing is asked yet.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item" data-phase="Phase 1 · Onboarding &amp; sign-in" data-rule="Principle 01 · Value before sign-up">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a02.webp" width="780" height="1688" alt="Sign in: one mobile-number field, a note that a 6-digit code will be texted with no password, a Send code button, and a link for interior designers to join as professionals." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 02 of 13 · Phase 1</p>
                  <h4>Sign in</h4>
                  <p>
                    One field, a mobile number. No password, only a code by text. Designers have their own door at the bottom.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item" data-phase="Phase 1 · Onboarding &amp; sign-in" data-rule="">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a03.webp" width="780" height="1688" alt="Verify OTP: six code boxes filling in, the number the code was sent to with an Edit link, and a resend countdown." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 03 of 13 · Phase 1</p>
                  <h4>Verify OTP</h4>
                  <p>
                    The code fills itself in from the text message. The number can still be edited, and a resend unlocks after a short countdown.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item" data-phase="Phase 1 · Onboarding &amp; sign-in" data-rule="Principle 03 · One decision per screen">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a04.webp" width="780" height="1688" alt="Set intent: four goals to choose from, Refresh a room, Plan a renovation (selected), Find a designer and Just exploring, a city picker with Bengaluru selected, and Skip at the top." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 04 of 13 · Phase 1</p>
                  <h4>Set intent</h4>
                  <p>
                    One question, four answers, and the city. Home is tailored to the answer, and Skip is always there.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item" data-phase="Phase 2 · Discover &amp; estimate" data-rule="">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a05.webp" width="780" height="1688" alt="Home: Good evening, Aanya. Ready to plan your renovation?, a card to estimate the renovation in 2 minutes, shortcuts to shop, hire a designer and my projects, and trending products in Bengaluru." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 05 of 13 · Phase 2</p>
                  <h4>Home</h4>
                  <p>
                    Home leads with the goal she picked: estimate the renovation in two minutes. Shopping, designers and projects are one tap away.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item" data-phase="Phase 2 · Discover &amp; estimate" data-rule="Principle 03 · One decision per screen">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a06.webp" width="780" height="1688" alt="Cost estimator, step 1 of 3: six room tiles with Living room selected, and a size picker set to Medium, 120 to 220 square feet, with the note that most Bengaluru living rooms are medium." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 06 of 13 · Phase 2</p>
                  <h4>Room &amp; size</h4>
                  <p>
                    Step 1 of 3. Pick the room and a size range: “No tape measure needed — a range is enough for now.” Medium comes preselected.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item" data-phase="Phase 2 · Discover &amp; estimate" data-rule="Principle 03 · One decision per screen">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a07.webp" width="780" height="1688" alt="Cost estimator, step 2 of 3: work chips for painting, ceiling and lighting, furniture, flooring and storage, and three finish levels: Essential at ₹1.2k, Premium at ₹2k (most chosen) and Luxe at ₹3.2k+ per square foot." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 07 of 13 · Phase 2</p>
                  <h4>Scope &amp; finish</h4>
                  <p>
                    Step 2 of 3. Tick the work, then a finish level, each with its price per square foot. Premium is marked as the most chosen.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item is-target" data-phase="Phase 2 · Discover &amp; estimate" data-rule="Principle 02 · Honest numbers">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a08.webp" width="780" height="1688" alt="Your estimate, step 3 of 3: ₹3.4L to ₹4.1L for a medium living room with a premium finish at Bengaluru rates, then where the money goes, from furniture and décor at 40% down to design and supervision at 10%." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 08 of 13 · Phase 2</p>
                  <h4>Estimate</h4>
                  <p>
                    Step 3 of 3. ₹3.4L – ₹4.1L, with what it covers, the city rates it uses and when they were updated. Then where the money goes.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item" data-phase="Phase 3 · Hire &amp; book" data-rule="">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a09.webp" width="780" height="1688" alt="Designer matches: filters for the living room project, 12 designers matching, and cards for Meera Iyer and Arjun Rao with ratings, consult fees, next free slot and a Fits your budget tag." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 09 of 13 · Phase 3</p>
                  <h4>Designer matches</h4>
                  <p>
                    Matches are filtered by the estimate itself. Every card shows the consult fee, the next free slot, and whether the designer fits the budget.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item" data-phase="Phase 3 · Hire &amp; book" data-rule="Principle 02 · Honest numbers">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a10.webp" width="780" height="1688" alt="Designer profile, compact: Meera Iyer, verified, 4.9 from 128 reviews, 86 projects, 9 years, her portfolio, and a Book consult button with the ₹1,500 fee beside it." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 10 of 13 · Phase 3</p>
                  <h4>Designer profile</h4>
                  <p>
                    Rating, projects and years first, then the work. The fee sits beside the button: ₹1,500 for a 60-minute consult, adjusted against the design fee.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item" data-phase="Phase 3 · Hire &amp; book" data-rule="">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a11.webp" width="780" height="1688" alt="Pick a slot: consult type, Video call or Site visit (selected), a date strip with Monday 18 selected, times with booked slots greyed out, and a switch to share the estimate with Meera." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 11 of 13 · Phase 3</p>
                  <h4>Pick a slot</h4>
                  <p>
                    Video call or site visit, a day, a time. Booked times stay on screen, greyed out. One switch shares the estimate with Meera.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item" data-phase="Phase 3 · Hire &amp; book" data-rule="Principle 02 · Honest numbers">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a12.webp" width="780" height="1688" alt="Review and pay: the site visit with Meera on Monday 18 October at 11:30 AM, consultation fee ₹1,500 plus ₹270 GST for a total of ₹1,770, the free-cancellation note, and Pay ₹1,770." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 12 of 13 · Phase 3</p>
                  <h4>Review &amp; pay</h4>
                  <p>
                    Fee, GST and total come before the button: ₹1,500 + ₹270 = ₹1,770. Cancelling is free until 24 hours before the visit.
                  </p>
                </div>
              </li>
              <li className="hm-walk-item" data-phase="Phase 3 · Hire &amp; book" data-rule="">
                <figure className="hm-phone">
                  <span className="hm-screen">
                    <img src="/assets/homingly/a13.webp" width="780" height="1688" alt="Booking confirmed: You’re booked., the booking reference with ₹1,770 paid, and what happens next, from Meera reviewing the estimate to a detailed quote within 48 hours of the visit." loading="lazy" decoding="async" data-zoom="" />
                  </span>
                </figure>
                <div className="hm-walk-cap">
                  <p className="hm-walk-cap-no">Screen 13 of 13 · Phase 3</p>
                  <h4>Booked</h4>
                  <p>
                    What happens next, in order: Meera reviews the estimate, visits on Monday, and a detailed quote follows within 48 hours.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className="hm-walk-floor" aria-hidden="true">
            <ol className="hm-walk-phases">
              <li style={{ '--from': '0', '--to': '3' }}><span>Onboarding &amp; sign-in</span></li>
              <li style={{ '--from': '4', '--to': '7' }}><span>Discover &amp; estimate</span></li>
              <li style={{ '--from': '8', '--to': '12' }}><span>Hire &amp; book</span></li>
            </ol>{' '}
            <span className="hm-walk-ruler" />{' '}
            <span className="hm-walk-target" style={{ '--at': '7' }}>
              <i />
              <span>First estimate · target under 3 minutes</span>
            </span>{' '}
            <span className="hm-walk-needle"><i /></span>
          </div>
        </div>
      </div>
      <div className="hm-offpath">
        <span className="case-label">Off the path, and designed too</span>{' '}
        <ul className="hm-offpath-list">
          <li>Skip the intent question; Home defaults to exploring</li>
          <li>Resend the code, or edit the number</li>
          <li>Save an estimate and resume it from Home</li>
          <li>Filter or switch designers</li>
          <li>Change the slot or the consult type before paying</li>
          <li>Cancel free up to 24 hours before</li>
        </ul>
      </div>
    </section>
  );
}
