import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

interface CountProps {
  start: number;
  end: number;
  duration: number;
  delay?: number;
  style?: "small" | "mid" | "big";
  showPlusSign?: boolean;
  showPercentage?: boolean;
  showAns?: boolean;
  addSpaceNumber?: boolean;
}

export const Count: React.FC<CountProps> = ({
  start,
  end,
  duration,
  delay = 0,
  style = "small",
  showPlusSign = false,
  showPercentage = false,
  showAns = false,
  addSpaceNumber = true,
}) => {
  const count = useMotionValue(start);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      setTimeout(() => {
        const controls = animate(count, end, {
          duration: duration,
          ease: [0.42, 0, 0.58, 1],
        });

        return controls.stop;
      }, delay * 1000);
    }
  }, [isInView, hasAnimated, count, end, duration, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latestValue) => {
      setDisplayValue(latestValue);
    });

    return () => unsubscribe();
  }, [rounded]);

  return (
    <span ref={ref}>
      <motion.span>
      {showPlusSign && "+"}
        {addSpaceNumber
          ? displayValue.toLocaleString("fr-FR")
          : displayValue}
        {showPercentage && "%"}
        {showAns && " ans"}
      </motion.span>
    </span>
  );
};
