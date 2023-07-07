import styles from './styles.module.css';
import Footer from "../Footer";
import Header from "../Header";
import { useEffect, useState } from "react";
import PageNav from '../PageNav';
import { useRouter } from 'next/router';

const Layout = ({children}) => {
  const [search, setSearch] = useState('');
  // const router = useRouter();

  // useEffect(() => {
  //   search !== '' && router.push({
  //     // pathname: '/movies',
  //     query: { search }
  //   })
  // },[search]);

  return (<>
    <Header />
    <main data-testid= "main" className={styles.main}>
      <h1 className={styles.h1}>BIENVENUE SUR MY LIBRARY</h1>
      <p className={styles.p}>Connectez-vous et remplissez votre bibliothèque</p>
      <input
      type="text"
      placeholder="Rechercher"
      value={search}
      onChange={e => setSearch(e.target.value)}
      className={styles.input}
      />
      <PageNav />
      {children}
    </main>
    <Footer />
  </>
  )
}

export default Layout;