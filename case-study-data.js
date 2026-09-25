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
          { code: 'F1', title: 'Intro', desc: 'Sets expectations up front: three questions, and have your bill ready. The bar at the top previews the goal. Flat tariffs get an exit right here: “My price never changes”.' },
          { code: 'F2', title: 'Does your price change during the year?', desc: 'A yes/no question instead of an empty form. Answer “No” and the next screen disappears.' },
          { code: 'F3', title: 'Two start dates split the year', desc: 'Only the start dates are editable, as day and month. The ends fill themselves in, New Year wrap and 29 February included. Period names are editable too.' },
          { code: 'F4', title: 'Days as two groups', desc: 'One tap moves a day between groups, and every day always belongs to exactly one. “Mon, Fri, Sat” works as well as “Mon – Thu”.' },
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

    next: 'ferro',
  },

  /* ================================================================ */
  ferro: {
    slug: 'ferro',
    title: 'Ferro',
    subtitle: 'E-commerce Platform',
    tagline: 'A marketplace that sells the maker, not just the product.',
    year: '2024',
    role: 'Product Designer',
    timeline: '6 Months',
    platform: 'Web · Responsive',
    team: '3 Designers, 6 Engineers, 2 PMs',
    tools: 'Figma, Webflow, Framer',
    tags: ['UI / UX', 'Web'],
    gradient: 'linear-gradient(135deg,#4d9fff,#1a1a1a)',
    accent: '#4d9fff',

    heroScreen: {
      device: 'browser',
      html: `
        <div class="wf-nav">
          <span class="wf-dot"></span>
          <span class="wf-bar" style="width:130px;border-radius:999px;flex:1;margin-left:0.5rem;"></span>
          <span class="wf-bar wf-nav-cta" style="margin-left:0.5rem;"></span>
        </div>
        <div class="wf-list-row" style="border-top:none;padding-top:0;">
          <span class="wf-dot" style="width:34px;height:34px;"></span>
          <div class="wf-lines"><span class="wf-bar" style="width:100px;"></span><span class="wf-bar" style="width:64px;"></span></div>
        </div>
        <div class="wf-card-grid" data-anim="cards">
          <div class="wf-card"><div class="wf-thumb"></div><span class="wf-bar" style="width:70%;"></span><span class="wf-bar"></span></div>
          <div class="wf-card"><div class="wf-thumb"></div><span class="wf-bar" style="width:70%;"></span><span class="wf-bar"></span></div>
        </div>
      `,
    },

    overview: `Ferro connects independent metal and woodworkers — bladesmiths, furniture
      makers, tool restorers — directly with buyers who care who made the thing
      they're holding. My job was to design a marketplace that felt like a
      workshop, not a warehouse.`,

    problem: {
      copy: `Existing marketplaces treated every maker as a storefront template: same
        grid, same "Buy Now," same stock-photo conventions. Buyers couldn't tell a
        first-time hobbyist from a smith with twenty years at the forge, and makers
        had no way to show the process behind the price.`,
      quote: `People aren't just buying a knife from me, they're buying forty hours in
        the forge. Your website should let them see that.`,
      attribution: 'Bladesmith, early Ferro seller',
    },

    approach: [
      { title: 'Process over product', desc: 'Every listing supports a "making of" sequence — process photos and a note from the maker sit above the fold, not buried in a tab.' },
      { title: 'Maker-first hierarchy', desc: 'Search and browse surface the maker’s name and shop as prominently as the item, reversing the usual marketplace order.' },
      { title: 'Honest imperfection', desc: 'No forced white-background photography — natural, workshop-lit photos are the default template, matching how the goods are actually made.' },
      { title: 'Trust through transparency', desc: 'Lead times, material sourcing and commission queues are shown plainly on every shop page instead of hidden until checkout.' },
    ],

    flow: [
      { title: 'Shop setup', desc: 'Makers build a shop page in under ten minutes, importing existing Instagram posts as a starting gallery.',
        screen: `<div class="wf-list-row" style="border-top:none;padding:0;"><span class="wf-dot" style="width:34px;height:34px;"></span><div class="wf-lines"><span class="wf-bar"></span><span class="wf-bar"></span></div></div>` },
      { title: 'Listing with process', desc: 'A guided listing flow prompts for at least one in-progress photo, turning craft documentation into the norm rather than the exception.',
        screen: `<div class="wf-card"><div class="wf-thumb"></div><span class="wf-bar is-accent" style="width:50%;"></span></div>` },
      { title: 'Discovery', desc: 'Browse and search are organized by material and technique first, category second — the way makers and enthusiasts actually think about the work.',
        screen: `<div class="wf-card-grid"><div class="wf-card"><div class="wf-thumb"></div></div><div class="wf-card"><div class="wf-thumb"></div></div></div>` },
      { title: 'Checkout & commission queue', desc: 'Custom orders route into a visible queue with realistic lead times, replacing the DM-based chaos most makers were using before.',
        screen: `<div class="wf-stat"><span class="wf-bar" style="width:50%;"></span><div class="wf-fill"><span style="width:55%;"></span></div></div>` },
    ],

    testing: [
      { title: 'Buyers skipped the process photos', desc: 'Moving the "making of" sequence above the price, not below, increased average time-on-listing by 40%.' },
      { title: 'New makers felt intimidated', desc: 'A simple "shop since" badge, not a review score, reduced the pressure to look established from day one.' },
      { title: 'Commission requests got lost in DMs', desc: 'The visible queue turned an invisible backlog into a trust signal — buyers now wait longer, happily, because they can see their place in line.' },
    ],

    impact: [
      { value: 68, suffix: '%', decimals: 0, label: 'Increase in average order value' },
      { value: 2.4, suffix: 'x', decimals: 1, label: 'More listings viewed per session' },
      { value: 1200, suffix: '+', decimals: 0, label: 'Independent makers onboarded in year one' },
    ],

    closing: `Ferro now hosts over a thousand independent makers, and the "making of"
      sequence — originally a hard sell internally — is the single most-viewed part
      of every listing page.`,

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
