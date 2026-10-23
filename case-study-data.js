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
    tagline: 'See what the suspension sees, before the terrain does.',
    year: '2025',
    platform: 'In-car · Center infotainment display',
    scope: 'IVI concept for a next-generation SUV or electric off-road vehicle',
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

    /* ---------------- 1. What is this about? ---------------- */
    overview: `Predictive Suspension Intelligence is an IVI concept for suspension diagnostics
      on the center infotainment display of a next-generation SUV or electric off-road
      vehicle. It gives the driver a clear, visual picture of what the suspension is
      doing: what the vehicle’s sensors detect on the terrain ahead, how the suspension
      is expected to respond, whether it has adjusted, and when the vehicle needs attention.`,

    overviewMore: [
      `The experience covers the whole journey. Before the drive, a readiness check confirms
        the system can assist. During the drive, glanceable status shows terrain predictions,
        automatic ride-height adjustments, and clear warnings when conditions turn hazardous.
        After the drive, a detailed health summary covers suspension and underbody events.`,
      `At its center is a real-time 3D vehicle visualization. Animated terrain, independently
        articulating wheels, and a moving suspension are all driven by one simulation, so
        prediction, physical response, and on-screen guidance always stay in sync.`,
    ],

    /* ---------------- 2. What problem does it solve? ---------------- */
    problem: {
      copy: `Suspension health is mostly invisible to drivers today. Problems show up as a
        scrape, a hard impact, or a generic warning light, often with no explanation and
        after damage is done. Adaptive suspension systems adjust silently, so drivers
        can’t tell whether the car is handling a situation or needs their help.`,
      contextLabel: 'This concept turns suspension diagnostics into something drivers can understand and act on',
      contextNumbered: true,
      contextCols: 3,
      context: [
        { title: 'From reactive to predictive', desc: 'Drivers see upcoming terrain, which wheel will be affected, and whether clearance may be limited before they reach it.' },
        { title: 'Making automation visible', desc: 'Ride-height changes show clear “preparing → adjusting → adjusted” states. A failed adjustment is never shown as a success.' },
        { title: 'Honest about uncertainty', desc: 'When sensors are obscured, data conflicts, or an actuator fails, the system explains the limitation and gives the safest next step. It doesn’t stay in a reassuring state.' },
        { title: 'Safe water guidance', desc: 'Floodwater or unknown water depth triggers a conservative “Do not enter. Turn around when safe.” message. Raising the suspension is never presented as a reason to cross.' },
        { title: 'Diagnostics that make sense to drivers', desc: 'Raw telemetry becomes plain-language health insights and clear inspection recommendations, without needing a workshop scan tool.' },
      ],
    },

    /* ---------------- 3. Where does it exist in the car experience? ---------------- */
    approach: [
      { title: 'Before the drive (parked)', desc: 'A readiness view shows suspension status, sensor availability, current ride height and mode, whether automatic adjustment is available, and any faults.' },
      { title: 'While driving (glanceable mode)', desc: 'The interface shrinks to a minimal view the driver can read in a quick glance and never needs to touch: a simplified vehicle stance, the most relevant wheel or terrain prediction, adjustment status, and one clear instruction when action is needed. Critical warnings can also be mirrored to the instrument cluster, so the driver doesn’t have to look away toward the center screen.' },
      { title: 'After the drive (parked)', desc: 'The full diagnostic view unlocks. It includes a 3D vehicle model with per-wheel telemetry, a timeline replay of terrain events, clearance concerns, adjustment failures, sensor interruptions, and recommended inspections.' },
    ],

    /* Closing card: invites the viewer to try the live prototype. */
    playground: {
      eyebrow: 'Try it live',
      title: 'Simulate it yourself.',
      intro: 'Reading about a suspension is one thing. Drive it, watch the terrain come in, and see how the screen responds in the moment.',
      cta: 'Take me to playground',
      url: 'https://suspension-hud.vercel.app/',
      image: 'assets/suspension/cover.png',
      badge: 'Interactive prototype',
    },

    sections: {
      overview: { label: 'What is this about?' },
      problem: {
        label: 'What problem does it solve?',
        title: 'Drivers can’t see what the suspension is doing.',
      },
      approach: {
        label: 'Where does it exist in the car experience?',
        title: 'On the center display, with depth that follows the vehicle’s state.',
        intro: `It lives on the center infotainment display as a dedicated vehicle or suspension
          app. Its depth changes with the vehicle’s state, because the screen sits outside
          the driver’s direct line of sight.`,
      },
    },

    next: 'offpeak',
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

    next: 'hmi',
  },

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

    next: 'suspension',
  },

};
