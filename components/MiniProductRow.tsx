import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import AddToOrderButton from "./AddToOrderButton";

export default function MiniProductRow({ product }: { product: Product }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--color-surface)] p-2.5">
      <Link href={`/shop/${product.category}/${product.slug}`} className="relative h-14 w-14 flex-none overflow-hidden rounded-xl bg-[var(--color-surface-alt)]">
        <Image src={product.img} alt={product.name} fill sizes="56px" className="object-cover" />
      </Link>
      <Link href={`/shop/${product.category}/${product.slug}`} className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold text-[var(--color-text)]">{product.name}</div>
        <div className="text-xs text-[var(--text-muted)]">
          {product.size} · ${product.price.toFixed(2)}
        </div>
      </Link>
      <div className="flex-none">
        <AddToOrderButton id={product.id} name={product.name} size={product.size} compact />
      </div>
    </div>
  );
}
