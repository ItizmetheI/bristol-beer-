"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { products } from "@/lib/data";
import Reveal from "./Reveal";
import MiniProductRow from "./MiniProductRow";

const FEATURED_IDS = ["yuengling-traditional", "modelo-especial", "victory-hop-devil", "neshaminy-creek"];

export default function ShowcaseBento() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const featured = FEATURED_IDS.map((id) => products.find((p) => p.id === id)!);

  function play() {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  }

  return (
    <section className="section">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <button
            onClick={play}
            aria-label="Play video"
            className="relative block aspect-[16/10] w-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 p-0 md:aspect-auto md:h-full md:min-h-[420px]"
          >
            <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" src="/video/hero-beer.mp4" poster="/images/hero-beer-poster.jpg" muted loop playsInline preload="none" />
            <div className={`absolute inset-0 bg-black/35 transition-opacity ${playing ? "opacity-0" : "opacity-100"}`} />
            <div className={`absolute left-1/2 top-1/2 flex h-19 w-19 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/18 text-white backdrop-blur transition-opacity ${playing ? "opacity-0" : "opacity-100"}`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 5v14l12-7L7 5z" fill="currentColor" /></svg>
            </div>
            <div className={`absolute inset-x-5 bottom-4.5 flex items-center justify-between transition-opacity ${playing ? "opacity-0" : "opacity-100"}`}>
              <span className="rounded-full bg-black/45 px-4 py-2.5 text-[13px] font-medium text-white backdrop-blur">See Us In Action</span>
              <span className="rounded-full bg-black/45 px-4 py-2.5 text-[13px] font-medium text-white backdrop-blur">Bristol, PA</span>
            </div>
          </button>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col md:col-span-4">
          <div className="mb-3.5 flex items-baseline justify-between">
            <h2 className="text-lg font-bold tracking-tight text-[var(--color-text)]">What&apos;s cold right now</h2>
            <Link href="/shop" className="text-xs font-semibold text-[var(--color-orange)]">
              Shop all →
            </Link>
          </div>
          <div className="flex flex-1 flex-col justify-between gap-2.5">
            {featured.map((p) => (
              <MiniProductRow key={p.id} product={p} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
