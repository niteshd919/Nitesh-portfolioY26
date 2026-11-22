/* region:hero =================================================
*/
export default function Hero() {
  return (
    <section className="hero" id="top" data-section="Ignition" data-index="00" aria-label="Introduction">
      <div className="hero-head">
        <p className="hero-eyebrow label">
          <span>Product Design</span>
          <span className="hero-eyebrow-rule" aria-hidden="true" />
          <span><span className="sr-only">— </span>Portfolio MMXXVI</span>
        </p>
        <h1 className="hero-title h-display">
          <span className="line-mask"><span className="line">I design</span></span>{' '}
          <span className="line-mask"><span className="line"><em>experiences</em></span></span>{' '}
          <span className="line-mask"><span className="line">that move.</span></span>
        </h1>
        <p className="hero-intro lead">
          For screens you glance at and screens you live in. Interaction design, information architecture and design systems for at-a-glance displays and all-day work tools.
        </p>
      </div>
      <div className="hero-stage">
        <figure className="hero-fig" role="img" aria-label="Technical line drawing of a grand-tourer coupé, annotated with four disciplines: 01 Brand at the tail light, 02 HMI at the cockpit, 03 Research at the wheel and 04 Interface at the headlight. A dimension line along the car reads 6+ years and 30+ products.">
          <svg className="hero-car" viewBox="0 0 1200 420" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="hcShoulder" gradientUnits="userSpaceOnUse" x1="828" y1="0" x2="200" y2="0">
                <stop offset="0" stopColor="currentColor" stopOpacity="0" />
                <stop offset="0.22" stopColor="currentColor" stopOpacity="0.45" />
                <stop offset="0.72" stopColor="currentColor" stopOpacity="0.8" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient id="hcSill" gradientUnits="userSpaceOnUse" x1="806" y1="0" x2="394" y2="0">
                <stop offset="0" stopColor="currentColor" stopOpacity="0" />
                <stop offset="0.45" stopColor="currentColor" stopOpacity="0.45" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hcBodyFill" gradientUnits="userSpaceOnUse" x1="0" y1="134" x2="0" y2="334">
                <stop offset="0" stopColor="currentColor" stopOpacity="0.07" />
                <stop offset="0.45" stopColor="currentColor" stopOpacity="0.025" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hcGlass" gradientUnits="userSpaceOnUse" x1="380" y1="140" x2="560" y2="200">
                <stop offset="0" stopColor="currentColor" stopOpacity="0" />
                <stop offset="0.48" stopColor="currentColor" stopOpacity="0" />
                <stop offset="0.5" stopColor="currentColor" stopOpacity="0.1" />
                <stop offset="0.62" stopColor="currentColor" stopOpacity="0.02" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="hcPool" gradientUnits="userSpaceOnUse" cx="600" cy="360" r="600" gradientTransform="matrix(1 0 0 0.12 0 316.8)">
                <stop offset="0" stopColor="currentColor" stopOpacity="0.085" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hcShadow" gradientUnits="userSpaceOnUse" cx="596" cy="360" r="430" gradientTransform="matrix(1 0 0 0.06 0 338.4)">
                <stop offset="0" stopColor="#000" stopOpacity="0.9" />
                <stop offset="1" stopColor="#000" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="hcBeam" gradientUnits="userSpaceOnUse" cx="1052" cy="258" r="640" gradientTransform="translate(1052 258) rotate(7) scale(1 0.11) translate(-1052 -258)">
                <stop offset="0" style={{ stopColor: 'var(--c-light)', stopOpacity: '0.46' }} />
                <stop offset="0.12" style={{ stopColor: 'var(--c-light)', stopOpacity: '0.2' }} />
                <stop offset="0.4" style={{ stopColor: 'var(--c-light)', stopOpacity: '0.06' }} />
                <stop offset="1" style={{ stopColor: 'var(--c-light)', stopOpacity: '0' }} />
              </radialGradient>
              <linearGradient id="hcBeamFade" gradientUnits="userSpaceOnUse" x1="1046" y1="0" x2="1110" y2="0">
                <stop offset="0" stopColor="#000" />
                <stop offset="1" stopColor="#fff" />
              </linearGradient>
              <mask id="hcBeamMask" maskUnits="userSpaceOnUse" x="1040" y="100" width="940" height="300">
                <rect x="1040" y="100" width="940" height="300" fill="url(#hcBeamFade)" />
              </mask>
              <radialGradient id="hcBeamPool" gradientUnits="userSpaceOnUse" cx="1290" cy="360" r="300" gradientTransform="matrix(1 0 0 0.05 0 342)">
                <stop offset="0" style={{ stopColor: 'var(--c-light)', stopOpacity: '0.18' }} />
                <stop offset="1" style={{ stopColor: 'var(--c-light)', stopOpacity: '0' }} />
              </radialGradient>
              <radialGradient id="hcTailPool" gradientUnits="userSpaceOnUse" cx="80" cy="360" r="150" gradientTransform="matrix(1 0 0 0.06 0 338.4)">
                <stop offset="0" style={{ stopColor: 'var(--c-signal)', stopOpacity: '0.3' }} />
                <stop offset="1" style={{ stopColor: 'var(--c-signal)', stopOpacity: '0' }} />
              </radialGradient>
              <linearGradient id="hcSweep" gradientUnits="userSpaceOnUse" x1="-420" y1="0" x2="-140" y2="0">
                <stop offset="0" style={{ stopColor: 'var(--c-light)', stopOpacity: '0' }} />
                <stop offset="0.5" style={{ stopColor: 'var(--c-light)', stopOpacity: '1' }} />
                <stop offset="1" style={{ stopColor: 'var(--c-light)', stopOpacity: '0' }} />
              </linearGradient>
            </defs>
            <rect className="hc-pool" x="-200" y="280" width="1600" height="160" fill="url(#hcPool)" />
            <g className="hc-road">
              <line className="hc-ground" x1="-2400" y1="360" x2="3600" y2="360" />
              <line className="hc-lane" x1="-2400" y1="378" x2="3600" y2="378" />
            </g>
            <g className="hc-drive">
              <rect className="hc-shadow" x="120" y="330" width="960" height="60" fill="url(#hcShadow)" />
              <g className="hc-beam">
                <rect x="1046" y="120" width="920" height="260" fill="url(#hcBeam)" mask="url(#hcBeamMask)" />
                <rect x="900" y="336" width="780" height="48" fill="url(#hcBeamPool)" />
              </g>
              <g className="hc-tailglow"><rect x="-120" y="344" width="400" height="32" fill="url(#hcTailPool)" /></g>
              <path className="hc-center" d="M200 283 H408 M304 179 V404 M784 283 H992 M888 179 V404" />
              <path className="hc-ext" d="M98 300 V412 M1066 300 V412" />
              <g className="hc-car">
                <path className="hc-fill" d="M957.2 334 L1034 334 C1046 334 1056 328 1060 316 C1064 302 1066 286 1066 272 C1066 256 1060 246 1044 240 C1000 224 950 194 888 182 C816 177 730 176 672 177 C650 163 618 147 590 141 C566 136 520 133 470 137 C380 145 290 163 220 178 C176 186 136 189 112 188 C106 187.5 101 186 98 184 C99 190 102 194 105 198 C103 214 103 236 105 256 C108 280 115 300 128 314 C136 326 150 333 172 334 L234.8 334 A86 86 0 1 1 373.2 334 L818.8 334 A86 86 0 1 1 957.2 334 Z" />
                <path className="hc-glassfill" d="M656 182 C636 170 612 156 588 149 C562 144 512 142 470 145 C430 149 392 158 362 170 C354 174 354 177.5 362 178 C452 179.5 560 181 656 182 Z" />
                <path className="hc-body" data-draw="body" d="M957.2 334 L1034 334 C1046 334 1056 328 1060 316 C1064 302 1066 286 1066 272 C1066 256 1060 246 1044 240 C1000 224 950 194 888 182 C816 177 730 176 672 177 C650 163 618 147 590 141 C566 136 520 133 470 137 C380 145 290 163 220 178 C176 186 136 189 112 188 C106 187.5 101 186 98 184 C99 190 102 194 105 198 C103 214 103 236 105 256 C108 280 115 300 128 314 C136 326 150 333 172 334 L234.8 334 A86 86 0 1 1 373.2 334 L818.8 334 A86 86 0 1 1 957.2 334 Z" />
                <path className="hc-glass" data-draw="glass" d="M656 182 C636 170 612 156 588 149 C562 144 512 142 470 145 C430 149 392 158 362 170 C354 174 354 177.5 362 178 C452 179.5 560 181 656 182 Z" />
                <path className="hc-line is-glass" data-draw="detail" d="M470 145.2 C468 157 466 168 464 179.3" />
                <path className="hc-line is-mirror" data-draw="detail" d="M620 177 C620 170 630 166.5 644 166.5 C657 166.5 666 169.5 668 173.5 C669 178 662 181 648 181 C633 181 620 180.5 620 177 Z" />
                <path className="hc-line" data-draw="detail" d="M652 181 L660 188" />
                <path className="hc-line is-shoulder" data-draw="detail" d="M824 216 C730 213 600 210 500 207 C430 205 380 199 344 190 C312 182 262 183 200 194" />
                <path className="hc-line is-sill" data-draw="detail" d="M806 318 C700 316 540 312 394 300" />
                <path className="hc-line is-faint" data-draw="detail" d="M686 186 C692 228 694 278 690 330" />
                <path className="hc-line is-faint" data-draw="detail" d="M464 184 C456 228 456 280 462 331" />
                <path className="hc-line" data-draw="detail" d="M488 201 C500 198.5 518 198.5 530 200.5" />
                <path className="hc-line is-faint" data-draw="detail" d="M220 245.6 A92 92 0 0 1 388 245.6" />
                <path className="hc-line is-faint" data-draw="detail" d="M804 245.6 A92 92 0 0 1 972 245.6" />
                <path className="hc-line" data-draw="detail" d="M1058 254 C1036 245 1006 231 980 220 C1002 234 1030 249 1052 262 C1057 261 1060 257 1058 254 Z" />
                <path className="hc-line is-faint" data-draw="detail" d="M1044 266 C1051 282 1052 300 1046 318" />
                <path className="hc-line is-faint" data-draw="detail" d="M1061 306 C1040 304 1016 308 1000 318 C1016 320 1040 320 1059 320" />
                <path className="hc-line is-faint" data-draw="detail" d="M978 328 L1044 328" />
                <path className="hc-line" data-draw="detail" d="M104 196 C132 197.5 164 199.5 194 202 C164 203.5 132 203 105 202 Z" />
                <path className="hc-line is-faint" data-draw="detail" d="M124 202 C116 236 118 276 134 308" />
                <path className="hc-line is-faint" data-draw="detail" d="M104 258 C130 260 160 262 196 264" />
                <path className="hc-line is-faint" data-draw="detail" d="M124 310 C140 316 164 321 200 323" />
                <path className="hc-line is-faint" data-draw="detail" d="M140 316 L144 333 M158 319 L161 333 M176 321 L178 333" />
                <path className="hc-sweep" d="M957.2 334 L1034 334 C1046 334 1056 328 1060 316 C1064 302 1066 286 1066 272 C1066 256 1060 246 1044 240 C1000 224 950 194 888 182 C816 177 730 176 672 177 C650 163 618 147 590 141 C566 136 520 133 470 137 C380 145 290 163 220 178 C176 186 136 189 112 188 C106 187.5 101 186 98 184 C99 190 102 194 105 198 C103 214 103 236 105 256 C108 280 115 300 128 314 C136 326 150 333 172 334 L234.8 334 A86 86 0 1 1 373.2 334 L818.8 334 A86 86 0 1 1 957.2 334 Z" />
                <g className="hc-light hc-drl">
                  <path className="hc-glow-3" d="M1054 257 C1030 247 1004 234 984 224" />
                  <path className="hc-glow-2" d="M1054 257 C1030 247 1004 234 984 224" />
                  <path className="hc-glow-1" d="M1054 257 C1030 247 1004 234 984 224" />
                </g>
                <g className="hc-light hc-tail">
                  <path className="hc-glow-3" d="M107 199 C136 200 166 201.5 192 202.5" />
                  <path className="hc-glow-2" d="M107 199 C136 200 166 201.5 192 202.5" />
                  <path className="hc-glow-1" d="M107 199 C136 200 166 201.5 192 202.5" />
                </g>
                <g className="hc-wheel" data-wheel="rear">
                  <circle className="hc-tyre" data-draw="wheel" cx="304" cy="283" r="77" />
                  <circle className="is-faint" data-draw="wheel" cx="304" cy="283" r="69.5" />
                  <circle className="hc-rimlip" data-draw="wheel" cx="304" cy="283" r="59.5" />
                  <g className="hc-rim" data-cx="304" data-cy="283">
                    <circle className="is-faint" data-draw="wheel" cx="304" cy="283" r="55.5" />
                    <circle className="hc-disc" cx="304" cy="283" r="41" />
                    <path className="hc-spokes" data-draw="wheel" d="M302.3 267.1 L301 228.1 M305.7 267.1 L307 228.1 M312 269.1 L333.9 236.8 M314.7 271.1 L338.7 240.3 M318.6 276.5 L355.3 263.2 M319.7 279.7 L357.2 268.9 M319.7 286.3 L357.2 297.1 M318.6 289.5 L355.3 302.8 M314.7 294.9 L338.7 325.7 M312 296.9 L333.9 329.2 M305.7 298.9 L307 337.9 M302.3 298.9 L301 337.9 M296 296.9 L274.1 329.2 M293.3 294.9 L269.3 325.7 M289.4 289.5 L252.7 302.8 M288.3 286.3 L250.8 297.1 M288.3 279.7 L250.8 268.9 M289.4 276.5 L252.7 263.2 M293.3 271.1 L269.3 240.3 M296 269.1 L274.1 236.8" />
                    <circle className="hc-rimlip" data-draw="wheel" cx="304" cy="283" r="16" />
                    <circle className="is-faint" data-draw="wheel" cx="304" cy="283" r="9" />
                    <circle className="hc-cap" cx="304" cy="283" r="3.2" />
                  </g>
                </g>
                <g className="hc-wheel" data-wheel="front">
                  <circle className="hc-tyre" data-draw="wheel" cx="888" cy="283" r="77" />
                  <circle className="is-faint" data-draw="wheel" cx="888" cy="283" r="69.5" />
                  <circle className="hc-rimlip" data-draw="wheel" cx="888" cy="283" r="59.5" />
                  <g className="hc-rim" data-cx="888" data-cy="283">
                    <circle className="is-faint" data-draw="wheel" cx="888" cy="283" r="55.5" />
                    <circle className="hc-disc" cx="888" cy="283" r="41" />
                    <path className="hc-spokes" data-draw="wheel" d="M886.3 267.1 L885 228.1 M889.7 267.1 L891 228.1 M896 269.1 L917.9 236.8 M898.7 271.1 L922.7 240.3 M902.6 276.5 L939.3 263.2 M903.7 279.7 L941.2 268.9 M903.7 286.3 L941.2 297.1 M902.6 289.5 L939.3 302.8 M898.7 294.9 L922.7 325.7 M896 296.9 L917.9 329.2 M889.7 298.9 L891 337.9 M886.3 298.9 L885 337.9 M880 296.9 L858.1 329.2 M877.3 294.9 L853.3 325.7 M873.4 289.5 L836.7 302.8 M872.3 286.3 L834.8 297.1 M872.3 279.7 L834.8 268.9 M873.4 276.5 L836.7 263.2 M877.3 271.1 L853.3 240.3 M880 269.1 L858.1 236.8" />
                    <circle className="hc-rimlip" data-draw="wheel" cx="888" cy="283" r="16" />
                    <circle className="is-faint" data-draw="wheel" cx="888" cy="283" r="9" />
                    <circle className="hc-cap" cx="888" cy="283" r="3.2" />
                  </g>
                </g>
              </g>
            </g>
            <g className="hc-notes">
              <g className="hc-note" data-note="01">
                <path className="hc-leader" data-draw="note" d="M150 199 V74" />
                <circle className="hc-dot" cx="150" cy="199" r="2.6" />
              </g>
              <g className="hc-note" data-note="02">
                <path className="hc-leader" data-draw="note" d="M560 163 V74" />
                <circle className="hc-dot" cx="560" cy="163" r="2.6" />
              </g>
              <g className="hc-note" data-note="03">
                <path className="hc-leader" data-draw="note" d="M888 223.5 V74" />
                <circle className="hc-dot" cx="888" cy="223.5" r="2.6" />
              </g>
              <g className="hc-note" data-note="04">
                <path className="hc-leader" data-draw="note" d="M1018 240 V74" />
                <circle className="hc-dot" cx="1018" cy="240" r="2.6" />
              </g>
            </g>
          </svg>{' '}
          <div className="hero-notes" aria-hidden="true">
            <p className="hero-note is-left" data-note="01" style={{ '--x': '150', '--y': '74' }}>
              <span className="hero-note-i">01</span>
              Brand
            </p>
            <p className="hero-note" data-note="02" style={{ '--x': '560', '--y': '74' }}>
              <span className="hero-note-i">02</span>
              HMI
            </p>
            <p className="hero-note is-left" data-note="03" style={{ '--x': '888', '--y': '74' }}>
              <span className="hero-note-i">03</span>
              Research
            </p>
            <p className="hero-note" data-note="04" style={{ '--x': '1018', '--y': '74' }}>
              <span className="hero-note-i">04</span>
              Interface
            </p>
            <p className="hero-dim dim"><b>6+</b>&nbsp;years · <b>30+</b>&nbsp;products</p>
          </div>
        </figure>
      </div>
      <div className="hero-foot">
        <span className="hero-ruler ticks" aria-hidden="true" />{' '}
        <a className="hero-foot-scroll label" href="#work" data-cursor="Drive">
          Scroll to drive{' '}
          <span className="hero-foot-arrow" aria-hidden="true">↓</span>
        </a>{' '}
        <p className="hero-meta label">
          <i className="hero-led" aria-hidden="true" />
          Based in India — working globally
        </p>
        <p className="hero-foot-no label">N° 2026</p>
      </div>
    </section>
  );
}
