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
import ExportedImage from "@/components/shared/ExportedImage";
import ExportedPicture from "@/components/shared/ExportedPicture";
import Cookie from "@/components/layout/Cookie";

export const metadata = {
  title: "Région de la capitale",
  description:
    "Entre patrimoine maritime, vignobles pittoresques et quartiers cosmopolites, embarquez pour une incursion surprenante dans la région de la Capitale…",
  openGraph: {
    images: "/social-capital-region-min.jpg",
  },
};

export default function CapitalRegionPage() {
  return (
    <div className="color-capital">
      <Hero
        image={
          <ExportedPicture
            src="/assets/capital-region/header-capital-region.jpg"
            sources={[
              {
                src: "/assets/capital-region/header-capital-region-desktop.jpg",
                widths: [1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375],
                media: "(orientation: landscape)",
              },
              {
                src: "/assets/capital-region/header-capital-region-mobile.jpg",
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
          Washington DC, Maryland, Virginie
        </Heading>
        <Text type="serif">
          Entre patrimoine maritime, vignobles pittoresques et quartiers cosmopolites, embarquez pour une incursion
          surprenante dans la région de la Capitale…
        </Text>
      </Hero>

      <Section background="primary" margin="none" padding="bottom-large">
        <Container size="small">
          <AnimateParallax>
            <Text color="light" type="serif">
              Entre patrimoine maritime, vignobles pittoresques et quartiers cosmopolites, embarquez pour une incursion
              surprenante dans la région de la Capitale.
            </Text>
            <Text color="light" type="serif">
              Première escale : le Maryland, où l’héritage marin de la région ne cesse de captiver. La seconde vous
              mènera en Virginie, pour une échappée verte au fil de panoramas spectaculaires et quelques visites de
              domaines viticoles. La dernière étape ? Un passage par Washington, D.C., qui fascine bien au-delà de ses
              monuments iconiques. Bon voyage !
            </Text>
          </AnimateParallax>
        </Container>
      </Section>

      <Section margin="large">
        <Container>
          <Map pathname="capital-region"></Map>
        </Container>
      </Section>

      <Section>
        <ImageArticle
          image={
            <ExportedImage
              src="/assets/capital-region/image-baltimore-harbor.jpg"
              width={1500}
              height={1000}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />
          }>
          <Heading level="h2">Grand bain dans le Maryland</Heading>
          <Text>
            Impossible d’évoquer le Maryland sans prendre en compte la place que l’eau a joué dans l’histoire, le
            développement et l’identité régionale de cet État ouvert sur l’Atlantique.
          </Text>
        </ImageArticle>
      </Section>

      <Section>
        <Container size="article">
          <Text>
            Pour s’en convaincre, il faut marquer l’arrêt au Baltimore Inner Harbor, où le passé maritime s’anime avec
            le National Aquarium. Les croisières au départ du port offrent une vue pittoresque sur la ville depuis les
            eaux de la baie de Chesapeake. Pour s’immerger plus profondément encore dans l’histoire maritime, le
            Chesapeake Bay Maritime Museum à St Michael’s Maryland célèbre l’héritage nautique de la région à travers
            des expositions interactives et des bateaux restaurés. Loin de se limiter au passé, l’eau tient toujours un
            rôle important dans l’attrait du Maryland aujourd’hui.
          </Text>
        </Container>
      </Section>

      <Section>
        <ImageGrid
          imageGrid={[
            [
              <ExportedImage
                key="1"
                src="/assets/capital-region/grid-top-left-euronews-seattle-washington.jpg"
                width={1680}
                height={1152}
                widths={[1680, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="2"
                src="/assets/capital-region/grid-bottom-left-virginia.jpg"
                width={1920}
                height={1320}
                widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
            ],
            [
              <ExportedImage
                key="3"
                src="/assets/capital-region/grid-top-center-virginia-point.jpg"
                width={1600}
                height={1040}
                widths={[1600, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="4"
                src="/assets/capital-region/grid-bottom-center-virginia-point.jpg"
                width={810}
                height={1040}
                widths={[810, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
            ],
            [
              <ExportedImage
                key="5"
                src="/assets/capital-region/grid-bottom-right-chincoteague-assateague-islands.jpg"
                width={1680}
                height={1152}
                widths={[1680, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="6"
                src="/assets/capital-region/grid-top-right-chesapeake-bay.jpg"
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
            Le refuge national de la faune de Chincoteague sur l’île d’Assateague en témoigne. Avec ses plages
            immaculées, ses dunes de sable sculptées par le vent et ses sentiers de randonnée, Assateague remporte tous
            les suffrages auprès des amoureux de la nature… et des chevaux sauvages, qui galopent librement sur l’île.
            Au-delà, la culture maritime est profondément ancrée dans le Maryland, où des évènements et traditions
            célébrant l’héritage marin de la région rythment le quotidien jusque dans les assiettes, où s’invitent des
            plats traditionnels à base de crabes, d’huîtres et de poissons.
          </Text>
        </Container>
      </Section>

      <Section>
        <ImageShow
          image={
            <ExportedImage
              src="/assets/capital-region/image-blue-ridge.jpg"
              width={1600}
              height={800}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />
          }>
          <Heading level="h2">Bol d’air et verre de vin en Virginie</Heading>
          <Text>
            Au sud-est des États-Unis, la Virginie déploie sur son territoire pas moins de 42 parcs d’État et de
            nombreux parcs nationaux qui invitent à la balade tranquille, à la randonnée active ou à la contemplation.
          </Text>
        </ImageShow>
      </Section>

      <Section>
        <Container size="article">
          <Text>
            Parmi eux, le Shenandoah National Park, au cœur des Blue Ridge Mountains, ne lasse pas d’émerveiller ceux
            qui s’y aventurent. Notre conseil : prévoyez de venir avant l’aube. Le lever du soleil sur les crêtes des
            Blue Ridge Mountains offre un spectacle à couper le souffle. Cette incursion en pleine nature donne à voir,
            sur un périmètre de plus de 800 km 2, une vaste diversité de paysages, de vallées arborées en crêtes
            escarpées, de forêts en ruisseaux et cascades… Les visiteurs du parc pourront aussi apercevoir ses
            habitants, parmi lesquels une grande variété d’espèces d’oiseaux. Les points de vue panoramiques permettent
            d’apprécier le relief saisissant du parc, de collines verdoyantes en montagnes à perte de vue. Tous les
            ingrédients sont ici réunis pour s’offrir un grand bol d’air frais en pleine nature.
          </Text>
        </Container>
      </Section>

      <Section>
        <Diaporama
          images={[
            <ExportedImage
              key="1"
              src="/assets/capital-region/image-shenandoah-valley-1.jpg"
              width={1920}
              height={1280}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="2"
              src="/assets/capital-region/image-shenandoa-national-park-old-rag.jpg"
              width={1920}
              height={1280}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="3"
              src="/assets/capital-region/image-shenandoah-valley-2.jpg"
              width={1920}
              height={1280}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
            <ExportedImage
              key="4"
              src="/assets/capital-region/image-virginia-point-2.jpg"
              width={1920}
              height={1280}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />,
          ]}
        />
      </Section>

      <Section>
        <Container size="article">
          <Text>
            Et si la nature sauvage offre une escapade revitalisante, les terres cultivées par la main de l’Homme ne
            sont pas en reste : la Virginie est un terroir viticole important. Au total, l’État comptabilise plus de 300
            domaines et plus de 60 distilleries de spiritueux. Située dans la région centrale de la Virginie, près de
            Charlottesville, la Monticello Wine Trail est l’une des premières régions viticoles commerciales des
            États-Unis, avec une histoire viticole remontant à plus de 200 ans. Elle a été baptisée Monticello d’après
            la plantation historique de Thomas Jefferson, l’un des premiers promoteurs de la viticulture en Virginie.
            Aujourd’hui la Monticello Wine Trail compte plus de 30 domaines vinicoles. Tous se visitent, soit en circuit
            organisé soit en choisissant d’organiser votre propre itinéraire de visite et dégustation. Au nord-ouest de
            la Virginie, la Shenandoah Wine Trail est aussi réputée. Elle compte 22 domaines, dont la visite permet de
            se familiariser avec les techniques vinicoles, le terroir local et l’histoire de la région.
          </Text>
        </Container>
      </Section>

      <Section>
        <Container size="article">
          <ExportedImage
            src="/assets/capital-region/image-virginia-point-1.jpg"
            width={1280}
            height={840}
            widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
            alt=""
          />
        </Container>
      </Section>

      <Section>
        <ImageArticle
          image={
            <ExportedImage
              src="/assets/capital-region/image-washington-dc.jpg"
              width={1500}
              height={1000}
              widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375]}
              alt=""
            />
          }>
          <Heading level="h2">Washington DC, au-delà des classiques</Heading>
          <Text>
            Évoquer Washington, D.C. fait surgir pêle-mêle l’image de la Maison Blanche, du Washington Monument, du
            Lincoln et du Jefferson Memorial…
          </Text>
        </ImageArticle>
      </Section>

      <Section>
        <Container size="article">
          <Text>
            Si la visite de ces monuments est incontournable, Washington, D.C. dévoile aussi d’autres facettes qui
            valent la peine de l’arpenter. Le quartier historique de Georgetown voit défiler, au fil de ses jolies rues
            pavées, des maisons historiques, des boutiques élégantes et des restaurants branchés. Situé dans le
            nord-ouest de la capitale, Shaw est un véritable melting pot où cultures et communautés se mélangent. Tables
            branchées, shops et cafés incarnent l’âme éclectique du quartier, qui compte aussi sur une scène artistique
            vibrante, dont on découvre l’expression au fil des studios d’artistes, galeries d’art et espaces
            d’exposition. Shaw est également le lieu de nombreux événements communautaires et festivals, qui célèbrent
            la diversité et l’inclusion. Des concerts en plein air aux festivals de rue, en passant par les marchés de
            quartier, Shaw affiche une vie locale dense et réjouissante. Nombreux sont les autres quartiers de la ville
            qui méritent l’incursion, parmi lesquels Adams Morgan, véritable concentré de boutiques vintage, galeries
            d’art, bars et cafés qui incitent à la flânerie, ou Eastern Market, dans le quartier de Capitol Hill. La
            semaine, le marché historique en plein air déborde d’artisanat local et de stands de cuisines
            internationales. Le week-end, l’atmosphère s’anime lorsque les musiciens et les artistes s’ajoutent à la
            fête. Le seul risque encouru par ceux qui se baladent dans ces quartiers de D.C. ? Avoir envie d’y passer
            plus que quelques heures !
          </Text>
        </Container>
      </Section>

      <Section>
        <ImageGrid
          imageGrid={[
            [
              <ExportedImage
                key="1"
                src="/assets/capital-region/grid-top-left-washington-dc.jpg"
                width={1680}
                height={1152}
                widths={[1680, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="2"
                src="/assets/capital-region/grid-bottom-left-washington-dc.jpg"
                width={1920}
                height={1320}
                widths={[1920, 1600, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
            ],
            [
              <ExportedImage
                key="3"
                src="/assets/capital-region/grid-top-center-washington-dc.jpg"
                width={1600}
                height={1040}
                widths={[1600, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="4"
                src="/assets/capital-region/grid-bottom-center-washington-dc.jpg"
                width={810}
                height={1040}
                widths={[810, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
            ],
            [
              <ExportedImage
                key="5"
                src="/assets/capital-region/grid-bottom-right-washington-dc.jpg"
                width={1680}
                height={1152}
                widths={[1680, 1440, 1280, 1024, 768, 640, 520, 375, 300, 260]}
                alt=""
              />,
              <ExportedImage
                key="6"
                src="/assets/capital-region/grid-top-right-washington-dc.jpg"
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
        <Cookie />
      </Section>
    </div>
  );
}
