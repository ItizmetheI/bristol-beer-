import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,72px)] pb-30 pt-33 text-center">
      <div className="kicker">404</div>
      <h1 className="mt-3.5 text-[clamp(38px,6.4vw,80px)] font-bold leading-[0.94] tracking-[-0.05em] text-[var(--color-text)]">Not on the wall.</h1>
      <p className="mx-auto mt-3.5 max-w-[46ch] text-base leading-relaxed text-[var(--text-muted)]">
        That page doesn&apos;t exist. Try the shop, or head back home.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-2.5">
        <Link href="/" className="rounded-[15px] bg-[var(--color-orange)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-orange-dark)]">
          Back home
        </Link>
        <Link href="/shop" className="rounded-[15px] border border-[var(--border)] bg-[var(--color-surface-alt)] px-6 py-3.5 text-sm font-medium text-[var(--color-text)]">
          Shop the wall
        </Link>
      </div>
    </div>
  );
}
