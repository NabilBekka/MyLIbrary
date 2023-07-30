import Head from "next/head";
import Results from "../../components/Results";
import styles from "../books/styles.module.css";

const Movies = ({results, search}) => {
    return (<div data-testid="movies">
        <Head>
            <title>{search !== '' ? `${search} - Films | MY LIBRARY` : `Films | MY LIBRARY`}</title>
        </Head>
        {results === 'Oups nous avons un problème !' ? <p className={styles.error}>{results}</p> : <Results results={results}/>}    
    </div>)
}

export const getServerSideProps = async (context) => {
    const search = context.query.search ?? "";
    if (search !== ''){
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${search}&type=movie`);
            const datas = await response.json();
            return {
                props: {
                    results: datas.Search,
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
  
export default Movies;