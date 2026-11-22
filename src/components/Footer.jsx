/* FOOTER — the spec sheet sign-off. The home page numbers it in its
   sequence (07); the studies close on a section mark. */
import LocalTime from './LocalTime.jsx';

export default function Footer({ home = false }) {
  return (
    <footer className="footer" data-section="Sign-off" data-index={home ? '07' : '—'}>
      <div className="rule footer-rule" data-rule="">
        <span className="rule-index">{home ? '07' : '§'}</span>{' '}
        <span className="rule-title">End of line</span>{' '}
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>{' '}
        <a href="#top" className="rule-meta footer-top" data-cursor="Top">Back to top ↑</a>
      </div>
      <dl className="spec footer-spec">
        <div className="spec-row"><dt>Designer</dt><dd>Nitesh Dixit</dd></div>
        <div className="spec-row"><dt>Discipline</dt><dd>{home ? 'Product Design' : 'HMI · Product · Brand'}</dd></div>
        <div className="spec-row"><dt>Based in</dt><dd>India — working globally</dd></div>
        <div className="spec-row"><dt>Write</dt><dd><a href="mailto:sayhi@niteshdixit.in" className="link">sayhi@niteshdixit.in</a></dd></div>
        <div className="spec-row"><dt>Elsewhere</dt><dd className="footer-social"><a href="https://www.instagram.com/pixelandgear/" className="link" target="_blank" rel="noopener">Instagram</a><a href="https://www.linkedin.com/in/niteshdixit/" className="link" target="_blank" rel="noopener">LinkedIn</a><a href="https://www.behance.net/niteshdixit2" className="link" target="_blank" rel="noopener">Behance</a></dd></div>
        <div className="spec-row"><dt>Local time</dt><dd><LocalTime /> IST</dd></div>
      </dl>
      <div className="footer-mark" data-fit="" aria-hidden="true">Nitesh Dixit</div>
      <div className="footer-base">
        <span>© <span id="year">{new Date().getFullYear()}</span> Nitesh Dixit. All rights reserved.</span>{' '}
        <span>Coachbuilt in India · MMXXVI</span>
      </div>
    </footer>
  );
}
