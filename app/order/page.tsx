"use client";

import Link from "next/link";
import { useOrder } from "@/lib/order-context";

export default function OrderPage() {
  const { items, setQty, removeItem, clear, count } = useOrder();

  const summary = items.map((i) => `${i.qty}x ${i.name} (${i.size})`).join(", ");
  const smsHref = `sms:2674482337?body=${encodeURIComponent(`Hi, I'd like to order-ahead: ${summary}. Can you have it ready?`)}`;

  return (
    <div className="mx-auto max-w-[760px] px-[clamp(20px,5vw,72px)] pb-30 pt-33">
      <div className="kicker">Order ahead</div>
      <h1 className="mt-3.5 text-[clamp(32px,5vw,56px)] font-bold leading-[0.98] tracking-[-0.04em] text-[var(--color-text)]">Your list.</h1>
      <p className="mt-3.5 max-w-[52ch] text-base leading-relaxed text-[var(--text-muted)]">
        This isn&apos;t checkout, we don&apos;t take payment online. Build your list, then call or text it in and we&apos;ll have it waiting at the register.
      </p>

      {items.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-[var(--border)] p-9 text-center">
          <p className="text-[var(--text-muted)]">Nothing on the list yet.</p>
          <Link href="/shop" className="mt-3.5 inline-block text-sm font-semibold text-[var(--color-orange)]">
            Browse the wall →
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-8 divide-y divide-[var(--border-soft)] border-y border-[var(--border-soft)]">
            {items.map((i) => (
              <div key={i.id} className="flex items-center justify-between gap-4 py-4">
                <div>
                  <div className="font-semibold text-[var(--color-text)]">{i.name}</div>
                  <div className="text-xs text-[var(--text-muted)]">{i.size}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-[12px] border border-[var(--border)] bg-[var(--color-surface-alt)] px-2 py-1.5">
                    <button onClick={() => setQty(i.id, i.qty - 1)} aria-label={`Remove one ${i.name}`} className="flex h-6 w-6 items-center justify-center rounded-md hover:bg-[var(--border-soft)]">
                      −
                    </button>
                    <span className="min-w-[1.5ch] text-center text-sm font-semibold">{i.qty}</span>
                    <button onClick={() => setQty(i.id, i.qty + 1)} aria-label={`Add one more ${i.name}`} className="flex h-6 w-6 items-center justify-center rounded-md hover:bg-[var(--border-soft)]">
                      +
                    </button>
                  </div>
                  <button onClick={() => removeItem(i.id)} aria-label={`Remove ${i.name} from list`} className="text-sm text-[var(--text-faint)] hover:text-[var(--color-text)]">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-[var(--text-muted)]">
              {count} item{count === 1 ? "" : "s"} on the list
            </div>
            <button onClick={clear} className="text-sm text-[var(--text-faint)] hover:text-[var(--color-text)]">
              Clear list
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href="tel:2674482337" className="rounded-[15px] bg-[var(--color-orange)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_26px_-12px_rgba(226,96,42,.6)] transition hover:-translate-y-0.5 hover:bg-[var(--color-orange-dark)]">
              Call to confirm
            </a>
            <a href={smsHref} className="rounded-[15px] border border-[var(--border)] bg-[var(--color-surface-alt)] px-6 py-3.5 text-sm font-medium text-[var(--color-text)]">
              Text this list
            </a>
          </div>
        </>
      )}
    </div>
  );
}
