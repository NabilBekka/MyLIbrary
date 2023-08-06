import Head from "next/head";
import Results from "../../components/Results";
import styles from "../books/styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { linkAction } from "../../lib/redux/features/link/linkSlice";
import { searchAction } from "../../lib/redux/features/search/searchSlice";
import { fetchBooks } from "../../lib/redux/features/results/resultsBooks";
import { fetchMovies } from "../../lib/redux/features/results/resultsMovies";
import { fetchSeries } from "../../lib/redux/features/results/resultsSeries";
import { fetchGames } from "../../lib/redux/features/results/resultsGames";

const Series = ({results, search}) => {
    const searchResults = useSelector( state => state.resultsMovies);
    const searchBar = useSelector( state => state.search);
    const router = useRouter();
    const linkSearch = router.query.search;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(linkAction('series'))
        if (searchBar.searchBarActivated){
          router.push({
            pathname: 'series',
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
    },[searchBar]);

    return (<div data-testid="series">
        {
            linkSearch !=='' && searchBar.searchBarActivated ? searchResults.isLoading ? <p>Chargement ...</p> :
            searchResults.error ? <p className={styles.error}>'Oups nous avons un problème !'</p> :
            <>
                <Head>
                    <title>{`${searchBar.search} - Séries | MY LIBRARY`}</title>
                </Head>
                <Results results={searchResults.results}/>
            </> :
            <>
                <Head>
                    <title>{search !== '' ? `${search} - Séries | MY LIBRARY` : `Séries | MY LIBRARY`}</title>
                </Head>
                {results === 'Oups nous avons un problème !' ? <p className={styles.error}>{results}</p> : <Results results={results}/>} 
            </>    
        }  
    </div>)
}

export const getServerSideProps = async (context) => {
    const search = context.query.search ?? "";
    if (search !== ''){
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=898a97b5&s=${search}&type=series`);
            const datas = await response.json();
            return {
                props: {
                    results: datas.Search ? datas.Search : [],
                    search
                }
            }
        }catch(e){
            return {
                props: {
                    results: 'Oups nous avons un problème !',
                    search
                }
            }
        }     
    }
    else {
        return {
            props: {
                results: [],
                search
            }
        }
    }
};

export default Series;