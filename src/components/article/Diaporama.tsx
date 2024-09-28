"use client";

import { env } from "@/lib/env";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type DiaporamaProps = {
  images: JSX.Element[];
  align?: "top" | "bottom";
  desktopAlign?: "top" | "bottom";
  offset?: number;
  desktopOffset?: number;
  heightPercent?: number;
  desktopHeightPercent?: number;
  scale?: number;
  desktopScale?: number;
  className?: string;
  slideClassName?: string;
};

type SwipeDirection = "up" | "left" | "down" | "right";

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

function useOnSwipe<T extends HTMLElement>(onSwipe: (direction: SwipeDirection) => void) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target || !window) return;

    const pos: {
      x?: number;
      y?: number;
    } = {};

    function handleTouchStart(e: TouchEvent) {
      window.addEventListener("touchend", handleTouchEnd);
      pos.x = undefined;
      pos.y = undefined;

      const touch = e.touches[0];
      if (touch) {
        pos.x = touch.clientX;
        pos.y = touch.clientY;
      }
    }

    function handleTouchEnd(e: TouchEvent) {
      window.removeEventListener("touchend", handleTouchEnd);

      const touch = e.changedTouches[0];
      if (touch && typeof pos.x === "number" && typeof pos.y === "number") {
        const x = pos.x - touch.clientX;
        const y = pos.y - touch.clientY;

        if (Math.abs(x) > Math.abs(y)) {
          if (x < 0) onSwipe("left");
          else onSwipe("right");
        } else {
          if (y < 0) onSwipe("up");
          else onSwipe("down");
        }
      }

      pos.x = undefined;
      pos.y = undefined;
    }

    target.addEventListener("touchstart", handleTouchStart);

    return () => {
      target.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipe]);

  return ref;
}

function useWindowSize() {
  const [size, setSize] = useState<[number, number]>([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Diaporama({
  images,
  align = "top",
  desktopAlign,
  offset = 0,
  desktopOffset,
  heightPercent = 0.45,
  desktopHeightPercent = 0.55,
  scale = 0.85,
  desktopScale,
  className,
  slideClassName,
}: DiaporamaProps) {
  const [current, setCurrent] = useState(0);
  const [innerWidth] = useWindowSize();

  const onSwipe = useCallback(
    (direction: SwipeDirection) => {
      const max = images.length - 1;
      if (direction === "left") {
        setCurrent((current) => clamp(current - 1, 0, max));
      } else if (direction === "right") {
        setCurrent((current) => clamp(current + 1, 0, max));
      }
    },
    [images]
  );

  const ref = useOnSwipe<HTMLDivElement>(onSwipe);

  const handleCurrent = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(index, images.length - 1)));
    },
    [images]
  );

  const isMobile = innerWidth <= 768;
  const currentAlign = isMobile ? align : desktopAlign ?? align;
  const currentHeightPercent = isMobile ? heightPercent : desktopHeightPercent ?? heightPercent;
  const currentScale = isMobile ? scale : desktopScale ?? scale;
  const currentOffset = (currentAlign === "top" ? 1 : -1) * (isMobile ? offset : desktopOffset ?? offset);
  const maxHeight = Math.ceil(innerWidth * currentHeightPercent);
  const margin = isMobile ? 4 : 16;
  let totalWidth = 0;
  let arrowPosition = 0;
  let leftPosition = 0;

  const imagesRender = images.map((image, index) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const width = Number(image.props.width) || 0;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const height = Number(image.props.height) || 0;

    const isCurrent = index <= current;
    const maxWidth = (maxHeight * width) / height;

    const left = totalWidth;
    if (isCurrent) leftPosition = totalWidth;
    const currentWidth = isCurrent ? maxWidth + margin : maxWidth * currentScale + margin;

    totalWidth = left + currentWidth;
    arrowPosition = Math.max(arrowPosition, currentWidth);

    return (
      <div
        key={index}
        onClick={() => handleCurrent(index)}
        className={twMerge(
          `absolute left-0 transition-transform duration-300`,
          currentAlign === "top" ? "top-0 origin-top-left" : "bottom-0 origin-bottom-left",
          slideClassName
        )}
        style={{
          width: `${maxWidth}px`,
          height: `${maxHeight}px`,
          transform: `translateX(${left}px) translateY(${isCurrent ? 0 : maxHeight * currentOffset}px) scale(${isCurrent ? 1 : currentScale})`,
        }}>
        {image}
      </div>
    );
  });

  return (
    <div ref={ref} className={twMerge("relative overflow-hidden md:mb-14 lg:mb-20 xl:mb-32", className)}>
      <div
        className="relative flex transition-transform duration-300"
        style={{ transform: `translateX(-${leftPosition}px)`, height: `${maxHeight}px` }}>
        {imagesRender}
      </div>
      <div
        className="absolute bottom-0 right-2 z-10 flex max-w-14 justify-between before:absolute before:top-1/2 before:h-px before:w-full before:bg-dark before:opacity-50 md:max-w-16 lg:max-w-24"
        style={{ left: `${arrowPosition}px` }}>
        <button onClick={() => handleCurrent(current - 1)}>
          <img
            className="relative h-[1rem] w-[1rem] md:h-[1.5rem] md:w-[1.5rem] lg:h-[2rem] lg:w-[2rem]"
            src={`${env.BASE_PATH}/assets/arrow.svg`}
            alt="Previous"
          />
        </button>
        <button onClick={() => handleCurrent(current + 1)}>
          <img
            className="relative h-[1rem] w-[1rem] rotate-180 md:h-[1.5rem] md:w-[1.5rem] lg:h-[2rem] lg:w-[2rem]"
            src={`${env.BASE_PATH}/assets/arrow.svg`}
            alt="Next"
          />
        </button>
      </div>
    </div>
  );
}
