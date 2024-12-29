import LazySvg from "../svgComponent/LazySvg";
import styles from "./info.module.scss";

export default function Info() {
  return (
    <button className={styles.info}>
      <LazySvg name="info" className={styles.svgInfo} />
      <span className={styles.description}>
        Contenus réalisés par les équipes de M Publicité, la régie publicitaire
        du Monde. La rédaction n’a pas participé à leur réalisation.
      </span>
    </button>
  );
}
