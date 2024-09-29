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
  title: "Illinois",
  description:
    "L’Illinois appelle au voyage. Concentré d’Histoire, de culture, de vie urbaine et de paysages naturels époustouflants, cet état surprend par sa diversité… A commencer par Chicago !",
  openGraph: {
    images: "/social-illinois-min.jpg",
  },
};

export default function IllinoisPage() {
  return (
    <div className="color-illinois">
      <Hero
        image={
          <ExportedPicture
            src="/assets/illinois/header-chicago-river-walk.jpg"
            sources={[
              {
                src: "/assets/illinois/header-chicago-river-walk-desktop.jpg",
                widths: [1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375],
                media: "(orientation: landscape)",
              },
              {
                src: "/assets/illinois/header-chicago-river-walk-mobile.jpg",
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
          En plein cœur du Midwest
        </Heading>
        <Text type="serif">
          l’Illinois appelle au voyage. Concentré d’Histoire, de culture, de vie urbaine et de paysages naturels
          époustouflants, cet état surprend par sa diversité… A commencer par Chicago !
        </Text>
      </Hero>

      <Section background="primary" margin="none" padding="bottom-large">
        <Container size="small">
          <AnimateParallax>
            <Text color="light" type="serif">
              En plein cœur du Midwest, l’Illinois appelle au voyage. Concentré d’Histoire, de culture, de vie urbaine
              et de paysages naturels époustouflants, cet état surprend par sa diversité…
            </Text>
            <Text color="light" type="serif">
              A commencer par Chicago ! Métropole dynamique et cosmopolite, célèbre pour son architecture et sa
              délicieuse scène culinaire, elle est la première escale de ce voyage en Illinois. Il se poursuit à Galena,
              en dehors des sentiers touristiques, puis dans les grands parcs, entre cascades et canyons.
            </Text>
          </AnimateParallax>
        </Container>
      </Section>

      <Section margin="large">
        <Container>
          <Map pathname="illinois"></Map>
        </Container>
      </Section>

      <Section>
        <ImageArticle
          image={
            <ExportedImage
              src="/assets/illinois/image-street-food.jpg"
              width={1500}
              height={1000}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />
          }>
          <Heading level="h2">Chicago, food toujours !</Heading>
          <Text>
            Avis aux gourmets : Chicago, où convergent les gratte-ciels et la convivialité typique du Midwestern,
            dévoile une scène culinaire trépidante, façonnée par les vagues d’immigration.
          </Text>
        </ImageArticle>
      </Section>

      <Section>
        <Container size="article">
          <Text>
            Avis aux gourmets : Chicago, où convergent les gratte-ciels et la convivialité typique du Midwestern,
            dévoile une scène culinaire trépidante, façonnée par les vagues d’immigration. Au 19ème siècle, Chicago a
            accueilli un grand nombre d’immigrants européens et devient une terre d’opportunité pour les Français,
            Ecossais, Norvégiens, Irlandais et Anglais. Chacune de ces nationalités a apporté avec elle ses propres
            traditions culinaires, contribuant ainsi à la variété et la richesse de la cuisine de Chicago. Au fil de
            temps, de nouvelles vagues d’immigration en provenance de la Chine, du Mexique, de la Grèce ou encore de la
            Corée ont enrichi la scène culinaire de Chicago, ajoutant au melting-pot culinaire. Ainsi, aujourd’hui des
            food trucks aux tables étoilées au Guide Michelin, le monde des possibles est presque infini ! Mais
            certaines spécialités de Chicago sont devenues des plats emblématiques de la scène culinaire locale, comme
            la “Deep dish pizza”, dont on trouve toutes les variations dans la ville. D’autres spécialités de Chicago
            attirent les foules de gourmets et donnent à la ville son statut de destination culinaire : le hot dog, le
            fameux Chicago Mix Popcorn (au fromage), l’Italian Beef Sandwich et les nombreux steakhouses.
          </Text>
        </Container>
      </Section>

      <Section>
        <ImageGrid
          imageGrid={[
            [
              <ExportedImage
                key="1"
                src="/assets/illinois/grid-top-left-illinois-food.jpg"
                width={1680}
                height={1152}
                widths={[1680, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="2"
                src="/assets/illinois/grid-bottom-left-illinois-food.jpg"
                width={1920}
                height={1320}
                widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
            ],
            [
              <ExportedImage
                key="3"
                src="/assets/illinois/grid-top-center-illinois-food.jpg"
                width={1600}
                height={1040}
                widths={[1600, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="4"
                src="/assets/illinois/grid-bottom-center-illinois-food.jpg"
                width={810}
                height={1040}
                widths={[810, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
            ],
            [
              <ExportedImage
                key="5"
                src="/assets/illinois/grid-bottom-right-illinois-food.jpg"
                width={1680}
                height={1152}
                widths={[1680, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="6"
                src="/assets/illinois/grid-top-right-illinois-food.jpg"
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
            Hors des sentiers battus, le quartier de Bridgeport, déborde de restaurants familiaux proposant un mélange
            de plats coréens et polonais. Le quartier de Albany Park est une autre destination culinaire à ne pas
            manquer, offrant une variété de cuisines du monde entier. Promenez-vous le long de la rue Kedzie Avenue pour
            découvrir des restaurants coréens, mexicains ou levantins. À toutes ces options, il convient d’ajouter les
            marchés de rue et food courts variés et délicieux, véritables temples des cuisines, où les traditions, la
            créativité et l’innovation tiennent une place de choix.
          </Text>
        </Container>
      </Section>

      <Section background="primary" padding="large">
        <EncartDiaporama
          images={[
            <ExportedImage
              key="1"
              src="/assets/illinois/diaporama-chicago-1.jpg"
              width={1536}
              height={2048}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="2"
              src="/assets/illinois/diaporama-chicago-2.jpg"
              width={1536}
              height={2048}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="3"
              src="/assets/illinois/diaporama-chicago-3.jpg"
              width={1536}
              height={2048}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="4"
              src="/assets/illinois/diaporama-chicago-4.jpg"
              width={1536}
              height={2048}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="5"
              src="/assets/illinois/diaporama-chicago-5.jpg"
              width={1536}
              height={2048}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="6"
              src="/assets/illinois/diaporama-chicago-6.jpg"
              width={1536}
              height={2048}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="7"
              src="/assets/illinois/diaporama-chicago-7.jpg"
              width={1536}
              height={2048}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="8"
              src="/assets/illinois/diaporama-chicago-8.jpg"
              width={1536}
              height={2048}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
            <ExportedImage
              key="9"
              src="/assets/illinois/diaporama-chicago-9.jpg"
              width={1536}
              height={2048}
              widths={[1536, 1280, 1024, 768, 640, 520, 375, 300, 240]}
              alt=""
            />,
          ]}>
          <Heading color="light" level="h3" intent="main" margin={false}>
            Chicago avec Clara&nbsp;Victorya
          </Heading>
          <Heading color="light" level="h6" intent="thin">
            <Link href="https://www.instagram.com/claravictorya/" target="_blank">
              @claravictorya
            </Link>
          </Heading>
          <Text>
            C’est ici que ce finit notre road trip avec @visittheusa … à Chicago dans l’Illinois ! Ce fut une ville très
            surprenante et nous avons beaucoup aimé nous y balader.. pensez à goûter la tarte à la Pizza 🍕
          </Text>
        </EncartDiaporama>
      </Section>

      <Section>
        <ImageShow
          image={
            <ExportedImage
              src="/assets/illinois/image-galena-1.jpg"
              width={1600}
              height={800}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />
          }>
          <Heading level="h2">Galena, joyau caché de l’Illinois</Heading>
          <Text>
            Au nord-ouest de l’Illinois, Galena tient son nom du minerai de plomb argentifère qui y a été découvert au
            début du 19e siècle.
          </Text>
        </ImageShow>
      </Section>

      <Section>
        <Container size="article">
          <Text>
            Au nord-ouest de l’Illinois, Galena tient son nom du minerai de plomb argentifère qui y a été découvert au
            début du 19e siècle. Officiellement fondée en 1826, elle est rapidement devenue l’une des villes les plus
            importantes de l’Illinois. Elle a vu affluer des milliers d’immigrants et a été le foyer de plusieurs
            personnalités historiques, dont le général Ulysses S. Grant, qui y a vécu avant de devenir président des
            États-Unis. Aujourd’hui, Galena se prête à un agréable city trip qui mêle l’histoire industrielle de la
            ville au charme de son architecture victorienne préservée. Le long de la rue principale, les antiquaires et
            galeries d’art se succèdent, offrant aux visiteurs le prétexte d’une balade agréable et d’une véritable
            chasse au trésor ! Ponctuée de jolis restaurants et de cafés dans l’air du temps, la balade se poursuit et
            le regard se porte sur la rivière Galena, où l’on peut embarquer pour une petite croisière dévoilant une vue
            différente sur la ville.
          </Text>
        </Container>
      </Section>

      <Section>
        <Diaporama
          images={[
            <ExportedImage
              key="1"
              src="/assets/illinois/image-galena-3.jpg"
              width={1920}
              height={1280}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="2"
              src="/assets/illinois/image-galena-2.jpg"
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
              src="/assets/illinois/image-heritagecorridor.jpg"
              width={1500}
              height={1000}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />
          }>
          <Heading level="h2">Entre cascades et canyons, l’Illinois au naturel</Heading>
          <Text>
            L’Illinois, souvent associé à ses vastes plaines agricoles et à Chicago, cache également des trésors
            naturels insoupçonnés.
          </Text>
        </ImageArticle>
      </Section>

      <Section>
        <Container size="article">
          <Text>
            Entre cascades et canyons, cet état offre une diversité de paysages surprenante pour les amoureux de nature
            en quête d’aventure. Niché dans le nord-ouest de l’Illinois, le parc d’État de Starved Rock en est l’une des
            destinations les plus emblématiques. Il abrite une série de canyons sculptés par les eaux du fleuve
            Illinois, ainsi que des falaises calcaires qui offrent des vues impressionnantes. L’exploration se poursuit
            le long de sentiers sinueux à travers les bois, au fil de cascades pittoresques qui ponctuent le paysage de
            l’observation d’une flore dévoilant des espèces végétales rares, comme les orchidées “Lady Slipper”. Mais ce
            sont surtout les formations rocheuses de Starved Rock qui comptent parmi les caractéristiques naturelles les
            par des millénaires d’érosion, elles ont façonné des paysages spectaculaires. À proximité de Starved Rock,
            plus impressionnantes et emblématiques de l’Illinois et attirent les voyageurs. Et pour cause : sculptées le
            parc d’État de Matthiessen permet de poursuivre sans plus tarder l’exploration. Canyons encaissés, cascades
            cristallines et ponts naturels invitent à la randonnée et les ruisseaux permettent de s’offrir une baignade
            rafraîchissante, entre les gorges sculptées de formations géologiques. Au sud de l’Illinois, la forêt
            nationale de Shawnee affiche un profil différent. Au-delà de ses formations rocheuses emblématiques comme
            “Garden of the Gods” ou “Rim Rock”, elle dévoile plus de 116 000 hectares de forêt ! L’heure est donc à la
            randonnée, avec l’observation de la faune et de la flore sauvages, particulièrement riches à Shawnee… Et
            pourquoi ne pas profiter de ce cadre incroyable pour s’adonner à quelques activités comme la pêche ou le
            kayak ? La découverte et l’aventure au cœur de la nature, voilà les maîtres-mots de ce voyage.
          </Text>
        </Container>
      </Section>

      <Section background="primary" padding="horizontal">
        <Container size="screen" type="flex" direction="mobileColumn" items="center" padding="bottom">
          <ExportedImage
            src="/assets/illinois/image-influenceuse-1.jpg"
            width={1234}
            height={1600}
            widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
            alt=""
            className="mb-8 w-[428px] lg:mb-0 lg:ml-24"
          />
          <Container size="small" padding="none">
            <Heading color="light" level="h3" intent="title" margin={false}>
              Escapade dans le Tennesse avec Clara Victorya
            </Heading>
            <Heading color="light" level="h6" intent="thin">
              <Link href="https://www.instagram.com/claravictorya/" target="_blank">
                @claravictorya
              </Link>
            </Heading>

            <Text type="serif" color="light">
              Petit passage dans la capitale de la Country : Nashville dans le Tennessee toujours avec @visittheusa ✨{" "}
              <br />
              Je crois que c’est la ville que j’ai préférée découvrir ! Des filles avec des chapeaux et des cowboys
              boots ne m’en dites pas plus, je veux déménager ici et faire partie des Coyote Girls ou ouvrir une
              boutique vintage… Je n’ai pas encore décidé mais je vous tiendrai au courant promis. Ce que je retiendrai
              de cette ville, c’est le style, l’ambiance et les gens… J’espère y revenir bientôt pour en découvrir
              davantage !
            </Text>
          </Container>
        </Container>
        <ImageColumns
          imageColumns={[
            <ExportedImage
              key="1"
              src="/assets/illinois/image-illinois-influenceuse-1.jpg"
              width={1536}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="2"
              src="/assets/illinois/image-illinois-influenceuse-2.jpg"
              width={1179}
              height={1520}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="3"
              src="/assets/illinois/image-illinois-influenceuse-3.jpg"
              width={1536}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="4"
              src="/assets/illinois/image-illinois-influenceuse-4.jpg"
              width={1536}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="5"
              src="/assets/illinois/image-illinois-influenceuse-5.jpg"
              width={1536}
              height={2048}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="6"
              src="/assets/illinois/image-illinois-influenceuse-6.jpg"
              width={1200}
              height={1600}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
          ]}
        />
      </Section>

      <Section>
        <Cookie />
      </Section>
    </div>
  );
}
