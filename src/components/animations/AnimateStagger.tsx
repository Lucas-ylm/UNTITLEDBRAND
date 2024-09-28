"use client";

import { motion } from "framer-motion";

import type { PropsWithChildren } from "react";

export default function AnimateStagger({ children }: PropsWithChildren) {
  return (
    <motion.div
      transition={{
        staggerChildren: 1,
      }}>
      {children}
    </motion.div>
  );
}
