const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function hoursToday(now: Date) {
  const d = now.getDay();
  return { name: DAY_NAMES[d], open: 9, close: d === 0 ? 19 : 21, label: d === 0 ? "9–7" : "9–9" };
}

export function openState(now: Date) {
  const h = hoursToday(now);
  const cur = now.getHours() + now.getMinutes() / 60;
  if (cur >= h.open && cur < h.close) {
    const left = h.close - cur;
    const hrs = Math.floor(left);
    const mins = Math.round((left - hrs) * 60);
    const rem = hrs >= 1 ? `${hrs}h ${mins}m` : `${mins} min`;
    return { dot: "#30d158", line: `Open now · closes in ${rem} · 2664 Bristol Pike` };
  }
  return { dot: "#ff9f0a", line: `Closed · opens 9AM ${cur >= h.close ? "tomorrow" : "today"} · 2664 Bristol Pike` };
}
