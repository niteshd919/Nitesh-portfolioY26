/*  FINALE — the same room, now with a number and a date.
*/
export default function Booked() {
  return (
    <section className="case-section hm-finale" id="booked" data-section="Booked" data-index="—">
      <figure className="hm-look-photo is-end" id="lookEnd">
        <span className="hm-look-frame">
          <img src="/assets/homingly/room.webp" srcSet="/assets/homingly/room-640.webp 640w, /assets/homingly/room.webp 1024w" sizes="(max-width: 900px) 92vw, 60vw" width="1024" height="1024" alt="The same sunlit living room, now with its estimate and a booked site visit." loading="lazy" decoding="async" />
        </span>{' '}
        <figcaption className="hm-roomtag is-end">
          <span className="hm-roomtag-k">Booked · Site visit, Mon 18 Oct, 11:30 AM</span>{' '}
          <span className="hm-roomtag-name">Living room</span>{' '}
          <span className="hm-roomtag-price">
            <span className="hm-roomtag-label">Estimate</span>
            <b>₹3.4L – ₹4.1L</b>
          </span>{' '}
          <span className="hm-roomtag-who">With Meera Iyer · Studio Ivory</span>
        </figcaption>
      </figure>
      <p className="case-closing">Show the number first. Every step after it is easier to take.</p>
    </section>
  );
}
