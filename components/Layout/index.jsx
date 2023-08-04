import styles from './styles.module.css';
import Footer from "../Footer";
import Header from "../Header";
import { useState } from "react";
import PageNav from '../PageNav';
import store from '../../lib/redux/store';

const Layout = ({children}) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSearch('');
  };

  console.log(store.getState())
  
  return (<>
    <Header />
    <main data-testid= "main" className={styles.main}>
      <h1 className={styles.h1}>BIENVENUE SUR MY LIBRARY</h1>
      <p className={styles.p}>Connectez-vous et remplissez votre bibliothèque</p>
      <form className={styles.form} onSubmit={handleSubmit} data-testid='form'>
        <input
          type="text"
          placeholder="Rechercher"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={styles.input}
        />
      </form>
      <PageNav />
      {children}
    </main>
    <Footer />
  </>
  )
}

export default Layout;