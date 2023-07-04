import { useEffect, useState } from "react";
import styles from "../Login/styles.module.css";

const ForgotPassword = ({exit}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
     setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setIsReset(true);
    setTimeout(() => {
      exit('');
    },10000);
  }

  return (
    <form className={styles.form} data-testid='forgotPassword' onSubmit={handleSubmit}>
      {
        isLoading ? <div>Chargement ...</div> : isReset? 
        <p style={{textAlign: 'center'}}>Un mail de réinitialisation a été envoyer à votre adresse email, si celle-ci est valide</p> :
        <>
          <h2 style={{textAlign: 'center'}}>Réinitialisation du mot de passe</h2>
          <div className={styles.inputDiv}>
              <label className={styles.label}>Email:</label>
              <input
                type="email" placeholder="Entrez votre email"
                className={styles.input}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
          </div>
          <button 
            className={styles.toConnectBtn}
            disabled= { !email.includes('@') }
          >Réinitialiser</button>
        </>    
      }
    </form>
  )
}

export default ForgotPassword;