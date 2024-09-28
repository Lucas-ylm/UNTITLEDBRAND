"use client";

import { AnimatePresence } from "framer-motion";

import type { PropsWithChildren } from "react";

export default function AnimatePresenceWrapper({ children }: PropsWithChildren) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
