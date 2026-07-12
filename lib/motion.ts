/**
 * Shared framer-motion variants. Import these instead of re-declaring per component.
 * Reduced-motion is handled by <Reveal> and framer's useReducedMotion — these variants
 * assume motion is allowed; the wrapper swaps to an instant/crossfade path when it isn't.
 */
import type { Variants, Transition } from "framer-motion";

// ease-out-expo — cinematic deceleration, no bounce (see DESIGN.md > Motion).
export const easeOutExpo: Transition["ease"] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: easeOutExpo } },
};

// Parent that staggers its children. Pair with `fadeUp` on each child.
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Instant, motion-free variant used under prefers-reduced-motion.
export const instant: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.01 } },
};
