import Reveal from "./Reveal";

export default function VisitCard() {
  return (
    <section className="section pb-[clamp(80px,12vh,140px)]">
      <Reveal className="overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--color-surface)]">
        <div className="grid items-center gap-[clamp(24px,4vw,44px)] p-[clamp(24px,4vw,46px)] sm:grid-cols-2">
          <div>
            <div className="kicker">Come by</div>
            <h2 className="section-title mt-3">2664 Bristol Pike</h2>
            <p className="mt-3.5 max-w-[40ch] text-base leading-relaxed text-[var(--text-muted)]">
              Bristol, PA 19007. On Route 13 by the Golden Eagle Diner. Parking out front, cases carried out.
            </p>
            <div className="mt-6 max-w-[400px] overflow-hidden rounded-2xl border border-[var(--border-soft)] text-sm">
              <div className="flex justify-between bg-[var(--color-surface-alt)] px-4.5 py-3.5">
                <span className="text-[var(--color-text)]">Mon – Sat</span>
                <span className="text-[var(--text-muted)]">9AM – 9PM</span>
              </div>
              <div className="flex justify-between border-t border-[var(--border-soft)] px-4.5 py-3.5">
                <span className="text-[var(--color-text)]">Sunday</span>
                <span className="text-[var(--text-muted)]">9AM – 7PM</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a href="tel:2674482337" className="rounded-[15px] bg-[var(--color-orange)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_26px_-12px_rgba(226,96,42,.6)] transition hover:-translate-y-0.5 hover:bg-[var(--color-orange-dark)]">
                (267) 448-2337
              </a>
              <a href="https://maps.google.com/?q=2664+Bristol+Pike+Bristol+PA+19007" className="rounded-[15px] border border-[var(--border)] bg-[var(--color-surface-alt)] px-6 py-3.5 text-sm font-medium text-[var(--color-text)]">
                Directions
              </a>
            </div>
          </div>
          <iframe
            className="min-h-[340px] w-full rounded-2xl border-0 border border-[var(--border-soft)] bg-[#11151d]"
            title="Map to Bristol Beer Co., 2664 Bristol Pike, Bristol, PA 19007"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=2664+Bristol+Pike,+Bristol,+PA+19007&output=embed"
          />
        </div>
      </Reveal>
    </section>
  );
}
