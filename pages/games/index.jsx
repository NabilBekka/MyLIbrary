import Head from "next/head";
import Results from "../../components/Results";

const Games = ({results, search}) => {
    return (<div data-testid="games">
        <Head>
            <title>{results !== '' ? `MY LIBRARY | Games | ${search}` : `MY LIBRARY | Games`}</title>
        </Head>
        <Results results={results}/>    
    </div>)
}

Games.getInitialProps = async  (ctx) => {
    const search = ctx?.query?.search ?? "";
    const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${search}&type=game`);
    const datas = await response.json();
    return {
        results: datas.Search,
        search
    }
  }
export default Games;