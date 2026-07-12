"use client";

import { Children, cloneElement, isValidElement, useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Scroll reveal that NEVER gates visibility (see DESIGN.md > Motion, brand.md).
 * SSR/no-JS/crawlers get fully visible content. On the client, only elements below the
 * fold at mount are hidden (pre-paint, no flash) then revealed once scrolled near.
 *
 * Reveal uses a shared rect-based scroll check (not IntersectionObserver) so anything
 * scrolled into OR past the viewport is guaranteed to become visible — no stuck sections.
 */

type El = HTMLElement;
const watched = new Set<El>();
let wired = false;
let ticking = false;

function reveal(el: El) {
  el.classList.add("is-visible");
  watched.delete(el);
}

function check() {
  ticking = false;
  const h = window.innerHeight;
  watched.forEach((el) => {
    if (el.getBoundingClientRect().top < h * 0.9) reveal(el);
  });
}

function schedule() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(check);
}

function watch(el: El) {
  watched.add(el);
  if (!wired) {
    wired = true;
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
  }
  schedule();
  return () => {
    watched.delete(el);
  };
}

export default function Reveal({
  children,
  className = "",
  as = "div",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "ul";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<El>(null);
  const Tag = as as keyof React.JSX.IntrinsicElements;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    // Already at/near the fold → leave visible, don't animate.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.classList.add("reveal-pre"); // hide before paint so it can animate in
    return watch(el);
  }, [reduce]);

  return (
    // @ts-expect-error — ref typing across the union of tag names is fine at runtime
    <Tag ref={ref} data-reveal className={className} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </Tag>
  );
}

/** Wrapper that staggers its <Reveal> children by cloning in an incremental delay. */
export function RevealGroup({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
}) {
  const Tag = as;
  let i = 0;
  const staggered = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    const delay = Math.min(i * 0.06, 0.36);
    i += 1;
    return cloneElement(child as React.ReactElement<{ delay?: number }>, { delay });
  });
  return <Tag className={className}>{staggered}</Tag>;
}
