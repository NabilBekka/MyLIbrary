import { useState } from "react";
import styles from "./styles.module.css";

const Login = ({exit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    exit('profil');
  }

  return (
    <form className={styles.form} data-testid='login' onSubmit={handleSubmit}>
        <div className={styles.inputDiv}>
            <label className={styles.label}>Email:</label>
            <input
              type="email" placeholder="Entrer votre email"
              className={styles.input}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
        </div>
        <div className={styles.inputDiv}>
            <label className={styles.label}>Mot de passe:</label>
            <input
              type="password"
              placeholder="Entrer votre mot de passe"
              className={styles.input}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
        </div>
        <div className={styles.toConnectDiv}>
            <p className={styles.forgotPassword} onClick={() => exit('forgotPassword')}>Mot de passe oublié?</p>
            <button className={styles.toConnectBtn}>Connexion</button>
        </div>
    </form>
  )
}

export default Login;