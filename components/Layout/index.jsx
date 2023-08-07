import styles from './styles.module.css';
import Footer from "../Footer";
import Header from "../Header";
import PageNav from '../PageNav';
import SearchBar from '../SearchBar';
import Image from 'next/image';
import { searchAction, searchBarActivatedAction } from '../../lib/redux/features/search/searchSlice';
import { fetchMovies } from '../../lib/redux/features/results/resultsMovies';
import { fetchSeries } from '../../lib/redux/features/results/resultsSeries';
import { fetchGames } from '../../lib/redux/features/results/resultsGames';
import { fetchBooks } from '../../lib/redux/features/results/resultsBooks';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Layout = ({children}) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  
  const handleSubmit = e => {
      e.preventDefault();
      if (search !== ''){
          dispatch(searchBarActivatedAction());
          dispatch(searchAction(search));
          dispatch(fetchMovies(search));
          dispatch(fetchSeries(search));
          dispatch(fetchGames(search));
          dispatch(fetchBooks(search));
          }
        setSearch('');
  };

  return (<>
    <Header />
    <main data-testid= "main" className={styles.main}>
      <h1 className={styles.h1}>BIENVENUE SUR MY LIBRARY</h1>
      <p className={styles.p}>Connectez-vous et remplissez votre bibliothèque</p>
      <div className={styles.searchDiv}>
        <SearchBar handleSubmit={handleSubmit} search={search} setSearch={setSearch}/>
        <Image src='/images/search.png'
          width={65}
          height={65}
          className={styles.searchImage}
          alt='Recherche'
          onClick={handleSubmit} />
      </div>
      <PageNav />
      {children}
    </main>
    <Footer />
  </>
  )
}

export default Layout;