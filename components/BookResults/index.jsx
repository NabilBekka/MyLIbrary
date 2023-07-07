import styles from "../Results/styles.module.css";

const BooksResult = ({infos: {title, authors, publisher}}) => {
  return (
    <div data-testid='bookResult' className={styles.resultBook}>
      <div className={styles.infosBook}>
        <h2 className={styles.h2} style={{textAlign: 'start'}}>{title}</h2>
        <div className={styles.authorsDiv}>Auteur(s):
          <ul className={styles.authorsUl}>
            {authors? authors.map((author, i) => <li key={i} className={styles.authors}>{author}</li>) : 'Indisponible(s)'}
          </ul>
        </div>
        <p className={styles.publisher}><span className={styles.publisherSpan}>Éditeur:</span> {publisher ? publisher : 'Indisponible'}</p>
      </div>
      <button className={styles.button}>Ajouter</button>
    </div>
  )
}

export default BooksResult;