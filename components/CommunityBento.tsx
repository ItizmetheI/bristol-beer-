import { reviews, brands } from "@/lib/data";
import Reveal from "./Reveal";

const REASONS = [
  { num: "01", title: "Deep shelves, fast turnover", copy: "If it's on the wall it's fresh. If it isn't, we can usually have it in by the end of the week." },
  { num: "02", title: "Domestic, import, craft & malt", copy: "Cold boxes up front, cases stocked deep in back, everything from lagers to hard seltzers." },
  { num: "03", title: "Six slush machines", copy: "Cups or growlers, flavors that turn over with the season." },
  { num: "04", title: "Right on Route 13", copy: "By the Golden Eagle Diner. Parking out front, cases carried out." },
];

function ReviewCard({ name, quote, featured }: { name: string; quote: string; featured?: boolean }) {
  return (
    <div className={`flex flex-col rounded-[18px] border border-[var(--border-soft)] bg-[var(--color-surface)] ${featured ? "sm:row-span-2 justify-center p-6.5" : "p-5"}`}>
      <div className="text-[12px] tracking-[2px] text-[var(--amber)]">★★★★★</div>
      <p className={`mt-2 flex-1 text-[var(--text-muted)] ${featured ? "text-lg leading-snug tracking-tight text-[var(--color-text)]" : "text-sm leading-relaxed"}`}>{quote}</p>
      <div className="mt-4 flex items-center gap-2.5 border-t border-[var(--border-soft)] pt-3.5">
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--color-orange)] text-xs font-bold text-white">
          {name.trim().charAt(0).toUpperCase()}
        </div>
        <div className="min-w-0">
          <div className="text-xs font-semibold text-[var(--color-text)]">{name}</div>
          <div className="text-[10px] text-[var(--text-faint)]">Google review</div>
        </div>
      </div>
    </div>
  );
}

export default function CommunityBento() {
  const [first, ...rest] = reviews.slice(0, 3);

  return (
    <section className="section">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <Reveal className="md:col-span-5 md:row-span-2">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text)]">Built around the wall, not a website</h2>
          <div className="mt-6 border-t border-[var(--border-soft)]">
            {REASONS.map((r) => (
              <div key={r.num} className="grid grid-cols-[40px_1fr] gap-x-5 gap-y-1 border-b border-[var(--border-soft)] py-5.5">
                <span className="pt-0.5 font-mono text-xs font-semibold text-[var(--color-orange)]">{r.num}</span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-[var(--color-text)]">{r.title}</h3>
                  <p className="mt-1.5 max-w-[48ch] text-[13.5px] leading-relaxed text-[var(--text-muted)]">{r.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-7">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text)]">What people are saying</h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1.3fr_1fr] sm:grid-rows-2">
            <ReviewCard name={first.name} quote={first.quote} featured />
            {rest.map((r) => (
              <ReviewCard key={r.name} name={r.name} quote={r.quote} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text)]">Brands we carry</h2>
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2.5 border-b border-[var(--border-soft)] pb-7">
            {brands.map((b) => (
              <span key={b} className="cursor-default text-[clamp(18px,2.6vw,26px)] font-bold tracking-tight text-[var(--text-muted)] transition-colors hover:text-[var(--color-text)]">
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
