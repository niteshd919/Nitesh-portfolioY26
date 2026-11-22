import { CaseHeroNo } from '../../components/CaseParts.jsx';

/*  HERO — the model badge and its spec sheet, then the display
    bay: the estimator's three steps arrive, and an unknown price
    settles into one honest range on a measured scale.
*/
export default function Hero() {
  return (
    <section className="case-hero" id="overview" data-section="Homingly" data-index="—">
      <div className="case-hero-top">
        <a href="/#work" className="case-back-link" data-transition="" data-transition-label="Selected Work" data-cursor="Back">
          {' '}
          <span className="case-back-dim" aria-hidden="true"><i /></span>{' '}
          <span>Selected work</span>{' '}
        </a>{' '}
        <CaseHeroNo slug="homingly" />
      </div>
      <div className="case-hero-head">
        <div className="hero-tag-mask">
          <p className="hero-tag" id="caseSubtitle">Home interiors app · Product design</p>
        </div>
        <h1 className="case-hero-title">
          <span className="line-mask"><span className="line" id="caseTitle">Homingly</span></span>
        </h1>
      </div>
      <div className="case-hero-brief">
        <div>
          <div className="hero-tag-mask">
            <p className="case-tagline" id="caseTagline">
              Most people never find out what their room would cost, so they never start. Homingly tells them first, then books the designer who fits the number.
            </p>
          </div>
          <div className="case-hero-meta-tags" id="caseTags">
            <span className="work-tag">Product Design</span>{' '}
            <span className="work-tag">Mobile</span>{' '}
            <span className="work-tag">Design Systems</span>
          </div>
        </div>
        <dl className="case-meta-bar spec" id="caseMetaBar">
          <div className="case-meta-item spec-row">
            <dt>Role</dt>
            <dd>Senior UI/UX designer · Strategy, information architecture, flows, UI and the design system</dd>
          </div>
          <div className="case-meta-item spec-row"><dt>Platform</dt><dd>iOS and Android · 390 × 844</dd></div>
          <div className="case-meta-item spec-row"><dt>Timeline</dt><dd>Oct 2021</dd></div>
          <div className="case-meta-item spec-row">
            <dt>Scope</dt>
            <dd>4 flows · 30 core screens · 13 edge and error states</dd>
          </div>
          <div className="case-meta-item spec-row">
            <dt>System</dt>
            <dd>48 components · 203 variants · 54 icons · Light and Dark</dd>
          </div>
        </dl>
      </div>
      <div className="case-hero-media hm-bay" id="caseHeroMedia">
        <span className="case-hero-cap" aria-hidden="true">
          Fig. 07 — The estimate · Three steps to one honest range
        </span>{' '}
        <div className="hm-est" id="heroEst">
          <div className="hm-est-read">
            <p className="hm-est-tag">
              <span>Your estimate</span>
              <i aria-hidden="true" />
              <span>Living room · Medium · Premium</span>
            </p>
            <p className="hm-est-range">
              <span className="sr-only">₹3.4 lakh to ₹4.1 lakh</span>{' '}
              <span className="hm-est-q" aria-hidden="true">₹&#8202;?</span>{' '}
              <span className="hm-est-v" aria-hidden="true">
                <span className="hm-est-cur">₹</span>
                <b className="hm-est-num">3.4</b>
                <span className="hm-est-u">L</span>
              </span>{' '}
              <span className="hm-est-to" aria-hidden="true"><i /></span>{' '}
              <span className="hm-est-v" aria-hidden="true">
                <span className="hm-est-cur">₹</span>
                <b className="hm-est-num">4.1</b>
                <span className="hm-est-u">L</span>
              </span>
            </p>
            <div className="hm-scale" aria-hidden="true">
              <span className="hm-scale-track" />{' '}
              <span className="hm-scale-fog" />{' '}
              <span className="hm-scale-band" />{' '}
              <ol className="hm-scale-axis">
                <li>₹0</li>
                <li>₹1L</li>
                <li>₹2L</li>
                <li>₹3L</li>
                <li>₹4L</li>
                <li>₹5L</li>
                <li>₹6L</li>
              </ol>
            </div>
            <p className="hm-est-note">Materials and labour · Bengaluru rates, updated Oct 2021</p>
          </div>
          <div className="hm-est-stack">
            <figure className="hm-phone hm-est-phone is-1">
              <span className="hm-screen">
                <img src="/assets/homingly/a06.webp" width="780" height="1688" alt="Cost estimator, step 1 of 3: six room tiles with Living room selected, and a size picker set to Medium, 120 to 220 square feet." decoding="async" fetchPriority="high" />
              </span>
            </figure>
            <figure className="hm-phone hm-est-phone is-2">
              <span className="hm-screen">
                <img src="/assets/homingly/a07.webp" width="780" height="1688" alt="Cost estimator, step 2 of 3: work chips, and three finish levels: Essential at ₹1.2k, Premium at ₹2k and Luxe at ₹3.2k+ per square foot." decoding="async" fetchPriority="high" />
              </span>
            </figure>
            <figure className="hm-phone hm-est-phone is-3">
              <span className="hm-screen">
                <img src="/assets/homingly/a08.webp" width="780" height="1688" alt="Your estimate, step 3 of 3: ₹3.4L to ₹4.1L for a medium living room with a premium finish at Bengaluru rates, then where the money goes, from furniture and décor at 40% down to design and supervision at 10%." decoding="async" fetchPriority="high" />
              </span>
            </figure>
            <ol className="hm-est-steps" aria-hidden="true">
              <li><i /><span>Room &amp; size</span></li>
              <li><i /><span>Scope &amp; finish</span></li>
              <li><i /><span>Estimate</span></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
