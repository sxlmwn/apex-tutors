/**
 * Shared Framer Motion Spring & Easing Presets for Apex Tutors Design System
 * Ensures cohesive, consistent physics across Modals, Drawers, Cards & Floating Previews.
 */

import { Transition, Variants } from "framer-motion";

// Primary spring configuration for interactive cards, modals, and scale physics
export const springConfig: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 24,
  mass: 0.6,
};

// Snappy spring for quick micro-interactions (buttons, icons, pills)
export const snappySpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 28,
  mass: 0.5,
};

// Smooth spring for cursor tracking and dragging physics
export const smoothDragSpring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 22,
  mass: 0.8,
};

// Backdrop overlay fade variants
export const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

// Spring Modal entrance/exit variants (with signature hover.dev scale & spring bounce)
export const springModalVariants: Variants = {
  initial: {
    scale: 0.88,
    opacity: 0,
    y: 20,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: springConfig,
  },
  exit: {
    scale: 0.88,
    opacity: 0,
    y: 16,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

// Drag Close Drawer slide variants for bottom sheet
export const drawerVariants: Variants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: "0%",
    transition: smoothDragSpring,
  },
  exit: {
    y: "100%",
    transition: { duration: 0.24, ease: [0.32, 0.72, 0, 1] },
  },
};

// Full-screen Cutout Loader fade out exit variants
export const loaderVariants: Variants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

