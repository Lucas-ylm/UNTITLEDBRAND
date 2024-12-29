"use client";
import React from "react";
import HomeSvg from "/public/svg/home.svg";
import IdfSvg from "/public/svg/idf.svg";
import LeMondeSvg from "/public/svg/le-monde.svg";
import InfoSvg from "/public/svg/info.svg";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-[1] w-full flex flex-col bg-white" style={{ zIndex: 50 }}>
      <div className="flex h-[45px] items-center justify-between border-b-[1px] border-t-[4px] border-b-[#eff0f3] border-t-[#026b9c] px-[6.25vw] pt-0">
        <div className="flex items-center gap-[14px]">
          <HomeSvg className="h-[16px] w-[16px]" />
          <LeMondeSvg className="h-[20px]" />
        </div>
        <button className="group relative pb-[11px] pt-[10px]">
            <InfoSvg width={28} height={28} alt="Info" className="w-[28px] h-[28px]" />
            <span className="text-black after:invisble invisible text-black absolute -right-2 top-11 w-100 w-max max-w-xs border border-[#eaeef0] bg-white px-6 py-3 text-left text-xs shadow-2xl before:absolute before:-top-3 before:right-2 before:h-0 before:border-b-[12px] before:border-l-[8px] before:border-r-[8px] before:border-[#eaeef0] before:border-l-transparent before:border-r-transparent after:absolute after:-top-3 after:right-2 after:mt-[1.5px] after:h-0 after:border-b-[12px] after:border-l-[8px] after:border-r-[8px] after:border-[#ffffff] after:border-l-transparent after:border-r-transparent group-hover:visible">
              Contenus réalisés par les équipes de M Publicité, la régie publicitaire du Monde. La rédaction n&aposa pas
              participé à leur réalisation.
            </span>
          </button>
      </div>
      <div className="flex h-[45px] items-center justify-between px-[6.25vw] border-b-[1px] border-b-[#eff0f3]">
        <div className="flex items-center gap-[11px]">
          <div className="font-roboto text-[13px] text-black">Proposé par</div>
          <IdfSvg />
        </div>
      </div>
    </header>
  );
}
