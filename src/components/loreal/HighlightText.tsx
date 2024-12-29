import React, { useEffect, useRef } from "react";
import SlideIn from "../animation/SlideIn";
import SplitType from "split-type";

type HighlightTextProps = {
  className?: string;
  elementClassName?: string;
  children: React.ReactNode;
};

export const HighlightText = ({ className, children, elementClassName = "" }: HighlightTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      const splitText = new SplitType(elementRef.current, { types: "lines" });
      if (!splitText.lines) return;

      const lines = splitText.lines;

      if (lines.length > 1) {
        const lastLine = lines[lines.length - 1] as HTMLElement;
        const secondLastLine = lines[lines.length - 2] as HTMLElement;

        const lastLineWords = lastLine.innerHTML.trim().split(" ");
        const secondLastLineWords = secondLastLine.innerHTML.trim().split(" ");

        if (lastLineWords.length === 1 && secondLastLineWords.length > 0) {
          const wordToMove = secondLastLineWords.pop();
          secondLastLine.innerHTML = secondLastLineWords.join(" ");
          lastLine.innerHTML = `${wordToMove}&nbsp;${lastLine.innerHTML.trim()}`;
        }
      }

      lines.forEach((line, index) => {
        const isFirst = index === 0;
        const isLast = index === lines.length - 1;
        const markClass = `inline ${isFirst ? "mark-first" : ""} ${isLast ? "mark-last" : ""}`.trim();

        const words = line.innerHTML.trim().split(" ");
        if (isLast && words.length > 1) {
          const lastTwoWords = `${words[words.length - 2]}&nbsp;${words[words.length - 1]}`;
          const restOfText = words.slice(0, -2).join(" ");
          line.innerHTML = restOfText ? `${restOfText} ${lastTwoWords}` : lastTwoWords;
        }

        const mark = document.createElement("mark");
        mark.className = markClass;
        mark.innerHTML = line.innerHTML;
        line.innerHTML = "";
        line.appendChild(mark);
      });
    }
  }, [elementRef]);

  if (!children) return null;

  return (
    <div className={className}>
      <SlideIn>
        <div
          ref={elementRef}
          className={`mark-container font-bitter text-[20px] font-extrabold italic lg:text-[18px] ${elementClassName}`}>
          {children}
        </div>
      </SlideIn>
    </div>
  );
};
