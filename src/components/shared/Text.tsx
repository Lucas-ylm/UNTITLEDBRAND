import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";
import type { PropsWithChildren } from "react";
import AnimateSlideIn from "../animations/AnimateSlideIn";

type TextProps = PropsWithChildren<
  {
    element?: "p" | "span" | "strong" | "em" | "sub" | "sup";
  } & VariantProps<typeof textVariants>
>;

const textVariants = cva("block relative", {
  variants: {
    size: {
      base: "text-sm xs:text-base lg:text-lg 2xl:text-xl",
    },
    intent: {
      none: "m-0",
      p: "mb-4 last:mb-0",
    },
    type: {
      sans: "font-sans",
      serif: "font-serif",
    },
    color: {
      inherit: "text-inherit",
      primary: "text-primary",
      dark: "text-dark",
      light: "text-light",
    },
  },
  defaultVariants: {
    size: "base",
    intent: "p",
    type: "sans",
    color: "inherit",
  },
});

export default function Text({ element = "p", size, intent, color, type, children }: TextProps) {
  const Element = element;
  return (
    <Element className={textVariants({ size, intent, color, type })}>
      <AnimateSlideIn>{children}</AnimateSlideIn>
    </Element>
  );
}
