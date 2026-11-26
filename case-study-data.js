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

    next: 'hmi',
  },

  /* ================================================================ */
  offpeak: {
    slug: 'offpeak',
    title: 'Tariff Based EV Charging',
    subtitle: 'EV Tariff Input',
    tagline: 'A paper tariff, a phone, and not one uncovered minute.',
    year: '2023',
    role: 'UI / UX Designer',
    platform: 'Mobile app · iOS & Android',
    scope: 'Research, Concepts, Interaction, Handover',
    tools: 'Figma',
    tags: ['UX Research', 'Data Viz'],
    gradient: 'linear-gradient(135deg,#35e0a8,#1a1a1a)',
    accent: '#35e0a8',

    /* The project is under NDA, so the page stays short: cover,
       introduction, problem statement, a ticker of screens, then an
       invitation to talk it through on a call. */

    /* ---------------- 1. Cover ---------------- */
    heroScreens: [
      { code: 'F3', title: 'Two start dates split the year', image: 'assets/offpeak/f3.png',
        alt: 'Step 1 of 4, periods: a year ribbon split into Off-peak and Peak, with the start dates editable and the end dates filled in automatically.' },
      { code: 'F1', title: 'Intro', image: 'assets/offpeak/f1.png',
        alt: 'The intro screen: “Charge when electricity is cheapest”, a 24-hour price bar, the three questions the flow will ask, and a Start button.' },
      { code: 'F4', title: 'Days as two groups', image: 'assets/offpeak/f4.png',
        alt: 'Step 2 of 4, days: Monday to Thursday in group 1 and Friday to Sunday in group 2, one tap to move a day between groups.' },
    ],

    /* Around the screens, a day of smart charging plays out on the tariff
       from F1's bar: cheap nights, a mid-price day, an evening peak. The
       car is out between `away` hours and gets home at `low` battery. */
    heroCharging: {
      slots: [
        { from: 0, to: 6, price: 24 },
        { from: 6, to: 18, price: 31 },
        { from: 18, to: 22, price: 41 },
        { from: 22, to: 24, price: 24 },
      ],
      away: [7, 18],
      low: 35,
    },

    /* ---------------- 2. Introduction ---------------- */
    overview: `EV owners save real money by charging when electricity is cheap, but
      only if the app knows their tariff. I designed the flow that gets a
      time-of-use tariff off a paper contract and into a smart wallbox: up to
      sixteen prices that, between them, have to cover every minute of the year.`,

    /* ---------------- 3. Problem statement ---------------- */
    problem: {
      copy: `On paper it looks like a form. In practice it's a transcription job.
        People sit with the contract open on a laptop, phone in hand, copying
        numbers written in provider language. A tariff can have two periods a
        year, two groups of weekdays in each, and up to four time slots a day.
        Leave fifteen minutes out anywhere and the wallbox has no price for them.
        The obvious design, a stack of from/to fields, hands all of that checking
        to the user.`,
      quote: `When I plug in at home, I want the wallbox to charge at the cheapest
        times, so I save money without planning anything.`,
      attribution: 'The job story behind the brief',
      context: [
        { title: 'Who', desc: 'EV owners with a wallbox and mixed tech confidence. They do this once, then again whenever the contract changes.' },
        { title: 'What good looks like', desc: 'The tariff is saved correctly on the first try, with zero coverage errors, and afterwards the user can tell you when charging is cheapest.' },
      ],
    },

    /* ---------------- 4. A few screens, as a ticker ---------------- */
    ticker: {
      screens: [
        { code: 'F1', title: 'Intro', image: 'assets/offpeak/f1.png',
          alt: 'The intro screen: “Charge when electricity is cheapest”, a 24-hour price bar, the three questions the flow will ask, and a Start button.' },
        { code: 'F2', title: 'Does your price change during the year?', image: 'assets/offpeak/f2.png',
          alt: 'Step 1 of 4, periods: a yes/no choice between one set of prices all year and two periods, Peak and Off-peak.' },
        { code: 'F3', title: 'Two start dates split the year', image: 'assets/offpeak/f3.png',
          alt: 'Step 1 of 4, periods: a year ribbon split into Off-peak and Peak, with the start dates editable and the end dates filled in automatically.' },
        { code: 'F4', title: 'Days as two groups', image: 'assets/offpeak/f4.png',
          alt: 'Step 2 of 4, days: Monday to Thursday in group 1 and Friday to Sunday in group 2, one tap to move a day between groups.' },
      ],
    },

    /* ---------------- 5. Under NDA ---------------- */
    nda: {
      eyebrow: 'Under NDA',
      title: 'The rest of this one is best told in person.',
      intro: `This project is under NDA, so the page stops at the brief and a few
        screens. I’d love to walk you through the full process on a call.`,
      cta: 'Let’s set up a call',
      url: 'mailto:sayhi@niteshdixit.in?subject=Tariff%20Based%20EV%20Charging%20case%20study',
      points: [
        { title: 'The framing', desc: 'How the problem was broken down, and the idea that shaped every screen.' },
        { title: 'The directions', desc: 'The concepts I explored, and how I chose between them.' },
        { title: 'The full flow', desc: 'Every screen end to end, including the edge cases and how each one is handled.' },
        { title: 'The handover', desc: 'The custom components, their states and how they were specced for build.' },
      ],
    },

    sections: {
      overview: { label: 'Introduction' },
      problem: { label: 'Problem Statement' },
      screens: {
        label: 'Screens',
        title: 'A few screens from the flow',
        intro: 'Select any screen to open it at full resolution.',
      },
      nda: { label: 'The Full Story' },
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
    role: 'Lead Product Designer',
    timeline: 'Feb 2026',
    platform: 'Desktop',
    scope: 'UX Research · User Flow · UI Foundations · Intuitive UI with Success & Edge cases',
    tools: 'Figma',
    tags: ['UX Research', 'Gamification', 'Web'],
    gradient: 'linear-gradient(135deg,#ff7a3d,#1a1a1a)',
    accent: '#ff7a3d',

    /* Everything below mirrors the pages of the Figma file, in order:
       Cover, Context, Research, Foundations, Components, Design. Screens
       are 2x exports from Figma (assets/codeflow/), shown 16:10 unless a
       `ratio` says otherwise; `full` lets a tall screen span both columns. */
    wideScreens: true,
    order: ['overview', 'problem', 'personas', 'solution', 'research', 'foundation', 'system', 'flow', 'whats-next', 'figma-file'],

    heroImage: {
      image: 'assets/codeflow/cover.png',
      alt: 'Codeflow cover: “Make coding a daily habit.” beside the daily challenge card, weekly streak and class leaderboard.',
      ratio: '16 / 9',
    },

    overview: `Codeflow is a daily coding challenge for Edwisely’s student portal, a design
      assignment. A personalised challenge sits on every student’s homepage, with
      streaks that pull them back daily and leaderboards that motivate the whole
      class, not just the top five.`,

    /* ---------------- Context · 01 · What we’re solving ---------------- */
    problem: {
      copy: `Coding skill compounds through small, regular practice. But most students
        only practise in the weeks before exams and placement drives. Between those
        bursts, nothing on the platform gives them a reason to come back tomorrow,
        so the habit never forms.`,
      quote: `How might we turn coding practice into a daily habit for every student,
        whatever their level, and keep them going when they slip, without making
        those who fall behind feel left out?`,
      attribution: 'Problem statement',
      brief: {
        label: 'The brief',
        text: `Computer science students need a way to build a consistent, daily coding
          habit because generic practice platforms often lack personalization and
          social motivation, leading to high drop-off rates. Our design must create a
          personalized, low-friction entry point that leverages social competition and
          streaks to keep students engaged throughout their academic journey.`,
      },
      contextLabel: 'Why it happens today',
      contextCols: 3,
      contextNumbered: true,
      context: [
        { title: 'No clear next step', desc: 'An open problem bank asks students to choose. Choosing is friction, and many leave without solving anything.' },
        { title: 'The wrong difficulty', desc: 'Generic problems are too hard for beginners, who quit, and too easy for strong students, who get bored.' },
        { title: 'No reason to return tomorrow', desc: 'Nothing records consistency, so skipping a day costs nothing and a routine never takes hold.' },
        { title: 'Competition that excludes', desc: 'A single ranking motivates the top few and tells everyone else they are losing (JMIR Serious Games, 2021).' },
        { title: 'One slip ends everything', desc: 'When a streak breaks with blame, “it’s broken anyway” turns a missed day into quitting (Silverman & Barasch, JCR 2023).' },
      ],
      jobsLabel: 'So the feature has two jobs',
      jobs: ['Pull them back daily', 'Catch them when they fall'],
    },

    /* ---------------- Context · 02 · Who we’re solving for ---------------- */
    personas: {
      items: [
        {
          name: 'The placement-chaser',
          who: '3rd–4th year · high motivation',
          quote: 'I practise hard for a few weeks before every drive, then life takes over. I want to know where I stand.',
          needs: ['A challenge that actually stretches them', 'An honest sense of rank', 'A daily unit that fits a busy day'],
          gives: ['Picks from their weakest topic, medium–hard', 'Department & college boards, leagues of 30', '~15-minute challenge, one tap to start'],
        },
        {
          name: 'The foundation-builder',
          who: '1st–2nd year · still learning basics',
          quote: 'Most problems feel impossible, and seeing my name near the bottom makes me not want to open the app.',
          needs: ['Problems they can actually finish', 'Small, frequent wins', 'Comparison that feels safe'],
          gives: ['Calibrated warm-up on Day 1, then easy-to-medium', 'Hints that never break a streak', 'Window boards, Most improved, section race'],
        },
        {
          name: 'The slipping streaker',
          who: 'Any year · just missed a day',
          quote: 'I had 13 days and lost it to one bad day. Honestly, what’s the point of starting again?',
          needs: ['Forgiveness without streaks losing meaning', 'No blame', 'The smallest way back'],
          gives: ['Auto freezes, earned every 7 days', 'Repair quest (earn it back) once a month', 'Best streak kept forever, one-tap restart'],
        },
      ],
    },

    /* ---------------- Context · 03 · How the solution solves it ---------------- */
    solution: {
      loopLabel: 'The habit loop · cue, action, reward, investment',
      loop: [
        { title: 'Cue', desc: 'One reminder at the time the student picked, and a dashed flame on Home that says “today isn’t done yet”.' },
        { title: 'Action', desc: 'One ~15-minute challenge as the Home hero, picked for their level. Their language is remembered, so it’s one tap to start.' },
        { title: 'Reward', desc: 'XP, a lit flame and a rank move, all on one screen. Big celebrations are saved for milestones so they stay special.' },
        { title: 'Investment', desc: 'The streak itself, milestones at 3·7·14·30·100, weekly quests and a shared class goal. All of them are reasons to protect tomorrow.' },
      ],
      map: {
        title: 'Problem → solution map',
        head: ['Root cause', 'What we designed', 'Why it works'],
        rows: [
          ['1 · No clear next step', 'One challenge pinned as the Home hero, the only dark surface on the page. Last language remembered; a single “Start challenge” button.', 'Removes the choice entirely. Visual priority makes it the first thing every session sees, on desktop and mobile.'],
          ['2 · The wrong difficulty', 'Picked from the student’s weakest active topic, with a visible “Picked for you” reason. Day 1 is an Easy warm-up that calibrates level.', 'Hard enough to grow, easy enough to finish. Showing the reason makes personalisation feel fair rather than random.'],
          ['3 · No reason to return', 'Streaks with one glanceable state (dashed → lit), milestones at 3·7·14·30·100, a reminder at a chosen time and a “Commit to 7 days” goal at setup.', 'Loss aversion and explicit commitment. Learners who reach a 7-day streak are 3.6× more likely to complete their course (Duolingo).'],
          ['4 · Competition that excludes', 'Full ranking only for the class. Department and college show a window around you plus a percentile; leagues of 30; weekly reset; Most improved; section race.', 'Everyone has a race they can win. Relative leaderboards outperform absolute ones for motivation (Li et al., 2024 review).'],
          ['5 · One slip ends everything', 'Automatic freezes, an earn-back repair quest once a month, best streak kept forever, blame-free copy. Outages never break a streak.', 'A way to repair shrinks the drop-off after a miss; self-blame grows it (Silverman & Barasch, 2023). Earning it back keeps streaks meaningful.'],
          ['6 · Failing feels like punishment', 'Runs are free; hints never break a streak; a wrong answer offers Try again with “your streak is safe until midnight”; syntax errors don’t count.', 'Keeps students inside the task instead of abandoning it, at the moment a habit is most at risk mid-session.'],
        ],
      },
      measuresTitle: 'How we’ll know',
      measures: [
        { label: 'North-star metric', title: 'Share of new students who reach a 7-day streak', desc: 'The moment habit retention flattens and so our onboarding goal.' },
        { label: 'Supporting', title: 'Day 7 and Day 30 retention · Daily solve rate (DAU) · Challenge completion', desc: 'A/B: 7- vs 14-day first goal, hint cost, class list vs window.' },
        { label: 'Guardrails', title: 'Churn among bottom half ranks · hint usage · median time on challenge', desc: 'Leaderboards must not push weaker students out; speed must not replace learning.' },
      ],
    },

    /* ---------------- Research · Streak based motivation ---------------- */
    research: {
      board: {
        image: 'assets/codeflow/research-playbook.png',
        alt: 'The Streak Playbook: research on a page. It covers why people come back, the fragile moment and the recovery ladder.',
        label: 'The Streak Playbook: research on a page',
        ratio: '3200 / 2554',
      },
      sources: 'Sources: Silverman & Barasch, Journal of Consumer Research (2023) · Lally et al., UCL (2009) · Polivy & Herman · Duolingo blog & product team · Snapchat Support & Newsroom',
    },

    /* ---------------- Foundations ---------------- */
    foundation: {
      components: [
        { title: 'Color tokens',
          desc: 'Backgrounds, text, borders and icons, each a semantic token that aliases a primitive: bg/canvas → sand/100, bg/flame → flame/500, text/brand → indigo/800. Flame = streak & primary action. Indigo = XP, rank and “you”. Ice = freeze protection.',
          board: { image: 'assets/codeflow/fnd-color.png', alt: 'Colour tokens: backgrounds, text, borders and icons.', label: 'Color tokens', ratio: '3040 / 3098' } },
        { title: 'Typography',
          desc: 'Bricolage Grotesque for display and stats, IBM Plex Sans for headings, body, labels and captions, and JetBrains Mono for code. Seventeen styles, from Display/Stat at 52 down to Caption and Overline at 12.',
          board: { image: 'assets/codeflow/fnd-typography.png', alt: 'Type styles from Display/XL to Code/S.', label: 'Typography', ratio: '1800 / 2332' } },
        { title: 'Spacing & radius',
          desc: 'Spacing runs 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64. Radius runs 6 · 10 · 14 · 20 · 24, plus full for pills and dots.',
          board: { image: 'assets/codeflow/fnd-spacing.png', alt: 'Spacing and radius scales.', label: 'Spacing & radius', ratio: '1280 / 2008' } },
        { title: 'Icons',
          desc: 'A 25-icon set on a 24 px grid: flame, zap, clock, snowflake, arrows, check, sparkle, lightbulb, code and the error and offline states.',
          board: { image: 'assets/codeflow/fnd-icons.png', alt: 'The Codeflow icon set.', label: 'Icons', ratio: '2000 / 304' } },
      ],
    },

    /* ---------------- Components (a few) ---------------- */
    system: {
      components: [
        { title: 'Challenge card',
          desc: 'The home hero. Desktop and mobile sizes, with Default, Done and Error states for the desktop card.',
          board: { image: 'assets/codeflow/cmp-challenge-card.png', alt: 'Challenge card in desktop and mobile sizes, with default, done and error states.', label: 'Challenge card', ratio: '4000 / 2032' } },
        { title: 'Button',
          desc: 'Primary, Dark, Secondary and Ghost styles, each in Large and Medium.',
          board: { image: 'assets/codeflow/cmp-button.png', alt: 'Button styles and sizes.', label: 'Button', ratio: '1440 / 752' } },
        { title: 'Day dot',
          desc: 'The streak’s day marker: Solved, Freeze, Today and Upcoming, in Large and Small.',
          board: { image: 'assets/codeflow/cmp-day-dot.png', alt: 'Day dot states.', label: 'Day dot', ratio: '968 / 248' } },
        { title: 'Leaderboard row',
          desc: 'Default and You rows, each in Compact and Full density.',
          board: { image: 'assets/codeflow/cmp-leaderboard-row.png', alt: 'Leaderboard row variants.', label: 'Leaderboard row', ratio: '1648 / 616' } },
        { title: 'Info banner',
          desc: 'Seven tones: Freeze, Hint, Personalised, Neutral, Success, Error and Warning.',
          board: { image: 'assets/codeflow/cmp-info-banner.png', alt: 'Info banner tones.', label: 'Info banner', ratio: '928 / 918' } },
      ],
      more: {
        title: 'There are more on the Figma file',
        text: 'This is only a selection. The file also holds the chip, streak and XP pills, progress bar, nav item, language toggle, segment, scope tab, choice, calendar day, test case, console, coachmark, app bar and more.',
      },
    },

    /* ---------------- Design · the screens ---------------- */
    flowChapters: [
      {
        eyebrow: 'Flow · Existing students',
        title: 'The daily loop for a student with a streak',
        intro: `From the homepage to the challenge, the reward, the leaderboard and the
          streak itself, and what happens when a day is missed.`,
        screens: [
          { code: 'A1', title: 'Home', ratio: '1440 / 1365', image: 'assets/codeflow/ex-home.png', alt: 'Codeflow home: the daily challenge hero, streak card, weekly leaderboard, quests and topic strengths.',
            desc: 'One dark hero card is the only thing asking for a decision: today’s challenge, why it was picked for you, the language remembered from last time and a single “Start challenge” button. Beside it, the streak shows a dashed, not-yet-lit flame, the week so far, a freeze that’s ready and the next badge. Below the fold: this week’s board, weekly quests and the topics the dailies are tuned to.' },
          { code: 'A2', title: 'Workspace · problem', image: 'assets/codeflow/ex-workspace-1.png', alt: 'The workspace with the problem, example and constraints beside the code editor.',
            desc: 'Problem, example and constraints on the left, a dark editor with language tabs on the right. The header keeps the stakes in view (“Solve to light day 13”, “60 XP on the table”) and says plainly that it’s untimed. Run tests and Submit are separate, and the footer explains how.' },
          { code: 'A3', title: 'Workspace · hints', image: 'assets/codeflow/ex-workspace-2.png', alt: 'The hints tab, offering hint 1 for 5 XP.',
            desc: 'Hints live in their own tab and cost 5 XP each. The banner above them says the thing a stuck student needs to hear: the streak counts the moment a correct solution is submitted, with or without hints.' },
          { code: 'A4', title: 'Solved · the reward', ratio: '1440 / 932', image: 'assets/codeflow/ex-leaderboard-2.png', alt: 'A celebration over the leaderboard: Day 13, still burning, with the XP breakdown and new rank.',
            desc: '“Day 13. Still burning.” The XP is itemised (+30 medium, +10 first submit, +10 no hint, +10 for a 10+ day streak, +60 total), the rank moves up two places and names who was passed. The close is a reminder for tomorrow, at the time the student usually solves.' },
          { code: 'A5', title: 'Leaderboard', ratio: '1440 / 932', image: 'assets/codeflow/ex-leaderboard-1.png', alt: 'The leaderboard with class, department, college and league scopes.',
            desc: 'Class, Department, College and League as scopes, opening on class. The student’s own rank leads with a distance (“Top 3 is 30 XP away”) rather than a verdict. The side column adds a section race, a most-improved board that anyone can top, and a plain explanation of how ranking works.' },
          { code: 'A6', title: 'Streak', ratio: '1440 / 1282', image: 'assets/codeflow/ex-streak.png', alt: 'The streak page with the current streak, a monthly calendar, milestones and streak freezes.',
            desc: 'The streak page: current streak, longest ever (kept forever) and days solved this month. A calendar marks solved, freeze-used and missed days, so a covered day reads as protected rather than lost. Milestones run from Spark at 3 days to Galaxy at 365, with “How streaks work” and the freezes alongside.' },
          { code: 'A7', title: 'Streak paused', ratio: '1440 / 1024', image: 'assets/codeflow/ex-streak-missed.png', alt: 'An overlay on the home screen: “Yesterday slipped by. It happens.” with a repair quest.',
            desc: '“Yesterday slipped by. It happens.” The streak is paused, not gone: a seven-day strip shows what happened, and a two-challenge repair quest with a visible clock offers the way back. The 21-day best stays on the profile either way, and “Start fresh from Day 1” is there as the quieter option.' },
        ],
      },
      {
        eyebrow: 'Flow · Day 1',
        title: 'Day 1: a new student starts their streak',
        screens: [
          { code: 'D1', title: 'Habit setup', image: 'assets/codeflow/d1-1-setup.png', alt: 'Habit setup: language, a reminder time and a first goal.',
            desc: 'Three choices in 30 seconds: language, a reminder slot (the cue) and a short first goal. “Commit to 7 days” uses commitment wording: it measurably lifts Day-7 retention.' },
          { code: 'D2', title: 'Home, Day 0', ratio: '1440 / 1274', image: 'assets/codeflow/d1-2-home.png', alt: 'The home screen on day zero, with honest empty states.',
            desc: 'Every module has an honest empty state: 0-day streak with a dashed “today” ring, a board slot that says how to join, and a topic map that is visibly calibrating. The first challenge is an Easy warm-up.' },
          { code: 'D3', title: 'First challenge', image: 'assets/codeflow/d1-3-challenge.png', alt: 'The workspace with a one-time coachmark.',
            desc: 'One-time coachmarks (max 3, skippable) explain the single rule that confuses newcomers most: Run is free and unlimited; Submit is what counts.' },
          { code: 'D4', title: 'First solve', image: 'assets/codeflow/d1-4-solve.png', alt: 'The first-solve reward screen.',
            desc: 'The first reward is bigger than usual (+10 first-challenge bonus) and introduces the board gently: “You joined at #29”, plus the next small goal, Spark in 2 days.' },
          { code: 'D5', title: 'Home, after the solve', ratio: '1440 / 1173', image: 'assets/codeflow/d1-5-home-after.png', alt: 'The home screen after the first solve, with the hero switched to Done.',
            desc: 'The hero switches to Done: confirms the lit day, counts down to Day 2 and offers optional practice, never a second mandatory task. Every card on the page has moved one step.' },
        ],
      },
      {
        eyebrow: 'States · Workspace',
        title: 'Workspace: run & submit scenarios',
        screens: [
          { code: 'S1', title: 'Run · in progress', image: 'assets/codeflow/st-1-running.png', alt: 'Tests running, each case reporting as it finishes.',
            desc: 'Each case reports as it finishes, so a slow case never looks like a frozen page. Both buttons are disabled to stop double-runs; the code is already saved.' },
          { code: 'S2', title: 'Run · all samples passed', image: 'assets/codeflow/st-2-passed.png', alt: 'All sample cases passed, prompting a submit.',
            desc: 'A successful run is not a solve. The console says so plainly and makes “Submit solution” the obvious next step, while warning that hidden cases test edge inputs.' },
          { code: 'S3', title: 'Run · a sample failed', image: 'assets/codeflow/st-3-failed.png', alt: 'A failed sample case showing expected against actual output.',
            desc: 'Expected vs. actual side by side, with the wrong value in red and stdout shown. The failing line is tinted in the editor. Runs are free, so the message is “fix and run again”, not a penalty.' },
          { code: 'S4', title: 'Submit · wrong answer', image: 'assets/codeflow/st-4-wrong.png', alt: 'A wrong-answer result showing 9 of 15 cases.',
            desc: 'Shows the score (9/15) and reveals the first failing hidden case. Retry is primary; a hint is the secondary path. The key line: your streak is safe until midnight. Only the first-try bonus is lost.' },
          { code: 'S5', title: 'Compile / syntax error', image: 'assets/codeflow/st-5-compile.png', alt: 'A parsed compile error with a line number and a go-to-line action.',
            desc: 'Parsed error, not a raw stack dump: line number, caret and a “Go to line 4” jump. Syntax errors never count as an attempt, so nobody is punished for a typo.' },
          { code: 'S6', title: 'Time limit exceeded', image: 'assets/codeflow/st-6-tle.png', alt: 'A time-limit-exceeded result explaining which case was too slow.',
            desc: 'Says which case was too slow and why (input size vs. limit), then names the complexity problem in plain words. It’s coaching, not just a verdict.' },
        ],
      },
      {
        eyebrow: 'States · Errors',
        title: 'Technical errors & failure cases',
        screens: [
          { code: 'T1', title: 'Offline during submit', image: 'assets/codeflow/err-1-offline.png', alt: 'An offline warning bar with the submit queued.',
            desc: 'A page-level warning bar plus the console state. The three promises that matter: the code is saved, the submit is queued and sends itself, and the timestamp protects today’s streak even if the connection returns after midnight.' },
          { code: 'T2', title: 'Code runner down (503)', image: 'assets/codeflow/err-2-runner.png', alt: 'The code runner unavailable, retrying with a countdown.',
            desc: 'Leads with “this isn’t your code”, retries automatically with a visible countdown, doesn’t count attempts during the outage, and gives a reference ID for support. Streak protection is stated explicitly.' },
          { code: 'T3', title: 'Challenge failed to load', ratio: '1440 / 1221', image: 'assets/codeflow/err-3-load.png', alt: 'The home screen where the challenge card failed to load.',
            desc: 'The hero card keeps its size (no layout jump) and switches to State=Error: retry, a past-challenge fallback, and an automatic excuse if the outage outlasts the day. The rest of Home keeps working.' },
          { code: 'T4', title: 'Streak ended', image: 'assets/codeflow/err-4-streak-ended.png', alt: 'The streak-ended screen with a new first goal.',
            desc: 'The hardest moment in the product. No blame language, the 21-day best and all XP are kept, and the screen turns the loss into a new first goal (Spark at 3) plus the safeguard that prevents a repeat: earn a freeze by Day 7.' },
        ],
      },
    ],

    /* Restored from the earlier version of this case study. */
    nextSteps: [
      { title: 'Validate', items: [
        'Moderated test with 8–10 students across all four years, on their own machines, mid-semester rather than in a quiet week.',
        'Measure time to first keystroke, completion rate, and D1 / D7 return. The only numbers that matter here are the ones about coming back.',
        'Test the day-after screen deliberately: simulate a broken streak and watch what people do with it. That’s the screen the whole feature rests on.',
      ] },
      { title: 'Assumptions', items: [
        'Difficulty is served from recent accuracy and language history. The matching logic was out of scope; the design only has to make its reasoning visible.',
        'A streak day is a calendar day in college local time, and it closes at midnight.',
        'A college portal has no wallet, so nothing on the recovery ladder can be bought. That constraint made the right choice the easy one.',
        'Notifications exist, but the budget for them wasn’t agreed, so nothing in v1 depends on a push arriving.',
      ] },
      { title: 'Open questions & v2', items: [
        'Do shared or class streaks outperform individual ones here? Social duty is the strongest lever in the research and the one v1 doesn’t use.',
        'Where does the streak sit relative to assessments and the personality test? Right now the daily loop and the academic track don’t know about each other.',
        'Revival, once there’s a notification budget: what does a message to a student who left 30 days ago actually say, and does it earn the interruption?',
      ] },
    ],

    figma: {
      eyebrow: 'Go deeper',
      title: 'The thinking lives in the Figma file.',
      intro: `This page is the short version. The file holds the full working: every
        decision, the ideas I parked, and the handoff a developer would build from.`,
      cta: 'Explore Figma file',
      url: 'https://www.figma.com/design/O0BFKhT0SUl7z2WqEcU8cU/For-Edwisely?node-id=2069-1361&t=b8BEudMS0KdeEyZ7-1',
      reasons: [
        { title: 'See the approach', desc: 'A clearer picture of how it was done, what was built, and why.' },
        { title: 'Follow the decisions', desc: 'Explore how each call was made, and what it was weighed against.' },
        { title: 'Visit the dump yard', desc: 'Everything I explored but parked, kept in one place rather than deleted.' },
        { title: 'Check the handoff', desc: 'How the file is organised and how the dev-handoff is maintained.' },
      ],
    },

    sections: {
      problem: {
        label: 'What we’re solving',
        title: 'Students practise in bursts, then disappear.',
      },
      personas: {
        label: 'Who we’re solving for',
        title: 'Every student in the class, not just the top of the board.',
        intro: `Primary users are engineering students on the platform, grouped into class →
          department → college. Their motivation, skill and fragility vary a lot, so one
          design has to work for three very different moments.`,
      },
      solution: {
        label: 'How the approach solves it',
        title: 'One personalised challenge a day, built around the habit loop.',
      },
      research: {
        title: 'Streak based motivation',
        intro: 'How streak platforms pull people back every day, and how the best ones catch users the day they slip.',
      },
      foundation: {
        label: 'Foundations',
        title: 'Tokens before screens',
        intro: `Semantic tokens alias a hidden primitive palette. Always bind to a semantic
          token, never a primitive.`,
      },
      system: {
        label: 'Components',
        title: 'The pieces the screens are built from',
        intro: 'A short selection of the components behind the screens.',
      },
      flow: {
        label: 'Design',
        title: 'The screens',
        intro: 'Desktop, 1440 px wide. Select any screen to open it at full resolution.',
      },
      'whats-next': {
        label: 'What I would do next',
        title: 'What I’d test next, and what’s still open',
      },
      'figma-file': {
        label: 'Explore the file',
      },
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
  hmi: {
    slug: 'hmi',
    title: 'HMI',
    subtitle: 'Cockpit experience',
    tagline: 'Four surfaces, one cockpit.',
    year: '2024',
    platform: 'In-car · Škoda',
    scope: 'Virtual Cockpit, AR Head-Up Display, 13" infotainment, Laura voice assistant',
    tags: ['HMI', 'Automotive', 'Voice'],
    gradient: 'linear-gradient(135deg,#4ba82e,#1a1a1a)',
    accent: '#4ba82e',
    wideScreens: true,

    /* 2x export of the Cover page of the Figma file (assets/hmi/). */
    heroImage: {
      image: 'assets/hmi/cover.png',
      alt: 'Cockpit Experience cover: Škoda in-car experience across Virtual Cockpit, AR Head-Up Display, 13" infotainment and Laura voice, with the four parts of the Figma file.',
      ratio: '16 / 9',
    },

    overview: `A unified in-car HMI concept for Škoda. It treats four surfaces as one
      system rather than four separate products: the Virtual Cockpit behind the
      wheel, an AR Head-Up Display on the windshield, the 13" infotainment screen
      and Laura, Škoda’s voice assistant.`,

    problem: {
      copy: `Inside a car, every surface competes for the same pair of eyes. The
        cluster, the windshield, the centre screen and the voice assistant are
        usually designed as separate products, each with its own logic. The driver
        is left to reconcile them, at speed, while the road is the thing that needs
        their attention.`,
    },

    approach: [
      { title: 'One system, four surfaces', desc: 'The cluster, the HUD, the central screen and Laura share one logic, so what the driver learns on one surface holds on the rest.' },
      { title: 'Each surface has a job', desc: 'What sits in front of the driver, what sits in the line of sight and what sits to the side are decided by the moment of driving, not by what each screen can show.' },
      { title: 'Voice as a surface', desc: 'Laura is designed as part of the cockpit rather than a feature added on top, so a request can start on one surface and finish on another.' },
    ],

    flow: [
      { title: 'Virtual Cockpit', desc: 'The instrument cluster behind the wheel: the surface a driver reads most often, and the one that sets the visual language for the rest.',
        image: 'assets/hmi/ic-parked.png', ratio: '8 / 3',
        alt: 'Virtual Cockpit, parked and ready: a Good afternoon greeting, READY in large type with the prompt to press brake and select D, and the battery, range and gear selector on the right.' },
      { title: 'AR Head-Up Display', desc: 'Information placed on the windshield, in the line of sight, so the driver does not have to look away from the road to get it.',
        image: 'assets/hmi/hud-driving.png', ratio: '3 / 1',
        alt: 'AR Head-Up Display while driving: speed at 48 km/h on the left, a right-turn arrow with 300 m in the centre and the adaptive cruise control telltale on the right.' },
      { title: '13" infotainment screen', desc: 'The central IVI: navigation, media and vehicle functions, designed as the place for everything that does not need to be glanced at while driving.',
        image: 'assets/hmi/ivi-parked.png', ratio: '16 / 9',
        alt: '13-inch infotainment screen, parked: a media player, eight shortcut tiles for navigation, phone, climate, seats, charging, vehicle, apps and settings, an energy card and a persistent climate bar.' },
      { title: 'Laura', desc: 'Škoda’s voice assistant, so the driver can ask for something without taking a hand off the wheel or an eye off the road.',
        image: 'assets/hmi/laura-parked.png', ratio: '16 / 9', inset: true,
        alt: 'Laura voice prompt: “Hi Petr — home, or the office?”' },
    ],

    nextSteps: [
      { title: 'Validate', items: [
        'Test the four surfaces together in a driving simulator, not one screen at a time. The concept only works if the handoffs between them do.',
        'Measure glance time away from the road, time on task and how often drivers fall back to touch when voice would have done.',
        'Test with drivers who already use a Škoda, to see what the new logic breaks from habit.',
      ] },
      { title: 'Assumptions', items: [
        'Each surface keeps the job it was given: the cluster for reading, the HUD for the line of sight, the central screen for everything else.',
        'Laura is available for the tasks that would otherwise pull a hand or an eye off the driving.',
        'This is a concept. Hardware limits of the cluster, the HUD and the 13" display have not been tested against it.',
      ] },
      { title: 'Open questions & v2', items: [
        'How much should the HUD carry before it competes with the road? Where that line sits needs real-road testing.',
        'How far should a request travel between surfaces? Starting on Laura and finishing on the central screen is the case to prove first.',
        'What changes for the passenger, who has the same screen but not the same constraints?',
      ] },
    ],

    figma: {
      eyebrow: 'Go deeper',
      title: 'The thinking lives in the Figma file.',
      intro: `This page is the short version. The file holds the full working: every
        decision, the ideas I parked, and the handoff a developer would build from.`,
      cta: 'Explore Figma file',
      url: 'https://www.figma.com/design/vAQjMwK3312ErtmDLKloSU/In-car---Experience-for-skoda?node-id=0-1&t=uS3d6tgBq9BEgt5s-1',
      reasons: [
        { title: 'See the approach', desc: 'A clearer picture of how it was done, what was built, and why.' },
        { title: 'Follow the decisions', desc: 'Explore how each call was made, and what it was weighed against.' },
        { title: 'Visit the dump yard', desc: 'Everything I explored but parked, kept in one place rather than deleted.' },
        { title: 'Check the handoff', desc: 'How the file is organised and how the dev-handoff is maintained.' },
      ],
    },

    sections: {
      'whats-next': {
        label: 'What I would do next',
        title: 'What I’d test next, and what’s still open',
      },
      'figma-file': {
        label: 'Explore the file',
      },
    },

    next: 'offpeak',
  },

};

/* ==================================================================
   SERIES — the site keeps two: the cases in the showroom and the
   publications in the library (entries with kind: 'publication').
   Each page numbers itself within its own series, walking the `next`
   chain from that series' first entry.
     const S = CASE_SERIES('stepper');
     S.sequence        // ['search', 'stepper']
     S.no('stepper')   // "Writing 02 / 02"
     S.noun('hmi')     // "case"
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
