"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion";
import { profile } from "@/lib/data";

const BOOT_LINES = [
  "> init portfolio.sys",
  "> loading modules … ok",
  "> mounting frontend + backend",
  "> ready",
];

export default function LoadingScreen() {
  const reduce = useReducedMotion();
  // Start hidden; decide on mount so SSR never ships a blocking overlay.
  const [show, setShow] = useState(false);
  const [line, setLine] = useState(0);

  useEffect(() => {
    let booted = false;
    try {
      booted = sessionStorage.getItem("booted") === "1";
    } catch {}
    if (booted || reduce) return; // once per session; skip entirely under reduced motion

    setShow(true);
    document.body.style.overflow = "hidden";

    const lineTimers = BOOT_LINES.map((_, i) =>
      setTimeout(() => setLine(i + 1), 300 + i * 300),
    );
    const done = setTimeout(() => {
      try {
        sessionStorage.setItem("booted", "1");
      } catch {}
      setShow(false);
      document.body.style.overflow = "";
    }, 300 + BOOT_LINES.length * 300 + 500);

    return () => {
      lineTimers.forEach(clearTimeout);
      clearTimeout(done);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[400] grid place-items-center bg-bg"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: easeOutExpo } }}
          aria-hidden
        >
          {/* film-leader sweep behind the boot log */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            initial={{ backgroundPositionY: "0%" }}
            animate={{ backgroundPositionY: "100%" }}
            transition={{ duration: 2, ease: "linear" }}
            style={{
              backgroundImage:
                "repeating-linear-gradient(var(--ink) 0 1px, transparent 1px 5px)",
            }}
          />
          <div className="w-[min(90vw,26rem)] px-2">
            <div className="mb-6 font-display text-2xl font-bold text-ink">
              {profile.name}
              <span className="text-primary">.</span>
            </div>
            <div className="space-y-1">
              {BOOT_LINES.slice(0, line).map((l, i) => (
                <motion.div
                  key={l}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: easeOutExpo }}
                  className="hud-label"
                  style={{ color: i === BOOT_LINES.length - 1 ? "var(--primary)" : undefined }}
                >
                  {l}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
