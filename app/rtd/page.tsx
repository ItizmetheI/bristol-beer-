import type { Metadata } from "next";
import Image from "next/image";
import { rtds } from "@/lib/data";
import AddToOrderButton from "@/components/AddToOrderButton";
import { SITE_NAME } from "@/lib/site";

const title = `Canned cocktails, ready now — ${SITE_NAME}`;
const description = `${rtds.length} ready-to-drink canned cocktails and hard seltzers in the cold aisle. Bristol, PA.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

export default function RtdPage() {
  return (
    <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,72px)] pb-30 pt-33">
      <div className="kicker">Cold aisle</div>
      <h1 className="mt-3.5 max-w-[15ch] text-[clamp(38px,6.4vw,80px)] font-bold leading-[0.94] tracking-[-0.05em] text-[var(--color-text)]">Canned cocktails, ready now.</h1>
      <div className="mt-8.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {rtds.map((r) => (
          <div key={r.slug} className="flex flex-col rounded-[18px] border border-[var(--border-soft)] bg-[var(--color-surface)] p-3.5 transition-transform duration-500 ease-out hover:-translate-y-1.5">
            <div className="relative h-[200px] w-full overflow-hidden rounded-xl bg-[var(--color-surface-alt)]">
              <Image src={r.img} alt={r.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" />
            </div>
            <div className="mt-3.5 flex items-baseline justify-between">
              <div className="text-[15.5px] font-semibold text-[var(--color-text)]">{r.name}</div>
              <div className="text-xs text-[var(--text-muted)]">{r.abv}</div>
            </div>
            <div className="mt-1 flex items-baseline justify-between">
              <div className="text-[12.5px] text-[var(--text-muted)]">{r.kind}</div>
              <div className="text-sm font-semibold text-[var(--color-text)]">${r.price.toFixed(2)}</div>
            </div>
            <p className="mt-2 flex-1 text-[12px] leading-relaxed text-[var(--text-muted)]">{r.description}</p>
            <div className="mt-3.5">
              <AddToOrderButton id={`rtd-${r.slug}`} name={r.name} size="single can" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
