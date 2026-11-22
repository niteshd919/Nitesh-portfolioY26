/* ==================================================================
   EV-charging cover — the plan behind a day of smart charging. Pure:
   the hero's JSX draws the scene from it, caseStudy.js plays it.

   A playhead runs the clock across the tariff; the car waits through
   the peak, charges only in the cheap window and drives off in the
   morning, and the status card, battery, energy streaks and the glow
   on the centre screen all follow along.
   ================================================================== */
const pad = (n) => String(n).padStart(2, '0');

export function chargePlan(cfg) {
  const slots = cfg.slots;
  const cheapest = Math.min(...slots.map((s) => s.price));
  const priciest = Math.max(...slots.map((s) => s.price));
  const isCheap = (s) => s.price === cheapest;
  const slotAt = (t) => slots.find((s) => t >= s.from && t < s.to) || slots[slots.length - 1];
  const [leave, home] = cfg.away;
  const isAway = (t) => t >= leave && t < home;
  const hh = (t) => {
    const m = Math.round((((t % 24) + 24) % 24) * 60);
    return `${pad(Math.floor(m / 60) % 24)}:${pad(m % 60)}`;
  };

  // The cheap window, joined across midnight (e.g. 22:00 → 06:00).
  const n = slots.length;
  const cheapIdx = slots.map((s, i) => (isCheap(s) ? i : -1)).filter((i) => i >= 0);
  const winStart = slots[cheapIdx.find((i) => !isCheap(slots[(i - 1 + n) % n]))].from;
  const winEnd = slots[cheapIdx.find((i) => !isCheap(slots[(i + 1) % n]))].to;

  // Battery over the day in 15-minute steps: home at `low`, full by the
  // end of the cheap window, back down to `low` after the drive.
  const steps = 96;
  let chargeSteps = 0;
  let awaySteps = 0;
  for (let i = 0; i < steps; i++) {
    const t = i / 4;
    if (isAway(t)) awaySteps++;
    else if (isCheap(slotAt(t))) chargeSteps++;
  }
  const levels = [];
  let b = cfg.low;
  for (let k = 0; k < steps; k++) {
    const i = (home * 4 + k) % steps;
    levels[i] = b;
    const t = i / 4;
    if (isAway(t)) b -= (100 - cfg.low) / awaySteps;
    else if (isCheap(slotAt(t))) b = Math.min(100, b + (100 - cfg.low) / chargeSteps);
  }
  const battery = (t) => {
    const i = Math.floor(t * 4) % steps;
    return levels[i] + (levels[(i + 1) % steps] - levels[i]) * (t * 4 - Math.floor(t * 4));
  };
  const stateAt = (t) => {
    if (isAway(t)) return 'away';
    if (battery(t) >= 99.5) return 'full';
    return isCheap(slotAt(t)) ? 'charging' : 'waiting';
  };
  const copy = {
    waiting: (s) => ['Waiting', `${s.price} ct/kWh now · charges from ${hh(winStart)}`],
    charging: (s) => ['Charging', `${s.price} ct/kWh · cheapest rate`],
    full: () => ['Charged', `Ready by ${hh(leave)}`],
    away: () => ['Unplugged', 'Out on the road'],
  };

  // Energy streaks: five lanes, one each side.
  const lanes = [[22, 2.1, 0.2], [36, 1.7, 1.1], [50, 2.4, 0.6], [64, 1.9, 1.5], [78, 2.2, 0.9]]
    .flatMap(([top, dur, delay], i) => ['is-left', 'is-right'].map((side, j) => ({
      side,
      style: { top: `${top + j * 6}%`, '--d': `${dur + j * 0.3}s`, '--delay': `-${delay + i * 0.37 + j * 0.8}s` },
    })));
  const tone = (s) => (isCheap(s) ? 'is-cheap' : s.price === priciest ? 'is-peak' : 'is-mid');

  return {
    slots, cheapest, priciest, leave, home, winStart, winEnd,
    hh, battery, stateAt, slotAt, copy, lanes, tone,
    // Without motion, one still frame mid-charge tells the same story.
    still: winStart + 1.5,
  };
}
