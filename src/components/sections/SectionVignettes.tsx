import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Vignette from "../loreal/Vignette";

type SectionVignettesProps = {
  isAtBottom: boolean;
  scrollYProgress: import("framer-motion").MotionValue<number>;
  isDragging: boolean;
  slug?: string;
  customClass?: string;
  sortFunction?: number[];
};

export type VignetteImageProps = {
  className: string;
  alt: string;
  src: string;
};

type VignetteData = {
  title: string;
  waitingTitle: React.ReactNode;
  waitingText: React.ReactNode;
  isActive: boolean;
  slug: string;
  image: VignetteImageProps;
};

const vignetteData: VignetteData[] = [
  {
    title: "La beauté, de la nature au flacon",
    waitingTitle: (
      <span>
        Investir dans les <span className="font-bold italic">Sciences Vertes</span> pour la transformation durable
      </span>
    ),
    waitingText: undefined,
    isActive: true,
    slug: "les-sciences-vertes-ou-quand-la-beaute-s-inspire-de-la-nature",
    image: {
      className: "vignette-visual",
      src: "/assets/images/vignettes/vignette-science.png",
      alt: "visu-article-1",
    },
  },
  {
    title: "La beauté, de la nature au flacon",
    waitingTitle: (
      <span>
        Plus circulaire, innovant et allégé : <span className="font-bold italic">l’emballage </span>
        fait sa mue
      </span>
    ),
    waitingText: undefined,
    isActive: true,
    slug: "emballages-une-question-de-ressources",
    image: {
      className: "vignette-visual",
      src: "/assets/images/vignettes/vignette-emballage.png",
      alt: "visu-article-2",
    },
  },
  {
    title: "Les forces de la beauté",
    waitingTitle: (
      <span>
        EMMAÜS Solidarité et L'Oréal : quand la beauté <span className="font-bold italic">nous relie</span>
      </span>
    ),
    waitingText: undefined,
    isActive: true,
    slug: "emmaus-solidarite-et-loreal",
    image: {
      className: "vignette-visual",
      src: "/assets/images/vignettes/vignette-emmaus.png",
      alt: "visu-article-3",
    },
  },
  {
    title: "Les forces de la beauté",
    waitingTitle: (
      <span>
        « J’ai compris que j’avais droit à <span className="font-bold italic">ma&nbsp;beauté</span>.»
      </span>
    ),
    waitingText: undefined,
    isActive: true,
    slug: "jai-compris-que-javais-droit-a-ma-beaute",
    image: {
      className: "vignette-visual",
      src: "/assets/images/vignettes/vignette-beaute.png",
      alt: "visu-article-4",
    },
  },
  {
    title: "Les forces de la beauté",
    waitingTitle: (
      <span>
        « La beauté est multiple, mais l’émotion du beau est <span className="font-bold italic">universelle</span>.»
      </span>
    ),
    waitingText: undefined,
    isActive: true,
    slug: "la-beaute-nous-rappelle-a-nous-memes",
    image: {
      className: "vignette-visual",
      src: "/assets/images/vignettes/vignette-universelle.png",
      alt: "visu-article-5",
    },
  },
  {
    title: "La beauté de la nature au flacon",
    waitingTitle: (
      <span>
        <span className="font-bold italic">Beauté augmentée</span> et quête d'humanité
      </span>
    ),
    waitingText: undefined,
    isActive: true,
    slug: "beaute-augmentee-et-quete-humanite",
    image: {
      className: "vignette-visual",
      src: "/assets/images/vignettes/vignette-tech.png",
      alt: "visu-article-6",
    },
  },
  {
    title: "Les forces de la beauté",
    waitingTitle: (
      <span>
        « Innovante, inclusive et plus responsable&nbsp;:
        <span className="font-bold italic"> nous sommes fiers</span> de notre usine.»
      </span>
    ),
    waitingText: undefined,
    isActive: true,
    slug: "innovante-inclusive-et-plus-responsable",
    image: {
      className: "-bottom-10",
      src: "/assets/images/vignettes/vignette-usine.png",
      alt: "visu-article-7",
    },
  },
];

export default function SectionVignettes({
  isAtBottom,
  scrollYProgress,
  isDragging,
  slug,
  customClass,
  sortFunction = [],
}: Readonly<SectionVignettesProps>) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [, setIsDragging] = useState(false);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollPosition.current;
    }
  }, [isAtBottom]);

  const handleScrollCapture = (e: React.UIEvent<HTMLDivElement>) => {
    scrollPosition.current = e.currentTarget.scrollLeft;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTimeout(() => {
      e.preventDefault();
      setIsDragging(true);
      if (scrollContainerRef.current) {
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
      }
      scrollLeft.current = scrollContainerRef.current?.scrollLeft ?? 0;
    }, 100);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    handleMouseUp();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = x - startX.current;
    scrollContainerRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  const sortedVignettes = sortFunction.length
    ? sortFunction.map((index) => vignetteData[index - 1]).filter((vignette) => vignette)
    : vignetteData;

  return (
    <section
      draggable="false"
      className={`grab-cursor relative h-[calc(100vh-10rem)] w-screen select-none ${isDragging ? "cursor-grabbing" : ""} ${customClass ?? ""}`}
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "none",
      }}
      onScrollCapture={handleScrollCapture}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}>
      <motion.div className="flex w-fit" ref={scrollContainerRef}>
        {sortedVignettes
          .filter((data) => data?.slug !== slug)
          .map((data, index) => (
            <Vignette
              key={`${index}-${data?.slug}`}
              index={index}
              length={sortedVignettes.length}
              scrollYProgress={scrollYProgress}
              title={data?.title ?? ""}
              waitingTitle={data?.waitingTitle}
              waitingText={data?.waitingText}
              slug={data?.slug ?? ""}
              image={data?.image}
            />
          ))}
      </motion.div>
    </section>
  );
}
