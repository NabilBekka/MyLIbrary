import Head from "next/head";
import Results from "../../components/Results";

const Movies = ({results, search}) => {
    return (<div data-testid="movies">
        <Head>
            <title>{results !== '' ? `MY LIBRARY | Movies | ${search}` : `MY LIBRARY | Movies`}</title>
        </Head>
        <Results results={results}/>    
    </div>)
}

Movies.getInitialProps = async  (ctx) => {
    const search = ctx?.query?.search ?? "";
    const path = ctx?.pathname ?? '';
    const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${search}&type=movie`);
    const datas = await response.json();
    return {
        results: datas.Search,
        search
    }
  }
export default Movies;