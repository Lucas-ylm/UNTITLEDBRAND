"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useWindowSize } from "../hook/useWindowSize";
import Hero from "../loreal/Hero";
import LazySvg from "../svgComponent/LazySvg";

type SectionHeroProps = {
  scrollYProgress: MotionValue<number>;
};

export default function SectionHero({ scrollYProgress }: Readonly<SectionHeroProps>) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const opacity = useTransform(scrollYProgress, [0.4, 1], [1, 0]);
  const blurFilter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(30px)"]);
  const { width } = useWindowSize();

  return (
    <motion.section style={{ scale, opacity }} className="sticky top-[0px] h-screen w-full">
      <div className="gradient-white h-full w-full"></div>

      <Hero />

      {width > 768 && (
        <>
        <div className="absolute inset-0 flex flex-col items-end justify-end pb-[15px] pr-[15px]">
          <p className="text-white font-[12px] font-roboto">CreAITech & Ogilvy Paris générée par l'IA</p>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-[35px]">
          <LazySvg 
            name="scroll-arrow" 
            width={40} 
            height={40} 
            className="text-center z-10 font-roboto text-[26px] font-normal text-white transition-transform duration-300 hover:translate-y-[10px]"
          />
        </div>
        </>
      )}

      <motion.div
        style={{ backdropFilter: blurFilter }}
        className=" absolute inset-0"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          backdropFilter: { duration: 0.5 },
        }}>
        <div className="flex h-full w-full flex-col font-bitter lg:items-center lg:justify-center">
          <h1 className="mt-[145px] text-center text-[56px] font-light leading-[100%] text-white lg:mt-[0] lg:text-[77px] lg:leading-[100%]">
            La beauté <br />
            <span className="font-black">créatrice</span>
          </h1>
        </div>
      </motion.div>
    </motion.section>
  );
}
