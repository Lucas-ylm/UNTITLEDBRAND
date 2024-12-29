import { motion, MotionValue, useTransform } from "framer-motion";
import { forwardRef } from "react";
import SectionParallax from "./SectionParallax";

type Props = {
  scrollYProgress: MotionValue<number>;
};

const SectionContent = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { scrollYProgress } = props;
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section style={{ scale }} className="relative h-full">
      <div className="absolute left-0 right-0 top-0 h-full">
        <div className="gradient-white absolute left-0 top-0 h-full w-full"></div>
      </div>
      <SectionParallax ref={ref} />
    </motion.section>
  );
});

export default SectionContent;
