"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { profile, tagline } from "@/lib/data";
import { easeOutExpo } from "@/lib/motion";

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Subtle parallax: content drifts up and fades as you scroll past.
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: reduce ? 0 : 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOutExpo } },
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[86svh] flex-col justify-center overflow-hidden px-5 pt-24 pb-16 sm:px-8"
    >
      {/* Cinematic letterbox bars — subtle movie framing. */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[8svh] bg-gradient-to-b from-bg to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[8svh] bg-gradient-to-t from-bg to-transparent" />
      {/* faint HUD grid glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 top-1/4 h-[40rem] w-[40rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 60%)" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y, opacity }}
        className="mx-auto w-full max-w-6xl"
      >
        <motion.p variants={item} className="hud-label mb-6">
          {profile.role} · {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-[16ch] text-[clamp(2.75rem,8vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.04em]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-[48ch] text-[clamp(1.1rem,2.2vw,1.5rem)] text-muted"
        >
          {tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-medium text-primary-ink transition-transform hover:-translate-y-0.5"
          >
            Connect on LinkedIn
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 font-medium text-ink transition-colors hover:border-primary"
          >
            Email me
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-2 py-3 font-medium text-muted transition-colors hover:text-ink"
          >
            Résumé ↗
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: reduce ? 1 : [0.4, 1, 0.4] }}
        transition={reduce ? undefined : { duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
