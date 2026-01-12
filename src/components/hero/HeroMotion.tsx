"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./motion-variants";


export function FadeUp({
  children,
  delay = 0,
  inView = true,
}: {
  children: React.ReactNode;
  delay?: number;
  inView?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      {...(inView
        ? {
            whileInView: "visible",
            viewport: { once: true, margin: "-100px" },
          }
        : {
            animate: "visible",
          })}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

