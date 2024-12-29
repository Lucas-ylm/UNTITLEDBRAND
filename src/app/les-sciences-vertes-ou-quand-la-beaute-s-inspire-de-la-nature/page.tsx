"use client";
import { Count } from "@/components/animation/Count";
import { AnimatedText } from "@/components/loreal/AnimatedText";
import Carousel from "@/components/loreal/Carousel";
import { CoreText } from "@/components/loreal/CoreText";
import { CoreTextChapo } from "@/components/loreal/CoreTextChapo";
import { CoreTextITW } from "@/components/loreal/CoreTextITW";
import { CoreTitle } from "@/components/loreal/CoreTitle";
import { HighlightText } from "@/components/loreal/HighlightText";
import { Quote } from "@/components/loreal/Quote";
import { Tag } from "@/components/loreal/Tag";
import Menu from "@/components/modal/Menu";
import NavBar from "@/components/navbar/NavBar";
import SectionArticleHero from "@/components/sections/SectionArticleHero";
import SectionVignettes from "@/components/sections/SectionVignettes";
import LazySvg from "@/components/svgComponent/LazySvg";
import Cookies from "@/components/templateComponent/Cookies";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Article1() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

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
        subTitle="La beauté, de la nature au flacon"
        mainTitle={
          <span>
            Investir dans les <br />
            <span className="font-extrabold italic">Sciences Vertes</span> pour <br />
            la transformation <br />
            durable
          </span>
        }
        plane1="/assets/images/hero/science-vertes-round.webp"
        plane2="/assets/images/hero/science-vertes-hero-shadow.png"
        plane3="/assets/images/hero/science-vertes-hero.png"
        plane1ClassName="bottom-0 w-full xs:w-[70%] lg:right-[5%] lg:bottom-0 lg:w-[42%]"
        plane2ClassName="bottom-0 w-full xs:w-[70%] lg:right-[0%] lg:bottom-0 lg:w-[48%]"
        plane3ClassName="bottom-0 w-full xs:w-[70%] lg:right-[0%] lg:bottom-0 lg:w-[48%]"
        backgroundClass="gradient-white"
      />
      
      <Menu>
        <NavBar />
      </Menu>

      <section className="marged grid py-10 lg:pt-20 lg:pb-[140px]">
        <ExportedPicture
          className="h-[230px] w-full object-cover grid-row-1 base:col-start-1 base:col-end-13 md:h-[auto] lg:col-start-7 lg:col-end-12"
          alt="Les Sciences Vertes"
          src="/assets/images/article1/labo.webp"
          priority={true}
        />
        <div className="grid-row-1 self-center space-y-10 base:col-start-1 base:col-end-13 lg:col-start-1 lg:col-end-7 lg:my-20 lg:space-y-20">
          <AnimatedText className="lg:mr-[20px]">
            Né il y a plus d’un siècle de la vision du chimiste Eugène Schueller, L’Oréal est une aventure scientifique hors-norme. 
          </AnimatedText>
          <CoreTextChapo className="lg:mx-[80px]" elementClassName="lg:text-[18px]">
           Fort de plus de 4 000 chercheurs répartis dans 20 centres à travers le monde – dont 2 700 chercheurs dans 8&nbsp;centres en France –, le groupe a bâti son succès sur une capacité unique à innover pour répondre aux enjeux de l’époque. En 2023, ce sont 610 brevets qui ont été déposés, et près de 70&nbsp;% des investissements recherche et développement du groupe ont été faits en France. Aujourd’hui, le plus grand défi de l’humanité tient sans doute dans une capacité collective à s’inscrire dans les «&nbsp;limites planétaires¹&nbsp;», à ne pas consommer plus de ressources que notre planète est capable d’en produire. C’est dans ce contexte, que le Groupe L’Oréal investit dans la transformation durable sur les Sciences Vertes². 
          </CoreTextChapo>
        </div>
      </section>

              <div className="grid marged py-[100px]">
                <div className="lg:col-start-4 lg:col-end-9 xl:col-end-8">
                  <LazySvg 
                    name="france-icon"
                    width={100} 
                    height={100} 
                    className=""
                  />
                  <h2 className="font-bitter font-light text-[46px]">La Recherche L'Oréal en France</h2>
                  <p className="font-roboto font-bold text-[20px]">
                    <span className="text-[36px]">
                    <Count style="mid" addSpaceNumber start={0} end={8} duration={1} delay={1} />
                    </span> centres de recherches <br />
                  <span className="text-[36px]">
                    <Count style="mid" addSpaceNumber start={0} end={2700} duration={1} delay={1} />
                  </span> collaborateurs <br />
                  <span className="text-[36px]">
                    <Count style="mid" addSpaceNumber showPercentage start={0} end={70} duration={1} delay={1} />
                  </span> des investissements du groupe 
                  en recherche et développement</p>
                </div>
              </div>

      <section className="marged relative grid lg:pb-[150px]">
        <CoreTitle className="centered-content mb-20">Un changement de paradigme</CoreTitle>
        <CoreText className="centered-content">
          Comme tous les secteurs, la recherche scientifique doit faire sa mue environnementale. Au sein du Groupe L’Oréal, cette transformation est engagée depuis plus de vingt ans autour de 4 grands axes : l’agriculture durable, l’extraction verte, la chimie verte et les biotechnologies. Tout commence avec l’agriculture durable, qui garantit la santé des sols, protège la biodiversité ou les ressources en eau. Parmi les dizaines de projets portés par le Groupe L’Oréal, Le Domaine de la Rose de Lancôme, à Grasse, est particulièrement représentatif. Il incarne les bienfaits d’une agriculture régénératrice, appuyée sur les principes de la polyculture et de la culture biologique. 
        </CoreText>
        <CoreText className="centered-content mt-8">
        Au-delà de la matière première, les Sciences Vertes peuvent s’appuyer sur les processus d’extraction verte. Le procédé Osmobloom, développé par Cosmo International Fragrances en exclusivité pour le Groupe L’Oréal, autorise ainsi une extraction lente, sans eau et à faible consommation d’énergie. Il permet par exemple d’obtenir un extrait qui respecte mieux l’intégrité et l’odeur originelle de la fleur de tubéreuse, utilisé dans le nouveau parfum de Valentino Beauty <i>« Private Talk »</i>, lancé pendant l’été. Lorsqu’elle est nécessaire, la chimie verte s’attache à réduire la consommation d’énergie, à utiliser des solvants plus naturels ou à limiter le nombre d’étapes de transformation. La production du célèbre actif anti-âge Pro-Xylane incarne bien ces principes, en s’appuyant sur des déchets du bois de hêtre issus de l’industrie du papier et en réduisant au minimum les procédés d’industrialisation nécessaires à la synthèse de la molécule.
        </CoreText>
      </section>

      <section className="marged relative mb-[30px] grid lg:mb-[50px]">
        <Carousel
          images={[
            { src: "/assets/images/carousel/carousel1-article-1.png", alt: "Image 1" },
            { src: "/assets/images/carousel/carousel2-article-1.png", alt: "Image 2" },
            { src: "/assets/images/carousel/carousel3-article-1.png", alt: "Image 2" },
          ]}
        />
      </section>

      <section className="marged relative grid space-y-[40px] lg:pt-[75px]">
        <CoreText className="centered-content">
          Enfin, les biotechnologies – qui permettent de produire de la matière première par la culture de micro-organismes – formulent les plus belles promesses. <i>« C’est un secteur qui se développe très vite. Au cours du XXe siècle, nous utilisions plutôt des levures ou des bactéries. Nous sommes en train de découvrir les possibilités infinies offertes par les microalgues ou des nouveaux systèmes permettant de s’affranchir de certaines contraintes d’une cellule »</i>, explique Ana Kljuic, directrice L’Oréal Recherche & Innovation, L’Oréal pour le Futur et Sciences Vertes.
        </CoreText>
        <CoreTitle className="centered-content mb-14">L’heure du passage à l’échelle</CoreTitle>
        <CoreText className="centered-content">
          À l’heure où les engagements doivent se transformer en actes, le Groupe L’Oréal s’est lancé dans une transformation importante. Celle-ci passe par l’application des principes des Sciences Vertes sur une échelle industrielle, et sur l’ensemble des marques du groupe. Elle passe également par la production d’ingrédients à moindre valeur ajoutée comme les solvants, sur de gros volumes. <i>« Nous travaillons, par exemple, avec nos partenaires sur une alternative biosourcée à l’isododécane. Un solvant qui était autrefois d’origine fossile, qu’il est désormais possible de produire grâce aux biotechnologies et très utilisé dans le domaine du maquillage »</i>, ajoute Ana Kljuic. D’ici à 2030, le Groupe L’Oréal s’engage à utiliser dans ses formules 95&nbsp;% d’ingrédients biosourcés, issus de minéraux abondants ou de procédés circulaires. Ce chiffre s’élève déjà à 65 % en 2024, alors que la biodégradabilité du portefeuille de matières premières atteint 82&nbsp;% en 2023, faisant la démonstration de l’ampleur des moyens mis en œuvre.
        </CoreText>
      </section>

      <section className="grid marged py-[120px]">
        <div className="lg:col-start-4 lg:col-end-7">
          <LazySvg 
            name="recyclage-icon"
            width={100} 
            height={100} 
            className=""
          />
          <p className="font-roboto text-balance font-bold text-[20px]">
            <span className="text-[36px]">
              <Count style="mid" addSpaceNumber showPercentage start={0} end={95} duration={1} delay={1} />
            </span>
          </p>
          <p className="font-roboto font-bold text-[20px]">d'ingrédients biosourcés, 
            issus de minéraux abondants 
            ou de procédés circulaires d'ici à 2030
            aujourd'hui à 65%</p>
        </div>
        <div className="lg:col-start-7 lg:col-end-10">
          <LazySvg 
            name="leave-icon"
            width={100} 
            height={100} 
            className=""
          />
          <p className="font-roboto font-bold text-[20px]">
            <span className="text-[36px]">
              <Count style="mid" addSpaceNumber showPercentage start={0} end={82} duration={1} delay={1} />
            </span>
          </p>
          <p className="font-roboto text-balance font-bold text-[20px]">du portefeuille de matière premières biodégradables en 2023</p>
        </div>
      </section>

      <section className="marged relative grid py-10 lg:py-20">
        <Tag className="block text-center md:hidden">Interview</Tag>
        <div className="base:col-start-1 base:col-end-13 lg:col-start-4 lg:col-end-7">
          <Quote
            className="sticky top-[120px] h-fit"
            elementClassName="h-full"
            direction="left"
            author="Ana Kljuic"
            about={`Directrice L’Oréal Recherche  <br />& Innovation, L’Oréal pour le Futur <br />et Sciences Vertes.`}
            pictureSrc="/assets/images/vignettes/vignette-ana.png">
            « Nous travaillons avec des startups innovantes, avec des instituts et même avec des ONG.»
          </Quote>
        </div>
        <div className=" space-y-[40px] base:col-start-1 base:col-end-13 lg:col-start-7 lg:col-end-11 ">
          <div className="hidden space-y-10 md:block">
            <Tag>Interview</Tag>
            <CoreTitle>Ana Kljuic</CoreTitle>
            <CoreTextITW elementClassName="lg:text-[22px]">
              Directrice L’Oréal Recherche & Innovation, L’Oréal pour le Futur et Sciences Vertes. 
            </CoreTextITW>
          </div>
          <CoreTextITW elementClassName="lg:text-[20px]">
            Généticienne de formation, elle accompagne depuis 20 ans la transformation des disciplines scientifiques au sein du groupe. Elle revient sur les principaux leviers mis en place pour favoriser le développement des Sciences Vertes au sein du Groupe L’Oréal.
          </CoreTextITW>
          <HighlightText>
            Comment l’avènement des sciences vertes a-t-il changé les manières de travailler chez l’Oréal groupe&nbsp;?
          </HighlightText>
          <CoreTextITW>
            Nous sommes à l’intersection des sciences, des technologies et de la nature, et c’est une véritable révolution pour notre industrie. Depuis 2013 et la mise en place du premier programme de développement durable du Groupe L’Oréal, nous avons décidé de nous attaquer au cœur de notre activité, qui est le produit. Aujourd’hui, 4 engagements du programme L’Oréal pour le Futur concernent les matières premières et les formules, et impliquent directement les Sciences Vertes.
          </CoreTextITW>
          <HighlightText>Cette révolution implique-t-elle de nouveaux partenariats&nbsp;?</HighlightText>
          <CoreTextITW>
            Nous avons dû revoir en profondeur la relation à notre écosystème. Nous avions l’habitude de travailler avec nos fournisseurs et avec le monde académique. Aujourd’hui, nous avons élargi le spectre de nos partenariats. Nous travaillons avec des startups innovantes, avec des instituts et même avec des ONG. Notre rapport aux startups est particulièrement emblématique de cette transformation. Nous pouvons mettre en place de simples collaborations et nous sommes en mesure d’incuber les pépites les plus prometteuses au sein de notre incubateur de Sciences Vertes basé dans l’Essonne. Nous nous appuyons sur Bold, le fonds d’investissement du Groupe L’Oréal, pour engager des partenariats avec des startups dont l’utilité pour le monde cosmétique est évidente. Cela nous a permis d’investir dans Microphyt, qui utilise les microalgues pour développer de nouvelles matières premières, ou dans Debut Bio, une startup américaine qui développe des technologies de bio-fabrication, basées sur une approche sans cellule et permet de produire certains de nos ingrédients de manière plus durable. Dans cette logique d’innovation ouverte et de co-création, nous allons jusqu’à travailler avec nos concurrents ! Nous avons par exemple investi avec certains d’entre eux dans une joint-venture dirigée par l’entreprise de biotechnologies Future Origins. L’ambition est de remplacer certains ingrédients traditionnels par des alternatives biosourcées.

          </CoreTextITW>
          <HighlightText>Comment le groupe l’Oréal mesure l’impact des sciences vertes&nbsp;?</HighlightText>
          <CoreTextITW>
            Avec ses concurrents justement ! L’Oréal est membre fondateur du consortium EcoBeautyScore qui réunit aujourd’hui plus de 70 entreprises. Nous travaillons ensemble pour développer une méthodologie commune afin d’évaluer l’impact de nos produits, et de créer un système de scoring¹ commun. C’est une révolution pour notre secteur et pour les consommateurs, qui peuvent faire leur choix à partir d’informations partagées. En interne, nous évaluons depuis 10 ans l’impact environnemental et social de tous nos produits grâce à l’outil SPOT² (Sustainable Product Optimisation Tool). Chaque nouvelle mise en marché doit obtenir un score SPOT supérieur à son prédécesseur !
          </CoreTextITW>
        </div>
      </section>

      <section className="marged lg:my-[100px] grid">
        <div className="lg:col-start-1 lg:col-end-13 space-y-12 lg:space-y-[20px]">
          <p className="flex tracking-wider justify-start uppercase underline w-full font-roboto text-[10px]">
            <a href="https://www.loreal.com/fr/groupe/decouvrir-loreal/raison-detre/green-sciences" target="_blank">(1) Pour plus d’informations sur les Sciences Vertes : https://www.loreal.com/fr/groupe/decouvrir-loreal/raison-detre/green-sciences</a></p>
          <p className="font-roboto font-light leading-[24px] text-[12px]">
            (2) Pour plus d’informations sur les Sciences Vertes : <a className="hover:underline" href="https://www.loreal.com/fr/groupe/decouvrir-loreal/raison-detre/green-sciences" target="_blank">https://www.loreal.com/fr/groupe/decouvrir-loreal/raison-detre/green-sciences</a>  <br />
            (3) [Traduction] : Notation <br />
            (4) [Traduction] : Outil pour l’optimisation environnementale des produits
          </p>
        </div>
      </section>

      <SectionVignettes
        isAtBottom={isAtBottom}
        scrollYProgress={scrollYProgress}
        isDragging={isDragging}
        slug="les-sciences-vertes-ou-quand-la-beaute-s-inspire-de-la-nature"
        sortFunction={[5, 3, 4, 1, 2, 7, 6]}
      />
      <Cookies />
    </>
  );
}
