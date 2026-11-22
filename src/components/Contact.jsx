/* CONTACT — push to start (contact.js runs it on every page). */
export default function Contact({ index = '—' }) {
  return (
    <section className="contact" id="contact" data-section="Contact" data-index={index} aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="contact-eyebrow label" data-reveal="fade">Have a project in mind?</p>
        <h2 className="contact-title" id="contact-title" data-reveal="lines">Let’s talk.</h2>
        <p className="contact-write" data-reveal="up" data-reveal-delay="250"><span className="label">Write to</span><a href="mailto:sayhi@niteshdixit.in" className="contact-email link" data-cursor="Write">sayhi@niteshdixit.in</a></p>
      </div>
      <div className="contact-ignition">
        <a href="mailto:sayhi@niteshdixit.in" className="ignition" aria-label="Let’s talk — email sayhi@niteshdixit.in" data-cursor="Say hi">
          <svg className="ignition-scale" viewBox="-100 -100 200 200" aria-hidden="true" focusable="false"><circle className="is-rim" r="97" /><circle className="is-minor" r="88" pathLength="360" /><circle className="is-major" r="89" pathLength="360" /></svg>{' '}
          <svg className="ignition-scale ignition-scale--lit" viewBox="-100 -100 200 200" aria-hidden="true" focusable="false"><circle className="is-minor" r="88" pathLength="360" /><circle className="is-major" r="89" pathLength="360" /></svg>{' '}
          <span className="ignition-ring" aria-hidden="true" />{' '}
          <span className="ignition-led" aria-hidden="true" />{' '}
          <span className="ignition-face" aria-hidden="true"><span className="ignition-engine">Engine</span><span className="ignition-start">Start</span><span className="ignition-stop">Stop</span></span>
        </a>
        <p className="contact-dim dim" aria-hidden="true" data-reveal="fade" data-reveal-delay="500">Push to start</p>
      </div>
    </section>
  );
}
