"use client";
import { useWindowSize } from "@/components/hook/useWindowSize";
import { AnimatedText } from "@/components/loreal/AnimatedText";
import Carousel from "@/components/loreal/Carousel";
import { CoreText } from "@/components/loreal/CoreText";
import { CoreTextITW } from "@/components/loreal/CoreTextITW";
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

export default function Article2() {
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
          <span>
            Plus circulaire, innovant et {width > 768 && <br />} allégé : 
            <span className="font-extrabold italic"> l’emballage</span>
            {width > 768 && <br />}
            fait sa&nbsp;mue
          </span>
        }
        plane1="/assets/images/hero/emballage-round.png"
        plane2="/assets/images/hero/emballage-shadow.png"
        plane3="/assets/images/hero/emballage.png"
        plane1ClassName="bottom-0 w-full xs:w-[70%] lg:right-[6%] lg:bottom-0 lg:w-[38%]"
        plane2ClassName="bottom-0 w-full xs:w-[70%] lg:right-[17%] lg:bottom-[2%] lg:w-[10%]"
        plane3ClassName="bottom-0 w-full xs:w-[70%] lg:right-[19%] lg:bottom-[2%] lg:w-[10%] h-auto"
        backgroundClass="gradient-white"
      />
      
      <Menu>
        <NavBar />
      </Menu>

      <section className="marged my-20 grid space-y-10 lg:my-32 lg:space-y-[20px]">
        <div className="base:col-start-1 base:col-end-13 lg:col-start-1 xl:col-start-2 lg:col-end-7 self-center lg:space-y-[40px]">

          <p className="font-roboto text-[20px] font-bold">Alfred de Musset en 1831</p>
          <CoreText
            className="lg:pb-20"
            elementClassName="lg:text-[18px] leading-[28px]">
            Presque deux siècles plus tard, le poète serait étonné de constater que l’Européen moyen produit chaque année plus de 180 kg de déchets d’emballages¹, faisant du «flacon» un objet de préoccupation écologique majeure. Si l’industrie alimentaire est aujourd’hui la principale productrice, le sujet irrigue tous les secteurs. Pour celui de la beauté, la barre est encore plus haute en matière d’exigence. Plus qu’un simple contenant, l’emballage² est vecteur d’innovation, de différenciation et d’engagement. Il reflète les valeurs de la marque et répond aux nouvelles aspirations des consommateurs, notamment en termes de responsabilité environnementale. Au sein du Groupe L’Oréal, ce défi est au cœur des préoccupations depuis plusieurs décennies, et donne lieu à des réponses radicales. Innovations technologiques, changements d’usage et transformations industrielles majeures sont au programme, alors que le groupe s’est fixé un objectif ambitieux : réduire de 20&nbsp;% en intensité la quantité d’emballage utilisée dans ses produits d’ici à 2030.
          </CoreText>
        </div>
        <ExportedPicture
          className="w-full base:col-start-1 base:col-end-13 lg:col-start-8 lg:col-end-13 lg:flex lg:justify-end"
          alt="Biologie"
          src="/assets/images/article2/picture-lancome.png"
          priority={true}
        />
      </section>

      <section className="marged my-20 grid space-y-10 lg:my-48 lg:space-y-[60px]">
        <CoreTitle className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          Emballés par le futur
        </CoreTitle>
        <CoreTextITW 
          elementClassName="font-light font-bitter leading-[28px]"
          className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          Derrière les baies d’un immeuble moderne de Clichy, les blouses blanches se croisent dans un ballet incessant. Elles naviguent d’une imprimante 3D à d’immenses <i>moodboards</i>³, dont certains enrichis par l’intelligence artificielle. Elles frôlent des paillasses recouvertes de machines complexes et de verrerie de laboratoire. Et pour cause : nous sommes dans un des cinq Packaging Labs⁴ de L’Oréal, véritables sanctuaires dédiés aux enjeux du packaging. Ces derniers emploient à plein temps plus de 500 personnes dans le monde avec un seul objectif : inventer l’emballage de demain, capable de réussir la synthèse entre performance technique, responsabilité environnementale et attractivité. On y découvre des spécialistes du papier qui tentent d’inviter la cellulose dans l’humidité de nos salles de bains. On croise des chercheurs qui travaillent à l’invention de verres nouvelle génération. C’est également au sein de ces laboratoires que naissent les principales «&nbsp;rénovations&nbsp;» packaging, qui permettent à 97&nbsp;% des produits lancés ou rénovés par le groupe d’améliorer leur profil environnemental.
        </CoreTextITW>
      </section>

      <section className="marged my-20 grid space-y-10 lg:my-48 lg:space-y-0">
        <ExportedPicture
          className="base:col-start-1 base:col-end-13 lg:col-start-1 lg:col-end-6 lg:w-[100%]"
          alt="Luxe"
          src="/assets/images/article2/luxe2.png"
          priority={true}
        />
        <CoreText className="lg:col-start-7 lg:col-end-12 lg:mt-20 self-center">
          Ici, le travail est pluridisciplinaire par défaut. Aux côtés des chercheurs et des ingénieurs, des équipes de designers s’échinent à repenser nos gestes du quotidien, dans un mariage subtil de recherche esthétique, d’ergonomie et d’écoconception. On découvre ainsi la rénovation des flacons Elseve de L’Oréal Paris, marque emblématique du Groupe. Ici, l’intensité d’emballage a été réduite de 20&nbsp;% sans impact sur le ressenti du consommateur. Le flacon est également devenu rechargeable grâce à un capot facilement déclipable et reclipable, ce qui ouvre la voie à de nouveaux usages vertueux. 
        </CoreText>
      </section>

      <section className="marged my-20 grid space-y-10 lg:my-48 lg:space-y-[60px]">
        <CoreTitle className="lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">Les 3R d’une nouvelle ère</CoreTitle>
        <CoreText className="lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          Ces espaces de pointe s’inscrivent dans le cadre plus global du programme L’Oréal pour le Futur, boussole du
          groupe en matière de responsabilité environnementale. « Nous avons établi une stratégie packaging durable qui
          repose sur les 3R : Réduire, Remplacer, Recycler », explique Elodie Bernadi, directrice Développement Durable
          et RSE de L’Oréal France. Derrière le célèbre triptyque, c’est un véritable changement industrielle et
          culturelle qui est engagée. « Nos succès ne sont pas forcément visibles du consommateur final. Mais les
          rénovations packaging, ou la progression sur tout notre portefeuille pour atteindre 32 % de plastiques
          recyclés ou biosourcés, voire même plus de 87 % sur nos plastiques PET, qui représentent une grande partie de
          notre portefeuille, ou 99 % du carton des étuis certifiés issus de forêts gérées de façon durable, c’est
          colossal pour nous », ajoute Elodie Bernadi. 
        </CoreText>
      </section>

      <section className="grid">
        <AnimatedText className="lg:col-start-2 lg:col-end-12">
          « Nos succès ne sont pas forcément visibles du consommateur final. Mais les rénovations packaging, ou la progression sur tout notre portefeuille pour atteindre 32&nbsp;% de plastiques recyclés ou biosourcés, voire même plus de 87&nbsp;% sur nos plastiques PET, qui représentent une grande partie de notre portefeuille, ou 99&nbsp;% du carton des étuis certifiés issus de forêts gérées de façon durable, c’est colossal pour nous&nbsp;»<span className="not-italic">, ajoute Elodie Bernadi.</span> 
        </AnimatedText>
      </section>

      <section className="marged relative my-20 mb-[30px] grid lg:my-48">
        <Carousel
          images={[
            { src: "/assets/images/carousel/carousel1-article-2.png", alt: "Image 1" },
            { src: "/assets/images/carousel/carousel2-article-2.png", alt: "Image 2" },
            { src: "/assets/images/carousel/carousel3-article-2.png", alt: "Image 3" },
            { src: "/assets/images/carousel/carousel4-article-2.png", alt: "Image 4" },
            { src: "/assets/images/carousel/carousel5-article-2.png", alt: "Image 5" },
            { src: "/assets/images/carousel/carousel6-article-2.png", alt: "Image 6" },
          ]}
        />
      </section>

      <section className="marged relative grid">
        <CoreText className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 lg:mt-20">
          Dans les faits, cette transformation recouvre une myriade d’actions, tournées vers l’ambition globale de contribuer à limiter l'impact sur la planète. On pense immédiatement à la réduction du poids des emballages, déjà effective à hauteur de 15 à 20 % pour les flacons de parfum en verre. Moins évidentes, les logiques d’innovation ouverte sont tout aussi importantes. Avec ses partenaires historiques comme avec des startups, L’Oréal s’inscrit dans des logiques d’écosystèmes afin d’accélérer la transition. <i>« Avec Albéa, un de nos grands fournisseurs au niveau mondial, nous avons conçu un tube première génération constitué à 50 % à base de carton qui est commercialisé sur plusieurs de nos marques, comme La Roche Posay, Vichy, Garnier ou La Provençale »</i>, explique Elodie Bernadi. Côté startup, cette ouverture s’incarne par exemple dans le consortium que L’Oréal a co-fondé avec Carbios, une entreprise française pionnière à qui l’on doit un procédé de recyclage du plastique PET dit <i>«&nbsp;enzymatique&nbsp;»</i>. <br />
          Ce dernier permet la fabrication de nouveaux produits à partir de matériaux recyclés à 100 % grâce à ce procédé biotechnologique. 
        </CoreText>
      </section>

      <section className="marged my-20 grid space-y-10 lg:my-48 lg:space-y-20">
        <div className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          <CoreTitle elementClassName="pb-[15px]" >
            Faire émerger
          </CoreTitle>
          <CoreTitle className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
            de nouveaux gestes
          </CoreTitle>
        </div>
        <CoreText className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          Au-delà de la recherche, des startups et des technologies, un dernier acteur est amené à jouer un rôle majeur dans l’évolution des pratiques d’emballage : le consommateur. La question du réemploi est aujourd’hui une priorité absolue pour le Groupe L’Oréal, qui déploie des recharges sur une grande partie de son catalogue avec des gains de 50 % de matière (plastique, carton, verre, métal) en moyenne par rapport au flacon « parent ». Un changement de paradigme important pour nos habitudes de consommation qui demande un véritable effort d’accompagnement. « Il faut être très patient quand on installe de nouveaux gestes. C’est un apprentissage pour nous comme pour nos clients (entre autres salons de coiffure, pharmacies et parapharmacies, parfumeries et grande distribution). Il faut également apporter un bon niveau de pédagogie et accompagner les consommateurs sur le temps long », précise Elodie Bernadi. 
        </CoreText>
        <CoreText className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          Pour réussir cette transition vers le réemploi, L’Oréal multiplie les initiatives. Investissement, marketing et publicité mobilisant les égéries de ses marques sont d’ores et déjà orientés vers la pédagogie et la mise en avant des co-bénéfices, comme le gain de place, la praticité ou les effets de club de fidélité. Un travail est mené pour raconter la valeur des flacons que l’on jette aujourd’hui, alors que certains sont presque des objets d’art. À terme, pour que l’usage s’installe, il est impératif de rendre désirable le fait de réutiliser un emballage ou d’offrir une recharge. « C’est un travail que nous menons avec nos égéries, comme Emma Watson ou Eva Longoria, en qui nous croyons beaucoup pour convaincre les consommatrices en rendant le geste facile et désirable », conclut Elodie Bernadi.
        </CoreText>
      </section>

      <section className="marged my-10 grid lg:my-20">
        <CoreText className="mt-10 base:col-start-1 base:col-end-13 lg:col-start-2 lg:col-end-7 lg:mt-[150px]">
          En France, c’est Citeo qui gère la filière du tri et du recyclage sur les emballages ménagers. le Groupe L’Oréal, comme la plupart des contributeurs d’emballages ménagers, finance en partie cette filière à travers une contribution, pour chaque emballage mis sur le marché. Cela permet également de financer des innovations ou le développement de nouvelles filières. <i>« Dans le cadre de la loi AGEC, de nouvelles éco-contributions vont également voir le jour sur le sujet, je pense au régime de responsabilité élargie des producteurs (REP) sur les emballages industriels et commerciaux »</i>, explique Elodie Bernadi. Au-delà de l’aspect technique, Citeo porte également une ambition pédagogique qui se traduit en ce moment dans la campagne <i>« On ne lâche rien ! »</i>, dont l’ambition est de valoriser le geste de tri. Cela fait écho au programme <i>« Trions en beauté »</i> développé par le Groupe L’Oréal afin de mettre en avant des consignes de tri très précises pour la totalité des produits du groupe.
        </CoreText>
        <Quote
          direction="left"
          elementClassName="base:col-start-1 base:col-end-13 lg:col-start-9 lg:col-end-13 lg:w-[100%]"
          className=""
          pictureSrc="/assets/images/article2/elodie-quote.png"
          author="Elodie Bernadi"
          about={`Directrice Développement Durable <br />et RSE de L’Oréal France `}
        >
          « L’Oréal participe depuis des dizaines d’années à la mise en place d’une filière du tri et du recyclage. » 
        </Quote>
      </section>

      <section className="marged lg:my-[100px] grid">
        <div className="lg:col-start-1 lg:col-end-13 space-y-12 lg:space-y-[16px]">
        <p className="font-roboto font-light leading-[24px] text-[12px]">
          (1) Source : Pacte vert pour l’Europe : En finir avec les déchets d’emballages, encourager la réutilisation et le recyclage, Commission européenne (30/11/2022)
        </p>
          <p className="flex tracking-wider justify-start uppercase underline w-full font-roboto text-[10px]">
            <a href="https://www.loreal.com/fr/groupe/decouvrir-loreal/raison-detre/reduire-les-emballages-plastique/" target="_blank">(2) Pour plus d’informations sur la transformation des emballages du Groupe L’Oréal : https://www.loreal.com/fr/groupe/decouvrir-loreal/raison-detre/reduire-les-emballages-plastique/</a></p>
          <p className="font-roboto font-light leading-[24px] text-[12px]">
          (3) [Traduction] : Planches de tendances <br />
          (4) [Traduction] : Laboratoires d’emballages
          </p>
        </div>
      </section>

      <SectionVignettes
        isAtBottom={isAtBottom}
        scrollYProgress={scrollYProgress}
        isDragging={isDragging}
        slug="emballages-une-question-de-ressources"
        sortFunction={[5, 3, 4, 1, 2, 7, 6]}
      />

      <Cookies />
    </>
  );
}
