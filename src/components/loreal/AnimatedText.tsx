import React, { useEffect, useState } from "react";
import SlideIn from "../animation/SlideIn";
import TextSplitter from "@/lib/splitTypes";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type AnimatedTextProps = {
  className?: string;
  children: React.ReactNode;
};

export const AnimatedText = ({ className, children }: AnimatedTextProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const splitter = new TextSplitter();

    const initSplitter = () => {
      // Initialize splitter with requestAnimationFrame to prevent blocking render
      requestAnimationFrame(() => {
        splitter.init();
      });
    };

    if (document.readyState === "complete") {
      initSplitter();
    } else {
      window.addEventListener("load", initSplitter);
    }

    const observeElement = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger refresh only when entering the viewport
            setTimeout(() => {
              splitter.refresh();
            }, 0);
          }
        });
      }, { threshold: 0.5 });

      const element = document.querySelector(".reveal-type");
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) observer.unobserve(element);
      };
    };

    observeElement();

    return () => {
      splitter.destroy();
      window.removeEventListener("load", initSplitter);
    };
  }, [isMounted]);

  if (!children || !isMounted) return null;

  return (
    <div className={className}>
      <SlideIn>
        <p className="reveal-type font-bitter text-[20px] font-bold italic leading-[32px] text-black lg:text-[38px] lg:leading-[52px]">
          {children}
        </p>
      </SlideIn>
    </div>
  );
};
