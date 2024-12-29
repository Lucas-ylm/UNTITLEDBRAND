import React from "react";
import SlideIn from "../animation/SlideIn";
import { cn } from "@/lib/utils";

type CoreTextProps = {
  className?: string;
  elementClassName?: string;
  children: React.ReactNode;
};

export const CoreText = ({ className, children, elementClassName = "" }: CoreTextProps) => {
  if (!children) return null;

  return (
    <div className={className}>
      <SlideIn>
        <p className={cn(`font-bitter font-light text-[14px] leading-[24px] lg:text-[16px] lg:leading-[30px]`, elementClassName)}>
          {children}
        </p>
      </SlideIn>
    </div>
  );
};
