import Head from "next/head";
import styles from "./styles.module.css";
import BooksResult from "../../components/BookResults";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { linkAction } from '../../lib/redux/features/link/linkSlice';
import { searchAction } from "../../lib/redux/features/search/searchSlice";
import { fetchBooks } from "../../lib/redux/features/results/resultsBooks";
import { fetchGames } from "../../lib/redux/features/results/resultsGames";
import { fetchMovies } from "../../lib/redux/features/results/resultsMovies";
import { fetchSeries } from "../../lib/redux/features/results/resultsSeries";

const Books = ({results, search}) => {
  const searchResults = useSelector( state => state.resultsBooks);
  const searchBar = useSelector( state => state.search);
  const router = useRouter();
  const linkSearch = router.query.search;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(linkAction('books'));
    if (searchBar.searchBarActivated){
      router.push({
        pathname: 'books',
        query: {
          search: searchBar.search
        }
      });
    }else {
      dispatch(searchAction(linkSearch));
      dispatch(fetchBooks(linkSearch));
      dispatch(fetchGames(linkSearch));
      dispatch(fetchMovies(linkSearch));
      dispatch(fetchSeries(linkSearch));
    }
  },[searchBar, linkSearch]);

  return (<div data-testid="books" className={styles.books}>   
      {
        linkSearch !=='' && searchBar.searchBarActivated ? searchResults.isLoading ? <p>Chargement ...</p> :
          searchResults.error ? <p className={styles.error}>'Oups nous avons un problème !'</p> :
          <>
            <Head>
                <title>{`${searchBar.search} - Livres | MY LIBRARY`}</title>
            </Head>
            { searchResults.results.map(result => <BooksResult key={result.id} infos={result.volumeInfo} />) }
          </> :
          <>
            <Head>
                <title>{results !== '' ? `${search} - Livres | MY LIBRARY` : `Livres | MY LIBRARY`}</title>
            </Head>
            { search === '' ? null : 
              results === 'Oups nous avons un problème !' ? <p className={styles.error}>{results}</p> : 
              results.map(result => <BooksResult key={result.id} infos={result.volumeInfo} />)
            } 
          </>    
      }  
  </div>)
}

Books.getInitialProps = async  (ctx) => {
    const search = ctx?.query?.search ?? "";
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
      const datas = await response.json();
      return {
          results: datas.items ?? [],
          search
      }
    } catch(e) {
      return {
          results: 'Oups nous avons un problème !',
          search
      }
    }
  }
export default Books;