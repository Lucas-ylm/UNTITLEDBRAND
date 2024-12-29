import LazySvg from "../svgComponent/LazySvg";

type ContentProps = {
  title: string;
  waitingTitle: React.ReactNode;
  waitingText: React.ReactNode;
  isHovered: boolean;
};

export default function Content({ title, waitingTitle, waitingText, isHovered }: Readonly<ContentProps>) {
  return (
    <div className="relative flex h-full w-full flex-col p-[20px]">
      <div className="mb-5 flex items-start justify-between">
        <p className={`ml-[8px] mt-6 font-roboto text-lg uppercase text-black lg:text-xl`}>{title}</p>
        <div className="flex h-[45px] w-[45px] items-center justify-center lg:h-[55px] lg:w-[55px] 2xl:h-[60px] 2xl:w-[72px]"></div>
        <div className="relative flex h-[40px] w-[40px] items-center justify-center">
          {isHovered && (
            <LazySvg name="vignette-arrow" width={42} height={42} className="absolute left-0 top-0 text-black" />
          )}
          {!isHovered && (
            <LazySvg
              name="arrow"
              width={40}
              height={40}
              className={`absolute left-0 top-0 z-5 ${isHovered ? "text-white" : "text-dark-brown"}`}
            />
          )}
        </div>
      </div>
      <div className="flex flex-grow flex-col justify-between">
        <h3 className={`font-bitter text-[clamp(30px,4vmin,66px)] font-light leading-[130%] text-black`}>
          {waitingTitle}
        </h3>
      </div>
    </div>
  );
}
