import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import AddToOrderButton from "./AddToOrderButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col rounded-[18px] border border-[var(--border-soft)] bg-[var(--color-surface)] p-3.5 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-30px_rgba(0,0,0,.35)]">
      <Link href={`/shop/${product.category}/${product.slug}`} className="relative block h-[200px] w-full overflow-hidden rounded-xl bg-[var(--color-surface-alt)]">
        <Image src={product.img} alt={product.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" />
        {!product.inStock && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
            Out of stock
          </span>
        )}
      </Link>
      <Link href={`/shop/${product.category}/${product.slug}`} className="mt-3.5 flex items-baseline justify-between">
        <div className="text-[15.5px] font-semibold text-[var(--color-text)]">{product.name}</div>
        <div className="text-[12px] text-[var(--text-muted)]">{product.size}</div>
      </Link>
      <div className="mt-1 flex items-baseline justify-between">
        <div className="text-[12.5px] text-[var(--text-muted)]">
          {product.subcat} · {product.abv}
        </div>
        <div className="text-[14px] font-semibold text-[var(--color-text)]">${product.price.toFixed(2)}</div>
      </div>
      <div className="mt-3.5">
        {product.inStock ? (
          <AddToOrderButton id={product.id} name={product.name} size={product.size} />
        ) : (
          <span className="text-xs text-[var(--text-faint)]">Call to check restock</span>
        )}
      </div>
    </div>
  );
}
