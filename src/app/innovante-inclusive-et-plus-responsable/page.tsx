"use client";
import { Count } from "@/components/animation/Count";
import { useWindowSize } from "@/components/hook/useWindowSize";
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

export default function Usine() {
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
            «Innovante, inclusive <br />
            et plus responsable&nbsp;: <br /> <span className="font-bold">nous sommes fiers</span>
            <br /> de notre usine.»
            <span className="font-roboto text-[20px] font-bold inline lg:hidden lg:tracking-[-1px]"> Matthieu Delebarre</span>
          </span>
        }
        mainSubTitle="Matthieu Delebarre"
        plane1="/assets/images/usine/hero-round.png"
        plane2="/assets/images/usine/hero-shadow.png"
        plane3="/assets/images/usine/hero.png"
        plane1ClassName="bottom-0 w-full xs:w-[70%] lg:right-[2%] lg:bottom-[-3%] lg:w-[45%]"
        plane2ClassName="bottom-0 w-full xs:w-[70%] lg:right-[5%] lg:bottom-0 lg:w-[37%]"
        plane3ClassName="bottom-0 w-full xs:w-[70%] lg:right-[10%] lg:bottom-0 lg:w-[37%]"
        backgroundClass="gradient-white"
      />

      <Menu>
        <NavBar />
      </Menu>

      <section className="marged my-20 grid lg:my-48">
        <CoreTextChapo className="centered-content base:col-start-1 base:col-end-12">
          Les imaginaires industriels évoluent. L’image héritée du XIXe siècle des cheminées fumantes, accolées à de vastes édifices sombres et secrets ne correspond plus (toujours) à la réalité du terrain. L’usine se réinvente, plus ouverte et tournée vers le territoire qui l’accueille. Le site de Caudry (Nord), fleuron du Groupe L’Oréal, incarne cette nouvelle génération d’outils industriels, plus responsables et inclusifs.
        </CoreTextChapo>
      </section>

      <section className="marged my-10 grid lg:my-20">
        <div className="sticky top-[120px] h-fit base:col-start-1 base:col-end-12 lg:col-start-3 lg:col-end-6">
          <Quote
            direction="left"
            className=""
            pictureSrc="/assets/images/usine/matthieu-quote.png"
            author="Matthieu Delebarre"
            about={`Directeur de l’usine de Caudry<br />(Nord, Hauts-de-France)`}
          >
            « Ce sont environ 500 personnes qui travaillent à plein temps sur le site de Caudry (Nord), employeur majeur à l’échelle du bassin de vie local.»
          </Quote>
        </div>
        <div className="space-y-10 base:col-start-1 base:col-end-12 lg:col-start-7 lg:col-end-12 lg:space-y-[40px]">
          <Tag>Interview</Tag>
          <CoreTitle>Matthieu Delebarre</CoreTitle>
          <CoreTextChapo>
            46 ans. Collaborateur du Groupe L’Oréal depuis 23 ans, il est directeur de l’usine de Caudry depuis 4 ans. À ce titre, il a vécu et piloté l’ensemble des transformations industrielles des deux dernières décennies. De l’enjeu environnemental aux exigences de l’automatisation, il revient sur les grands défis de l’usine du futur.  
          </CoreTextChapo>
          <HighlightText>Pouvez-vous nous présenter l’usine de Caudry&nbsp;?</HighlightText>
          <CoreTextITW>
          Caudry est une des 37 usines du Groupe L’Oréal à l’échelle mondiale. C’est également une des 11 usines françaises d’un groupe très ancré¹ dans son pays d’origine. On compte plus de 15 500 collaborateurs en France. Un quart de la production est réalisée sur le sol français. Le secteur des cosmétiques est par ailleurs devenu le deuxième secteur le plus contributeur à la balance commerciale de la France². À Caudry, nous produisons des fonds de teint et des soins de la peau de luxe destinés au monde entier, pour des marques comme Lancôme, Yves Saint Laurent, Biotherm, Armani ou Helena Rubinstein. L’usine de Caudry est historique, construite en 1 970 suite au rachat de la marque Lancôme par le Groupe L’Oréal, elle va bientôt fêter ses 55 ans. Aujourd’hui, elle compte près de 500 collaborateurs pour 36 lignes de conditionnement. Elle est capable de produire 24 heures sur 24, 7&nbsp;jours sur 7, plus d’un million de produits par jour. Avec 98 % de la production destinée à l’exportation, c’est un vrai fleuron du made in France³ et du luxe à la française.
          </CoreTextITW>
          <HighlightText>Comment cette usine historique s’est-elle réinventée&nbsp;?</HighlightText>
          <CoreTextITW>
            Caudry incarne l’usine du futur et le déploiement d’une « industrie 4.0 ». Le site intègre les dernières technologies d’automatisation et de robotisation, pour une production agile et performante, au service de l’innovation. Sur une ligne de fonds de teint, nous sommes capables de changer de teinte en moins d’une minute. Cette flexibilité se répercute auprès des clients en permettant le développement de gammes de plus de 50 teintes ! Nous sommes également en mesure de pousser la personnalisation jusqu’au produit unique, en gravant par exemple un message spécifique sur un emballage. Récemment, nous avons transformé nos équipements pour nous adapter à la production de produits rechargeables, que développe L’Oréal sur l’ensemble de ses marques. Cette exemplarité se traduit dans une multitude de certifications, notamment auprès de la FDA⁴, qui permet de produire spécifiquement pour le marché américain des produits considérés comme pharmaceutiques par les autorités américaines.
          </CoreTextITW>
          <HighlightText>
            La question environnementale est au coeur des enjeux industriels. Comment y répondez-vous&nbsp;?
          </HighlightText>
          <CoreTextITW>
            L’usine s’inscrit dans le programme L’Oréal pour le Futur, qui fixe les objectifs environnementaux du groupe. Nous sommes engagés au quotidien. Depuis 2021, le site a atteint 100 % d’énergie renouvelable. Une installation photovoltaïque d’envergure permet de couvrir environ 10 % des besoins de la consommation annuelle de l’usine. Nous accordons une grande importance à la question de l’eau. Notre objectif est de recycler ou réutiliser la totalité de l’eau destinée à nos procédés industriels à moyen terme, ce qui nous affranchira de prélever sur les réseaux. Grâce à une station de retraitement installée en 2021, nous utilisons aujourd’hui 50 % d’eau recyclée ou réutilisée. Au-delà de l’outil de production, notre engagement environnemental se prolonge dans les produits eux-mêmes. Nous avons supprimé les notices, nous développons des emballages recyclés, qui intègrent notamment du carton, et nous mettons l’accent sur la rechargeabilité de nos pots et flacons. Sur tous les plans, nous anticipons le futur&nbsp;!
          </CoreTextITW>
        </div>
      </section>

      <section className="marged relative my-20 mb-[30px] grid lg:my-48">
        <Carousel
          images={[
            { src: "/assets/images/carousel/carousel1-article-usine.png", alt: "Image 1" },
            { src: "/assets/images/carousel/carousel2-article-usine.png", alt: "Image 2" },
            { src: "/assets/images/carousel/carousel3-article-usine.png", alt: "Image 2" },
          ]}
        />
      </section>

      <section className="marged my-10 grid space-y-10 lg:my-20 lg:space-y-[100px]">
        <div className="grid space-y-10 lg:space-y-20">
          <CoreTitle className="lg:col-start-2 lg:col-end-12">Un acteur majeur du tissu économique</CoreTitle>
          <CoreText className="lg:col-start-2 lg:col-end-12">
            Lorsqu’on pénètre dans l’usine de Caudry, il est difficile d’imaginer que le site va fêter ses 55 ans. Ici, équipements de haute technologie et opérateurs collaborent sur des lignes de production automatisées et conçues pour un confort de travail optimal. L’efficacité de la machine n’a pas remplacé la main humaine, qui reste au cœur des opérations. Ce sont environ 500 personnes qui travaillent ainsi à plein temps sur le site, employeur majeur à l’échelle du bassin de vie local. 
          </CoreText>
        </div>
        <div className="base:col-start-1 base:col-end-13 lg:col-start-2 lg:col-end-12">
          <AnimatedText>
            Au-delà de Caudry et de ses alentours directs, des dizaines de fournisseurs bénéficient d’une usine qui achète 99&nbsp;% de ses composants en Europe et 53&nbsp;% en France.<br /> 
            « Les tubes Albea sont produits dans la Marne, et les flacons Verescence proviennent de Normandie », précise Matthieu Delebarre, directeur de l’usine.
          </AnimatedText>
        </div>
        <CoreText className="lg:col-start-2 lg:col-end-12">
          Une étude d’impact socio-économique réalisée avec le cabinet Asterès permet de comprendre l’ampleur des effets d’entraînement de tels sites de production pour le tissu économique local. Dans les Hauts-de-France, le Groupe L’Oréal emploie plus de 1 500 personnes en direct et génère près de 3 500 emplois supplémentaires (induits et en chaîne) par effet d’entraînements. L’activité de L’Oréal, ajoutée à celle de ses distributeurs et de ses fournisseurs, génère donc près de 5 000 emplois dans la région.  <br />
          « Pour Octobre Rose, nous avons accompagné l’association locale des Ch’tis Coureurs, qui a pour objectif d’améliorer la qualité de vie des malades du cancer.  »
        </CoreText>
        
        <div className="grid marged py-[100px]">
          <div className="lg:col-start-2 lg:col-end-5">
            <LazySvg 
              name="france-icon"
              width={100} 
              height={100} 
              className=""
            />
            <h2 className="font-bitter font-light text-[46px]">L'Oréal en France</h2>
            <p className="font-roboto font-bold text-[20px]">Leader du marché de la beauté <br />
            2ème contributeur à la balance <br />
            commerciale extérieure française</p>
            <p className="font-roboto font-bold text-[20px]">
              <span className="text-[36px]">
                <Count style="mid" addSpaceNumber start={0} end={11} duration={1} delay={1} />
              </span> usines <br />
            <span className="text-[36px]">
              <Count style="mid" addSpaceNumber showPlusSign start={0} end={15500} duration={1} delay={1} />
            </span> collaborateurs <br />
            <span className="text-[36px]">
              <Count style="mid" addSpaceNumber start={0} end={79000} duration={1} delay={1} />
            </span> emplois générés⁵</p>
          </div>
          <div className="lg:col-start-7 lg:col-end-12">
            <LazySvg 
              name="usine-icon"
              width={100} 
              height={100} 
              className=""
            />
            <h2 className="font-bitter font-light text-[46px]">Focus usine de Caudry</h2>
            <p className="font-roboto font-bold text-[20px]">
              <span className="text-[36px]">
                <Count style="mid" addSpaceNumber start={0} end={55} duration={1} delay={1} />
              </span> ans <br />
            <span className="text-[36px]">
              <Count style="mid" addSpaceNumber showPercentage start={0} end={100} duration={1} delay={1} />
            </span> énergie renouvelable depuis 2021 <br />
            <span className="text-[36px]">
              <Count style="mid" addSpaceNumber start={0} end={500} duration={1} delay={1} />
            </span> collaborateurs</p>
            <p className="font-roboto font-bold text-[20px]">Près de&nbsp;
              <span className="text-[36px]">
                <Count style="mid" addSpaceNumber start={0} end={5000} duration={1} delay={1} />
              </span> <br />
            emplois générés dans la région par le Groupe⁶</p>
          </div>
        </div>

        <div className="lg:col-start-2 lg:col-end-12 space-y-10 lg:space-y-20">
          <CoreTitle>Une usine ouverte</CoreTitle>
          <CoreText>
            L’influence locale de l’usine de Caudry s’étend bien au-delà de la dimension économique. Le site s’est adapté pour favoriser le travail des personnes en situation de handicap, qui constituent aujourd’hui 10 % de l’effectif. Le lien avec les collectivités et les associations locales est encouragé alors que l’usine devient un lieu de vie et de passage. « Pour Octobre Rose, nous avons accompagné l’association locale des Ch’tis Coureurs, qui a pour objectif d’améliorer la qualité de vie des malades du cancer. Nous sommes également sponsors d’une initiative Together in STEM, pour encourager les jeunes filles à intégrer des études d’ingénierie », détaille Matthieu Delebarre. Les collaborateurs eux-mêmes s’engagent localement, en particulier sur le volet environnemental. Une communauté de salariés, les greeners⁷, dédie ainsi une partie de son temps à des actions bénévoles comme la production de miel avec les ruches installées sur le site, la mise en place d’une Association pour le maintien d’une agriculture paysanne (AMAP) locale, ou le recyclage de matériel informatique !
          </CoreText>
          <CoreText>
            Moteur d’inclusion, poumon économique ou pionnier environnemental, le site industriel du futur n’est pas une entité autarcique, c’est un élément moteur essentiel dans le maillage des territoires !
          </CoreText>
        </div>
      </section>

      <section className="marged lg:my-[100px] grid">
        <div className="lg:col-start-1 lg:col-end-13 space-y-12 lg:space-y-[40px]">
          <p className="flex tracking-wider justify-start uppercase underline w-full font-roboto text-[10px]">
            <a href="https://www.loreal.com/fr/articles/group/semaine-de-lindustrie/" target="_blank">(1) Pour plus d’informations sur l’ancrage industriel de L’Oréal en France : https://www.loreal.com/fr/articles/group/semaine-de-lindustrie/</a></p>
          <p className="font-roboto font-light leading-[24px] text-[12px]">
            (2) Source : Communiqué de presse du 7 février 2024 de la FEBEA <br />
            (3) [Traduction] : Fabriqué en France <br />
            (4) Food and Drug Administration, agence fédérale du département américain de la santé et des services sociaux <br />
            (5) Données collectées par L’Oréal et utilisées par le modèles d’impact Asterès (MIA) évaluant l’ensemble de l’empreinte générée par L’Oréal en France (que la production nationale soit exportées ou non) à l’aide des données des tableaux “entrées-sorties” de l’Insee. Le modèle quantifie pour les dépenses de l’année 2022 l’ensemble des effets économiques de L’Oréal sur 4 ans. <br />
            (6) XXX <br />
            (7) [Traduction] : Plus verts
          </p>
        </div>
      </section>

      <SectionVignettes
        isAtBottom={isAtBottom}
        scrollYProgress={scrollYProgress}
        isDragging={isDragging}
        slug="innovante-inclusive-et-plus-responsable"
        sortFunction={[5, 3, 4, 1, 2, 7, 6]}
      />

      <Cookies />
    </>
  );
}
