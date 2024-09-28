import type { PropsWithChildren } from "react";

type ImageShowProps = PropsWithChildren<{
  image: JSX.Element;
}>;

export default function ImageShow({ image, children }: ImageShowProps) {
  return (
    <section className="relative flex flex-col before:absolute before:bottom-14 before:left-0 before:right-0 before:top-14 before:bg-primary md:before:bottom-20 md:before:top-20 lg:before:bottom-24 lg:before:top-24 xl:before:bottom-32 xl:before:top-32">
      <div className="relative z-10 flex justify-end pl-7 md:pl-14 lg:pl-24 xl:pl-0">
        <div className="relative xl:max-w-[80%]">{image}</div>
      </div>
      <div className="relative mr-7 self-start justify-self-end pb-12 pl-14 pr-7 pt-10 before:absolute before:-top-14 before:bottom-0 before:left-0 before:right-0 before:bg-light md:mx-auto md:w-full md:max-w-2xl md:pl-7 md:before:-left-[50vw] md:before:-top-20 md:before:right-28 lg:pb-16 lg:pt-14 lg:before:-top-24 xl:pb-24 xl:pt-16 xl:before:-top-32">
        <div className="max-w-md">{children}</div>
      </div>
    </section>
  );
}
