import Image from "next/image";
import styles from "./styles.module.css";
import exitLogo from '../../public/images/exit.svg';

const Modal = ({children, exit}) => {
  return (<div data-testid="modal" className={styles.modal}>
    <div data-testid='modal-container' className={styles.container}>
    <Image src={exitLogo} alt="Fermer" className={styles.logo} onClick={() => exit('')} />
      {children}
    </div>
  </div>);
}

export default Modal;