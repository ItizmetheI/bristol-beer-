"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useOrder } from "@/lib/order-context";

const LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/slush", label: "Slush" },
  { href: "/rtd", label: "RTD" },
  { href: "/about", label: "About" },
  { href: "/visit", label: "Visit" },
];

export default function Nav() {
  const pathname = usePathname();
  const { count } = useOrder();
  const [floating, setFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const io = new IntersectionObserver(([entry]) => setFloating(!entry.isIntersecting), { threshold: 0 });
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 h-10 w-full" aria-hidden />
      <div className="fixed inset-x-0 top-0 z-[95]">
        <nav
          className={`relative flex items-center gap-2 border-b border-[var(--border-soft)] bg-[rgba(11,11,13,.82)] px-[clamp(20px,5vw,72px)] backdrop-blur-xl transition-[padding,box-shadow] duration-300 ${
            floating ? "py-2.5 shadow-[0_8px_30px_-18px_rgba(0,0,0,.35)]" : "py-4"
          }`}
        >
          <Link href="/" className="flex flex-none items-center gap-2.5">
            <span className="relative block h-2.5 w-2.5 rounded-full bg-[var(--color-orange)]" />
            <span className="whitespace-nowrap text-[15px] font-bold tracking-tight text-[var(--color-text)]">Bristol Beer Co.</span>
          </Link>

          <div className="ml-auto hidden items-center gap-1 text-[13.5px] sm:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-xl px-3 py-2 transition-colors ${
                  pathname === l.href ? "font-semibold text-[var(--color-text)]" : "text-[var(--text-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-auto flex h-8.5 w-8.5 flex-none items-center justify-center rounded-[10px] border border-[var(--border)] bg-[var(--color-surface-alt)] sm:hidden"
          >
            <span className="flex w-[15px] flex-col gap-[3px]">
              <span className="block h-[1.5px] bg-[var(--color-text)]" />
              <span className="block h-[1.5px] bg-[var(--color-text)]" />
              <span className="block h-[1.5px] bg-[var(--color-text)]" />
            </span>
          </button>

          <Link
            href="/order"
            aria-label={`Your order list${count > 0 ? `, ${count} items` : ""}`}
            className="relative ml-2 hidden h-8.5 w-8.5 flex-none items-center justify-center rounded-full border border-[var(--border)] bg-[var(--color-surface-alt)] sm:flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[var(--color-text)]">
              <path d="M4 6h16l-1.5 10a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 6Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="M8 6V5a4 4 0 0 1 8 0v1" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-[var(--color-orange)] px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>

          <a
            href="tel:2674482337"
            className="ml-2 flex-none whitespace-nowrap rounded-full border-[1.5px] border-[var(--color-text)] px-5 py-2.5 text-[13.5px] font-semibold text-[var(--color-text)] transition-colors hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]"
          >
            Order
          </a>

          {menuOpen && (
            <div className="absolute right-[clamp(20px,5vw,72px)] top-full mt-2 flex min-w-[160px] flex-col gap-0.5 rounded-2xl border border-[var(--border-soft)] bg-[var(--color-surface)] p-2 shadow-[0_14px_40px_-18px_rgba(0,0,0,.3)] sm:hidden">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="rounded-[10px] px-3.5 py-2.5 text-[14.5px] text-[var(--text-muted)] hover:bg-[var(--color-surface-alt)] hover:text-[var(--color-text)]">
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
