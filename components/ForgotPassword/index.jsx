import { useEffect, useState } from "react";
import styles from "../Login/styles.module.css";

const ForgotPassword = ({exit}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
     setTimeout(() => setIsLoading(false), 1500);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    exit('profil');
  }

  return (
    <form className={styles.form} data-testid='forgotPassword' onSubmit={handleSubmit}>
      {
        isLoading ? <div>Chargement ...</div> : <>
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
              <button className={styles.toConnectBtn}>Connexion</button>
          </div>
        </>    
      }
    </form>
  )
}

export default ForgotPassword;