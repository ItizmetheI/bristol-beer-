"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINEUP = [
  { name: "Yuengling Traditional", img: "/images/yuengling-traditional.jpg" },
  { name: "Modelo Especial", img: "/images/modelo-especial.jpg" },
  { name: "Victory Hop Devil", img: "/images/victory-hop-devil.jpg" },
  { name: "Guinness Draught", img: "/images/guinness-draught.jpg" },
  { name: "High Noon Peach", img: "/images/rtd-high-noon.jpg" },
  { name: "Red, White & Berry", img: "/images/slush-red-white-berry.jpg" },
];

export default function Lineup() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapRef.current || !trackRef.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const setPin = () => {
        const distance = trackRef.current!.scrollWidth - window.innerWidth;
        if (distance <= 0) return;
        gsap.to(trackRef.current, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: () => `+=${distance}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      };
      setPin();
    },
    { scope: wrapRef }
  );

  return (
    <section ref={wrapRef} className="relative overflow-hidden bg-[var(--color-bg)]">
      <div ref={trackRef} className="flex h-[100dvh] items-center gap-6 pl-[clamp(20px,5vw,72px)]">
        <div className="w-[min(70vw,380px)] flex-none">
          <div className="kicker">On the wall</div>
          <h2 className="section-title mt-3 text-[clamp(28px,3.6vw,44px)]">The lineup, up close.</h2>
        </div>
        {LINEUP.map((item) => (
          <div key={item.name} className="relative h-[64vh] w-[70vw] flex-none overflow-hidden rounded-3xl border border-[var(--border-soft)] sm:w-[38vw] lg:w-[26vw]">
            <Image src={item.img} alt={item.name} fill sizes="40vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 pt-14">
              <span className="text-lg font-semibold text-white">{item.name}</span>
            </div>
          </div>
        ))}
        <div className="flex-none w-[clamp(20px,5vw,72px)]" aria-hidden />
      </div>
    </section>
  );
}
