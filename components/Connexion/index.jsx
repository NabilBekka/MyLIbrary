import styles from './styles.module.css';

const Connexion = ({displayModal}) => {

    return (
        <div className={styles.connexion} data-testid="connexion-component">
            <button className={styles.register} onClick={displayModal}>Inscription</button>
            <button className={styles.login} onClick={displayModal}>Se connecter</button>
        </div>
    )
}

export default Connexion;