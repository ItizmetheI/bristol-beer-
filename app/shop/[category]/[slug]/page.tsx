import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { categories, products } from "@/lib/data";
import AddToOrderButton from "@/components/AddToOrderButton";

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const product = products.find((p) => p.category === category && p.slug === slug);
  if (!product) notFound();

  const categoryMeta = categories.find((c) => c.slug === product.category)!;
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,72px)] pb-30 pt-33">
      <Link href={`/shop/${product.category}`} className="text-sm text-[var(--color-orange)]">
        ← {categoryMeta.label}
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-9 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative h-[320px] overflow-hidden rounded-3xl border border-[var(--border-soft)] bg-[var(--color-surface-alt)] sm:h-[440px]">
          <Image src={product.img} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" priority />
          {!product.inStock && (
            <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              Out of stock
            </span>
          )}
        </div>

        <div>
          <div className="kicker">{product.subcat}</div>
          <h1 className="mt-3 text-[clamp(30px,4vw,48px)] font-bold leading-[1.02] tracking-[-0.03em] text-[var(--color-text)]">{product.name}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold tracking-tight text-[var(--color-text)]">${product.price.toFixed(2)}</span>
            <span className="text-sm text-[var(--text-muted)]">{product.size}</span>
          </div>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-[var(--text-muted)]">{product.description}</p>

          <div className="mt-6 grid max-w-[360px] grid-cols-2 gap-2.5 text-sm">
            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--color-surface)] px-4 py-3">
              <div className="text-xs text-[var(--text-faint)]">ABV</div>
              <div className="mt-1 font-semibold text-[var(--color-text)]">{product.abv}</div>
            </div>
            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--color-surface)] px-4 py-3">
              <div className="text-xs text-[var(--text-faint)]">Availability</div>
              <div className={`mt-1 font-semibold ${product.inStock ? "text-[var(--green)]" : "text-[var(--text-muted)]"}`}>{product.inStock ? "In stock" : "Call to check"}</div>
            </div>
          </div>

          <div className="mt-7">{product.inStock ? <AddToOrderButton id={product.id} name={product.name} size={product.size} /> : <a href="tel:2674482337" className="text-sm font-semibold text-[var(--color-orange)]">Call (267) 448-2337 to check restock</a>}</div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-[var(--border-soft)] pt-9">
          <h2 className="section-title text-[clamp(22px,2.6vw,32px)]">More {categoryMeta.label.toLowerCase()}</h2>
          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} href={`/shop/${p.category}/${p.slug}`} className="group overflow-hidden rounded-2xl border border-[var(--border-soft)]">
                <div className="relative h-[140px]">
                  <Image src={p.img} alt={p.name} fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="bg-[var(--color-surface)] p-3.5">
                  <div className="text-sm font-semibold text-[var(--color-text)]">{p.name}</div>
                  <div className="mt-0.5 text-xs text-[var(--text-muted)]">${p.price.toFixed(2)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
