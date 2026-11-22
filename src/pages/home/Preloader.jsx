import LocalTime from '../../components/LocalTime.jsx';

/* PRELOADER — the ignition self-test (home-hero.js). Rendered only when the home page is the first page of the visit.
*/
export default function Preloader() {
  return (
    <div className="preloader" id="preloader" aria-hidden="true">
      <div className="pre-half pre-half--top">
        <p className="pre-corner pre-corner--tl">N/D — Portfolio MMXXVI</p>
        <p className="pre-corner pre-corner--tr">
          <i className="pre-led" />
          <span className="pre-status"><span>Ignition</span></span>
        </p>
      </div>
      <div className="pre-half pre-half--bottom">
        <p className="pre-corner pre-corner--bl">Self-test <span className="pre-count">0/4</span></p>
        <p className="pre-corner pre-corner--br"><LocalTime />&nbsp;IST</p>
      </div>
      <div className="pre-cluster">
        <svg className="pre-dial" viewBox="-220 -220 440 440" focusable="false" />{' '}
        <div className="pre-readout"><span className="pre-speed">000</span> <span className="pre-unit">km/h</span></div>
        <p className="pre-timer">0–100 km/h · <span className="pre-time">0.0</span> s</p>
      </div>
      <div className="pre-drl">
        <i className="pre-drl-bloom" />
        <span className="pre-drl-segs" />
        <i className="pre-drl-core" />
      </div>
    </div>
  );
}
