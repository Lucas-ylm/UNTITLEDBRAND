"use client";
import LazySvg from "../svgComponent/LazySvg";

type Props = { isActive: boolean };

export default function Puce({ isActive }: Props) {
  return (
    <div className="flex h-[40px] w-[40px] items-center justify-center lg:h-[55px] lg:w-[55px] 2xl:h-[65px] 2xl:w-[65px]">
      <div className="relative flex h-[40px] w-[40px] items-center justify-center">
        {isActive ? (
          <>
            <LazySvg name="round" width={42} height={42} className="absolute left-0 top-0" />
            <LazySvg name="arrow" width={40} height={40} className="text-dark-brown absolute left-0 top-0 z-5" />
          </>
        ) : (
          <LazySvg name="arrow" width={40} height={40} className="text-dark-brown absolute left-0 top-0" />
        )}
      </div>
    </div>
  );
}
