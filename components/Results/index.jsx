import Styles from './styles.module.css';

const Results = ({results}) => {
  return (
    <div data-testid="results" className={Styles.results}>
        { results?.map(result => <div data-testid="result" key={result.imdbID} className={Styles.result}>
            <img src={result.Poster} alt="Poster" className={Styles.img}/>
            <div className={Styles.infos}>
                <h2 className={Styles.h2}>{result.Title}</h2>
                <p data-testid="p" className={Styles.p}><span className={Styles.span}>Année de sortie: </span>{result.Year}</p>
            </div>
            <button className={Styles.button}>Ajouter</button>
        </div>) }
    </div>
  )
}

export default Results;