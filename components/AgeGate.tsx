"use client";

import { useEffect, useRef, useState } from "react";

export default function AgeGate() {
  const [verified, setVerified] = useState<boolean | null>(null);
  const yesRef = useRef<HTMLButtonElement>(null);
  const noRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setVerified(localStorage.getItem("bbc_age_verified") === "true");
  }, []);

  useEffect(() => {
    if (verified === false) {
      document.body.style.overflow = "hidden";
      yesRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [verified]);

  if (verified !== false) return null;

  function accept() {
    localStorage.setItem("bbc_age_verified", "true");
    setVerified(true);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "Tab") return;
    const focusables = [yesRef.current, noRef.current].filter(Boolean) as HTMLElement[];
    const i = focusables.indexOf(document.activeElement as HTMLElement);
    e.preventDefault();
    const next = e.shiftKey ? (i <= 0 ? focusables.length - 1 : i - 1) : i === focusables.length - 1 ? 0 : i + 1;
    focusables[next]?.focus();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ageGateTitle"
      onKeyDown={onKeyDown}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-[rgba(20,16,12,.55)] p-6 backdrop-blur-xl"
    >
      <div className="w-full max-w-[380px] rounded-3xl border border-[var(--border-soft)] bg-[var(--color-surface)] p-9 text-center shadow-[0_34px_70px_-34px_rgba(0,0,0,.5)]">
        <span className="mx-auto mb-4 flex h-3.5 w-3.5 items-center justify-center">
          <span className="relative block h-2 w-2 rounded-full bg-[var(--color-orange)]" />
        </span>
        <h2 id="ageGateTitle" className="text-2xl font-bold tracking-tight text-[var(--color-text)]">
          Are you 21 or older?
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-muted)]">
          You must be of legal drinking age to enter Bristol Beer Co.
        </p>
        <div className="mt-6 flex flex-col gap-2.5">
          <button
            ref={yesRef}
            onClick={accept}
            className="w-full rounded-2xl bg-[var(--color-orange)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-orange-dark)]"
          >
            Yes, I&apos;m 21+
          </button>
          <a
            ref={noRef}
            href="https://www.responsibility.org/"
            className="w-full rounded-2xl border border-[var(--border)] bg-[var(--color-surface-alt)] px-6 py-3.5 text-sm font-medium text-[var(--color-text)]"
          >
            No
          </a>
        </div>
      </div>
    </div>
  );
}
