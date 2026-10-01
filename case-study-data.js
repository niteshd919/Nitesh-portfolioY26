/* ==================================================================
   NITESH — PORTFOLIO 2025
   Case study content. Keyed by the `p` query param used in
   case-study.html?p=<slug>. Consumed by case-study.js.
   ================================================================== */

window.CASE_STUDIES = {

  /* ================================================================ */
  aurora: {
    slug: 'aurora',
    title: 'Aurora',
    subtitle: 'Fintech App',
    tagline: 'Banking that finally moves at the speed of freelance income.',
    year: '2025',
    role: 'Lead Product Designer',
    timeline: '5 Months',
    platform: 'iOS · Android',
    team: '2 Designers, 4 Engineers, 1 PM',
    tools: 'Figma, Framer, ProtoPie',
    tags: ['Product Design', 'Mobile'],
    gradient: 'linear-gradient(135deg,#c8ff4d,#1a1a1a)',
    accent: '#c8ff4d',

    heroScreen: {
      device: 'phone',
      html: `
        <div class="wf-nav">
          <span class="wf-dot"></span>
          <span class="wf-bar" style="width:44px;"></span>
          <span class="wf-bar wf-nav-cta"></span>
        </div>
        <span class="wf-bar is-accent" style="width:42%;height:26px;margin-bottom:1.4rem;"></span>
        <div class="wf-statrow" data-anim="pots">
          <div class="wf-stat"><span class="wf-bar"></span><div class="wf-fill"><span style="width:70%;"></span></div></div>
          <div class="wf-stat"><span class="wf-bar"></span><div class="wf-fill"><span style="width:40%;"></span></div></div>
          <div class="wf-stat"><span class="wf-bar"></span><div class="wf-fill"><span style="width:88%;"></span></div></div>
        </div>
        <div class="wf-list-row"><span class="wf-dot"></span><div class="wf-lines"><span class="wf-bar"></span><span class="wf-bar"></span></div><span class="wf-bar wf-amount"></span></div>
        <div class="wf-list-row"><span class="wf-dot"></span><div class="wf-lines"><span class="wf-bar"></span><span class="wf-bar"></span></div><span class="wf-bar wf-amount"></span></div>
        <div class="wf-list-row"><span class="wf-dot"></span><div class="wf-lines"><span class="wf-bar"></span><span class="wf-bar"></span></div><span class="wf-bar wf-amount"></span></div>
      `,
    },

    overview: `Aurora set out to replace the spreadsheet-and-screenshot banking habits of
      independent workers with a single app built around income that never arrives on
      schedule. My role was to take the idea from a whiteboard thesis to a shipped
      product used by freelancers across three markets.`,

    problem: {
      copy: `Freelancers don't get paid like employees — money arrives in bursts, taxes
        are self-managed, and every existing banking app is built around a monthly
        salary that never comes. Users were stitching together four separate apps
        just to answer one question: can I afford this right now?`,
      quote: `I have my rent, my tax savings and my actual spending money all sitting in
        one number. I have no idea what's really mine.`,
      attribution: 'Research participant, freelance illustrator',
    },

    approach: [
      { title: 'Income, not salary', desc: 'Every surface treats income as irregular by default — no monthly assumptions baked into the math.' },
      { title: 'Auto-sorted money', desc: 'Incoming payments split into Spend, Save and Tax pots the moment they land, based on rules set once.' },
      { title: 'Calm numbers', desc: 'Balances show confidence ranges, not false precision, because freelance income is never exact.' },
      { title: 'One glance, one answer', desc: 'The home screen answers "can I spend this?" without a single tap, every time it opens.' },
    ],

    flow: [
      { title: 'Connect & categorize', desc: 'Linking a bank account triggers an on-device pass that tags the last 90 days of income as regular, irregular or one-off.',
        screen: `<div class="wf-list-row"><span class="wf-dot"></span><div class="wf-lines"><span class="wf-bar"></span><span class="wf-bar"></span></div><span class="wf-bar is-accent wf-amount"></span></div>` },
      { title: 'Set the split', desc: 'A single slider view lets users define how incoming payments divide between Spend, Save and Tax — editable anytime.',
        screen: `<div class="wf-stat"><span class="wf-bar" style="width:40%;"></span><div class="wf-fill"><span style="width:62%;"></span></div></div>` },
      { title: 'Live pots', desc: 'Three pots update in real time as money moves, each carrying its own color language from the brand system.',
        screen: `<div class="wf-statrow"><div class="wf-stat"><span class="wf-bar"></span><div class="wf-fill"><span style="width:70%;"></span></div></div><div class="wf-stat"><span class="wf-bar"></span><div class="wf-fill"><span style="width:40%;"></span></div></div><div class="wf-stat"><span class="wf-bar"></span><div class="wf-fill"><span style="width:88%;"></span></div></div></div>` },
      { title: 'Tax, handled', desc: 'A dedicated tax view projects what’s owed quarterly, pulling straight from the Tax pot so filing never comes as a surprise.',
        screen: `<span class="wf-bar is-accent" style="width:50%;height:20px;margin-bottom:0.5rem;"></span><span class="wf-bar" style="width:70%;"></span>` },
    ],

    testing: [
      { title: 'The split felt invisible', desc: 'Testers didn’t trust automatic splitting until a weekly digest showed exactly where each payment went.' },
      { title: 'Confidence ranges confused first-timers', desc: 'Pairing every range with a one-line explainer on first view — fading after three sessions — solved it.' },
      { title: 'Tax anxiety needed a home', desc: 'Users wanted reassurance before information, so the tax view now opens with a single "you’re on track" verdict.' },
    ],

    impact: [
      { value: 42, suffix: '%', decimals: 0, label: 'Increase in weekly active use' },
      { value: 3.1, suffix: 'x', decimals: 1, label: 'More users actively saving toward tax' },
      { value: 96, suffix: '%', decimals: 0, label: 'Would recommend to another freelancer' },
    ],

    closing: `Aurora shipped to three markets in its first year, and the auto-sort
      mechanic became the reason most users cited for staying — not the interest
      rate, not the visuals, but the simple fact that the app finally understood
      how their money actually behaved.`,

    next: 'offpeak',
  },

  /* ================================================================ */
  offpeak: {
    slug: 'offpeak',
    title: 'Offpeak',
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

    /* Screens and boards below are placeholders. To drop in a real
       export, add `image: 'assets/offpeak/f5.png'` (plus an optional
       `alt`) to any screen, or to any `board` object. */
    heroScreens: [
      { code: 'F5', title: '24 h bar editor' },
      { code: 'F9', title: 'Review heatmap' },
      { code: 'F11', title: 'Tariff saved' },
    ],

    overview: `EV owners save real money by charging when electricity is cheap, but
      only if the app knows their tariff. I designed the flow that gets a
      time-of-use tariff off a paper contract and into a smart wallbox: up to
      sixteen prices that, between them, have to cover every minute of the year.`,

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

    framing: {
      modelNote: 'Max 2 × 2 × 4 = 16 prices · both sample tariffs use 10',
      model: [
        { title: 'Tariff', desc: 'One per wallbox, named by the user, e.g. “MyEnergy L”.' },
        { title: 'Period', desc: '1–2 per year, each with a start and end date. Together: all 365 or 366 days.' },
        { title: 'Week section', desc: '1–2 per period, any mix of weekdays. Together: all 7 days.' },
        { title: 'Time slot', desc: '1–4 per section, in 15-minute steps. Together: all 24 hours.' },
        { title: 'Price', desc: 'ct/kWh or €/kWh, one per slot.' },
      ],
      insight: {
        title: '“Every minute covered” means each level is a partition, not a list of ranges.',
        desc: `If the UI only ever lets people split a whole, gaps and overlaps can’t
          happen. Two periods become two start dates, and the ends work themselves
          out. Week sections become “which group is this day in?”. Time slots become
          lines you move on a 24-hour bar. Nobody types a from/to time again.`,
      },
      edgeCasesLabel: 'Six edge cases hiding in the two sample tariffs',
      edgeCases: [
        'Slots that cross midnight, like 22:00–06:00.',
        'A period that crosses New Year and ends on 29 February, so leap years matter.',
        'Week sections that aren’t consecutive: “Mon, Fri, Sat”.',
        'Sections with different slot counts: one 00–24 slot sitting next to three.',
        'Mixed units and formats: “24 Cent/kWh” next to “0,22 €/kWh”, decimal comma and all.',
        'A word clash: “off-peak” the season vs. off-peak the hours. So people name their own periods.',
      ],
    },

    approach: [
      { code: 'P1', title: 'Mirror the bill', desc: 'Same order and same words as the contract: period, then days, then times, then price. Copying is faster when the screen follows the paper.' },
      { code: 'P2', title: 'Make errors impossible, not just detectable', desc: 'Partition, don’t list. The best error message is one the design never has to show.' },
      { code: 'P3', title: 'Ask only what’s needed', desc: 'A flat tariff is one screen. Complexity only shows up when the tariff really has it.' },
      { code: 'P4', title: 'See while you enter', desc: 'The input control is the visualization. There’s no separate preview to go and check.' },
      { code: 'P5', title: 'Answer the real question', desc: 'People don’t want a dataset. They want to know when it’s cheap and what their car is going to do about it.' },
    ],

    research: {
      patterns: [
        { title: 'Interview, not form', seenIn: 'Tax-filing interviews, GOV.UK “one thing per page”',
          desc: 'Ask a simple yes/no before asking for detail, so complexity only appears when it’s real.',
          applied: '“Does your price change during the year?” comes first. A flat tariff is done in one screen.' },
        { title: 'Prevent errors by construction', seenIn: 'Nielsen heuristic #5, poka-yoke',
          desc: 'Constrain the input so invalid states can’t be expressed in the first place.',
          applied: 'Two start dates, days assigned to groups, boundaries on a bar. No gaps, no overlaps.' },
        { title: 'Direct manipulation with snapping', seenIn: 'iOS sleep schedule, thermostat schedules, calendar drag-to-resize',
          desc: 'Dragging a boundary on a timeline beats typing two times, as long as it snaps to a grid.',
          applied: 'Handles on a 24 h bar that snap to 15 min, with 44 pt hit areas.' },
        { title: 'Duplicate, then adjust', seenIn: 'Thermostat “copy to other days”, spreadsheet fill-down',
          desc: 'Real schedules repeat. Copying a finished block and editing the difference beats starting blank.',
          applied: 'Both sample tariffs reuse their time splits, so the next section starts pre-split.' },
        { title: 'Week × hour heatmap', seenIn: 'Energy dashboards, contribution calendars',
          desc: '7 × 24 cells show a whole period at once. “Nights are cheap” jumps out before you read a number.',
          applied: 'The main view on the review screen, one per period.' },
        { title: 'Answer the question', seenIn: 'Navigation and banking insights',
          desc: 'People want the conclusion, not the dataset. Lead with the insight and let the chart back it up.',
          applied: '“Your car will charge from 22:00, at 27 ct/kWh.”' },
      ],
      chartTable: {
        title: 'Which chart for which job',
        head: ['Chart', 'Best for', 'Weak at', 'Where it lives'],
        rows: [
          ['Linear 24 h bar', 'Editing slots, seeing one day’s split', 'Comparing many days', 'Time & price editor'],
          ['Week × hour heatmap', 'A whole period’s pattern at a glance', 'Reading exact values', 'Review, one per period'],
          ['Step / bar chart', 'Today’s prices, “now”, the charging window', 'Weekly overview', 'After saving, home widget'],
          ['Year ribbon', 'Season boundaries, the New Year wrap', 'Anything within a day', 'Period step, review header'],
          ['Table', 'Exact values, screen readers, checking against the bill', 'Patterns', 'Review “Table” view'],
          ['Radial clock', 'The 24 h cycle metaphor', 'Labels, precise edits, comparison', 'Explored, parked'],
        ],
        note: `Design tradeoff: The radial clock was tempting. A 24-hour ring shows the wrap past midnight
          beautifully, but it’s hard to label, hard to compare and fiddly to edit with a
          thumb. A plain linear bar with an explicit “crosses midnight” marker won.`,
      },
    },

    directions: [
      { letter: 'A', title: 'Step-by-step wizard',
        summary: 'A classic linear form, one level of the tariff per step. The times-and-prices step loops for every week section, and you only see the result at the very end.',
        strengths: 'Familiar and predictable. The cheapest to build. Very accessible, since it’s native inputs only. Works well for simple tariffs.',
        weaknesses: 'About 32 values to type for the sample tariff. Gaps and overlaps are possible and only caught by validation. Step 3 loops up to four times and people lose their place. The chart arrives too late to help.',
        board: { label: 'Variant A · low-fi screens' } },
      { letter: 'B', title: 'Overview builder',
        summary: 'A non-linear “tariff tree” that mirrors the table on the bill. Periods and sections get added and edited in any order through sheets, with the chart on its own tab.',
        strengths: 'Mirrors the bill one to one. Excellent for returning users and small edits. Clear status for every section.',
        weaknesses: 'A blank page on first use: you need to understand the model before you can start. Deep hierarchy on a phone. The same gap and overlap risk as A. Input and chart live on different tabs.',
        board: { label: 'Variant B · low-fi screens' } },
      { letter: 'C', title: 'Guided visual timeline', chosen: true,
        summary: 'A few simple questions decide how much structure is needed, then each level is edited as a partition you split: a year ribbon, two day groups, a 24 h bar. The input is the visualization.',
        strengths: 'Coverage errors are impossible by construction. About 18 values for the sample tariff, thanks to copying and derived dates. Constant visual feedback. Handles every edge case we found.',
        weaknesses: 'Drag precision on small screens. Needs a non-drag alternative for accessibility. Custom components mean more to build and test.',
        board: { label: 'Variant C · low-fi screens' } },
    ],

    /* Weighted totals are calculated from these rows, not typed in. */
    decision: {
      options: ['A · Wizard', 'B · Builder', 'C · Timeline'],
      criteria: [
        { name: 'Error prevention', detail: 'Full coverage, no overlaps', weight: 25, scores: [2, 2, 5] },
        { name: 'Efficiency', detail: 'Values to enter for the sample tariff (≈32 / ≈32 / ≈18)', weight: 20, scores: [2, 3, 4] },
        { name: 'Learnability', detail: 'First-time user, no prior model', weight: 15, scores: [4, 2, 4] },
        { name: 'Visualization', detail: 'Built into the input, gives insight', weight: 15, scores: [2, 3, 5] },
        { name: 'Mobile ergonomics', detail: 'Thumb reach, screen density', weight: 10, scores: [3, 3, 4] },
        { name: 'Accessibility', detail: 'Before mitigations', weight: 10, scores: [5, 4, 3] },
        { name: 'Build effort', detail: '5 = cheapest', weight: 5, scores: [5, 4, 3] },
      ],
      verdict: {
        title: 'Variant C, the guided visual timeline, with the best parts of A and B folded in.',
        borrowed: [
          { tag: '+A', text: 'Linear steps and a visible progress bar, so first-time setup keeps the calm, predictable feel of a wizard.' },
          { tag: '+B', text: 'The tariff tree comes back as the “edit later” overview for returning users.' },
        ],
      },
      risksLabel: 'C’s weak spots, and what I did about them',
      risks: [
        { code: 'R1', title: 'Drag precision.', desc: '15-minute snapping, 44 pt handles and a live time label while dragging.' },
        { code: 'R2', title: 'Accessibility.', desc: 'Every slot can be edited by tapping, through a stepper sheet (WCAG 2.5.7). The review has a table view for screen readers.' },
        { code: 'R3', title: 'Unfamiliar control.', desc: 'Sensible defaults (one price, 00–24), a one-line hint, and “copy times” from the previous section.' },
        { code: 'R4', title: 'Build effort.', desc: 'One timeline component, reused in the editor, the review and on the home screen. Build once, use three times.' },
      ],
    },

    flowChapters: [
      {
        eyebrow: 'Part 1 of 3',
        title: 'Set the frame: intro, periods and days',
        intro: `The first four screens are an interview. Each asks one question in the
          bill’s own words, and every answer takes work away from the next step.`,
        screens: [
          { code: 'F1', title: 'Intro', desc: 'Sets expectations up front: three questions, and have your bill ready. The bar at the top previews the goal. Flat tariffs get an exit right here: “My price never changes”.', image: 'assets/offpeak/f1.png' },
          { code: 'F2', title: 'Does your price change during the year?', desc: 'A yes/no question instead of an empty form. Answer “No” and the next screen disappears.', image: 'assets/offpeak/f2.png' },
          { code: 'F3', title: 'Two start dates split the year', desc: 'Only the start dates are editable, as day and month. The ends fill themselves in, New Year wrap and 29 February included. Period names are editable too.', image: 'assets/offpeak/f3.png' },
          { code: 'F4', title: 'Days as two groups', desc: 'One tap moves a day between groups, and every day always belongs to exactly one. “Mon, Fri, Sat” works as well as “Mon – Thu”.', image: 'assets/offpeak/f4.png' },
        ],
      },
      {
        eyebrow: 'Part 2 of 3',
        title: 'Split the day: times and prices on a 24 h bar',
        intro: `The heart of the flow. The bar always covers 24 hours, and the only thing
          you can do is move the lines inside it.`,
        screens: [
          { code: 'F5', title: 'The 24 h bar editor', desc: 'Starts as one slot, 00–24. “Add split” halves the widest slot. Handles snap to 15 min with a live time label. If the first and last slot share a price, they merge into one slot across midnight.' },
          { code: 'F6', title: 'Slot sheet', desc: 'Tap a slot or a handle for the same control without dragging: ±15 min steppers (WCAG 2.5.7), a decimal keypad and a ct/€ switch. Neighboring slots adjust on their own.' },
          { code: 'F7', title: 'Copy times, fill prices', desc: 'In both sample tariffs the times repeat and only the prices change, so the next section starts pre-split. The bar fills with color as prices arrive.' },
          { code: 'F8', title: 'Checkpoint between periods', desc: 'The finished period as a heatmap: a small reward and an early error check. Then a choice for the next period: copy and change what differs, or start fresh.' },
        ],
      },
      {
        eyebrow: 'Part 3 of 3',
        title: 'See the whole year, save, and live with it',
        intro: `Review, save, and the screen people will actually come back to.`,
        screens: [
          { code: 'F9', title: 'Review as heatmap', desc: 'Insight first (“Cheapest: 24 ct/kWh, Fri – Sun, 22:00 – 06:00”), then a 7 × 24 heatmap per period on one fixed color scale. Every section is one tap from editing, and there’s no error list, because there’s nothing to list.' },
          { code: 'F10', title: 'Table view', desc: 'The same data laid out like the bill, for a line-by-line cross-check. It doubles as the screen-reader equivalent of the chart (WCAG 1.1.1) and remembers which view you picked.' },
          { code: 'F11', title: 'Saved: answer the real question', desc: 'Leads with what the car will do: “Your car will charge from 22:00, at 27 ct/kWh.” Step bars, a now-marker and the planned window in teal. The same component later lives on the home screen.' },
          { code: 'F12', title: 'Edit later', desc: 'Borrowed from B. Returning users land on an overview: the year ribbon plus small multiples of every section, all on one scale. “Edit” jumps straight into that period.' },
        ],
      },
    ],

    states: [
      { code: 'S1', title: 'Missing price', desc: 'The only error left by design. It shows on the slot itself (bar, row and message) and focus jumps to the field. The button stays enabled, so people learn why instead of staring at a grey button.' },
      { code: 'S2', title: 'Unit plausibility check', desc: 'Bills mix “Cent/kWh” and “€/kWh”. Type 24 with € selected and you get a one-tap fix, not a blocking error. “0,24” and “0.24” both work.' },
      { code: 'S3', title: 'Limits reached', desc: 'Different prices at 00:00 and 24:00 stay two separate slots, using all four. “Add split” disables with a reason, never silently.' },
      { code: 'S4', title: 'Flat tariff fast path', desc: 'From “My price never changes” on F1. It’s honest about the consequence: with one price there’s no cheap window, so charging starts when you plug in.' },
    ],

    system: {
      components: [
        { title: 'Timeline bar', usedIn: 'F1, F5, F7, F12, S1–S4',
          desc: 'Each segment is a time slot: width is duration, fill is price level, the label is the price, and a tap opens the slot sheet. Handles snap to 15 min with a 44 × 80 pt hit area, a live tooltip and a haptic tick per step. States: empty (hatched), error, selected, and disabled at four slots.',
          board: { label: 'Timeline bar · anatomy', ratio: '16 / 7' } },
        { title: 'Price scale',
          desc: 'Teal for cheap to rust for expensive, distinguishable with the common color-vision deficiencies and always paired with the printed value. In production the five steps come from the user’s own min and max, fixed across the whole tariff.',
          scale: [
            { token: 'price/1', range: '≤25 ct', hex: '#0F6B5F' },
            { token: 'price/2', range: '26–30', hex: '#5FA394' },
            { token: 'price/3', range: '31–35', hex: '#E4DCC8' },
            { token: 'price/4', range: '36–40', hex: '#E7A36B' },
            { token: 'price/5', range: '>40 ct', hex: '#B5461F' },
          ] },
        { title: 'Day group toggle',
          desc: 'A two-state toggle exposed as a pressed button, with the group in its label (“Friday, group 2”). Group shows as fill and number, never color alone. A group can’t be emptied: the last day shows a hint instead of moving.' },
        { title: 'Year ribbon',
          desc: 'Two start dates split a Jan–Dec strip, and a period can wrap past New Year. End dates are derived as “start of the other period, minus one day”, which is how 29 February sorts itself out.' },
        { title: 'Week heatmap & step chart',
          desc: '7 rows × 24 hourly cells (96 × 15 min in the data model), ticks every 6 h. The step chart has 24 bars, a now-marker and the planned window in teal. Both have a table equivalent for assistive tech.' },
      ],
      note: 'Type: IBM Plex Sans, 26/32 for titles and 15/22 for body. IBM Plex Mono for every number, so prices and times line up in columns.',
    },

    impact: [
      { value: 18, suffix: '', decimals: 0, label: 'Values to type for the sample tariff, down from about 32 in a classic form' },
      { value: 0, suffix: '', decimals: 0, label: 'Ways to leave a minute uncovered. Gaps and overlaps can’t be expressed' },
      { value: 4.25, suffix: '/5', decimals: 2, label: 'Weighted score for the timeline, against 2.85 and 2.75' },
      { value: 3, suffix: '×', decimals: 0, label: 'Reuse of one timeline component: editor, review and home' },
    ],

    closing: `Most of the screens came late. What made them work was one reframe early
      on: treat every level as a whole you split, never a list you fill in, and most
      of the error messages never have to be written.`,

    nextSteps: [
      { title: 'Validate', items: [
        'A quick prototype test with 5–6 EV owners, contract in hand.',
        'Track completion rate, time on task, error count and a confidence rating.',
        'End each session with one question: “When is charging cheapest for you?” If people can answer it, the review screen did its job.',
      ] },
      { title: 'Assumptions', items: [
        'Prices are entered gross, incl. VAT, exactly as printed. The base fee doesn’t matter for scheduling.',
        'Fixed time-of-use tariffs only. Dynamic and hourly spot tariffs wait for v2.',
        'Times are local wallbox time. Daylight saving is handled by the system clock.',
        'Where the feature lives in the app was out of scope, per the brief.',
      ] },
      { title: 'Open question & v2', items: [
        'Can we get provider plan data or bill scans? The answer decides the v2 entry point.',
        'The fastest input is none at all: scan the bill or pick provider and plan, then land in the same review screen to check and correct.',
      ] },
    ],

    /* Per-section label overrides and headings, keyed by section id. */
    sections: {
      problem: { label: 'The Brief' },
      framing: {
        title: 'Sixteen prices that have to fit together perfectly',
        intro: `I started with the data model, because it explains most of what makes
          this hard. Every level has to add up to a whole: periods to a year, week
          sections to seven days, slots to 24 hours.`,
      },
      approach: {
        label: 'Principles',
        title: 'Five rules every screen had to pass',
        intro: 'They came straight out of the framing, and they made a lot of later decisions easy.',
      },
      research: {
        title: 'Borrowing from products that already solved pieces of this',
        intro: `Two questions. How do good products let people enter structured,
          rule-bound data on a phone? And how do you show 16 prices across 8,760
          hours on a 390 px screen? I went through Apple’s HIG, Material, GOV.UK,
          NN/g, Baymard and WCAG 2.2, then tore down thermostat schedules, sleep apps,
          calendars and home-energy apps. Eighteen patterns made the long list. These
          six did most of the work.`,
      },
      directions: {
        title: 'Three directions, taken to low-fi',
        intro: `Same brief, same sample tariff, three different mental models. Each one had
          to be good enough that choosing between them was a real decision.`,
      },
      decision: {
        title: 'Scoring against the brief, not against my taste',
        intro: `“Every minute must be covered” is a hard rule, so error prevention carries
          the most weight. The scores are expert judgment for now. A quick prototype
          test with 5–6 people is the next step, to confirm them or prove me wrong.`,
      },
      flow: {
        label: 'The Final Flow',
        title: 'Twelve screens, in three parts',
        intro: `Mid-fi wireframes. The step-by-step pacing and progress bar come from the
          wizard; the editing model is pure timeline.`,
      },
      states: {
        title: 'What can still go wrong, and how the design catches it',
        intro: `Partitions take coverage errors off the table. A few things can still go
          wrong, and each gets a specific, calm response instead of a generic error.`,
      },
      system: {
        title: 'Five custom components carry the whole flow',
        intro: `Handed over in Figma with anatomy, states and tokens. The timeline bar
          appears in the editor, the review, the saved screen and every edge state, so
          it got the most detailed spec.`,
      },
      impact: {
        label: 'Outcome',
        title: 'What the design changes',
        intro: 'These are design outcomes, measured against the brief’s sample tariff. Usability numbers come after testing.',
      },
      'whats-next': {
        title: 'What I’d test next, and what’s still open',
      },
    },

    next: 'codeflow',
  },

  /* ================================================================ */
  codeflow: {
    slug: 'codeflow',
    title: 'Codeflow',
    subtitle: 'Daily Coding Challenge',
    tagline: 'Getting a student to code today, and back the day after they don’t.',
    year: '2026',
    role: 'Product Designer',
    platform: 'Web · Student portal',
    scope: 'Research, IA, Interaction, Two rounds, Handover',
    tools: 'Figma, FigJam',
    tags: ['UX Research', 'Gamification', 'Web'],
    gradient: 'linear-gradient(135deg,#ff7a3d,#1a1a1a)',
    accent: '#ff7a3d',

    /* Screens and boards below are placeholders. To drop in a real
       export, add `image: 'assets/codeflow/h1.png'` (plus an optional
       `alt`) to any screen, or to any `board` object. */
    wideScreens: true,
    heroScreens: [
      { code: 'H1', title: 'Home hero' },
      { code: 'C1', title: 'The editor' },
      { code: 'R4', title: 'The day after' },
    ],

    overview: `Edwisely’s student portal already had assessments, reports and a
      personality test. What it didn’t have was a reason to open it on a Tuesday.
      Codeflow is the daily coding challenge that became that reason: one problem
      picked for you on the homepage, a streak you can’t miss, and — the part most
      streak features skip — somewhere for the missed day to land.`,

    problem: {
      copy: `Computer science students aren’t short of places to practise. They’re
        short of a reason to practise today. Generic platforms serve the same problem
        set to a first-year and a final-year, and nothing in them notices whether you
        came back. The brief asked for a low-friction, personalised entry point on the
        student homepage, with streaks and leaderboards to hold people there. Reading
        it, the harder half was obvious: streaks are easy to start and easy to lose,
        and the day a student loses one is usually the last day they open the product.`,
      quote: `When I open the portal I want today’s problem already chosen for me, at a
        level I can actually finish, so practising costs me one decision instead of ten.`,
      attribution: 'The job story behind the brief',
      context: [
        { title: 'Who', desc: 'Undergraduates across all four years, on a college-issued portal they already have to log into. Mixed skill, mixed motivation, one shared leaderboard between them.' },
        { title: 'What good looks like', desc: 'A student starts a challenge within a tap of landing, finishes it, and comes back tomorrow. And when they don’t come back, the product has something better to say than “streak lost”.' },
      ],
    },

    framing: {
      modelNote: 'One loop, five links · it only holds if every link does',
      model: [
        { title: 'Cue', desc: 'The reason to open the portal today. Ours is the homepage itself, not a notification.' },
        { title: 'Entry', desc: 'One challenge, already chosen. No browse, no filters, no difficulty picker.' },
        { title: 'The unit', desc: 'One problem, 25–30 minutes. Small enough to do in a bad week of term.' },
        { title: 'Reward', desc: 'XP, accuracy and rank, credited on screen the second the tests pass.' },
        { title: 'Proof', desc: 'Streak, league and the gap to the next rank. This is what brings them back tomorrow.' },
      ],
      insight: {
        title: '“Keep the streak alive” is one job. Catching the student the day they slip is the other one, and it’s the one that decides retention.',
        desc: `A single missed day does almost nothing to a forming habit — Lally’s UCL
          work found no measurable effect on habit formation from one miss. What does the
          damage is how the product frames it. Silverman and Barasch isolate two levers:
          leave people blaming themselves and drop-off gets worse; give them a way to
          repair and drop-off gets smaller. So the day-after screen is designed as a
          screen in its own right, with the same care as the hero, instead of being left
          as an error state nobody wrote.`,
      },
      edgeCasesLabel: 'Six moments where the loop actually breaks',
      edgeCases: [
        'Day one. A new student has no streak, no rank and no history, so every number on the page is a zero — and a zero motivates nobody.',
        'The Goldilocks miss. Too hard and they close the tab; too easy and the XP feels made up. Either way the streak survives and the habit doesn’t.',
        'The discouraging rank. “#1912 overall” is accurate and useless. Nobody has ever been motivated by four digits.',
        'The near miss. Code compiles, six of eight test cases pass. This is the most common outcome of a submission and the least designed screen in v1.',
        '11:40 pm. The student is awake, the streak expires at midnight, and nothing on screen says so.',
        'The day after. They missed. Whatever this screen says decides whether they ever open the portal again.',
      ],
    },

    approach: [
      { code: 'P1', title: 'One tap to the first keystroke', desc: 'The homepage picks the problem. Choosing is work, and work at the entry point is exactly where the funnel leaks.' },
      { code: 'P2', title: 'Serve the next problem, not the hardest one', desc: 'Difficulty comes from recent accuracy and language history, and the card says why it was picked. A challenge that looks chosen for you beats one that’s objectively harder.' },
      { code: 'P3', title: 'Make the rank a distance, not a position', desc: '“+80 XP to rank 2nd in your class” is an instruction. “#1912 overall” is a verdict. Lead with the gap that can close today.' },
      { code: 'P4', title: 'Design the missed day before the perfect one', desc: 'The day-after screen is the only surface where the product can still change the outcome. It got drawn first, not last.' },
      { code: 'P5', title: 'Earn it back, never buy it back', desc: 'A streak you can pay to restore is worth what you paid for it. Repair is always effort — extra challenges, inside a window.' },
    ],

    research: {
      patterns: [
        { title: 'Loss aversion, made visible', seenIn: 'Duolingo, Snapchat, GitHub’s contribution graph',
          desc: 'Every day adds to something the user now owns, and losing it hurts more than earning it felt good. Simply showing an unbroken log lifts engagement on its own.',
          applied: 'One flame, three placements: home hero, top strip and the challenge card. Same number in all of them.' },
        { title: 'A unit small enough for a bad day', seenIn: 'Duolingo lessons, Wordle',
          desc: 'Bingers churn faster than pacers. The daily unit has to be doable in the worst week of term, not the best one.',
          applied: 'One problem, 25–30 minutes, and the streak counts the day — never the XP earned in it.' },
        { title: 'Social duty beats self-discipline', seenIn: 'Snapchat shared streaks, Strava clubs',
          desc: 'Breaking a shared streak lets a specific person down. Obligation to a human outlasts obligation to a number.',
          applied: 'The home leaderboard shows classmates by name, not a global top 100. You are visibly in somebody’s list.' },
        { title: 'Endowed progress', seenIn: 'Loyalty cards — Kivetz, Urminsky & Zheng, 2006',
          desc: 'People push hardest when the goal is close and the remaining distance is stated in units they can earn today.',
          applied: '“You need only +80 XP to reach rank 2nd in your class”, printed on the card before they start.' },
        { title: 'Repair, not blame', seenIn: 'Silverman & Barasch, Journal of Consumer Research, 2023',
          desc: 'Self-blame after a slip accelerates drop-off; an available repair slows it. Left alone, the “what-the-hell” effect turns one miss into quitting.',
          applied: 'The day-after screen opens with “Life happened”, keeps total and best days on screen, and offers exactly one action.' },
        { title: 'Earned protection over paid restore', seenIn: 'Duolingo streak freezes, Snapchat+ restores',
          desc: 'Freezes granted for loyalty keep the streak meaningful. Restores sold for money quietly admit it never was.',
          applied: 'Two freezes at 30 days, a third at 100. Nothing is purchasable — there’s no wallet in a college portal anyway.' },
      ],
      chartTable: {
        title: 'The recovery ladder, and what made it into v1',
        head: ['Mechanic', 'Fires', 'Best at', 'Cost to the streak’s meaning', 'In v1'],
        rows: [
          ['Streak freeze', 'Before the miss', 'Known unknowns: illness, travel, a bad week', 'Low, as long as it’s earned', 'Yes — at 30 and 100 days'],
          ['Exam pause', 'Before the miss', 'Planned time off the college already knows about', 'None', 'Yes — from the academic calendar'],
          ['Earn it back', 'Within 24 h of the miss', 'The student who wants it back and will work for it', 'None. The effort is the point', 'Yes — two challenges in 24 h'],
          ['Paid restore', 'After the miss', 'Revenue', 'High. A bought streak is worth what it cost', 'No'],
          ['Revival campaign', 'A week or more later', 'Students who have already gone', 'Low', 'v2 — needs a notification budget'],
          ['Auto-repair', 'After our own outage', 'Streaks we broke ourselves', 'None. Fixing it quietly is the only honest option', 'Yes'],
          ['Hard reset', 'At the miss', 'Nothing', 'It isn’t a mechanic, it’s the absence of one', 'No'],
        ],
        note: `Design tradeoff: leniency isn’t free. A freeze that’s too generous stops
          being insurance and becomes the default, and the streak quietly stops meaning
          “daily”. So: two earned freezes, an automatic pause for exam weeks, and a
          24-hour window to earn one back. Past that the count resets — and the page
          keeps total days and best-ever on screen, because that part was genuinely
          earned and deleting it is just punishment.`,
      },
    },

    directions: [
      { letter: 'A', title: 'Challenge feed',
        summary: 'The homepage is the catalogue. Today’s problems in a filterable list, difficulty and language chips along the top, streak in the header. The student picks.',
        strengths: 'Everything is discoverable. Cheapest to build on the existing portal grid. Scales past the daily problem without a new page, and suits the confident final-year who knows what they want to drill.',
        weaknesses: 'Puts a decision in front of a student who arrived with motivation, not a plan. Personalisation has nowhere to show itself. The streak becomes a header ornament, and the missed day has no surface at all.',
        board: { label: 'Direction A · low-fi screens' } },
      { letter: 'B', title: 'Progress dashboard',
        summary: 'Stats first: challenges completed, accuracy, rank tiles, leaderboard. Today’s challenge is one row inside the dashboard, roughly where you’d expect a task list.',
        strengths: 'Strongest social proof of the three, and it answers “where do I stand?” immediately. Good for the returning student. The leaderboard toggle has room to breathe.',
        weaknesses: 'Reads as a report card. Four ranks arrive before any action, and the largest, worst number wins the student’s attention. The thing they came to do is the least prominent thing on the page.',
        board: { label: 'Direction B · low-fi screens' } },
      { letter: 'C', title: 'One card, already chosen', chosen: true,
        summary: 'A single hero challenge with the reason it was picked, the XP it pays, the time left today and one button. Streak and league sit in the top strip. Progress and leaderboard move below the fold.',
        strengths: 'One tap from landing to the editor. Personalisation is visible rather than implied. The streak has a permanent home, and there’s room above the fold for the at-risk and day-after states to take the page over when they need to.',
        weaknesses: 'One card is one opinion — a bad match has no visible fallback. Everything wants to live in that hero. The catalogue disappears unless it’s deliberately signposted.',
        board: { label: 'Direction C · low-fi screens' } },
    ],

    /* Weighted totals are calculated from these rows, not typed in. */
    decision: {
      options: ['A · Feed', 'B · Dashboard', 'C · One card'],
      criteria: [
        { name: 'Time to first keystroke', detail: 'Decisions between landing and the editor', weight: 20, scores: [3, 2, 5] },
        { name: 'Personalisation', detail: 'Does the served problem feel chosen for them', weight: 20, scores: [2, 3, 5] },
        { name: 'Winnable social proof', detail: 'Rank reads as reachable, not as a verdict', weight: 15, scores: [2, 5, 4] },
        { name: 'Streak legibility', detail: 'Active, at-risk and broken tell themselves apart', weight: 15, scores: [2, 3, 5] },
        { name: 'Room for recovery', detail: 'Somewhere for the missed day to live', weight: 10, scores: [2, 3, 4] },
        { name: 'Discovery', detail: 'Finding the other problems live today', weight: 10, scores: [5, 2, 3] },
        { name: 'Build effort', detail: '5 = cheapest on the existing portal', weight: 10, scores: [4, 3, 3] },
      ],
      verdict: {
        title: 'Direction C, the single pre-chosen card, with A’s catalogue moved one level down and B’s ranking panel kept below the fold.',
        borrowed: [
          { tag: '+A', text: 'The full list survives as its own page, reached from the card and from the nav — discovery, without putting a decision in the doorway.' },
          { tag: '+B', text: 'Progress and leaderboard stay on the homepage, but under the hero, where they read as a reward for scrolling rather than a wall on arrival.' },
        ],
      },
      risksLabel: 'Where C is weak, and what I did about it',
      risks: [
        { code: 'R1', title: 'One card, one opinion.', desc: 'If the match is wrong there’s no visible alternative. The card carries a quiet “Pick a different one” and states why this problem was chosen, so a student can disagree with the algorithm in a tap.' },
        { code: 'R2', title: 'Everything competes for the hero.', desc: 'Streak, XP, league, countdown, rank and the problem all wanted the top of the page. One number per job: the flame counts days, the league states standing, the countdown states urgency. Nothing is printed twice.' },
        { code: 'R3', title: 'The catalogue disappears.', desc: 'Students had no signal there was more. The card now ends with how many other problems are live today, which doubles as the way into the list.' },
        { code: 'R4', title: 'Day one is empty.', desc: 'First run swaps the flame for “Day 1 starts now”, shows the nearest classmate above them instead of the class leader, and hides the progress row entirely until there’s something real in it.' },
      ],
    },

    flowChapters: [
      {
        eyebrow: 'Part 1 of 3',
        title: 'Land, and start within a tap',
        intro: `The homepage has one job and a few seconds to do it. Everything above the
          fold is either the problem, the reason it was picked, or the reason to finish
          it before midnight.`,
        screens: [
          { code: 'H1', title: 'The hero card', desc: 'Today’s problem, its difficulty, the XP it pays, the time it should take and how many classmates have already solved it. Streak, league and total XP sit in the top strip — once each, and never repeated further down the page.' },
          { code: 'H2', title: 'Why this one', desc: 'Three lines of reasoning beside the description: what it builds on, what it strengthens, where it turns up in interviews. Personalisation that can’t be seen may as well not be there.' },
          { code: 'H3', title: 'Language, then go', desc: 'Python, Java or C++ as chips, defaulted to whichever they used last. One primary button, and one line under it naming the deadline instead of implying it.' },
          { code: 'H4', title: 'Standing, below the fold', desc: 'Challenges completed, accuracy, average speed and best rank — four numbers that aren’t already in the top strip — with the class leaderboard alongside and the other three tiers a toggle away.' },
        ],
      },
      {
        eyebrow: 'Part 2 of 3',
        title: 'The work, and the moment it lands',
        intro: `The editor is where the time actually goes, so it gets the screen. Anything
          that isn’t the problem or the code is collapsed, or deferred until it has
          something to say.`,
        screens: [
          { code: 'C1', title: 'The editor', desc: 'Problem, example and constraints in a fixed left column capped at 46 characters; the editor takes everything else, with line numbers, a line-and-column readout and a full-screen toggle. Languages are tabs above the code, not a dropdown in a form.' },
          { code: 'C2', title: 'Run, then submit', desc: 'The console doesn’t exist until the first run. Two empty input and output boxes on arrival told testers nothing and cost a third of the editor’s height.' },
          { code: 'C3', title: 'Failed submission', desc: 'A compile error and a failed test case are different problems and get different screens: one points at a line, the other names the case and what it expected. Both keep the code, and neither costs the attempt.' },
          { code: 'C4', title: 'Cleared', desc: 'XP credits on screen, the flame ticks over, and the rank line updates in place — “+150 XP · Rank 2 in your class”. Then one honest choice: next challenge, or done for today.' },
        ],
      },
      {
        eyebrow: 'Part 3 of 3',
        title: 'Tomorrow, and the day they miss',
        intro: `Everything up to here is the good day. This part is the reason the feature
          retains anybody past week two.`,
        screens: [
          { code: 'R1', title: 'The leaderboard', desc: 'Class, department, college and overall as a toggle, opening on class — the only one of the four that’s winnable this week. League badges sit beside the rank, so standing survives a bad position.' },
          { code: 'R2', title: 'Browse, when they want it', desc: 'The full list, filterable by language, with the personalised problem pinned at the top and still marked as such. Search is there for the student who arrived knowing exactly what they want to drill.' },
          { code: 'R3', title: 'Streak at risk', desc: 'After 9 pm on an unplayed day the flame goes hollow and the hero swaps itself for the shortest problem live today. Urgency should arrive with a smaller ask, not a louder voice.' },
          { code: 'R4', title: 'The day after', desc: '“Life happened. Your 24 days are still yours.” Total and best-ever stay on screen, the new count starts at zero underneath them, and one button offers the repair: two challenges in the next 24 hours puts the streak back where it was.' },
        ],
      },
    ],

    states: [
      { code: 'S1', title: 'Day one', desc: 'No streak, no rank, no history. The flame becomes “Day 1 starts now”, the rank tile shows the nearest classmate above them rather than the class leader, and the progress row stays hidden until it has real numbers in it.' },
      { code: 'S2', title: 'Near miss', desc: 'Six of eight cases passed. The screen leads with what passed, names the failing case and what it expected, and keeps the code intact — because this is the most common outcome of a submission, not an exception to it.' },
      { code: 'S3', title: 'Exam week', desc: 'The academic calendar pauses every streak in the college automatically. Nobody has to remember to spend a freeze during finals, and nothing resets in a week when nobody was supposed to be practising.' },
      { code: 'S4', title: 'Our fault', desc: 'If the judge or the portal is down past midnight, affected streaks repair themselves silently and the student is told afterwards. A streak the product broke was never the student’s to earn back.' },
    ],

    system: {
      components: [
        { title: 'Streak flame', usedIn: 'H1, H3, R3, R4, S1–S4',
          desc: 'Five states: day zero (outline), active (filled, counting), at risk (hollow, after 9 pm), frozen (banded, with freezes remaining) and broken-but-repairable (grey, with the repair window counting down). The number is printed beside it in every state, so nothing depends on colour alone.',
          board: { label: 'Streak flame · five states', ratio: '16 / 7' } },
        { title: 'Challenge card',
          desc: 'One layout, four contexts: home hero, browse row, browse detail and the at-risk swap. Difficulty, XP, time estimate and solved-today count are fixed slots in a fixed order, so they can be scanned the same way every time without being read.' },
        { title: 'Rank row',
          desc: 'Avatar, name, batch, streak, points, league badge. The student’s own row is pinned and highlighted, and the list always renders the two rows directly above them — being 4th is a story about 3rd, not about 1st.' },
        { title: 'League scale',
          desc: 'Five leagues, each with its own badge shape as well as a colour, so standing is readable in greyscale and with the common colour-vision deficiencies. The home strip shows the current league and the XP left to the next one, never the league on its own.',
          scale: [
            { token: 'league/bronze', range: '0–2k XP', hex: '#A8683C' },
            { token: 'league/silver', range: '2–5k', hex: '#9BA3AD' },
            { token: 'league/gold', range: '5–10k', hex: '#E0A32E' },
            { token: 'league/platinum', range: '10–20k', hex: '#6FB6C9' },
            { token: 'league/diamond', range: '20k+', hex: '#8E7BE8' },
          ] },
        { title: 'Editor shell',
          desc: 'Language tabs, line numbers, a line-and-column readout, a full-screen toggle, and a console that appears on the first run and not before. Run and Submit are deliberately unalike: Run is quiet and repeatable, Submit is the one that touches the streak.' },
      ],
      note: 'Type: the portal’s existing Inter for the interface, JetBrains Mono for code, test output and every number that has to line up in a column — XP, ranks, times, streak counts.',
    },

    testing: [
      { title: 'It read like a report card, not a game', desc: 'All three participants said a version of the same sentence. A full dark theme is a design-system conversation rather than a feature decision, so the interim is a dark editor, a darker challenge surface, and the warm accent reserved for the two things being played: the streak and the XP.' },
      { title: 'The numbers were on screen twice', desc: 'XP and streak sat in the top strip and again in the progress row four scrolls down. Two of the four progress tiles were spending space repeating what was already visible. They became accuracy and average speed, which nothing else on the page reported.' },
      { title: 'Four ranks, none of them usable', desc: 'Class #3, department #102, college #812, overall #1912. Participants read the biggest number and stopped. v2 leads with the distance instead — “+80 XP to rank 2nd in your class” — and moves the other three behind the leaderboard toggle.' },
      { title: 'Nobody could say what the points were for', desc: '“How does this actually help me get better?” came up unprompted, twice. XP on its own is a score. Paired with a league and a visible next threshold it becomes a ladder. The league badge and the progress-to-Diamond bar came straight out of that session.' },
      { title: 'The editor was the smallest thing on the editing screen', desc: 'The code area was about a third of the viewport, with no line numbers, no sense of how much had been written, and whitespace in all the places that didn’t need it. It now takes the full width beside a fixed problem column.' },
      { title: 'Empty input and output boxes taught nothing', desc: 'Two labelled boxes sat under the editor before anything had run, reading like fields waiting to be filled. They weren’t. The console now appears on the first run, with the actual result in it.' },
    ],

    impact: [
      { value: 1, suffix: '', decimals: 0, label: 'Tap between landing on the homepage and the first keystroke, down from four' },
      { value: 4.35, suffix: '/5', decimals: 2, label: 'Weighted score for the single-card entry, against 3.00 and 2.70' },
      { value: 7, suffix: '', decimals: 0, label: 'Recovery mechanics mapped for the missed day. Three shipped in v1, none of them paid' },
      { value: 0, suffix: '', decimals: 0, label: 'Screens where a broken streak is a dead end. Every one of them offers a way back' },
    ],

    closing: `The hero card is the part people notice. The screen I’d defend in a review is
      the one nobody is meant to see — the morning after a student misses. Any product
      can celebrate a good run. The ones that keep people are the ones with something
      honest to say on the bad day.`,

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

    /* Per-section label overrides and headings, keyed by section id. */
    sections: {
      problem: { label: 'The Brief' },
      framing: {
        title: 'A streak product has two jobs, and most only build the first',
        intro: `I started by drawing the loop, because it makes the weak link obvious. Four
          of the five steps are about the day a student shows up. The fifth is about the
          day they don’t, and that’s where the drop-off actually happens.`,
      },
      approach: {
        label: 'Principles',
        title: 'Five rules every screen had to pass',
        intro: 'They came out of the framing, and between them they settled most of the arguments that came later.',
      },
      research: {
        title: 'What streak products already know, and what the research says they get wrong',
        intro: `Two questions. Why do people come back to a streak, and what happens the day
          they don’t? I read across Duolingo’s and Snapchat’s public product writing, then
          went to the academic work underneath it — Silverman and Barasch on repair versus
          blame, Lally on how little one missed day actually costs, Polivy and Herman on
          the “what-the-hell” effect. Eighteen patterns made the long list. These six did
          most of the work.`,
      },
      directions: {
        title: 'Three ways to open the homepage',
        intro: `Same brief, same student, three different opinions about what a homepage is
          for: a catalogue, a report, or a single instruction. Each was taken far enough
          that choosing between them was a real decision.`,
      },
      decision: {
        title: 'Scoring against the brief, not against my taste',
        intro: `The brief names cognitive load first, so time to first keystroke carries the
          most weight, alongside personalisation. The scores are expert judgment. A
          prototype test is what confirms them or proves me wrong.`,
      },
      flow: {
        label: 'The Final Flow',
        title: 'Twelve screens, in three parts',
        intro: `Mid-fi wireframes, already through one round of testing. Parts 1 and 2 are
          the good day. Part 3 is the one that decides whether there’s a week two.`,
      },
      states: {
        title: 'The four states that had to be designed, not defaulted',
        intro: `Each of these is a moment where a generic empty state or a red error box
          would quietly cost a student. They get a specific, calm answer instead.`,
      },
      system: {
        title: 'Five components carry the whole feature',
        intro: `Handed over in Figma with anatomy, states and tokens, built on the portal’s
          existing system rather than beside it. The flame got the most detailed spec: it
          appears on more screens than anything else, and it’s wrong on most of them if
          you only draw the happy state.`,
      },
      testing: {
        label: 'Testing & Learnings',
        title: 'Three students, six changes',
        intro: `A small round, deliberately early — enough to catch what was structurally
          wrong before anything got polished. Every finding below moved a pixel. Two of
          them moved the whole layout.`,
      },
      impact: {
        label: 'Outcome',
        title: 'What the design changes',
        intro: 'These are design outcomes, measured against the brief and the first test round. Retention numbers come after it ships.',
      },
      'whats-next': {
        title: 'What I’d test next, and what’s still open',
      },
    },

    next: 'nocturne',
  },

  /* ================================================================ */
  nocturne: {
    slug: 'nocturne',
    title: 'Nocturne',
    subtitle: 'Design System',
    tagline: 'Four brands, one grammar, infinite variation.',
    year: '2023',
    role: 'Design Systems Lead',
    timeline: '7 Months',
    platform: 'Design Tokens · Web · Native',
    team: '2 Designers, 3 Engineers',
    tools: 'Figma, Style Dictionary, Storybook',
    tags: ['Art Direction', 'Systems'],
    gradient: 'linear-gradient(135deg,#c8ff4d,#4d9fff)',
    accent: '#c8ff4d',

    heroScreen: {
      device: 'browser',
      html: `
        <div class="wf-swatch-row" data-anim="tokens">
          <span class="wf-swatch is-active" style="background:#c8ff4d;"></span>
          <span class="wf-swatch" style="background:#ff4d6d;"></span>
          <span class="wf-swatch" style="background:#4d9fff;"></span>
          <span class="wf-swatch" style="background:#f4f3ef;"></span>
        </div>
        <div class="wf-preview-card">
          <span class="wf-bar" style="width:50%;height:14px;"></span>
          <span class="wf-bar" style="width:85%;"></span>
          <span class="wf-bar" style="width:60%;"></span>
          <div class="wf-fakebtn"></div>
        </div>
      `,
    },

    overview: `Nocturne unifies four nightlife and entertainment brands — a ticketing
      app, a streaming radio product, an events platform and a loyalty program —
      under one flexible system, letting each brand keep its own visual voice while
      sharing every component underneath.`,

    problem: {
      copy: `Four teams were rebuilding the same button, the same modal, the same
        date picker four separate times, each slightly different, each slightly
        broken in a different way. Nothing was reusable because nothing was
        designed to be shared in the first place.`,
      quote: `We had four teams solving the same problem badly instead of one team
        solving it well.`,
      attribution: 'VP of Product, internal kickoff',
    },

    approach: [
      { title: 'Grammar, not templates', desc: 'Nocturne defines relationships — spacing ratios, type scale, motion curves — so each brand’s skin can flex without breaking the rhythm underneath.' },
      { title: 'Dark by default', desc: 'Every brand lives in low-light contexts — venues, late-night listening, event nights — so the system was built dark-first, with light mode the exception.' },
      { title: 'Theming via tokens, not forks', desc: 'Brand personality lives in a single token layer on top of one shared component library, so no team maintains its own fork.' },
      { title: 'Motion as identity', desc: 'Where color is constrained by accessibility, motion timing became the main differentiator between each brand’s personality.' },
    ],

    flow: [
      { title: 'Shared primitives', desc: 'Built the atomic layer first — color, type, spacing, elevation, motion — with zero brand-specific decisions baked in.',
        screen: `<div class="wf-swatch-row" style="margin-bottom:0;"><span class="wf-swatch is-active" style="background:#c8ff4d;"></span><span class="wf-swatch" style="background:#4d9fff;"></span><span class="wf-swatch" style="background:#f4f3ef;"></span></div>` },
      { title: 'Component library', desc: 'Forty-two components built once against the primitives, covering 90% of every brand’s existing UI inventory.',
        screen: `<div class="wf-card-grid"><div class="wf-card"><span class="wf-bar" style="width:60%;"></span></div><div class="wf-card"><span class="wf-bar" style="width:60%;"></span></div></div>` },
      { title: 'Brand token layers', desc: 'Each brand overrides a single token file — around 30 values — to fully re-skin the shared components.',
        screen: `<div class="wf-preview-card" style="padding:0.85rem;"><span class="wf-bar" style="width:70%;"></span><div class="wf-fakebtn" style="width:70px;height:22px;margin-top:0.5rem;"></div></div>` },
      { title: 'Native + web parity', desc: 'Tokens compile to both CSS custom properties and native design tokens, keeping all four apps and the web product visually in sync.',
        screen: `<div class="wf-stat"><span class="wf-bar" style="width:45%;"></span><div class="wf-fill"><span style="width:95%;"></span></div></div>` },
    ],

    testing: [
      { title: 'Teams didn’t trust a shared library at first', desc: 'Shipping the ticketing app’s redesign first, visibly faster than any previous cycle, converted the other three teams without a single mandate.' },
      { title: 'Token overrides became de-facto forks', desc: 'A token linter now flags any override outside the approved 30 values in code review, catching drift before it ships.' },
      { title: 'Motion felt inconsistent across platforms', desc: 'Standardizing on a shared, natively-ported easing curve library fixed the last visible seam between native and web.' },
    ],

    impact: [
      { value: 42, suffix: '%', decimals: 0, label: 'Faster feature ship time across brands' },
      { value: 90, suffix: '%', decimals: 0, label: 'Of existing UI inventory covered by 42 shared components' },
      { value: 4, suffix: '', decimals: 0, label: 'Brands unified under one design grammar' },
    ],

    closing: `Two years on, launching a fifth brand took three weeks instead of
      three months — Nocturne's token layer meant the new brand only had to decide
      what made it different, not rebuild everything from zero.`,

    next: 'aurora',
  },

};
