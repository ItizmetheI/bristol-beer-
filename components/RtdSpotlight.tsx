import Image from "next/image";
import Link from "next/link";
import { rtdSpotlightBrands } from "@/lib/data";
import Reveal from "./Reveal";

export default function RtdSpotlight() {
  return (
    <section className="mt-[clamp(80px,12vh,140px)] bg-[var(--color-bg)] py-[clamp(80px,12vh,140px)]">
      <div className="mx-auto max-w-[1120px] px-[clamp(20px,5vw,72px)]">
        <Reveal className="relative flex min-h-[420px] items-center overflow-hidden rounded-3xl p-[clamp(32px,5vw,56px)]">
          <Image src="/images/rtd-cutwater.jpg" alt="" fill sizes="100vw" className="object-cover" priority={false} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(6,7,10,.92) 0%, rgba(6,7,10,.55) 45%, rgba(6,7,10,.25) 100%)" }} />
          <div className="relative z-10 max-w-[460px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-3.5 py-1.5 text-xs text-[var(--color-text)]">Cold aisle</span>
            <h2 className="mt-4 text-[clamp(32px,4.6vw,54px)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[var(--color-text)]">
              Elevate your <span className="text-[var(--color-orange-light)]">drink game</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/72">
              Canned cocktails and hard seltzers, ready to drink straight from the cooler. No mixing, no mess.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {rtdSpotlightBrands.map((b) => (
                <span key={b} className="rounded-full border border-white/14 bg-white/8 px-3.5 py-1.5 text-[12.5px] text-[var(--color-text)]">
                  {b}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/rtd" className="inline-block rounded-[15px] bg-[var(--color-orange)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_26px_-12px_rgba(226,96,42,.6)] transition hover:-translate-y-0.5 hover:bg-[var(--color-orange-dark)]">
                Shop ready-to-drink
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
