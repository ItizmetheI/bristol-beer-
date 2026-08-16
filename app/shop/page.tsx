import Link from "next/link";
import Image from "next/image";
import { categories, products } from "@/lib/data";

export default function ShopIndexPage() {
  return (
    <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,72px)] pb-30 pt-33">
      <div className="kicker">{products.length} lines in stock</div>
      <h1 className="mt-3.5 text-[clamp(38px,6.4vw,80px)] font-bold leading-[0.94] tracking-[-0.05em] text-[var(--color-text)]">Shop the wall.</h1>

      <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3">
        {categories.map((c, i) => {
          const items = products.filter((p) => p.category === c.slug);
          const cover = items[0];
          const featured = i === 0;
          return (
            <Link
              key={c.slug}
              href={`/shop/${c.slug}`}
              className={`group relative flex min-h-[150px] flex-col justify-end overflow-hidden rounded-3xl border border-[var(--border-soft)] p-6 ${
                featured ? "h-[320px] md:col-span-2 md:row-span-3 md:h-auto" : ""
              }`}
            >
              {cover && <Image src={cover.img} alt="" fill sizes={featured ? "66vw" : "34vw"} className="object-cover transition-transform duration-700 group-hover:scale-105" />}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
              <div className="relative z-10">
                <div className={`font-bold tracking-tight text-white ${featured ? "text-4xl" : "text-2xl"}`}>{c.label}</div>
                <div className={`mt-1 text-white/70 ${featured ? "max-w-[38ch] text-base" : "text-sm"}`}>
                  {items.length} lines · {c.blurb}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <p className="mt-9 text-[13px] text-[var(--text-faint)]">Stock rotates weekly. Call for anything you don&apos;t see.</p>
    </div>
  );
}
