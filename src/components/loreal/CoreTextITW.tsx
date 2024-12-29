import React from "react";
import SlideIn from "../animation/SlideIn";
import { cn } from "@/lib/utils";

type CoreTextITWProps = {
  className?: string;
  elementClassName?: string;
  children: React.ReactNode;
};

export const CoreTextITW = ({ className, children, elementClassName = "" }: CoreTextITWProps) => {
  if (!children) return null;

  return (
    <div className={className}>
      <SlideIn>
        <p className={cn(`font-roboto text-[14px] lg:text-[16px]`, elementClassName)}>
          {children}
        </p>
      </SlideIn>
    </div>
  );
};