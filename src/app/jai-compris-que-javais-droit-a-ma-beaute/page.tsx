"use client";
import { useWindowSize } from "@/components/hook/useWindowSize";
import { AnimatedText } from "@/components/loreal/AnimatedText";
import { CoreText } from "@/components/loreal/CoreText";
import { CoreTextChapo } from "@/components/loreal/CoreTextChapo";
import { CoreTextITW } from "@/components/loreal/CoreTextITW";
import { HighlightText } from "@/components/loreal/HighlightText";
import { Quote } from "@/components/loreal/Quote";
import { Tag } from "@/components/loreal/Tag";
import { Title } from "@/components/loreal/Title";
import Menu from "@/components/modal/Menu";
import NavBar from "@/components/navbar/NavBar";
import SectionArticleHero from "@/components/sections/SectionArticleHero";
import SectionVignettes from "@/components/sections/SectionVignettes";
import Cookies from "@/components/templateComponent/Cookies";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Article4() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { width } = useWindowSize();

  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isDragging] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollPosition.current;
    }
  }, [isAtBottom]);

  return (
    <>
      <SectionArticleHero
        subTitle="Les forces de la beauté"
        mainTitle={
          <>
            «J’ai compris<br />que j’avais droit à<br />
            <span className="font-extrabold italic">ma&nbsp;beauté</span>»
            <span className="font-roboto text-[20px] font-bold inline lg:hidden lg:tracking-[-1px]"> Nantenin Keïta</span>
          </>
        }
        mainSubTitle="Nantenin Keïta"
        plane1="/assets/images/hero/keita-round.png"
        plane2="/assets/images/hero/keita-hero-shadow.png"
        plane3="/assets/images/hero/keita-hero.png"
        plane1ClassName="bottom-0 w-full xs:w-[70%] lg:right-[5%] lg:bottom-0 lg:w-[42%]"
        plane2ClassName="bottom-0 w-full xs:w-[70%] lg:right-[11%] lg:bottom-0 lg:w-[25%]"
        plane3ClassName="bottom-0 w-full xs:w-[70%] lg:right-[14%] lg:bottom-0 lg:w-[25%]"
        backgroundClass="gradient-white"
      />
      
      <Menu>
        <NavBar />
      </Menu>

      <section className="marged my-20 grid lg:my-48">
        <div className="base:col-start-1 base:col-end-13 lg:col-start-2 lg:col-end-12 xl:col-start-3 xl:col-end-11">
          <AnimatedText>
            Pour le monde extérieur, rien n’est plus anodin que l’application d’un rouge à lèvres, qu’un trait d’eyeliner ou qu’une goutte de sérum sous les yeux.
          </AnimatedText>
          <CoreTextChapo elementClassName="pt-[25px]">
            Mais pour celui ou celle qui l’applique, c’est souvent tout un univers personnel qui est en jeu. À travers les petits gestes du quotidien, la beauté est au cœur de la manière dont nous sommes au monde. Elle conditionne l’acceptation et la réappropriation du corps, elle participe à la construction des identités et favorise l’estime de soi.
          </CoreTextChapo>
        </div>
      </section>

      <section className="marged my-20 grid lg:my-[70px]">
        <div className="h-fit flex justify-end top-[120px] lg:sticky lg:col-start-1 lg:col-end-5 xl:col-start-2">
          <Quote
            author="Nantenin Keita"
            direction="right"
            about={`Para-athlète spécialiste du sprint<br />et membre du collectif handisport<br />de L'Oréal Groupe.`}
            pictureSrc="/assets/images/article4/portrait-nantenin-keita.png"
            elementClassName=""  
          >
            « La beauté du futur, <br /> c’est quand on ne parlera <br /> plus de beauté inclusive.»
          </Quote>
        </div>
        <div className="space-y-10 lg:col-start-7 lg:col-end-11 lg:space-y-[40px]">
          <Tag elementClassName="bg-[#F7DEA0]">Interview</Tag>
          <Title elementClassName="mb-[unset]" level="h1">Nantenin Keita</Title>
          <CoreTextChapo elementClassName="lg:text-[18px]">
            Para-athlète spécialiste du sprint et membre du collectif handisport du Groupe L’Oréal depuis 2022. Originaire du Mali, elle est déficiente visuelle et albinos. Avec son profil hors du commun, elle vit en dehors de la norme depuis son plus jeune âge, tout en incarnant une nouvelle forme de représentation de la différence. Nous avons souhaité lui donner la parole, afin de mieux comprendre la portée d’une « beauté qui fait avancer le monde ».
          </CoreTextChapo>
          <HighlightText>Quel est votre rapport à la beauté&nbsp;?</HighlightText>
          <CoreTextITW>
            Pour moi, c’est important parce que je suis née albinos, et j’ai dû vivre avec une différence qui a pu impacter ma confiance en moi. En tant qu’athlète également, le rapport au corps est essentiel. Notre corps est notre outil, il est scruté, il peut être moqué s’il ne rentre pas dans les normes d’une beauté encore très codifiée. Pendant longtemps, je me suis interdit d’être coquette ou de prendre soin de moi. Je ne voulais pas faire de vagues, passer inaperçue. J’ai fini par me rendre compte que c’était impossible. Mon envie de m’exprimer par ma différence a fini par être plus forte. J’avais envie de jouer avec tout ce qui composait mon identité, que les gens me voient en tant que femme. Le déclic est arrivé quand j’ai commencé à prendre confiance en moi, quand j’ai réussi à me dire qu’être albinos ou déficiente visuelle, ce n’était pas forcément être moins bien. J’ai compris que j’avais droit à ma beauté, qu’il n’y a pas une beauté, mais que c’est quelque chose qui doit être personnalisé, propre à chacun et chacune.
          </CoreTextITW>
          <HighlightText>Comment décririez-vous votre idéal de beauté&nbsp;?</HighlightText>
          <CoreTextITW>
            La beauté est une manière de s’exprimer. S’habiller ou se maquiller, c’est un art qui permet de mettre en avant sa personnalité. Si on parvient à sortir d’une beauté plurielle pour entrer dans un monde de beauté personnalisée, on aura tout gagné. La beauté du futur, c’est quand on ne parlera plus de beauté inclusive. Si demain on ne parle plus du sujet, cela signifie qu’il est intégré par la société. Malheureusement nous n’y sommes pas encore !
          </CoreTextITW>
          <HighlightText>Comment s’en approcher&nbsp;?</HighlightText>
          <CoreTextITW>
            Nous avons progressé. Dans l’espace médiatique et dans la publicité par exemple, nous sommes en train de sortir de la beauté très codifiée qui régnait encore il y a quelques années. On voit des visages différents, des morphologies différentes. On aura bien avancé quand tout le monde sera en mesure de se trouver un modèle, une référence dans le monde de la beauté. Les marques ont également un rôle à jouer. Elles peuvent proposer des produits, des cosmétiques ou des vêtements pour tous. C’est un effort en cours, on le voit chez L’Oréal avec les différentes teintes que l’on peut trouver pour le maquillage, ou les efforts déployés pour que les produits soient utilisables par tous.
          </CoreTextITW>
          <HighlightText>C’est le sens de votre partenariat avec le groupe L’Oréal&nbsp;?</HighlightText>
          <CoreTextITW>
            On s’apporte mutuellement. Quand j’ai signé ce partenariat, j’étais très heureuse car il réunit tout ce que j’aime. La beauté et la possibilité de pouvoir s’exprimer au travers de sa beauté. La possibilité de montrer que l’on est bien comme on est. Quand le Groupe L’Oréal a pensé à mon profil, ça m’a renforcée dans l’idée que l’on peut être belle et albinos. C’est un partenariat qui me représente sous toutes mes facettes : en tant que sportive, en tant que femme, comme personne différente, albinos, ou en tant que nana qui aime faire sa <i>skincare</i>¹ tous les soirs !
          </CoreTextITW>
          <p className="text-[12px] font-roboto font-light">(1) [Traduction] : Routine beauté</p>
        </div>
      </section>

      <SectionVignettes
        isAtBottom={isAtBottom}
        scrollYProgress={scrollYProgress}
        isDragging={isDragging}
        slug="jai-compris-que-javais-droit-a-ma-beaute"
        sortFunction={[5, 3, 4, 1, 2, 7, 6]}
      />
      <Cookies />
    </>
  );
}
