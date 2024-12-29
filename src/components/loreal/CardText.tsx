"use client";
import { ReactNode } from "react";
import { Block } from "./Block";

interface CardTextProps {
  cardTitle: { _type: string; _id: string; children: ReactNode[] }[];
  cardText: { _type: string; _id: string; children: ReactNode[] }[];
  backgroundClass: string;
}

export default function CardText({ cardTitle, cardText, backgroundClass }: CardTextProps) {
  return (
    <div className="-mr-[25px] mb-[50px] mt-[30px] lg:mt-[5px] base:col-start-1 base:col-end-12 xs:-mr-[40px] md:-mr-[60px] lg:col-start-8 lg:col-end-12 lg:mb-[80px]">
      <div className={`flex flex-col ${backgroundClass}`}>
        <Block
          blocks={cardTitle}
          className="px-[25px] pb-[15px] pt-[30px] base:col-start-1 base:row-start-1 lg:px-[50px] lg:pb-[30px] lg:pt-[60px]"
        />
        <Block
          blocks={cardText}
          className="px-[25px] pb-[40px] base:col-start-1 base:row-start-1 lg:px-[50px] lg:pb-[60px]"
        />
      </div>
    </div>
  );
}
