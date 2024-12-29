import { useScroll } from "framer-motion";
import { forwardRef, RefObject, useEffect, useState } from "react";
import { CoreText } from "../loreal/CoreText";
import { CoreTitle } from "../loreal/CoreTitle";
import SectionVignettes from "./SectionVignettes";

const SectionParallax = forwardRef<HTMLDivElement>((_, ref) => {
  const { scrollYProgress } = useScroll({
    target: ref as unknown as RefObject<HTMLElement>,
    offset: ["start start", "end end"],
  });
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isDragging] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsAtBottom(scrollTop + windowHeight >= documentHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-fit w-full">
      <div className="marged grid overflow-hidden py-20 lg:py-48">
        <CoreTitle
          className="mb-20 base:col-start-2 base:col-end-12 lg:col-start-2 lg:col-end-12 xl:col-start-3 xl:col-end-11"
          elementClassName="font-normal font-roboto not-italic text-[18px] lg:text-[24px] lg:leading-[32px]">
          « Créer la beauté qui fait avancer le monde », telle est la raison d’être du Groupe L’Oréal. C’est une
          ambition inépuisable et universelle, qui embrasse la définition la plus essentielle de l’idée de beauté.
          Contre le lieu commun qui voudrait réduire la beauté au superficiel, elle porte en elle une vraie puissance
          créatrice, une capacité à mettre les personnes en mouvement, à nourrir la confiance en soi, à sans cesse se
          réinventer pour s’adapter au monde qui l’entoure…
        </CoreTitle>
        <div className="base:col-start-2 base:col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10 space-y-[40px]">
          <CoreText>
            Cette vision de la beauté est une boussole pour le Groupe L’Oréal. Elle s’incarne en particulier dans trois
            idées fondatrices : une beauté diverse et inclusive qui nous donne confiance, porteuse d’innovation sociale,
            une beauté qui s’inspire de la nature et limite son impact pour la planète et enfin, une beauté innovante et
            tech, source d’un futur plus désirable.
          </CoreText>
          <CoreText>
            La beauté inclusive est celle qui célèbre la diversité, donne la force d’avancer et sert de bouclier contre
            l’exclusion. Vectrice de lien, de confiance et d’estime de soi, elle est une aspiration universelle qui
            transcende les époques, les frontières et les cultures. À travers sa Fondation, ou en soutenant un réseau
            riche d’associations, le Groupe L’Oréal construit une vision de la beauté pensée comme un baume social,
            capable de nous connecter à nous-mêmes comme à ceux qui nous entourent.
          </CoreText>
          <CoreText>
            La beauté qui s’inspire de la nature s’incarne dans le programme « L’Oréal pour le Futur », en posant les
            engagements du groupe en matière de développement durable jusqu’à 2030. Elle s’appuie sur le concept de
            limites planétaires afin de réduire l’impact de son activité pour l’environnement. Pour le Groupe L’Oréal,
            c’est une transition entamée depuis longtemps, qui mobilise tous les métiers, de la recherche pour les
            « Sciences Vertes », au packaging durable ou à l’économie circulaire.
          </CoreText>
          <CoreText>
            Enfin, le Groupe L’Oréal porte un idéal de beauté tourné vers l’avenir, capable de mobiliser le meilleur des
            technologies pour proposer des expériences toujours plus riches, personnalisées et accessibles. De l’IA à la
            réalité augmentée en passant par la tech, les engagements du Groupe L’Oréal dans la Beauty Tech s’étendent
            également à l’appareil de production, sans cesse réinventé pour rester à la pointe de l’industrie 4.0.
          </CoreText>
        </div>
      </div>

      <SectionVignettes
        isAtBottom={isAtBottom}
        scrollYProgress={scrollYProgress}
        isDragging={isDragging}
        sortFunction={[5, 3, 4, 1, 2, 7, 6]}
      />
    </div>
  );
});

export default SectionParallax;
