import { useState } from "react";
import Connexion from "../Connexion";
import Modal from "../Modal";
import Link from "next/link";
import styles from './styles.module.css';

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);

    const handleModal = () => {
        setDisplayModal(!displayModal)
    };

    return (
        <header className={styles.header} data-testid="header">
            <Link className={styles.logo} href='/'>MY LIBRARY</Link>
            {isLogin ? <button className={styles.myProfil}>Mon profil</button> : <Connexion displayModal={handleModal} />}
            { displayModal && <Modal exit={handleModal}><div>modal</div></Modal>}
        </header>
    )
}

export default Header;