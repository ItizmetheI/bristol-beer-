"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,72px)] pb-30 pt-33 text-center">
      <div className="kicker">Something broke</div>
      <h1 className="mt-3.5 text-[clamp(38px,6.4vw,80px)] font-bold leading-[0.94] tracking-[-0.05em] text-[var(--color-text)]">Spilled it.</h1>
      <p className="mx-auto mt-3.5 max-w-[46ch] text-base leading-relaxed text-[var(--text-muted)]">
        Something went wrong loading this page. Try again, or call us if it keeps happening.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-2.5">
        <button
          onClick={reset}
          className="rounded-[15px] bg-[var(--color-orange)] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-orange-dark)]"
        >
          Try again
        </button>
        <a href="tel:2674482337" className="rounded-[15px] border border-[var(--border)] bg-[var(--color-surface-alt)] px-6 py-3.5 text-sm font-medium text-[var(--color-text)]">
          Call (267) 448-2337
        </a>
      </div>
    </div>
  );
}
