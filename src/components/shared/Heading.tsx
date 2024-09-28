import { cva } from "class-variance-authority";
import AnimateSlideIn from "../animations/AnimateSlideIn";

import type { VariantProps } from "class-variance-authority";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type HeadingProps = PropsWithChildren<
  {
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    margin?: boolean;
  } & VariantProps<typeof headerVariants>
>;

const headerVariants = cva("block relative", {
  variants: {
    intent: {
      main: "mb-6	font-serif text-3xl lg:text-5xl xl:text-[3.125rem] lg:leading-tight lg:mb-10",
      title: "mb-4 font-serif text-xl lg:text-4xl xl:text-[2.625rem] lg:leading-tight lg:mb-7 text-balance",
      thin: "mb-4 font-serif text-xl lg:text-4xl xl:text-[2rem] lg:leading-tight lg:mb-7 font-thin",
    },
    color: {
      inherit: "text-inherit",
      primary: "text-primary",
      dark: "text-dark",
      light: "text-light",
    },
  },
  defaultVariants: {
    intent: "title",
    color: "inherit",
  },
});

export default function Heading({ level, margin = true, intent, color, children }: HeadingProps) {
  const Element = level;
  return (
    <Element className={twMerge(headerVariants({ intent, color }), margin ? "" : "mb-0 lg:mb-0")}>
      <AnimateSlideIn>{children}</AnimateSlideIn>
    </Element>
  );
}
