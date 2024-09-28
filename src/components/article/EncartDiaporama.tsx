import type { PropsWithChildren } from "react";
import Diaporama from "./Diaporama";

type EncartDiaporamaProps = PropsWithChildren<{
  images: JSX.Element[];
}>;

export default function EncartDiaporama({ images, children }: EncartDiaporamaProps) {
  return (
    <section className="text-light">
      <div className="relative z-10 min-h-[23vw] md:grid md:grid-cols-2">
        <div className="mx-14 mb-14 max-w-[34rem] self-end md:col-start-2 md:row-start-1 md:m-0 md:mb-7 md:mr-14 xl:mb-14 xl:mr-20">
          {children}
        </div>
      </div>
      <div className="relative md:-mt-[23%]">
        <Diaporama
          scale={0.85}
          desktopScale={0.4}
          align="top"
          desktopAlign="bottom"
          heightPercent={1}
          desktopHeightPercent={0.5}
          offset={0}
          desktopOffset={0.1}
          className="mb-0 md:mb-0 lg:mb-0 xl:mb-0"
          images={images}></Diaporama>
      </div>
    </section>
  );
}
