import React from "react";
import SlideIn from "../animation/SlideIn";

type TitleProps = {
  className?: string;
  elementClassName?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

export const Title = ({ className, children, elementClassName, level = "h1" }: TitleProps) => {
  if (!children) return null;

  const titleClassName = (() => {
    switch (level) {
      case "h1":
        return "mb-8 font-bitter text-[40px] font-extrabold italic text-black lg:text-[60px]";
      case "h2":
        return "mb-8 font-bitter text-[36px] font-extrabold italic text-white lg:text-[36px]";
      case "h3":
        return "mb-8 font-bitter text-[32px] font-extrabold italic text-white lg:text-[32px]";
      default:
        return "";
    }
  })();

  return (
    <div className={className}>
      <SlideIn>{React.createElement(level, { className: titleClassName + " " + elementClassName }, children)}</SlideIn>
    </div>
  );
};
