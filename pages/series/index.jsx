import Head from "next/head";
import Results from "../../components/Results";

const Series = ({results, search}) => {
    return (<div data-testid="series">
        <Head>
            <title>{results !== '' ? `MY LIBRARY | Series | ${search}` : `MY LIBRARY | Series`}</title>
        </Head>
        <Results results={results}/>    
    </div>)
}

Series.getInitialProps = async  (ctx) => {
    const search = ctx?.query?.search ?? "";
    const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${search}&type=series`);
    const datas = await response.json();
    return {
        results: datas.Search,
        search
    }
  }
export default Series;