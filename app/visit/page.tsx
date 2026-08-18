import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

const title = `Find us, call us — ${SITE_NAME}`;
const description = "2664 Bristol Pike, Bristol, PA 19007. Mon–Sat 9AM–9PM, Sunday 9AM–7PM. (267) 448-2337.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,72px)] pb-30 pt-33">
      <h1 className="text-[clamp(38px,6.4vw,80px)] font-bold leading-[0.94] tracking-[-0.05em] text-[var(--color-text)]">Find us, call us.</h1>
      <div className="mt-10.5 grid grid-cols-1 gap-8.5 lg:grid-cols-2">
        <div>
          <div className="grid max-w-[440px] overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--color-surface)] text-sm">
            <div className="flex justify-between px-4.5 py-4">
              <span className="text-[var(--color-text)]">Mon – Sat</span>
              <span className="text-[var(--text-muted)]">9AM – 9PM</span>
            </div>
            <div className="flex justify-between border-t border-[var(--border-soft)] px-4.5 py-4">
              <span className="text-[var(--color-text)]">Sunday</span>
              <span className="text-[var(--text-muted)]">9AM – 7PM</span>
            </div>
            <div className="flex justify-between border-t border-[var(--border-soft)] px-4.5 py-4">
              <span className="text-[var(--color-text)]">Address</span>
              <span className="text-[var(--text-muted)]">2664 Bristol Pike</span>
            </div>
            <div className="flex justify-between border-t border-[var(--border-soft)] px-4.5 py-4">
              <span className="text-[var(--color-text)]">Phone</span>
              <span className="text-[var(--text-muted)]">(267) 448-2337</span>
            </div>
          </div>
          <div className="mt-6.5 flex flex-wrap gap-2.5">
            <a href="tel:2674482337" className="rounded-[15px] bg-[var(--color-orange)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_26px_-12px_rgba(226,96,42,.6)] transition hover:-translate-y-0.5 hover:bg-[var(--color-orange-dark)]">
              Call the store
            </a>
            <a href="https://maps.google.com/?q=2664+Bristol+Pike+Bristol+PA+19007" className="rounded-[15px] border border-[var(--border)] bg-[var(--color-surface-alt)] px-6 py-3.5 text-sm font-medium text-[var(--color-text)]">
              Open in Maps
            </a>
          </div>
        </div>
        <iframe
          className="min-h-[380px] w-full rounded-2xl border border-[var(--border-soft)] bg-[#11151d]"
          title="Map to Bristol Beer Co., 2664 Bristol Pike, Bristol, PA 19007"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=2664+Bristol+Pike,+Bristol,+PA+19007&output=embed"
        />
      </div>
    </div>
  );
}
