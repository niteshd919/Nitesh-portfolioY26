/* REAR VIEW — "Closer than they appear" (home-rearview.css / .js).
   Photographs from the road, seen in a wing mirror. The glass
   carries the legend every passenger-side mirror has printed on it;
   moving on, a frame shrinks into the distance the way things do in
   a mirror, and going back brings it toward you again. The glass
   unfolds into place on arrival, like a power-folding mirror.
   The forty frames run as one long day (data-light), first light to
   after dark, and the ruler at the foot is painted with each frame's
   own sky colour (data-tone), so the divider reads as the day.
   Cruise plays the frames on; Back or Next is the brake.
   One screen tall, nothing pinned. Without the script the frames are
   a strip that scrolls sideways.
*/
export default function RearView() {
  return (
    <section className="rearview" id="rearview" data-section="Rear View" data-index="05" aria-labelledby="rearview-title">
      <div className="rv-ambient" aria-hidden="true"><i /><i /></div>
      <header className="rule rv-rule" data-rule="" data-rule-progress="manual">
        <span className="rule-index">05</span>{' '}
        <span className="rule-title">Rear View</span>{' '}
        <span className="rule-line" aria-hidden="true"><i className="rule-fill" /></span>{' '}
        <span className="rule-meta">40 Frames</span>
      </header>
      <div className="rv-copy">
        <h2 className="rv-heading" id="rearview-title" data-reveal="lines">Closer than they <em>appear.</em></h2>
        <p className="rv-lead" data-reveal="up" data-reveal-delay="150">
          When I’m not designing, I’m usually on the road. Forty frames from those trips.
        </p>{' '}
        <a className="rv-more" href="https://www.instagram.com/pixelandgear/" target="_blank" rel="noopener" data-cursor="Instagram">
          <span className="link">More frames on Instagram</span>
          <i aria-hidden="true" />
        </a>{' '}
        <dl className="spec rv-read rv-live" aria-live="polite">
          <div className="spec-row rv-read-frame">
            <dt>Frame</dt>
            <dd><span className="rv-n">01</span><span className="rv-of">/ 40</span></dd>
          </div>
          <div className="spec-row rv-read-light">
            <dt>Light</dt>
            <dd className="rv-roll rv-light"><span>First light</span></dd>
          </div>
          <div className="spec-row rv-read-cap">
            <dt>In view</dt>
            <dd className="rv-roll rv-cap"><span>Waiting on the sun at the cliff edge</span></dd>
          </div>
        </dl>
        <div className="rv-controls rv-live">
          <button className="rv-btn rv-prev" type="button" data-cursor="Back">
            <i className="rv-arrow" aria-hidden="true" />
            <span>Back</span>
          </button>{' '}
          <button className="rv-cruise" type="button" aria-pressed="false" data-cursor="Cruise">
            <span className="rv-cruise-led" aria-hidden="true" />
            <span>Cruise</span>
            <span className="rv-cruise-state" aria-hidden="true">Off</span>
            <span className="rv-cruise-gauge" aria-hidden="true"><i /></span>
          </button>{' '}
          <button className="rv-btn rv-next" type="button" data-cursor="Next">
            <span>Next</span>
            <i className="rv-arrow" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="rv-stage">
        <div className="rv-glass">
          <div className="rv-pane">
            <ol className="rv-frames" aria-label="Photographs from the road, as one day">
              <li className="rv-frame" data-light="First light" data-tone="#5a4d3d">
                <figure>
                  <img src="/assets/rearview/01-1024.webp" srcSet="/assets/rearview/01-480.webp 480w, /assets/rearview/01-1024.webp 1024w, /assets/rearview/01.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Four people sit at a cliff edge with their backpacks, watching an orange sun rise through haze beside a large tree." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 01</span> Waiting on the sun at the cliff edge</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="First light" data-tone="#978760">
                <figure>
                  <img src="/assets/rearview/02-1024.webp" srcSet="/assets/rearview/02-480.webp 480w, /assets/rearview/02-1024.webp 1024w, /assets/rearview/02.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A pale sun burns through morning haze over a wide valley; a flat-topped hill stands to the right and a tree is silhouetted on the left." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 02</span>{' '}
                    Sun through the haze, a flat-topped hill to the right
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="First light" data-tone="#726b53">
                <figure>
                  <img src="/assets/rearview/03-1024.webp" srcSet="/assets/rearview/03-480.webp 480w, /assets/rearview/03-1024.webp 1024w, /assets/rearview/03.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A road loops around a hilltop above a hazy plain; a few people walk along it under a cloud-streaked dawn sky." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 03</span>{' '}
                    The summit road, walkers out before the heat
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="First light" data-tone="#947859">
                <figure>
                  <img src="/assets/rearview/04-1024.webp" srcSet="/assets/rearview/04-480.webp 480w, /assets/rearview/04-1024.webp 1024w, /assets/rearview/04.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A small sun rises through thick winter haze over open fields, a long flare across the frame and a car parked by a row of trees." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 04</span> Pulled over for a winter sunrise</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Morning" data-tone="#cab690">
                <figure>
                  <img src="/assets/rearview/05-1024.webp" srcSet="/assets/rearview/05-480.webp 480w, /assets/rearview/05-1024.webp 1024w, /assets/rearview/05.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A man walks up a dry grassy path toward the camera; hazy forested hills behind him and a faint moon in the pale sky." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 05</span>{' '}
                    The moon still up, a walker on the path
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Morning" data-tone="#a39581">
                <figure>
                  <img src="/assets/rearview/06-1024.webp" srcSet="/assets/rearview/06-480.webp 480w, /assets/rearview/06-1024.webp 1024w, /assets/rearview/06.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Dry, rolling scrubland under a pale blue sky, with a low concrete block wall zig-zagging through the foreground." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 06</span>{' '}
                    Scrubland, and a wall that wanders off into it
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Morning" data-tone="#948c79">
                <figure>
                  <img src="/assets/rearview/07-1024.webp" srcSet="/assets/rearview/07-480.webp 480w, /assets/rearview/07-1024.webp 1024w, /assets/rearview/07.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Tall, cut-back trees with tufts of new leaves stand over a half-built block wall, a hazy plain stretching behind them." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 07</span>{' '}
                    Pollarded trees over a half-built wall
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame is-tall" data-light="Morning" data-tone="#916a4c" style={{ backgroundImage: 'url(assets/rearview/08-glow.webp)' }}>
                <figure>
                  <img src="/assets/rearview/08-1024.webp" srcSet="/assets/rearview/08-480.webp 360w, /assets/rearview/08-1024.webp 768w, /assets/rearview/08.webp 1200w" sizes="(min-width: 900px) 32vw, 52vw" width="1200" height="1600" alt="Three ginger and white kittens sit in warm sunlight on a mat while their ginger mother sits behind them by a red fire extinguisher." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 08</span>{' '}
                    Three kittens in the sun, their mother on watch
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Morning" data-tone="#5b705f">
                <figure>
                  <img src="/assets/rearview/09-1024.webp" srcSet="/assets/rearview/09-480.webp 480w, /assets/rearview/09-1024.webp 1024w, /assets/rearview/09.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Yellow angel’s trumpet flowers hang beside a carved wooden eave, looking out over a mosaic terrace to misty mountains under heavy cloud." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 09</span>{' '}
                    Angel’s trumpets at the eaves, the valley under cloud
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Morning" data-tone="#82746b">
                <figure>
                  <img src="/assets/rearview/10-1024.webp" srcSet="/assets/rearview/10-480.webp 480w, /assets/rearview/10-1024.webp 1024w, /assets/rearview/10.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A plume of white cloud drifts down a green, terraced hillside dotted with houses, framed by tall trees in the foreground." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 10</span>{' '}
                    Cloud spilling down between the hill farms
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="High sun" data-tone="#6f909d">
                <figure>
                  <img src="/assets/rearview/11-1024.webp" srcSet="/assets/rearview/11-480.webp 480w, /assets/rearview/11-1024.webp 1024w, /assets/rearview/11.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Layer after layer of blue mountain ridges under a bright, cloudy sky, seen from above a green metal roof and treetops." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 11</span> Hills in rows beyond a green roof</figcaption>
                </figure>
              </li>
              <li className="rv-frame is-tall" data-light="High sun" data-tone="#627ea6" style={{ backgroundImage: 'url(assets/rearview/12-glow.webp)' }}>
                <figure>
                  <img src="/assets/rearview/12-1024.webp" srcSet="/assets/rearview/12-480.webp 361w, /assets/rearview/12-1024.webp 771w, /assets/rearview/12.webp 1204w" sizes="(min-width: 900px) 32vw, 52vw" width="1204" height="1600" alt="A tabby cat curls up on a cushioned wooden chair beside a large window that looks out over hazy blue mountains." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 12</span> The window seat, already taken</figcaption>
                </figure>
              </li>
              <li className="rv-frame is-tall" data-light="High sun" data-tone="#5e8675" style={{ backgroundImage: 'url(assets/rearview/13-glow.webp)' }}>
                <figure>
                  <img src="/assets/rearview/13-1024.webp" srcSet="/assets/rearview/13-480.webp 360w, /assets/rearview/13-1024.webp 768w, /assets/rearview/13.webp 960w" sizes="(min-width: 900px) 32vw, 52vw" width="960" height="1280" alt="The same tabby cat asleep on the chair, the window behind it full of green trees, yellow flowers and distant blue ridges." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 13</span> Still taken</figcaption>
                </figure>
              </li>
              <li className="rv-frame is-tall" data-light="High sun" data-tone="#4f6d9a" style={{ backgroundImage: 'url(assets/rearview/14-glow.webp)' }}>
                <figure>
                  <img src="/assets/rearview/14-1024.webp" srcSet="/assets/rearview/14-480.webp 360w, /assets/rearview/14-1024.webp 768w, /assets/rearview/14.webp 1200w" sizes="(min-width: 900px) 32vw, 52vw" width="1200" height="1600" alt="Looking up at a stand of tall, thin trees with feathery leaves against a blue sky and white cloud, green hills at their feet." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 14</span> Tall trees leaning into a blue sky</figcaption>
                </figure>
              </li>
              <li className="rv-frame is-tall" data-light="High sun" data-tone="#999984" style={{ backgroundImage: 'url(assets/rearview/15-glow.webp)' }}>
                <figure>
                  <img src="/assets/rearview/15-1024.webp" srcSet="/assets/rearview/15-480.webp 360w, /assets/rearview/15-1024.webp 768w, /assets/rearview/15.webp 1200w" sizes="(min-width: 900px) 32vw, 52vw" width="1200" height="1600" alt="Ruined brick walls and arches overgrown with moss and ferns, a brown monsoon river visible through an archway under a grey sky." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 15</span>{' '}
                    Brick arches over a river swollen with rain
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Under a roof" data-tone="#866340">
                <figure>
                  <img src="/assets/rearview/16-1024.webp" srcSet="/assets/rearview/16-480.webp 480w, /assets/rearview/16-1024.webp 1024w, /assets/rearview/16.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Close side view of a cream vintage car with black wings, wire-spoke wheels, a louvred bonnet and a spare wheel mounted on the front wing." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 16</span>{' '}
                    A cream tourer, its spare carried on the wing
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Under a roof" data-tone="#2b2020">
                <figure>
                  <img src="/assets/rearview/17-1024.webp" srcSet="/assets/rearview/17-480.webp 480w, /assets/rearview/17-1024.webp 1024w, /assets/rearview/17.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Head-on view of a vintage Fiat with large round headlamps, a tall vertical grille, blue wings and the number plate CTW 2000." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 17</span>{' '}
                    A Fiat with blue wings, plate CTW 2000
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Under a roof" data-tone="#7a3f3d">
                <figure>
                  <img src="/assets/rearview/18-1024.webp" srcSet="/assets/rearview/18-480.webp 480w, /assets/rearview/18-1024.webp 1024w, /assets/rearview/18.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A glossy red vintage two-seater with cream wheels and a canvas hood, photographed from floor level under a museum’s steel roof." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 18</span>{' '}
                    A red two-seater, hood up, shot from the floor
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Under a roof" data-tone="#688080">
                <figure>
                  <img src="/assets/rearview/19-1024.webp" srcSet="/assets/rearview/19-480.webp 480w, /assets/rearview/19-1024.webp 1024w, /assets/rearview/19.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A black 1962 Standard Herald, head-on, parked in front of a pair of ornately carved green wooden doors." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 19</span>{' '}
                    A 1962 Standard Herald before carved green doors
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Under a roof" data-tone="#817260">
                <figure>
                  <img src="/assets/rearview/20-1024.webp" srcSet="/assets/rearview/20-480.webp 480w, /assets/rearview/20-1024.webp 1024w, /assets/rearview/20.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Low side view of a white 1980s Nissan saloon with chrome trim, black side moulding and the word NISSAN on the lower door." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 20</span>{' '}
                    A white Nissan saloon, the name along its sill
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Under a roof" data-tone="#685b56">
                <figure>
                  <img src="/assets/rearview/21-1024.webp" srcSet="/assets/rearview/21-480.webp 480w, /assets/rearview/21-1024.webp 1024w, /assets/rearview/21.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Close front view of a dark grey BMW saloon with four round headlamps, a chrome kidney grille and blue light reflected on the bonnet." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 21</span>{' '}
                    A late-eighties BMW: four round lamps, a wide kidney grille
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Under a roof" data-tone="#6e6052">
                <figure>
                  <img src="/assets/rearview/22-1024.webp" srcSet="/assets/rearview/22-480.webp 480w, /assets/rearview/22-1024.webp 1024w, /assets/rearview/22.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A cutaway engine on a display stand, its block, airbox and pipes sliced open to show the parts inside." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 22</span>{' '}
                    A sectioned engine with its insides on show
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Afternoon" data-tone="#5d7e88">
                <figure>
                  <img src="/assets/rearview/23-1024.webp" srcSet="/assets/rearview/23-480.webp 480w, /assets/rearview/23-1024.webp 1024w, /assets/rearview/23.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="900" alt="Looking up at the stone gateway of Shaniwar Wada in Pune between two massive bastions, the sun bursting over the right tower." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 23</span>{' '}
                    Shaniwar Wada, Pune, the sun on a bastion
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Afternoon" data-tone="#837354">
                <figure>
                  <img src="/assets/rearview/24-1024.webp" srcSet="/assets/rearview/24-480.webp 480w, /assets/rearview/24-1024.webp 1024w, /assets/rearview/24.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A green landscape scattered with granite boulders, the sun a bright patch behind a thick grey cloud cover." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 24</span> Boulder country under a heavy sky</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Afternoon" data-tone="#809780">
                <figure>
                  <img src="/assets/rearview/25-1024.webp" srcSet="/assets/rearview/25-480.webp 480w, /assets/rearview/25-1024.webp 1024w, /assets/rearview/25.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A dark cloud stretches across a pale sky over a highway, with a truck and SUVs heading toward the horizon." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 25</span>{' '}
                    Highway, the clouds outrunning the traffic
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Afternoon" data-tone="#6a816a">
                <figure>
                  <img src="/assets/rearview/26-1024.webp" srcSet="/assets/rearview/26-480.webp 480w, /assets/rearview/26-1024.webp 1024w, /assets/rearview/26.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Cars on a multi-lane highway pass under a steel gantry between rocky cuttings, a cloudy sky above." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 26</span> Four lanes under a gantry</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Afternoon" data-tone="#4d7eb5">
                <figure>
                  <img src="/assets/rearview/27-1024.webp" srcSet="/assets/rearview/27-480.webp 480w, /assets/rearview/27-1024.webp 1024w, /assets/rearview/27.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A wide reservoir under a blue sky streaked with high cloud, ringed by dark rocky hills." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 27</span>{' '}
                    A reservoir with rock hills on three sides
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Afternoon" data-tone="#6884a0">
                <figure>
                  <img src="/assets/rearview/28-1024.webp" srcSet="/assets/rearview/28-480.webp 480w, /assets/rearview/28-1024.webp 1024w, /assets/rearview/28.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Rippled white cloud fills the sky over a reservoir, the hills on the far shore in silhouette." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 28</span> A mackerel sky over the water</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Golden hour" data-tone="#56725d">
                <figure>
                  <img src="/assets/rearview/29-1024.webp" srcSet="/assets/rearview/29-480.webp 480w, /assets/rearview/29-1024.webp 1024w, /assets/rearview/29.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A low sun over hills throws a glittering path across choppy water under a dappled sky." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 29</span> The sun lays a path across the water</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Golden hour" data-tone="#658977">
                <figure>
                  <img src="/assets/rearview/30-1024.webp" srcSet="/assets/rearview/30-480.webp 480w, /assets/rearview/30-1024.webp 1024w, /assets/rearview/30.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="The sun sits just above a hill line, its reflection a bright column on the reservoir below." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 30</span> The ridge starts to take the sun</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Golden hour" data-tone="#838369">
                <figure>
                  <img src="/assets/rearview/31-1024.webp" srcSet="/assets/rearview/31-480.webp 480w, /assets/rearview/31-1024.webp 1024w, /assets/rearview/31.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Sunlight glares across rippling water toward a row of silhouetted hills, the sky a mix of blue and grey cloud." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 31</span> Low sun, the lake turned to foil</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Golden hour" data-tone="#786d5a">
                <figure>
                  <img src="/assets/rearview/32-1024.webp" srcSet="/assets/rearview/32-480.webp 480w, /assets/rearview/32-1024.webp 1024w, /assets/rearview/32.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="From a rocky hilltop where people sit, a city stretches to the horizon under clouds lit gold by the setting sun." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 32</span> From the rock, the city going gold</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Golden hour" data-tone="#74829b">
                <figure>
                  <img src="/assets/rearview/33-1024.webp" srcSet="/assets/rearview/33-480.webp 480w, /assets/rearview/33-1024.webp 1024w, /assets/rearview/33.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Coconut palms silhouetted against an orange sunset sky, a striped crash barrier blurred in the foreground." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 33</span>{' '}
                    Palms against the afterglow, the crash barrier a blur
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Last light" data-tone="#8b717e">
                <figure>
                  <img src="/assets/rearview/34-1024.webp" srcSet="/assets/rearview/34-480.webp 480w, /assets/rearview/34-1024.webp 1024w, /assets/rearview/34.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1204" alt="A red sun sets on a distant ridge under a band of grey cloud, layer after layer of hazy mountains below." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 34</span>{' '}
                    A red sun on the far ridge, the valleys filling with haze
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Last light" data-tone="#68533b">
                <figure>
                  <img src="/assets/rearview/35-1024.webp" srcSet="/assets/rearview/35-480.webp 480w, /assets/rearview/35-1024.webp 1024w, /assets/rearview/35.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1204" alt="Dark cloud presses down on a thin orange band of sky above misty mountain ridges, a swing frame silhouetted at the bottom." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 35</span>{' '}
                    A lid of cloud, a strip of orange, an empty swing
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Last light" data-tone="#89687a">
                <figure>
                  <img src="/assets/rearview/36-1024.webp" srcSet="/assets/rearview/36-480.webp 480w, /assets/rearview/36-1024.webp 1024w, /assets/rearview/36.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A calm lake at dusk under a pink and lilac sky, a line of lights on the far shore reflected in the water." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 36</span>{' '}
                    Dusk over the lake, lights coming on across the water
                  </figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Last light" data-tone="#32200c">
                <figure>
                  <img src="/assets/rearview/37-1024.webp" srcSet="/assets/rearview/37-480.webp 480w, /assets/rearview/37-1024.webp 1024w, /assets/rearview/37.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="An orange afterglow behind a dark hill, framed by silhouetted trees and power lines." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 37</span> Afterglow between the trees</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="Last light" data-tone="#29120a">
                <figure>
                  <img src="/assets/rearview/38-1024.webp" srcSet="/assets/rearview/38-480.webp 480w, /assets/rearview/38-1024.webp 1024w, /assets/rearview/38.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="A deep red streak of sky over a black mountain silhouette, the rest of the frame almost dark." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 38</span> The last red, nearly gone</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="After dark" data-tone="#291c0a">
                <figure>
                  <img src="/assets/rearview/39-1024.webp" srcSet="/assets/rearview/39-480.webp 480w, /assets/rearview/39-1024.webp 1024w, /assets/rearview/39.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Inside a car at night: a pale headrest lit amber, a passenger’s head and a dark window beside it." loading="lazy" decoding="async" />{' '}
                  <figcaption><span className="rv-fno">Frame 39</span> Back seat, the cabin lit amber</figcaption>
                </figure>
              </li>
              <li className="rv-frame" data-light="After dark" data-tone="#1a2116">
                <figure>
                  <img src="/assets/rearview/40-1024.webp" srcSet="/assets/rearview/40-480.webp 480w, /assets/rearview/40-1024.webp 1024w, /assets/rearview/40.webp 1600w" sizes="(min-width: 900px) 58vw, 92vw" width="1600" height="1200" alt="Inside a moving car at night, the side window a blur of trees and orange street lights." loading="lazy" decoding="async" />{' '}
                  <figcaption>
                    <span className="rv-fno">Frame 40</span>{' '}
                    Night drive, the town smeared across the glass
                  </figcaption>
                </figure>
              </li>
            </ol>{' '}
            <span className="rv-glare" aria-hidden="true" />{' '}
            <p className="rv-legend" aria-hidden="true">Objects in mirror are closer than they appear</p>
          </div>{' '}
          <span className="rv-hit rv-hit--back rv-live" data-cursor="Back" aria-hidden="true" />{' '}
          <span className="rv-hit rv-hit--next rv-live" data-cursor="Next" aria-hidden="true" />
        </div>
      </div>
      <div className="rv-day rv-live">
        <div className="rv-track" role="slider" tabIndex="0" aria-label="Frame, from first light to after dark" aria-valuemin="1" aria-valuemax="40" aria-valuenow="1" aria-valuetext="Frame 1 of 40, First light: Waiting on the sun at the cliff edge">
          <span className="rv-ticks" aria-hidden="true" />{' '}
          <span className="rv-needle" aria-hidden="true"><b>01</b></span>
        </div>
        <ol className="rv-phases" aria-hidden="true" />{' '}
        <span className="rv-peek" aria-hidden="true">
          <img alt="" width="480" height="360" decoding="async" />
          <span className="rv-peek-k" />
          <span className="rv-peek-v" />
        </span>
      </div>
    </section>
  );
}
