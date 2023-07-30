import Head from "next/head";
import Results from "../../components/Results";
import styles from "../books/styles.module.css";

const Series = ({results, search}) => {
    return (<div data-testid="series">
        <Head>
            <title>{search !== ''? `${search} - Séries | MY LIBRARY` : `Séries | MY LIBRARY`}</title>
        </Head>
        {results === 'Oups nous avons un problème !' ? <p className={styles.error}>{results}</p> : <Results results={results}/>}   
    </div>)
}

export const getServerSideProps = async (context) => {
    const search = context.query.search ?? "";
    if (search !== ''){
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${search}&type=series`);
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

export default Series;