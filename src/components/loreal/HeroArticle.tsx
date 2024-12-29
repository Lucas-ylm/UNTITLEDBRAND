"use client";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef } from "react";
import ExportedPicture from "../templateComponent/ExportedPicture";
import { env } from "@/lib/env";

type Layer = {
  ref: React.RefObject<HTMLDivElement>;
  elements: {
    src: string;
    alt: string;
    className: string;
    style: React.CSSProperties;
  }[];
};

type HeroArticleProps = {
  plane1: string;
  plane2: string;
  plane3: string;
  plane1ClassName: string;
  plane2ClassName: string;
  plane3ClassName: string;
};

export default function HeroArticle({
  plane1,
  plane2,
  plane3,
  plane1ClassName,
  plane2ClassName,
  plane3ClassName,
}: HeroArticleProps) {
  const plane1Ref = useRef<HTMLDivElement>(null);
  const plane2Ref = useRef<HTMLDivElement>(null);
  const plane3Ref = useRef<HTMLDivElement>(null);

  const xForce = useMotionValue(0);
  const yForce = useMotionValue(0);
  const easing = 0.05;
  const speed = 0.1;

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    xForce.set(xForce.get() + e.movementX * speed);
    yForce.set(yForce.get() + e.movementY * speed);
  };

  const lerp = (start: number, target: number, amount: number) => start * (1 - amount) + target * amount;

  useAnimationFrame(() => {
    const newXForce = lerp(xForce.get(), 0, easing);
    const newYForce = lerp(yForce.get(), 0, easing);

    xForce.set(newXForce);
    yForce.set(newYForce);

    if (plane1Ref.current) plane1Ref.current.style.transform = `translate(${newXForce}px, ${newYForce}px)`;
    if (plane2Ref.current) plane2Ref.current.style.transform = `translate(${newXForce * 0.5}px, ${newYForce * 0.5}px)`;
    if (plane3Ref.current)
      plane3Ref.current.style.transform = `translate(${newXForce * 0.25}px, ${newYForce * 0.25}px)`;
  });

  const layers: Layer[] = [
    {
      ref: plane1Ref,
      elements: [
        {
          src: plane1,
          alt: "cercle-image",
          className: plane1ClassName,
          style: {},
        },
      ],
    },
    {
      ref: plane2Ref,
      elements: [
        {
          src: plane2,
          alt: "visu-article-1-ombre",
          className: plane2ClassName,
          style: {},
        },
      ],
    },
    {
      ref: plane3Ref,
      elements: [
        {
          src: plane3,
          alt: "visu-article-1",
          className: plane3ClassName,
          style: {},
        },
      ],
    },
  ];

  return (
    <div onMouseMove={manageMouseMove} style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      {layers.map((layer, index) => (
        <motion.div key={index} ref={layer.ref} className="absolute inset-0 h-full w-full overflow-hidden">
          {layer.elements.map((element, elIndex) => (
            <div key={elIndex} className={`absolute ${element.className}`} style={element.style}>
              <img src={env.BASE_PATH + element.src} alt={element.alt} className="h-full w-full object-center" />
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
