"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface PreloaderContextValue {
  preloaderDone: boolean;
  setPreloaderDone: () => void;
}

// Preloader only plays on the homepage, once per tab session. Everywhere else
// (and on repeat homepage visits) it resolves "done" immediately. AgeGate reads
// this so its focus-trap doesn't fire while Preloader is still visually covering it.
const PreloaderContext = createContext<PreloaderContextValue | null>(null);

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [preloaderDone, setDone] = useState(false);
  return <PreloaderContext.Provider value={{ preloaderDone, setPreloaderDone: () => setDone(true) }}>{children}</PreloaderContext.Provider>;
}

export function usePreloaderDone() {
  const ctx = useContext(PreloaderContext);
  if (!ctx) throw new Error("usePreloaderDone must be used within PreloaderProvider");
  return ctx;
}
