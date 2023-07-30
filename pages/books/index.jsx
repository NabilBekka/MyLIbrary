import Head from "next/head";
import styles from "./styles.module.css";
import BooksResult from "../../components/BookResults";

const Books = ({results, search}) => {
  return (<div data-testid="books" className={styles.books}>
      <Head>
          <title>{results !== '' ? `${search} - Livres | MY LIBRARY` : `Livres | MY LIBRARY`}</title>
      </Head>
      { search === '' ? null : 
        results === 'Oups nous avons un problème !' ? <p className={styles.error}>{results}</p> : 
        results.map(result => <BooksResult key={result.id} infos={result.volumeInfo} />)
      }   
  </div>)
}

Books.getInitialProps = async  (ctx) => {
    const search = ctx?.query?.search ?? "";
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
      const datas = await response.json();
      return {
          results: datas.items ?? '',
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