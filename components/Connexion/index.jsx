import styles from './styles.module.css';

const Connexion = ({isLogin, isRegister}) => {
    return (
        <div className={styles.connexion} data-testid="connexion-component">
            <button className={styles.register} onClick={() => isRegister()}>Inscription</button>
            <button className={styles.login} onClick={() => isLogin(true)}>Se connecter</button>
        </div>
    )
}

export default Connexion;