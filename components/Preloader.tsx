"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import anime from "animejs";
import { prefersReducedMotion } from "@/lib/reduced-motion";
import { usePreloaderDone } from "@/lib/preloader-context";

const SESSION_FLAG = "bbc_preloader_shown";
const FAILSAFE_MS = 7500;

function sessionAlreadyShown(): boolean {
  try {
    return sessionStorage.getItem(SESSION_FLAG) === "true";
  } catch {
    return false; // storage blocked (private browsing) — default to showing it once
  }
}

function markSessionShown() {
  try {
    sessionStorage.setItem(SESSION_FLAG, "true");
  } catch {
    // best effort only — if this fails the preloader may replay, which is harmless
  }
}

export default function Preloader() {
  const pathname = usePathname();
  const { setPreloaderDone } = usePreloaderDone();
  const [shouldRender, setShouldRender] = useState(false);
  const [visible, setVisible] = useState(true);
  const [imageBroken, setImageBroken] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLImageElement>(null);
  const streamRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const finishedRef = useRef(false);

  function finish() {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setVisible(false);
    setPreloaderDone();
  }

  // Decide, once, whether this load should show the preloader at all.
  useEffect(() => {
    if (pathname !== "/" || sessionAlreadyShown()) {
      setPreloaderDone();
      return;
    }
    markSessionShown();
    setShouldRender(true);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!shouldRender) return;
    const t = setTimeout(finish, FAILSAFE_MS);
    return () => clearTimeout(t);
  }, [shouldRender]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!shouldRender || !visible) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldRender, visible]);

  useEffect(() => {
    if (imageBroken) finish();
  }, [imageBroken]); // eslint-disable-line react-hooks/exhaustive-deps

  useGSAP(
    () => {
      if (!shouldRender || !containerRef.current || imageBroken) return;

      if (prefersReducedMotion()) {
        gsap.to(containerRef.current, { opacity: 0, duration: 0.3, onComplete: finish });
        return;
      }

      // GSAP can't reliably tween an unregistered CSS custom property string
      // ("0%" -> "100%") used inside a mask-image gradient — tween a plain
      // number instead and push it onto the custom property each tick.
      const fillState = { pct: 0 };
      fillRef.current?.style.setProperty("--fill", "0%");

      const tl = gsap.timeline({ onComplete: finish });
      tl.set(streamRef.current, { scaleY: 0, opacity: 1 })
        .to(streamRef.current, { scaleY: 1, duration: 0.5, ease: "power1.out" })
        .to(
          fillState,
          {
            pct: 100,
            duration: 4.2,
            ease: "power2.inOut",
            onUpdate: () => fillRef.current?.style.setProperty("--fill", fillState.pct + "%"),
          },
          "<"
        )
        .to(streamRef.current, { opacity: 0, duration: 0.3 }, "-=0.5")
        .to({}, { duration: 0.4 }) // hold
        .to(containerRef.current, { opacity: 0, duration: 0.4 });

      if (bubbleRef.current) {
        anime({
          targets: bubbleRef.current,
          translateY: [0, -36],
          opacity: [0, 0.85, 0],
          duration: 1500,
          delay: 700,
          easing: "easeOutSine",
          loop: true,
        });
      }
    },
    { scope: containerRef, dependencies: [shouldRender, imageBroken] }
  );

  if (!shouldRender || !visible) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-[400] flex items-center justify-center bg-[var(--color-bg)]"
    >
      <div className="relative w-[clamp(220px,42vw,420px)]">
        <div
          ref={streamRef}
          className="pointer-events-none absolute left-1/2 top-[-56px] h-14 w-[5px] -translate-x-1/2 rounded-full"
          style={{
            transformOrigin: "top",
            background: "linear-gradient(180deg, rgba(255,159,10,0) 0%, var(--color-orange-light) 45%, var(--color-orange) 100%)",
          }}
        />
        <img src="/images/logo.png" alt="" className="w-full opacity-20" onError={() => setImageBroken(true)} />
        <img
          ref={fillRef}
          src="/images/logo.png"
          alt=""
          className="absolute inset-0 w-full"
          style={{ WebkitMaskImage: "linear-gradient(to top, black var(--fill, 0%), transparent var(--fill, 0%))", maskImage: "linear-gradient(to top, black var(--fill, 0%), transparent var(--fill, 0%))" }}
        />
        <span
          ref={bubbleRef}
          className="pointer-events-none absolute left-1/2 bottom-[15%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--color-orange-light)] opacity-0"
        />
      </div>
    </div>
  );
}
