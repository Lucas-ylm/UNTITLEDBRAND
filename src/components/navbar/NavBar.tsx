import Link from "next/link";
import { useAppContext } from "../context/useAppContext";
import styles from "./navBar.module.scss";
import ExportedPicture from "../templateComponent/ExportedPicture";

export default function NavBar() {
  const { setIsOpen } = useAppContext();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.lists}>
        <h3 className="font-roboto text-[20px] uppercase">Les forces de la beauté</h3>
        <li className={styles.list}>
          <Link href="/la-beaute-nous-rappelle-a-nous-memes" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/1.png"
                priority={true}
              />
              <p className="font-bitter italic font-light text-[13px]">
                « La beauté est multiple, mais l’émotion du beau est universelle.»
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/emmaus-solidarite-et-loreal" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/2.png"
                priority={true}
              />
              <p className="font-bitter italic font-light text-[13px]">
                EMMAÜS Solidarité et L’Oréal : quand la beauté nous relie
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/jai-compris-que-javais-droit-a-ma-beaute" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/3.png"
                priority={true}
              />
              <p className="font-bitter italic font-light text-[13px]">
                « J’ai compris que j’avais droit à ma beauté »
              </p>
            </div>
          </Link>
        </li>
        <h3 className="font-roboto text-[20px] uppercase">La beauté, de la nature au flacon</h3>
        <li className={styles.list}>
          <Link href="/les-sciences-vertes-ou-quand-la-beaute-s-inspire-de-la-nature" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/4.png"
                priority={true}
              />
              <p className="font-bitter italic font-light text-[13px]">
                Investir dans les Sciences Vertes pour la transformation durable
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/emballages-une-question-de-ressources" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/5.png"
                priority={true}
              />
              <p className="font-bitter italic font-light text-[13px]">
                Plus circulaire, innovant et allégé : l’emballage fait sa mue
              </p>
            </div>
          </Link>
        </li>
        <h3 className="font-roboto text-[20px] uppercase">La beauté de demain</h3>
        <li className={styles.list}>
          <Link href="/innovante-inclusive-et-plus-responsable" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/6.png"
                priority={true}
              />
              <p className="font-bitter italic font-light text-[13px]">
                «Innovante, inclusive et plus responsable : nous sommes fiers de notre usine.»
              </p>
            </div>
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/beaute-augmentee-et-quete-humanite" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/7.png"
                priority={true}
              />
              <p className="font-bitter italic font-light text-[13px]">
                Beauté augmentée et quête d’humanité
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
