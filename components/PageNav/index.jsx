import Link from "next/link";
import styles from './styles.module.css';

const PageNav = () => {
  return (
    <nav data-testid='pageNav' className={styles.nav}>
        <Link href='/movies' className={styles.link}>Films</Link>
        <Link href='/series' className={styles.link}>Séries</Link>
        <Link href='/games' className={styles.link}>Jeux</Link>
        <Link href='/books' className={styles.link}>Livres</Link>
    </nav>
  )
}

export default PageNav;