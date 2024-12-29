import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  ForwardedRef,
} from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedContainer.module.scss";
import { containerAnimation } from "./anim";

const Component = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
  (props, ref) => <div ref={ref} {...props} />
);

Component.displayName = "DynamicComponent";

const MotionComponent = motion(Component);

interface ContainerProps {
  children: React.ReactNode;
  balise?: "div" | "p" | "span" | "h1" | "h2" | "h3";
  trigger?: "load" | "scroll" | "none";
  delay?: number;
  externalTrigger?: boolean;
  startAnimation?: boolean;
  direction?: "up" | "down" | "left" | "right";
  className?: "fullscreenImage" | "imageRight" | "imageRight_force" | "fullscreenImageAbsolute" | "imageLeft" | "" ;
  position?: "absolute";
}

export const AnimatedContainer: React.FC<ContainerProps> = ({
  children,
  balise = "div",
  trigger = "scroll",
  delay = 0,
  externalTrigger = false,
  startAnimation = false,
  direction = "up",
  className = "",
}) => {
  const target = useRef<HTMLElement | null>(null);

  const [isInView, setIsInView] = useState(
    trigger === "load" || startAnimation
  );

  useEffect(() => {
    if (trigger === "load") {
      setIsInView(true);
    }

    if (externalTrigger && startAnimation) {
      setIsInView(true);
    }
  }, [trigger, startAnimation, externalTrigger]);

  return (
    <MotionComponent
      ref={target}
      as={balise}
      initial="initial"
      animate={isInView ? "enter" : "initial"}
      exit="exit"
      className={`${styles["container-wrapper"]} ${styles[className]} `}
      onViewportEnter={() =>
        !externalTrigger && trigger === "scroll" && setIsInView(true)
      }
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div variants={containerAnimation(delay, direction)}>
        {children}
      </motion.div>
    </MotionComponent>
  );
};

export default AnimatedContainer;
