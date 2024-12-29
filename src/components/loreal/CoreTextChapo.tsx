import React from "react";
import SlideIn from "../animation/SlideIn";
import { cn } from "@/lib/utils";

type CoreTextChapoProps = {
  className?: string;
  elementClassName?: string;
  children: React.ReactNode;
};

export const CoreTextChapo = ({ className, children, elementClassName = "" }: CoreTextChapoProps) => {
  if (!children) return null;

  return (
    <div className={className}>
      <SlideIn>
        <p className={cn(`font-roboto text-[20px] lg:text-[20px]`, elementClassName)}>
          {children}
        </p>
      </SlideIn>
    </div>
  );
};