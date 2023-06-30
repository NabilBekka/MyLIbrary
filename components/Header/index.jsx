import { useState } from "react";
import Connexion from "../Connexion";
import Link from "next/link";
import styles from './styles.module.css';

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = (login) => {
        setIsLogin(login);
    };

    return (
        <header className={styles.header}>
            <Link className={styles.logo} href='/'>MY LIBRARY</Link>
            {isLogin ? <button className={styles.myProfil}>Mon profil</button> : <Connexion isLogin={handleLogin} />}
        </header>
    )
}

export default Header;