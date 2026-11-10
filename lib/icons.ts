/**
 * Simple Icons used on the Skills chips.
 *
 * Named imports only — tree-shakes to just these ~17 icons instead of
 * bundling the full set (protects bundle size / perf).
 *
 * Each `si*` export carries { title, slug, hex, path, ... }; the chip uses
 * `path` (rendered inline, fill=currentColor → monochrome, tints on hover).
 * Skills with no brand logo in Simple Icons (AWS, Playwright, Delhivery,
 * Gallabox, Scogo, and concepts like REST) simply omit `icon` and render as
 * text-only chips.
 */
import {
  siJavascript,
  siTypescript,
  siNodedotjs,
  siExpress,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siShadcnui,
  siMui,
  siMongodb,
  siShopify,
  siRazorpay,
  siFigma,
  siGit,
  siPostman,
  siVercel,
  siGooglechrome,
} from "simple-icons";
import {
  Network,
  Webhook,
  Box,
  SlidersHorizontal,
  KeyRound,
  Cloud,
  Drama,
  Truck,
  MessageCircle,
  Headset,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

export type SimpleIcon = { path: string; title: string };

export const skillIcons: Record<string, SimpleIcon> = {
  js: siJavascript,
  ts: siTypescript,
  node: siNodedotjs,
  express: siExpress,
  react: siReact,
  next: siNextdotjs,
  tailwind: siTailwindcss,
  shadcn: siShadcnui,
  mui: siMui,
  mongo: siMongodb,
  shopify: siShopify,
  razorpay: siRazorpay,
  figma: siFigma,
  git: siGit,
  postman: siPostman,
  vercel: siVercel,
  chrome: siGooglechrome,
};

/**
 * Generic line icons (lucide) for skills with no brand logo in Simple Icons —
 * concepts (REST, Webhooks), AWS services, and brands whose mark was removed
 * or never present. Chosen to actually represent the thing (Playwright → theater
 * masks, Delhivery → truck, Secrets Manager → key). Outlined vs the filled brand
 * glyphs, but monochrome + same size keeps the row coherent.
 */
export const lucideSkillIcons: Record<string, LucideIcon> = {
  rest: Network,
  webhooks: Webhook,
  s3: Box,
  param: SlidersHorizontal,
  secrets: KeyRound,
  amplify: Cloud,
  playwright: Drama,
  delhivery: Truck,
  gallabox: MessageCircle,
  scogo: Headset,
  shopflo: CreditCard,
};
