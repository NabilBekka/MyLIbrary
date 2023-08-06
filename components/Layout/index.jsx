import styles from './styles.module.css';
import Footer from "../Footer";
import Header from "../Header";
import PageNav from '../PageNav';
import SearchBar from '../SearchBar';

const Layout = ({children}) => {
  
  return (<>
    <Header />
    <main data-testid= "main" className={styles.main}>
      <h1 className={styles.h1}>BIENVENUE SUR MY LIBRARY</h1>
      <p className={styles.p}>Connectez-vous et remplissez votre bibliothèque</p>
      <SearchBar />
      <PageNav />
      {children}
    </main>
    <Footer />
  </>
  )
}

export default Layout;