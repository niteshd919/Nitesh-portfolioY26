/* SHOWROOM — four bays on one track (Homingly, the seventh, is parked below) (home-showroom.css / .js).
   Wide screens: a sticky stage pans the track as the page scrolls.
   Narrow screens: a native swipe strip. Without JS: stacked bays.
*/
export default function Showroom() {
  return (
    <section className="showroom" id="work" data-section="Selected Work" data-index="01" aria-labelledby="showroom-title">
      <h2 className="sr-only" id="showroom-title">Selected work</h2>
      <div className="showroom-stage">
        <header className="rule showroom-rule" data-rule="" data-rule-progress="manual">
          <span className="rule-index">01</span>{' '}
          <span className="rule-title">Selected Work</span>{' '}
          <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>{' '}
          <span className="rule-meta">04 Cases</span>
        </header>
        <ol className="showroom-track" data-lenis-prevent-horizontal="">
          {/* Bay 01 · Suspension Diagnostics */}
          <li className="bay" data-short="Suspension">
            <article className="bay-body" aria-labelledby="bay-suspension">
              <div className="bay-details">
                <p className="bay-meta">
                  <span className="bay-case">Case 01 / 04</span>
                  <span className="bay-meta-tick" aria-hidden="true" />
                  <span>Model year 2025</span>
                </p>
                <h3 className="bay-title" id="bay-suspension">Suspension Diagnostics</h3>
                <p className="bay-sub">Sensor based suspension diagnostic system on IVI</p>
                <p className="bay-desc">
                  An IVI concept that shows drivers what the suspension senses on the terrain ahead, how it will respond, whether it has adjusted, and when the vehicle needs attention.
                </p>
                <div className="bay-specs">
                  <p className="bay-spec-head">Journey</p>
                  <dl className="bay-spec">
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">3</dt>
                      <dd className="bay-spec-label">Moments: before, during, after</dd>
                    </div>
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">3D</dt>
                      <dd className="bay-spec-label">Live vehicle visualization</dd>
                    </div>
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">1</dt>
                      <dd className="bay-spec-label">Glance to read it while driving</dd>
                    </div>
                  </dl>
                </div>
                <div className="bay-foot">
                  <a className="bay-cta" href="/work/suspension" data-transition="" data-transition-label="Suspension Diagnostics" data-transition-eyebrow="Case 01 / 04" data-cursor="View">
                    {' '}
                    <span className="bay-cta-text">View case study</span>{' '}
                    <span className="bay-cta-dim" aria-hidden="true"><i /></span>{' '}
                  </a>{' '}
                  <p className="bay-tags">HMI · Automotive · Diagnostics</p>
                </div>
              </div>
              <figure className="bay-media media-suspension" data-cursor="View">
                <div className="bay-stage">
                  <div className="sus-plate">
                    <div className="sus-zoom">
                      <img src="/assets/suspension/cover.png" width="1912" height="931" alt="The suspension diagnostics screen, parked: a wireframe 3D SUV with all four wheels highlighted, per-corner readouts for air pressure, spring life, damper life and temperature, and a suspension health score of 97." loading="lazy" decoding="async" />{' '}
                      <span className="sus-ping" style={{ '--x': '38%', '--y': '54%' }} aria-hidden="true">
                        <i />
                        <i />
                      </span>{' '}
                      <span className="sus-ping" style={{ '--x': '44.7%', '--y': '51.1%' }} aria-hidden="true">
                        <i />
                        <i />
                      </span>{' '}
                      <span className="sus-ping" style={{ '--x': '50.2%', '--y': '60.1%' }} aria-hidden="true">
                        <i />
                        <i />
                      </span>{' '}
                      <span className="sus-ping" style={{ '--x': '57.5%', '--y': '55.9%' }} aria-hidden="true">
                        <i />
                        <i />
                      </span>
                    </div>
                  </div>
                </div>{' '}
                <span className="bay-sweep" aria-hidden="true"><i /></span>{' '}
                <span className="bay-scanline" aria-hidden="true" />{' '}
                <figcaption className="bay-cap">Fig. 01 — Parked · Centre display</figcaption>
              </figure>{' '}
              <span className="bay-split" aria-hidden="true" />
            </article>
          </li>
          {/* Bay 02 · HMI — Cockpit Experience */}
          <li className="bay" data-short="Cockpit HMI">
            <article className="bay-body" aria-labelledby="bay-hmi">
              <div className="bay-details">
                <p className="bay-meta">
                  <span className="bay-case">Case 02 / 04</span>
                  <span className="bay-meta-tick" aria-hidden="true" />
                  <span>Model year 2024</span>
                </p>
                <h3 className="bay-title" id="bay-hmi">Cockpit Experience</h3>
                <p className="bay-sub">Škoda in-car HMI</p>
                <p className="bay-desc">
                  A unified in-car HMI concept for Škoda that treats four surfaces as one system: the Virtual Cockpit, an AR Head-Up Display, the 13″ infotainment screen and Laura, the voice assistant.
                </p>
                <div className="bay-specs">
                  <p className="bay-spec-head">Surfaces</p>
                  <dl className="bay-spec">
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">4</dt>
                      <dd className="bay-spec-label">Surfaces, one system</dd>
                    </div>
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">13″</dt>
                      <dd className="bay-spec-label">Infotainment screen</dd>
                    </div>
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">AR</dt>
                      <dd className="bay-spec-label">Head-Up Display</dd>
                    </div>
                  </dl>
                </div>
                <div className="bay-foot">
                  <a className="bay-cta" href="/work/hmi" data-transition="" data-transition-label="HMI — Cockpit Experience" data-transition-eyebrow="Case 02 / 04" data-cursor="View">
                    {' '}
                    <span className="bay-cta-text">View case study</span>{' '}
                    <span className="bay-cta-dim" aria-hidden="true"><i /></span>{' '}
                  </a>{' '}
                  <p className="bay-tags">HMI · Automotive · Voice</p>
                </div>
              </div>
              <figure className="bay-media media-hmi" data-cursor="View">
                <div className="bay-stage">
                  <div className="hmi-cockpit">
                    <span className="hmi-glass" aria-hidden="true" />{' '}
                    <div className="hmi-layer hmi-hud bay-depth">
                      <div className="hmi-rise">
                        <img src="/assets/hmi/hud-driving.png" width="1920" height="640" alt="AR Head-Up Display while driving: 48 km/h, a right turn in 300 m and adaptive cruise control set to 50." loading="lazy" decoding="async" />
                      </div>
                    </div>
                    <div className="hmi-layer hmi-ic bay-depth">
                      <div className="hmi-rise">
                        <div className="hmi-screen">
                          <img src="/assets/hmi/ic-parked.png" width="2560" height="960" alt="Virtual Cockpit, parked and ready: READY in large type, with the prompt to press brake and select D." loading="lazy" decoding="async" />
                        </div>
                      </div>
                    </div>
                    <div className="hmi-layer hmi-ivi bay-depth">
                      <div className="hmi-rise">
                        <div className="hmi-screen">
                          <img src="/assets/hmi/ivi-parked.png" width="2560" height="1440" alt="13-inch infotainment screen, parked: a media player, eight shortcut tiles and an energy card." loading="lazy" decoding="async" />
                        </div>
                      </div>
                    </div>
                    <div className="hmi-layer hmi-laura bay-depth">
                      <div className="hmi-rise">
                        <div className="hmi-screen">
                          <img src="/assets/hmi/laura-parked.png" width="776" height="152" alt="Laura, the voice assistant: “Hi Petr — home, or the office?”" loading="lazy" decoding="async" />
                        </div>
                      </div>
                    </div>{' '}
                    <span className="hmi-tag hmi-tag--hud" aria-hidden="true">AR Head-up display</span>{' '}
                    <span className="hmi-tag hmi-tag--ic" aria-hidden="true">Virtual Cockpit</span>{' '}
                    <span className="hmi-tag hmi-tag--ivi" aria-hidden="true">13″ Infotainment</span>{' '}
                    <span className="hmi-tag hmi-tag--laura" aria-hidden="true">Laura · Voice</span>
                  </div>
                </div>{' '}
                <span className="bay-sweep" aria-hidden="true"><i /></span>{' '}
                <span className="bay-scanline" aria-hidden="true" />{' '}
                <figcaption className="bay-cap">Fig. 02 — Four surfaces · One system</figcaption>
              </figure>{' '}
              <span className="bay-split" aria-hidden="true" />
            </article>
          </li>
          {/* Bay 03 · Tariff Based EV Charging */}
          <li className="bay" data-short="EV Charging">
            <article className="bay-body" aria-labelledby="bay-offpeak">
              <div className="bay-details">
                <p className="bay-meta">
                  <span className="bay-case">Case 03 / 04</span>
                  <span className="bay-meta-tick" aria-hidden="true" />
                  <span>Model year 2023</span>
                </p>
                <h3 className="bay-title" id="bay-offpeak">Tariff Based EV Charging</h3>
                <p className="bay-sub">EV tariff input</p>
                <p className="bay-desc">
                  A mobile flow that turns a paper electricity tariff into a smart-charging schedule, with gaps and overlaps ruled out by design.
                </p>
                <div className="bay-specs">
                  <p className="bay-spec-head">Outcome</p>
                  <dl className="bay-spec">
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">18</dt>
                      <dd className="bay-spec-label">Values to type, down from 32</dd>
                    </div>
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">0</dt>
                      <dd className="bay-spec-label">Coverage gaps possible</dd>
                    </div>
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">4.25</dt>
                      <dd className="bay-spec-label">Score vs 2.85 and 2.75</dd>
                    </div>
                  </dl>
                </div>
                <div className="bay-foot">
                  <a className="bay-cta" href="/work/offpeak" data-transition="" data-transition-label="Tariff Based EV Charging" data-transition-eyebrow="Case 03 / 04" data-cursor="View">
                    {' '}
                    <span className="bay-cta-text">View case study</span>{' '}
                    <span className="bay-cta-dim" aria-hidden="true"><i /></span>{' '}
                  </a>{' '}
                  <p className="bay-tags">UX Research · Data Viz · Mobile</p>
                </div>
              </div>
              <figure className="bay-media media-offpeak" data-cursor="View">
                <div className="bay-stage">
                  <span className="ev-floor" aria-hidden="true" />{' '}
                  <div className="ev-fan">
                    <div className="ev-phone ev-phone--c bay-depth">
                      <div className="ev-phone-body">
                        <img src="/assets/offpeak/f1.png" width="394" height="853" alt="The intro screen: “Charge when electricity is cheapest”, a 24-hour price bar, the three questions the flow will ask, and a Start button." loading="lazy" decoding="async" />
                      </div>
                    </div>
                    <div className="ev-phone ev-phone--l bay-depth">
                      <div className="ev-phone-body">
                        <img src="/assets/offpeak/f3.png" width="394" height="853" alt="Step 1 of 4, periods: a year ribbon split into Off-peak and Peak, with the start dates editable and the end dates filled in automatically." loading="lazy" decoding="async" />
                      </div>
                    </div>
                    <div className="ev-phone ev-phone--r bay-depth">
                      <div className="ev-phone-body">
                        <img src="/assets/offpeak/f4.png" width="394" height="853" alt="Step 2 of 4, days: Monday to Thursday in group 1 and Friday to Sunday in group 2." loading="lazy" decoding="async" />
                      </div>
                    </div>
                  </div>
                  <div className="ev-port" aria-hidden="true">
                    <span>Smart charging<br />Off-peak</span>{' '}
                    <svg viewBox="0 0 64 84" focusable="false">
                      <circle className="ev-port-led" cx="32" cy="30" r="28.5" />
                      <path className="ev-port-body" d="M16.1 12 A24 24 0 1 0 47.9 12 Z" />
                      <circle className="ev-port-pin" cx="26.5" cy="16.5" r="2.2" />
                      <circle className="ev-port-pin" cx="37.5" cy="16.5" r="2.2" />
                      <circle className="ev-port-pin" cx="20.5" cy="28" r="3.7" />
                      <circle className="ev-port-pin" cx="32" cy="28" r="3.7" />
                      <circle className="ev-port-pin" cx="43.5" cy="28" r="3.7" />
                      <circle className="ev-port-pin" cx="25.5" cy="40" r="3.7" />
                      <circle className="ev-port-pin" cx="38.5" cy="40" r="3.7" />
                      <path className="ev-port-body" d="M15 66 A17 12 0 0 0 49 66 A17 12 0 0 0 15 66 Z" />
                      <circle className="ev-port-pin" cx="24.5" cy="66" r="5.6" />
                      <circle className="ev-port-pin" cx="39.5" cy="66" r="5.6" />
                    </svg>
                  </div>
                </div>{' '}
                <span className="bay-sweep" aria-hidden="true"><i /></span>{' '}
                <span className="bay-scanline" aria-hidden="true" />{' '}
                <figcaption className="bay-cap">Fig. 03 — F3 · F1 · F4 · Tariff input</figcaption>
              </figure>{' '}
              <span className="bay-split" aria-hidden="true" />
            </article>
          </li>
          {/* Bay 04 · Codeflow — Daily Coding Challenge */}
          <li className="bay" data-short="Codeflow">
            <article className="bay-body" aria-labelledby="bay-codeflow">
              <div className="bay-details">
                <p className="bay-meta">
                  <span className="bay-case">Case 04 / 04</span>
                  <span className="bay-meta-tick" aria-hidden="true" />
                  <span>Model year 2026</span>
                </p>
                <h3 className="bay-title" id="bay-codeflow">Codeflow</h3>
                <p className="bay-sub">Daily coding challenge for Edwisely</p>
                <p className="bay-desc">
                  Codeflow is the daily coding challenge on a college learning portal: one problem picked for you, a streak you can’t miss, and a designed answer for the day a student misses it.
                </p>
                <div className="bay-specs">
                  <p className="bay-spec-head">Outcome</p>
                  <dl className="bay-spec">
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">1</dt>
                      <dd className="bay-spec-label">Tap from home to the editor</dd>
                    </div>
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">0</dt>
                      <dd className="bay-spec-label">Streaks broken by an outage</dd>
                    </div>
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">7</dt>
                      <dd className="bay-spec-label">Ways back after a missed day</dd>
                    </div>
                  </dl>
                </div>
                <div className="bay-foot">
                  <a className="bay-cta" href="/work/codeflow" data-transition="" data-transition-label="Codeflow — Daily Coding Challenge" data-transition-eyebrow="Case 04 / 04" data-cursor="View">
                    {' '}
                    <span className="bay-cta-text">View case study</span>{' '}
                    <span className="bay-cta-dim" aria-hidden="true"><i /></span>{' '}
                  </a>{' '}
                  <p className="bay-tags">UX Research · Gamification · Web</p>
                </div>
              </div>
              <figure className="bay-media media-codeflow" data-cursor="View">
                <div className="bay-stage">
                  <div className="cf-plate bay-depth">
                    <img src="/assets/codeflow/cover.png" width="3840" height="2160" alt="Codeflow’s daily challenge card, “Longest Quiet Stretch”, beside a 13-day streak and the class leaderboard." loading="lazy" decoding="async" />
                  </div>
                </div>{' '}
                <span className="bay-sweep" aria-hidden="true"><i /></span>{' '}
                <span className="bay-scanline" aria-hidden="true" />{' '}
                <figcaption className="bay-cap">Fig. 04 — Daily challenge · Desktop</figcaption>
              </figure>{' '}
              <span className="bay-split" aria-hidden="true" />
            </article>
          </li>
          {/* Bays 05 and 06 (The First Query, Built to Finish) moved to the Publications section below. Their bay styles and loops stay in home-showroom.* (5e, 5f), dormant. */}
          {/* Bay 07 · Homingly — home interiors app. DISCONNECTED for now: the bay is parked in this comment and case-homingly.* is kept. To restore, uncomment it and the "05 Homingly" selector button below, set the bays variable to 5 in home-showroom.css, make the counts read 05 (Case 05 / 05), and point codeflow's `next` at 'homingly' in case-study-data.js.
          <li className="bay" data-short="Homingly">
            <article className="bay-body" aria-labelledby="bay-homingly">
              <div className="bay-details">
                <p className="bay-meta">
                  <span className="bay-case">Case 07 / 07</span>
                  <span className="bay-meta-tick" aria-hidden="true" />
                  <span>Model year 2021</span>
                </p>
                <h3 className="bay-title" id="bay-homingly">Homingly</h3>
                <p className="bay-sub">Home interiors app · Product design</p>
                <p className="bay-desc">
                  A mobile app that tells people what their room will cost before they hire anyone, then books the interior designer who fits the number.
                </p>
                <div className="bay-specs">
                  <p className="bay-spec-head">Build</p>
                  <dl className="bay-spec">
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">13</dt>
                      <dd className="bay-spec-label">Screens from first open to booked</dd>
                    </div>
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">3</dt>
                      <dd className="bay-spec-label">Minutes to a first estimate, the target</dd>
                    </div>
                    <div className="bay-spec-cell">
                      <dt className="bay-spec-val">24/24</dt>
                      <dd className="bay-spec-label">Colour pairs pass AA, Light and Dark</dd>
                    </div>
                  </dl>
                </div>
                <div className="bay-foot">
                  <a className="bay-cta" href="/work/homingly" data-transition="" data-transition-label="Homingly" data-transition-eyebrow="Case 07 / 07" data-cursor="View">
                    {' '}
                    <span className="bay-cta-text">View case study</span>{' '}
                    <span className="bay-cta-dim" aria-hidden="true"><i /></span>{' '}
                  </a>{' '}
                  <p className="bay-tags">Product Design · Mobile · Design Systems</p>
                </div>
              </div>
              <figure className="bay-media media-homingly" data-cursor="View">
                <div className="bay-stage">
                  <div className="hmb-panel is-known" role="img" aria-label="The Homingly estimator: a phone on its third step, an estimate of ₹3.4L to ₹4.1L for a medium living room with a premium finish, beside the same range marked on a scale from ₹0 to ₹6L.">
                    <div className="hmb-read hmb-rise" aria-hidden="true">
                      <p className="hmb-tag">
                        <span className="hmb-tag-k">Your estimate</span>
                        <i />
                        <span>Living room · Premium</span>
                      </p>
                      <p className="hmb-range">
                        <span className="hmb-q">₹&#8202;?</span>
                        <span className="hmb-v"><small>₹</small>3.4<small>L</small></span>
                        <i className="hmb-to" />
                        <span className="hmb-v"><small>₹</small>4.1<small>L</small></span>
                      </p>{' '}
                      <span className="hmb-scale"><i className="hmb-fog" /><i className="hmb-band" /></span>{' '}
                      <ol className="hmb-steps">
                        <li className="is-done">Room &amp; size</li>
                        <li className="is-done">Scope &amp; finish</li>
                        <li className="is-on">Estimate</li>
                      </ol>
                    </div>
                    <div className="hmb-phone hmb-rise" aria-hidden="true">
                      <span className="hmb-screen">
                        {' '}
                        <img src="/assets/homingly/a06-400.webp" width="400" height="866" alt="" loading="lazy" decoding="async" />{' '}
                        <img src="/assets/homingly/a07-400.webp" width="400" height="866" alt="" loading="lazy" decoding="async" />{' '}
                        <img className="is-on" src="/assets/homingly/a08-400.webp" width="400" height="866" alt="" loading="lazy" decoding="async" />{' '}
                      </span>
                    </div>
                  </div>
                </div>{' '}
                <span className="bay-sweep" aria-hidden="true"><i /></span>{' '}
                <span className="bay-scanline" aria-hidden="true" />{' '}
                <figcaption className="bay-cap">Fig. 07 — Three steps to one honest range</figcaption>
              </figure>{' '}
              <span className="bay-split" aria-hidden="true" />
            </article>
          </li>
          /Bay 07 · Homingly
          */}
        </ol>
        <div className="showroom-selector" role="group" aria-label="Cases">
          <ol className="showroom-seg-list">
            <li>
              <button className="showroom-seg" type="button" data-showroom-go="0">
                <span className="sr-only">Show case </span>
                <span className="showroom-seg-num">01</span>{' '}
                <span className="showroom-seg-name">Suspension</span>
              </button>
            </li>
            <li>
              <button className="showroom-seg" type="button" data-showroom-go="1">
                <span className="sr-only">Show case </span>
                <span className="showroom-seg-num">02</span>{' '}
                <span className="showroom-seg-name">Cockpit HMI</span>
              </button>
            </li>
            <li>
              <button className="showroom-seg" type="button" data-showroom-go="2">
                <span className="sr-only">Show case </span>
                <span className="showroom-seg-num">03</span>{' '}
                <span className="showroom-seg-name">EV Charging</span>
              </button>
            </li>
            <li>
              <button className="showroom-seg" type="button" data-showroom-go="3">
                <span className="sr-only">Show case </span>
                <span className="showroom-seg-num">04</span>{' '}
                <span className="showroom-seg-name">Codeflow</span>
              </button>
            </li>
            {/* Homingly, disconnected for now:
            <li>
              <button className="showroom-seg" type="button" data-showroom-go="4">
                <span className="sr-only">Show case </span>
                <span className="showroom-seg-num">05</span>{' '}
                <span className="showroom-seg-name">Homingly</span>
              </button>
            </li>
            */}
          </ol>{' '}
          <span className="showroom-scale" aria-hidden="true"><i className="showroom-needle" /></span>{' '}
          <p className="showroom-hint" aria-hidden="true">Swipe for the next case</p>
        </div>
      </div>
    </section>
  );
}
