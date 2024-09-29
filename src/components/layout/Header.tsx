import Container from "./Container";
import type { PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
  partenaireLogo: JSX.Element;
  partenaireURL?: string;
}>;

export default function Header({ children }: HeaderProps) {
  return (
    <header className="fixed z-50 flex h-[var(--header-height)] w-full flex-col bg-[#ffffff]">
      <div className="flex flex-1 items-center justify-center border-b border-b-[#eaeef0]">
        <Container type="flex" justify="between" padding="small">
          <div className="overflow-hidden">{children}</div>
        </Container>
      </div>
    </header>
  );
}
