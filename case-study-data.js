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

    next: 'monolith',
  },

  /* ================================================================ */
  monolith: {
    slug: 'monolith',
    title: 'Monolith',
    subtitle: 'Brand Identity System',
    tagline: 'One mark, eleven products, zero confusion.',
    year: '2024',
    role: 'Brand & Design Lead',
    timeline: '4 Months',
    platform: 'Guidelines · Web · Product UI',
    team: '1 Strategist, 1 Motion Designer, Me',
    tools: 'Figma, Notion, Zeroheight',
    tags: ['Branding', 'Identity'],
    gradient: 'linear-gradient(135deg,#ff4d6d,#1a1a1a)',
    accent: '#ff4d6d',

    heroScreen: {
      device: 'browser',
      html: `
        <div class="wf-nav">
          <span class="wf-dot"></span>
          <span class="wf-bar" style="width:36px;"></span>
          <span class="wf-bar" style="width:36px;"></span>
          <span class="wf-bar" style="width:36px;"></span>
        </div>
        <span class="wf-bar is-accent" style="width:52%;height:34px;margin-bottom:1.4rem;"></span>
        <div class="wf-swatch-row" data-anim="swatches">
          <span class="wf-swatch is-active" style="background:#c8ff4d;"></span>
          <span class="wf-swatch" style="background:#ff4d6d;"></span>
          <span class="wf-swatch" style="background:#4d9fff;"></span>
          <span class="wf-swatch" style="background:#f4f3ef;"></span>
          <span class="wf-swatch" style="background:#8a8a86;"></span>
        </div>
        <div class="wf-card-grid">
          <div class="wf-card"><span class="wf-bar" style="width:60%;"></span><span class="wf-bar" style="width:40%;"></span></div>
          <div class="wf-card"><span class="wf-bar" style="width:60%;"></span><span class="wf-bar" style="width:40%;"></span></div>
        </div>
      `,
    },

    overview: `Monolith had grown through five acquisitions into eleven products with
      eleven different logos, color systems and tones of voice. Engineering joked
      that customers couldn't tell if they were still buying from the same company.
      I led the identity system that folded all eleven into one coherent brand —
      without asking a single product team to rebuild its UI from scratch.`,

    problem: {
      copy: `Every acquired product kept its old brand "to protect the customers who
        already trust it," which meant the sales team needed four different slide
        decks to describe one platform. Trust wasn't being protected — it was being
        diluted, one inconsistent login screen at a time.`,
      quote: `I've been a customer for six years and I only just found out these are
        all the same company.`,
      attribution: 'Enterprise customer, exit interview',
    },

    approach: [
      { title: 'The wordmark does the work', desc: 'No icon to translate across eleven favicons and app tiles — typography alone carries the identity.' },
      { title: 'One shared token system', desc: 'Color, spacing and type became design tokens every product team pulls from, so consistency compounds instead of needing enforcement.' },
      { title: 'Inherited, not replaced', desc: 'Each product kept its functional accent color as a "signal" hue, so long-time users still recognized their tool at a glance.' },
      { title: 'Built to be ignored', desc: 'Guidelines ship as a Figma library and a linted CSS package — adoption needed to be easier than the old habit, not just prettier.' },
    ],

    flow: [
      { title: 'Audit', desc: 'Catalogued 11 logos, 34 shades of blue and 6 heading fonts across the product suite before a single new asset was drawn.',
        screen: `<div class="wf-swatch-row" style="margin-bottom:0;"><span class="wf-swatch is-active" style="background:#c8ff4d;"></span><span class="wf-swatch" style="background:#ff4d6d;"></span><span class="wf-swatch" style="background:#4d9fff;"></span><span class="wf-swatch" style="background:#8a8a86;"></span></div>` },
      { title: 'The mark', desc: 'A single geometric wordmark built on a modular grid, tested for legibility down to a 16px favicon.',
        screen: `<span class="wf-bar is-accent" style="width:60%;height:24px;"></span>` },
      { title: 'Token library', desc: 'Color, type and spacing shipped as versioned design tokens, consumed directly by each product’s codebase.',
        screen: `<div class="wf-card"><span class="wf-bar" style="width:65%;"></span><span class="wf-bar" style="width:45%;"></span></div>` },
      { title: 'Rollout kit', desc: 'A self-serve migration kit let product teams adopt the system on their own timeline, tracked on a public dashboard.',
        screen: `<div class="wf-stat"><span class="wf-bar" style="width:45%;"></span><div class="wf-fill"><span style="width:82%;"></span></div></div>` },
    ],

    testing: [
      { title: 'Teams resisted a hard cutover', desc: 'Making the token package additive — old classes kept working — took adoption from mandate to opt-in, and every team switched within two quarters.' },
      { title: 'The wordmark read as "too corporate"', desc: 'Pairing it with each product’s inherited accent color kept enough personality that internal pushback dropped after the second review.' },
      { title: 'Guidelines went unread', desc: 'Replacing the 80-page PDF with a linked Figma + Notion pair tripled usage of the brand kit.' },
    ],

    impact: [
      { value: 100, suffix: '%', decimals: 0, label: 'Of products migrated within two quarters' },
      { value: 3, suffix: 'x', decimals: 0, label: 'Increase in brand guideline usage' },
      { value: 27, suffix: '%', decimals: 0, label: 'Lift in sales deck-to-close rate' },
    ],

    closing: `Eighteen months on, Monolith's own team refers to the rebrand as "the
      thing that finally let us stop explaining ourselves." The system now onboards
      new acquisitions in weeks, not years.`,

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
