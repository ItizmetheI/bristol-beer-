import Image from "next/image";
import { categories, products } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[940px] px-[clamp(20px,5vw,72px)] pb-30 pt-33">
      <h1 className="max-w-[18ch] text-[clamp(34px,5.6vw,70px)] font-bold leading-[0.96] tracking-[-0.05em] text-[var(--color-text)]">
        A neighborhood distributor on Route 13.
      </h1>
      <div className="mt-11 grid grid-cols-1 gap-8.5 lg:grid-cols-2">
        <div className="grid gap-4 text-[17px] leading-relaxed text-[var(--text-muted)]">
          <p>Bristol Beer Company is a traditional neighborhood beverage distributor along Bristol Pike in Bristol, Pennsylvania, the local stop for stocking up on domestic cases, imports, craft brews and malt beverages.</p>
          <p>Shelves are deep and turnover is fast. If it&apos;s on the wall it&apos;s fresh, and if it isn&apos;t we can usually have it in by the end of the week.</p>
          <p>Cold boxes up front, cases in back, slush machines by the register.</p>
        </div>
        <div className="relative min-h-[330px] overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[#11151d]">
          <Image src="/images/store-interior.jpg" alt="Beverage store aisle stocked with cases" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
      </div>
      <div className="mt-8.5 grid grid-cols-2 gap-2.5 overflow-hidden rounded-[18px] border border-[var(--border-soft)] bg-[var(--color-surface)] sm:grid-cols-4">
        {categories.map((c) => {
          const count = products.filter((p) => p.category === c.slug).length;
          return (
            <div key={c.slug} className="border-r border-[var(--border-soft)] p-4.5 last:border-r-0">
              <div className="text-[26px] font-bold tracking-tight text-[var(--color-text)]">{count}</div>
              <div className="mt-1 text-xs text-[var(--text-muted)]">{c.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
