import React from "react";
import SlideIn from "../animation/SlideIn";
import { cn } from "@/lib/utils";

type TagProps = {
  className?: string;
  elementClassName?: string;
  children: React.ReactNode;
};

export const Tag = ({ className, children, elementClassName = "" }: TagProps) => {
  if (!children) return null;

  return (
    <div className={className}>
      <SlideIn>
        <p
          className={cn(
            "bg-yellow-light px-[15px] py-[8px] text-center text-[18px] font-bold uppercase text-black",
            elementClassName
          )}>
          {children}
        </p>
      </SlideIn>
    </div>
  );
};
