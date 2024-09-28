import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<VariantProps<typeof sectionVariants>>;

const sectionVariants = cva("relative block mx-0 px-0", {
  variants: {
    background: {
      primary: "bg-primary",
    },
    margin: {
      none: "my-0",
      small: "my-4 lg:my-7",
      normal: "my-7 lg:my-14",
      large: "my-14 lg:my-20",
    },
    padding: {
      none: "py-0",
      small: "py-4 lg:py-7",
      normal: "py-7 lg:py-14",
      "bottom-normal": "pb-7 lg:pb-14",
      large: "py-14 lg:py-20",
      "bottom-large": "pb-14 lg:pb-20",
      horizontal: "py-7 lg:py-14 px-7 lg:px-14",
    },
    clip: {
      true: "overflow-hidden"
    }
  },
  defaultVariants: {
    margin: "normal",
    padding: "none",
  },
});

export default function Section({ children, background, margin, padding, clip }: SectionProps) {
  return <section className={sectionVariants({ background, margin, padding, clip })}>{children}</section>;
}
