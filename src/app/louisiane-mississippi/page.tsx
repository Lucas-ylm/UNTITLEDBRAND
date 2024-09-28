import Map from "@/components/article/Map";
import Hero from "@/components/hero/Hero";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Heading from "@/components/shared/Heading";
import Text from "@/components/shared/Text";
import ImageArticle from "@/components/article/ImageArticle";
import ImageShow from "@/components/article/ImageShow";
import ImageGrid from "@/components/article/ImageGrid";
import Diaporama from "@/components/article/Diaporama";
import AnimateParallax from "@/components/animations/AnimateParallax";
import ExportedPicture from "@/components/shared/ExportedPicture";
import ExportedImage from "@/components/shared/ExportedImage";
import Cookie from "@/components/layout/Cookie";
import EncartDiaporama from "@/components/article/EncartDiaporama";
import ImageColumns from "@/components/article/ImageColumns";
import Link from "next/link";

export const metadata = {
  title: "Louisiane et Mississippi",
  description:
    "La Louisiane et le Mississippi se prêtent à une grande exploration, à la croisée de villes culturellement riches et d’une nature préservée…",
  openGraph: {
    images: "/social-louisiane-mississipi-min.jpg",
  },
};

export default function LouisianeMississipiPage() {
  return (
    <div className="color-louisiane">
      <Hero
        image={
          <ExportedPicture
            src="/assets/louisiane-mississipi/header-mustache-hear-the-music.jpg"
            sources={[
              {
                src: "/assets/louisiane-mississipi/header-mustache-hear-the-music-desktop.jpg",
                widths: [1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375],
                media: "(orientation: landscape)",
              },
              {
                src: "/assets/louisiane-mississipi/header-mustache-hear-the-music-mobile.jpg",
                widths: [1280, 1024, 768, 640, 520, 375],
                media: "(orientation: portrait)",
              },
            ]}
            alt=""
            loading="eager"
            className="absolute inset-0 h-full w-full max-w-none object-cover"
          />
        }>
        <Heading level="h1" intent="main">
          Au sud-est des États-Unis
        </Heading>
        <Text type="serif">
          La Louisiane et le Mississippi se prêtent à une grande exploration, à la croisée de villes culturellement
          riches et d’une nature préservée…
        </Text>
      </Hero>

      <Section background="primary" margin="none" padding="bottom-large">
        <Container size="small">
          <AnimateParallax>
            <Text color="light" type="serif">
              Au sud-est des États-Unis, la Louisiane et le Mississippi se prêtent à une grande exploration, à la
              croisée de villes culturellement riches et d’une nature préservée.
            </Text>
            <Text color="light" type="serif">
              Première escale à la Nouvelle-Orléans, en savourant un mélange de cuisine créole et cajun avant de
              fréquenter ses clubs de jazz bien connus, et de rejoindre la nature et une sélection de parcs nationaux
              immanquables. Et si l’heure est à la fête, la Louisiane et le Mississippi ne sont pas en reste : toute
              l’année, les festivals y incarnent la richesse de la culture locale.
            </Text>
          </AnimateParallax>
        </Container>
      </Section>

      <Section margin="large">
        <Container>
          <Map pathname="louisiane-mississippi"></Map>
        </Container>
      </Section>

      <Section>
        <ImageArticle
          image={
            <ExportedImage
              src="/assets/louisiane-mississipi/image-new-orleans.jpg"
              width={1500}
              height={1000}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />
          }>
          <Heading level="h2">Au cœur des villes, des joyaux cachés</Heading>
          <Text>
            Sur les rives du fleuve Mississippi, en Louisiane, la Nouvelle-Orléans est gouvernée successivement, dès sa
            création en 1718, par la France, l’Espagne, la France à nouveau puis les États-Unis.
          </Text>
        </ImageArticle>
      </Section>

      <Section>
        <Container size="article">
          <Text>
            Sa culture reflète encore cet incroyable métissage, de l’architecture coloniale française à la cuisine
            créole et à la scène musicale. En marge des lieux les plus explorés, comme le French Quarter (Vieux Carré
            français), cœur battant de la ville, où se promener au fil de ruelles pavées et de maisons colorées,
            emportés par le son du jazz, d’autres quartiers méritent l’exploration en musique. Parmi eux, Marigny,
            Bywater et Trémé, avec ses maisons colorées de style créole, offrent un visage et une expérience plus
            locales de la ville. À Marigny, de jour, l’heure est à la visite de galeries d’art, de l’art folklorique et
            traditionnel de la Louisiane à la mise en lumière d’œuvres d’artistes contemporains émergents ou établis. Le
            soir, sur Frenchmen Street, de nombreux clubs de jazz, bars et salle de concert permettent de se
            familiariser avec la scène musicale locale. La Nouvelle-Orléans est largement considérée comme le lieu de
            naissance du jazz, qui a émergé à la fin du XIXème siècle. Mais ce n’est pas tout : au jazz de la Nouvelle
            Orléans, créé par la communauté afro-américaine en partie issue de l’esclavage, s’ajoutent d’autres styles
            musicaux dont la ville se fait l’écho, du gospel au blues, du zydeco aux brass bands.
          </Text>
        </Container>
      </Section>

      <Section>
        <ImageGrid
          imageGrid={[
            [
              <ExportedImage
                key="1"
                src="/assets/louisiane-mississipi/grid-top-left-new-orleans.jpg"
                width={1680}
                height={1152}
                widths={[1680, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="2"
                src="/assets/louisiane-mississipi/grid-bottom-left-new-orleans.jpg"
                width={1920}
                height={1320}
                widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
            ],
            [
              <ExportedImage
                key="3"
                src="/assets/louisiane-mississipi/grid-top-center-new-orleans.jpg"
                width={1600}
                height={1040}
                widths={[1600, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="4"
                src="/assets/louisiane-mississipi/grid-bottom-center-new-orleans.jpg"
                width={810}
                height={1040}
                widths={[810, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
            ],
            [
              <ExportedImage
                key="5"
                src="/assets/louisiane-mississipi/grid-bottom-right-new-orleans.jpg"
                width={1680}
                height={1152}
                widths={[1680, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="6"
                src="/assets/louisiane-mississipi/grid-top-right-new-orleans.jpg"
                width={1920}
                height={1320}
                widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
            ],
          ]}
        />
      </Section>

      <Section>
        <Container size="article">
          <Text>
            À Bywater, l’ère industrielle a laissé place à un quartier branché où de nombreuses anciennes usines et
            entrepôts ont été convertis en lofts, galeries d’art, studios d’artistes, restaurants et cafés. Au
            Mississippi : Jackson, capitale de l’État, appelle à un citytrip palpitant. On y goûte à la cuisine du sud,
            cajun et créole, dans le quartier animé de Fondren, on se balade à Belhaven, où les rues bordées d’arbres et
            de maisons à l’architecture typique du début du XXème siècle, charmantes, invitent à la flânerie. On y a
            aussi rendez-vous avec l’Histoire entre les murs de l’impressionnant Mississippi Civil Rights Museum,
            consacré au Mouvement afro-américain des droits civiques entre 1945 et 1970. À 2h30 au nord de Jackson, les
            férus de littérature ne manqueront pas de se rendre à Oxford, pour visiter Rowan Oak, la maison de
            l’illustre écrivain William Faulkner. Son œuvre est profondément empreinte de la culture et des paysages du
            Mississippi, où il a vécu la majeure partie de sa vie.
          </Text>
        </Container>
      </Section>

      <Section background="primary" padding="horizontal">
        <Container size="screen" type="flex" direction="mobileColumn" items="center" padding="bottom">
          <ExportedImage
            src="/assets/louisiane-mississipi/image-influenceuse-2.jpg"
            width={1234}
            height={1600}
            widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
            alt=""
            className="mb-8 w-[428px] lg:mb-0 lg:ml-24"
          />
          <Container size="small" padding="none">
            <Heading color="light" level="h3" intent="title" margin={false}>
              La Nouvelle-Orléans
              <br /> Clara&nbsp;Victorya
            </Heading>
            <Heading color="light" level="h6" intent="thin">
              <Link href="https://www.instagram.com/claravictorya/" target="_blank">
                @claravictorya
              </Link>
            </Heading>

            <Text type="serif" color="light">
              Hello, je découvre la Nouvelle-Orléans en Louisiane grâce à @visittheusa et je peux déjà vous donner 5
              bonnes raisons d’aller à la Nouvelle-Orléans avec sa meilleure amie… Tout d’abord l’architecture est
              magnifique, ⁠l’ambiance des petits clubs de Jazz et marchés artisanaux nous ont fait voyager dans le
              temps. Une petite pause nature se fait apprécier avec la découverte des bayous de la Louisiane. Un gros
              plus pour la nourriture avec des spécialités du coin surprenantes. Nous sommes marqués par la gentillesse
              et les conseils des antiquaires de la ville. Si vous êtes aventurier, vous apprécierez sûrement un ghost
              tour (pour mes sœurs sorcières 😉) comme nous l’avons fait le dernier soir. <br />
              Nous y avons passé que 3 jours mais il reste encore beaucoup à explorer 🥰
            </Text>
          </Container>
        </Container>
        <ImageColumns
          imageColumns={[
            <ExportedImage
              key="1"
              src="/assets/louisiane-mississipi/image-new-orleans-1.jpg"
              width={1366}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="2"
              src="/assets/louisiane-mississipi/image-new-orleans-2.jpg"
              width={1366}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="3"
              src="/assets/louisiane-mississipi/image-new-orleans-3.jpg"
              width={1366}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="4"
              src="/assets/louisiane-mississipi/image-new-orleans-4.jpg"
              width={900}
              height={1600}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="5"
              src="/assets/louisiane-mississipi/image-new-orleans-5.jpg"
              width={1536}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="6"
              src="/assets/louisiane-mississipi/image-new-orleans-6.jpg"
              width={1366}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="7"
              src="/assets/louisiane-mississipi/image-new-orleans-7.jpg"
              width={1366}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="8"
              src="/assets/louisiane-mississipi/image-new-orleans-8.jpg"
              width={1366}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="9"
              src="/assets/louisiane-mississipi/image-new-orleans-9.jpg"
              width={1536}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
          ]}
        />
      </Section>

      <Section>
        <ImageShow
          image={
            <ExportedImage
              src="/assets/louisiane-mississipi/image-louisiana-tab-benoit-bayou.jpg"
              width={1600}
              height={800}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />
          }>
          <Heading level="h2">Immersion en pleine nature</Heading>
          <Text>
            À eux deux, le Mississippi et la Louisiane totalisent 62 parcs d’État. Forêts, rivières, plages, lacs et
            marais ouvrent aux férus d’activités en plein air un large monde de possibles pour être au plus proche des
            éléments.
          </Text>
        </ImageShow>
      </Section>

      <Section>
        <Container size="article">
          <Text>
            La forêt nationale de Desoto est l’une des six forêts nationales du Mississippi et abrite une diversité
            d’écosystèmes à laquelle se familiariser au cours d’une balade. Parsemée de lacs, de rivières sinueuses et
            de sentiers de randonnée, la De Soto National Forest dévoile une nature préservée qui se prête aussi à la
            pratique de la pêche, du kayak et à l’observation de la faune. Parmi les sentiers, celui de Tuxachanie est
            le plus prisé des randonneurs. Dans les collines du nord-est de l’État, le Parc national de Tishomingo
            dévoile une nature sauvage, brute, qui s’épanouit dans des paysages rocheux spectaculaires lézardés de
            cascades et de sentiers de randonnée panoramiques. En Louisiane, au cœur de l’État, la forêt nationale de
            Kisatchie mérite aussi la balade. Sur une surface de près de 265 000 hectares, elle abrite plusieurs sites
            naturels remarquables, tels que les chutes de Kisatchie et le sentier Longleaf Vista. Formations géologiques
            sculpturales, vues panoramiques et sites archéologiques attestant d’une présence humaine datant de plusieurs
            millénaires. De marais en forêts, de lacs en rivières, la Louisiane et le Mississippi se prêtent à
            l’aventure en pleine nature.
          </Text>
        </Container>
      </Section>

      <Section>
        <Diaporama
          images={[
            <ExportedImage
              key="1"
              src="/assets/louisiane-mississipi/image-kisatchie-national-forest-1.jpg"
              width={1920}
              height={1280}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="2"
              src="/assets/louisiane-mississipi/image-kisatchie-national-forest-2.jpg"
              width={1920}
              height={1280}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="3"
              src="/assets/louisiane-mississipi/image-kisatchie-national-forest-3.jpg"
              width={1920}
              height={1280}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="4"
              src="/assets/louisiane-mississipi/image-kisatchie-national-forest-4.jpg"
              width={1920}
              height={1280}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
          ]}
        />
      </Section>

      <Section>
        <ImageArticle
          image={
            <ExportedImage
              src="/assets/louisiane-mississipi/image-great-river-road-day.jpg"
              width={1500}
              height={1000}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />
          }>
          <Heading level="h2">Vivre au rythme des festivals</Heading>
          <Text>
            En Louisiane et au Mississippi, l’année est rythmée par les festivals. Très profondément ancrés dans le
            quotidien et les mœurs, ils permettent de se familiariser avec les cultures, coutumes et spécialités
            locales.
          </Text>
        </ImageArticle>
      </Section>

      <Section>
        <Container size="article">
          <Text>
            Au-delà d’être considérés comme de simples évènements, ils sont de véritables rendez-vous, célébrations
            vibrantes et emblématiques de ces États du Sud. Parmi les festivals incontournables, le festival de
            Jambalaya de Gonzales, le festival du Gumbo de Bridge City et le Breaux Bridge Crawfish Festival se
            distinguent par leur histoire, leur atmosphère enivrante et leur impact sur la communauté locale. Le
            festival de Jambalaya de Gonzales, en Louisiane, célèbre le plat emblématique de la région. Chaque année,
            des milliers de visiteurs se rassemblent pour déguster différentes versions de ce plat délicieux, préparé
            par des chefs locaux ou ceux venus d’ailleurs. L’arôme enivrant du riz, des épices et des fruits de mer
            remplit l’air, tandis que la musique live et les animations ajoutent à la fête. À Breaux Bridge, le festival
            de l’écrevisse (Crawfish en Version Originale) est une célébration de ce fameux crustacé, cuisiné de
            différentes façons, de la plus traditionnelle à la plus créative. Concours et démonstration de cuisine,
            musique cajun et marché d’artisanat animent les rues, offrant une expérience immersive dans la culture et la
            gastronomie de la Louisiane. Autre élément incontournable du Sud des États-Unis : son incroyable patrimoine
            musical et la vivacité de leur scène, qui fait l’objet de plusieurs festivals, comme l’incontournable
            Essence Music Festival, à la Nouvelle-Orléans, chaque année en juillet. À ce jour, il s’agit du plus grand
            événement musical afro-américain au monde. Des artistes locaux et internationaux se produisent sur scène
            livrant principalement des performances de blues, de soul, de gospel et de jazz, devant un public
            rassemblant plus de 500 000 personnes. La musique, cette forme d’expression profondément enracinée dans
            l’histoire et la culture du Mississippi et de la Louisiane, est à l’honneur partout sur le territoire, des
            plus grands festivals aux plus petites manifestations locales. Un seul fil rouge : l’amour de la musique !
          </Text>
        </Container>
      </Section>

      <Section background="primary" padding="large">
        <EncartDiaporama
          images={[
            <ExportedImage
              key="1"
              src="/assets/louisiane-mississipi/diaporama-tennessee-1.jpg"
              width={1066}
              height={1600}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="2"
              src="/assets/louisiane-mississipi/diaporama-tennessee-2.jpg"
              width={1066}
              height={1600}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="3"
              src="/assets/louisiane-mississipi/diaporama-tennessee-3.jpg"
              width={1066}
              height={1600}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="4"
              src="/assets/louisiane-mississipi/diaporama-tennessee-4.jpg"
              width={1066}
              height={1600}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="5"
              src="/assets/louisiane-mississipi/diaporama-tennessee-5.jpg"
              width={1066}
              height={1600}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="6"
              src="/assets/louisiane-mississipi/diaporama-tennessee-6.jpg"
              width={1066}
              height={1600}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="7"
              src="/assets/louisiane-mississipi/diaporama-tennessee-7.jpg"
              width={1066}
              height={1600}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="8"
              src="/assets/louisiane-mississipi/diaporama-tennessee-8.jpg"
              width={1066}
              height={1600}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="9"
              src="/assets/louisiane-mississipi/diaporama-tennessee-9.jpg"
              width={1066}
              height={1600}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
          ]}>
          <Heading color="light" level="h3" intent="title" margin={false}>
            Escapade dans le Tennessee avec Clara&nbsp;Victorya
          </Heading>
          <Heading color="light" level="h6" intent="thin">
            <Link href="https://www.instagram.com/claravictorya/" target="_blank">
              @claravictorya
            </Link>
          </Heading>
          <Text>
            Sur les traces des artistes Soul, Jazz et Rock à Memphis dans le Tennessee avec @visittheusa&nbsp;! Quel
            bonheur de découvrir cette ville chargée d’histoire, tout en séjournant dans l’hôtel Memphis Central Station
            qui est l’ancienne gare de la ville. Nous avons pu découvrir Graceland, la maison d’Elvis Presley et en
            découvrir davantage sur sa vie. J’ai adoré le Stax Museum qui est l’ancien label de musique des plus grands
            artistes des années 60´s 70´s 🎶 C’est une ville incontournable et atypique à découvrir&nbsp;!
          </Text>
        </EncartDiaporama>
      </Section>

      <Section>
        <Cookie />
      </Section>
    </div>
  );
}
