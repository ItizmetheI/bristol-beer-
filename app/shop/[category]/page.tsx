import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { categories, products, type CategorySlug } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import AddToOrderButton from "@/components/AddToOrderButton";
import { SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const meta = categories.find((c) => c.slug === category);
  if (!meta) return {};
  const title = `${meta.label} — ${SITE_NAME}`;
  return {
    title,
    description: meta.blurb,
    openGraph: { title, description: meta.blurb, type: "website" },
    twitter: { card: "summary", title, description: meta.blurb },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const meta = categories.find((c) => c.slug === category);
  if (!meta) notFound();

  const items = products.filter((p) => p.category === (category as CategorySlug));
  const [pick, ...rest] = items;

  return (
    <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,72px)] pb-30 pt-33">
      <Link href="/shop" className="text-sm text-[var(--color-orange)]">
        ← All categories
      </Link>
      <div className="kicker mt-5">
        {items.length} of {products.length} lines
      </div>
      <h1 className="mt-3 text-[clamp(38px,6.4vw,80px)] font-bold leading-[0.94] tracking-[-0.05em] text-[var(--color-text)]">{meta.label}</h1>
      <p className="mt-3.5 max-w-[54ch] text-base leading-relaxed text-[var(--text-muted)]">{meta.blurb}</p>

      <div className="mt-9 flex flex-wrap gap-2 text-[13.5px]">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/shop/${c.slug}`}
            className={`rounded-[14px] border px-4.5 py-2.5 transition-colors ${
              c.slug === category ? "border-[var(--color-orange)] bg-[var(--color-orange)] text-white" : "border-[var(--border)] bg-[var(--color-surface)] text-[var(--text-muted)]"
            }`}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {pick && (
        <div className="mt-8 grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--color-surface)] sm:grid-cols-[1fr_1.2fr]">
          <Link href={`/shop/${pick.category}/${pick.slug}`} className="relative block h-[220px] sm:h-full">
            <Image src={pick.img} alt={pick.name} fill sizes="(max-width: 640px) 100vw, 45vw" className="object-cover" />
          </Link>
          <div className="flex flex-col justify-center p-7">
            <span className="kicker">Reach for this first</span>
            <Link href={`/shop/${pick.category}/${pick.slug}`} className="mt-2 block text-2xl font-bold tracking-tight text-[var(--color-text)]">
              {pick.name}
            </Link>
            <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-[var(--text-muted)]">{pick.description}</p>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-xl font-bold text-[var(--color-text)]">${pick.price.toFixed(2)}</span>
              <span className="text-sm text-[var(--text-muted)]">{pick.size}</span>
            </div>
            <div className="mt-5">
              <AddToOrderButton id={pick.id} name={pick.name} size={pick.size} />
            </div>
          </div>
        </div>
      )}

      <div className="mt-7.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
