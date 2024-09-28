"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEventListener, useWindowSize } from "usehooks-ts";

import type { PropsWithChildren } from "react";

export default function AnimateAfterScrolled({ children }: PropsWithChildren) {
  const [visible, setVisible] = useState(false);
  const { height } = useWindowSize();

  const onScroll = useCallback(() => {
    if (!height || !window) return;
    if (window.scrollY > height) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [height]);

  useEventListener("scroll", onScroll);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            y: 16,
            opacity: 0,
          }}
          exit={{
            y: 16,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
