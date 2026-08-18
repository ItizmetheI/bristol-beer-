import type { Metadata } from "next";
import Image from "next/image";
import { slushes } from "@/lib/data";
import { SITE_NAME } from "@/lib/site";

const title = `The slush wall — ${SITE_NAME}`;
const description = `Six machines, ${slushes.length} flavors, cups or growlers. Only at Bristol Beer Co.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

export default function SlushPage() {
  return (
    <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,72px)] pb-30 pt-33">
      <div className="kicker text-[var(--color-orange)]">Only at Bristol</div>
      <h1 className="mt-3.5 max-w-[15ch] text-[clamp(38px,6.4vw,80px)] font-bold leading-[0.94] tracking-[-0.05em] text-[var(--color-text)]">Frozen, spun, poured cold.</h1>
      <div className="mt-8.5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {slushes.map((s) => (
          <div key={s.no} className="overflow-hidden rounded-[18px] border border-[var(--border-soft)] bg-[var(--color-surface)] transition-transform duration-500 ease-out hover:-translate-y-1.5">
            <div className="relative h-[210px] w-full bg-[#241811]">
              <Image src={s.img} alt={`${s.name} slush`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="p-5">
              <div className="font-mono text-[11px] font-semibold text-[var(--color-orange)]">{s.no}</div>
              <div className="mt-2 text-[17px] font-semibold tracking-tight text-[var(--color-text)]">{s.name}</div>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-muted)]">{s.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
