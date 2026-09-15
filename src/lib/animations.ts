import type { Variants } from "framer-motion";
import { EASE } from "./constants";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15, ease: EASE },
  },
};

export const mobileMenuVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.4, ease: EASE },
  },
};

export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: 0.1 },
    // Clears the leftover transform so descendant `position: sticky` elements aren't broken by it.
    transitionEnd: { transform: "none" },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.4, ease: EASE },
  },
};

export const curtainVariants: Variants = {
  initial: { scaleY: 1 },
  animate: {
    scaleY: 0,
    transition: { duration: 0.6, ease: EASE },
  },
  exit: {
    scaleY: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};
