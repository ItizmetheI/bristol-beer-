"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import anime from "animejs";
import { hoursToday, openState } from "@/lib/hours";
import { prefersReducedMotion } from "@/lib/reduced-motion";

gsap.registerPlugin(ScrollTrigger);

const TITLE_LINES = ["Cold cases,", "deep shelves,", "open till nine."];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const [openLine, setOpenLine] = useState("");
  const [openDot, setOpenDot] = useState("#ff9f0a");
  const [hoursLabel, setHoursLabel] = useState("");
  const [dayName, setDayName] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = hoursToday(now);
      const os = openState(now);
      setHoursLabel(h.label);
      setDayName(`Today · ${h.name}`);
      setOpenLine(os.line);
      setOpenDot(os.dot);
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  // anime.js: full entrance timeline (badge -> title -> subtext/CTA -> stats)
  useEffect(() => {
    const targets = ".hero-badge, .hero-line-inner, .hero-subfoot, .hero-stats-row";
    if (prefersReducedMotion()) {
      document.querySelectorAll(targets).forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.filter = "none";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    const tl = anime.timeline({ easing: "cubicBezier(0.16, 0.84, 0.24, 1)" });
    tl.add({
      targets: ".hero-badge",
      translateY: [-14, 0],
      opacity: [0, 1],
      duration: 600,
    })
      .add(
        {
          targets: ".hero-line-inner",
          translateY: ["130%", "0%"],
          scale: [1.12, 1],
          rotate: [3, 0],
          filter: ["blur(14px)", "blur(0px)"],
          opacity: [0, 1],
          delay: anime.stagger(110),
          duration: 1100,
        },
        "-=350"
      )
      .add(
        {
          targets: ".hero-subfoot",
          translateY: [26, 0],
          opacity: [0, 1],
          duration: 700,
        },
        "-=550"
      )
      .add(
        {
          targets: ".hero-stats-row",
          translateY: [18, 0],
          opacity: [0, 1],
          duration: 650,
        },
        "-=450"
      );

    // Failsafe: if the tab is backgrounded/throttled mid-animation, anime.js's
    // rAF-driven timeline can stall with elements stuck below opacity 1 —
    // force the final state after the timeline's worst-case duration (~1.7s).
    const failsafe = setTimeout(() => {
      document.querySelectorAll(targets).forEach((el) => {
        const style = (el as HTMLElement).style;
        style.opacity = "1";
        style.filter = "none";
        style.transform = "none";
      });
    }, 2600);
    return () => clearTimeout(failsafe);
  }, []);

  // GSAP ScrollTrigger: scroll-linked parallax on the hero background, no scroll listener
  useGSAP(
    () => {
      if (!bgRef.current || !heroRef.current) return;
      if (prefersReducedMotion()) return;
      gsap.to(bgRef.current, {
        yPercent: 18,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(scrollHintRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "120px top", scrub: true },
      });
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="relative min-h-[660px] h-[100svh] overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <div ref={bgRef} className="absolute -inset-x-[2%] -inset-y-[6%] will-change-transform">
        <video
          className="absolute inset-0 h-full w-full object-cover bg-[#0a0e16]"
          poster="/images/hero-beer-poster.jpg"
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        >
          <source src="/video/hero-beer.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(6,7,10,.5), transparent 55%), linear-gradient(180deg, rgba(6,7,10,.45) 0%, rgba(6,7,10,.12) 34%, rgba(6,7,10,.95) 100%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 px-[clamp(20px,5vw,72px)] pb-[clamp(64px,7.5vh,86px)]">
        <div className="mx-auto max-w-[1120px]">
          <div className="hero-badge inline-flex items-center gap-2.5 rounded-full border border-white/16 bg-white/10 px-3.5 py-1.5 text-[12.5px] opacity-0 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: openDot, boxShadow: `0 0 10px ${openDot}` }} />
            <span>{openLine}</span>
          </div>

          <h1 className="mt-4.5 max-w-[15ch] text-[clamp(48px,8.4vw,124px)] font-extrabold leading-[0.92] tracking-[-0.05em]">
            {TITLE_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span
                  className="hero-line-inner inline-block opacity-0"
                  style={
                    i === 2
                      ? { backgroundImage: "linear-gradient(90deg, var(--color-orange-light), var(--color-orange))", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }
                      : undefined
                  }
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div className="hero-subfoot mt-7 flex flex-wrap items-end justify-between gap-6.5 opacity-0">
            <p className="max-w-[42ch] text-[17px] leading-normal text-white/70">
              A neighborhood beverage distributor on Route 13. Domestic cases, imports, craft, malt, and six slush machines running by the register.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="/shop"
                className="rounded-[15px] bg-[var(--color-orange)] px-6.5 py-3.5 text-[14.5px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-orange-dark)]"
              >
                See what&apos;s in stock
              </a>
              <a
                href="https://maps.google.com/?q=2664+Bristol+Pike+Bristol+PA+19007"
                className="rounded-[15px] border border-white/18 bg-white/10 px-6.5 py-3.5 text-[14.5px] font-medium backdrop-blur-xl transition hover:-translate-y-0.5"
              >
                2664 Bristol Pike
              </a>
            </div>
          </div>

          <div className="hero-stats-row mt-8 flex flex-wrap gap-y-2 opacity-0">
            <div className="border-r border-white/16 pr-5.5 first:pl-0">
              <div className="text-[26px] font-bold tracking-tight">
                4.7<span className="align-[4px] text-[18px] text-[var(--color-orange-light)]">★</span>
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/58">Google reviews</div>
            </div>
            <div className="border-r border-white/16 px-5.5">
              <div className="text-[26px] font-bold tracking-tight">{hoursLabel}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/58">{dayName}</div>
            </div>
            <div className="border-r border-white/16 px-5.5">
              <div className="text-[26px] font-bold tracking-tight">Rt 13</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/58">By the Golden Eagle Diner</div>
            </div>
            <div className="pl-5.5">
              <div className="text-[26px] font-bold tracking-tight">Cases</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-white/58">Domestic · import · craft</div>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollHintRef} className="absolute bottom-3.5 left-1/2 flex h-8.5 w-5.5 -translate-x-1/2 justify-center rounded-xl border border-white/25 pt-1.5">
        <span className="h-1.5 w-0.5 animate-[breathe_1.8s_ease-in-out_infinite] rounded bg-white/70" />
      </div>
    </section>
  );
}
