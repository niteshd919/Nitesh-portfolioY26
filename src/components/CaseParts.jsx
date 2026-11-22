/* ==================================================================
   Case chrome shared by the template and the bespoke pages, rendered
   from the data instead of patched in by each page script:

     <CaseHeroNo slug />   the hero's series ruler + "Case 02 / 04 ·
                           Model year 2025" readout
     <CaseNext slug />     the next study in the same series
   ================================================================== */
import { caseNumbers, fullName, studyData } from '../data/caseStudies.js';
import { caseHref } from '../data/routes.js';

export function CaseHeroNo({ slug }) {
  const data = studyData(slug);
  const { index, count, no } = caseNumbers(slug);
  return (
    <>
      <span className="case-hero-ruler" aria-hidden="true" style={{ '--case-i': index, '--case-n': count }}><i /></span>{' '}
      <p className="case-hero-no" id="caseNo">
        <b>{no}</b><i aria-hidden="true" /><span>{data.published ? `Published ${data.published}` : `Model year ${data.year}`}</span>
      </p>
    </>
  );
}

export function CaseNext({ slug, eyebrowClassName = '' }) {
  const data = studyData(slug);
  const nextSlug = data.next;
  const next = studyData(nextSlug);
  if (!next) return null;
  const { series } = caseNumbers(slug);
  const noun = series.noun(nextSlug) === 'publication' ? 'publication' : 'project';
  const nextNo = series.no(nextSlug);
  return (
    <section className="case-next" data-section={`Next ${noun}`} data-index="—">
      <p className={`case-next-eyebrow ${eyebrowClassName}`.trim()}>{`Next ${noun} · ${nextNo}`}</p>
      <a
        href={caseHref(nextSlug)}
        className="case-next-link"
        id="caseNextLink"
        data-cursor="Next"
        data-transition=""
        data-transition-label={fullName(next)}
        data-transition-eyebrow={`Next · ${nextNo}`}
        aria-label={`Next ${noun}: ${fullName(next)}`}
      >
        <span className="line-mask"><span className="line" id="caseNextTitle">{next.title}</span></span>
        <span className="case-next-dim" aria-hidden="true"><i /></span>
      </a>
    </section>
  );
}
