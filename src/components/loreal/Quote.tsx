import React from "react";
import SlideIn from "../animation/SlideIn";
import ExportedPicture from "../templateComponent/ExportedPicture";
import { cn } from "@/lib/utils";

type QuoteProps = {
  className?: string;
  elementClassName?: string;
  children: React.ReactNode;
  direction?: "left" | "right";
  directionQuote?: "left" | "right";
  author?: string;
  about?: string;
  pictureSrc?: string;
};

export const Quote = ({
  className,
  children,
  elementClassName,
  direction = "left",
  directionQuote = "left",
  author,
  about,
  pictureSrc,
}: QuoteProps) => {
  if (!children) return null;

  const directionClass = direction === "left" ? "before:left-0" : "before:right-[20px]";
  const directionQuoteClass = directionQuote === "right" ? "lg:left-[-50px]" : "lg:right-[-50px]";

  return (
    <SlideIn elementClassName={elementClassName}>
      <div
        className={`before:-h-full relative px-[10px] pb-10 pt-20 text-black before:absolute before:bottom-0 before:top-0 before:z-[-2] before:w-[1px] before:bg-black before:content-[''] ${directionClass} ${className}`}>
            <div className="grid">
              {pictureSrc && (
                <ExportedPicture
                  className={cn(
                    "grid-row-1 lg:px-8",
                    direction === "left" ? "ml-[-12px] col-start-1 lg:ml-[-30px]" : "mr-[-10px] col-start-5 lg:mr-[-100px]"
                  )}
                  alt="Pauline Ngomé"
                  src={pictureSrc}
                  priority={true}
                />
              )}
            </div>
          <div
            className={`relative ${directionQuoteClass} ${direction}-[-12px] lg:${direction}-[-50px] mb-5 flex h-fit bg-white px-0 font-bitter text-black`}>
            <div className={`${direction === "left" ? "text-left" : "text-right"} w-full`}>
              <p className="text-[22px] italic font-light leading-[34px] lg:text-[26px] pt-[20px]">{children}</p>
            </div>
          </div>
          <div className="absolute z-[-1] top-1/2 right-[1%] w-full h-[60%] transform -translate-y-1/2 bg-white">
          </div>
          <div className={`px-10 font-roboto ${direction === "left" ? "text-left" : "text-right"}`}>
            {author && <p className="text-[16px] font-bold lg:text-[20px]">{author}</p>}
            {about && (
              <p
                className="text-[14px] lg:text-[16px]"
                dangerouslySetInnerHTML={{ __html: about }}
              ></p>
            )}
          </div>
      </div>
    </SlideIn>
  );
};
