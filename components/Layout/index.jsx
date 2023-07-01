import styles from './styles.module.css';
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({children}) => {
  return (<>
    <Header />
    <main data-testid= "main" className={styles.main}>
      {children}
    </main>
    <Footer />
  </>
  )
}

export default Layout;