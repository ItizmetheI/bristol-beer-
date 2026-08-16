import Link from "next/link";

const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/slush", label: "Slush" },
  { href: "/rtd", label: "RTD" },
  { href: "/order", label: "Order ahead" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
];

export default function Footer() {
  return (
    <footer className="mt-[clamp(90px,14vh,150px)] border-t border-[var(--border-soft)] bg-[var(--color-surface-alt)] px-[clamp(20px,5vw,72px)] pb-12 pt-[clamp(40px,7vh,70px)]">
      <div className="mx-auto max-w-[1120px]">
        <div className="text-[clamp(38px,9vw,120px)] font-extrabold leading-[0.9] tracking-[-0.055em] text-[var(--border)]">
          Bristol Beer Co.
        </div>
        <div className="mt-[clamp(24px,4vh,44px)] flex flex-wrap items-end justify-between gap-6">
          <div className="text-[13px] leading-[1.7] text-[var(--text-muted)]">
            2664 Bristol Pike, Bristol, PA 19007
            <br />
            (267) 448-2337
          </div>
          <nav className="flex flex-wrap gap-5 text-[13px] text-[var(--color-text)]">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="max-w-[32ch] text-[12px] leading-relaxed text-[var(--text-faint)]">
            © 2026 Bristol Beer Company. Must be 21+ to purchase. Please drink responsibly.
            <br />
            <Link href="/credits" className="underline">
              Photo &amp; video credits
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
