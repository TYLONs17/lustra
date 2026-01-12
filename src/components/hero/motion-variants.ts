import type { Variants } from "framer-motion";

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
} satisfies Variants;
