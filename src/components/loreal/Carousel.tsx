"use client";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../hook/useWindowSize";
import LazySvg from "../svgComponent/LazySvg";
import ExportedPicture from "../templateComponent/ExportedPicture";

type CarouselProps = {
  images: { src: string; alt: string }[];
};

export default function Carousel({ images }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalCards = images.length;
  const duplicatedCards = [images[totalCards - 1], ...images, images[0]];

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        if (currentIndex === totalCards + 1) {
          setCurrentIndex(1);
        } else if (currentIndex === 0) {
          setCurrentIndex(totalCards);
        }
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalCards, isTransitioning]);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const { width } = useWindowSize();
  const translation = width < 1024 ? 75 : 64;
  return (
    <div className="relative flex flex-col items-center">
      <div className="z-[-1] w-screen overflow-hidden">
        <div
          ref={containerRef}
          className="flex w-fit"
          style={{
            transform: `translateX(-${currentIndex * translation}vw)`,
            transition: isTransitioning ? "transform 0.3s ease" : "none",
          }}>
          {duplicatedCards.map((image, index) => (
            <div
              className="h-[32vh] w-[75vw] translate-x-[6vw] lg:h-[75vh] lg:w-[64vw] lg:translate-x-[12vw]"
              key={index}>
              <ExportedPicture
                alt={image?.alt ?? ""}
                src={image?.src ?? ""}
                className="h-full w-full object-cover"
                priority={false}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-[100%] top-[50%] h-[40px] w-[40px] translate-x-[-19vw] s:translate-x-[calc(-21vw+50%)] smd:translate-x-[calc(-19vw+50%)] translate-y-[-50%] lg:translate-x-[calc(-24vw+50%)]">
        <button onClick={handleNext} className="relative">
          <LazySvg width={40} height={40} name="drag-circle" />
        </button>
      </div>
    </div>
  );
}
