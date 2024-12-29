import Link from "next/link";
import styles from "./cookies.module.scss";

export default function Cookies() {
  return (
    <footer className={styles.cookies}>
      <p>
        Contenus réalisés par les équipes de M Publicité, la régie publicitaire
        du Monde. La rédaction n&apos;a pas participé à leur réalisation.
      </p>
      <div className={styles.redirection}>
        <a className={`iubenda-cs-preferences-link ${styles.manage}`} href="#">
          Gestion des cookies
        </a>
        <Link
          className={styles.legal}
          href="https://moncompte.lemonde.fr/mentions-legales"
          target="_blank"
        >
          Mentions Légales
        </Link>
      </div>
    </footer>
  );
}
