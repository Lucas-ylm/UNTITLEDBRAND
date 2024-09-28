import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";
import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<VariantProps<typeof container>>;

const container = cva("w-full mx-auto", {
  variants: {
    type: {
      flex: "flex",
    },
    size: {
      screen: "max-w-screen-xl",
      article: "max-w-2xl",
      small: "max-w-xl",
    },
    direction: {
      mobileColumn: "flex-col lg:flex-row",
    },
    padding: {
      none: "px-0 lg:px-6",
      small: "px-4",
      regular: "px-7",
      bottom: "px-7 lg:pb-20 pb-8",
    },
    justify: {
      center: "justify-center",
      start: "justify-flex-start",
      end: "justify-flex-end",
      between: "justify-between",
    },
    items: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
    },
  },
  defaultVariants: {
    size: "screen",
    padding: "regular",
  },
});

export default function Container({ children, type, size, padding, justify, items, direction }: ContainerProps) {
  return <div className={container({ type, size, padding, justify, items, direction })}>{children}</div>;
}
