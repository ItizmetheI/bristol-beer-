"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { slushes } from "@/lib/data";
import Reveal from "./Reveal";

const homeSlushes = slushes.slice(0, 5);

export default function Specialties() {
  const [active, setActive] = useState(0);
  const current = homeSlushes[active];

  return (
    <section className="section">
      <Reveal className="grid items-start gap-[clamp(24px,4vw,56px)] lg:grid-cols-2">
        <div>
          <div className="kicker">Only at Bristol</div>
          <h2 className="section-title mt-3">The slush wall</h2>
          <p className="mt-4 max-w-[38ch] text-base leading-relaxed text-[var(--text-muted)]">
            Six machines, cups or growlers, flavors that turn over with the season. Peach mango goes first on Saturdays.
          </p>

          <div className="mt-7 grid gap-2.5">
            {homeSlushes.map((s, i) => {
              const open = i === active;
              return (
                <div key={s.no} className={`overflow-hidden rounded-2xl border bg-[var(--color-surface)] transition-colors ${open ? "border-[var(--color-orange)]" : "border-[var(--border-soft)]"}`}>
                  <button onClick={() => setActive(i)} className="flex w-full items-center gap-4.5 px-4.5 py-4 text-left">
                    <span
                      className={`flex h-6.5 w-6.5 flex-none items-center justify-center rounded-lg font-mono text-[11px] font-bold transition-colors ${
                        open ? "bg-[var(--color-orange)] text-white" : "bg-[var(--color-surface-alt)] text-[var(--text-faint)]"
                      }`}
                    >
                      {s.no}
                    </span>
                    <span className={`flex-1 text-[clamp(16px,1.8vw,19px)] font-semibold tracking-tight transition-colors ${open ? "text-[var(--color-text)]" : "text-[var(--text-muted)]"}`}>
                      {s.name}
                    </span>
                    <span className={`flex h-6 w-6 flex-none items-center justify-center text-xl font-light text-[var(--text-faint)] transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className="grid transition-[grid-template-rows] duration-300 ease-out" style={{ gridTemplateRows: open ? "1fr" : "0fr" }}>
                    <div className="overflow-hidden">
                      <p className="mx-4.5 mb-4.5 max-w-[42ch] text-[13.5px] leading-relaxed text-[var(--text-muted)]">{s.note}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <Link href="/slush" className="inline-block rounded-[15px] border border-[var(--border)] bg-[var(--color-surface-alt)] px-6 py-3.5 text-sm font-medium text-[var(--color-text)]">
              All six flavors
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-[var(--border-soft)] bg-[var(--color-surface)] shadow-[0_34px_70px_-40px_rgba(0,0,0,.35)]">
          <div className="relative h-[340px] w-full">
            <Image src={current.img} alt={`${current.name} slush`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="p-4.5">
            <span className="inline-block rounded-full bg-[var(--color-orange)] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">Featured Slushy</span>
            <div className="mt-2.5 text-[15px] font-semibold text-[var(--color-text)]">{current.name}</div>
            <div className="mt-3.5 flex justify-center gap-1.5">
              {homeSlushes.map((s, i) => (
                <span key={s.no} className={`h-1.5 rounded-full bg-[var(--border)] transition-all ${i === active ? "w-4.5 bg-[var(--color-orange)]" : "w-1.5"}`} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
