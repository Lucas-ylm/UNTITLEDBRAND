"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import ExportedPicture from "../templateComponent/ExportedPicture";

export default function Hero() {
  const plane1 = useRef<HTMLDivElement>(null);
  const plane2 = useRef<HTMLDivElement>(null);
  const plane3 = useRef<HTMLDivElement>(null);

  const xForce = useMotionValue(0);
  const yForce = useMotionValue(0);

  const easing = 0.05;
  const speed = 0.1;

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { movementX, movementY }: { movementX: number; movementY: number } = e;
    xForce.set(xForce.get() + movementX * speed);
    yForce.set(yForce.get() + movementY * speed);
  };

  const lerp = (start: number, target: number, amount: number) => start * (1 - amount) + target * amount;

  useAnimationFrame(() => {
    const newXForce = lerp(xForce.get(), 0, easing);
    const newYForce = lerp(yForce.get(), 0, easing);

    xForce.set(newXForce);
    yForce.set(newYForce);

    if (plane1.current) {
      plane1.current.style.transform = `translate(${newXForce}px, ${newYForce}px)`;
    }
    if (plane2.current) {
      plane2.current.style.transform = `translate(${newXForce * 0.5}px, ${newYForce * 0.5}px)`;
    }
    if (plane3.current) {
      plane3.current.style.transform = `translate(${newXForce * 0.25}px, ${newYForce * 0.25}px)`;
    }
  });

  return (
    <div onMouseMove={manageMouseMove} style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <motion.div ref={plane3} className="absolute inset-0 h-full w-full overflow-hidden">
        <div className="noise-black absolute left-[50.4%] top-[0%] h-[100vh] w-[59vw] lg:left-[50.4%] lg:top-[0%] lg:h-[100%] lg:w-[65vw]"></div>
      </motion.div>
      <motion.div ref={plane2} className="absolute inset-0 h-full w-full overflow-hidden">
        <div className="relative flex h-full items-end justify-center">
          <ExportedPicture
            src="/assets/images/hero/visages-home.webp"
            alt="ombre-lavande-image"
            className="object-cover lg2:h-full"
            priority={true}
          />
        </div>
      </motion.div>
    </div>
  );
}
