"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";

const navigationVariants = cva("uppercase xl:max-w-screen-md", {
  variants: {
    intent: {
      header: "hidden sm:block text-dark text-xs leading-none",
      hero: "text-light text-[0.625rem] sm:text-sm lg:text-base xl:text-lg",
    },
  },
  defaultVariants: {
    intent: "hero",
  },
});

const ulVariants = cva("flex items-end justify-between", {
  variants: {
    intent: {
      header: "gap-2 md:gap-4 lg:gap-7",
      hero: "",
    },
  },
  defaultVariants: {
    intent: "hero",
  },
});

const linkVariants = cva("relative block", {
  variants: {
    intent: {
      header: "pt-3 pb-2",
      hero: "py-3 lg:py-4 xl:py-5",
    },
  },
  defaultVariants: {
    intent: "hero",
  },
});

const barVariants = cva("absolute w-full left-0 bg-current", {
  variants: {
    intent: {
      header: "h-1 top-0",
      hero: "h-1 bottom-0 xl:h-[0.375rem] xl:bottom-auto xl:top-0",
    },
  },
  defaultVariants: {
    intent: "hero",
  },
});

function NavigationBar(variants: VariantProps<typeof barVariants>) {
  return (
    <motion.div
      className={barVariants(variants)}
      style={{ originY: "0px" }}
      layoutId={`current-navigation-${variants.intent}`}
    />
  );
}

export default function Navigation(variants: VariantProps<typeof navigationVariants>) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <nav className={navigationVariants(variants)}>
        <ul className={ulVariants(variants)}>
          <li className="relative">
            <Link href="/montana/" className={linkVariants(variants)}>
              Montana
              {pathname.includes("montana") && <NavigationBar intent={variants.intent} />}
            </Link>
          </li>
          <li className="relative">
            <Link href="/illinois/" className={linkVariants(variants)}>
              Illinois
              {pathname.includes("illinois") && <NavigationBar intent={variants.intent} />}
            </Link>
          </li>
          <li className="relative">
            <Link href="/louisiane-mississippi/" className={linkVariants(variants)}>
              Louisiane & Mississippi
              {pathname.includes("louisiane-mississippi") && <NavigationBar intent={variants.intent} />}
            </Link>
          </li>
          <li className="relative">
            <Link href="/region-de-la-capitale/" className={linkVariants(variants)}>
              Région de la Capitale
              {pathname.includes("region-de-la-capitale") && <NavigationBar intent={variants.intent} />}
            </Link>
          </li>
        </ul>
      </nav>
    </AnimatePresence>
  );
}
