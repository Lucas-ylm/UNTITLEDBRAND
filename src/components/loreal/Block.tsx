import React from "react";
import SlideIn from "../animation/SlideIn";

type BlockItem = {
  _type?: string;
  _id: string;
  children: React.ReactNode[];
};

type Props = {
  blocks: BlockItem[] | undefined;
  className?: string;
};

const BlockRenderer = ({ block }: { block: BlockItem }) => {
  const { _type, children } = block;

  switch (_type) {
    case "empty":
      return <span>{children}</span>;
    case "normal":
      return <p className="text-start">{children}</p>;
    case "slider-text":
      return <p className="font-bitter text-[16px] font-normal leading-6 text-white lg:leading-8">{children}</p>;
    case "*-text":
      return <p className="font-roboto text-[14px] font-light leading-8 text-black">{children}</p>;
    case "coreText":
      return (
        <p className="font-bitter text-[14px] font-light leading-[24px] lg:text-[16px] lg:leading-[30px]">
          {children}
        </p>
      );
    case "coreText2":
      return (
        <p className="font-roboto text-[20px] font-normal leading-[24px] lg:text-[22px] lg:leading-[30px]">
          {children}
        </p>
      );
    case "coreText3":
      return (
        <p className="font-roboto text-[18px] font-normal leading-[24px] lg:text-[20px] lg:leading-[30px]">
          {children}
        </p>
      );

    case "cardTitle":
      return (
        <p className="font-bitter text-[22px] font-normal leading-[32px] text-brown-dark lg:text-[24px] lg:leading-[26px]">
          {children}
        </p>
      );
    case "cardText":
      return <p className="text-[16px] font-normal leading-[24px] text-brown-dark">{children}</p>;
    case "legend":
      return <p className="font-roboto mt-4 text-xs font-light lg:mt-8 lg:text-sm">{children}</p>;
    case "special":
      return <p className="font-roboto text-xs font-normal lg:text-base">{children}</p>;
    case "intro":
      return <p className="text-2xl font-medium italic leading-8">{children}</p>;

    case "h1":
      return <h1 className="font-bitter text-3xl font-light leading-tight lg:text-7xl">{children}</h1>;
    case "h2":
      return (
        <h2 className="font-bitter text-[22px] font-bold italic leading-[27px] lg:text-[40px] lg:leading-[46px]">
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-bitter text-[26px] font-bold italic leading-[34px] text-brown-dark lg:text-[44px] lg:leading-[52px]">
          {children}
        </h3>
      );
    case "h4":
      return <h4 className="text-2xl font-normal leading-6">{children}</h4>;
    case "h1Vignette":
      return <h1 className="font-bitter text-[28px] font-light leading-[130%] text-brown-dark">{children}</h1>;

    case "interview":
      return (
        <h1 className="bg-brown-dark px-[15px] py-[8px] text-center text-[18px] font-bold uppercase text-white">
          {children}
        </h1>
      );
    case "h1Interview":
      return (
        <h1 className="mb-8 font-bitter text-[40px] font-extrabold italic text-white lg:text-[60px]">{children}</h1>
      );
    case "h1Interviewblack":
      return (
        <h1 className="font-bitter text-[40px] font-extrabold italic text-black lg:text-[60px]">{children}</h1>
      );
    case "h2Interview":
      return (
        <h2 className="mb-8 font-bitter text-[36px] font-extrabold italic text-white lg:text-[36px]">{children}</h2>
      );
    case "h2Interviewblack":
      return (
        <h2 className="font-bitter text-[18px] font-extrabold italic text-brown-dark text-end s:text-[20px] lg:text-[24px]">{children}</h2>
      );
    case "textInterviewDescription":
      return <p className="font-roboto text-justify text-[24px] font-normal text-white">{children}</p>;
    case "textInterviewDescriptionblack":
      return <p className="font-roboto text-justify text-[18px] s:text-[20px] lg:text-[24px] font-normal text-brown-dark text-end">{children}</p>;
    case "textInterview":
      return <p className="font-roboto text-justify text-xl font-normal leading-8">{children}</p>;
    case "h3Interview":
      return <h3 className="my-16 font-bitter text-[26px] font-extrabold italic leading-[30px]">{children}</h3>;
    case "h2Extrait":
      return <p className="font-bitter text-[22px] font-extrabold italic leading-[32px] lg:text-[26px]">{children}</p>;
    case "interview-text":
      return <p className="font-bitter text-[16px] font-normal text-black">{children}</p>;
    case "interview-main-text":
      return <p className="font-roboto text-[16px] leading-[26px] font-normal text-black">{children}</p>;

    case "quote":
      return <p className="font-bitter text-[110px] font-normal italic leading-[0.8] text-brown-dark">{children}</p>;

    case "highlitedText":
      return (
        <span className="font-bitter text-[22px] font-bold italic xs:text-[24px] md:text-[32px] lg:text-[36px] lg2:text-[40px]">
          {children.map((line, index) => {
            const isFirst = index === 0;
            const isLast = index === children.length - 1;
            const markClass = `${isFirst ? "mark-first" : ""} ${isLast ? "mark-last" : ""}`.trim();

            return (
              <mark key={index} className={markClass} style={{ display: "inline" }}>
                {line}
              </mark>
            );
          })}
        </span>
      );

    case "highlitedInterview":
      return (
        <span className="font-bitter text-[20px] font-bold italic lg:text-[22px]">
          {children.map((line, index) => {
            const isFirst = index === 0;
            const isLast = index === children.length - 1;
            const markClass = `${isFirst ? "mark-first" : ""} ${isLast ? "mark-last" : ""}`.trim();

            return (
              <mark key={index} className={markClass} style={{ display: "inline" }}>
                {line}
              </mark>
            );
          })}
        </span>
      );
    case "bulletList":
      return <ul>{children}</ul>;
    default:
      return null;
  }
};

export const Block = ({ blocks, className }: Props) => {
  if (!blocks) return null;

  return (
    <div className={className}>
      <SlideIn>
        {blocks.map((block) => (
          <BlockRenderer key={block._id} block={block} />
        ))}
      </SlideIn>
    </div>
  );
};
