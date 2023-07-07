import Head from "next/head";
import Results from "../components/Results";

const Home = ({results}) => {
    return (<div data-testid="home" >
      <Head>
        <title>MY LIBRARY</title>
      </Head>
      <Results results={results}/>
    </div>)
};

Home.getInitialProps = async  (ctx) => {
  const search = ctx?.query?.search ?? "";
  const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${search}&type=movie`);
  const datas = await response.json();
  return {
      results: datas.Search,
  }
}

/*
  le css de books a modifier
  je dois creer un context dans le quel je vais utiliser useRouter et passer le pathname et sa foncion de modif
  au moment du changement du search , je verifie le pathname, si '/', je le change en '/movies/
*/

export default Home;