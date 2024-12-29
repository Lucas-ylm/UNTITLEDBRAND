"use client";
import { useWindowSize } from "@/components/hook/useWindowSize";
import { AnimatedText } from "@/components/loreal/AnimatedText";
import Carousel from "@/components/loreal/Carousel";
import { CoreText } from "@/components/loreal/CoreText";
import { CoreTextChapo } from "@/components/loreal/CoreTextChapo";
import { CoreTitle } from "@/components/loreal/CoreTitle";
import { Quote } from "@/components/loreal/Quote";
import Menu from "@/components/modal/Menu";
import NavBar from "@/components/navbar/NavBar";
import SectionArticleHero from "@/components/sections/SectionArticleHero";
import SectionVignettes from "@/components/sections/SectionVignettes";
import Cookies from "@/components/templateComponent/Cookies";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BeautyTech() {
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
        subTitle="La beauté de demain"
        mainTitle={
          <span>
            <span className="font-extrabold italic">Beauté augmentée</span> <br /> et quête d’humanité
          </span>
        }
        plane1="/assets/images/beauty-tech/hero-round.png"
        plane2="/assets/images/beauty-tech/hero-shadow.png"
        plane3="/assets/images/beauty-tech/hero.png"
        plane1ClassName="bottom-0 w-full xs:w-[70%] lg:right-[5%] lg:bottom-[-3%] lg:w-[45%]"
        plane2ClassName="bottom-0 w-full xs:w-[70%] lg:right-[3%] lg:bottom-0 lg:w-[37%]"
        plane3ClassName="bottom-0 w-full xs:w-[70%] lg:right-[0%] lg:bottom-0 lg:w-[37%]"
        backgroundClass="gradient-white"
      />
      
      <Menu>
        <NavBar />
      </Menu>

      <section className="marged my-20 grid space-y-10 lg:my-48 lg:space-y-[60px]">

        <div className="base:col-start-1 base:col-end-12 lg:col-start-3 lg:col-end-11 lg:py-20">
          <CoreTextChapo elementClassName="lg:text-[18px]">
            « Si, pour définir notre espèce, nous nous en tenions strictement à ce que l’histoire et la préhistoire nous présentent comme la caractéristique constante de l’homme et de l’intelligence, nous ne dirions peut-être pas Homo sapiens, mais Homo faber&nbsp;». L’idée exprimée ici par Bergson traverse toute la philosophie, d’Appius Claudius Caecus à Hannah Arendt. Elle postule que l’homme est un homo faber, défini par sa propension à fabriquer des outils, qui lui permettent de prendre en main sa destinée. Cette idée puissante traverse toute l’histoire de la beauté. Aujourd’hui, avec l’émergence des technologies numériques, homo faber dispose de nouveaux outils. 
          </CoreTextChapo>
          <AnimatedText className="my-20 lg:my-40">
          De l’intelligence artificielle aux biotechs, en passant par les jumeaux numériques, l’âge du silicium ouvre de nouvelles perspectives dans la quête universelle de beauté.
          </AnimatedText>
          <CoreText>
            Nous avons échangé avec Béatrice Dautzenberg, directrice des services Beauty Tech chez L’Oréal Groupe, et Guive Balooch, directeur Beauté Augmentée et Open Innovation chez L’Oréal Groupe, pour essayer de comprendre comment beauté et technologie peuvent rimer avec humanité.
          </CoreText>
        </div>
      </section>

      <section className="marged my-10 grid lg:my-32">
        <Quote
          direction="left"
          elementClassName="base:col-start-1 base:col-end-12 lg:col-start-2 lg:col-end-6"
          pictureSrc="/assets/images/beauty-tech/guive-quote.webp"
          author="Guive Balooch"
          about={`Directeur Beauté Augmentée <br />et Open Innovation chez L’Oréal Groupe`}
        >
          « On ne part pas de la tech, mais des besoins. Or, la connaissance précise de ces besoins est une chose infiniment complexe, qui demande de prendre en compte les géographies, les questions de genre, les cultures.»
        </Quote>
        <div className="space-y-10 base:col-start-1 base:col-end-12 lg:col-start-7 lg:col-end-12 lg:space-y-20">
          <CoreTitle>Les rituels de beauté et leurs artefacts</CoreTitle>
          <CoreText>
            Lorsqu’on interroge Guive Balooch sur sa vision du futur de la beauté, il répond que <i>« nos mains ne seront plus une barrière pour réaliser nos désirs »</i>, que <i>« les limites de notre compétence et de notre agilité individuelle ne seront plus un frein, parce que nous disposerons des outils nous permettant d’obtenir n’importe quel résultat »</i>. Avec cette réponse, il s’inscrit dans une histoire de la beauté jalonnée d’objets, d’inventions, et de progrès techniques. L’idée d’une beauté <i>« augmentée »</i> est en effet aussi ancienne que notre capacité à fabriquer des outils ou des vêtements. Elle s’incarne tout au long de l’histoire dans les objets les plus simples, comme dans les rituels les plus élaborés. 
          </CoreText>
          <CoreText>
            Un échantillon de cette histoire est actuellement présenté au Louvre, qui propose un programme de médiation inédit dans les salles du musée grâce au soutien exceptionnel de L’Oréal Groupe. Intitulé <i>« De toutes beautés! »</i>, il expose une extraordinaire cuillère à fard égyptienne, vieille de plus de 3 millénaires. On y croise un peigne liturgique médiéval, une brosse à toilette du XVIIIe siècle, un flacon de cristal, une boule à savon, et même le miroir de Marie-Antoinette. Chacun de ses objets vient témoigner d’un rapport à la beauté propre à une époque ou à une géographie, tout en illustrant une volonté séculaire de repousser les limites du cadre de la beauté.
          </CoreText>
        </div>
      </section>      
      
      <section className="marged relative mb-[30px] grid lg:mb-[50px]">
        <AnimatedText className="lg:col-start-2 lg:col-end-12 xl:col-start-3 xl:col-end-11 pb-[50px]">
        Aperçu des oeuvres du parcours «&nbsp;de toutes beautés !&nbsp;»
        </AnimatedText>
        <Carousel
          images={[
            { src: "/assets/images/carousel/carousel1-article-beautetech1.png", alt: "Image 1" },
            { src: "/assets/images/carousel/carousel2-article-beautetech1.png", alt: "Image 2" },
            { src: "/assets/images/carousel/carousel3-article-beautetech1.png", alt: "Image 2" },
          ]}
        />
      </section>

      <section className="marged my-20 grid lg:my-48">
        <div className="centered-content space-y-10 base:col-start-1 base:col-end-12 lg:space-y-20">
          <CoreTitle>Beauty tech¹, pour une beauté toujours plus personnalisée</CoreTitle>
          <CoreText>
            Aujourd’hui, avec l’entrée dans une ère numérique, l’humanité a passé un nouveau seuil technologique. La naissance de celui que l’anthropologue Élisabeth Azoulay désigne comme Homo faber 2.0 dans le dernier tome de <span className="font-bold italic">100 000 ans de beauté</span>, soutenu par le Groupe L’Oréal, s’accompagne de nouveaux outils qui n’ont pas épargné le secteur de la beauté. <i>«&nbsp;Pour le Groupe L’Oréal, l’idée de Beauty Tech est née en 2010, dans le sillage du e-commerce et des réseaux sociaux. Elle a pris une nouvelle ampleur en 2018 avec le lancement du programme Beauty Tech, dont l’ambition est de mettre la technologie au service d’une beauté plus personnalisée, plus inclusive et plus durable&nbsp;»</i>, explique Béatrice Dautzenberg. Elle s’incarne dans une série d’innovations emblématiques, toutes destinées à <i>«&nbsp;augmenter&nbsp;»</i> l’expérience, la créativité ou les performances beauté pour celui ou celle qui les utilise. La technologie Colorsonic de L’Oréal Paris, qui a demandé près de dix années de recherche et développement, permet d’appliquer une couleur d’un simple geste, sans manipulation complexe. Beauty Genius de L’Oréal Paris, véritable assistant personnel de beauté, propose quant à lui d’échanger avec une IA sur toutes les questions de beauté les plus intimes, de réaliser des diagnostics, ou de recevoir des recommandations personnalisées.
          </CoreText>
        </div>
        <AnimatedText className="my-10 base:col-start-1 base:col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10 lg:mt-[140px] lg:mb-[60px]">
          « Avec l’aide de l’IA, nous menons des études cliniques qui nous permettent de passer d’un diagnostic réactif à des recommandations prédictives »
        </AnimatedText>
        <div className="centered-content base:col-start-1 base:col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          <CoreText>
            <i>« Historiquement, on parlait de beauté pour tous, on parle désormais de beauté pour chacun et chacune »</i>, précise Béatrice Dautzenberg. Demain, cette individualisation du rapport à la beauté devrait se poursuivre autour de l’utilisation des données environnementales ou cliniques. À travers son partenariat avec Google Maps Platform, une référence dans l’information sur la qualité de l’air et de l’environnement comme l’indice UV, le Groupe L’Oréal développe ainsi une plateforme d’exposome, qui va permettre d’adapter les recommandations au contexte environnemental précis des consommateurs. <i>« Nous observons également les biomarqueurs qui nous permettent de comprendre ce qui se passe sous la peau. Avec l’aide de l’IA, nous menons des études cliniques qui nous permettent de passer d’un diagnostic réactif à des recommandations prédictives »</i>, ajoute Guive Balooch. 
          </CoreText>
        </div>
      </section>

      <section className="marged relative mb-[30px] grid lg:mb-[50px]">
        <AnimatedText className="lg:col-start-2 lg:col-end-12 xl:col-start-3 xl:col-end-11 pb-[50px]">
          « Les denières innovations présentées par L'Oréal Groupe&nbsp;» Beauty Genius, Hapta, Colorsonic
        </AnimatedText>
        <Carousel
          images={[
            { src: "/assets/images/carousel/carousel1-article-beautetech.png", alt: "Image 1" },
            { src: "/assets/images/carousel/carousel2-article-beautetech.png", alt: "Image 2" },
            { src: "/assets/images/carousel/carousel3-article-beautetech.png", alt: "Image 2" },
          ]}
        />
      </section>

      <section className="marged my-10 grid lg:mt-[150px] lg:mb-[65px]">
        <div className="space-y-10 base:col-start-1 base:col-end-12 lg:col-start-2 lg:col-end-7 lg:space-y-20">
          <CoreTitle>Augmenter notre humanité </CoreTitle>
          <CoreText className="mt-10 base:col-start-1 base:col-end-13 lg:col-start-2 lg:col-end-7">
            Derrière l’ensemble de ces projets, la philosophie du Groupe L’Oréal est de proposer une technologie plus humaniste, capable d’améliorer la vie des utilisateurs. <i>« On ne part pas de la tech, mais des besoins. Or, la connaissance précise de ces besoins est une chose infiniment complexe, qui demande de prendre en compte les géographies, les questions de genre, les cultures »</i>, explique Guive Balooch. La technologie HAPTA, développée pour Lancôme, incarne cet engagement sociétal en proposant un applicateur de maquillage auto-stabilisé destiné aux personnes vivant avec une dextérité limitée. Au-delà de l’inclusivité, la dimension éthique associée à l’usage des nouveaux outils est également fondamentale. <i>« Dès 2021, le Groupe L’Oréal a créé un cadre plus responsable pour une intelligence artificielle de plus grande confiance qui s’appuie sur nos valeurs éthiques. Le premier principe est la supervision humaine, on parle également de fiabilité, de sécurité, de durabilité, de transparence ou d’explicabilité pour éviter la création de boîtes noires »</i>, détaille Béatrice Dautzenberg. De manière plus générale,  le Groupe L’Oréal poursuit la quête d’une technologie capable d’ouvrir les horizons, d’élargir le terrain de jeu et de faire tomber les barrières, en particulier créatives. Cette ambition s’incarne par exemple dans CreAITech, véritable laboratoire dédié à l’expérimentation autour de l’IA générative, et espace sécurisé destiné à repousser les frontières de la créativité des équipes L’Oréal. <i>« Nous pouvons imaginer des expériences qui se trouvent à la frontière de l’art et de la beauté, c’est une manière d’aider les personnes à tendre vers leur idéal »</i>, conclut Béatrice Dautzenberg.
          </CoreText>
        </div>
        <Quote
          direction="left"
          elementClassName="grid-row-1 base:col-start-1 base:col-end-13 lg:col-start-8 lg:col-end-12 lg:w-[80%]"
          pictureSrc="/assets/images/beauty-tech/beatrice-quote.png"
          author="Béatrice Dautzenberg"
          about={`Directrice des services<br />Beauty Tech chez L’Oréal Groupe`}
        >
          «Historiquement, on parlait de beauté pour tous, on parle désormais de beauté pour chacun et chacune.»
        </Quote>
      </section>

      <section className="marged lg:mb-[80px] grid">
        <div className="lg:col-start-1 lg:col-end-13 space-y-12 lg:space-y-[40px]">
          <p className="flex tracking-wider justify-start uppercase underline w-full font-roboto text-[10px]">
            <a href="https://www.loreal.com/fr/articles/group/semaine-de-lindustrie/" target="_blank">(1) Pour plus d’informations sur l’ancrage industriel de L’Oréal en France : https://www.loreal.com/fr/articles/group/semaine-de-lindustrie/</a></p>
        </div>
      </section>

      <SectionVignettes
        isAtBottom={isAtBottom}
        scrollYProgress={scrollYProgress}
        isDragging={isDragging}
        slug="beaute-augmentee-et-quete-humanite"
        sortFunction={[5, 3, 4, 1, 2, 7, 6]}
      />

      <Cookies />
    </>
  );
}
