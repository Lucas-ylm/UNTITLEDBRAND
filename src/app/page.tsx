"use client";
import Menu from "@/components/modal/Menu";
import NavBar from "@/components/navbar/NavBar";
import SectionContent from "@/components/sections/SectionContent";
import SectionHero from "@/components/sections/SectionHero";
import { useScroll } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  console.log("v2");
  return (
    <div ref={container} className="relative grid h-[calc(200vh-10rem)] bg-white">
      <Menu>
        <NavBar />
      </Menu>
      
      <SectionHero scrollYProgress={scrollYProgress} />
      <SectionContent scrollYProgress={scrollYProgress} />
    </div>
  );
}
