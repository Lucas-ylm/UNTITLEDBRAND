/* eslint-disable @typescript-eslint/no-namespace */
"use client";
import { useEffect, useRef, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "map-parallax": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

import { getHTMLElement, onState } from "@/lib/utils";
import { lerp } from "@/lib/parallax";
import Donuts from "./Donut";

type MapProps = {
  dataMap: Record<string, { value: number, label?: string }>;
  contentTexts: Record<string, React.ReactNode>;
  backgroundClass: string;
  color: string;
  currentValueText: Record<string, React.ReactNode>;
};

export default function Slider({ dataMap, contentTexts, backgroundClass, color, currentValueText }: MapProps) {
  const years = Object.keys(dataMap);
  const initialYear = years[0] ?? "";
  const [currentYear, setCurrentYear] = useState(initialYear);
  const [currentValue, setCurrentValue] = useState(dataMap[initialYear]?.value ?? 0);

  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const barre = mapRef.current ? getHTMLElement(mapRef.current, ".slider__innerbar") : null;
    const date = mapRef.current ? getHTMLElement(mapRef.current, ".slider__date") : null;

    const changeState = onState<string>(currentYear, (previous, next) => {
      if (previous) mapRef.current?.classList.remove(`slider--${previous}`);
      if (next) {
        mapRef.current?.classList.add(`slider--${next}`);
        setCurrentYear(next);
      }
    });

    const handleScroll = () => {
      if (!mapRef.current) return;

      const rect = mapRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isVisible = rect.top < viewportHeight * 0.5 && rect.bottom > viewportHeight * 0;

      if (!isVisible) return;

      const scrollY = window.scrollY || window.pageYOffset;
      const elementTop = scrollY + rect.top;
      const elementHeight = mapRef.current.offsetHeight;

      const adjustedPosition = (scrollY - elementTop) / (elementHeight - viewportHeight);
      const clampedPosition = Math.min(Math.max(adjustedPosition, 0), 1);

      const thresholdStep = 1.1 / years.length;

      years.forEach((year, index) => {
        const lowerBound = thresholdStep * index;
        const upperBound = thresholdStep * (index + 1);

        if (clampedPosition >= lowerBound && clampedPosition < upperBound) {
          changeState(year);
        }
      });

      if (barre) {
        barre.style.transform = `translateY(${lerp(clampedPosition, -100, 0)}%)`;
      }
      if (date) {
        date.style.transform = `translateY(${lerp(clampedPosition, -100, 0)}%)`;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentYear, years]);

  useEffect(() => {
    const currentData = dataMap[currentYear];
    if (currentData) {
      setCurrentValue(currentData.value);
    } else {
      setCurrentValue(0);
    }
  }, [currentYear, dataMap]);

  return (
    <map-parallax ref={mapRef}>
      <div className="slider__sticky">
        <div className="slider__content z-[-2] overflow-y-visible sm:overflow-hidden">
          <div className="grid justify-center bg-brown-dark">

            <div className="slider__left col-start-1 base:col-end-4 md:col-end-3 grid-row-slider">
              <div className="slider__timeline">
                <div className="slider__date">
                  <div className="slider__year">
                      {/* {years.map((year) =>
                        dataMap[year] ? (
                          <span key={year} className={`slider__${year} slider--fade`}>
                            {dataMap[year]?.label}
                          </span>
                        ) : null
                      )} */}
                    </div>
                  </div>
                  <div className="slider__bar">
                    <div className="slider__innerbar"></div>
                  </div>
                </div>
              </div>

              <div className="slider__center base:col-start-1 base:col-end-13 sm:col-start-3 sm:col-end-11 grid-row-1">
                <div className="w-full relative flex justify-center ">
                  <div className="donut-width -my-[20%] sm:-mx-[0%]">
                    <Donuts color={color} backgroundClass={`${backgroundClass}`} value={currentValue} />
                    <div className="absolute left-[38%] lg:left-[41%] top-[20%] xxs:top-[20%] xs:top-[28%] lg:top-[33%] flex w-[30vw] xs:w-[23vw] md:w-[18vw] lg:w-[17vw] 2xl:w-[15vw] flex-col">
                      <p className="font-roboto h-[40px] text-[36px] xs:text-[52px] lg:text-[82px] font-black leading-[22px] text-brown-dark">
                        {currentValue}%
                      </p>
                      <p className="font-roboto text-[16px] -mt-[5px] xs:-mt-[0px] xs:text-[18px] lg:text-[26px] font-black leading-[18px] text-brown-dark lg:leading-[28px] lg:pt-[10px]">
                        {currentValueText[currentYear]} 
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="slider__right base:col-start-4 base::col-end-13 md:col-start-10 md:col-end-13 grid-row-slider">
                <div className="slider__text">
                  {years.map((year) => (
                    <p
                      key={year}
                      className={`slider__${year} slider--swipe bg-brown-dark text-[14px] lg:text-[16px] font-normal leading-6 text-white lg:leading-8`}>
                      {contentTexts[year]}
                    </p>
                  ))}
                </div>
              </div>
              
          </div>
        </div>
      </div>
    </map-parallax>
  );
}
