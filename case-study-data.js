/* ==================================================================
   NITESH — PORTFOLIO 2025
   Case study content. Keyed by the `p` query param used in
   case-study.html?p=<slug>. Consumed by case-study.js.
   ================================================================== */

window.CASE_STUDIES = {

  /* ================================================================ */
  suspension: {
    slug: 'suspension',
    title: 'Suspension Diagnostics',
    subtitle: 'Sensor based suspension diagnostic system on IVI',
    tagline: 'One clear decision, at the moment the driver can make it.',
    year: '2025',
    status: 'Concept · not yet tested with drivers',
    role: 'Product designer · self-initiated',
    timeline: '45-minute whiteboard, then two prototype iterations',
    team: 'Solo',
    platform: 'In-car · Center display, cluster and voice',
    scope: 'Problem framing · Severity model · Alert flow · IVI screens · Working prototype',
    tools: 'FigJam · coded web prototype',
    tags: ['HMI', 'Automotive', 'Diagnostics'],
    gradient: 'linear-gradient(135deg,#17e0c0,#04110f)',
    accent: '#2ef2d0',

    /* The real IVI screen as the cover. `hotspots` (x / y in % of the
       image) become sensor pings on the four wheels, with a hover label. */
    heroImage: {
      image: 'assets/suspension/cover.png',
      alt: 'The suspension diagnostics screen, parked: a wireframe 3D SUV with all four wheels highlighted, per-corner readouts for air pressure, spring life, damper life and temperature, a suspension health score of 97, a trip summary and the ride-height selector.',
      ratio: '1912 / 931',
      hotspots: [
        { x: 38.0, y: 54.0, label: 'Front left · 91% life left' },
        { x: 44.7, y: 51.1, label: 'Front right · 90% life left' },
        { x: 50.2, y: 60.1, label: 'Rear left · 94% life left' },
        { x: 57.5, y: 55.9, label: 'Rear right · 93% life left' },
      ],
    },

    /* Everything below follows the FigJam board "Whiteboard: Predictive
       Suspension Intelligence": the 45-minute whiteboard, then Iteration 1
       (25 Nov 2026) and Iteration 2 (26 Nov 2026). The page tells the story
       up to the problem statement, hands the working over to the board
       (`explore`), then picks up again at the screens. It's a concept, so
       the outcome is a simulation with its caveats plus a test plan. */
    wideScreens: true,
    order: ['overview', 'problem', 'explore', 'flow', 'testing', 'impact', 'whats-next', 'playground'],

    /* ---------------- The short version ---------------- */
    overview: `The problem statement asked for a predictive suspension health experience
      on a car’s center display. After 45 minutes at the whiteboard I had a different
      answer. A moving driver can’t read a screen of suspension data. They need to know
      if it’s serious and what to do, at a moment when they can act.`,

    overviewMore: [
      `So the center display stays quiet while the car moves. Most findings wait until
        the car is parked and arrive as a single card: what’s happening, what it means,
        what to do, and why the car thinks so. Only a critical fault interrupts a drive,
        through the instrument cluster, a chime and a voice.`,
      `I then built it as a working IVI prototype and reworked it twice. The first
        iteration turned the whiteboard into code, and seeing it run overturned one of my
        own rules. The second added line guidance on rough ground: the car shows which way
        to steer, how far and how soon, so the suspension takes fewer hits.`,
      `This is a concept. Nothing has shipped and no driver has used it yet, so the page
        ends with the plan to test it, starting with usability testing.`,
    ],

    /* ---------------- What’s broken today ----------------
       Context first, then the problem statement: who, what breaks, what it
       costs them, and the goal with its testable limit. */
    problem: {
      copy: `Today the car has one amber warning light and a fixed service schedule.
        Suspension wears out gradually, and faster on India’s speed breakers, potholes and
        monsoon roads, so drivers get used to it and stop noticing. When the light does
        come on, it says nothing about how serious things are. Some drivers panic. Others
        ignore it. For the carmaker, late catches mean more breakdowns and warranty claims.`,
      brief: {
        label: 'Problem statement',
        text: 'Owner-drivers can’t tell when suspension wear starts to matter, so they find out late: from a scrape, a breakdown or a bigger repair bill. How might the car’s center display give them warnings they trust, in time to act, without taking their eyes off the road for more than 2 seconds?',
      },
    },

    /* ---------------- Explore the journey yourself ----------------
       The working between the problem statement and the screens lives on
       the board. One row per zone, in the order the board reads, so nothing
       on it goes unmentioned. Previews are exports of the board itself. */
    explore: {
      source: 'FigJam board',
      title: 'Explore the journey yourself.',
      meta: ['45-minute whiteboard', '8 steps', '2 iterations'],
      cta: 'Open in FigJam',
      url: 'https://www.figma.com/board/v9LTQjbC1MvnnNToJBNvwJ/Whiteboard---suspension-diagnostics?node-id=0-1&t=jpWTXSg0PppW5Me7-1',
      note: 'Opens in a new tab',
      intro: 'The full working is on one board, read left to right in the order it happened. Here’s what you’ll find:',
      items: [
        { label: 'Clarify', text: 'Five assumptions, the reframe and the problem statement.' },
        { label: 'Users', text: 'Who it’s for, their pains, three moments and the job to be done.' },
        { label: 'Principles', text: 'Four rules, the 2-second limit and the severity model.' },
        { label: 'Flow', text: 'Three checks before any alert, then booking, snoozing and closing the loop.' },
        { label: 'Screens', text: 'Five lo-fi screens and the card pattern they share.' },
        { label: 'Edge cases', text: 'Five edge cases and two trade-offs, with what each costs.' },
        { label: 'Metrics', text: 'A north star, adoption, three guardrails and the business number.' },
        { label: 'Wrap-up', text: 'The recap, who I’d bring in, what I’d test and what’s open.' },
        { label: 'Iteration 1', text: 'What got built, four changes after review, decisions and open questions.' },
        { label: 'Iteration 2', text: 'Line guidance on rough ground, how it decides and what the simulation measured.' },
      ],
      views: [
        {
          label: 'Whole board',
          caption: 'The whole board, left to right: the whiteboard, then both iterations.',
          image: 'assets/suspension/board-overview.png',
          thumb: 'assets/suspension/board-overview-thumb.png',
          alt: 'The full FigJam board: the 45-minute whiteboard on the left, with Iteration 1 and Iteration 2 to its right.',
        },
        {
          label: 'Whiteboard',
          caption: 'The 45-minute whiteboard, in eight steps from Clarify to Wrap-up.',
          image: 'assets/suspension/board-whiteboard.png',
          thumb: 'assets/suspension/board-whiteboard-thumb.png',
          alt: 'The 45-minute whiteboard in eight zones, from Clarify and reframe to Wrap-up: sticky notes, a persona, a severity table, an alert flowchart and lo-fi screens.',
        },
        {
          label: 'Iteration 1',
          caption: 'Iteration 1: the whiteboard built into the prototype, then refined.',
          image: 'assets/suspension/board-iteration-1.png',
          thumb: 'assets/suspension/board-iteration-1-thumb.png',
          alt: 'Iteration 1 on the board: what was built, what changed after review, three prototype screenshots, decisions and open questions.',
        },
        {
          label: 'Iteration 2',
          caption: 'Iteration 2: line guidance on rough ground, with simulated results.',
          image: 'assets/suspension/board-iteration-2.png',
          thumb: 'assets/suspension/board-iteration-2-thumb.png',
          alt: 'Iteration 2 on the board: how line guidance works and decides, two prototype screenshots, simulated trail results, decisions and questions.',
        },
      ],
    },

    /* ---------------- The screens ---------------- */
    flowChapters: [
      {
        eyebrow: 'Whiteboard · minutes 24–32',
        title: 'Lo-fi, built around the parked card',
        intro: 'Most of the screen time went on the parked state, because that’s where the driver actually decides.',
        cols: 4,
        screens: [
          { code: 'W1', title: 'Parked card', desc: 'One decision in four parts: what’s happening, what it means, what to do, why we think so.', image: 'assets/suspension/lofi-parked-card.png', ratio: '16 / 9' },
          { code: 'W2', title: 'Vehicle Health detail', desc: 'Opened from “Why?”. Evidence for the curious, never the default.', image: 'assets/suspension/lofi-health-detail.png', ratio: '16 / 9' },
          { code: 'W3', title: 'Book service', desc: 'Pre-filled from the diagnosis, with an estimate and dealer slots. Finish on the phone if in a hurry.', image: 'assets/suspension/lofi-book-service.png', ratio: '16 / 9' },
          { code: 'W4', title: 'Close the loop', desc: 'Proves the alert was real, so the next one is trusted.', image: 'assets/suspension/lofi-close-loop.png', ratio: '16 / 9' },
        ],
      },
      {
        eyebrow: 'Iteration 1',
        title: 'The whiteboard, running',
        intro: `The severity model, the three checks and the parked card, built into the IVI
          prototype. 47 automated checks cover every severity, snoozing, escalation, the
          monthly cap, offline booking and both service outcomes. The panel on the right is
          the prototype’s dev control, used to switch scenarios.`,
        cols: 2,
        screens: [
          { code: 'P1', title: 'After a drive', desc: 'Every wheel’s readings, with a Plan card alongside: the front-left shock absorber is wearing faster than usual.', image: 'assets/suspension/parked-plan-card.png', ratio: '1272 / 716', full: true },
          { code: 'P2', title: 'Start screen', desc: 'Health is worked out whenever the car is parked, so every wheel’s state shows before the first drive.', image: 'assets/suspension/start-screen.png', ratio: '1272 / 716' },
          { code: 'P3', title: 'Driving with a critical leak', desc: 'The center display stays quiet. The cluster, chime and voice carry the alert, and the report log records it.', image: 'assets/suspension/critical-driving.png', ratio: '1272 / 716' },
        ],
      },
      {
        eyebrow: 'Iteration 2',
        title: 'Line guidance on rough ground',
        intro: `Five times a second, the car scores the scanned ground 22 m ahead for every
          line it could take, counting where all four wheels will roll. It asks for a move
          only when shifting at least 0.6 m cuts the suspension load by 55% or more. The
          countdown ends 0.8 s before the obstacle. If it’s too close to steer round, there’s
          no cue and the predictive pre-set takes the hit.`,
        cols: 2,
        screens: [
          { code: 'P4', title: 'The cue', desc: 'Steer right 1.7 m within 1.3 s to miss a 228 mm rock. The better line is painted on the scan in green.', image: 'assets/suspension/line-cue.png', ratio: '1940 / 1091' },
          { code: 'P5', title: 'On the best line', desc: 'Under a second later, the cue turns green and shows the load it saved, for about 2.5 seconds.', image: 'assets/suspension/line-on-best.png', ratio: '1940 / 1091' },
        ],
      },
    ],

    /* ---------------- What building it taught me ---------------- */
    testing: [
      { title: 'The data earned its place back', desc: 'The board said evidence is never the default. Running it, every wheel’s state was worth a glance, so per-wheel readings now show by default when parked, beside the decision card. The data came back, but only for the moment a driver can read it.' },
      { title: 'Point with the wheel, not the camera', desc: 'The camera used to turn the car toward an affected corner. Now each parked state has one fixed shot, framed so all four wheel cards fit, and a corner is pointed out by its own card and ring.' },
      { title: 'Removing the cluster preview left a gap', desc: 'I took the cluster mock-up off the center display; the car’s real cluster is still the channel while driving. The cost: a critical alert has no visual on this screen. The chime, voice, screen-reader alert and report log carry it.' },
      { title: 'Small screens need a priority', desc: 'At 1366 × 768 the four wheel cards don’t fit beside a decision card. The decision card wins, and the numbers move to All readings, one tap away.' },
      { title: 'Fewer, bigger moves', desc: 'Looser thresholds for line guidance gave the same benefit with 70% more cues. I chose fewer, bigger moves: at least 0.6 m and 55% less load. That still means about 17 cues a minute on very rough ground.' },
      { title: 'One exception to my own rule', desc: 'Line guidance shows on the center display while driving. I treat it as driving assistance, like a hazard callout, so the quiet-while-moving rule for health alerts doesn’t apply. It’s the riskiest call here, and the first thing to test.' },
    ],

    /* ---------------- Simulated, not real-world ----------------
       Rock strikes per 600 m stretch, cue vs holding the line:
       28 vs 89, 33 vs 77, 25 vs 105 → 86 vs 271 in total, 68% fewer
       (69%, 57% and 76% per stretch). Load figures are from the board. */
    impact: [
      { value: 68, suffix: '%', label: 'fewer rock strikes when following the cue than holding the line: 86 against 271 across three stretches' },
      { value: 66, suffix: '%', label: 'less suspension load past the comfortable height, between 53% and 73% per stretch' },
      { value: 17, label: 'cues a minute on very rough ground. That’s the cost, and the number usability testing has to check' },
    ],
    closing: `Measured in the prototype’s own simulation: its terrain, speed and steering,
      run headless over three 600 m stretches at 80% roughness, following the cue against
      holding the line. It shows the guidance logic works. Whether a driver can follow it
      safely is still untested.`,

    /* ---------------- What I’d do next ---------------- */
    nextSteps: [
      { title: 'Usability testing first', items: [
        'Parked card, with 10 owners: show it for five seconds, then ask what’s wrong, how serious it is and what they’d do. It passes if most can answer all three without help.',
        'Driving simulator, for the critical alert and the steering cue: eye-tracked glances under 2 seconds and tasks under 12. Run the same trail with and without cues.',
        'Line guidance at 17 cues a minute: do drivers follow, hesitate or tune it out? This decides whether the feature stays.',
        'Severity labels: can owners tell Plan from Caution unaided, and does “Plan · not urgent” calm them or get ignored?',
        'Service advisors: sit with them as they explain a report to a driver, including the false alarm where the dealer finds no fault.',
        'Then a small pilot on test cars, tracking issues fixed before they fail, false alarms, alerts per car and glance time, before anything scales.',
      ] },
      { title: 'Who I’d bring in', items: [
        'Vehicle dynamics engineers.',
        'Data science, to set the confidence bar that triggers an alert.',
        'Functional safety and legal, for the liability wording.',
        'The instrument-cluster HMI team.',
        'Dealer operations.',
      ] },
      { title: 'Still open', items: [
        'What confidence should trigger an alert? 70% is a placeholder.',
        'How do we say “Safe to drive” without liability risk? It lives in one constant, so legal can change it in one place.',
        'What should a booking really cost? The ₹ figures are placeholders.',
        'Should a critical alert show anything on the center display when audio is off?',
        'Should a new steering cue also play a sound?',
      ] },
    ],

    /* Closing card: invites the viewer to try the live prototype. */
    playground: {
      eyebrow: 'Try it live',
      title: 'Simulate it yourself.',
      intro: 'Reading about a suspension is one thing. Drive it on the highway, over rough ground or into floodwater, and see how the screen responds in the moment.',
      cta: 'Take me to playground',
      url: 'https://suspension-hud.vercel.app/',
      image: 'assets/suspension/cover.png',
      badge: 'Interactive prototype',
    },

    sections: {
      overview: {
        label: 'The short version',
        title: 'Drivers don’t want data. They want a decision.',
      },
      problem: {
        label: 'What’s broken today',
        title: 'Wear is gradual. The warning is all or nothing.',
      },
      flow: {
        label: 'The screens',
        title: 'From whiteboard sketch to a running prototype.',
        intro: 'Center display, landscape. Select any screen to open it full size.',
      },
      testing: {
        label: 'What building it taught me',
        title: 'Seeing it run overturned one of my own rules.',
        intro: 'No drivers yet. These came from reviewing the running prototype myself.',
      },
      impact: {
        label: 'What the simulation shows',
        title: 'Fewer hits on a simulated trail. Not yet tested on a real driver.',
      },
      'whats-next': {
        label: 'What I’d do next',
        title: 'Put it in front of drivers before building anything else.',
      },
    },

    next: 'offpeak', // 'hmi' once that case is reconnected
  },

  /* ================================================================ */
  offpeak: {
    slug: 'offpeak',
    title: 'Tariff Based EV Charging',
    subtitle: 'EV Tariff Input',
    tagline: 'A paper tariff, a phone, and not one uncovered minute.',
    year: '2023',
    status: 'Shipped',
    role: 'UI / UX Designer',
    platform: 'Mobile app · iOS & Android',
    scope: 'Research, Concepts, Interaction, Handover',
    team: 'Me, a product manager and engineers',
    tools: 'Figma',
    tags: ['UX Research', 'Data Viz'],
    gradient: 'linear-gradient(135deg,#35e0a8,#1a1a1a)',
    accent: '#35e0a8',
    // Frames stay as they are on the page; nothing opens full size.
    zoom: false,

    /* Told in the playbook's thirteen steps, each a short line and real
       work from the Figma file: title (1) is the tagline and metadata (3)
       the spec sheet in the cover, the lede (2) is the overview, and steps
       4–13 are `story`. Exports live in assets/offpeak as WebP: phone
       screens at 2x, boards at 1x. */

    /* ---------------- Cover ---------------- */
    heroScreens: [
      { code: 'F3', title: 'Period dates', image: 'assets/offpeak/hf-f3-period-dates.webp',
        alt: 'Step 1 of 4, periods: a year ribbon split into Off-peak and Peak, with the start dates editable and the end dates filled in automatically.' },
      { code: 'F1', title: 'Intro', image: 'assets/offpeak/hf-f1-intro.webp',
        alt: 'The intro screen: “Charge when electricity is cheapest”, a 24-hour price bar and the three questions the flow will ask.' },
      { code: 'F4', title: 'Days', image: 'assets/offpeak/hf-f4-days.webp',
        alt: 'Step 2 of 4, days: Monday to Thursday as weekdays and Friday to Sunday as weekends, one tap to move a day between groups.' },
    ],

    /* Around the screens, a day of smart charging plays out on the file's
       example tariff: cheap nights, a mid-price day, an evening peak. The
       car is out between `away` hours and gets home at `low` battery. */
    heroCharging: {
      slots: [
        { from: 0, to: 6, price: 24 },
        { from: 6, to: 18, price: 35 },
        { from: 18, to: 22, price: 40 },
        { from: 22, to: 24, price: 24 },
      ],
      away: [7, 18],
      low: 35,
    },

    /* ---------------- 2. Lede: the result first, then what and for whom ---------------- */
    overview: `200+ customers onboarded to tariff-based charging through the setup I
      designed. It gets a paper tariff into a smart wallbox, so the car charges
      when power is cheapest. About 18 values to type instead of 32, and no way
      to leave a minute out.`,

    /* ---------------- 4–13. The story, one step per section ---------------- */
    story: [
      /* 4. The problem: the moment, one number, what was wrong with the
         obvious design. The tariff is the file's example, with fifteen
         minutes left out, as a from/to form allows. */
      {
        id: 'hard',
        label: 'What makes it hard',
        title: 'It looks like a form. It’s a transcription job.',
        line: 'People copy up to sixteen prices off a paper contract, and from/to fields leave every gap for them to catch.',
        visual: {
          type: 'tariffGap',
          factors: [
            { value: '2', label: 'Periods a year' },
            { value: '2', label: 'Day groups in each' },
            { value: '4', label: 'Time slots a day' },
          ],
          total: { value: '16', label: 'Prices, at most' },
          caption: 'The obvious design · illustrative',
          slots: [
            { from: 0, to: 6, price: 24 },
            { from: 6, to: 18, price: 35 },
            { from: 18.25, to: 22, price: 40 },
            { from: 22, to: 24, price: 24 },
          ],
          gapLabel: 'No price',
        },
      },

      /* 5. The bar: the problem statement and its testable limits. */
      {
        id: 'bar',
        label: 'Problem statement',
        title: 'Zero gaps, saved on the first try.',
        line: 'How might we get the tariff saved right the first time, so the owner then knows when charging is cheapest?',
        visual: {
          type: 'stats',
          items: [
            { value: '0', label: 'Gaps or overlaps in the saved tariff' },
            { value: '1st', label: 'Try: the tariff is saved correctly' },
            { value: '22–06', label: 'Afterwards, the owner can name the cheapest hours. Example tariff.' },
          ],
        },
      },

      /* 6. Insight: the research boards, as they are in the file. */
      {
        id: 'insight',
        label: 'Research',
        title: 'Every level has to add up to a whole.',
        line: 'Periods fill the year, day groups fill the week, slots fill the day. Three boards of research sit behind that rule.',
        visual: {
          type: 'boards',
          label: 'Three research boards',
          items: [
            { code: '01', label: 'The brief, the data model and the key insight', image: 'assets/offpeak/board-brief.webp', size: [1440, 1648],
              alt: 'Research board 1: the job story, who it is for, what success looks like, the data model behind every tariff, the key insight, design principles and the edge cases found in two sample tariffs.' },
            { code: '02', label: 'Nine patterns for entering rule-bound data', image: 'assets/offpeak/board-input.webp', size: [1440, 1612],
              alt: 'Research board 2: how good products let people enter structured data on a phone, nine patterns from interview-style questions to direct manipulation with snapping.' },
            { code: '03', label: 'Nine ways to show sixteen prices on a phone', image: 'assets/offpeak/board-dataviz.webp', size: [1440, 1972],
              alt: 'Research board 3: showing 16 prices across 8,760 hours on a 390 px screen, nine chart patterns and a table of which chart does which job.' },
          ],
        },
      },

      /* 7. Explorations: three directions at the same step, scored, then
         the sketches they came from and the scorecard, on one tray. */
      {
        id: 'explorations',
        label: 'Explorations',
        title: 'Eight sketches. Three directions. One score.',
        line: 'Eight ideas in eight minutes. Three went to low-fi and were scored against the problem statement.',
        visuals: [
          {
            type: 'compare',
            label: 'The same step three ways: entering times and prices',
            items: [
              { tag: 'A', title: 'Form-based wizard', score: 2.85, image: 'assets/offpeak/dir-a-wizard.webp',
                alt: 'Direction A, low-fi: time slots typed as From, To and price fields, with a note that 18:00 to 22:00 is not covered yet.',
                verdict: 'About 32 values to type, and a gap only shows up as a warning.' },
              { tag: 'B', title: 'Tariff builder', score: 2.75, image: 'assets/offpeak/dir-b-builder.webp',
                alt: 'Direction B, low-fi: a section editor for Peak, Tuesday to Friday, with day chips and a list of time slots.',
                verdict: 'Mirrors the bill, but starts on a blank page with the same gap risk.' },
              { tag: 'C', title: 'Guided timeline', score: 4.25, chosen: true, image: 'assets/offpeak/dir-c-timeline.webp',
                alt: 'Direction C, low-fi: drag to set times on a 24-hour bar split into 24, 35 and 40 ct, with the slots listed below.',
                verdict: 'Gaps can’t happen, and about 18 values to type.' },
            ],
          },
          {
            type: 'boards',
            label: 'Where they came from, and how they were scored',
            items: [
              { code: '01', image: 'assets/offpeak/board-crazy8.webp', size: [1696, 445],
                alt: 'Crazy-8 sketches: form rows, a tariff tree, a 24-hour bar, a radial clock, paint the grid, a chat assistant, scan the bill and a provider picker.',
                caption: 'Crazy-8s. Three became directions A, B and C, three were discarded and two were parked for v2.' },
              { code: '02', image: 'assets/offpeak/board-scorecard.webp', size: [2010, 1065],
                alt: 'The scorecard: seven criteria with weights, scores for the wizard, the builder and the timeline, and weighted totals of 2.85, 2.75 and 4.25.',
                caption: 'The scorecard: seven criteria, weighted. Error prevention counts most, because every minute must be covered.' },
            ],
          },
        ],
      },

      /* 8. The turning point: the reframe, drawn on the file's example
         tariff (F3's dates, F4's groups), with a day to try. */
      {
        id: 'turn',
        label: 'The turning point',
        title: 'A whole you split, never a list you fill in.',
        line: 'The UI only ever lets people split a whole, so a gap can’t happen. Try it: drag a split on the day.',
        visual: {
          type: 'tariffSplit',
          rows: [
            {
              kind: 'year',
              label: 'Year',
              note: 'Two start dates. Every day belongs to a period.',
              periods: [
                { name: 'Off-peak', days: 59 },
                { name: 'Peak', days: 245, part: 2, start: '1 Mar' },
                { name: 'Off-peak', days: 61, start: '1 Nov' },
              ],
            },
            {
              kind: 'week',
              label: 'Week',
              note: 'Two groups. Every day sits in one.',
              days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              groups: [1, 1, 1, 1, 2, 2, 2],
            },
            {
              kind: 'day',
              label: 'Day',
              note: 'Up to four slots. Drag a split: the day stays whole.',
              live: true,
              slots: [
                { from: 0, to: 6, price: 24 },
                { from: 6, to: 18, price: 35 },
                { from: 18, to: 22, price: 40 },
                { from: 22, to: 24, price: 24 },
              ],
            },
          ],
        },
      },

      /* 9. Details, part one: the editor's one gesture, step by step,
         from the Design Decisions page. */
      {
        id: 'editor',
        label: 'Details',
        title: 'One gesture splits the day and prices it.',
        line: 'Drag sideways to split, drag up or down to set the price. No add buttons, no forms.',
        visual: {
          type: 'strip',
          label: 'The drag editor, step by step',
          screens: [
            { title: 'Start with one line', desc: 'The day starts whole: one slot, 00:00 to 24:00.', image: 'assets/offpeak/drag-01.webp',
              alt: 'Editor step 1: the day as one line from 00:00 to 24:00, with a hint to press and drag sideways to split it.' },
            { title: 'Split the day', desc: 'Drag sideways on the line to cut it in two.', image: 'assets/offpeak/drag-02.webp',
              alt: 'Editor step 2: a split dragged to 06:00, making two slots, 00:00 to 06:00 and 06:00 to 24:00.' },
            { title: 'Add more splits', desc: 'Four parts now, still exactly 24 hours.', image: 'assets/offpeak/drag-03.webp',
              alt: 'Editor step 3: splits at 06:00, 18:00 and 22:00, with a hint to drag each part up or down to set its price.' },
            { title: 'Drag up to set a price', desc: 'Height is price. The list below reads it out.', image: 'assets/offpeak/drag-04.webp',
              alt: 'Editor step 4: the first part dragged up to 24 ct/kWh, the slot list updating below.' },
            { title: 'Linked across midnight', desc: 'The night slot runs 22:00 to 06:00 as one.', image: 'assets/offpeak/drag-05.webp',
              alt: 'Editor step 5: the slots before 06:00 and after 22:00 linked across midnight at 24 ct.' },
            { title: 'All prices set', desc: '24 hours covered, and the screen says so.', image: 'assets/offpeak/drag-06.webp',
              alt: 'Editor step 6: every part priced at 24, 35 and 40 ct, with a “24 hours covered” confirmation.' },
            { title: 'Fine-tune by dragging', desc: 'Move a split and both neighbors follow.', image: 'assets/offpeak/drag-07.webp',
              alt: 'Editor step 7: a split dragged from 18:00 to 17:00, the times on both sides updating.' },
            { title: 'Drag a split off to remove it', desc: 'Drop it below the bar to delete it.', image: 'assets/offpeak/drag-08.webp',
              alt: 'Editor step 8: a split dragged down into a “Drop to remove” zone.' },
            { title: 'Limit reached', desc: 'Four slots a day, flagged before anything breaks.', image: 'assets/offpeak/drag-09.webp',
              alt: 'Editor step 9: a “Max 4 slots per day” label when a fifth split is attempted.' },
          ],
        },
      },

      /* 9. Details, part two: the shipped flow, the map first. */
      {
        id: 'final-flow',
        label: 'The final flow',
        title: 'From a paper bill to a plugged-in car.',
        line: 'Thirteen hi-fi screens in three parts. The map first, then every step.',
        visuals: [
          {
            type: 'chapters',
            label: 'The map, then 13 shipped screens',
            chapters: [
              {
                eyebrow: 'The map',
                title: 'One loop per period and day group',
                line: 'Then review, save and sync.',
                sheets: [
                  { image: 'assets/offpeak/board-userflow.webp', size: [2504, 1560],
                    alt: 'The final user flow: entry, intro, period and day questions, a loop of times and prices per day group and per period, then review, sync and the tariff overview.' },
                ],
              },
              {
                eyebrow: 'Part 1 · Set the frame',
                title: 'Questions in the bill’s own words',
                line: 'Every answer takes work off the next step.',
                screens: [
                  { code: '01', title: 'Intro', desc: 'Three questions up front, and the bill to hand.', image: 'assets/offpeak/hf-f1-intro.webp',
                    alt: 'Intro: “Charge when electricity is cheapest”, the three questions the flow will ask, and a Start button.' },
                  { code: '02', title: 'Period choice', desc: 'One answer decides one period or two.', image: 'assets/offpeak/hf-f2-period-choice.webp',
                    alt: 'Does your price change during the year? A choice between the same price all year and two periods.' },
                  { code: '03', title: 'Period dates', desc: 'Two start dates. The end dates fill themselves in.', image: 'assets/offpeak/hf-f3-period-dates.webp',
                    alt: 'When does each period start? A year ribbon with Off-peak from 1 November and Peak from 1 March, end dates filled in.' },
                  { code: '04', title: 'Start-date picker', desc: 'Day and month on a wheel. No typing.', image: 'assets/offpeak/hf-f3a-date-picker.webp',
                    alt: 'A wheel picker for the Off-peak start date, noting that the period then ends on 28 or 29 February automatically.' },
                  { code: '05', title: 'Days', desc: 'Tap the days that have their own prices.', image: 'assets/offpeak/hf-f4-days.webp',
                    alt: 'Do prices differ between weekdays? Day chips with Friday to Sunday set as weekends.' },
                ],
              },
              {
                eyebrow: 'Part 2 · Split the day',
                title: 'Split, price, then copy across',
                line: 'The editor does the hard part once. Copying does the rest.',
                screens: [
                  { code: '06', title: 'Times & prices', desc: 'Split and priced, with 24 hours covered.', image: 'assets/offpeak/hf-f5-times-prices.webp',
                    alt: 'Set times and prices for Off-peak weekends: a bar split into 24, 35 and 40 ct, “24 hours covered”, and the three slots.' },
                  { code: '07', title: 'Checkpoint', desc: 'One group done. Copy its times or start fresh.', image: 'assets/offpeak/hf-f8-checkpoint.webp',
                    alt: 'Checkpoint: Off-peak weekends complete, with exact prices per slot, and a choice to copy the times or use one price all day.' },
                  { code: '08', title: 'Copied times', desc: 'The times come across. Only prices to add.', image: 'assets/offpeak/hf-f7-copied-times.webp',
                    alt: 'Set times and prices for weekdays: times copied from Friday to Sunday, prices still to add.' },
                  { code: '09', title: 'Slot sheet', desc: 'Tap instead of drag: from, to and price in a sheet.', image: 'assets/offpeak/hf-f7-copied-times-2.webp',
                    alt: 'A bottom sheet to add a time and price: from 22:00, to 06:00, price per kWh with a ct or € switch.' },
                ],
              },
              {
                eyebrow: 'Part 3 · Review, save, sync',
                title: 'See what the car will do',
                line: 'Check the tariff, save it, and get tonight’s plan.',
                screens: [
                  { code: '10', title: 'Review', desc: 'Cheapest prices first, then every slot by number.', image: 'assets/offpeak/hf-f9-review.webp', ratio: '390 / 1013',
                    alt: 'Check your tariff: the cheapest prices for weekends and weekdays, then each day group with its slots and price-hours bar.' },
                  { code: '11', title: 'Saved', desc: 'The cheapest window for every season and day group.', image: 'assets/offpeak/hf-f10-saved.webp',
                    alt: 'Tariff saved: when charging is cheapest in Off-peak and Peak, for weekends and weekdays, and a prompt to sync the wallbox.' },
                  { code: '12', title: 'Syncing', desc: 'A few seconds while the wallbox picks it up.', image: 'assets/offpeak/hf-c0-syncing.webp',
                    alt: 'Syncing your tariff to the wallbox, which usually takes a few seconds.' },
                  { code: '13', title: 'All set', desc: 'Tonight’s charging window and price, up front.', image: 'assets/offpeak/hf-c1-all-set.webp', ratio: '390 / 977',
                    alt: 'You’re all set: tonight’s charging window from 22:00 to 06:00 at 27 ct/kWh, and the charging schedule by season.' },
                ],
              },
            ],
          },
        ],
      },

      /* 9. Details, part three: what can still go wrong. */
      {
        id: 'edge-states',
        label: 'Edge states',
        title: 'What can still go wrong, and how it’s caught.',
        line: 'Partitions rule out gaps. Everything else gets a calm, specific answer.',
        visual: {
          type: 'chapters',
          label: 'Six states, while entering and after saving',
          chapters: [
            {
              eyebrow: 'While entering',
              title: 'Caught on the slot, not in an error list',
              screens: [
                { code: 'S1', title: 'Missing price', desc: 'The one error left by design, flagged on the slot itself.', image: 'assets/offpeak/edge-s1-missing-price.webp',
                  alt: 'A slot from 18:00 to 22:00 without a price, flagged on the bar and the row, with “Add a price for 18:00 – 22:00 to continue”.' },
                { code: 'S2', title: 'Unit check', desc: '24 €/kWh? A one-tap fix to 24 ct, not a blocking error.', image: 'assets/offpeak/edge-s2-unit-check.webp',
                  alt: 'A price of 24 entered in euros, with “24 €/kWh is unusually high. Did you mean 24 ct/kWh?” and buttons for each.' },
                { code: 'S4', title: 'Flat tariff', desc: 'One price all year, and honest that charging starts at plug-in.', image: 'assets/offpeak/edge-s4-flat.webp',
                  alt: 'What do you pay per kWh? One price for every hour, with a note that charging starts as soon as the car is plugged in.' },
              ],
            },
            {
              eyebrow: 'After saving',
              title: 'Clear about what the wallbox has',
              screens: [
                { code: 'E1', title: 'Replace tariff', desc: 'The current tariff stays active until the new one syncs.', image: 'assets/offpeak/edge-replace.webp',
                  alt: 'Replace your tariff? The current tariff stays active on the wallbox until a new one is saved and synced.' },
                { code: 'E2', title: 'Sync pending', desc: 'Nothing is lost: saved in the app, retried automatically.', image: 'assets/offpeak/edge-sync-pending.webp',
                  alt: 'Tariff saved, not on your wallbox yet: saved in the app and retried automatically, with things worth checking.' },
                { code: 'E3', title: 'Car not plugged in', desc: 'Synced, and clear that charging starts when the car does.', image: 'assets/offpeak/edge-not-plugged.webp',
                  alt: 'You’re all set, waiting for your car: charging starts when you plug in, at 21 ct/kWh today.' },
              ],
            },
          ],
        },
      },

      /* 10. What we cut: the discarded ideas, each with the reason. What
         changed after review sits in Outcomes, inside the evidence for its
         figures. */
      {
        id: 'cut',
        label: 'What we cut',
        title: 'Every discarded idea left something behind.',
        line: 'The radial clock and the paint grid lost early. After review, the heatmaps went too.',
        visuals: [
          {
            type: 'boards',
            label: 'Discarded, each with the reason',
            items: [
              { code: '01', image: 'assets/offpeak/board-discarded.webp', size: [1696, 392],
                alt: 'Discarded: the radial 24-hour clock and paint the grid, each with why I tried it, why it lost and what it left in the final design.',
                caption: 'Two tempting ideas I threw away. The clock’s midnight insight and the grid’s heatmap both stayed.' },
              { code: '02', image: 'assets/offpeak/board-dropped.webp', size: [1696, 297],
                alt: 'Other ideas dropped along the way: a chat assistant, one tab per weekday, a vertical timeline, typed period dates, and scan-the-bill parked for v2.',
                caption: 'Other ideas dropped along the way, each with the reason.' },
            ],
          },
        ],
      },

      /* 11. Outcomes: the figures (historical, from the author; 60% and 90%
         exactly as the review note in the Figma file words them), the
         review behind those two, credit shared, and the system it was
         handed over as. */
      {
        id: 'outcomes',
        label: 'Outcomes',
        title: '200+ customers onboarded. No minute goes without a price.',
        line: 'Built and shipped with a product manager and engineers. These are historical figures, not live data.',
        visuals: [
          {
            type: 'stats',
            items: [
              { value: 200, suffix: '+', label: 'Customers onboarded to the feature' },
              { value: 60, suffix: '%', label: 'Increase in user satisfaction' },
              { value: 90, suffix: '%', label: 'Reduction in task complexity' },
            ],
          },
          /* The review in the Figma file (Design Decisions → "Review
             updated"): its own three screens, and the note quoted word for
             word where it gives the figures. */
          {
            type: 'evidence',
            label: 'The evidence: the review in the Figma file',
            beforeLabel: 'Mid-fi',
            afterLabel: 'Shipped',
            before: [
              { code: '09', title: 'Chart', desc: 'Heat maps didn’t add much value. The exact price wasn’t shown properly.',
                image: 'assets/offpeak/was-review-chart.webp', ratio: '788 / 1705',
                alt: 'Mid-fi review, chart view: the cheapest price called out, a week-by-hour heatmap with a five-step color key, and each day group’s prices on one line.' },
              { code: '10', title: 'Table', desc: 'Very easy to perceive, but no way to edit the price.',
                image: 'assets/offpeak/review-10-table.webp', ratio: '788 / 1705',
                alt: 'Mid-fi review, table view: each period’s day groups with their time slots and exact prices, 24 to 42 ct/kWh, and no way to edit a price.' },
            ],
            after: { code: 'F9', title: 'Hybrid', desc: 'Clear numbers on every slot, colors as a visual cue, a toggle for the seasons.',
              image: 'assets/offpeak/review-f9-hybrid.webp', ratio: '780 / 1918',
              alt: 'Shipped review: an Off-peak and Peak toggle, the cheapest prices first, then each day group’s time slots with exact prices, an edit button and a colored 24-hour price bar.' },
            quote: 'Showing exact price against each slot increased the user satisfaction by <b>60%</b> and reduced the task complexity by <b>90%</b>.',
            cite: 'Review note · Design Decisions page',
            href: 'https://www.figma.com/design/YXv8WqRuNMctzHyAyVofZ7/EV-tariff?node-id=351-712',
            /* Changed in the same round of review, each pair captioned with
               its own note from the file (Design Decisions → "Chekpoint
               update" and "Successfull sync"). */
            pairs: {
              label: 'Changed after review',
              beforeLabel: 'Mid-fi',
              afterLabel: 'Shipped',
              items: [
                { title: 'The checkpoint lost its heatmap',
                  why: 'Heat maps didn’t show any value; the price became very vague. Showing exact value against the slot in a tabular format, on the other hand, was very easy to perceive.',
                  before: { image: 'assets/offpeak/was-checkpoint.webp', alt: 'Mid-fi checkpoint: a heatmap of the finished period.' },
                  after: { image: 'assets/offpeak/hf-f8-checkpoint.webp', alt: 'Shipped checkpoint: the finished group’s slots with exact prices.' } },
                { title: '“All set” got specific',
                  why: 'A synced wallbox screen was not so informative. The earlier effort seemed useless without an acknowledgment of what exactly was fed to the system.',
                  before: { image: 'assets/offpeak/was-all-set.webp', alt: 'Mid-fi “You’re all set” screen with a short confirmation.' },
                  after: { image: 'assets/offpeak/hf-c1-all-set.webp', alt: 'Shipped “You’re all set” screen with tonight’s charging window and price.' } },
              ],
            },
          },
          {
            type: 'boards',
            label: 'Handed over as a system: 14 color variables, 12 text styles, 17 product components',
            items: [
              { code: 'A', label: 'Color variables', image: 'assets/offpeak/board-colours.webp', size: [2680, 1264],
                alt: 'Design system: 14 color variables, from the core teal and the price colors to the critical red.' },
              { code: 'B', label: 'Product components', image: 'assets/offpeak/board-components.webp', size: [2680, 1381],
                alt: 'Design system: the product components, including buttons, card buttons, day toggles, price inputs and price slot rows.' },
            ],
          },
        ],
      },

      /* 12. After launch: what's still open, labeled as notes. */
      {
        id: 'after-launch',
        label: 'After launch',
        title: 'Next, nobody types a tariff at all.',
        line: 'Still open: sketches 7 and 8. Scan the bill or pick the provider’s plan, then check it on the same review screen.',
        visual: {
          type: 'routes',
          from: ['Scan the bill', 'Pick the provider’s plan'],
          to: 'Same review screen, nothing typed',
          tag: 'Parked for v2: both need data partnerships.',
        },
      },

      /* 13. Reflection. */
      {
        id: 'reflection',
        label: 'Reflection',
        quote: 'The best error message is the one the design never has to show.',
      },
    ],

    figma: {
      eyebrow: 'Go deeper',
      title: 'The thinking lives in the Figma file.',
      intro: `This page is the short version. The file holds all of it: the research,
        the sketches, three directions, every final screen and the hand-off.`,
      cta: 'Explore Figma file',
      url: 'https://www.figma.com/design/YXv8WqRuNMctzHyAyVofZ7/EV-tariff?node-id=313-4504&t=HfaH4HLDPM01v90e-1',
      reasons: [
        { title: 'Read the research', desc: 'The brief and data model, nine input patterns and nine ways to chart sixteen prices.' },
        { title: 'Follow the decisions', desc: 'Crazy-8s, three low-fi directions, the scorecard and what changed after review.' },
        { title: 'Walk the whole flow', desc: 'Every hi-fi screen, the drag editor step by step, and the edge states.' },
        { title: 'Check the hand-off', desc: 'The design system and the annotated dev hand-off.' },
      ],
    },

    sections: {
      overview: {
        label: 'The short version',
        title: 'Every minute of the year needs a price.',
      },
      'figma-file': { label: 'The Figma file' },
    },
    next: 'codeflow',
  },

  /* ================================================================ */
  codeflow: {
    slug: 'codeflow',
    title: 'Codeflow',
    subtitle: 'Daily Coding Challenge',
    tagline: 'Make coding a daily habit.',
    year: '2026',
    status: 'Design assignment, submitted',
    role: 'Lead Product Designer',
    timeline: 'Feb 2026',
    platform: 'Desktop',
    scope: 'Research · User flow · UI foundations · Success, error and edge states',
    team: 'Solo',
    tools: 'Figma',
    tags: ['UX Research', 'Gamification', 'Web'],
    gradient: 'linear-gradient(135deg,#ff7a3d,#1a1a1a)',
    accent: '#ff7a3d',
    // Frames stay small on the page; nothing opens full size.
    zoom: false,

    /* Told in the playbook's thirteen steps, as Tariff is: title (1) is
       the tagline and metadata (3) the spec sheet in the cover, the lede
       (2) is the overview, and steps 4–13 are `story`. Every figure, quote
       and caption is the Figma file's own (For Edwisely: Cover, Context,
       Research, Foundations, Components, Design); the studies it cites are
       linked. Only 14 of the file's 22 screens are on the page: 960 px
       WebP exports in assets/codeflow, shown 16:10 from the top. */
    wideScreens: true,

    /* ---------------- Cover ---------------- */
    heroImage: {
      image: 'assets/codeflow/cover.png',
      alt: 'Codeflow cover: “Make coding a daily habit.” beside the daily challenge card, weekly streak and class leaderboard.',
      ratio: '16 / 9',
    },

    /* ---------------- 2. Lede: the goal and its number first ---------------- */
    overview: `A daily coding challenge for Edwisely’s student portal, designed to get
      every new student to a 7-day streak: learners who reach one are 3.6× more
      likely to finish their course (Duolingo). One challenge picked for each
      student, a streak that forgives a bad day, and leaderboards the whole class
      can win. A solo design assignment.`,

    /* ---------------- 4–13. The story, one step per section ---------------- */
    story: [
      /* 4. The problem: the moment, and why it happens (Context → "01 ·
         What we’re solving"). */
      {
        id: 'bursts',
        label: 'The problem',
        title: 'Students practice in bursts, then disappear.',
        line: 'Most practice only in the weeks before exams and placement drives. Between those bursts, nothing gives them a reason to come back tomorrow.',
        visual: {
          type: 'panels',
          label: 'Why it happens today',
          numbered: true,
          cols: 5,
          items: [
            { title: 'No clear next step', desc: 'An open problem bank asks students to choose. Choosing is friction, and many leave without solving anything.' },
            { title: 'The wrong difficulty', desc: 'Generic problems are too hard for beginners, who quit, and too easy for strong students, who get bored.' },
            { title: 'No reason to return tomorrow', desc: 'Nothing records consistency, so skipping a day costs nothing and a routine never takes hold.' },
            { title: 'Competition that excludes', desc: 'A single ranking motivates the top few and tells everyone else they are losing (<a href="https://games.jmir.org/2021/2/e14746" target="_blank" rel="noopener">JMIR Serious Games, 2021</a>).' },
            { title: 'One slip ends everything', desc: 'When a streak breaks with blame, “it’s broken anyway” turns a missed day into quitting (<a href="https://doi.org/10.1093/jcr/ucac029" target="_blank" rel="noopener">Silverman &amp; Barasch, JCR 2023</a>).' },
          ],
        },
      },

      /* 5. The bar: the problem statement and what it is held to. 3.6× is
         Duolingo's, cited as the file cites it. */
      {
        id: 'bar',
        label: 'Problem statement',
        title: 'Get every new student to Day 7.',
        line: 'How might we turn coding practice into a daily habit for every student, whatever their level, and keep them going when they slip, without making those who fall behind feel left out?',
        visual: {
          type: 'stats',
          items: [
            { value: 3.6, decimals: 1, suffix: '×', label: 'Likelier to finish a course after a 7-day streak (<a href="https://blog.duolingo.com/how-duolingo-streak-builds-habit/" target="_blank" rel="noopener">Duolingo</a>)' },
            { value: 1, label: 'Tap from Home to the editor' },
            { value: '~15', label: 'Minutes: a day’s challenge, doable on a busy day' },
          ],
        },
      },

      /* 6. Research: the file's desk research (The Streak Playbook), told
         through its recovery ladder with what Codeflow did on each rung,
         then the proto-personas built from it. */
      {
        id: 'research',
        label: 'Research',
        title: 'A missed day doesn’t break the habit. Blame does.',
        line: 'One miss has no measurable effect on forming a habit (<a href="https://doi.org/10.1002/ejsp.674" target="_blank" rel="noopener">Lally et al., UCL</a>). How the product frames it decides whether people quit.',
        visuals: [
          {
            type: 'ladder',
            label: 'The recovery ladder from the research, and what Codeflow did with each rung',
            stages: [
              { when: 'Before', options: [
                { title: 'Streak freeze', desc: 'Insurance bought ahead, used automatically on a missed day.', status: 'kept',
                  verdict: 'Earned, not bought: one every 7 streak days, hold up to 2.' },
              ] },
              { when: 'Planned', options: [
                { title: 'Pause or weekend pass', desc: 'Protects known time off: trips, weekends.', status: 'skip' },
              ] },
              { when: 'Loyalty', options: [
                { title: 'Earned protection', desc: 'Duolingo: 3 free freezes at a 100-day streak.', status: 'kept',
                  verdict: 'Freezes unlock at 7 days, not 100.' },
              ] },
              { when: 'Just after', options: [
                { title: 'Earn it back', desc: 'Extra work in a time window. Effort keeps the streak meaningful.', status: 'kept',
                  verdict: 'A two-challenge repair quest within 31 hours, once every 30 days.' },
                { title: 'Paid restore', desc: 'Snapchat+: 1 free restore a month, more at a fee.', status: 'cut',
                  verdict: 'A college portal has no wallet.' },
              ] },
              { when: 'Long after', options: [
                { title: 'Revival campaign', desc: 'Duolingo 2026: 30+ day streaks back after 3 lessons.', status: 'later',
                  verdict: 'Needs a notification budget first.' },
              ] },
              { when: 'Our fault', options: [
                { title: 'Auto repair', desc: 'An outage? Fix the affected streaks silently.', status: 'kept',
                  verdict: 'Outages never break a streak.' },
              ] },
            ],
          },
          {
            type: 'personas',
            label: 'Three proto-personas, built from the same research',
            note: 'Personas and quotes are illustrative composites built from the desk research, not interview data, to be validated with student interviews.',
            items: [
              {
                name: 'The placement-chaser',
                who: '3rd–4th year · high motivation',
                quote: 'I practice hard for a few weeks before every drive, then life takes over. I want to know where I stand.',
                gives: ['Picks from their weakest topic, medium–hard', 'Department & college boards, leagues of 30', '~15-minute challenge, one tap to start'],
              },
              {
                name: 'The foundation-builder',
                who: '1st–2nd year · still learning basics',
                quote: 'Most problems feel impossible, and seeing my name near the bottom makes me not want to open the app.',
                gives: ['Calibrated warm-up on Day 1, then easy-to-medium', 'Hints that never break a streak', 'Window boards, Most improved, section race'],
              },
              {
                name: 'The slipping streaker',
                who: 'Any year · just missed a day',
                quote: 'I had 13 days and lost it to one bad day. Honestly, what’s the point of starting again?',
                gives: ['Auto freezes, earned every 7 days', 'Repair quest (earn it back) once a month', 'Best streak kept forever, one-tap restart'],
              },
            ],
          },
        ],
      },

      /* 7. Roads not taken: two from the brief's own first plan (Context →
         "3. Solution"), one from the research's ladder, each with the
         finding or constraint that beat it. */
      {
        id: 'not-taken',
        label: 'Roads not taken',
        title: 'Three tempting ideas, and why each lost.',
        line: 'Two came from the brief’s own first plan, one from the research. A finding or a constraint beat each of them.',
        visual: {
          type: 'roads',
          items: [
            { source: 'The brief',
              considered: 'A leaderboard toggle that lets students switch between full Class, Department and College rankings.',
              instead: 'A full ranking for the class only. Department and college show a window around you plus a percentile, with leagues of 30.',
              why: 'A single ranking motivates the top few and tells everyone else they are losing (<a href="https://games.jmir.org/2021/2/e14746" target="_blank" rel="noopener">JMIR Serious Games, 2021</a>). The brief itself asked for department and college boards that feel winnable, not discouraging.' },
            { source: 'The research',
              considered: 'Paid restore, as on Snapchat+: one free restore a month, more at a fee.',
              instead: 'An earn-back repair quest once every 30 days, and streak freezes earned every 7 streak days.',
              why: 'A college portal has no wallet, so nothing on the recovery ladder can be bought. Earning a streak back keeps it worth something.' },
            { source: 'The brief',
              considered: 'Push notifications to trigger the daily habit loop.',
              instead: 'The cue lives on Home: a dashed flame until today is solved. Plus one reminder a day at most, at a time the student picks.',
              why: 'The notification budget wasn’t agreed, so nothing in v1 depends on a push arriving. Revival messages wait for v2.' },
          ],
        },
      },

      /* 8. The turning point: the file's reframe ("So the feature has two
         jobs"), then its problem → solution map (Context → "03 · How the
         solution solves it"). */
      {
        id: 'turn',
        label: 'The turning point',
        title: 'Pull them back daily. Catch them when they fall.',
        line: 'So the feature has two jobs. Every root cause gets a designed answer, and a reason it works.',
        visual: {
          type: 'table',
          label: 'Problem → solution map',
          head: ['Root cause', 'What I designed', 'Why it works'],
          rows: [
            ['1 · No clear next step', 'One challenge pinned as the Home hero, the only dark surface on the page. Last language remembered; a single “Start in Python” button.', 'Removes the choice entirely. Visual priority makes it the first thing every session sees, on desktop and mobile.'],
            ['2 · The wrong difficulty', 'Picked from the student’s weakest active topic, with a visible “Picked for you” reason. Day 1 is an Easy warm-up that calibrates level.', 'Hard enough to grow, easy enough to finish. Showing the reason makes personalization feel fair rather than random.'],
            ['3 · No reason to return', 'Streaks with one glanceable state (dashed → lit), milestones at 3·7·14·30·100, a reminder at a chosen time and a “Commit to 7 days” goal at setup.', 'Loss aversion and explicit commitment. Learners who reach a 7-day streak are 3.6× more likely to complete their course (<a href="https://blog.duolingo.com/how-duolingo-streak-builds-habit/" target="_blank" rel="noopener">Duolingo</a>).'],
            ['4 · Competition that excludes', 'Full ranking only for the class. Department and college show a window around you plus a percentile; leagues of 30; weekly reset; Most improved; section race.', 'Everyone has a race they can win. Relative leaderboards outperform absolute ones for motivation (<a href="https://doi.org/10.1111/jcal.13077" target="_blank" rel="noopener">Li et al., 2024 review</a>).'],
            ['5 · One slip ends everything', 'Automatic freezes, an earn-back repair quest once a month, best streak kept forever, blame-free copy. Outages never break a streak.', 'A way to repair shrinks the drop-off after a miss; self-blame grows it (<a href="https://doi.org/10.1093/jcr/ucac029" target="_blank" rel="noopener">Silverman &amp; Barasch, 2023</a>). Earning it back keeps streaks meaningful.'],
            ['6 · Failing feels like punishment', 'Runs are free; hints never break a streak; a wrong answer offers Try again with “your streak is safe until midnight”; syntax errors don’t count.', 'Keeps students inside the task instead of abandoning it, at the moment a habit is most at risk mid-session.'],
          ],
        },
      },

      /* 9. Details, part one: a day in the loop for a returning student on
         Day 13 (Design → "Flow - Existing Students"), five of its seven
         screens. */
      {
        id: 'loop',
        label: 'The daily loop',
        title: 'One challenge, one tap, one lit flame.',
        line: 'A day for a returning student on Day 13: the cue, the action, the reward and the investment.',
        visual: {
          type: 'strip',
          label: 'A day in the loop, step by step',
          screens: [
            { title: 'Home: cue and action', desc: 'One dark card asks for a decision. The flame stays dashed until today is solved.', image: 'assets/codeflow/ex-home.webp',
              alt: 'Codeflow home: the daily challenge hero, streak card, weekly leaderboard, quests and topic strengths.' },
            { title: 'Stuck? A hint', desc: 'Hints cost 5 XP each. The streak counts with or without them.', image: 'assets/codeflow/ex-workspace-2.webp',
              alt: 'The workspace’s hints tab, offering hint 1 for 5 XP, with a note that the streak still counts.' },
            { title: 'Solved: the reward', desc: '“Day 13. Still burning.” XP itemized, the rank move named.', image: 'assets/codeflow/ex-leaderboard-2.webp',
              alt: 'A celebration over the leaderboard: Day 13, still burning, with the XP breakdown and new rank.' },
            { title: 'Leaderboard', desc: 'A distance, not a verdict: “Top 3 is 30 XP away”.', image: 'assets/codeflow/ex-leaderboard-1.webp',
              alt: 'The leaderboard with class, department, college and league scopes, opening on the class.' },
            { title: 'Streak: the investment', desc: 'A freeze-covered day reads as protected. The best streak is kept forever.', image: 'assets/codeflow/ex-streak.webp',
              alt: 'The streak page with the current streak, a monthly calendar, milestones and streak freezes.' },
          ],
        },
      },

      /* 9. Details, part two: Day 1 (Design → "Flow - Day 1"), three of
         its five screens, captioned from the file's labels. */
      {
        id: 'day-one',
        label: 'Day 1',
        title: 'Day 1 is a warm-up and a promise.',
        line: 'Three choices in 30 seconds, an Easy first challenge, and a bigger first reward.',
        visual: {
          type: 'frames',
          label: 'A new student’s first day',
          screens: [
            { code: 'D1', title: 'Habit setup', desc: 'Language, a reminder slot and a short first goal: “Commit to 7 days”.', image: 'assets/codeflow/d1-1-setup.webp',
              alt: 'Habit setup: language, a reminder time and a first goal of 3, 7 or 14 days, with “Commit to 7 days”.' },
            { code: 'D2', title: 'Home, Day 0', desc: 'Every module has an honest empty state. The first challenge is an Easy warm-up.', image: 'assets/codeflow/d1-2-home.webp',
              alt: 'The home screen on day zero, with honest empty states and an Easy first challenge.' },
            { code: 'D4', title: 'First solve', desc: 'A bigger first reward, and the board introduced gently: “You joined at #29”.', image: 'assets/codeflow/d1-4-solve.webp',
              alt: 'The first-solve reward: +40 XP with a first-challenge bonus, and joining the class board at #29.' },
          ],
        },
      },

      /* 9. Details, part three: six of the file's states (Design →
         "States · Workspace" and "States · Technical errors & failures"). */
      {
        id: 'bad-days',
        label: 'When a day goes wrong',
        title: 'Every bad day has a way back.',
        line: 'A missed day, a wrong answer, an outage. None of them blames the student.',
        visual: {
          type: 'chapters',
          label: 'Six of the file’s states',
          chapters: [
            {
              eyebrow: 'The day after a miss',
              title: 'Paused, not gone',
              screens: [
                { code: 'A7', title: 'Streak paused', desc: 'No freeze left: a repair quest in 31 hours brings all 13 days back.', image: 'assets/codeflow/ex-streak-missed.webp',
                  alt: 'An overlay on the home screen: “Yesterday slipped by. It happens.” with a repair quest.' },
                { code: 'T4', title: 'Streak ended', desc: 'No blame. The 21-day best and all XP are kept, with a new first goal.', image: 'assets/codeflow/err-4-streak-ended.webp',
                  alt: 'The streak-ended screen: the best streak and XP kept, and a new first goal.' },
              ],
            },
            {
              eyebrow: 'Mid-challenge',
              title: 'Try again, the streak is safe',
              screens: [
                { code: 'S4', title: 'Wrong answer', desc: 'The streak is safe until midnight; only the first-try bonus is lost.', image: 'assets/codeflow/st-4-wrong.webp',
                  alt: 'A wrong-answer result showing 9 of 15 cases and the first failing hidden case.' },
                { code: 'S5', title: 'Syntax error', desc: 'A parsed error with a line jump. Typos never count as an attempt.', image: 'assets/codeflow/st-5-compile.webp',
                  alt: 'A parsed compile error with a line number and a go-to-line action.' },
              ],
            },
            {
              eyebrow: 'Our fault, not theirs',
              title: 'Saved, queued, protected',
              screens: [
                { code: 'T1', title: 'Offline', desc: 'Code saved, submit queued, and today still counts after midnight.', image: 'assets/codeflow/err-1-offline.webp',
                  alt: 'An offline warning bar with the code saved and the submit queued.' },
                { code: 'T2', title: 'Runner down', desc: '“This isn’t your code.” Attempts don’t count, and the streak is protected.', image: 'assets/codeflow/err-2-runner.webp',
                  alt: 'The code runner unavailable, retrying with a countdown.' },
              ],
            },
          ],
        },
      },

      /* 10. The cost of the chosen option: hints (Design → Workspace and
         the reward screens; Context → "How we’ll know"). */
      {
        id: 'trade-off',
        label: 'The trade-off',
        title: 'Hints cost XP, never the streak.',
        line: 'A stuck student pays a little rank to stay in the task instead of leaving it. Hint use is a guardrail, and the hint’s price is an A/B test.',
        visual: {
          type: 'stats',
          items: [
            { value: '−5', suffix: ' XP', label: 'For each hint revealed' },
            { value: 0, label: 'Streak days a hint can cost' },
            { value: '+10', suffix: ' XP', label: 'No-hint bonus on a medium daily' },
          ],
        },
      },

      /* 11. Outcomes, for an assignment that wasn't built: how success
         would be measured (Context → "How we’ll know"), and the system it
         was handed over as (Foundations, Components). */
      {
        id: 'how-we-know',
        label: 'How we’ll know',
        title: 'Success is a new student reaching Day 7.',
        line: 'A design assignment, submitted and not built, so these are the measures I’d hold it to, not results.',
        visuals: [
          {
            type: 'panels',
            items: [
              { label: 'North-star metric', title: 'Share of new students who reach a 7-day streak', desc: 'The moment habit retention flattens, and so our onboarding goal.' },
              { label: 'Supporting', title: 'Day 7 and Day 30 retention · Daily solve rate (DAU) · Challenge completion', desc: 'A/B: a 7- vs 14-day first goal, hint cost, class list vs window.' },
              { label: 'Guardrails', title: 'Churn among bottom-half ranks · Hint usage · Median time on challenge', desc: 'Leaderboards must not push weaker students out; speed must not replace learning.' },
            ],
          },
          {
            type: 'boards',
            label: 'Built on a system: 67 color tokens over 46 primitives, 20 text styles, 25 icons, 17 components',
            items: [
              { code: 'A', label: 'Color tokens', image: 'assets/codeflow/fnd-color.webp', size: [3040, 3098],
                alt: 'Color tokens: backgrounds, text, borders and icons, each a semantic token over a primitive.' },
              { code: 'B', label: 'Typography', image: 'assets/codeflow/fnd-typography.webp', size: [1800, 2332],
                alt: 'Type styles from Display down to Code.' },
              { code: 'C', label: 'Challenge card', image: 'assets/codeflow/cmp-challenge-card.webp', size: [4000, 2032],
                alt: 'The challenge card component in desktop and mobile sizes, with default, done and error states.' },
            ],
          },
        ],
      },

      /* 12. What's next: the validation plan, the assumptions and what v1
         leaves open. */
      {
        id: 'next',
        label: 'What’s next',
        title: 'Test the day after a miss first.',
        line: 'Nothing is built yet, so a moderated test comes before anything else. Then the questions v1 leaves open.',
        visual: {
          type: 'panels',
          items: [
            { title: 'Validate', items: [
              'Moderated test with 8–10 students across all four years, on their own machines, mid-semester rather than in a quiet week.',
              'Measure time to first keystroke, completion rate, and D1 / D7 return. The numbers that matter are the ones about coming back.',
              'Simulate a broken streak and watch what people do with it. That’s the screen the whole feature rests on.',
            ] },
            { title: 'Assumptions', items: [
              'Difficulty is served from recent accuracy and language history. The matching logic was out of scope; the design only makes its reasoning visible.',
              'A streak day is a calendar day in college local time, and it closes at midnight.',
              'Notifications exist, but their budget wasn’t agreed, so nothing in v1 depends on a push arriving.',
            ] },
            { title: 'Open questions & v2', items: [
              'Do shared or class streaks beat individual ones here? Social duty is the strongest lever in the research, and v1 doesn’t use it.',
              'Where does the streak sit next to assessments? Today the daily loop and the academic track don’t know about each other.',
              'Revival, once there’s a notification budget: what does a message to a student who left 30 days ago say, and does it earn the interruption?',
            ] },
          ],
        },
      },

      /* 13. Reflection. */
      {
        id: 'reflection',
        label: 'Reflection',
        quote: 'A streak is only as strong as the day after it breaks.',
      },
    ],

    figma: {
      eyebrow: 'Go deeper',
      title: 'The thinking lives in the Figma file.',
      intro: `This page is the short version. The file holds all of it: the brief,
        the research, every screen and state, and the ideas I parked.`,
      cta: 'Explore Figma file',
      url: 'https://www.figma.com/design/O0BFKhT0SUl7z2WqEcU8cU/For-Edwisely?node-id=2069-1361&t=b8BEudMS0KdeEyZ7-1',
      reasons: [
        { title: 'Read the research', desc: 'The Streak Playbook: why people come back, the fragile moment and the recovery ladder.' },
        { title: 'Follow the decisions', desc: 'The brief, the problem → solution map and how success would be measured.' },
        { title: 'Walk every screen', desc: 'Twelve flow screens and ten states, at full size.' },
        { title: 'Visit the dump yard', desc: 'A mobile web version, explored and parked.' },
      ],
    },

    sections: {
      overview: {
        label: 'The short version',
        title: 'One challenge a day, and a way back after a bad one.',
      },
      'figma-file': { label: 'The Figma file' },
    },

    next: 'suspension', // 'homingly' once that case is reconnected
  },

  /* ================================================================ */
  /* A bespoke page (case-search.html) rather than this template: the
     entry keeps the study's place in its series (the publications —
     see CASE_SERIES below), and `href` sends every link to it there. */
  search: {
    slug: 'search',
    kind: 'publication',
    published: 'Oct 2026',
    href: 'case-search.html',
    title: 'The First Query',
    subtitle: 'In-app search research',
    tagline: 'Most people search once. This is how to make that once count.',
    year: '2026',
    tags: ['UX Research', 'Documentation'],
    gradient: 'linear-gradient(135deg,#ffb070,#1a1a1a)',
    accent: '#ffb070',
    next: 'stepper',
  },

  /* ================================================================ */
  /* Also bespoke (case-stepper.html): a page that charges as it is
     read, built like the stepper it recommends. */
  stepper: {
    slug: 'stepper',
    kind: 'publication',
    published: 'Aug 2026',
    href: 'case-stepper.html',
    title: 'Built to Finish',
    subtitle: 'Stepper UX research',
    tagline: 'People don’t finish the indicator. They finish the steps.',
    year: '2026',
    tags: ['UX Research', 'Design Systems', 'Accessibility'],
    gradient: 'linear-gradient(135deg,#8fb4ff,#1a1a1a)',
    accent: '#8fb4ff',
    next: 'search',
  },
  /* Homingly, disconnected for now (case-homingly.* is kept):
  homingly: {
    slug: 'homingly',
    href: 'case-homingly.html',
    title: 'Homingly',
    subtitle: 'Home interiors app',
    tagline: 'Pricing is the first wall. The estimate is the door.',
    year: '2021',
    tags: ['Product Design', 'Mobile', 'Design Systems'],
    gradient: 'linear-gradient(135deg,#d4b27c,#1a1a1a)',
    accent: '#d4b27c',
    next: 'suspension',
  },
  */

  /* ================================================================ */
  /* HMI (Cockpit experience), disconnected for now: the entry is kept
     as line comments and its exports stay in assets/hmi/. To restore,
     uncomment it (select the lines, Ctrl+/), point suspension's `next`
     back at 'hmi' and bring back its bay (see the note in index.html). */
  // hmi: {
  //   slug: 'hmi',
  //   title: 'HMI',
  //   subtitle: 'Cockpit experience',
  //   tagline: 'Four surfaces, one cockpit.',
  //   year: '2024',
  //   platform: 'In-car · Škoda',
  //   scope: 'Virtual Cockpit, AR Head-Up Display, 13" infotainment, Laura voice assistant',
  //   tags: ['HMI', 'Automotive', 'Voice'],
  //   gradient: 'linear-gradient(135deg,#4ba82e,#1a1a1a)',
  //   accent: '#4ba82e',
  //   wideScreens: true,
  //
  //   /* 2x export of the Cover page of the Figma file (assets/hmi/). */
  //   heroImage: {
  //     image: 'assets/hmi/cover.png',
  //     alt: 'Cockpit Experience cover: Škoda in-car experience across Virtual Cockpit, AR Head-Up Display, 13" infotainment and Laura voice, with the four parts of the Figma file.',
  //     ratio: '16 / 9',
  //   },
  //
  //   overview: `A unified in-car HMI concept for Škoda. It treats four surfaces as one
  //     system rather than four separate products: the Virtual Cockpit behind the
  //     wheel, an AR Head-Up Display on the windshield, the 13" infotainment screen
  //     and Laura, Škoda’s voice assistant.`,
  //
  //   problem: {
  //     copy: `Inside a car, every surface competes for the same pair of eyes. The
  //       cluster, the windshield, the center screen and the voice assistant are
  //       usually designed as separate products, each with its own logic. The driver
  //       is left to reconcile them, at speed, while the road is the thing that needs
  //       their attention.`,
  //   },
  //
  //   approach: [
  //     { title: 'One system, four surfaces', desc: 'The cluster, the HUD, the central screen and Laura share one logic, so what the driver learns on one surface holds on the rest.' },
  //     { title: 'Each surface has a job', desc: 'What sits in front of the driver, what sits in the line of sight and what sits to the side are decided by the moment of driving, not by what each screen can show.' },
  //     { title: 'Voice as a surface', desc: 'Laura is designed as part of the cockpit rather than a feature added on top, so a request can start on one surface and finish on another.' },
  //   ],
  //
  //   flow: [
  //     { title: 'Virtual Cockpit', desc: 'The instrument cluster behind the wheel: the surface a driver reads most often, and the one that sets the visual language for the rest.',
  //       image: 'assets/hmi/ic-parked.png', ratio: '8 / 3',
  //       alt: 'Virtual Cockpit, parked and ready: a Good afternoon greeting, READY in large type with the prompt to press brake and select D, and the battery, range and gear selector on the right.' },
  //     { title: 'AR Head-Up Display', desc: 'Information placed on the windshield, in the line of sight, so the driver does not have to look away from the road to get it.',
  //       image: 'assets/hmi/hud-driving.png', ratio: '3 / 1',
  //       alt: 'AR Head-Up Display while driving: speed at 48 km/h on the left, a right-turn arrow with 300 m in the center and the adaptive cruise control telltale on the right.' },
  //     { title: '13" infotainment screen', desc: 'The central IVI: navigation, media and vehicle functions, designed as the place for everything that does not need to be glanced at while driving.',
  //       image: 'assets/hmi/ivi-parked.png', ratio: '16 / 9',
  //       alt: '13-inch infotainment screen, parked: a media player, eight shortcut tiles for navigation, phone, climate, seats, charging, vehicle, apps and settings, an energy card and a persistent climate bar.' },
  //     { title: 'Laura', desc: 'Škoda’s voice assistant, so the driver can ask for something without taking a hand off the wheel or an eye off the road.',
  //       image: 'assets/hmi/laura-parked.png', ratio: '16 / 9', inset: true,
  //       alt: 'Laura voice prompt: “Hi Petr — home, or the office?”' },
  //   ],
  //
  //   nextSteps: [
  //     { title: 'Validate', items: [
  //       'Test the four surfaces together in a driving simulator, not one screen at a time. The concept only works if the handoffs between them do.',
  //       'Measure glance time away from the road, time on task and how often drivers fall back to touch when voice would have done.',
  //       'Test with drivers who already use a Škoda, to see what the new logic breaks from habit.',
  //     ] },
  //     { title: 'Assumptions', items: [
  //       'Each surface keeps the job it was given: the cluster for reading, the HUD for the line of sight, the central screen for everything else.',
  //       'Laura is available for the tasks that would otherwise pull a hand or an eye off the driving.',
  //       'This is a concept. Hardware limits of the cluster, the HUD and the 13" display have not been tested against it.',
  //     ] },
  //     { title: 'Open questions & v2', items: [
  //       'How much should the HUD carry before it competes with the road? Where that line sits needs real-road testing.',
  //       'How far should a request travel between surfaces? Starting on Laura and finishing on the central screen is the case to prove first.',
  //       'What changes for the passenger, who has the same screen but not the same constraints?',
  //     ] },
  //   ],
  //
  //   figma: {
  //     eyebrow: 'Go deeper',
  //     title: 'The thinking lives in the Figma file.',
  //     intro: `This page is the short version. The file holds the full working: every
  //       decision, the ideas I parked, and the handoff a developer would build from.`,
  //     cta: 'Explore Figma file',
  //     url: 'https://www.figma.com/design/vAQjMwK3312ErtmDLKloSU/In-car---Experience-for-skoda?node-id=0-1&t=uS3d6tgBq9BEgt5s-1',
  //     reasons: [
  //       { title: 'See the approach', desc: 'A clearer picture of how it was done, what was built, and why.' },
  //       { title: 'Follow the decisions', desc: 'Explore how each call was made, and what it was weighed against.' },
  //       { title: 'Visit the dump yard', desc: 'Everything I explored but parked, kept in one place rather than deleted.' },
  //       { title: 'Check the handoff', desc: 'How the file is organized and how the dev-handoff is maintained.' },
  //     ],
  //   },
  //
  //   sections: {
  //     'whats-next': {
  //       label: 'What I would do next',
  //       title: 'What I’d test next, and what’s still open',
  //     },
  //     'figma-file': {
  //       label: 'Explore the file',
  //     },
  //   },
  //
  //   next: 'offpeak',
  // },

};

/* ==================================================================
   SERIES — the site keeps two: the cases in the showroom and the
   publications in the library (entries with kind: 'publication').
   Each page numbers itself within its own series, walking the `next`
   chain from that series' first entry.
     const S = CASE_SERIES('stepper');
     S.sequence        // ['search', 'stepper']
     S.no('stepper')   // "Writing 02 / 02"
     S.noun('offpeak') // "case"
   ================================================================== */
window.CASE_SERIES = function (slug) {
  const store = window.CASE_STUDIES || {};
  const kindOf = (s) => (store[s] && store[s].kind) || 'case';
  const pad = (n) => String(n).padStart(2, '0');
  const cache = {};
  function series(kind) {
    if (cache[kind]) return cache[kind];
    const keys = Object.keys(store).filter((s) => kindOf(s) === kind);
    const seq = [];
    for (let s = keys[0]; s && store[s] && kindOf(s) === kind && !seq.includes(s); s = store[s].next) seq.push(s);
    keys.forEach((s) => { if (!seq.includes(s)) seq.push(s); });
    cache[kind] = seq;
    return seq;
  }
  const noun = (s) => (kindOf(s) === 'publication' ? 'publication' : 'case');
  const no = (s) => {
    const seq = series(kindOf(s));
    const word = noun(s) === 'publication' ? 'Writing' : 'Case';
    return `${word} ${pad(seq.indexOf(s) + 1)} / ${pad(seq.length)}`;
  };
  return { sequence: series(kindOf(slug)), no, noun, kind: kindOf(slug) };
};
