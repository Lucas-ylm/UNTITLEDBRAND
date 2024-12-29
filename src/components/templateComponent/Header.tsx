import Link from "next/link";
import Burger from "./Burger";
import Info from "./Info";
import styles from "./header.module.scss";
import LazySvg from "../svgComponent/LazySvg";

type Props = { logoBrand: React.ReactNode; isMenu: boolean };

export default function Header({ logoBrand, isMenu }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.first}>
        <Link
          href="https://www.lemonde.fr"
          target="_blank"
          rel="noreferrer"
          className={styles.home}
        >
          <LazySvg name="home" className={styles.svgHome} />
          <LazySvg name="le-monde" className={styles.svgLemonde} />
        </Link>
        <Info />
      </div>
      <div className={styles.second}>
        <div className={styles.logoBrand}>
          <p className={styles.title}>Proposé par</p>
          {logoBrand}
        </div>
        {isMenu && <Burger />}
      </div>
    </header>
  );
}
