import type { PropsWithChildren } from "react";
import AnimateParallax from "../animations/AnimateParallax";

type ImageArticleProps = PropsWithChildren<{
  image: JSX.Element;
}>;

export default function ImageArticle({ image, children }: ImageArticleProps) {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-auto flex max-w-screen-xl flex-col xl:flex-row-reverse xl:items-start xl:pt-32">
        <div className="relative ml-7 max-w-screen-md self-end justify-self-end bg-light pb-10 pl-14 pr-7 pt-12 before:bottom-0 lg:max-w-3xl xl:ml-0 xl:max-w-lg xl:self-start xl:pb-28 xl:pr-16 xl:before:absolute xl:before:-left-96 xl:before:-top-32 xl:before:right-[var(--site-gutter)] xl:before:bg-light">
          {children}
        </div>
        <div className="relative pr-7 before:absolute before:bottom-1/2 before:left-0 before:right-0 before:top-0 before:bg-light md:before:right-[-100vw] xl:ml-[var(--site-gutter)] xl:pr-0 xl:before:content-none">
          <div className="relative">
            <AnimateParallax intensity={-10}>{image}</AnimateParallax>
          </div>
        </div>
      </div>
    </section>
  );
}

// max-w-screen-md lg:max-w-[70%]