"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type SlideInProps = PropsWithChildren<{
  fill?: boolean;
  elementClassName?: string;
  direction?: "bottom" | "top" | "left" | "right";
}>;

export default function SlideIn({ children, elementClassName, direction = "bottom", fill = false }: SlideInProps) {
  return (
    <motion.span
      className={`${fill ? "absolute inset-0 block" : "inline-block"} ${elementClassName}`}
      initial={{
        y: direction === "bottom" ? 16 : direction === "top" ? -16 : 0,
        x: direction === "left" ? 16 : direction === "right" ? -16 : 0,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ margin: "100% 0% -10% 0%" }}>
      {children}
    </motion.span>
  );
}
