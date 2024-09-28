"use client";

import Navigation from "@/components/shared/Navigation";
import Container from "../layout/Container";
import AnimateSlideIn from "../animations/AnimateSlideIn";
import { env } from "@/lib/env";
import { useRef, type PropsWithChildren } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

type HeroProps = PropsWithChildren<{
  image: JSX.Element;
}>;

export default function Hero({ image, children }: HeroProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const smoothYScroll = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 20,
    restDelta: 0.001,
  });
  // const smoothYScroll = scrollYProgress

  const imageY = useTransform(smoothYScroll, (t) => `${t * -10}vh`);
  const cardY = useTransform(smoothYScroll, (t) => `${t * -10}vh`);

  return (
    <section ref={ref} className="overflow-hidden bg-primary">
      <motion.div
        style={{ y: imageY }}
        className="h-hero relative mx-auto flex max-w-screen-xl flex-col xl:flex-row xl:items-end">
        <div className="flex min-h-[7svh] items-end lg:ml-14 xl:ml-0 xl:h-24 xl:flex-1 xl:items-start">
          <Container padding="small">
            <Navigation></Navigation>
          </Container>
        </div>
        <div className="picture-fill relative -mb-28 h-2/3 flex-1 lg:ml-14 xl:absolute xl:bottom-24 xl:left-4 xl:right-[var(--site-gutter)] xl:top-0 xl:m-0 xl:h-auto ">
          <AnimateSlideIn fill={true} direction="left">
            {image}
          </AnimateSlideIn>
        </div>
        <motion.div
          style={{ y: cardY }}
          className="relative z-10 ml-6 flex max-w-[38rem] items-end gap-4 self-end justify-self-end bg-light pb-8 pl-4 pr-7 pt-12 xl:mr-[var(--site-gutter)] xl:gap-11 xl:pb-14 xl:pl-8 xl:pr-20 xl:pt-16">
          <img
            src={`${env.BASE_PATH}/assets/scroll.svg`}
            className="block h-[4.375rem] w-[1.375rem] xl:h-[6.25rem] xl:w-[2rem]"
            alt=""
          />
          <div className="flex-1">{children}</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
