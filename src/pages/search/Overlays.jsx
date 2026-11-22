/* The sky behind the climb and the altimeter rail (case-search.js).
*/
export default function Overlays() {
  return (
    <>
      <div className="fq-sky" id="fqSky" aria-hidden="true">
        <span className="fq-sky-ground" />{' '}
        <span className="fq-sky-stars is-far" />{' '}
        <span className="fq-sky-stars" />{' '}
        <span className="fq-sky-dawn" />
      </div>
      <aside className="fq-alt" id="fqAlt" aria-hidden="true">
        <span className="fq-alt-head">Elev.</span>{' '}
        <span className="fq-alt-tape">
          {' '}
          <i className="fq-alt-fill" />{' '}
          <ol className="fq-alt-marks" />{' '}
          <span className="fq-alt-needle"><b className="fq-alt-read">0</b><small>m</small></span>{' '}
        </span>{' '}
        <span className="fq-alt-foot">Sea level</span>
      </aside>
    </>
  );
}
