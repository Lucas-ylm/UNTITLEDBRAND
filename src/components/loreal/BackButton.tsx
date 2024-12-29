"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { env } from "@/lib/env";
import ExportedPicture from "../templateComponent/ExportedPicture";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    const handleClick = () => setHasNavigated(true);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  if (pathname === "/") {
    return null;
  }

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (hasNavigated) {
      router.push(`/`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <a
      href={hasNavigated ? "javascript:void(0)" : `/${env.BASE_PATH ? env.BASE_PATH.replace(/^\/+|\/+$/g, "") : ""}`}
      onClick={handleBack}
      className="fixed left-[20px] top-[90px] z-[100] border-none bg-transparent p-0 md:left-[80px]">
      <ExportedPicture
        src="/assets/images/return-button.jpg"
        alt="Retour"
        className="h-auto w-[20px] rounded-[5px] md:w-[40px] md:rounded-[10px]"
        priority={true}
      />
    </a>
  );
}
