import Link from "next/link";
import styles from './styles.module.css';
import { useDispatch, useSelector } from "react-redux";
import { searchBarActivatedAction } from "../../lib/redux/features/search/searchSlice";

const PageNav = () => {
  const link = useSelector( state => state.link.link);
  const search = useSelector ( state => state.search.search);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(searchBarActivatedAction());
  }

  return (
    <nav data-testid='pageNav' className={styles.nav}>
        <Link href={{pathname:'/movies', query: {search: search}}}
         className={link==='movies' ? styles.active : styles.link}
         onClick={handleClick}>Films</Link>

        <Link href={{pathname:'/series', query: {search: search}}}
         className={link==='series' ? styles.active : styles.link}
         onClick={handleClick}>Séries</Link>

        <Link href={{pathname:'/games', query: {search: search}}} 
        className={link==='games' ? styles.active : styles.link}
        onClick={handleClick}>Jeux</Link>

        <Link href={{pathname:'/books', query: {search: search}}}
         className={link==='books' ? styles.active : styles.link}
         onClick={handleClick}>Livres</Link>
    </nav>
  )
}

export default PageNav;