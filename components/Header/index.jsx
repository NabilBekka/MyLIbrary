import { useState } from "react";
import Connexion from "../Connexion";
import Modal from "../Modal";
import Link from "next/link";
import styles from './styles.module.css';
import Login from "../Login";
import Register from "../Register";
import ForgotPassword from "../ForgotPassword";

const Header = () => {
    const [content, setContent] = useState('');
    const [displayModal, setDisplayModal] = useState(false);

    const handleModal = (value) => {
        if(value !== 'forgotPassword') {
            setDisplayModal(!displayModal);
        }
        setContent(value);
    };

    return (
        <header className={styles.header} data-testid="header">
            <Link className={styles.logo} href='/'>MY LIBRARY</Link>
            {content === 'profil' ? <button className={styles.myProfil}>Mon profil</button> : <Connexion displayModal={handleModal} />}
            { displayModal && <Modal exit={handleModal}><div>
                {content === 'login' ? <Login exit={handleModal} /> :
                 content === 'register' ? <Register exit={handleModal} /> :
                 content === 'forgotPassword' ? <ForgotPassword exit={handleModal}/> : null}
                </div></Modal>}
        </header>
    )
}

export default Header;