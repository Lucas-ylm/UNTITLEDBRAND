"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import type { PropsWithChildren } from "react";

type Edge = "start" | "end" | "center";
type AnimateParallaxProps = PropsWithChildren<{
  intensity?: number;
  offset?: [`${Edge} ${Edge}`, `${Edge} ${Edge}`];
  className?: string;
}>;

export default function AnimateParallax({
  children,
  intensity = 10,
  offset = ["end start", "start end"],
  className = "inline-block",
}: AnimateParallaxProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const smoothYScroll = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 20,
    restDelta: 0.001,
  });
  const y = useTransform(smoothYScroll, (t) => `${(t - 0.5) * intensity}vh`);

  return (
    <motion.span
      className={`${className}`}
      ref={ref}
      style={{
        y,
      }}>
      {children}
    </motion.span>
  );
}