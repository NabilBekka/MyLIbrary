import { useState } from "react";
import styles from "../Login/styles.module.css";

const Register = ({exit}) => {
  const [infoProfil, setInfoProfil] = useState(
    {
        firstname:'',
        lastname:'',
        email: '',
        password:''
    }
  );
  const [pswConfirm, setPswConfirm] = useState('');
  const {firstname, lastname, email, password} = infoProfil;

  const handleSubmit = e => {
    e.preventDefault();
    exit('profil');
  };

  const regex = /^[a-zA-Z]+$/;

  return (
    <form className={styles.form} data-testid='register' onSubmit={handleSubmit}>
        <div className={styles.inputDiv}>
            <label className={styles.label}>Prénom:</label>
            <input
              type="text" placeholder="Entrez votre prénom"
              className={styles.input}
              value={firstname}
              onChange={e => setInfoProfil({...infoProfil, firstname: e.target.value})}
            />
        </div>
        <div className={styles.inputDiv}>
            <label className={styles.label}>Nom:</label>
            <input
              type="text" placeholder="Entrez votre nom"
              className={styles.input}
              value={lastname}
              onChange={e => setInfoProfil({...infoProfil, lastname: e.target.value})}
            />
        </div>
        <div className={styles.inputDiv}>
            <label className={styles.label}>Email:</label>
            <input
              type="email" placeholder="Entrez votre email"
              className={styles.input}
              value={email}
              onChange={e => setInfoProfil({...infoProfil, email: e.target.value})}
            />
        </div>
        <div className={styles.inputDiv}>
            <label className={styles.label}>Mot de passe:</label>
            <input
              type="password"
              placeholder="6 caractères au minimum"
              className={styles.input}
              value={password}
              onChange={e => setInfoProfil({...infoProfil, password: e.target.value})}
            />
            <input
              type="password"
              placeholder="Confirmez votre mot de passe"
              className={styles.input}
              onChange={e => setPswConfirm(e.target.value)}
            />
        </div>
        <button 
            className={styles.toConnectBtn} 
            onClick={() => exit('')} 
            disabled={
                password.length < 6 || !email.includes('@') || !regex.test(firstname) || !regex.test(lastname) || pswConfirm !== password
            }
            style={{marginTop: '10px'}}
        >Enregistrer</button>
    </form>
  )
}

export default Register;