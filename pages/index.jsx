import Head from "next/head";
import Results from "../components/Results";

const Home = ({results}) => {
    console.log(results)
    return (<div data-testid="home" >
      <Head>
        <title>MY LIBRARY</title>
      </Head>
      <Results results={results}/>
    </div>)
};

export const getStaticProps = async  () => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=superman&type=movie`);
  const datas = await response.json();
  const results = datas.Search;
  return {
      props: {
        results
      }
  }
};

export default Home;