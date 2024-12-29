import { useState, useLayoutEffect } from "react";

export type WindowSize = {
  width: number;
  height: number;
  ratio: number;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    ratio: 1,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      const newRatio =
        document.documentElement.clientWidth /
        document.documentElement.clientHeight;
      setWindowSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        ratio: newRatio,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
