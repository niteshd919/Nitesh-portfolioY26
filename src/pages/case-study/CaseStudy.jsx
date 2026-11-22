/* ==================================================================
   Case study — one template for every project in caseStudies.js that
   doesn't have a page of its own (/work/<slug>).

   The core sections (overview → impact) render for every project.
   Framing, research, directions, decision, states, system and
   what's-next are opt-in: they render only when the data has them,
   and section numbers, rule readouts and background rhythm are worked
   out from what's shown, so any combination still reads in order.
   Motion lives in caseStudy.js.
   ================================================================== */
import { Navigate, useParams } from 'react-router';
import Page from '../../site/Page.jsx';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/Footer.jsx';
import { CaseHeroNo, CaseNext } from '../../components/CaseParts.jsx';
import { CASE_STUDIES, caseNumbers } from '../../data/caseStudies.js';
import { chargePlan } from './charging.js';
import initCaseStudy from './caseStudy.js';

const pad = (n) => String(n).padStart(2, '0');

/* ---------------- shared pieces ---------------- */

// Show the exported image when the data has one, otherwise a hatched
// placeholder labelled with the screen code, so the layout is final
// before the visuals are.
function ScreenSlot({ screen, caption = true, eager = false, className = '', hidden = false }) {
  const classes = ['screen-slot', className, screen.full && 'is-full'].filter(Boolean).join(' ');
  return (
    <figure className={classes} aria-hidden={hidden ? 'true' : undefined}>
      <div className={`screen-slot-frame${screen.image ? '' : ' is-empty'}`} style={screen.ratio ? { aspectRatio: screen.ratio } : undefined}>
        {screen.image ? (
          <img src={screen.image} alt={screen.alt || screen.title} loading={eager ? 'eager' : 'lazy'} data-zoom="" />
        ) : (
          <div className="slot-empty">
            <span className="slot-code">{screen.code}</span>
            {caption === false ? <span className="slot-name">{screen.title}</span> : null}
            <span className="slot-hint">Screen placeholder</span>
          </div>
        )}
      </div>
      {caption === false ? null : (
        <figcaption>
          <span className="screen-slot-code">{screen.code}</span>
          <h4>{screen.title}</h4>
          {screen.desc ? <p>{screen.desc}</p> : null}
        </figcaption>
      )}
    </figure>
  );
}

function BoardSlot({ board }) {
  if (!board) return null;
  return (
    <div className={`board-slot${board.image ? '' : ' is-empty'}`} style={{ aspectRatio: board.ratio || '16 / 10' }}>
      {board.image ? (
        <img src={board.image} alt={board.alt || board.label} loading="lazy" data-zoom="" />
      ) : (
        <div className="slot-empty"><span className="slot-name">{board.label}</span><span className="slot-hint">Board placeholder</span></div>
      )}
    </div>
  );
}

function Table({ table }) {
  return (
    <div className="case-table-wrap case-reveal">
      <table className="case-table">
        <thead><tr>{table.head.map((h, i) => <th scope="col" key={i}>{h}</th>)}</tr></thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r}>{row.map((cell, i) => (i ? <td data-label={table.head[i]} key={i}>{cell}</td> : <th scope="row" key={i}>{cell}</th>))}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Model({ label, nodes }) {
  const last = nodes.length - 1;
  return (
    <div className="case-model-wrap case-reveal">
      {label ? <span className="case-label">{label}</span> : null}
      <div className="case-model">
        {nodes.map((node, i) => [
          i ? <span className="case-model-arrow" aria-hidden="true" key={`a${i}`}>→</span> : null,
          <div className={`case-model-node${i === last ? ' is-accent' : ''}`} key={`n${i}`}>
            <h3>{node.title}</h3>
            <p>{node.desc}</p>
          </div>,
        ])}
      </div>
    </div>
  );
}

const Bullets = ({ items }) => <ul className="case-bullets">{items.map((x, i) => <li key={i}>{x}</li>)}</ul>;

/* ---------------- hero ---------------- */

function DeviceChrome({ type }) {
  if (type === 'phone') return <div className="device-chrome"><span className="device-notch" /></div>;
  return <div className="device-chrome"><span className="device-dot" /><span className="device-dot" /><span className="device-dot" /><span className="device-url" /></div>;
}

const BOLT = <svg viewBox="0 0 24 24" width="12" height="12"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor" /></svg>;

function HeroMedia({ data, slug }) {
  const { index } = caseNumbers(slug);
  const plan = data.heroScreens && data.heroCharging ? chargePlan(data.heroCharging) : null;

  let wrapClass = 'case-hero-device-wrap';
  let inner;
  if (data.heroImage) {
    // A single exported cover, shown at its real proportions.
    const hero = data.heroImage;
    wrapClass += ' is-cover';
    const img = <img src={hero.image} alt={hero.alt || data.title} data-zoom="" />;
    inner = hero.hotspots ? (
      // A "live" cover: the screen boots with a scan sweep, the sensors
      // ping on the wheels, and the whole display tilts with the cursor.
      <figure className="case-hero-cover is-live">
        <div className="case-hero-tilt">
          {img}
          {hero.hotspots.map((s, i) => (
            <span className="case-hotspot" style={{ left: `${s.x}%`, top: `${s.y}%` }} tabIndex={0} role="img" aria-label={s.label} key={i}><i /><b>{s.label}</b></span>
          ))}
          <span className="case-hero-scanlines" aria-hidden="true" />
          <span className="case-hero-scan" aria-hidden="true" />
        </div>
      </figure>
    ) : (
      <figure className="case-hero-cover">{img}</figure>
    );
  } else if (data.heroScreens) {
    // A row of phone screens instead of one abstracted device — the
    // middle one sits slightly larger.
    const center = Math.floor(data.heroScreens.length / 2);
    wrapClass += ' is-row';
    inner = (
      <div className="case-hero-screens">
        {data.heroScreens.map((screen, i) => (
          <ScreenSlot screen={screen} caption={false} eager className={i === center ? 'is-center' : ''} key={i} />
        ))}
      </div>
    );
  } else if (data.heroScreen) {
    // An abstracted, wireframe view of the product itself.
    inner = (
      <div className={`device-frame ${data.heroScreen.device === 'phone' ? 'is-phone' : 'is-browser'}`} id="caseHeroDevice">
        <DeviceChrome type={data.heroScreen.device} />
        <div className="device-screen" dangerouslySetInnerHTML={{ __html: data.heroScreen.html }} />
      </div>
    );
  } else {
    inner = <div className="device-frame" id="caseHeroDevice" />;
  }

  return (
    <div className={`case-hero-media${plan ? ' is-charging' : ''}`} id="caseHeroMedia">
      {plan ? (
        <div className="charge-scene" aria-hidden="true">
          <span className="charge-glow" />
          <div className="charge-lanes">
            {plan.lanes.map((lane, i) => <span className={`charge-lane ${lane.side}`} style={lane.style} key={i}><i /></span>)}
          </div>
        </div>
      ) : null}
      <span className="case-hero-cap" aria-hidden="true">{`Fig. ${pad(index + 1)}${data.platform ? ` — ${data.platform}` : ''}`}</span>
      <div className={wrapClass}>{inner}</div>
      {plan ? (
        <>
          <div className="charge-hud charge-status" aria-hidden="true">
            <span className="charge-pill">{BOLT}<span className="charge-state" /></span>{' '}
            <span className="charge-level"><span className="charge-pct" /><small>%</small></span>{' '}
            <span className="charge-battery"><i /></span>{' '}
            <span className="charge-sub" />
          </div>
          <div className="charge-hud charge-plan" aria-hidden="true">
            <span className="charge-eyebrow">Smart schedule</span>{' '}
            <strong>{plan.hh(plan.winStart)} <span>→</span> {plan.hh(plan.winEnd)}</strong>{' '}
            <span className="charge-sub">{plan.cheapest} ct/kWh · ready by {plan.hh(plan.leave)}</span>
          </div>
          <div className="charge-timeline" aria-hidden="true">
            <div className="charge-bar">
              {plan.slots.map((s, i) => <span className={`charge-seg ${plan.tone(s)}`} style={{ flex: String(s.to - s.from) }} key={i}><em>{s.price} ct</em></span>)}
              <span className="charge-head"><b /></span>
            </div>
            <div className="charge-ticks">{[0, 6, 12, 18, 24].map((h) => <span style={{ left: `${(h / 24) * 100}%` }} key={h}>{pad(h)}</span>)}</div>
          </div>
        </>
      ) : null}
    </div>
  );
}

function Hero({ data, slug }) {
  // The spec sheet: .spec rows (style.css), each opened by a tick.
  const meta = [
    ['Role', data.role],
    ['Timeline', data.timeline],
    ['Platform', data.platform],
    ['Scope', data.scope],
    ['Team', data.team],
    ['Tools', data.tools],
  ].filter(([, value]) => value);

  return (
    <section className="case-hero" data-section="Case study" data-index="00">
      {/* Badge line: back to the index · this study's place in the series · case number */}
      <div className="case-hero-top">
        <a href="/#work" className="case-back-link" data-transition="" data-transition-label="Selected Work" data-cursor="Back">
          <span className="case-back-dim" aria-hidden="true"><i /></span>{' '}
          <span>Selected work</span>
        </a>{' '}
        <CaseHeroNo slug={slug} />
      </div>
      <div className="case-hero-head">
        <div className="hero-tag-mask"><p className="hero-tag" id="caseSubtitle">{data.subtitle}</p></div>
        <h1 className="case-hero-title"><span className="line-mask"><span className="line" id="caseTitle">{data.title}</span></span></h1>
      </div>
      {/* The brief: tagline + disciplines beside the spec sheet */}
      <div className="case-hero-brief">
        <div>
          <div className="hero-tag-mask"><p className="case-tagline" id="caseTagline">{data.tagline}</p></div>
          <div className="case-hero-meta-tags" id="caseTags">{data.tags.map((t) => <span className="work-tag" key={t}>{t}</span>)}</div>
        </div>
        <dl className="case-meta-bar spec" id="caseMetaBar">
          {meta.map(([label, value]) => <div className="case-meta-item spec-row" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
      </div>
      {/* The display bay: the cover under studio light */}
      <HeroMedia data={data} slug={slug} />
    </section>
  );
}

/* ---------------- section bodies ---------------- */

function Overview({ data }) {
  return (
    <>
      <p className="case-copy-lg reveal-text" id="caseOverview">{data.overview}</p>
      {/* Longer overviews: the first paragraph leads, the rest follow in body size. */}
      {data.overviewMore ? (
        <div className="case-overview-more">{data.overviewMore.map((p, i) => <p className="case-copy reveal-text" key={i}>{p}</p>)}</div>
      ) : null}
    </>
  );
}

function Problem({ data }) {
  const p = data.problem;
  return (
    <>
      <div className="case-problem-grid">
        <p className="case-copy reveal-text" id="caseProblem">{p.copy}</p>
        {p.quote ? (
          <blockquote className="case-quote reveal-text">
            <p id="caseQuoteText">{p.quote}</p>
            <cite id="caseQuoteAttribution">{p.attribution}</cite>
          </blockquote>
        ) : null}
      </div>
      <div id="caseProblemContext">
        {p.brief ? (
          <div className="case-brief case-reveal">
            <span className="case-label">{p.brief.label}</span>
            <p>{p.brief.text}</p>
          </div>
        ) : null}
        {p.context ? (
          // Numbered causes read as h3s; the plain version keeps the small label.
          <div className="case-problem-context">
            {p.contextLabel ? <span className="case-label reveal-text">{p.contextLabel}</span> : null}
            <div className="case-panel-grid is-fill" style={{ '--cols': p.contextCols || p.context.length }}>
              {p.context.map((item, i) => (
                <div className="case-panel case-reveal" key={i}>
                  {p.contextNumbered
                    ? <><span className="case-panel-index">{pad(i + 1)}</span><h3>{item.title}</h3></>
                    : <span className="case-label">{item.title}</span>}
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {p.jobs ? (
          <div className="case-jobs case-reveal">
            <span className="case-label">{p.jobsLabel || 'Jobs'}</span>
            <div className="case-jobs-list">{p.jobs.map((job, i) => <span className="case-job" key={i}><small>{pad(i + 1)}</small>{job}</span>)}</div>
          </div>
        ) : null}
      </div>
    </>
  );
}

function Approach({ data }) {
  return (
    <div className="case-approach-grid" id="caseApproachGrid">
      {data.approach.map((item, i) => (
        <div className="case-approach-card" key={i}>
          <span className="case-approach-index">{item.code || pad(i + 1)}</span>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

// The gradient angle varies per step so the repeated brand colours don't feel static.
const FLOW_ANGLES = [135, 45, 160, 20, 100];

function Flow({ data }) {
  // Longer flows come in chapters: a short intro, then a row of screens.
  if (data.flowChapters) {
    return (
      <div className="case-flow-list" id="caseFlowList">
        {data.flowChapters.map((chapter, c) => (
          <div className="case-chapter" key={c}>
            <div className="case-chapter-head">
              <div>
                {chapter.eyebrow ? <span className="case-label">{chapter.eyebrow}</span> : null}
                <h3 className="reveal-text">{chapter.title}</h3>
              </div>
              {chapter.intro ? <p className="reveal-text">{chapter.intro}</p> : null}
            </div>
            <div className="screen-grid">{chapter.screens.map((s, i) => <ScreenSlot screen={s} key={i} />)}</div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="case-flow-list" id="caseFlowList">
      {data.flow.map((step, i) => (
        <div className={`case-flow-item${i % 2 === 1 ? ' is-reverse' : ''}`} key={i}>
          <div className="case-flow-text">
            <span className="case-flow-index">{pad(i + 1)}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
          <div className={`case-flow-media${step.image ? ' has-image' : ''}`} style={step.image && step.ratio ? { aspectRatio: step.ratio } : undefined}>
            <div className="case-flow-media-img" style={{ '--flow-angle': `${FLOW_ANGLES[i % FLOW_ANGLES.length]}deg` }} />
            {step.image
              ? <img className={`case-flow-shot${step.inset ? ' is-inset' : ''}`} src={step.image} alt={step.alt || step.title} loading="lazy" data-zoom="" />
              : step.screen ? <div className="case-flow-chip">{step.screen}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

function Testing({ data }) {
  return (
    <div className="case-testing-grid" id="caseTestingGrid">
      {data.testing.map((item, i) => (
        <div className="case-testing-card" key={i}>
          <span className="case-testing-index">{pad(i + 1)} / Finding</span>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

// The figure is written out in full (readable without motion);
// caseStudy.js rolls it on odometer drums.
function Impact({ data }) {
  return (
    <>
      <div className="case-impact-grid" id="caseImpactGrid">
        {data.impact.map((stat, i) => (
          <div className="case-impact-stat" key={i}>
            <div className="case-impact-num-row">
              <span className="case-impact-num" data-count={stat.value} data-decimals={stat.decimals || 0}>{Number(stat.value).toFixed(stat.decimals || 0)}</span>
              <span className="case-impact-suffix">{stat.suffix || ''}</span>
            </div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="case-closing reveal-text" id="caseClosing">{data.closing}</p>
    </>
  );
}

function Framing({ f }) {
  return (
    <>
      <Model label={f.modelNote} nodes={f.model} />
      {f.insight ? (
        <div className="case-insight">
          <span className="case-label">Key insight</span>
          <h3 className="reveal-text">{f.insight.title}</h3>
          <p className="reveal-text">{f.insight.desc}</p>
        </div>
      ) : null}
      {f.edgeCases ? (
        <>
          <span className="case-label">{f.edgeCasesLabel || 'Edge cases'}</span>
          <ol className="case-edge-list">{f.edgeCases.map((edge, i) => <li className="case-reveal" key={i}><span>{pad(i + 1)}</span><p>{edge}</p></li>)}</ol>
        </>
      ) : null}
    </>
  );
}

function Research({ r }) {
  const f = r.fragile;
  return (
    <>
      {r.board ? <div className="case-reveal"><BoardSlot board={r.board} /></div> : null}
      {r.patterns ? (
        <div className={r.board || r.patternsTitle ? 'case-subblock' : ''}>
          {r.patternsTitle ? <h3 className="case-subtitle reveal-text">{r.patternsTitle}</h3> : null}
          <div className="case-panel-grid" style={{ '--cols': 3 }}>
            {r.patterns.map((p, i) => (
              <div className="case-panel case-reveal" key={i}>
                <span className="case-panel-index">{pad(i + 1)}</span>
                <h3>{p.title}</h3>
                {p.seenIn ? <span className="case-seen">Seen in: {p.seenIn}</span> : null}
                <p>{p.desc}</p>
                {p.applied ? <p className="case-applied"><span aria-hidden="true">→</span> {p.applied}</p> : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {f ? (
        <div className="case-subblock">
          <h3 className="case-subtitle reveal-text">{f.index}</h3>
          <div className="case-insight case-insight-flush">
            <span className="case-label">{f.label}</span>
            <h3 className="reveal-text">{f.title}</h3>
          </div>
          <div className="case-panel-grid" style={{ '--cols': f.facts.length }}>
            {f.facts.map((fact, i) => (
              <div className="case-panel case-reveal" key={i}>
                <h3>{fact.title}</h3>
                <p>{fact.desc}</p>
              </div>
            ))}
          </div>
          <div className="case-levers case-reveal">
            <span className="case-label">{f.leversTitle}</span>
            <Bullets items={f.levers} />
          </div>
        </div>
      ) : null}
      {r.chartTable ? (
        <div className="case-subblock">
          <h3 className="case-subtitle reveal-text">{r.chartTable.title}</h3>
          <Table table={r.chartTable} />
          {r.chartTable.note ? <p className="case-note reveal-text">{r.chartTable.note}</p> : null}
        </div>
      ) : null}
      {r.rules ? (
        <div className="case-subblock">
          <h3 className="case-subtitle reveal-text">{r.rulesTitle || 'Design rules'}</h3>
          <div className="case-panel-grid" style={{ '--cols': 3 }}>
            {r.rules.map((rule, i) => (
              <div className="case-panel case-reveal" key={i}>
                <span className="case-panel-index">{pad(i + 1)}</span>
                <h3>{rule.title}</h3>
                <p>{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {r.sources ? <p className="case-note reveal-text">{r.sources}</p> : null}
    </>
  );
}

function Personas({ p }) {
  return (
    <div className="case-panel-grid" style={{ '--cols': p.items.length }}>
      {p.items.map((x, i) => (
        <article className="case-panel case-reveal" key={i}>
          <span className="case-panel-index">{pad(i + 1)}</span>
          <h3>{x.name}</h3>
          <span className="case-seen">{x.who}</span>
          <blockquote className="case-persona-quote">“{x.quote}”</blockquote>
          <span className="case-label">Needs</span>
          <Bullets items={x.needs} />
          <span className="case-label case-label-gap">What the design gives them</span>
          <Bullets items={x.gives} />
        </article>
      ))}
    </div>
  );
}

function Solution({ s }) {
  return (
    <>
      <Model label={s.loopLabel} nodes={s.loop} />
      <div className="case-subblock">
        <h3 className="case-subtitle reveal-text">{s.map.title}</h3>
        <Table table={s.map} />
      </div>
      <div className="case-subblock">
        <h3 className="case-subtitle reveal-text">{s.measuresTitle}</h3>
        <div className="case-panel-grid" style={{ '--cols': s.measures.length }}>
          {s.measures.map((m, i) => (
            <div className="case-panel case-reveal" key={i}>
              <span className="case-label">{m.label}</span>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {s.priorities ? (
        <div className="case-subblock">
          <h3 className="case-subtitle reveal-text">{s.priorities.title}</h3>
          <p className="case-note reveal-text case-note-flush">{s.priorities.intro}</p>
          <div className="case-panel-grid" style={{ '--cols': 2 }}>
            {s.priorities.items.map((item, i) => (
              <div className="case-panel case-reveal" key={i}>
                <span className="case-panel-index">{pad(i + 1)}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {s.statement ? (
        <div className="case-insight">
          <span className="case-label">{s.statement.label}</span>
          <h3 className="reveal-text">{s.statement.title}</h3>
          <p className="reveal-text">{s.statement.text}</p>
        </div>
      ) : null}
      {s.pillars ? <Table table={s.pillars} /> : null}
    </>
  );
}

// Weighted totals come straight from the criteria rows (weights in %),
// so the table, the direction cards and the winner can't disagree.
function scores(decision) {
  if (!decision) return { totals: null, best: -1 };
  const totals = decision.options.map((_, i) => decision.criteria.reduce((sum, c) => sum + c.weight * c.scores[i], 0) / 100);
  return { totals, best: totals.indexOf(Math.max(...totals)) };
}

function Directions({ items, totals }) {
  return (
    <div className="case-direction-grid">
      {items.map((item, i) => (
        <article className={`case-direction case-reveal${item.chosen ? ' is-chosen' : ''}`} key={i}>
          <div className="case-direction-top">
            <span className="case-direction-letter">{item.letter}</span>
            {item.chosen ? <span className="case-direction-badge">Chosen</span> : null}
          </div>
          <h3>{item.title}</h3>
          <p className="case-direction-summary">{item.summary}</p>
          <BoardSlot board={item.board} />
          <div className="case-procon"><span className="case-label">Strengths</span><p>{item.strengths}</p></div>
          <div className="case-procon"><span className="case-label">Weaknesses</span><p>{item.weaknesses}</p></div>
          {totals ? <div className="case-direction-score"><span>Weighted score</span><strong>{totals[i].toFixed(2)}</strong></div> : null}
        </article>
      ))}
    </div>
  );
}

function Decision({ d, totals, best }) {
  const cls = (i) => (i === best ? 'is-best' : undefined);
  return (
    <>
      <div className="case-table-wrap case-reveal">
        <table className="case-table case-score-table">
          <thead>
            <tr>
              <th scope="col">Criterion</th><th scope="col">Weight</th>
              {d.options.map((o, i) => <th scope="col" className={cls(i)} key={i}>{o}</th>)}
            </tr>
          </thead>
          <tbody>
            {d.criteria.map((c, r) => (
              <tr key={r}>
                <th scope="row">{c.name}<small>{c.detail}</small></th>
                <td>{c.weight}%</td>
                {c.scores.map((s, i) => <td className={cls(i)} key={i}>{s}</td>)}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Weighted score</th><td />
              {totals.map((t, i) => <td className={cls(i)} key={i}><span className="case-score-total">{t.toFixed(2)}</span></td>)}
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="case-decision-grid">
        <div className="case-verdict case-reveal">
          <span className="case-label">Decision</span>
          <h3>{d.verdict.title}</h3>
          <ul>{d.verdict.borrowed.map((b, i) => <li key={i}><span>{b.tag}</span><p>{b.text}</p></li>)}</ul>
        </div>
        <div className="case-reveal">
          <span className="case-label">{d.risksLabel || 'Risks'}</span>
          <ol className="case-risk-list">
            {d.risks.map((r, i) => <li key={i}><span>{r.code}</span><p><strong>{r.title}</strong> {r.desc}</p></li>)}
          </ol>
        </div>
      </div>
    </>
  );
}

function System({ s }) {
  return (
    <>
      <div className="case-panel-grid" style={{ '--cols': 2 }}>
        {s.components.map((c, i) => (
          <div className={`case-panel case-reveal${c.board ? ' is-wide' : ''}`} key={i}>
            <div>
              <span className="case-panel-index">{pad(i + 1)}</span>
              <h3>{c.title}</h3>
              {c.usedIn ? <span className="case-seen">Used in {c.usedIn}</span> : null}
              <p>{c.desc}</p>
              {c.scale ? (
                <div className="case-scale">
                  {c.scale.map((step, k) => (
                    <div key={k}>
                      <span className="case-scale-swatch" style={{ background: step.hex }} />
                      <small>{step.token}<br />{step.range}<br />{step.hex}</small>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <BoardSlot board={c.board} />
          </div>
        ))}
      </div>
      {s.more ? (
        <div className="case-more case-reveal">
          <h3>{s.more.title}</h3>
          <p>{s.more.text}</p>
        </div>
      ) : null}
      {s.note ? <p className="case-note reveal-text">{s.note}</p> : null}
    </>
  );
}

const NumberedList = ({ id, items }) => (
  <ol className="case-figma-list" id={id}>
    {items.map((r, i) => <li key={i}><span>{pad(i + 1)}</span><div><strong>{r.title}</strong><p>{r.desc}</p></div></li>)}
  </ol>
);

const CtaDim = () => <span className="case-cta-dim" aria-hidden="true"><i /></span>;

function FigmaCard({ f }) {
  return (
    <div className="case-figma case-reveal">
      <div className="case-figma-copy">
        <span className="case-label" id="figmaEyebrow">{f.eyebrow}</span>
        <h3 id="figmaTitle">{f.title}</h3>
        <p id="figmaIntro">{f.intro}</p>
        <a href={f.url} className="case-figma-cta" id="figmaCta" target="_blank" rel="noopener noreferrer" data-cursor="Open">
          <span id="figmaCtaLabel">{f.cta}</span>{' '}
          <CtaDim />
        </a>
      </div>
      <NumberedList id="figmaList" items={f.reasons} />
    </div>
  );
}

function PlaygroundCard({ p }) {
  return (
    <div className="case-figma case-playground case-reveal">
      <div className="case-figma-copy">
        <span className="case-label" id="playgroundEyebrow">{p.eyebrow}</span>
        <h3 id="playgroundTitle">{p.title}</h3>
        <p id="playgroundIntro">{p.intro}</p>
        <a href={p.url} className="case-figma-cta" id="playgroundCta" target="_blank" rel="noopener noreferrer" data-cursor="Play">
          <span id="playgroundCtaLabel">{p.cta}</span>{' '}
          <CtaDim />
        </a>
      </div>
      <a href={p.url} className="case-playground-preview" id="playgroundPreview" target="_blank" rel="noopener noreferrer" data-cursor="Play" tabIndex="-1" aria-hidden="true">
        <img id="playgroundImg" src={p.image} alt="" loading="lazy" />{' '}
        <span className="case-playground-badge"><i /><span id="playgroundBadge">{p.badge}</span></span>{' '}
        <span className="case-playground-play"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg></span>
      </a>
    </div>
  );
}

function NdaCard({ n }) {
  return (
    <div className="case-figma case-nda case-reveal">
      <div className="case-figma-copy">
        <span className="case-label case-nda-eyebrow">
          <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true"><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" strokeWidth="1.5" /><rect x="5" y="10.5" width="14" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M12 14v3" stroke="currentColor" strokeWidth="1.5" /></svg>{' '}
          <span id="ndaEyebrow">{n.eyebrow}</span>
        </span>
        <h3 id="ndaTitle">{n.title}</h3>
        <p id="ndaIntro">{n.intro}</p>
        <a href={n.url} className="case-figma-cta" id="ndaCta" data-cursor="Say hi">
          <span id="ndaCtaLabel">{n.cta}</span>{' '}
          <CtaDim />
        </a>
      </div>
      <NumberedList id="ndaList" items={n.points} />
    </div>
  );
}

/* ---------------- the section list ---------------- */

// Every chapter the template knows, in its default order. `body`
// returns the content when the project has data for it.
function chapters(data) {
  const { totals, best } = scores(data.decision);
  const opt = (value, render) => (value ? () => <div className="case-section-body">{render(value)}</div> : null);
  return [
    { id: 'overview', label: 'Overview', body: () => <Overview data={data} /> },
    { id: 'problem', label: 'The Problem', body: () => <Problem data={data} /> },
    { id: 'framing', label: 'Framing', body: opt(data.framing, (f) => <Framing f={f} />) },
    { id: 'approach', label: 'Approach', body: data.approach ? () => <Approach data={data} /> : null },
    { id: 'personas', label: 'Who it’s for', body: opt(data.personas, (p) => <Personas p={p} />) },
    { id: 'solution', label: 'The Solution', body: opt(data.solution, (s) => <Solution s={s} />) },
    { id: 'foundation', label: 'Foundations', body: opt(data.foundation, (s) => <System s={s} />) },
    { id: 'research', label: 'Research', body: opt(data.research, (r) => <Research r={r} />) },
    { id: 'directions', label: 'Directions', body: opt(data.directions, (items) => <Directions items={items} totals={totals} />) },
    { id: 'decision', label: 'Decision', body: opt(data.decision, (d) => <Decision d={d} totals={totals} best={best} />) },
    // The project's screens as a line-up, side by side like cars on a
    // showroom floor — each one once, each one opens full size.
    { id: 'screens', label: 'Screens', body: opt(data.ticker, (t) => <div className="screen-grid case-lineup">{t.screens.map((s, i) => <ScreenSlot screen={s} key={i} />)}</div>) },
    { id: 'flow', label: 'The Flow', body: data.flowChapters || data.flow ? () => <Flow data={data} /> : null },
    { id: 'states', label: 'Edge Cases', body: opt(data.states, (states) => <div className="screen-grid">{states.map((s, i) => <ScreenSlot screen={s} key={i} />)}</div>) },
    { id: 'system', label: 'Components', body: opt(data.system, (s) => <System s={s} />) },
    { id: 'testing', label: 'Testing & Learnings', body: data.testing ? () => <Testing data={data} /> : null },
    { id: 'impact', label: 'Impact', className: 'case-impact', body: data.impact ? () => <Impact data={data} /> : null },
    {
      id: 'whats-next',
      label: 'What’s Next',
      body: opt(data.nextSteps, (groups) => (
        <div className="case-panel-grid" style={{ '--cols': groups.length }}>
          {groups.map((g, i) => <div className="case-panel case-reveal" key={i}><h3>{g.title}</h3><Bullets items={g.items} /></div>)}
        </div>
      )),
    },
    { id: 'figma-file', label: 'The Figma File', body: data.figma ? () => <FigmaCard f={data.figma} /> : null },
    { id: 'playground', label: 'Playground', body: data.playground ? () => <PlaygroundCard p={data.playground} /> : null },
    { id: 'nda', label: 'Under NDA', body: data.nda ? () => <NdaCard n={data.nda} /> : null },
  ];
}

function Sections({ data }) {
  let list = chapters(data).filter((c) => c.body);
  // A project can list its sections in the order of its source file;
  // anything not listed keeps its default place, ahead of them.
  if (data.order) {
    const listed = data.order.map((id) => list.find((c) => c.id === id)).filter(Boolean);
    list = [...list.filter((c) => !data.order.includes(c.id)), ...listed];
  }

  // Number the shown sections in order and alternate their backgrounds
  // (Impact always stays on the base background). Each rule's meta reads
  // the section's place in the story ("03 / 09").
  let prevAlt = true;
  return list.map((c, i) => {
    const alt = c.className === 'case-impact' ? false : !prevAlt;
    prevAlt = alt;
    const meta = (data.sections || {})[c.id] || {};
    const label = meta.label || c.label;
    const no = pad(i + 1);
    const className = ['case-section', c.className, alt && 'case-section-alt'].filter(Boolean).join(' ');
    return (
      <section className={className} id={c.id} data-index={no} data-section={label} data-chapter={c.label} key={c.id}>
        <div className="section-index rule" data-rule="">
          <span className="rule-index">{no}</span><span className="rule-title section-index-label">{label}</span><span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span><span className="rule-meta">{`${no} / ${pad(list.length)}`}</span>
        </div>
        {meta.title || meta.intro ? (
          <div className="case-section-head">
            {meta.title ? <h2 className="case-section-title reveal-text">{meta.title}</h2> : null}
            {meta.intro ? <p className="case-section-intro reveal-text">{meta.intro}</p> : null}
          </div>
        ) : null}
        {c.body()}
      </section>
    );
  });
}

function CaseStudyPage({ slug, data }) {
  const bodyClass = `page-case${data.wideScreens ? ' case-wide-screens' : ''}`;
  return (
    <Page
      slug={slug}
      bodyClass={bodyClass}
      title={`${data.title} — ${data.subtitle} — Nitesh Dixit`}
      description={`${data.title} — ${data.tagline}`}
      init={initCaseStudy}
    >
      <main id="main">
        <Hero data={data} slug={slug} />
        <Sections data={data} />
        <CaseNext slug={slug} eyebrowClassName="reveal-text" />
        <Contact index="—" />
      </main>
      <Footer />
    </Page>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const data = CASE_STUDIES[slug];
  if (!data) return <Navigate to="/" replace />;
  // A study with its own page lives there, not in this template.
  if (data.href) return <Navigate to={data.href} replace />;
  return <CaseStudyPage slug={slug} data={data} />;
}
