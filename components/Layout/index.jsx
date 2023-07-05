import styles from './styles.module.css';
import Footer from "../Footer";
import Header from "../Header";
import { useState } from "react";
import PageNav from '../PageNav';

const Layout = ({children}) => {
  const [search, setSearch] = useState('');
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