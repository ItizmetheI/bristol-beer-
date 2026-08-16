"use client";

import { useOrder } from "@/lib/order-context";

export default function AddToOrderButton({ id, name, size, compact = false }: { id: string; name: string; size: string; compact?: boolean }) {
  const { items, addItem, setQty } = useOrder();
  const existing = items.find((i) => i.id === id);

  if (existing) {
    return (
      <div className={`flex items-center gap-1.5 rounded-[12px] border border-[var(--border)] bg-[var(--color-surface-alt)] ${compact ? "px-1.5 py-1" : "px-2 py-1.5"}`}>
        <button
          aria-label={`Remove one ${name}`}
          onClick={() => setQty(id, existing.qty - 1)}
          className="flex h-6 w-6 items-center justify-center rounded-md text-[var(--color-text)] hover:bg-[var(--border-soft)]"
        >
          −
        </button>
        <span className="min-w-[1.5ch] text-center text-sm font-semibold text-[var(--color-text)]">{existing.qty}</span>
        <button
          aria-label={`Add one more ${name}`}
          onClick={() => addItem({ id, name, size })}
          className="flex h-6 w-6 items-center justify-center rounded-md text-[var(--color-text)] hover:bg-[var(--border-soft)]"
        >
          +
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => addItem({ id, name, size })}
      className={`rounded-[12px] border border-[var(--border)] bg-[var(--color-surface-alt)] font-medium text-[var(--color-text)] transition hover:border-[var(--color-orange)] ${
        compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
      }`}
    >
      {compact ? "Add" : "Add to order"}
    </button>
  );
}
