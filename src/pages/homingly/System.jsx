/*  10 · THE FINISH SCHEDULE — the design system as a material
    board: counts, the four colours that were darkened, every
    contrast pair, the type, the spacing and the radii.
*/
export default function System() {
  return (
    <section className="case-section hm-ch" id="system" data-section="The finish schedule" data-index="10">
      <div className="section-index rule" data-rule="">
        <span className="rule-index">10</span>
        <span className="rule-title section-index-label">The finish schedule</span>
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>
        <span className="rule-meta">Design system</span>
      </div>
      <div className="case-section-head">
        <h2 className="case-section-title">Every colour, gap and radius is a token. Every label is a text style.</h2>
        <p className="case-section-intro">
          The colour tokens follow the Tailwind CSS UI Design System community file: the same names and structure, with Light and Dark modes. Every screen on this page is built from these components.
        </p>
      </div>
      <dl className="hm-stats is-five" id="sysStats">
        <div className="hm-stat"><dt>Components</dt><dd><b className="hm-num">48</b></dd></div>
        <div className="hm-stat"><dt>Variants</dt><dd><b className="hm-num">203</b></dd></div>
        <div className="hm-stat"><dt>Icons</dt><dd><b className="hm-num">54</b></dd></div>
        <div className="hm-stat"><dt>Text styles</dt><dd><b className="hm-num">26</b></dd></div>
        <div className="hm-stat"><dt>Colour tokens, Light and Dark</dt><dd><b className="hm-num">52</b></dd></div>
      </dl>
      <div className="case-subblock hm-nudge-block">
        <div className="hm-nudge-copy">
          <h3 className="case-subtitle">Four colours, darkened until they passed</h3>
          <p className="case-copy">
            Four Tailwind colours failed WCAG AA as text on white. Each was darkened, with its hue kept, until it cleared 4.5 : 1. Five more were added where a pair fell short: gray/450 for input borders, yellow/600 for rating stars, blue/300 and red/300 for Dark-mode text, and green/400 kept for Dark-mode success.
          </p>
        </div>
        <figure className="hm-nudge" id="nudge">
          <ol className="hm-nudge-rows">
            <li className="hm-nudge-row" style={{ '--a': '3.49', '--b': '4.88' }}>
              <span className="hm-nudge-name">
                <i style={{ '--c': '#89898a' }} />
                <i style={{ '--c': '#717172' }} />
                gray/500
              </span>{' '}
              <span className="hm-nudge-track" aria-hidden="true">
                <i className="hm-nudge-link" />
                <i className="hm-nudge-from" />
                <i className="hm-nudge-to" />
              </span>{' '}
              <span className="hm-nudge-val">3.49 → <b>4.88</b></span>
            </li>
            <li className="hm-nudge-row" style={{ '--a': '4.38', '--b': '6.85' }}>
              <span className="hm-nudge-name">
                <i style={{ '--c': '#2c71f6' }} />
                <i style={{ '--c': '#034dd9' }} />
                blue/500
              </span>{' '}
              <span className="hm-nudge-track" aria-hidden="true">
                <i className="hm-nudge-link" />
                <i className="hm-nudge-from" />
                <i className="hm-nudge-to" />
              </span>{' '}
              <span className="hm-nudge-val">4.38 → <b>6.85</b></span>
            </li>
            <li className="hm-nudge-row" style={{ '--a': '2.73', '--b': '4.58' }}>
              <span className="hm-nudge-name">
                <i style={{ '--c': '#17b530' }} />
                <i style={{ '--c': '#12882a' }} />
                green/500
              </span>{' '}
              <span className="hm-nudge-track" aria-hidden="true">
                <i className="hm-nudge-link" />
                <i className="hm-nudge-from" />
                <i className="hm-nudge-to" />
              </span>{' '}
              <span className="hm-nudge-val">2.73 → <b>4.58</b></span>
            </li>
            <li className="hm-nudge-row" style={{ '--a': '3.72', '--b': '4.68' }}>
              <span className="hm-nudge-name">
                <i style={{ '--c': '#f73b3b' }} />
                <i style={{ '--c': '#dc2f2f' }} />
                red/500
              </span>{' '}
              <span className="hm-nudge-track" aria-hidden="true">
                <i className="hm-nudge-link" />
                <i className="hm-nudge-from" />
                <i className="hm-nudge-to" />
              </span>{' '}
              <span className="hm-nudge-val">3.72 → <b>4.68</b></span>
            </li>
          </ol>
          <div className="hm-nudge-axis" aria-hidden="true">
            <span className="hm-nudge-aa">AA · 4.5 : 1</span>
            <ol><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li></ol>
          </div>
          <figcaption className="hm-figcap">
            <span>Fig. 05</span>
            Contrast as text on white, before and after. Ratios computed from the tokens.
          </figcaption>
        </figure>
      </div>
      <div className="case-subblock">
        <h3 className="case-subtitle">24 of 24 pairs pass AA, in Light and in Dark</h3>
        <p className="case-copy hm-contrast-intro">
          Text needs 4.5 : 1; borders, icons and progress need 3 : 1. I recomputed every ratio from the live tokens, blending Dark mode’s translucent fills over their surface first. The closest call is a filled input’s border, at 3.03 against 3.
        </p>
        <div className="case-table-wrap hm-contrast-wrap">
          <table className="case-table hm-contrast">
            <thead>
              <tr>
                <th scope="col">Pair</th>
                <th scope="col">Used for</th>
                <th scope="col">Needs</th>
                <th scope="col">Light</th>
                <th scope="col">Dark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Text/Default on Background/Secondary</th>
                <td data-label="Used for">Body text on app background</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">15.47</td>
                <td data-label="Dark">12.82</td>
              </tr>
              <tr>
                <th scope="row">Text/Default on Background/Default</th>
                <td data-label="Used for">Body text on cards</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">16.29</td>
                <td data-label="Dark">16.29</td>
              </tr>
              <tr>
                <th scope="row">Text/Secondary on Background/Default</th>
                <td data-label="Used for">Hints, captions, meta</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">4.88</td>
                <td data-label="Dark">6.86</td>
              </tr>
              <tr>
                <th scope="row">Text/Secondary on Background/Secondary</th>
                <td data-label="Used for">Hints on app background</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">4.63</td>
                <td data-label="Dark">5.40</td>
              </tr>
              <tr>
                <th scope="row">Text/Primary on Background/Default</th>
                <td data-label="Used for">Links, outline and text buttons</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">6.85</td>
                <td data-label="Dark">5.82</td>
              </tr>
              <tr>
                <th scope="row">Text/Primary on Background/Primary-Subdued</th>
                <td data-label="Used for">Secondary button, active tab</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">6.44</td>
                <td data-label="Dark">4.99</td>
              </tr>
              <tr>
                <th scope="row">Text/On primary on Background/Primary</th>
                <td data-label="Used for">Primary button label</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">6.85</td>
                <td data-label="Dark">6.85</td>
              </tr>
              <tr>
                <th scope="row">Text/On primary on Background/Error</th>
                <td data-label="Used for">Discount badges</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">4.68</td>
                <td data-label="Dark">4.68</td>
              </tr>
              <tr>
                <th scope="row">Text/On primary on Background/Success</th>
                <td data-label="Used for">Success badges</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">4.58</td>
                <td data-label="Dark">4.58</td>
              </tr>
              <tr>
                <th scope="row">Text/Success-Secondary on Background/Success-Subdued</th>
                <td data-label="Used for">Success notes</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">4.90</td>
                <td data-label="Dark">5.17</td>
              </tr>
              <tr>
                <th scope="row">Text/Error-Secondary on Background/Error-Subdued</th>
                <td data-label="Used for">Campaign strip</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">5.86</td>
                <td data-label="Dark">5.20</td>
              </tr>
              <tr>
                <th scope="row">Text/Error on Background/Default</th>
                <td data-label="Used for">Error text</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">4.68</td>
                <td data-label="Dark">5.73</td>
              </tr>
              <tr>
                <th scope="row">Text/Success on Background/Default</th>
                <td data-label="Used for">Success text</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">4.58</td>
                <td data-label="Dark">5.97</td>
              </tr>
              <tr>
                <th scope="row">Text/Warning on Background/Default</th>
                <td data-label="Used for">Warning text</td>
                <td data-label="Needs">4.5</td>
                <td data-label="Light">5.90</td>
                <td data-label="Dark">9.80</td>
              </tr>
              <tr>
                <th scope="row">Border/Secondary on Background/Default</th>
                <td data-label="Used for">Inputs, chips</td>
                <td data-label="Needs">3</td>
                <td data-label="Light">3.22</td>
                <td data-label="Dark">4.67</td>
              </tr>
              <tr className="is-tight">
                <th scope="row">Border/Secondary on Background/Primary-Subdued</th>
                <td data-label="Used for">Filled inputs</td>
                <td data-label="Needs">3</td>
                <td data-label="Light">3.03</td>
                <td data-label="Dark">4.00</td>
              </tr>
              <tr>
                <th scope="row">Border/Primary on Background/Default</th>
                <td data-label="Used for">Selected option, outline button</td>
                <td data-label="Needs">3</td>
                <td data-label="Light">6.85</td>
                <td data-label="Dark">5.82</td>
              </tr>
              <tr>
                <th scope="row">Background/Progress on Background/Tertiary</th>
                <td data-label="Used for">Progress fill against its track</td>
                <td data-label="Needs">3</td>
                <td data-label="Light">4.81</td>
                <td data-label="Dark">3.16</td>
              </tr>
              <tr>
                <th scope="row">Icon/Default on Background/Default</th>
                <td data-label="Used for">Icons</td>
                <td data-label="Needs">3</td>
                <td data-label="Light">16.29</td>
                <td data-label="Dark">16.29</td>
              </tr>
              <tr>
                <th scope="row">Icon/Secondary on Background/Default</th>
                <td data-label="Used for">Muted icons</td>
                <td data-label="Needs">3</td>
                <td data-label="Light">4.88</td>
                <td data-label="Dark">6.86</td>
              </tr>
              <tr>
                <th scope="row">Icon/Primary on Background/Primary-Subdued</th>
                <td data-label="Used for">Active tab icon</td>
                <td data-label="Needs">3</td>
                <td data-label="Light">6.44</td>
                <td data-label="Dark">4.99</td>
              </tr>
              <tr>
                <th scope="row">Icon/Success on Background/Success-Subdued</th>
                <td data-label="Used for">Success icons</td>
                <td data-label="Needs">3</td>
                <td data-label="Light">3.78</td>
                <td data-label="Dark">5.17</td>
              </tr>
              <tr>
                <th scope="row">Icon/Warning on Background/Default</th>
                <td data-label="Used for">Rating stars</td>
                <td data-label="Needs">3</td>
                <td data-label="Light">3.19</td>
                <td data-label="Dark">9.80</td>
              </tr>
              <tr>
                <th scope="row">Icon/Error on Background/Default</th>
                <td data-label="Used for">Wishlist heart</td>
                <td data-label="Needs">3</td>
                <td data-label="Light">4.68</td>
                <td data-label="Dark">5.73</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="case-subblock hm-board">
        <div className="hm-type">
          <h3 className="case-subtitle">Two faces</h3>
          <p className="case-copy">
            Fraunces for display, only from 19 to 38 points and never on a control. DM Sans for everything people read and tap.
          </p>
          <dl className="hm-specimen">
            <div className="is-serif is-num">
              <dt>Display/Numeric · Fraunces SemiBold · 38/44</dt>
              <dd>₹3.4L – ₹4.1L</dd>
            </div>
            <div className="is-serif"><dt>Heading/L · Fraunces Regular · 22/27</dt><dd>Where the money goes</dd></div>
            <div className="is-serif is-italic">
              <dt>Quote · Fraunces Italic · 15/21</dt>
              <dd>“Warm light, soft linen and texture underfoot.”</dd>
            </div>
            <div className="is-sans">
              <dt>Body/L · DM Sans Regular · 15/22</dt>
              <dd>Shop curated décor, estimate renovation costs and hire vetted designers.</dd>
            </div>
            <div className="is-sans is-label">
              <dt>Label/L · DM Sans SemiBold · 15/20</dt>
              <dd>Book consultation</dd>
            </div>
            <div className="is-sans is-caption">
              <dt>Caption · DM Sans Regular · 12/16</dt>
              <dd>Bengaluru rates · updated Oct 2021</dd>
            </div>
          </dl>
        </div>
        <div className="hm-measure">
          <h3 className="case-subtitle">Measured to the pixel</h3>
          <div className="hm-space" id="space">
            <p className="hm-measure-k">Spacing · 16 steps</p>
            <ol className="hm-space-list">
              <li style={{ '--v': '2' }}><i /><span>2</span></li>
              <li style={{ '--v': '4' }}><i /><span>4</span></li>
              <li style={{ '--v': '6' }}><i /><span>6</span></li>
              <li style={{ '--v': '8' }}><i /><span>8</span></li>
              <li style={{ '--v': '10' }}><i /><span>10</span></li>
              <li style={{ '--v': '12' }}><i /><span>12</span></li>
              <li style={{ '--v': '14' }}><i /><span>14</span></li>
              <li style={{ '--v': '16' }}><i /><span>16</span></li>
              <li style={{ '--v': '20' }}><i /><span>20</span></li>
              <li style={{ '--v': '24' }}><i /><span>24</span></li>
              <li style={{ '--v': '28' }}><i /><span>28</span></li>
              <li style={{ '--v': '32' }}><i /><span>32</span></li>
              <li style={{ '--v': '40' }}><i /><span>40</span></li>
              <li style={{ '--v': '48' }}><i /><span>48</span></li>
              <li style={{ '--v': '56' }}><i /><span>56</span></li>
              <li style={{ '--v': '72' }}><i /><span>72</span></li>
            </ol>
          </div>
          <div className="hm-radii" id="radii">
            <p className="hm-measure-k">Corner radius · 9 steps</p>
            <ol className="hm-radii-list">
              <li style={{ '--r': '6' }}><i /><b>6</b><span>Badges, checkboxes</span></li>
              <li style={{ '--r': '8' }}><i /><b>8</b><span>Small buttons, steppers</span></li>
              <li style={{ '--r': '14' }}><i /><b>14</b><span>Inputs, notes</span></li>
              <li style={{ '--r': '18' }}><i /><b>18</b><span>Buttons, option cards</span></li>
              <li style={{ '--r': '20' }}><i /><b>20</b><span>Cards, images</span></li>
              <li style={{ '--r': '24' }}><i /><b>24</b><span>Hero cards</span></li>
              <li style={{ '--r': '32' }}><i /><b>32</b><span>Bottom sheets</span></li>
              <li style={{ '--r': '40' }}><i /><b>40</b><span>Device frame</span></li>
              <li style={{ '--r': '100' }}><i /><b>100</b><span>Chips, pills</span></li>
            </ol>
          </div>
        </div>
      </div>
      <div className="case-subblock">
        <h3 className="case-subtitle">48 components in five families</h3>
        <dl className="hm-families">
          <div className="hm-family"><dt><span>Actions</span><b>2</b></dt><dd>Button · IconButton</dd></div>
          <div className="hm-family">
            <dt><span>Selection &amp; input</span><b>12</b></dt>
            <dd>
              Chip · Radio · Checkbox · Switch · OptionCard · SelectTile · Swatch · OTPDigit · QtyStepper · Input · SearchBar · Dropdown
            </dd>
          </div>
          <div className="hm-family">
            <dt><span>Navigation &amp; structure</span><b>8</b></dt>
            <dd>
              StatusBar · TopBar · TabItem · TabBar · HomeIndicator · ProgressSteps · CheckoutStepper · SectionHeader
            </dd>
          </div>
          <div className="hm-family">
            <dt><span>Feedback &amp; content</span><b>12</b></dt>
            <dd>
              Badge · Avatar · Notice · EmptyState · ListItem · PriceRow · CategoryItem · QuickAction · BreakdownRow · ReviewCard · Meter · TimelineStep
            </dd>
          </div>
          <div className="hm-family">
            <dt><span>Commerce &amp; cards</span><b>14</b></dt>
            <dd>
              ProductCard · ProductMini · CartItem · SelectionBar · CouponRow · LookItem · CrossSellTile · AddonCard · CollectionCard · DesignerCard · Shipment · RoomImage · DesignerListItem · ProjectCard
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
