"use client";

import Text from "@/components/shared/Text";
import Link from "next/link";

export default function Cookie() {
  return (
    <div className="align-center my-16 flex flex-col items-center justify-center px-7 text-center text-dark sm:my-20 md:my-24 lg:my-24">
      <Text type="serif">
        Contenus réalisés par <Link className="underline" href="https://instagram.com/lucas.ylm" target="_blank">Lucas.</Link>
      </Text>
    </div>
  );
}
