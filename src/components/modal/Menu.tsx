import { animate, motion, useMotionValue } from "framer-motion";
import { ReactNode } from "react";
import useMeasure from "react-use-measure";
import styles from "./menu.module.scss";
import { useAppContext } from "../context/useAppContext";

type Props = {
  children?: ReactNode;
};

export default function Menu({ children }: Props) {
  const { isOpen, setIsOpen, scope } = useAppContext();
  const [drawerRef, { width }] = useMeasure();
  const x = useMotionValue(0);

  const handleClose = async () => {
    if (!scope.current) return;
    animate(scope.current, {
      opacity: [1, 0],
    });
    const xStart = typeof x.get() === "number" ? x.get() : 0;
    await animate("#drawer", {
      x: [xStart, width],
    });

    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className={styles.wrapper}
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className={styles.drawer}
            style={{ x }}
          >
            <div className={styles.grad}>
              <div className={styles.button}>
                <div className={styles.content}>{children}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
