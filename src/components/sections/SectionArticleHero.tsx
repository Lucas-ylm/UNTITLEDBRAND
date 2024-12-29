import { useWindowSize } from "../hook/useWindowSize";
import LazySvg from "../svgComponent/LazySvg";
import HeroArticle from "../loreal/HeroArticle";

type SectionArticleHeroProps = {
  subTitle: string;
  mainTitle: React.ReactNode;
  mainSubTitle?: string;
  plane1: string;
  plane2: string;
  plane3: string;
  plane1ClassName: string;
  plane2ClassName: string;
  plane3ClassName: string;
  backgroundClass: string;
};

export default function SectionArticleHero({
  subTitle,
  mainTitle,
  mainSubTitle,
  plane1,
  plane2,
  plane3,
  plane1ClassName,
  plane2ClassName,
  plane3ClassName,
  backgroundClass,
}: Readonly<SectionArticleHeroProps>) {
  const { width } = useWindowSize();

  return (
    <div className="relative grid h-screen w-screen overflow-hidden pt-[100px]">
      <div className="w-full-custom absolute left-0 h-full overflow-hidden">
        <div className="flex h-full w-full items-end object-cover">
          <div className={`${backgroundClass} absolute left-0 top-0 h-full w-full object-cover`} />
          <HeroArticle
            plane1={plane1}
            plane2={plane2}
            plane3={plane3}
            plane1ClassName={plane1ClassName}
            plane2ClassName={plane2ClassName}
            plane3ClassName={plane3ClassName}
          />
        </div>
      </div>

      <div className="pointer-events-none relative flex h-full w-full flex-col items-start space-y-10 px-[20px] py-10 text-black lg:justify-center lg:px-[40px]">
        <p className="font-roboto text-[14px] font-normal uppercase leading-normal lg:text-[16px] lg:leading-8">
          {subTitle}
        </p>
        <h1 className="font-bitter text-[25px] lg:text-[60px] font-light leading-[130%] lg:tracking-[-1px]">
          {mainTitle}
        </h1>
        <p className="font-roboto text-[20px] font-bold hidden lg:inline lg:tracking-[-1px]">
          {mainSubTitle}
        </p>
      </div>
    </div>
  );
}
