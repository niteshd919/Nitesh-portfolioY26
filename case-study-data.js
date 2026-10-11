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
    year: '2026',
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

    next: 'aurora',
  },

};
