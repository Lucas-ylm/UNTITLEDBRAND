import Container from "./Container";
import { env } from "@/lib/env";
import type { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  partenaireLogo: JSX.Element;
  partenaireURL?: string;
}>;

export default function Header({ partenaireLogo, partenaireURL, children }: HeaderProps) {
  return (
    <header className="fixed z-50 flex h-[var(--header-height)] w-full flex-col border-t-[0.25rem] border-t-[#106c9b] bg-[#ffffff]">
      <div className="flex items-center justify-center border-b border-b-[#eaeef0]">
        <Container type="flex" justify="between" padding="small">
          <a href="/" rel="noopener" target="_blank" className="flex items-center gap-2 py-[9px]">
            <img
              src={`${env.BASE_PATH}/assets/home.svg`}
              width={14}
              height={14}
              className="h-[14px] w-[14px]"
              alt="Home"
            />
          </a>
          <button className="group relative pb-[11px] pt-[10px]">
            <img src={`${env.BASE_PATH}/assets/info.svg`} width={16} height={16} alt="Info" />
            <span className="after:invisble invisible absolute -right-2 top-11 z-50 w-100 max-w-xs border border-[#eaeef0] bg-white px-6 py-3 text-left text-xs shadow-2xl before:absolute before:-top-3 before:right-2 before:h-0 before:border-b-[12px] before:border-l-[8px] before:border-r-[8px] before:border-[#eaeef0] before:border-l-transparent before:border-r-transparent after:absolute after:-top-3 after:right-2 after:mt-[1.5px] after:h-0 after:border-b-[12px] after:border-l-[8px] after:border-r-[8px] after:border-[#ffffff] after:border-l-transparent after:border-r-transparent group-hover:visible">
              Contenus réalisés par les équipes de M Publicité, la régie publicitaire du Monde. La rédaction n’a pas
              participé à leur réalisation.
            </span>
          </button>
        </Container>
      </div>
      <div className="flex flex-1 items-center justify-center border-b border-b-[#eaeef0]">
        <Container type="flex" justify="between" padding="small">
          {partenaireURL ? (
            <a href={partenaireURL} className="flex items-center gap-2 text-xs" target="_blank" rel="noopener">
              Proposé par {partenaireLogo}
            </a>
          ) : (
            <div className="flex items-center gap-2 text-xs">Proposé par {partenaireLogo}</div>
          )}
          <div className="overflow-hidden">{children}</div>
        </Container>
      </div>
    </header>
  );
}
